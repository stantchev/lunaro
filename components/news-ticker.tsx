"use client"

import { useState, useEffect } from "react"
import { TrendingUp } from "lucide-react"

interface NewsTickerProps {
  news: {
    title: string
    url: string
    category: string
  }[]
}

export function NewsTicker({ news }: NewsTickerProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % news.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [news.length])

  if (news.length === 0) return null

  return (
    <div className="bg-muted/50 border-b py-2 overflow-hidden">
      <div className="container mx-auto flex items-center space-x-4">
        <div className="flex items-center space-x-2 text-sm font-medium text-muted-foreground">
          <TrendingUp className="h-4 w-4" />
          <span>Трендове:</span>
        </div>
        <div className="flex-1 overflow-hidden">
          <div 
            className="flex space-x-8 animate-marquee"
            style={{
              animation: `marquee ${news.length * 4}s linear infinite`
            }}
          >
            {news.map((item, index) => (
              <a
                key={index}
                href={item.url}
                className="text-sm hover:text-primary transition-colors whitespace-nowrap"
              >
                <span className="text-muted-foreground text-xs mr-2">[{item.category}]</span>
                {item.title}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
