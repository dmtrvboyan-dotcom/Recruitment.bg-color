"use client"

import { memo, useCallback } from "react"
import { X, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { type Service } from "@/lib/constants/services"
import { scrollToSection } from "@/lib/utils/scroll"

export const DesktopPanel = memo(function DesktopPanel({
  service,
  onClose,
}: {
  service: Service | null
  onClose: () => void
}) {
  const handleNavigate = useCallback((href: string) => {
    scrollToSection(href)
  }, [])

  return (
    <div
      className={`fixed inset-0 z-50 flex items-start justify-end transition-all duration-300 ${
        service ? "visible" : "invisible"
      }`}
    >
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-[var(--color-bg-primary)]/90 backdrop-blur-md transition-opacity duration-300 ${
          service ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      />

      {/* Sliding panel */}
      <div
        className={`relative h-full w-full md:w-[50%] bg-[var(--color-bg-secondary)] shadow-xl transform transition-transform duration-500 ease-out overflow-y-auto ${
          service ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {service && (
          <div className="p-6 md:p-8">
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full bg-[var(--color-accent-primary)] hover:bg-[var(--color-accent-primary)]/90 transition-colors"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Header */}
            <div className="w-20 h-20 rounded-2xl bg-[var(--color-accent-primary)]/10 flex items-center justify-center mb-8">
              <service.icon className="w-12 h-12 text-[var(--color-accent-primary)]" />
            </div>
            <h3 className="text-3xl font-bold text-[var(--color-text-primary)] mb-2">{service.title}</h3>
            <p className="text-xl text-[var(--color-text-secondary)] font-medium mb-6">{service.subtitle}</p>
            <p className="text-lg leading-relaxed text-[var(--color-muted-foreground)] mb-10">{service.intro}</p>

            {/* Sections grid */}
            <div className="grid grid-cols-1 [@media(min-width:1235px)]:grid-cols-2 gap-8 md:gap-12">
              {service.sections.map((section, idx) => (
                <div key={idx}>
                  <h4 className="text-xl font-semibold text-[var(--color-text-primary)] mb-5">
                    {section.heading}
                  </h4>
                  <ul className="space-y-3">
                    {section.points.map((point, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-[17px] leading-relaxed text-[var(--color-muted-foreground)]"
                      >
                        <span className="text-[var(--color-accent-primary)] text-xl leading-none mt-0.5 flex-shrink-0">
                          &bull;
                        </span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Stats + button — unified for all services */}
            <div className="mt-10 border-t border-[var(--color-border)] pt-8 flex flex-col sm:flex-row sm:items-center gap-8">
              <div className="grid grid-cols-3 gap-6 flex-1">
                {service.stats.map((stat, idx) => (
                  <div key={idx} className="text-center">
                    <div className="text-[2rem] font-bold text-[var(--color-accent-primary)]">{stat.value}</div>
                    <div className="text-sm text-[var(--color-muted-foreground)] mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
              <Button
                onClick={() => handleNavigate(service.learnMoreHref ?? "#contact")}
                className="shrink-0 bg-[var(--color-accent-primary)] hover:bg-[var(--color-accent-primary)]/90 text-white py-3.5 px-8 rounded-xl text-base font-medium cursor-pointer shadow-md"
              >
                Learn more <Users className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
})
