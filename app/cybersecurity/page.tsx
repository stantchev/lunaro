import type { Metadata } from "next"
import { Header } from "@/components/header"
import { ArticlesGrid } from "@/components/articles-grid"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Shield, TrendingUp, AlertTriangle } from "lucide-react"

export const metadata: Metadata = {
  title: "Киберсигурност - Lunaro News",
  description: "Последни новини и анализи за киберсигурност в България. Заплахи, защитни мерки и експертни препоръки.",
  keywords: "киберсигурност, хакерски атаки, малуер, фишинг, защита на данни, България",
  openGraph: {
    title: "Киберсигурност - Lunaro News",
    description: "Последни новини и анализи за киберсигурност в България.",
    type: "website",
  },
}

async function getCybersecurityArticles() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/wordpress-articles?per_page=6`, {
      cache: 'no-store'
    })

    if (!response.ok) {
      return []
    }

    const data = await response.json()
    // Filter for cybersecurity articles
    const cybersecurityArticles = data.posts?.filter((article: any) => 
      article.meta?.category === 'Киберсигурност' || 
      article.title.rendered.toLowerCase().includes('киберсигурност') ||
      article.title.rendered.toLowerCase().includes('ransomware') ||
      article.title.rendered.toLowerCase().includes('фишинг') ||
      article.title.rendered.toLowerCase().includes('хакер') ||
      article.title.rendered.toLowerCase().includes('защита')
    ) || []

    return cybersecurityArticles.map((article: any) => ({
      id: article.id.toString(),
      title: article.title.rendered,
      translatedTitle: article.title.rendered,
      description: article.excerpt.rendered.replace(/<[^>]*>/g, ''),
      translatedDescription: article.excerpt.rendered.replace(/<[^>]*>/g, ''),
      summary: article.excerpt.rendered.replace(/<[^>]*>/g, ''),
      category: "Киберсигурност",
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
  } catch (error) {
    console.error('Error fetching cybersecurity articles:', error)
    return []
  }
}

export default async function CybersecurityPage() {
  const cybersecurityArticles = await getCybersecurityArticles()
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Page Header */}
        <section className="py-16 bg-gradient-to-br from-background to-muted/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <div className="flex items-center justify-center space-x-2">
                <Shield className="h-8 w-8 text-primary" />
                <Badge variant="secondary" className="text-lg px-4 py-2">
                  Киберсигурност
                </Badge>
              </div>

              <h1 className="text-4xl lg:text-5xl font-bold text-balance">Новини за киберсигурност</h1>

              <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
                Следи най-актуалните заплахи, уязвимости и защитни мерки в киберпространството. Експертни анализи и
                препоръки за защита на данните.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">150+</div>
                  <div className="text-sm text-muted-foreground">Статии</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">24/7</div>
                  <div className="text-sm text-muted-foreground">Мониторинг</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">5000+</div>
                  <div className="text-sm text-muted-foreground">Читатели</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Threat Level Alert */}
        <section className="py-6 bg-destructive/10 border-y border-destructive/20">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center space-x-3 text-destructive">
              <AlertTriangle className="h-5 w-5" />
              <span className="font-medium">Текущо ниво на заплаха: СРЕДНО - Нарастващи фишинг атаки в региона</span>
            </div>
          </div>
        </section>

        {/* Articles */}
        <ArticlesGrid articles={cybersecurityArticles} title="Последни новини за киберсигурност" />

        {/* Categories */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8 text-center">Категории киберсигурност</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center space-y-3 p-6 rounded-lg bg-background hover:shadow-md transition-shadow">
                <Shield className="h-8 w-8 text-primary mx-auto" />
                <h3 className="font-semibold">Защитни мерки</h3>
                <p className="text-sm text-muted-foreground">Как да защитим данните си</p>
              </div>
              <div className="text-center space-y-3 p-6 rounded-lg bg-background hover:shadow-md transition-shadow">
                <AlertTriangle className="h-8 w-8 text-destructive mx-auto" />
                <h3 className="font-semibold">Заплахи</h3>
                <p className="text-sm text-muted-foreground">Актуални киберзаплахи</p>
              </div>
              <div className="text-center space-y-3 p-6 rounded-lg bg-background hover:shadow-md transition-shadow">
                <TrendingUp className="h-8 w-8 text-secondary mx-auto" />
                <h3 className="font-semibold">Тенденции</h3>
                <p className="text-sm text-muted-foreground">Бъдещето на сигурността</p>
              </div>
              <div className="text-center space-y-3 p-6 rounded-lg bg-background hover:shadow-md transition-shadow">
                <Shield className="h-8 w-8 text-accent mx-auto" />
                <h3 className="font-semibold">Инструменти</h3>
                <p className="text-sm text-muted-foreground">Полезни security tools</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
