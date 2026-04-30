"use client"

import { memo, useCallback } from "react"
import { ChevronDown, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { type Service } from "@/lib/constants/services"
import { scrollToSection } from "@/lib/utils/scroll"

export const MobileServiceItem = memo(function MobileServiceItem({
  service,
  isOpen,
  onToggle,
}: {
  service: Service
  isOpen: boolean
  onToggle: () => void
}) {
  const IconComponent = service.icon

  const handleNavigate = useCallback((href: string) => {
    scrollToSection(href)
  }, [])

  return (
    <div className="border border-[var(--color-border)] rounded-2xl overflow-hidden bg-white mb-4 last:mb-0 transition-all duration-300">
      <button
        onClick={onToggle}
        className="w-full px-6 py-6 flex items-center justify-between text-left group transition-colors"
      >
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-lg bg-[var(--color-accent-primary)]/10 flex-shrink-0 flex items-center justify-center group-hover:bg-[var(--color-accent-primary)]/20 transition-colors">
            <IconComponent className="w-6 h-6 text-[var(--color-accent-primary)]" />
          </div>
          <h3 className="text-lg font-semibold text-[var(--color-text-primary)] pr-4 leading-tight">
            {service.title}
          </h3>
        </div>

        <ChevronDown
          className={`w-6 h-6 text-[var(--color-accent-primary)] transition-transform duration-500 shrink-0 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-[1400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-8">
          {service.subtitle && (
            <p className="text-[var(--color-text-secondary)] font-medium mb-4">{service.subtitle}</p>
          )}

          {/* Sections */}
          <div className="space-y-6">
            {service.sections.map((section, idx) => (
              <div key={idx}>
                <h4 className="text-lg font-semibold text-[var(--color-text-primary)] mb-3">
                  {section.heading}
                </h4>
                <ul className="space-y-2">
                  {section.points.map((point, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-base leading-relaxed text-[var(--color-muted-foreground)]"
                    >
                      <span className="text-[var(--color-accent-primary)] text-lg leading-none mt-0.5 flex-shrink-0">
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
          <div className="mt-8 border-t border-[var(--color-border)] pt-6 flex flex-col gap-6">
            <div className="grid grid-cols-3 gap-4">
              {service.stats.map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-2xl font-bold text-[var(--color-accent-primary)]">{stat.value}</div>
                  <div className="text-xs text-[var(--color-muted-foreground)] mt-1 leading-snug">{stat.label}</div>
                </div>
              ))}
            </div>
            <Button
              onClick={() => handleNavigate(service.learnMoreHref ?? "#contact")}
              className="w-full bg-[var(--color-accent-primary)] hover:bg-[var(--color-accent-primary)]/90 text-white py-3 rounded-xl text-base font-medium cursor-pointer shadow-md"
            >
              Learn more <Users className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
})
