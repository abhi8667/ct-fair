'use client'

import { useState } from 'react'
import { Clock, MapPin, Tag } from 'lucide-react'

type ScheduleItem = {
  time: string
  title: string
  track: 'KEYNOTE' | 'TESTING ARENA' | 'WORKSHOP' | 'COMPUTATIONAL' | 'CEREMONY'
  venue: string
  description: string
  speaker?: string
  day: 'day1' | 'day2'
}

const scheduleItems: ScheduleItem[] = [
  // Day 1
  {
    day: 'day1',
    time: 'TBA',
    track: 'KEYNOTE',
    title: 'Inaugural Keynote: Geopolymers & Low-Carbon Clinker',
    venue: 'TBA',
    description: 'Examining low-carbon clinker replacements across mega-viaducts, high-speed rail corridors, and sustainable infrastructure.',
    speaker: 'TBA',
  },
  {
    day: 'day1',
    time: 'TBA',
    track: 'TESTING ARENA',
    title: 'Canoe-X: Hull Flotation Trials & Mix Verifications',
    venue: 'TBA',
    description: 'Live loading of university buoyant concrete canoe entries. Technical judges measure wet/dry density ratios, righting moment, and hydrodynamic stability.',
    speaker: 'TBA',
  },
  {
    day: 'day1',
    time: 'TBA',
    track: 'TESTING ARENA',
    title: 'Bridge It — Structural Truss Loading Challenge',
    venue: 'TBA',
    description: 'Balsa and composite micro-trusses undergo progressive center-point vertical deflection tests until structural yield failure.',
    speaker: 'TBA',
  },
  {
    day: 'day1',
    time: 'TBA',
    track: 'WORKSHOP',
    title: 'Bio-Concrete Inoculation & Bacterial Healing Workshop',
    venue: 'TBA',
    description: 'Registered delegates prepare biological healing agents using Bacillus pseudofirmus and cast test prism specimens for accelerated moisture curing cycles.',
    speaker: 'TBA',
  },
  {
    day: 'day1',
    time: 'TBA',
    track: 'COMPUTATIONAL',
    title: 'Truss & Torsion: National Civil Engineering Quiz',
    venue: 'TBA',
    description: 'Fast-paced buzzer rounds on structural mechanics, concrete history, monumental mega-structures, IS code trivia, and geotechnical failures.',
    speaker: 'TBA',
  },

  // Day 2
  {
    day: 'day2',
    time: 'TBA',
    track: 'TESTING ARENA',
    title: 'The 2,000 kN Ultimate UTM Destructive Finals (Cube Strength)',
    venue: 'TBA',
    description: 'Full-scale axial compression testing of student-designed ultra-high-strength cylinder and cube specimens until yield points in the calibrated UTM.',
    speaker: 'TBA',
  },
  {
    day: 'day2',
    time: 'TBA',
    track: 'COMPUTATIONAL',
    title: 'AutoCAD & Revit Rapid Model-Athon (LOD-400 BIM Sprint)',
    venue: 'TBA',
    description: '6-hour live computational sprint. Turn unstructured architectural sketches into fully coordinated LOD-400 structural BIM models with automated rebar clash detection.',
    speaker: 'TBA',
  },
  {
    day: 'day2',
    time: 'TBA',
    track: 'TESTING ARENA',
    title: 'Shake-Table Seismic Defense & Jury Cross-Examination',
    venue: 'TBA',
    description: 'Multi-story shear frames subjected to progressive lateral base excitation waves while delegates defend their framing schemes in front of the jury panel.',
    speaker: 'TBA',
  },
  {
    day: 'day2',
    time: 'TBA',
    track: 'KEYNOTE',
    title: 'Infrastructure Conclave: Modern Possibilities & Clinker Replacements',
    venue: 'TBA',
    description: 'Titan infrastructure conclave with industry leaders exploring LC3 calcined clays, pre-cast metro viaducts, and algorithmic topology optimization.',
    speaker: 'TBA',
  },
  {
    day: 'day2',
    time: 'TBA',
    track: 'CEREMONY',
    title: 'Valedictory, RVCE Civil Medals & Institutional Trophies',
    venue: 'TBA',
    description: 'Presentation of the Golden Trowel Rolling Trophy, cash prizes (TBA), student research fellowships, and certificates.',
    speaker: 'TBA',
  },
]

