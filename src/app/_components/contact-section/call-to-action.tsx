"use client"

import { useState } from "react"
import { ContactForm } from "./contact-form"
import { TabButton } from "./tab-button"

type TabType = "candidate" | "company"

const TABS: { label: string; value: TabType }[] = [
  { label: "I'm a Company",   value: "company"   },
  { label: "I'm a Candidate", value: "candidate" },
]

export function CallToAction() {
  const [activeTab, setActiveTab] = useState<TabType>("company")

  return (
    <section
      id="contact"
      className="py-24 lg:py-32 lg:pb-[170px] md:pb-[50px] mb-50 bg-[#f9f9f9]"
    >
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-[#FF7F7F] uppercase tracking-widest mb-3">
            Get in Touch
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#0a3d62] mb-6">
            Let&apos;s Start a Conversation
          </h2>
          <p className="text-xl text-[#0a3d62]/70 leading-relaxed max-w-3xl mx-auto">
            Whether you&apos;re looking to hire top IT talent or seeking your next career
            opportunity, we&apos;re here to help.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex rounded-full p-1 bg-slate-50 border border-slate-100">
            {TABS.map((tab) => (
              <TabButton
                key={tab.value}
                label={tab.label}
                isActive={activeTab === tab.value}
                onClick={() => setActiveTab(tab.value)}
              />
            ))}
          </div>
        </div>

        {/* Form */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-white border border-slate-100 p-8 lg:p-12 shadow-sm rounded-3xl">
            <ContactForm key={activeTab} mode={activeTab} />
          </div>
        </div>
      </div>
    </section>
  )
}
