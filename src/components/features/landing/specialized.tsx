"use client"

import { memo, useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
  Dialog,
  DialogContent,
  DialogClose,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"
import {
  Code2,
  Cloud,
  ShieldCheck,
  Database,
  BrainCircuit,
  PenTool,
  Smartphone,
  Crown,
  Eye,
  X,
} from "lucide-react"
import { TECHNOLOGY_PILLS, TECH_CATEGORIES, type TechCategory } from "@/lib/constants/specialized"
import { scrollToSection } from "@/lib/utils/scroll"

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  "code-2": Code2,
  "cloud": Cloud,
  "shield-check": ShieldCheck,
  "database": Database,
  "brain-circuit": BrainCircuit,
  "pen-tool": PenTool,
  "smartphone": Smartphone,
  "crown": Crown,
}

const TechPill = memo(function TechPill({ tech }: { tech: string }) {
  return (
    <Badge
      variant="secondary"
      className="px-4 py-1.5 text-sm font-medium bg-[#085689] hover:text-black hover:bg-[#78B6D9] text-[#fff] border border-[#c5daf0] rounded-full transition-all duration-200 cursor-default"
    >
      {tech}
    </Badge>
  )
})


const CategoryCard = memo(function CategoryCard({
  category,
  onClick,
}: {
  category: TechCategory
  onClick: () => void
}) {
  const IconComponent = ICON_MAP[category.icon] ?? Code2

  const visibleTechs = category.techs.slice(0, 8)

  return (
    <div
      onClick={onClick}
      className="relative group border border-slate-100 rounded-2xl p-5 bg-[#f5f5f5] hover:border-[#085689]/20 hover:shadow-lg transition-all duration-300 cursor-pointer"    >

      {/* Eye Icon */}
      <div className="absolute top-3 right-3">
        <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-[#78B6D9]/80 backdrop-blur-sm border border-slate-200
    opacity-100 sm:opacity-0 sm:group-hover:opacity-100
    scale-100 sm:scale-90 sm:group-hover:scale-100
    transition-all duration-300 ease-out">

          {/* Glow (mobile subtle animation) */}
          <span className="absolute inset-0 rounded-full bg-[#78B6D9]/30 blur-md opacity-60 animate-pulse sm:hidden" />

          <Eye className="w-4 h-4 text-white" />
        </div>
      </div>

      {/* Icon + category label */}
      <div className="flex items-center gap-2 mb-3 ">
        <div className="w-8 h-8 rounded-2xl bg-[#78B6D9]/10 flex items-center justify-center">
          <IconComponent className="w-4 h-4 text-[#085689]" />
        </div>
        <span className="text-[11px] font-semibold text-[#085689] uppercase tracking-widest">
          {category.categoryLabel}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-[15px] font-bold text-slate-900 mb-4 leading-snug group-hover:text-[#085689] transition-colors">
        {category.title}
      </h3>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-1.5">
        {visibleTechs.map((tech) => (
          <span
            key={tech}
            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-600 border border-slate-200"
          >
            {tech}
          </span>
        ))}

      </div>
    </div>
  )
})

/**
 * Modal content — matches Image 2 exactly
 */
// CategoryModal — tighten spacing and shrink text on mobile
const CategoryModal = memo(function CategoryModal({ category }: { category: TechCategory }) {
  const IconComponent = ICON_MAP[category.icon] ?? Code2

  return (
    <div className="p-1">
      {/* Icon */}
      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#78B6D9]/10 flex items-center justify-center mb-3 sm:mb-5">
        <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-[#085689]" />
      </div>

      {/* Title */}
      <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-1">{category.title}</h2>

      {/* Subtitle */}
      <p className="text-[#085689] text-sm font-medium mb-4 sm:mb-6">{category.subtitle}</p>

      <Separator className="mb-4 sm:mb-5" />

      {/* Two-column bullet lists */}
      <div className="grid grid-cols-2 gap-3 sm:gap-6 mb-4 sm:mb-6">
        <div>
          <p className="text-[10px] sm:text-[11px] font-semibold text-slate-400 uppercase tracking-widest mb-2 sm:mb-3">
            HOW WE SOURCE
          </p>
          <ul className="space-y-1.5 sm:space-y-2">
            {category.howWeSource.map((item) => (
              <li key={item} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-[10px] sm:text-[11px] font-semibold text-slate-400 uppercase tracking-widest mb-2 sm:mb-3">
            WHAT YOU GET
          </p>
          <ul className="space-y-1.5 sm:space-y-2">
            {category.whatYouGet.map((item) => (
              <li key={item} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Separator className="mb-4 sm:mb-5" />

      {/* Stats row */}
      <div className="grid grid-cols-2 gap-4 mb-4 sm:mb-6">
        <div>
          <p className="text-2xl sm:text-3xl font-bold text-[#085689]">{category.stat1Value}</p>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">{category.stat1Label}</p>
        </div>
        <div>
          <p className="text-2xl sm:text-3xl font-bold text-[#085689]">{category.stat2Value}</p>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">{category.stat2Label}</p>
        </div>
      </div>
    </div>
  )
})

/**
 * Specialized recruitment section component
 */
export function SpecializedRecruitment() {
  const [selectedCategory, setSelectedCategory] = useState<TechCategory | null>(null)

  return (
    <section id="specialized" className="py-20 lg:py-28 lg:pb-[170px] md:pb-[50px] bg-linear-to-b from-[#f9f9f9] to-[#085689]/12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-md font-semibold text-[#085689] uppercase tracking-wider mb-4">
            Industry-Focused Expertise
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight  text-black text-balance">
            Specialized recruitment
          </h2>
          {/* <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
            From technical support and junior software engineers to CTOs — we help you hire the right professionals.
          </p> */}
        </div>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-14 -mt-5">
          {TECHNOLOGY_PILLS.map((tech) => (
            <TechPill key={tech} tech={tech} />
          ))}
        </div>

        <Separator className="mb-12" />

        {/* Categories Grid — 4 columns matching Image 1 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 ">
          {TECH_CATEGORIES.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
              onClick={() => setSelectedCategory(category)}
            />
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-12">
          <Button
            onClick={() => scrollToSection("#contact")}
            className="bg-[#085689] hover:bg-[#78B6D9] text-white hover:text-black px-10 py-6 sm:text-[18px] text-sm font-semibold rounded-xl shadow-md hover:shadow-lg transition-all active:scale-[0.98] cursor-pointer"
          >
            Looking for a specific role? Let's talk
          </Button>
        </div>
      </div>

      {/* Modal — matching Image 2 */}
      <Dialog
        open={!!selectedCategory}
        onOpenChange={(open) => !open && setSelectedCategory(null)}
      >
        <DialogContent className="max-w-lg w-[calc(100%-2rem)] rounded-2xl p-4 sm:p-6 bg-[#f5f5f5] shadow-2xl border-0 max-h-[85dvh] overflow-y-auto">
          <VisuallyHidden>
            <DialogTitle>{selectedCategory?.title ?? "Category details"}</DialogTitle>
            <DialogDescription>{selectedCategory?.subtitle ?? ""}</DialogDescription>
          </VisuallyHidden>
          {selectedCategory && <CategoryModal category={selectedCategory} />}
        </DialogContent>
      </Dialog>
    </section>
  )
}
