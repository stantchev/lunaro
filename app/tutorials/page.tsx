import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { TutorialsHero } from "@/components/tutorials-hero"
import { TrendingSidebar } from "@/components/trending-sidebar"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, Play, Clock, Users, Star, ArrowRight } from "lucide-react"
import Link from "next/link"

// Function to truncate text after the first sentence
function truncateAfterFirstSentence(text: string): string {
  if (!text) return ""
  
  // Split by sentence endings (. ! ?)
  const sentences = text.split(/([.!?]+)/)
  const result = []
  
  for (let i = 0; i < sentences.length; i += 2) {
    if (i >= 2) break // Stop after first sentence (1 sentence = 2 parts: sentence + punctuation)
    result.push(sentences[i])
    if (sentences[i + 1]) {
      result.push(sentences[i + 1])
    }
  }
  
  return result.join('').trim()
}

export const metadata: Metadata = {
  title: {
    default: "Ръководства и Уроци - Lunaro News",
    template: "%s - Lunaro News",
  },
  description:
    "Професионални ръководства за киберсигурност, SEO оптимизация и AI технологии. Стъпка по стъпка уроци от експерти.",
  keywords:
    "ръководства, уроци, киберсигурност уроци, SEO уроци, AI уроци, дигитални умения, обучение, Lunaro News",
  authors: [{ name: "Lunaro News" }],
  creator: "Lunaro News",
  publisher: "Lunaro News",
  robots: "index, follow",
  alternates: {
    canonical: "https://lunaro.news/tutorials",
  },
  openGraph: {
    type: "website",
    locale: "bg_BG",
    url: "https://lunaro.news/tutorials",
    siteName: "Lunaro News",
    title: "Ръководства и Уроци - Lunaro News",
    description:
      "Професионални ръководства за киберсигурност, SEO и AI технологии от експерти.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ръководства и Уроци - Lunaro News",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ръководства и Уроци - Lunaro News",
    description:
      "Професионални ръководства за киберсигурност, SEO и AI технологии.",
    images: ["/og-image.jpg"],
  },
  generator: "Lunaro News",
}

// Mock tutorials data
const tutorials = [
  {
    id: "1",
    title: "Как да защитиш сайта си от хакерски атаки",
    description: "Пълно ръководство за киберсигурност на уебсайтове с практически съвети и инструменти.",
    category: "Киберсигурност",
    duration: "45 мин",
    difficulty: "Начинаещ",
    rating: 4.8,
    students: 1250,
    image: "/cybersecurity-shield.png",
    url: "/tutorial/cybersecurity-basics"
  },
  {
    id: "2", 
    title: "SEO оптимизация за начинаещи",
    description: "Научи основите на SEO и как да подобриш позициите на сайта си в Google.",
    category: "SEO",
    duration: "60 мин",
    difficulty: "Начинаещ",
    rating: 4.9,
    students: 2100,
    image: "/google-seo-algorithm-update.jpg",
    url: "/tutorial/seo-basics"
  },
  {
    id: "3",
    title: "AI инструменти за бизнеса",
    description: "Как да използваш изкуствения интелект за автоматизация и растеж на бизнеса.",
    category: "AI",
    duration: "90 мин", 
    difficulty: "Среден",
    rating: 4.7,
    students: 890,
    image: "/ai-phishing-cybersecurity-threat.jpg",
    url: "/tutorial/ai-business-tools"
  },
  {
    id: "4",
    title: "Предиктивна киберсигурност с AI",
    description: "Съвременни техники за откриване и предотвратяване на кибератаки с машинно обучение.",
    category: "Киберсигурност",
    duration: "120 мин",
    difficulty: "Напреднал",
    rating: 4.9,
    students: 650,
    image: "/cybersecurity-ransomware-attack.jpg",
    url: "/tutorial/ai-cybersecurity"
  },
  {
    id: "5",
    title: "Автоматизирана SEO оптимизация",
    description: "Как да автоматизираш SEO процесите с AI инструменти и скриптове.",
    category: "SEO",
    duration: "75 мин",
    difficulty: "Среден", 
    rating: 4.6,
    students: 1100,
    image: "/placeholder.jpg",
    url: "/tutorial/automated-seo"
  },
  {
    id: "6",
    title: "Генеративен AI за създаване на съдържание",
    description: "Използване на ChatGPT, Claude и други AI инструменти за създаване на качествено съдържание.",
    category: "AI",
    duration: "85 мин",
    difficulty: "Начинаещ",
    rating: 4.8,
    students: 1800,
    image: "/placeholder.jpg",
    url: "/tutorial/generative-ai-content"
  }
]

