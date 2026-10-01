'use client'

import { RegistrationsTable } from '@/components/registrations/registrations-table'
import { MetricCard, PageHeader } from '@/components/system/primitives'
import { inr, totals } from '@/lib/data'

export default function RegistrationsPage() {
  return (
    <>
      <PageHeader
        index="02"
        eyebrow="Ledger · Participants & Payments"
        title="Registrations"
        serif="Every name, every ticket."
        description="Search, filter and export the complete participant ledger, reconciled against payment status."
      />
      <div className="mb-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
        <MetricCard index="R.01" label="Total" value={totals.registered.toLocaleString('en-IN')} delta="+130 today" />
        <MetricCard index="R.02" label="Paid" value="642" note="66% of paid events" />
        <MetricCard index="R.03" label="Pending Payment" value="38" note="Reminder sent 10:00" />
        <MetricCard index="R.04" label="Collected" value={inr(Math.round(totals.revenue / 1000))} unit="K" delta="+12.4%" />
      </div>
      <RegistrationsTable />
    </>
  )
}
