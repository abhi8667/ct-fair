'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ArrowUpRight, Menu, ShieldAlert, Ticket, X } from 'lucide-react'
import { cn } from '@/lib/utils'

export function PublicHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/events', label: 'Events' },
    { href: '/schedule', label: 'Schedule' },
    { href: '/about#gallery', label: 'Gallery' },
    { href: '/about#sponsors', label: 'Sponsors' },
    { href: '/faq', label: 'FAQs' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 h-20 flex items-center justify-between gap-4">
        {/* Left: Brand Lockup & Institutional Crests */}
        <div className="flex items-center gap-4 sm:gap-6 shrink-0">
          {/* Concrete Fair 2026 Brand Lockup */}
          <Link href="/" className="flex items-center gap-3 group focus-visible:outline-2 focus-visible:outline-[#b88e3e]">
            <div className="size-10 rounded-xl border border-slate-200 bg-white grid place-items-center shadow-xs group-hover:border-[#b88e3e] transition-colors">
              <span className="font-mono font-black text-sm text-[#171717] tracking-tight">CF</span>
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-sans font-black text-base sm:text-lg tracking-tight text-[#171717] uppercase group-hover:text-[#b88e3e] transition-colors">
                CONCRETE FAIR <span className="text-[#b88e3e]">2026</span>
              </span>
              <span className="font-mono text-[8px] text-[#8B8170] uppercase mt-1 tracking-wider">
                RVCE CIVIL · TRADITION MEETS TOMORROW
              </span>
            </div>
          </Link>

          <span className="hidden md:inline-block h-6 w-px bg-stone-300" />

          {/* ASCE Student Chapter */}
          <div className="hidden sm:flex items-center gap-2">
            <div className="flex flex-col leading-none">
              <span className="font-sans text-xs font-black tracking-tight text-[#171717]">
                ASCE
              </span>
              <span className="font-mono text-[7px] text-[#5D574D] uppercase tracking-tighter">
                STUDENT CHAPTER RVCE
              </span>
            </div>
          </div>

          <span className="hidden lg:inline-block h-6 w-px bg-stone-300" />

          {/* Indian Concrete Institute (ICI) */}
          <div className="hidden lg:flex items-center gap-2">
            <div className="grid grid-cols-2 gap-0.5 size-4 p-0.5 border border-stone-400">
              <div className="bg-[#171717]" />
              <div className="bg-[#b88e3e]" />
              <div className="bg-[#b88e3e]" />
              <div className="bg-[#171717]" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-mono text-[8px] font-bold text-[#171717] tracking-tight uppercase">
                INDIAN CONCRETE INSTITUTE
              </span>
              <span className="font-mono text-[7px] text-[#5D574D] uppercase tracking-tighter">
                BENGALURU CENTRE
              </span>
            </div>
          </div>
        </div>

        {/* Center: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => {
            const active = link.href === '/' ? pathname === '/' : pathname === link.href
            return (
              <Link
                key={link.label}
                href={link.href}
                className={cn(
                  'text-[13px] tracking-wide transition-colors py-1 relative font-medium',
                  active
                    ? 'text-[#b88e3e] font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#b88e3e]'
                    : 'text-[#5D574D] hover:text-[#171717]',
                )}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        {/* Right Action: My Pass + Get Tickets (Clean Public Event Navigation) */}
        <div className="flex items-center gap-3">
          <Link
            href="/portal"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-[#5D574D] hover:text-[#171717] hover:bg-stone-200/50 transition-colors"
          >
            <Ticket className="size-3.5 text-[#b88e3e]" />
            <span>My Pass</span>
          </Link>

          {/* Primary CTA button matching mockup */}
          <Link
            href="/register"
            className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-[#171717] hover:bg-[#b88e3e] text-white hover:text-white rounded-full font-sans text-xs font-semibold tracking-wide transition-all shadow-xs hover:shadow-md"
          >
            <span>Get Tickets</span>
            <ArrowUpRight className="size-3.5" />
          </Link>

          {/* Mobile menu trigger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="grid size-9 place-items-center rounded-full border border-stone-300 xl:hidden text-stone-700 hover:bg-stone-200/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b88e3e]"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            {mobileMenuOpen ? <X className="size-4" aria-hidden="true" /> : <Menu className="size-4" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div id="mobile-navigation" className="xl:hidden border-b border-slate-200 bg-white px-6 py-6 animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-stone-700 hover:text-[#b88e3e] py-1 border-b border-stone-200/60"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 flex flex-col gap-2 font-mono text-xs">
              <Link
                href="/portal"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between py-2 text-[#171717]"
              >
                <span className="flex items-center gap-2">
                  <Ticket className="size-3.5 text-[#b88e3e]" />
                  <span>Participant Portal &amp; QR Tickets</span>
                </span>
                <span>→</span>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
