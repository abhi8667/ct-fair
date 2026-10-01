'use client'

import { ActionButton, PageHeader, Panel } from '@/components/system/primitives'

const field = 'h-10 w-full border border-border bg-background px-3 text-[13px] focus:border-gold focus:outline-none'

const roles = [
  { role: 'Admin', desc: 'Full access to all events, finances and settings', count: 3 },
  { role: 'Coordinator', desc: 'Manage assigned events, participants and crew', count: 9 },
  { role: 'Volunteer', desc: 'Check-in gate and shift roster only', count: 142 },
]

export default function SettingsPage() {
  return (
    <>
      <PageHeader
        index="08"
        eyebrow="Configuration"
        title="Settings"
        serif="The specification sheet."
        description="Fair details, access roles and operational preferences."
        actions={<ActionButton variant="solid">Save changes</ActionButton>}
      />
      <div className="grid gap-6 lg:grid-cols-12">
        <Panel title="Fair Details" code="S.01" className="lg:col-span-7">
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ['Event name', 'Concrete Fair 2026'],
              ['Organiser', 'Dept. of Civil Engineering'],
              ['Institution', 'RV College of Engineering, Bengaluru'],
              ['Theme', 'Ancient Foundations. Modern Possibilities.'],
              ['Start date', '2026-03-12'],
              ['End date', '2026-03-14'],
            ].map(([label, value]) => (
              <label key={label} className="block">
                <span className="label-tech mb-1.5 block text-muted-foreground">{label}</span>
                <input defaultValue={value} className={field} type={label.includes('date') ? 'date' : 'text'} />
              </label>
            ))}
          </div>
        </Panel>

        <Panel title="Preferences" code="S.02" className="lg:col-span-5" bodyClassName="p-0">
          <ul className="divide-y divide-border">
            {[
              ['Email receipts on payment', true],
              ['Allow duplicate scan override', false],
              ['Notify coordinators at 90% capacity', true],
              ['Auto-close registration when sold out', true],
            ].map(([label, on]) => (
              <li key={label as string} className="flex items-center justify-between gap-4 px-5 py-4">
                <label htmlFor={label as string} className="text-[13px]">
                  {label}
                </label>
                <input id={label as string} type="checkbox" defaultChecked={on as boolean} className="size-4 accent-[#23272b]" />
              </li>
            ))}
          </ul>
        </Panel>

        <Panel title="Access Roles" code="S.03" className="lg:col-span-12" bodyClassName="p-0">
          <ul className="grid divide-y divide-border md:grid-cols-3 md:divide-x md:divide-y-0">
            {roles.map((r, i) => (
              <li key={r.role} className="p-5">
                <p className="font-mono text-[10px] text-gold">R.0{i + 1}</p>
                <p className="mt-2 text-lg font-semibold uppercase tracking-tight">{r.role}</p>
                <p className="mt-1 text-[13px] text-muted-foreground">{r.desc}</p>
                <p className="mt-4 font-mono text-2xl">{r.count}</p>
              </li>
            ))}
          </ul>
        </Panel>
      </div>
    </>
  )
}
