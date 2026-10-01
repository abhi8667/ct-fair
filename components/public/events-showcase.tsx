'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Trophy, Users, MapPin, CheckCircle2 } from 'lucide-react'
import { events, type FairEvent } from '@/lib/data'

export function EventsShowcase() {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL')

  const categories = [
    'ALL',
    'Heavy Engineering',
    'Structural Design',
    'Material Innovation',
    'Computational BIM',
    'Quizzes & Cultural',
  ]

  const filteredEvents = events.filter((e) => {
    if (selectedCategory === 'ALL') return true
    return e.category === selectedCategory
  })

  return (
    <div className="flex flex-col space-y-8">
      {/* Category Pills */}
      <div className="flex flex-wrap items-center gap-2 border-b border-border pb-4">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 font-mono text-[11px] uppercase tracking-wider transition-colors border ${
              selectedCategory === cat
                ? 'bg-foreground text-background font-semibold border-foreground'
                : 'bg-card text-muted-foreground hover:text-foreground border-border'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid of Event Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEvents.map((e) => (
          <div
            key={e.id}
            className="group flex flex-col justify-between bg-card border border-border/80 hover:border-gold/80 transition-all duration-300 hover:shadow-md overflow-hidden"
          >
            {/* Image banner */}
            <div className="relative w-full h-48 bg-muted overflow-hidden border-b border-border/60">
              <Image
                src={e.image}
                alt={e.name}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
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
                  <MapPin className="size-3 text-gold" aria-hidden="true" />
                  <span className="truncate max-w-[200px]">{e.venue}</span>
                </span>
                <span className="text-gold font-semibold tabular-nums">{e.time}</span>
              </div>
            </div>

            {/* Content body */}
            <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <h3 className="font-serif text-xl text-foreground font-semibold group-hover:text-gold transition-colors leading-tight text-balance">
                  {e.name}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3 text-pretty">
                  {e.description || 'Challenging real-world materials testing and structural evaluation.'}
                </p>
              </div>

              {/* Specs tags */}
              <div className="space-y-2 pt-2 border-t border-border/40 font-mono text-[11px]">
                {e.teamSize && (
                  <div className="flex items-center justify-between text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <Users className="size-3.5 text-gold" aria-hidden="true" />
                      <span>Format:</span>
                    </span>
                    <span className="text-foreground">{e.teamSize}</span>
                  </div>
                )}
                {e.prizes && (
                  <div className="flex items-center justify-between text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <Trophy className="size-3.5 text-gold" aria-hidden="true" />
                      <span>Awards:</span>
                    </span>
                    <span className="text-gold font-medium truncate max-w-[180px] tabular-nums">{e.prizes}</span>
                  </div>
                )}
              </div>

              {/* Price & Registration CTA */}
              <div className="pt-4 border-t border-border flex items-center justify-between">
                <div>
                  <span className="label-tech text-muted-foreground block">ENTRY SPEC</span>
                  <span className="font-serif text-2xl font-medium text-foreground tabular-nums">
                    {e.fee === 0 ? 'Free Pass' : `₹ ${e.fee.toLocaleString('en-IN')}`}
                  </span>
                </div>
                <Link
                  href={`/register?event=${e.id}`}
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-foreground hover:bg-gold text-background hover:text-foreground font-mono text-[10px] uppercase tracking-wider transition-colors focus-visible:outline-2 focus-visible:outline-[#b88e3e]"
                >
                  <span>Enroll</span>
                  <ArrowRight className="size-3" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
