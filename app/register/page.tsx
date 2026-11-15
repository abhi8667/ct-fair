'use client'

import Link from 'next/link'
import { ArrowUpRight, ExternalLink, Mail, Phone, Calendar, Users, Info, CreditCard, Home, CheckCircle2 } from 'lucide-react'
import { PublicHeader } from '@/components/public/public-header'
import { PublicFooter } from '@/components/public/public-footer'
import { GOOGLE_FORM_URL, GOOGLE_FORM_EMBED_URL, events, conclaveInfo } from '@/lib/data'

export default function RegisterPage() {
  return (
    <div className="min-h-[100dvh] bg-[#fff8ef] text-[#34252b] flex flex-col font-sans selection:bg-[#3b0924] selection:text-[#fff8ef]">
      <PublicHeader />

      <main className="flex-1 w-full pt-28 pb-20 px-4 sm:px-6 lg:px-10">
        <div className="max-w-5xl mx-auto space-y-10">
          {/* Header */}
          <div className="border-b border-[#eadfd4] pb-6 space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-5 h-0.5 bg-[#3b0924]" aria-hidden="true" />
              <span className="text-xs uppercase tracking-widest text-[#a98b78] font-bold">
                CONCRETE FAIR 2026 — OFFICIAL REGISTRATION
              </span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#34252b] font-medium tracking-tight uppercase">
              Event Registration
            </h1>
            <p className="text-sm sm:text-base text-[#77666a] max-w-3xl leading-relaxed">
              Register your team for the 8 official competitive events of Concrete Fair 2026 organized by the Department of Civil Engineering, RV College of Engineering in association with the ICI Chapter.
            </p>
          </div>

          {/* Quick Info Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white/80 border border-[#eadfd4] p-4 rounded-xl flex items-center gap-3 shadow-2xs">
              <div className="size-10 rounded-lg bg-[#f4e9dc] grid place-items-center shrink-0">
                <Calendar className="size-5 text-[#3b0924]" />
              </div>
              <div>
                <span className="font-mono text-[10px] uppercase text-[#77666a] block">Event Dates</span>
                <span className="font-bold text-xs text-[#34252b]">{conclaveInfo.dates}</span>
              </div>
            </div>

            <div className="bg-white/80 border border-[#eadfd4] p-4 rounded-xl flex items-center gap-3 shadow-2xs">
              <div className="size-10 rounded-lg bg-[#f4e9dc] grid place-items-center shrink-0">
                <CreditCard className="size-5 text-[#3b0924]" />
              </div>
              <div>
                <span className="font-mono text-[10px] uppercase text-[#77666a] block">Registration Fee</span>
                <span className="font-bold text-xs text-[#3b0924]">{conclaveInfo.registrationFee}</span>
              </div>
            </div>

            <div className="bg-white/80 border border-[#eadfd4] p-4 rounded-xl flex items-center gap-3 shadow-2xs">
              <div className="size-10 rounded-lg bg-[#f4e9dc] grid place-items-center shrink-0">
                <Home className="size-5 text-[#3b0924]" />
              </div>
              <div>
                <span className="font-mono text-[10px] uppercase text-[#77666a] block">Accommodation</span>
                <span className="font-bold text-xs text-[#34252b]">Around {conclaveInfo.accommodationFee}</span>
              </div>
            </div>

            <div className="bg-white/80 border border-[#eadfd4] p-4 rounded-xl flex items-center gap-3 shadow-2xs">
              <div className="size-10 rounded-lg bg-[#f4e9dc] grid place-items-center shrink-0">
                <Mail className="size-5 text-[#3b0924]" />
              </div>
              <div>
                <span className="font-mono text-[10px] uppercase text-[#77666a] block">Helpdesk / Queries</span>
                <span className="font-bold text-xs text-[#34252b]">{conclaveInfo.email}</span>
              </div>
            </div>
          </div>

          {/* Fee & Accommodation Advisory Card */}
          <div className="bg-[#fff8ef] border border-[#d8c2ab] rounded-2xl p-6 sm:p-7 shadow-2xs space-y-4">
            <div className="flex items-center gap-2 pb-3 border-b border-[#eadfd4]">
              <span className="w-4 h-0.5 bg-[#3b0924]" />
              <span className="font-sans text-xs uppercase tracking-wider text-[#3b0924] font-bold">
                PARTICIPATION FEES &amp; DELEGATE ACCOMMODATION
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Fee card */}
              <div className="bg-white border border-[#eadfd4] rounded-xl p-5 space-y-2 shadow-2xs">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#77666a] uppercase tracking-wider">Official Registration Fee</span>
                  <span className="px-2.5 py-0.5 rounded-md bg-[#3b0924] text-white font-mono font-bold text-xs">
                    ₹ 118
                  </span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#34252b]">
                  ₹ 118 <span className="font-sans text-xs font-normal text-[#77666a]">/ registration</span>
                </h3>
                <p className="text-xs text-[#77666a] leading-relaxed">
                  Grants entry to registered competitions, technical sessions, participant kit, event access, and evaluation. Pay through the designated mode detailed in the Google Form below.
                </p>
              </div>

              {/* Accommodation card */}
              <div className="bg-white border border-[#eadfd4] rounded-xl p-5 space-y-2 shadow-2xs">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#77666a] uppercase tracking-wider">Outstation Stay</span>
                  <span className="px-2.5 py-0.5 rounded-md bg-[#d8c2ab]/30 text-[#3b0924] border border-[#d8c2ab] font-mono font-bold text-xs">
                    Around ₹ 350
                  </span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#34252b]">
                  ~ ₹ 350 <span className="font-sans text-xs font-normal text-[#77666a]">/ person</span>
                </h3>
                <p className="text-xs text-[#77666a] leading-relaxed">
                  Budget hostel / dormitory accommodation arranged for outstation student delegates around ₹ 350. Please indicate requirement in the form or contact our hospitality coordinators.
                </p>
              </div>
            </div>
          </div>

          {/* Embedded Google Form Container */}
          <div className="bg-white border border-[#eadfd4] rounded-2xl shadow-sm overflow-hidden">
            {/* Top Bar with Direct Link Button */}
            <div className="p-4 sm:p-5 border-b border-[#eadfd4] bg-[#f4e9dc]/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div>
                <span className="text-xs uppercase tracking-wider text-[#3b0924] font-bold block">
                  CENTRAL REGISTRATION PORTAL
                </span>
                <p className="text-xs text-[#77666a]">
                  Please complete the form below to register your team or participation.
                </p>
              </div>

              <a
                href={GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#3b0924] hover:bg-[#521331] text-[#fff8ef] rounded-lg font-sans text-xs font-semibold tracking-wide transition-all shadow-2xs shrink-0 cursor-pointer"
              >
                <span>Open in Fullscreen / New Tab</span>
                <ExternalLink className="size-3.5" />
              </a>
            </div>

            {/* Embed Area */}
            <div className="w-full relative min-h-[750px] sm:min-h-[920px] bg-white">
              <iframe
                src={GOOGLE_FORM_EMBED_URL}
                title="Concrete Fair 2026 Registration Form"
                className="w-full h-[920px] border-0"
              >
                Loading registration form…
              </iframe>
            </div>
          </div>

          {/* Reference: Official Event Lineup & Team Sizes */}
          <div className="bg-[#f4e9dc]/40 border border-[#eadfd4] p-6 sm:p-8 rounded-2xl space-y-6">
            <div className="border-b border-[#eadfd4] pb-4">
              <span className="text-xs uppercase text-[#a98b78] font-bold block">
                REFERENCE LINEUP
              </span>
              <h2 className="font-serif text-2xl text-[#34252b] font-medium mt-0.5">
                Eligible Events &amp; Team Configurations
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {events.map((e) => (
                <div
                  key={e.id}
                  className="bg-white p-4 rounded-xl border border-[#eadfd4] space-y-2 flex flex-col justify-between shadow-2xs"
                >
                  <div>
                    <div className="flex items-center justify-between text-[11px] text-[#77666a]">
                      <span className="font-mono font-bold text-[#3b0924]">{e.code}</span>
                      <span className="px-2 py-0.5 bg-[#f4e9dc] text-[#3b0924] rounded-md font-bold text-[10px] uppercase">
                        {e.day}
                      </span>
                    </div>
                    <h3 className="font-serif text-base font-bold text-[#34252b] mt-1">
                      {e.name}
                    </h3>
                    <p className="text-xs text-[#77666a] mt-1 line-clamp-2">
                      {e.subtitle}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#eadfd4] text-xs text-[#3b0924] font-medium flex items-center justify-between">
                    <span>{e.teamSize}</span>
                    <span className="text-[#a98b78] font-semibold">{e.category}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Need Assistance? */}
          <div className="p-6 rounded-2xl bg-white border border-[#eadfd4] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="size-10 rounded-full bg-[#f4e9dc] grid place-items-center shrink-0">
                <Info className="size-5 text-[#3b0924]" />
              </div>
              <div>
                <h4 className="font-sans font-bold text-sm text-[#34252b]">
                  Questions regarding events or registration?
                </h4>
                <p className="text-xs text-[#77666a]">
                  Events &amp; Registration WhatsApp: Prateek (+91 95907 93555), Swathi (+91 83102 76278), Vishal (+91 93800 86451) · General: Abhishek (+91 91480 76735) · ici@rvce.edu.in
                </p>
              </div>
            </div>
            <Link
              href="/faq"
              className="text-xs font-semibold text-[#3b0924] hover:underline shrink-0"
            >
              View FAQs →
            </Link>
          </div>
        </div>
      </main>

      <PublicFooter />
    </div>
  )
}
