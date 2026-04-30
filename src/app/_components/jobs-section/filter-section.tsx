import { memo } from "react"
import { ChevronDown } from "lucide-react"

interface FilterSectionProps {
  title: string
  isOpen: boolean
  onToggle: () => void
  children: React.ReactNode
}

export const FilterSection = memo(function FilterSection({
  title,
  isOpen,
  onToggle,
  children,
}: FilterSectionProps) {
  return (
    <div>
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between text-lg font-semibold mb-3 text-[#0a3d62] hover:text-[#0a3d62]/80 transition-colors"
      >
        {title}
        <ChevronDown
          className={`w-5 h-5 transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        {children}
      </div>
    </div>
  )
})
