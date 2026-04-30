"use client"

import * as React from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Spinner } from "@/components/ui/spinner"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { contactFormSchema, type ContactFormData } from "@/lib/schemas"
import { MessageField } from "./message-field"
import { TagInput } from "./tag-input"
import { Phone } from "lucide-react"

type Mode = "candidate" | "company"
type Interest = "hiring" | "demo" | "salary"

interface ContactFormProps {
  mode?: Mode
}

const CAPTCHA_QUESTION = "8 + 5?"
const CAPTCHA_ANSWER = "13"

const SHARED_TAGS = ["urgent", "follow-up", "question", "custom-request"]

const INTEREST_TAGS: Record<Interest, string[]> = {
  hiring: ["hiring", "recruitment", "open-roles", "budget", "timeline", ...SHARED_TAGS],
  demo: ["demo", "product-tour", "sales", "pricing", "meeting", ...SHARED_TAGS],
  salary: ["salary", "benchmarking", "compensation", "market-data", ...SHARED_TAGS],
}

export function ContactForm({ mode = "candidate" }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [isSubmitted, setIsSubmitted] = React.useState(false)
  const [interest, setInterest] = React.useState<Interest>("hiring")
  const [tags, setTags] = React.useState<string[]>([])
  const [file, setFile] = React.useState<File | null>(null)
  const [captchaInput, setCaptchaInput] = React.useState("")
  const [captchaError, setCaptchaError] = React.useState("")

  const handleInterestChange = (v: string) => {
    setInterest(v as Interest)
    setTags([])
  }

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: { name: "", email: "", phone: "", title: "", message: "" },
  })

  const resetForm = () => {
    setIsSubmitted(false)
    setCaptchaInput("")
    setCaptchaError("")
    setFile(null)
    setTags([])
  }

  async function onSubmit(data: ContactFormData) {
    setCaptchaError("")

    if (captchaInput.trim() !== CAPTCHA_ANSWER) {
      setCaptchaError("Incorrect answer. Please try again.")
      return
    }

    setIsSubmitting(true)
    try {
      const formData = new FormData()
      Object.entries(data).forEach(([key, val]) => formData.append(key, val))
      formData.append("mode", mode)
      if (mode === "company") {
        formData.append("interest", interest)
        formData.append("tags", JSON.stringify(tags))
      }
      if (mode === "candidate" && file) formData.append("cv", file)

      const response = await fetch("/api/contact", { method: "POST", body: formData })
      if (!response.ok) throw new Error("Failed to send message")

      setIsSubmitted(true)
      form.reset()
      setCaptchaInput("")
      setFile(null)
      setTags([])
    } catch (error) {
      console.error(error)
      alert("Failed to send message. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mb-6">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-2xl font-semibold text-[#0a3d62] mb-2">Thank you!</h3>
        <p className="text-[#0a3d62]/70">We&apos;ll get back to you within 24 hours.</p>
        <Button variant="outline" className="mt-6 border-slate-200 hover:bg-slate-50 hover:text-[#0a3d62]" onClick={resetForm}>
          Send another message
        </Button>
      </div>
    )
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <FormField control={form.control} name="name" render={({ field }) => (
            <FormItem>
              <FormLabel>{mode === "company" ? "Company Name" : "Full Name"}</FormLabel>
              <FormControl>
                <Input placeholder={mode === "company" ? "Company Name" : "John Doe"} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )} />

          <FormField control={form.control} name="email" render={({ field }) => (
            <FormItem>
              <FormLabel>Email Address</FormLabel>
              <FormControl>
                <Input type="email" placeholder="your@email.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <FormField control={form.control} name="phone" render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <Input type="tel" placeholder="+359 888 123 456" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )} />

          <FormField control={form.control} name="title" render={({ field }) => (
            <FormItem>
              <FormLabel>Job Title / Position</FormLabel>
              <FormControl>
                <Input
                  placeholder={mode === "company" ? "Hiring Manager" : "Senior Frontend Developer"}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )} />
        </div>

        {mode === "company" && (
          <div className="space-y-4">
            <div>
              <FormLabel>I&apos;m interested in:</FormLabel>
              <Select value={interest} onValueChange={handleInterestChange}>
                <SelectTrigger className="h-12 w-full mt-2">
                  <SelectValue placeholder="Select an option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="hiring">Hiring for my company</SelectItem>
                  <SelectItem value="demo">Smart.r ATS/CRM demonstration</SelectItem>
                  <SelectItem value="salary">Salary Benchmarking</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <FormLabel className="text-sm font-medium text-slate-700 mb-2 block">
                Topics / Tags
                <span className="ml-2 text-[11px] font-normal text-slate-400">(optional)</span>
              </FormLabel>
              <TagInput
                value={tags}
                onChange={setTags}
                suggestions={INTEREST_TAGS[interest]}
                maxTags={5}
                placeholder="Add relevant tags…"
              />
            </div>
          </div>
        )}

        <MessageField form={form} interest={interest} mode={mode} />

        <div className="pt-4 border-t border-slate-100">
          <FormLabel className="text-sm font-medium text-[#0a3d62] mb-2 block">
            Security Check
          </FormLabel>
          <div className="flex flex-col sm:flex-row gap-4 items-start">
            <div className="bg-slate-50 border border-slate-100 rounded-xl px-5 py-3 text-lg font-mono tracking-wider flex-shrink-0 text-[#0a3d62]">
              {CAPTCHA_QUESTION}
            </div>
            <div className="flex-1 w-full">
              <Input
                type="text"
                placeholder="Enter answer here"
                value={captchaInput}
                onChange={(e) => setCaptchaInput(e.target.value)}
                className="h-12"
              />
              {captchaError && (
                <p className="text-red-600 text-sm mt-1.5">{captchaError}</p>
              )}
            </div>
          </div>
          <p className="text-xs text-[#0a3d62]/60 mt-2">
            Please solve this simple math question to prove you&apos;re not a robot.
          </p>
        </div>

        {mode === "candidate" && (
          <div className="pt-6 border-t border-slate-100">
            <FormLabel className="text-sm font-medium text-[#0a3d62] mb-2 block">
              Upload your CV
            </FormLabel>
            <Input
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={(e) => e.target.files?.[0] && setFile(e.target.files[0])}
              className="h-12 file:bg-[#0a3d62] file:text-white file:border-0 file:rounded-md file:px-4 file:mr-4 file:h-full cursor-pointer"
            />
            {file && (
              <div className="mt-3 flex items-center text-sm text-green-600 font-medium">
                <CheckCircle className="w-4 h-4 mr-2" />
                <span>{file.name} uploaded successfully</span>
              </div>
            )}
            <p className="text-xs text-[#0a3d62]/60 mt-2">
              Accepted formats: PDF, DOCX. Max size: 5MB.
            </p>
          </div>
        )}

        <p className="text-center text-sm text-[#0a3d62]/60 mt-6">
          We typically reply within 24 hours during business days
        </p>
        <div className="flex justify-center">
          <a
            href="tel:+359888123456"
            className="flex items-center gap-2 text-[#0a3d62] hover:text-[#0a3d62]/80 transition-colors"
          >
            <Phone className="w-5 h-5" />
            <span className="hidden sm:inline text-sm font-medium">
              +359 888 123 456
            </span>
          </a>
        </div>

        <Button
          type="submit"
          size="lg"
          className="w-full bg-[#0a3d62] hover:bg-[#0a3d62]/90 text-white cursor-pointer shadow-sm"
          disabled={isSubmitting}
        >
          {isSubmitting ? <><Spinner className="mr-2" /> Sending...</> : "Send Message"}
        </Button>
      </form>
    </Form>
  )
}
