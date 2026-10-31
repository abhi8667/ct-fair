'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, MapPin, Search, Users, Sparkles, Calendar } from 'lucide-react'
import { PublicHeader } from '@/components/public/public-header'
import { PublicFooter } from '@/components/public/public-footer'
import { events, conclaveInfo } from '@/lib/data'
import { AntigravityTilt, StaggerEntrance } from '@/components/public/antigravity-fx'
import AccordionGallery, { AccordionGalleryItem } from '@/components/public/accordion-gallery'

export default function PublicEventsPage() {
  const [search, setSearch] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<'ALL' | 'Technical' | 'Non-Technical'>('ALL')

  const filtered = events.filter((e) => {
    const matchCat = selectedCategory === 'ALL' || e.eventType === selectedCategory
    const matchSearch =
      e.name.toLowerCase().includes(search.toLowerCase()) ||
      e.code.toLowerCase().includes(search.toLowerCase()) ||
      e.subtitle.toLowerCase().includes(search.toLowerCase()) ||
      e.description.toLowerCase().includes(search.toLowerCase())
    return matchCat && matchSearch
  })

  const flagshipEvents: AccordionGalleryItem[] = [
    {
      image: '/images/card-cubes.jpg',
      label: 'CONmix: Mix Design',
      link: '/register',
      category: 'Technical',
      code: 'CF-01',
      description: 'Can you design the perfect concrete mix and prove its performance? Test slump and workability, cast specimens, and undergo 20-hour UTM compressive strength testing.',
      date: '30 Nov 2026',
      time: '09:30 AM',
      venue: 'Civil Department Labs, RVCE',
      prizes: 'Official Merit Certificates & Awards',
      badge: 'Mix Design',
    },
    {
      image: '/images/event-bridge.png',
      label: 'CONarch: Arch Design & Build',
      link: '/register',
      category: 'Technical',
      code: 'CF-02',
      description: 'Design with purpose. Build with precision. Transform structural concepts into reality through paper drafting and physical arch construction.',
      date: '30 Nov 2026',
      time: '11:00 AM',
      venue: 'Department of Civil Engineering, RVCE',
      prizes: 'Official Merit Certificates & Awards',
      badge: 'Arch Build',
    },
    {
      image: '/images/event-blueprint.png',
      label: 'CONzine: Smart City Designing',
      link: '/register',
      category: 'Technical',
      code: 'CF-03',
      description: 'Imagine the cities of tomorrow and design a smarter future. Technical crossword challenge followed by town-planning drafting and presentation.',
      date: '30 Nov 2026',
      time: '02:00 PM',
      venue: 'Department of Civil Engineering, RVCE',
      prizes: 'Official Merit Certificates & Awards',
      badge: 'Smart City',
    },
    {
      image: '/images/card-sprout.jpg',
      label: 'CONmake: Model Making',
      link: '/register',
      category: 'Technical',
      code: 'CF-04',
      description: 'Visualize, create and build — transform raw materials into miniature masterpieces! Dimension estimation followed by miniature model making with cement mortar & bricks.',
      date: '30 Nov 2026',
      time: '03:30 PM',
      venue: 'Department of Civil Engineering, RVCE',
      prizes: 'Official Merit Certificates & Awards',
      badge: 'Model Making',
    },
    {
      image: '/images/event-survey.png',
      label: 'CONscape: Surveying & Escape Room',
      link: '/register',
      category: 'Technical',
      code: 'CF-06',
      description: 'Follow the clues, explore the campus through field surveying, and unlock the mystery in the timed engineering escape room.',
      date: '01 Dec 2026',
      time: '11:30 AM',
      venue: 'RVCE Campus Grounds',
      prizes: 'Official Merit Certificates & Awards',
      badge: 'Survey & Escape',
    },
  ]

  return (
    <div className="min-h-[100dvh] bg-[#fff8ef] text-[#34252b] flex flex-col font-sans selection:bg-[#3b0924] selection:text-[#fff8ef]">
      <PublicHeader />

      <main className="flex-1 w-full pt-32 pb-24 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Header */}
          <div className="border-b border-[#eadfd4] pb-8 space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-5 h-0.5 bg-[#3b0924]" aria-hidden="true" />
              <span className="font-mono text-xs uppercase tracking-widest text-[#a98b78] font-bold">
                05 • CONCRETE FAIR 2026 // EIGHT EVENT EXPERIENCES · ONE CONNECTED COMMUNITY
              </span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#34252b] font-normal tracking-tight uppercase text-balance">
              Official Events &amp; Challenges
            </h1>
            <p className="font-serif text-xl sm:text-2xl italic text-[#77666a] mt-2 max-w-3xl font-light text-pretty">
              {conclaveInfo.tagline} — Six technical challenges and two non-technical events across Day 1 and Day 2.
            </p>
          </div>

          {/* Interactive Accordion Gallery Spotlight */}
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-[#eadfd4] pb-2">
              <span className="font-mono text-xs text-[#3b0924] font-bold uppercase tracking-wider flex items-center gap-2">
                <Sparkles className="size-4 text-[#a98b78]" />
                FLAGSHIP EVENTS // INTERACTIVE SPOTLIGHT
              </span>
              <span className="font-mono text-[11px] text-[#77666a] hidden sm:inline">
                Hover or tap to view event specifications
              </span>
            </div>

            <AccordionGallery
              items={flagshipEvents}
              defaultIndex={0}
              expandRatio={0.52}
              trigger="hover"
            />
          </div>

          {/* Search & Filter Bar */}
          <div className="flex flex-col md:flex-row gap-4 justify-between items-stretch md:items-center bg-white border border-[#eadfd4] p-4 rounded-2xl shadow-2xs">
            {/* Search input */}
            <div className="relative flex-1 max-w-md">
              <Search className="pointer-events-none absolute left-3 top-2.5 size-4 text-[#77666a]" />
              <input
                type="text"
                placeholder="Search event name, code (e.g. CF-01), keyword..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full h-10 border border-[#eadfd4] bg-[#fff8ef]/50 rounded-xl pl-9 pr-4 text-xs font-sans placeholder:text-[#77666a] focus:border-[#3b0924] focus:outline-none"
              />
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center gap-2">
              {(['ALL', 'Technical', 'Non-Technical'] as const).map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 font-mono text-[11px] uppercase tracking-wider rounded-full transition-all cursor-pointer border ${
                    selectedCategory === cat
                      ? 'bg-[#3b0924] text-white font-semibold border-[#3b0924] shadow-xs'
                      : 'bg-white text-[#77666a] hover:text-[#34252b] border-[#eadfd4]'
                  }`}
                >
                  {cat === 'ALL' ? 'All (8 Events)' : cat}
                </button>
              ))}
            </div>

            {/* Total count badge */}
            <div className="font-mono text-xs text-[#77666a] flex items-center gap-1.5 shrink-0">
              <span className="text-[#3b0924] font-bold">{filtered.length}</span>
              <span>of 8 Events</span>
            </div>
          </div>

          {/* Events Grid with Antigravity Stagger & 3D Tilt */}
          <StaggerEntrance selector=".event-card" stagger={0.06}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 perspective-1000">
              {filtered.map((e) => (
                <AntigravityTilt key={e.id} maxTilt={4} scale={1.01} className="event-card h-full">
                  <div className="group flex flex-col justify-between bg-white border border-[#eadfd4] hover:border-[#3b0924]/60 rounded-3xl transition-all duration-300 ease-out hover-float-3d shadow-sm overflow-hidden h-full">
                    {/* Top Image Banner */}
                    <div className="relative w-full h-52 bg-[#f4e9dc] overflow-hidden border-b border-[#eadfd4]">
                      <Image
                        src={e.image}
                        alt={e.name}
                        fill
                        sizes="(min-width: 1024px) 50vw, 100vw"
                        className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1d0411]/85 via-transparent to-transparent" />
                      
                      <div className="absolute top-4 left-4 bg-[#3b0924]/90 backdrop-blur-sm text-white px-3 py-1 rounded-full font-mono text-[10px] font-bold border border-white/20">
                        {e.code} · {e.day}
                      </div>

                      <div className="absolute top-4 right-4 bg-white/95 text-[#3b0924] px-3 py-1 rounded-full font-mono text-[10px] font-bold uppercase border border-[#eadfd4]">
                        {e.category}
                      </div>

                      <div className="absolute bottom-4 left-4 right-4 text-white flex items-center justify-between font-mono text-xs">
                        <span className="flex items-center gap-1.5 truncate max-w-[280px]">
                          <MapPin className="size-3.5 text-[#d8c2ab]" />
                          <span>{e.venue}</span>
                        </span>
                        <span className="text-[#d8c2ab] font-bold">{e.time}</span>
                      </div>
                    </div>

                    {/* Content body */}
                    <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-6">
                      <div className="space-y-3">
                        <h3 className="font-serif text-2xl text-[#34252b] font-bold group-hover:text-[#3b0924] transition-colors leading-tight">
                          {e.name}
                        </h3>
                        <p className="font-serif italic text-sm text-[#a98b78] leading-snug">
                          &ldquo;{e.subtitle}&rdquo;
                        </p>
                        <p className="text-xs text-[#77666a] leading-relaxed pt-1">
                          {e.description}
                        </p>
                      </div>

                      {/* Rounds from PPT */}
                      <div className="space-y-2.5 pt-4 border-t border-[#eadfd4]">
                        <span className="font-mono text-[10px] uppercase tracking-wider text-[#a98b78] font-bold block">
                          ROUNDS &amp; STRUCTURE
                        </span>
                        {e.rounds.map((r) => (
                          <div key={r.name} className="text-xs space-y-0.5 bg-[#f4e9dc]/40 p-2.5 rounded-xl border border-[#eadfd4]/60">
                            <span className="font-bold text-[#34252b] block">{r.name}</span>
                            <span className="text-[#77666a] block leading-relaxed">{r.details}</span>
                          </div>
                        ))}
                      </div>

                      {/* Specs tags & Register CTA */}
                      <div className="pt-4 border-t border-[#eadfd4] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                        <div className="flex items-center gap-2 font-mono text-xs text-[#34252b]">
                          <Users className="size-4 text-[#3b0924]" />
                          <span className="font-bold">Team:</span>
                          <span className="text-[#77666a]">{e.teamSize}</span>
                        </div>

                        <Link
                          href="/register"
                          className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#3b0924] hover:bg-[#521331] text-[#fff8ef] rounded-full font-sans text-xs font-semibold tracking-wide transition-all shadow-2xs hover:shadow-sm"
                        >
                          <span>Register via Form</span>
                          <ArrowRight className="size-3.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </AntigravityTilt>
              ))}
            </div>
          </StaggerEntrance>
        </div>
      </main>

      <PublicFooter />
    </div>
  )
}
