'use client'

import Link from 'next/link'
import { ArrowUpRight, Bell, Calendar, Flame } from 'lucide-react'

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
    id: 'conflix-reg',
    badge: 'DEADLINE · CONFLIX',
    badgeVariant: 'urgent',
    title: 'CONflix Registration Closes 20 Nov 2026',
    detail: 'Final call to submit your short-film team registration on Google Forms.',
    linkText: 'Register Team',
    href: '/register',
  },
  {
    id: 'conflix-sub',
    badge: 'SUBMISSION · CONFLIX',
    badgeVariant: 'wine',
    title: 'Short Film Final Submission Due 26 Nov 2026',
    detail: '5-minute film upload link closes strictly at 11:59 PM IST.',
    linkText: 'Event Brief',
    href: '/events',
  },
  {
    id: 'conarch-update',
    badge: 'EVENT FORMAT · CONARCH',
    badgeVariant: 'sand',
    title: 'CONarch Round 1 (Quiz) & Round 2 (Arch Build)',
    detail: '4 participants per team · 20-min Arch & Truss written quiz · Top 5 teams build physical arch.',
    linkText: 'View Structure',
    href: '/events',
  },
  {
    id: 'general-reg',
    badge: 'GENERAL ADMISSION',
    badgeVariant: 'wine',
    title: 'All 8 Technical & Non-Technical Competitions Now Open',
    detail: '₹ 1,30,000 Total Prize Pool · RV College of Engineering, Bengaluru.',
    linkText: 'Google Form',
    href: '/register',
  },
]

export function AnnouncementsMarquee({ items = DEFAULT_ANNOUNCEMENTS }: { items?: MarqueeAnnouncement[] }) {
  // Duplicate list to achieve a seamless, continuous infinite scroll loop
  const displayItems = [...items, ...items]

  return (
    <div
      aria-label="Important Event Announcements and Registration Deadlines"
      className="relative w-full overflow-hidden bg-[#240616] text-[#fff8ef] border-y border-[#75435c]/50 select-none"
    >
      {/* Subtle edge fades to blend smoothly into surrounding layout */}
      <div className="pointer-events-none absolute left-0 inset-y-0 w-8 sm:w-16 bg-gradient-to-r from-[#240616] to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 inset-y-0 w-8 sm:w-16 bg-gradient-to-l from-[#240616] to-transparent z-10" />

      {/* Marquee ticker track */}
      <div className="py-2.5 sm:py-3 flex items-center">
        {/* Left static label badge to anchor context */}
        <div className="hidden md:flex items-center gap-2 pl-4 sm:pl-6 pr-4 shrink-0 border-r border-[#75435c]/60 z-20 bg-[#240616]">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#d8c2ab] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#d8c2ab]" />
          </span>
          <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-[#d8c2ab]">
            BULLETIN
          </span>
        </div>

        {/* Continuous ticker track */}
        <div className="animate-marquee group flex items-center gap-8 sm:gap-12 pl-4">
          {displayItems.map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              className="inline-flex items-center gap-3 text-xs sm:text-[13px] whitespace-nowrap shrink-0 group/item"
            >
              {/* Category / Urgency Tag */}
              <span
                className={`px-2.5 py-0.5 rounded-md text-[10px] font-bold tracking-wider uppercase border ${
                  item.badgeVariant === 'urgent'
                    ? 'bg-[#801b3b] text-[#fff8ef] border-[#a82b52]'
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
