"use client"

import { memo } from "react"
import Link from "next/link"
import { ArrowRight, Factory, Leaf, Truck, UtensilsCrossed, Store, Film, Scale, BookOpen, Layers, Banknote } from "lucide-react"
import { EXPERTISE_AREAS, EXPERTISE_FEATURED_AREA } from "@/lib/constants/expertise"

/**
 * Regular Expertise Card
 */
const ExpertiseCard = memo(function ExpertiseCard({
    item,
}: {
    item: (typeof EXPERTISE_AREAS)[0]
}) {
    const Icon = item.icon

    return (
        <Link
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group block p-8 bg-[#f5f5f5] rounded-3xl border border-slate-100 hover:border-[#78B6D9]/30 hover:shadow-xl transition-all duration-300 h-full flex flex-col"
        >
            <div className="mb-6">
                <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-[#085689]/5 text-[#085689] group-hover:bg-[#78B6D9] group-hover:text-white transition-colors">
                    <Icon className="w-8 h-8" />
                </div>
            </div>

            <h3 className="font-semibold text-2xl text-black mb-3 leading-tight group-hover:text-[#085689] transition-colors">
                {item.title}
            </h3>

            <p className="text-slate-600 text-[15px] leading-relaxed flex-1">
                {item.description}
            </p>

            <div className="mt-8 flex items-center text-[#085689] font-medium text-sm group-hover:gap-2 transition-all">
                Learn more
                <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-0.5 transition-transform" />
            </div>
        </Link>
    )
})

/**
 * Featured Expertise Card (Full width on large screens)
 */
const FeaturedExpertiseCard = memo(function FeaturedExpertiseCard() {
    const { title, description, href, icon: Icon, tags, cta } = EXPERTISE_FEATURED_AREA

    // Icon mapping for tags
    const tagIcons: Record<string, React.ElementType> = {
        "Manufacturing (IT-focused)": Factory,
        "Renewable Energy": Leaf,
        "Logistics & Supply Chain": Truck,
        "Hospitality": UtensilsCrossed,
        "Retail": Store,
        "Media & Entertainment": Film,
        "Legal (LegalTech)": Scale,
        "Banking Tech": Banknote,
        "EdTech": BookOpen,
    }

    return (
        <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group block p-4 sm:p-8 md:p-10 bg-[#f5f5f5] rounded-3xl border border-slate-100 hover:border-[#78B6D9]/30 hover:shadow-xl transition-all duration-300 col-span-1 lg:col-span-3 flex flex-col"
        >
            <div className="mb-6">
                <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-[#085689]/5 text-[#085689] group-hover:bg-[#78B6D9] group-hover:text-white transition-colors">
                    <Icon className="w-9 h-9" />
                </div>
            </div>

            <h3 className="font-semibold text-2xl md:text-3xl text-black mb-4 leading-tight group-hover:text-[#085689] transition-colors">
                {title}
            </h3>

            <p className="text-slate-600 text-[15px] md:text-base leading-relaxed mb-10 flex-1">
                {description}
            </p>

            {/* Tags with Icons */}
            <div className="flex flex-wrap gap-3 mb-10">
                {tags.map((tag, index) => {
                    const TagIcon = tagIcons[tag] || Layers
                    return (
                        <div
                            key={index}
                            className="flex items-center gap-2 text-xs font-medium px-4 py-2.5 bg-white rounded-full border border-slate-200 text-slate-700 hover:bg-[#085689]/5 transition-colors"
                        >
                            <TagIcon className="w-4 h-4 text-[#085689]" />
                            {tag}
                        </div>
                    )
                })}
            </div>

            <div className="mt-auto flex items-center text-[#085689] font-medium text-sm group-hover:gap-2 transition-all">
                {cta || "Learn more about our reach"}
                <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-0.5 transition-transform" />
            </div>
        </Link>
    )
})

/**
 * Our Expertise Section - 3x3 Layout
 */
export function ExpertiseSection() {
    return (
        <section className="px-4 py-24 md:px-8 md:py-32 bg-transparent lg:pb-[170px] bg-gradient-to-b from-[#085689]/12 to-[#f9f9f9]">
            <div className="mx-auto max-w-6xl">
                {/* Header */}
                <div className="text-center mb-16">
                    <p className="text-md font-medium text-[#085689] uppercase tracking-wider mb-4">
                        OUR EXPERTISE
                    </p>

                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black mb-6">
                        We help companies hire across industries
                    </h2>
                    <p className="text-xl text-slate-600 leading-relaxed max-w-4xl mx-auto">
                        From specialized technical roles to executive leadership, we deliver
                        tailored recruitment solutions across key industries.
                    </p>
                </div>

                {/* Grid: 3 columns on lg → 6 cards + 1 full-width featured = clean 3x3 feel */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {EXPERTISE_AREAS.map((item, index) => (
                        <ExpertiseCard key={index} item={item} />
                    ))}

                    {/* Featured card spans all 3 columns on large screens */}
                    <FeaturedExpertiseCard />
                </div>

                <div className="text-center mt-12">
                    <p className="text-slate-500 sm:text-xl text-sm">
                        Not sure where to start?{" "}
                        <a href="#contact" className="text-[#085689] hover:underline font-medium">
                            Contact us
                        </a>{" "}
                        and we’ll guide you.
                    </p>
                </div>
            </div>
        </section>
    )
}