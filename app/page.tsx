import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ArticlesGrid } from "@/components/articles-grid"
import { NewsletterSignup } from "@/components/newsletter-signup"
import { Footer } from "@/components/footer"
import { SEOHead } from "@/components/seo-head"
import { generateBreadcrumbStructuredData } from "@/lib/seo-utils"
import { Suspense } from "react"
import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Clock } from "lucide-react"

// 🔹 Fetch всички статии от WP
async function getArticles(limit: number = 6) {
  try {
    const response = await fetch(
      `https://lunaro.sofia-today.org/wp-json/wp/v2/posts?per_page=${limit}&orderby=date&order=desc&_embed`,
      { next: { revalidate: 60 } }
    )

    if (!response.ok) return []

    const data = await response.json()

    return data.map((article: any) => {
      const category =
        article._embedded?.["wp:term"]?.[0]?.[0]?.name || "Без категория"

      return {
        id: article.id.toString(),
        slug: article.slug,
        title: article.title.rendered,
        description: article.excerpt.rendered.replace(/<[^>]*>/g, ""),
        content: article.content.rendered,
        category,
        publishedAt: article.date,
        urlToImage:
          article._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
          "/placeholder.svg",
        author: article._embedded?.author?.[0]?.name || "Автор",
      }
    })
  } catch (error) {
    console.error("Error fetching articles:", error)
    return []
  }
}

export default async function HomePage() {
  const breadcrumbData = generateBreadcrumbStructuredData([
    { name: "Начало", url: "https://lunaro.news" },
  ])

  const articles = await getArticles(10)

  const latestArticle = articles[0] || null
  const recentArticles = articles.slice(1, 4) // последните 3 след featured

  return (
    <div className="min-h-screen bg-background">
      <SEOHead structuredData={breadcrumbData} />
      <Header />

      <main>
        {/* 🔹 Landing Section */}
        {latestArticle && (
          <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20">
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <Badge variant="secondary">{latestArticle.category}</Badge>
                  <h1
                    className="text-4xl lg:text-5xl font-bold leading-tight"
                    dangerouslySetInnerHTML={{ __html: latestArticle.title }}
                  />
                  <p className="text-lg text-muted-foreground">
                    {latestArticle.description}
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <span className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>
                        {new Date(
                          latestArticle.publishedAt
                        ).toLocaleDateString("bg-BG", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </span>
                    </span>
                    <span>от {latestArticle.author}</span>
                  </div>
                  <Link
                    href={`/article/${latestArticle.slug}`}
                    className="inline-block px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition"
                  >
                    Прочети повече
                  </Link>
                </div>

                <div className="relative aspect-[16/9] rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src={latestArticle.urlToImage}
                    alt={latestArticle.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </section>
        )}

        {/* 🔹 Последни новини */}
        <Suspense
          fallback={<div className="py-12 text-center">Зареждане на статии...</div>}
        >
          <ArticlesGrid
            articles={recentArticles}
            title="Последни новини"
          />
        </Suspense>

        <NewsletterSignup />
      </main>

      <Footer />
    </div>
  )
}
