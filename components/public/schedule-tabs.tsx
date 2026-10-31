'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Clock, MapPin, Users, ArrowUpRight } from 'lucide-react'
import { GOOGLE_FORM_URL } from '@/lib/data'

type ScheduleItem = {
  time: string
  title: string
  code: string
  track: 'Technical' | 'Non-Technical' | 'Ceremony'
  venue: string
  description: string
  teamSize?: string
  rounds?: string
  day: 'day1' | 'day2'
}

const scheduleItems: ScheduleItem[] = [
  // Day 1: Design, test, plan and build (30 Nov 2026)
  {
    day: 'day1',
    time: '09:00 AM',
    track: 'Ceremony',
    code: 'INAUGURAL',
    title: 'Inaugural Ceremony: Concrete Fair 2026 (13th Edition)',
    venue: 'Department of Civil Engineering, RVCE',
    description: 'Official opening ceremony organized by the Department of Civil Engineering at RV College of Engineering in association with the ICI Chapter.',
  },
  {
    day: 'day1',
    time: '09:30 AM',
    track: 'Technical',
    code: 'CF-01',
    title: 'CONmix: Mix Design (Round 1 & Round 2 Casting)',
    venue: 'Department of Civil Engineering Laboratories, RVCE',
    description: 'Can you design the perfect concrete mix and prove its performance? Round 1: Technical Quiz on IS codes. Round 2: Mix Design Challenge — slump & workability tests, casting specimens for UTM testing.',
    teamSize: '3 participants',
    rounds: 'Round 1 (Quiz) + Round 2 (Casting)',
  },
  {
    day: 'day1',
    time: '11:00 AM',
    track: 'Technical',
    code: 'CF-02',
    title: 'CONarch: Arch Design & Build',
    venue: 'Department of Civil Engineering, RVCE',
    description: 'Design with purpose. Build with precision. Transform structural concepts into reality through paper drafting and physical arch construction.',
    teamSize: '4 participants',
    rounds: 'Round 1 (Drafting on paper) + Round 2 (Build arch/bridge)',
  },
  {
    day: 'day1',
    time: '02:00 PM',
    track: 'Technical',
    code: 'CF-03',
    title: 'CONzine: Smart City Designing',
    venue: 'Department of Civil Engineering, RVCE',
    description: 'Imagine the cities of tomorrow and design a smarter future. Put your technical knowledge and urban-planning creativity to work.',
    teamSize: '4–5 participants',
    rounds: 'Round 1 (Crossword) + Round 2 (Town-planning drafting & presentation)',
  },
  {
    day: 'day1',
    time: '03:30 PM',
    track: 'Technical',
    code: 'CF-04',
    title: 'CONmake: Model Making',
    venue: 'Department of Civil Engineering, RVCE',
    description: 'Visualize, create and build — transform raw materials into miniature masterpieces! Dimension estimation without measuring tools, followed by miniature house making.',
    teamSize: '3 participants',
    rounds: 'Round 1 (Dimension estimation) + Round 2 (Miniature brick & mortar model)',
  },

  // Day 2: Explore, escape, express and excel (01 Dec 2026)
  {
    day: 'day2',
    time: '09:30 AM',
    track: 'Technical',
    code: 'CF-01',
    title: 'CONmix: UTM Compressive Strength Testing (Round 2 Finale)',
    venue: 'Department of Civil Engineering Laboratories, RVCE',
    description: 'After 20 hours, the concrete specimens prepared on Day 1 will be tested under a Universal Testing Machine (UTM) for compressive strength to determine the champion mix.',
    teamSize: '3 participants',
    rounds: 'UTM Compressive Strength Testing',
  },
  {
    day: 'day2',
    time: '10:00 AM',
    track: 'Technical',
    code: 'CF-05',
    title: 'CONquest: Civil Engineering Quiz',
    venue: 'Department of Civil Engineering, RVCE',
    description: 'Challenge your knowledge. Beat the buzzer. Claim the victory! Technical MCQ quiz followed by high-speed buzzer battle.',
    teamSize: '4 participants',
    rounds: 'Round 1 (Technical MCQ) + Round 2 (Buzzer Battle)',
  },
  {
    day: 'day2',
    time: '11:30 AM',
    track: 'Technical',
    code: 'CF-06',
    title: 'CONscape: Surveying Treasure Hunt & Escape Room',
    venue: 'RVCE Campus Grounds & Civil Engineering Department',
    description: 'Follow the clues. Explore the campus. Unlock the mystery! Campus surveying challenge leading into a timed puzzle escape room.',
    teamSize: '3–4 participants',
    rounds: 'Round 1 (Surveying Hunt) + Round 2 (Escape Room)',
  },
  {
    day: 'day2',
    time: '02:00 PM',
    track: 'Non-Technical',
    code: 'CF-07',
    title: 'CONflix: Short Film',
    venue: 'Department of Civil Engineering, RVCE',
    description: 'Lights. Camera. Creativity! Tell a story that leaves an impact. Teams present a 5-minute short film inspired by sponsor products.',
    teamSize: '6–7 participants · 5 mins',
    rounds: 'Round 1 (Screening & Presentation)',
  },
  {
    day: 'day2',
    time: '03:30 PM',
    track: 'Non-Technical',
    code: 'CF-08',
    title: 'CONfight: Debate Challenge',
    venue: 'Department of Civil Engineering, RVCE',
    description: 'Think critically. Speak confidently. Defend your ideas. Pick & Speak on a real-world problem followed by timed debate before a professor panel.',
    teamSize: '3 participants · Panel of professors',
    rounds: 'Round 1 (Pick and Speak) + Round 2 (Debate)',
  },
  {
    day: 'day2',
    time: '05:00 PM',
    track: 'Ceremony',
    code: 'VALEDICTORY',
    title: 'Valedictory & Awards Distribution',
    venue: 'Department of Civil Engineering, RVCE',
    description: 'Felicitating champions and participants of Concrete Fair 2026 with certificates and awards in association with the ICI Chapter.',
  },
]

