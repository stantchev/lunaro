import { OpenAIClient } from "./openai-client"
import { NewsAPIClient, type NewsArticle } from "./news-api"
import { WordPressClient, type WordPressPost } from "./wordpress-client"

export interface ProcessedArticle {
  id: string
  slug: string
  title: string
  translatedTitle: string
  description: string
  translatedDescription: string
  content: string
  translatedContent: string
  summary: string
  category: "Киберсигурност" | "SEO"
  tags: string[]
  publishedAt: string
  author: {
    name: string
    bio: string
  }
  featuredImage: string
  source: {
    name: string
    url: string
  }
  seoMetadata: {
    metaTitle: string
    metaDescription: string
    keywords: string[]
  }
  readingTime: number
  wordpressId?: number // Add WordPress post ID
}

export class ContentProcessor {
  private openaiClient: OpenAIClient
  private newsClient: NewsAPIClient
  private wordpressClient: WordPressClient

  constructor(newsApiKey: string, wordpressConfig: {
    baseUrl: string
    username: string
    password: string
  }) {
    this.openaiClient = new OpenAIClient()
    this.newsClient = new NewsAPIClient(newsApiKey)
    this.wordpressClient = new WordPressClient(
      wordpressConfig.baseUrl,
      wordpressConfig.username,
      wordpressConfig.password
    )
  }

  async processArticleForBulgarian(article: NewsArticle, category: "cybersecurity" | "seo"): Promise<ProcessedArticle> {
    try {
      // Translate title and description
      const translatedTitle = await this.openaiClient.translateToBulgarian(article.title)
      const translatedDescription = await this.openaiClient.translateToBulgarian(article.description || "")

      // Generate expanded content in Bulgarian
      const expandedContent = await this.generateExpandedContent(article, category)

      // Generate summary
      const summary = await this.openaiClient.summarizeArticle(expandedContent)

      // Generate SEO metadata
      const seoMetadata = await this.openaiClient.generateSEOMetadata(translatedTitle, expandedContent)

      // Generate tags
      const tags = await this.generateTags(translatedTitle, expandedContent, category)

      // Create slug
      const slug = this.createSlug(translatedTitle)

      // Calculate reading time (average 200 words per minute in Bulgarian)
      const readingTime = Math.ceil(expandedContent.split(" ").length / 200)

      return {
        id: this.generateId(),
        slug,
        title: article.title,
        translatedTitle,
        description: article.description || "",
        translatedDescription,
        content: article.content || article.description || "",
        translatedContent: expandedContent,
        summary,
        category: category === "cybersecurity" ? "Киберсигурност" : "SEO",
        tags,
        publishedAt: article.publishedAt,
        author: {
          name: this.getRandomBulgarianAuthor(category),
          bio: this.getAuthorBio(category),
        },
        featuredImage: article.urlToImage || this.getDefaultImage(category),
        source: article.source,
        seoMetadata,
        readingTime,
      }
    } catch (error) {
      console.error("Error processing article:", error)
      throw error
    }
  }

  // NEW: Save processed article to WordPress
  async saveArticleToWordPress(processedArticle: ProcessedArticle): Promise<ProcessedArticle> {
    try {
      // Get or create category
      const category = await this.wordpressClient.getOrCreateCategory(
        processedArticle.category,
        processedArticle.category.toLowerCase()
      )

      // Upload featured image if it exists
      let featuredMediaId: number | undefined
      if (processedArticle.featuredImage && processedArticle.featuredImage.startsWith('http')) {
        try {
          // Download image and upload to WordPress
          const imageResponse = await fetch(processedArticle.featuredImage)
          const imageBuffer = await imageResponse.arrayBuffer()
          const imageFile = new File([imageBuffer], 'featured-image.jpg', { type: 'image/jpeg' })
          
          const media = await this.wordpressClient.uploadMedia(
            imageFile,
            `featured-image-${processedArticle.slug}.jpg`,
            processedArticle.translatedTitle
          )
          featuredMediaId = media.id
        } catch (error) {
          console.error('Error uploading featured image:', error)
        }
      }

      // Create WordPress post
      const wordpressPost = await this.wordpressClient.createPost({
        title: processedArticle.translatedTitle,
        content: processedArticle.translatedContent,
        excerpt: processedArticle.translatedDescription,
        slug: processedArticle.slug,
        status: 'draft', // Start as draft, can be published later
        categories: [category.id],
        featured_media: featuredMediaId,
        meta: {
          reading_time: processedArticle.readingTime,
          translated_title: processedArticle.translatedTitle,
          translated_content: processedArticle.translatedContent,
          translated_description: processedArticle.translatedDescription,
          original_source: processedArticle.source.name,
          original_url: processedArticle.source.url,
          seo_meta_title: processedArticle.seoMetadata.metaTitle,
          seo_meta_description: processedArticle.seoMetadata.metaDescription,
          seo_keywords: processedArticle.seoMetadata.keywords,
          original_title: processedArticle.title,
          original_content: processedArticle.content,
          original_description: processedArticle.description,
          tags: processedArticle.tags,
          author_name: processedArticle.author.name,
          author_bio: processedArticle.author.bio,
          published_at: processedArticle.publishedAt
        }
      })

      // Update processed article with WordPress ID
      return {
        ...processedArticle,
        wordpressId: wordpressPost.id
      }
    } catch (error) {
      console.error('Error saving article to WordPress:', error)
      throw error
    }
  }

