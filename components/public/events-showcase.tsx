'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Users, MapPin } from 'lucide-react'
import { events } from '@/lib/data'

export function EventsShowcase() {
  const [selectedCategory, setSelectedCategory] = useState<'ALL' | 'Technical' | 'Non-Technical'>('ALL')

  const filteredEvents = events.filter((e) => {
    if (selectedCategory === 'ALL') return true
    return e.eventType === selectedCategory
  })

  return (
    <div className="flex flex-col space-y-8">
      {/* Category Pills */}
      <div className="flex flex-wrap items-center gap-2 border-b border-[#eadfd4] pb-4">
        {(['ALL', 'Technical', 'Non-Technical'] as const).map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 font-mono text-[11px] uppercase tracking-wider rounded-full transition-colors border ${
              selectedCategory === cat
                ? 'bg-[#3b0924] text-white font-semibold border-[#3b0924]'
                : 'bg-white text-[#77666a] hover:text-[#34252b] border-[#eadfd4]'
            }`}
          >
            {cat === 'ALL' ? 'All (8 Events)' : cat}
          </button>
        ))}
      </div>

      {/* Grid of Event Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEvents.map((e) => (
          <div
            key={e.id}
            className="group flex flex-col justify-between bg-white border border-[#eadfd4] hover:border-[#3b0924]/60 rounded-2xl transition-all duration-300 hover:shadow-md overflow-hidden"
          >
            {/* Image banner */}
            <div className="relative w-full h-48 bg-[#f4e9dc] overflow-hidden border-b border-[#eadfd4]">
              <Image
                src={e.image}
                alt={e.name}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1d0411]/80 via-transparent to-transparent" />
              <div className="absolute top-3 left-3 bg-[#3b0924]/90 backdrop-blur-sm px-2.5 py-0.5 rounded-full font-mono text-[10px] text-white border border-white/20">
                {e.code} // {e.day}
              </div>
              <div className="absolute top-3 right-3 font-mono text-[10px] px-2.5 py-0.5 rounded-full bg-white text-[#3b0924] font-bold border border-[#eadfd4]">
                {e.category}
              </div>
              <div className="absolute bottom-3 left-3 right-3 text-white flex items-center justify-between font-mono text-[10px]">
                <span className="flex items-center gap-1">
                  <MapPin className="size-3 text-[#d8c2ab]" aria-hidden="true" />
                  <span className="truncate max-w-[200px]">{e.venue}</span>
                </span>
                <span className="text-[#d8c2ab] font-bold">{e.time}</span>
              </div>
            </div>

            {/* Content body */}
            <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-1.5">
                <h3 className="font-serif text-xl text-[#34252b] font-bold group-hover:text-[#3b0924] transition-colors leading-tight">
                  {e.name}
                </h3>
                <p className="font-serif italic text-xs text-[#a98b78]">
                  {e.subtitle}
                </p>
                <p className="text-xs text-[#77666a] leading-relaxed line-clamp-3">
                  {e.description}
                </p>
              </div>

              {/* Specs tags */}
              <div className="space-y-2 pt-2 border-t border-[#eadfd4] font-mono text-[11px]">
                <div className="flex items-center justify-between text-[#77666a]">
                  <span className="flex items-center gap-1.5">
                    <Users className="size-3.5 text-[#3b0924]" aria-hidden="true" />
                    <span>Team Size:</span>
                  </span>
                  <span className="text-[#34252b] font-bold">{e.teamSize}</span>
                </div>
              </div>

              {/* Registration CTA */}
              <div className="pt-4 border-t border-[#eadfd4] flex items-center justify-between">
                <span className="font-mono text-[10px] text-[#a98b78] uppercase font-bold">
                  OFFICIAL REGISTRATION
                </span>
                <Link
                  href="/register"
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#3b0924] hover:bg-[#521331] text-white rounded-full font-mono text-[10px] uppercase tracking-wider transition-colors"
                >
                  <span>Register</span>
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
