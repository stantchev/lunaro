import { Metadata } from "next"
import Link from "next/link"
import { 
  ArrowLeft, CheckCircle, ExternalLink, Bot, TrendingUp, Target, 
  Zap, Users, BarChart3, Brain, Sparkles, Shield 
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SEOHead } from "@/components/seo-head"

export const metadata: Metadata = {
  title: "AI Бизнес Инструменти - Пълно ръководство за автоматизация | Lunaro News",
  description: "Открийте най-добрите AI инструменти за бизнеса. ChatGPT, Claude, автоматизация, анализ на данни и AI решения за български компании.",
  keywords: "AI бизнес инструменти, ChatGPT, Claude, AI автоматизация, бизнес AI, AI анализ, България",
  openGraph: {
    title: "AI Бизнес Инструменти - Пълно ръководство за автоматизация",
    description: "Открийте най-добрите AI инструменти за бизнеса. ChatGPT, Claude, автоматизация, анализ на данни и AI решения за български компании.",
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
    description: "Открийте най-добрите AI инструменти за бизнеса. ChatGPT, Claude, автоматизация, анализ на данни и AI решения за български компании.",
    images: ["https://lunaro.news/og-image.jpg"]
  },
  alternates: {
    canonical: "https://lunaro.news/tutorial/ai-business-tools"
  }
}

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
      "name": "AI за комуникация",
      "text": "Използвайте ChatGPT и Claude за подобряване на бизнес комуникацията"
    },
    {
      "@type": "HowToStep",
      "name": "Автоматизация на процеси",
      "text": "Внедрете RPA и chatbots за автоматизация на рутинни задачи"
    },
    {
      "@type": "HowToStep",
      "name": "Анализ на данни",
      "text": "Използвайте AI за анализ на бизнес данни и вземане на решения"
    },
    {
      "@type": "HowToStep",
      "name": "AI за маркетинг",
      "text": "Персонализирайте маркетингови кампании с AI технологии"
    }
  ]
}

