import { ctaData } from "./data"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronDown } from "lucide-react"


export function CTASection() {
  return (
    <section className="py-20 md:py-40  bg-gradient-to-br from-[#085689] to-[#064266]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white text-balanc">
          {ctaData.title}
        </h2>
        <p className="sm:text-xl text-md text-white/80 leading-relaxed mb-10 max-w-2xl mx-auto p-4 ">
          {ctaData.description}
        </p>

        <div className="flex flex-wrap justify-center gap-4 sm:pb-20 pb-30">
          <a
            href={ctaData.primaryCta.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-white text-[#085689] hover:bg-slate-100 rounded-lg px-8 py-6 text-base group cursor-pointer">
              {ctaData.primaryCta.text}
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </a>
          {/* <Link href={ctaData.secondaryCta.href}>
            <Button
              variant="outline"
              className="bg-transparent text-white hover:bg-white/20 rounded-lg px-8 py-6 text-base border-white/30"
            >
              {ctaData.secondaryCta.text}
            </Button>
          </Link> */}
        </div>
      </div>
    </section>
  )
}