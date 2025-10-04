import type { Metadata } from "next"
import { Header } from "@/components/header"
import { ArticlesGrid } from "@/components/articles-grid"
import { Footer } from "@/components/footer"
import { CybersecurityHero } from "@/components/cybersecurity-hero"
import { ThreatLevelBanner } from "@/components/threat-level-banner"
import { TrendingSidebar } from "@/components/trending-sidebar"
import { Badge } from "@/components/ui/badge"
import { Shield, TrendingUp, AlertTriangle } from "lucide-react"

export const metadata: Metadata = {
  title: {
    default: "Киберсигурност Новини | Lunaro News",
    template: "%s - Lunaro News",
  },
  description:
    "Последните новини за киберсигурност от Lunaro News – хакерски атаки, киберзащита, иновации и анализи за дигиталната сигурност.",
  keywords:
    "киберсигурност новини, хакери България, кибер атаки, защита на данни, киберсигурност 2025, кибер иновации, дигитална сигурност, Lunaro News",
  authors: [{ name: "Lunaro News" }],
  creator: "Lunaro News",
  publisher: "Lunaro News",
  robots: "index, follow",
  alternates: {
    canonical: "https://lunaro.news/cybersecurity",
  },
  openGraph: {
    type: "website",
    locale: "bg_BG",
    url: "https://lunaro.news/cybersecurity",
    siteName: "Lunaro News",
    title: "Киберсигурност Новини | Lunaro News",
    description:
      "Актуални киберсигурност новини – атаки, защита на данни и експертни анализи от Lunaro News.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Киберсигурност Новини - Lunaro News",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Киберсигурност Новини - Lunaro News",
    description:
      "Последни новини за киберсигурност – хакерски атаки, кибер защита и анализи от Lunaro News.",
    images: ["/og-image.jpg"],
  },
  generator: "Lunaro News",
}

// 🔹 директен fetch от WordPress API (категория ID 3)
async function getCybersecurityArticles() {
  try {
    const response = await fetch(
      `https://lunaro.sofia-today.org/wp-json/wp/v2/posts?categories=3&per_page=6&_embed`,
      { next: { revalidate: 60 } } // ISR: кеш за 60 сек
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
      category: "Киберсигурност",
      publishedAt: article.date,
      urlToImage:
        article._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "/placeholder.svg",
      url: `/article/${article.slug}`,
      author: article._embedded?.author?.[0]?.name || "Автор",
      source: { name: "Lunaro News" },
    }))
  } catch (error) {
    console.error("Error fetching cybersecurity articles:", error)
    return []
  }
}

export default async function CybersecurityPage() {
  const cybersecurityArticles = await getCybersecurityArticles()
  
  const featuredArticle = cybersecurityArticles[0] || null
  const otherArticles = cybersecurityArticles.slice(1)
  
  // Mock trending items for cybersecurity
  const trendingItems = cybersecurityArticles.slice(0, 8).map((article, index) => ({
    id: article.id,
    title: article.translatedTitle || article.title,
    url: article.url,
    category: article.category,
    views: Math.floor(Math.random() * 15000) + 2000,
    publishedAt: article.publishedAt,
    rank: index + 1
  }))

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Cybersecurity Hero */}
      <CybersecurityHero featuredArticle={featuredArticle} />

      {/* Threat Level Banner */}
      <ThreatLevelBanner 
        level="HIGH"
        description="Нарастващи фишинг атаки и ransomware заплахи в региона"
        trendingThreats={["Ransomware", "Phishing", "DDoS атаки"]}
      />

      <main>
        {/* Main Content with Sidebar */}
        <div className="container mx-auto px-4 py-8">
          <div className="grid lg:grid-cols-4 gap-6 lg:gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3 space-y-8 lg:space-y-12">
              {/* Articles */}
              <div id="articles">
                <ArticlesGrid articles={otherArticles} title="Последни новини за киберсигурност" />
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <TrendingSidebar trendingItems={trendingItems} />
            </div>
          </div>
        </div>

        {/* Security Tools Section */}
        <section className="py-16 bg-muted/30 border-y">
          <div className="container mx-auto px-4 text-center space-y-6">
            <Badge variant="secondary" className="px-4 py-2 text-lg">
              Инструменти за защита
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold">
              Защити се с професионални инструменти
            </h2>
            <p className="max-w-2xl mx-auto text-muted-foreground">
              Открий най-добрите инструменти за киберсигурност и защити своя бизнес от дигитални заплахи.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/security-tools" 
                className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                Виж инструментите
              </a>
              <a 
                href="/glossary" 
                className="border border-primary text-primary px-6 py-3 rounded-lg font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                Речник на термините
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
