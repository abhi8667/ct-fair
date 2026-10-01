'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { CalendarDays, Clock, MapPin, Pencil, ScanLine, Settings2, Users } from 'lucide-react'
import { events, inr, type FairEvent } from '@/lib/data'
import { CornerMarks, FilterTabs, Meter, StatusBadge } from '@/components/system/primitives'

const filters = ['ALL', 'OPEN', 'SOLD OUT', 'CLOSED'] as const

export function EventGrid() {
  const [filter, setFilter] = useState<(typeof filters)[number]>('ALL')
  const list = filter === 'ALL' ? events : events.filter((e) => e.status === filter)

  return (
    <>
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <FilterTabs label="Filter events by status" options={filters} value={filter} onChange={setFilter} />
        <p className="font-mono text-[11px] text-muted-foreground">
          Showing {String(list.length).padStart(2, '0')} / {String(events.length).padStart(2, '0')}
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {list.map((e, i) => (
          <EventCard key={e.id} event={e} featured={i === 0 && filter === 'ALL'} />
        ))}
      </div>
    </>
  )
}

function EventCard({ event: e, featured }: { event: FairEvent; featured?: boolean }) {
  const actions = [
    { label: 'Manage', icon: Settings2, href: '/coordinators' },
    { label: 'Participants', icon: Users, href: '/registrations' },
    { label: 'Check-in', icon: ScanLine, href: '/attendance' },
    { label: 'Edit', icon: Pencil, href: '/events' },
  ]
  return (
    <article
      className={`group relative flex flex-col border border-border bg-card transition-all duration-300 hover:-translate-y-0.5 hover:border-foreground/50 hover:shadow-[0_12px_30px_-18px_rgb(35_39_43/0.35)] ${featured ? 'md:col-span-2' : ''}`}
    >
      <CornerMarks />
      <div className={`relative overflow-hidden border-b border-border ${featured ? 'aspect-[21/9]' : 'aspect-[16/10]'}`}>
        <Image
          src={e.image}
          alt={e.name}
          fill
          sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover grayscale transition-transform duration-700 group-hover:scale-[1.03]"
        />
        <div className="absolute top-3 left-3 flex items-center gap-2">
          <span className="bg-card px-2 py-1 font-mono text-[10px] tracking-[0.14em]">{e.code}</span>
          <span className="bg-slate px-2 py-1 font-mono text-[10px] tracking-[0.14em] text-stone uppercase">{e.category}</span>
        </div>
        <div className="absolute top-3 right-3 bg-card">
          <StatusBadge status={e.status} />
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-5 p-5">
        <div>
          <h3 className={`font-semibold leading-tight text-balance ${featured ? 'text-2xl' : 'text-lg'}`}>{e.name}</h3>
          <p className="mt-1 text-[12px] text-muted-foreground">Coordinator — {e.coordinator}</p>
        </div>

        <dl className="grid grid-cols-2 gap-x-4 gap-y-2 text-[12px]">
          <div className="flex items-center gap-2">
            <CalendarDays className="size-3.5 text-muted-foreground" strokeWidth={1.5} />
            <dt className="sr-only">Date</dt>
            <dd>{e.date}</dd>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="size-3.5 text-muted-foreground" strokeWidth={1.5} />
            <dt className="sr-only">Time</dt>
            <dd className="font-mono text-[11px]">{e.time}</dd>
          </div>
          <div className="col-span-2 flex items-center gap-2">
            <MapPin className="size-3.5 text-muted-foreground" strokeWidth={1.5} />
            <dt className="sr-only">Venue</dt>
            <dd>{e.venue}</dd>
          </div>
        </dl>

        <div className="mt-auto">
          <div className="mb-2 flex items-baseline justify-between">
            <p className="label-tech text-muted-foreground">Registrations</p>
            <p className="font-mono text-xs">
              {e.registered}
              <span className="text-muted-foreground"> / {e.capacity}</span>
            </p>
          </div>
          <Meter value={e.registered} max={e.capacity} />
          <p className="mt-2 font-mono text-[10px] text-muted-foreground">{e.fee ? `${inr(e.fee)} per entry` : 'Free entry'}</p>
        </div>
      </div>

      <div className="grid grid-cols-4 border-t border-border">
        {actions.map((a) => (
          <Link
            key={a.label}
            href={a.href}
            className="flex flex-col items-center gap-1 border-l border-border py-3 text-[11px] text-muted-foreground transition-colors first:border-l-0 hover:bg-muted hover:text-foreground"
          >
            <a.icon className="size-3.5" strokeWidth={1.5} />
            {a.label}
          </Link>
        ))}
      </div>
    </article>
  )
}
