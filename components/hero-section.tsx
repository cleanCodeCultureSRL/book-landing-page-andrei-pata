'use client'
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import { FormModal } from "./form-modal"

export function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section className="container py-12 md:py-24 relative overflow-hidden">

      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
        <div className="space-y-8">
          <div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-4">
              „Fii eroul propriei tale povești"
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              💭 Viața te poate abate de la visurile tale, dar puterea de a reveni pe drumul corect îți aparține.
              Inspiră-te din povestea lui Jimmy și descoperă cum intenția, prietenia și curajul pot transforma
              imposibilul în realitate.
            </p>
            <p className="text-lg font-semibold mb-6">
              ✨ În spatele fiecărei lupte există o lecție. În spatele fiecărui vis, există o cale.
            </p>
          </div>

          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <Check className="h-5 w-5 text-primary" />
              <span>Învață cum să depășești obstacolele și să rămâi fidel dorințelor tale;</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-5 w-5 text-primary" />
              <span>Descoperă forța interioară de a-ți rescrie destinul;</span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-5 w-5 text-primary" />
              <span>Cartea care te va inspira să crezi în tine.</span>
            </li>
          </ul>

          <div className="space-y-4">
            <p className="text-lg font-semibold">🌟 Nu mai aștepta schimbarea. Fii schimbarea!</p>
            <Button
              size="lg"
              disabled={true}
              className="bg-[rgb(162,130,167)] hover:bg-[rgb(172,140,177)] text-white"
            // onClick={() => setIsModalOpen(true)}
            >
              📕 Precomandă acum
            </Button>
          </div>

          {/* <OfflineEventInfo /> */}
        </div>

        <div className="relative mx-auto w-full max-w-[400px] aspect-[3/4]">
          <Image
            src="/book_cover.png"
            alt="Coperta Cărții"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
      <FormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} selectedPlan={null} />
    </section >
  )
}

