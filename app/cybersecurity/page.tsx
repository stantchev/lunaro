import type { Metadata } from "next"
import { Header } from "@/components/header"
import { ArticlesGrid } from "@/components/articles-grid"
import { Footer } from "@/components/footer"
import { CybersecurityHero } from "@/components/cybersecurity-hero"
import { ThreatLevelBanner } from "@/components/threat-level-banner"
import { TrendingSidebar } from "@/components/trending-sidebar"
import { Badge } from "@/components/ui/badge"
import { Shield, TrendingUp, AlertTriangle } from "lucide-react"
import Script from "next/script"
import https from "https"

export const metadata: Metadata = {
  title: {
    default: "Киберсигурност Новини в България | Lunaro News",
    template: "%s - Lunaro News",
  },
  description:
    "Lunaro News предлага най-актуалните киберсигурност новини и анализи за България – атаки, регулации, експертни съвети и решения за защита.",
  keywords:
    "киберсигурност новини, киберсигурност новини България, хакери България, кибер атаки, защита на данни, киберсигурност 2025, дигитална сигурност, Lunaro News",
  authors: [{ name: "Lunaro News" }],
  creator: "Lunaro News",
  publisher: "Lunaro News",
  robots: "index, follow",
  alternates: {
    canonical: "https://lunaro.news/cybersecurity",
  },
  openGraph: {
    type: "website",
    locale: "bg_BG",
    url: "https://lunaro.news/cybersecurity",
    siteName: "Lunaro News",
    title: "Киберсигурност Новини в България | Lunaro News",
    description:
      "Актуални киберсигурност новини и анализи за България – атаки, защита на данни и експертни препоръки от Lunaro News.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Киберсигурност Новини България - Lunaro News",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Киберсигурност Новини България - Lunaro News",
    description:
      "Следете последните киберсигурност новини и тенденции в България – хакерски атаки, защита и експертни анализи.",
    images: ["/og-image.jpg"],
  },
  generator: "Lunaro News",
}

// 🔹 директен fetch от WordPress API (категория ID 3)
export async function getCybersecurityArticles() {
  try {
    const agent = new https.Agent({ rejectUnauthorized: false })

    const response = await fetch(
      `https://lunaro.sofia-today.org/wp-json/wp/v2/posts?categories=3&per_page=6&_embed`,
      { agent, next: { revalidate: 60 } } // ISR: кеш за 60 сек
    )

    if (!response.ok) {
      const text = await response.text()
      console.error("WordPress API error:", response.status, text)
      return []
    }

    const data = await response.json()

    return data.map((article: any) => ({
      id: article.id.toString(),
      title: article.title?.rendered || "Без заглавие",
      translatedTitle: article.title?.rendered || "Без заглавие",
      description: article.excerpt?.rendered.replace(/<[^>]*>/g, "") || "",
      translatedDescription: article.excerpt?.rendered.replace(/<[^>]*>/g, "") || "",
      summary: article.excerpt?.rendered.replace(/<[^>]*>/g, "") || "",
      category: "Киберсигурност",
      publishedAt: article.date || new Date().toISOString(),
      urlToImage:
        article._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
        "/placeholder.svg",
      url: `/article/${article.slug || article.id}`,
      author:
        article._embedded?.author?.[0]?.name ||
        article._embedded?.author?.name ||
        "Автор",
      source: { name: "Lunaro News" },
    }))
  } catch (error) {
    console.error("Error fetching cybersecurity articles:", error)
    return []
  }
}

type CybersecurityArticle = Awaited<ReturnType<typeof getCybersecurityArticles>>[number]

