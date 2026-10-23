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

  // Events preview for the homepage teaser matching PPT official events
  const featuredEvents = [
    {
      id: 'conmix',
      title: 'CONmix: Mix Design Challenge',
      category: 'TECHNICAL',
      type: 'Competitions',
      description: 'Prepare mix design, test slump/workability, cast specimens for 20-hour UTM strength test.',
      image: '/images/card-cubes.jpg',
      team: 'Team of 3',
      perk: 'UTM Testing',
      link: '/register?event=conmix',
    },
    {
      id: 'conarch',
      title: 'CONarch: Arch Design & Build',
      category: 'TECHNICAL',
      type: 'Competitions',
      description: 'Design with purpose. Build with precision. Draft structural arch on paper and build miniature model.',
      image: '/images/event-bridge.png',
      team: 'Team of 4',
      perk: 'Load Testing',
      link: '/register?event=conarch',
    },
    {
      id: 'conzine',
      title: 'CONzine: Smart City Designing',
      category: 'TECHNICAL',
      type: 'Workshops',
      description: 'Technical crossword challenge followed by smart city town-planning drafting and presentation.',
      image: '/images/card-sprout.jpg',
      team: 'Team of 4–5',
      perk: 'Planning Lab',
      link: '/register?event=conzine',
    },
    {
      id: 'confight',
      title: 'CONfight: Debate Challenge',
      category: 'NON-TECHNICAL',
      type: 'Talks',
      description: 'Analyse real-world infrastructure problems, pick and speak, and debate before faculty panel.',
      image: '/images/event-column.png',
      team: 'Team of 3',
      perk: 'Faculty Jury',
      link: '/register?event=confight',
    },
  ]

  const filteredFeatured = featuredEvents.filter((ev) => {
    if (selectedCategory === 'All') return true
    return ev.type === selectedCategory
  })

  const homeAccordionItems: AccordionGalleryItem[] = [
    {
      image: '/images/card-cubes.jpg',
      label: 'CONmix: Mix Design Challenge',
      link: '/register?event=conmix',
      category: 'Technical',
      code: 'CF-01',
      description: 'Can you design the perfect concrete mix and prove its performance? Prepare mix design, test slump/workability, and cast specimens for 20-hour UTM compressive strength challenge.',
      date: '30 Nov 2026',
      venue: 'Concrete & Materials Lab',
      prizes: 'TBA',
      badge: 'Flagship UTM',
    },
    {
      image: '/images/event-concrete.png',
      label: 'CONarch: Arch Design & Build',
      link: '/register?event=conarch',
      category: 'Technical',
      code: 'CF-02',
      description: 'Design with purpose. Build with precision. Transform structural concepts on paper into constructed load-bearing miniature bridges.',
      date: '30 Nov 2026',
      venue: 'Structural Fabrication Yard',
      prizes: 'TBA',
      badge: 'Structural Build',
    },
    {
      image: '/images/event-bridge.png',
      label: 'CONzine: Smart City Designing',
      link: '/register?event=conzine',
      category: 'Technical',
      code: 'CF-03',
      description: 'Technical crossword challenge followed by drafting and presentation of modern smart city master plans and sustainable corridors.',
      date: '30 Nov 2026',
      venue: 'CAD & GIS Modeling Studio',
      prizes: 'TBA',
      badge: 'Urban Planning',
    },
    {
      image: '/images/card-sprout.jpg',
      label: 'CONmake: Model Making',
      link: '/register?event=conmake',
      category: 'Technical',
      code: 'CF-04',
      description: 'Visual dimension estimation without measuring instruments, followed by miniature masonry house construction using mortar & bricks.',
      date: '30 Nov 2026',
      venue: 'Masonry Workshop',
      prizes: 'TBA',
      badge: 'Miniature Craft',
    },
    {
      image: '/images/event-column.png',
      label: 'CONscape: Surveying & Escape Room',
      link: '/register?event=conscape',
      category: 'Technical',
      code: 'CF-06',
      description: 'Optical surveying treasure hunt across the campus grounds, leading directly into a structural escape room riddle chamber.',
      date: '01 Dec 2026',
      venue: 'Campus Grounds & Riddle Lab',
      prizes: 'TBA',
      badge: 'Escape Room',
    },
  ]

  return (
    <div className="min-h-[100dvh] bg-[#fff8ef] text-[#34252b] flex flex-col font-sans selection:bg-[#3b0924] selection:text-[#fff8ef]">
      <PublicHeader />

      <main className="flex-1 w-full pt-20">
        {/* =========================================================================
            1. IMMERSIVE FULL-BLEED 3D TOWER HERO (THREE.JS CANVAS STAGE)
               THEMED WITH THE PPT WINE BURGUNDY & WARM CREAM PALETTE
            ========================================================================= */}
        <section className="relative w-full min-h-[90dvh] lg:min-h-[94dvh] flex flex-col justify-between overflow-hidden bg-[#1d0411] border-b border-[#75435c]/60 select-none">
          {/* Background: 3D Indian Temple Architecture (Sunset & Storm in Architectural Grey) */}
          <div className="absolute inset-0 z-0 pointer-events-auto">
            <JapaneseTowerLandscape
              country="india"
              weather="storm"
              time="sunset"
              hero={true}
              className="w-full h-full"
            />
          </div>

          {/* Deep Wine / Burgundy Gradient Anchor on left, open view on right */}
          <div className="absolute inset-y-0 left-0 w-full lg:w-[48%] z-1 pointer-events-none bg-gradient-to-r from-[#1d0411]/95 via-[#1d0411]/65 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-28 z-1 pointer-events-none bg-gradient-to-t from-[#fff8ef] via-[#1d0411]/25 to-transparent" />

          {/* Top Sub-Bar HUD (Themed with Wine Burgundy & Warm Sand) */}
          <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 pt-4 flex items-center justify-between pointer-events-none">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#3b0924]/90 backdrop-blur-md border border-[#75435c]/80 shadow-2xs pointer-events-auto font-mono text-[10px] sm:text-[11px] font-bold tracking-widest uppercase text-[#eadfd4]">
              <span className="size-2 rounded-full bg-[#d8c2ab] animate-pulse" aria-hidden="true" />
              <span className="text-white">RVCE CIVIL</span>
              <span className="text-[#a98b78]">·</span>
              <span className="text-[#eadfd4]">13TH EDITION · EST. 1963</span>
            </div>

            <div className="flex items-center gap-2.5 pointer-events-auto">
              <span className="font-mono text-[10px] tracking-wider uppercase text-[#eadfd4] hidden md:inline">
                DRAG TO EXPLORE
              </span>
              <Link
                href="/towers"
                className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#521331] hover:bg-[#75435c] text-white border border-[#75435c] font-mono text-[10px] font-semibold tracking-wider uppercase transition-all shadow-2xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d8c2ab]"
              >
                <span>3D Structure</span>
                <ArrowUpRight className="size-3 text-[#d8c2ab]" aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* Central Architectural Card (Wine Burgundy Glassmorphism, Strict Hierarchy) */}
          <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 my-auto py-6 sm:py-8 flex flex-col items-start pointer-events-none">
            <div className="pointer-events-auto w-full max-w-lg lg:max-w-[480px]">
              <div className="bg-[#3b0924]/95 backdrop-blur-md p-6 sm:p-7 rounded-3xl border border-[#75435c] shadow-[0_25px_60px_-15px_rgba(42,5,25,0.7)] space-y-4 hover:border-[#d8c2ab]/50 transition-all duration-300">
                
                {/* 1. Institutional Eyebrow */}
                <div className="flex items-center gap-2">
                  <span className="w-5 h-0.5 bg-[#d8c2ab]" aria-hidden="true" />
                  <span className="font-mono text-[10px] sm:text-[11px] tracking-[0.22em] text-[#d8c2ab] uppercase font-bold">
                    RVCE CIVIL ENGINEERING · 13TH EDITION
                  </span>
                </div>

                {/* 2. Primary Event Headline */}
                <h1 className="font-black text-4xl sm:text-5xl lg:text-[50px] tracking-tight text-white leading-[0.9] uppercase text-balance">
                  CONCRETE<br />
                  FAIR <span className="text-[#d8c2ab]">2026</span>
                </h1>

                {/* 3. Official Tagline: Where Concrete Meets Creativity */}
                <div className="space-y-1.5 border-l-2 border-[#d8c2ab] pl-3.5 py-0.5">
                  <div className="font-mono text-[11px] tracking-[0.18em] text-[#d8c2ab] uppercase font-bold">
                    // WHERE CONCRETE MEETS CREATIVITY //
                  </div>
                  <p className="text-xs sm:text-[13px] font-serif italic text-[#eadfd4] leading-snug text-pretty">
                    Learn by doing. Compete with purpose. Connect with industry.
                  </p>
                  <p className="text-xs text-[#eadfd4]/90 leading-relaxed font-sans text-pretty">
                    A national-level platform organized by the Department of Civil Engineering at RV College of Engineering, in association with the ICI Chapter.
                  </p>
                </div>

                {/* 4. Date & Location */}
                <div className="flex items-center gap-2 text-xs font-mono text-white font-semibold pt-1">
                  <Calendar className="size-3.5 text-[#d8c2ab] shrink-0" aria-hidden="true" />
                  <span>30 NOV &amp; 01 DEC 2026</span>
                  <span className="text-[#75435c]">·</span>
                  <span className="text-[#eadfd4]">RVCE CAMPUS, BENGALURU</span>
                </div>

                {/* 5. Primary CTAs (Wine Theme) */}
                <div className="flex flex-wrap items-center gap-3 pt-1">
                  <Link
                    href="/register"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#521331] hover:bg-[#75435c] text-[#fff8ef] hover:text-white border border-[#d8c2ab]/40 rounded-full font-sans text-xs font-semibold tracking-wide transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d8c2ab]"
                  >
                    <span>Get Tickets</span>
                    <ArrowUpRight className="size-3.5 text-[#d8c2ab]" aria-hidden="true" />
                  </Link>

                  <Link
                    href="/events"
                    className="inline-flex items-center gap-2 px-5 py-3 bg-[#2a0519]/80 hover:bg-[#521331] text-white border border-[#75435c] rounded-full font-sans text-xs font-medium tracking-wide transition-all duration-200 shadow-2xs hover:shadow-xs cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d8c2ab]"
                  >
                    <span>Explore 8 Events</span>
                  </Link>
                </div>

                {/* 6. Three Highlights from PPT Slide 3 */}
                <div className="grid grid-cols-3 gap-2 pt-4 border-t border-[#75435c]/80 text-center">
                  <div className="space-y-0.5">
                    <span className="block font-black text-xl sm:text-2xl text-white leading-none tabular-nums">
                      13th
                    </span>
                    <span className="block font-mono text-[9px] text-[#eadfd4] tracking-wider uppercase font-bold">
                      EDITION
                    </span>
                  </div>

                  <div className="space-y-0.5 border-x border-[#75435c]/60">
                    <span className="block font-black text-xl sm:text-2xl text-white leading-none tabular-nums">
                      800+
                    </span>
                    <span className="block font-mono text-[9px] text-[#eadfd4] tracking-wider uppercase font-bold">
                      PARTICIPANTS
                    </span>
                  </div>

                  <div className="space-y-0.5">
                    <span className="block font-black text-xl sm:text-2xl text-[#d8c2ab] leading-none">
                      08
                    </span>
                    <span className="block font-mono text-[9px] text-[#eadfd4] tracking-wider uppercase font-bold">
                      EVENTS
                    </span>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Bottom Integrated Hero Bar: Countdown, Location, and Structure Hint */}
          <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 pb-4 pt-2 flex flex-col md:flex-row items-center justify-between gap-3 pointer-events-none">
            {/* Left: Location Pin Marker */}
            <div className="pointer-events-auto flex items-center gap-2 font-mono text-[11px] text-[#eadfd4] bg-[#3b0924]/90 backdrop-blur-sm px-3.5 py-1.5 rounded-full border border-[#75435c]/80 shadow-2xs">
              <span className="size-1.5 rounded-full bg-[#d8c2ab]" />
              <span className="font-bold text-white">RVCE CAMPUS</span>
              <span className="text-[#75435c]">·</span>
              <span className="text-[#eadfd4]">BENGALURU, INDIA</span>
            </div>

            {/* Center: The Fair Begins In Event Countdown */}
            <div className="pointer-events-auto flex items-center gap-3 sm:gap-5 bg-[#3b0924]/95 backdrop-blur-md border border-[#75435c] px-4 sm:px-5 py-2 rounded-2xl shadow-md text-white">
              <div className="hidden sm:block text-right border-r border-[#75435c]/80 pr-3 sm:pr-4">
                <span className="block font-mono text-[9px] uppercase tracking-wider text-[#d8c2ab] font-bold">
                  THE FAIR BEGINS IN
                </span>
                <span className="block font-mono text-[10px] text-white font-semibold">
                  30 NOV 2026 · 09:00 IST
                </span>
              </div>
              <CountdownTimer targetDate="2026-11-30T09:00:00+05:30" variant="hero-strip" />
            </div>

            {/* Right: Structure Exploration Hint */}
            <div className="pointer-events-auto flex items-center gap-2 bg-[#3b0924]/90 backdrop-blur-sm px-3.5 py-1.5 rounded-full border border-[#75435c]/80 shadow-2xs font-mono text-[10px] text-[#eadfd4]">
              <Link
                href="/towers"
                className="hover:text-[#d8c2ab] font-semibold transition-colors flex items-center gap-1"
              >
                <span>Temple Architecture</span>
                <ArrowUpRight className="size-3 text-[#d8c2ab]" />
              </Link>
            </div>
          </div>
        </section>

        {/* =========================================================================
            2. CATEGORY HIGHLIGHT CARDS & COUNTDOWN ROW (THEMED IN WINE & CREAM)
            ========================================================================= */}
        <section className="w-full py-8 px-4 sm:px-6 lg:px-10 border-b border-[#eadfd4] bg-[#fff8ef]">
          <div className="max-w-[1400px] mx-auto">
            <StaggerEntrance selector=".category-card" stagger={0.06}>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 perspective-1000">
                {/* Card 1 */}
                <Link
                  href="/events?category=Technical"
                  className="category-card group bg-[#f4e9dc]/70 hover:bg-white/95 border border-[#eadfd4] hover:border-[#3b0924]/40 rounded-2xl p-4 flex flex-col justify-between transition-all duration-300 ease-out hover-float-3d shadow-[0_10px_25px_-8px_rgba(59,9,36,0.06)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3b0924]"
                >
                  <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-3 bg-white/70">
                    <Image
                      src="/images/event-bridge.png"
                      alt="Technical Competitions"
                      fill
                      sizes="180px"
                      className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-300 ease-out"
                    />
                    <div className="absolute top-2 right-2 size-3.5 rounded-full bg-[#3b0924]/40 border border-white/40" aria-hidden="true" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] font-bold tracking-tight uppercase text-[#34252b]">
                      TECHNICAL<br />COMPETITIONS
                    </span>
                    <div className="size-6 rounded-full bg-white border border-[#eadfd4] grid place-items-center group-hover:bg-[#3b0924] group-hover:text-white transition-colors duration-300" aria-hidden="true">
                      <ArrowRight className="size-3" />
                    </div>
                  </div>
                </Link>

                {/* Card 2 */}
                <Link
                  href="/events?category=Non-Technical"
                  className="category-card group bg-[#f4e9dc]/70 hover:bg-white/95 border border-[#eadfd4] hover:border-[#3b0924]/40 rounded-2xl p-4 flex flex-col justify-between transition-all duration-300 ease-out hover-float-3d shadow-[0_10px_25px_-8px_rgba(59,9,36,0.06)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3b0924]"
                >
                  <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-3 bg-white/70">
                    <Image
                      src="/images/event-column.png"
                      alt="Debate & Short Film"
                      fill
                      sizes="180px"
                      className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-300 ease-out"
                    />
                    <div className="absolute top-2 right-2 size-3.5 rounded-full bg-[#3b0924]/40 border border-white/40" aria-hidden="true" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] font-bold tracking-tight uppercase text-[#34252b]">
                      DEBATE &amp;<br />SHORT FILM
                    </span>
                    <div className="size-6 rounded-full bg-white border border-[#eadfd4] grid place-items-center group-hover:bg-[#3b0924] group-hover:text-white transition-colors duration-300" aria-hidden="true">
                      <ArrowRight className="size-3" />
                    </div>
                  </div>
                </Link>

                {/* Card 3 */}
                <Link
                  href="/events?category=Material+Innovation"
                  className="category-card group bg-[#f4e9dc]/70 hover:bg-white/95 border border-[#eadfd4] hover:border-[#3b0924]/40 rounded-2xl p-4 flex flex-col justify-between transition-all duration-300 ease-out hover-float-3d shadow-[0_10px_25px_-8px_rgba(59,9,36,0.06)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3b0924]"
                >
                  <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-3 bg-white/70">
                    <Image
                      src="/images/card-cubes.jpg"
                      alt="Mix Design & UTM"
                      fill
                      sizes="180px"
                      className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-300 ease-out"
                    />
                    <div className="absolute top-2 right-2 size-3.5 rounded-full bg-[#3b0924]/40 border border-white/40" aria-hidden="true" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] font-bold tracking-tight uppercase text-[#34252b]">
                      MIX DESIGN<br />&amp; TESTING
                    </span>
                    <div className="size-6 rounded-full bg-white border border-[#eadfd4] grid place-items-center group-hover:bg-[#3b0924] group-hover:text-white transition-colors duration-300" aria-hidden="true">
                      <ArrowRight className="size-3" />
                    </div>
                  </div>
                </Link>

                {/* Card 4 */}
                <Link
                  href="/events?category=Field"
                  className="category-card group bg-[#f4e9dc]/70 hover:bg-white/95 border border-[#eadfd4] hover:border-[#3b0924]/40 rounded-2xl p-4 flex flex-col justify-between transition-all duration-300 ease-out hover-float-3d shadow-[0_10px_25px_-8px_rgba(59,9,36,0.06)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3b0924]"
                >
                  <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-3 bg-white/70">
                    <Image
                      src="/images/card-sprout.jpg"
                      alt="Surveying & Escape Room"
                      fill
                      sizes="180px"
                      className="object-cover group-hover:scale-105 transition-transform duration-300 ease-out"
                    />
                    <div className="absolute top-2 right-2 size-3.5 rounded-full bg-[#3b0924]/40 border border-white/40" aria-hidden="true" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] font-bold tracking-tight uppercase text-[#34252b]">
                      SURVEYING &amp;<br />ESCAPE ROOM
                    </span>
                    <div className="size-6 rounded-full bg-white border border-[#eadfd4] grid place-items-center group-hover:bg-[#3b0924] group-hover:text-white transition-colors duration-300" aria-hidden="true">
                      <ArrowRight className="size-3" />
                    </div>
                  </div>
                </Link>

                {/* Card 5 */}
                <Link
                  href="/about"
                  className="category-card group bg-[#f4e9dc]/70 hover:bg-white/95 border border-[#eadfd4] hover:border-[#3b0924]/40 rounded-2xl p-4 flex flex-col justify-between transition-all duration-300 ease-out hover-float-3d shadow-[0_10px_25px_-8px_rgba(59,9,36,0.06)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3b0924]"
                >
                  <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-3 bg-white/70">
                    <Image
                      src="/images/event-brutalist.png"
                      alt="13th Edition Legacy"
                      fill
                      sizes="180px"
                      className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-300 ease-out"
                    />
                    <div className="absolute top-2 right-2 size-3.5 rounded-full bg-[#3b0924]/40 border border-white/40" aria-hidden="true" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] font-bold tracking-tight uppercase text-[#34252b]">
                      13TH EDITION<br />LEGACY
                    </span>
                    <div className="size-6 rounded-full bg-white border border-[#eadfd4] grid place-items-center group-hover:bg-[#3b0924] group-hover:text-white transition-colors duration-300" aria-hidden="true">
                      <ArrowRight className="size-3" />
                    </div>
                  </div>
                </Link>

                {/* Card 6: Wine Burgundy Countdown Card */}
                <div className="category-card bg-[#3b0924] text-white rounded-2xl p-4 flex flex-col justify-between relative overflow-hidden shadow-[0_20px_40px_-10px_rgba(42,5,25,0.5)] border border-[#75435c] hover-float-3d">
                  <div className="absolute -right-6 -bottom-6 size-24 rounded-full border border-white/10 pointer-events-none" aria-hidden="true" />
                  <div className="absolute -right-2 -bottom-2 size-12 rounded-full bg-[#d8c2ab]/20 pointer-events-none blur-sm" aria-hidden="true" />

                  <div className="relative z-10 flex items-center justify-between border-b border-[#75435c] pb-2">
                    <span className="font-mono text-[9px] uppercase tracking-wider text-[#d8c2ab]">
                      EVENT STARTS IN
                    </span>
                    <span className="size-2 rounded-full bg-[#d8c2ab] animate-pulse" aria-hidden="true" />
                  </div>

                  <CountdownTimer targetDate="2026-11-30T09:00:00+05:30" variant="card" />

                  <div className="relative z-10 text-[9px] font-mono text-[#eadfd4] border-t border-[#75435c] pt-2 flex items-center justify-between">
                    <span className="tabular-nums">NOV 30, 2026</span>
                    <Link href="/register" className="text-[#d8c2ab] hover:text-white transition-colors font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d8c2ab]">
                      Reserve Pass →
                    </Link>
                  </div>
                </div>
              </div>
            </StaggerEntrance>
          </div>
        </section>

        {/* =========================================================================
            3. "OUR EVENTS" TEASER SECTION (THEMED IN WINE & CREAM)
            ========================================================================= */}
        <section className="w-full py-12 px-4 sm:px-6 lg:px-10 border-b border-[#eadfd4] bg-[#fff8ef]">
          <div className="max-w-[1400px] mx-auto space-y-8">
            {/* Section Header with Filters */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2">
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[10px] tracking-[0.2em] text-[#a98b78] uppercase font-bold">
                    05 • OUR EVENTS
                  </span>
                  <span className="w-12 h-px bg-[#d8c2ab]" aria-hidden="true" />
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl text-[#34252b] font-medium tracking-tight mt-1 text-balance">
                  Eight Events &amp; <span className="text-[#3b0924] font-bold">Competitions</span>
                </h2>
              </div>

              {/* Filter pills on right */}
              <div className="flex flex-wrap items-center gap-2 text-xs">
                {(['All', 'Competitions', 'Workshops', 'Talks', 'Exhibitions'] as const).map((filter) => (
                  <button
                    key={filter}
                    type="button"
                    onClick={() => setSelectedCategory(filter)}
                    className={`px-4 py-1.5 rounded-full font-sans text-xs transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3b0924] cursor-pointer ${
                      selectedCategory === filter
                        ? 'bg-[#3b0924] text-[#fff8ef] font-semibold shadow-xs scale-105'
                        : 'bg-white/90 hover:bg-white text-[#77666a] border border-[#eadfd4] hover:border-[#3b0924]/40'
                    }`}
                  >
                    {filter}
                  </button>
                ))}

                <Link
                  href="/events"
                  className="ml-2 inline-flex items-center gap-1 text-xs font-semibold text-[#3b0924] hover:text-[#521331] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3b0924]"
                >
                  <span>View All 8</span>
                  <ArrowUpRight className="size-3.5" aria-hidden="true" />
                </Link>
              </div>
            </div>

            {/* Flagship Interactive Accordion Gallery Spotlight */}
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-mono text-[#77666a] border-b border-[#eadfd4] pb-2">
                <span className="uppercase tracking-widest text-[#3b0924] font-bold flex items-center gap-1.5">
                  <Sparkles className="size-3.5 text-[#a98b78]" aria-hidden="true" />
                  FLAGSHIP CHALLENGES // INTERACTIVE SPOTLIGHT
                </span>
                <span className="hidden sm:inline text-[#77666a]">
                  Hover or tap cards to expand specifications
                </span>
              </div>

              <AccordionGallery
                items={homeAccordionItems}
                defaultIndex={0}
                expandRatio={0.52}
                trigger="hover"
              />
            </div>

            {/* 4 Feature Event Cards matching mockup with AntigravityTilt + Stagger */}
            <StaggerEntrance selector=".event-card-stagger" stagger={0.08}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 perspective-1000">
                {filteredFeatured.map((item) => (
                  <AntigravityTilt key={item.id} maxTilt={5} scale={1.02} glare className="event-card-stagger h-full">
                    <div className="group bg-[#f4e9dc]/60 hover:bg-white/95 border border-[#eadfd4] hover:border-[#3b0924]/40 rounded-2xl p-4 flex flex-col justify-between transition-all duration-300 ease-out hover-float-3d shadow-[0_15px_30px_-10px_rgba(59,9,36,0.06)] h-full">
                      <div>
                        {/* Image with drafting aesthetic */}
                        <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden mb-4 bg-white/80 border border-[#eadfd4] shadow-2xs">
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            sizes="(min-width: 1024px) 25vw, 50vw"
                            className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                          />
                        </div>

                        {/* Tag badge */}
                        <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#fff8ef] text-[#3b0924] font-mono text-[9px] font-bold uppercase tracking-wider mb-2 border border-[#eadfd4]">
                          {item.category}
                        </span>

                        {/* Title and arrow in top row */}
                        <div className="flex items-start justify-between gap-2">
                          <h3 className="font-serif text-xl font-bold text-[#34252b] leading-tight group-hover:text-[#3b0924] transition-colors duration-200 text-balance">
                            {item.title}
                          </h3>
                          <Link
                            href={item.link}
                            className="size-7 rounded-full bg-white border border-[#eadfd4] shrink-0 grid place-items-center group-hover:bg-[#3b0924] group-hover:text-white transition-colors duration-200 shadow-2xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3b0924]"
                            aria-label={`View details for ${item.title}`}
                          >
                            <ArrowRight className="size-3.5" aria-hidden="true" />
                          </Link>
                        </div>

                        <p className="text-xs text-[#77666a] mt-2 leading-relaxed text-pretty">
                          {item.description}
                        </p>
                      </div>

                      {/* Card footer meta */}
                      <div className="pt-4 border-t border-[#eadfd4] mt-4 flex items-center justify-between font-sans text-[11px] text-[#77666a]">
                        <span className="flex items-center gap-1.5">
                          <Users className="size-3 text-[#3b0924]" aria-hidden="true" />
                          <span>{item.team}</span>
                        </span>
                        <span className="flex items-center gap-1.5 text-[#34252b] font-medium">
                          <Trophy className="size-3 text-[#a98b78]" aria-hidden="true" />
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
            PROMINENT ARCHITECTURAL BRAND WATERMARK WITH STROKETEXT (WINE THEME)
            ========================================================================= */}
        <section className="w-full py-12 px-4 sm:px-6 lg:px-10 border-b border-[#75435c] bg-[#3b0924] text-white overflow-hidden relative">
          <div className="absolute inset-0 hatch-wine opacity-25 pointer-events-none" aria-hidden="true" />
          <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
            <div className="w-full md:w-3/5">
              <StrokeText
                text="CONCRETE FAIR"
                strokeColor="#d8c2ab"
                fillColor="#fff8ef"
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
            <div className="w-full md:w-2/5 flex flex-col justify-center space-y-2 md:border-l border-[#75435c] md:pl-8">
              <div className="flex items-center gap-2">
                <span className="w-4 h-0.5 bg-[#d8c2ab]" aria-hidden="true" />
                <span className="font-mono text-[10px] text-[#d8c2ab] uppercase tracking-widest font-semibold tabular-nums">
                  30 NOV &amp; 01 DEC 2026 · RVCE BENGALURU
                </span>
              </div>
              <p className="font-serif italic text-xl text-white font-normal leading-snug text-balance">
                Where Concrete Meets Creativity
              </p>
              <p className="text-xs text-[#eadfd4] font-sans leading-relaxed text-pretty">
                Hosted by the Department of Civil Engineering at RV College of Engineering in association with the ICI Student Chapter.
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================================
            4. INSTITUTIONAL ABOUT & HERITAGE (WINE & CREAM PALETTE)
            ========================================================================= */}
        <section className="w-full py-16 px-4 sm:px-6 lg:px-10 border-b border-[#eadfd4] bg-white/50">
          <div className="max-w-[1400px] mx-auto space-y-10">
            <div className="flex items-center justify-between border-b border-[#eadfd4] pb-3">
              <span className="font-mono text-xs uppercase tracking-widest text-[#a98b78] font-bold">
                INSTITUTIONAL HERITAGE
              </span>
              <span className="font-mono text-xs text-[#77666a] tabular-nums">
                [EST. 1963 — DEPT OF CIVIL ENGINEERING]
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-5 space-y-4">
                <span className="font-mono text-xs text-[#3b0924] uppercase tracking-wider font-bold">
                  AXIS &amp; HERITAGE
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-[#34252b] font-normal tracking-tight leading-tight text-balance">
                  THE FOUNDATION OF STRUCTURAL INGENUITY
                </h2>
                <div className="glass-panel border-l-2 border-l-[#3b0924] p-4 mt-2 rounded-r-lg">
                  <p className="font-mono text-xs text-[#34252b]/90 leading-relaxed uppercase">
                    &ldquo;Structures do not merely resist gravity; they register human ambition against geological time.&rdquo;
                  </p>
                </div>
              </div>

              <div className="lg:col-span-7 space-y-5">
                <p className="font-serif text-xl text-[#34252b]/90 leading-relaxed text-pretty">
                  India&rsquo;s premier civil engineering confluence, hosted by the Department of Civil Engineering at RV College of Engineering in association with the ICI Chapter. Bringing together student innovators to test materials, shape skylines, and challenge structural boundaries.
                </p>
                <p className="text-sm text-[#77666a] leading-relaxed text-pretty">
                  Operating from the historical RVCE civil laboratories, Concrete Fair acts as an open-air testing ground where theoretical calculations meet physical testing, digital algorithms meet hand-troweled aggregates, and student inventors collaborate with industry leaders.
                </p>

                {/* 3 Metric Pills with Glassmorphism */}
                <div className="grid grid-cols-3 gap-4 pt-3">
                  <div className="glass-panel p-4 rounded-xl shadow-[0_15px_30px_-10px_rgba(59,9,36,0.06)] hover-float-3d">
                    <span className="font-mono text-[10px] text-[#77666a] uppercase block">PARTICIPANTS</span>
                    <span className="font-sans font-black text-3xl text-[#3b0924] mt-0.5 block">800+</span>
                  </div>
                  <div className="glass-panel p-4 rounded-xl shadow-[0_15px_30px_-10px_rgba(59,9,36,0.06)] hover-float-3d">
                    <span className="font-mono text-[10px] text-[#77666a] uppercase block">CHALLENGES</span>
                    <span className="font-sans font-black text-3xl text-[#3b0924] mt-0.5 block">08</span>
                  </div>
                  <div className="glass-panel p-4 rounded-xl shadow-[0_15px_30px_-10px_rgba(59,9,36,0.06)] hover-float-3d">
                    <span className="font-mono text-[10px] text-[#77666a] uppercase block">EDITION</span>
                    <span className="font-sans font-black text-3xl text-[#3b0924] mt-0.5 block">13th</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Architectural Research & Structural Synthesis Dossier */}
            <div className="pt-8 border-t border-[#eadfd4]">
              <div className="bg-[#f4e9dc]/60 border border-[#eadfd4] rounded-3xl p-6 sm:p-8 shadow-sm">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-[#3b0924]/15">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="size-2 rounded-full bg-[#3b0924]" aria-hidden="true" />
                      <span className="font-mono text-xs uppercase tracking-widest text-[#3b0924] font-bold">
                        HISTORICAL STRUCTURAL MECHANICS // RESEARCH DOSSIER
                      </span>
                    </div>
                    <h3 className="font-serif text-2xl sm:text-3xl text-[#34252b] font-medium mt-1 text-balance">
                      From Ancient Monoliths to Modern Bio-Concrete
                    </h3>
                  </div>

                  <Link
                    href="/towers"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#3b0924] hover:bg-[#521331] text-[#fff8ef] text-xs font-mono font-semibold tracking-wider transition-all duration-200 shadow-sm shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3b0924]"
                  >
                    <span>Open 3D Structural Studio · Vedic Shikhara</span>
                    <ArrowUpRight className="size-3.5" aria-hidden="true" />
                  </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
                  <div className="p-5 bg-white/90 rounded-2xl border border-[#eadfd4] space-y-2">
                    <span className="font-mono text-[10px] font-bold text-[#3b0924] uppercase tracking-wider block">
                      FOUNDATION MATRIX
                    </span>
                    <h4 className="font-serif text-lg font-bold text-[#34252b]">Monolithic Adhisthana Plinth</h4>
                    <p className="text-xs text-[#77666a] leading-relaxed font-sans text-pretty">
                      Stepped monolithic granite terraces engineered with dry-friction interlocking joints that dissipate seismic ground shock without mortar cleavage.
                    </p>
                  </div>

                  <div className="p-5 bg-white/90 rounded-2xl border border-[#eadfd4] space-y-2">
                    <span className="font-mono text-[10px] font-bold text-[#3b0924] uppercase tracking-wider block">
                      SEISMIC MITIGATION
                    </span>
                    <h4 className="font-serif text-lg font-bold text-[#34252b]">Corbelled Stone Shikhara</h4>
                    <p className="text-xs text-[#77666a] leading-relaxed font-sans text-pretty">
                      Upward-tapering trabeated corbelling and hollow chambered garbhagriha walls provide self-centering gravity stability against lateral forces.
                    </p>
                  </div>

                  <div className="p-5 bg-white/90 rounded-2xl border border-[#eadfd4] space-y-2">
                    <span className="font-mono text-[10px] font-bold text-[#3b0924] uppercase tracking-wider block">
                      MATERIAL HORIZON
                    </span>
                    <h4 className="font-serif text-lg font-bold text-[#34252b]">Ultra-High Performance</h4>
                    <p className="text-xs text-[#77666a] leading-relaxed font-sans text-pretty">
                      RVCE civil labs benchmark these ancient energy dissipation models against micro-steel fiber UHPC and carbon-negative geopolymer mixes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            5. STORY: TRADITION → TRANSFORMATION → TOMORROW
            ========================================================================= */}
        <section className="w-full py-16 px-4 sm:px-6 lg:px-10 border-b border-[#eadfd4] bg-[#fff8ef]">
          <div className="max-w-[1400px] mx-auto space-y-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#eadfd4] pb-4">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-[#a98b78] font-bold block">
                  CONCLAVE THEMES
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-[#34252b] font-normal tracking-tight mt-1 text-balance">
                  TRADITION → TRANSFORMATION → TOMORROW
                </h2>
              </div>
              <p className="font-mono text-xs text-[#77666a] max-w-sm text-pretty">
                Charting structural human heritage across five millennia of aggregate and binder innovation.
              </p>
            </div>

            <StaggerEntrance selector=".trilogy-card" stagger={0.1}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 perspective-1000">
                {/* 01 */}
                <AntigravityTilt maxTilt={4} scale={1.01} className="trilogy-card h-full">
                  <div className="bg-white/90 hover:bg-[#fff8ef] border border-[#eadfd4] hover:border-[#3b0924]/60 p-8 rounded-2xl flex flex-col justify-between shadow-[0_15px_30px_-10px_rgba(59,9,36,0.06)] hover-float-3d h-full transition-all duration-300 ease-out">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="font-serif text-4xl text-[#3b0924] font-light tabular-nums">01</span>
                        <span className="bg-[#f4e9dc] px-2.5 py-0.5 rounded-full font-mono text-[10px] text-[#3b0924] uppercase font-bold">
                          ORIGINS
                        </span>
                      </div>
                      <h3 className="font-serif text-2xl text-[#34252b] tracking-tight font-bold">TRADITION</h3>
                      <p className="text-xs text-[#77666a] leading-relaxed text-pretty">
                        Vedic masonry, Roman pozzolana, and timeless monolithic endurance. Celebrating the roots of load-bearing design, lime mortars, and unreinforced vaulting that defied collapse across centuries.
                      </p>
                    </div>
                    <div className="pt-6 border-t border-[#eadfd4] mt-6 font-mono text-[10px] text-[#77666a] space-y-1">
                      <div>// FOCUS: Pozzolanic Hydration</div>
                      <div>// ANCHOR: Roman Pantheons &amp; Aqueducts</div>
                    </div>
                  </div>
                </AntigravityTilt>

                {/* 02 */}
                <AntigravityTilt maxTilt={4} scale={1.01} className="trilogy-card h-full">
                  <div className="bg-white/90 hover:bg-[#fff8ef] border border-[#eadfd4] hover:border-[#3b0924]/60 p-8 rounded-2xl flex flex-col justify-between shadow-[0_15px_30px_-10px_rgba(59,9,36,0.06)] hover-float-3d h-full transition-all duration-300 ease-out">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="font-serif text-4xl text-[#3b0924] font-light tabular-nums">02</span>
                        <span className="bg-[#f4e9dc] px-2.5 py-0.5 rounded-full font-mono text-[10px] text-[#3b0924] uppercase font-bold">
                          METAMORPHOSIS
                        </span>
                      </div>
                      <h3 className="font-serif text-2xl text-[#34252b] tracking-tight font-bold">TRANSFORMATION</h3>
                      <p className="text-xs text-[#77666a] leading-relaxed text-pretty">
                        Ultra-High Performance Concrete (UHPC), self-healing bio-concrete, and dynamic seismic damping systems that bend kinetic earthquake energy without fatal yield stress fractures.
                      </p>
                    </div>
                    <div className="pt-6 border-t border-[#eadfd4] mt-6 font-mono text-[10px] text-[#77666a] space-y-1">
                      <div>// FOCUS: Micro-Steel Fiber Reinforcement</div>
                      <div>// ANCHOR: High-Rise Resilient Framing</div>
                    </div>
                  </div>
                </AntigravityTilt>

                {/* 03 */}
                <AntigravityTilt maxTilt={4} scale={1.01} className="trilogy-card h-full">
                  <div className="bg-white/90 hover:bg-[#fff8ef] border border-[#eadfd4] hover:border-[#3b0924]/60 p-8 rounded-2xl flex flex-col justify-between shadow-[0_15px_30px_-10px_rgba(59,9,36,0.06)] hover-float-3d h-full transition-all duration-300 ease-out">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="font-serif text-4xl text-[#3b0924] font-light tabular-nums">03</span>
                        <span className="bg-[#f4e9dc] px-2.5 py-0.5 rounded-full font-mono text-[10px] text-[#3b0924] uppercase font-bold">
                          FRONTIER
                        </span>
                      </div>
                      <h3 className="font-serif text-2xl text-[#34252b] tracking-tight font-bold">TOMORROW</h3>
                      <p className="text-xs text-[#77666a] leading-relaxed text-pretty">
                        3D concrete printing, carbon-negative calcined clays, and algorithmic structural topology optimization that eliminates 45% of material weight while maximizing moment of inertia.
                      </p>
                    </div>
                    <div className="pt-6 border-t border-[#eadfd4] mt-6 font-mono text-[10px] text-[#77666a] space-y-1">
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
        <section className="w-full py-16 px-4 sm:px-6 lg:px-10 border-b border-[#eadfd4] bg-white/40" id="faq-section">
          <div className="max-w-4xl mx-auto space-y-10">
            <div className="text-center space-y-2">
              <span className="font-mono text-xs uppercase tracking-widest text-[#a98b78] font-bold block">
                DELEGATE DIRECTORY // PROTOCOLS
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#34252b] font-normal tracking-tight text-balance">
                FREQUENTLY REFERENCED SPECIFICATIONS
              </h2>
              <p className="text-xs sm:text-sm text-[#77666a] max-w-xl mx-auto text-pretty">
                Essential regulations regarding testing bay PPE mandates, outstation accommodation, and Indian Concrete Institute certification.
              </p>
            </div>

            <FAQAccordion />
          </div>
        </section>

        {/* =========================================================================
            7. FINAL MONUMENTAL CTA (THEMED IN WINE & CREAM)
            ========================================================================= */}
        <section className="w-full py-20 px-4 sm:px-6 lg:px-10 bg-[#3b0924] text-white relative overflow-hidden">
          <div className="absolute inset-0 hatch-wine opacity-25 pointer-events-none" aria-hidden="true" />
          <div className="max-w-5xl mx-auto flex flex-col items-center text-center space-y-7 relative z-10">
            <span className="bg-white/10 text-[#d8c2ab] px-4 py-1 rounded-full font-mono text-[10px] uppercase tracking-widest font-bold">
              13TH EDITION · 800+ PARTICIPANTS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white font-normal uppercase tracking-tight max-w-3xl leading-tight text-balance">
              JOIN CONCRETE FAIR 2026. REGISTER YOUR INSTITUTION.
            </h2>
            <p className="text-sm md:text-base text-[#eadfd4] max-w-2xl leading-relaxed text-pretty">
              Step onto the casting floor where computational design meets heavy material strength. Secure delegate passes for your student cohort or research team today.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2 w-full sm:w-auto">
              <Link
                href="/register"
                className="w-full sm:w-auto px-8 py-3.5 bg-[#f4e9dc] hover:bg-white text-[#3b0924] rounded-full font-sans text-xs font-semibold tracking-wide transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d8c2ab]"
              >
                Claim Delegate Pass →
              </Link>
              <Link
                href="/events"
                className="w-full sm:w-auto px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white rounded-full font-sans text-xs font-medium tracking-wide transition-all duration-300 border border-white/20 hover:border-white/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d8c2ab]"
              >
                Browse All 8 Competitions
              </Link>
            </div>

            <div className="pt-4 font-mono text-[10px] text-[#eadfd4]/70 flex flex-wrap items-center justify-center gap-4">
              <span>ORGANIZED BY RVCE CIVIL ENGINEERING</span>
              <span>•</span>
              <span>IN ASSOCIATION WITH ICI STUDENT CHAPTER</span>
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
