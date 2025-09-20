"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Bookmark } from "lucide-react"

type ArticleData = {
  slug: string
  title: string
  featuredImage: string
  excerpt: string
}

export function SaveButton(article: ArticleData) {
  const [saved, setSaved] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem("saved-articles-data")
    if (stored) {
      const parsed = JSON.parse(stored) as ArticleData[]
      setSaved(parsed.some((a) => a.slug === article.slug))
    }
  }, [article.slug])

  const toggleSave = () => {
    const stored = localStorage.getItem("saved-articles-data")
    let parsed: ArticleData[] = stored ? JSON.parse(stored) : []

    if (saved) {
      // Премахни
      parsed = parsed.filter((a) => a.slug !== article.slug)
    } else {
      // Добави
      parsed.push(article)
    }

    localStorage.setItem("saved-articles-data", JSON.stringify(parsed))
    setSaved(!saved)
  }

  return (
    <Button variant="outline" size="sm" onClick={toggleSave}>
      <Bookmark className="h-4 w-4 mr-2" />
      {saved ? "Премахни" : "Запази"}
    </Button>
  )
}
