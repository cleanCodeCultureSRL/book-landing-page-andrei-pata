
import type { Metadata } from "next";
import "@/app/globals.css"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })


export const metadata: Metadata = {
  title: "One love - Andrei Pața",
  description: "Fii eroul propriei tale povești.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">{children}</div>
      </body>
    </html>
  )
}
