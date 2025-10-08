"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Search, Menu, X, Pin } from "lucide-react"
import { Input } from "@/components/ui/input"
import { t } from "@/lib/i18n"
import Image from "next/image"
import { useState } from "react"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo-desktop.png"
              alt="Lunaro News Logo"
              width={150}
              height={50}
              className="h-10 md:h-12 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-sm font-semibold hover:text-primary transition-colors border-b-2 border-transparent hover:border-primary pb-1">
              Начало
            </Link>
            <Link href="/cybersecurity" className="text-sm font-medium hover:text-primary transition-colors">
              Киберсигурност
            </Link>
            <Link href="/seo" className="text-sm font-medium hover:text-primary transition-colors">
              SEO
            </Link>
            <Link href="/ai" className="text-sm font-medium hover:text-primary transition-colors">
              AI & Технологии
            </Link>
            <Link href="/analizi" className="text-sm font-medium hover:text-primary transition-colors">
              Анализи
            </Link>
            <Link href="/tools" className="text-sm font-medium hover:text-primary transition-colors">
              Инструменти
            </Link>
            <Link href="/saved" className="text-sm font-medium hover:text-primary transition-colors">
              <Pin />
            </Link>
          </nav>

          {/* Search + Actions */}
          <div className="flex items-center space-x-4">
          {/* Desktop Search */}
          <div className="hidden md:flex items-center space-x-2">
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder={t("searchPlaceholder")} className="pl-8 w-48 lg:w-64" />
            </div>
          </div>
            
            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-background border-t">
          <nav className="flex flex-col space-y-2 px-4 py-4">
            <Link href="/" className="text-sm font-semibold hover:text-primary transition-colors">
              Начало
            </Link>
            <Link href="/cybersecurity" className="text-sm font-medium hover:text-primary transition-colors">
              Киберсигурност
            </Link>
            <Link href="/seo" className="text-sm font-medium hover:text-primary transition-colors">
              SEO
            </Link>
            <Link href="/ai" className="text-sm font-medium hover:text-primary transition-colors">
              AI & Технологии
            </Link>
            <Link href="/analizi" className="text-sm font-medium hover:text-primary transition-colors">
              Анализи
            </Link>
            <Link href="/tools" className="text-sm font-medium hover:text-primary transition-colors">
              Инструменти
            </Link>
            <Link href="/tools" className="text-sm font-medium hover:text-primary transition-colors">
              Запазени
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
