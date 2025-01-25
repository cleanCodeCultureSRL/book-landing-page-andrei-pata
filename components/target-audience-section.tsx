import { Users, Target, Rocket } from "lucide-react"

export function TargetAudienceSection() {
  const audiences = [
    {
      icon: <Users className="h-8 w-8 text-red-500" />,
      title: "Elevi cu visuri mari",
      description:
        "Pentru cei care au un plan, dar se confruntă cu provocările vieții și au nevoie de o direcție pentru a-și regăsi motivația.",
    },
    {
      icon: <Target className="h-8 w-8 text-red-500" />,
      title: "Tineri în căutarea unui scop",
      description:
        "Această carte te ajută să descoperi puterea interioară și să îți urmezi pasiunea, indiferent de obstacolele apărute pe drum.",
    },
    {
      icon: <Rocket className="h-8 w-8 text-red-500" />,
      title: "Viitorii lideri ai generației lor",
      description:
        "Pentru liceenii care vor să inspire și să își transforme visele în realitate, învățând din povești autentice și pline de lecții de viață.",
    },
  ]

  return (
    <section className="container py-12 md:py-24">
      <div className="text-center space-y-4 mb-12 md:mb-16">
        <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl">Pentru cine este această carte?</h2>
        <div className="max-w-[800px] mx-auto">
          <p className="text-muted-foreground">
            Această carte este scrisă pentru liceeni care știu ce își doresc de la viață, dar care, din diverse motive,
            se îndepărtează de obiectivele lor. Este pentru cei care caută inspirație și curaj să devină ceea ce
            visează.
          </p>
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {audiences.map((audience, index) => (
          <div key={index} className="bg-white rounded-lg p-8 text-center shadow-lg space-y-4">
            <div className="flex justify-center">{audience.icon}</div>
            <h3 className="text-xl font-semibold">{audience.title}</h3>
            <p className="text-muted-foreground">{audience.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

