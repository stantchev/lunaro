import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArticlesGrid } from "@/components/articles-grid"
import { TrendingSidebar } from "@/components/trending-sidebar"
import { WorldHero } from "@/components/world-hero"
import { Badge } from "@/components/ui/badge"
import { Globe, TrendingUp, Users, MapPin, Zap } from "lucide-react"
import Script from "next/script"

// 🔹 Fetch статии за категория "Светът" от WordPress API
async function getWorldArticles() {
  try {
    const response = await fetch(
      `https://lunaro.sofia-today.org/wp-json/wp/v2/posts?categories=6&per_page=8&_embed`,
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
      category: "Светът",
      publishedAt: article.date,
      urlToImage:
        article._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "/placeholder.jpg",
      url: `/article/${article.slug}`,
      author: article._embedded?.author?.[0]?.name || "Автор",
      source: { name: "Lunaro News" },
    }))
  } catch (error) {
    console.error("Error fetching world articles:", error)
    return []
  }
}

// 🔹 SEO Metadata
export const metadata: Metadata = {
  title: {
    default: "Светът - световни новини и анализи | Lunaro News",
    template: "%s - Lunaro News",
  },
  description:
    "Световни новини и анализи за България – геополитика, технологии, икономика и устойчиво развитие. Lunaro News проследява глобалните тенденции с локален контекст.",
  keywords:
    "световни новини, световни новини България, глобални тенденции, геополитика, технологични иновации, международни анализи, Lunaro News",
  authors: [{ name: "Lunaro News" }],
  creator: "Lunaro News",
  publisher: "Lunaro News",
  robots: "index, follow",
  alternates: {
    canonical: "https://lunaro.news/world",
  },
  openGraph: {
    type: "website",
    locale: "bg_BG",
    url: "https://lunaro.news/world",
    siteName: "Lunaro News",
    title: "Светът - световни новини и анализи | Lunaro News",
    description:
      "Проследявайте световни новини, геополитика и технологични иновации – подбрани за българската аудитория.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Световни новини и анализи - Lunaro News",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Светът - световни новини и анализи - Lunaro News",
    description:
      "Последни световни новини и глобални тенденции – Lunaro News ги представя с фокус към България.",
    images: ["/og-image.jpg"],
  },
  generator: "Lunaro News",
}

export default async function WorldPage() {
  const articles = await getWorldArticles()
  
  const featuredArticle = articles[0] || null
  const otherArticles = articles.slice(1)
  
  // Mock trending items for World
  type WorldArticle = Awaited<ReturnType<typeof getWorldArticles>>[number]

  const trendingItems = articles.slice(0, 8).map((article: WorldArticle, index: number) => ({
    id: article.id,
    title: article.translatedTitle || article.title,
    url: article.url,
    category: article.category,
    views: Math.floor(Math.random() * 18000) + 3000,
    publishedAt: article.publishedAt,
    rank: index + 1
  }))

  const faqItems = [
    {
      question: "Какво покрива разделът „Светът“ на Lunaro News?",
      answer:
        "Публикуваме световни новини за геополитика, технологии, сигурност и икономика с анализ как влияят на България.",
    },
    {
      question: "За кого са полезни световните новини на Lunaro News?",
      answer:
        "За бизнес лидери, журналисти и читатели, които търсят надежден източник на български за глобалните процеси.",
    },
    {
      question: "Как да следя важните глобални тенденции?",
      answer:
        "Разделът „Светът“ обединява дневен обзор, ключови теми и експертни интервюта за световните новини.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <Script
        id="world-faq-schema"
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

      {/* World Hero */}
      <WorldHero featuredArticle={featuredArticle} />

      {/* Intro Section */}
      <section className="bg-muted/30 border-y">
        <div className="container mx-auto px-4 py-12 space-y-6">
          <div className="flex flex-col gap-4 max-w-3xl">
            <Badge variant="outline" className="w-fit">
              Световни новини България
            </Badge>
            <h1 className="text-3xl lg:text-4xl font-bold leading-tight">
              Световни новини и глобални анализи с фокус към България
            </h1>
            <p className="text-muted-foreground text-lg">
              Подбираме най-важните <strong>световни новини</strong> – от геополитика и енергетика до технологични пробиви –
              и ги представяме с локален контекст, за да знаете как глобалните решения засягат региона.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-background shadow border">
              <Globe className="h-9 w-9 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Геополитически обзор</h3>
              <p className="text-muted-foreground">
                Следим конфликти, дипломатически срещи и влиянието им върху Европа и България.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-background shadow border">
              <Users className="h-9 w-9 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Регионални истории</h3>
              <p className="text-muted-foreground">
                Представяме човешките истории зад световните събития и ролята на местните общности.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-background shadow border">
              <MapPin className="h-9 w-9 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Бизнес и иновации</h3>
              <p className="text-muted-foreground">
                Анализираме как глобалните технологични тенденции променят пазарите и инвестициите.
              </p>
            </div>
          </div>
        </div>
      </section>

      <main>
        {/* Main Content with Sidebar */}
        <div className="container mx-auto px-4 py-8">
          <div className="grid lg:grid-cols-4 gap-6 lg:gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3 space-y-8 lg:space-y-12">
              {/* Articles */}
              <div id="articles">
                <ArticlesGrid
                  articles={otherArticles}
                  title="Последни световни новини и анализи"
                />
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <TrendingSidebar trendingItems={trendingItems} />
            </div>
          </div>
        </div>

        {/* World Trends */}
        <section className="py-16 bg-muted/30 border-y">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-6 mb-12">
              <Badge variant="secondary" className="px-4 py-2 text-lg">
                Световни тенденции
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold">
                Глобални тенденции за 2025
              </h2>
              <p className="max-w-2xl mx-auto text-muted-foreground">
                Ключовите направления в развитието на технологиите и тяхното въздействие върху глобалната икономика.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Киберсигурност в глобалния мащаб",
                "AI революция в различните индустрии",
                "Устойчиво развитие и зелена технология",
                "Космически технологии и изследвания",
                "Климатични технологии и иновации",
                "Глобална дигитална трансформация",
              ].map((trend, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-4 rounded-lg bg-background shadow-sm hover:shadow-md transition-shadow"
                >
                  <Zap className="h-5 w-5 text-blue-500 flex-shrink-0" />
                  <span className="text-sm">{trend}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="container mx-auto px-4 py-16 space-y-8">
          <div className="max-w-3xl">
            <Badge variant="outline" className="mb-4">
              Често задавани въпроси
            </Badge>
            <h2 className="text-3xl font-bold mb-4">
              FAQ: Световни новини и глобални анализи
            </h2>
            <p className="text-muted-foreground">
              Отговори на въпроси от читатели, които търсят надежден източник за <strong>световни новини България</strong>.
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
      </main>

      <Footer />
    </div>
  )
}
