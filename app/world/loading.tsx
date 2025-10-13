import { Skeleton } from "@/components/ui/skeleton"

export default function WorldLoading() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header Skeleton */}
      <div className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <Skeleton className="h-10 w-32" />
            <div className="hidden md:flex items-center space-x-8">
              <Skeleton className="h-4 w-16" />
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-4 w-16" />
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-4 w-16" />
              <Skeleton className="h-4 w-16" />
            </div>
            <div className="flex items-center space-x-4">
              <Skeleton className="h-8 w-48" />
              <Skeleton className="h-8 w-8" />
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section Skeleton */}
      <section className="relative min-h-[80vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-purple-900" />
        <div className="relative z-20 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <Skeleton className="h-8 w-24 mx-auto bg-white/20" />
            <Skeleton className="h-16 w-full bg-white/20" />
            <Skeleton className="h-6 w-3/4 mx-auto bg-white/20" />
            <div className="flex flex-wrap justify-center gap-8 mt-12">
              <Skeleton className="h-16 w-32 bg-white/20" />
              <Skeleton className="h-16 w-32 bg-white/20" />
              <Skeleton className="h-16 w-32 bg-white/20" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article Skeleton */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <Skeleton className="h-6 w-32 mb-4" />
              <Skeleton className="h-8 w-64" />
            </div>
            <div className="grid lg:grid-cols-2 gap-0 overflow-hidden rounded-lg border">
              <Skeleton className="h-64 lg:h-96" />
              <div className="p-8">
                <Skeleton className="h-8 w-full mb-4" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-3/4 mb-4" />
                <div className="flex items-center justify-between">
                  <Skeleton className="h-4 w-32" />
                  <Skeleton className="h-10 w-32" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Skeleton */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-4 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-3 space-y-8">
                <div className="mb-8">
                  <Skeleton className="h-8 w-80 mb-4" />
                  <Skeleton className="h-4 w-96" />
                </div>
                
                {/* Articles Grid Skeleton */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <div key={i} className="space-y-4">
                      <Skeleton className="h-48 w-full" />
                      <div className="space-y-2">
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-3/4" />
                        <Skeleton className="h-3 w-1/2" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sidebar Skeleton */}
              <div className="lg:col-span-1">
                <div className="space-y-6">
                  <Skeleton className="h-8 w-32" />
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div key={i} className="flex space-x-3">
                      <Skeleton className="h-12 w-12 rounded" />
                      <div className="space-y-2 flex-1">
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-3 w-2/3" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section Skeleton */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <Skeleton className="h-10 w-96 mx-auto bg-white/20" />
            <Skeleton className="h-6 w-80 mx-auto bg-white/20" />
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Skeleton className="h-12 w-48 mx-auto bg-white/20" />
              <Skeleton className="h-12 w-48 mx-auto bg-white/20" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer Skeleton */}
      <footer className="bg-muted border-t">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="space-y-4">
                <Skeleton className="h-6 w-24" />
                {Array.from({ length: 4 }).map((_, j) => (
                  <Skeleton key={j} className="h-4 w-32" />
                ))}
              </div>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}

