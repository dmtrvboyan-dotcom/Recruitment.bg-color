import { EXPERTISE_AREAS } from "@/lib/constants/expertise"
import { ExpertiseCard } from "./expertise-card"
import { FeaturedExpertiseCard } from "./featured-expertise-card"

export function ExpertiseSection() {
  return (
    <section className="px-4 py-24 md:px-8 md:py-32 bg-transparent lg:pb-[170px] bg-gradient-to-b from-[var(--color-bg-primary)] to-[var(--color-bg-secondary)]">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-md font-medium text-[var(--color-accent-primary)] uppercase tracking-wider mb-4">
            OUR EXPERTISE
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[var(--color-text-primary)] mb-6">
            We help companies hire across industries
          </h2>
          <p className="text-xl text-[var(--color-muted-foreground)] leading-relaxed max-w-4xl mx-auto">
            From specialized technical roles to executive leadership, we deliver tailored
            recruitment solutions across key industries.
          </p>
        </div>

        {/* Grid — 6 cards + 1 full-width featured */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {EXPERTISE_AREAS.map((item, index) => (
            <ExpertiseCard key={index} item={item} />
          ))}
          <FeaturedExpertiseCard />
        </div>

        <div className="text-center mt-12">
          <p className="text-[var(--color-muted-foreground)] sm:text-xl text-sm">
            Not sure where to start?{" "}
            <a href="#contact" className="text-[var(--color-accent-primary)] hover:underline font-medium">
              Contact us
            </a>{" "}
            and we&apos;ll guide you.
          </p>
        </div>
      </div>
    </section>
  )
}
