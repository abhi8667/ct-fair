'use client'

import Link from 'next/link'
import { ArrowRight, ArrowUpRight, CheckCircle, ExternalLink, Info } from 'lucide-react'
import { PublicHeader } from '@/components/public/public-header'
import { PublicFooter } from '@/components/public/public-footer'
import { GOOGLE_FORM_URL, conclaveInfo } from '@/lib/data'

export default function ParticipantPortalPage() {
  return (
    <div className="min-h-[100dvh] bg-[#fff8ef] text-[#34252b] flex flex-col font-sans selection:bg-[#3b0924] selection:text-[#fff8ef]">
      <PublicHeader />

      <main className="flex-1 w-full pt-32 pb-24 px-4 sm:px-6 lg:px-12 flex items-center justify-center">
        <div className="max-w-xl w-full bg-white border border-[#eadfd4] p-8 md:p-10 rounded-3xl shadow-sm text-center space-y-6">
          <div className="size-16 rounded-2xl bg-[#f4e9dc] text-[#3b0924] grid place-items-center mx-auto">
            <CheckCircle className="size-8" />
          </div>

          <div className="space-y-2">
            <span className="font-mono text-xs uppercase tracking-widest text-[#a98b78] font-bold block">
              OFFICIAL PARTICIPANT NOTICE
            </span>
            <h1 className="font-serif text-3xl font-bold text-[#34252b]">
              Central Google Form Registration
            </h1>
            <p className="text-xs sm:text-sm text-[#77666a] leading-relaxed">
              Registrations for Concrete Fair 2026 ({conclaveInfo.dates}) are conducted centrally via our official Google Form. No tickets or passes are required to be purchased online.
            </p>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/register"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#3b0924] hover:bg-[#521331] text-[#fff8ef] rounded-full font-sans text-xs font-semibold tracking-wide transition-all shadow-2xs"
            >
              <span>Go to Registration Form</span>
              <ArrowRight className="size-3.5" />
            </Link>

            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#f4e9dc] hover:bg-[#eadfd4] text-[#3b0924] rounded-full font-sans text-xs font-semibold tracking-wide transition-all border border-[#d8c2ab]"
            >
              <span>Open Google Form</span>
              <ExternalLink className="size-3.5" />
            </a>
          </div>

          <div className="pt-4 border-t border-[#eadfd4] text-xs font-mono text-[#77666a]">
            For queries: Dakshak Pradeep (+91 91085 73889) · {conclaveInfo.email}
          </div>
        </div>
      </main>

      <PublicFooter />
    </div>
  )
}
