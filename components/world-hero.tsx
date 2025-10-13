import { Badge } from "@/components/ui/badge"
import { Globe, TrendingUp, Users, MapPin, Zap, Sparkles } from "lucide-react"
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

interface WorldHeroProps {
  featuredArticle?: Article | null
}

export function WorldHero({ featuredArticle }: WorldHeroProps) {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="relative container mx-auto px-4 py-6 md:py-16">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
          {/* Left Column - Featured Story */}
          <div className="space-y-4 lg:space-y-6">
            <div className="space-y-3 lg:space-y-4">
              <div className="flex items-center space-x-3">
                <Globe className="h-6 w-6 text-blue-300" />
                <Badge className="bg-blue-600 text-white">
                  СВЕТЪТ & ГЛОБАЛНИ НОВИНИ
                </Badge>
              </div>
              
              {featuredArticle ? (
                <>
                  <h1 className="text-xl sm:text-2xl lg:text-5xl font-bold leading-tight">
                    {featuredArticle.translatedTitle || featuredArticle.title}
                  </h1>
                  
                  <p className="text-base lg:text-lg text-blue-100 leading-relaxed hidden sm:block">
                    {truncateAfterSecondSentence(featuredArticle.summary || featuredArticle.translatedDescription || featuredArticle.description)}
                  </p>
                  
                  <div className="flex items-center space-x-6 text-sm text-blue-200">
                    <div className="flex items-center space-x-2">
                      <Globe className="h-4 w-4" />
                      <span>Глобални новини</span>
                    </div>
                    {featuredArticle.author && (
                      <div className="flex items-center space-x-2">
                        <span>от {featuredArticle.author}</span>
                      </div>
                    )}
                    <div className="flex items-center space-x-2">
                      <Zap className="h-4 w-4" />
                      <span>4.1K прегледа</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3 lg:gap-4">
                    <Link 
                      href={featuredArticle.url}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                    >
                      Прочети анализа
                    </Link>
                    <Link 
                      href="#articles"
                      className="border border-white text-white hover:bg-white hover:text-blue-900 px-6 py-3 rounded-lg font-medium transition-colors"
                    >
                      Всички новини
                    </Link>
                  </div>
                </>
              ) : (
                <>
                  <h1 className="text-2xl lg:text-5xl font-bold leading-tight">
                    Светът & Глобални новини
                  </h1>
                  
                  <p className="text-base lg:text-lg text-blue-100 leading-relaxed hidden sm:block">
                    Следи най-важните световни тенденции в технологиите, киберсигурността и устойчивото развитие. 
                    Глобални анализи за бъдещето на технологиите и тяхното въздействие върху света.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-3 lg:gap-4">
                    <Link 
                      href="#articles"
                      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                    >
                      Последни новини
                    </Link>
                    <Link 
                      href="/tools"
                      className="border border-white text-white hover:bg-white hover:text-blue-900 px-6 py-3 rounded-lg font-medium transition-colors"
                    >
                      Глобални инструменти
                    </Link>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Right Column - Featured Image */}
          <div className="relative order-first lg:order-last">
            {featuredArticle?.urlToImage ? (
              <div className="relative aspect-[16/9] sm:aspect-[16/10] lg:aspect-[16/10] rounded-lg overflow-hidden shadow-2xl max-w-md mx-auto lg:max-w-none">
                <Image
                  src={featuredArticle.urlToImage}
                  alt={featuredArticle.translatedTitle || featuredArticle.title}
                  width={433}
                  height={244}
                  className="object-cover w-full h-full"
                  priority
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <Badge className="bg-blue-600 text-white mb-2">
                    <Sparkles className="h-3 w-3 mr-1" />
                    Глобална новина
                  </Badge>
                </div>
              </div>
            ) : (
              <div className="relative aspect-[16/9] sm:aspect-[16/10] lg:aspect-[16/10] rounded-lg overflow-hidden shadow-2xl bg-blue-700 flex items-center justify-center max-w-md mx-auto lg:max-w-none">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto">
                    <Globe className="h-8 w-8 text-white" />
                  </div>
                  <p className="text-blue-100 font-medium">Светът & Глобални новини</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
