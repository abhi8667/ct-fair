'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, QrCode, ShieldCheck, Ticket } from 'lucide-react'
import { PublicHeader } from '@/components/public/public-header'
import { PublicFooter } from '@/components/public/public-footer'
import { events } from '@/lib/data'

export default function RegisterPage() {
  const [step, setStep] = useState<'form' | 'success'>('form')

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    college: '',
    usn: '',
    regType: 'Individual',
    selectedEventId: 'canoe-x',
    teamName: '',
    teamMembers: '',
    paymentMethod: 'UPI',
  })

  const selectedEvent = events.find((e) => e.id === formData.selectedEventId) || events[0]
  const fee = selectedEvent ? selectedEvent.fee : 1200
  const generatedTicket = `CF26-${selectedEvent.code.replace('CF-', '')}-${Math.floor(1000 + Math.random() * 9000)}`

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStep('success')
  }

  return (
    <div className="min-h-[100dvh] bg-background text-foreground flex flex-col blueprint-grid selection:bg-gold-soft">
      <PublicHeader />

      <main className="flex-1 w-full pt-32 pb-24 px-4 sm:px-6 lg:px-12">
        <div className="max-w-4xl mx-auto space-y-10">
          {/* Header */}
          <div className="border-b border-border pb-6">
            <span className="label-tech text-gold uppercase tracking-widest block">
              REGISTRATION DESK // CONCRETE FAIR 2026
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl text-foreground font-normal tracking-tight mt-1 uppercase text-balance">
              Delegate &amp; Contingent Registration
            </h1>
            <p className="font-serif text-xl italic text-muted-foreground mt-2 font-light text-pretty">
              Register for testing bay competitions, computational sprints, and accredited masterclasses.
            </p>
          </div>

          {step === 'form' ? (
            <form onSubmit={handleSubmit} className="bg-card border border-border p-6 md:p-10 space-y-8">
              {/* Step 1: Registration Type */}
              <div className="space-y-3">
                <label className="label-tech text-foreground block">01 // SELECT DELEGATE CATEGORY</label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {['Team', 'Individual', 'Faculty', 'Delegate'].map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setFormData({ ...formData, regType: type })}
                      className={`p-3 text-left font-mono text-xs border transition-colors ${
                        formData.regType === type
                          ? 'border-gold bg-gold/15 text-foreground font-semibold'
                          : 'border-border bg-background text-muted-foreground hover:border-foreground/40'
                      }`}
                    >
                      <span className="block font-serif text-base text-foreground mb-0.5">{type}</span>
                      <span className="text-[10px] text-muted-foreground">
                        {type === 'Team' ? '2-5 Members' : type === 'Faculty' ? 'CPE Credits' : 'Single Seat'}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Event Selection */}
              <div className="space-y-3">
                <label className="label-tech text-foreground block">02 // SELECT COMPETITION OR SYMPOSIUM</label>
                <select
                  value={formData.selectedEventId}
                  onChange={(e) => setFormData({ ...formData, selectedEventId: e.target.value })}
                  className="w-full h-11 border border-border bg-background px-3 font-mono text-xs text-foreground focus:border-gold focus:outline-none"
                >
                  {events.map((e) => (
                    <option key={e.id} value={e.id}>
                      [{e.code}] {e.name} — {e.fee === 0 ? 'Free Pass' : `₹ ${e.fee.toLocaleString('en-IN')}`} ({e.day})
                    </option>
                  ))}
                </select>
                <div className="bg-muted/50 p-3 text-xs text-muted-foreground font-mono flex items-center justify-between border border-border/60">
                  <span>Venue: {selectedEvent.venue}</span>
                  <span className="text-gold">Time: {selectedEvent.time}</span>
                </div>
              </div>

              {/* Step 3: Attendee Information */}
              <div className="space-y-4">
                <label className="label-tech text-foreground block">03 // PRIMARY DELEGATE CREDENTIALS</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <span className="text-xs text-muted-foreground block mb-1">Full Legal Name</span>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full h-10 border border-border bg-background px-3 font-mono text-xs focus:border-gold focus:outline-none"
                    />
                  </div>
                  <div>
                    <span className="text-xs text-muted-foreground block mb-1">Institutional Email</span>
                    <input
                      type="email"
                      required
                      placeholder="e.g. rahul@college.edu"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full h-10 border border-border bg-background px-3 font-mono text-xs focus:border-gold focus:outline-none"
                    />
                  </div>
                  <div>
                    <span className="text-xs text-muted-foreground block mb-1">College / University Name</span>
                    <input
                      type="text"
                      required
                      placeholder="e.g. RV College of Engineering"
                      value={formData.college}
                      onChange={(e) => setFormData({ ...formData, college: e.target.value })}
                      className="w-full h-10 border border-border bg-background px-3 font-mono text-xs focus:border-gold focus:outline-none"
                    />
                  </div>
                  <div>
                    <span className="text-xs text-muted-foreground block mb-1">Student USN / Faculty Employee ID</span>
                    <input
                      type="text"
                      required
                      placeholder="e.g. 1RV22CV001"
                      value={formData.usn}
                      onChange={(e) => setFormData({ ...formData, usn: e.target.value })}
                      className="w-full h-10 border border-border bg-background px-3 font-mono text-xs focus:border-gold focus:outline-none"
                    />
                  </div>
                </div>

                {formData.regType === 'Team' && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div>
                      <span className="text-xs text-muted-foreground block mb-1">Team Name</span>
                      <input
                        type="text"
                        placeholder="e.g. Concrete Titans"
                        value={formData.teamName}
                        onChange={(e) => setFormData({ ...formData, teamName: e.target.value })}
                        className="w-full h-10 border border-border bg-background px-3 font-mono text-xs focus:border-gold focus:outline-none"
                      />
                    </div>
                    <div>
                      <span className="text-xs text-muted-foreground block mb-1">Other Team Members (comma-separated)</span>
                      <input
                        type="text"
                        placeholder="e.g. Member 1, Member 2, Member 3"
                        value={formData.teamMembers}
                        onChange={(e) => setFormData({ ...formData, teamMembers: e.target.value })}
                        className="w-full h-10 border border-border bg-background px-3 font-mono text-xs focus:border-gold focus:outline-none"
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Step 4: Summary & Payment */}
              <div className="border-t border-border pt-6 space-y-4">
                <div className="flex items-center justify-between font-mono text-sm">
                  <span className="text-muted-foreground">Calculated Entry Fee:</span>
                  <span className="font-serif text-3xl font-medium text-foreground">
                    {fee === 0 ? 'COMPLIMENTARY' : `₹ ${fee.toLocaleString('en-IN')}`}
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  {['UPI / QR', 'Debit/Credit Card', 'Institutional Waiver'].map((m) => (
                    <button
                      key={m}
                      type="button"
                      onClick={() => setFormData({ ...formData, paymentMethod: m })}
                      className={`p-2.5 text-center font-mono text-xs border ${
                        formData.paymentMethod === m
                          ? 'border-gold bg-gold/15 text-foreground font-semibold'
                          : 'border-border bg-background text-muted-foreground'
                      }`}
                    >
                      {m}
                    </button>
                  ))}
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-foreground hover:bg-gold text-background hover:text-foreground font-mono text-xs uppercase tracking-[0.16em] transition-colors border border-foreground font-semibold flex items-center justify-center gap-2 shadow-md mt-4"
                >
                  <ShieldCheck className="size-4" />
                  <span>COMPLETE REGISTRATION &amp; ISSUE DIGITAL PASS</span>
                </button>
              </div>
            </form>
          ) : (
            /* Registration Success Docket */
            <div className="bg-card border-2 border-gold p-8 md:p-12 space-y-8 animate-in fade-in duration-300">
              <div className="flex items-start justify-between border-b border-border pb-6">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-success font-mono text-xs uppercase">
                    <CheckCircle2 className="size-4" />
                    <span>REGISTRATION VERIFIED &amp; CONFIRMED</span>
                  </div>
                  <h2 className="font-serif text-3xl text-foreground font-medium">
                    Welcome to Concrete Fair 2026
                  </h2>
                  <p className="text-xs text-muted-foreground">
                    Your digital pass has been minted and synced with the Participant Portal.
                  </p>
                </div>
                <div className="text-right font-mono text-xs text-muted-foreground">
                  <div>PASS ID:</div>
                  <div className="text-gold font-bold text-base">{generatedTicket}</div>
                </div>
              </div>

              {/* Ticket Preview Card */}
              <div className="bg-background border border-border p-6 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                <div className="md:col-span-8 space-y-3 font-mono text-xs">
                  <div className="text-muted-foreground">DELEGATE: <span className="text-foreground font-semibold">{formData.name}</span></div>
                  <div className="text-muted-foreground">INSTITUTION: <span className="text-foreground">{formData.college}</span></div>
                  <div className="text-muted-foreground">EVENT: <span className="text-gold font-semibold">{selectedEvent.name}</span></div>
                  <div className="text-muted-foreground">VENUE: <span className="text-foreground">{selectedEvent.venue}</span></div>
                  <div className="text-muted-foreground">DAY &amp; TIME: <span className="text-foreground">{selectedEvent.day} // {selectedEvent.time}</span></div>
                </div>

                <div className="md:col-span-4 flex flex-col items-center justify-center p-4 border border-dashed border-border bg-card">
                  <QrCode className="size-24 text-foreground" />
                  <span className="font-mono text-[10px] text-muted-foreground mt-2">{generatedTicket}</span>
                  <span className="font-mono text-[9px] text-gold uppercase mt-0.5">VALID FOR VENUE TURNSTILE</span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 border-t border-border">
                <Link
                  href="/portal"
                  className="w-full sm:w-auto px-8 py-3.5 bg-foreground hover:bg-gold text-background hover:text-foreground font-mono text-xs uppercase tracking-wider transition-colors text-center font-medium flex items-center justify-center gap-2"
                >
                  <Ticket className="size-4" />
                  <span>OPEN PARTICIPANT DASHBOARD →</span>
                </Link>
                <button
                  type="button"
                  onClick={() => setStep('form')}
                  className="w-full sm:w-auto px-6 py-3.5 bg-muted hover:bg-card border border-border text-foreground font-mono text-xs uppercase tracking-wider transition-colors text-center"
                >
                  Register Another Event
                </button>
              </div>
            </div>
          )}
        </div>
      </main>

      <PublicFooter />
    </div>
  )
}
