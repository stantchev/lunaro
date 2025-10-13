import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArticlesGrid } from "@/components/articles-grid"
import { TrendingSidebar } from "@/components/trending-sidebar"
import { WorldHero } from "@/components/world-hero"
import { Badge } from "@/components/ui/badge"
import { Globe, TrendingUp, Users, MapPin, Zap } from "lucide-react"

// 🔹 Fetch статии за категория "Светът" от WordPress API
async function getWorldArticles() {
  try {
    const response = await fetch(
      `https://lunaro.sofia-today.org/wp-json/wp/v2/posts?categories=6&per_page=8&_embed`,
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
      category: "Светът",
      publishedAt: article.date,
      urlToImage:
        article._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "/placeholder.jpg",
      url: `/article/${article.slug}`,
      author: article._embedded?.author?.[0]?.name || "Автор",
      source: { name: "Lunaro News" },
    }))
  } catch (error) {
    console.error("Error fetching world articles:", error)
    return []
  }
}

// 🔹 SEO Metadata
export const metadata: Metadata = {
  title: {
    default: "Светът - Глобални новини и анализи | Lunaro News",
    template: "%s - Lunaro News",
  },
  description:
    "Последните световни новини от Lunaro News – глобални тенденции, технологични иновации и анализи за цял свят.",
  keywords:
    "световни новини, глобални тенденции, технологични иновации, киберсигурност, AI, устойчиво развитие, космически технологии, България",
  authors: [{ name: "Lunaro News" }],
  creator: "Lunaro News",
  publisher: "Lunaro News",
  robots: "index, follow",
  alternates: {
    canonical: "https://lunaro.news/world",
  },
  openGraph: {
    type: "website",
    locale: "bg_BG",
    url: "https://lunaro.news/world",
    siteName: "Lunaro News",
    title: "Светът - Глобални новини и анализи | Lunaro News",
    description:
      "Актуални световни новини – глобални тенденции, технологични иновации и анализи от Lunaro News.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Светът - Глобални новини и анализи - Lunaro News",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Светът - Глобални новини и анализи - Lunaro News",
    description:
      "Последни световни новини – глобални тенденции, технологични иновации и анализи от Lunaro News.",
    images: ["/og-image.jpg"],
  },
  generator: "Lunaro News",
}

export default async function WorldPage() {
  const articles = await getWorldArticles()
  
  const featuredArticle = articles[0] || null
  const otherArticles = articles.slice(1)
  
  // Mock trending items for World
  const trendingItems = articles.slice(0, 8).map((article, index) => ({
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

      {/* World Hero */}
      <WorldHero featuredArticle={featuredArticle} />

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
                  title="Последни световни новини и анализи"
                />
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <TrendingSidebar trendingItems={trendingItems} />
            </div>
          </div>
        </div>

        {/* World Trends */}
        <section className="py-16 bg-muted/30 border-y">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-6 mb-12">
              <Badge variant="secondary" className="px-4 py-2 text-lg">
                Световни тенденции
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold">
                Глобални тенденции за 2025
              </h2>
              <p className="max-w-2xl mx-auto text-muted-foreground">
                Ключовите направления в развитието на технологиите и тяхното въздействие върху глобалната икономика.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Киберсигурност в глобалния мащаб",
                "AI революция в различните индустрии",
                "Устойчиво развитие и зелена технология",
                "Космически технологии и изследвания",
                "Климатични технологии и иновации",
                "Глобална дигитална трансформация",
              ].map((trend, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-4 rounded-lg bg-background shadow-sm hover:shadow-md transition-shadow"
                >
                  <Zap className="h-5 w-5 text-blue-500 flex-shrink-0" />
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