'use client'

import { useMemo, useState } from 'react'
import { Download, Search } from 'lucide-react'
import { events, getEvent, registrations } from '@/lib/data'
import { ActionButton, CornerMarks, FilterTabs, StatusBadge } from '@/components/system/primitives'

const statuses = ['ALL', 'CONFIRMED', 'CHECKED IN', 'PENDING', 'CANCELLED'] as const

export function RegistrationsTable() {
  const [query, setQuery] = useState('')
  const [status, setStatus] = useState<(typeof statuses)[number]>('ALL')
  const [eventId, setEventId] = useState('all')

  const rows = useMemo(() => {
    const q = query.trim().toLowerCase()
    return registrations.filter(
      (r) =>
        (status === 'ALL' || r.status === status) &&
        (eventId === 'all' || r.eventId === eventId) &&
        (!q || r.name.toLowerCase().includes(q) || r.ticket.toLowerCase().includes(q) || r.college.toLowerCase().includes(q)),
    )
  }, [query, status, eventId])

  function exportCsv() {
    const header = ['Participant', 'College', 'Event', 'Type', 'Payment', 'Ticket', 'Date', 'Status']
    const lines = rows.map((r) =>
      [r.name, r.college, getEvent(r.eventId)?.name ?? '', r.type, r.payment, r.ticket, r.date, r.status]
        .map((v) => `"${v.replace(/"/g, '""')}"`)
        .join(','),
    )
    const blob = new Blob([[header.join(','), ...lines].join('\n')], { type: 'text/csv' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'concrete-fair-2026-registrations.csv'
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <section className="relative border border-border bg-card">
      <CornerMarks />
      <div className="flex flex-col gap-3 border-b border-border p-4 lg:flex-row lg:items-center lg:justify-between">
        <FilterTabs label="Filter by status" options={statuses} value={status} onChange={setStatus} />
        <div className="flex flex-wrap items-center gap-2">
          <label className="relative flex items-center">
            <span className="sr-only">Search registrations</span>
            <Search className="pointer-events-none absolute left-3 size-4 text-muted-foreground" strokeWidth={1.5} />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Name, ticket, college"
              className="h-9 w-56 border border-border bg-background pl-9 pr-3 text-[13px] focus:border-gold focus:outline-none"
            />
          </label>
          <label>
            <span className="sr-only">Filter by event</span>
            <select
              value={eventId}
              onChange={(e) => setEventId(e.target.value)}
              className="h-9 border border-border bg-background px-3 text-[13px] focus:border-gold focus:outline-none"
            >
              <option value="all">All events</option>
              {events.map((e) => (
                <option key={e.id} value={e.id}>
                  {e.code} — {e.name.split(' — ')[0]}
                </option>
              ))}
            </select>
          </label>
          <ActionButton onClick={exportCsv}>
            <Download className="size-4" strokeWidth={1.5} /> Export
          </ActionButton>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[880px] text-left text-[13px]">
          <thead>
            <tr className="border-b border-border bg-muted/40">
              {['Participant', 'Event', 'Type', 'Payment', 'Ticket ID', 'Registered', 'Status'].map((h) => (
                <th key={h} scope="col" className="label-tech px-4 py-3 font-normal text-muted-foreground">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => {
              const ev = getEvent(r.eventId)
              return (
                <tr key={r.id} className="border-b border-border/70 transition-colors last:border-0 hover:bg-muted/40">
                  <td className="px-4 py-3">
                    <p className="font-medium">{r.name}</p>
                    <p className="text-[11px] text-muted-foreground">{r.college}</p>
                  </td>
                  <td className="px-4 py-3">
                    <span className="mr-2 font-mono text-[10px] text-gold">{ev?.code}</span>
                    {ev?.name.split(' — ')[0]}
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">{r.type}</td>
                  <td className="px-4 py-3">
                    <StatusBadge status={r.payment} />
                  </td>
                  <td className="px-4 py-3 font-mono text-[12px]">{r.ticket}</td>
                  <td className="px-4 py-3 font-mono text-[12px] text-muted-foreground">{r.date}</td>
                  <td className="px-4 py-3">
                    <StatusBadge status={r.status} />
                  </td>
                </tr>
              )
            })}
            {rows.length === 0 && (
              <tr>
                <td colSpan={7} className="px-4 py-16 text-center">
                  <p className="font-serif text-2xl italic">No registrations match.</p>
                  <p className="label-tech mt-2 text-muted-foreground">Adjust filters or search</p>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="flex items-center justify-between border-t border-border px-4 py-3 font-mono text-[11px] text-muted-foreground">
        <span>
          {rows.length} of {registrations.length} records
        </span>
        <span>Sheet 01 / 01</span>
      </div>
    </section>
  )
}
