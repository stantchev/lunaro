"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Clock, Eye, Heart, Star, Crown, Lock, TrendingUp } from "lucide-react"
import Link from "next/link"

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

interface FeaturedAnalysisProps {
  analysis: Analysis
}

export function FeaturedAnalysis({ analysis }: FeaturedAnalysisProps) {
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

  return (
    <Card className="overflow-hidden border-0 shadow-2xl">
      <div className="grid lg:grid-cols-2 gap-0">
        {/* Image Section */}
        <div className="relative h-64 lg:h-auto">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700" />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <TrendingUp className="h-16 w-16 mx-auto mb-4 opacity-80" />
              <h3 className="text-2xl font-bold mb-2">Експертен анализ</h3>
              <p className="text-lg opacity-90">Дълбоки инсайди и прогнози</p>
            </div>
          </div>
          
          {/* Overlay badges */}
          <div className="absolute top-6 left-6 flex gap-2">
            <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-950/20 dark:text-yellow-200 border-0">
              <Crown className="h-3 w-3 mr-1" />
              Препоръчан
            </Badge>
            <Badge className="bg-red-100 text-red-800 dark:bg-red-950/20 dark:text-red-200 border-0">
              {analysis.category}
            </Badge>
          </div>
          
          <div className="absolute top-6 right-6">
            <div className="bg-yellow-100 text-yellow-800 p-3 rounded-full">
              <Lock className="h-5 w-5" />
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-8 lg:p-12">
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 leading-tight">
                {analysis.title}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {analysis.excerpt}
              </p>
            </div>

            <div className="flex items-center gap-4">
              <Avatar className="h-12 w-12">
                <AvatarImage src={analysis.authorImage} />
                <AvatarFallback className="bg-blue-100 text-blue-800 text-lg">
                  {analysis.author.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold text-lg">{analysis.author}</p>
                <p className="text-muted-foreground">{analysis.authorTitle}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {analysis.tags.map((tag, index) => (
                <Badge key={index} variant="outline" className="text-sm">
                  {tag}
                </Badge>
              ))}
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <span>{analysis.readTime}</span>
              </div>
              <div className="flex items-center gap-2">
                <Eye className="h-4 w-4 text-muted-foreground" />
                <span>{formatViews(analysis.views)} гледания</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="h-4 w-4 text-muted-foreground" />
                <span>{analysis.likes} харесвания</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="font-medium">{analysis.rating}</span>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t">
              <span className="text-sm text-muted-foreground">
                Публикуван на {formatDate(analysis.publishedAt)}
              </span>
              <div className="flex gap-3">
                <Button variant="outline" size="lg">
                  <Heart className="h-4 w-4 mr-2" />
                  Харесай
                </Button>
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700" asChild>
                  <Link href={`/analizi/${analysis.slug || analysis.id}`}>
                    <Lock className="h-4 w-4 mr-2" />
                    Прочети анализа
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}
