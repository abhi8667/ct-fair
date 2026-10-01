'use client'

import Link from 'next/link'
import { Download, Calendar, MapPin } from 'lucide-react'
import { PublicHeader } from '@/components/public/public-header'
import { PublicFooter } from '@/components/public/public-footer'
import { ScheduleTabs } from '@/components/public/schedule-tabs'

export default function PublicSchedulePage() {
  return (
    <div className="min-h-[100dvh] bg-background text-foreground flex flex-col blueprint-grid selection:bg-gold-soft">
      <PublicHeader />

      <main className="flex-1 w-full pt-32 pb-24 px-4 sm:px-6 lg:px-12">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Header */}
          <div className="border-b border-border pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="label-tech text-gold uppercase tracking-widest block">
                CONCRETE FAIR 2026 // 30 NOV — 01 DEC 2026
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-foreground font-normal tracking-tight mt-2 uppercase text-balance">
                Conclave Itinerary &amp; Timeline
              </h1>
              <p className="font-serif text-xl sm:text-2xl italic text-muted-foreground mt-2 max-w-2xl font-light text-pretty">
                Two intensive days of destructive testing, algorithmic modeling sprints, keynote symposia, and prize ceremonies.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-card hover:bg-muted border border-border text-foreground font-mono text-xs uppercase tracking-wider transition-colors"
              >
                <Download className="size-3.5 text-gold" />
                <span>Download Schedule (PDF)</span>
              </button>
              <Link
                href="/register"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-foreground hover:bg-gold text-background hover:text-foreground border border-foreground font-mono text-xs uppercase tracking-wider transition-colors"
              >
                <span>Register Passes →</span>
              </Link>
            </div>
          </div>

          {/* Schedule Component */}
          <ScheduleTabs />

          {/* Venue & Reporting Protocol Card */}
          <div className="bg-card border border-border p-6 md:p-8 space-y-4">
            <h3 className="font-serif text-xl text-foreground font-medium flex items-center gap-2">
              <MapPin className="size-4 text-gold" />
              <span>Campus Venue &amp; Reporting Guidelines</span>
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              All delegates must complete credential verification at the Civil Foyer Registration Desk before 08:30 AM on Day 01 to receive their laminated RFID pass and safety equipment docket. Flume tank and UTM testing bay access is strictly regulated according to assigned time slots.
            </p>
          </div>
        </div>
      </main>

      <PublicFooter />
    </div>
  )
}
