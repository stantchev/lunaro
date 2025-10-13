import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Lunaro News - Технологични новини от България",
    short_name: "Lunaro News",
    description: "Следете най-важните технологични новини, анализи и трендове в киберсигурността, SEO, AI и дигиталната иновация",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#1e40af",
    orientation: "portrait-primary",
    icons: [
      {
        src: "/logo-desktop.png",
        sizes: "300x60",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/logo-mobile.png",
        sizes: "150x30",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/favicon.ico",
        sizes: "32x32",
        type: "image/x-icon",
        purpose: "any",
      },
      {
        src: "/apple-touch-icon.jpg",
        sizes: "180x180",
        type: "image/jpeg",
        purpose: "any",
      },
    ],
    categories: ["news", "technology", "business"],
    lang: "bg",
    dir: "ltr",
    scope: "/",
    id: "lunaro-news",
    related_applications: [],
    prefer_related_applications: false,
  }
}
