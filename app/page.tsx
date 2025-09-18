import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ArticlesGrid } from "@/components/articles-grid"
import { NewsletterSignup } from "@/components/newsletter-signup"
import { Footer } from "@/components/footer"
import { SEOHead } from "@/components/seo-head"
import { generateBreadcrumbStructuredData } from "@/lib/seo-utils"
import { Suspense } from "react"

async function getLatestArticles() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/wordpress-articles?per_page=6`, {
      cache: 'no-store'
    })

    if (!response.ok) {
      return []
    }

    const data = await response.json()
    return data.posts || []
  } catch (error) {
    console.error('Error fetching latest articles:', error)
    return []
  }
}

export default async function HomePage() {
  const breadcrumbData = generateBreadcrumbStructuredData([{ name: "Начало", url: "https://lunaro.news" }])
  const articles = await getLatestArticles()

  // Transform WordPress articles to the format expected by ArticlesGrid
  const transformedArticles = articles.map((article: any) => ({
    id: article.id.toString(),
    title: article.title.rendered,
    translatedTitle: article.title.rendered,
    description: article.excerpt.rendered.replace(/<[^>]*>/g, ''),
    translatedDescription: article.excerpt.rendered.replace(/<[^>]*>/g, ''),
    summary: article.excerpt.rendered.replace(/<[^>]*>/g, ''),
    category: article.meta?.category || "Киберсигурност",
    publishedAt: article.date,
    urlToImage: article.featured_media ? 
      `${process.env.WORDPRESS_BASE_URL}/wp-content/uploads/featured-image-${article.slug}.jpg` : 
      "/placeholder.svg",
    url: `/article/${article.slug}`,
    author: article.meta?.author_name || "Автор",
    source: { 
      name: article.meta?.original_source || "Lunaro News" 
    },
  }))

  return (
    <div className="min-h-screen bg-background">
      <SEOHead structuredData={breadcrumbData} />
      <Header />

      <main>
        <HeroSection />

        <Suspense fallback={<div className="py-12 text-center">Зареждане на статии...</div>}>
          <ArticlesGrid articles={transformedArticles} title="Последни новини" />
        </Suspense>

        <NewsletterSignup />
      </main>

      <Footer />
    </div>
  )
}
