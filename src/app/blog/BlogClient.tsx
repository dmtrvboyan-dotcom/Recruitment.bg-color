"use client"

import Link from "next/link"
import { useState } from "react"
import { ArrowRight } from "lucide-react"
import { ScrollReveal } from "@/components/common"
import { HERO_DATA, TABS, TAB_CHIPS, type TabKey, type BlogPost } from "./data"
import type { Post } from "./lib/posts"

type Props = {
  posts: Post[]
  heroData: typeof HERO_DATA
  tabs: typeof TABS
  tabChips: typeof TAB_CHIPS
}

export function BlogClient({ posts, heroData, tabs, tabChips }: Props) {
  const [activeTab, setActiveTab] = useState<TabKey>("ats")
  const [activeChip, setActiveChip] = useState("All")

  const handleTabChange = (tab: TabKey) => {
    setActiveTab(tab)
    setActiveChip("All")
  }

  const chips = tabChips[activeTab]

  const filteredPosts = posts.filter((post) => {
    const tabMatch = post.tab === activeTab
    const chipMatch = activeChip === "All" || post.category === activeChip
    return tabMatch && chipMatch
  })

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm font-medium text-[#085689] uppercase tracking-widest mb-4">
              {heroData.tagline}
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight text-balance mb-6">
              {heroData.title}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              {heroData.description}
            </p>
          </div>
        </div>
      </section>

      {/* Tabs + Chips + Cards */}
      <ScrollReveal>
        <section className="px-4 pb-20 md:px-8 md:pb-28">
          <div className="mx-auto max-w-6xl">

            {/* Tab Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 bg-[#f5f5f5] rounded-2xl p-2 mb-8">
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => handleTabChange(tab.key)}
                  className={`py-3 px-4 rounded-xl text-sm font-medium transition-all duration-200 ${
                    activeTab === tab.key
                      ? "bg-[#085689] text-white shadow-md"
                      : "text-slate-500 hover:text-[#085689] hover:bg-white"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Filter Chips */}
            <div className="flex flex-wrap gap-2 mb-10">
              {chips.map((chip) => (
                <button
                  key={chip}
                  onClick={() => setActiveChip(chip)}
                  className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200 ${
                    activeChip === chip
                      ? "bg-[#085689] text-white border-[#085689]"
                      : "border-slate-200 text-slate-500 hover:border-[#78B6D9] hover:text-[#085689]"
                  }`}
                >
                  {chip}
                </button>
              ))}
            </div>

            {/* Cards Grid */}
            {filteredPosts.length === 0 ? (
              <div className="text-center py-20 text-slate-400">
                <p className="text-lg">No articles in this category yet. Check back soon!</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPosts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-6 bg-[#f5f5f5] rounded-3xl border border-slate-100 hover:border-[#78B6D9]/30 hover:shadow-xl transition-all duration-300 flex flex-col"
                  >
                    {/* Placeholder image area */}
                    <div className="w-full h-44 rounded-2xl bg-[#085689]/5 mb-5 flex items-center justify-center overflow-hidden">
                      <div className="w-12 h-12 rounded-xl bg-[#085689]/10 flex items-center justify-center">
                        <ArrowRight className="w-5 h-5 text-[#085689]" />
                      </div>
                    </div>

                    <span className="text-xs font-semibold text-[#085689] uppercase tracking-widest mb-2">
                      {post.category}
                    </span>

                    <h3 className="font-semibold text-lg text-black mb-3 leading-snug group-hover:text-[#085689] transition-colors">
                      {post.title}
                    </h3>

                    <p className="text-slate-600 text-[15px] leading-relaxed flex-1">
                      {post.description}
                    </p>

                    <div className="mt-4 pt-4 border-t border-slate-200 flex items-center justify-between">
                      <span className="text-xs text-slate-400">{post.date}</span>
                      <span className="text-xs font-medium text-[#085689] flex items-center gap-1 group-hover:gap-2 transition-all">
                        Read more <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>
      </ScrollReveal>
    </>
  )
}
