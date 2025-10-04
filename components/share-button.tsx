"use client"

import { Button } from "@/components/ui/button"
import { Share2 } from "lucide-react"

interface ShareButtonProps {
  title: string
  description: string
  slug: string
}

export function ShareButton({ title, description, slug }: ShareButtonProps) {
  const handleShare = async () => {
    const shareUrl = `${process.env.NEXT_PUBLIC_SITE_URL || "https://lunaro.news"}/article/${slug}`

    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text: description,
          url: shareUrl,
        })
      } catch (err) {
        console.error("Share error:", err)
      }
    } else {
      try {
        await navigator.clipboard.writeText(shareUrl)
        alert("🔗 Линкът е копиран!")
      } catch {
        alert("❌ Неуспешно копиране!")
      }
    }
  }

  return (
    <Button onClick={handleShare} variant="outline" size="sm">
      <Share2 className="h-4 w-4 mr-2" />
      Сподели
    </Button>
  )
}
