import { Metadata } from "next"
import Link from "next/link"
import { 
  ArrowLeft, CheckCircle, ExternalLink, PenTool, TrendingUp, Target, 
  Zap, Users, BarChart3, Brain, Sparkles, FileText 
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SEOHead } from "@/components/seo-head"

export const metadata: Metadata = {
  title: "Генеративно AI съдържание - AI за създаване на контент | Lunaro News",
  description: "Научете как да използвате AI за създаване на качествено съдържание. ChatGPT, Claude, автоматично генериране на текстове, статии и маркетингови материали.",
  keywords: "генеративно AI, AI съдържание, ChatGPT съдържание, AI писане, автоматично генериране, България",
  openGraph: {
    title: "Генеративно AI съдържание - AI за създаване на контент",
    description: "Научете как да използвате AI за създаване на качествено съдържание. ChatGPT, Claude, автоматично генериране на текстове, статии и маркетингови материали за модерни бизнеси.",
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
    description: "Научете как да използвате AI за създаване на качествено съдържание. ChatGPT, Claude, автоматично генериране на текстове, статии и маркетингови материали за модерни бизнеси.",
    images: ["https://lunaro.news/og-image.jpg"]
  },
  alternates: {
    canonical: "https://lunaro.news/tutorial/generative-ai-content"
  }
}

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
      "text": "Използвайте ChatGPT, Claude и други AI инструменти за създаване на съдържание"
    },
    {
      "@type": "HowToStep",
      "name": "AI стратегии за съдържание",
      "text": "Разработете ефективни стратегии за използване на AI в content marketing"
    },
    {
      "@type": "HowToStep",
      "name": "Оптимизация и редактиране",
      "text": "Научете как да оптимизирате и редактирате AI-генерирано съдържание"
    },
    {
      "@type": "HowToStep",
      "name": "Типове съдържание",
      "text": "Създавайте различни типове съдържание с AI - блогове, маркетинг, социални мрежи"
    }
  ]
}

