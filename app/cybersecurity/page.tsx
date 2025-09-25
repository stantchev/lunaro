import type { Metadata } from "next"
import { Header } from "@/components/header"
import { ArticlesGrid } from "@/components/articles-grid"
import { Footer } from "@/components/footer"
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

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Page Header */}
        <section className="py-16 bg-gradient-to-br from-background to-muted/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <div className="flex items-center justify-center space-x-2">
                <Shield className="h-8 w-8 text-primary" />
                <Badge variant="secondary" className="text-lg px-4 py-2">
                  Киберсигурност
                </Badge>
              </div>

              <h1 className="text-4xl lg:text-5xl font-bold text-balance">
                Новини за киберсигурност
              </h1>

              <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
                Следи най-актуалните заплахи, уязвимости и защитни мерки в киберпространството.
                Експертни анализи и препоръки за защита на данните.
              </p>
            </div>
          </div>
        </section>

        {/* Threat Level Alert */}
        <section className="py-6 bg-destructive/10 border-y border-destructive/20">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center space-x-3 text-destructive">
              <AlertTriangle className="h-5 w-5" />
              <span className="font-medium">
                Текущо ниво на заплаха: СРЕДНО - Нарастващи фишинг атаки в региона
              </span>
            </div>
          </div>
        </section>

        {/* Articles */}
        <ArticlesGrid articles={cybersecurityArticles} title="Последни новини за киберсигурност" />
      </main>

      <Footer />
    </div>
  )
}
