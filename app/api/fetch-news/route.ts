import { type NextRequest, NextResponse } from "next/server"
import { NewsAPIClient } from "@/lib/news-api"
import { OpenAIClient } from "@/lib/openai-client"

export const dynamic = "force-dynamic" // ✅ гарантира, че route-ът ще е динамичен и няма да чупи билда

export async function GET(request: NextRequest) {
  try {
    // ✅ използваме request.nextUrl вместо new URL(request.url)
    const { searchParams } = request.nextUrl
    const category = searchParams.get("category") || "cybersecurity"

    const newsApiKey = process.env.NEWS_API_KEY
    const openaiApiKey = process.env.OPENAI_API_KEY

    if (!newsApiKey) {
      return NextResponse.json(
        { error: "NEWS_API_KEY environment variable is required" },
        { status: 500 }
      )
    }

    const newsClient = new NewsAPIClient(newsApiKey)
    const openaiClient = new OpenAIClient()

    // Fetch articles based on category
    let newsResponse
    if (category === "seo") {
      newsResponse = await newsClient.getSEONews()
    } else {
      newsResponse = await newsClient.getCybersecurityNews()
    }

    // Process and translate articles
    const processedArticles = await Promise.all(
      newsResponse.articles.slice(0, 5).map(async (article) => {
        try {
          const translatedTitle = await openaiClient.translateToBulgarian(article.title)
          const translatedDescription = await openaiClient.translateToBulgarian(article.description || "")
          const summary = await openaiClient.summarizeArticle(
            article.content || article.description || ""
          )

          return {
            ...article,
            translatedTitle,
            translatedDescription,
            summary,
            category: category === "seo" ? "SEO" : "Киберсигурност",
          }
        } catch (error) {
          console.error("Error processing article:", error)
          return {
            ...article,
            translatedTitle: article.title,
            translatedDescription: article.description,
            summary: article.description,
            category: category === "seo" ? "SEO" : "Киберсигурност",
          }
        }
      })
    )

    return NextResponse.json({
      status: "success",
      articles: processedArticles,
    })
  } catch (error) {
    console.error("Error fetching news:", error)
    return NextResponse.json(
      { error: "Failed to fetch news articles" },
      { status: 500 }
    )
  }
}
