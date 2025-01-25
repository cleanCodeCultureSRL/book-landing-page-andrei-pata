"use client"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Linkedin, Menu, X } from "lucide-react"

interface SiteHeaderProps {
  visibleSections: {
    hero: boolean
    features: boolean
    chapters: boolean
    learning: boolean
    audience: boolean
    author: boolean
    pricing: boolean
    contact: boolean
    subscribe: boolean
  }
}

export function SiteHeader({ visibleSections }: SiteHeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setMobileMenuOpen(false)
  }

  const navItems = [
    { href: "hero-section", label: "Acasă" },
    { href: "features-section", label: "Despre" },
    { href: "chapters-section", label: "Capitole" },
    { href: "learning-section", label: "Ce vei învăța?" },
    { href: "author-section", label: "Autor" },
    { href: "pricing-section", label: "Precomandă" },
    { href: "contact-section", label: "Contact" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link
          href="/"
          className="flex items-center"
          onClick={(e) => {
            e.preventDefault()
            scrollToTop()
          }}
        >
          <Image
            src="/logo.png"
            alt="Logo"
            width={150}
            height={50}
            className="h-12 w-auto"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navItems.map(({ href, label }) => (
            <Link
              key={href}
              href={`#${href}`}
              className={`text-sm font-medium group ${visibleSections[href.replace("-section", "") as keyof typeof visibleSections] ? "active" : ""}`}
              onClick={(e) => {
                e.preventDefault()
                scrollToSection(href)
              }}
            >
              <span className="relative">
                {label}
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#6366f1] scale-x-0 group-hover:scale-x-100 transition-transform duration-200 group-[.active]:scale-x-100" />
              </span>
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link href="https://www.facebook.com/patzaaaaa" className="text-muted-foreground hover:text-foreground">
            <Facebook className="h-5 w-5" />
            <span className="sr-only">Facebook</span>
          </Link>
          <Link
            href="https://www.instagram.com/patzzzzzzzzzzzzzzz"
            className="text-muted-foreground hover:text-foreground"
          >
            <Instagram className="h-5 w-5" />
            <span className="sr-only">Instagram</span>
          </Link>
          <Link href="https://www.linkedin.com/in/andrei-pata/" className="text-muted-foreground hover:text-foreground">
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </Link>
        </div>

        <button
          className="md:hidden text-muted-foreground hover:text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          <span className="sr-only">Toggle menu</span>
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden">
          <nav className="flex flex-col items-center gap-4 py-4">
            {navItems.map(({ href, label }) => (
              <Link
                key={href}
                href={`#${href}`}
                className={`text-sm font-medium ${visibleSections[href.replace("-section", "") as keyof typeof visibleSections] ? "text-primary" : ""}`}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(href)
                }}
              >
                {label}
              </Link>
            ))}
          </nav>
          <div className="flex justify-center gap-4 py-4 border-t">
            <Link href="https://www.facebook.com/patzaaaaa" className="text-muted-foreground hover:text-foreground">
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link
              href="https://www.instagram.com/patzzzzzzzzzzzzzzz"
              className="text-muted-foreground hover:text-foreground"
            >
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/andrei-pata/"
              className="text-muted-foreground hover:text-foreground"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

