'use client'

import Link from 'next/link'
import { Mail, Phone, MapPin, Info, ArrowUpRight } from 'lucide-react'
import { PublicHeader } from '@/components/public/public-header'
import { PublicFooter } from '@/components/public/public-footer'
import { FAQAccordion } from '@/components/public/faq-accordion'
import { conclaveInfo } from '@/lib/data'

export default function PublicFAQPage() {
  return (
    <div className="min-h-[100dvh] bg-[#fff8ef] text-[#34252b] flex flex-col font-sans selection:bg-[#3b0924] selection:text-[#fff8ef]">
      <PublicHeader />

      <main className="flex-1 w-full pt-32 pb-24 px-4 sm:px-6 lg:px-12">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Header */}
          <div className="border-b border-[#eadfd4] pb-8 space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-5 h-0.5 bg-[#3b0924]" aria-hidden="true" />
              <span className="font-mono text-xs uppercase tracking-widest text-[#a98b78] font-bold">
                CONCRETE FAIR 2026 // FREQUENTLY ASKED QUESTIONS
              </span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#34252b] font-normal tracking-tight uppercase text-balance">
              Frequently Asked Questions
            </h1>
            <p className="font-serif text-xl sm:text-2xl italic text-[#77666a] mt-2 max-w-2xl font-light text-pretty">
              Find answers regarding event schedules, team compositions, registration via Google Form, and sponsorship.
            </p>
          </div>

          {/* Quick Notice Banner */}
          <div className="bg-white border-l-4 border-[#3b0924] p-6 rounded-r-2xl border-y border-r border-[#eadfd4] flex items-start gap-4 shadow-2xs">
            <Info className="size-5 text-[#3b0924] shrink-0 mt-0.5" />
            <div className="space-y-1">
              <h4 className="font-serif text-lg text-[#34252b] font-medium">
                Official Registration via Google Form
              </h4>
              <p className="text-xs text-[#77666a] leading-relaxed">
                Registrations for all 8 events are managed centrally via our official Google Form without any ticketing fees. Please check the individual team sizes and event details before submitting.
              </p>
            </div>
          </div>

          {/* FAQ Accordion */}
          <FAQAccordion />

          {/* Contact Directory */}
          <div className="bg-white border border-[#eadfd4] p-8 rounded-3xl space-y-6 shadow-2xs">
            <h3 className="font-serif text-2xl text-[#34252b] font-medium">
              Conclave Secretariat &amp; Coordination
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs">
              <div className="space-y-2 border-l-2 border-[#3b0924] pl-4">
                <span className="text-[10px] uppercase text-[#a98b78] font-bold block">STUDENT COORDINATOR</span>
                <p className="text-[#34252b] font-bold text-sm">Dakshak Pradeep</p>
                <p className="text-[#77666a]">+91 91085 73889</p>
                <p className="text-[#77666a]">{conclaveInfo.email}</p>
              </div>

              <div className="space-y-2 border-l-2 border-[#3b0924] pl-4">
                <span className="text-[10px] uppercase text-[#a98b78] font-bold block">STUDENT COORDINATOR</span>
                <p className="text-[#34252b] font-bold text-sm">Prachi Singh</p>
                <p className="text-[#77666a]">+91 80036 22469</p>
                <p className="text-[#77666a]">{conclaveInfo.email}</p>
              </div>

              <div className="space-y-2 border-l-2 border-[#3b0924] pl-4">
                <span className="text-[10px] uppercase text-[#a98b78] font-bold block">ORGANIZATION</span>
                <p className="text-[#34252b] font-bold text-sm">ICI Student Chapter</p>
                <p className="text-[#77666a]">Dept. of Civil Engineering, RVCE</p>
                <p className="text-[#77666a]">{conclaveInfo.instagram}</p>
              </div>
            </div>

            <div className="pt-4 border-t border-[#eadfd4] flex items-center justify-between">
              <span className="text-xs text-[#77666a]">Ready to participate in Concrete Fair 2026?</span>
              <Link
                href="/register"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-[#3b0924] hover:bg-[#521331] text-white rounded-full font-sans text-xs font-semibold"
              >
                <span>Go to Registration Form</span>
                <ArrowUpRight className="size-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </main>

      <PublicFooter />
    </div>
  )
}
