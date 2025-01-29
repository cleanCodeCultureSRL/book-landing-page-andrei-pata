"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast"

export function SubscribeSection() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })

      if (response.ok) {
        toast({
          title: "Abonare reușită!",
          description: "Veți primi în curând un email cu un capitol gratuit.",
        })
        setEmail("")
      } else {
        throw new Error("Failed to subscribe")
      }
    } catch (error) {
      console.error("Error:", error)
      toast({
        title: "Eroare",
        description: "A apărut o eroare la abonare. Vă rugăm să încercați din nou.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section className="bg-[rgb(65,103,112)] py-12 md:py-24">
      <div className="container max-w-[800px] mx-auto text-center space-y-8">
        <div className="space-y-4">
          <p className="text-gray-200">Abonează-te acum</p>
          <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl text-white">
            Primește un capitol gratuit din această carte
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="email"
            placeholder="Adresa de Email"
            className="h-12 text-lg bg-white"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Button
            type="submit"
            className="w-full h-12 text-lg bg-[rgb(162,130,167)] hover:bg-[rgb(172,140,177)] text-white"
            disabled={isLoading}
          >
            {isLoading ? "Se procesează..." : "Abonează-te →"}
          </Button>
        </form>
      </div>
    </section>
  )
}

