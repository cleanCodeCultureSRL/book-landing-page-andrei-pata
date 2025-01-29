import Link from "next/link"
import { Button } from "@/components/ui/button"
import { XCircle, Home, ShoppingCart } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function OrderFailedPage() {
  return (
    <>
      <SiteHeader
        visibleSections={{
          hero: false,
          features: false,
          chapters: false,
          learning: false,
          audience: false,
          author: false,
          pricing: false,
          contact: false,
          subscribe: false,
        }}
      />
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[rgb(162,130,167)] to-[rgb(65,103,112)]">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
          <div className="text-center">
            <XCircle className="w-16 h-16 text-red-500 mx-auto mb-6" />
            <h1 className="text-3xl font-bold mb-4">Comandă nefinalizată</h1>
            <p className="text-xl mb-8">
              Ne pare rău, dar a apărut o problemă cu comanda ta. Aceasta nu a putut fi procesată.
            </p>

            <div className="bg-gray-100 p-6 rounded-lg mb-8">
              <h2 className="text-2xl font-semibold mb-4">Posibile motive</h2>
              <ul className="list-disc list-inside text-left">
                <li>Eroare la procesarea plății</li>
                <li>Conexiune la internet întreruptă</li>
                <li>Informații de plată incorecte</li>
                <li>Problemă temporară cu sistemul nostru</li>
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-2">Ce poți face în continuare</h3>
              <ul className="list-disc list-inside text-left">
                <li>Verifică conexiunea la internet</li>
                <li>Asigură-te că informațiile de plată sunt corecte</li>
                <li>Încearcă din nou să plasezi comanda</li>
                <li>Dacă problema persistă, te rugăm să ne contactezi</li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/">
                <Button className="w-full sm:w-auto bg-[rgb(162,130,167)] text-white hover:bg-[rgb(172,140,177)]">
                  <Home className="mr-2 h-4 w-4" /> Înapoi acasă
                </Button>
              </Link>
              <Link href="/#pricing-section">
                <Button className="w-full sm:w-auto bg-[rgb(65,103,112)] text-white hover:bg-[rgb(75,113,122)]">
                  <ShoppingCart className="mr-2 h-4 w-4" /> Încearcă din nou
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <SiteFooter />
    </>
  )
}

