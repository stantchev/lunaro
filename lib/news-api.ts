export interface NewsArticle {
  title: string
  description: string
  content: string
  url: string
  urlToImage: string
  publishedAt: string
  source: {
    id: string
    name: string
  }
  author: string
}

export interface NewsResponse {
  status: string
  totalResults: number
  articles: NewsArticle[]
}

export class NewsAPIClient {
  private apiKey: string
  private baseUrl = "https://newsapi.org/v2"

  constructor(apiKey: string) {
    this.apiKey = apiKey
  }

  async searchArticles(query: string, language = "en", pageSize = 20): Promise<NewsResponse> {
    const url = new URL(`${this.baseUrl}/everything`)
    url.searchParams.append("q", query)
    url.searchParams.append("language", language)
    url.searchParams.append("pageSize", pageSize.toString())
    url.searchParams.append("sortBy", "publishedAt")
    url.searchParams.append("apiKey", this.apiKey)

    const response = await fetch(url.toString())

    if (!response.ok) {
      throw new Error(`NewsAPI error: ${response.status} ${response.statusText}`)
    }

    return response.json()
  }

  async getCybersecurityNews(): Promise<NewsResponse> {
    return this.searchArticles('cybersecurity OR "cyber security" OR hacking OR malware OR ransomware OR "data breach"')
  }

  async getSEONews(): Promise<NewsResponse> {
    return this.searchArticles('SEO OR "search engine optimization" OR Google OR "digital marketing" OR SERP')
  }
}
