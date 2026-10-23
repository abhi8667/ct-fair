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
  // Day 1: Design, test, plan and build (30 Nov 2026)
  {
    day: 'day1',
    time: '09:00 AM',
    track: 'CEREMONY',
    title: 'Inaugural Ceremony: 13th Edition Concrete Fair 2026',
    venue: 'RVCE Civil Auditorium',
    description: 'Official opening ceremony by the Department of Civil Engineering, RV College of Engineering, and Indian Concrete Institute (ICI) dignitaries.',
    speaker: 'Faculty & ICI Leadership',
  },
  {
    day: 'day1',
    time: '09:30 AM',
    track: 'TESTING ARENA',
    title: 'CONmix: Mix Design Challenge (Quiz & Casting)',
    venue: 'Concrete & Materials Testing Lab',
    description: 'Round 1 Technical Quiz on mix-design & IS codes. Round 2 Mix Design Challenge: prepare mix, conduct slump/workability tests, cast concrete specimens for 20-hour UTM strength test.',
    speaker: 'Team Size: 3 participants',
  },
  {
    day: 'day1',
    time: '11:00 AM',
    track: 'WORKSHOP',
    title: 'CONarch: Arch Design & Build',
    venue: 'Structural Fabrication Yard',
    description: 'Design with purpose. Build with precision. Round 1: Design an arch or bridge on paper. Round 2: Build the designed arch/bridge using provided structural materials.',
    speaker: 'Team Size: 4 participants',
  },
  {
    day: 'day1',
    time: '02:00 PM',
    track: 'COMPUTATIONAL',
    title: 'CONzine: Smart City Designing',
    venue: 'CAD & GIS Modeling Studio',
    description: 'Imagine the cities of tomorrow and design a smarter future. Round 1: Technical crossword challenge. Round 2: Town-planning drafting and presentation.',
    speaker: 'Team Size: 4–5 participants',
  },
  {
    day: 'day1',
    time: '03:30 PM',
    track: 'TESTING ARENA',
    title: 'CONmake: Model Making',
    venue: 'Masonry & Model Workshop',
    description: 'Visualize, create and build — transform raw materials into miniature masterpieces! Round 1: Dimension Estimation by visual sight. Round 2: Miniature model with cement mortar & bricks.',
    speaker: 'Team Size: 3 participants',
  },

  // Day 2: Explore, escape, express and excel (01 Dec 2026)
  {
    day: 'day2',
    time: '09:30 AM',
    track: 'TESTING ARENA',
    title: 'CONmix: UTM Destructive Compressive Strength Finals',
    venue: 'Universal Testing Machine (UTM) Bay',
    description: 'After 20 hours of hydration, student-cast specimens are tested under a calibrated UTM to determine compressive strength and champion mix performance.',
    speaker: 'UTM Testing Bay Faculty',
  },
  {
    day: 'day2',
    time: '10:00 AM',
    track: 'COMPUTATIONAL',
    title: 'CONquest: Civil Engineering Quiz',
    venue: 'Civil Seminar Hall',
    description: 'Challenge your knowledge. Beat the buzzer. Claim the victory! Round 1: Technical MCQ Quiz. Round 2: Stage Buzzer Battle on structures, mechanics & mega-projects.',
    speaker: 'Team Size: 4 participants',
  },
  {
    day: 'day2',
    time: '11:30 AM',
    track: 'TESTING ARENA',
    title: 'CONscape: Surveying Treasure Hunt & Escape Room',
    venue: 'Campus Grounds & Riddle Lab',
    description: 'Follow the clues. Explore the campus. Unlock the mystery! Round 1: Surveying Treasure Hunt with clues & teamwork. Round 2: Civil engineering puzzle Escape Room.',
    speaker: 'Team Size: 3–4 participants',
  },
  {
    day: 'day2',
    time: '02:00 PM',
    track: 'KEYNOTE',
    title: 'CONflix: Short Film Screening',
    venue: 'Audio Visual Auditorium',
    description: 'Lights. Camera. Creativity! Tell a story that leaves an impact. Teams create and present a 5-minute short film inspired by sponsor products and infrastructure.',
    speaker: 'Team Size: 6–7 participants',
  },
  {
    day: 'day2',
    time: '03:30 PM',
    track: 'WORKSHOP',
    title: 'CONfight: Debate Challenge',
    venue: 'Professors Council Chamber',
    description: 'Think critically. Speak confidently. Defend your ideas. Round 1: Pick and Speak (2–3 mins). Round 2: Timed debate defending real-world infrastructure solutions before professors.',
    speaker: 'Team Size: 3 participants',
  },
  {
    day: 'day2',
    time: '05:00 PM',
    track: 'CEREMONY',
    title: 'Valedictory & Awards Ceremony',
    venue: 'RVCE Main Auditorium',
    description: 'Honoring champions of all 8 technical and non-technical events. Certification distribution in association with Indian Concrete Institute (ICI).',
    speaker: 'Department of Civil Engineering & ICI',
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
        <div className="flex bg-[#f4e9dc] p-1 border border-[#d8c2ab]/60 rounded-full" role="tablist" aria-label="Schedule Day Switcher">
          <button
            type="button"
            role="tab"
            aria-selected={activeDay === 'day1'}
            onClick={() => setActiveDay('day1')}
            className={`px-5 py-2 rounded-full font-mono text-[11px] uppercase tracking-wider transition-all focus-visible:outline-2 focus-visible:outline-[#d8c2ab] ${
              activeDay === 'day1'
                ? 'bg-[#3b0924] text-white font-semibold shadow-sm'
                : 'text-[#77666a] hover:text-[#3b0924]'
            }`}
          >
            DAY 01 // 30 NOV: GENESIS &amp; TRIAL
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeDay === 'day2'}
            onClick={() => setActiveDay('day2')}
            className={`px-5 py-2 rounded-full font-mono text-[11px] uppercase tracking-wider transition-all focus-visible:outline-2 focus-visible:outline-[#d8c2ab] ${
              activeDay === 'day2'
                ? 'bg-[#3b0924] text-white font-semibold shadow-sm'
                : 'text-[#77666a] hover:text-[#3b0924]'
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
              className={`px-2.5 py-1 rounded-full font-mono text-[10px] uppercase transition-colors border focus-visible:outline-2 focus-visible:outline-[#d8c2ab] ${
                selectedTrack === track
                  ? 'border-[#3b0924] bg-[#3b0924] text-white font-semibold'
                  : 'border-[#d8c2ab]/60 bg-white text-[#77666a] hover:text-[#3b0924]'
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
