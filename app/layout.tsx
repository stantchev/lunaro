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
        {/* Google Translate - Loaded client-side only */}
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              function loadGoogleTranslate() {
                if (typeof window !== 'undefined') {
                  var script = document.createElement('script');
                  script.type = 'text/javascript';
                  script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
                  script.async = true;
                  document.head.appendChild(script);
                }
              }
              
              function googleTranslateElementInit() {
                if (typeof google !== 'undefined' && google.translate) {
                  new google.translate.TranslateElement({
                    pageLanguage: 'bg',
                    includedLanguages: 'en,de,fr,es,it,pt,ru',
                    layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
                    autoDisplay: false,
                    multilanguagePage: true
                  }, 'google_translate_element');
                  
                  // Hide the default Google Translate widget and ellipsis
                  setTimeout(function() {
                    var googleTranslateWidget = document.querySelector('.goog-te-banner-frame');
                    if (googleTranslateWidget) {
                      googleTranslateWidget.style.display = 'none';
                    }
                    
                    // Remove Google Translate ellipsis elements
                    function removeEllipsis() {
                      // Remove ellipsis spans
                      var ellipsisSpans = document.querySelectorAll('span[title*="Click to see original text"]');
                      ellipsisSpans.forEach(function(span) {
                        span.remove();
                      });
                      
                      // Remove continuation markers
                      var continuationMarkers = document.querySelectorAll('.goog-te-ftab');
                      continuationMarkers.forEach(function(marker) {
                        marker.remove();
                      });
                      
                      // Remove underlined ellipsis spans
                      var underlinedSpans = document.querySelectorAll('span[style*="cursor: pointer"][style*="text-decoration: underline"]');
                      underlinedSpans.forEach(function(span) {
                        span.remove();
                      });
                      
                      // Remove any text containing ellipsis
                      var allSpans = document.querySelectorAll('span');
                      allSpans.forEach(function(span) {
                        if (span.textContent && (span.textContent.includes('…') || span.textContent.includes('[&hellip;]'))) {
                          span.remove();
                        }
                      });
                    }
                    
                    // Remove ellipsis immediately and periodically
                    removeEllipsis();
                    setInterval(removeEllipsis, 2000);
                  }, 1000);
                }
              }
              
              // Load Google Translate after page load
              if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', loadGoogleTranslate);
              } else {
                loadGoogleTranslate();
              }
            `
          }}
        />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        {/* Hidden Google Translate Element */}
        <div id="google_translate_element" style={{ display: 'none' }}></div>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
        <Toaster position="top-right" richColors />
      </body>
    </html>
  )
}
