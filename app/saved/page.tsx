import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SavedArticlesClient } from "@/components/saved-articles-client"
import { Badge } from "@/components/ui/badge"
import { Bookmark, Clock, User, Trash2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Запазени статии - Lunaro News",
  description: "Прегледайте вашите запазени статии за киберсигурност, SEO и AI новини от Lunaro News.",
  keywords: "запазени статии, Lunaro News, киберсигурност, SEO, AI, избрани статии",
  robots: "noindex, nofollow", // Лични данни, не индексирай
  openGraph: {
    title: "Запазени статии - Lunaro News",
    description: "Вашите запазени статии за киберсигурност, SEO и AI новини",
    type: "website",
    locale: "bg_BG",
    url: "https://lunaro.news/saved",
    siteName: "Lunaro News",
  },
  alternates: {
    canonical: "https://lunaro.news/saved",
  },
}

export default function SavedPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-2 sm:px-4 py-6 sm:py-12">
        {/* Header */}
        <div className="max-w-4xl mx-auto mb-8 sm:mb-12 px-2 sm:px-0">
          <div className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
            <Bookmark className="h-6 w-6 sm:h-8 sm:w-8 text-primary flex-shrink-0" />
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">Запазени статии</h1>
          </div>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground">
            Прегледайте и управлявайте вашите запазени статии за киберсигурност, SEO и AI новини
          </p>
        </div>

        {/* Client Component за интерактивност */}
        <SavedArticlesClient />
      </main>

      <Footer />
    </div>
  )
}
