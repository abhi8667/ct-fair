'use client'

import Link from 'next/link'
import { HourlyAttendanceChart, RegistrationTrendChart, Ring } from '@/components/charts/charts'
import { ActivityFeed, CapacityList, OverviewHero, UpcomingEvents } from '@/components/overview/widgets'
import { MetricCard, Panel } from '@/components/system/primitives'
import { inr, totals } from '@/lib/data'

export default function OverviewPage() {
  const capacityPct = Math.round((totals.registered / totals.capacity) * 100)
  const checkinPct = Math.round((totals.checkedIn / 304) * 100)

  return (
    <>
      <OverviewHero />

      <div className="mb-8 grid grid-cols-2 gap-px border border-border bg-border md:grid-cols-3 xl:grid-cols-6 [&>*]:border-0">
        <MetricCard index="M.01" label="Total Registrations" value={totals.registered.toLocaleString('en-IN')} delta="+130 today" />
        <MetricCard index="M.02" label="Revenue" value={inr(Math.round(totals.revenue / 1000))} unit="K" delta="+12.4%" note="vs. 2025" />
        <MetricCard index="M.03" label="Checked In" value={String(totals.checkedIn)} note="Day 01 only" progress={checkinPct} />
        <MetricCard index="M.04" label="Volunteers" value={String(totals.volunteers)} note="61 on duty" />
        <MetricCard index="M.05" label="Events" value={String(totals.events).padStart(2, '0')} note="3 days · 5 venues" />
        <MetricCard index="M.06" label="Capacity Used" value={String(capacityPct)} unit="%" progress={capacityPct} />
      </div>

      <div className="grid gap-6 lg:grid-cols-12">
        <Panel
          title="Registration Trend"
          code="F.01"
          className="lg:col-span-8"
          action={<span className="label-tech text-muted-foreground">05 Feb — 10 Mar</span>}
        >
          <RegistrationTrendChart />
        </Panel>

        <Panel title="Attendance Overview" code="F.02" className="lg:col-span-4">
          <div className="flex items-center gap-6">
            <Ring value={86} label="Day 01" size={128} />
            <dl className="flex-1 space-y-3 text-[13px]">
              <div className="flex justify-between border-b border-dashed border-border pb-2">
                <dt className="text-muted-foreground">Expected</dt>
                <dd className="font-mono">304</dd>
              </div>
              <div className="flex justify-between border-b border-dashed border-border pb-2">
                <dt className="text-muted-foreground">Arrived</dt>
                <dd className="font-mono">{totals.checkedIn}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Peak hour</dt>
                <dd className="font-mono text-gold">09:00</dd>
              </div>
            </dl>
          </div>
          <div className="mt-4 border-t border-border pt-2">
            <HourlyAttendanceChart height={140} />
          </div>
        </Panel>

        <Panel
          title="Event Capacity"
          code="F.03"
          className="lg:col-span-7"
          action={
            <Link href="/admin/events" className="label-tech text-muted-foreground hover:text-gold">
              All events →
            </Link>
          }
        >
          <CapacityList />
        </Panel>

        <Panel title="Upcoming" code="F.04" className="lg:col-span-5">
          <UpcomingEvents />
        </Panel>

        <Panel
          title="Recent Activity"
          code="F.05"
          className="lg:col-span-12"
          action={<span className="label-tech text-success">● Live</span>}
        >
          <div className="grid gap-x-10 md:grid-cols-2">
            <ActivityFeed />
            <div className="hidden flex-col justify-between border-l border-border pl-10 md:flex">
              <p className="font-serif text-3xl leading-tight italic text-balance">
                {'"Every great structure begins with a measured line."'}
              </p>
              <div className="ruler-x h-6" aria-hidden="true" />
              <p className="label-tech text-muted-foreground">Operations Log · Auto-refresh 15s</p>
            </div>
          </div>
        </Panel>
      </div>
    </>
  )
}