export default async function CybersecurityPage() {
  const cybersecurityArticles = await getCybersecurityArticles()
  
  const featuredArticle = cybersecurityArticles[0] || null
  const otherArticles = cybersecurityArticles.slice(1)
  
  // Mock trending items for cybersecurity
  const trendingItems = cybersecurityArticles.slice(0, 8).map((article: CybersecurityArticle, index: number) => ({
    id: article.id,
    title: article.translatedTitle || article.title,
    url: article.url,
    category: article.category,
    views: Math.floor(Math.random() * 15000) + 2000,
    publishedAt: article.publishedAt,
    rank: index + 1
  }))

  const faqItems = [
    {
      question: "Къде да следя най-важните киберсигурност новини в България?",
      answer:
        "Lunaro News публикува всекидневни анализи за българския пазар – инциденти, заплахи и държавни регулации.",
    },
    {
      question: "Какво включва разделът „киберсигурност новини“?",
      answer:
        "Обхващаме хакерски атаки, пробиви в компании, кибер престъпност в България и практически насоки за защита.",
    },
    {
      question: "Защо е важно да следя киберсигурност новини България?",
      answer:
        "Локалните заплахи често са насочени към български бизнеси и институции, затова реакцията в реално време е ключова.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <Script
        id="cybersecurity-faq-schema"
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

      {/* Threat Level Banner */}
      <ThreatLevelBanner 
        level="HIGH"
        description="Нарастващи фишинг атаки и ransomware заплахи в региона"
        trendingThreats={["Ransomware", "Phishing", "DDoS атаки"]}
      />

      {/* Cybersecurity Hero */}
      <CybersecurityHero featuredArticle={featuredArticle} />

      {/* SEO Intro Section */}
      <section className="bg-muted/30 border-y">
        <div className="container mx-auto px-4 py-10 space-y-6">
          <div className="flex flex-col gap-4 max-w-3xl">
            <Badge variant="outline" className="w-fit">
              Киберсигурност новини България
            </Badge>
            <h1 className="text-3xl lg:text-4xl font-bold leading-tight">
              Киберсигурност новини и анализи за България – реална картина на дигиталните заплахи
            </h1>
            <p className="text-muted-foreground text-lg">
              В този раздел събираме най-важните <strong>киберсигурност новини</strong> за българския бизнес, държавни институции
              и технологични екипи. Екипът на Lunaro News следи локални инциденти, пробиви, регулации и защитни стратегии,
              за да имате надежден източник при търсения като <strong>„киберсигурност новини България“</strong>.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-background shadow border">
              <Shield className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Локални инциденти</h3>
              <p className="text-muted-foreground">
                Отразяваме български кибер атаки, реакции на CERT екипи и практични уроци за организациите.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-background shadow border">
              <TrendingUp className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Тенденции и регулации</h3>
              <p className="text-muted-foreground">
                Проследяваме как НИСД и европейските политики влияят върху сигурността в България.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-background shadow border">
              <AlertTriangle className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Експертни ръководства</h3>
              <p className="text-muted-foreground">
                Подготвяме чеклисти, гайдове и препоръки за реакция при пробиви или фишинг кампании.
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
                <ArticlesGrid articles={otherArticles} title="Последни новини за киберсигурност" />
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <TrendingSidebar trendingItems={trendingItems} />
            </div>
          </div>
        </div>

        {/* Security Tools Section */}
        <section className="py-16 bg-muted/30 border-y">
          <div className="container mx-auto px-4 text-center space-y-6">
            <Badge variant="secondary" className="px-4 py-2 text-lg">
              Инструменти за защита
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold">
              Защити се с професионални инструменти
            </h2>
            <p className="max-w-2xl mx-auto text-muted-foreground">
              Открий най-добрите инструменти за киберсигурност и защити своя бизнес от дигитални заплахи.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/security-tools" 
                className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                Виж инструментите
              </a>
              <a 
                href="/glossary" 
                className="border border-primary text-primary px-6 py-3 rounded-lg font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                Речник на термините
              </a>
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
              FAQ: Киберсигурност новини за българския бизнес
            </h2>
            <p className="text-muted-foreground">
              Събрахме отговори на най-честите въпроси, които получаваме от читатели и екипи,
              търсещи надежден източник за „киберсигурност новини“ и новини за България.
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
