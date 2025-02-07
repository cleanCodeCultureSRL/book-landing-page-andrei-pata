import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CuvantInainte } from "@/components/cuvant-inainte"

export default function CuvantInaintePage() {
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
      <main className="container mx-auto py-12 px-4">
        <CuvantInainte />
      </main>
      <SiteFooter />
    </>
  )
}

