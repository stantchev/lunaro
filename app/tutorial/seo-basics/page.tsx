import { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, CheckCircle, ExternalLink, BookOpen, Target, TrendingUp, Search, Globe, Users, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SEOHead } from "@/components/seo-head"
import { getOrganizationStructuredData, getBreadcrumbStructuredData } from "@/lib/structured-data"

export const metadata: Metadata = {
  title: "SEO Основи - Пълно ръководство за начинаещи | Lunaro News",
  description: "Научете SEO от нулата с нашето пълно ръководство. Техническо SEO, ключови думи, съдържание и аналитика за успешен уебсайт в България.",
  keywords: "SEO основи, SEO ръководство, техническо SEO, ключови думи, Google SEO, уеб оптимизация, България",
  openGraph: {
    title: "SEO Основи - Пълно ръководство за начинаещи",
    description: "Научете SEO от нулата с нашето пълно ръководство. Техническо SEO, ключови думи, съдържание и аналитика.",
    type: "article",
    url: "https://lunaro.news/tutorial/seo-basics",
    images: [
      {
        url: "https://lunaro.news/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SEO Основи - Lunaro News"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO Основи - Пълно ръководство за начинаещи",
    description: "Научете SEO от нулата с нашето пълно ръководство. Техническо SEO, ключови думи, съдържание и аналитика.",
    images: ["https://lunaro.news/og-image.jpg"]
  },
  alternates: {
    canonical: "https://lunaro.news/tutorial/seo-basics"
  }
}

const breadcrumbItems = [
  { name: "Начало", url: "https://lunaro.news" },
  { name: "Tutorials", url: "https://lunaro.news/tutorials" },
  { name: "SEO Основи", url: "https://lunaro.news/tutorial/seo-basics" }
]

const structuredData = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "SEO Основи - Пълно ръководство за начинаещи",
  "description": "Научете SEO от нулата с нашето пълно ръководство. Техническо SEO, ключови думи, съдържание и аналитика за успешен уебсайт в България.",
  "image": "https://lunaro.news/og-image.jpg",
  "author": {
    "@type": "Organization",
    "name": "Lunaro News Team"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Lunaro News",
    "logo": {
      "@type": "ImageObject",
      "url": "https://lunaro.news/logo-desktop.png"
    }
  },
  "datePublished": "2025-01-27",
  "dateModified": "2025-01-27",
  "mainEntityOfPage": "https://lunaro.news/tutorial/seo-basics",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Разбиране на SEO основите",
      "text": "Научете какво е SEO и защо е важно за вашия уебсайт"
    },
    {
      "@type": "HowToStep", 
      "name": "Техническо SEO",
      "text": "Оптимизирайте техническата страна на вашия сайт"
    },
    {
      "@type": "HowToStep",
      "name": "Ключови думи и съдържание",
      "text": "Изберете правилните ключови думи и създайте качествено съдържание"
    },
    {
      "@type": "HowToStep",
      "name": "Аналитика и измерване",
      "text": "Проследявайте резултатите и оптимизирайте стратегията си"
    }
  ]
}

