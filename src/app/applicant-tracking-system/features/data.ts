import type { Metadata } from "next"
import type { LucideIcon } from "lucide-react"
import {
  Users,
  BarChart3,
  Workflow,
  Bot,
  Kanban,
  Mail,
  FileSearch,
  Headset,
} from "lucide-react"

export interface Feature {
  icon: LucideIcon
  title: string
  description: string
}


export const featuresData = {
  tagline: "POWERFUL FEATURES",
  title: "Everything You Need to Hire Smarter",
  subtitle: "Comprehensive tools designed around how real hiring actually works",
  items: [

    {
      icon: Workflow,
      title: "Automated Workflows",
      description:
        "Set up triggers and actions to automate repetitive tasks using Smart.R workflows. Send emails, move candidates, and update statuses automatically.",
    },
    {
      icon: BarChart3,
      title: "Real-time Analytics",
      description:
        "Comprehensive dashboards show you time-to-hire, source effectiveness, and pipeline health at a glance.",
    },
    {
      icon: FileSearch,
      title: "Resume Parsing",
      description:
        "Automatically extract and structure data from resumes using Smart.R parsing. Search across all candidates with powerful filters.",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description:
        "Share candidate profiles, collect feedback, and keep all stakeholders aligned with built-in Smart.R collaboration tools.",
    },
    {
      icon: Mail,
      title: "Email Integration",
      description:
        "Send personalized emails at scale through Smart.R. Track opens, clicks, and responses directly within the platform.",
    },
    {
      icon: Headset,
      title: "Bulgarian Support",
      description:
        "We’re just a call or email away with Smart.R support. Get fast, reliable assistance in Bulgarian—whether it’s onboarding, troubleshooting, or optimizing your hiring workflows.",
    },
  ] as Feature[],
}
