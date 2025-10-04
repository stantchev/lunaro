"use client"

import { Badge } from "@/components/ui/badge"
import { AlertTriangle } from "lucide-react"

interface BreakingNewsBannerProps {
  breakingNews?: {
    title: string
    url: string
    publishedAt: string
  }[]
}

export function BreakingNewsBanner({ breakingNews = [] }: BreakingNewsBannerProps) {
  if (breakingNews.length === 0) {
    return null
  }

  const latestBreaking = breakingNews[0]

  return (
    <div className="bg-red-600 text-white py-2 px-4">
      <div className="container mx-auto flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <AlertTriangle className="h-4 w-4 animate-pulse" />
          <Badge variant="destructive" className="bg-red-700 hover:bg-red-800">
            BREAKING NEWS
          </Badge>
        </div>
        <div className="flex-1 overflow-hidden">
          <a 
            href={latestBreaking.url}
            className="text-sm font-medium hover:underline truncate block"
          >
            {latestBreaking.title}
          </a>
        </div>
        <div className="text-xs opacity-90">
          {new Date(latestBreaking.publishedAt).toLocaleTimeString('bg-BG', { 
            hour: '2-digit', 
            minute: '2-digit' 
          })}
        </div>
      </div>
    </div>
  )
}
