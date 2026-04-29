"use client"
import Link from "next/link"
import { useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { ChevronLeft, ChevronRight, Plus, X } from "lucide-react"
import { showcaseData } from "./data";
import { Button } from "@/components/ui/button"


const items = showcaseData.items

export function ShowcaseSection() {
  const [activeIdx, setActiveIdx] = useState<number>(-1)
  const [currentBg, setCurrentBg] = useState<number>(0)

  function handleItemClick(i: number) {
    if (i === activeIdx) {
      setActiveIdx(-1)
      return
    }
    setActiveIdx(i)
    setCurrentBg(i)
  }

  function handleClose() {
    setActiveIdx(-1)
  }

  function navigateUp() {
    const newIdx = currentBg > 0 ? currentBg - 1 : items.length - 1
    setCurrentBg(newIdx)
    setActiveIdx(newIdx)
  }

  function navigateDown() {
    const newIdx = currentBg < items.length - 1 ? currentBg + 1 : 0
    setCurrentBg(newIdx)
    setActiveIdx(newIdx)
  }

  return (
    <section className="w-full  bg-gradient-to-b from-white to-[#ededed] pt-25 pb-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 text-md font-bold text-[#ff9204] uppercase tracking-[0.2em] mb-5">
            <span className="block w-6 h-px bg-[#000]/40" />
            {showcaseData.tagline}
            <span className="block w-6 h-px bg-[#000]/40" />
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-black mb-4 text-balance">
            {showcaseData.title}
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto text-pretty">
            {showcaseData.description}
          </p>
        </div>


        {/* Desktop Layout — inline pill expansion (pushes others down) */}
        <div className="hidden md:block relative w-full overflow-hidden rounded-3xl aspect-16/9 bg-[#4e4f5e0c]">
          {/* Background Images */}
          {items.map((item, i) => (
            <div
              key={item.id}
              className={cn(
                "absolute inset-0 transition-opacity duration-700 ease-in-out",
                currentBg === i ? "opacity-100" : "opacity-0",
              )}
            >
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.label}
                fill
                className="object-cover"
                priority={i === 0}
                sizes="(max-width: 1152px) 100vw, 1152px"
              />
            </div>
          ))}

          {/* Close button */}
          <button
            onClick={handleClose}
            className={cn(
              "absolute top-6 right-6 z-20 w-10 h-10 rounded-full bg-white/90  backdrop-blur-sm flex items-center justify-center  hover:bg-white transition-all shadow-lg",
              activeIdx >= 0 ? "opacity-100" : "opacity-0 pointer-events-none",
            )}
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Pills column */}
          <div className="absolute inset-y-0 left-0 z-10 flex items-center px-8 md:px-12 lg:px-16">
            <div className="flex flex-col gap-2 w-full max-w-[320px]">
              {items.map((item, i) => {
                const isActive = activeIdx === i
                return (
                  <div key={item.id} className="relative ">
                    {/* Collapsed pill */}
                    <button
                      onClick={() => handleItemClick(i)}
                      aria-expanded={isActive}
                      className={cn(
                        "flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-white/85 backdrop-blur-md hover:bg-white transition-all duration-300 ease-out cursor-pointer",
                        isActive
                          ? "opacity-0 scale-95 max-h-0 py-0 pointer-events-none overflow-hidden"
                          : "opacity-100 scale-100 max-h-12",
                      )}
                    >
                      <Plus
                        className="w-4 h-4 text-[#ff9204] flex-shrink-0"
                        strokeWidth={2}
                      />
                      <span className="text-sm font-medium text-gray-800 whitespace-nowrap">
                        {item.label}
                      </span>
                    </button>

                    {/* Expanded content card (inline, pushes others down) */}
                    <div
                      className={cn(
                        "transition-all duration-300 ease-out overflow-hidden",
                        isActive
                          ? "opacity-100 h-auto scale-100"
                          : "opacity-0 max-h-0 scale-95 pointer-events-none",
                      )}
                    >
                      <div className="bg-white/50 backdrop-blur-md rounded-2xl p-4">
                        <p className="text-sm leading-relaxed text-gray-800">
                          <strong className="font-semibold text-gray-900">{item.label}.</strong>{" "}
                          {item.content}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Mobile Layout — bottom pills row with horizontal scroll */}
        <div className="md:hidden relative mx-4 h-screen max-h-[700px]  overflow-hidden rounded-2xl">
          {items.map((item, i) => (
            <div
              key={item.id}
              className={cn(
                "absolute inset-0 transition-opacity duration-700 ease-in-out",
                currentBg === i ? "opacity-100" : "opacity-0",
              )}
            >
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.label}
                fill
                className="object-cover object-[65%_top]"
                priority={i === 0}
                sizes="100vw"
              />
            </div>
          ))}

          {/* Dark gradient overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />

          {/* Close button */}
          <button
            onClick={handleClose}
            className={cn(
              "absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-all",
              activeIdx >= 0 ? "opacity-100" : "opacity-0 pointer-events-none",
            )}
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Navigation arrows */}
          <button
            onClick={navigateUp}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={navigateDown}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
            aria-label="Next"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          {/* Bottom content area */}
          <div className="absolute bottom-0 left-0 right-0 z-10 p-4 pb-6">
            {/* Expanded content card for mobile */}
            <div
              className={cn(
                "mb-4 transition-all duration-300 ease-out overflow-hidden",
                activeIdx >= 0 ? "max-h-40 opacity-100" : "max-h-0 opacity-0",
              )}
            >
              {activeIdx >= 0 && (
                <div className="bg-white/95 backdrop-blur-md rounded-xl p-4 shadow-xl">
                  <p className="text-sm leading-relaxed text-gray-700">
                    <strong className="font-semibold text-gray-900">
                      {items[activeIdx].label}.
                    </strong>{" "}
                    {items[activeIdx].content}
                  </p>
                </div>
              )}
            </div>

            {/* Pills row */}
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
              {items.map((item, i) => (
                <button
                  key={item.id}
                  onClick={() => handleItemClick(i)}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-200 whitespace-nowrap flex-shrink-0 backdrop-blur-md",
                    activeIdx === i ? "bg-white/95 shadow-md" : "bg-white/20 hover:bg-white/30",
                  )}
                >
                  <Plus
                    className={cn(
                      "w-3.5 h-3.5 flex-shrink-0 transition-colors",
                      activeIdx === i ? "text-gray-600" : "text-[#ff9204]",
                    )}
                  />
                  <span
                    className={cn(
                      "text-xs font-medium transition-colors",
                      activeIdx === i ? "text-gray-800" : "text-white",
                    )}
                  >
                    {item.label}
                  </span>
                </button>
              ))}
            </div>


          </div>
        </div>

        <div className="flex justify-center mt-20 px-6 -mb-10">
          <Link href={showcaseData.ctaButton.href}>
            <Button
              variant="outline"
              className="bg-[#085689] text-white hover:bg-[#78B6D9] hover:border-slate-400 rounded-xl px-10 py-6 text-base font-medium transition-all duration-300 cursor-pointer"
            >
              {showcaseData.ctaButton.text}
            </Button>
          </Link>
        </div>

      </div>
    </section>
  )
}
