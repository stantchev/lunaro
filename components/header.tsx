"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Search, Menu, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import { useState, useEffect } from "react"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
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
              <Link href="/world" className="text-sm font-medium hover:text-primary transition-colors">
                Светът
              </Link>
              <Link href="/saved" className="text-sm font-medium hover:text-primary transition-colors">
                Запазени
              </Link>
            </nav>
            <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-2">
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input placeholder={t("searchPlaceholder")} className="pl-8 w-48 lg:w-64" />
              </div>
            </div>
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
      </header>
      {isOpen && (
        <>
          <div 
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={() => setIsOpen(false)}
          />
          <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
            <div className="bg-background rounded-t-3xl shadow-2xl border-t border-border animate-in slide-in-from-bottom-4 duration-300 ease-out">
              <div className="flex justify-center pt-3 pb-2">
                <div className="w-12 h-1 bg-muted-foreground/30 rounded-full"></div>
              </div>
              <nav className="px-6 pb-8 space-y-1">
                <Link 
                  href="/" 
                  className="flex items-center py-4 text-lg font-semibold hover:text-primary transition-colors border-b border-border/50"
                  onClick={() => setIsOpen(false)}
                >
                  Начало
                </Link>
                <Link 
                  href="/cybersecurity" 
                  className="flex items-center py-3 text-base font-medium hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Киберсигурност
                </Link>
                <Link 
                  href="/seo" 
                  className="flex items-center py-3 text-base font-medium hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  SEO
                </Link>
                <Link 
                  href="/ai" 
                  className="flex items-center py-3 text-base font-medium hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  AI & Технологии
                </Link>
                <Link 
                  href="/analizi" 
                  className="flex items-center py-3 text-base font-medium hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Анализи
                </Link>
                <Link 
                  href="/world" 
                  className="flex items-center py-3 text-base font-medium hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Светът
                </Link>
                <Link 
                  href="/saved" 
                  className="flex items-center py-3 text-base font-medium hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Запазени
                </Link>
              </nav>
            </div>
          </div>
        </>
      )}
    </>
  )
}
