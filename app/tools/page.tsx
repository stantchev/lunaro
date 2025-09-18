import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, ExternalLink, Star, Zap, Shield, TrendingUp } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "SEO и маркетинг инструменти - Lunaro News | Безплатни онлайн инструменти",
  description:
    "Колекция от безплатни SEO и маркетинг инструменти за анализ на уебсайтове, ключови думи, конкуренти и оптимизация на съдържанието.",
  keywords:
    "SEO инструменти, маркетинг инструменти, анализ на ключови думи, проверка на уебсайт, безплатни инструменти, България",
  openGraph: {
    title: "SEO и маркетинг инструменти - Lunaro News",
    description: "Колекция от безплатни SEO и маркетинг инструменти за анализ и оптимизация",
    url: "https://lunaro.news/tools",
    siteName: "Lunaro News",
    locale: "bg_BG",
    type: "website",
  },
  alternates: {
    canonical: "https://lunaro.news/tools",
  },
}

export default function ToolsPage() {
  const toolCategories = [
    { name: "Всички", count: 24, active: true },
    { name: "SEO", count: 12, active: false },
    { name: "Анализ", count: 8, active: false },
    { name: "Съдържание", count: 4, active: false },
  ]

  const featuredTools = [
    {
      name: "SEO Анализатор",
      description: "Анализирайте SEO показателите на вашия уебсайт",
      category: "SEO",
      rating: 4.8,
      users: "10K+",
      free: true,
      icon: TrendingUp,
    },
    {
      name: "Генератор на мета тагове",
      description: "Създавайте оптимизирани title и description тагове",
      category: "SEO",
      rating: 4.6,
      users: "5K+",
      free: true,
      icon: Zap,
    },
    {
      name: "Проверка на SSL сертификат",
      description: "Проверете валидността на SSL сертификата",
      category: "Сигурност",
      rating: 4.9,
      users: "8K+",
      free: true,
      icon: Shield,
    },
  ]

  const allTools = [
    {
      name: "Анализатор на ключови думи",
      description: "Анализ на плътността и релевантността на ключови думи",
      category: "SEO",
      rating: 4.7,
      free: true,
    },
    {
      name: "Проверка на скоростта на сайта",
      description: "Измерете времето за зареждане на вашия уебсайт",
      category: "Анализ",
      rating: 4.5,
      free: true,
    },
    {
      name: "Генератор на robots.txt",
      description: "Създайте правилен robots.txt файл за вашия сайт",
      category: "SEO",
      rating: 4.4,
      free: true,
    },
    {
      name: "Анализатор на конкуренти",
      description: "Анализирайте SEO стратегиите на конкурентите",
      category: "Анализ",
      rating: 4.6,
      free: false,
    },
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
                SEO и маркетинг инструменти
              </Badge>

              <h1 className="text-4xl lg:text-5xl font-bold text-balance">Безплатни инструменти за SEO и маркетинг</h1>

              <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
                Колекция от професионални инструменти за анализ, оптимизация и подобряване на вашето онлайн присъствие
              </p>

              <div className="max-w-md mx-auto">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input placeholder="Търсете инструмент..." className="pl-10" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-8 border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-4 justify-center">
              {toolCategories.map((category, index) => (
                <Button key={index} variant={category.active ? "default" : "outline"} className="rounded-full">
                  {category.name} ({category.count})
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Tools */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-4">Препоръчани инструменти</h2>
                <p className="text-muted-foreground">Най-популярните и полезни инструменти от нашата колекция</p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-16">
                {featuredTools.map((tool, index) => (
                  <Card key={index} className="group hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-4">
                        <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                          <tool.icon className="h-6 w-6 text-primary" />
                        </div>
                        {tool.free && <Badge variant="secondary">Безплатен</Badge>}
                      </div>
                      <CardTitle className="group-hover:text-primary transition-colors">{tool.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground">{tool.description}</p>

                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center space-x-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span>{tool.rating}</span>
                        </div>
                        <span className="text-muted-foreground">{tool.users} потребители</span>
                      </div>

                      <Button className="w-full">
                        Използвай инструмента
                        <ExternalLink className="h-4 w-4 ml-2" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* All Tools */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Всички инструменти</h3>

                <div className="grid md:grid-cols-2 gap-6">
                  {allTools.map((tool, index) => (
                    <Card key={index} className="group hover:shadow-md transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <h4 className="font-semibold group-hover:text-primary transition-colors">{tool.name}</h4>
                              {tool.free && (
                                <Badge variant="outline" className="text-xs">
                                  Безплатен
                                </Badge>
                              )}
                            </div>
                            <p className="text-muted-foreground text-sm mb-3">{tool.description}</p>
                            <div className="flex items-center space-x-4 text-sm">
                              <div className="flex items-center space-x-1">
                                <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                                <span>{tool.rating}</span>
                              </div>
                              <Badge variant="secondary" className="text-xs">
                                {tool.category}
                              </Badge>
                            </div>
                          </div>
                          <Button variant="ghost" size="sm">
                            <ExternalLink className="h-4 w-4" />
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
              <h2 className="text-3xl font-bold">Предложете нов инструмент</h2>
              <p className="text-muted-foreground text-lg">
                Имате идея за полезен инструмент? Споделете я с нас и ние ще я разработим
              </p>
              <Button size="lg" asChild>
                <Link href="/contact">Свържете се с нас</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
