import { Metadata } from "next"
import Link from "next/link"
import { 
  ArrowLeft, CheckCircle, ExternalLink, Search, TrendingUp, Target, 
  Zap, Users, BarChart3, Brain, Sparkles, Globe 
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SEOHead } from "@/components/seo-head"

export const metadata: Metadata = {
  title: "Автоматизирано SEO - AI за SEO оптимизация | Lunaro News",
  description: "Научете как да автоматизирате SEO процесите с AI инструменти. Автоматично генериране на съдържание, анализ на ключови думи и AI-powered SEO стратегии.",
  keywords: "автоматизирано SEO, AI SEO, SEO автоматизация, AI инструменти, SEO оптимизация, България",
  openGraph: {
    title: "Автоматизирано SEO - AI за SEO оптимизация",
    description: "Научете как да автоматизирате SEO процесите с AI инструменти. Автоматично генериране на съдържание, анализ на ключови думи и AI-powered SEO стратегии.",
    type: "article",
    url: "https://lunaro.news/tutorial/automated-seo",
    images: [
      {
        url: "https://lunaro.news/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Автоматизирано SEO - Lunaro News"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Автоматизирано SEO - AI за SEO оптимизация",
    description: "Научете как да автоматизирате SEO процесите с AI инструменти. Автоматично генериране на съдържание, анализ на ключови думи и AI-powered SEO стратегии.",
    images: ["https://lunaro.news/og-image.jpg"]
  },
  alternates: {
    canonical: "https://lunaro.news/tutorial/automated-seo"
  }
}

const structuredData = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Автоматизирано SEO - AI за SEO оптимизация",
  "description": "Научете как да автоматизирате SEO процесите с AI инструменти. Автоматично генериране на съдържание, анализ на ключови думи и AI-powered SEO стратегии за модерни бизнеси.",
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
  "mainEntityOfPage": "https://lunaro.news/tutorial/automated-seo",
  "step": [
    {
      "@type": "HowToStep",
      "name": "AI за анализ на ключови думи",
      "text": "Използвайте NLP и ML за автоматичен анализ на ключови думи"
    },
    {
      "@type": "HowToStep",
      "name": "Автоматично създаване на съдържание",
      "text": "Внедрете generative AI за създаване на SEO-оптимизирано съдържание"
    },
    {
      "@type": "HowToStep",
      "name": "Техническо SEO автоматизация",
      "text": "Автоматизирайте техническите SEO задачи с AI инструменти"
    },
    {
      "@type": "HowToStep",
      "name": "Мониторинг и анализ",
      "text": "Настройте автоматични отчети и alerts за SEO резултати"
    }
  ]
}

export default function AutomatedSEOTutorial() {
  return (
    <div>
      <SEOHead structuredData={structuredData} />
      
      <div className="min-h-screen bg-gradient-to-b from-green-50 via-white to-blue-50">
        {/* Header */}
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Link href="/tutorials" className="flex items-center text-green-600 hover:text-green-800 transition-colors">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Назад към Tutorials
                </Link>
                <div className="h-6 w-px bg-gray-300"></div>
                <Badge variant="secondary" className="bg-green-100 text-green-800">
                  <Search className="h-3 w-3 mr-1" />
                  SEO Tutorial
                </Badge>
              </div>
              <div className="flex items-center space-x-2">
                <Badge variant="outline" className="text-green-600 border-green-200">
                  <CheckCircle className="h-3 w-3 mr-1" />
                  За експерти
                </Badge>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Автоматизирано SEO
            </h1>
              <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
              Научете как да автоматизирате SEO процесите с AI инструменти. Автоматично генериране на съдържание, 
              анализ на ключови думи и AI-powered SEO стратегии за модерни бизнеси.
            </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" variant="secondary">
                  <Link href="#keyword-analysis">
                    <Search className="h-5 w-5 mr-2" />
                    Започни тук
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-white text-green-600 hover:bg-gray-100">
                  <Link href="/tools">
                    <Zap className="h-5 w-5 mr-2" />
                    SEO инструменти
                  </Link>
                </Button>
              </div>
              </div>
            </div>
          </div>

          {/* Table of Contents */}
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <Card>
            <CardHeader>
                <CardTitle className="text-xl">Съдържание на ръководството</CardTitle>
                <CardDescription>
                  Навигация по всички секции на автоматизирано SEO ръководството
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 font-semibold text-sm">1</span>
                    </div>
                    <div>
                      <h3 className="font-medium">Анализ на ключови думи</h3>
                      <p className="text-sm text-gray-600">NLP, ML</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-semibold text-sm">2</span>
                    </div>
                    <div>
                      <h3 className="font-medium">Автоматично съдържание</h3>
                      <p className="text-sm text-gray-600">Generative AI</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                      <span className="text-purple-600 font-semibold text-sm">3</span>
                    </div>
                    <div>
                      <h3 className="font-medium">Техническо SEO</h3>
                      <p className="text-sm text-gray-600">Автоматизация</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                      <span className="text-orange-600 font-semibold text-sm">4</span>
                    </div>
                    <div>
                      <h3 className="font-medium">Оптимизация</h3>
                      <p className="text-sm text-gray-600">AI инструменти</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                      <span className="text-red-600 font-semibold text-sm">5</span>
                    </div>
                    <div>
                      <h3 className="font-medium">Мониторинг</h3>
                      <p className="text-sm text-gray-600">Автоматични отчети</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center">
                      <span className="text-cyan-600 font-semibold text-sm">6</span>
                    </div>
                    <div>
                      <h3 className="font-medium">Внедряване</h3>
                      <p className="text-sm text-gray-600">Стратегия</p>
                    </div>
                </div>
              </div>
            </CardContent>
          </Card>
          </div>
        </div>

          {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              {/* Keyword Analysis */}
              <section id="keyword-analysis" className="mb-12">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl flex items-center">
                      <Search className="h-6 w-6 mr-3 text-green-600" />
                      1. AI за анализ на ключови думи
                    </CardTitle>
                    <CardDescription>
                      Използвайте NLP и ML за автоматичен анализ на ключови думи
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-3">NLP технологии</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="p-4 bg-green-50 rounded-lg">
                          <h4 className="font-medium text-green-800 mb-2">Semantic Analysis</h4>
                          <ul className="text-sm text-green-700 space-y-1">
                            <li>• Intent recognition</li>
                            <li>• Topic modeling</li>
                            <li>• Keyword clustering</li>
                            <li>• Related terms</li>
                          </ul>
                        </div>
                        <div className="p-4 bg-blue-50 rounded-lg">
                          <h4 className="font-medium text-blue-800 mb-2">Competition Analysis</h4>
                          <ul className="text-sm text-blue-700 space-y-1">
                            <li>• SERP analysis</li>
                            <li>• Competitor keywords</li>
                            <li>• Content gaps</li>
                            <li>• Opportunity detection</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3">ML модели</h3>
                      <div className="space-y-4">
                        <div className="p-4 bg-purple-50 rounded-lg">
                          <h4 className="font-medium text-purple-800 mb-2">Keyword Difficulty Prediction</h4>
                          <p className="text-sm text-purple-700">
                            AI модели могат да предсказват трудността на ключови думи въз основа на конкурентния анализ.
                          </p>
                        </div>
                        <div className="p-4 bg-orange-50 rounded-lg">
                          <h4 className="font-medium text-orange-800 mb-2">Trend Analysis</h4>
                          <p className="text-sm text-orange-700">
                            ML алгоритми анализират исторически данни за прогнозиране на бъдещи трендове в търсенето.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* Automated Content */}
              <section id="automated-content" className="mb-12">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl flex items-center">
                      <Brain className="h-6 w-6 mr-3 text-green-600" />
                      2. Автоматично създаване на съдържание
                    </CardTitle>
                    <CardDescription>
                      Внедрете generative AI за създаване на SEO-оптимизирано съдържание
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Generative AI</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="p-4 bg-green-50 rounded-lg">
                          <h4 className="font-medium text-green-800 mb-2">Content Generation</h4>
                          <ul className="text-sm text-green-700 space-y-1">
                            <li>• Blog posts</li>
                            <li>• Product descriptions</li>
                            <li>• Meta descriptions</li>
                            <li>• Social media posts</li>
                          </ul>
                        </div>
                        <div className="p-4 bg-blue-50 rounded-lg">
                          <h4 className="font-medium text-blue-800 mb-2">Content Optimization</h4>
                          <ul className="text-sm text-blue-700 space-y-1">
                            <li>• Keyword integration</li>
                            <li>• Readability improvement</li>
                            <li>• Structure optimization</li>
                            <li>• SEO scoring</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3">Prompt Engineering</h3>
                      <div className="space-y-4">
                        <div className="p-4 bg-purple-50 rounded-lg">
                          <h4 className="font-medium text-purple-800 mb-2">SEO-focused Prompts</h4>
                          <p className="text-sm text-purple-700">
                            Създавайте специфични prompts за генериране на SEO-оптимизирано съдържание с правилна структура.
                          </p>
                        </div>
                        <div className="p-4 bg-orange-50 rounded-lg">
                          <h4 className="font-medium text-orange-800 mb-2">Quality Control</h4>
                          <p className="text-sm text-orange-700">
                            Използвайте AI за автоматична проверка на качеството и SEO оптимизацията на генерираното съдържание.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* Technical SEO Automation */}
              <section id="technical-seo" className="mb-12">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl flex items-center">
                      <Zap className="h-6 w-6 mr-3 text-green-600" />
                      3. Техническо SEO автоматизация
                    </CardTitle>
                    <CardDescription>
                      Автоматизирайте техническите SEO задачи с AI инструменти
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Автоматични аудити</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="p-4 bg-green-50 rounded-lg">
                          <h4 className="font-medium text-green-800 mb-2">Site Health</h4>
                          <ul className="text-sm text-green-700 space-y-1">
                            <li>• Broken links detection</li>
                            <li>• Duplicate content</li>
                            <li>• Missing alt tags</li>
                            <li>• Schema markup</li>
                          </ul>
                        </div>
                        <div className="p-4 bg-blue-50 rounded-lg">
                          <h4 className="font-medium text-blue-800 mb-2">Performance</h4>
                          <ul className="text-sm text-blue-700 space-y-1">
                            <li>• Page speed optimization</li>
                            <li>• Core Web Vitals</li>
                            <li>• Mobile optimization</li>
                            <li>• Image optimization</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3">Автоматични оптимизации</h3>
                      <div className="space-y-4">
                        <div className="p-4 bg-purple-50 rounded-lg">
                          <h4 className="font-medium text-purple-800 mb-2">Auto-fixing Issues</h4>
                          <p className="text-sm text-purple-700">
                            AI системи могат автоматично да поправят технически SEO проблеми като липсващи meta тагове.
                          </p>
                        </div>
                        <div className="p-4 bg-orange-50 rounded-lg">
                          <h4 className="font-medium text-orange-800 mb-2">Continuous Monitoring</h4>
                          <p className="text-sm text-orange-700">
                            Настройте автоматичен мониторинг за откриване на нови SEO проблеми в реално време.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* Content Optimization */}
              <section id="content-optimization" className="mb-12">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl flex items-center">
                      <Target className="h-6 w-6 mr-3 text-green-600" />
                      4. Оптимизация на съдържанието
                    </CardTitle>
                    <CardDescription>
                      Използвайте AI инструменти за автоматична оптимизация на съдържанието
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-3">AI инструменти</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="p-4 bg-green-50 rounded-lg">
                          <h4 className="font-medium text-green-800 mb-2">Content Analysis</h4>
                          <ul className="text-sm text-green-700 space-y-1">
                            <li>• Keyword density</li>
                            <li>• Readability scores</li>
                            <li>• Content length</li>
                            <li>• Internal linking</li>
                          </ul>
                        </div>
                        <div className="p-4 bg-blue-50 rounded-lg">
                          <h4 className="font-medium text-blue-800 mb-2">A/B Testing</h4>
                          <ul className="text-sm text-blue-700 space-y-1">
                            <li>• Title optimization</li>
                            <li>• Meta descriptions</li>
                            <li>• CTA buttons</li>
                            <li>• Content variations</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3">Автоматични предложения</h3>
                      <div className="space-y-4">
                        <div className="p-4 bg-purple-50 rounded-lg">
                          <h4 className="font-medium text-purple-800 mb-2">Content Recommendations</h4>
                          <p className="text-sm text-purple-700">
                            AI анализира съществуващото съдържание и предлага подобрения за по-добро SEO класиране.
                          </p>
                        </div>
                        <div className="p-4 bg-orange-50 rounded-lg">
                          <h4 className="font-medium text-orange-800 mb-2">Topic Expansion</h4>
                          <p className="text-sm text-orange-700">
                            AI може да предложи допълнителни теми и подтеми за разширяване на съдържанието.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* Monitoring and Analysis */}
              <section id="monitoring" className="mb-12">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl flex items-center">
                      <BarChart3 className="h-6 w-6 mr-3 text-green-600" />
                      5. Мониторинг и анализ
                    </CardTitle>
                    <CardDescription>
                      Настройте автоматични отчети и alerts за SEO резултати
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Автоматични отчети</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="p-4 bg-green-50 rounded-lg">
                          <h4 className="font-medium text-green-800 mb-2">Performance Reports</h4>
                          <ul className="text-sm text-green-700 space-y-1">
                            <li>• Ranking changes</li>
                            <li>• Traffic analysis</li>
                            <li>• Conversion tracking</li>
                            <li>• Competitor analysis</li>
                          </ul>
                        </div>
                        <div className="p-4 bg-blue-50 rounded-lg">
                          <h4 className="font-medium text-blue-800 mb-2">Technical Reports</h4>
                          <ul className="text-sm text-blue-700 space-y-1">
                            <li>• Site health status</li>
                            <li>• Error tracking</li>
                            <li>• Performance metrics</li>
                            <li>• Security alerts</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3">Intelligent Alerts</h3>
                      <div className="space-y-4">
                        <div className="p-4 bg-purple-50 rounded-lg">
                          <h4 className="font-medium text-purple-800 mb-2">Anomaly Detection</h4>
                          <p className="text-sm text-purple-700">
                            AI открива необичайни промени в SEO метриките и изпраща автоматични alerts.
                          </p>
                        </div>
                        <div className="p-4 bg-orange-50 rounded-lg">
                          <h4 className="font-medium text-orange-800 mb-2">Predictive Insights</h4>
                          <p className="text-sm text-orange-700">
                            AI анализира тенденциите и предсказва бъдещи промени в SEO резултатите.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* Implementation */}
              <section id="implementation" className="mb-12">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl flex items-center">
                      <Globe className="h-6 w-6 mr-3 text-green-600" />
                      6. Внедряване
                    </CardTitle>
                    <CardDescription>
                      Стратегия за успешно внедряване на автоматизирано SEO
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Стратегия</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="p-4 bg-green-50 rounded-lg">
                          <h4 className="font-medium text-green-800 mb-2">Планиране</h4>
                          <ul className="text-sm text-green-700 space-y-1">
                            <li>• SEO audit</li>
                            <li>• Tool selection</li>
                            <li>• Process mapping</li>
                            <li>• Team training</li>
                          </ul>
                        </div>
                        <div className="p-4 bg-blue-50 rounded-lg">
                          <h4 className="font-medium text-blue-800 mb-2">Измерване</h4>
                          <ul className="text-sm text-blue-700 space-y-1">
                            <li>• KPI definition</li>
                            <li>• ROI tracking</li>
                            <li>• Performance metrics</li>
                            <li>• Success criteria</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3">Best Practices</h3>
                      <div className="space-y-4">
                        <div className="p-4 bg-purple-50 rounded-lg">
                          <h4 className="font-medium text-purple-800 mb-2">Quality Control</h4>
                          <p className="text-sm text-purple-700">
                            Винаги проверявайте AI-генерираното съдържание преди публикуване за точност и качество.
                          </p>
                        </div>
                        <div className="p-4 bg-orange-50 rounded-lg">
                          <h4 className="font-medium text-orange-800 mb-2">Human Oversight</h4>
                          <p className="text-sm text-orange-700">
                            AI трябва да допълва, а не да заменя човешката експертиза в SEO стратегията.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* CTA Section */}
              <div className="mt-16 text-center">
                <Card className="bg-gradient-to-r from-green-600 to-blue-600 text-white">
                  <CardContent className="py-12">
                    <h2 className="text-3xl font-bold mb-4">
                      Готови да автоматизирате SEO?
                    </h2>
                    <p className="text-xl mb-8 opacity-90">
                      Използвайте нашите AI инструменти и започнете автоматизацията на SEO процесите днес!
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button asChild size="lg" variant="secondary">
                        <Link href="/tools">
                          <Zap className="h-5 w-5 mr-2" />
                          SEO инструменти
                        </Link>
                      </Button>
                      <Button asChild size="lg" variant="outline" className="bg-white text-green-600 hover:bg-gray-100">
                        <Link href="/tutorials">
                          <Search className="h-5 w-5 mr-2" />
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
    </div>
  )
}
