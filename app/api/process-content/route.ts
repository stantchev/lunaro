import { type NextRequest, NextResponse } from "next/server"
import { ContentProcessor } from "@/lib/content-processor"

export async function POST(request: NextRequest) {
  try {
    const { category, limit = 5 } = await request.json()

    const newsApiKey = process.env.NEWS_API_KEY
    const wordpressBaseUrl = process.env.WORDPRESS_BASE_URL
    const wordpressUsername = process.env.WORDPRESS_USERNAME
    const wordpressPassword = process.env.WORDPRESS_PASSWORD

    if (!newsApiKey) {
      return NextResponse.json({ error: "NEWS_API_KEY environment variable is required" }, { status: 500 })
    }

    if (!wordpressBaseUrl || !wordpressUsername || !wordpressPassword) {
      return NextResponse.json({ error: "WordPress configuration is required" }, { status: 500 })
    }

    if (!category || !["cybersecurity", "seo"].includes(category)) {
      return NextResponse.json({ error: "Valid category (cybersecurity or seo) is required" }, { status: 400 })
    }

    const processor = new ContentProcessor(newsApiKey, {
      baseUrl: wordpressBaseUrl,
      username: wordpressUsername,
      password: wordpressPassword
    })

    // Use the new method that saves to WordPress
    const processedArticles = await processor.fetchAndProcessLatestNewsWithStorage(category, limit)

    return NextResponse.json({
      status: "success",
      articles: processedArticles,
      count: processedArticles.length,
      message: "Articles processed and saved to WordPress"
    })
  } catch (error) {
    console.error("Error in content processing:", error)
    return NextResponse.json({ error: "Failed to process content" }, { status: 500 })
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const category = searchParams.get("category") || "cybersecurity"
    const limit = Number.parseInt(searchParams.get("limit") || "5")

    const newsApiKey = process.env.NEWS_API_KEY
    if (!newsApiKey) {
      return NextResponse.json({ error: "NEWS_API_KEY environment variable is required" }, { status: 500 })
    }

    if (!["cybersecurity", "seo"].includes(category)) {
      return NextResponse.json({ error: "Valid category (cybersecurity or seo) is required" }, { status: 400 })
    }

    const processor = new ContentProcessor(newsApiKey)
    const processedArticles = await processor.fetchAndProcessLatestNews(category as "cybersecurity" | "seo", limit)

    return NextResponse.json({
      status: "success",
      articles: processedArticles,
      count: processedArticles.length,
    })
  } catch (error) {
    console.error("Error in content processing:", error)
    return NextResponse.json({ error: "Failed to process content" }, { status: 500 })
  }
}