export default function AIBusinessToolsTutorial() {
  return (
    <div>
      <SEOHead structuredData={structuredData} />
      
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
                <div className="h-6 w-px bg-gray-300"></div>
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
              </div>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
              AI Бизнес Инструменти
            </h1>
              <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
                Открийте най-добрите AI инструменти за бизнеса. ChatGPT, Claude, автоматизация, 
                анализ на данни и AI решения за модерни български компании.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" variant="secondary">
                  <Link href="#ai-communication">
                    <Bot className="h-5 w-5 mr-2" />
                    Започни тук
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-white text-purple-600 hover:bg-gray-100">
                  <Link href="/tools">
                    <Zap className="h-5 w-5 mr-2" />
                    AI инструменти
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
                  Навигация по всички секции на AI бизнес ръководството
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                      <span className="text-purple-600 font-semibold text-sm">1</span>
                    </div>
                    <div>
                      <h3 className="font-medium">AI за комуникация</h3>
                      <p className="text-sm text-gray-600">ChatGPT, Claude</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-semibold text-sm">2</span>
                    </div>
                    <div>
                      <h3 className="font-medium">Автоматизация</h3>
                      <p className="text-sm text-gray-600">RPA, chatbots</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 font-semibold text-sm">3</span>
                    </div>
                    <div>
                      <h3 className="font-medium">Анализ на данни</h3>
                      <p className="text-sm text-gray-600">BI, ML модели</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                      <span className="text-orange-600 font-semibold text-sm">4</span>
                    </div>
                    <div>
                      <h3 className="font-medium">AI маркетинг</h3>
                      <p className="text-sm text-gray-600">Персонализация</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                      <span className="text-red-600 font-semibold text-sm">5</span>
                    </div>
                    <div>
                      <h3 className="font-medium">Продуктивност</h3>
                      <p className="text-sm text-gray-600">Управление на време</p>
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
              {/* AI Communication */}
              <section id="ai-communication" className="mb-12">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl flex items-center">
                      <Bot className="h-6 w-6 mr-3 text-purple-600" />
                      1. AI за комуникация
                    </CardTitle>
                    <CardDescription>
                      Използвайте ChatGPT и Claude за подобряване на бизнес комуникацията
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-3">ChatGPT за бизнес</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="p-4 bg-green-50 rounded-lg">
                          <h4 className="font-medium text-green-800 mb-2">Писане на имейли</h4>
                          <ul className="text-sm text-green-700 space-y-1">
                            <li>• Професионални имейли</li>
                            <li>• Отговори на клиенти</li>
                            <li>• Маркетингови съобщения</li>
                            <li>• Вътрешна комуникация</li>
                          </ul>
                        </div>
                        <div className="p-4 bg-blue-50 rounded-lg">
                          <h4 className="font-medium text-blue-800 mb-2">Създаване на съдържание</h4>
                          <ul className="text-sm text-blue-700 space-y-1">
                            <li>• Блог статии</li>
                            <li>• Социални мрежи</li>
                            <li>• Презентации</li>
                            <li>• Документация</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3">Claude за анализ</h3>
                      <div className="space-y-4">
                        <div className="p-4 bg-purple-50 rounded-lg">
                          <h4 className="font-medium text-purple-800 mb-2">Анализ на документи</h4>
                          <p className="text-sm text-purple-700">
                            Claude може да анализира големи документи и да извлича ключова информация за бизнес решения.
                          </p>
                        </div>
                        <div className="p-4 bg-orange-50 rounded-lg">
                          <h4 className="font-medium text-orange-800 mb-2">Стратегическо планиране</h4>
                          <p className="text-sm text-orange-700">
                            Използвайте Claude за анализ на пазарни данни и създаване на бизнес стратегии.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* Process Automation */}
              <section id="process-automation" className="mb-12">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl flex items-center">
                      <Zap className="h-6 w-6 mr-3 text-purple-600" />
                      2. Автоматизация на процеси
                    </CardTitle>
                    <CardDescription>
                      Внедрете RPA и chatbots за автоматизация на рутинни задачи
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-3">RPA (Robotic Process Automation)</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="p-4 bg-green-50 rounded-lg">
                          <h4 className="font-medium text-green-800 mb-2">Финансови процеси</h4>
                          <ul className="text-sm text-green-700 space-y-1">
                            <li>• Автоматично фактуриране</li>
                            <li>• Обработка на плащания</li>
                            <li>• Финансови отчети</li>
                            <li>• Бюджетно планиране</li>
                          </ul>
                        </div>
                        <div className="p-4 bg-blue-50 rounded-lg">
                          <h4 className="font-medium text-blue-800 mb-2">HR процеси</h4>
                          <ul className="text-sm text-blue-700 space-y-1">
                            <li>• Обработка на кандидатури</li>
                            <li>• Автоматични интервюта</li>
                            <li>• Управление на отпуски</li>
                            <li>• Оценка на производителност</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3">Chatbots за клиенти</h3>
                      <div className="space-y-4">
                        <div className="p-4 bg-purple-50 rounded-lg">
                          <h4 className="font-medium text-purple-800 mb-2">24/7 поддръжка</h4>
                          <p className="text-sm text-purple-700">
                            Chatbots могат да отговарят на въпроси на клиентите в реално време, намалявайки натоварването на екипа.
                          </p>
                        </div>
                        <div className="p-4 bg-orange-50 rounded-lg">
                          <h4 className="font-medium text-orange-800 mb-2">Персонализирани отговори</h4>
                          <p className="text-sm text-orange-700">
                            AI-powered chatbots могат да предоставят персонализирани решения въз основа на историята на клиента.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* Data Analysis */}
              <section id="data-analysis" className="mb-12">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl flex items-center">
                      <BarChart3 className="h-6 w-6 mr-3 text-purple-600" />
                      3. Анализ на данни
                    </CardTitle>
                    <CardDescription>
                      Използвайте AI за анализ на бизнес данни и вземане на решения
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-3">BI платформи с AI</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="p-4 bg-green-50 rounded-lg">
                          <h4 className="font-medium text-green-800 mb-2">Microsoft Power BI</h4>
                          <ul className="text-sm text-green-700 space-y-1">
                            <li>• Автоматични инсайти</li>
                            <li>• Естествен език за заявки</li>
                            <li>• Предиктивна аналитика</li>
                            <li>• Визуализация на данни</li>
                          </ul>
                        </div>
                        <div className="p-4 bg-blue-50 rounded-lg">
                          <h4 className="font-medium text-blue-800 mb-2">Tableau AI</h4>
                          <ul className="text-sm text-blue-700 space-y-1">
                            <li>• Автоматично откриване на модели</li>
                            <li>• AI-powered dashboard</li>
                            <li>• Статистически анализ</li>
                            <li>• Машинно обучение</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3">ML модели за бизнес</h3>
                      <div className="space-y-4">
                        <div className="p-4 bg-purple-50 rounded-lg">
                          <h4 className="font-medium text-purple-800 mb-2">Предиктивна аналитика</h4>
                          <p className="text-sm text-purple-700">
                            Използвайте ML модели за прогнозиране на продажби, търсене на клиенти и оптимизация на инвентара.
                          </p>
                        </div>
                        <div className="p-4 bg-orange-50 rounded-lg">
                          <h4 className="font-medium text-orange-800 mb-2">Класификация на клиенти</h4>
                          <p className="text-sm text-orange-700">
                            AI може да класифицира клиентите според техния потенциал и да предложи персонализирани стратегии.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* AI Marketing */}
              <section id="ai-marketing" className="mb-12">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl flex items-center">
                      <Target className="h-6 w-6 mr-3 text-purple-600" />
                      4. AI за маркетинг
                    </CardTitle>
                    <CardDescription>
                      Персонализирайте маркетингови кампании с AI технологии
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Персонализация</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="p-4 bg-green-50 rounded-lg">
                          <h4 className="font-medium text-green-800 mb-2">Динамично съдържание</h4>
                          <ul className="text-sm text-green-700 space-y-1">
                            <li>• Персонализирани имейли</li>
                            <li>• Адаптивни уебсайтове</li>
                            <li>• Целеви реклами</li>
                            <li>• Продуктови препоръки</li>
                          </ul>
                        </div>
                        <div className="p-4 bg-blue-50 rounded-lg">
                          <h4 className="font-medium text-blue-800 mb-2">Сегментация</h4>
                          <ul className="text-sm text-blue-700 space-y-1">
                            <li>• Автоматично групиране</li>
                            <li>• Поведенчески профили</li>
                            <li>• Предиктивни сегменти</li>
                            <li>• Lifecycle маркетинг</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3">Социални мрежи</h3>
                      <div className="space-y-4">
                        <div className="p-4 bg-purple-50 rounded-lg">
                          <h4 className="font-medium text-purple-800 mb-2">Автоматично създаване на съдържание</h4>
                          <p className="text-sm text-purple-700">
                            AI може да създава постове, капции и хештагове за различни платформи автоматично.
                          </p>
                        </div>
                        <div className="p-4 bg-orange-50 rounded-lg">
                          <h4 className="font-medium text-orange-800 mb-2">Анализ на настроенията</h4>
                          <p className="text-sm text-orange-700">
                            Проследявайте какво казват клиентите за вашия бранд в социалните мрежи с AI анализ.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* Productivity */}
              <section id="productivity" className="mb-12">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl flex items-center">
                      <TrendingUp className="h-6 w-6 mr-3 text-purple-600" />
                      5. Продуктивност
                    </CardTitle>
                    <CardDescription>
                      Подобрете ефективността с AI инструменти за управление на време
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Управление на време</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="p-4 bg-green-50 rounded-lg">
                          <h4 className="font-medium text-green-800 mb-2">AI календари</h4>
                          <ul className="text-sm text-green-700 space-y-1">
                            <li>• Автоматично планиране</li>
                            <li>• Оптимизация на срещи</li>
                            <li>• Приоритизиране на задачи</li>
                            <li>• Time blocking</li>
                          </ul>
                        </div>
                        <div className="p-4 bg-blue-50 rounded-lg">
                          <h4 className="font-medium text-blue-800 mb-2">Task management</h4>
                          <ul className="text-sm text-blue-700 space-y-1">
                            <li>• Автоматично разпределение</li>
                            <li>• Deadline прогнози</li>
                            <li>• Resource optimization</li>
                            <li>• Progress tracking</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3">Комуникация</h3>
                      <div className="space-y-4">
                        <div className="p-4 bg-purple-50 rounded-lg">
                          <h4 className="font-medium text-purple-800 mb-2">AI асистенти</h4>
                          <p className="text-sm text-purple-700">
                            Използвайте AI асистенти за автоматизиране на рутинни комуникационни задачи.
                          </p>
                        </div>
                        <div className="p-4 bg-orange-50 rounded-lg">
                          <h4 className="font-medium text-orange-800 mb-2">Meeting optimization</h4>
                          <p className="text-sm text-orange-700">
                            AI може да анализира срещите и да предложи начини за подобряване на ефективността.
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
                      <Shield className="h-6 w-6 mr-3 text-purple-600" />
                      6. Внедряване
                    </CardTitle>
                    <CardDescription>
                      Стратегия за успешно внедряване на AI в бизнеса
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Стратегия</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="p-4 bg-green-50 rounded-lg">
                          <h4 className="font-medium text-green-800 mb-2">Планиране</h4>
                          <ul className="text-sm text-green-700 space-y-1">
                            <li>• Анализ на нуждите</li>
                            <li>• Избор на инструменти</li>
                            <li>• Обучение на екипа</li>
                            <li>• Постепенно внедряване</li>
                          </ul>
                        </div>
                        <div className="p-4 bg-blue-50 rounded-lg">
                          <h4 className="font-medium text-blue-800 mb-2">Измерване</h4>
                          <ul className="text-sm text-blue-700 space-y-1">
                            <li>• KPI дефиниране</li>
                            <li>• ROI проследяване</li>
                            <li>• Performance метрики</li>
                            <li>• Feedback системи</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3">Препятствия и решения</h3>
                      <div className="space-y-4">
                        <div className="p-4 bg-purple-50 rounded-lg">
                          <h4 className="font-medium text-purple-800 mb-2">Съпротива на промяната</h4>
                          <p className="text-sm text-purple-700">
                            Обучете екипа за ползите от AI и започнете с малки, лесно видими подобрения.
                          </p>
                        </div>
                        <div className="p-4 bg-orange-50 rounded-lg">
                          <h4 className="font-medium text-orange-800 mb-2">Технически предизвикателства</h4>
                          <p className="text-sm text-orange-700">
                            Работете с експерти и използвайте готови решения за по-лесно внедряване.
                          </p>
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
                      Използвайте нашите AI инструменти и започнете автоматизацията на вашия бизнес днес!
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button asChild size="lg" variant="secondary">
                        <Link href="/tools">
                          <Zap className="h-5 w-5 mr-2" />
                          AI инструменти
                        </Link>
                      </Button>
                      <Button asChild size="lg" variant="outline" className="bg-white text-purple-600 hover:bg-gray-100">
                        <Link href="/tutorials">
                          <Bot className="h-5 w-5 mr-2" />
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
                        <TrendingUp className="h-4 w-4 mr-2" />
                        AI новини
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
