"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, Home, BookOpen } from "lucide-react"
import { useSearchParams } from "next/navigation"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function SuccessPage() {
  const [orderDetails, setOrderDetails] = useState<any>(null)
  const searchParams = useSearchParams()
  const sessionId = searchParams.get("session_id")

  useEffect(() => {
    if (sessionId) {
      fetchOrderDetails(sessionId)
    }
  }, [sessionId])

  const fetchOrderDetails = async (sessionId: string) => {
    try {
      const response = await fetch(`/api/order-details?session_id=${sessionId}`)
      if (!response.ok) {
        throw new Error("Failed to fetch order details")
      }
      const data = await response.json()
      setOrderDetails(data)

      // Send order emails
      await sendOrderEmails(data)
    } catch (error) {
      console.error("Error fetching order details:", error)
    }
  }

  const sendOrderEmails = async (orderData: any) => {
    try {
      const response = await fetch("/api/send-order-emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      })

      if (!response.ok) {
        throw new Error("Failed to log order details")
      }
    } catch (error) {
      console.error("Error logging order details:", error)
    }
  }

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
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
            <h1 className="text-3xl font-bold mb-4">Comandă finalizată cu succes!</h1>
            <p className="text-xl mb-8">Îți mulțumim pentru precomandă.</p>

            {orderDetails && (
              <div className="bg-gray-100 p-6 rounded-lg mb-8">
                <h2 className="text-2xl font-semibold mb-4">Detalii comandă</h2>
                <p className="mb-2">
                  <strong>Număr comandă:</strong> {orderDetails.orderId}
                </p>
                <p className="mb-2">
                  <strong>Produs:</strong> {orderDetails.productName}
                </p>
                <p>
                  <strong>Tip precomandă:</strong> {orderDetails.packageType}
                </p>
              </div>
            )}

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-2">Pașii următori</h3>
              <ul className="list-disc list-inside text-left">
                <li>Vei primi un email de confirmare cu detaliile comenzii</li>
                <li>Te vom ține la curent cu statusul cărții și data estimată de livrare</li>
                <li>Pregătește-te să primești cartea și să începi o călătorie inspirațională!</li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/">
                <Button className="w-full sm:w-auto bg-[rgb(162,130,167)] text-white hover:bg-[rgb(172,140,177)]">
                  <Home className="mr-2 h-4 w-4" /> Înapoi acasă
                </Button>
              </Link>
              <Link href="/#author-section">
                <Button className="w-full sm:w-auto bg-[rgb(65,103,112)] text-white hover:bg-[rgb(75,113,122)]">
                  <BookOpen className="mr-2 h-4 w-4" /> Despre autor
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

