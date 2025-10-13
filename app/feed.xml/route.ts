import type { MetadataRoute } from "next"

// 🔹 Fetch статии за RSS Feed
async function getRSSArticles() {
  try {
    const response = await fetch(
      `https://lunaro.sofia-today.org/wp-json/wp/v2/posts?per_page=50&_embed`,
      { next: { revalidate: 0 } } // БЕЗ кеширане за актуални новини
    )

    if (!response.ok) {
      return []
    }

    const articles = await response.json()
    
    // Филтрирай само публикуваните статии
    const publishedArticles = articles.filter((article: any) => article.status === 'publish')
    
    return publishedArticles
  } catch (error) {
    return []
  }
}

// 🔹 Очисти HTML от статиите
function cleanHTML(html: string): string {
  return html
    .replace(/<[^>]*>/g, '') // Премахни HTML таговете
    .replace(/&nbsp;/g, ' ') // Замени &nbsp; с интервал
    .replace(/&amp;/g, '&') // Замени &amp; с &
    .replace(/&lt;/g, '<') // Замени &lt; с <
    .replace(/&gt;/g, '>') // Замени &gt; с >
    .replace(/&quot;/g, '"') // Замени &quot; с "
    .replace(/\s+/g, ' ') // Замени множество интервали с един
    .trim()
}

// 🔹 Генерирай кратко описание
function generateDescription(article: any): string {
  const excerpt = cleanHTML(article.excerpt?.rendered || '')
  const content = cleanHTML(article.content?.rendered || '')
  
  // Използвай excerpt ако е достатъчно дълго, иначе вземи първите 300 символа от съдържанието
  if (excerpt && excerpt.length > 100) {
    return excerpt.substring(0, 300) + (excerpt.length > 300 ? '...' : '')
  } else if (content) {
    return content.substring(0, 300) + (content.length > 300 ? '...' : '')
  }
  
  return 'Статия от Lunaro News'
}

export async function GET(): Promise<Response> {
  try {
    const baseUrl = "https://lunaro.news"
    const articles = await getRSSArticles()
    const buildDate = new Date().toUTCString()
    
    // 🔹 Генерирай RSS XML
    const rssFeed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>Lunaro News - Технологични новини от България</title>
    <description>Следете най-важните технологични новини, анализи и трендове в киберсигурността, SEO, AI и дигиталната иновация</description>
    <link>${baseUrl}</link>
    <language>bg</language>
    <copyright>Copyright © 2024 Lunaro News. Всички права запазени.</copyright>
    <managingEditor>editor@lunaro.news (Lunaro News Team)</managingEditor>
    <webMaster>webmaster@lunaro.news (Lunaro News Team)</webMaster>
    <lastBuildDate>${buildDate}</lastBuildDate>
    <pubDate>${buildDate}</pubDate>
    <ttl>60</ttl>
    <image>
      <url>${baseUrl}/logo-desktop.png</url>
      <title>Lunaro News</title>
      <link>${baseUrl}</link>
      <width>300</width>
      <height>60</height>
    </image>
    <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml"/>
    
    ${articles.map((article: any) => {
      const articleDate = new Date(article.date)
      const pubDate = articleDate.toUTCString()
      const link = `${baseUrl}/article/${article.slug}`
      const title = cleanHTML(article.title.rendered)
      const description = generateDescription(article)
      const category = article._embedded?.["wp:term"]?.[0]?.[0]?.name || "Технологии"
      const featuredImage = article._embedded?.["wp:featuredmedia"]?.[0]?.source_url || `${baseUrl}/placeholder.jpg`
      const author = article._embedded?.author?.[0]?.name || "Lunaro News Team"
      
      return `    <item>
      <title><![CDATA[${title}]]></title>
      <description><![CDATA[${description}]]></description>
      <link>${link}</link>
      <guid isPermaLink="true">${link}</guid>
      <pubDate>${pubDate}</pubDate>
      <author><![CDATA[${author}]]></author>
      <category><![CDATA[${category}]]></category>
      <enclosure url="${featuredImage}" type="image/jpeg"/>
      <content:encoded><![CDATA[${article.content?.rendered || description}]]></content:encoded>
    </item>`
    }).join('\n')}
    
  </channel>
</rss>`

    return new Response(rssFeed, {
      status: 200,
      headers: {
        'Content-Type': 'application/rss+xml; charset=utf-8',
        'Cache-Control': 'public, max-age=1800, s-maxage=1800', // Кеширай за 30 минути
      },
    })
  } catch (error) {
    // Връщай празен RSS при грешка
    const emptyRSS = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Lunaro News</title>
    <description>Технологични новини от България</description>
    <link>https://lunaro.news</link>
    <language>bg</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
  </channel>
</rss>`
    
    return new Response(emptyRSS, {
      status: 200,
      headers: {
        'Content-Type': 'application/rss+xml; charset=utf-8',
        'Cache-Control': 'public, max-age=300', // Кеширай за 5 минути при грешка
      },
    })
  }
}
