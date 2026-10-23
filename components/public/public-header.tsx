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
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#fff8ef]/95 backdrop-blur-md border-b border-[#eadfd4]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 h-20 flex items-center justify-between gap-4">
        {/* Left: Brand Lockup & Institutional Crests */}
        <div className="flex items-center gap-3 sm:gap-5 shrink-0">
          {/* RVCE Logo & Brand Lockup */}
          <Link href="/" className="flex items-center gap-3 group focus-visible:outline-2 focus-visible:outline-[#3b0924]">
            <div className="size-10 rounded-xl border border-[#eadfd4] bg-white grid place-items-center shadow-xs overflow-hidden group-hover:border-[#3b0924] transition-colors p-1">
              <img
                src="/theme/rvce-logo.png"
                alt="RVCE Crest"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-sans font-black text-base sm:text-lg tracking-tight text-[#3b0924] uppercase group-hover:text-[#521331] transition-colors">
                CONCRETE FAIR <span className="text-[#a98b78]">2026</span>
              </span>
              <span className="font-mono text-[8px] text-[#77666a] uppercase mt-1 tracking-wider font-semibold">
                RVCE CIVIL · WHERE CONCRETE MEETS CREATIVITY
              </span>
            </div>
          </Link>

          <span className="hidden md:inline-block h-6 w-px bg-[#eadfd4]" />

          {/* Department of Civil Engineering */}
          <div className="hidden sm:flex items-center gap-2">
            <div className="flex flex-col leading-none">
              <span className="font-sans text-xs font-black tracking-tight text-[#34252b]">
                DEPT. OF CIVIL ENGINEERING
              </span>
              <span className="font-mono text-[7px] text-[#77666a] uppercase tracking-tighter">
                RV COLLEGE OF ENGINEERING · 13TH EDITION
              </span>
            </div>
          </div>

          <span className="hidden lg:inline-block h-6 w-px bg-[#eadfd4]" />

          {/* Indian Concrete Institute (ICI) */}
          <div className="hidden lg:flex items-center gap-2">
            <div className="size-7 rounded border border-[#eadfd4] overflow-hidden bg-white p-0.5">
              <img
                src="/theme/ici-logo.jpg"
                alt="ICI Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-mono text-[8px] font-bold text-[#34252b] tracking-tight uppercase">
                ICI STUDENT CHAPTER
              </span>
              <span className="font-mono text-[7px] text-[#77666a] uppercase tracking-tighter">
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
                    ? 'text-[#3b0924] font-bold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#3b0924]'
                    : 'text-[#77666a] hover:text-[#3b0924]',
                )}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        {/* Right Action: My Pass + Get Tickets */}
        <div className="flex items-center gap-3">
          <Link
            href="/portal"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-[#77666a] hover:text-[#3b0924] hover:bg-[#f4e9dc] transition-colors"
          >
            <Ticket className="size-3.5 text-[#3b0924]" />
            <span>My Pass</span>
          </Link>

          {/* Primary CTA button matching PPT theme */}
          <Link
            href="/register"
            className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-[#3b0924] hover:bg-[#521331] text-[#fff8ef] hover:text-white rounded-full font-sans text-xs font-semibold tracking-wide transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5"
          >
            <span>Register Now</span>
            <ArrowUpRight className="size-3.5" />
          </Link>

          {/* Mobile menu trigger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="grid size-9 place-items-center rounded-full border border-[#eadfd4] xl:hidden text-[#34252b] hover:bg-[#f4e9dc] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3b0924]"
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
                className="text-sm font-medium text-[#34252b] hover:text-[#3b0924] py-1 border-b border-stone-200/60"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 flex flex-col gap-2 font-mono text-xs">
              <Link
                href="/portal"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between py-2 text-[#34252b] hover:text-[#3b0924]"
              >
                <span className="flex items-center gap-2">
                  <Ticket className="size-3.5 text-[#3b0924]" />
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
