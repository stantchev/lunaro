import type { Metadata } from "next"
import { AdminDashboard } from "@/components/admin-dashboard"

export const metadata: Metadata = {
  title: "Админ панел - Lunaro News",
  description: "Управление на автоматизираното съдържание за Lunaro News",
  robots: "noindex, nofollow", // Prevent indexing of admin pages
}

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <AdminDashboard />
      </div>
    </div>
  )
}
