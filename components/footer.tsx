import Link from "next/link"
import { Separator } from "@/components/ui/separator"
import { Facebook, Twitter, Linkedin, Mail, Shield, TrendingUp } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-6 md:py-12">
        <div className="space-y-6 md:space-y-8">
          {/* Brand */}
          <div className="space-y-3 md:space-y-4 text-center">
            <Link href="/" className="flex items-center justify-center">
              <Image
                src="/logo-desktop.png"
                alt="Lunaro News Logo"
                width={150}
                height={40}
                className="h-12 md:h-14 w-auto"
                priority
              />
            </Link>
            <p className="text-xs md:text-sm text-muted-foreground max-w-2xl mx-auto">
              Lunaro News - Водещо българско медийно издание за технологии, киберсигурност и дигитални иновации.
              <span className="hidden sm:inline"> Актуални новини, задълбочени анализи и експертни мнения.</span>
            </p>
          </div>

          {/* Three columns layout - Mobile: stacked, Desktop: 3 columns */}
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-8 max-w-6xl mx-auto">
            {/* Categories */}
            <div className="space-y-3 md:space-y-4">
              <h3 className="font-semibold flex items-center space-x-2 text-sm md:text-base">
                <Shield className="h-3 w-3 md:h-4 md:w-4" />
                <span>Категории</span>
              </h3>
              <ul className="space-y-1 md:space-y-2 text-xs md:text-sm">
                <li>
                  <Link href="/cybersecurity" className="text-muted-foreground hover:text-primary transition-colors">
                    Киберсигурност
                  </Link>
                </li>
                <li>
                  <Link href="/seo" className="text-muted-foreground hover:text-primary transition-colors">
                    SEO Оптимизация
                  </Link>
                </li>
                <li>
                  <Link href="/analizi" className="text-muted-foreground hover:text-primary transition-colors">
                    Анализи и прогнози
                  </Link>
                </li>
                <li>
                  <Link href="/tutorials" className="text-muted-foreground hover:text-primary transition-colors">
                    Ръководства
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div className="space-y-3 md:space-y-4">
              <h3 className="font-semibold flex items-center space-x-2 text-sm md:text-base">
                <TrendingUp className="h-3 w-3 md:h-4 md:w-4" />
                <span>Ресурси</span>
              </h3>
              <ul className="space-y-1 md:space-y-2 text-xs md:text-sm">
                <li>
                  <Link href="/tools" className="text-muted-foreground hover:text-primary transition-colors">
                    SEO Инструменти
                  </Link>
                </li>
                <li>
                  <Link href="/security-tools" className="text-muted-foreground hover:text-primary transition-colors">
                    Инструменти за сигурност
                  </Link>
                </li>
                <li>
                  <Link href="/glossary" className="text-muted-foreground hover:text-primary transition-colors">
                    Речник на термините
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                    Контакти
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact & Social */}
            <div className="col-span-2 md:col-span-1 space-y-3 md:space-y-4 text-center md:text-left">
              <h3 className="font-semibold flex items-center justify-center md:justify-start space-x-2 text-sm md:text-base">
                <Mail className="h-3 w-3 md:h-4 md:w-4" />
                <span>Свържи се с нас</span>
              </h3>
              <div className="space-y-1 md:space-y-2 text-xs md:text-sm text-muted-foreground">
                <p>contact@lunaro-news.bg</p>
                <p>+359 2 XXX XXXX</p>
              </div>

              <div className="flex justify-center md:justify-start space-x-3 md:space-x-4">
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Facebook className="h-4 w-4 md:h-5 md:w-5" />
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Twitter className="h-4 w-4 md:h-5 md:w-5" />
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Linkedin className="h-4 w-4 md:h-5 md:w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-6 md:my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
          <div className="text-xs md:text-sm text-muted-foreground text-center md:text-left">© 2025 Lunaro News. Всички права запазени.</div>
          <div className="flex flex-wrap justify-center md:justify-end gap-3 md:gap-6 text-xs md:text-sm">
            <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
              Политика за поверителност
            </Link>
            <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">
              Условия за ползване
            </Link>
            <Link href="/cookies" className="text-muted-foreground hover:text-primary transition-colors">
              Бисквитки
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
