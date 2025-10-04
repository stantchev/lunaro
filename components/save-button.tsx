"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Bookmark, BookmarkCheck } from "lucide-react"
import { toast } from "sonner"

interface SavedArticle {
  slug: string
  title: string
  featuredImage: string
  savedAt: string
  category?: string
}

interface SaveButtonProps {
  slug: string
  title?: string
  featuredImage?: string
  category?: string
  variant?: "default" | "outline" | "ghost"
  size?: "default" | "sm" | "lg"
  showText?: boolean
}

export function SaveButton({ 
  slug, 
  title = "", 
  featuredImage = "/placeholder.svg", 
  category = "",
  variant = "outline",
  size = "sm",
  showText = true
}: SaveButtonProps) {
  const [saved, setSaved] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedArticles = JSON.parse(localStorage.getItem("saved-articles") || "[]")
      setSaved(savedArticles.some((a: SavedArticle) => a.slug === slug))
    }
  }, [slug])

  const toggleSave = async () => {
    if (loading) return
    
    setLoading(true)
    
    try {
      const savedArticles: SavedArticle[] = JSON.parse(localStorage.getItem("saved-articles") || "[]")
      let updated: SavedArticle[]

      if (saved) {
        // Премахване от запазени
        updated = savedArticles.filter((a: SavedArticle) => a.slug !== slug)
        toast.success("Статията е премахната от запазените")
      } else {
        // Добавяне към запазени
        const newArticle: SavedArticle = {
          slug,
          title: title || `Статия ${slug}`,
          featuredImage,
          category,
          savedAt: new Date().toISOString()
        }
        updated = [...savedArticles, newArticle]
        toast.success("Статията е запазена")
      }

      localStorage.setItem("saved-articles", JSON.stringify(updated))
      setSaved(!saved)
    } catch (error) {
      toast.error("Грешка при запазване на статията")
      console.error("Error saving article:", error)
    } finally {
      setLoading(false)
    }
  }

  const buttonVariant = saved ? "default" : variant
  const Icon = saved ? BookmarkCheck : Bookmark

  return (
    <Button 
      variant={buttonVariant} 
      size={size} 
      onClick={toggleSave}
      disabled={loading}
      className="transition-all duration-200"
      aria-label={saved ? `Премахни "${title}" от запазените` : `Запази "${title}"`}
    >
      <Icon className={`h-4 w-4 ${showText ? 'mr-2' : ''}`} />
      {showText && (saved ? "Запазена" : "Запази")}
    </Button>
  )
}
