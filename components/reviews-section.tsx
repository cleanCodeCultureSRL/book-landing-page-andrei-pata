"use client"

import { useState } from "react"
import Image from "next/image"
import { Star } from "lucide-react"

export function ReviewsSection() {
  const [activeSlide, setActiveSlide] = useState(0)

  const reviews = [
    {
      rating: 5,
      title: "Foarte eficient!",
      text: "Sunt suficient de creativi. Foarte creativi și puternici. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      author: "Ion Popescu",
      role: "Dezvoltator",
      image: "/placeholder.svg",
    },
    {
      rating: 5,
      title: "Foarte eficient!",
      text: "Sunt suficient de creativi. Foarte creativi și puternici. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      author: "Maria Ionescu",
      role: "Dezvoltator",
      image: "/placeholder.svg",
    },
    {
      rating: 5,
      title: "Foarte eficient!",
      text: "Sunt suficient de creativi. Foarte creativi și puternici. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      author: "Andrei Popa",
      role: "Dezvoltator",
      image: "/placeholder.svg",
    },
  ]

  return (
    <section className="bg-gray-50 py-12 md:py-24">
      <div className="container">
        <div className="text-center space-y-4 mb-12 md:mb-16">
          <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl">Recenzii de la cititori fericiți</h2>
          <div className="max-w-[800px] mx-auto">
            <p className="text-muted-foreground">
              Această carte se ocupă de crearea tipografiei și este esențială pentru profesioniștii care lucrează în mod
              regulat pentru clienți.
            </p>
          </div>
        </div>

        <div className="relative max-w-[800px] mx-auto">
          <div className="flex overflow-hidden">
            {reviews.map((review, index) => (
              <div
                key={index}
                className={`w-full flex-shrink-0 transition-transform duration-300 ease-in-out transform ${
                  index === activeSlide ? "translate-x-0" : "translate-x-full"
                }`}
                style={{ transform: `translateX(-${activeSlide * 100}%)` }}
              >
                <div className={`mx-4 p-8 rounded-lg ${index === 1 ? "bg-white border" : ""}`}>
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{review.title}</h3>
                  <p className="text-muted-foreground mb-6">{review.text}</p>
                  <div className="flex items-center gap-3">
                    <Image
                      src={review.image || "/placeholder.svg"}
                      alt={review.author}
                      width={48}
                      height={48}
                      className="rounded-full"
                    />
                    <div>
                      <div className="font-semibold">{review.author}</div>
                      <div className="text-muted-foreground text-sm">{review.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === activeSlide ? "bg-primary" : "bg-gray-300"
                }`}
                aria-label={`Mergi la slide-ul ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

