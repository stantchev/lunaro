"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Bookmark } from "lucide-react"

interface SaveButtonProps {
  slug: string
  title: string
  featuredImage: string
}

export function SaveButton({ slug, title, featuredImage }: SaveButtonProps) {
  const [saved, setSaved] = useState(false)

  useEffect(() => {
    const savedArticles = JSON.parse(localStorage.getItem("saved-articles") || "[]")
    setSaved(savedArticles.some((a: any) => a.slug === slug))
  }, [slug])

  const toggleSave = () => {
    const savedArticles = JSON.parse(localStorage.getItem("saved-articles") || "[]")
    let updated

    if (saved) {
      updated = savedArticles.filter((a: any) => a.slug !== slug)
    } else {
      updated = [...savedArticles, { slug, title, featuredImage }]
    }

    localStorage.setItem("saved-articles", JSON.stringify(updated))
    setSaved(!saved)
  }

  return (
    <Button variant={saved ? "default" : "outline"} size="sm" onClick={toggleSave}>
      <Bookmark className="h-4 w-4 mr-2" />
      {saved ? "Премахни" : "Запази"}
    </Button>
  )
}
