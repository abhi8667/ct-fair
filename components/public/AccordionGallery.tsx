'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, Trophy, MapPin, Calendar, Clock, Sparkles } from 'lucide-react'

export interface AccordionGalleryItem {
  image: string
  label: string
  link?: string
  category?: string
  code?: string
  description?: string
  date?: string
  time?: string
  venue?: string
  prizes?: string
  fee?: number | string
  badge?: string
}

export interface AccordionGalleryProps {
  items: AccordionGalleryItem[]
  defaultIndex?: number
  expandRatio?: number
  trigger?: 'hover' | 'click'
  className?: string
  height?: string
}

export default function AccordionGallery({
  items,
  defaultIndex = 2,
  expandRatio = 0.52,
  trigger = 'hover',
  className = '',
  height = 'h-[500px] sm:h-[560px] lg:h-[620px]',
}: AccordionGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number>(() => {
    if (defaultIndex >= 0 && defaultIndex < items.length) {
      return defaultIndex
    }
    return 0
  })

  const count = items.length
  // When one item is expanded, the remaining items share the rest of the flex proportion evenly
  const collapsedRatio = count > 1 ? (1 - expandRatio) / (count - 1) : 1

  const handleInteraction = (index: number) => {
    setActiveIndex(index)
  }

  return (
    <div
      className={`w-full relative select-none rounded-2xl sm:rounded-3xl overflow-hidden border border-[#ded8c8] bg-[#14181b] shadow-[0_25px_50px_-12px_rgba(28,32,36,0.18)] ${height} ${className}`}
      role="region"
      aria-label="Events Accordion Gallery"
    >
      {/* Background blueprint grid watermark */}
      <div className="absolute inset-0 blueprint-grid-dark opacity-20 pointer-events-none z-0" />

      {/* Accordion Panels Container */}
      <div className="relative z-10 w-full h-full flex flex-col md:flex-row">
        {items.map((item, index) => {
          const isExpanded = activeIndex === index
          const flexValue = isExpanded ? expandRatio : collapsedRatio

          return (
            <article
              key={`${item.label}-${index}`}
              id={`accordion-panel-${index}`}
              aria-labelledby={`accordion-heading-${index}`}
              onMouseEnter={trigger === 'hover' ? () => handleInteraction(index) : undefined}
              style={{
                flex: `${flexValue} ${flexValue} 0%`,
                transition: 'flex 0.55s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
              className="relative overflow-hidden group outline-none border-b md:border-b-0 md:border-r border-white/10 last:border-b-0 last:border-r-0 will-change-[flex]"
            >
              {/* Background Image with smooth zoom */}
              <div className="absolute inset-0 w-full h-full">
                <Image
                  src={item.image}
                  alt={item.label}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  priority={index === defaultIndex}
                  className={`object-cover object-center transition-transform duration-700 ease-out ${
                    isExpanded
                      ? 'scale-105 filter-none brightness-100'
                      : 'scale-100 filter grayscale contrast-125 brightness-75 group-hover:brightness-90 group-hover:filter-none'
                  }`}
                />

                {/* Layered cinematic gradient overlays */}
                <div
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    isExpanded
                      ? 'bg-gradient-to-t from-[#101416]/95 via-[#101416]/40 to-black/20'
                      : 'bg-black/55 group-hover:bg-black/40'
                  }`}
                />

                {/* Subtle gold accent border on expanded panel */}
                {isExpanded && (
                  <div className="absolute inset-0 border-2 border-[#b88e3e]/40 pointer-events-none z-20" />
                )}
              </div>

              {/* Watermark Index Number (e.g. 01, 02) */}
              <div
                className={`absolute top-4 left-4 z-20 font-serif font-light transition-all duration-500 pointer-events-none tabular-nums ${
                  isExpanded
                    ? 'text-4xl sm:text-5xl text-[#b88e3e] opacity-90'
                    : 'text-2xl sm:text-3xl text-white/50 group-hover:text-white/80'
                }`}
              >
                {String(index + 1).padStart(2, '0')}
              </div>

              {/* Top Right Floating Badge */}
              {item.category && (
                <div
                  className={`absolute top-4 right-4 z-20 transition-all duration-500 ${
                    isExpanded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 md:opacity-0'
                  }`}
                >
                  <span className="glass-panel-dark px-3 py-1 rounded-full font-mono text-[9px] text-[#b88e3e] uppercase tracking-widest border border-[#b88e3e]/40 shadow-md">
                    {item.code ? `${item.code} · ` : ''}
                    {item.category}
                  </span>
                </div>
              )}

              {/* COLLAPSED STATE: Native Button Trigger with ARIA & Keyboard support */}
              <button
                type="button"
                onClick={() => handleInteraction(index)}
                onFocus={() => handleInteraction(index)}
                aria-expanded={isExpanded}
                aria-controls={`accordion-content-${index}`}
                aria-label={`Expand ${item.label} specifications`}
                className={`absolute inset-0 z-20 w-full h-full text-left bg-transparent border-none p-0 cursor-pointer focus-visible:ring-2 focus-visible:ring-[#b88e3e] focus-visible:ring-inset transition-opacity duration-300 ${
                  isExpanded ? 'pointer-events-none opacity-0' : 'pointer-events-auto opacity-100'
                }`}
              >
                {/* Desktop: Vertical rotated text */}
                <div className="hidden md:flex flex-col justify-end p-5 h-full">
                  <div className="flex items-center gap-3 [writing-mode:vertical-rl] rotate-180 origin-center text-white/90">
                    <span className="font-mono text-[10px] tracking-[0.25em] text-[#b88e3e] uppercase font-semibold">
                      {item.category || 'EVENT'}
                    </span>
                    <span className="font-serif text-lg font-medium tracking-tight whitespace-nowrap">
                      {item.label}
                    </span>
                  </div>
                  <div className="w-1.5 h-1.5 rounded-full bg-[#b88e3e] mt-4 self-center" />
                </div>

                {/* Mobile: Horizontal bar */}
                <div className="md:hidden flex items-center justify-between px-4 h-full">
                  <div className="flex items-center gap-3 pl-8">
                    <span className="font-serif text-base text-white font-medium">
                      {item.label}
                    </span>
                    {item.category && (
                      <span className="font-mono text-[9px] text-[#b88e3e] uppercase">
                        [{item.category}]
                      </span>
                    )}
                  </div>
                  <span className="font-mono text-[9px] text-white/60">TAP TO EXPAND</span>
                </div>
              </button>

              {/* EXPANDED STATE: Rich Cinematic Details */}
              <div
                id={`accordion-content-${index}`}
                className={`relative z-20 h-full flex flex-col justify-end p-6 sm:p-8 lg:p-10 text-white transition-all duration-500 ease-out ${
                  isExpanded
                    ? 'opacity-100 translate-y-0 pointer-events-auto delay-100'
                    : 'opacity-0 translate-y-6 pointer-events-none'
                }`}
              >
                <div className="space-y-4 max-w-xl">
                  {/* Category & Tag row */}
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-mono text-[10px] tracking-[0.2em] text-[#b88e3e] uppercase font-semibold">
                      {item.code ? `// ${item.code} //` : '// FLAGSHIP EVENT //'}
                    </span>
                    {item.badge && (
                      <span className="px-2 py-0.5 rounded-full bg-[#b88e3e]/20 text-[#b88e3e] border border-[#b88e3e]/40 font-mono text-[9px] uppercase tracking-wider">
                        {item.badge}
                      </span>
                    )}
                  </div>

                  {/* Main Event Headline */}
                  <h3
                    id={`accordion-heading-${index}`}
                    className="font-serif text-2xl sm:text-3xl lg:text-4xl text-white font-medium tracking-tight leading-tight text-balance"
                  >
                    {item.label}
                  </h3>

                  {/* Description */}
                  {item.description && (
                    <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-sans line-clamp-3 text-pretty">
                      {item.description}
                    </p>
                  )}

                  {/* Specifications & Highlights Row */}
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-xs font-mono text-stone-300">
                    {item.prizes && (
                      <div className="flex items-center gap-1.5 text-[#b88e3e]">
                        <Trophy className="size-3.5 shrink-0" aria-hidden="true" />
                        <span className="font-semibold tabular-nums">{item.prizes}</span>
                      </div>
                    )}
                    {item.venue && (
                      <div className="flex items-center gap-1.5 text-stone-300">
                        <MapPin className="size-3.5 text-[#b88e3e] shrink-0" aria-hidden="true" />
                        <span className="truncate max-w-[200px]">{item.venue}</span>
                      </div>
                    )}
                    {(item.date || item.time) && (
                      <div className="flex items-center gap-1.5 text-stone-400">
                        <Clock className="size-3.5 text-[#b88e3e] shrink-0" aria-hidden="true" />
                        <span className="tabular-nums">{[item.date, item.time].filter(Boolean).join(' · ')}</span>
                      </div>
                    )}
                  </div>

                  {/* Action Link & Registration Button */}
                  <div className="flex items-center gap-3 pt-3">
                    <Link
                      href={item.link || '/register'}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#b88e3e] hover:bg-white text-white hover:text-[#121619] font-sans text-xs font-semibold tracking-wide transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                    >
                      <span>Register For Event</span>
                      <ArrowUpRight className="size-3.5" aria-hidden="true" />
                    </Link>

                    {item.link && (
                      <Link
                        href={item.link}
                        className="inline-flex items-center gap-1.5 px-5 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-sans text-xs font-medium tracking-wide transition-colors border border-white/20"
                      >
                        <span>Specifications</span>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </div>
  )
}
export { AccordionGallery }
