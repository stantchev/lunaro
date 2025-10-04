import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { SEOHead } from "@/components/seo-head"
import { generateWebsiteStructuredData } from "@/lib/seo-utils"
import { Toaster } from "sonner"
import "./globals.css"

export const metadata: Metadata = {
  title: {
    default: "Lunaro News - Технологии, Киберсигурност и Дигитални Новини",
    template: "%s - Lunaro News",
  },
  description:
    "Lunaro News - Водещо българско медийно издание за технологии, киберсигурност и дигитални иновации. Актуални новини, анализи и експертни мнения.",
  keywords: "новини, технологии, киберсигурност, AI, SEO, България, медия, дигитални иновации, хакери, Google, алгоритъм, стартъпи",
  authors: [{ name: "Lunaro News" }],
  creator: "Lunaro News",
  publisher: "Lunaro News",
  robots: "index, follow",
  alternates: {
    canonical: "https://lunaro.news",
  },
  openGraph: {
    type: "website",
    locale: "bg_BG",
    url: "https://lunaro.news",
    siteName: "Lunaro News",
    title: "Lunaro News - Технологии, Киберсигурност и Дигитални Новини",
    description: "Водещо българско медийно издание за технологии, киберсигурност и дигитални иновации.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Lunaro News",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lunaro News - Технологии, Киберсигурност и Дигитални Новини",
    description: "Водещо българско медийно издание за технологии, киберсигурност и дигитални иновации.",
    images: ["/og-image.jpg"],
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  generator: "Lunaro News",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const websiteStructuredData = generateWebsiteStructuredData()

  return (
    <html lang="bg">
      <head>
        <SEOHead structuredData={websiteStructuredData} />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
        <Toaster position="top-right" richColors />
      </body>
    </html>
  )
}
