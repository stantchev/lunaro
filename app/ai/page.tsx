import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArticlesGrid } from "@/components/articles-grid"
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

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <Badge variant="secondary" className="text-lg px-4 py-2">
                <Brain className="h-4 w-4 mr-2" />
                AI Новини
              </Badge>

              <h1 className="text-4xl lg:text-5xl font-bold text-balance">
                Изкуствен интелект в{" "}
                <span className="text-blue-600">киберсигурността</span> и{" "}
                <span className="text-purple-600">SEO</span>
              </h1>

              <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
                Последните новини, анализи и тенденции за използването на
                изкуствения интелект в областта на киберсигурността и SEO
                оптимизацията
              </p>
            </div>
          </div>
        </section>

        {/* Articles */}
        <ArticlesGrid
          articles={aiArticles}
          title="Последни AI новини и анализи"
        />

        {/* AI Trends */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto text-center space-y-8">
              <h2 className="text-3xl font-bold">AI тенденции за 2025</h2>
              <p className="text-muted-foreground">
                Ключовите направления в развитието на AI технологиите
              </p>

              <div className="grid md:grid-cols-2 gap-6 text-left">
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
                    className="flex items-center space-x-3 p-4 rounded-lg bg-background shadow-sm"
                  >
                    <Zap className="h-5 w-5 text-yellow-500 flex-shrink-0" />
                    <span className="text-sm">{trend}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
