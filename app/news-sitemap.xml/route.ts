import type { MetadataRoute } from "next"

// 🔹 Fetch статии за Google News Sitemap
async function getNewsArticles() {
  try {
    console.log("🔍 Заявявам статии за Google News Sitemap...")
    
    const response = await fetch(
      `https://lunaro.sofia-today.org/wp-json/wp/v2/posts?per_page=100&_embed`,
      { next: { revalidate: 0 } } // БЕЗ кеширане за актуални новини
    )

    console.log(`📡 News Sitemap Response status: ${response.status} ${response.statusText}`)

    if (!response.ok) {
      console.error("❌ Error fetching news articles:", response.statusText)
      return []
    }

    const articles = await response.json()
    console.log(`📄 Получени ${articles.length} статии за News Sitemap`)
    
    // Филтрирай само публикуваните статии (всички, не само от последните 2 дни)
    const publishedArticles = articles.filter((article: any) => {
      return article.status === 'publish'
    })
    
    console.log(`✅ Филтрирани ${publishedArticles.length} публикувани статии за News Sitemap`)
    
    // Логвай първите няколко статии за дебъг
    if (publishedArticles.length > 0) {
      console.log(`🔍 Първа статия: ${publishedArticles[0].title?.rendered}`)
      console.log(`🔍 Категория: ${publishedArticles[0]._embedded?.["wp:term"]?.[0]?.[0]?.name}`)
    }
    
    return publishedArticles
  } catch (error) {
    console.error("💥 Error fetching news articles for sitemap:", error)
    return []
  }
}

// 🔹 Map категории за Google News - оптимизирано за българския пазар
function getGoogleNewsCategory(wpCategory: string): string {
  const categoryMap: { [key: string]: string } = {
    'Киберсигурност': 'Technology',
    'SEO': 'Technology', 
    'AI': 'Technology',
    'Анализи': 'Technology',
    'Светът': 'World',
    'Технологии': 'Technology'
  }
  
  // Търси точково съвпадение или частично
  for (const [key, value] of Object.entries(categoryMap)) {
    if (wpCategory.toLowerCase().includes(key.toLowerCase()) || 
        key.toLowerCase().includes(wpCategory.toLowerCase())) {
      return value
    }
  }
  
  // Fallback към Technology за българския пазар
  return 'Technology'
}

export async function GET(): Promise<Response> {
  try {
    const baseUrl = "https://lunaro.news"
    const articles = await getNewsArticles()
    
    // 🔹 Генерирай News Sitemap XML
    const newsSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
  ${articles.map((article: any) => {
    const articleDate = new Date(article.date)
    const publicationDate = articleDate.toISOString()
    
    // Извлечи категория от WordPress данните
    const category = article._embedded?.["wp:term"]?.[0]?.[0]?.name || "Technology"
    const googleNewsCategory = getGoogleNewsCategory(category)
    
    return `  <url>
    <loc>${baseUrl}/article/${article.slug}</loc>
    <news:news>
      <news:publication>
        <news:name>Lunaro News</news:name>
        <news:language>bg</news:language>
      </news:publication>
      <news:publication_date>${publicationDate}</news:publication_date>
      <news:title><![CDATA[${article.title.rendered}]]></news:title>
      <news:keywords><![CDATA[${category}, технологии, новини, България, киберсигурност, SEO, AI, анализи]]></news:keywords>
      <news:genres>PressRelease, Blog</news:genres>
    </news:news>
    <lastmod>${publicationDate}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>`
  }).join('\n')}
</urlset>`

    console.log(`🗺️ News Sitemap генериран с ${articles.length} статии`)
    
    return new Response(newsSitemap, {
      status: 200,
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, max-age=3600, s-maxage=3600', // Кеширай за 1 час
      },
    })
  } catch (error) {
    console.error("💥 Error generating news sitemap:", error)
    
    // Връщай празен sitemap при грешка
    const emptySitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
</urlset>`
    
    return new Response(emptySitemap, {
      status: 200,
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, max-age=300', // Кеширай за 5 минути при грешка
      },
    })
  }
}
