"use client"

import { useState, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { FAQ_ITEMS } from "@/lib/constants/faq"
import { scrollToSection } from "@/lib/utils/scroll"
import { FAQItem } from "./faq-item"

const LEFT_COUNT = 4

export function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = useCallback((index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    )
  }, [])

  const leftFaqs = FAQ_ITEMS.slice(0, LEFT_COUNT)
  const rightFaqs = FAQ_ITEMS.slice(LEFT_COUNT)

  return (
    <section
      id="faq"
      className="py-20 lg:py-28 bg-[#f9f9f9] lg:pb-[170px] md:pb-[50px]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-md font-medium text-[#FF7F7F] uppercase tracking-wider mb-4">
            Got questions?
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0a3d62] mb-6 text-balance">
            Frequently Asked Questions
          </h2>
        </div>

        {/* Two-column grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="space-y-2">
            {leftFaqs.map((faq, i) => (
              <FAQItem
                key={i}
                faq={faq}
                index={i}
                isOpen={openItems.includes(i)}
                onToggle={() => toggleItem(i)}
              />
            ))}
          </div>
          <div className="space-y-2">
            {rightFaqs.map((faq, i) => (
              <FAQItem
                key={i + LEFT_COUNT}
                faq={faq}
                index={i + LEFT_COUNT}
                isOpen={openItems.includes(i + LEFT_COUNT)}
                onToggle={() => toggleItem(i + LEFT_COUNT)}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-16">
          <Button
            onClick={() => scrollToSection("#contact")}
            className="bg-[#0a3d62] text-white hover:bg-[#0a3d62]/90 rounded-lg px-8 py-6 text-base cursor-pointer shadow-sm hover:shadow-md transition-all"
          >
            Still have questions? Let&apos;s talk
          </Button>
        </div>
      </div>
    </section>
  )
}
