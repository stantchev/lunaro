import { NextResponse } from 'next/server'

async function getWordPressArticles() {
  try {
    const response = await fetch(
      `https://lunaro.sofia-today.org/wp-json/wp/v2/posts?per_page=50&_fields=id,title,slug,excerpt,date,modified,featured_media,link`,
      { next: { revalidate: 1800 } }
    )

    if (!response.ok) {
      console.error("Error fetching WP articles:", response.statusText)
      return []
    }

    return await response.json()
  } catch (error) {
    console.error("Error fetching articles for RSS:", error)
    return []
  }
}

export async function GET() {
  const baseUrl = "https://lunaro.news"
  const articles = await getWordPressArticles()
  
  const rssItems = articles.map((article: any) => {
    const pubDate = new Date(article.date).toUTCString()
    const modDate = new Date(article.modified).toUTCString()
    
    return `
    <item>
      <title><![CDATA[${article.title.rendered}]]></title>
      <link>${baseUrl}/article/${article.slug}</link>
      <guid isPermaLink="true">${baseUrl}/article/${article.slug}</guid>
      <description><![CDATA[${article.excerpt.rendered}]]></description>
      <pubDate>${pubDate}</pubDate>
      <lastBuildDate>${modDate}</lastBuildDate>
      <category>Technology News</category>
      <category>Bulgaria</category>
      <category>Cybersecurity</category>
      <category>SEO</category>
      <category>AI</category>
    </item>`
  }).join('')

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>Lunaro News - Technology & Cybersecurity</title>
    <description>Bulgaria's leading technology news platform covering cybersecurity, SEO, AI, and digital innovation with expert analysis and breaking news</description>
    <link>${baseUrl}</link>
    <language>bg</language>
    <copyright>© 2025 Lunaro News. All rights reserved.</copyright>
    <managingEditor>contact@lunaro.news (Lunaro News Team)</managingEditor>
    <webMaster>contact@lunaro.news (Lunaro News Team)</webMaster>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <generator>Lunaro News RSS Generator</generator>
    <image>
      <url>${baseUrl}/og-image.jpg</url>
      <title>Lunaro News</title>
      <link>${baseUrl}</link>
      <width>1200</width>
      <height>630</height>
    </image>
    <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml"/>
    ${rssItems}
  </channel>
</rss>`

  return new NextResponse(rss, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=1800, s-maxage=1800',
    },
  })
}
