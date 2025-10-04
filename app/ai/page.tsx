import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArticlesGrid } from "@/components/articles-grid"
import { AIHero } from "@/components/ai-hero"
import { TrendingSidebar } from "@/components/trending-sidebar"
import { Badge } from "@/components/ui/badge"
import { Brain, Search, Shield, TrendingUp, Zap } from "lucide-react"

export const metadata: Metadata = {
  title: {
    default: "AI Новини - Lunaro News",
    template: "%s - Lunaro News",
  },
  description:
    "AI новини и анализи от Lunaro News – следете последните тенденции в изкуствения интелект, машинното обучение и бъдещето на технологиите.",
  keywords:
    "AI новини, изкуствен интелект, машинно обучение, технологии България, AI тенденции, бъдеще на AI, автоматизация, киберсигурност и AI, SEO и AI, Lunaro News",
  authors: [{ name: "Lunaro News" }],
  creator: "Lunaro News",
  publisher: "Lunaro News",
  robots: "index, follow",
  alternates: {
    canonical: "https://lunaro.news/ai",
  },
  openGraph: {
    type: "website",
    locale: "bg_BG",
    url: "https://lunaro.news/ai",
    siteName: "Lunaro News",
    title: "AI Новини - Lunaro News",
    description:
      "Последните AI новини и експертни анализи – изкуствен интелект, машинно обучение и бъдещето на технологиите.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AI Новини - Lunaro News",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Новини - Lunaro News",
    description:
      "AI новини и анализи от Lunaro News – всичко за изкуствения интелект и неговото бъдеще.",
    images: ["/og-image.jpg"],
  },
  generator: "Lunaro News",
}

async function getAIArticles() {
  try {
    const response = await fetch(
      `https://lunaro.sofia-today.org/wp-json/wp/v2/posts?categories=4&per_page=6&_embed`,
      { next: { revalidate: 60 } }
    )

    if (!response.ok) {
      console.error("WordPress API error:", response.statusText)
      return []
    }

    const data = await response.json()

    return data.map((article: any) => ({
      id: article.id.toString(),
      title: article.title.rendered,
      translatedTitle: article.title.rendered,
      description: article.excerpt.rendered.replace(/<[^>]*>/g, ""),
      translatedDescription: article.excerpt.rendered.replace(/<[^>]*>/g, ""),
      summary: article.excerpt.rendered.replace(/<[^>]*>/g, ""),
      category: "AI",
      publishedAt: article.date,
      urlToImage:
        article._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
        "/placeholder.svg",
      url: `/article/${article.slug}`,
      author: article._embedded?.author?.[0]?.name || "Автор",
      source: {
        name: "Lunaro News",
      },
    }))
  } catch (error) {
    console.error("Error fetching AI articles:", error)
    return []
  }
}

export default async function AINewsPage() {
  const aiArticles = await getAIArticles()
  
  const featuredArticle = aiArticles[0] || null
  const otherArticles = aiArticles.slice(1)
  
  // Mock trending items for AI
  const trendingItems = aiArticles.slice(0, 8).map((article, index) => ({
    id: article.id,
    title: article.translatedTitle || article.title,
    url: article.url,
    category: article.category,
    views: Math.floor(Math.random() * 18000) + 3000,
    publishedAt: article.publishedAt,
    rank: index + 1
  }))

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* AI Hero */}
      <AIHero featuredArticle={featuredArticle} />

      <main>
        {/* Main Content with Sidebar */}
        <div className="container mx-auto px-4 py-8">
          <div className="grid lg:grid-cols-4 gap-6 lg:gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3 space-y-8 lg:space-y-12">
              {/* Articles */}
              <div id="articles">
                <ArticlesGrid
                  articles={otherArticles}
                  title="Последни AI новини и анализи"
                />
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <TrendingSidebar trendingItems={trendingItems} />
            </div>
          </div>
        </div>

        {/* AI Trends */}
        <section className="py-16 bg-muted/30 border-y">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-6 mb-12">
              <Badge variant="secondary" className="px-4 py-2 text-lg">
                AI Тенденции
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold">
                AI тенденции за 2025
              </h2>
              <p className="max-w-2xl mx-auto text-muted-foreground">
                Ключовите направления в развитието на AI технологиите и тяхното въздействие върху киберсигурността и SEO.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Генеративен AI за създаване на SEO съдържание",
                "AI-базирано откриване на кибератаки",
                "Автоматизирана SEO оптимизация с машинно обучение",
                "AI асистенти за анализ на уязвимости",
                "Персонализирано съдържание с AI",
                "Предиктивна киберсигурност с AI",
              ].map((trend, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-4 rounded-lg bg-background shadow-sm hover:shadow-md transition-shadow"
                >
                  <Zap className="h-5 w-5 text-yellow-500 flex-shrink-0" />
                  <span className="text-sm">{trend}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
