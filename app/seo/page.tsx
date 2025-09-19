import type { Metadata } from "next"
import { Header } from "@/components/header"
import { ArticlesGrid } from "@/components/articles-grid"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Search, BarChart3, Target } from "lucide-react"

export const metadata: Metadata = {
  title: "SEO Новини - Lunaro News",
  description: "Най-новите SEO техники, алгоритмични промени и стратегии за подобряване на позициите в Google.",
  keywords: "SEO, оптимизация, Google, алгоритъм, ключови думи, SERP, България, SEO Новини",
  openGraph: {
    title: "SEO Новини - Lunaro News",
    description: "Най-новите SEO техники и стратегии за подобряване на позициите в Google.",
    type: "website",
  },
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

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Page Header */}
        <section className="py-16 bg-gradient-to-br from-background to-muted/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <div className="flex items-center justify-center space-x-2">
                <TrendingUp className="h-8 w-8 text-primary" />
                <Badge variant="secondary" className="text-lg px-4 py-2">
                  SEO Оптимизация
                </Badge>
              </div>

              <h1 className="text-4xl lg:text-5xl font-bold text-balance">
                SEO новини и стратегии
              </h1>

              <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
                Научи най-новите SEO техники, следи алгоритмичните промени на Google и подобри позициите на своя сайт в търсачките.
              </p>

              {/* SEO Metrics */}
              <div className="grid grid-cols-3 gap-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">200+</div>
                  <div className="text-sm text-muted-foreground">SEO съвета</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">95%</div>
                  <div className="text-sm text-muted-foreground">Точност</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">10K+</div>
                  <div className="text-sm text-muted-foreground">SEO специалисти</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Google Update Alert */}
        <section className="py-6 bg-secondary/10 border-y border-secondary/20">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center space-x-3 text-secondary-foreground">
              <Search className="h-5 w-5" />
              <span className="font-medium">
                Последно обновление: Google March 2025 Core Update - Проверете позициите си
              </span>
            </div>
          </div>
        </section>

        {/* Articles */}
        <ArticlesGrid articles={seoArticles} title="Последни SEO новини и анализи" />

        {/* SEO Categories */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8 text-center">SEO категории</h2>
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
