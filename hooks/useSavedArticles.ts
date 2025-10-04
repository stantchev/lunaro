"use client"
import { useState, useEffect } from "react"

export function useSavedArticles() {
  const [saved, setSaved] = useState<string[]>([])

  // чети от localStorage при зареждане
  useEffect(() => {
    const stored = localStorage.getItem("saved-articles")
    if (stored) setSaved(JSON.parse(stored))
  }, [])

  // запиши в localStorage когато се промени
  useEffect(() => {
    localStorage.setItem("saved-articles", JSON.stringify(saved))
  }, [saved])

  const toggleSave = (slug: string) => {
    setSaved((prev) =>
      prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug]
    )
  }

  const isSaved = (slug: string) => saved.includes(slug)

  return { saved, toggleSave, isSaved }
}
