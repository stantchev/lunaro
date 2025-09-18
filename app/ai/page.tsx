import Link from "next/link"
import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Brain, Shield, TrendingUp, Clock, ArrowRight, Zap, Bot } from "lucide-react"

export const metadata: Metadata = {
  title: "AI Новини - Lunaro News | Изкуствен интелект в киберсигурността и SEO",
  description:
    "Последните новини за изкуствения интелект в областта на киберсигурността и SEO оптимизацията. AI тенденции, инструменти и анализи на български език.",
  keywords: "AI новини, изкуствен интелект, машинно обучение, AI киберсигурност, AI SEO, ChatGPT, България, технологии",
  openGraph: {
    title: "AI Новини - Lunaro News",
    description: "Последните новини за изкуствения интелект в киберсигурността и SEO",
    url: "https://lunaro.news/ai",
    siteName: "Lunaro News",
    locale: "bg_BG",
    type: "website",
  },
  alternates: {
    canonical: "https://lunaro.news/ai",
  },
}

export default function AINewsPage() {
  const featuredArticles = [
    {
      title: "ChatGPT-4 и новите възможности за SEO оптимизация",
      excerpt:
        "Как най-новата версия на ChatGPT може да революционизира начина, по който правим SEO анализи и създаваме съдържание.",
      category: "AI SEO",
      readTime: "8 мин",
      date: "18 януари 2025",
      slug: "chatgpt-4-seo-optimizaciya",
      featured: true,
    },
    {
      title: "AI-базирани кибератаки: Новите заплахи за 2025",
      excerpt: "Анализ на най-опасните AI-генерирани кибератаки и как да се защитим от тях.",
      category: "AI Киберсигурност",
      readTime: "12 мин",
      date: "17 януари 2025",
      slug: "ai-kiberataki-2025",
      featured: true,
    },
    {
      title: "Google Bard срещу ChatGPT: Кой е по-добър за SEO задачи?",
      excerpt: "Детайлно сравнение между двата AI асистента в контекста на SEO оптимизация и съдържание.",
      category: "AI Инструменти",
      readTime: "10 мин",
      date: "16 януари 2025",
      slug: "google-bard-vs-chatgpt-seo",
      featured: false,
    },
  ]

  const aiTools = [
    {
      name: "ChatGPT",
      description: "AI асистент за създаване на съдържание и SEO анализи",
      category: "Съдържание",
      icon: Bot,
    },
    {
      name: "Jasper AI",
      description: "Специализиран AI за маркетингово съдържание",
      category: "Маркетинг",
      icon: Brain,
    },
    {
      name: "Surfer AI",
      description: "AI-базирана SEO оптимизация на съдържание",
      category: "SEO",
      icon: TrendingUp,
    },
    {
      name: "Darktrace",
      description: "AI за киберсигурност и защита от заплахи",
      category: "Сигурност",
      icon: Shield,
    },
  ]

  const aiTrends = [
    "Генеративен AI за създаване на SEO съдържание",
    "AI-базирано откриване на кибератаки",
    "Автоматизирана SEO оптимизация с машинно обучение",
    "AI асистенти за анализ на уязвимости",
    "Персонализирано съдържание с AI",
    "Предиктивна киберсигурност с AI",
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <Badge variant="secondary" className="text-lg px-4 py-2">
                <Brain className="h-4 w-4 mr-2" />
                AI Новини
              </Badge>

              <h1 className="text-4xl lg:text-5xl font-bold text-balance">
                Изкуствен интелект в <span className="text-blue-600">киберсигурността</span> и{" "}
                <span className="text-purple-600">SEO</span>
              </h1>

              <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
                Последните новини, анализи и тенденции за използването на изкуствения интелект в областта на
                киберсигурността и SEO оптимизацията
              </p>
            </div>
          </div>
        </section>

        {/* Featured Articles */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-4">Препоръчани статии</h2>
                <p className="text-muted-foreground">Най-актуалните AI новини в областта на киберсигурността и SEO</p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8 mb-12">
                {featuredArticles
                  .filter((article) => article.featured)
                  .map((article, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow group">
                      <CardHeader>
                        <div className="flex items-center justify-between mb-3">
                          <Badge
                            variant={article.category.includes("SEO") ? "default" : "destructive"}
                            className="text-xs"
                          >
                            {article.category}
                          </Badge>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Clock className="h-4 w-4 mr-1" />
                            {article.readTime}
                          </div>
                        </div>
                        <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                          {article.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground mb-4">{article.excerpt}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">{article.date}</span>
                          <Button variant="ghost" size="sm" asChild>
                            <Link href={`/article/${article.slug}`}>
                              Прочети повече
                              <ArrowRight className="h-4 w-4 ml-1" />
                            </Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>

              {/* Regular Articles */}
              <div className="space-y-6">
                {featuredArticles
                  .filter((article) => !article.featured)
                  .map((article, index) => (
                    <Card key={index} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="flex-1">
                            <div className="flex items-center space-x-3 mb-2">
                              <Badge variant="outline" className="text-xs">
                                {article.category}
                              </Badge>
                              <span className="text-sm text-muted-foreground">{article.date}</span>
                              <div className="flex items-center text-sm text-muted-foreground">
                                <Clock className="h-3 w-3 mr-1" />
                                {article.readTime}
                              </div>
                            </div>
                            <h3 className="text-lg font-semibold mb-2 hover:text-blue-600 transition-colors">
                              <Link href={`/article/${article.slug}`}>{article.title}</Link>
                            </h3>
                            <p className="text-muted-foreground text-sm">{article.excerpt}</p>
                          </div>
                          <Button variant="ghost" size="sm" asChild>
                            <Link href={`/article/${article.slug}`}>
                              <ArrowRight className="h-4 w-4" />
                            </Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </div>
          </div>
        </section>

        {/* AI Tools Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Популярни AI инструменти</h2>
                <p className="text-muted-foreground">Най-използваните AI решения за киберсигурност и SEO</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {aiTools.map((tool, index) => (
                  <Card key={index} className="text-center hover:shadow-md transition-shadow">
                    <CardHeader>
                      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                        <tool.icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{tool.name}</CardTitle>
                      <Badge variant="outline" className="text-xs">
                        {tool.category}
                      </Badge>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{tool.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* AI Trends */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">AI тенденции за 2025</h2>
                <p className="text-muted-foreground">Ключовите направления в развитието на AI технологиите</p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {aiTrends.map((trend, index) => (
                  <div key={index} className="flex items-center space-x-3 p-4 rounded-lg bg-muted/30">
                    <Zap className="h-5 w-5 text-yellow-500 flex-shrink-0" />
                    <span className="text-sm">{trend}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h2 className="text-3xl font-bold">Останете в крак с AI революцията</h2>
              <p className="text-lg opacity-90">
                Абонирайте се за нашия бюлетин и получавайте най-новите AI новини директно в пощенската си кутия
              </p>
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">Абонирайте се</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