export default function GenerativeAIContentTutorial() {
  return (
    <div>
      <SEOHead structuredData={structuredData} />
      
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
                <div className="h-6 w-px bg-gray-300"></div>
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
              </div>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Генеративно AI съдържание
            </h1>
              <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
              Научете как да използвате AI за създаване на качествено съдържание. ChatGPT, Claude, 
              автоматично генериране на текстове, статии и маркетингови материали за модерни бизнеси.
            </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" variant="secondary">
                  <Link href="#ai-writing-tools">
                    <PenTool className="h-5 w-5 mr-2" />
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
                  Навигация по всички секции на генеративно AI съдържание ръководството
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                      <span className="text-purple-600 font-semibold text-sm">1</span>
                    </div>
                    <div>
                      <h3 className="font-medium">AI инструменти</h3>
                      <p className="text-sm text-gray-600">ChatGPT, Claude</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                      <span className="text-pink-600 font-semibold text-sm">2</span>
                    </div>
                    <div>
                      <h3 className="font-medium">AI стратегии</h3>
                      <p className="text-sm text-gray-600">Prompt engineering</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-semibold text-sm">3</span>
                    </div>
                    <div>
                      <h3 className="font-medium">Оптимизация</h3>
                      <p className="text-sm text-gray-600">AI инструменти</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 font-semibold text-sm">4</span>
                    </div>
                    <div>
                      <h3 className="font-medium">Типове съдържание</h3>
                      <p className="text-sm text-gray-600">Блогове, маркетинг</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                      <span className="text-orange-600 font-semibold text-sm">5</span>
                    </div>
                    <div>
                      <h3 className="font-medium">Best Practices</h3>
                      <p className="text-sm text-gray-600">Качество, етика</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                      <span className="text-red-600 font-semibold text-sm">6</span>
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
              {/* AI Writing Tools */}
              <section id="ai-writing-tools" className="mb-12">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl flex items-center">
                      <PenTool className="h-6 w-6 mr-3 text-purple-600" />
                      1. AI инструменти за писане
                    </CardTitle>
                    <CardDescription>
                      Използвайте ChatGPT, Claude и други AI инструменти за създаване на съдържание
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-3">ChatGPT</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="p-4 bg-green-50 rounded-lg">
                          <h4 className="font-medium text-green-800 mb-2">Основни функции</h4>
                          <ul className="text-sm text-green-700 space-y-1">
                            <li>• Blog post generation</li>
                            <li>• Email writing</li>
                            <li>• Social media content</li>
                            <li>• Product descriptions</li>
                          </ul>
                        </div>
                        <div className="p-4 bg-blue-50 rounded-lg">
                          <h4 className="font-medium text-blue-800 mb-2">Advanced features</h4>
                          <ul className="text-sm text-blue-700 space-y-1">
                            <li>• Code generation</li>
                            <li>• Creative writing</li>
                            <li>• Translation</li>
                            <li>• Summarization</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3">Claude</h3>
                      <div className="space-y-4">
                        <div className="p-4 bg-purple-50 rounded-lg">
                          <h4 className="font-medium text-purple-800 mb-2">Document Analysis</h4>
                          <p className="text-sm text-purple-700">
                            Claude може да анализира големи документи и да създава качествено съдържание въз основа на тях.
                          </p>
                        </div>
                        <div className="p-4 bg-orange-50 rounded-lg">
                          <h4 className="font-medium text-orange-800 mb-2">Long-form Content</h4>
                          <p className="text-sm text-orange-700">
                            Идеален за създаване на дълги статии, white papers и детайлни анализи.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* AI Content Strategies */}
              <section id="ai-strategies" className="mb-12">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl flex items-center">
                      <Brain className="h-6 w-6 mr-3 text-purple-600" />
                      2. AI стратегии за съдържание
                    </CardTitle>
                    <CardDescription>
                      Разработете ефективни стратегии за използване на AI в content marketing
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Prompt Engineering</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="p-4 bg-green-50 rounded-lg">
                          <h4 className="font-medium text-green-800 mb-2">Структура на prompts</h4>
                          <ul className="text-sm text-green-700 space-y-1">
                            <li>• Context setting</li>
                            <li>• Specific instructions</li>
                            <li>• Output format</li>
                            <li>• Tone and style</li>
                          </ul>
                        </div>
                        <div className="p-4 bg-blue-50 rounded-lg">
                          <h4 className="font-medium text-blue-800 mb-2">Advanced techniques</h4>
                          <ul className="text-sm text-blue-700 space-y-1">
                            <li>• Chain of thought</li>
                            <li>• Few-shot learning</li>
                            <li>• Role playing</li>
                            <li>• Iterative refinement</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3">Content Quality</h3>
                      <div className="space-y-4">
                        <div className="p-4 bg-purple-50 rounded-lg">
                          <h4 className="font-medium text-purple-800 mb-2">Human-AI Collaboration</h4>
                          <p className="text-sm text-purple-700">
                            Най-добрите резултати се постигат когато AI допълва, а не заменя човешката креативност.
                          </p>
                        </div>
                        <div className="p-4 bg-orange-50 rounded-lg">
                          <h4 className="font-medium text-orange-800 mb-2">Quality Control</h4>
                          <p className="text-sm text-orange-700">
                            Винаги проверявайте и редактирайте AI-генерираното съдържание преди публикуване.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* Optimization and Editing */}
              <section id="optimization" className="mb-12">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl flex items-center">
                      <Target className="h-6 w-6 mr-3 text-purple-600" />
                      3. Оптимизация и редактиране
                    </CardTitle>
                    <CardDescription>
                      Научете как да оптимизирате и редактирате AI-генерирано съдържание
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-3">AI инструменти за редактиране</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="p-4 bg-green-50 rounded-lg">
                          <h4 className="font-medium text-green-800 mb-2">Grammar and Style</h4>
                          <ul className="text-sm text-green-700 space-y-1">
                            <li>• Grammarly</li>
                            <li>• Hemingway Editor</li>
                            <li>• ProWritingAid</li>
                            <li>• LanguageTool</li>
                          </ul>
                        </div>
                        <div className="p-4 bg-blue-50 rounded-lg">
                          <h4 className="font-medium text-blue-800 mb-2">SEO Optimization</h4>
                          <ul className="text-sm text-blue-700 space-y-1">
                            <li>• Surfer SEO</li>
                            <li>• Clearscope</li>
                            <li>• MarketMuse</li>
                            <li>• Frase</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3">Автоматизация</h3>
                      <div className="space-y-4">
                        <div className="p-4 bg-purple-50 rounded-lg">
                          <h4 className="font-medium text-purple-800 mb-2">Workflow Automation</h4>
                          <p className="text-sm text-purple-700">
                            Настройте автоматизирани workflows за генериране, редактиране и публикуване на съдържание.
                          </p>
                        </div>
                        <div className="p-4 bg-orange-50 rounded-lg">
                          <h4 className="font-medium text-orange-800 mb-2">A/B Testing</h4>
                          <p className="text-sm text-orange-700">
                            Използвайте AI за създаване на различни версии на съдържанието за A/B тестове.
                          </p>
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
                      <FileText className="h-6 w-6 mr-3 text-purple-600" />
                      4. Типове съдържание
                    </CardTitle>
                    <CardDescription>
                      Създавайте различни типове съдържание с AI - блогове, маркетинг, социални мрежи
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Blog Content</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="p-4 bg-green-50 rounded-lg">
                          <h4 className="font-medium text-green-800 mb-2">Article Types</h4>
                          <ul className="text-sm text-green-700 space-y-1">
                            <li>• How-to guides</li>
                            <li>• Listicles</li>
                            <li>• Case studies</li>
                            <li>• Opinion pieces</li>
                          </ul>
                        </div>
                        <div className="p-4 bg-blue-50 rounded-lg">
                          <h4 className="font-medium text-blue-800 mb-2">SEO Optimization</h4>
                          <ul className="text-sm text-blue-700 space-y-1">
                            <li>• Keyword integration</li>
                            <li>• Meta descriptions</li>
                            <li>• Internal linking</li>
                            <li>• Headline optimization</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3">Marketing Content</h3>
                      <div className="space-y-4">
                        <div className="p-4 bg-purple-50 rounded-lg">
                          <h4 className="font-medium text-purple-800 mb-2">Email Marketing</h4>
                          <p className="text-sm text-purple-700">
                            AI може да създава персонализирани email кампании, subject lines и call-to-action текстове.
                          </p>
                        </div>
                        <div className="p-4 bg-orange-50 rounded-lg">
                          <h4 className="font-medium text-orange-800 mb-2">Social Media</h4>
                          <p className="text-sm text-orange-700">
                            Генерирайте engaging posts, captions и hashtags за различни социални платформи.
                          </p>
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
                      <Sparkles className="h-6 w-6 mr-3 text-purple-600" />
                      5. Best Practices
                    </CardTitle>
                    <CardDescription>
                      Етични и качествени практики за използване на AI в създаването на съдържание
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Качество</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="p-4 bg-green-50 rounded-lg">
                          <h4 className="font-medium text-green-800 mb-2">Fact Checking</h4>
                          <ul className="text-sm text-green-700 space-y-1">
                            <li>• Verify information</li>
                            <li>• Check sources</li>
                            <li>• Cross-reference data</li>
                            <li>• Update outdated info</li>
                          </ul>
                        </div>
                        <div className="p-4 bg-blue-50 rounded-lg">
                          <h4 className="font-medium text-blue-800 mb-2">Human Review</h4>
                          <ul className="text-sm text-blue-700 space-y-1">
                            <li>• Always edit AI content</li>
                            <li>• Add personal touch</li>
                            <li>• Ensure brand voice</li>
                            <li>• Check for accuracy</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3">Етични аспекти</h3>
                      <div className="space-y-4">
                        <div className="p-4 bg-purple-50 rounded-lg">
                          <h4 className="font-medium text-purple-800 mb-2">Transparency</h4>
                          <p className="text-sm text-purple-700">
                            Бъдете прозрачни за използването на AI в създаването на съдържание, особено в академични и журналистически контексти.
                          </p>
                        </div>
                        <div className="p-4 bg-orange-50 rounded-lg">
                          <h4 className="font-medium text-orange-800 mb-2">Copyright</h4>
                          <p className="text-sm text-orange-700">
                            Спазвайте авторските права и не копирайте директно съдържание от други източници.
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
                      <TrendingUp className="h-6 w-6 mr-3 text-purple-600" />
                      6. Внедряване
                    </CardTitle>
                    <CardDescription>
                      Стратегия за успешно внедряване на AI в content creation процеса
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Стратегия</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="p-4 bg-green-50 rounded-lg">
                          <h4 className="font-medium text-green-800 mb-2">Планиране</h4>
                          <ul className="text-sm text-green-700 space-y-1">
                            <li>• Content calendar</li>
                            <li>• Tool selection</li>
                            <li>• Team training</li>
                            <li>• Process definition</li>
                          </ul>
                        </div>
                        <div className="p-4 bg-blue-50 rounded-lg">
                          <h4 className="font-medium text-blue-800 mb-2">Измерване</h4>
                          <ul className="text-sm text-blue-700 space-y-1">
                            <li>• Content performance</li>
                            <li>• Engagement metrics</li>
                            <li>• ROI tracking</li>
                            <li>• Quality scores</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3">Workflow Optimization</h3>
                      <div className="space-y-4">
                        <div className="p-4 bg-purple-50 rounded-lg">
                          <h4 className="font-medium text-purple-800 mb-2">Automation</h4>
                          <p className="text-sm text-purple-700">
                            Настройте автоматизирани workflows за по-ефективно създаване и публикуване на съдържание.
                          </p>
                        </div>
                        <div className="p-4 bg-orange-50 rounded-lg">
                          <h4 className="font-medium text-orange-800 mb-2">Collaboration</h4>
                          <p className="text-sm text-orange-700">
                            Използвайте AI като инструмент за подобряване на сътрудничеството между екипа.
                          </p>
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
                      Готови да създавате с AI?
                    </h2>
                    <p className="text-xl mb-8 opacity-90">
                      Използвайте нашите AI инструменти и започнете създаването на качествено съдържание днес!
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
                          <PenTool className="h-5 w-5 mr-2" />
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
