import { RiCheckLine } from "react-icons/ri"
import { COMPANY_VALUES } from "@/lib/constants/team"
import { PhotoGallery } from "./photo-gallery"
import { TeamCarousel } from "./team-carousel"
import { ValueItem } from "./value-item"

const STATS = [
  "15+ years IT Recruitment Experience",
  "Average time 2–10 days to present candidates",
]

const VALUES_LEFT  = COMPANY_VALUES.slice(0, 2)
const VALUES_RIGHT = COMPANY_VALUES.slice(2)

export function MeetTheTeam() {
  return (
    <section
      id="about"
      className="relative py-24 lg:py-3 overflow-hidden"
    >
      {/* Decorative background similar to Hero */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-brand-blue/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-brand-coral mb-4">
    About us
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-brand-navy mb-8">
            Nice to meet <span className="text-brand-coral"> you</span>
          </h2>
          
          <div className="flex flex-wrap items-center justify-center gap-y-3 gap-x-8">
            {STATS.map((stat) => (
              <div key={stat} className="flex items-center gap-2.5 px-4 py-2 bg-white rounded-full border border-brand-navy/5 shadow-sm">
                <RiCheckLine className="text-brand-coral" size={18} />
                <span className="text-xs font-semibold text-brand-navy/70 uppercase tracking-wider">{stat}</span>
              </div>
            ))}
          </div>
        </div>

        <PhotoGallery />

        {/* Company values - refined spacing */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 max-w-5xl mx-auto mb-24 mt-20">
          <div className="space-y-10">
            {VALUES_LEFT.map((value, i) => (
              <ValueItem key={i} title={value.title} description={value.description} />
            ))}
          </div>
          <div className="space-y-10">
            {VALUES_RIGHT.map((value, i) => (
              <ValueItem key={i} title={value.title} description={value.description} />
            ))}
          </div>
        </div>

        <div className="pt-16 border-t border-brand-navy/5">
           <TeamCarousel />
        </div>
      </div>
    </section>
  )
}