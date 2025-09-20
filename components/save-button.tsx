"use client"

import { Bookmark, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useSavedArticles } from "@/hooks/useSavedArticles"
import { toast } from "sonner"

export function SaveButton({ slug }: { slug: string }) {
  const { toggleSave, isSaved } = useSavedArticles()
  const saved = isSaved(slug)

  const handleClick = () => {
    toggleSave(slug)
    toast.success(saved ? "Статията беше премахната" : "Статията беше запазена")
  }

  return (
    <Button
      variant={saved ? "destructive" : "outline"}
      size="sm"
      onClick={handleClick}
    >
      {saved ? (
        <>
          <Trash2 className="h-4 w-4 mr-2" />
          Премахни
        </>
      ) : (
        <>
          <Bookmark className="h-4 w-4 mr-2" />
          Запази
        </>
      )}
    </Button>
  )
}
