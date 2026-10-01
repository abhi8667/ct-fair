'use client'

import {
  HourlyAttendanceChart,
  RegistrationTrendChart,
  RevenueChart,
  Ring,
  VolunteerAttendanceChart,
} from '@/components/charts/charts'
import { CapacityList } from '@/components/overview/widgets'
import { MetricCard, PageHeader, Panel } from '@/components/system/primitives'
import { events, inr, totals } from '@/lib/data'

export default function AnalyticsPage() {
  const byRevenue = [...events].sort((a, b) => b.registered * b.fee - a.registered * a.fee)
  const maxRev = byRevenue[0].registered * byRevenue[0].fee

  return (
    <>
      <PageHeader
        index="07"
        eyebrow="Survey · Data & Insight"
        title="Analytics"
        serif="Read the load, plan the span."
        description="Registration velocity, revenue, attendance and crew performance across the full fair."
      />

      <div className="mb-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
        <MetricCard index="A.01" label="Avg. Daily Regs" value="114" delta="+18% w/w" />
        <MetricCard index="A.02" label="Gross Revenue" value={inr(totals.revenue)} note="incl. GST" />
        <MetricCard index="A.03" label="Show-up Rate" value="86" unit="%" progress={86} />
        <MetricCard index="A.04" label="Colleges" value="38" note="7 states" />
      </div>

      <div className="grid gap-6 lg:grid-cols-12">
        <Panel title="Registration Trend" code="G.01" className="lg:col-span-8">
          <RegistrationTrendChart height={300} />
        </Panel>
        <Panel title="Attendance Rate" code="G.02" className="lg:col-span-4" bodyClassName="flex flex-col items-center justify-center gap-6 p-6">
          <Ring value={86} label="Overall" size={180} />
          <div className="grid w-full grid-cols-3 border-t border-border pt-4 text-center">
            {[
              ['CF-01', '88%'],
              ['CF-02', '82%'],
              ['Crew', '97%'],
            ].map(([k, v]) => (
              <div key={k} className="border-l border-border first:border-l-0">
                <p className="label-tech text-muted-foreground">{k}</p>
                <p className="mt-1 font-mono text-sm">{v}</p>
              </div>
            ))}
          </div>
        </Panel>

        <Panel title="Revenue by Window" code="G.03" className="lg:col-span-7">
          <RevenueChart />
        </Panel>
        <Panel title="Revenue by Event" code="G.04" className="lg:col-span-5">
          <ul className="space-y-4">
            {byRevenue.map((e) => {
              const rev = e.registered * e.fee
              return (
                <li key={e.id}>
                  <div className="mb-1.5 flex items-baseline justify-between gap-3 text-[13px]">
                    <span className="truncate">
                      <span className="mr-2 font-mono text-[10px] text-gold">{e.code}</span>
                      {e.name.split(' — ')[0]}
                    </span>
                    <span className="font-mono text-[12px]">{rev ? inr(rev) : 'Free'}</span>
                  </div>
                  <div className="h-2 bg-muted hatch">
                    <div className="h-full bg-foreground" style={{ width: `${(rev / maxRev) * 100}%` }} />
                  </div>
                </li>
              )
            })}
          </ul>
        </Panel>

        <Panel title="Check-ins by Hour · Day 01" code="G.05" className="lg:col-span-6">
          <HourlyAttendanceChart />
        </Panel>
        <Panel title="Volunteer Attendance" code="G.06" className="lg:col-span-6">
          <VolunteerAttendanceChart />
        </Panel>

        <Panel title="Capacity Utilisation" code="G.07" className="lg:col-span-12">
          <CapacityList />
        </Panel>
      </div>
    </>
  )
}
