import axios from 'axios'

export interface WordPressPost {
  id: number
  title: {
    rendered: string
  }
  content: {
    rendered: string
  }
  excerpt: {
    rendered: string
  }
  slug: string
  date: string
  modified: string
  status: string
  featured_media: number
  categories: number[]
  tags: number[]
  author: number
  meta: {
    reading_time?: number
    translated_title?: string
    translated_content?: string
    translated_description?: string
    original_source?: string
    original_url?: string
    seo_meta_title?: string
    seo_meta_description?: string
    seo_keywords?: string[]
    category?: string
    author_name?: string
    author_bio?: string
    tags?: string[]
    published_at?: string
  }
}

export interface WordPressMedia {
  id: number
  source_url: string
  alt_text: string
  caption: {
    rendered: string
  }
}

export interface WordPressCategory {
  id: number
  name: string
  slug: string
}

export interface WordPressTag {
  id: number
  name: string
  slug: string
}

export interface WordPressAuthor {
  id: number
  name: string
  description: string
  avatar_urls: {
    24: string
    48: string
    96: string
  }
}

export class WordPressClient {
  private baseUrl: string
  private username: string
  private password: string
  private authHeader: string

  constructor(baseUrl: string, username: string, password: string) {
    this.baseUrl = baseUrl.replace(/\/$/, '') // Remove trailing slash
    this.username = username
    this.password = password
    this.authHeader = Buffer.from(`${username}:${password}`).toString('base64')
  }

  private getHeaders() {
    return {
      'Authorization': `Basic ${this.authHeader}`,
      'Content-Type': 'application/json',
    }
  }

  // Create a new post
  async createPost(postData: {
    title: string
    content: string
    excerpt?: string
    slug?: string
    status?: 'draft' | 'publish' | 'private'
    categories?: number[]
    tags?: number[]
    featured_media?: number
    meta?: Record<string, any>
  }): Promise<WordPressPost> {
    try {
      const response = await axios.post(
        `${this.baseUrl}/wp-json/wp/v2/posts`,
        {
          title: postData.title,
          content: postData.content,
          excerpt: postData.excerpt,
          slug: postData.slug,
          status: postData.status || 'draft',
          categories: postData.categories || [],
          tags: postData.tags || [],
          featured_media: postData.featured_media,
          meta: postData.meta || {}
        },
        { headers: this.getHeaders() }
      )
      return response.data
    } catch (error) {
      console.error('Error creating WordPress post:', error)
      throw error
    }
  }

  // Get posts with pagination and filtering
  async getPosts(params: {
    page?: number
    per_page?: number
    categories?: number[]
    tags?: number[]
    search?: string
    status?: string
    orderby?: string
    order?: 'asc' | 'desc'
  } = {}): Promise<{ posts: WordPressPost[], totalPages: number, total: number }> {
    try {
      const response = await axios.get(`${this.baseUrl}/wp-json/wp/v2/posts`, {
        params: {
          page: params.page || 1,
          per_page: params.per_page || 10,
          categories: params.categories?.join(','),
          tags: params.tags?.join(','),
          search: params.search,
          status: params.status || 'publish',
          orderby: params.orderby || 'date',
          order: params.order || 'desc',
          _embed: true // Include embedded data
        }
      })

      return {
        posts: response.data,
        totalPages: parseInt(response.headers['x-wp-totalpages'] || '1'),
        total: parseInt(response.headers['x-wp-total'] || '0')
      }
    } catch (error) {
      console.error('Error fetching WordPress posts:', error)
      throw error
    }
  }

  // Get a single post by slug
  async getPostBySlug(slug: string): Promise<WordPressPost | null> {
    try {
      const response = await axios.get(`${this.baseUrl}/wp-json/wp/v2/posts`, {
        params: {
          slug: slug,
          _embed: true
        }
      })
      return response.data[0] || null
    } catch (error) {
      console.error('Error fetching WordPress post by slug:', error)
      return null
    }
  }

  // Get categories
  async getCategories(): Promise<WordPressCategory[]> {
    try {
      const response = await axios.get(`${this.baseUrl}/wp-json/wp/v2/categories`)
      return response.data
    } catch (error) {
      console.error('Error fetching WordPress categories:', error)
      return []
    }
  }

  // Create category if it doesn't exist
  async createCategory(name: string, slug?: string): Promise<WordPressCategory> {
    try {
      const response = await axios.post(
        `${this.baseUrl}/wp-json/wp/v2/categories`,
        {
          name: name,
          slug: slug || name.toLowerCase().replace(/\s+/g, '-')
        },
        { headers: this.getHeaders() }
      )
      return response.data
    } catch (error) {
      console.error('Error creating WordPress category:', error)
      throw error
    }
  }

  // Get or create category
  async getOrCreateCategory(name: string, slug?: string): Promise<WordPressCategory> {
    const categories = await this.getCategories()
    const existingCategory = categories.find(cat => cat.name === name)
    
    if (existingCategory) {
      return existingCategory
    }
    
    return await this.createCategory(name, slug)
  }

  // Upload media
  async uploadMedia(file: File | Buffer, filename: string, altText?: string): Promise<WordPressMedia> {
    try {
      const formData = new FormData()
      formData.append('file', file, filename)
      if (altText) {
        formData.append('alt_text', altText)
      }

      const response = await axios.post(
        `${this.baseUrl}/wp-json/wp/v2/media`,
        formData,
        {
          headers: {
            'Authorization': `Basic ${this.authHeader}`,
            'Content-Type': 'multipart/form-data',
          }
        }
      )
      return response.data
    } catch (error) {
      console.error('Error uploading media to WordPress:', error)
      throw error
    }
  }

  // Update post
  async updatePost(postId: number, postData: Partial<{
    title: string
    content: string
    excerpt: string
    status: string
    categories: number[]
    tags: number[]
    featured_media: number
    meta: Record<string, any>
  }>): Promise<WordPressPost> {
    try {
      const response = await axios.post(
        `${this.baseUrl}/wp-json/wp/v2/posts/${postId}`,
        postData,
        { headers: this.getHeaders() }
      )
      return response.data
    } catch (error) {
      console.error('Error updating WordPress post:', error)
      throw error
    }
  }

  // Delete post
  async deletePost(postId: number): Promise<boolean> {
    try {
      await axios.delete(
        `${this.baseUrl}/wp-json/wp/v2/posts/${postId}`,
        { headers: this.getHeaders() }
      )
      return true
    } catch (error) {
      console.error('Error deleting WordPress post:', error)
      return false
    }
  }
}