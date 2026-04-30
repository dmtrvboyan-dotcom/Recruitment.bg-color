import { memo } from "react"
import * as ReactDOM from "react-dom"
import { MapPin, X } from "lucide-react"
import { JOB_DETAILS, type Job } from "@/lib/data/jobs"
import { useEscapeKey, useBodyScrollLockWithPosition } from "@/lib/hooks"
import { BulletList } from "./bullet-list"

interface JobModalProps {
  job: Job
  onClose: () => void
}

export const JobModal = memo(function JobModal({ job, onClose }: JobModalProps) {
  const details = JOB_DETAILS[job.id]

  useEscapeKey(onClose)
  useBodyScrollLockWithPosition(true)

  const modalContent = (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 99999,
        background: "rgba(0,0,0,0.5)",
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "center",
      }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      <style>{`
        @keyframes slideUp {
          from { transform: translateY(100%); opacity: 0; }
          to   { transform: translateY(0);    opacity: 1; }
        }
        @media (min-width: 640px) {
          .modal-panel {
            align-self: center !important;
            max-width: 72rem !important;
            height: 90dvh !important;
          }
        }
      `}</style>

      <div
        className="modal-panel bg-white w-full flex flex-col"
        style={{
          height: "100dvh",
          maxHeight: "100dvh",
          animation: "slideUp 0.35s cubic-bezier(0.32, 0.72, 0, 1) forwards",
          overflow: "hidden",
        }}
      >
        {/* Header */}
        <div className="bg-[#0a3d62] p-6 text-white relative shrink-0">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center transition-colors"
            style={{ background: "rgba(255,255,255,0.15)" }}
            onMouseOver={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.3)")}
            onMouseOut={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.15)")}
          >
            <X className="w-4 h-4" />
          </button>

          <h2 className="text-xl font-bold leading-tight pr-12 mb-1 text-white">{job.title}</h2>
          <p className="text-sm opacity-75 mb-4">{job.seniority}</p>

          <div className="flex flex-wrap gap-2">
            {[
              { label: <><MapPin className="w-3 h-3" /> {job.location}</>, inline: true },
              { label: job.type },
              { label: job.contract, capitalize: true },
            ].map((badge, i) => (
              <span
                key={i}
                className={`flex items-center gap-1 text-xs px-3 py-1 rounded-full ${badge.capitalize ? "capitalize" : ""}`}
                style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.25)" }}
              >
                {badge.label}
              </span>
            ))}
            {job.techStack.map((t, i) => (
              <span
                key={i}
                className="text-xs px-3 py-1 rounded-full"
                style={{ background: "rgba(120,182,217,0.35)", border: "1px solid rgba(120,182,217,0.5)" }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4" style={{ WebkitOverflowScrolling: "touch" }}>
          <div className="bg-slate-50 p-4 rounded-2xl">
            <p className="text-xs font-semibold text-[#0a3d62] uppercase tracking-widest mb-2">
              Position Overview
            </p>
            <p className="text-sm text-[#0a3d62] leading-relaxed">{details.overview}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-blue-50 rounded-2xl p-4">
              <p className="text-xs font-semibold text-[#0a3d62] uppercase tracking-widest mb-1">Responsibilities</p>
              <BulletList items={details.responsibilities} color="#0a3d62" />
            </div>
            <div className="bg-blue-50 rounded-2xl p-4">
              <p className="text-xs font-semibold text-[#0a3d62] uppercase tracking-widest mb-1">Requirements</p>
              <BulletList items={details.requirements} color="#0a3d62" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-green-50 rounded-2xl p-4">
              <p className="text-xs font-semibold text-green-600 uppercase tracking-widest mb-1">Nice to Have</p>
              <BulletList items={details.niceToHave} color="#10b981" />
            </div>
            <div className="bg-amber-50 rounded-2xl p-4">
              <p className="text-xs font-semibold text-amber-600 uppercase tracking-widest mb-1">What We Offer</p>
              <BulletList items={details.offers} color="#f59e0b" />
            </div>
          </div>

          <p className="text-md text-[#0a3d62]/60 leading-relaxed text-center max-w-5xl mx-auto mt-5 mb-5">
            By applying for this position, you agree that your personal data will be processed according to our privacy policy.
          </p>
        </div>

        {/* Footer */}
        <div className="shrink-0 px-5 py-4 border-t border-slate-100">
          <button
            onClick={() => console.log(`Applying for: ${job.title}`)}
            className="w-full bg-[#0a3d62] hover:bg-[#0a3d62]/90 text-white py-4 rounded-2xl font-semibold text-base transition-all active:scale-[0.98] shadow-sm"
          >
            Apply for this role
          </button>
        </div>
      </div>
    </div>
  )

  return ReactDOM.createPortal(modalContent, document.body)
})
