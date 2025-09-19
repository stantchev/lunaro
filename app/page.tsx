import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ArticlesGrid } from "@/components/articles-grid"
import { NewsletterSignup } from "@/components/newsletter-signup"
import { Footer } from "@/components/footer"
import { SEOHead } from "@/components/seo-head"
import { generateBreadcrumbStructuredData } from "@/lib/seo-utils"
import { Suspense } from "react"

// 🔹 Стабилна функция за fetch от WordPress API
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
          article?.excerpt?.rendered?.replace(/<[^>]*>/g, "") ??
          "Няма описание.",
        translatedDescription:
          article?.excerpt?.rendered?.replace(/<[^>]*>/g, "") ??
          "Няма описание.",
        summary:
          article?.excerpt?.rendered?.replace(/<[^>]*>/g, "") ??
          "Няма описание.",
        category,
        publishedAt: article?.date ?? new Date().toISOString(),
        urlToImage:
          article?._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
          "/placeholder.svg",
        url: `/article/${article?.slug ?? ""}`,
        author: article?._embedded?.author?.[0]?.name ?? "Автор",
        source: {
          name: "Lunaro News",
        },
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

  const articles = await getArticles(6)

  // Последният пост за hero featured
  const latestArticle = articles[0] || null
  // Следващите 3 за "Последни новини"
  const latestThree = articles.slice(1, 4)

  return (
    <div className="min-h-screen bg-background">
      <SEOHead structuredData={breadcrumbData} />
      <Header />

      <main>
        {/* Hero Section */}
        <HeroSection latestArticle={latestArticle} />

        {/* Последни новини */}
        <Suspense
          fallback={<div className="py-12 text-center">Зареждане на статии...</div>}
        >
          <ArticlesGrid articles={latestThree} title="Последни новини" />
        </Suspense>

        <NewsletterSignup />
      </main>

      <Footer />
    </div>
  )
}
