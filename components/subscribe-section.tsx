"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function SubscribeSection() {
  const [email, setEmail] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Handle subscription logic here
    console.log("Abonare email:", email)
    setEmail("")
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
          >
            Abonează-te →
          </Button>
        </form>
      </div>
    </section>
  )
}

