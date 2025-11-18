import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArticlesGrid } from "@/components/articles-grid"
import { AIHero } from "@/components/ai-hero"
import { TrendingSidebar } from "@/components/trending-sidebar"
import { Badge } from "@/components/ui/badge"
import { Brain, Search, Shield, TrendingUp, Zap } from "lucide-react"
import Script from "next/script"

export const metadata: Metadata = {
  title: {
    default: "AI и технологични новини България | Lunaro News",
    template: "%s - Lunaro News",
  },
  description:
    "Следете най-важните AI и технологични новини за България – генеративен AI, автоматизация, регулации и въздействие върху бизнеса.",
  keywords:
    "AI новини, AI новини България, технологични новини, изкуствен интелект, машинно обучение, генеративен AI, автоматизация в България, Lunaro News",
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
    title: "AI и технологични новини България | Lunaro News",
    description:
      "Актуални новини за изкуствен интелект и технологии – анализи, регулации и бизнес въздействие в България.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AI и технологични новини България - Lunaro News",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI и технологични новини България - Lunaro News",
    description:
      "Генеративен AI, автоматизация и технологични тенденции за българския бизнес – всичко в Lunaro News.",
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
  
  const featuredArticle = aiArticles[0] || null
  const otherArticles = aiArticles.slice(1)
  
  // Mock trending items for AI
  type AIArticle = Awaited<ReturnType<typeof getAIArticles>>[number]

  const trendingItems = aiArticles.slice(0, 8).map((article: AIArticle, index: number) => ({
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
      question: "Какви AI новини и технологии следи Lunaro News?",
      answer:
        "Отразяваме генеративен AI, машинно обучение, регулации на ЕС и как те влияят на българските компании.",
    },
    {
      question: "Има ли фокус върху български AI иновации?",
      answer:
        "Да – следим локални стартъпи, университетски проекти и корпоративни внедрявания на изкуствен интелект.",
    },
    {
      question: "За кого са полезни AI и технологичните новини?",
      answer:
        "За продуктовите екипи, ИТ лидери и маркетинг специалисти, които искат да интегрират AI в работата си.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <Script
        id="ai-faq-schema"
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

      {/* AI Hero */}
      <AIHero featuredArticle={featuredArticle} />

      {/* AI Intro Section */}
      <section className="bg-muted/30 border-y">
        <div className="container mx-auto px-4 py-12 space-y-6">
          <div className="flex flex-col gap-4 max-w-3xl">
            <Badge variant="outline" className="w-fit">
              AI и технологични новини България
            </Badge>
            <h1 className="text-3xl lg:text-4xl font-bold leading-tight">
              AI новини, регулации и бизнес импакт за България – един източник за технологичните лидери
            </h1>
            <p className="text-muted-foreground text-lg">
              Разделът събира най-горещите <strong>AI новини</strong>, анализи на регулации и реални внедрявания.
              Ако търсите <strong>„AI и технологични новини България“</strong>, тук ще намерите проверена информация и експертни оценки.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-background shadow border">
              <Brain className="h-9 w-9 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Генеративен AI</h3>
              <p className="text-muted-foreground">Анализираме как GPT, Claude и други модели навлизат в българския бизнес.</p>
            </div>
            <div className="p-6 rounded-xl bg-background shadow border">
              <Shield className="h-9 w-9 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">AI & Киберсигурност</h3>
              <p className="text-muted-foreground">Проследяваме как изкуственият интелект усилва защитата и атаките.</p>
            </div>
            <div className="p-6 rounded-xl bg-background shadow border">
              <TrendingUp className="h-9 w-9 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Пазарни тенденции</h3>
              <p className="text-muted-foreground">Как AI влияе върху индустрии като финтех, здравеопазване и маркетинг.</p>
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
                  title="Последни AI новини и анализи"
                />
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <TrendingSidebar trendingItems={trendingItems} />
            </div>
          </div>
        </div>

        {/* AI Trends */}
        <section className="py-16 bg-muted/30 border-y">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-6 mb-12">
              <Badge variant="secondary" className="px-4 py-2 text-lg">
                AI Тенденции
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold">
                AI тенденции за 2025
              </h2>
              <p className="max-w-2xl mx-auto text-muted-foreground">
                Ключовите направления в развитието на AI технологиите и тяхното въздействие върху киберсигурността и SEO.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                  className="flex items-center space-x-3 p-4 rounded-lg bg-background shadow-sm hover:shadow-md transition-shadow"
                >
                  <Zap className="h-5 w-5 text-yellow-500 flex-shrink-0" />
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
              FAQ: AI и технологични новини за България
            </h2>
            <p className="text-muted-foreground">
              Отговаряме на ключови въпроси за изкуствения интелект, които ни задават продуктови и IT екипи,
              когато търсят надеждни <strong>AI новини</strong>.
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
