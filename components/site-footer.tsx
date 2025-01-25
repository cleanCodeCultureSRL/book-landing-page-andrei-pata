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
                alt="Logo"
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
            <ul className="space-y-3">
              <li>
                <Link href="/#hero-section" className="hover:text-white transition-colors">
                  Acasă
                </Link>
              </li>
              <li>
                <Link href="/#features-section" className="hover:text-white transition-colors">
                  Despre
                </Link>
              </li>
              <li>
                <Link href="/#chapters-section" className="hover:text-white transition-colors">
                  Capitole
                </Link>
              </li>
              <li>
                <Link href="/#learning-section" className="hover:text-white transition-colors">
                  Ce vei învăța?
                </Link>
              </li>
              <li>
                <Link href="/#audience-section" className="hover:text-white transition-colors">
                  Pentru cine este?
                </Link>
              </li>
              <li>
                <Link href="/#author-section" className="hover:text-white transition-colors">
                  Autor
                </Link>
              </li>
              <li>
                <Link href="/#pricing-section" className="hover:text-white transition-colors">
                  Precomandă
                </Link>
              </li>
              <li>
                <Link href="/#contact-section" className="hover:text-white transition-colors">
                  Contact
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
    </footer>
  )
}

