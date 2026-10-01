'use client'

import { useMemo, useState } from 'react'
import { Check, QrCode, ScanLine, Search, TriangleAlert } from 'lucide-react'
import { events, getEvent, registrations, type Registration } from '@/lib/data'
import { ActionButton, CornerMarks, Panel, StatusBadge } from '@/components/system/primitives'

type Result = { reg: Registration; time: string; duplicate: boolean } | null

function now() {
  return new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: false })
}

export function CheckinConsole() {
  const [eventId, setEventId] = useState(events[0].id)
  const [checked, setChecked] = useState<Record<string, string>>(() =>
    Object.fromEntries(registrations.filter((r) => r.checkInTime).map((r) => [r.id, r.checkInTime as string])),
  )
  const [result, setResult] = useState<Result>(null)
  const [query, setQuery] = useState('')
  const [scanning, setScanning] = useState(false)

  const event = getEvent(eventId)!
  const pool = registrations.filter((r) => r.status !== 'CANCELLED')
  const liveCount =
    event.checkedIn +
    pool.filter((r) => r.eventId === eventId && !r.checkInTime && checked[r.id]).length

  const recent = useMemo(
    () =>
      Object.entries(checked)
        .map(([id, time]) => ({ reg: registrations.find((r) => r.id === id)!, time }))
        .sort((a, b) => b.time.localeCompare(a.time))
        .slice(0, 6),
    [checked],
  )

  const matches = query.trim()
    ? pool.filter(
        (r) =>
          r.name.toLowerCase().includes(query.toLowerCase()) || r.ticket.toLowerCase().includes(query.toLowerCase()),
      )
    : []

  function checkIn(reg: Registration) {
    const duplicate = Boolean(checked[reg.id])
    const time = checked[reg.id] ?? now()
    if (!duplicate) setChecked((c) => ({ ...c, [reg.id]: time }))
    setResult({ reg, time, duplicate })
  }

  function simulateScan() {
    setScanning(true)
    setResult(null)
    setTimeout(() => {
      const atGate = pool.filter((r) => r.eventId === eventId)
      const next = atGate.find((r) => !checked[r.id]) ?? atGate[0] ?? pool[0]
      checkIn(next)
      setScanning(false)
    }, 900)
  }

  return (
    <div className="grid gap-6 lg:grid-cols-12">
      <section className="relative flex flex-col border border-foreground bg-slate text-stone lg:col-span-7">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 px-5 py-3.5">
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-[10px] text-gold">S.01</span>
            <h2 className="text-[13px] font-semibold uppercase tracking-[0.12em]">Scanner</h2>
          </div>
          <label className="flex items-center gap-2">
            <span className="label-tech text-concrete">Gate</span>
            <select
              value={eventId}
              onChange={(e) => setEventId(e.target.value)}
              className="h-8 border border-white/15 bg-transparent px-2 text-[12px] focus:border-gold focus:outline-none"
            >
              {events.map((e) => (
                <option key={e.id} value={e.id} className="text-foreground">
                  {e.code} — {e.name.split(' — ')[0]}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className="grid flex-1 gap-6 p-6 md:grid-cols-2">
          <div className="relative aspect-square border border-white/15 blueprint-grid-dark">
            {['top-3 left-3 border-t border-l', 'top-3 right-3 border-t border-r', 'bottom-3 left-3 border-b border-l', 'bottom-3 right-3 border-b border-r'].map(
              (c) => (
                <span key={c} className={`absolute size-8 border-gold ${c}`} aria-hidden="true" />
              ),
            )}
            <div className="absolute inset-0 grid place-items-center">
              <QrCode className={`size-20 ${scanning ? 'text-gold' : 'text-white/20'}`} strokeWidth={1} />
            </div>
            <span
              className={`absolute inset-x-6 h-px bg-gold shadow-[0_0_12px_2px_rgb(164_131_58/0.6)] ${scanning ? 'animate-scan' : 'top-1/2 opacity-40'}`}
              aria-hidden="true"
            />
            <p className="label-tech absolute inset-x-0 bottom-5 text-center text-concrete" aria-live="polite">
              {scanning ? 'Reading ticket…' : 'Align QR within frame'}
            </p>
          </div>

          <div className="flex flex-col justify-between gap-6">
            <div>
              <p className="label-tech text-concrete">Live count · {event.code}</p>
              <p className="mt-2 text-6xl font-semibold tracking-tight">
                {liveCount}
                <span className="font-mono text-base text-concrete"> / {event.registered}</span>
              </p>
              <div className="mt-4 h-1 bg-white/10">
                <div className="h-full bg-gold transition-all" style={{ width: `${Math.min(100, (liveCount / event.registered) * 100)}%` }} />
              </div>
            </div>

            <div className="min-h-32" aria-live="polite">
              {result ? (
                <div
                  key={result.reg.id + result.time}
                  className={`border p-4 animate-in fade-in zoom-in-95 duration-300 ${result.duplicate ? 'border-gold/60 bg-gold/10' : 'border-success bg-success/20'}`}
                >
                  <div className="flex items-center gap-2">
                    {result.duplicate ? (
                      <TriangleAlert className="size-4 text-gold" strokeWidth={1.5} />
                    ) : (
                      <Check className="size-4 text-[#9fd1ad]" strokeWidth={2} />
                    )}
                    <p className="label-tech">{result.duplicate ? 'Already checked in' : 'Checked in'}</p>
                  </div>
                  <p className="mt-3 text-lg font-semibold">{result.reg.name}</p>
                  <p className="text-[12px] text-concrete">
                    {result.reg.college} · {getEvent(result.reg.eventId)?.code}
                  </p>
                  <div className="mt-3 flex justify-between font-mono text-[11px] text-concrete">
                    <span>{result.reg.ticket}</span>
                    <span>{result.time}</span>
                  </div>
                </div>
              ) : (
                <div className="grid h-full place-items-center border border-dashed border-white/15 p-4 text-center">
                  <p className="font-serif text-xl italic text-concrete">Awaiting next ticket</p>
                </div>
              )}
            </div>

            <ActionButton
              variant="solid"
              onClick={simulateScan}
              disabled={scanning}
              className="h-11 bg-stone text-slate hover:bg-stone/90"
            >
              <ScanLine className="size-4" strokeWidth={1.5} />
              {scanning ? 'Scanning…' : 'Simulate Scan'}
            </ActionButton>
          </div>
        </div>
      </section>

      <div className="flex flex-col gap-6 lg:col-span-5">
        <Panel title="Manual Check-in" code="S.02">
          <label className="relative flex items-center">
            <span className="sr-only">Search by name or ticket ID</span>
            <Search className="pointer-events-none absolute left-3 size-4 text-muted-foreground" strokeWidth={1.5} />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Name or ticket ID (e.g. CF26-03)"
              className="h-10 w-full border border-border bg-background pl-9 pr-3 text-[13px] focus:border-gold focus:outline-none"
            />
          </label>
          {matches.length > 0 && (
            <ul className="mt-3 max-h-56 divide-y divide-border overflow-y-auto border border-border">
              {matches.map((r) => (
                <li key={r.id} className="flex items-center justify-between gap-3 px-3 py-2.5">
                  <div className="min-w-0">
                    <p className="truncate text-[13px] font-medium">{r.name}</p>
                    <p className="font-mono text-[10px] text-muted-foreground">{r.ticket}</p>
                  </div>
                  {checked[r.id] ? (
                    <StatusBadge status="CHECKED IN" />
                  ) : (
                    <ActionButton className="h-8 px-3 text-[12px]" onClick={() => checkIn(r)}>
                      Check in
                    </ActionButton>
                  )}
                </li>
              ))}
            </ul>
          )}
          {query.trim() && matches.length === 0 && (
            <p className="mt-3 text-[13px] text-muted-foreground">No participant found for that query.</p>
          )}
        </Panel>

        <section className="relative flex-1 border border-border bg-card">
          <CornerMarks />
          <div className="flex items-center justify-between border-b border-border px-5 py-3.5">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-[10px] text-gold">S.03</span>
              <h2 className="text-[13px] font-semibold uppercase tracking-[0.12em]">Recent Check-ins</h2>
            </div>
            <span className="label-tech text-success">● Live</span>
          </div>
          <ol className="divide-y divide-border">
            {recent.map(({ reg, time }) => (
              <li key={reg.id} className="flex items-center gap-4 px-5 py-3 animate-in fade-in slide-in-from-top-1">
                <span className="font-mono text-[12px] text-muted-foreground">{time}</span>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-[13px] font-medium">{reg.name}</p>
                  <p className="text-[11px] text-muted-foreground">{getEvent(reg.eventId)?.name.split(' — ')[0]}</p>
                </div>
                <Check className="size-4 text-success" strokeWidth={1.5} />
              </li>
            ))}
          </ol>
        </section>
      </div>
    </div>
  )
}
