'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Megaphone, ScanLine, Download, Users } from 'lucide-react'
import { coordinators, events, registrations, volunteers } from '@/lib/data'
import { Meter, Panel, StatusBadge } from '@/components/system/primitives'
import { cn } from '@/lib/utils'

export function CoordinatorView() {
  const [coordId, setCoordId] = useState(coordinators[0].id)
  const coord = coordinators.find((c) => c.id === coordId)!
  const myEvents = events.filter((e) => e.coordinator === coord.name)
  const [eventId, setEventId] = useState(myEvents[0].id)
  const active = myEvents.find((e) => e.id === eventId) ?? myEvents[0]
  const participants = registrations.filter((r) => r.eventId === active.id)
  const crew = volunteers.filter((v) => v.eventId === active.id)

  function selectCoord(id: string) {
    setCoordId(id)
    const first = events.find((e) => e.coordinator === coordinators.find((c) => c.id === id)!.name)
    if (first) setEventId(first.id)
  }

  return (
    <>
      <div className="mb-8 grid gap-px border border-border bg-border sm:grid-cols-3" role="tablist" aria-label="Select coordinator">
        {coordinators.map((c) => {
          const on = c.id === coordId
          return (
            <button
              key={c.id}
              type="button"
              role="tab"
              aria-selected={on}
              onClick={() => selectCoord(c.id)}
              className={cn(
                'relative flex items-center gap-4 p-4 text-left transition-colors',
                on ? 'bg-slate text-stone' : 'bg-card hover:bg-muted',
              )}
            >
              <span className={cn('grid size-10 place-items-center font-mono text-xs', on ? 'bg-gold text-slate' : 'bg-secondary')}>
                {c.initials}
              </span>
              <span>
                <span className="block text-[13px] font-medium">{c.name}</span>
                <span className={cn('label-tech', on ? 'text-concrete' : 'text-muted-foreground')}>{c.title}</span>
              </span>
            </button>
          )
        })}
      </div>

      <div className="mb-6 flex flex-wrap gap-2">
        {myEvents.map((e) => (
          <button
            key={e.id}
            type="button"
            onClick={() => setEventId(e.id)}
            aria-pressed={e.id === active.id}
            className={cn(
              'border px-3 py-2 text-[12px] transition-colors',
              e.id === active.id ? 'border-foreground bg-foreground text-background' : 'border-border bg-card hover:border-foreground/40',
            )}
          >
            <span className={cn('mr-2 font-mono text-[10px]', e.id === active.id ? 'text-gold' : 'text-muted-foreground')}>{e.code}</span>
            {e.name.split(' — ')[0]}
          </button>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-12">
        <section className="relative overflow-hidden border border-foreground/80 bg-card lg:col-span-8">
          <div className="grid md:grid-cols-5">
            <div className="relative min-h-56 md:col-span-2">
              <Image src={active.image} alt={active.name} fill sizes="(min-width: 768px) 30vw, 100vw" className="object-cover grayscale" />
            </div>
            <div className="flex flex-col gap-5 p-6 md:col-span-3">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] text-gold">{active.code} · {active.category}</span>
                <StatusBadge status={active.status} />
              </div>
              <h2 className="text-2xl font-semibold leading-tight text-balance">{active.name}</h2>
              <dl className="grid grid-cols-3 gap-4 border-y border-border py-4">
                {[
                  ['Registered', active.registered],
                  ['Capacity', active.capacity],
                  ['Checked in', active.checkedIn],
                ].map(([k, v]) => (
                  <div key={k as string}>
                    <dt className="label-tech text-muted-foreground">{k}</dt>
                    <dd className="mt-1 text-2xl font-semibold">{v}</dd>
                  </div>
                ))}
              </dl>
              <Meter value={active.registered} max={active.capacity} />
              <p className="font-mono text-[11px] text-muted-foreground">
                {active.date} · {active.time} · {active.venue}
              </p>
            </div>
          </div>
        </section>

        <Panel title="Quick Actions" code="Q.01" className="lg:col-span-4" bodyClassName="p-0">
          <ul className="divide-y divide-border">
            {[
              { label: 'Open check-in gate', icon: ScanLine, href: '/attendance' },
              { label: 'Post update to participants', icon: Megaphone, href: '/announcements' },
              { label: 'View all participants', icon: Users, href: '/registrations' },
              { label: 'Download participant list', icon: Download, href: '/registrations' },
            ].map((a, i) => (
              <li key={a.label}>
                <Link href={a.href} className="group flex items-center gap-4 px-5 py-4 transition-colors hover:bg-muted">
                  <span className="font-mono text-[10px] text-muted-foreground">0{i + 1}</span>
                  <a.icon className="size-4 text-muted-foreground group-hover:text-gold" strokeWidth={1.5} />
                  <span className="text-[13px]">{a.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </Panel>

        <Panel title="Participants" code="Q.02" className="lg:col-span-7" bodyClassName="p-0">
          {participants.length ? (
            <ul className="divide-y divide-border">
              {participants.map((p) => (
                <li key={p.id} className="flex items-center justify-between gap-3 px-5 py-3">
                  <div>
                    <p className="text-[13px] font-medium">{p.name}</p>
                    <p className="font-mono text-[10px] text-muted-foreground">
                      {p.ticket} · {p.college}
                    </p>
                  </div>
                  <StatusBadge status={p.status} />
                </li>
              ))}
            </ul>
          ) : (
            <p className="p-5 text-[13px] text-muted-foreground">No participants recorded yet.</p>
          )}
        </Panel>

        <Panel title="Assigned Volunteers" code="Q.03" className="lg:col-span-5" bodyClassName="p-0">
          {crew.length ? (
            <ul className="divide-y divide-border">
              {crew.map((v) => (
                <li key={v.id} className="flex items-center justify-between gap-3 px-5 py-3">
                  <div>
                    <p className="text-[13px] font-medium">{v.name}</p>
                    <p className="text-[11px] text-muted-foreground">
                      {v.role} · <span className="font-mono">{v.shift}</span>
                    </p>
                  </div>
                  <StatusBadge status={v.status} />
                </li>
              ))}
            </ul>
          ) : (
            <div className="p-5">
              <p className="font-serif text-xl italic">No crew assigned.</p>
              <Link href="/volunteers" className="label-tech mt-2 inline-block text-gold hover:underline">
                Assign volunteers →
              </Link>
            </div>
          )}
        </Panel>
      </div>
    </>
  )
}
