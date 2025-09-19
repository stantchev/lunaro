import { Button } from "@/components/ui/button"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center bg-gradient-to-br from-blue-600 via-purple-700 to-black text-white">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/cybersecurity-shield.png"
          alt="Киберсигурност и AI"
          fill
          priority
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 text-center max-w-3xl">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
          Lunaro News
        </h1>
        <p className="text-lg sm:text-xl text-gray-200 mb-10">
          Последните новини и анализи за <span className="text-blue-300">Киберсигурност</span>,{" "}
          <span className="text-purple-300">AI</span> и{" "}
          <span className="text-pink-300">SEO</span> – на български език.
          Останете информирани, защитени и една крачка пред останалите.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild className="bg-white text-black hover:bg-gray-200">
            <a href="#latest">Последни новини</a>
          </Button>
          <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white/10">
            <a href="/contact">Абонирай се</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
