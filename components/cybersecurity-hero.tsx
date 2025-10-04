import { Badge } from "@/components/ui/badge"
import { Shield, AlertTriangle, TrendingUp, Eye } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// Function to truncate text after the second sentence
function truncateAfterSecondSentence(text: string): string {
  if (!text) return ""
  
  // Split by sentence endings (. ! ?)
  const sentences = text.split(/([.!?]+)/)
  const result = []
  
  for (let i = 0; i < sentences.length; i += 2) {
    if (i >= 4) break // Stop after second sentence (2 sentences = 4 parts: sentence + punctuation)
    result.push(sentences[i])
    if (sentences[i + 1]) {
      result.push(sentences[i + 1])
    }
  }
  
  return result.join('').trim()
}

interface Article {
  id: string
  title: string
  translatedTitle?: string
  description: string
  translatedDescription?: string
  summary?: string
  category: string
  publishedAt: string
  urlToImage?: string
  url: string
  author?: string
  source: {
    name: string
  }
}

interface CybersecurityHeroProps {
  featuredArticle?: Article | null
}

export function CybersecurityHero({ featuredArticle }: CybersecurityHeroProps) {
  return (
    <section className="relative bg-gradient-to-br from-red-900 via-red-800 to-red-900 text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="relative container mx-auto px-4 py-8 md:py-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Featured Story */}
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Shield className="h-6 w-6 text-red-300" />
                <Badge variant="destructive" className="text-sm px-3 py-1">
                  КИБЕРСИГУРНОСТ
                </Badge>
              </div>
              
              {featuredArticle ? (
                <>
                  <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold leading-tight">
                    {featuredArticle.translatedTitle || featuredArticle.title}
                  </h1>
                  
                  <p className="text-lg text-red-100 leading-relaxed">
                    {truncateAfterSecondSentence(featuredArticle.summary || featuredArticle.translatedDescription || featuredArticle.description)}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-red-200">
                    <div className="flex items-center space-x-2">
                      <AlertTriangle className="h-4 w-4" />
                      <span>Критична заплаха</span>
                    </div>
                    {featuredArticle.author && (
                      <div className="flex items-center space-x-2">
                        <span>от {featuredArticle.author}</span>
                      </div>
                    )}
                    <div className="flex items-center space-x-2">
                      <Eye className="h-4 w-4" />
                      <span>3.2K прегледа</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link 
                      href={featuredArticle.url}
                      className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                    >
                      Прочети анализа
                    </Link>
                    <Link 
                      href="#articles"
                      className="border border-white text-white hover:bg-white hover:text-red-900 px-6 py-3 rounded-lg font-medium transition-colors"
                    >
                      Всички новини
                    </Link>
                  </div>
                </>
              ) : (
                <>
                  <h1 className="text-3xl lg:text-5xl font-bold leading-tight">
                    Киберсигурност Новини
                  </h1>
                  
                  <p className="text-lg text-red-100 leading-relaxed">
                    Следи най-актуалните заплахи, уязвимости и защитни мерки в киберпространството. 
                    Експертни анализи и препоръки за защита на данните.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link 
                      href="#articles"
                      className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                    >
                      Последни новини
                    </Link>
                    <Link 
                      href="/tools"
                      className="border border-white text-white hover:bg-white hover:text-red-900 px-6 py-3 rounded-lg font-medium transition-colors"
                    >
                      Инструменти за защита
                    </Link>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Right Column - Featured Image */}
          <div className="relative">
            {featuredArticle?.urlToImage ? (
              <div className="relative aspect-[16/10] rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src={featuredArticle.urlToImage}
                  alt={featuredArticle.translatedTitle || featuredArticle.title}
                  width={433}
                  height={244}
                  className="object-cover w-full h-full"
                  priority
                  sizes="(max-width: 768px) 433px, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <Badge variant="destructive" className="mb-2">
                    <AlertTriangle className="h-3 w-3 mr-1" />
                    Критична заплаха
                  </Badge>
                </div>
              </div>
            ) : (
              <div className="relative aspect-[16/10] rounded-lg overflow-hidden shadow-2xl bg-red-700 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto">
                    <Shield className="h-8 w-8 text-white" />
                  </div>
                  <p className="text-red-100 font-medium">Киберсигурност</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
