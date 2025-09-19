import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ArticlesGrid } from "@/components/articles-grid"
import { NewsletterSignup } from "@/components/newsletter-signup"
import { Footer } from "@/components/footer"
import { SEOHead } from "@/components/seo-head"
import { generateBreadcrumbStructuredData } from "@/lib/seo-utils"
import { Suspense } from "react"
import { Badge } from "@/components/ui/badge"

// 🔹 Fetch WordPress posts
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
        article?._embedded?.["wp:term"]?.[0]?.[0]?.name ?? "Без категория"

      return {
        id: article?.id?.toString() ?? crypto.randomUUID(),
        slug: article?.slug ?? "",
        title: article?.title?.rendered ?? "Без заглавие",
        translatedTitle: article?.title?.rendered ?? "Без заглавие",
        description:
          article?.excerpt?.rendered?.replace(/<[^>]*>/g, "") ?? "Няма описание.",
        translatedDescription:
          article?.excerpt?.rendered?.replace(/<[^>]*>/g, "") ?? "Няма описание.",
        summary:
          article?.excerpt?.rendered?.replace(/<[^>]*>/g, "") ?? "Няма описание.",
        category,
        publishedAt: article?.date ?? new Date().toISOString(),
        urlToImage:
          article?._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
          "/placeholder.svg",
        url: `/article/${article?.slug ?? ""}`,
        author: article?._embedded?.author?.[0]?.name ?? "Автор",
        source: { name: "Lunaro News" },
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

  const articles = await getArticles(12)

  const latestArticle = articles[0] || null
  const latestThree = articles.slice(1, 4)
  const cybersecurity = articles.filter((a) => a.category === "Киберсигурност").slice(0, 3)
  const seo = articles.filter((a) => a.category === "SEO").slice(0, 3)
  const ai = articles.filter((a) => a.category === "AI").slice(0, 3)

  return (
    <div className="min-h-screen bg-background">
      <SEOHead structuredData={breadcrumbData} />
      <Header />

      <main>
        {/* Hero Section */}
        <HeroSection latestArticle={latestArticle} />

        {/* Последни новини */}
        <Suspense fallback={<div className="py-12 text-center">Зареждане на статии...</div>}>
          <ArticlesGrid articles={latestThree} title="Последни новини" />
        </Suspense>

        {/* Категории */}
        <div className="container mx-auto px-4 py-16 space-y-16">
          {cybersecurity.length > 0 && (
            <ArticlesGrid articles={cybersecurity} title="Киберсигурност" />
          )}
          {seo.length > 0 && (
            <ArticlesGrid articles={seo} title="SEO новини" />
          )}
          {ai.length > 0 && (
            <ArticlesGrid articles={ai} title="AI новини" />
          )}
        </div>

        {/* Highlight Section */}
        <section className="py-16 bg-muted/30 border-y">
          <div className="container mx-auto px-4 text-center space-y-6">
            <Badge variant="secondary" className="px-4 py-2 text-lg">
              Експертни анализи
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold">
              Доверени източници за киберсигурност и технологии
            </h2>
            <p className="max-w-2xl mx-auto text-muted-foreground">
              Lunaro News предоставя задълбочени анализи, актуални новини и прогнози за бъдещето на дигиталния свят.
            </p>
          </div>
        </section>

        {/* Newsletter */}
        <NewsletterSignup />
      </main>

      <Footer />
    </div>
  )
}
