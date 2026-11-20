'use client'

import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

export interface MarqueeAnnouncement {
  id: string
  badge: string
  badgeVariant?: 'wine' | 'sand' | 'gold' | 'urgent'
  title: string
  detail: string
  linkText?: string
  href?: string
}

const DEFAULT_ANNOUNCEMENTS: MarqueeAnnouncement[] = [
  {
    id: 'registration-deadline',
    badge: 'LAST DATE · 28 NOV',
    badgeVariant: 'urgent',
    title: 'Registration Closes on 28 Nov 2026',
    detail: 'Final call to register teams for all 8 national challenges (Registration: ₹ 118).',
    linkText: 'Register Now',
    href: '/register',
  },
  {
    id: 'conflix-deadline',
    badge: 'DEADLINE · CONFLIX',
    badgeVariant: 'urgent',
    title: 'CONflix Registration Extended till 24 Nov 2026',
    detail: 'Short film submission deadline strictly on 26 Nov (5 mins film upload).',
    linkText: 'Register Team',
    href: '/register',
  },
  {
    id: 'fees-stay',
    badge: 'FEE & STAY',
    badgeVariant: 'gold',
    title: 'Registration ₹ 118 · Outstation Stay ~₹ 350',
    detail: 'Official delegate access to all 8 events with student accommodation arranged upon request.',
    linkText: 'Fee Details',
    href: '/register',
  },
  {
    id: 'prize-pool',
    badge: 'PRIZE POOL',
    badgeVariant: 'sand',
    title: '₹ 1,30,000 Total Prize Pool',
    detail: 'National-level competitive prizes across 6 Technical Challenges & 2 Non-Technical Events.',
    linkText: 'Competitions',
    href: '/events',
  },
  {
    id: 'schedule-dates',
    badge: 'DATES & VENUE',
    badgeVariant: 'wine',
    title: '30 Nov & 01 Dec 2026',
    detail: 'Hosted at the Department of Civil Engineering, RV College of Engineering, Bengaluru.',
    linkText: 'Full Schedule',
    href: '/schedule',
  },
  {
    id: 'conarch-specs',
    badge: 'EVENT UPDATE · CONARCH',
    badgeVariant: 'sand',
    title: 'CONarch Format Confirmed',
    detail: '4 participants per team · 20-min Arch & Truss Quiz · Top 5 qualifying teams build physical arch.',
    linkText: 'Event Brief',
    href: '/events',
  },
  {
    id: 'delegates-legacy',
    badge: 'NATIONAL CONCLAVE',
    badgeVariant: 'wine',
    title: '13th Edition · 600+ Delegates',
    detail: 'Premier symposium organized in association with the Indian Concrete Institute (ICI) Student Chapter.',
    linkText: 'About Fest',
    href: '/about',
  },
  {
    id: 'whatsapp-secretariat',
    badge: 'HELPDESK · WHATSAPP',
    badgeVariant: 'gold',
    title: 'Instant Coordinator Support Available',
    detail: 'Registration & event queries: Prateek (+91 95907 93555), Swathi (+91 83102 76278), Vishal (+91 93800 86451).',
    linkText: 'Chat on WhatsApp',
    href: 'https://wa.me/919590793555',
  },
]

export function AnnouncementsMarquee({ items = DEFAULT_ANNOUNCEMENTS }: { items?: MarqueeAnnouncement[] }) {
  // Duplicate list to achieve a seamless, continuous infinite scroll loop
  const displayItems = [...items, ...items]

  return (
    <div
      aria-label="Important Event Announcements, Deadlines, and Conclave Information"
      className="relative w-full overflow-hidden bg-[#240616] text-[#fff8ef] border-y border-[#75435c]/60 select-none shadow-xs"
    >
      {/* Subtle edge fades to blend smoothly into surrounding layout */}
      <div className="pointer-events-none absolute left-0 inset-y-0 w-8 sm:w-20 bg-gradient-to-r from-[#240616] via-[#240616]/90 to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 inset-y-0 w-8 sm:w-20 bg-gradient-to-l from-[#240616] via-[#240616]/90 to-transparent z-10" />

      {/* Marquee ticker track */}
      <div className="py-2.5 sm:py-3 flex items-center">
        {/* Left persistent label badge (visible on desktop and mobile) */}
        <div className="flex items-center gap-1.5 sm:gap-2 pl-3 sm:pl-6 pr-3 sm:pr-4 shrink-0 border-r border-[#75435c]/70 z-20 bg-[#240616] shadow-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#d8c2ab] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#d8c2ab]" />
          </span>
          <span className="text-[9px] sm:text-[10px] tracking-[0.18em] sm:tracking-[0.2em] uppercase font-bold text-[#d8c2ab] whitespace-nowrap">
            <span className="hidden sm:inline">CONCLAVE </span>BULLETIN
          </span>
        </div>

        {/* Continuous ticker track with pause on hover/active */}
        <div className="animate-marquee group flex items-center gap-8 sm:gap-12 pl-4">
          {displayItems.map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              className="inline-flex items-center gap-2.5 sm:gap-3 text-xs sm:text-[13px] whitespace-nowrap shrink-0 group/item"
            >
              {/* Category / Urgency Tag */}
              <span
                className={`px-2.5 py-0.5 rounded-md text-[10px] font-bold tracking-wider uppercase border transition-colors ${
                  item.badgeVariant === 'urgent'
                    ? 'bg-[#801b3b] text-[#fff8ef] border-[#a82b52]'
                    : item.badgeVariant === 'gold'
                    ? 'bg-[#b88e3e]/20 text-[#f5d58f] border-[#b88e3e]/50'
                    : item.badgeVariant === 'sand'
                    ? 'bg-[#d8c2ab]/20 text-[#d8c2ab] border-[#d8c2ab]/40'
                    : 'bg-[#3b0924] text-[#eadfd4] border-[#75435c]'
                }`}
              >
                {item.badge}
              </span>

              {/* Title / Bold Hook */}
              <span className="font-semibold text-white tracking-wide">
                {item.title}
              </span>

              {/* Supporting Detail */}
              <span className="text-[#eadfd4]/75 hidden sm:inline">
                — {item.detail}
              </span>

              {/* Action Link (if provided) */}
              {item.href && item.linkText && (
                <Link
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="inline-flex items-center gap-1 text-[#d8c2ab] hover:text-white font-semibold underline underline-offset-2 transition-colors ml-1"
                >
                  <span>{item.linkText}</span>
                  <ArrowUpRight className="size-3" />
                </Link>
              )}

              {/* Separator between announcements */}
              <span className="text-[#75435c] pl-3" aria-hidden="true">
                ■
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
