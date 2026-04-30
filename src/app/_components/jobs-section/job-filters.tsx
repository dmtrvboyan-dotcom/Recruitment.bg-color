import { memo, useCallback, useState } from "react"
import { Filter, X } from "lucide-react"
import {
  JOB_LOCATIONS,
  SENIORITY_OPTIONS,
  CONTRACT_OPTIONS,
  TECH_OPTIONS,
} from "@/lib/data/jobs"
import { toggleArrayItem } from "@/lib/utils/filters"
import { FilterSection } from "./filter-section"

interface JobFiltersProps {
  selectedLocations: string[]
  setSelectedLocations: React.Dispatch<React.SetStateAction<string[]>>
  selectedType: string
  setSelectedType: (v: string) => void
  selectedTech: string
  setSelectedTech: (v: string) => void
  selectedSeniorities: string[]
  setSelectedSeniorities: React.Dispatch<React.SetStateAction<string[]>>
  selectedContracts: string[]
  setSelectedContracts: React.Dispatch<React.SetStateAction<string[]>>
}

export const JobFilters = memo(function JobFilters(props: JobFiltersProps) {
  const {
    selectedLocations, setSelectedLocations,
    selectedType, setSelectedType,
    selectedTech, setSelectedTech,
    selectedSeniorities, setSelectedSeniorities,
    selectedContracts, setSelectedContracts,
  } = props

  const [showFilters, setShowFilters] = useState(false)
  const [openSections, setOpenSections] = useState({
    technology: true,
    seniority: true,
    location: true,
    contract: true,
    workModel: true,
  })

  const toggleSection = useCallback((section: keyof typeof openSections) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }))
  }, [])

  return (
    <>
      {/* Mobile toggle */}
      <button
        onClick={() => setShowFilters(!showFilters)}
        className="lg:hidden flex items-center gap-2 mx-auto bg-[#0a3d62] text-white px-6 py-3 rounded-2xl mb-6 shadow-sm"
      >
        <Filter className="w-5 h-5" />
        Filters
        {showFilters && <X className="w-5 h-5" />}
      </button>

      <div className={`lg:w-80 lg:shrink-0 transition-all ${showFilters ? "block" : "hidden"} lg:block`}>
        <div className="bg-white border border-slate-100 rounded-3xl p-6 lg:sticky lg:top-8 space-y-6">

          <FilterSection title="Technology" isOpen={openSections.technology} onToggle={() => toggleSection("technology")}>
            <div className="grid grid-cols-2 gap-2 pt-1">
              {TECH_OPTIONS.map((tech) => (
                <button
                  key={tech.value}
                  onClick={() => setSelectedTech(tech.value)}
                  className={`py-3 px-4 rounded-2xl text-sm font-medium transition-all ${
                    selectedTech === tech.value
                      ? "bg-[#0a3d62] text-white"
                      : "bg-slate-50 hover:bg-slate-100 text-[#0a3d62]"
                  }`}
                >
                  {tech.label}
                </button>
              ))}
            </div>
          </FilterSection>

          <FilterSection title="Seniority" isOpen={openSections.seniority} onToggle={() => toggleSection("seniority")}>
            <div className="space-y-3 pt-1">
              {SENIORITY_OPTIONS.map((s) => (
                <label key={s} className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={selectedSeniorities.includes(s)}
                    onChange={() => setSelectedSeniorities((prev) => toggleArrayItem(prev, s))}
                    className="w-5 h-5 accent-[#0a3d62] rounded"
                  />
                  <span className="text-[#0a3d62]">{s}</span>
                </label>
              ))}
            </div>
          </FilterSection>

          <FilterSection title="Location" isOpen={openSections.location} onToggle={() => toggleSection("location")}>
            <div className="space-y-3 pt-1">
              {JOB_LOCATIONS.map((loc) => (
                <label key={loc} className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={selectedLocations.includes(loc)}
                    onChange={() => setSelectedLocations((prev) => toggleArrayItem(prev, loc))}
                    className="w-5 h-5 accent-[#0a3d62] rounded"
                  />
                  <span className="text-[#0a3d62]">{loc}</span>
                </label>
              ))}
            </div>
          </FilterSection>

          <FilterSection title="Contract Type" isOpen={openSections.contract} onToggle={() => toggleSection("contract")}>
            <div className="space-y-3 pt-1">
              {CONTRACT_OPTIONS.map((c) => (
                <label key={c.value} className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={selectedContracts.includes(c.value)}
                    onChange={() => setSelectedContracts((prev) => toggleArrayItem(prev, c.value))}
                    className="w-5 h-5 accent-[#0a3d62] rounded"
                  />
                  <span className="text-[#0a3d62]">{c.label}</span>
                </label>
              ))}
            </div>
          </FilterSection>

          <FilterSection title="Work Model" isOpen={openSections.workModel} onToggle={() => toggleSection("workModel")}>
            <div className="space-y-2 pt-1">
              {["all", "hybrid", "remote", "office"].map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`w-full text-left px-4 py-3 rounded-2xl transition-all ${
                    selectedType === type
                      ? "bg-[#0a3d62] text-white"
                      : "hover:bg-slate-50 text-[#0a3d62]"
                  }`}
                >
                  {type === "all" ? "All" : type === "hybrid" ? "Hybrid" : type === "remote" ? "Fully Remote" : "Office"}
                </button>
              ))}
            </div>
          </FilterSection>

        </div>
      </div>
    </>
  )
})