// Mock trending items
const trendingItems = tutorials.slice(0, 8).map((tutorial, index) => ({
  id: tutorial.id,
  title: tutorial.title,
  url: tutorial.url,
  category: tutorial.category,
  views: Math.floor(Math.random() * 5000) + 1000,
  publishedAt: new Date().toISOString(),
  rank: index + 1
}))

export default function TutorialsPage() {
  const featuredTutorial = tutorials[0]
  const otherTutorials = tutorials.slice(1)

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Tutorials Hero */}
      <TutorialsHero featuredTutorial={featuredTutorial} />

      <main>
        {/* Main Content with Sidebar */}
        <div className="container mx-auto px-4 py-8">
          <div className="grid lg:grid-cols-4 gap-6 lg:gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3 space-y-8 lg:space-y-12">
              {/* Featured Tutorials */}
              <section>
                <div className="mb-8">
                  <h2 className="text-3xl font-bold mb-2">Препоръчани ръководства</h2>
                  <div className="h-1 w-20 bg-primary rounded-full" />
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  {otherTutorials.map((tutorial) => (
                    <Card key={tutorial.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                      <div className="aspect-[16/9] relative overflow-hidden">
                        <img
                          src={tutorial.image}
                          alt={tutorial.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-4 left-4">
                          <Badge variant="secondary" className="bg-background/90 backdrop-blur">
                            {tutorial.category}
                          </Badge>
                        </div>
                        <div className="absolute top-4 right-4">
                          <Badge variant="destructive" className="bg-red-600">
                            {tutorial.difficulty}
                          </Badge>
                        </div>
                      </div>

                      <CardHeader className="space-y-3">
                        <div className="flex items-center justify-between text-sm text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <Clock className="h-4 w-4" />
                            <span>{tutorial.duration}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Star className="h-4 w-4 text-yellow-500" />
                            <span>{tutorial.rating}</span>
                          </div>
                        </div>

                        <h3 className="font-semibold text-lg leading-tight group-hover:text-primary transition-colors">
                          {tutorial.title}
                        </h3>
                      </CardHeader>

                      <CardContent className="space-y-4">
                        <p className="text-muted-foreground text-sm">
                          {truncateAfterFirstSentence(tutorial.description)}
                        </p>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                            <Users className="h-3 w-3" />
                            <span>{tutorial.students.toLocaleString()} студенти</span>
                          </div>
                          <Button size="sm" asChild>
                            <Link href={tutorial.url} className="flex items-center space-x-1">
                              <span>Започни</span>
                              <ArrowRight className="h-3 w-3" />
                            </Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>

              {/* Categories */}
              <section className="py-16 bg-muted/30 border-y">
                <div className="container mx-auto px-4">
                  <div className="text-center space-y-6 mb-12">
                    <Badge variant="secondary" className="px-4 py-2 text-lg">
                      Категории
                    </Badge>
                    <h2 className="text-3xl lg:text-4xl font-bold">
                      Избери своята област
                    </h2>
                    <p className="max-w-2xl mx-auto text-muted-foreground">
                      Професионални ръководства за всички нива - от начинаещи до експерти.
                    </p>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                      <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <BookOpen className="h-8 w-8 text-red-600" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">Киберсигурност</h3>
                      <p className="text-muted-foreground mb-4">
                        Научи как да защитиш данните си и бизнеса от кибератаки
                      </p>
                      <Button variant="outline" asChild>
                        <Link href="/cybersecurity">Виж уроците</Link>
                      </Button>
                    </Card>

                    <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Play className="h-8 w-8 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">SEO Оптимизация</h3>
                      <p className="text-muted-foreground mb-4">
                        Подобри позициите на сайта си в търсачките с професионални техники
                      </p>
                      <Button variant="outline" asChild>
                        <Link href="/seo">Виж уроците</Link>
                      </Button>
                    </Card>

                    <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                      <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Star className="h-8 w-8 text-purple-600" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">AI Технологии</h3>
                      <p className="text-muted-foreground mb-4">
                        Освои изкуствения интелект и автоматизирай бизнес процесите
                      </p>
                      <Button variant="outline" asChild>
                        <Link href="/ai">Виж уроците</Link>
                      </Button>
                    </Card>
                  </div>
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <TrendingSidebar trendingItems={trendingItems} />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
