"use client"

import { useState, useCallback, useRef } from "react"
import { useEscapeKey, useClickOutside } from "@/lib/hooks"
import { SERVICES, type Service } from "@/lib/constants/services"
import { MobileServiceItem } from "./mobile-service-item"
import { DesktopServiceCard } from "./desktop-service-card"
import { DesktopPanel } from "./desktop-panel"

export function Services() {
  const [selectedService, setSelectedService] = useState<Service | null>(null)
  const [openMobileItems, setOpenMobileItems] = useState<number[]>([])
  const mobileAccordionRef = useRef<HTMLDivElement>(null)

  const closePanel = useCallback(() => setSelectedService(null), [])
  const closeAllMobileItems = useCallback(() => setOpenMobileItems([]), [])

  useEscapeKey(closePanel)
  useClickOutside(mobileAccordionRef, closeAllMobileItems)

  const toggleMobileItem = useCallback((index: number) => {
    setOpenMobileItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    )
  }, [])

  return (
    <section
      id="services"
      className="py-24 lg:py-32 lg:pb-[170px] md:pb-[50px] bg-[#f9f9f9]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-16 lg:mb-20">
          <p className="text-md font-medium text-[#FF7F7F] uppercase tracking-wider mb-4">
            Our Services
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0a3d62] mb-6 text-balance">
            Our IT Recruitment Services
          </h2>
        </div>

        {/* Mobile: FAQ-style accordion */}
        <div ref={mobileAccordionRef} className="md:hidden space-y-2">
          {SERVICES.map((service, index) => (
            <MobileServiceItem
              key={index}
              service={service}
              isOpen={openMobileItems.includes(index)}
              onToggle={() => toggleMobileItem(index)}
            />
          ))}
        </div>

        {/* Desktop: Card grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((service, index) => (
            <DesktopServiceCard
              key={index}
              service={service}
              isSelected={selectedService?.title === service.title}
              onSelect={() => setSelectedService(service)}
            />
          ))}
        </div>

        <div className="text-center">
          <p className="text-xl text-[#0a3d62]/70 leading-relaxed mt-[80px]">
            We provide end-to-end IT recruitment services, helping companies hire top tech talent
            locally and globally.
          </p>
        </div>
      </div>

      <DesktopPanel service={selectedService} onClose={closePanel} />
    </section>
  )
}
