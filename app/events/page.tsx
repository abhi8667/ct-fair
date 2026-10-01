'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, MapPin, Search, Trophy, Users } from 'lucide-react'
import { PublicHeader } from '@/components/public/public-header'
import { PublicFooter } from '@/components/public/public-footer'
import { events } from '@/lib/data'
import { AntigravityTilt, StaggerEntrance } from '@/components/public/antigravity-fx'
import AccordionGallery, { AccordionGalleryItem } from '@/components/public/accordion-gallery'

export default function PublicEventsPage() {
  const [search, setSearch] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL')

  const categories = [
    'ALL',
    'Heavy Engineering',
    'Structural Design',
    'Material Innovation',
    'Computational BIM',
    'Symposium & Lecture',
    'Quizzes & Cultural',
  ]

  const filtered = events.filter((e) => {
    const matchCat = selectedCategory === 'ALL' || e.category === selectedCategory
    const matchSearch =
      e.name.toLowerCase().includes(search.toLowerCase()) ||
      e.code.toLowerCase().includes(search.toLowerCase()) ||
      e.venue.toLowerCase().includes(search.toLowerCase())
    return matchCat && matchSearch
  })

  const flagshipEvents: AccordionGalleryItem[] = [
    {
      image: '/images/card-cubes.jpg',
      label: 'Mix Design Challenge',
      link: '/register?event=concrete-cube',
      category: 'Material Innovation',
      code: 'CF-06',
      description: 'Target precise M60 high-performance mix ratios. 28-day water-cured specimens undergo crushing in the calibrated 2,000 kN UTM.',
      date: '01 Dec 2026',
      time: 'TBA',
      venue: 'TBA',
      prizes: 'TBA',
      badge: 'Flagship Bay',
    },
    {
      image: '/images/event-concrete.png',
      label: 'Canoe-X Floatation Challenge',
      link: '/register?event=canoe-x',
      category: 'Heavy Engineering',
      code: 'CF-01',
      description: 'Design, cast, and paddle a 4.5-meter buoyant lightweight concrete canoe on the campus aqua-dock.',
      date: '30 Nov 2026',
      time: 'TBA',
      venue: 'TBA',
      prizes: 'TBA',
      badge: 'Aqua Dock',
    },
    {
      image: '/images/event-bridge.png',
      label: 'Bridge It — Model Challenge',
      link: '/register?event=bridge-build',
      category: 'Structural Design',
      code: 'CF-04',
      description: 'Fabricate an efficient truss bridge using restricted balsa and composite binders. Evaluated for maximum load-to-weight ratio.',
      date: '30 Nov 2026',
      time: 'TBA',
      venue: 'TBA',
      prizes: 'TBA',
      badge: 'High Stakes',
    },
    {
      image: '/images/card-sprout.jpg',
      label: 'Bio-Concrete Workshop',
      link: '/register?event=bio-concrete',
      category: 'Material Innovation',
      code: 'CF-03',
      description: 'Hands-on culture of Bacillus pseudofirmus bacteria inside calcium lactate capsules to autonomously heal micro-fissures.',
      date: '30 Nov 2026',
      time: 'TBA',
      venue: 'TBA',
      prizes: 'TBA',
      badge: 'Hands-on Bay',
    },
    {
      image: '/images/event-column.png',
      label: 'Seismic Integrity Shake-Table',
      link: '/register?event=seismic-shake',
      category: 'Structural Design',
      code: 'CF-02',
      description: 'Fabricate multi-story scaled shear frames subjected to progressive lateral base excitation wave pulses.',
      date: '30 Nov 2026',
      time: 'TBA',
      venue: 'TBA',
      prizes: 'TBA',
      badge: 'Live UTM',
    },
  ]

  return (
    <div className="min-h-[100dvh] bg-background text-foreground flex flex-col blueprint-grid selection:bg-gold-soft">
      <PublicHeader />

      <main className="flex-1 w-full pt-32 pb-24 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Header */}
          <div className="border-b border-border pb-8">
            <span className="label-tech text-gold uppercase tracking-widest block">
              CONCRETE FAIR 2026 // 11 COMPETITIONS &amp; SYMPOSIA
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-foreground font-normal tracking-tight mt-2 uppercase text-balance">
              Events, Competitions &amp; Masterclasses
            </h1>
            <p className="font-serif text-xl sm:text-2xl italic text-muted-foreground mt-2 max-w-3xl font-light text-pretty">
              Explore 11 rigorous technical challenges, testing bay verifications, and masterclasses across two intensive days.
            </p>
          </div>

          {/* Interactive Accordion Gallery Spotlight */}
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-border/80 pb-2">
              <span className="label-tech text-gold font-semibold uppercase tracking-wider">
                FEATURED FLAGSHIP CHALLENGES // INTERACTIVE SPOTLIGHT
              </span>
              <span className="font-mono text-[11px] text-muted-foreground hidden sm:inline">
                Hover to expand specifications
              </span>
            </div>

            <AccordionGallery
              items={flagshipEvents}
              defaultIndex={2}
              expandRatio={0.52}
              trigger="hover"
            />
          </div>

          {/* Search & Filter Bar */}
          <div className="flex flex-col md:flex-row gap-4 justify-between items-stretch md:items-center bg-card border border-border p-4">
            {/* Search input */}
            <div className="relative flex-1 max-w-md">
              <Search className="pointer-events-none absolute left-3 top-2.5 size-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search event, code (e.g. CF-01), venue..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full h-10 border border-border bg-background pl-9 pr-4 text-xs font-mono placeholder:text-muted-foreground focus:border-gold focus:outline-none"
              />
            </div>

            {/* Total count badge */}
            <div className="font-mono text-xs text-muted-foreground flex items-center gap-2">
              <span className="text-foreground font-semibold">{filtered.length}</span>
              <span>of {events.length} Events Showing</span>
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 font-mono text-[11px] uppercase tracking-wider transition-colors border ${
                  selectedCategory === cat
                    ? 'bg-foreground text-background font-semibold border-foreground shadow-sm'
                    : 'bg-card text-muted-foreground hover:text-foreground border-border'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Events Grid with Antigravity Stagger & 3D Tilt */}
          <StaggerEntrance selector=".event-card" stagger={0.06}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 perspective-1000">
              {filtered.map((e) => (
                <AntigravityTilt key={e.id} maxTilt={4} scale={1.01} className="event-card h-full">
                  <div
                    className="group flex flex-col justify-between bg-card border border-border/80 hover:border-gold/80 transition-all duration-300 ease-out hover-float-3d shadow-[0_15px_30px_-10px_rgba(28,32,36,0.06)] overflow-hidden h-full"
                  >
                    {/* Image banner */}
                    <div className="relative w-full h-48 bg-muted overflow-hidden border-b border-border/60">
                      <Image
                        src={e.image}
                        alt={e.name}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                        className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate/90 via-slate/20 to-transparent" />
                      <div className="absolute top-3 left-3 bg-background/90 backdrop-blur-sm px-2.5 py-0.5 font-mono text-[10px] text-foreground border border-border">
                        {e.code} // {e.day}
                      </div>
                      <div className="absolute top-3 right-3 font-mono text-[10px] px-2 py-0.5 bg-card/90 text-gold border border-gold/40">
                        {e.category}
                      </div>
                      <div className="absolute bottom-3 left-3 right-3 text-stone flex items-center justify-between font-mono text-[10px]">
                        <span className="flex items-center gap-1">
                          <MapPin className="size-3 text-gold" />
                          <span className="truncate max-w-[200px]">{e.venue}</span>
                        </span>
                        <span className="text-gold font-semibold">{e.time}</span>
                      </div>
                    </div>

                    {/* Content body */}
                    <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                      <div className="space-y-2">
                        <h3 className="font-serif text-xl text-foreground font-semibold group-hover:text-gold transition-colors leading-tight">
                          {e.name}
                        </h3>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          {e.description}
                        </p>
                      </div>

                      {/* Specs tags */}
                      <div className="space-y-2 pt-2 border-t border-border/40 font-mono text-[11px]">
                        {e.teamSize && (
                          <div className="flex items-center justify-between text-muted-foreground">
                            <span className="flex items-center gap-1.5">
                              <Users className="size-3.5 text-gold" />
                              <span>Team Size:</span>
                            </span>
                            <span className="text-foreground">{e.teamSize}</span>
                          </div>
                        )}
                        {e.prizes && (
                          <div className="flex items-center justify-between text-muted-foreground">
                            <span className="flex items-center gap-1.5">
                              <Trophy className="size-3.5 text-gold" />
                              <span>Prize Pool:</span>
                            </span>
                            <span className="text-gold font-medium truncate max-w-[180px]">{e.prizes}</span>
                          </div>
                        )}
                      </div>

                      {/* Price & Action */}
                      <div className="pt-4 border-t border-border flex items-center justify-between">
                        <div>
                          <span className="label-tech text-muted-foreground block">REGISTRATION FEE</span>
                          <span className="font-serif text-2xl font-medium text-foreground">
                            {e.fee === 0 ? 'Free Pass' : `₹ ${e.fee.toLocaleString('en-IN')}`}
                          </span>
                        </div>
                        <Link
                          href={`/register?event=${e.id}`}
                          className="inline-flex items-center gap-1.5 px-4 py-2 bg-foreground hover:bg-gold text-background hover:text-foreground font-mono text-[10px] uppercase tracking-wider transition-colors duration-200"
                        >
                          <span>Register</span>
                          <ArrowRight className="size-3" />
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
