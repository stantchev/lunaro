import type { Metadata } from "next"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ArticlesGrid } from "@/components/articles-grid"
import { NewsletterSignup } from "@/components/newsletter-signup"
import { Footer } from "@/components/footer"
import { SEOHead } from "@/components/seo-head"
import { BreakingNewsBanner } from "@/components/breaking-news-banner"
import { NewsTicker } from "@/components/news-ticker"
import { TrendingSidebar } from "@/components/trending-sidebar"
import { generateBreadcrumbStructuredData } from "@/lib/seo-utils"
import { Suspense } from "react"
import { Badge } from "@/components/ui/badge"
import Script from "next/script"

export const metadata: Metadata = {
  title: {
    default: "Lunaro News | Технологични, киберсигурност и AI новини",
    template: "%s - Lunaro News",
  },
  description:
    "Ежедневни технологични новини за България – киберсигурност, AI, SEO и глобални тенденции. Lunaro News е довереният източник за дигиталните екипи.",
  keywords:
    "технологични новини, технологични новини България, киберсигурност новини, AI новини, SEO новини, Lunaro News",
  alternates: {
    canonical: "https://lunaro.news",
  },
  openGraph: {
    type: "website",
    locale: "bg_BG",
    url: "https://lunaro.news",
    siteName: "Lunaro News",
    title: "Lunaro News | Технологични, киберсигурност и AI новини",
    description:
      "Проследявайте киберсигурност, SEO и AI тенденции в България – анализи и breaking stories от Lunaro News.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Lunaro News - технологични новини",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lunaro News | Технологични и AI новини",
    description:
      "Един източник за киберсигурност, SEO и технологични новини в България – Lunaro News.",
    images: ["/og-image.jpg"],
  },
}

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

// 🔹 Fetch latest article from category ID 7
async function getLatestArticleFromCategory7() {
  try {
    const response = await fetch(
      `https://lunaro.sofia-today.org/wp-json/wp/v2/posts?categories=7&per_page=1&orderby=date&order=desc&_embed`,
      { next: { revalidate: 60 } }
    )

    if (!response.ok) return null

    const data = await response.json()
    
    if (!data || data.length === 0) return null

    const article = data[0]
    const category = article?._embedded?.["wp:term"]?.[0]?.[0]?.name ?? "Без категория"

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
  } catch (error) {
    console.error("Error fetching latest article from category 7:", error)
    return null
  }
}

