export const translations = {
  bg: {
    // Navigation
    home: "Начало",
    cybersecurity: "Киберсигурност",
    seo: "SEO",
    analysis: "Анализи",
    about: "За нас",
    search: "Търсене",

    // Common actions
    readMore: "Прочети повече",
    share: "Сподели",
    save: "Запази",
    subscribe: "Абонирай се",
    loading: "Зареждане...",

    // Time and dates
    minutesAgo: "преди {minutes} минути",
    hoursAgo: "преди {hours} часа",
    daysAgo: "преди {days} дни",
    readingTime: "{minutes} мин четене",

    // Categories
    cybersecurityNews: "Новини за киберсигурност",
    seoNews: "SEO новини и стратегии",
    latestNews: "Последни новини",

    // Article metadata
    author: "Автор",
    publishedOn: "Публикувано на",
    updatedOn: "Обновено на",
    tags: "Тагове",
    source: "Източник",

    // Newsletter
    newsletterTitle: "Абонирай се за нашия бюлетин",
    newsletterDescription: "Получавай най-актуалните новини за киберсигурност и SEO директно в пощенската си кутия",
    emailPlaceholder: "Въведи твоя имейл адрес",
    noSpam: "Няма спам. Можеш да се отпишеш по всяко време.",

    // Search
    searchPlaceholder: "Търсене...",
    searchResults: 'Резултати за "{query}" ({count})',
    noResults: "Няма намерени резултати",
    popularSearches: "Популярни търсения",

    // Footer
    footerDescription:
      "Водещо българско издание за киберсигурност и SEO оптимизация. Актуални новини, анализи и експертни мнения.",
    categories: "Категории",
    resources: "Ресурси",
    contact: "Свържи се с нас",
    allRightsReserved: "Всички права запазени.",
    privacyPolicy: "Политика за поверителност",
    termsOfUse: "Условия за ползване",
    cookies: "Бисквитки",

    // Admin
    adminPanel: "Админ панел",
    contentManagement: "Управление на автоматизираното съдържание",
    processContent: "Обработка на съдържание",
    processedArticles: "Обработени статии",
    settings: "Настройки",
    totalArticles: "Общо статии",
    systemStatus: "Статус на системата",
    active: "Активен",

    // Errors
    articleNotFound: "Статията не е намерена",
    errorProcessing: "Грешка при обработката",
    tryAgain: "Опитай отново",

    // SEO and meta
    cybersecurityDescription:
      "Последни новини и анализи за киберсигурност в България. Заплахи, защитни мерки и експертни препоръки.",
    seoDescription: "Най-новите SEO техники, алгоритмични промени и стратегии за подобряване на позициите в Google.",
  },
}

export type TranslationKey = keyof typeof translations.bg

export function t(key: TranslationKey, params?: Record<string, string | number>): string {
  let translation = translations.bg[key] || key

  if (params) {
    Object.entries(params).forEach(([param, value]) => {
      translation = translation.replace(`{${param}}`, String(value))
    })
  }

  return translation
}

export function formatDate(date: string | Date, locale = "bg-BG"): string {
  const dateObj = typeof date === "string" ? new Date(date) : date

  return dateObj.toLocaleDateString(locale, {
    day: "numeric",
    month: "long",
    year: "numeric",
  })
}

export function formatDateTime(date: string | Date, locale = "bg-BG"): string {
  const dateObj = typeof date === "string" ? new Date(date) : date

  return dateObj.toLocaleDateString(locale, {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  })
}

export function getTimeAgo(date: string | Date): string {
  const dateObj = typeof date === "string" ? new Date(date) : date
  const now = new Date()
  const diffInMinutes = Math.floor((now.getTime() - dateObj.getTime()) / (1000 * 60))

  if (diffInMinutes < 60) {
    return t("minutesAgo", { minutes: diffInMinutes })
  }

  const diffInHours = Math.floor(diffInMinutes / 60)
  if (diffInHours < 24) {
    return t("hoursAgo", { hours: diffInHours })
  }

  const diffInDays = Math.floor(diffInHours / 24)
  return t("daysAgo", { days: diffInDays })
}

export function calculateReadingTime(content: string, wordsPerMinute = 200): string {
  const wordCount = content.split(/\s+/).length
  const minutes = Math.ceil(wordCount / wordsPerMinute)
  return t("readingTime", { minutes })
}
