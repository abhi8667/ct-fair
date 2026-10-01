'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  AlertCircle,
  ArrowRight,
  Bell,
  Calendar,
  CheckCircle,
  Clock,
  CreditCard,
  Download,
  ExternalLink,
  Globe,
  MapPin,
  Printer,
  QrCode,
  Shield,
  ShieldAlert,
  Sparkles,
  Ticket,
  Users,
} from 'lucide-react'
import { currentDelegate, announcements, inr, events } from '@/lib/data'

export default function ParticipantPortalPage() {
  const [activeTab, setActiveTab] = useState<'registrations' | 'ticket' | 'schedule' | 'payments' | 'announcements'>('registrations')
  const delegate = currentDelegate

  return (
    <div className="min-h-[100dvh] flex flex-col">
      {/* Top Conclave Bar */}
      <header className="sticky top-0 z-40 bg-card/95 backdrop-blur-md border-b border-border">
        {/* Technical Sub-bar */}
        <div className="w-full border-b border-border/60 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 h-8 flex items-center justify-between font-mono text-[10px] tracking-wider text-muted-foreground uppercase">
            <div className="flex items-center gap-2">
              <span className="size-1.5 bg-gold inline-block" />
              <span className="text-foreground font-semibold">CONCRETE FAIR 2026 // DELEGATE CONSOLE // 30 NOV — 01 DEC 2026</span>
            </div>
            <div className="flex items-center gap-4">
              <Link href="/" className="hover:text-gold transition-colors flex items-center gap-1">
                <Globe className="size-3 text-gold" />
                <span>Public Website</span>
              </Link>
              <span className="text-border">|</span>
              <Link href="/admin" className="hover:text-gold transition-colors flex items-center gap-1">
                <ShieldAlert className="size-3" />
                <span>Admin Operations</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Portal Header */}
        <div className="h-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="grid size-10 place-items-center border border-foreground/60 bg-background">
                <svg viewBox="0 0 24 24" className="size-5 text-foreground" fill="none" stroke="currentColor" strokeWidth="1.25">
                  <path d="M3 20h18M4 9h16M12 3 4 9M12 3l8 6M6 9v11M10 9v11M14 9v11M18 9v11" />
                </svg>
              </div>
            </Link>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="font-serif text-2xl text-foreground font-medium leading-none text-balance">Concrete Fair 2026 · Participant Dashboard</h1>
                <span className="font-mono text-[10px] bg-gold/15 text-gold border border-gold/40 px-2 py-0.5 font-semibold">
                  DELEGATE PORTAL
                </span>
              </div>
              <p className="font-mono text-xs text-muted-foreground mt-1">
                {delegate.name} · {delegate.college}
              </p>
            </div>
          </div>

          {/* Delegate Badge Pill */}
          <div className="hidden md:flex items-center gap-3 bg-muted/60 border border-border px-4 py-2">
            <div className="text-right font-mono text-[11px]">
              <div className="text-muted-foreground">PASS ID: <span className="text-gold font-bold">{delegate.id}</span></div>
              <div className="text-[10px] text-success flex items-center justify-end gap-1">
                <span className="size-1.5 rounded-full bg-success" />
                <span>CONFIRMED &amp; VERIFIED</span>
              </div>
            </div>
            <div className="size-9 bg-card border border-border grid place-items-center font-serif text-lg font-bold text-foreground">
              AK
            </div>
          </div>
        </div>

        {/* Navigation Tabs Bar */}
        <div className="border-t border-border bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex space-x-1 sm:space-x-4 overflow-x-auto scrollbar-none">
            {[
              { id: 'registrations', label: 'My Registrations', icon: Ticket, count: delegate.registeredEvents.length },
              { id: 'ticket', label: 'Digital Ticket / QR', icon: QrCode },
              { id: 'schedule', label: 'My Event Schedule', icon: Calendar },
              { id: 'payments', label: 'Payments & Receipts', icon: CreditCard },
              { id: 'announcements', label: 'Announcements', icon: Bell, count: announcements.length },
            ].map((tab) => {
              const Icon = tab.icon
              const active = activeTab === tab.id
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center gap-2 py-3.5 px-3 border-b-2 font-mono text-xs tracking-wider uppercase transition-colors shrink-0 ${
                    active
                      ? 'border-gold text-foreground font-semibold bg-muted/40'
                      : 'border-transparent text-muted-foreground hover:text-foreground hover:border-border'
                  }`}
                >
                  <Icon className={`size-3.5 ${active ? 'text-gold' : 'text-muted-foreground'}`} />
                  <span>{tab.label}</span>
                  {tab.count !== undefined && (
                    <span className={`px-1.5 py-0.2 font-mono text-[10px] ${active ? 'bg-gold text-background font-bold' : 'bg-muted text-muted-foreground'}`}>
                      {tab.count}
                    </span>
                  )}
                </button>
              )
            })}
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-12 py-10 space-y-10">
        {/* =========================================================================
            TAB 1: MY REGISTRATIONS & EVENTS
            ========================================================================= */}
        {activeTab === 'registrations' && (
          <div className="space-y-8 animate-in fade-in duration-200">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border pb-4">
              <div>
                <span className="label-tech text-gold">ACTIVE ALLOCATIONS</span>
                <h2 className="font-serif text-3xl text-foreground font-normal mt-1">
                  My Registered Conclave Events ({delegate.registeredEvents.length})
                </h2>
              </div>
              <Link
                href="/register"
                className="inline-flex items-center gap-2 px-4 py-2 bg-foreground hover:bg-gold text-background hover:text-foreground font-mono text-xs uppercase tracking-wider transition-colors border border-foreground"
              >
                <span>+ Register Another Event</span>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {delegate.registeredEvents.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-card border border-border p-6 flex flex-col justify-between space-y-6 hover:border-gold/60 transition-colors"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b border-border/60 pb-3">
                      <span className="font-mono text-xs text-gold font-semibold">{item.ticketId}</span>
                      <span className="bg-success/15 text-success border border-success/30 px-2 py-0.5 font-mono text-[10px] uppercase font-medium">
                        {item.status}
                      </span>
                    </div>

                    <div>
                      <span className="font-mono text-[10px] text-muted-foreground uppercase">{item.category}</span>
                      <h3 className="font-serif text-2xl text-foreground font-medium leading-snug mt-0.5">
                        {item.eventName}
                      </h3>
                    </div>

                    <div className="space-y-2 font-mono text-xs text-muted-foreground bg-muted/40 p-4 border border-border/40">
                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="size-3.5 text-gold" />
                          <span>Session:</span>
                        </span>
                        <span className="text-foreground">{item.day} · {item.time}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-1.5">
                          <MapPin className="size-3.5 text-gold" />
                          <span>Venue:</span>
                        </span>
                        <span className="text-foreground">{item.venue}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-1.5">
                          <Clock className="size-3.5 text-gold" />
                          <span>Reporting:</span>
                        </span>
                        <span className="text-gold font-semibold">{item.reportingTime}</span>
                      </div>
                    </div>

                    {item.teamName && (
                      <div className="space-y-1 font-mono text-xs">
                        <span className="label-tech text-muted-foreground">TEAM: {item.teamName} ({item.teamRole})</span>
                        <p className="text-[11px] text-muted-foreground">
                          Members: {item.teamMembers?.join(', ')}
                        </p>
                      </div>
                    )}

                    <div className="text-[11px] font-mono text-muted-foreground flex items-start gap-1.5 pt-1">
                      <Shield className="size-3.5 text-gold shrink-0 mt-0.5" />
                      <span>PPE Mandate: <span className="text-foreground">{item.ppeRequired}</span></span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border flex items-center justify-between">
                    <span className="font-mono text-xs text-muted-foreground">
                      Fee: <span className="text-foreground font-semibold">{item.amount === 0 ? 'Complimentary' : inr(item.amount)}</span>
                    </span>
                    <button
                      type="button"
                      onClick={() => setActiveTab('ticket')}
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-gold hover:text-foreground transition-colors"
                    >
                      <QrCode className="size-3.5" />
                      <span>View Ticket QR →</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* =========================================================================
            TAB 2: DIGITAL TICKET & SCANNABLE QR PASS
            ========================================================================= */}
        {activeTab === 'ticket' && (
          <div className="space-y-8 animate-in fade-in duration-200">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border pb-4">
              <div>
                <span className="label-tech text-gold">AUTHENTICATED CREDENTIAL</span>
                <h2 className="font-serif text-3xl text-foreground font-normal mt-1">
                  Digital Conclave Pass &amp; Entry Badge
                </h2>
              </div>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => window.print()}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-card hover:bg-muted border border-border text-foreground font-mono text-xs uppercase tracking-wider transition-colors"
                >
                  <Printer className="size-3.5 text-gold" />
                  <span>Print Lanyard Badge</span>
                </button>
                <button
                  type="button"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-foreground hover:bg-gold text-background hover:text-foreground font-mono text-xs uppercase tracking-wider transition-colors border border-foreground"
                >
                  <Download className="size-3.5" />
                  <span>Download Pass (PDF)</span>
                </button>
              </div>
            </div>

            {/* Realistic Lanyard Badge Container */}
            <div className="max-w-md mx-auto">
              {/* Lanyard Clip Simulation */}
              <div className="flex flex-col items-center">
                <div className="w-12 h-4 bg-muted border border-border rounded-t" />
                <div className="w-20 h-3 bg-foreground border border-border" />
                <div className="w-6 h-6 rounded-full border-2 border-border bg-card -mt-1 z-10 grid place-items-center">
                  <div className="size-2 rounded-full bg-gold" />
                </div>
              </div>

              {/* Physical Badge Body */}
              <div className="bg-card border-2 border-foreground p-6 sm:p-8 space-y-6 shadow-2xl relative overflow-hidden -mt-3">
                {/* Gold accent line */}
                <div className="absolute top-0 left-0 right-0 h-2 bg-gold" />

                {/* Header */}
                <div className="flex items-center justify-between border-b border-border/80 pb-4 pt-1">
                  <div className="flex items-center gap-2.5">
                    <div className="grid size-8 place-items-center border border-foreground bg-background">
                      <svg viewBox="0 0 24 24" className="size-4 text-foreground" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M3 20h18M4 9h16M12 3 4 9M12 3l8 6M6 9v11M10 9v11M14 9v11M18 9v11" />
                      </svg>
                    </div>
                    <div>
                      <span className="font-serif text-lg text-foreground font-bold tracking-tight block leading-none">CONCRETE FAIR 2026</span>
                      <span className="label-tech text-muted-foreground">RVCE CIVIL ENGINEERING</span>
                    </div>
                  </div>
                  <span className="font-mono text-xs text-gold font-bold">{delegate.id}</span>
                </div>

                {/* Attendee Details */}
                <div className="space-y-3 text-center py-2">
                  <div className="size-20 mx-auto rounded-full bg-muted border-2 border-gold grid place-items-center font-serif text-2xl font-bold text-foreground">
                    AK
                  </div>
                  <div>
                    <h3 className="font-serif text-3xl text-foreground font-semibold">{delegate.name}</h3>
                    <p className="font-mono text-xs text-muted-foreground mt-0.5">{delegate.college}</p>
                    <p className="font-mono text-[11px] text-muted-foreground">{delegate.department} · {delegate.usn}</p>
                  </div>
                  <div className="inline-block bg-foreground text-background font-mono text-[10px] uppercase tracking-widest px-3 py-1 mt-2">
                    {delegate.accessLevel}
                  </div>
                </div>

                {/* Scannable Barcode & QR Code */}
                <div className="bg-background border border-border p-5 flex flex-col items-center justify-center space-y-3">
                  <QrCode className="size-36 text-foreground" />
                  <div className="w-full h-8 flex items-center justify-center gap-1 font-mono text-[10px] text-foreground tracking-[0.25em] border-t border-border pt-2">
                    ||||| | |||| || |||| |||||| | |||||
                  </div>
                  <span className="font-mono text-[10px] text-muted-foreground">
                    SCAN AT TURNSTILE GATE 01 &amp; LAB DOCKS
                  </span>
                </div>

                {/* Clearance Zones */}
                <div className="grid grid-cols-3 gap-2 text-center font-mono text-[10px] border-t border-border pt-4">
                  <div className="bg-muted/60 p-1.5 border border-border">
                    <span className="text-muted-foreground block text-[9px]">ZONE A</span>
                    <span className="font-semibold text-foreground">FLUME DOCK</span>
                  </div>
                  <div className="bg-muted/60 p-1.5 border border-border">
                    <span className="text-muted-foreground block text-[9px]">ZONE B</span>
                    <span className="font-semibold text-foreground">UTM CRUSH</span>
                  </div>
                  <div className="bg-muted/60 p-1.5 border border-border">
                    <span className="text-muted-foreground block text-[9px]">ZONE C</span>
                    <span className="font-semibold text-foreground">PLENARY</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* =========================================================================
            TAB 3: MY PERSONALIZED SCHEDULE
            ========================================================================= */}
        {activeTab === 'schedule' && (
          <div className="space-y-8 animate-in fade-in duration-200">
            <div className="border-b border-border pb-4">
              <span className="label-tech text-gold">PERSONAL ITINERARY</span>
              <h2 className="font-serif text-3xl text-foreground font-normal mt-1">
                My Conclave Schedule (30 Nov — 01 Dec 2026)
              </h2>
              <p className="text-xs text-muted-foreground mt-1">
                Showing exclusively the sessions and testing windows you are enrolled for.
              </p>
            </div>

            <div className="space-y-4">
              {delegate.registeredEvents.map((event, idx) => (
                <div
                  key={idx}
                  className="bg-card border border-border p-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-center hover:border-gold/60 transition-colors"
                >
                  <div className="md:col-span-3 space-y-1">
                    <span className="font-serif text-2xl text-foreground font-medium flex items-center gap-2">
                      <Clock className="size-4 text-gold" />
                      {event.time}
                    </span>
                    <span className="font-mono text-xs text-gold block font-semibold">{event.day}</span>
                    <span className="font-mono text-[10px] text-muted-foreground">Report: {event.reportingTime}</span>
                  </div>

                  <div className="md:col-span-6 space-y-1.5">
                    <span className="label-tech text-muted-foreground">{event.category}</span>
                    <h3 className="font-serif text-xl text-foreground font-medium">{event.eventName}</h3>
                    <div className="flex items-center gap-1.5 text-xs font-mono text-muted-foreground">
                      <MapPin className="size-3 text-gold" />
                      <span>{event.venue}</span>
                    </div>
                  </div>

                  <div className="md:col-span-3 text-left md:text-right font-mono text-xs space-y-2">
                    <span className="inline-block px-2.5 py-1 bg-success/15 text-success border border-success/30 font-medium">
                      PASS VALIDATED
                    </span>
                    <p className="text-[11px] text-muted-foreground">{event.ppeRequired}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* =========================================================================
            TAB 4: PAYMENTS & INVOICES
            ========================================================================= */}
        {activeTab === 'payments' && (
          <div className="space-y-8 animate-in fade-in duration-200">
            <div className="border-b border-border pb-4">
              <span className="label-tech text-gold">FINANCIAL DOCKET</span>
              <h2 className="font-serif text-3xl text-foreground font-normal mt-1">
                Invoices, Receipts &amp; Transaction Audit
              </h2>
            </div>

            {delegate.payments.map((invoice, idx) => (
              <div key={idx} className="bg-card border border-border p-6 md:p-8 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border pb-4 font-mono text-xs">
                  <div>
                    <div className="text-muted-foreground">INVOICE NUMBER: <span className="text-foreground font-bold">{invoice.invoiceId}</span></div>
                    <div className="text-muted-foreground mt-0.5">TRANSACTION ID: <span className="text-gold">{invoice.transactionId}</span></div>
                  </div>
                  <div className="text-right">
                    <div className="text-muted-foreground">DATE: {invoice.date}</div>
                    <span className="inline-block bg-success/15 text-success border border-success/30 px-2 py-0.5 mt-1 font-semibold">
                      STATUS: {invoice.status}
                    </span>
                  </div>
                </div>

                {/* Line Items Table */}
                <div className="overflow-x-auto">
                  <table className="w-full text-left font-mono text-xs">
                    <thead>
                      <tr className="border-b border-border text-muted-foreground">
                        <th className="pb-2">ITEM DESCRIPTION</th>
                        <th className="pb-2 text-right">AMOUNT (INR)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border/60">
                      {invoice.items.map((item, i) => (
                        <tr key={i}>
                          <td className="py-3 text-foreground">{item.desc}</td>
                          <td className="py-3 text-right font-medium text-foreground">{inr(item.amount)}</td>
                        </tr>
                      ))}
                    </tbody>
                    <tfoot>
                      <tr className="border-t border-border font-semibold">
                        <td className="pt-3">TOTAL PAID</td>
                        <td className="pt-3 text-right text-gold font-serif text-xl font-bold">{inr(invoice.total)}</td>
                      </tr>
                    </tfoot>
                  </table>
                </div>

                <div className="bg-muted/40 p-4 border border-border/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs">
                  <span className="text-muted-foreground">Payment Method: <span className="text-foreground">{invoice.method}</span></span>
                  <button
                    type="button"
                    onClick={() => window.print()}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-card hover:bg-muted border border-border text-foreground transition-colors"
                  >
                    <Download className="size-3.5 text-gold" />
                    <span>Download GST Invoice (PDF)</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* =========================================================================
            TAB 5: LIVE ANNOUNCEMENTS
            ========================================================================= */}
        {activeTab === 'announcements' && (
          <div className="space-y-8 animate-in fade-in duration-200">
            <div className="border-b border-border pb-4">
              <span className="label-tech text-gold">OFFICIAL BROADCASTS</span>
              <h2 className="font-serif text-3xl text-foreground font-normal mt-1">
                Conclave Announcements &amp; Safety Bulletins
              </h2>
              <p className="text-xs text-muted-foreground mt-1">
                Direct push communications from testing bay marshals, faculty registrars, and jury chairs.
              </p>
            </div>

            <div className="space-y-4">
              {announcements.map((a) => (
                <div
                  key={a.id}
                  className="bg-card border-l-4 border-l-gold border border-border p-6 space-y-3"
                >
                  <div className="flex items-center justify-between font-mono text-xs">
                    <span className="text-gold font-semibold uppercase tracking-wider">
                      [{a.scope}] · TO: {a.audience}
                    </span>
                    <span className="text-muted-foreground">{a.time}</span>
                  </div>
                  <h3 className="font-serif text-2xl text-foreground font-medium">{a.title}</h3>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{a.body}</p>
                  <div className="font-mono text-[11px] text-muted-foreground pt-2 border-t border-border/40">
                    Dispatched by: <span className="text-foreground font-medium">{a.author}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
