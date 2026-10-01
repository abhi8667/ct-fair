'use client'

import { useState } from 'react'
import { getEvent, volunteers, type VolunteerTeam } from '@/lib/data'
import { CornerMarks, FilterTabs, StatusBadge } from '@/components/system/primitives'

const teams = ['ALL', 'CORE', 'EVENT TEAM', 'REGISTRATION', 'TECH', 'LOGISTICS'] as const

export function VolunteerTable() {
  const [team, setTeam] = useState<'ALL' | VolunteerTeam>('ALL')
  const rows = team === 'ALL' ? volunteers : volunteers.filter((v) => v.team === team)

  return (
    <section className="relative border border-border bg-card">
      <CornerMarks />
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border p-4">
        <FilterTabs label="Filter volunteers by team" options={teams} value={team} onChange={setTeam} />
        <span className="font-mono text-[11px] text-muted-foreground">{rows.length} volunteers</span>
      </div>

      <ul className="divide-y divide-border md:hidden">
        {rows.map((v) => (
          <li key={v.id} className="flex items-start justify-between gap-3 p-4">
            <div>
              <p className="font-medium">{v.name}</p>
              <p className="text-[12px] text-muted-foreground">
                {v.role} · {v.team}
              </p>
              <p className="mt-1 font-mono text-[11px] text-muted-foreground">{v.shift}</p>
            </div>
            <StatusBadge status={v.status} />
          </li>
        ))}
      </ul>

      <div className="hidden overflow-x-auto md:block">
        <table className="w-full min-w-[860px] text-left text-[13px]">
          <thead>
            <tr className="border-b border-border bg-muted/40">
              {['Name', 'Team', 'Role', 'Shift', 'Event', 'Attendance', 'Status'].map((h) => (
                <th key={h} scope="col" className="label-tech px-4 py-3 font-normal text-muted-foreground">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((v) => {
              const ev = getEvent(v.eventId)
              return (
                <tr key={v.id} className="border-b border-border/70 transition-colors last:border-0 hover:bg-muted/40">
                  <td className="px-4 py-3">
                    <p className="font-medium">{v.name}</p>
                    <p className="font-mono text-[10px] text-muted-foreground">{v.usn}</p>
                  </td>
                  <td className="px-4 py-3 font-mono text-[11px] tracking-wider">{v.team}</td>
                  <td className="px-4 py-3">{v.role}</td>
                  <td className="px-4 py-3 font-mono text-[12px] text-muted-foreground">{v.shift}</td>
                  <td className="px-4 py-3">
                    {ev ? (
                      <>
                        <span className="mr-2 font-mono text-[10px] text-gold">{ev.code}</span>
                        {ev.name.split(' — ')[0]}
                      </>
                    ) : (
                      <span className="text-muted-foreground">All venues</span>
                    )}
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <div className="h-1 w-16 bg-muted">
                        <div className="h-full bg-foreground" style={{ width: `${v.attendance}%` }} />
                      </div>
                      <span className="font-mono text-[11px]">{v.attendance}%</span>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <StatusBadge status={v.status} />
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </section>
  )
}
