import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin/", "/api/", "/private/", "/_next/", "/node_modules/"],
        crawlDelay: 1,
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/admin/", "/api/", "/private/", "/_next/", "/node_modules/"],
        crawlDelay: 0,
      },
      {
        userAgent: "Bingbot",
        allow: "/",
        disallow: ["/admin/", "/api/", "/private/", "/_next/", "/node_modules/"],
        crawlDelay: 1,
      },
      {
        userAgent: "ChatGPT-User",
        allow: "/",
        disallow: ["/admin/", "/api/", "/private/", "/_next/", "/node_modules/"],
        crawlDelay: 0,
      },
      {
        userAgent: "Claude-Web",
        allow: "/",
        disallow: ["/admin/", "/api/", "/private/", "/_next/", "/node_modules/"],
        crawlDelay: 0,
      },
      {
        userAgent: "PerplexityBot",
        allow: "/",
        disallow: ["/admin/", "/api/", "/private/", "/_next/", "/node_modules/"],
        crawlDelay: 0,
      },
      {
        userAgent: "YouBot",
        allow: "/",
        disallow: ["/admin/", "/api/", "/private/", "/_next/", "/node_modules/"],
        crawlDelay: 0,
      },
      {
        userAgent: "Bard",
        allow: "/",
        disallow: ["/admin/", "/api/", "/private/", "/_next/", "/node_modules/"],
        crawlDelay: 0,
      },
      {
        userAgent: "GPTBot",
        allow: "/",
        disallow: ["/admin/", "/api/", "/private/", "/_next/", "/node_modules/"],
        crawlDelay: 0,
      },
      {
        userAgent: "CCBot",
        allow: "/",
        disallow: ["/admin/", "/api/", "/private/", "/_next/", "/node_modules/"],
        crawlDelay: 0,
      },
    ],
    sitemap: [
      "https://lunaro.news/sitemap.xml",
      "https://lunaro.news/news-sitemap.xml",
      "https://lunaro.news/sitemap-index.xml",
    ],
    host: "https://lunaro.news",
  }
}
