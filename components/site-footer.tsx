import Link from "next/link"
import Image from "next/image"

export function SiteFooter() {
  return (
    <footer className="bg-[#14141b] text-gray-300">
      <div className="container py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src="/logo.png"
                alt="Logo SpaceZone"
                width={150}
                height={50}
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-gray-400 leading-relaxed">
              "One Love" este mai mult decât o carte - este o călătorie inspirațională care te învață să-ți urmezi
              visurile, să depășești obstacolele și să descoperi puterea prieteniei și a curajului în viața ta.
            </p>
          </div>

          {/* Sections Column */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold mb-4">Link-uri utile</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/terms" className="hover:text-white transition-colors">
                  Termeni și condiții
                </Link>
              </li>
              <li>
                <Link href="/politica-de-retur" className="hover:text-white transition-colors">
                  Politica de retur
                </Link>
              </li>
              <li>
                <Link href="/politica-de-prelucrare-a-datelor-personale" className="hover:text-white transition-colors">
                  Politica de prelucrare a datelor personale
                </Link>
              </li>
              <li>
                <Link href="/politica-de-livrare" className="hover:text-white transition-colors">
                  Politica de livrare
                </Link>
              </li>
              <li>
                <Link href="/politica-de-cookies" className="hover:text-white transition-colors">
                  Politica de cookies
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="space-y-4">
            <Link
              href="mailto:andreipatza@gmail.com"
              className="block text-white hover:text-gray-300 underline underline-offset-4"
            >
              andreipatza@gmail.com
            </Link>
            <div className="space-y-2">
              <p className="block text-white">Editura Createrra</p>
              <p className="block text-white">București, România</p>
            </div>
            <p className="block text-white">Telefon: +40 726 838 863</p>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="container py-6">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Drepturi de autor rezervate Andrei-Valentin Pața. Publicat de Editura
            Createrra.
          </p>
        </div>
      </div>
      <div className="container py-4 border-t border-gray-800">
        <div className="flex flex-wrap justify-center gap-4 items-center">
          <Link href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer">
            <Image
              src="/anpc-sol.png"
              alt="Soluționarea online a litigiilor"
              width={300}
              height={50}
              className="h-auto"
            />
          </Link>
          <Link href="https://anpc.ro/ce-este-sal/" target="_blank" rel="noopener noreferrer">
            <Image
              src="/anpc-sal.webp"
              alt="ANPC - Soluționarea alternativă a litigiilor"
              width={300}
              height={50}
              className="h-auto"
            />
          </Link>
        </div>
      </div>
    </footer>
  )
}

