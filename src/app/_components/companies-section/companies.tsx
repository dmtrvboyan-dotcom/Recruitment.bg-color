"use client"

import { useCallback } from "react"
import { Button } from "@/components/ui/button"
import { WHY_CHOOSE_US_POINTS, HIRE_WITH_CLARITY_POINTS } from "@/lib/constants/companies"
import { scrollToSection } from "@/lib/utils/scroll"
import { CheckListItem } from "./check-list-item"
import { SectionHeader } from "./section-header"

export function CompaniesSection() {
  const handleNavigate = useCallback(() => {
    scrollToSection("#contact")
  }, [])

  return (
    <section
      id="companies"
      className="py-20 lg:py-28 bg-[#f9f9f9] lg:pb-[170px] md:pb-[50px]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-5xl mx-auto text-center mb-16">
          <p className="text-md font-medium text-[#FF7F7F] uppercase tracking-wider mb-4">
            Who we work with
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0a3d62] mb-6 text-balance">
            Why Companies Work With Us
          </h2>
        </div>

        {/* Two-column content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div>
            <SectionHeader label="Why Companies Choose Us" variant="dark" />
            <ul className="space-y-6">
              {WHY_CHOOSE_US_POINTS.map((item, index) => (
                <CheckListItem key={index} item={item} variant="dark" />
              ))}
            </ul>
          </div>

          <div>
            <SectionHeader label="Hire with Clarity" variant="brand" />
            <ul className="space-y-6">
              {HIRE_WITH_CLARITY_POINTS.map((item, index) => (
                <CheckListItem key={index} item={item} variant="brand" />
              ))}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-16">
          <Button
            onClick={handleNavigate}
            className="bg-[#0a3d62] text-white hover:bg-[#0a3d62]/90 rounded-lg px-8 py-6 text-base cursor-pointer shadow-sm hover:shadow-md transition-all"
          >
            Talk to us
          </Button>
        </div>
      </div>
    </section>
  )
}
