"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Clock, Eye, Heart, Star, Crown, Lock } from "lucide-react"
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

interface Analysis {
  id: number
  title: string
  excerpt: string
  author: string
  authorTitle: string
  authorImage?: string
  category: string
  readTime: string
  publishedAt: string
  views: number
  likes: number
  tags: string[]
  image: string
  isPremium: boolean
  rating: number
}

interface AnalysisCardProps {
  analysis: Analysis
}

export function AnalysisCard({ analysis }: AnalysisCardProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('bg-BG', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const formatViews = (views: number) => {
    if (views >= 1000) {
      return `${(views / 1000).toFixed(1)}K`
    }
    return views.toString()
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Киберсигурност':
        return 'bg-red-100 text-red-800 dark:bg-red-950/20 dark:text-red-200'
      case 'SEO':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-950/20 dark:text-blue-200'
      case 'AI':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-950/20 dark:text-purple-200'
      case 'Технологии':
        return 'bg-green-100 text-green-800 dark:bg-green-950/20 dark:text-green-200'
      case 'Правни':
        return 'bg-orange-100 text-orange-800 dark:bg-orange-950/20 dark:text-orange-200'
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-950/20 dark:text-gray-200'
    }
  }

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
      <CardHeader className="p-0">
        <div className="relative">
          <div className="aspect-video bg-gradient-to-br from-blue-100 to-indigo-200 dark:from-blue-950/20 dark:to-indigo-900/20 rounded-t-lg overflow-hidden">
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute top-4 left-4 flex gap-2">
              <Badge className={`${getCategoryColor(analysis.category)} border-0`}>
                {analysis.category}
              </Badge>
              {analysis.isPremium && (
                <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 dark:bg-yellow-950/20 dark:text-yellow-200 border-0">
                  <Crown className="h-3 w-3 mr-1" />
                  Premium
                </Badge>
              )}
            </div>
            <div className="absolute top-4 right-4">
              {analysis.isPremium ? (
                <div className="bg-yellow-100 text-yellow-800 p-2 rounded-full">
                  <Lock className="h-4 w-4" />
                </div>
              ) : (
                <div className="bg-white/90 text-gray-800 p-2 rounded-full">
                  <Star className="h-4 w-4" />
                </div>
              )}
            </div>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="p-6">
        <div className="space-y-4">
          <div>
            <CardTitle className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
              {analysis.title}
            </CardTitle>
            <p className="text-muted-foreground text-sm">
              {truncateAfterFirstSentence(analysis.excerpt)}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Avatar className="h-8 w-8">
              <AvatarImage src={analysis.authorImage} />
              <AvatarFallback className="bg-blue-100 text-blue-800 text-sm">
                {analysis.author.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">{analysis.author}</p>
              <p className="text-xs text-muted-foreground truncate">{analysis.authorTitle}</p>
            </div>
          </div>

          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                <span>{analysis.readTime}</span>
              </div>
              <div className="flex items-center gap-1">
                <Eye className="h-3 w-3" />
                <span>{formatViews(analysis.views)}</span>
              </div>
              <div className="flex items-center gap-1">
                <Heart className="h-3 w-3" />
                <span>{analysis.likes}</span>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
              <span className="font-medium">{analysis.rating}</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-1">
            {analysis.tags.slice(0, 3).map((tag, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
            {analysis.tags.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{analysis.tags.length - 3}
              </Badge>
            )}
          </div>

          <div className="flex items-center justify-between">
            <span className="text-xs text-muted-foreground">
              {formatDate(analysis.publishedAt)}
            </span>
            <Button asChild size="sm" className="group-hover:bg-blue-600 transition-colors">
              <Link href={`/analizi/${analysis.slug || analysis.id}`}>
                {analysis.isPremium ? 'Прегледай' : 'Прочети'}
              </Link>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
