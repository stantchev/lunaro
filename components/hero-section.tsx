import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, User, Eye } from "lucide-react"
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

interface HeroSectionProps {
  latestArticle?: Article | null
}

export function HeroSection({ latestArticle }: HeroSectionProps) {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="relative container mx-auto px-4 py-8 md:py-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Featured Story */}
          <div className="space-y-6">
            <div className="space-y-4">
              <Badge variant="destructive" className="text-sm px-3 py-1">
                ГЛАВНА НОВИНА
              </Badge>
              
              {latestArticle ? (
                <>
                  <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold leading-tight">
                    {latestArticle.translatedTitle || latestArticle.title}
                  </h1>
                  
                  <p className="text-lg text-slate-300 leading-relaxed">
                    {truncateAfterSecondSentence(latestArticle.summary || latestArticle.translatedDescription || latestArticle.description)}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-slate-400">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4" />
                      <span>
                        {new Date(latestArticle.publishedAt).toLocaleDateString('bg-BG', {
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric'
                        })}
                      </span>
                    </div>
                    {latestArticle.author && (
                      <div className="flex items-center space-x-2">
                        <User className="h-4 w-4" />
                        <span>{latestArticle.author}</span>
                      </div>
                    )}
                    <div className="flex items-center space-x-2">
                      <Eye className="h-4 w-4" />
                      <span>2.4K прегледа</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" asChild className="bg-red-600 hover:bg-red-700">
                      <Link href={latestArticle.url}>Прочети пълната история</Link>
                    </Button>
                    <Button size="lg" variant="outline" className="border-white text-slate-900 bg-white hover:bg-slate-100 hover:text-slate-900">
                      <Link href="#latest">Всички новини</Link>
                    </Button>
                  </div>
                </>
              ) : (
                <>
                  <h1 className="text-3xl lg:text-5xl font-bold leading-tight">
                    Lunaro News
                  </h1>
                  
                  <p className="text-lg text-slate-300 leading-relaxed">
                    Водещо българско издание за киберсигурност, технологии и дигитални иновации. 
                    Актуални новини, задълбочени анализи и експертни мнения.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" asChild className="bg-red-600 hover:bg-red-700">
                      <Link href="#latest">Последни новини</Link>
                    </Button>
                    <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900">
                      <Link href="/contact">Абонирай се</Link>
                    </Button>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Right Column - Featured Image */}
          <div className="relative">
            {latestArticle?.urlToImage ? (
              <div className="relative aspect-[16/10] rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src={latestArticle.urlToImage}
                  alt={latestArticle.translatedTitle || latestArticle.title}
                  width={433}
                  height={244}
                  className="object-cover w-full h-full"
                  priority
                  sizes="(max-width: 768px) 433px, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <Badge variant="secondary" className="mb-2">
                    {latestArticle.category}
                  </Badge>
                </div>
              </div>
            ) : (
              <div className="relative aspect-[16/10] rounded-lg overflow-hidden shadow-2xl bg-slate-700 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-slate-600 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl font-bold">LN</span>
                  </div>
                  <p className="text-slate-300">Lunaro News</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
