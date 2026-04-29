"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { faqData } from "./data"

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 md:py-32 px-6 bg-gradient-to-b from-[#ededed] to-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-xs font-bold text-[#ff9204] uppercase tracking-[0.2em] mb-5">
            <span className="block w-6 h-px bg-[#000]/40" />
            {faqData.tagline}
            <span className="block w-6 h-px bg-[#000]/40" />
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-black text-balance">
            {faqData.title}
          </h2>
        </div>

        <div className="space-y-4">
          {faqData.items.map((item, index) => {
            const isOpen = openIndex === index

            return (
              <div
                key={index}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden transition-all duration-300"
              >
                {/* Header */}
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full flex items-center justify-between p-6 text-left cursor-pointer"
                >
                  <h3 className="font-semibold text-black pr-4">
                    {item.question}
                  </h3>

                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                      }`}
                  />
                </button>

                {/* Animated Content */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                    }`}
                >
                  <div className="px-6 pb-6 pt-0">
                    <p className="text-slate-600 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}