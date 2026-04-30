"use client"

import { useState, useMemo } from "react"
import { Search, X } from "lucide-react"
import { SAMPLE_JOBS, type Job } from "@/lib/data/jobs"
import { filterJobs } from "@/lib/utils/filters"
import { JobCard } from "./job-card"
import { JobModal } from "./job-modal"
import { JobFilters } from "./job-filters"
import { JobsPagination } from "./job-pagination"

const JOBS_PER_PAGE = 6

export function JobsSection() {
  const [selectedLocations, setSelectedLocations] = useState<string[]>([])
  const [selectedType, setSelectedType] = useState("all")
  const [selectedTech, setSelectedTech] = useState("all")
  const [selectedSeniorities, setSelectedSeniorities] = useState<string[]>([])
  const [selectedContracts, setSelectedContracts] = useState<string[]>([])
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedJob, setSelectedJob] = useState<Job | null>(null)
  const [currentPage, setCurrentPage] = useState(1)

  const filteredJobs = useMemo(() => {
    setCurrentPage(1)
    return filterJobs(SAMPLE_JOBS, {
      locations: selectedLocations,
      type: selectedType,
      tech: selectedTech,
      seniorities: selectedSeniorities,
      contracts: selectedContracts,
      searchQuery,
    })
  }, [selectedLocations, selectedType, selectedTech, selectedSeniorities, selectedContracts, searchQuery])

  const totalPages = Math.ceil(filteredJobs.length / JOBS_PER_PAGE)
  const paginatedJobs = filteredJobs.slice(
    (currentPage - 1) * JOBS_PER_PAGE,
    currentPage * JOBS_PER_PAGE
  )

  return (
    <section id="jobs" className="py-16 lg:py-24 lg:pb-[170px] md:pb-[50px] bg-gradient-to-b from-[var(--color-bg-primary)] to-[var(--color-bg-secondary)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {selectedJob && (
          <JobModal job={selectedJob} onClose={() => setSelectedJob(null)} />
        )}

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-medium text-[var(--color-accent-primary)] uppercase tracking-widest mb-3">Careers</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[var(--color-text-primary)] mb-6">Job Positions</h2>
        </div>

        {/* Search */}
        <div className="flex justify-center mb-10">
          <div className="w-full md:w-[50%]">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--color-muted-foreground)] w-5 h-5" />
              <input
                type="text"
                placeholder="Search jobs by title or technology..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border border-[var(--color-border)] pl-12 pr-12 py-4 rounded-3xl text-lg text-[var(--color-text-primary)] focus:outline-none focus:border-[var(--color-accent-primary)] transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[var(--color-muted-foreground)] hover:text-[var(--color-text-primary)]"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          <JobFilters
            selectedLocations={selectedLocations}
            setSelectedLocations={setSelectedLocations}
            selectedType={selectedType}
            setSelectedType={setSelectedType}
            selectedTech={selectedTech}
            setSelectedTech={setSelectedTech}
            selectedSeniorities={selectedSeniorities}
            setSelectedSeniorities={setSelectedSeniorities}
            selectedContracts={selectedContracts}
            setSelectedContracts={setSelectedContracts}
          />

          {/* Job cards + pagination */}
          <div className="flex-1">
            <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex items-baseline gap-3">
                <span className="text-2xl font-semibold">{filteredJobs.length} positions</span>
                {searchQuery && (
                  <span className="text-slate-500 text-sm">matching &quot;{searchQuery}&quot;</span>
                )}
              </div>
              <JobsPagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {paginatedJobs.map((job) => (
                <JobCard key={job.id} job={job} onSelect={() => setSelectedJob(job)} />
              ))}
            </div>

            {filteredJobs.length === 0 && (
              <div className="text-center py-20 text-[var(--color-muted-foreground)]">
                No jobs found matching your criteria.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
