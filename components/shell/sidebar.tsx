'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  BarChart3,
  CalendarRange,
  ClipboardList,
  ExternalLink,
  Globe,
  LayoutGrid,
  Megaphone,
  ScanLine,
  Settings,
  Ticket,
  UserCog,
  Users,
} from 'lucide-react'
import { cn } from '@/lib/utils'

export const navItems = [
  { href: '/admin', label: 'Overview', icon: LayoutGrid, index: '00' },
  { href: '/admin/events', label: 'Events', icon: CalendarRange, index: '01' },
  { href: '/admin/registrations', label: 'Registrations', icon: ClipboardList, index: '02' },
  { href: '/admin/volunteers', label: 'Volunteers', icon: Users, index: '03' },
  { href: '/admin/attendance', label: 'Attendance', icon: ScanLine, index: '04' },
  { href: '/admin/coordinators', label: 'Coordinators', icon: UserCog, index: '05' },
  { href: '/admin/announcements', label: 'Announcements', icon: Megaphone, index: '06' },
  { href: '/admin/analytics', label: 'Analytics', icon: BarChart3, index: '07' },
  { href: '/admin/settings', label: 'Settings', icon: Settings, index: '08' },
]

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn('flex items-center gap-3', className)}>
      <div className="relative grid size-9 shrink-0 place-items-center border border-gold/60" aria-hidden="true">
        <svg viewBox="0 0 24 24" className="size-5 text-stone" fill="none" stroke="currentColor" strokeWidth="1.25">
          <path d="M3 20h18M4 9h16M12 3 4 9M12 3l8 6M6 9v11M10 9v11M14 9v11M18 9v11" />
        </svg>
        <span className="absolute -top-px -left-px size-1.5 bg-gold" />
      </div>
      <div className="leading-none">
        <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-stone">Concrete Fair</p>
        <div className="mt-1 flex items-center gap-1.5">
          <span className="font-mono text-[10px] tracking-[0.16em] text-gold">OPS CONTROL</span>
          <span className="font-mono text-[9px] text-concrete">· RVCE</span>
        </div>
      </div>
    </div>
  )
}

export function SidebarNav({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname()
  return (
    <nav aria-label="Primary" className="flex flex-col gap-px">
      {navItems.map((item) => {
        const active = item.href === '/admin' ? pathname === '/admin' : pathname.startsWith(item.href)
        const Icon = item.icon
        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={onNavigate}
            aria-current={active ? 'page' : undefined}
            className={cn(
              'group relative flex items-center gap-3 px-3 py-2.5 text-[13px] transition-colors',
              active
                ? 'bg-sidebar-accent text-sidebar-accent-foreground'
                : 'text-sidebar-foreground/70 hover:bg-sidebar-accent/60 hover:text-sidebar-accent-foreground',
            )}
          >
            <span
              className={cn(
                'absolute inset-y-0 left-0 w-px transition-colors',
                active ? 'bg-gold' : 'bg-transparent group-hover:bg-sidebar-border',
              )}
              aria-hidden="true"
            />
            <Icon className={cn('size-4', active ? 'text-gold' : 'text-concrete')} strokeWidth={1.5} />
            <span className="flex-1">{item.label}</span>
            <span className={cn('font-mono text-[10px]', active ? 'text-gold' : 'text-sidebar-foreground/30')}>
              {item.index}
            </span>
          </Link>
        )
      })}
    </nav>
  )
}

export function Sidebar() {
  return (
    <aside className="sticky top-0 hidden h-svh w-64 shrink-0 flex-col border-r border-sidebar-border bg-sidebar blueprint-grid-dark lg:flex">
      <div className="border-b border-sidebar-border px-5 py-6">
        <Logo />
      </div>
      <div className="flex-1 overflow-y-auto px-3 py-5">
        <p className="label-tech mb-3 px-3 text-concrete">Organizer Modules</p>
        <SidebarNav />

        <div className="mt-8 border-t border-sidebar-border/80 pt-5">
          <p className="label-tech mb-2 px-3 text-concrete">Connected Portals</p>
          <div className="flex flex-col gap-1">
            <Link
              href="/"
              className="flex items-center justify-between px-3 py-2 text-[12px] text-sidebar-foreground/80 hover:bg-sidebar-accent hover:text-stone transition-colors"
            >
              <span className="flex items-center gap-2">
                <Globe className="size-3.5 text-gold" />
                <span>Public Website</span>
              </span>
              <ExternalLink className="size-3 text-concrete" />
            </Link>
            <Link
              href="/portal"
              className="flex items-center justify-between px-3 py-2 text-[12px] text-sidebar-foreground/80 hover:bg-sidebar-accent hover:text-stone transition-colors"
            >
              <span className="flex items-center gap-2">
                <Ticket className="size-3.5 text-gold" />
                <span>Participant Portal</span>
              </span>
              <ExternalLink className="size-3 text-concrete" />
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-sidebar-border px-5 py-4 bg-sidebar/80">
        <div className="flex items-center justify-between">
          <span className="font-mono text-[10px] text-gold">AUTH: ORGANIZER</span>
          <span className="font-mono text-[10px] text-concrete">v4.2</span>
        </div>
        <p className="font-serif text-sm italic text-stone mt-1">Ancient Foundations. Modern Possibilities.</p>
      </div>
    </aside>
  )
}
