import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CuvantDeIncheiere } from "@/components/cuvant-de-incheiere"

export default function CuvantDeIncheierePage() {
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
        <CuvantDeIncheiere />
      </main>
      <SiteFooter />
    </>
  )
}

