import { ArrowRight, ChevronDown } from "lucide-react"
import { faqData } from "./data"

export function FAQSection() {
  return (
    <section className="py-20 md:py-32 px-6 bg-gradient-to-b from-[#ededed] to-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-md font-medium text-[#085689] uppercase tracking-wider mb-4 block">
            {faqData.tagline}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-black mb-4 text-balance">
            {faqData.title}
          </h2>
          <p className="text-lg text-slate-600">
            {faqData.subtitle}
          </p>
        </div>

        <div className="space-y-4">
          {faqData.items.map((item, index) => (
            <details
              key={index}
              className="group bg-white rounded-xl border border-slate-200 overflow-hidden"
            >
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                <h3 className="font-semibold text-black pr-4">
                  {item.question}
                </h3>
                <ChevronDown className="w-5 h-5 text-slate-400 transition-transform group-open:rotate-180 shrink-0" />
              </summary>
              <div className="px-6 pb-6 pt-0">
                <p className="text-slate-600 leading-relaxed">{item.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
