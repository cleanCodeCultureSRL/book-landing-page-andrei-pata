import Link from "next/link"
import { Button } from "@/components/ui/button"
import { XCircle } from "lucide-react"

export default function OrderFailedPage() {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <XCircle className="w-16 h-16 text-red-500 mx-auto mb-6" />
      <h1 className="text-4xl font-bold mb-4">Comandă nefinalizată</h1>
      <p className="text-xl mb-8">
        Ne pare rău, dar a apărut o problemă cu comanda ta. Aceasta nu a putut fi procesată.
      </p>

      <div className="bg-gray-100 p-6 rounded-lg mb-8 max-w-md mx-auto">
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
        <ul className="list-disc list-inside text-left max-w-md mx-auto">
          <li>Verifică conexiunea la internet</li>
          <li>Asigură-te că informațiile de plată sunt corecte</li>
          <li>Încearcă din nou să plasezi comanda</li>
          <li>Dacă problema persistă, te rugăm să ne contactezi</li>
        </ul>
      </div>

      <div className="space-x-4">
        <Link href="/">
          <Button className="bg-[rgb(162,130,167)] hover:bg-[rgb(172,140,177)] text-white">Înapoi la pagina principală</Button>
        </Link>
      </div>
    </div>
  )
}

