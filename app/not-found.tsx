import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BookOpen, Home } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[rgb(162,130,167)] to-[rgb(65,103,112)]">
      <div className="text-center px-4">
        <h1 className="text-6xl font-bold text-white mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-white mb-4">Pagină negăsită</h2>
        <p className="text-xl text-gray-200 mb-8">Oops! Se pare că această pagină s-a rătăcit în lumea poveștilor.</p>
        <div className="space-y-4">
          <p className="text-lg text-gray-200">Dar nu-ți face griji, aventura continuă!</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/">
              <Button className="w-full sm:w-auto bg-white text-[rgb(162,130,167)] hover:bg-gray-100">
                <Home className="mr-2 h-4 w-4" /> Înapoi acasă
              </Button>
            </Link>
            <Link href="/#pricing-section">
              <Button className="w-full sm:w-auto bg-[rgb(65,103,112)] text-white hover:bg-[rgb(75,113,122)]">
                <BookOpen className="mr-2 h-4 w-4" /> Comandă cartea
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

