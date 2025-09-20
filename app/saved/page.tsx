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
  excerpt: string
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
          <div className="grid gap-8">
            {articles.map((article) => (
              <div
                key={article.slug}
                className="border rounded-lg overflow-hidden shadow-sm bg-card"
              >
                <Link href={`/article/${article.slug}`}>
                  <div className="aspect-[16/9] relative">
                    <Image
                      src={article.featuredImage || "/placeholder.svg"}
                      alt={article.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4 space-y-2">
                    <h2 className="text-xl font-semibold">{article.title}</h2>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {article.excerpt}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        )}

        <Separator className="my-12" />
      </main>

      <Footer />
    </div>
  )
}
