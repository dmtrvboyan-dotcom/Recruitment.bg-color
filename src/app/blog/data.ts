export const HERO_DATA = {
  tagline: "Your hub for",
  title: "Careers, Hiring & IT Trends",
  description:
    "From career advice and hiring strategies to software trends and tech news — everything you need is here.",
}

export type TabKey = "ats" | "companies" | "candidates" | "it"

export const TABS: { key: TabKey; label: string }[] = [
  { key: "ats", label: "ATS Software" },
  { key: "companies", label: "For Companies" },
  { key: "candidates", label: "For Candidates" },
  { key: "it", label: "IT News" },
]

export type BlogPost = {
  slug: string
  category: string
  title: string
  description: string
  date: string
  tab: TabKey
}

// Chip filters per tab
export const TAB_CHIPS: Record<TabKey, string[]> = {
  ats: ["All", "Features", "Integrations", "Updates", "Tutorials", "Best Practices"],
  companies: ["All", "Employer Branding", "DEI", "HR Trends", "Case Studies", "Scaling"],
  candidates: ["All", "Job Search", "Interview Prep", "Career Growth", "Remote Work", "Salary Tips"],
  it: ["All", "AI & ML", "Cybersecurity", "Cloud", "Dev Tools", "Industry News"],
}
