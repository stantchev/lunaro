"use client"

import { Bookmark } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useSavedArticles } from "@/hooks/useSavedArticles"

export function SaveButton({ slug }: { slug: string }) {
  const { toggleSave, isSaved } = useSavedArticles()

  return (
    <Button
      variant={isSaved(slug) ? "default" : "outline"}
      size="sm"
      onClick={() => toggleSave(slug)}
    >
      <Bookmark className="h-4 w-4 mr-2" />
      {isSaved(slug) ? "Запазено" : "Запази"}
    </Button>
  )
}
