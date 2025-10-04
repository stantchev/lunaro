"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Copy, Check, Tag, Globe, Eye, Search } from "lucide-react"
import { toast } from "@/hooks/use-toast"

export function MetaTagsGenerator() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    keywords: "",
    author: "",
    url: "",
    image: "",
    siteName: "",
    twitterHandle: "",
    facebookAppId: ""
  })

  const [generatedTags, setGeneratedTags] = useState("")
  const [copied, setCopied] = useState(false)

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const generateMetaTags = () => {
    const {
      title,
      description,
      keywords,
      author,
      url,
      image,
      siteName,
      twitterHandle,
      facebookAppId
    } = formData

    if (!title || !description) {
      toast({
        title: "Грешка",
        description: "Заглавието и описанието са задължителни полета.",
        variant: "destructive"
      })
      return
    }

    const tags = `<!-- Основни мета тагове -->
<title>${title}</title>
<meta name="description" content="${description}" />
<meta name="keywords" content="${keywords}" />
<meta name="author" content="${author}" />

<!-- Open Graph тагове -->
<meta property="og:title" content="${title}" />
<meta property="og:description" content="${description}" />
<meta property="og:url" content="${url}" />
<meta property="og:type" content="website" />
<meta property="og:image" content="${image}" />
<meta property="og:site_name" content="${siteName}" />

<!-- Twitter Card тагове -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="${title}" />
<meta name="twitter:description" content="${description}" />
<meta name="twitter:image" content="${image}" />
${twitterHandle ? `<meta name="twitter:site" content="@${twitterHandle}" />` : ""}

<!-- Допълнителни мета тагове -->
<meta name="robots" content="index, follow" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta charset="UTF-8" />
${facebookAppId ? `<meta property="fb:app_id" content="${facebookAppId}" />` : ""}

<!-- Canonical URL -->
${url ? `<link rel="canonical" href="${url}" />` : ""}`

    setGeneratedTags(tags)
    toast({
      title: "Готово!",
      description: "Мета таговете са генерирани успешно."
    })
  }

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(generatedTags)
      setCopied(true)
      toast({
        title: "Копирано!",
        description: "Мета таговете са копирани в клипборда."
      })
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      toast({
        title: "Грешка",
        description: "Неуспешно копиране в клипборда.",
        variant: "destructive"
      })
    }
  }

  const clearForm = () => {
    setFormData({
      title: "",
      description: "",
      keywords: "",
      author: "",
      url: "",
      image: "",
      siteName: "",
      twitterHandle: "",
      facebookAppId: ""
    })
    setGeneratedTags("")
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Tag className="h-5 w-5 text-blue-600" />
          Генератор на мета тагове
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="title">Заглавие *</Label>
            <Input
              id="title"
              placeholder="SEO оптимизирано заглавие"
              value={formData.title}
              onChange={(e) => handleInputChange("title", e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">Описание *</Label>
            <Input
              id="description"
              placeholder="Кратко описание на страницата"
              value={formData.description}
              onChange={(e) => handleInputChange("description", e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="keywords">Ключови думи</Label>
            <Input
              id="keywords"
              placeholder="ключова дума, друга дума, трета"
              value={formData.keywords}
              onChange={(e) => handleInputChange("keywords", e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="author">Автор</Label>
            <Input
              id="author"
              placeholder="Име на автора"
              value={formData.author}
              onChange={(e) => handleInputChange("author", e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="url">URL адрес</Label>
            <Input
              id="url"
              placeholder="https://example.com/page"
              value={formData.url}
              onChange={(e) => handleInputChange("url", e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="image">Изображение (Open Graph)</Label>
            <Input
              id="image"
              placeholder="https://example.com/image.jpg"
              value={formData.image}
              onChange={(e) => handleInputChange("image", e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="siteName">Име на сайта</Label>
            <Input
              id="siteName"
              placeholder="Име на вашия сайт"
              value={formData.siteName}
              onChange={(e) => handleInputChange("siteName", e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="twitterHandle">Twitter handle</Label>
            <Input
              id="twitterHandle"
              placeholder="@username"
              value={formData.twitterHandle}
              onChange={(e) => handleInputChange("twitterHandle", e.target.value)}
            />
          </div>
        </div>

        <div className="flex gap-2">
          <Button onClick={generateMetaTags} className="flex-1">
            <Search className="h-4 w-4 mr-2" />
            Генерирай мета тагове
          </Button>
          <Button variant="outline" onClick={clearForm}>
            Изчисти
          </Button>
        </div>

        {generatedTags && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Генерирани мета тагове:</h3>
              <Button
                variant="outline"
                size="sm"
                onClick={copyToClipboard}
                className="flex items-center gap-2"
              >
                {copied ? (
                  <Check className="h-4 w-4 text-green-600" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
                {copied ? "Копирано!" : "Копирай"}
              </Button>
            </div>
            <Textarea
              value={generatedTags}
              readOnly
              className="min-h-[300px] font-mono text-sm"
              placeholder="Генерираните мета тагове ще се появят тук..."
            />
          </div>
        )}

        <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg">
          <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
            💡 Съвети за мета таговете:
          </h4>
          <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
            <li>• Заглавието трябва да е 50-60 символа</li>
            <li>• Описанието трябва да е 150-160 символа</li>
            <li>• Използвайте релевантни ключови думи</li>
            <li>• Изображението трябва да е поне 1200x630px</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}
