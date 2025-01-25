import { Check } from "lucide-react"

export function LearningSection() {
  const learningPoints = [
    {
      title: "Puterea prieteniei",
      description:
        "În carte, Jimmy descoperă cum sprijinul și loialitatea prietenilor îl ajută să depășească dificultățile familiale, susținându-l să-și urmeze pasiunile cu încredere.",
    },
    {
      title: "Responsabilitate și curaj",
      description:
        "Deciziile asumate, chiar riscante, pot deveni ocazii de creștere. Jimmy își dovedește maturitatea alegând să înfrunte consecințele faptelor sale și să lupte pentru visurile sale.",
    },
    {
      title: "Arta ca terapie",
      description:
        "Graffiti-ul devine pentru Jimmy o formă de exprimare prin care își vindecă emoțiile, lăsând un mesaj de iubire, speranță și unire pe zidurile orașului.",
    },
    {
      title: "Valoarea unui mentor",
      description:
        "Exemplele pozitive din viața lui Jimmy, precum Ray sau profesoara de informatică, demonstrează cum modelele bune pot ghida elevii către descoperirea propriului potențial.",
    },
    {
      title: "Iubirea în familie",
      description:
        "Cartea evidențiază impactul rupturii dintre părinți asupra copilului, însă subliniază puterea reconcilierii și importanța acceptării pentru a vindeca relații și a susține evoluția personală.",
    },
    {
      title: "Pasiune și viitor",
      description:
        "Combinând programarea cu arta, Jimmy descoperă cum talentul și perseverența pot schimba nu doar destinul său, ci și lumea celor din jur.",
    },
  ]

  return (
    <section className="bg-[rgb(162,130,167)] py-12 md:py-24">
      <div className="container">
        <div className="text-center space-y-4 mb-12 md:mb-16">
          <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl text-white">Lucruri pe care le vei învăța</h2>
          <div className="max-w-[800px] mx-auto">
            <p className="text-gray-200">
              Această carte se ocupă de crearea tipografiei și este esențială pentru profesioniștii care lucrează în mod
              regulat pentru clienți.
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {learningPoints.map((point, index) => (
            <div key={index} className="bg-white rounded-lg p-6 flex gap-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[rgb(65,103,112)]">
                <Check className="h-4 w-4 text-white" />
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-[rgb(65,103,112)]">{point.title}</h3>
                <p className="text-muted-foreground">{point.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

