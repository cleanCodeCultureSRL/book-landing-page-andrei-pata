import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { useState } from "react"
import { FormModal } from "@/components/form-modal"

export function PricingSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState("")
  const plans = [
    {
      name: "Sponsorizează-mă în scrierea cărții (50RON cu TVA)",
      price: "50 RON",
      features: [
        "Acces exclusiv la PDF-ul cărții, înainte de lansarea oficială (15 FEBRUARIE).",
        "Primești un newsletter cu actualizări despre procesul de scriere.",
        "Contribui la realizarea unei povești care poate inspira o generație.",
      ],
      buttonText: "Sponsorizează acum",
    },
    {
      name: "Precomandă cartea – reducere specială (39RON cu TVA)",
      price: "39 RON",
      originalPrice: "50 RON",
      features: [
        "Obții cartea la un preț redus, disponibil doar pentru precomenzi (până la 15 FEBRUARIE)",
        "Acces la un capitol gratuit în format PDF pentru a începe lectura mai devreme.",
      ],
      buttonText: "Precomandă cu reducere",
    },
    {
      name: "Precomandă cartea – preț întreg (50RON cu TVA)",
      price: "50 RON",
      features: [
        "Obții cartea fizică la preț standard, susținând autorul în mod direct. (după 15 FEBRUARIE)",
        "Primești un semn de carte personalizat, inspirat din poveste.",
        "Acces la un capitol gratuit în format PDF pentru a începe lectura mai devreme.",
      ],
      buttonText: "Precomandă acum",
    },
  ]

  return (
    <section className="bg-gray-50 py-12 md:py-24">
      <div className="container">
        <div className="text-center space-y-4 mb-12 md:mb-16">
          <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl">Opțiuni de achiziție</h2>
          <div className="max-w-[800px] mx-auto">
            <p className="text-muted-foreground">
              Alege pachetul care ți se potrivește și fii parte din călătoria "One Love"
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div key={index} className="bg-white rounded-lg p-8 shadow-lg flex flex-col h-full">
              <div className="flex-grow space-y-6">
                <div className="space-y-2 text-center">
                  <h3 className="font-semibold text-xl">{plan.name}</h3>
                  <div className="text-4xl font-bold">{plan.price}</div>
                  {plan.originalPrice && (
                    <div className="text-sm text-muted-foreground line-through">{plan.originalPrice}</div>
                  )}
                </div>

                <ul className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-1" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6">
                <Button
                  className="w-full bg-[rgb(162,130,167)] hover:bg-[rgb(172,140,177)] text-white"
                  size="lg"
                  onClick={() => {
                    setSelectedPlan(plan.name)
                    setIsModalOpen(true)
                  }}
                >
                  {plan.buttonText}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <FormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} selectedPlan={selectedPlan} />
    </section>
  )
}

