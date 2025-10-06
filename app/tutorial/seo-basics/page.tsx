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
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
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
                  <Clock className="h-3 w-3 mr-1" />
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
                <Clock className="h-4 w-4 mr-2" />
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

                    <div>
                      <h3 className="text-lg font-semibold mb-3">Типове SEO</h3>
                      <div className="space-y-4">
                        <div className="flex items-start space-x-3">
                          <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-medium">1</div>
                          <div>
                            <h4 className="font-medium">Техническо SEO</h4>
                            <p className="text-sm text-gray-600">Структура, скорост, мобилна оптимизация</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-medium">2</div>
                          <div>
                            <h4 className="font-medium">On-page SEO</h4>
                            <p className="text-sm text-gray-600">Съдържание, ключови думи, мета тагове</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="w-8 h-8 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-sm font-medium">3</div>
                          <div>
                            <h4 className="font-medium">Off-page SEO</h4>
                            <p className="text-sm text-gray-600">Обратни връзки, социални сигнали, авторитет</p>
                          </div>
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
                      <Zap className="h-6 w-6 mr-3 text-blue-600" />
                      2. Техническо SEO
                    </CardTitle>
                    <CardDescription>
                      Основите на техническото SEO за бърз и оптимизиран сайт
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Core Web Vitals</h3>
                      <p className="text-gray-700 mb-4">
                        Google използва Core Web Vitals като фактор за класиране. 
                        Това са три ключови метрики за потребителското изживяване:
                      </p>
                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="p-4 border rounded-lg">
                          <h4 className="font-medium text-green-600 mb-2">LCP (Largest Contentful Paint)</h4>
                          <p className="text-sm text-gray-600 mb-2">Време за зареждане на най-големия елемент</p>
                          <Badge variant="outline" className="text-green-600">Цел: < 2.5s</Badge>
                        </div>
                        <div className="p-4 border rounded-lg">
                          <h4 className="font-medium text-blue-600 mb-2">FID (First Input Delay)</h4>
                          <p className="text-sm text-gray-600 mb-2">Време за отговор на първото взаимодействие</p>
                          <Badge variant="outline" className="text-blue-600">Цел: < 100ms</Badge>
                        </div>
                        <div className="p-4 border rounded-lg">
                          <h4 className="font-medium text-purple-600 mb-2">CLS (Cumulative Layout Shift)</h4>
                          <p className="text-sm text-gray-600 mb-2">Стабилност на разположението</p>
                          <Badge variant="outline" className="text-purple-600">Цел: < 0.1</Badge>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3">Технически елементи</h3>
                      <div className="space-y-4">
                        <div className="p-4 bg-gray-50 rounded-lg">
                          <h4 className="font-medium mb-2">Мета тагове</h4>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Title tag (50-60 символа)</li>
                            <li>• Meta description (150-160 символа)</li>
                            <li>• Meta keywords (не е важно за Google)</li>
                            <li>• Canonical URL</li>
                          </ul>
                        </div>
                        <div className="p-4 bg-gray-50 rounded-lg">
                          <h4 className="font-medium mb-2">Структура на сайта</h4>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Логична URL структура</li>
                            <li>• XML sitemap</li>
                            <li>• Robots.txt файл</li>
                            <li>• Breadcrumb навигация</li>
                          </ul>
                        </div>
                        <div className="p-4 bg-gray-50 rounded-lg">
                          <h4 className="font-medium mb-2">Мобилна оптимизация</h4>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Responsive design</li>
                            <li>• Mobile-first индексиране</li>
                            <li>• Touch-friendly елементи</li>
                            <li>• Бързо зареждане на мобилни</li>
                          </ul>
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
                      Как да изберете и използвате правилните ключови думи
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Типове ключови думи</h3>
                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="p-4 border rounded-lg">
                          <h4 className="font-medium text-blue-600 mb-2">Short-tail (Краткохвости)</h4>
                          <p className="text-sm text-gray-600 mb-2">1-2 думи, високо търсене</p>
                          <p className="text-xs text-gray-500">Пример: "SEO"</p>
                        </div>
                        <div className="p-4 border rounded-lg">
                          <h4 className="font-medium text-green-600 mb-2">Long-tail (Дългохвости)</h4>
                          <p className="text-sm text-gray-600 mb-2">3+ думи, по-специфични</p>
                          <p className="text-xs text-gray-500">Пример: "SEO ръководство за начинаещи"</p>
                        </div>
                        <div className="p-4 border rounded-lg">
                          <h4 className="font-medium text-purple-600 mb-2">Local (Местни)</h4>
                          <p className="text-sm text-gray-600 mb-2">Географски специфични</p>
                          <p className="text-xs text-gray-500">Пример: "SEO София"</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3">Изследване на ключови думи</h3>
                      <div className="space-y-4">
                        <div className="p-4 bg-blue-50 rounded-lg">
                          <h4 className="font-medium text-blue-800 mb-2">Безплатни инструменти</h4>
                          <ul className="text-sm text-blue-700 space-y-1">
                            <li>• Google Keyword Planner</li>
                            <li>• Google Trends</li>
                            <li>• Google Search Console</li>
                            <li>• Ubersuggest (безплатна версия)</li>
                          </ul>
                        </div>
                        <div className="p-4 bg-green-50 rounded-lg">
                          <h4 className="font-medium text-green-800 mb-2">Платени инструменти</h4>
                          <ul className="text-sm text-green-700 space-y-1">
                            <li>• Ahrefs</li>
                            <li>• SEMrush</li>
                            <li>• Moz Pro</li>
                            <li>• Serpstat</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3">Ключови думи за България</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="p-4 border rounded-lg">
                          <h4 className="font-medium mb-2">Високо търсене</h4>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• "SEO оптимизация" (1,900/месец)</li>
                            <li>• "уеб дизайн" (1,600/месец)</li>
                            <li>• "онлайн магазин" (2,400/месец)</li>
                            <li>• "дигитален маркетинг" (980/месец)</li>
                          </ul>
                        </div>
                        <div className="p-4 border rounded-lg">
                          <h4 className="font-medium mb-2">Местни ключови думи</h4>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• "SEO София"</li>
                            <li>• "уеб дизайн Пловдив"</li>
                            <li>• "дигитален маркетинг България"</li>
                            <li>• "онлайн магазин Варна"</li>
                          </ul>
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
                      <BookOpen className="h-6 w-6 mr-3 text-blue-600" />
                      4. Оптимизация на съдържанието
                    </CardTitle>
                    <CardDescription>
                      Как да създавате SEO-оптимизирано съдържание
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Структура на статията</h3>
                      <div className="space-y-4">
                        <div className="p-4 bg-gray-50 rounded-lg">
                          <h4 className="font-medium mb-2">H1 заглавие</h4>
                          <p className="text-sm text-gray-600">
                            Един H1 на страница, съдържа основната ключова дума
                          </p>
                        </div>
                        <div className="p-4 bg-gray-50 rounded-lg">
                          <h4 className="font-medium mb-2">H2-H6 подзаглавия</h4>
                          <p className="text-sm text-gray-600">
                            Логична йерархия, включваща семантични ключови думи
                          </p>
                        </div>
                        <div className="p-4 bg-gray-50 rounded-lg">
                          <h4 className="font-medium mb-2">Параграфи</h4>
                          <p className="text-sm text-gray-600">
                            Кратки параграфи (2-3 изречения), лесно четене
                          </p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3">Вътрешни връзки</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="p-4 border rounded-lg">
                          <h4 className="font-medium text-blue-600 mb-2">Стратегия</h4>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Връзки към релевантни статии</li>
                            <li>• Контекстуални anchor текстове</li>
                            <li>• Връзки към важни страници</li>
                            <li>• Свързани статии в края</li>
                          </ul>
                        </div>
                        <div className="p-4 border rounded-lg">
                          <h4 className="font-medium text-green-600 mb-2">Практически съвети</h4>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• 2-3 вътрешни връзки на статия</li>
                            <li>• Избягвайте "кликнете тук"</li>
                            <li>• Използвайте описателни текстове</li>
                            <li>• Отваряйте в същия таб</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3">Изображения</h3>
                      <div className="space-y-4">
                        <div className="p-4 bg-blue-50 rounded-lg">
                          <h4 className="font-medium text-blue-800 mb-2">Alt текст</h4>
                          <p className="text-sm text-blue-700">
                            Описва изображението, включва ключова дума ако е подходящо
                          </p>
                        </div>
                        <div className="p-4 bg-green-50 rounded-lg">
                          <h4 className="font-medium text-green-800 mb-2">Оптимизация</h4>
                          <p className="text-sm text-green-700">
                            Компресирани файлове, подходящи размери, WebP формат
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
                      <TrendingUp className="h-6 w-6 mr-3 text-blue-600" />
                      5. Аналитика и измерване
                    </CardTitle>
                    <CardDescription>
                      Как да проследявате и измервате SEO резултатите
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Google Search Console</h3>
                      <div className="space-y-4">
                        <div className="p-4 bg-blue-50 rounded-lg">
                          <h4 className="font-medium text-blue-800 mb-2">Ключови метрики</h4>
                          <ul className="text-sm text-blue-700 space-y-1">
                            <li>• Impressions (показвания)</li>
                            <li>• Clicks (кликвания)</li>
                            <li>• CTR (click-through rate)</li>
                            <li>• Position (позиция)</li>
                          </ul>
                        </div>
                        <div className="p-4 bg-green-50 rounded-lg">
                          <h4 className="font-medium text-green-800 mb-2">Отчети</h4>
                          <ul className="text-sm text-green-700 space-y-1">
                            <li>• Performance отчет</li>
                            <li>• URL Inspection</li>
                            <li>• Sitemaps</li>
                            <li>• Core Web Vitals</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3">Google Analytics 4</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="p-4 border rounded-lg">
                          <h4 className="font-medium text-blue-600 mb-2">Органичен трафик</h4>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Sessions от Google</li>
                            <li>• Bounce rate</li>
                            <li>• Session duration</li>
                            <li>• Pages per session</li>
                          </ul>
                        </div>
                        <div className="p-4 border rounded-lg">
                          <h4 className="font-medium text-green-600 mb-2">Конверсии</h4>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Goal completions</li>
                            <li>• E-commerce tracking</li>
                            <li>• User engagement</li>
                            <li>• Conversion paths</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3">SEO KPI-та</h3>
                      <div className="space-y-4">
                        <div className="grid md:grid-cols-3 gap-4">
                          <div className="p-4 bg-green-50 rounded-lg text-center">
                            <div className="text-2xl font-bold text-green-600 mb-1">+25%</div>
                            <div className="text-sm text-green-700">Органичен трафик</div>
                          </div>
                          <div className="p-4 bg-blue-50 rounded-lg text-center">
                            <div className="text-2xl font-bold text-blue-600 mb-1">15</div>
                            <div className="text-sm text-blue-700">Ключови думи в топ 10</div>
                          </div>
                          <div className="p-4 bg-purple-50 rounded-lg text-center">
                            <div className="text-2xl font-bold text-purple-600 mb-1">3.2%</div>
                            <div className="text-sm text-purple-700">CTR от Google</div>
                          </div>
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
                      <Globe className="h-6 w-6 mr-3 text-blue-600" />
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
                        <div className="p-4 border rounded-lg">
                          <h4 className="font-medium text-blue-600 mb-2">Google инструменти</h4>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Google Search Console</li>
                            <li>• Google Analytics</li>
                            <li>• Google Keyword Planner</li>
                            <li>• PageSpeed Insights</li>
                          </ul>
                        </div>
                        <div className="p-4 border rounded-lg">
                          <h4 className="font-medium text-green-600 mb-2">Други безплатни</h4>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Ubersuggest (ограничена версия)</li>
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
                        <div className="p-4 bg-blue-50 rounded-lg">
                          <h4 className="font-medium text-blue-800 mb-2">Ahrefs</h4>
                          <p className="text-sm text-blue-700 mb-2">
                            Най-добрият инструмент за изследване на ключови думи и обратни връзки
                          </p>
                          <Badge variant="outline" className="text-blue-600">$99/месец</Badge>
                        </div>
                        <div className="p-4 bg-green-50 rounded-lg">
                          <h4 className="font-medium text-green-800 mb-2">SEMrush</h4>
                          <p className="text-sm text-green-700 mb-2">
                            Комплексен SEO инструмент с конкурентен анализ
                          </p>
                          <Badge variant="outline" className="text-green-600">$119/месец</Badge>
                        </div>
                        <div className="p-4 bg-purple-50 rounded-lg">
                          <h4 className="font-medium text-purple-800 mb-2">Moz Pro</h4>
                          <p className="text-sm text-purple-700 mb-2">
                            Фокус върху domain authority и link building
                          </p>
                          <Badge variant="outline" className="text-purple-600">$99/месец</Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </section>
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

                {/* Related Tutorials */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Свързани уроци</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Link href="/tutorial/automated-seo" className="block p-3 hover:bg-blue-50 rounded-lg transition-colors">
                      <div className="font-medium text-sm">Автоматизирано SEO</div>
                      <div className="text-xs text-gray-600">Напреднали техники</div>
                    </Link>
                    <Link href="/tutorial/ai-business-tools" className="block p-3 hover:bg-blue-50 rounded-lg transition-colors">
                      <div className="font-medium text-sm">AI бизнес инструменти</div>
                      <div className="text-xs text-gray-600">AI за SEO</div>
                    </Link>
                    <Link href="/tutorial/generative-ai-content" className="block p-3 hover:bg-blue-50 rounded-lg transition-colors">
                      <div className="font-medium text-sm">AI съдържание</div>
                      <div className="text-xs text-gray-600">Генериране на съдържание</div>
                    </Link>
                  </CardContent>
                </Card>

                {/* Progress */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Прогрес</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <span>Завършено</span>
                        <span className="font-medium">100%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-600 h-2 rounded-full w-full"></div>
                      </div>
                      <p className="text-xs text-gray-600">
                        Честито! Завършихте SEO основите.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

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
                    <Link href="/tutorial/automated-seo">
                      <BookOpen className="h-5 w-5 mr-2" />
                      Следващ урок
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  )
}

