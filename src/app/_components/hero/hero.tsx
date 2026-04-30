"use client"

import { useCallback, memo } from "react"
import { Button } from "@/components/ui/button"
import { scrollToSection } from "@/lib/utils/scroll"
import { TRUST_METRICS } from "@/lib/constants/metrics"
import { useAnimatedCounter } from "@/lib/hooks/use-animated-counter"

const AnimatedCounter = memo(function AnimatedCounter({
  value,
  label,
  description,
}: {
  value: string
  label: string
  description: string
}) {
  const { ref, displayValue } = useAnimatedCounter(value)

  return (
    <div ref={ref} className="text-center transition-all lg:p-5 md:p-5 sm:p-5 p-0 hover:bg-[var(--color-bg-secondary)] rounded-3xl text-[var(--color-text-secondary)] hover:text-[var(--color-accent-primary)]">
      <p className="lg:text-4xl md:text-3xl sm:text-2xl text-xl font-bold mb-3 tracking-tighter tabular-nums">
        {displayValue}
      </p>
      <p className="text-sm font-semibold text-[var(--color-muted-foreground)] mb-1">{label}</p>
      {description && (
        <p className="text-sm text-[var(--color-muted-foreground)] max-w-[260px] mx-auto">{description}</p>
      )}
    </div>
  )
})

export const Hero = memo(function Hero() {
  const handleNavigate = useCallback((href: string) => {
    scrollToSection(href, { highlightDuration: 0 })
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden mt-20 bg-gradient-to-b from-[var(--color-bg-primary)] to-[var(--color-bg-secondary)]">
      <div
        className="absolute inset-0 bg-[size:4rem_4rem]"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto text-center">
          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-[500] font-poppins text-[var(--color-text-primary)] leading-[1.1] text-balance mb-6">
            IT Recruitment Agency cloning{" "}
            <span className="text-[var(--color-accent-primary)]">Tech Roles</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-[var(--color-muted-foreground)] max-w-2xl mx-auto mb-12 text-pretty">
            We connect companies with IT professionals through recruitment and talent acquisition services.
          </p>

          {/* === Animated Trust Metrics === */}


          {/* CTAs */}
          <div className="flex flex-row items-center justify-center gap-4">
            <Button
              onClick={() => handleNavigate("#services")}
              className="bg-[var(--color-accent-primary)] lg:w-[150px] w-[110px] lg:text-md text-sm text-white hover:bg-[var(--color-accent-primary)]/90 rounded-lg px-8 py-6 cursor-pointer shadow-md hover:shadow-lg transition-all"
            >
              Learn More
            </Button>
            <Button
              onClick={() => handleNavigate("#jobs")}
              variant="outline"
              className="lg:w-[150px] w-[110px] text-sm text-[var(--color-text-primary)] hover:bg-[var(--color-accent-primary)] hover:text-white rounded-lg px-8 py-6 border-2 border-[var(--color-border)] cursor-pointer transition-all"
            >
              Find a job
            </Button>
          </div>

          <div className="bg-white/60 p-12 -mt-7 rounded-3xl shadow-sm border border-[var(--color-border)]">
            {/* <p className="text-md font-medium tracking-wider text-[#085689] uppercase mb-6">
              Our Track Record
            </p> */}

            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 ">
              {TRUST_METRICS.map((metric, idx) => (
                <AnimatedCounter
                  key={idx}
                  value={metric.value}
                  label={metric.label}
                  description={metric.description}
                />
              ))}
            </div>
          </div>

          {/* <button
            className="mt-16 animate-bounce text-foreground/60 hover:text-primary transition-colors duration-200"
            aria-label="Scroll down"
          >
            <ChevronDown size={32} />
          </button> */}
        </div>
      </div>
    </section>
  )
})
