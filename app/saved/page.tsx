"use client"

import { useEffect, useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import Image from "next/image"
import { Separator } from "@/components/ui/separator"

interface SavedArticle {
  slug: string
  title: string
  featuredImage: string
}

export default function SavedPage() {
  const [articles, setArticles] = useState<SavedArticle[]>([])

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("saved-articles") || "[]")
    setArticles(saved)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">Запазени статии</h1>

        {articles.length === 0 ? (
          <p className="text-muted-foreground">Нямате запазени статии.</p>
        ) : (
          <ul className="space-y-4">
            {articles.map((article) => (
              <li key={article.slug}>
                <Link
                  href={`/article/${article.slug}`}
                  className="flex items-center space-x-4 p-3 border rounded-lg hover:bg-muted transition-colors"
                >
                  <div className="relative w-24 h-16 flex-shrink-0 rounded-md overflow-hidden">
                    <Image
                      src={article.featuredImage || "/placeholder.svg"}
                      alt={article.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h2 className="text-lg font-medium line-clamp-2">
                    {article.title}
                  </h2>
                </Link>
              </li>
            ))}
          </ul>
        )}

        <Separator className="my-12" />
      </main>

      <Footer />
    </div>
  )
}
