'use client'

import Link from 'next/link'
import { Mail, Phone, MapPin, AlertTriangle, ShieldCheck } from 'lucide-react'
import { PublicHeader } from '@/components/public/public-header'
import { PublicFooter } from '@/components/public/public-footer'
import { FAQAccordion } from '@/components/public/faq-accordion'

export default function PublicFAQPage() {
  return (
    <div className="min-h-[100dvh] bg-background text-foreground flex flex-col blueprint-grid selection:bg-gold-soft">
      <PublicHeader />

      <main className="flex-1 w-full pt-32 pb-24 px-4 sm:px-6 lg:px-12">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Header */}
          <div className="border-b border-border pb-8">
            <span className="label-tech text-gold uppercase tracking-widest block">
              CONCRETE FAIR 2026 // DELEGATE PROTOCOLS
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-foreground font-normal tracking-tight mt-2 uppercase text-balance">
              Frequently Referenced Specifications
            </h1>
            <p className="font-serif text-xl sm:text-2xl italic text-muted-foreground mt-2 max-w-2xl font-light text-pretty">
              Essential answers regarding testing bay safety, outstation lodging, team eligibility, and institutional waivers.
            </p>
          </div>

          {/* Safety Notice Banner */}
          <div className="bg-card border-l-4 border-gold p-6 flex items-start gap-4">
            <AlertTriangle className="size-5 text-gold shrink-0 mt-0.5" />
            <div className="space-y-1">
              <h4 className="font-serif text-lg text-foreground font-medium">
                Mandatory Laboratory Safety Protocol (IS 516 &amp; NABL)
              </h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Steel-toed boots, protective glasses, and laboratory coats are mandatory for all attendees inside Heavy Testing Bay A, the Structures Lab, and the Materials Yard. Personal protective equipment (PPE) can be reserved at Registration Desk 3.
              </p>
            </div>
          </div>

          {/* FAQ Accordion */}
          <FAQAccordion />

          {/* Contact Directory */}
          <div className="bg-card border border-border p-8 space-y-6">
            <h3 className="font-serif text-2xl text-foreground font-medium">
              Conclave Secretariat &amp; Helpdesk Directory
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs">
              <div className="space-y-2 border-l border-border pl-4">
                <span className="label-tech text-gold block">FACULTY REGISTRAR</span>
                <p className="text-foreground font-medium">TBA</p>
                <p className="text-muted-foreground">concretefair@rvce.edu.in</p>
                <p className="text-muted-foreground">Contact: TBA</p>
              </div>
              <div className="space-y-2 border-l border-border pl-4">
                <span className="label-tech text-gold block">MATERIALS &amp; LABS</span>
                <p className="text-foreground font-medium">TBA</p>
                <p className="text-muted-foreground">concretefair@rvce.edu.in</p>
                <p className="text-muted-foreground">Contact: TBA</p>
              </div>
              <div className="space-y-2 border-l border-border pl-4">
                <span className="label-tech text-gold block">DELEGATE LOGISTICS</span>
                <p className="text-foreground font-medium">TBA</p>
                <p className="text-muted-foreground">concretefair@rvce.edu.in</p>
                <p className="text-muted-foreground">Contact: TBA</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <PublicFooter />
    </div>
  )
}
