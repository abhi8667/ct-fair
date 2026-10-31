'use client'

import Link from 'next/link'
import { Calendar, MapPin, ArrowUpRight } from 'lucide-react'
import { PublicHeader } from '@/components/public/public-header'
import { PublicFooter } from '@/components/public/public-footer'
import { ScheduleTabs } from '@/components/public/schedule-tabs'
import { conclaveInfo } from '@/lib/data'

export default function PublicSchedulePage() {
  return (
    <div className="min-h-[100dvh] bg-[#fff8ef] text-[#34252b] flex flex-col font-sans selection:bg-[#3b0924] selection:text-[#fff8ef]">
      <PublicHeader />

      <main className="flex-1 w-full pt-32 pb-24 px-4 sm:px-6 lg:px-12">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Header */}
          <div className="border-b border-[#eadfd4] pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-5 h-0.5 bg-[#3b0924]" aria-hidden="true" />
                <span className="font-mono text-xs uppercase tracking-widest text-[#a98b78] font-bold">
                  CONCRETE FAIR 2026 // {conclaveInfo.dates}
                </span>
              </div>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#34252b] font-normal tracking-tight uppercase text-balance">
                Conclave Schedule
              </h1>
              <p className="font-serif text-xl sm:text-2xl italic text-[#77666a] mt-2 max-w-2xl font-light text-pretty">
                Two days of engineering challenges, model building, design drafting, and debate competitions.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Link
                href="/register"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#3b0924] hover:bg-[#521331] text-[#fff8ef] rounded-full font-sans text-xs font-semibold tracking-wide transition-all shadow-2xs"
              >
                <span>Register via Google Form</span>
                <ArrowUpRight className="size-3.5" />
              </Link>
            </div>
          </div>

          {/* Schedule Component */}
          <ScheduleTabs />

          {/* Venue & Location Card */}
          <div className="bg-white border border-[#eadfd4] p-6 md:p-8 rounded-3xl space-y-3 shadow-2xs">
            <h3 className="font-serif text-xl text-[#34252b] font-bold flex items-center gap-2">
              <MapPin className="size-4 text-[#3b0924]" />
              <span>Campus Venue &amp; Reporting</span>
            </h3>
            <p className="text-xs text-[#77666a] leading-relaxed">
              All events take place at the Department of Civil Engineering, RV College of Engineering, {conclaveInfo.address}. Participants are advised to arrive on time for Round 1 briefings. For any questions, contact Dakshak Pradeep (+91 91085 73889), Prachi Singh (+91 80036 22469), or email ici@rvce.edu.in.
            </p>
          </div>
        </div>
      </main>

      <PublicFooter />
    </div>
  )
}