export function ScheduleTabs() {
  const [activeDay, setActiveDay] = useState<'day1' | 'day2'>('day1')
  const [selectedTrack, setSelectedTrack] = useState<string>('ALL')

  const filtered = scheduleItems.filter((item) => {
    if (item.day !== activeDay) return false
    if (selectedTrack !== 'ALL' && item.track !== selectedTrack) return false
    return true
  })

  return (
    <div className="flex flex-col space-y-6">
      {/* Day switcher & filter toolbar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border pb-4">
        {/* Day Switcher */}
        <div className="flex bg-muted/60 p-1 border border-border" role="tablist" aria-label="Schedule Day Switcher">
          <button
            type="button"
            role="tab"
            aria-selected={activeDay === 'day1'}
            onClick={() => setActiveDay('day1')}
            className={`px-5 py-2 font-mono text-[11px] uppercase tracking-wider transition-all focus-visible:outline-2 focus-visible:outline-[#b88e3e] ${
              activeDay === 'day1'
                ? 'bg-foreground text-background font-semibold shadow-sm'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            DAY 01 // 30 NOV: GENESIS &amp; TRIAL
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeDay === 'day2'}
            onClick={() => setActiveDay('day2')}
            className={`px-5 py-2 font-mono text-[11px] uppercase tracking-wider transition-all focus-visible:outline-2 focus-visible:outline-[#b88e3e] ${
              activeDay === 'day2'
                ? 'bg-foreground text-background font-semibold shadow-sm'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            DAY 02 // 01 DEC: SYNTHESIS &amp; PODIUM
          </button>
        </div>

        {/* Track filter pills */}
        <div className="flex flex-wrap items-center gap-1.5 text-xs" role="group" aria-label="Filter schedule by track">
          {['ALL', 'KEYNOTE', 'TESTING ARENA', 'WORKSHOP', 'COMPUTATIONAL', 'CEREMONY'].map((track) => (
            <button
              key={track}
              type="button"
              aria-pressed={selectedTrack === track}
              onClick={() => setSelectedTrack(track)}
              className={`px-2.5 py-1 font-mono text-[10px] uppercase transition-colors border focus-visible:outline-2 focus-visible:outline-[#b88e3e] ${
                selectedTrack === track
                  ? 'border-gold bg-gold/15 text-foreground font-semibold'
                  : 'border-border bg-card text-muted-foreground hover:text-foreground'
              }`}
            >
              {track}
            </button>
          ))}
        </div>
      </div>

      {/* Schedule Items List */}
      <div className="space-y-3">
        {filtered.map((item, idx) => (
          <div
            key={idx}
            className="grid grid-cols-1 md:grid-cols-12 gap-4 bg-card border border-border/80 p-5 md:p-6 hover:border-gold/60 transition-colors"
          >
            {/* Time column */}
            <div className="md:col-span-3 flex flex-col justify-start">
              <span className="font-serif text-2xl text-foreground font-medium flex items-center gap-2 tabular-nums">
                <Clock className="size-4 text-gold inline" aria-hidden="true" />
                {item.time}
              </span>
              <span className="mt-2 inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-gold font-semibold">
                <Tag className="size-3" aria-hidden="true" />
                {item.track}
              </span>
            </div>

            {/* Title & Description */}
            <div className="md:col-span-6 space-y-2">
              <h4 className="font-serif text-lg md:text-xl text-foreground font-medium leading-snug text-balance">
                {item.title}
              </h4>
              <p className="text-xs text-muted-foreground leading-relaxed text-pretty">
                {item.description}
              </p>
              {item.speaker && (
                <div className="text-[11px] font-mono text-muted-foreground pt-1">
                  Anchor / Speaker: <span className="text-foreground font-medium">{item.speaker}</span>
                </div>
              )}
            </div>

            {/* Venue */}
            <div className="md:col-span-3 flex md:flex-col justify-between items-start md:items-end border-t md:border-t-0 border-border/40 pt-3 md:pt-0">
              <div className="flex items-center gap-1.5 font-mono text-[11px] text-muted-foreground">
                <MapPin className="size-3.5 text-gold shrink-0" aria-hidden="true" />
                <span className="text-right">[{item.venue}]</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
