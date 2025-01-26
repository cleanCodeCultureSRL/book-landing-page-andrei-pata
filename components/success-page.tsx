
"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"
import { useSearchParams } from "next/navigation"

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
        const errorData = await response.json()
        throw new Error(`Failed to send order emails: ${JSON.stringify(errorData)}`)
      }
    } catch (error) {
      const err = error as Error;
      console.error("Error sending order emails:", err)
      console.error("Error details:", err.message)

    }
  }

  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
      <h1 className="text-4xl font-bold mb-4">Comandă finalizată cu succes!</h1>
      <p className="text-xl mb-8">
        Îți mulțumim pentru precomandă. Vei primi în curând un email cu detaliile comenzii.
      </p>

      {orderDetails && (
        <div className="bg-gray-100 p-6 rounded-lg mb-8 max-w-md mx-auto">
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
        <ul className="list-disc list-inside text-left max-w-md mx-auto">
          <li>Vei primi un email de confirmare cu detaliile comenzii</li>
          <li>Te vom ține la curent cu statusul cărții și data estimată de livrare</li>
          <li>Pregătește-te să primești cartea și să începi o călătorie inspirațională!</li>
        </ul>
      </div>

      <Link href="/">
        <Button className="bg-[rgb(162,130,167)] hover:bg-[rgb(172,140,177)] text-white">
          Înapoi la pagina principală
        </Button>
      </Link>
    </div>
  )
}

