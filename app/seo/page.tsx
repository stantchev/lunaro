import type { Metadata } from "next"
import { Header } from "@/components/header"
import { ArticlesGrid } from "@/components/articles-grid"
import { Footer } from "@/components/footer"
import { SEOHero } from "@/components/seo-hero"
import { TrendingSidebar } from "@/components/trending-sidebar"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Search, BarChart3, Target } from "lucide-react"
import Script from "next/script"

export const metadata: Metadata = {
  title: {
    default: "SEO Новини България | Lunaro News",
    template: "%s - Lunaro News",
  },
  description:
    "Най-актуалните SEO новини в България – Google алгоритми, локално SEO, линк билдинг стратегии и експертни анализи от Lunaro News.",
  keywords:
    "SEO новини, SEO новини България, Google алгоритъм, оптимизация за търсачки, SEO анализи, локално SEO, дигитален маркетинг, Lunaro News",
  authors: [{ name: "Lunaro News" }],
  creator: "Lunaro News",
  publisher: "Lunaro News",
  robots: "index, follow",
  alternates: {
    canonical: "https://lunaro.news/seo",
  },
  openGraph: {
    type: "website",
    locale: "bg_BG",
    url: "https://lunaro.news/seo",
    siteName: "Lunaro News",
    title: "SEO Новини България | Lunaro News",
    description:
      "Акценти от българската SEO сцена – актуални новини, алгоритмични промени и анализи за дигитални екипи.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SEO Новини България - Lunaro News",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO Новини България - Lunaro News",
    description:
      "Следете SEO новини за България – Google Updates, SERP промени и експертни насоки за оптимизация.",
    images: ["/og-image.jpg"],
  },
  generator: "Lunaro News",
}

async function getSEOArticles() {
  try {
    const response = await fetch(
      `https://lunaro.sofia-today.org/wp-json/wp/v2/posts?categories=2&per_page=6&_embed`,
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
      category: "SEO",
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
    console.error("Error fetching SEO articles:", error)
    return []
  }
}

export default async function SEOPage() {
  const seoArticles = await getSEOArticles()
  
  const featuredArticle = seoArticles[0] || null
  const otherArticles = seoArticles.slice(1)
  
  // Mock trending items for SEO
  type SEOArticle = Awaited<ReturnType<typeof getSEOArticles>>[number]

  const trendingItems = seoArticles.slice(0, 8).map((article: SEOArticle, index: number) => ({
    id: article.id,
    title: article.translatedTitle || article.title,
    url: article.url,
    category: article.category,
    views: Math.floor(Math.random() * 12000) + 1500,
    publishedAt: article.publishedAt,
    rank: index + 1
  }))

  const faqItems = [
    {
      question: "Къде да следя надеждни SEO новини за България?",
      answer:
        "Lunaro News покрива Google Updates, SERP промени и локални казуси за агенции и вътрешни екипи в България.",
    },
    {
      question: "Какво включва разделът „SEO новини“?",
      answer:
        "Включваме алгоритмични обновления, стратегии за техническо и локално SEO, линк билдинг и контент оптимизация.",
    },
    {
      question: "За кого са полезни SEO новините на Lunaro News?",
      answer:
        "За маркетинг екипи, SEO специалисти, агенции и собственици на бизнес, които искат да реагират първи при промени.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <Script
        id="seo-faq-schema"
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

      {/* SEO Hero */}
      <SEOHero featuredArticle={featuredArticle} />

      {/* Google Update Alert */}
      <section className="py-4 bg-blue-50 border-y border-blue-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center space-x-3 text-blue-800">
            <Search className="h-5 w-5" />
            <span className="font-medium">
              Последно обновление: Google March 2025 Core Update - Проверете позициите си
            </span>
          </div>
        </div>
      </section>

      {/* SEO Intro Section */}
      <section className="bg-muted/30 border-y">
        <div className="container mx-auto px-4 py-12 space-y-6">
          <div className="flex flex-col gap-4 max-w-3xl">
            <Badge variant="outline" className="w-fit">
              SEO новини България
            </Badge>
            <h1 className="text-3xl lg:text-4xl font-bold leading-tight">
              SEO новини и анализи за българския пазар – алгоритми, SERP промени и доказани практики
            </h1>
            <p className="text-muted-foreground text-lg">
              Тук събираме най-важните <strong>SEO новини</strong> и локални казуси. Екипът ни следи Google Update-и,
              експериментира с SERP функции и публикува практически насоки за екипи, които търсят <strong>„SEO новини България“</strong>.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-background shadow border">
              <TrendingUp className="h-9 w-9 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Алгоритми & SERP</h3>
              <p className="text-muted-foreground">Обясняваме как актуализациите удрят българските сайтове и как да реагирате.</p>
            </div>
            <div className="p-6 rounded-xl bg-background shadow border">
              <BarChart3 className="h-9 w-9 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Техническо SEO</h3>
              <p className="text-muted-foreground">Гайдове за Core Web Vitals, crawl бюджет и структурирани данни.</p>
            </div>
            <div className="p-6 rounded-xl bg-background shadow border">
              <Target className="h-9 w-9 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Локално & eCommerce</h3>
              <p className="text-muted-foreground">Стратегии за магазини, услуги и B2B екипи, насочени към български клиенти.</p>
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
                <ArticlesGrid articles={otherArticles} title="Последни SEO новини и анализи" />
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <TrendingSidebar trendingItems={trendingItems} />
            </div>
          </div>
        </div>

        {/* SEO Categories */}
        <section className="py-16 bg-muted/30 border-y">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-6 mb-12">
              <Badge variant="secondary" className="px-4 py-2 text-lg">
                SEO Категории
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold">
                Всичко за SEO оптимизацията
              </h2>
              <p className="max-w-2xl mx-auto text-muted-foreground">
                Открий най-добрите SEO техники, инструменти и стратегии за успех в търсачките.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center space-y-3 p-6 rounded-lg bg-background hover:shadow-md transition-shadow">
                <Search className="h-8 w-8 text-primary mx-auto" />
                <h3 className="font-semibold">Ключови думи</h3>
                <p className="text-sm text-muted-foreground">Изследване и оптимизация</p>
              </div>
              <div className="text-center space-y-3 p-6 rounded-lg bg-background hover:shadow-md transition-shadow">
                <BarChart3 className="h-8 w-8 text-secondary mx-auto" />
                <h3 className="font-semibold">Анализи</h3>
                <p className="text-sm text-muted-foreground">SEO метрики и данни</p>
              </div>
              <div className="text-center space-y-3 p-6 rounded-lg bg-background hover:shadow-md transition-shadow">
                <Target className="h-8 w-8 text-accent mx-auto" />
                <h3 className="font-semibold">Стратегии</h3>
                <p className="text-sm text-muted-foreground">Дългосрочни планове</p>
              </div>
              <div className="text-center space-y-3 p-6 rounded-lg bg-background hover:shadow-md transition-shadow">
                <TrendingUp className="h-8 w-8 text-primary mx-auto" />
                <h3 className="font-semibold">Тенденции</h3>
                <p className="text-sm text-muted-foreground">Бъдещето на SEO</p>
              </div>
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
              FAQ: SEO новини и алгоритми за България
            </h2>
            <p className="text-muted-foreground">
              Отговаряме на въпросите, които получаваме от SEO специалисти, агенции и маркетинг екипи,
              когато търсят свежи <strong>SEO новини</strong>.
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
