import { generateText } from "ai"
import { openai } from "@ai-sdk/openai"

export class OpenAIClient {
  async generateText(prompt: string): Promise<{ text: string }> {
    const { text } = await generateText({
      model: openai("gpt-4o-mini"),
      prompt,
    })

    return { text }
  }

  async translateToBulgarian(text: string): Promise<string> {
    const { text: translatedText } = await generateText({
      model: openai("gpt-4o-mini"),
      prompt: `Преведи следния текст на български език. Запази оригиналния смисъл и тон. Ако това е техническа статия за киберсигурност или SEO, използвай подходящата българска техническа терминология:

${text}`,
    })

    return translatedText
  }

  async summarizeArticle(content: string): Promise<string> {
    const { text: summary } = await generateText({
      model: openai("gpt-4o-mini"),
      prompt: `Създай кратко резюме на тази статия на български език. Фокусирай се върху ключовите точки и направи го привлекателно за читатели, интересуващи се от киберсигурност и SEO:

${content}`,
    })

    return summary
  }

  async generateSEOMetadata(
    title: string,
    content: string,
  ): Promise<{
    metaTitle: string
    metaDescription: string
    keywords: string[]
  }> {
    const { text: metadata } = await generateText({
      model: openai("gpt-4o-mini"),
      prompt: `Генерирай SEO метаданни за тази българска статия за киберсигурност или SEO. Върни като JSON с metaTitle (макс 60 символа), metaDescription (макс 160 символа) и keywords масив:

Заглавие: ${title}
Съдържание: ${content.substring(0, 500)}...`,
    })

    try {
      return JSON.parse(metadata)
    } catch {
      return {
        metaTitle: title.substring(0, 60),
        metaDescription: content.substring(0, 160),
        keywords: ["киберсигурност", "SEO", "технологии"],
      }
    }
  }

  async improveContentForBulgarian(content: string, category: "cybersecurity" | "seo"): Promise<string> {
    const categoryContext =
      category === "cybersecurity"
        ? "киберсигурност, хакерски атаки, защита на данни, малуер, фишинг"
        : "SEO оптимизация, Google алгоритми, ключови думи, SERP, дигитален маркетинг"

    const { text: improvedContent } = await generateText({
      model: openai("gpt-4o-mini"),
      prompt: `Подобри следното съдържание на български език за статия за ${categoryContext}. Направи го по-четливо, информативно и полезно за българските читатели. Добави практични съвети и препоръки:

${content}

Изисквания:
- Използвай правилна българска граматика и пунктуация
- Структурирай текста с подзаглавия
- Добави конкретни примери релевантни за България
- Направи го поне 500 думи
- Използвай професионален, но достъпен тон`,
    })

    return improvedContent
  }

  async generateBulgarianKeywords(title: string, content: string): Promise<string[]> {
    const { text: keywordsText } = await generateText({
      model: openai("gpt-4o-mini"),
      prompt: `Генерирай 10-15 релевантни ключови думи на български език за тази статия. Включи както основни, така и дълги ключови фрази (long-tail keywords):

Заглавие: ${title}
Съдържание: ${content.substring(0, 300)}...

Върни ключовите думи като JSON масив от strings.`,
    })

    try {
      const keywords = JSON.parse(keywordsText)
      return Array.isArray(keywords) ? keywords : []
    } catch {
      return ["киберсигурност", "SEO", "технологии", "България", "новини"]
    }
  }
}
