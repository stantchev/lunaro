import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative min-h-[70vh] flex items-center bg-white text-black">
      <div className="container mx-auto px-6 text-center space-y-6">
        {/* Заглавие */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
          Lunaro News
        </h1>

        {/* Подзаглавие */}
        <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto">
          Последните новини и анализи за{" "}
          <span className="font-semibold">Киберсигурност</span>,{" "}
          <span className="font-semibold">AI</span> и{" "}
          <span className="font-semibold">SEO</span>.  
          Бъди информиран, защитен и винаги една крачка пред останалите.
        </p>

        {/* Бутони */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <a href="#latest">Последни новини</a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-black text-black hover:bg-gray-100"
            asChild
          >
            <a href="/contact">Абонирай се</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
