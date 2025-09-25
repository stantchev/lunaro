import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArticlesGrid } from "@/components/articles-grid"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Анализи и проучвания - Lunaro News | Киберсигурност и SEO анализи",
  description:
    "Задълбочени анализи и проучвания в областта на киберсигурността и SEO оптимизацията. Експертни мнения, статистики и тенденции за 2025 година.",
  keywords:
    "анализи, проучвания, киберсигурност анализи, SEO анализи, статистики, тенденции 2025, експертни мнения, България",
  openGraph: {
    title: "Анализи и проучвания - Lunaro News",
    description:
      "Задълбочени анализи и проучвания в областта на киберсигурността и SEO оптимизацията",
    url: "https://lunaro.news/analysis",
    siteName: "Lunaro News",
    locale: "bg_BG",
    type: "website",
  },
  alternates: {
    canonical: "https://lunaro.news/analysis",
  },
}

async function getAnalysisArticles() {
  try {
    const response = await fetch(
      `https://lunaro.sofia-today.org/wp-json/wp/v2/posts?categories=5&per_page=6&_embed`,
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
      category: "Анализи",
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
    console.error("Error fetching analysis articles:", error)
    return []
  }
}

export default async function AnalysisPage() {
  const analysisArticles = await getAnalysisArticles()

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-background to-muted/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <Badge variant="secondary" className="text-lg px-4 py-2">
                Анализи и проучвания
              </Badge>

              <h1 className="text-4xl lg:text-5xl font-bold text-balance">
                Задълбочени анализи и експертни мнения
              </h1>

              <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
                Открийте най-актуалните тенденции и статистики в областта на
                киберсигурността и SEO оптимизацията
              </p>
            </div>
          </div>
        </section>

        {/* Articles */}
        <ArticlesGrid
          articles={analysisArticles}
          title="Последни анализи и проучвания"
        />

        {/* CTA Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h2 className="text-3xl font-bold">Искате персонализиран анализ?</h2>
              <p className="text-muted-foreground text-lg">
                Нашият екип може да подготви специализиран анализ за вашия бизнес
                или организация
              </p>
              <Button size="lg" asChild>
                <Link href="/contact">
                  Свържете се с нас
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