export default async function HomePage() {
  const breadcrumbData = generateBreadcrumbStructuredData([
    { name: "Начало", url: "https://lunaro.news" },
  ])

  // Fetch latest article from category 7 for hero section
  const heroArticle = await getLatestArticleFromCategory7()
  
  // Fetch regular articles for other sections
  const articles = await getArticles(12)

  type HomepageArticle = Awaited<ReturnType<typeof getArticles>>[number]

  const latestArticle = articles[0] || null
  const latestThree = articles.slice(1, 4)
  const cybersecurity = articles.filter((a: HomepageArticle) => a.category === "Киберсигурност").slice(0, 3)
  const seo = articles.filter((a: HomepageArticle) => a.category === "SEO").slice(0, 3)
  const ai = articles.filter((a: HomepageArticle) => a.category === "AI").slice(0, 3)
  
  // Mock data for trending items

  const trendingItems = articles.slice(0, 10).map((article: HomepageArticle, index: number) => ({
    id: article.id,
    title: article.translatedTitle || article.title,
    url: article.url,
    category: article.category,
    views: Math.floor(Math.random() * 10000) + 1000,
    publishedAt: article.publishedAt,
    rank: index + 1
  }))
  
  // Mock breaking news
  const breakingNews = latestArticle ? [{
    title: latestArticle.translatedTitle || latestArticle.title,
    url: latestArticle.url,
    publishedAt: latestArticle.publishedAt
  }] : []
  
  // Mock news ticker
  const newsTicker = articles.slice(0, 5).map((article: HomepageArticle) => ({
    title: article.translatedTitle || article.title,
    url: article.url,
    category: article.category
  }))

  const faqItems = [
    {
      question: "Какви новини публикува Lunaro News?",
      answer:
        "Покриваме технологии, киберсигурност, SEO и AI тенденции с локален фокус към българските екипи и бизнеси.",
    },
    {
      question: "Колко често се обновява началната страница?",
      answer:
        "Новините се опресняват няколко пъти дневно, а най-важните истории влизат в хедлайна и breaking секцията.",
    },
    {
      question: "За кого е полезен Lunaro News?",
      answer:
        "За маркетинг специалисти, ИТ лидери и предприемачи, които искат един източник за технологични новини в България.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <SEOHead structuredData={breadcrumbData} />
      <Header />

      <Script
        id="homepage-faq-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqItems.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.answer,
              },
            })),
          }),
        }}
      />

      {/* Breaking News Banner */}
      <BreakingNewsBanner breakingNews={breakingNews} />

      {/* News Ticker */}
      <NewsTicker news={newsTicker} />

      {/* Hero Section - главната новина под breaking и трендове */}
      <HeroSection latestArticle={heroArticle} />

      {/* Intro Section */}
      <section className="bg-muted/30 border-y">
        <div className="container mx-auto px-4 py-10 space-y-6">
          <Badge variant="outline" className="w-fit">
            Технологични новини България
          </Badge>
          <h1 className="text-3xl lg:text-4xl font-bold leading-tight max-w-3xl">
            Lunaro News – технологични, киберсигурност и AI новини за българските екипи
          </h1>
          <p className="text-muted-foreground text-lg max-w-3xl">
            Началната страница комбинира <strong>технологични новини България</strong>, глобални тенденции и практични
            анализи. Подбираме историите, които движат дигиталния сектор – от регулации и кибер атаки до SEO и AI пробиви.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Киберсигурност & регулации",
                description: "Следим инциденти, регулатори и реакциите на българския бизнес.",
              },
              {
                title: "SEO & дигитални стратегии",
                description: "Обясняваме Google обновленията и ефекта им върху локалните SERP-и.",
              },
              {
                title: "AI & автоматизация",
                description: "Показваме как българските компании внедряват генеративен AI и ML решения.",
              },
            ].map((item) => (
              <div key={item.title} className="p-6 rounded-xl bg-background shadow border">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <main>
        {/* Main Content with Sidebar */}
        <div className="container mx-auto px-4 py-8">
          <div className="grid lg:grid-cols-4 gap-6 lg:gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3 space-y-8 lg:space-y-12">
              {/* Последни новини */}
              <div id="latest">
                <Suspense fallback={<div className="py-12 text-center">Зареждане на статии...</div>}>
                  <ArticlesGrid articles={latestThree} title="Последни новини" />
                </Suspense>
              </div>

              {/* Категории */}
              <div className="space-y-16">
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
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <TrendingSidebar trendingItems={trendingItems} />
            </div>
          </div>
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

        {/* FAQ Section */}
        <section className="container mx-auto px-4 py-16 space-y-8">
          <div className="max-w-3xl">
            <Badge variant="outline" className="mb-4">
              Често задавани въпроси
            </Badge>
            <h2 className="text-3xl font-bold mb-4">FAQ: Lunaro News – технологични новини България</h2>
            <p className="text-muted-foreground">
              Тук отговаряме на най-честите въпроси от читатели, които следят <strong>технологични новини</strong> и
              киберсигурност теми.
            </p>
          </div>
          <div className="space-y-6">
            {faqItems.map((item) => (
              <div key={item.question} className="p-6 rounded-2xl border bg-background shadow-sm">
                <h3 className="text-xl font-semibold mb-2">{item.question}</h3>
                <p className="text-muted-foreground">{item.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Newsletter */}
        <NewsletterSignup />
      </main>

      <Footer />
    </div>
  )
}
