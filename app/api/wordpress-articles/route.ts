import { type NextRequest, NextResponse } from "next/server"
import { WordPressClient } from "@/lib/wordpress-client"

// Кажи на Next, че route-ът винаги е динамичен
export const dynamic = "force-dynamic"

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = request.nextUrl

    const page = parseInt(searchParams.get("page") || "1")
    const perPage = parseInt(searchParams.get("per_page") || "10")
    const category = searchParams.get("category")
    const search = searchParams.get("search")
    const slug = searchParams.get("slug")

    const wordpressBaseUrl = process.env.WORDPRESS_BASE_URL
    const wordpressUsername = process.env.WORDPRESS_USERNAME
    const wordpressPassword = process.env.WORDPRESS_PASSWORD

    if (!wordpressBaseUrl || !wordpressUsername || !wordpressPassword) {
      return NextResponse.json({ error: "WordPress configuration is required" }, { status: 500 })
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
      search,
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
    return NextResponse.json({ error: "Failed to fetch articles" }, { status: 500 })
  }
}
