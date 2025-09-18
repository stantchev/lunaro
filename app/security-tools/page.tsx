import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Shield, Lock, Eye, AlertTriangle, CheckCircle, ExternalLink, Search } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Инструменти за киберсигурност - Lunaro News | Безплатни security инструменти",
  description:
    "Колекция от безплатни инструменти за киберсигурност - проверка на SSL, анализ на уязвимости, тестване на пароли и защита на уебсайтове.",
  keywords:
    "киберсигурност инструменти, SSL проверка, анализ на уязвимости, тестване на пароли, security tools, България",
  openGraph: {
    title: "Инструменти за киберсигурност - Lunaro News",
    description: "Безплатни инструменти за киберсигурност и защита на уебсайтове",
    url: "https://lunaro.news/security-tools",
    siteName: "Lunaro News",
    locale: "bg_BG",
    type: "website",
  },
  alternates: {
    canonical: "https://lunaro.news/security-tools",
  },
}

export default function SecurityToolsPage() {
  const securityTools = [
    {
      name: "SSL Сертификат Проверка",
      description: "Проверете валидността и конфигурацията на SSL сертификата",
      category: "SSL/TLS",
      icon: Lock,
      severity: "high",
      free: true,
    },
    {
      name: "Анализатор на HTTP Headers",
      description: "Анализирайте security headers на вашия уебсайт",
      category: "Headers",
      icon: Shield,
      severity: "medium",
      free: true,
    },
    {
      name: "Тест за силни пароли",
      description: "Проверете силата на вашите пароли",
      category: "Пароли",
      icon: Eye,
      severity: "high",
      free: true,
    },
    {
      name: "Сканер за уязвимости",
      description: "Сканирайте уебсайта за известни уязвимости",
      category: "Уязвимости",
      icon: AlertTriangle,
      severity: "critical",
      free: false,
    },
    {
      name: "Проверка на HTTPS",
      description: "Проверете правилната конфигурация на HTTPS",
      category: "SSL/TLS",
      icon: CheckCircle,
      severity: "high",
      free: true,
    },
    {
      name: "DNS Security Проверка",
      description: "Анализирайте DNS конфигурацията за security проблеми",
      category: "DNS",
      icon: Shield,
      severity: "medium",
      free: true,
    },
  ]

  const categories = [
    { name: "Всички", count: 12, active: true },
    { name: "SSL/TLS", count: 4, active: false },
    { name: "Уязвимости", count: 3, active: false },
    { name: "Пароли", count: 2, active: false },
    { name: "Headers", count: 2, active: false },
    { name: "DNS", count: 1, active: false },
  ]

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "critical":
        return "bg-red-500"
      case "high":
        return "bg-orange-500"
      case "medium":
        return "bg-yellow-500"
      case "low":
        return "bg-green-500"
      default:
        return "bg-gray-500"
    }
  }

  const getSeverityText = (severity: string) => {
    switch (severity) {
      case "critical":
        return "Критично"
      case "high":
        return "Високо"
      case "medium":
        return "Средно"
      case "low":
        return "Ниско"
      default:
        return "Неизвестно"
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-background to-muted/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <Badge variant="secondary" className="text-lg px-4 py-2">
                Инструменти за киберсигурност
              </Badge>

              <h1 className="text-4xl lg:text-5xl font-bold text-balance">Безплатни инструменти за киберсигурност</h1>

              <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
                Професионални инструменти за анализ на сигурността, проверка на уязвимости и защита на вашите уебсайтове
              </p>

              <div className="max-w-md mx-auto">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input placeholder="Търсете security инструмент..." className="pl-10" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Security Alert */}
        <section className="py-8 bg-orange-50 dark:bg-orange-950/20 border-y border-orange-200 dark:border-orange-800">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-orange-900 dark:text-orange-100 mb-1">Важно за сигурността</h3>
                  <p className="text-sm text-orange-800 dark:text-orange-200">
                    Тези инструменти са предназначени за образователни цели и тестване на собствени системи. Не
                    използвайте за неоторизирано тестване на чужди системи.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Categories */}
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

        {/* Security Tools Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-4">Инструменти за киберсигурност</h2>
                <p className="text-muted-foreground">
                  Професионални инструменти за анализ и подобряване на сигурността на вашите системи
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {securityTools.map((tool, index) => (
                  <Card key={index} className="group hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-4">
                        <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                          <tool.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex items-center space-x-2">
                          {tool.free && <Badge variant="secondary">Безплатен</Badge>}
                          <div className="flex items-center space-x-1">
                            <div className={`w-2 h-2 rounded-full ${getSeverityColor(tool.severity)}`} />
                            <span className="text-xs text-muted-foreground">{getSeverityText(tool.severity)}</span>
                          </div>
                        </div>
                      </div>
                      <CardTitle className="group-hover:text-primary transition-colors">{tool.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground text-sm">{tool.description}</p>

                      <div className="flex items-center justify-between">
                        <Badge variant="outline" className="text-xs">
                          {tool.category}
                        </Badge>
                      </div>

                      <Button className="w-full">
                        Използвай инструмента
                        <ExternalLink className="h-4 w-4 ml-2" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Security Tips */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Съвети за киберсигурност</h2>

              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Shield className="h-5 w-5 text-green-600" />
                      <span>Основни мерки</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex items-center space-x-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Използвайте силни пароли</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Активирайте двуфакторна автентикация</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Редовно актуализирайте софтуера</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Lock className="h-5 w-5 text-blue-600" />
                      <span>За уебсайтове</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex items-center space-x-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Използвайте HTTPS навсякъде</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Конфигурирайте security headers</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Редовно сканирайте за уязвимости</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h2 className="text-3xl font-bold">Нужна ви помощ с киберсигурността?</h2>
              <p className="text-muted-foreground text-lg">
                Нашият екип от експерти може да ви помогне с анализ на сигурността и препоръки за подобрения
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