  // NEW: Fetch and process latest news with WordPress storage
  async fetchAndProcessLatestNewsWithStorage(category: "cybersecurity" | "seo", limit = 5): Promise<ProcessedArticle[]> {
    try {
      const newsResponse =
        category === "cybersecurity" ? await this.newsClient.getCybersecurityNews() : await this.newsClient.getSEONews()

      const articles = newsResponse.articles.slice(0, limit)
      const processedArticles: ProcessedArticle[] = []

      for (const article of articles) {
        try {
          // Process article
          const processed = await this.processArticleForBulgarian(article, category)
          
          // Save to WordPress
          const savedArticle = await this.saveArticleToWordPress(processed)
          
          processedArticles.push(savedArticle)

          // Add delay to avoid rate limiting
          await new Promise((resolve) => setTimeout(resolve, 2000)) // Increased delay for WordPress API calls
        } catch (error) {
          console.error(`Error processing article: ${article.title}`, error)
          continue
        }
      }

      return processedArticles
    } catch (error) {
      console.error("Error fetching and processing news:", error)
      throw error
    }
  }

  private async generateExpandedContent(article: NewsArticle, category: "cybersecurity" | "seo"): Promise<string> {
    const prompt =
      category === "cybersecurity"
        ? `Създай подробна статия на български език за киберсигурност базирана на следната информация. Статията трябва да бъде информативна, професионална и полезна за българските читатели. Включи практични съвети и препоръки:

Заглавие: ${article.title}
Описание: ${article.description}
Съдържание: ${article.content || "Няма допълнително съдържание"}

Структурирай статията с подзаглавия и направи я поне 800 думи.`
        : `Създай подробна статия на български език за SEO базирана на следната информация. Статията трябва да бъде практична, с конкретни съвети за подобряване на SEO резултатите. Фокусирай се върху българския пазар:

Заглавие: ${article.title}
Описание: ${article.description}
Съдържание: ${article.content || "Няма допълнително съдържание"}

Структурирай статията с подзаглавия и направи я поне 800 думи.`

    const { text } = await this.openaiClient.generateText(prompt)
    return text
  }

  private async generateTags(title: string, content: string, category: "cybersecurity" | "seo"): Promise<string[]> {
    const prompt = `Генерирай 5-7 релевантни тага на български език за тази статия. Таговете трябва да са кратки (1-2 думи) и да отразяват основните теми:

Заглавие: ${title}
Съдържание: ${content.substring(0, 500)}...

Върни таговете като JSON масив от strings.`

    try {
      const { text } = await this.openaiClient.generateText(prompt)
      const tags = JSON.parse(text)
      return Array.isArray(tags) ? tags : []
    } catch {
      // Fallback tags
      return category === "cybersecurity"
        ? ["киберсигурност", "защита", "хакери", "малуер"]
        : ["SEO", "оптимизация", "Google", "ключови думи"]
    }
  }

  private createSlug(title: string): string {
    return title
      .toLowerCase()
      .replace(/[^\w\s-]/g, "") // Remove special characters
      .replace(/\s+/g, "-") // Replace spaces with hyphens
      .replace(/-+/g, "-") // Replace multiple hyphens with single
      .trim()
      .substring(0, 60) // Limit length
  }

  private generateId(): string {
    return Date.now().toString() + Math.random().toString(36).substr(2, 9)
  }

  private getRandomBulgarianAuthor(category: "cybersecurity" | "seo"): string {
    const cybersecurityAuthors = [
      "Иван Петров",
      "Мария Георгиева",
      "Александър Стоянов",
      "Елена Николова",
      "Димитър Петков",
      "Анна Стефанова",
    ]

    const seoAuthors = [
      "Петър Иванов",
      "София Димитрова",
      "Николай Христов",
      "Виктория Тодорова",
      "Георги Василев",
      "Радослава Петрова",
    ]

    const authors = category === "cybersecurity" ? cybersecurityAuthors : seoAuthors
    return authors[Math.floor(Math.random() * authors.length)]
  }

  private getAuthorBio(category: "cybersecurity" | "seo"): string {
    return category === "cybersecurity"
      ? "Експерт по киберсигурност с над 10 години опит в защитата на корпоративни мрежи"
      : "SEO специалист с дългогодишен опит в дигиталния маркетинг и оптимизация за търсачки"
  }

  private getDefaultImage(category: "cybersecurity" | "seo"): string {
    return category === "cybersecurity" ? "/cybersecurity-shield.png" : "/google-seo-algorithm-update.jpg"
  }
}
