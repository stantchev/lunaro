import { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, CheckCircle, ExternalLink, Bot, TrendingUp, Target, Zap, Users, BarChart3, Brain, Sparkles, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SEOHead } from "@/components/seo-head"
import { getOrganizationStructuredData, getBreadcrumbStructuredData } from "@/lib/structured-data"

export const metadata: Metadata = {
  title: "AI Бизнес Инструменти - Пълно ръководство за автоматизация | Lunaro News",
  description: "Открийте най-добрите AI инструменти за бизнеса. ChatGPT, Claude, автоматизация, анализ на данни и AI решения за български компании.",
  keywords: "AI бизнес инструменти, ChatGPT, Claude, AI автоматизация, бизнес AI, AI анализ, България",
  openGraph: {
    title: "AI Бизнес Инструменти - Пълно ръководство за автоматизация",
    description: "Открийте най-добрите AI инструменти за бизнеса. ChatGPT, Claude, автоматизация, анализ на данни и AI решения.",
    type: "article",
    url: "https://lunaro.news/tutorial/ai-business-tools",
    images: [
      {
        url: "https://lunaro.news/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AI Бизнес Инструменти - Lunaro News"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Бизнес Инструменти - Пълно ръководство за автоматизация",
    description: "Открийте най-добрите AI инструменти за бизнеса. ChatGPT, Claude, автоматизация, анализ на данни и AI решения.",
    images: ["https://lunaro.news/og-image.jpg"]
  },
  alternates: {
    canonical: "https://lunaro.news/tutorial/ai-business-tools"
  }
}

const breadcrumbItems = [
  { name: "Начало", url: "https://lunaro.news" },
  { name: "Tutorials", url: "https://lunaro.news/tutorials" },
  { name: "AI Бизнес Инструменти", url: "https://lunaro.news/tutorial/ai-business-tools" }
]

const structuredData = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "AI Бизнес Инструменти - Пълно ръководство за автоматизация",
  "description": "Открийте най-добрите AI инструменти за бизнеса. ChatGPT, Claude, автоматизация, анализ на данни и AI решения за български компании.",
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
  "mainEntityOfPage": "https://lunaro.news/tutorial/ai-business-tools",
  "step": [
    {
      "@type": "HowToStep",
      "name": "AI инструменти за комуникация",
      "text": "ChatGPT, Claude и други AI асистенти за бизнес комуникация"
    },
    {
      "@type": "HowToStep",
      "name": "Автоматизация на процеси",
      "text": "AI решения за автоматизиране на бизнес процеси"
    },
    {
      "@type": "HowToStep",
      "name": "Анализ на данни",
      "text": "AI инструменти за анализ и визуализация на данни"
    },
    {
      "@type": "HowToStep",
      "name": "AI за маркетинг",
      "text": "AI решения за дигитален маркетинг и реклама"
    }
  ]
}

export default function AIBusinessToolsTutorial() {
  return (
    <>
      <SEOHead 
        structuredData={[structuredData, getOrganizationStructuredData(), getBreadcrumbStructuredData(breadcrumbItems)]}
      />
      
      <div className="min-h-screen bg-gradient-to-b from-purple-50 via-white to-blue-50">
        {/* Header */}
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Link href="/tutorials" className="flex items-center text-purple-600 hover:text-purple-800 transition-colors">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Назад към Tutorials
                </Link>
                <div className="h-6 w-px bg-gray-300" />
                <Badge variant="secondary" className="bg-purple-100 text-purple-800">
                  <Bot className="h-3 w-3 mr-1" />
                  AI Tutorial
                </Badge>
              </div>
              <div className="flex items-center space-x-2">
                <Badge variant="outline" className="text-green-600 border-green-200">
                  <CheckCircle className="h-3 w-3 mr-1" />
                  За бизнес
                </Badge>
                <Badge variant="outline" className="text-purple-600 border-purple-200">
                  <Brain className="h-3 w-3 mr-1" />
                  20 мин четене
                </Badge>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium mb-6">
              <Bot className="h-4 w-4 mr-2" />
              AI Бизнес Инструменти
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              AI Бизнес Инструменти
              <span className="block text-purple-600">Пълно ръководство за автоматизация</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Открийте най-добрите AI инструменти за бизнеса. От ChatGPT и Claude до автоматизация 
              на процеси и анализ на данни - всичко за модерния български бизнес.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
              <div className="flex items-center">
                <Users className="h-4 w-4 mr-2" />
                За бизнес лидери
              </div>
              <div className="flex items-center">
                <Zap className="h-4 w-4 mr-2" />
                20 минути четене
              </div>
              <div className="flex items-center">
                <TrendingUp className="h-4 w-4 mr-2" />
                Практически примери
              </div>
            </div>
          </div>

          {/* Table of Contents */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Bot className="h-5 w-5 mr-2 text-purple-600" />
                Съдържание на ръководството
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <a href="#ai-communication" className="block p-3 hover:bg-purple-50 rounded-lg transition-colors">
                    <div className="font-medium text-gray-900">1. AI за комуникация</div>
                    <div className="text-sm text-gray-600">ChatGPT, Claude, Perplexity</div>
                  </a>
                  <a href="#automation" className="block p-3 hover:bg-purple-50 rounded-lg transition-colors">
                    <div className="font-medium text-gray-900">2. Автоматизация</div>
                    <div className="text-sm text-gray-600">AI за бизнес процеси</div>
                  </a>
                  <a href="#data-analysis" className="block p-3 hover:bg-purple-50 rounded-lg transition-colors">
                    <div className="font-medium text-gray-900">3. Анализ на данни</div>
                    <div className="text-sm text-gray-600">AI за бизнес аналитика</div>
                  </a>
                </div>
                <div className="space-y-2">
                  <a href="#marketing-ai" className="block p-3 hover:bg-purple-50 rounded-lg transition-colors">
                    <div className="font-medium text-gray-900">4. AI за маркетинг</div>
                    <div className="text-sm text-gray-600">Дигитален маркетинг</div>
                  </a>
                  <a href="#productivity" className="block p-3 hover:bg-purple-50 rounded-lg transition-colors">
                    <div className="font-medium text-gray-900">5. Продуктивност</div>
                    <div className="text-sm text-gray-600">AI за ефективност</div>
                  </a>
                  <a href="#implementation" className="block p-3 hover:bg-purple-50 rounded-lg transition-colors">
                    <div className="font-medium text-gray-900">6. Внедряване</div>
                    <div className="text-sm text-gray-600">Практически стъпки</div>
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Main Content */}
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              {/* AI Communication */}
              <section id="ai-communication" className="mb-12">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl flex items-center">
                      <Bot className="h-6 w-6 mr-3 text-purple-600" />
                      1. AI за комуникация
                    </CardTitle>
                    <CardDescription>
                      Най-добрите AI асистенти за бизнес комуникация
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-3">ChatGPT (OpenAI)</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="p-4 bg-blue-50 rounded-lg">
                          <h4 className="font-medium text-blue-800 mb-2">Предимства</h4>
                          <ul className="text-sm text-blue-700 space-y-1">
                            <li>• Най-популярен AI асистент</li>
                            <li>• Отличен за писане и редактиране</li>
                            <li>• Интеграция с Microsoft Office</li>
                            <li>• API за автоматизация</li>
                          </ul>
                        </div>
                        <div className="p-4 bg-green-50 rounded-lg">
                          <h4 className="font-medium text-green-800 mb-2">Бизнес приложения</h4>
                          <ul className="text-sm text-green-700 space-y-1">
                            <li>• Писане на имейли и документи</li>
                            <li>• Създаване на презентации</li>
                            <li>• Анализ на данни</li>
                            <li>• Код генериране</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3">Claude (Anthropic)</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="p-4 bg-purple-50 rounded-lg">
                          <h4 className="font-medium text-purple-800 mb-2">Предимства</h4>
                          <ul className="text-sm text-purple-700 space-y-1">
                            <li>• По-добър анализ на документи</li>
                            <li>• По-безопасен и етичен</li>
                            <li>• Отличен за сложни задачи</li>
                            <li>• Дълги контексти</li>
                          </ul>
                        </div>
                        <div className="p-4 bg-orange-50 rounded-lg">
                          <h4 className="font-medium text-orange-800 mb-2">Бизнес приложения</h4>
                          <ul className="text-sm text-orange-700 space-y-1">
                            <li>• Анализ на договори</li>
                            <li>• Резюме на дълги документи</li>
                            <li>• Иследване и анализ</li>
                            <li>• Етични AI решения</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* CTA Section */}
              <div className="mt-16 text-center">
                <Card className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
                  <CardContent className="py-12">
                    <h2 className="text-3xl font-bold mb-4">
                      Готови да внедрите AI в бизнеса си?
                    </h2>
                    <p className="text-xl mb-8 opacity-90">
                      Използвайте нашите AI инструменти и започнете автоматизацията днес!
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button asChild size="lg" variant="secondary">
                        <Link href="/tools">
                          <Bot className="h-5 w-5 mr-2" />
                          AI инструменти
                        </Link>
                      </Button>
                      <Button asChild size="lg" variant="outline" className="bg-white text-purple-600 hover:bg-gray-100">
                        <Link href="/tutorials">
                          <Shield className="h-5 w-5 mr-2" />
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
                        AI инструменти
                      </Link>
                    </Button>
                    <Button asChild variant="outline" className="w-full">
                      <Link href="/ai">
                        <Bot className="h-4 w-4 mr-2" />
                        AI новини
                      </Link>
                    </Button>
                    <Button asChild variant="outline" className="w-full">
                      <Link href="/contact">
                        <Users className="h-4 w-4 mr-2" />
                        AI консултация
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
