import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Анализи и проучвания - Lunaro News | Киберсигурност и SEO анализи",
  description:
    "Задълбочени анализи и проучвания в областта на киберсигурността и SEO оптимизацията. Експертни мнения, статистики и тенденции за 2025 година.",
  keywords:
    "анализи, проучвания, киберсигурност анализи, SEO анализи, статистики, тенденции 2025, експертни мнения, България",
  openGraph: {
    title: "Анализи и проучвания - Lunaro News",
    description: "Задълбочени анализи и проучвания в областта на киберсигурността и SEO оптимизацията",
    url: "https://lunaro.news/analysis",
    siteName: "Lunaro News",
    locale: "bg_BG",
    type: "website",
  },
  alternates: {
    canonical: "https://lunaro.news/analysis",
  },
}

export default function AnalysisPage() {
  const analyses = [
    {
      title: "Състояние на киберсигурността в България 2025",
      description: "Подробен анализ на киберзаплахите и инцидентите в България през последната година",
      category: "Киберсигурност",
      date: "15 януари 2025",
      readTime: "12 мин",
      featured: true,
    },
    {
      title: "SEO тенденции и алгоритмични промени в Google",
      description: "Анализ на последните промени в Google алгоритъма и тяхното влияние върху SEO",
      category: "SEO",
      date: "10 януари 2025",
      readTime: "8 мин",
      featured: true,
    },
    {
      title: "Ransomware атаки - статистика и превенция",
      description: "Статистически преглед на ransomware атаките и ефективни методи за защита",
      category: "Киберсигурност",
      date: "5 януари 2025",
      readTime: "15 мин",
      featured: false,
    },
    {
      title: "Локално SEO за български бизнеси",
      description: "Как българските компании могат да подобрят локалното си присъствие в търсачките",
      category: "SEO",
      date: "28 декември 2024",
      readTime: "10 мин",
      featured: false,
    },
  ]

  const categories = [
    { name: "Всички", count: 24, active: true },
    { name: "Киберсигурност", count: 15, active: false },
    { name: "SEO", count: 9, active: false },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-background to-muted/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <Badge variant="secondary" className="text-lg px-4 py-2">
                Анализи и проучвания
              </Badge>

              <h1 className="text-4xl lg:text-5xl font-bold text-balance">Задълбочени анализи и експертни мнения</h1>

              <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
                Открийте най-актуалните тенденции и статистики в областта на киберсигурността и SEO оптимизацията
              </p>
            </div>
          </div>
        </section>

        {/* Categories Filter */}
        <section className="py-8 border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-4 justify-center">
              {categories.map((category, index) => (
                <Button key={index} variant={category.active ? "default" : "outline"} className="rounded-full">
                  {category.name} ({category.count})
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Analyses */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-4">Препоръчани анализи</h2>
                <p className="text-muted-foreground">Най-важните анализи и проучвания от нашите експерти</p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8 mb-12">
                {analyses
                  .filter((analysis) => analysis.featured)
                  .map((analysis, index) => (
                    <Card key={index} className="group hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-center justify-between mb-2">
                          <Badge variant={analysis.category === "Киберсигурност" ? "default" : "secondary"}>
                            {analysis.category}
                          </Badge>
                          <div className="flex items-center text-sm text-muted-foreground space-x-4">
                            <span className="flex items-center space-x-1">
                              <Calendar className="h-4 w-4" />
                              <span>{analysis.date}</span>
                            </span>
                            <span>{analysis.readTime}</span>
                          </div>
                        </div>
                        <CardTitle className="group-hover:text-primary transition-colors">{analysis.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground mb-4">{analysis.description}</p>
                        <Button variant="ghost" className="p-0 h-auto font-medium">
                          Прочети повече
                          <ArrowRight className="h-4 w-4 ml-1" />
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
              </div>

              {/* All Analyses */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Всички анализи</h3>

                <div className="space-y-4">
                  {analyses.map((analysis, index) => (
                    <Card key={index} className="group hover:shadow-md transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center space-x-4 mb-2">
                              <Badge variant={analysis.category === "Киберсигурност" ? "default" : "secondary"}>
                                {analysis.category}
                              </Badge>
                              <span className="text-sm text-muted-foreground">{analysis.date}</span>
                              <span className="text-sm text-muted-foreground">{analysis.readTime}</span>
                            </div>
                            <h4 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                              {analysis.title}
                            </h4>
                            <p className="text-muted-foreground">{analysis.description}</p>
                          </div>
                          <Button variant="ghost" size="sm">
                            <ArrowRight className="h-4 w-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h2 className="text-3xl font-bold">Искате персонализиран анализ?</h2>
              <p className="text-muted-foreground text-lg">
                Нашият екип може да подготви специализиран анализ за вашия бизнес или организация
              </p>
              <Button size="lg" asChild>
                <Link href="/contact">
                  Свържете се с нас
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
