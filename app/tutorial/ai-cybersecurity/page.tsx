import { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, CheckCircle, ExternalLink, Shield, TrendingUp, Target, Zap, Users, BarChart3, Brain, Sparkles, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SEOHead } from "@/components/seo-head"
import { getOrganizationStructuredData, getBreadcrumbStructuredData } from "@/lib/structured-data"

export const metadata: Metadata = {
  title: "AI Киберсигурност - Предиктивна защита с AI | Lunaro News",
  description: "Научете как AI революционизира киберсигурността. Предиктивна защита, автоматично откриване на заплахи и AI-powered решения за модерни бизнеси.",
  keywords: "AI киберсигурност, предиктивна защита, AI сигурност, машинно обучение, кибератаки, България",
  openGraph: {
    title: "AI Киберсигурност - Предиктивна защита с AI",
    description: "Научете как AI революционизира киберсигурността. Предиктивна защита, автоматично откриване на заплахи и AI-powered решения.",
    type: "article",
    url: "https://lunaro.news/tutorial/ai-cybersecurity",
    images: [
      {
        url: "https://lunaro.news/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AI Киберсигурност - Lunaro News"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Киберсигурност - Предиктивна защита с AI",
    description: "Научете как AI революционизира киберсигурността. Предиктивна защита, автоматично откриване на заплахи и AI-powered решения.",
    images: ["https://lunaro.news/og-image.jpg"]
  },
  alternates: {
    canonical: "https://lunaro.news/tutorial/ai-cybersecurity"
  }
}

const breadcrumbItems = [
  { name: "Начало", url: "https://lunaro.news" },
  { name: "Tutorials", url: "https://lunaro.news/tutorials" },
  { name: "AI Киберсигурност", url: "https://lunaro.news/tutorial/ai-cybersecurity" }
]

const structuredData = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "AI Киберсигурност - Предиктивна защита с AI",
  "description": "Научете как AI революционизира киберсигурността. Предиктивна защита, автоматично откриване на заплахи и AI-powered решения за модерни бизнеси.",
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
  "mainEntityOfPage": "https://lunaro.news/tutorial/ai-cybersecurity",
  "step": [
    {
      "@type": "HowToStep",
      "name": "AI за откриване на заплахи",
      "text": "Машинно обучение за автоматично откриване на кибератаки"
    },
    {
      "@type": "HowToStep",
      "name": "Предиктивна защита",
      "text": "AI алгоритми за предвиждане на бъдещи заплахи"
    },
    {
      "@type": "HowToStep",
      "name": "Автоматизиран отговор",
      "text": "AI системи за автоматично реагиране на инциденти"
    }
  ]
}

export default function AICybersecurityTutorial() {
  return (
    <>
      <SEOHead 
        structuredData={[structuredData, getOrganizationStructuredData(), getBreadcrumbStructuredData(breadcrumbItems)]}
      />
      
      <div className="min-h-screen bg-gradient-to-b from-red-50 via-white to-orange-50">
        {/* Header */}
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Link href="/tutorials" className="flex items-center text-red-600 hover:text-red-800 transition-colors">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Назад към Tutorials
                </Link>
                <div className="h-6 w-px bg-gray-300" />
                <Badge variant="secondary" className="bg-red-100 text-red-800">
                  <Shield className="h-3 w-3 mr-1" />
                  AI Security
                </Badge>
              </div>
              <div className="flex items-center space-x-2">
                <Badge variant="outline" className="text-green-600 border-green-200">
                  <CheckCircle className="h-3 w-3 mr-1" />
                  За експерти
                </Badge>
                <Badge variant="outline" className="text-red-600 border-red-200">
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
            <div className="inline-flex items-center px-4 py-2 bg-red-100 text-red-800 rounded-full text-sm font-medium mb-6">
              <Shield className="h-4 w-4 mr-2" />
              AI Киберсигурност
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              AI Киберсигурност
              <span className="block text-red-600">Предиктивна защита с AI</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Научете как AI революционизира киберсигурността. Предиктивна защита, автоматично откриване на заплахи 
              и AI-powered решения за модерни бизнеси.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
              <div className="flex items-center">
                <Users className="h-4 w-4 mr-2" />
                За IT експерти
              </div>
              <div className="flex items-center">
                <Zap className="h-4 w-4 mr-2" />
                25 минути четене
              </div>
              <div className="flex items-center">
                <TrendingUp className="h-4 w-4 mr-2" />
                Напреднали техники
              </div>
            </div>
          </div>

          {/* Table of Contents */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="h-5 w-5 mr-2 text-red-600" />
                Съдържание на ръководството
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <a href="#threat-detection" className="block p-3 hover:bg-red-50 rounded-lg transition-colors">
                    <div className="font-medium text-gray-900">1. AI за откриване на заплахи</div>
                    <div className="text-sm text-gray-600">Машинно обучение за защита</div>
                  </a>
                  <a href="#predictive-defense" className="block p-3 hover:bg-red-50 rounded-lg transition-colors">
                    <div className="font-medium text-gray-900">2. Предиктивна защита</div>
                    <div className="text-sm text-gray-600">AI за предвиждане на атаки</div>
                  </a>
                  <a href="#automated-response" className="block p-3 hover:bg-red-50 rounded-lg transition-colors">
                    <div className="font-medium text-gray-900">3. Автоматизиран отговор</div>
                    <div className="text-sm text-gray-600">AI системи за реагиране</div>
                  </a>
                </div>
                <div className="space-y-2">
                  <a href="#behavioral-analysis" className="block p-3 hover:bg-red-50 rounded-lg transition-colors">
                    <div className="font-medium text-gray-900">4. Поведенчески анализ</div>
                    <div className="text-sm text-gray-600">AI за анализ на поведение</div>
                  </a>
                  <a href="#implementation" className="block p-3 hover:bg-red-50 rounded-lg transition-colors">
                    <div className="font-medium text-gray-900">5. Внедряване</div>
                    <div className="text-sm text-gray-600">Практически стъпки</div>
                  </a>
                  <a href="#future-trends" className="block p-3 hover:bg-red-50 rounded-lg transition-colors">
                    <div className="font-medium text-gray-900">6. Бъдещи тенденции</div>
                    <div className="text-sm text-gray-600">Развитие на AI сигурността</div>
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Main Content */}
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              {/* Threat Detection */}
              <section id="threat-detection" className="mb-12">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl flex items-center">
                      <Shield className="h-6 w-6 mr-3 text-red-600" />
                      1. AI за откриване на заплахи
                    </CardTitle>
                    <CardDescription>
                      Машинно обучение за автоматично откриване на кибератаки
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Традиционни vs AI подходи</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="p-4 bg-red-50 rounded-lg">
                          <h4 className="font-medium text-red-800 mb-2">Традиционни методи</h4>
                          <ul className="text-sm text-red-700 space-y-1">
                            <li>• Статични правила и сигнатури</li>
                            <li>• Ръчно откриване на заплахи</li>
                            <li>• Реактивен подход</li>
                            <li>• Ограничена мащабируемост</li>
                          </ul>
                        </div>
                        <div className="p-4 bg-green-50 rounded-lg">
                          <h4 className="font-medium text-green-800 mb-2">AI подходи</h4>
                          <ul className="text-sm text-green-700 space-y-1">
                            <li>• Машинно обучение за откриване</li>
                            <li>• Автоматично анализиране</li>
                            <li>• Предиктивен подход</li>
                            <li>• Висока мащабируемост</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3">AI технологии за сигурност</h3>
                      <div className="space-y-4">
                        <div className="p-4 bg-blue-50 rounded-lg">
                          <h4 className="font-medium text-blue-800 mb-2">Machine Learning</h4>
                          <p className="text-sm text-blue-700">
                            Алгоритми за откриване на аномалии и класификация на заплахи
                          </p>
                    </div>
                        <div className="p-4 bg-purple-50 rounded-lg">
                          <h4 className="font-medium text-purple-800 mb-2">Deep Learning</h4>
                          <p className="text-sm text-purple-700">
                            Невронни мрежи за сложни модели на заплахи
                          </p>
                        </div>
                        <div className="p-4 bg-orange-50 rounded-lg">
                          <h4 className="font-medium text-orange-800 mb-2">Natural Language Processing</h4>
                          <p className="text-sm text-orange-700">
                            Анализ на текст за откриване на фишинг и социални инженеринг атаки
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* CTA Section */}
              <div className="mt-16 text-center">
                <Card className="bg-gradient-to-r from-red-600 to-orange-600 text-white">
                  <CardContent className="py-12">
                    <h2 className="text-3xl font-bold mb-4">
                      Готови да внедрите AI сигурност?
                    </h2>
                    <p className="text-xl mb-8 opacity-90">
                      Използвайте нашите AI инструменти за сигурност и защитете бизнеса си!
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button asChild size="lg" variant="secondary">
                        <Link href="/security-tools">
                          <Shield className="h-5 w-5 mr-2" />
                          AI инструменти за сигурност
                        </Link>
                      </Button>
                      <Button asChild size="lg" variant="outline" className="bg-white text-red-600 hover:bg-gray-100">
                        <Link href="/tutorials">
                          <Lock className="h-5 w-5 mr-2" />
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
                      <Link href="/security-tools">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        AI сигурност инструменти
                      </Link>
                    </Button>
                    <Button asChild variant="outline" className="w-full">
                      <Link href="/cybersecurity">
                        <Shield className="h-4 w-4 mr-2" />
                        Киберсигурност новини
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
