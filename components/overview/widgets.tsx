import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, CreditCard, Megaphone, ScanLine, TicketCheck, Users, Flag } from 'lucide-react'
import { activity, events, type FairEvent } from '@/lib/data'
import { Meter, StatusBadge } from '@/components/system/primitives'

export function OverviewHero() {
  return (
    <section className="relative mb-10 grid overflow-hidden border border-foreground/80 bg-card md:grid-cols-12">
      <div className="relative flex flex-col justify-between gap-10 p-6 md:col-span-7 md:p-10">
        <div className="flex items-center gap-3">
          <span className="font-mono text-[11px] text-gold">§ 00</span>
          <span className="h-px w-10 bg-gold" aria-hidden="true" />
          <span className="label-tech text-muted-foreground">Department of Civil Engineering · RVCE Bengaluru</span>
        </div>
        <div>
          <h1 className="text-5xl font-semibold uppercase leading-[0.9] tracking-tight md:text-7xl xl:text-8xl">
            Concrete
            <br />
            Fair 2026
          </h1>
          <p className="mt-4 flex items-center gap-4 text-sm font-medium uppercase tracking-[0.3em] text-muted-foreground">
            <span className="h-px w-8 bg-foreground" aria-hidden="true" />
            Event Operations
          </p>
        </div>
        <div className="grid grid-cols-3 border-t border-border pt-5">
          {['Tradition', 'Transformation', 'Tomorrow'].map((w, i) => (
            <div key={w} className="border-l border-border pl-3 first:border-l-0 first:pl-0">
              <p className="font-mono text-[10px] text-muted-foreground">0{i + 1}</p>
              <p className="font-serif text-lg italic md:text-2xl">{w}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative min-h-64 border-t border-foreground/80 md:col-span-5 md:border-t-0 md:border-l">
        <Image
          src="/images/hero-arch.png"
          alt="Classical colonnade meeting brutalist concrete structure"
          fill
          priority
          sizes="(min-width: 768px) 40vw, 100vw"
          className="object-cover grayscale"
        />
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-slate/80 to-transparent p-5 text-stone">
          <div>
            <p className="label-tech text-stone/70">Venue</p>
            <p className="text-sm">RVCE Campus, Mysuru Road</p>
          </div>
          <div className="text-right">
            <p className="label-tech text-stone/70">Dates</p>
            <p className="font-mono text-sm">30.11 — 01.12.2026</p>
          </div>
        </div>
        <div className="absolute top-4 right-4 left-4 flex justify-between font-mono text-[10px] text-stone/80" aria-hidden="true">
          <span>N 12°55′25″</span>
          <span>E 77°29′59″</span>
        </div>
      </div>
    </section>
  )
}

export function CapacityList({ items = events }: { items?: FairEvent[] }) {
  return (
    <ul className="flex flex-col divide-y divide-border">
      {items.map((e) => {
        const pct = Math.round((e.registered / e.capacity) * 100)
        return (
          <li key={e.id} className="grid grid-cols-12 items-center gap-3 py-3.5 first:pt-0 last:pb-0">
            <span className="col-span-2 font-mono text-[11px] text-muted-foreground sm:col-span-1">{e.code}</span>
            <div className="col-span-10 min-w-0 sm:col-span-5">
              <p className="truncate text-[13px] font-medium">{e.name}</p>
              <p className="text-[11px] text-muted-foreground">{e.venue}</p>
            </div>
            <div className="col-span-8 sm:col-span-4">
              <Meter value={e.registered} max={e.capacity} />
            </div>
            <p className="col-span-4 text-right font-mono text-[11px] sm:col-span-2">
              {e.registered}
              <span className="text-muted-foreground">/{e.capacity}</span>
              <span className={pct >= 100 ? 'ml-2 text-gold' : 'ml-2 text-muted-foreground'}>{pct}%</span>
            </p>
          </li>
        )
      })}
    </ul>
  )
}

export function UpcomingEvents() {
  const upcoming = events.filter((e) => e.checkedIn === 0).slice(0, 4)
  return (
    <ul className="flex flex-col divide-y divide-border">
      {upcoming.map((e) => (
        <li key={e.id}>
          <Link href="/admin/events" className="group flex items-center gap-4 py-3 first:pt-0">
            <div className="relative size-14 shrink-0 overflow-hidden border border-border">
              <Image src={e.image} alt="" fill sizes="56px" className="object-cover grayscale transition-transform duration-500 group-hover:scale-105" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="label-tech text-muted-foreground">
                {e.day} · {e.time.split(' ')[0]}
              </p>
              <p className="truncate text-[13px] font-medium">{e.name}</p>
              <p className="text-[11px] text-muted-foreground">{e.venue}</p>
            </div>
            <ArrowUpRight className="size-4 text-muted-foreground transition-colors group-hover:text-gold" strokeWidth={1.5} />
          </Link>
        </li>
      ))}
    </ul>
  )
}

const kindIcon = {
  checkin: ScanLine,
  status: Flag,
  payment: CreditCard,
  announcement: Megaphone,
  volunteer: Users,
  registration: TicketCheck,
}

export function ActivityFeed() {
  return (
    <ol className="relative flex flex-col">
      <span className="absolute top-2 bottom-2 left-[15px] w-px bg-border" aria-hidden="true" />
      {activity.map((a, i) => {
        const Icon = kindIcon[a.kind]
        return (
          <li key={i} className="relative flex gap-4 py-2.5">
            <span className="relative z-10 grid size-8 shrink-0 place-items-center border border-border bg-card">
              <Icon className={i === 0 ? 'size-3.5 text-gold' : 'size-3.5 text-muted-foreground'} strokeWidth={1.5} />
            </span>
            <div className="min-w-0 flex-1 pt-0.5">
              <p className="text-[13px] leading-snug">
                <span className="font-medium">{a.actor}</span>{' '}
                <span className="text-muted-foreground">{a.action}</span> {a.target}
              </p>
              <p className="mt-0.5 font-mono text-[10px] text-muted-foreground">
                {a.time} · {a.meta}
              </p>
            </div>
          </li>
        )
      })}
    </ol>
  )
}

export function EventStatusLine({ e }: { e: FairEvent }) {
  return (
    <div className="flex items-center justify-between">
      <span className="font-mono text-[11px] text-muted-foreground">{e.code}</span>
      <StatusBadge status={e.status} />
    </div>
  )
}
