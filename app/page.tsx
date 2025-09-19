import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SEOHead } from "@/components/seo-head"
import { generateBreadcrumbStructuredData } from "@/lib/seo-utils"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Suspense } from "react"
import { ArticlesGrid } from "@/components/articles-grid"

async function getArticles(limit: number = 4) {
  try {
    const response = await fetch(
      `https://lunaro.sofia-today.org/wp-json/wp/v2/posts?per_page=${limit}&orderby=date&order=desc&_embed`,
      { next: { revalidate: 60 } }
    )

    if (!response.ok) return []

    const data = await response.json()

    return data.map((article: any) => ({
      id: article.id.toString(),
      slug: article.slug,
      title: article.title.rendered,
      description: article.excerpt.rendered.replace(/<[^>]*>/g, ""),
      content: article.content.rendered,
      category: article._embedded?.["wp:term"]?.[0]?.[0]?.name || "Без категория",
      publishedAt: article.date,
      urlToImage:
        article._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
        "/placeholder.svg",
      author: article._embedded?.author?.[0]?.name || "Автор",
    }))
  } catch (error) {
    console.error("Error fetching articles:", error)
    return []
  }
}

export default async function HomePage() {
  const breadcrumbData = generateBreadcrumbStructuredData([
    { name: "Начало", url: "https://lunaro.news" },
  ])

  // Взимаме 4 поста: първият е featured, останалите 3 са за "Последни новини"
  const articles = await getArticles(4)
  const featured = articles[0]
  const latest = articles.slice(1, 4)

  return (
    <div className="min-h-screen bg-background">
      <SEOHead structuredData={breadcrumbData} />
      <Header />

      <main>
        {/* Landing секция */}
        <section className="py-20 bg-gradient-to-br from-background to-muted/30">
          <div className="container mx-auto px-6 text-center space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold text-balance">
              Lunaro News – Вашият източник за Киберсигурност, SEO и AI новини
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Открийте най-актуалните новини, анализи и експертни мнения в сферата на 
              дигиталната сигурност, оптимизацията за търсачки и изкуствения интелект.
            </p>
            <Button size="lg" asChild>
              <Link href="/cybersecurity">Започнете от Киберсигурност</Link>
            </Button>
          </div>
        </section>

        {/* Featured пост */}
        {featured && (
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto bg-card rounded-xl shadow-lg overflow-hidden">
                <div className="aspect-[16/9] relative">
                  <Image
                    src={featured.urlToImage}
                    alt={featured.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8 space-y-4">
                  <Badge variant="secondary">{featured.category}</Badge>
                  <h2 className="text-3xl font-bold">{featured.title}</h2>
                  <p className="text-muted-foreground">{featured.description}</p>
                  <Button asChild>
                    <Link href={`/article/${featured.slug}`}>Прочети повече</Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Последни новини */}
        <Suspense fallback={<div className="py-12 text-center">Зареждане...</div>}>
          <ArticlesGrid articles={latest} title="Последни новини" />
        </Suspense>
      </main>

      <Footer />
    </div>
  )
}
