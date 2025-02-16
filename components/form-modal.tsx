import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { useRouter } from "next/navigation"
import { loadStripe } from "@stripe/stripe-js"

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

interface FormModalProps {
  isOpen: boolean
  onClose: () => void
  selectedPlan: string
}

export function FormModal({ isOpen, onClose, selectedPlan }: FormModalProps) {
  const router = useRouter()
  const [formData, setFormData] = useState({
    packageType: "Comandă cartea – preț întreg (50RON cu TVA)",
    quantity: "1",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
  })
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setFormData((prevData) => ({ ...prevData, packageType: selectedPlan }))
  }, [selectedPlan])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string) => (value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const { sessionId } = await response.json()
      const stripe = await stripePromise

      if (stripe) {
        const { error } = await stripe.redirectToCheckout({ sessionId })
        if (error) {
          console.error("Stripe redirect error:", error)
          router.push("/order-failed")
        }
      }
    } catch (error) {
      console.error("Error creating checkout session:", error)
      router.push("/order-failed")
    } finally {
      setIsLoading(false)
      onClose()
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-[95%] sm:max-w-[425px] max-h-[85vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Comandă cartea</DialogTitle>
          <DialogDescription>Completează formularul pentru a finaliza precomanda ta.</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="packageType">Tipul pachetului</Label>
            <Select name="packageType" value={formData.packageType} onValueChange={handleSelectChange("packageType")}>
              <SelectTrigger>
                <SelectValue placeholder="Selectează tipul pachetului" />
              </SelectTrigger>
              <SelectContent>
                {/* <SelectItem value="Sponsorizează-mă în scrierea cărții (50RON)">Sponsorizare (50RON)</SelectItem> */}
                {/* <SelectItem value="Comandă cartea – reducere specială (39RON cu TVA)">Comandă la preț redus (39RON cu TVA)</SelectItem> */}
                <SelectItem value="Comandă cartea – preț întreg (50RON cu TVA)">Comandă la preț întreg (50RON cu TVA)</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="quantity">Număr de cărți</Label>
            <Select name="quantity" value={formData.quantity} onValueChange={handleSelectChange("quantity")}>
              <SelectTrigger>
                <SelectValue placeholder="Selectează numărul de cărți" />
              </SelectTrigger>
              <SelectContent>
                {[...Array(10)].map((_, i) => (
                  <SelectItem key={i} value={(i + 1).toString()}>
                    {i + 1}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">Nume</Label>
              <Input id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Prenume</Label>
              <Input id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Adresă de email</Label>
            <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Număr de telefon</Label>
            <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="address">Adresă completă de livrare (inclusiv localitatea și județul) </Label>
            <Textarea id="address" name="address" value={formData.address} onChange={handleChange} required />
          </div>
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Se procesează..." : "Trimite comanda"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}

