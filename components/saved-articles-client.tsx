"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Bookmark, Clock, User, Trash2, ExternalLink, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { toast } from "sonner"

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

interface SavedArticle {
  slug: string
  title: string
  featuredImage: string
  savedAt: string
  category?: string
}

export function SavedArticlesClient() {
  const [articles, setArticles] = useState<SavedArticle[]>([])
  const [filteredArticles, setFilteredArticles] = useState<SavedArticle[]>([])
  const [searchQuery, setSearchQuery] = useState("")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = JSON.parse(localStorage.getItem("saved-articles") || "[]")
      // Сортирай по дата на запазване (най-новите първи)
      const sortedArticles = saved.sort((a: SavedArticle, b: SavedArticle) => 
        new Date(b.savedAt).getTime() - new Date(a.savedAt).getTime()
      )
      setArticles(sortedArticles)
      setFilteredArticles(sortedArticles)
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    if (!searchQuery.trim()) {
      setFilteredArticles(articles)
    } else {
      const filtered = articles.filter(article =>
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.category?.toLowerCase().includes(searchQuery.toLowerCase())
      )
      setFilteredArticles(filtered)
    }
  }, [searchQuery, articles])

  const removeArticle = (slug: string) => {
    const updatedArticles = articles.filter(article => article.slug !== slug)
    setArticles(updatedArticles)
    setFilteredArticles(filteredArticles.filter(article => article.slug !== slug))
    localStorage.setItem("saved-articles", JSON.stringify(updatedArticles))
    toast.success("Статията е премахната от запазените")
  }

  const clearAll = () => {
    if (confirm("Сигурни ли сте, че искате да изтриете всички запазени статии?")) {
      setArticles([])
      setFilteredArticles([])
      localStorage.setItem("saved-articles", JSON.stringify([]))
      toast.success("Всички запазени статии са изтрити")
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("bg-BG", {
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  const getCategoryColor = (category?: string) => {
    switch (category?.toLowerCase()) {
      case "киберсигурност":
        return "destructive"
      case "seo":
        return "secondary"
      case "ai":
        return "default"
      default:
        return "outline"
    }
  }

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="text-center py-12">
          <Bookmark className="h-12 w-12 text-muted-foreground mx-auto mb-4 animate-pulse" />
          <p className="text-muted-foreground">Зареждане на запазените статии...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6">
      {/* Search and Actions */}
      {articles.length > 0 && (
        <div className="mb-6 sm:mb-8 space-y-3 sm:space-y-4">
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Търсете в запазените статии..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 w-full"
              />
            </div>
            <Button
              variant="outline"
              onClick={clearAll}
              className="text-destructive hover:text-destructive w-full sm:w-auto"
            >
              <Trash2 className="h-4 w-4 mr-2" />
              <span className="hidden xs:inline">Изтрий всички</span>
              <span className="xs:hidden">Изтрий</span>
            </Button>
          </div>
          
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm text-muted-foreground gap-1 sm:gap-0">
            <span>
              {filteredArticles.length} от {articles.length} статии
            </span>
            {searchQuery && (
              <span className="text-xs sm:text-sm">Резултати за "{searchQuery}"</span>
            )}
          </div>
        </div>
      )}

      {/* Articles List */}
      {filteredArticles.length === 0 ? (
        <Card className="text-center py-8 sm:py-12 mx-2 sm:mx-0">
          <CardContent className="px-4 sm:px-6">
            <Bookmark className="h-12 w-12 sm:h-16 sm:w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg sm:text-xl font-semibold mb-2">
              {articles.length === 0 ? "Нямате запазени статии" : "Няма намерени резултати"}
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 px-2">
              {articles.length === 0 
                ? "Запазете интересни статии за да ги прегледате по-късно"
                : "Опитайте с различни ключови думи"
              }
            </p>
            {articles.length === 0 && (
              <Button asChild className="w-full sm:w-auto">
                <Link href="/">
                  Разгледай статии
                </Link>
              </Button>
            )}
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-3 sm:space-y-4">
          {filteredArticles.map((article) => (
            <Card key={article.slug} className="hover:shadow-md transition-shadow mx-2 sm:mx-0">
              <CardContent className="p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  {/* Featured Image */}
                  <div className="relative w-full sm:w-32 h-40 sm:h-24 flex-shrink-0 rounded-lg overflow-hidden">
                    <Image
                      src={article.featuredImage || "/placeholder.svg"}
                      alt={article.title}
                      width={433}
                      height={244}
                      className="object-cover w-full h-full"
                      sizes="(max-width: 768px) 433px, (max-width: 1200px) 25vw, 20vw"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="mb-3">
                      <Link
                        href={`/article/${article.slug}`}
                        className="text-base sm:text-lg font-semibold hover:text-primary transition-colors line-clamp-2 block"
                      >
                        {article.title}
                      </Link>
                      
                      {/* Category and Date */}
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 mt-2">
                        {article.category && (
                          <Badge variant={getCategoryColor(article.category)} className="w-fit">
                            {article.category}
                          </Badge>
                        )}
                        <div className="flex items-center text-xs text-muted-foreground">
                          <Clock className="h-3 w-3 mr-1 flex-shrink-0" />
                          <span className="truncate">Запазена на {formatDate(article.savedAt)}</span>
                        </div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col xs:flex-row gap-2 sm:gap-2">
                      <Button size="sm" asChild className="w-full xs:w-auto">
                        <Link href={`/article/${article.slug}`}>
                          <ExternalLink className="h-3 w-3 mr-1" />
                          Прочети
                        </Link>
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => removeArticle(article.slug)}
                        className="text-destructive hover:text-destructive w-full xs:w-auto"
                      >
                        <Trash2 className="h-3 w-3 mr-1" />
                        Премахни
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Footer Info */}
      {articles.length > 0 && (
        <>
          <Separator className="my-6 sm:my-8 mx-2 sm:mx-0" />
          <div className="text-center text-xs sm:text-sm text-muted-foreground px-4">
            <p className="mb-1">Запазените статии се съхраняват само в вашия браузър</p>
            <p>Използвайте "Изтрий всички" за да изчистите всички запазени статии</p>
          </div>
        </>
      )}
    </div>
  )
}