export function ScheduleTabs() {
  const [activeDay, setActiveDay] = useState<'day1' | 'day2'>('day1')

  const items = scheduleItems.filter((item) => item.day === activeDay)

  return (
    <div className="space-y-8">
      {/* Day Selector Tabs */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 border-b border-[#eadfd4] pb-4">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setActiveDay('day1')}
            className={`px-6 py-3 rounded-2xl font-mono text-xs uppercase tracking-wider transition-all cursor-pointer border ${
              activeDay === 'day1'
                ? 'bg-[#3b0924] text-white font-bold border-[#3b0924] shadow-xs'
                : 'bg-white text-[#77666a] hover:text-[#34252b] border-[#eadfd4]'
            }`}
          >
            Day 1 — 30 Nov 2026
            <span className="block text-[10px] normal-case opacity-80">Design, test, plan and build</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveDay('day2')}
            className={`px-6 py-3 rounded-2xl font-mono text-xs uppercase tracking-wider transition-all cursor-pointer border ${
              activeDay === 'day2'
                ? 'bg-[#3b0924] text-white font-bold border-[#3b0924] shadow-xs'
                : 'bg-white text-[#77666a] hover:text-[#34252b] border-[#eadfd4]'
            }`}
          >
            Day 2 — 01 Dec 2026
            <span className="block text-[10px] normal-case opacity-80">Explore, escape, express &amp; excel</span>
          </button>
        </div>

        <Link
          href="/register"
          className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 bg-[#f4e9dc] hover:bg-[#3b0924] text-[#3b0924] hover:text-white rounded-full font-sans text-xs font-semibold tracking-wide transition-all border border-[#d8c2ab]"
        >
          <span>Register for Events (Google Form)</span>
          <ArrowUpRight className="size-3.5" />
        </Link>
      </div>

      {/* Schedule Items List */}
      <div className="space-y-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="p-6 bg-white border border-[#eadfd4] rounded-2xl shadow-2xs hover:border-[#3b0924]/40 transition-all space-y-3"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#eadfd4] pb-3">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full font-mono text-[10px] font-bold uppercase bg-[#f4e9dc] text-[#3b0924]">
                  {item.code}
                </span>
                <span className="font-mono text-xs text-[#a98b78] font-bold uppercase">
                  {item.track}
                </span>
              </div>

              <div className="flex items-center gap-4 text-xs font-mono text-[#34252b]">
                <span className="flex items-center gap-1.5 font-bold text-[#3b0924]">
                  <Clock className="size-3.5 text-[#a98b78]" />
                  {item.time}
                </span>
              </div>
            </div>

            <div className="space-y-1.5">
              <h3 className="font-serif text-xl font-bold text-[#34252b]">
                {item.title}
              </h3>
              <p className="text-xs text-[#77666a] leading-relaxed">
                {item.description}
              </p>
            </div>

            <div className="pt-2 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-[#77666a]">
              <span className="flex items-center gap-1.5">
                <MapPin className="size-3.5 text-[#a98b78]" />
                <span>{item.venue}</span>
              </span>

              {item.teamSize && (
                <span className="flex items-center gap-1.5 text-[#3b0924] font-semibold">
                  <Users className="size-3.5 text-[#a98b78]" />
                  <span>Team: {item.teamSize}</span>
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
