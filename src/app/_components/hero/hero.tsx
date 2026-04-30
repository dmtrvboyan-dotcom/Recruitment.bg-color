"use client"

import { useCallback, memo } from "react"
import { Button } from "@/components/ui/button"
import { scrollToSection } from "@/lib/utils/scroll"
import { useAnimatedCounter } from "@/lib/hooks/use-animated-counter"
import { ArrowRight, ChevronDown } from "lucide-react"

const AnimatedCounter = memo(function AnimatedCounter({
  value,
  label,
}: {
  value: string
  label: string
}) {
  const { ref, displayValue } = useAnimatedCounter(value)

  return (
    <div ref={ref} className="flex flex-col items-center text-center">
      <p className="text-3xl lg:text-4xl font-bold text-brand-navy tabular-nums tracking-tight mb-1">
        {displayValue}
      </p>
      <p className="text-xs font-medium text-brand-teal uppercase tracking-widest leading-snug max-w-[120px] text-center">
        {label}
      </p>
    </div>
  )
})

export const Hero = memo(function Hero() {
  const handleNavigate = useCallback((href: string) => {
    scrollToSection(href, { highlightDuration: 0 })
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center text-center pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-transparent">

      <div className="absolute top-[88px] left-0 right-0 h-px bg-brand-navy/8 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-10 xl:px-12 w-full flex flex-col items-center">

        {/* Eyebrow */}
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-brand-coral mb-6 animate-fade-in-up text-center">
          IT Recruitment · Europe
        </p>

        {/* Headline */}
        <h1 className="text-[clamp(2.4rem,5.5vw,4.5rem)] font-bold text-brand-navy leading-[1.08] tracking-tight mb-7 animate-fade-in-up delay-100 text-center">
          IT Recruitment Agency for
          <br />
          <span className="text-brand-blue">Tech Talent</span>
        </h1>

        {/* Body */}
        <p className="text-base lg:text-lg text-brand-navy/55 max-w-xl leading-relaxed mb-10 animate-fade-in-up delay-200 text-center">
          We connect companies with IT professionals through recruitment and talent acquisition services.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-16 animate-fade-in-up delay-300">
          <Button
            onClick={() => handleNavigate("#contact")}
            className="w-full sm:w-auto bg-brand-coral hover:bg-brand-coral-hover text-white px-8 py-6 text-sm font-semibold tracking-widest uppercase cursor-pointer transition-colors duration-200 group rounded-3xl"
          >
            <span className="flex items-center gap-2.5">
              Start Hiring
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </Button>

          <Button
            onClick={() => handleNavigate("#jobs")}
            variant="outline"
            className="w-full sm:w-auto bg-transparent hover:bg-brand-navy text-brand-navy hover:text-white rounded-3xl px-8 py-6 text-sm font-semibold tracking-widest uppercase border-2 border-brand-navy cursor-pointer transition-colors duration-200"
          >
            Find a Job
          </Button>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-x-10 gap-y-6 animate-fade-in-up delay-[400ms]">
          <AnimatedCounter value="650+" label="Successful IT Hirings" />
          <AnimatedCounter value="12" label="Senior Tech Recruiters" />
          <AnimatedCounter value="100%" label="All Tech Stacks" />
          <AnimatedCounter value="1" label="In-House Smart.R ATS" />
        </div>

        {/* Scroll */}
        <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-1">
          <button
            onClick={() => handleNavigate("#services")}
            className="text-brand-navy/30 hover:text-brand-coral transition-colors cursor-pointer"
          >
            <ChevronDown size={22} strokeWidth={1.5} className="animate-bounce" />
          </button>
        </div>

      </div>
    </section>
  )
})