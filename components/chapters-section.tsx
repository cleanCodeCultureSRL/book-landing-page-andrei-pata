export function ChaptersSection() {
  const chapters = [
    {
      number: 1,
      title: "O zi ca oricare alta",
      description:
        "Jimmy se trezește într-o dimineață ploioasă, cu gânduri despre școală, navetă și pasiunea pentru programare, pregătind terenul pentru aventurile ce vor urma.",
    },
    {
      number: 2,
      title: "Prieteni adevărați",
      description:
        "David, Eugen și ceilalți devin sprijin pentru Jimmy, împărțind pasiuni comune pentru calculatoare, graffiti și experimentând primele lecții despre loialitate și curaj.",
    },
    {
      number: 3,
      title: "Familia lui Jimmy",
      description:
        "Despărțirea părinților îl rănește profund pe Jimmy, care caută refugiu în prieteni și în arta graffiti, descoperind că libertatea adevărată începe acasă.",
    },
    {
      number: 4,
      title: "De ce să ai un model în viață?",
      description:
        "Întâlnirea cu vărul Ray îl inspiră pe Jimmy să viseze mai departe, înțelegând cât contează valorile și mentorii care te susțin necondiționat.",
    },
    {
      number: 5,
      title: "Mesaje din interior",
      description:
        "Prin graffiti, Jimmy își descoperă vocea interioară, transformând zidurile gri în mesaje despre iubire, prietenie și curaj, spre a vindeca propriile răni.",
    },
    {
      number: 6,
      title: "Consecințe neașteptate",
      description:
        "Dornic să-și transmită mesajul, Jimmy pictează zidul liceului, riscă sancțiuni și ajunge să înfrunte directorul, profesori și propriile temeri.",
    },
    {
      number: 7,
      title: "Oportunitatea de aur",
      description:
        "Arta îl propulsează pe Jimmy spre o școală non-formală, unde o întâlnire neașteptată îi oferă un internship IT, deschizându-i calea spre viitor.",
    },
    {
      number: 8,
      title: "Biggest graffiti",
      description:
        "Decis să marcheze trecerea spre maturitate, Jimmy planifică un graffiti colosal pe un pod intens circulat, punându-și la bătaie curajul și prietenia.",
    },
    {
      number: 9,
      title: "NEXT LEVEL",
      description:
        "Deși prins de poliție, Jimmy scapă la limită, promovează bacalaureatul și își începe stagiul IT, lăsând graffiti-ul ilegal în urmă pentru un viitor grandios.",
    },
  ]

  return (
    <section className="container py-12 md:py-24">
      <div className="text-center space-y-4 mb-12 md:mb-16">
        <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl">Capitolele pe care le-am acoperit</h2>
        <div className="max-w-[800px] mx-auto">
          <p className="text-muted-foreground">
            Explorează călătoria lui Jimmy prin cele nouă capitole ale cărții "One Love", fiecare aducând o nouă lecție
            de viață și un pas înainte în dezvoltarea personală.
          </p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {chapters.map((chapter) => (
          <div key={chapter.number} className="p-6 bg-muted/50 rounded-lg space-y-3">
            <div className="text-muted-foreground">Capitolul {chapter.number}</div>
            <h3 className="text-xl font-bold">{chapter.title}</h3>
            <p className="text-muted-foreground">{chapter.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

