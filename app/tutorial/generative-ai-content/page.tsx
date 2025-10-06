import { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, CheckCircle, ExternalLink, PenTool, Target, TrendingUp, Bot, BarChart3, Settings, Globe, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SEOHead } from "@/components/seo-head"
import { getOrganizationStructuredData, getBreadcrumbStructuredData } from "@/lib/structured-data"

export const metadata: Metadata = {
  title: "Генериране на AI съдържание - Пълно ръководство | Lunaro News",
  description: "Научете как да генерирате качествено съдържание с AI. От ChatGPT до Claude - всичко за AI content creation в България.",
  keywords: "AI съдържание, генериране на съдържание, ChatGPT, Claude, AI писане, content creation, България",
  openGraph: {
    title: "Генериране на AI съдържание - Пълно ръководство",
    description: "Научете как да генерирате качествено съдържание с AI. От ChatGPT до Claude - всичко за AI content creation.",
    type: "article",
    url: "https://lunaro.news/tutorial/generative-ai-content",
    images: [
      {
        url: "https://lunaro.news/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Генериране на AI съдържание - Lunaro News"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Генериране на AI съдържание - Пълно ръководство",
    description: "Научете как да генерирате качествено съдържание с AI. От ChatGPT до Claude - всичко за AI content creation.",
    images: ["https://lunaro.news/og-image.jpg"]
  },
  alternates: {
    canonical: "https://lunaro.news/tutorial/generative-ai-content"
  }
}

const breadcrumbItems = [
  { name: "Начало", url: "https://lunaro.news" },
  { name: "Tutorials", url: "https://lunaro.news/tutorials" },
  { name: "Генериране на AI съдържание", url: "https://lunaro.news/tutorial/generative-ai-content" }
]

const structuredData = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Генериране на AI съдържание - Пълно ръководство",
  "description": "Научете как да генерирате качествено съдържание с AI. От ChatGPT до Claude - всичко за AI content creation в България.",
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
      "name": "AI инструменти за съдържание",
      "text": "ChatGPT, Claude и други AI платформи за генериране на съдържание"
    },
    {
      "@type": "HowToStep",
      "name": "Стратегии за AI писане",
      "text": "Ефективни техники за AI content creation"
    },
    {
      "@type": "HowToStep",
      "name": "Оптимизация на съдържанието",
      "text": "AI за SEO и качество на съдържанието"
    },
    {
      "@type": "HowToStep",
      "name": "Внедряване в бизнеса",
      "text": "Практически стъпки за AI content strategy"
    }
  ]
}

