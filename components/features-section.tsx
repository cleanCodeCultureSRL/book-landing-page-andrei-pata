'use client'
import { Star, Target, Heart, Lightbulb } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { FormModal } from "./form-modal"
import { useState } from "react"

export function FeaturesSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <section className="container py-12 md:py-24">
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
        <div className="relative mx-auto w-full max-w-[400px] aspect-[3/4]">
          <Image
            src="/book_cover_back.png"
            alt="Coperta Cărții"
            fill
            className="object-contain"
            priority
          />
        </div>

        <div className="space-y-8">
          <div>
            <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl mb-4">
              Tot ce ai nevoie pentru a găsi inspirația chiar la îndemână
            </h2>
            <p className="mt-4 text-xl text-muted-foreground">
              Această carte te conduce printr-o călătorie emoționantă care îți arată că nici un vis nu e prea departe.
              Descoperă puterea intenției și a prieteniei prin povestea lui Jimmy.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <Star className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Cum să-ți regăsești drumul în viață</h3>
                <p className="text-muted-foreground">
                  Învață din lupta lui Jimmy cu frica de eșec și descoperă cum intenția poate schimba totul.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Cum să depășești provocările și să-ți îndeplinești obiectivele</h3>
                <p className="text-muted-foreground">
                  Capitole care te inspiră să faci pași mici, dar semnificativi spre ceea ce îți dorești.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Prietenii care contează</h3>
                <p className="text-muted-foreground">
                  Descoperă cum Jimmy a învățat că oamenii potriviți pot transforma cele mai grele momente în victorie.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex gap-4 items-start">
              <Lightbulb className="h-6 w-6 text-primary shrink-0 mt-1" />
              <p className="text-lg">
                „One Love" este mai mult decât o carte – este o sursă de curaj și inspirație pentru cei care simt că
                sunt pregătiți să-și urmeze visurile.
              </p>
            </div>
            <Button
              variant="default"
              size="lg"
              className="bg-[rgb(162,130,167)] hover:bg-[rgb(172,140,177)] text-white"
              onClick={() =>
                setIsModalOpen(true)}
            >
              📕 Precomandă acum
            </Button>
          </div>
        </div>
      </div>
      <FormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} selectedPlan={null} />
    </section>
  )
}

