import { type NextRequest, NextResponse } from "next/server"
import { WordPressClient } from "@/lib/wordpress-client"

export const dynamic = "force-dynamic" // винаги динамично

// Fallback масив (примерни статии)
const fallbackPosts = [
  {
    id: "1",
    title: { rendered: "Примерна SEO статия" },
    excerpt: { rendered: "Това е fallback excerpt за статията." },
    slug: "primerna-seo-statia",
    date: "2025-09-01T12:00:00",
    meta: { author_name: "Fallback Автор", category: "SEO" },
    featured_media: null,
  },
  {
    id: "2",
    title: { rendered: "Google Update 2025 – какво се промени" },
    excerpt: { rendered: "Обобщение на последния Google Core Update." },
    slug: "google-update-2025",
    date: "2025-09-05T12:00:00",
    meta: { author_name: "Fallback Автор", category: "SEO" },
    featured_media: null,
  },
]

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = request.nextUrl
    const page = parseInt(searchParams.get("page") || "1")
    const perPage = parseInt(searchParams.get("per_page") || "10")
    const slug = searchParams.get("slug")

    const wordpressBaseUrl = process.env.WORDPRESS_BASE_URL
    const wordpressUsername = process.env.WORDPRESS_USERNAME
    const wordpressPassword = process.env.WORDPRESS_PASSWORD

    if (!wordpressBaseUrl || !wordpressUsername || !wordpressPassword) {
      // ❌ ако няма конфигурация -> fallback
      return NextResponse.json({
        status: "fallback",
        posts: fallbackPosts.slice(0, perPage),
        pagination: {
          page,
          per_page: perPage,
          total_pages: 1,
          total: fallbackPosts.length,
        },
      })
    }

    const wordpressClient = new WordPressClient(
      wordpressBaseUrl,
      wordpressUsername,
      wordpressPassword
    )

    if (slug) {
      const post = await wordpressClient.getPostBySlug(slug)
      if (!post) {
        return NextResponse.json({ error: "Post not found" }, { status: 404 })
      }
      return NextResponse.json({ post })
    }

    const result = await wordpressClient.getPosts({
      page,
      per_page: perPage,
      status: "publish",
    })

    return NextResponse.json({
      status: "success",
      posts: result.posts,
      pagination: {
        page,
        per_page: perPage,
        total_pages: result.totalPages,
        total: result.total,
      },
    })
  } catch (error) {
    console.error("Error fetching WordPress articles:", error)
    // ❌ при грешка -> fallback
    return NextResponse.json({
      status: "fallback",
      posts: fallbackPosts,
      pagination: {
        page: 1,
        per_page: fallbackPosts.length,
        total_pages: 1,
        total: fallbackPosts.length,
      },
    })
  }
}
