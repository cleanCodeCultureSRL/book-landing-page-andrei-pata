"use client"

import { useEffect, useState, useRef, Suspense } from "react"
import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { ChaptersSection } from "@/components/chapters-section"
import { LearningSection } from "@/components/learning-section"
import { TargetAudienceSection } from "@/components/target-audience-section"
import { SubscribeSection } from "@/components/subscribe-section"
import { ReviewsSection } from "@/components/reviews-section"
import { AuthorSection } from "@/components/author-section"
import { PricingSection } from "@/components/pricing-section"
import { ContactSection } from "@/components/contact-section"
import { SiteFooter } from "@/components/site-footer"
import { useSearchParams } from "next/navigation"



const Home = () => {
  const [visibleSections, setVisibleSections] = useState({
    hero: false,
    features: false,
    chapters: false,
    learning: false,
    audience: false,
    author: false,
    pricing: false,
    contact: false,
    subscribe: false,
  })

  const heroRef = useRef<HTMLDivElement>(null)
  const featuresRef = useRef<HTMLDivElement>(null)
  const chaptersRef = useRef<HTMLDivElement>(null)
  const learningRef = useRef<HTMLDivElement>(null)
  const audienceRef = useRef<HTMLDivElement>(null)
  const authorRef = useRef<HTMLDivElement>(null)
  const pricingRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)
  const subscribeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.target.id === "hero-section") {
          setVisibleSections((prev) => ({ ...prev, hero: entry.isIntersecting }))
        } else if (entry.target.id === "features-section") {
          setVisibleSections((prev) => ({ ...prev, features: entry.isIntersecting }))
        } else if (entry.target.id === "chapters-section") {
          setVisibleSections((prev) => ({ ...prev, chapters: entry.isIntersecting }))
        } else if (entry.target.id === "learning-section") {
          setVisibleSections((prev) => ({ ...prev, learning: entry.isIntersecting }))
        } else if (entry.target.id === "audience-section") {
          setVisibleSections((prev) => ({ ...prev, audience: entry.isIntersecting }))
        } else if (entry.target.id === "author-section") {
          setVisibleSections((prev) => ({ ...prev, author: entry.isIntersecting }))
        } else if (entry.target.id === "pricing-section") {
          setVisibleSections((prev) => ({ ...prev, pricing: entry.isIntersecting }))
        } else if (entry.target.id === "contact-section") {
          setVisibleSections((prev) => ({ ...prev, contact: entry.isIntersecting }))
        } else if (entry.target.id === "subscribe-section") {
          setVisibleSections((prev) => ({ ...prev, subscribe: entry.isIntersecting }))
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    if (heroRef.current) observer.observe(heroRef.current)
    if (featuresRef.current) observer.observe(featuresRef.current)
    if (chaptersRef.current) observer.observe(chaptersRef.current)
    if (learningRef.current) observer.observe(learningRef.current)
    if (audienceRef.current) observer.observe(audienceRef.current)
    if (authorRef.current) observer.observe(authorRef.current)
    if (pricingRef.current) observer.observe(pricingRef.current)
    if (contactRef.current) observer.observe(contactRef.current)
    if (subscribeRef.current) observer.observe(subscribeRef.current)

    return () => {
      if (heroRef.current) observer.unobserve(heroRef.current)
      if (featuresRef.current) observer.unobserve(featuresRef.current)
      if (chaptersRef.current) observer.unobserve(chaptersRef.current)
      if (learningRef.current) observer.unobserve(learningRef.current)
      if (audienceRef.current) observer.unobserve(audienceRef.current)
      if (authorRef.current) observer.unobserve(authorRef.current)
      if (pricingRef.current) observer.unobserve(pricingRef.current)
      if (contactRef.current) observer.unobserve(contactRef.current)
      if (subscribeRef.current) observer.unobserve(subscribeRef.current)
    }
  }, [])

  const searchParams = useSearchParams()
  useEffect(() => {
    const section = searchParams.get("section")
    if (section) {
      const element = document.getElementById(section)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
  }, [searchParams])

  return (
    <>
      <SiteHeader visibleSections={visibleSections} />
      <main>
        <div id="hero-section" ref={heroRef}>
          <HeroSection />
        </div>
        <div id="features-section" ref={featuresRef}>
          <FeaturesSection />
        </div>
        <div id="chapters-section" ref={chaptersRef}>
          <ChaptersSection />
        </div>
        <div id="learning-section" ref={learningRef}>
          <LearningSection />
        </div>
        <div id="audience-section" ref={audienceRef}>
          <TargetAudienceSection />
        </div>
        <div id="subscribe-section" ref={subscribeRef}>
          <SubscribeSection />
        </div>
        <div id="author-section" ref={authorRef}>
          <AuthorSection />
        </div>
        <div id="pricing-section" ref={pricingRef}>
          <PricingSection />
        </div>
        <div id="contact-section" ref={contactRef}>
          <ContactSection />
        </div>
      </main>
      <SiteFooter />
    </>
  )
}


export default function HomeSuspenseWrapped() {
  return (
    <Suspense fallback={null}>
      <Home />
    </Suspense>
  )
}