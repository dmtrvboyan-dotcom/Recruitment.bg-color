import type { Metadata } from "next"
import Link from "next/link"
import { ScrollReveal } from "@/components/layout"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight } from "lucide-react"
import {
  HERO_DATA,
  BULGARIA_STRENGTHS_HEADER,
  BULGARIA_STRENGTHS,
  WHAT_WE_HIRE_HEADER,
  WHAT_WE_HIRE,
  CTA_DATA,
  FULL_TALENT_HEADER,
  FULL_TALENT_SUBTITLE,
  ROLE_CATEGORIES
} from "./data"

export const metadata: Metadata = {
  title: "Fintech Recruitment Bulgaria | Hire Fintech Talent",
  description:
    "Specialized fintech recruitment in Bulgaria. Hire backend engineers, risk & compliance specialists, data analysts, and product roles for your fintech company.",
}

export default function FintechRecruitmentPage() {
  return (
    <>

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm font-medium text-[#085689] uppercase tracking-widest mb-4">
              {HERO_DATA.tagline}
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight text-balance mb-6">
              {HERO_DATA.title}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-4 text-pretty">
              {HERO_DATA.description}
            </p>
            <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto">
              {HERO_DATA.subDescription}
            </p>
          </div>
        </div>
      </section>

         {/* What We Hire Section */}
      <ScrollReveal>
        <section className="px-4 py-20 md:px-8 md:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-14">
              <p className="text-sm font-medium text-[#085689] uppercase tracking-widest mb-3">
                {WHAT_WE_HIRE_HEADER.tagline}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black mb-4">
                {WHAT_WE_HIRE_HEADER.title}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {WHAT_WE_HIRE.map((item, index) => {
                const Icon = item.icon
                return (
                  <div
                    key={index}
                    className="group p-8 bg-[#f5f5f5] rounded-3xl border border-slate-100 hover:border-[#78B6D9]/30 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="mb-6">
                      <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-[#085689]/5 text-[#085689] group-hover:bg-[#78B6D9] group-hover:text-white transition-colors">
                        <Icon className="w-7 h-7" />
                      </div>
                    </div>
                    <h3 className="font-semibold text-xl text-black mb-3 leading-tight group-hover:text-[#085689] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-[15px] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Bulgaria Strengths Section */}
      <ScrollReveal>
        <section className="px-4 py-20 md:px-8 md:py-28 bg-[#f5f5f5]/50">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-14">
              <p className="text-sm font-medium text-[#085689] uppercase tracking-widest mb-3">
                {BULGARIA_STRENGTHS_HEADER.tagline}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black mb-4">
                {BULGARIA_STRENGTHS_HEADER.title}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {BULGARIA_STRENGTHS.items.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-5 bg-white rounded-2xl border border-slate-100 hover:border-[#78B6D9]/30 hover:shadow-md transition-all duration-300"
                >
                  <CheckCircle className="w-5 h-5 text-[#085689] mt-0.5 flex-shrink-0" />
                  <p className="text-slate-700 text-[15px] leading-relaxed font-medium">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

   



{/* Full Talent Spectrum Section */}
<ScrollReveal>
  <section className="px-4 py-20 md:px-8 md:py-28">
    <div className="mx-auto max-w-6xl">
      <div className="text-center mb-14">
        <p className="text-sm font-medium text-[#085689] uppercase tracking-widest mb-3">
          {FULL_TALENT_HEADER.tagline}
        </p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black mb-4">
          {FULL_TALENT_HEADER.title}
        </h2>
        <p className="text-base text-slate-500 max-w-xl mx-auto">
          {FULL_TALENT_SUBTITLE}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {ROLE_CATEGORIES.map((cat, i) => {
          const Icon = cat.icon
          const isLast = i === ROLE_CATEGORIES.length - 1
          return (
            <div
              key={i}
              className={`group rounded-2xl border border-slate-100 bg-white p-6 hover:border-[#78B6D9]/40 hover:shadow-md transition-all duration-300${isLast ? " sm:col-span-2 lg:col-span-1 lg:col-start-2" : ""}`}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${cat.iconBg} ${cat.color} flex-shrink-0`}>
                  <Icon className="w-[18px] h-[18px]" />
                </div>
                <span className="font-semibold text-[15px] text-black group-hover:text-[#085689] transition-colors">
                  {cat.tagline}
                </span>
              </div>
              <div className="flex flex-col gap-2">
                {cat.roles.map((role, j) => (
                  <div
                    key={j}
                    className="text-[13px] text-slate-600 bg-slate-50 rounded-lg px-3 py-2 leading-snug"
                  >
                    {role.title}
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  </section>
</ScrollReveal>


      {/* CTA Section */}
      <ScrollReveal>
        <section className="px-4 py-20 md:px-8 md:py-28 mb-20">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black mb-6">
              {CTA_DATA.title}
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto mb-10">
              {CTA_DATA.description}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                className="bg-[#085689] text-white hover:bg-[#78B6D9] hover:text-black rounded-xl px-8 py-6 text-base font-medium"
              >
                <Link href={CTA_DATA.primaryButton.href}>
                  {CTA_DATA.primaryButton.text}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              
            </div>
          </div>
        </section>
      </ScrollReveal>
    </>
  )
}
