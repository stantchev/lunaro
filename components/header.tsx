"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Search, Menu, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import { LanguageSelector } from "./language-selector"
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
            {/* Desktop Logo */}
            <Image
              src="/logo-desktop.png"
              alt="Lunaro News Logo"
              width={150}
              height={50}
              className="hidden md:block"
              priority
            />
            {/* Mobile Logo */}
            <Image
              src="/logo-mobile.png"
              alt="Lunaro News Mobile Logo"
              width={40}
              height={40}
              className="block md:hidden"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
              {t("home")}
            </Link>
            <Link href="/cybersecurity" className="text-sm font-medium hover:text-primary transition-colors">
              {t("cybersecurity")}
            </Link>
            <Link href="/seo" className="text-sm font-medium hover:text-primary transition-colors">
              {t("seo")}
            </Link>
            <Link href="/ai" className="text-sm font-medium hover:text-primary transition-colors">
              {t("AI")}
            </Link>
            <Link href="/analysis" className="text-sm font-medium hover:text-primary transition-colors">
              {t("analysis")}
            </Link>
            <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">
              {t("about")}
            </Link>
          </nav>

          {/* Search + Actions */}
          <div className="flex items-center space-x-4">
            {/* Desktop Search */}
            <div className="hidden sm:flex items-center space-x-2">
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input placeholder={t("searchPlaceholder")} className="pl-8 w-64" />
              </div>
            </div>

            <LanguageSelector />

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
            <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
              {t("home")}
            </Link>
            <Link href="/cybersecurity" className="text-sm font-medium hover:text-primary transition-colors">
              {t("cybersecurity")}
            </Link>
            <Link href="/seo" className="text-sm font-medium hover:text-primary transition-colors">
              {t("seo")}
            </Link>
            <Link href="/ai" className="text-sm font-medium hover:text-primary transition-colors">
              {t("AI")}
            </Link>
            <Link href="/analysis" className="text-sm font-medium hover:text-primary transition-colors">
              {t("analysis")}
            </Link>
            <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">
              {t("about")}
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
