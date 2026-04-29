"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import type { Post } from "../lib/posts"

type Props = {
  post: Post
}

export function BlogPostView({ post }: Props) {
  return (
    <main className="min-h-screen bg-white">
      {/* Top bar */}
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-[#085689] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
          <span className="text-xs font-semibold text-[#085689] uppercase tracking-widest">
            {post.category}
          </span>
        </div>
      </div>

      {/* Article */}
      <article className="max-w-3xl mx-auto px-6 py-16">
        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-[#085689]/10 text-[#085689] uppercase tracking-widest">
              {post.category}
            </span>
            <span className="text-sm text-slate-400">{post.date}</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-slate-900 leading-tight mb-6">
            {post.title}
          </h1>
          <p className="text-lg md:text-xl text-slate-500 leading-relaxed border-l-4 border-[#085689]/30 pl-5">
            {post.description}
          </p>
        </header>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-[#085689]/20 via-[#78B6D9]/30 to-transparent mb-12" />

        {/* Markdown Body */}
        <div className="prose prose-slate prose-lg max-w-none
          prose-headings:font-semibold prose-headings:text-slate-900
          prose-h1:text-4xl prose-h2:text-2xl prose-h3:text-xl
          prose-h2:mt-12 prose-h2:mb-4 prose-h2:border-b prose-h2:border-slate-100 prose-h2:pb-3
          prose-h3:mt-8 prose-h3:mb-3 prose-h3:text-[#085689]
          prose-p:text-slate-600 prose-p:leading-relaxed prose-p:my-5
          prose-a:text-[#085689] prose-a:no-underline hover:prose-a:underline
          prose-strong:text-slate-800 prose-strong:font-semibold
          prose-ul:my-5 prose-ol:my-5
          prose-li:text-slate-600 prose-li:my-1
          prose-blockquote:border-l-[#085689] prose-blockquote:bg-[#085689]/5 prose-blockquote:py-1 prose-blockquote:pr-4 prose-blockquote:rounded-r-lg prose-blockquote:not-italic
          prose-code:text-[#085689] prose-code:bg-[#085689]/8 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:font-mono prose-code:before:content-none prose-code:after:content-none
          prose-pre:bg-slate-900 prose-pre:rounded-2xl prose-pre:shadow-lg
          prose-hr:border-slate-200
        ">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {post.content}
          </ReactMarkdown>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-slate-100">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#085689] text-white text-sm font-medium hover:bg-[#085689]/90 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to all articles
          </Link>
        </div>
      </article>
    </main>
  )
}