export default function SEOBasicsTutorial() {
  return (
    <>
      <SEOHead 
        structuredData={[structuredData, getOrganizationStructuredData(), getBreadcrumbStructuredData(breadcrumbItems)]}
      />
      
      <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-cyan-50">
        {/* Header */}
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Link href="/tutorials" className="flex items-center text-blue-600 hover:text-blue-800 transition-colors">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Назад към Tutorials
                </Link>
                <div className="h-6 w-px bg-gray-300" />
                <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                  <BookOpen className="h-3 w-3 mr-1" />
                  Tutorial
                </Badge>
              </div>
              <div className="flex items-center space-x-2">
                <Badge variant="outline" className="text-green-600 border-green-200">
                  <CheckCircle className="h-3 w-3 mr-1" />
                  За начинаещи
                </Badge>
                <Badge variant="outline" className="text-blue-600 border-blue-200">
                  <Zap className="h-3 w-3 mr-1" />
                  15 мин четене
                </Badge>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
              <Target className="h-4 w-4 mr-2" />
              SEO Основи
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              SEO Основи
              <span className="block text-blue-600">Пълно ръководство за начинаещи</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Научете SEO от нулата с нашето пълно ръководство. От техническо SEO до ключови думи, 
              съдържание и аналитика - всичко, което трябва да знаете за успешен уебсайт в България.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
              <div className="flex items-center">
                <Users className="h-4 w-4 mr-2" />
                За начинаещи и напреднали
              </div>
              <div className="flex items-center">
                <Zap className="h-4 w-4 mr-2" />
                15 минути четене
              </div>
              <div className="flex items-center">
                <TrendingUp className="h-4 w-4 mr-2" />
                Практически съвети
              </div>
            </div>
          </div>

          {/* Table of Contents */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="flex items-center">
                <BookOpen className="h-5 w-5 mr-2 text-blue-600" />
                Съдържание на ръководството
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <a href="#what-is-seo" className="block p-3 hover:bg-blue-50 rounded-lg transition-colors">
                    <div className="font-medium text-gray-900">1. Какво е SEO?</div>
                    <div className="text-sm text-gray-600">Основни понятия и важност</div>
                  </a>
                  <a href="#technical-seo" className="block p-3 hover:bg-blue-50 rounded-lg transition-colors">
                    <div className="font-medium text-gray-900">2. Техническо SEO</div>
                    <div className="text-sm text-gray-600">Структура и производителност</div>
                  </a>
                  <a href="#keywords" className="block p-3 hover:bg-blue-50 rounded-lg transition-colors">
                    <div className="font-medium text-gray-900">3. Ключови думи</div>
                    <div className="text-sm text-gray-600">Изследване и избор</div>
                  </a>
                </div>
                <div className="space-y-2">
                  <a href="#content-optimization" className="block p-3 hover:bg-blue-50 rounded-lg transition-colors">
                    <div className="font-medium text-gray-900">4. Оптимизация на съдържанието</div>
                    <div className="text-sm text-gray-600">Качествено съдържание</div>
                  </a>
                  <a href="#analytics" className="block p-3 hover:bg-blue-50 rounded-lg transition-colors">
                    <div className="font-medium text-gray-900">5. Аналитика и измерване</div>
                    <div className="text-sm text-gray-600">Проследяване на резултатите</div>
                  </a>
                  <a href="#tools" className="block p-3 hover:bg-blue-50 rounded-lg transition-colors">
                    <div className="font-medium text-gray-900">6. SEO инструменти</div>
                    <div className="text-sm text-gray-600">Полезни ресурси</div>
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Main Content */}
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              {/* What is SEO */}
              <section id="what-is-seo" className="mb-12">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl flex items-center">
                      <Search className="h-6 w-6 mr-3 text-blue-600" />
                      1. Какво е SEO?
                    </CardTitle>
                    <CardDescription>
                      Основни понятия и защо SEO е важно за вашия уебсайт
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Определение на SEO</h3>
                      <p className="text-gray-700 mb-4">
                        <strong>Search Engine Optimization (SEO)</strong> е процесът на оптимизиране на уебсайт, 
                        за да се подобри неговата видимост в резултатите от търсенето на Google и други търсачки.
                      </p>
                      <p className="text-gray-700">
                        Целта е да се постигне по-високо класиране за релевантни ключови думи, 
                        което води до повече органичен трафик и потенциални клиенти.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3">Защо SEO е важно?</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="p-4 bg-green-50 rounded-lg">
                          <h4 className="font-medium text-green-800 mb-2">Органичен трафик</h4>
                          <p className="text-sm text-green-700">
                            93% от онлайн опитите започват с търсене в Google
                          </p>
                        </div>
                        <div className="p-4 bg-blue-50 rounded-lg">
                          <h4 className="font-medium text-blue-800 mb-2">Дългосрочни резултати</h4>
                          <p className="text-sm text-blue-700">
                            SEO ефектът продължава месеци и години
                          </p>
                        </div>
                        <div className="p-4 bg-purple-50 rounded-lg">
                          <h4 className="font-medium text-purple-800 mb-2">Доверие и авторитет</h4>
                          <p className="text-sm text-purple-700">
                            Високите позиции изграждат доверие
                          </p>
                        </div>
                        <div className="p-4 bg-orange-50 rounded-lg">
                          <h4 className="font-medium text-orange-800 mb-2">ROI</h4>
                          <p className="text-sm text-orange-700">
                            SEO има най-висок ROI от всички маркетингови канали
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* CTA Section */}
              <div className="mt-16 text-center">
                <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                  <CardContent className="py-12">
                    <h2 className="text-3xl font-bold mb-4">
                      Готови да приложите SEO знанията си?
                    </h2>
                    <p className="text-xl mb-8 opacity-90">
                      Използвайте нашите SEO инструменти и започнете оптимизацията на вашия сайт днес!
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button asChild size="lg" variant="secondary">
                        <Link href="/tools">
                          <Zap className="h-5 w-5 mr-2" />
                          SEO инструменти
                        </Link>
                      </Button>
                      <Button asChild size="lg" variant="outline" className="bg-white text-blue-600 hover:bg-gray-100">
                        <Link href="/tutorials">
                          <BookOpen className="h-5 w-5 mr-2" />
                          Още уроци
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                      </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-6">
                {/* Quick Actions */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Бързи действия</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button asChild className="w-full">
                      <Link href="/tools">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        SEO инструменти
                      </Link>
                    </Button>
                    <Button asChild variant="outline" className="w-full">
                      <Link href="/seo">
                        <TrendingUp className="h-4 w-4 mr-2" />
                        SEO новини
                      </Link>
                    </Button>
                    <Button asChild variant="outline" className="w-full">
                      <Link href="/contact">
                        <Users className="h-4 w-4 mr-2" />
                        Консултация
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
