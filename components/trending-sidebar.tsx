"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Clock, Eye } from "lucide-react"
import Link from "next/link"

interface TrendingItem {
  id: string
  title: string
  url: string
  category: string
  views: number
  publishedAt: string
  rank: number
}

interface TrendingSidebarProps {
  trendingItems: TrendingItem[]
}

export function TrendingSidebar({ trendingItems }: TrendingSidebarProps) {
  return (
    <div className="space-y-6">
      {/* Trending Now */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <TrendingUp className="h-5 w-5 text-primary" />
            <span>Трендове сега</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {trendingItems.slice(0, 5).map((item, index) => (
            <div key={item.id} className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold">
                {item.rank}
              </div>
              <div className="flex-1 min-w-0">
                <Link 
                  href={item.url}
                  className="text-sm font-medium hover:text-primary transition-colors line-clamp-2"
                >
                  {item.title}
                </Link>
                <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-2 mt-1">
                  <Badge variant="outline" className="text-xs w-fit">
                    {item.category}
                  </Badge>
                  <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                    <Eye className="h-3 w-3" />
                    <span>{item.views.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Most Read Today */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Clock className="h-5 w-5 text-primary" />
            <span>Най-четени днес</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {trendingItems.slice(5, 10).map((item, index) => (
            <div key={item.id} className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-5 h-5 bg-muted text-muted-foreground rounded-full flex items-center justify-center text-xs font-bold">
                {index + 6}
              </div>
              <div className="flex-1 min-w-0">
                <Link 
                  href={item.url}
                  className="text-sm hover:text-primary transition-colors line-clamp-2"
                >
                  {item.title}
                </Link>
                <div className="text-xs text-muted-foreground mt-1">
                  {new Date(item.publishedAt).toLocaleTimeString('bg-BG', { 
                    hour: '2-digit', 
                    minute: '2-digit' 
                  })}
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
