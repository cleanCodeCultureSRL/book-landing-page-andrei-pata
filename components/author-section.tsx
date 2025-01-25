import Image from "next/image"
import Link from "next/link"
import { Check, Facebook, Instagram, Linkedin } from "lucide-react"

export function AuthorSection() {
  const achievements = [
    "Co-fondator al Pddle, o soluție unică de închiriere a plăcilor SUP, care integrează tehnologia smart locker.",
    "Expert în coordonarea echipelor de dezvoltare și mentorat, promovând principii de cod curat și eficiență.",
    "Implicat activ în proiecte de impact, de la platforme inteligente de gestionare până la aplicații complexe web și mobile.",
  ]

  return (
    <section className="container py-12 md:py-24">
      <div className="text-center space-y-4 mb-12 md:mb-16">
        <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl">Despre autor</h2>
        <div className="max-w-[800px] mx-auto">
          <p className="text-muted-foreground">
            Descoperă povestea din spatele cărții "One Love" și află mai multe despre autorul care aduce la viață
            călătoria inspirațională a lui Jimmy.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center max-w-5xl mx-auto">
        <div className="relative">
          <div className="absolute inset-0 bg-[rgb(172,140,177)] rounded-lg transform translate-x-4 translate-y-4 -z-10" />
          <Image
            src="/author_image.jpg"
            alt="Andrei Pata"
            width={600}
            height={400}
            className="rounded-lg w-full"
          />
        </div>

        <div className="space-y-6">
          <h3 className="text-3xl font-bold">Andrei-Valentin Pata</h3>

          <p className="text-muted-foreground">
            Andrei-Valentin Pata este un lider în domeniul tehnologiei și fondatorul Clean Code Culture, o companie
            dedicată dezvoltării de soluții software personalizate, inovative și scalabile. Cu o experiență vastă în
            arhitectura software și integrarea hardware, Andrei îmbină abilitățile tehnice cu o viziune clară pentru
            crearea unor produse de înaltă calitate.
          </p>

          <p className="text-muted-foreground">
            Andrei își dedică cariera inspirării altora prin puterea tehnologiei și a inovării, punând accent pe
            colaborare, creștere personală și soluții care schimbă vieți.
          </p>

          <ul className="space-y-3">
            {achievements.map((achievement, index) => (
              <li key={index} className="flex items-center gap-2">
                <Check className="h-5 w-5 text-primary" />
                <span>{achievement}</span>
              </li>
            ))}
          </ul>

          <div className="space-y-4">
            <p className="text-muted-foreground">
              Connectează-te cu Andrei pentru a afla mai multe despre proiectele sale:
            </p>
            <div className="flex items-center gap-4">
              <Link href="https://www.facebook.com/patzaaaaa" className="text-muted-foreground hover:text-foreground">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="https://www.instagram.com/patzzzzzzzzzzzzzzz"
                className="text-muted-foreground hover:text-foreground"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/andrei-pata/"
                className="text-muted-foreground hover:text-foreground"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

