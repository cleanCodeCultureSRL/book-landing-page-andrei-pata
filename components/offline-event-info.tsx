import { AlertCircle } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export function OfflineEventInfo() {
  return (
    <Alert variant="info" className="my-4">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Informație importantă despre disponibilitatea cărții</AlertTitle>
      <AlertDescription>
        <p>În prezent, cartea "One Love" este disponibilă exclusiv la evenimentul offline:</p>
        <ul className="list-disc list-inside mt-2">
          <li>8 Februarie - TransformNation Chișinău</li>
          {/* <li>15 Februarie - Evenimentul TransformNation în București</li> */}
        </ul>
        {/* <p className="mt-2">
          Vă mulțumim pentru înțelegere și vă așteptăm cu drag la aceste evenimente pentru a obține cartea!
        </p> */}
      </AlertDescription>
    </Alert>
  )
}