export default function GenerativeAIContentTutorial() {
  return (
    <>
      <SEOHead 
        structuredData={[structuredData, getOrganizationStructuredData(), getBreadcrumbStructuredData(breadcrumbItems)]}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
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
                  Content Tutorial
                </Badge>
              </div>
              <div className="flex items-center space-x-2">
                <Badge variant="outline" className="text-green-600 border-green-200">
                  <CheckCircle className="h-3 w-3 mr-1" />
                  За всички
                </Badge>
                <Badge variant="outline" className="text-purple-600 border-purple-200">
                  <Bot className="h-3 w-3 mr-1" />
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
              Генериране на AI съдържание
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Генериране на AI съдържание
              <span className="block text-purple-600">Пълно ръководство</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Научете как да генерирате качествено съдържание с AI. От ChatGPT до Claude - 
              всичко за AI content creation в България.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
              <div className="flex items-center">
                <Users className="h-4 w-4 mr-2" />
                За всички нива
              </div>
              <div className="flex items-center">
                <PenTool className="h-4 w-4 mr-2" />
                25 минути четене
              </div>
              <div className="flex items-center">
                <Target className="h-4 w-4 mr-2" />
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
                    <div className="font-medium text-gray-900">1. AI инструменти</div>
                    <div className="text-sm text-gray-600">ChatGPT, Claude, Perplexity</div>
                  </a>
                  <a href="#writing-strategies" className="block p-3 hover:bg-purple-50 rounded-lg transition-colors">
                    <div className="font-medium text-gray-900">2. Стратегии за писане</div>
                    <div className="text-sm text-gray-600">Ефективни техники</div>
                  </a>
                  <a href="#content-optimization" className="block p-3 hover:bg-purple-50 rounded-lg transition-colors">
                    <div className="font-medium text-gray-900">3. Оптимизация</div>
                    <div className="text-sm text-gray-600">SEO и качество</div>
                  </a>
                </div>
                <div className="space-y-2">
                  <a href="#content-types" className="block p-3 hover:bg-purple-50 rounded-lg transition-colors">
                    <div className="font-medium text-gray-900">4. Типове съдържание</div>
                    <div className="text-sm text-gray-600">Блогове, статии, соц. мрежи</div>
                  </a>
                  <a href="#best-practices" className="block p-3 hover:bg-purple-50 rounded-lg transition-colors">
                    <div className="font-medium text-gray-900">5. Best practices</div>
                    <div className="text-sm text-gray-600">Качество и етика</div>
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
                      <Bot className="h-6 w-6 mr-3 text-purple-600" />
                      1. AI инструменти за съдържание
                    </CardTitle>
                    <CardDescription>
                      ChatGPT, Claude и други AI платформи за генериране на съдържание
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-3">ChatGPT (OpenAI)</h3>
                      <div className="space-y-4">
                        <div className="p-4 bg-blue-50 rounded-lg">
                          <h4 className="font-medium text-blue-800 mb-2">Предимства</h4>
                          <ul className="text-sm text-blue-700 space-y-1">
                            <li>• Най-популярен AI асистент</li>
                            <li>• Отличен за творческо писане</li>
                            <li>• Множество стилове и тонове</li>
                            <li>• Интеграция с Microsoft Office</li>
                          </ul>
                        </div>
                        <div className="p-4 bg-green-50 rounded-lg">
                          <h4 className="font-medium text-green-800 mb-2">Приложения</h4>
                          <ul className="text-sm text-green-700 space-y-1">
                            <li>• Блог статии и статии</li>
                            <li>• Социални мрежи постове</li>
                            <li>• Email маркетинг</li>
                            <li>• Продуктови описания</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3">Claude (Anthropic)</h3>
                      <div className="space-y-4">
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
                          <h4 className="font-medium text-orange-800 mb-2">Приложения</h4>
                          <ul className="text-sm text-orange-700 space-y-1">
                            <li>• Техническо писане</li>
                            <li>• Анализ на данни</li>
                            <li>• Дълги форми съдържание</li>
                            <li>• Етично AI писане</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3">Специализирани AI инструменти</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="p-4 border rounded-lg">
                          <h4 className="font-medium text-blue-600 mb-2">Jasper AI</h4>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Brand voice training</li>
                            <li>• SEO-optimized content</li>
                            <li>• Long-form content</li>
                            <li>• Multi-language support</li>
                          </ul>
                        </div>
                        <div className="p-4 border rounded-lg">
                          <h4 className="font-medium text-green-600 mb-2">Copy.ai</h4>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Marketing copy</li>
                            <li>• Social media content</li>
                            <li>• Email campaigns</li>
                            <li>• Ad copy generation</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* Writing Strategies */}
              <section id="writing-strategies" className="mb-12">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl flex items-center">
                      <PenTool className="h-6 w-6 mr-3 text-purple-600" />
                      2. Стратегии за AI писане
                    </CardTitle>
                    <CardDescription>
                      Ефективни техники за AI content creation
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Prompt engineering</h3>
                      <div className="space-y-4">
                        <div className="p-4 bg-blue-50 rounded-lg">
                          <h4 className="font-medium text-blue-800 mb-2">Структура на добър prompt</h4>
                          <ul className="text-sm text-blue-700 space-y-1">
                            <li>• Ясна роля и контекст</li>
                            <li>• Конкретни инструкции</li>
                            <li>• Желания стил и тон</li>
                            <li>• Формат и дължина</li>
                          </ul>
                        </div>
                        <div className="p-4 bg-green-50 rounded-lg">
                          <h4 className="font-medium text-green-800 mb-2">Пример за добър prompt</h4>
                          <p className="text-sm text-green-700 italic">
                            "Напиши SEO-оптимизирана статия за 'AI в бизнеса' с дължина 800 думи, 
                            тона професионален, включи 3 подзаглавия и завърши с призив за действие."
                          </p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3">Итеративно подобряване</h3>
                      <div className="space-y-4">
                        <div className="p-4 bg-gray-50 rounded-lg">
                          <h4 className="font-medium text-gray-800 mb-2">Процес на подобряване</h4>
                          <ol className="text-sm text-gray-700 space-y-1">
                            <li>1. Генерирай първоначално съдържание</li>
                            <li>2. Прегледай и идентифицирай слабости</li>
                            <li>3. Дай фина обратна връзка на AI</li>
                            <li>4. Повтори процеса до задоволителен резултат</li>
                          </ol>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3">Специализирани техники</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="p-4 border rounded-lg">
                          <h4 className="font-medium text-blue-600 mb-2">Chain of Thought</h4>
                          <p className="text-sm text-gray-600">
                            Накарай AI да обясни мисленето си стъпка по стъпка
                          </p>
                        </div>
                        <div className="p-4 border rounded-lg">
                          <h4 className="font-medium text-green-600 mb-2">Few-shot Learning</h4>
                          <p className="text-sm text-gray-600">
                            Дай примери за желания стил и качество
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
                      <Target className="h-6 w-6 mr-3 text-purple-600" />
                      3. Оптимизация на съдържанието
                    </CardTitle>
                    <CardDescription>
                      AI за SEO и качество на съдържанието
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-3">SEO оптимизация с AI</h3>
                      <div className="space-y-4">
                        <div className="p-4 bg-blue-50 rounded-lg">
                          <h4 className="font-medium text-blue-800 mb-2">Ключови думи и фрази</h4>
                          <ul className="text-sm text-blue-700 space-y-1">
                            <li>• AI за keyword research</li>
                            <li>• Естествено включване на ключови думи</li>
                            <li>• LSI keywords и семантични връзки</li>
                            <li>• Long-tail keyword optimization</li>
                          </ul>
                        </div>
                        <div className="p-4 bg-green-50 rounded-lg">
                          <h4 className="font-medium text-green-800 mb-2">Структура и форматиране</h4>
                          <ul className="text-sm text-green-700 space-y-1">
                            <li>• H1, H2, H3 йерархия</li>
                            <li>• Meta descriptions</li>
                            <li>• Alt text за изображения</li>
                            <li>• Internal linking suggestions</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3">Качество и четимост</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="p-4 border rounded-lg">
                          <h4 className="font-medium text-blue-600 mb-2">Readability optimization</h4>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Sentence length optimization</li>
                            <li>• Paragraph structure</li>
                            <li>• Vocabulary level adjustment</li>
                            <li>• Flow and coherence</li>
                          </ul>
                        </div>
                        <div className="p-4 border rounded-lg">
                          <h4 className="font-medium text-green-600 mb-2">Engagement factors</h4>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Hook creation</li>
                            <li>• Storytelling elements</li>
                            <li>• Call-to-action optimization</li>
                            <li>• Emotional triggers</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* Content Types */}
              <section id="content-types" className="mb-12">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl flex items-center">
                      <Globe className="h-6 w-6 mr-3 text-purple-600" />
                      4. Типове съдържание
                    </CardTitle>
                    <CardDescription>
                      AI за различни типове съдържание
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Блог статии</h3>
                      <div className="space-y-4">
                        <div className="p-4 bg-blue-50 rounded-lg">
                          <h4 className="font-medium text-blue-800 mb-2">AI стратегии за блогове</h4>
                          <ul className="text-sm text-blue-700 space-y-1">
                            <li>• Topic ideation с AI</li>
                            <li>• Outline generation</li>
                            <li>• Research assistance</li>
                            <li>• Content expansion</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3">Социални мрежи</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="p-4 border rounded-lg">
                          <h4 className="font-medium text-blue-600 mb-2">Facebook/LinkedIn</h4>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Professional tone</li>
                            <li>• Industry insights</li>
                            <li>• Thought leadership</li>
                            <li>• Engagement optimization</li>
                          </ul>
                        </div>
                        <div className="p-4 border rounded-lg">
                          <h4 className="font-medium text-green-600 mb-2">Instagram/TikTok</h4>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Creative captions</li>
                            <li>• Hashtag suggestions</li>
                            <li>• Trend integration</li>
                            <li>• Visual storytelling</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3">Email маркетинг</h3>
                      <div className="space-y-4">
                        <div className="p-4 bg-green-50 rounded-lg">
                          <h4 className="font-medium text-green-800 mb-2">AI за email кампании</h4>
                          <ul className="text-sm text-green-700 space-y-1">
                            <li>• Subject line optimization</li>
                            <li>• Personalization</li>
                            <li>• A/B testing content</li>
                            <li>• Segmentation strategies</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* Best Practices */}
              <section id="best-practices" className="mb-12">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl flex items-center">
                      <CheckCircle className="h-6 w-6 mr-3 text-purple-600" />
                      5. Best practices
                    </CardTitle>
                    <CardDescription>
                      Качество и етика в AI content creation
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Качество на съдържанието</h3>
                      <div className="space-y-4">
                        <div className="p-4 bg-blue-50 rounded-lg">
                          <h4 className="font-medium text-blue-800 mb-2">Human oversight</h4>
                          <ul className="text-sm text-blue-700 space-y-1">
                            <li>• Винаги преглеждай AI съдържанието</li>
                            <li>• Проверявай факти и данни</li>
                            <li>• Адаптирай за твоята аудитория</li>
                            <li>• Добавяй личен опит и мнения</li>
                          </ul>
                        </div>
                        <div className="p-4 bg-green-50 rounded-lg">
                          <h4 className="font-medium text-green-800 mb-2">Fact-checking</h4>
                          <ul className="text-sm text-green-700 space-y-1">
                            <li>• Проверявай всички твърдения</li>
                            <li>• Използвай надеждни източници</li>
                            <li>• Обновявай информацията</li>
                            <li>• Добавяй линкове към източници</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3">Етика и прозрачност</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="p-4 border rounded-lg">
                          <h4 className="font-medium text-blue-600 mb-2">Прозрачност</h4>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Съобщавай кога използваш AI</li>
                            <li>• Избягвай плагиатство</li>
                            <li>• Уважавай авторски права</li>
                            <li>• Бъди честен с читателите</li>
                          </ul>
                        </div>
                        <div className="p-4 border rounded-lg">
                          <h4 className="font-medium text-green-600 mb-2">Качество</h4>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Фокус върху стойността</li>
                            <li>• Оригинални идеи и перспективи</li>
                            <li>• Човешки опит и емоции</li>
                            <li>• Автентичност</li>
                          </ul>
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
                      <TrendingUp className="h-6 w-6 mr-3 text-purple-600" />
                      6. Внедряване в бизнеса
                    </CardTitle>
                    <CardDescription>
                      Практически стъпки за AI content strategy
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Стъпка 1: Планиране</h3>
                      <div className="space-y-4">
                        <div className="p-4 bg-gray-50 rounded-lg">
                          <h4 className="font-medium mb-2">Content strategy</h4>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Определи целите на съдържанието</li>
                            <li>• Идентифицирай целевата аудитория</li>
                            <li>• Избери подходящи AI инструменти</li>
                            <li>• Създай content calendar</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3">Стъпка 2: Тестване</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="p-4 border rounded-lg">
                          <h4 className="font-medium text-blue-600 mb-2">Пилотен проект</h4>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Избери един тип съдържание</li>
                            <li>• Тествай AI инструменти</li>
                            <li>• Измери резултатите</li>
                            <li>• Оптимизирай процеса</li>
                          </ul>
                        </div>
                        <div className="p-4 border rounded-lg">
                          <h4 className="font-medium text-green-600 mb-2">Метрики</h4>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Engagement rates</li>
                            <li>• Time to create</li>
                            <li>• Quality scores</li>
                            <li>• ROI measurement</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3">Стъпка 3: Масштабиране</h3>
                      <div className="space-y-4">
                        <div className="p-4 bg-green-50 rounded-lg">
                          <h4 className="font-medium text-green-800 mb-2">Workflow оптимизация</h4>
                          <ul className="text-sm text-green-700 space-y-1">
                            <li>• Автоматизирай повторящи се задачи</li>
                            <li>• Създай templates и prompts</li>
                            <li>• Интегрирай с други инструменти</li>
                            <li>• Обучи екипа</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3">Очаквани резултати</h3>
                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="p-4 bg-green-50 rounded-lg text-center">
                          <div className="text-2xl font-bold text-green-600 mb-1">+80%</div>
                          <div className="text-sm text-green-700">Скорост на създаване</div>
                        </div>
                        <div className="p-4 bg-blue-50 rounded-lg text-center">
                          <div className="text-2xl font-bold text-blue-600 mb-1">+50%</div>
                          <div className="text-sm text-blue-700">Обем на съдържанието</div>
                        </div>
                        <div className="p-4 bg-purple-50 rounded-lg text-center">
                          <div className="text-2xl font-bold text-purple-600 mb-1">+30%</div>
                          <div className="text-sm text-purple-700">Engagement</div>
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

                {/* Related Tutorials */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Свързани уроци</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Link href="/tutorial/ai-business-tools" className="block p-3 hover:bg-purple-50 rounded-lg transition-colors">
                      <div className="font-medium text-sm">AI бизнес инструменти</div>
                      <div className="text-xs text-gray-600">AI за бизнес</div>
                    </Link>
                    <Link href="/tutorial/automated-seo" className="block p-3 hover:bg-purple-50 rounded-lg transition-colors">
                      <div className="font-medium text-sm">Автоматизирано SEO</div>
                      <div className="text-xs text-gray-600">AI за SEO</div>
                    </Link>
                    <Link href="/tutorial/ai-cybersecurity" className="block p-3 hover:bg-purple-50 rounded-lg transition-colors">
                      <div className="font-medium text-sm">AI киберсигурност</div>
                      <div className="text-xs text-gray-600">AI за защита</div>
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
                        <div className="bg-purple-600 h-2 rounded-full w-full"></div>
                      </div>
                      <p className="text-xs text-gray-600">
                        Честито! Завършихте AI съдържание.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <Card className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
              <CardContent className="py-12">
                <h2 className="text-3xl font-bold mb-4">
                  Готови да започнете AI съдържанието?
                </h2>
                <p className="text-xl mb-8 opacity-90">
                  Използвайте нашите AI инструменти и създавайте качествено съдържание днес!
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
                      <Bot className="h-5 w-5 mr-2" />
                      Всички уроци
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

