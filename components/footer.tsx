import Link from "next/link"
import { Separator } from "@/components/ui/separator"
import { Facebook, Twitter, Linkedin, Mail, Shield, TrendingUp } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center">
              {/* Desktop logo */}
              <Image
                src="/logo-desktop.png"
                alt="Lunaro News Logo"
                width={150}
                height={40}
                className="hidden md:block"
                priority
              />
              {/* Mobile logo */}
              <Image
                src="/logo-mobile.png"
                alt="Lunaro News Mobile Logo"
                width={40}
                height={40}
                className="block md:hidden"
                priority
              />
            </Link>
            <p className="text-sm text-muted-foreground">
              Lunaro News - Водещо българско медийно издание за технологии, киберсигурност и дигитални иновации. 
              Актуални новини, задълбочени анализи и експертни мнения.
            </p>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h3 className="font-semibold flex items-center space-x-2">
              <Shield className="h-4 w-4" />
              <span>Категории</span>
            </h3>
            <ul className="space-y-2 text-sm">
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
          <div className="space-y-4">
            <h3 className="font-semibold flex items-center space-x-2">
              <TrendingUp className="h-4 w-4" />
              <span>Ресурси</span>
            </h3>
            <ul className="space-y-2 text-sm">
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
          <div className="space-y-4">
            <h3 className="font-semibold flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>Свържи се с нас</span>
            </h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>contact@lunaro-news.bg</p>
              <p>+359 2 XXX XXXX</p>
            </div>

            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-muted-foreground">© 2025 Lunaro News. Всички права запазени.</div>
          <div className="flex space-x-6 text-sm">
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
