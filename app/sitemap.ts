import type { MetadataRoute } from "next"

/**
 * 🔹 Lunaro News Sitemap Generator
 * 
 * Генерира пълен sitemap за lunaro.news включващ:
 * - Всички статични страници с оптимизирани приоритети
 * - Tutorial страници за образователен контент
 * - Динамични статии от WordPress с време-базирани приоритети
 * - Автоматично сортиране по приоритет за по-добро SEO
 */

async function getWordPressArticles() {
  try {
    console.log("🔍 Заявявам статии от WordPress API...")
    
    // Първа опитай с опростена заявка
    let response = await fetch(
      `https://lunaro.sofia-today.org/wp-json/wp/v2/posts?per_page=100`,
      { next: { revalidate: 0 } } // БЕЗ кеширане за debug
    )

    console.log(`📡 Response status: ${response.status} ${response.statusText}`)

    // Ако първата заявка не работи, опитай с още по-проста
    if (!response.ok) {
      console.log("🔄 Първата заявка не работи, опитвам с по-проста...")
      response = await fetch(
        `https://lunaro.sofia-today.org/wp-json/wp/v2/posts`,
        { next: { revalidate: 0 } }
      )
      console.log(`📡 Втора заявка status: ${response.status} ${response.statusText}`)
    }

    if (!response.ok) {
      console.error("❌ Error fetching WP articles:", response.statusText)
      return []
    }

    const articles = await response.json()
    console.log(`📄 Получени ${articles.length} статии от API`)
    
    // Покажи първите 3 статии за debug
    if (articles.length > 0) {
      console.log("📋 Първи 3 статии:")
      articles.slice(0, 3).forEach((article: any, index: number) => {
        console.log(`  ${index + 1}. ${article.slug} (${article.status}) - ${article.date}`)
      })
    }
    
    // Филтрирай само публикуваните статии
    const publishedArticles = articles.filter((article: any) => article.status === 'publish')
    
    console.log(`✅ Филтрирани ${publishedArticles.length} публикувани статии от ${articles.length} общо`)
    
    return publishedArticles
  } catch (error) {
    console.error("💥 Error fetching articles for sitemap:", error)
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
    { url: `${baseUrl}/security-tools`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.85 },
    { url: `${baseUrl}/tutorials`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.85 },
    { url: `${baseUrl}/glossary`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.8 },
    
    // Tutorial страници - висок приоритет за образователен контент
    { url: `${baseUrl}/tutorial/ai-business-tools`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/tutorial/ai-cybersecurity`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/tutorial/automated-seo`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/tutorial/generative-ai-content`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/tutorial/seo-basics`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.8 },
    
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
  
  // Fallback ако няма статии
  if (articles.length === 0) {
    console.log("⚠️ Няма намерени статии от WordPress API - използвам fallback")
  }
  
  const articlePages = articles.map((article: any) => {
    const articleDate = new Date(article.date)
    const daysSincePublished = Math.floor((now.getTime() - articleDate.getTime()) / (1000 * 60 * 60 * 24))
    
    // Приоритетът намалява с времето, но новите статии имат висок приоритет
    let priority = 0.8
    if (daysSincePublished <= 7) priority = 0.9 // Нови статии (последна седмица)
    else if (daysSincePublished <= 30) priority = 0.8 // Месечни статии
    else if (daysSincePublished <= 90) priority = 0.7 // Тримесечни статии
    else priority = 0.6 // Стари статии (над 3 месеца)

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

  // Debug информация
  console.log(`🗺️ Sitemap генериран: ${staticPages.length} статични + ${articlePages.length} статии = ${allPages.length} общо страници`)
  
  // Покажи първите 5 URL-а за debug
  if (allPages.length > 0) {
    console.log("🔗 Първи 5 URL-а в sitemap:")
    allPages.slice(0, 5).forEach((page, index) => {
      console.log(`  ${index + 1}. ${page.url} (priority: ${page.priority})`)
    })
  }
  
  return allPages
}
