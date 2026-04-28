"use client"

import { useCallback, memo } from "react"
import { Button } from "@/components/ui/button"
import { Sparkles, ArrowRight } from "lucide-react"
import { scrollToSection } from "@/lib/utils/scroll"
import Image from "next/image"
import { RiCheckLine } from "react-icons/ri"

import Link from "next/link"

/**
 * Smart.R ATS/CRM section component - Minimal, clean design with CTA focus
 */
export const SmartRSection = memo(function SmartRSection() {
  const handleNavigate = useCallback(() => {
    scrollToSection("#contact")
  }, [])

  return (
    <section
      id="smartr"
      className="py-24 md:py-32 px-6 lg:pb-[170px] md:pb-[50px] bg-linear-to-b from-[#f9f9f9] to-[#085689]/12 relative overflow-hidden "
    >



      <div className="max-w-5xl mx-auto text-center flex flex-col items-center">

        {/* Content */}
        <div className="flex flex-col items-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 text-orange-500" />
            <span className="text-sm font-medium text-[#085689] uppercase tracking-wider">
              Own Technology
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-black mb-12">
            Smart.R — Own{" "}
            <span className="text-[#085689]">Applicant Tracking</span> system
          </h2>

          <div className="text-lg leading-relaxed mb-12 max-w-2xl">
            <span className="font-semibold text-green-600 bg-green-100 px-3 py-1 rounded-full">✦ Now available for purchase</span>
            <br />
            {/* <span className="text-slate-500 mt-2 block">Get your hiring system, ready to go.</span> */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-2 text-xs sm:text-sm text-gray-600 font-medium max-w-3xl mx-auto">
              <div className="flex items-center justify-center sm:justify-start gap-2 text-center sm:text-left">
                <RiCheckLine className="text-[#085689]" size={16} />
                <span>Candidates in one place</span>
              </div>

              <div className="flex items-center justify-center sm:justify-start gap-2 text-center sm:text-left">
                <RiCheckLine className="text-[#085689]" size={16} />
                <span>Customizable workflows</span>
              </div>

              <div className="flex items-center justify-center sm:justify-start gap-2 text-center sm:text-left">
                <RiCheckLine className="text-[#085689]" size={16} />
                <span>Team collaboration</span>
              </div>

              <div className="flex items-center justify-center sm:justify-start gap-2 text-center sm:text-left">
                <RiCheckLine className="text-[#085689]" size={16} />
                <span>Analytics & reporting</span>
              </div>

              <div className="flex items-center justify-center sm:justify-start gap-2 text-center sm:text-left">
                <RiCheckLine className="text-[#085689]" size={16} />
                <span>Ready for any domain</span>
              </div>

              <div className="flex items-center justify-center sm:justify-start gap-2 text-center sm:text-left">
                <RiCheckLine className="text-[#085689]" size={16} />
                <span>Hiring manager tools</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start gap-2 text-center sm:text-left">
                <RiCheckLine className="text-[#085689]" size={16} />
                <span>GDPR Ready</span>
              </div>

              

              <div className="flex items-center justify-center sm:justify-start gap-2 text-center sm:text-left">
                <RiCheckLine className="text-[#085689]" size={16} />
                <span>In BG, EN, DE, ES, RU</span>
              </div>

              <div className="flex items-center justify-center sm:justify-start gap-2 text-center sm:text-left">
                <RiCheckLine className="text-[#085689]" size={16} />
                <span>Smart.R AI insights</span>
              </div>
            </div>

          </div>

          <div className="flex flex-row sm:flex-row items-center justify-center gap-2 mb-12">
            <Link href="/applicant-tracking-system" target="_blank">
              <Button className="bg-[#085689] text-white hover:bg-[#78B6D9] hover:text-black rounded-lg px-8 py-6 text-base cursor-pointer">
                Learn more
              </Button>
            </Link>

            {/* <Button
              onClick={handleNavigate}
              variant="outline"
              className="bg-transparent text-black hover:bg-[#78B6D9] hover:text-white rounded-lg px-8 py-6 text-base border-slate-300 cursor-pointer"
            >
              Book a demo
            </Button> */}
          </div>
        </div>

        {/* Large Product Image */}
        <div className="w-full -mt-10">
          <div className="relative w-[150%] left-1/2 -translate-x-1/2 max-w-none">

            <div className="relative aspect-[16/9] lg:aspect-[16/8] rounded-2xl overflow-hidden">
              <Image
                src="/uploaded/product-smart.png"
                alt="Smart.R Applicant Tracking System Dashboard"
                fill
                className="object-cover object-top"
                sizes="100vw"
                priority
              />
            </div>

          </div>
        </div>

      </div>
    </section>
  )
})