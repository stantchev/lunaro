import { Metadata } from "next"
import Link from "next/link"
import { 
  ArrowLeft, CheckCircle, ExternalLink, BookOpen, Target, TrendingUp, 
  Search, Globe, Users, Zap, FileText, BarChart3 
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SEOHead } from "@/components/seo-head"

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
    <div>
      <SEOHead structuredData={structuredData} />

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
                <div className="h-6 w-px bg-gray-300"></div>
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
              </div>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                SEO Основи - Пълно ръководство
              </h1>
              <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
                Научете SEO от нулата с нашето пълно ръководство. Техническо SEO, ключови думи, 
                съдържание и аналитика за успешен уебсайт в България.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" variant="secondary">
                  <Link href="#what-is-seo">
                    <Search className="h-5 w-5 mr-2" />
                    Започни тук
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-white text-blue-600 hover:bg-gray-100">
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
                  Навигация по всички секции на SEO ръководството
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-semibold text-sm">1</span>
                    </div>
                    <div>
                      <h3 className="font-medium">Какво е SEO?</h3>
                      <p className="text-sm text-gray-600">Основни понятия</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 font-semibold text-sm">2</span>
                    </div>
                    <div>
                      <h3 className="font-medium">Техническо SEO</h3>
                      <p className="text-sm text-gray-600">Скорост и мобилност</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                      <span className="text-purple-600 font-semibold text-sm">3</span>
                    </div>
                    <div>
                      <h3 className="font-medium">Ключови думи</h3>
                      <p className="text-sm text-gray-600">Изследване и избор</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                      <span className="text-orange-600 font-semibold text-sm">4</span>
                    </div>
                    <div>
                      <h3 className="font-medium">Съдържание</h3>
                      <p className="text-sm text-gray-600">Оптимизация</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                      <span className="text-red-600 font-semibold text-sm">5</span>
                    </div>
                    <div>
                      <h3 className="font-medium">Аналитика</h3>
                      <p className="text-sm text-gray-600">Измерване</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center">
                      <span className="text-cyan-600 font-semibold text-sm">6</span>
                    </div>
                    <div>
                      <h3 className="font-medium">Инструменти</h3>
                      <p className="text-sm text-gray-600">SEO платформи</p>
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

              {/* Technical SEO */}
              <section id="technical-seo" className="mb-12">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl flex items-center">
                      <Globe className="h-6 w-6 mr-3 text-blue-600" />
                      2. Техническо SEO
                    </CardTitle>
                    <CardDescription>
                      Основните технически аспекти за SEO оптимизация
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Скорост на сайта</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="p-4 bg-green-50 rounded-lg">
                          <h4 className="font-medium text-green-800 mb-2">Критични фактори</h4>
                          <ul className="text-sm text-green-700 space-y-1">
                            <li>• Време за зареждане &lt; 3 секунди</li>
                            <li>• Оптимизирани изображения</li>
                            <li>• Минифициран CSS и JS</li>
                            <li>• CDN за статично съдържание</li>
                          </ul>
                        </div>
                        <div className="p-4 bg-blue-50 rounded-lg">
                          <h4 className="font-medium text-blue-800 mb-2">Инструменти за тестване</h4>
                          <ul className="text-sm text-blue-700 space-y-1">
                            <li>• Google PageSpeed Insights</li>
                            <li>• GTmetrix</li>
                            <li>• WebPageTest</li>
                            <li>• Chrome DevTools</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3">Мобилна оптимизация</h3>
                      <div className="space-y-4">
                        <div className="p-4 bg-purple-50 rounded-lg">
                          <h4 className="font-medium text-purple-800 mb-2">Responsive Design</h4>
                          <p className="text-sm text-purple-700">
                            Сайтът трябва да се адаптира към всички устройства - мобилни, таблети и десктопи.
                          </p>
                        </div>
                        <div className="p-4 bg-orange-50 rounded-lg">
                          <h4 className="font-medium text-orange-800 mb-2">Mobile-First Indexing</h4>
                          <p className="text-sm text-orange-700">
                            Google използва мобилната версия на сайта за класиране в резултатите.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* Keywords */}
              <section id="keywords" className="mb-12">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl flex items-center">
                      <Target className="h-6 w-6 mr-3 text-blue-600" />
                      3. Ключови думи
                    </CardTitle>
                    <CardDescription>
                      Изследване и избор на правилните ключови думи
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Типове ключови думи</h3>
                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="p-4 bg-green-50 rounded-lg">
                          <h4 className="font-medium text-green-800 mb-2">Head Keywords</h4>
                          <p className="text-sm text-green-700">
                            Общи термини с висок обем търсене (напр. "SEO")
                          </p>
                        </div>
                        <div className="p-4 bg-blue-50 rounded-lg">
                          <h4 className="font-medium text-blue-800 mb-2">Long-tail Keywords</h4>
                          <p className="text-sm text-blue-700">
                            Специфични фрази с по-нисък обем, но по-висока конверсия
                          </p>
                        </div>
                        <div className="p-4 bg-purple-50 rounded-lg">
                          <h4 className="font-medium text-purple-800 mb-2">LSI Keywords</h4>
                          <p className="text-sm text-purple-700">
                            Семантично свързани думи, които подпомагат контекста
                          </p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3">Инструменти за изследване</h3>
                      <div className="space-y-4">
                        <div className="p-4 bg-yellow-50 rounded-lg">
                          <h4 className="font-medium text-yellow-800 mb-2">Google Keyword Planner</h4>
                          <p className="text-sm text-yellow-700">
                            Безплатен инструмент на Google за изследване на ключови думи
                          </p>
                        </div>
                        <div className="p-4 bg-cyan-50 rounded-lg">
                          <h4 className="font-medium text-cyan-800 mb-2">Ahrefs / SEMrush</h4>
                          <p className="text-sm text-cyan-700">
                            Платформи за задълбочен анализ на ключови думи и конкуренция
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
                      <FileText className="h-6 w-6 mr-3 text-blue-600" />
                      4. Оптимизация на съдържанието
                    </CardTitle>
                    <CardDescription>
                      Създаване на качествено и SEO-оптимизирано съдържание
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Структура на съдържанието</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="p-4 bg-green-50 rounded-lg">
                          <h4 className="font-medium text-green-800 mb-2">H1, H2, H3 тагове</h4>
                          <ul className="text-sm text-green-700 space-y-1">
                            <li>• Един H1 на страница</li>
                            <li>• Логична йерархия на заглавията</li>
                            <li>• Ключови думи в заглавията</li>
                            <li>• Описателни заглавия</li>
                          </ul>
                        </div>
                        <div className="p-4 bg-blue-50 rounded-lg">
                          <h4 className="font-medium text-blue-800 mb-2">Meta тагове</h4>
                          <ul className="text-sm text-blue-700 space-y-1">
                            <li>• Уникален title за всяка страница</li>
                            <li>• Описателни meta descriptions</li>
                            <li>• Правилни alt тагове за изображения</li>
                            <li>• Open Graph тагове</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3">Качество на съдържанието</h3>
                      <div className="space-y-4">
                        <div className="p-4 bg-purple-50 rounded-lg">
                          <h4 className="font-medium text-purple-800 mb-2">E-A-T принцип</h4>
                          <p className="text-sm text-purple-700">
                            Expertise (експертност), Authoritativeness (авторитет), Trustworthiness (надеждност)
                          </p>
                        </div>
                        <div className="p-4 bg-orange-50 rounded-lg">
                          <h4 className="font-medium text-orange-800 mb-2">Потребителски опит</h4>
                          <p className="text-sm text-orange-700">
                            Съдържанието трябва да отговаря на намеренията на потребителите и да им помага.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* Analytics */}
              <section id="analytics" className="mb-12">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl flex items-center">
                      <BarChart3 className="h-6 w-6 mr-3 text-blue-600" />
                      5. Аналитика и измерване
                    </CardTitle>
                    <CardDescription>
                      Проследяване на SEO резултатите и оптимизация
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Google Analytics</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="p-4 bg-green-50 rounded-lg">
                          <h4 className="font-medium text-green-800 mb-2">Ключови метрики</h4>
                          <ul className="text-sm text-green-700 space-y-1">
                            <li>• Органичен трафик</li>
                            <li>• Време на сайта</li>
                            <li>• Процент на отскачане</li>
                            <li>• Конверсии</li>
                          </ul>
                        </div>
                        <div className="p-4 bg-blue-50 rounded-lg">
                          <h4 className="font-medium text-blue-800 mb-2">Google Search Console</h4>
                          <ul className="text-sm text-blue-700 space-y-1">
                            <li>• Позиции в търсенето</li>
                            <li>• CTR (Click-Through Rate)</li>
                            <li>• Индексирани страници</li>
                            <li>• Технически грешки</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3">SEO отчети</h3>
                      <div className="space-y-4">
                        <div className="p-4 bg-purple-50 rounded-lg">
                          <h4 className="font-medium text-purple-800 mb-2">Месечни отчети</h4>
                          <p className="text-sm text-purple-700">
                            Редовно проследяване на позициите, трафика и конверсиите
                          </p>
                        </div>
                        <div className="p-4 bg-orange-50 rounded-lg">
                          <h4 className="font-medium text-orange-800 mb-2">A/B тестове</h4>
                          <p className="text-sm text-orange-700">
                            Тестване на различни версии на страници за оптимизация
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* Tools */}
              <section id="tools" className="mb-12">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl flex items-center">
                      <Zap className="h-6 w-6 mr-3 text-blue-600" />
                      6. SEO инструменти
                    </CardTitle>
                    <CardDescription>
                      Полезни инструменти за SEO оптимизация
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Безплатни инструменти</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="p-4 bg-green-50 rounded-lg">
                          <h4 className="font-medium text-green-800 mb-2">Google инструменти</h4>
                          <ul className="text-sm text-green-700 space-y-1">
                            <li>• Google Search Console</li>
                            <li>• Google Analytics</li>
                            <li>• Google Keyword Planner</li>
                            <li>• PageSpeed Insights</li>
                          </ul>
                        </div>
                        <div className="p-4 bg-blue-50 rounded-lg">
                          <h4 className="font-medium text-blue-800 mb-2">Други безплатни</h4>
                          <ul className="text-sm text-blue-700 space-y-1">
                            <li>• Ubersuggest</li>
                            <li>• Answer The Public</li>
                            <li>• Google Trends</li>
                            <li>• Screaming Frog (ограничена версия)</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3">Платени инструменти</h3>
                      <div className="space-y-4">
                        <div className="p-4 bg-purple-50 rounded-lg">
                          <h4 className="font-medium text-purple-800 mb-2">Ahrefs</h4>
                          <p className="text-sm text-purple-700">
                            Комплексна SEO платформа за анализ на ключови думи, backlinks и конкуренция
                          </p>
                        </div>
                        <div className="p-4 bg-orange-50 rounded-lg">
                          <h4 className="font-medium text-orange-800 mb-2">SEMrush</h4>
                          <p className="text-sm text-orange-700">
                            SEO и PPC платформа с инструменти за анализ и оптимизация
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
    </div>
  )
}
