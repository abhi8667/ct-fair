'use client'

import { UserPlus } from 'lucide-react'
import { VolunteerAttendanceChart } from '@/components/charts/charts'
import { ActionButton, MetricCard, PageHeader, Panel } from '@/components/system/primitives'
import { VolunteerTable } from '@/components/volunteers/volunteer-table'

const teamLoad = [
  { team: 'Core', count: 12 },
  { team: 'Event Team', count: 46 },
  { team: 'Registration', count: 28 },
  { team: 'Tech', count: 22 },
  { team: 'Logistics', count: 34 },
]

export default function VolunteersPage() {
  const max = Math.max(...teamLoad.map((t) => t.count))
  return (
    <>
      <PageHeader
        index="03"
        eyebrow="Crew · Shifts & Assignments"
        title="Volunteers"
        serif="The people holding the structure up."
        description="Track every volunteer across teams, shifts and venues. Unassigned crew surface first."
        actions={
          <ActionButton variant="solid">
            <UserPlus className="size-4" strokeWidth={1.5} /> Assign Volunteer
          </ActionButton>
        }
      />
      <div className="mb-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
        <MetricCard index="V.01" label="Total Volunteers" value="142" note="5 teams" />
        <MetricCard index="V.02" label="Active Now" value="61" delta="On duty" />
        <MetricCard index="V.03" label="Checked In" value="64" note="of 66 rostered" progress={97} />
        <MetricCard index="V.04" label="Pending Assignments" value="09" note="Needs action" />
      </div>
      <div className="mb-6 grid gap-6 lg:grid-cols-12">
        <Panel title="Volunteer Attendance" code="F.01" className="lg:col-span-7">
          <VolunteerAttendanceChart />
        </Panel>
        <Panel title="Team Strength" code="F.02" className="lg:col-span-5">
          <ul className="space-y-4">
            {teamLoad.map((t) => (
              <li key={t.team} className="grid grid-cols-12 items-center gap-3">
                <span className="col-span-4 text-[13px]">{t.team}</span>
                <div className="col-span-6 h-5 bg-muted hatch">
                  <div className="h-full bg-foreground" style={{ width: `${(t.count / max) * 100}%` }} />
                </div>
                <span className="col-span-2 text-right font-mono text-[12px]">{t.count}</span>
              </li>
            ))}
          </ul>
        </Panel>
      </div>
      <VolunteerTable />
    </>
  )
}
