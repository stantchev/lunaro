import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { SEOHead } from "@/components/seo-head"
import { generateWebsiteStructuredData } from "@/lib/seo-utils"
import "./globals.css"

export const metadata: Metadata = {
  title: {
    default: "Lunaro News - Киберсигурност и SEO Новини",
    template: "%s - Lunaro News",
  },
  description:
    "Водещо българско издание за киберсигурност и SEO оптимизация. Актуални новини, анализи и експертни мнения.",
  keywords: "киберсигурност, SEO, България, новини, технологии, сигурност, оптимизация, хакери, Google, алгоритъм",
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
    title: "Lunaro News - Киберсигурност и SEO Новини",
    description: "Водещо българско издание за киберсигурност и SEO оптимизация.",
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
    title: "Lunaro News - Киберсигурност и SEO Новини",
    description: "Водещо българско издание за киберсигурност и SEO оптимизация.",
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
      </body>
    </html>
  )
}
