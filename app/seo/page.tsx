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

type Article = {
  id: string
  title: string
  translatedTitle: string
  description: string
  translatedDescription: string
  summary: string
  category: string
  publishedAt: string
  urlToImage: string
  url: string
  author: string
  source: {
    name: string
  }
}

async function getSEOArticles(): Promise<Article[]> {
  try {
    const response = await fetch(
      `${process.env.WORDPRESS_URL}/wp-json/wp/v2/posts?per_page=6`,
      { next: { revalidate: 60 } } // ISR – обновява всеки 60 сек.
    )

    if (!response.ok) throw new Error("WordPress API error")

    const data = await response.json()

    const seoArticles =
      data?.filter(
        (article: any) =>
          article.title?.rendered?.toLowerCase().includes("seo") ||
          article.title?.rendered?.toLowerCase().includes("google") ||
          article.title?.rendered?.toLowerCase().includes("алгоритъм")
      ) || []

    return seoArticles.map((article: any) => ({
      id: article.id.toString(),
      title: article.title.rendered,
      translatedTitle: article.title.rendered,
      description: article.excerpt.rendered.replace(/<[^>]*>/g, ""),
      translatedDescription: article.excerpt.rendered.replace(/<[^>]*>/g, ""),
      summary: article.excerpt.rendered.replace(/<[^>]*>/g, ""),
      category: "SEO",
      publishedAt: article.date,
      urlToImage: article.featured_media
        ? `${process.env.WORDPRESS_URL}/wp-content/uploads/featured-image-${article.slug}.jpg`
        : "/placeholder.svg",
      url: `/article/${article.slug}`,
      author: article.meta?.author_name || "Автор",
      source: { name: article.meta?.original_source || "Lunaro News" },
    }))
  } catch (error) {
    console.error("⚠️ Error fetching SEO articles:", error)

    // fallback dummy постове
    return [
      {
        id: "1",
        title: "Dummy SEO статия",
        translatedTitle: "Dummy SEO статия",
        description: "Това е примерна статия, показана като fallback.",
        translatedDescription: "Това е примерна статия, показана като fallback.",
        summary: "Това е примерна статия, показана като fallback.",
        category: "SEO",
        publishedAt: new Date().toISOString(),
        urlToImage: "/placeholder.svg",
        url: "#",
        author: "Lunaro",
        source: { name: "Lunaro News" },
      },
    ]
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
                Научи най-новите SEO техники, следи алгоритмичните промени на
                Google и подобри позициите на своя сайт в търсачките.
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
                  <div className="text-sm text-muted-foreground">
                    SEO специалисти
                  </div>
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
                Последно обновление: Google March 2025 Core Update - Проверете
                позициите си
              </span>
            </div>
          </div>
        </section>

        {/* Articles */}
        <ArticlesGrid
          articles={seoArticles}
          title="Последни SEO новини и анализи"
        />

        {/* SEO Categories */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8 text-center">
              SEO категории
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center space-y-3 p-6 rounded-lg bg-background hover:shadow-md transition-shadow">
                <Search className="h-8 w-8 text-primary mx-auto" />
                <h3 className="font-semibold">Ключови думи</h3>
                <p className="text-sm text-muted-foreground">
                  Изследване и оптимизация
                </p>
              </div>
              <div className="text-center space-y-3 p-6 rounded-lg bg-background hover:shadow-md transition-shadow">
                <BarChart3 className="h-8 w-8 text-secondary mx-auto" />
                <h3 className="font-semibold">Анализи</h3>
                <p className="text-sm text-muted-foreground">
                  SEO метрики и данни
                </p>
              </div>
              <div className="text-center space-y-3 p-6 rounded-lg bg-background hover:shadow-md transition-shadow">
                <Target className="h-8 w-8 text-accent mx-auto" />
                <h3 className="font-semibold">Стратегии</h3>
                <p className="text-sm text-muted-foreground">
                  Дългосрочни планове
                </p>
              </div>
              <div className="text-center space-y-3 p-6 rounded-lg bg-background hover:shadow-md transition-shadow">
                <TrendingUp className="h-8 w-8 text-primary mx-auto" />
                <h3 className="font-semibold">Тенденции</h3>
                <p className="text-sm text-muted-foreground">
                  Бъдещето на SEO
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
