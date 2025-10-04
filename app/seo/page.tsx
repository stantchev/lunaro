import type { Metadata } from "next"
import { Header } from "@/components/header"
import { ArticlesGrid } from "@/components/articles-grid"
import { Footer } from "@/components/footer"
import { SEOHero } from "@/components/seo-hero"
import { TrendingSidebar } from "@/components/trending-sidebar"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Search, BarChart3, Target } from "lucide-react"

export const metadata: Metadata = {
  title: {
    default: "SEO Новини - Lunaro News",
    template: "%s - Lunaro News",
  },
  description:
    "Последните SEO новини от Lunaro News – алгоритми на Google, стратегии за оптимизация и експертни съвети за дигитален успех.",
  keywords:
    "SEO новини, Google алгоритъм, оптимизация за търсачки, SEO България, дигитален маркетинг, SEO анализи, SEO стратегии, Lunaro News",
  authors: [{ name: "Lunaro News" }],
  creator: "Lunaro News",
  publisher: "Lunaro News",
  robots: "index, follow",
  alternates: {
    canonical: "https://lunaro.news/seo",
  },
  openGraph: {
    type: "website",
    locale: "bg_BG",
    url: "https://lunaro.news/seo",
    siteName: "Lunaro News",
    title: "SEO Новини - Lunaro News",
    description:
      "Актуални SEO новини – Google алгоритми, оптимизация и експертни съвети за дигитален растеж от Lunaro News.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SEO Новини - Lunaro News",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO Новини - Lunaro News",
    description:
      "Lunaro News предлага последни SEO новини, анализи и експертни насоки за оптимизация и Google алгоритми.",
    images: ["/og-image.jpg"],
  },
  generator: "Lunaro News",
}

async function getSEOArticles() {
  try {
    const response = await fetch(
      `https://lunaro.sofia-today.org/wp-json/wp/v2/posts?categories=2&per_page=6&_embed`,
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
      category: "SEO",
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
    console.error("Error fetching SEO articles:", error)
    return []
  }
}

export default async function SEOPage() {
  const seoArticles = await getSEOArticles()
  
  const featuredArticle = seoArticles[0] || null
  const otherArticles = seoArticles.slice(1)
  
  // Mock trending items for SEO
  const trendingItems = seoArticles.slice(0, 8).map((article, index) => ({
    id: article.id,
    title: article.translatedTitle || article.title,
    url: article.url,
    category: article.category,
    views: Math.floor(Math.random() * 12000) + 1500,
    publishedAt: article.publishedAt,
    rank: index + 1
  }))

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* SEO Hero */}
      <SEOHero featuredArticle={featuredArticle} />

      {/* Google Update Alert */}
      <section className="py-4 bg-blue-50 border-y border-blue-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center space-x-3 text-blue-800">
            <Search className="h-5 w-5" />
            <span className="font-medium">
              Последно обновление: Google March 2025 Core Update - Проверете позициите си
            </span>
          </div>
        </div>
      </section>

      <main>
        {/* Main Content with Sidebar */}
        <div className="container mx-auto px-4 py-8">
          <div className="grid lg:grid-cols-4 gap-6 lg:gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3 space-y-8 lg:space-y-12">
              {/* Articles */}
              <div id="articles">
                <ArticlesGrid articles={otherArticles} title="Последни SEO новини и анализи" />
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <TrendingSidebar trendingItems={trendingItems} />
            </div>
          </div>
        </div>

        {/* SEO Categories */}
        <section className="py-16 bg-muted/30 border-y">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-6 mb-12">
              <Badge variant="secondary" className="px-4 py-2 text-lg">
                SEO Категории
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold">
                Всичко за SEO оптимизацията
              </h2>
              <p className="max-w-2xl mx-auto text-muted-foreground">
                Открий най-добрите SEO техники, инструменти и стратегии за успех в търсачките.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center space-y-3 p-6 rounded-lg bg-background hover:shadow-md transition-shadow">
                <Search className="h-8 w-8 text-primary mx-auto" />
                <h3 className="font-semibold">Ключови думи</h3>
                <p className="text-sm text-muted-foreground">Изследване и оптимизация</p>
              </div>
              <div className="text-center space-y-3 p-6 rounded-lg bg-background hover:shadow-md transition-shadow">
                <BarChart3 className="h-8 w-8 text-secondary mx-auto" />
                <h3 className="font-semibold">Анализи</h3>
                <p className="text-sm text-muted-foreground">SEO метрики и данни</p>
              </div>
              <div className="text-center space-y-3 p-6 rounded-lg bg-background hover:shadow-md transition-shadow">
                <Target className="h-8 w-8 text-accent mx-auto" />
                <h3 className="font-semibold">Стратегии</h3>
                <p className="text-sm text-muted-foreground">Дългосрочни планове</p>
              </div>
              <div className="text-center space-y-3 p-6 rounded-lg bg-background hover:shadow-md transition-shadow">
                <TrendingUp className="h-8 w-8 text-primary mx-auto" />
                <h3 className="font-semibold">Тенденции</h3>
                <p className="text-sm text-muted-foreground">Бъдещето на SEO</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
