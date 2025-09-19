import { type NextRequest, NextResponse } from "next/server"

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

    if (!wordpressBaseUrl) {
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

    let url = `${wordpressBaseUrl}/posts?per_page=${perPage}&page=${page}&_embed`

    if (slug) {
      url = `${wordpressBaseUrl}/posts?slug=${slug}&_embed`
    }

    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    })

    if (!response.ok) {
      throw new Error(`WordPress API error: ${response.status}`)
    }

    const posts = await response.json()
    const totalPages = response.headers.get("X-WP-TotalPages") || 1
    const total = response.headers.get("X-WP-Total") || posts.length

    return NextResponse.json({
      status: "success",
      posts,
      pagination: {
        page,
        per_page: perPage,
        total_pages: Number(totalPages),
        total: Number(total),
      },
    })
  } catch (error) {
    console.error("Error fetching WordPress articles:", error)
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
