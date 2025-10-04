import type React from "react"
import Script from "next/script"

interface SEOHeadProps {
  structuredData?: object
  additionalMeta?: React.ReactNode
}

export function SEOHead({ structuredData, additionalMeta }: SEOHeadProps) {
  return (
    <>
      {/* Additional meta tags */}
      {additionalMeta}

      {/* Structured Data */}
      {structuredData && (
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      )}

      {/* Performance optimizations */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://lunaro.sofia-today.org" />
      <link rel="preconnect" href="https://www.google-analytics.com" />
      <link rel="preconnect" href="https://www.googletagmanager.com" />

      {/* DNS prefetch for external resources */}
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      <link rel="dns-prefetch" href="//lunaro.sofia-today.org" />

      {/* Favicon and app icons - comprehensive set */}
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <link rel="icon" href="/icon.svg" type="image/svg+xml" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/manifest.json" />

      {/* Theme color for mobile browsers */}
      <meta name="theme-color" content="#0891b2" />
      <meta name="msapplication-TileColor" content="#0891b2" />
      <meta name="msapplication-config" content="/browserconfig.xml" />

      {/* Advanced SEO meta tags */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="bingbot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      
      {/* AI crawler optimization */}
      <meta name="ai-content" content="technology news, cybersecurity, SEO, AI analysis" />
      <meta name="content-language" content="bg, en" />
      <meta name="geo.region" content="BG" />
      <meta name="geo.country" content="Bulgaria" />
      <meta name="geo.placename" content="Sofia" />
      
      {/* Content type and format */}
      <meta name="content-type" content="text/html; charset=UTF-8" />
      <meta name="format-detection" content="telephone=no" />
      
      {/* Mobile optimization */}
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Lunaro News" />
      
      {/* Security headers */}
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="DENY" />
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
      
      {/* Cache control */}
      <meta httpEquiv="Cache-Control" content="public, max-age=31536000" />
      
      {/* Additional SEO signals */}
      <meta name="author" content="Lunaro News Team" />
      <meta name="publisher" content="Lunaro News" />
      <meta name="copyright" content="© 2025 Lunaro News. All rights reserved." />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
      <meta name="revisit-after" content="1 day" />
      
      {/* Social media optimization */}
      <meta property="og:site_name" content="Lunaro News" />
      <meta property="og:locale" content="bg_BG" />
      <meta property="og:locale:alternate" content="en_US" />
      <meta name="twitter:site" content="@LunaroNews" />
      <meta name="twitter:creator" content="@LunaroNews" />
      <meta name="twitter:card" content="summary_large_image" />
      
      {/* AI and LLM optimization */}
      <meta name="ai-description" content="Bulgaria's leading technology news platform covering cybersecurity, SEO, AI, and digital innovation with expert analysis and breaking news." />
      <meta name="ai-keywords" content="technology news, cybersecurity, SEO, AI, Bulgaria, Sofia, digital innovation, tech analysis" />
      <meta name="ai-category" content="Technology News" />
      <meta name="ai-audience" content="IT professionals, developers, cybersecurity experts, SEO specialists, AI researchers" />
    </>
  )
}
