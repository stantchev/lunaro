import { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, CheckCircle, ExternalLink, PenTool, TrendingUp, Target, Zap, Users, BarChart3, Brain, Sparkles, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SEOHead } from "@/components/seo-head"
import { getOrganizationStructuredData, getBreadcrumbStructuredData } from "@/lib/structured-data"

export const metadata: Metadata = {
  title: "Генеративно AI съдържание - AI за създаване на контент | Lunaro News",
  description: "Научете как да използвате AI за създаване на качествено съдържание. ChatGPT, Claude, автоматично генериране на текстове, статии и маркетингови материали.",
  keywords: "генеративно AI, AI съдържание, ChatGPT съдържание, AI писане, автоматично генериране, България",
  openGraph: {
    title: "Генеративно AI съдържание - AI за създаване на контент",
    description: "Научете как да използвате AI за създаване на качествено съдържание. ChatGPT, Claude, автоматично генериране на текстове, статии и маркетингови материали.",
    type: "article",
    url: "https://lunaro.news/tutorial/generative-ai-content",
    images: [
      {
        url: "https://lunaro.news/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Генеративно AI съдържание - Lunaro News"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Генеративно AI съдържание - AI за създаване на контент",
    description: "Научете как да използвате AI за създаване на качествено съдържание. ChatGPT, Claude, автоматично генериране на текстове, статии и маркетингови материали.",
    images: ["https://lunaro.news/og-image.jpg"]
  },
  alternates: {
    canonical: "https://lunaro.news/tutorial/generative-ai-content"
  }
}

const breadcrumbItems = [
  { name: "Начало", url: "https://lunaro.news" },
  { name: "Tutorials", url: "https://lunaro.news/tutorials" },
  { name: "Генеративно AI съдържание", url: "https://lunaro.news/tutorial/generative-ai-content" }
]

const structuredData = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Генеративно AI съдържание - AI за създаване на контент",
  "description": "Научете как да използвате AI за създаване на качествено съдържание. ChatGPT, Claude, автоматично генериране на текстове, статии и маркетингови материали за модерни бизнеси.",
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
  "mainEntityOfPage": "https://lunaro.news/tutorial/generative-ai-content",
  "step": [
    {
      "@type": "HowToStep",
      "name": "AI инструменти за писане",
      "text": "ChatGPT, Claude и други AI асистенти за създаване на съдържание"
    },
    {
      "@type": "HowToStep",
      "name": "Стратегии за AI съдържание",
      "text": "Ефективни техники за генериране на качествено съдържание"
    },
    {
      "@type": "HowToStep",
      "name": "Оптимизация и редактиране",
      "text": "AI за оптимизация и подобряване на генерираното съдържание"
    }
  ]
}

export default function GenerativeAIContentTutorial() {
  return (
    <>
      <SEOHead 
        structuredData={[structuredData, getOrganizationStructuredData(), getBreadcrumbStructuredData(breadcrumbItems)]}
      />
      
      <div className="min-h-screen bg-gradient-to-b from-purple-50 via-white to-pink-50">
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
                  <PenTool className="h-3 w-3 mr-1" />
                  AI Content
                </Badge>
              </div>
              <div className="flex items-center space-x-2">
                <Badge variant="outline" className="text-green-600 border-green-200">
                  <CheckCircle className="h-3 w-3 mr-1" />
                  За всички
                </Badge>
                <Badge variant="outline" className="text-purple-600 border-purple-200">
                  <Brain className="h-3 w-3 mr-1" />
                  25 мин четене
                </Badge>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium mb-6">
              <PenTool className="h-4 w-4 mr-2" />
              Генеративно AI съдържание
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Генеративно AI съдържание
              <span className="block text-purple-600">AI за създаване на контент</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Научете как да използвате AI за създаване на качествено съдържание. ChatGPT, Claude, 
              автоматично генериране на текстове, статии и маркетингови материали за модерни бизнеси.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
              <div className="flex items-center">
                <Users className="h-4 w-4 mr-2" />
                За всички нива
              </div>
              <div className="flex items-center">
                <Zap className="h-4 w-4 mr-2" />
                25 минути четене
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
                <PenTool className="h-5 w-5 mr-2 text-purple-600" />
                Съдържание на ръководството
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <a href="#ai-tools" className="block p-3 hover:bg-purple-50 rounded-lg transition-colors">
                    <div className="font-medium text-gray-900">1. AI инструменти за писане</div>
                    <div className="text-sm text-gray-600">ChatGPT, Claude, Perplexity</div>
                  </a>
                  <a href="#content-strategies" className="block p-3 hover:bg-purple-50 rounded-lg transition-colors">
                    <div className="font-medium text-gray-900">2. Стратегии за AI съдържание</div>
                    <div className="text-sm text-gray-600">Ефективни техники</div>
                  </a>
                  <a href="#optimization" className="block p-3 hover:bg-purple-50 rounded-lg transition-colors">
                    <div className="font-medium text-gray-900">3. Оптимизация и редактиране</div>
                    <div className="text-sm text-gray-600">AI за подобряване</div>
                  </a>
                </div>
                <div className="space-y-2">
                  <a href="#content-types" className="block p-3 hover:bg-purple-50 rounded-lg transition-colors">
                    <div className="font-medium text-gray-900">4. Типове съдържание</div>
                    <div className="text-sm text-gray-600">Блог постове, статии, маркетинг</div>
                  </a>
                  <a href="#best-practices" className="block p-3 hover:bg-purple-50 rounded-lg transition-colors">
                    <div className="font-medium text-gray-900">5. Най-добри практики</div>
                    <div className="text-sm text-gray-600">Съвети за качество</div>
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
              {/* AI Tools */}
              <section id="ai-tools" className="mb-12">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl flex items-center">
                      <PenTool className="h-6 w-6 mr-3 text-purple-600" />
                      1. AI инструменти за писане
                    </CardTitle>
                    <CardDescription>
                      ChatGPT, Claude и други AI асистенти за създаване на съдържание
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-3">ChatGPT (OpenAI)</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="p-4 bg-blue-50 rounded-lg">
                          <h4 className="font-medium text-blue-800 mb-2">Предимства</h4>
                          <ul className="text-sm text-blue-700 space-y-1">
                            <li>• Най-популярен AI писател</li>
                            <li>• Отличен за различни стилове</li>
                            <li>• Бързо генериране</li>
                            <li>• Лесна употреба</li>
                          </ul>
                        </div>
                        <div className="p-4 bg-green-50 rounded-lg">
                          <h4 className="font-medium text-green-800 mb-2">Приложения</h4>
                          <ul className="text-sm text-green-700 space-y-1">
                            <li>• Блог постове и статии</li>
                            <li>• Маркетингови текстове</li>
                            <li>• Социални мрежи</li>
                            <li>• Имейл кампании</li>
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
                            <li>• По-дълги текстове</li>
                            <li>• По-детайлен анализ</li>
                            <li>• По-безопасен</li>
                            <li>• Отличен за сложни задачи</li>
                          </ul>
                        </div>
                        <div className="p-4 bg-orange-50 rounded-lg">
                          <h4 className="font-medium text-orange-800 mb-2">Приложения</h4>
                          <ul className="text-sm text-orange-700 space-y-1">
                            <li>• Дълги статии и ръководства</li>
                            <li>• Техническа документация</li>
                            <li>• Анализ и резюме</li>
                            <li>• Сложни проекти</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* CTA Section */}
              <div className="mt-16 text-center">
                <Card className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                  <CardContent className="py-12">
                    <h2 className="text-3xl font-bold mb-4">
                      Готови да създавате AI съдържание?
                    </h2>
                    <p className="text-xl mb-8 opacity-90">
                      Използвайте нашите AI инструменти и започнете да генерирате качествено съдържание днес!
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button asChild size="lg" variant="secondary">
                        <Link href="/tools">
                          <PenTool className="h-5 w-5 mr-2" />
                          AI инструменти
                        </Link>
                      </Button>
                      <Button asChild size="lg" variant="outline" className="bg-white text-purple-600 hover:bg-gray-100">
                        <Link href="/tutorials">
                          <FileText className="h-5 w-5 mr-2" />
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
                        <PenTool className="h-4 w-4 mr-2" />
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
