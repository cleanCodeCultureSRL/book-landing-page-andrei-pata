"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"
import { useToast } from "@/components/ui/use-toast"
import { BackgroundWords } from "./background-words"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [acceptTerms, setAcceptTerms] = useState(false)
  const [isEmailValid, setIsEmailValid] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        toast({
          title: "Mesaj trimis cu succes!",
          description: "Vă mulțumim pentru mesaj. Vă vom contacta în curând.",
        })
        setFormData({ name: "", email: "", message: "" })
        setAcceptTerms(false)
      } else {
        throw new Error("Failed to send email")
      }
    } catch (error) {
      console.error("Error:", error)
      toast({
        title: "Eroare",
        description: "A apărut o eroare la trimiterea mesajului. Vă rugăm să încercați din nou.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <section className="py-12 px-6 md:px-6 md:py-24 relative overflow-hidden">
      <BackgroundWords />
      <div className="text-center space-y-4 mb-12 md:mb-16">
        <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl">Contactează autorul</h2>
        <div className="max-w-[800px] mx-auto">
          <p className="text-muted-foreground">
            Această carte se ocupă de crearea tipografiei și este esențială pentru profesioniștii care lucrează în mod
            regulat pentru clienți.
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="max-w-[800px] mx-auto space-y-6 z-10">
        <div className="grid gap-4 md:grid-cols-2">
          <Input
            type="text"
            placeholder="Introduceți numele dvs."
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="h-12 text-base bg-gray-50"
          />
          <Input
            type="email"
            placeholder="Introduceți adresa dvs. de email"
            name="email"
            value={formData.email}
            onChange={(e) => {
              handleChange(e)
              setIsEmailValid(e.target.validity.valid)
            }}
            required
            className="h-12 text-base bg-gray-50"
          />
        </div>

        <Textarea
          placeholder="Mesajul dvs."
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          className="min-h-[200px] bg-gray-50 text-base"
        />

        <div className="flex items-center space-x-2 mb-4">
          <Checkbox id="terms" checked={acceptTerms} onCheckedChange={(checked) => setAcceptTerms(checked === true)}
          />
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Accept{" "}
            <Link href="/termeni-si-conditii" className="text-primary hover:underline text-blue-500">
              termenii și condițiile
            </Link>{" "}
            și{" "}
            <Link href="/politica-de-prelucrare-a-datelor-personale" className="text-primary hover:underline text-blue-500">
              politica de prelucrare a datelor personale.
            </Link>
          </label>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground"></p>
          <Button
            type="submit"
            size="lg"
            className="bg-[rgb(162,130,167)] hover:bg-[rgb(172,140,177)] text-white"
            disabled={!acceptTerms || !isEmailValid || isLoading}
          >
            {isLoading ? "Se trimite..." : "Trimite mesaj"}
          </Button>
        </div>
      </form>
    </section>
  )
}

