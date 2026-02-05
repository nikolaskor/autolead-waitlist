"use client"

import React from "react"

import { useState } from "react"
import { Button } from "@/app/components/ui/button"
import { Input } from "@/app/components/ui/input"
import { GlitchBackground } from "@/app/components/glitch-background"

export default function WaitlistPage() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [isHovered, setIsHovered] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsLoading(true)
    setError("")

    try {
      const response = await fetch("/api/book-demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })

      if (!response.ok) {
        throw new Error("Failed to submit")
      }

      setIsSubmitted(true)
    } catch {
      setError("Noe gikk galt. Vennligst prøv igjen.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-zinc-950">
      {/* Fullscreen Background Image with Three.js Glitch Effect */}
      <GlitchBackground isHovered={isHovered} />

      {/* Content Overlay */}
      <div className="relative z-20 min-h-screen flex flex-col justify-center px-4 py-10 sm:px-6 sm:py-12 md:p-12 lg:p-16 text-white">
        {/* Logo - Centered at Top */}
        <div className="absolute top-6 left-0 right-0 flex justify-center md:top-12 lg:top-16">
          <img src="/logo.svg" alt="Autolead Logo" className="h-8 md:h-10" />
        </div>

        {/* Header Section */}
        <header className="flex flex-col gap-6 sm:gap-10 lg:gap-12 items-center">
          {/* Title and Input */}
          <div className="max-w-md lg:max-w-2xl order-1 text-center">
            <h1 className="tracking-tight text-balance text-white drop-shadow-2xl font-serif font-thin text-5xl sm:text-6xl md:text-8xl lg:text-8xl">
              Fremtiden for AI i bilbransjen
            </h1>

            {/* Email Input Form */}
            <div
              className="mt-6 sm:mt-8 backdrop-blur-md p-2 bg-white rounded-2xl"
              style={{
                boxShadow: "rgba(14, 63, 126, 0.04) 0px 0px 0px 1px, rgba(42, 51, 69, 0.04) 0px 1px 1px -0.5px, rgba(42, 51, 70, 0.04) 0px 3px 3px -1.5px, rgba(42, 51, 70, 0.04) 0px 6px 6px -3px, rgba(14, 63, 126, 0.04) 0px 12px 12px -6px, rgba(14, 63, 126, 0.04) 0px 24px 24px -12px"
              }}
            >
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                  <div className="flex gap-2">
                    <Input
                      type="email"
                      placeholder="Skriv inn e-postadressen din"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      disabled={isLoading}
                      className="flex-1 border-none text-zinc-900 placeholder:text-zinc-400 h-12 px-4 bg-transparent rounded-xl focus-visible:ring-0 focus-visible:ring-offset-0"
                    />
                    <Button
                      type="submit"
                      disabled={isLoading}
                      className="h-12 px-6 text-white font-medium bg-black rounded-xl hover:!bg-[unset] disabled:opacity-50"
                      style={{ transition: "background 0.3s ease" }}
                      onMouseEnter={(e) => {
                        if (!isLoading) {
                          setIsHovered(true)
                          e.currentTarget.style.background = "linear-gradient(45deg, #082122, #06402b, #1a9951, #555721)"
                        }
                      }}
                      onMouseLeave={(e) => {
                        setIsHovered(false)
                        e.currentTarget.style.background = "black"
                      }}
                    >
                      {isLoading ? "Sender..." : "Book en demo"}
                    </Button>
                  </div>
                  {error && (
                    <p className="text-red-500 text-sm text-center">{error}</p>
                  )}
                </form>
              ) : (
                <div className="text-center py-3">
                  <p className="text-emerald-600 font-medium">
                    Takk! Vi kontakter deg snart.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Description */}
          <div className="max-w-xs sm:max-w-sm lg:max-w-lg text-center order-2">
            <p className="text-white/90 text-sm sm:text-[17px] leading-relaxed drop-shadow-lg lg:text-lg">
             Din digitale selger som svarer, kvalifiserer og booker møter døgnet rundt.
             Umiddelbar oppfølging, skreddersydd for norske bilforhandlere.
            </p>
          </div>
        </header>

        {/* Stats Section - Bottom */}
        <footer className="fixed bottom-0 left-0 right-0 z-30 px-4 py-6 sm:px-6 sm:py-8 md:p-12 lg:p-16">
          <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-8 lg:gap-12">
            {/* Stat 1 */}
            <div className="text-center">
              <div className="text-3xl sm:text-4xl md:text-7xl lg:text-8xl text-white drop-shadow-2xl font-extralight">
                100%
              </div>
              <div className="mt-1 sm:mt-2 text-[10px] sm:text-xs md:text-base text-white/70 tracking-wider sm:tracking-widest uppercase">
                Oppfølging
              </div>
            </div>

            {/* Stat 2 */}
            <div className="text-center">
              <div className="text-3xl sm:text-4xl md:text-7xl lg:text-8xl text-white drop-shadow-2xl font-extralight">
                24/7
              </div>
              <div className="mt-1 sm:mt-2 text-[10px] sm:text-xs md:text-base text-white/70 tracking-wider sm:tracking-widest uppercase">
                Tilgjengelig
              </div>
            </div>

            {/* Stat 3 */}
            <div className="text-center">
              <div className="text-3xl sm:text-4xl md:text-7xl lg:text-8xl text-white drop-shadow-2xl font-extralight">
                60s
              </div>
              <div className="mt-1 sm:mt-2 text-[10px] sm:text-xs md:text-base text-white/70 tracking-wider sm:tracking-widest uppercase">
                Responstid
              </div>
            </div>
          </div>
        </footer>
      </div>
    </main>
  )
}
