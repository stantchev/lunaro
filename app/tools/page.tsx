import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SEOChecker } from "@/components/tools/seo-checker"
import { PasswordGenerator } from "@/components/tools/password-generator"
import { URLShortener } from "@/components/tools/url-shortener"
import { TextAnalyzer } from "@/components/tools/text-analyzer"
import { MetaTagsGenerator } from "@/components/tools/meta-tags-generator"
import { SSLChecker } from "@/components/tools/ssl-checker"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata: Metadata = {
  title: "SEO и маркетинг инструменти - Lunaro News | Безплатни онлайн инструменти",
  description:
    "Колекция от безплатни SEO и маркетинг инструменти за анализ на уебсайтове, ключови думи, конкуренти и оптимизация на съдържанието.",
  keywords:
    "SEO инструменти, маркетинг инструменти, анализ на ключови думи, проверка на уебсайт, безплатни инструменти, България",
  openGraph: {
    title: "SEO и маркетинг инструменти - Lunaro News",
    description: "Колекция от безплатни SEO и маркетинг инструменти за анализ и оптимизация",
    url: "https://lunaro.news/tools",
    siteName: "Lunaro News",
    locale: "bg_BG",
    type: "website",
  },
  alternates: {
    canonical: "https://lunaro.news/tools",
  },
}

export default function ToolsPage() {



  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-background to-muted/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <Badge variant="secondary" className="text-lg px-4 py-2">
                SEO и маркетинг инструменти
              </Badge>

              <h1 className="text-4xl lg:text-5xl font-bold text-balance">Безплатни инструменти за SEO и маркетинг</h1>

              <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
                Колекция от професионални инструменти за анализ, оптимизация и подобряване на вашето онлайн присъствие
              </p>

            </div>
          </div>
        </section>


        {/* Working Tools */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-4">Работещи инструменти</h2>
                <p className="text-muted-foreground">Използвайте нашите безплатни инструменти директно в браузъра</p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8 mb-16">
                <SEOChecker />
                <PasswordGenerator />
                <URLShortener />
                <TextAnalyzer />
                <MetaTagsGenerator />
                <SSLChecker />
              </div>
            </div>
          </div>
        </section>



        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h2 className="text-3xl font-bold">Предложете нов инструмент</h2>
              <p className="text-muted-foreground text-lg">
                Имате идея за полезен инструмент? Споделете я с нас и ние ще я разработим
              </p>
              <Button size="lg" asChild>
                <Link href="/contact">Свържете се с нас</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
