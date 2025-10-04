import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArticlesGrid } from "@/components/articles-grid"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, TrendingUp, BarChart3, Users, Award, BookOpen, Target, Zap, Shield } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: {
    default: "Анализи и проучвания - Lunaro News | Киберсигурност и SEO анализи",
    template: "%s - Lunaro News",
  },
  description:
    "Анализи и проучвания от Lunaro News – задълбочени данни, експертни мнения и стратегии за киберсигурност и SEO оптимизация в България.",
  keywords:
    "анализи киберсигурност, SEO проучвания, SEO анализи България, кибер атаки анализ, дигитални проучвания, SEO стратегии, Lunaro News анализи, сигурност и SEO данни",
  authors: [{ name: "Lunaro News" }],
  creator: "Lunaro News",
  publisher: "Lunaro News",
  robots: "index, follow",
  alternates: {
    canonical: "https://lunaro.news/analizi",
  },
  openGraph: {
    type: "website",
    locale: "bg_BG",
    url: "https://lunaro.news/analizi",
    siteName: "Lunaro News",
    title: "Анализи и проучвания - Lunaro News",
    description:
      "Експертни анализи и проучвания в областта на киберсигурността и SEO. Данни, изводи и стратегии за бизнеса.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Анализи и проучвания - Lunaro News",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Анализи и проучвания - Lunaro News",
    description:
      "Анализи и проучвания от Lunaro News – експертни мнения и стратегии за киберсигурност и SEO.",
    images: ["/og-image.jpg"],
  },
  generator: "Lunaro News",
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
        <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-950/20 dark:via-indigo-950/20 dark:to-purple-950/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <Badge variant="secondary" className="text-lg px-6 py-3 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-950/30 dark:to-indigo-950/30 border-blue-200 dark:border-blue-800">
                <BarChart3 className="h-5 w-5 mr-2 text-blue-600" />
                Анализи и проучвания
              </Badge>

              <h1 className="text-5xl lg:text-6xl font-bold text-balance bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Задълбочени анализи и експертни мнения
              </h1>

              <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto leading-relaxed">
                Открийте най-актуалните тенденции и статистики в областта на
                киберсигурността и SEO оптимизацията
              </p>

              <div className="flex flex-wrap gap-4 justify-center mt-8">
                <div className="flex items-center gap-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-blue-200 dark:border-blue-800">
                  <TrendingUp className="h-5 w-5 text-green-600" />
                  <span className="font-medium">Актуални данни</span>
                </div>
                <div className="flex items-center gap-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-blue-200 dark:border-blue-800">
                  <Shield className="h-5 w-5 text-blue-600" />
                  <span className="font-medium">Експертни анализи</span>
                </div>
                <div className="flex items-center gap-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-blue-200 dark:border-blue-800">
                  <Award className="h-5 w-5 text-purple-600" />
                  <span className="font-medium">Професионални инсайди</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Articles */}
        <ArticlesGrid
          articles={analysisArticles}
          title="Последни анализи и проучвания"
        />

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-muted/30 via-muted/20 to-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-950/30 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-full text-sm font-medium">
                <Calendar className="h-4 w-4" />
                Персонализирани анализи
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-balance">
                Искате персонализиран анализ?
              </h2>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Нашият екип може да подготви специализиран анализ за вашия бизнес
                или организация
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg" asChild>
                  <Link href="/contact">
                    Свържете се с нас
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-2 hover:bg-blue-50 dark:hover:bg-blue-950/20" asChild>
                  <Link href="/services">
                    Нашите услуги
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}