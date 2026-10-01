'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  ArrowUpRight,
  Calendar,
  Clock,
  Compass,
  Download,
  MapPin,
  Sparkles,
  Trophy,
  Users,
} from 'lucide-react'
import { PublicHeader } from '@/components/public/public-header'
import { PublicFooter } from '@/components/public/public-footer'
import { CountdownTimer } from '@/components/public/countdown-timer'
import { FAQAccordion } from '@/components/public/faq-accordion'
import {
  AntigravityTilt,
  StaggerEntrance,
  FloatingBadge,
} from '@/components/public/antigravity-fx'
import AccordionGallery, { AccordionGalleryItem } from '@/components/public/accordion-gallery'
import StrokeText from '@/components/public/StrokeText'
import { JapaneseTowerLandscape } from '@/components/public/JapaneseTowerLandscape'
import '@/src/shaders/japanese-tower/style.css'

export default function PublicHomePage() {
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'Competitions' | 'Workshops' | 'Talks' | 'Exhibitions'>('All')

  // Events preview for the homepage teaser matching mockup
  const featuredEvents = [
    {
      id: 'concrete-cube',
      title: 'Mix Design Challenge',
      category: 'COMPETITION',
      type: 'Competitions',
      description: 'Design an optimum concrete mix for real-world constraints.',
      image: '/images/card-cubes.jpg',
      team: 'Individual/Team',
      perk: 'TBA',
      link: '/register?event=concrete-cube',
    },
    {
      id: 'bridge-build',
      title: 'Concrete Structures Model',
      category: 'COMPETITION',
      type: 'Competitions',
      description: 'Design. Analyse. Build. Test your structural creativity.',
      image: '/images/event-bridge.png',
      team: 'Team Event',
      perk: 'TBA',
      link: '/register?event=bridge-build',
    },
    {
      id: 'bio-concrete',
      title: 'Sustainable Concrete',
      category: 'WORKSHOP',
      type: 'Workshops',
      description: 'Hands-on session on green materials and innovative practices.',
      image: '/images/card-sprout.jpg',
      team: 'Open to All',
      perk: 'TBA',
      link: '/register?event=bio-concrete',
    },
    {
      id: 'brutalist-symposium',
      title: 'Industry Expert Talks',
      category: 'TALK',
      type: 'Talks',
      description: 'Insights from leaders in construction, research and industry.',
      image: '/images/event-column.png',
      team: 'Open to All',
      perk: 'TBA',
      link: '/register?event=brutalist-symposium',
    },
  ]

  const filteredFeatured = featuredEvents.filter((ev) => {
    if (selectedCategory === 'All') return true
    return ev.type === selectedCategory
  })

  const homeAccordionItems: AccordionGalleryItem[] = [
    {
      image: '/images/card-cubes.jpg',
      label: 'Mix Design Challenge',
      link: '/register?event=concrete-cube',
      category: 'Material Innovation',
      code: 'CF-06',
      description: 'Design optimum concrete mix ratios for compressive strength. 28-day water-cured specimens tested under a 2,000 kN UTM.',
      date: '01 Dec 2026',
      venue: 'TBA',
      prizes: 'TBA',
      badge: 'Flagship Bay',
    },
    {
      image: '/images/event-concrete.png',
      label: 'Canoe-X Floatation',
      link: '/register?event=canoe-x',
      category: 'Heavy Engineering',
      code: 'CF-01',
      description: 'Design, cast, and paddle a 4.5-meter buoyant lightweight concrete canoe in the campus aqua-dock.',
      date: '30 Nov 2026',
      venue: 'TBA',
      prizes: 'TBA',
      badge: 'Premier Challenge',
    },
    {
      image: '/images/event-bridge.png',
      label: 'Bridge It: Structural Model',
      link: '/register?event=bridge-build',
      category: 'Structural Design',
      code: 'CF-04',
      description: 'Fabricate an efficient truss bridge using restricted balsa and composite binders. Evaluated for maximum load-to-weight ratio.',
      date: '30 Nov 2026',
      venue: 'TBA',
      prizes: 'TBA',
      badge: 'High Stakes',
    },
    {
      image: '/images/card-sprout.jpg',
      label: 'Sustainable Bio-Concrete',
      link: '/register?event=bio-concrete',
      category: 'Material Innovation',
      code: 'CF-03',
      description: 'Hands-on culture of Bacillus pseudofirmus bacteria infused inside calcium lactate nutrient capsules to heal micro-cracks.',
      date: '30 Nov 2026',
      venue: 'TBA',
      prizes: 'TBA',
      badge: 'Hands-on Lab',
    },
    {
      image: '/images/event-column.png',
      label: 'Seismic Shake-Table',
      link: '/register?event=seismic-shake',
      category: 'Structural Design',
      code: 'CF-02',
      description: 'Fabricate multi-story scaled shear frames subjected to progressive lateral base excitation wave pulses up to Richter 8.5.',
      date: '30 Nov 2026',
      venue: 'TBA',
      prizes: 'TBA',
      badge: 'Live UTM',
    },
  ]

  return (
    <div className="min-h-[100dvh] bg-[#f8f9fa] text-[#0f172a] flex flex-col font-sans selection:bg-[#b88e3e] selection:text-white">
      <PublicHeader />

      <main className="flex-1 w-full pt-20">
        {/* =========================================================================
            1. IMMERSIVE FULL-BLEED 3D TOWER HERO (THREE.JS R149 CANVAS STAGE)
            ========================================================================= */}
        <section className="relative w-full min-h-[90dvh] lg:min-h-[94dvh] flex flex-col justify-between overflow-hidden bg-[#edf1f5] border-b border-[#1e293b]/20 select-none">
          {/* Background: 3D Indian Temple Architecture (Sunset & Storm) */}
          <div className="absolute inset-0 z-0 pointer-events-auto">
            <JapaneseTowerLandscape
              country="india"
              weather="storm"
              time="sunset"
              hero={true}
              className="w-full h-full"
            />
          </div>

          {/* 70/20/10 Rule: Warm sunset stone gradient anchor on the left, open breathing room on the right */}
          <div className="absolute inset-y-0 left-0 w-full lg:w-[46%] z-1 pointer-events-none bg-gradient-to-r from-[#edf1f5]/92 via-[#edf1f5]/75 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-28 z-1 pointer-events-none bg-gradient-to-t from-[#f8f9fa] via-[#edf1f5]/50 to-transparent" />

          {/* Top Sub-Bar HUD (Minimal & Focused) */}
          <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 pt-4 flex items-center justify-between pointer-events-none">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ffffff]/90 backdrop-blur-md border border-[#e2e8f0]/80 shadow-2xs pointer-events-auto font-mono text-[10px] sm:text-[11px] font-bold tracking-widest uppercase text-[#475569]">
              <span className="size-2 rounded-full bg-[#b88e3e] animate-pulse" aria-hidden="true" />
              <span className="text-[#0f172a]">RVCE CIVIL</span>
              <span className="text-[#64748b]">·</span>
              <span>EST. 1963</span>
            </div>

            <div className="flex items-center gap-2.5 pointer-events-auto">
              <span className="font-mono text-[10px] tracking-wider uppercase text-[#64748b] hidden md:inline">
                DRAG TO EXPLORE
              </span>
              <Link
                href="/towers"
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0f172a] hover:bg-[#b88e3e] text-white font-mono text-[10px] font-semibold tracking-wider uppercase transition-all shadow-2xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b88e3e]"
              >
                <span>3D Structure</span>
                <ArrowUpRight className="size-3 text-[#b88e3e]" aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* Central Architectural Card (Compact ~18% reduction, Left-Docked, Strict Hierarchy) */}
          <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 my-auto py-6 sm:py-8 flex flex-col items-start pointer-events-none">
            <div className="pointer-events-auto w-full max-w-lg lg:max-w-[470px]">
              <div className="bg-[#ffffff]/94 backdrop-blur-md p-6 sm:p-7 rounded-3xl border border-[#e2e8f0]/90 shadow-[0_20px_50px_-15px_rgba(46,37,21,0.16)] space-y-4 hover:bg-[#ffffff]/98 transition-all duration-300">
                
                {/* 1. Institutional Eyebrow */}
                <div className="flex items-center gap-2">
                  <span className="w-5 h-0.5 bg-[#b88e3e]" aria-hidden="true" />
                  <span className="font-mono text-[10px] sm:text-[11px] tracking-[0.22em] text-[#b88e3e] uppercase font-bold">
                    RVCE CIVIL ENGINEERING CONCLAVE
                  </span>
                </div>

                {/* 2. Primary Event Headline */}
                <h1 className="font-black text-4xl sm:text-5xl lg:text-[50px] tracking-tight text-[#0f172a] leading-[0.9] uppercase text-balance">
                  CONCRETE<br />
                  FAIR <span className="text-[#b88e3e]">2026</span>
                </h1>

                {/* 3. Official Conclave Tagline & Architectural Subtitle */}
                <div className="space-y-1.5 border-l-2 border-[#b88e3e] pl-3.5 py-0.5">
                  <div className="font-mono text-[11px] tracking-[0.18em] text-[#b88e3e] uppercase font-bold">
                    // TRADITION MEETS TOMORROW //
                  </div>
                  <p className="text-xs sm:text-[13px] font-serif italic text-[#0f172a] leading-snug text-pretty">
                    Where material heritage, structural ingenuity, and the next generation of civil engineers meet.
                  </p>
                  <p className="text-xs text-[#475569] leading-relaxed font-sans text-pretty">
                    From ancient cyclopean stonecraft to self-healing bacterial concrete — exploring how the engineering ideas of yesterday shape tomorrow&rsquo;s built environment.
                  </p>
                </div>

                {/* 4. Date & Location */}
                <div className="flex items-center gap-2 text-xs font-mono text-[#0f172a] font-semibold pt-1">
                  <Calendar className="size-3.5 text-[#b88e3e] shrink-0" aria-hidden="true" />
                  <span>30 NOV — 01 DEC 2026</span>
                  <span className="text-[#64748b]">·</span>
                  <span className="text-[#475569]">RVCE CAMPUS, BENGALURU</span>
                </div>

                {/* 5. Primary CTAs */}
                <div className="flex flex-wrap items-center gap-3 pt-1">
                  <Link
                    href="/register"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#0f172a] hover:bg-[#b88e3e] text-white rounded-full font-sans text-xs font-semibold tracking-wide transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b88e3e]"
                  >
                    <span>Get Tickets</span>
                    <ArrowUpRight className="size-3.5" aria-hidden="true" />
                  </Link>

                  <Link
                    href="/events"
                    className="inline-flex items-center gap-2 px-5 py-3 bg-[#f8f9fa] hover:bg-white text-[#0f172a] border border-[#e2e8f0] rounded-full font-sans text-xs font-medium tracking-wide transition-all duration-200 shadow-2xs hover:shadow-xs cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b88e3e]"
                  >
                    <span>Explore Events</span>
                  </Link>
                </div>

                {/* 6. Three Equally Weighted Event Highlights */}
                <div className="grid grid-cols-3 gap-2 pt-4 border-t border-[#e2e8f0]/80 text-center">
                  <div className="space-y-0.5">
                    <span className="block font-black text-xl sm:text-2xl text-[#0f172a] leading-none tabular-nums">
                      11
                    </span>
                    <span className="block font-mono text-[9px] text-[#64748b] tracking-wider uppercase font-bold">
                      CHALLENGES
                    </span>
                  </div>

                  <div className="space-y-0.5 border-x border-[#e2e8f0]/60">
                    <span className="block font-black text-xl sm:text-2xl text-[#0f172a] leading-none tabular-nums">
                      06
                    </span>
                    <span className="block font-mono text-[9px] text-[#64748b] tracking-wider uppercase font-bold">
                      WORKSHOPS
                    </span>
                  </div>

                  <div className="space-y-0.5">
                    <span className="block font-black text-xl sm:text-2xl text-[#b88e3e] leading-none">
                      TBA
                    </span>
                    <span className="block font-mono text-[9px] text-[#64748b] tracking-wider uppercase font-bold">
                      PRIZE POOL
                    </span>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Bottom Integrated Hero Bar: Countdown, Location, and Structure Hint (Point 14 & 16) */}
          <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 pb-4 pt-2 flex flex-col md:flex-row items-center justify-between gap-3 pointer-events-none">
            {/* Left: Location Pin Marker */}
            <div className="pointer-events-auto flex items-center gap-2 font-mono text-[11px] text-[#475569] bg-[#ffffff]/85 backdrop-blur-sm px-3.5 py-1.5 rounded-full border border-[#e2e8f0]/70 shadow-2xs">
              <span className="size-1.5 rounded-full bg-[#b88e3e]" />
              <span className="font-bold text-[#0f172a]">RVCE CAMPUS</span>
              <span className="text-[#64748b]">·</span>
              <span>BENGALURU, INDIA</span>
            </div>

            {/* Center: The Fair Begins In Event Countdown */}
            <div className="pointer-events-auto flex items-center gap-3 sm:gap-5 bg-[#ffffff]/95 backdrop-blur-md border border-[#e2e8f0] px-4 sm:px-5 py-2 rounded-2xl shadow-xs">
              <div className="hidden sm:block text-right border-r border-[#e2e8f0]/60 pr-3 sm:pr-4">
                <span className="block font-mono text-[9px] uppercase tracking-wider text-[#64748b] font-bold">
                  THE FAIR BEGINS IN
                </span>
                <span className="block font-mono text-[10px] text-[#0f172a] font-semibold">
                  30 NOV 2026 · 09:00 IST
                </span>
              </div>
              <CountdownTimer targetDate="2026-11-30T09:00:00+05:30" variant="hero-strip" />
            </div>

            {/* Right: Structure Exploration Hint */}
            <div className="pointer-events-auto flex items-center gap-2 bg-[#ffffff]/85 backdrop-blur-sm px-3.5 py-1.5 rounded-full border border-[#e2e8f0]/70 shadow-2xs font-mono text-[10px] text-[#475569]">
              <Link
                href="/towers"
                className="hover:text-[#b88e3e] font-semibold transition-colors flex items-center gap-1"
              >
                <span>Temple Architecture</span>
                <ArrowUpRight className="size-3 text-[#b88e3e]" />
              </Link>
            </div>
          </div>
        </section>

        {/* =========================================================================
            2. CATEGORY HIGHLIGHT CARDS & COUNTDOWN ROW (EXACT MOCKUP MATCH + STAGGER)
            ========================================================================= */}
        <section className="w-full py-8 px-4 sm:px-6 lg:px-10 border-b border-[#e5dfd3]/80">
          <div className="max-w-[1400px] mx-auto">
            <StaggerEntrance selector=".category-card" stagger={0.06}>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 perspective-1000">
                {/* Card 1 */}
                <Link
                  href="/events?category=Heavy+Engineering"
                  className="category-card group bg-[#eae5d8]/70 hover:bg-white/90 border border-[#ded8c8] hover:border-[#b88e3e]/40 rounded-2xl p-4 flex flex-col justify-between transition-all duration-300 ease-out hover-float-3d shadow-[0_10px_25px_-8px_rgba(28,32,36,0.06)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b88e3e]"
                >
                  <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-3 bg-white/70">
                    <Image
                      src="/images/event-bridge.png"
                      alt="Technical Competitions"
                      fill
                      sizes="180px"
                      className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-300 ease-out"
                    />
                    <div className="absolute top-2 right-2 size-3.5 rounded-full bg-[#b88e3e]/40 border border-white/40" aria-hidden="true" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] font-bold tracking-tight uppercase text-[#14181b]">
                      TECHNICAL<br />COMPETITIONS
                    </span>
                    <div className="size-6 rounded-full bg-white border border-stone-300 grid place-items-center group-hover:bg-[#b88e3e] group-hover:text-white transition-colors duration-300" aria-hidden="true">
                      <ArrowRight className="size-3" />
                    </div>
                  </div>
                </Link>

                {/* Card 2 */}
                <Link
                  href="/events?category=Symposium+%26+Lecture"
                  className="category-card group bg-[#eae5d8]/70 hover:bg-white/90 border border-[#ded8c8] hover:border-[#b88e3e]/40 rounded-2xl p-4 flex flex-col justify-between transition-all duration-300 ease-out hover-float-3d shadow-[0_10px_25px_-8px_rgba(28,32,36,0.06)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b88e3e]"
                >
                  <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-3 bg-white/70">
                    <Image
                      src="/images/event-column.png"
                      alt="Expert Talks"
                      fill
                      sizes="180px"
                      className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-300 ease-out"
                    />
                    <div className="absolute top-2 right-2 size-3.5 rounded-full bg-[#b88e3e]/40 border border-white/40" aria-hidden="true" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] font-bold tracking-tight uppercase text-[#14181b]">
                      EXPERT<br />TALKS
                    </span>
                    <div className="size-6 rounded-full bg-white border border-stone-300 grid place-items-center group-hover:bg-[#b88e3e] group-hover:text-white transition-colors duration-300" aria-hidden="true">
                      <ArrowRight className="size-3" />
                    </div>
                  </div>
                </Link>

                {/* Card 3 */}
                <Link
                  href="/events?category=Material+Innovation"
                  className="category-card group bg-[#eae5d8]/70 hover:bg-white/90 border border-[#ded8c8] hover:border-[#b88e3e]/40 rounded-2xl p-4 flex flex-col justify-between transition-all duration-300 ease-out hover-float-3d shadow-[0_10px_25px_-8px_rgba(28,32,36,0.06)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b88e3e]"
                >
                  <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-3 bg-white/70">
                    <Image
                      src="/images/card-cubes.jpg"
                      alt="Workshops & Hands-On"
                      fill
                      sizes="180px"
                      className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-300 ease-out"
                    />
                    <div className="absolute top-2 right-2 size-3.5 rounded-full bg-[#b88e3e]/40 border border-white/40" aria-hidden="true" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] font-bold tracking-tight uppercase text-[#14181b]">
                      WORKSHOPS<br />&amp; HANDS-ON
                    </span>
                    <div className="size-6 rounded-full bg-white border border-stone-300 grid place-items-center group-hover:bg-[#b88e3e] group-hover:text-white transition-colors duration-300" aria-hidden="true">
                      <ArrowRight className="size-3" />
                    </div>
                  </div>
                </Link>

                {/* Card 4 */}
                <Link
                  href="/events?category=Material+Innovation"
                  className="category-card group bg-[#eae5d8]/70 hover:bg-white/90 border border-[#ded8c8] hover:border-[#b88e3e]/40 rounded-2xl p-4 flex flex-col justify-between transition-all duration-300 ease-out hover-float-3d shadow-[0_10px_25px_-8px_rgba(28,32,36,0.06)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b88e3e]"
                >
                  <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-3 bg-white/70">
                    <Image
                      src="/images/card-sprout.jpg"
                      alt="Industry Interaction"
                      fill
                      sizes="180px"
                      className="object-cover group-hover:scale-105 transition-transform duration-300 ease-out"
                    />
                    <div className="absolute top-2 right-2 size-3.5 rounded-full bg-[#b88e3e]/40 border border-white/40" aria-hidden="true" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] font-bold tracking-tight uppercase text-[#14181b]">
                      INDUSTRY<br />INTERACTION
                    </span>
                    <div className="size-6 rounded-full bg-white border border-stone-300 grid place-items-center group-hover:bg-[#b88e3e] group-hover:text-white transition-colors duration-300" aria-hidden="true">
                      <ArrowRight className="size-3" />
                    </div>
                  </div>
                </Link>

                {/* Card 5 */}
                <Link
                  href="/about#awards"
                  className="category-card group bg-[#eae5d8]/70 hover:bg-white/90 border border-[#ded8c8] hover:border-[#b88e3e]/40 rounded-2xl p-4 flex flex-col justify-between transition-all duration-300 ease-out hover-float-3d shadow-[0_10px_25px_-8px_rgba(28,32,36,0.06)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b88e3e]"
                >
                  <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-3 bg-white/70">
                    <Image
                      src="/images/event-brutalist.png"
                      alt="Prizes & Recognition"
                      fill
                      sizes="180px"
                      className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-300 ease-out"
                    />
                    <div className="absolute top-2 right-2 size-3.5 rounded-full bg-[#b88e3e]/40 border border-white/40" aria-hidden="true" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] font-bold tracking-tight uppercase text-[#14181b]">
                      PRIZES &amp;<br />RECOGNITION
                    </span>
                    <div className="size-6 rounded-full bg-white border border-stone-300 grid place-items-center group-hover:bg-[#b88e3e] group-hover:text-white transition-colors duration-300" aria-hidden="true">
                      <ArrowRight className="size-3" />
                    </div>
                  </div>
                </Link>

                {/* Card 6: Dark Countdown Card matching mockup with glass-panel-dark */}
                <div className="category-card bg-[#121619] text-white rounded-2xl p-4 flex flex-col justify-between relative overflow-hidden shadow-[0_20px_40px_-10px_rgba(0,0,0,0.4)] border border-white/10 hover-float-3d">
                  {/* Subtle blueprint arc in background */}
                  <div className="absolute -right-6 -bottom-6 size-24 rounded-full border border-white/10 pointer-events-none" aria-hidden="true" />
                  <div className="absolute -right-2 -bottom-2 size-12 rounded-full bg-[#b88e3e]/20 pointer-events-none blur-sm" aria-hidden="true" />

                  <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-2">
                    <span className="font-mono text-[9px] uppercase tracking-wider text-stone-400">
                      EVENT STARTS IN
                    </span>
                    <span className="size-2 rounded-full bg-[#b88e3e] animate-pulse" aria-hidden="true" />
                  </div>

                  {/* Dynamic real-time countdown to 30 Nov 2026 09:00 IST */}
                  <CountdownTimer targetDate="2026-11-30T09:00:00+05:30" variant="card" />

                  <div className="relative z-10 text-[9px] font-mono text-stone-400 border-t border-white/10 pt-2 flex items-center justify-between">
                    <span className="tabular-nums">NOV 30, 2026</span>
                    <Link href="/register" className="text-[#b88e3e] hover:text-white transition-colors font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b88e3e]">
                      Reserve Pass →
                    </Link>
                  </div>
                </div>
              </div>
            </StaggerEntrance>
          </div>
        </section>

        {/* =========================================================================
            3. "OUR EVENTS" TEASER SECTION (EXACT MOCKUP MATCH + 3D TILT & STAGGER)
            ========================================================================= */}
        <section className="w-full py-12 px-4 sm:px-6 lg:px-10 border-b border-[#e5dfd3]/80">
          <div className="max-w-[1400px] mx-auto space-y-8">
            {/* Section Header with Filters */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2">
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[10px] tracking-[0.2em] text-stone-500 uppercase font-semibold">
                    OUR EVENTS
                  </span>
                  <span className="w-12 h-px bg-stone-300" aria-hidden="true" />
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl text-[#14181b] font-medium tracking-tight mt-1 text-balance">
                  Events &amp; <span className="text-[#b88e3e]">Competitions</span>
                </h2>
              </div>

              {/* Filter pills on right */}
              <div className="flex flex-wrap items-center gap-2 text-xs">
                {(['All', 'Competitions', 'Workshops', 'Talks', 'Exhibitions'] as const).map((filter) => (
                  <button
                    key={filter}
                    type="button"
                    onClick={() => setSelectedCategory(filter)}
                    className={`px-4 py-1.5 rounded-full font-sans text-xs transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b88e3e] ${
                      selectedCategory === filter
                        ? 'bg-[#121619] text-white font-medium shadow-xs scale-105'
                        : 'bg-white/80 hover:bg-white text-stone-600 border border-stone-300/80 hover:border-stone-400'
                    }`}
                  >
                    {filter}
                  </button>
                ))}

                <Link
                  href="/events"
                  className="ml-2 inline-flex items-center gap-1 text-xs font-semibold text-[#14181b] hover:text-[#b88e3e] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b88e3e]"
                >
                  <span>View All</span>
                  <ArrowUpRight className="size-3.5" aria-hidden="true" />
                </Link>
              </div>
            </div>

            {/* Flagship Interactive Accordion Gallery Spotlight */}
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-mono text-stone-500 border-b border-stone-300/80 pb-2">
                <span className="uppercase tracking-widest text-[#b88e3e] font-semibold flex items-center gap-1.5">
                  <Sparkles className="size-3.5" aria-hidden="true" />
                  FLAGSHIP CHALLENGES // INTERACTIVE SPOTLIGHT
                </span>
                <span className="hidden sm:inline text-stone-400">
                  Hover or tap cards to expand specifications
                </span>
              </div>

              <AccordionGallery
                items={homeAccordionItems}
                defaultIndex={2}
                expandRatio={0.52}
                trigger="hover"
              />
            </div>

            {/* 4 Feature Event Cards matching mockup with AntigravityTilt + Stagger */}
            <StaggerEntrance selector=".event-card-stagger" stagger={0.08}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 perspective-1000">
                {filteredFeatured.map((item) => (
                  <AntigravityTilt key={item.id} maxTilt={5} scale={1.02} glare className="event-card-stagger h-full">
                    <div className="group bg-[#eae5d8]/55 hover:bg-white/90 border border-[#ded8c8] hover:border-[#b88e3e]/40 rounded-2xl p-4 flex flex-col justify-between transition-all duration-300 ease-out hover-float-3d shadow-[0_15px_30px_-10px_rgba(28,32,36,0.06)] h-full">
                      <div>
                        {/* Image with drafting aesthetic */}
                        <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden mb-4 bg-white/80 border border-stone-200 shadow-2xs">
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            sizes="(min-width: 1024px) 25vw, 50vw"
                            className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                          />
                        </div>

                        {/* Tag badge */}
                        <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#f0ebe0] text-[#b88e3e] font-mono text-[9px] font-bold uppercase tracking-wider mb-2">
                          {item.category}
                        </span>

                        {/* Title and arrow in top row */}
                        <div className="flex items-start justify-between gap-2">
                          <h3 className="font-serif text-xl font-bold text-[#14181b] leading-tight group-hover:text-[#b88e3e] transition-colors duration-200 text-balance">
                            {item.title}
                          </h3>
                          <Link
                            href={item.link}
                            className="size-7 rounded-full bg-white border border-stone-300 shrink-0 grid place-items-center group-hover:bg-[#b88e3e] group-hover:text-white transition-colors duration-200 shadow-2xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b88e3e]"
                            aria-label={`View details for ${item.title}`}
                          >
                            <ArrowRight className="size-3.5" aria-hidden="true" />
                          </Link>
                        </div>

                        <p className="text-xs text-stone-600 mt-2 leading-relaxed text-pretty">
                          {item.description}
                        </p>
                      </div>

                      {/* Card footer meta */}
                      <div className="pt-4 border-t border-stone-300/70 mt-4 flex items-center justify-between font-sans text-[11px] text-stone-600">
                        <span className="flex items-center gap-1.5">
                          <Users className="size-3 text-stone-500" aria-hidden="true" />
                          <span>{item.team}</span>
                        </span>
                        <span className="flex items-center gap-1.5 text-stone-700 font-medium">
                          <Trophy className="size-3 text-[#b88e3e]" aria-hidden="true" />
                          <span>{item.perk}</span>
                        </span>
                      </div>
                    </div>
                  </AntigravityTilt>
                ))}
              </div>
            </StaggerEntrance>
          </div>
        </section>

        {/* =========================================================================
            PROMINENT ARCHITECTURAL BRAND WATERMARK WITH STROKETEXT
            ========================================================================= */}
        <section className="w-full py-10 px-4 sm:px-6 lg:px-10 border-b border-[#e5dfd3]/80 bg-[#121619] text-white overflow-hidden relative">
          <div className="absolute inset-0 blueprint-grid-dark opacity-15 pointer-events-none" aria-hidden="true" />
          <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
            <div className="w-full md:w-3/5">
              <StrokeText
                text="CONCRETE FAIR"
                strokeColor="#b88e3e"
                fillColor="#ffffff"
                fontSize={64}
                fontWeight={900}
                letterSpacing={-2}
                strokeWidth={2}
                drawDuration={2}
                fillDelay={0.2}
                fillMode="wipe"
                trigger="scroll"
                className="w-full"
              />
            </div>
            <div className="w-full md:w-2/5 flex flex-col justify-center space-y-2 md:border-l border-white/15 md:pl-8">
              <div className="flex items-center gap-2">
                <span className="w-4 h-0.5 bg-[#b88e3e]" aria-hidden="true" />
                <span className="font-mono text-[10px] text-[#b88e3e] uppercase tracking-widest font-semibold tabular-nums">
                  30 NOV — 01 DEC 2026 · BENGALURU
                </span>
              </div>
              <p className="font-serif text-lg text-white font-normal leading-snug text-balance">
                Where historical masonry wisdom meets high-tensile material research.
              </p>
              <p className="text-xs text-stone-400 font-sans leading-relaxed text-pretty">
                Hosted by the Department of Civil Engineering at RV College of Engineering. 11 technical competitions, workshops, and industry conclave.
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================================
            4. INSTITUTIONAL ABOUT & HERITAGE
            ========================================================================= */}
        <section className="w-full py-16 px-4 sm:px-6 lg:px-10 border-b border-[#e5dfd3]/80 bg-white/40">
          <div className="max-w-[1400px] mx-auto space-y-10">
            <div className="flex items-center justify-between border-b border-stone-300/80 pb-3">
              <span className="font-mono text-xs uppercase tracking-widest text-stone-500">
                INSTITUTIONAL HERITAGE
              </span>
              <span className="font-mono text-xs text-stone-500 tabular-nums">
                [EST. 1963 — DEPT OF CIVIL ENGINEERING]
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-5 space-y-4">
                <span className="font-mono text-xs text-[#b88e3e] uppercase tracking-wider font-semibold">
                  AXIS &amp; HERITAGE
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-[#14181b] font-normal tracking-tight leading-tight text-balance">
                  THE FOUNDATION OF STRUCTURAL INGENUITY
                </h2>
                <div className="glass-panel border-l-2 border-l-[#b88e3e] p-4 mt-2 rounded-r-lg">
                  <p className="font-mono text-xs text-[#14181b]/80 leading-relaxed uppercase">
                    &ldquo;Structures do not merely resist gravity; they register human ambition against geological time.&rdquo;
                  </p>
                </div>
              </div>

              <div className="lg:col-span-7 space-y-5">
                <p className="font-serif text-xl text-[#14181b]/90 leading-relaxed text-pretty">
                  India&rsquo;s premier civil engineering confluence, hosted by the Department of Civil Engineering at RV College of Engineering. Bringing together architects, structural engineers, researchers, and student innovators to test materials, shape skylines, and challenge structural boundaries.
                </p>
                <p className="text-sm text-stone-600 leading-relaxed text-pretty">
                  Operating from the historical RVCE civil laboratories, Concrete Fair acts as an open-air testing ground where theoretical calculations meet physical testing, digital algorithms meet hand-troweled aggregates, and student inventors share podiums with pioneering infrastructure leaders.
                </p>

                {/* 3 Metric Pills with Glassmorphism and Layered Shadows */}
                <div className="grid grid-cols-3 gap-4 pt-3">
                  <div className="glass-panel p-4 rounded-xl shadow-[0_15px_30px_-10px_rgba(28,32,36,0.06)] hover-float-3d">
                    <span className="font-mono text-[10px] text-stone-500 uppercase block">DELEGATES</span>
                    <span className="font-serif text-3xl text-[#14181b] font-medium mt-0.5 block">TBA</span>
                  </div>
                  <div className="glass-panel p-4 rounded-xl shadow-[0_15px_30px_-10px_rgba(28,32,36,0.06)] hover-float-3d">
                    <span className="font-mono text-[10px] text-stone-500 uppercase block">COMPETITIONS</span>
                    <span className="font-serif text-3xl text-[#14181b] font-medium mt-0.5 block">11</span>
                  </div>
                  <div className="glass-panel p-4 rounded-xl shadow-[0_15px_30px_-10px_rgba(28,32,36,0.06)] hover-float-3d">
                    <span className="font-mono text-[10px] text-stone-500 uppercase block">PRIZE POOL</span>
                    <span className="font-serif text-3xl text-[#b88e3e] font-medium mt-0.5 block">TBA</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Architectural Research & Structural Synthesis Dossier */}
            <div className="pt-8 border-t border-stone-300/80">
              <div className="bg-[#fdfaf3]/90 border border-[#e2e8f0] rounded-3xl p-6 sm:p-8 shadow-sm">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-[#1e293b]/15">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="size-2 rounded-full bg-[#b88e3e]" aria-hidden="true" />
                      <span className="font-mono text-xs uppercase tracking-widest text-[#b88e3e] font-bold">
                        HISTORICAL STRUCTURAL MECHANICS // RESEARCH DOSSIER
                      </span>
                    </div>
                    <h3 className="font-serif text-2xl sm:text-3xl text-[#14181b] font-medium mt-1 text-balance">
                      From Ancient Monoliths to Modern Bio-Concrete
                    </h3>
                  </div>

                  <Link
                    href="/towers"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#14181b] hover:bg-[#b88e3e] text-white text-xs font-mono font-semibold tracking-wider transition-all duration-200 shadow-sm shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b88e3e]"
                  >
                    <span>Open 3D Structural Studio · Vedic Shikhara</span>
                    <ArrowUpRight className="size-3.5" aria-hidden="true" />
                  </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
                  <div className="p-5 bg-white/70 rounded-2xl border border-[#ddceac] space-y-2">
                    <span className="font-mono text-[10px] font-bold text-[#b88e3e] uppercase tracking-wider block">
                      FOUNDATION MATRIX
                    </span>
                    <h4 className="font-serif text-lg font-bold text-[#14181b]">Monolithic Adhisthana Plinth</h4>
                    <p className="text-xs text-stone-600 leading-relaxed font-sans text-pretty">
                      Stepped monolithic granite terraces engineered with dry-friction interlocking joints that dissipate seismic ground shock without mortar cleavage.
                    </p>
                  </div>

                  <div className="p-5 bg-white/70 rounded-2xl border border-[#ddceac] space-y-2">
                    <span className="font-mono text-[10px] font-bold text-[#b88e3e] uppercase tracking-wider block">
                      SEISMIC MITIGATION
                    </span>
                    <h4 className="font-serif text-lg font-bold text-[#14181b]">Corbelled Stone Shikhara</h4>
                    <p className="text-xs text-stone-600 leading-relaxed font-sans text-pretty">
                      Upward-tapering trabeated corbelling and hollow chambered garbhagriha walls provide self-centering gravity stability against severe lateral forces.
                    </p>
                  </div>

                  <div className="p-5 bg-white/70 rounded-2xl border border-[#ddceac] space-y-2">
                    <span className="font-mono text-[10px] font-bold text-[#b88e3e] uppercase tracking-wider block">
                      MATERIAL HORIZON
                    </span>
                    <h4 className="font-serif text-lg font-bold text-[#14181b]">Ultra-High Performance</h4>
                    <p className="text-xs text-stone-600 leading-relaxed font-sans text-pretty">
                      RVCE civil labs benchmark these ancient energy dissipation models against micro-steel fiber UHPC and carbon-negative geopolymer mixes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            5. STORY: TRADITION → TRANSFORMATION → TOMORROW (ANTIGRAVITY 3D TILT)
            ========================================================================= */}
        <section className="w-full py-16 px-4 sm:px-6 lg:px-10 border-b border-[#e5dfd3]/80">
          <div className="max-w-[1400px] mx-auto space-y-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-stone-300/80 pb-4">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-stone-500 block">
                  CONCLAVE THEMES
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-[#14181b] font-normal tracking-tight mt-1 text-balance">
                  TRADITION → TRANSFORMATION → TOMORROW
                </h2>
              </div>
              <p className="font-mono text-xs text-stone-500 max-w-sm text-pretty">
                Charting structural human heritage across five millennia of aggregate and binder innovation.
              </p>
            </div>

            <StaggerEntrance selector=".trilogy-card" stagger={0.1}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 perspective-1000">
                {/* 01 */}
                <AntigravityTilt maxTilt={4} scale={1.01} className="trilogy-card h-full">
                  <div className="bg-white/80 hover:bg-white border border-[#ded8c8] hover:border-[#b88e3e]/60 p-8 rounded-2xl flex flex-col justify-between shadow-[0_15px_30px_-10px_rgba(28,32,36,0.06)] hover-float-3d h-full transition-all duration-300 ease-out">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="font-serif text-4xl text-[#b88e3e] font-light tabular-nums">01</span>
                        <span className="bg-[#f0ebe0] px-2.5 py-0.5 rounded-full font-mono text-[10px] text-stone-600 uppercase font-semibold">
                          ORIGINS
                        </span>
                      </div>
                      <h3 className="font-serif text-2xl text-[#14181b] tracking-tight font-bold">TRADITION</h3>
                      <p className="text-xs text-stone-600 leading-relaxed text-pretty">
                        Vedic masonry, Roman pozzolana, and timeless monolithic endurance. Celebrating the roots of load-bearing design, lime mortars, and unreinforced vaulting that defied collapse across centuries.
                      </p>
                    </div>
                    <div className="pt-6 border-t border-stone-200 mt-6 font-mono text-[10px] text-stone-500 space-y-1">
                      <div>// FOCUS: Pozzolanic Hydration</div>
                      <div>// ANCHOR: Roman Pantheons &amp; Aqueducts</div>
                    </div>
                  </div>
                </AntigravityTilt>

                {/* 02 */}
                <AntigravityTilt maxTilt={4} scale={1.01} className="trilogy-card h-full">
                  <div className="bg-white/80 hover:bg-white border border-[#ded8c8] hover:border-[#b88e3e]/60 p-8 rounded-2xl flex flex-col justify-between shadow-[0_15px_30px_-10px_rgba(28,32,36,0.06)] hover-float-3d h-full transition-all duration-300 ease-out">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="font-serif text-4xl text-[#b88e3e] font-light tabular-nums">02</span>
                        <span className="bg-[#f0ebe0] px-2.5 py-0.5 rounded-full font-mono text-[10px] text-stone-600 uppercase font-semibold">
                          METAMORPHOSIS
                        </span>
                      </div>
                      <h3 className="font-serif text-2xl text-[#14181b] tracking-tight font-bold">TRANSFORMATION</h3>
                      <p className="text-xs text-stone-600 leading-relaxed text-pretty">
                        Ultra-High Performance Concrete (UHPC), self-healing bio-concrete, and dynamic seismic damping systems that bend kinetic earthquake energy without fatal yield stress fractures.
                      </p>
                    </div>
                    <div className="pt-6 border-t border-stone-200 mt-6 font-mono text-[10px] text-stone-500 space-y-1">
                      <div>// FOCUS: Micro-Steel Fiber Reinforcement</div>
                      <div>// ANCHOR: High-Rise Resilient Framing</div>
                    </div>
                  </div>
                </AntigravityTilt>

                {/* 03 */}
                <AntigravityTilt maxTilt={4} scale={1.01} className="trilogy-card h-full">
                  <div className="bg-white/80 hover:bg-white border border-[#ded8c8] hover:border-[#b88e3e]/60 p-8 rounded-2xl flex flex-col justify-between shadow-[0_15px_30px_-10px_rgba(28,32,36,0.06)] hover-float-3d h-full transition-all duration-300 ease-out">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="font-serif text-4xl text-[#b88e3e] font-light tabular-nums">03</span>
                        <span className="bg-[#f0ebe0] px-2.5 py-0.5 rounded-full font-mono text-[10px] text-stone-600 uppercase font-semibold">
                          FRONTIER
                        </span>
                      </div>
                      <h3 className="font-serif text-2xl text-[#14181b] tracking-tight font-bold">TOMORROW</h3>
                      <p className="text-xs text-stone-600 leading-relaxed text-pretty">
                        3D concrete printing, carbon-negative calcined clays, and algorithmic structural topology optimization that eliminates 45% of material weight while maximizing moment of inertia.
                      </p>
                    </div>
                    <div className="pt-6 border-t border-stone-200 mt-6 font-mono text-[10px] text-stone-500 space-y-1">
                      <div>// FOCUS: Gantry Extrusion &amp; LC3 Binders</div>
                      <div>// ANCHOR: Next-Gen Infrastructure</div>
                    </div>
                  </div>
                </AntigravityTilt>
              </div>
            </StaggerEntrance>
          </div>
        </section>

        {/* =========================================================================
            6. FREQUENTLY REFERENCED SPECIFICATIONS (FAQ)
            ========================================================================= */}
        <section className="w-full py-16 px-4 sm:px-6 lg:px-10 border-b border-[#e5dfd3]/80 bg-white/40" id="faq-section">
          <div className="max-w-4xl mx-auto space-y-10">
            <div className="text-center space-y-2">
              <span className="font-mono text-xs uppercase tracking-widest text-stone-500 block">
                DELEGATE DIRECTORY // PROTOCOLS
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#14181b] font-normal tracking-tight text-balance">
                FREQUENTLY REFERENCED SPECIFICATIONS
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 max-w-xl mx-auto text-pretty">
                Essential regulations regarding testing bay PPE mandates, outstation accommodation, and Indian Concrete Institute certification.
              </p>
            </div>

            <FAQAccordion />
          </div>
        </section>

        {/* =========================================================================
            7. FINAL MONUMENTAL CTA
            ========================================================================= */}
        <section className="w-full py-20 px-4 sm:px-6 lg:px-10 bg-[#121619] text-white relative overflow-hidden">
          <div className="max-w-5xl mx-auto flex flex-col items-center text-center space-y-7 relative z-10">
            <span className="bg-white/10 text-stone-300 px-4 py-1 rounded-full font-mono text-[10px] uppercase tracking-widest">
              CALL FOR DELEGATIONS &amp; RESEARCH PRISMS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white font-normal uppercase tracking-tight max-w-3xl leading-tight text-balance">
              JOIN CONCRETE FAIR 2026. REGISTER YOUR INSTITUTION.
            </h2>
            <p className="text-sm md:text-base text-stone-400 max-w-2xl leading-relaxed text-pretty">
              Step onto the casting floor where computational design meets heavy material strength. Secure delegate passes for your student cohort or research lab today.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2 w-full sm:w-auto">
              <Link
                href="/register"
                className="w-full sm:w-auto px-8 py-3.5 bg-[#b88e3e] hover:bg-white text-white hover:text-[#121619] rounded-full font-sans text-xs font-semibold tracking-wide transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b88e3e]"
              >
                Claim Delegate Pass →
              </Link>
              <Link
                href="/events"
                className="w-full sm:w-auto px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white rounded-full font-sans text-xs font-medium tracking-wide transition-all duration-300 border border-white/20 hover:border-white/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b88e3e]"
              >
                Browse All 11 Competitions
              </Link>
            </div>

            <div className="pt-4 font-mono text-[10px] text-stone-500 flex flex-wrap items-center justify-center gap-4">
              <span>ORGANIZED BY RVCE CIVIL ENGINEERING</span>
              <span>•</span>
              <span>BENGALURU, INDIA</span>
            </div>
          </div>
        </section>
      </main>

      <PublicFooter />
    </div>
  )
}
