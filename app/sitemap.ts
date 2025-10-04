import type { MetadataRoute } from "next"

async function getWordPressArticles() {
  try {
    const response = await fetch(
      `https://lunaro.sofia-today.org/wp-json/wp/v2/posts?per_page=500&_fields=slug,modified,date,status`,
      { next: { revalidate: 1800 } } // кеширай за 30 минути за по-актуални данни
    )

    if (!response.ok) {
      console.error("Error fetching WP articles:", response.statusText)
      return []
    }

    const articles = await response.json()
    // Филтрирай само публикуваните статии
    return articles.filter((article: any) => article.status === 'publish')
  } catch (error) {
    console.error("Error fetching articles for sitemap:", error)
    return []
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://lunaro.news"
  const now = new Date()

  // 🔹 Статични страници с оптимизирани приоритети
  const staticPages = [
    // Главна страница - максимален приоритет
    { url: baseUrl, lastModified: now, changeFrequency: "hourly" as const, priority: 1.0 },
    
    // Основни категории - висок приоритет
    { url: `${baseUrl}/cybersecurity`, lastModified: now, changeFrequency: "daily" as const, priority: 0.95 },
    { url: `${baseUrl}/seo`, lastModified: now, changeFrequency: "daily" as const, priority: 0.95 },
    { url: `${baseUrl}/ai`, lastModified: now, changeFrequency: "daily" as const, priority: 0.95 },
    { url: `${baseUrl}/analizi`, lastModified: now, changeFrequency: "daily" as const, priority: 0.9 },
    
    // Инструменти и ресурси - висок приоритет
    { url: `${baseUrl}/tools`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.85 },
    { url: `${baseUrl}/tutorials`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.85 },
    { url: `${baseUrl}/glossary`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.8 },
    
    // Запазени статии и търсене
    { url: `${baseUrl}/saved`, lastModified: now, changeFrequency: "daily" as const, priority: 0.7 },
    { url: `${baseUrl}/search`, lastModified: now, changeFrequency: "daily" as const, priority: 0.7 },
    
    // Информационни страници
    { url: `${baseUrl}/about`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/contact`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.6 },
    
    // Правни страници - нисък приоритет
    { url: `${baseUrl}/privacy`, lastModified: now, changeFrequency: "yearly" as const, priority: 0.3 },
    { url: `${baseUrl}/terms`, lastModified: now, changeFrequency: "yearly" as const, priority: 0.3 },
    { url: `${baseUrl}/cookies`, lastModified: now, changeFrequency: "yearly" as const, priority: 0.3 },
  ]

  // 🔹 Динамични статии с оптимизирани приоритети
  const articles = await getWordPressArticles()
  const articlePages = articles.map((article: any) => {
    const articleDate = new Date(article.date)
    const daysSincePublished = Math.floor((now.getTime() - articleDate.getTime()) / (1000 * 60 * 60 * 24))
    
    // Приоритетът намалява с времето, но новите статии имат висок приоритет
    let priority = 0.8
    if (daysSincePublished <= 7) priority = 0.9 // Нови статии
    else if (daysSincePublished <= 30) priority = 0.8 // Месечни статии
    else if (daysSincePublished <= 90) priority = 0.7 // Тримесечни статии
    else priority = 0.6 // Стари статии

    return {
      url: `${baseUrl}/article/${article.slug}`,
      lastModified: article.modified ? new Date(article.modified) : articleDate,
      changeFrequency: daysSincePublished <= 30 ? "weekly" as const : "monthly" as const,
      priority,
    }
  })

  // 🔹 Сортирай по приоритет (най-високите първи)
  const allPages = [...staticPages, ...articlePages]
  allPages.sort((a, b) => (b.priority || 0) - (a.priority || 0))

  return allPages
}
