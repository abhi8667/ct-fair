'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Bell, Globe, Menu, Plus, Search, Ticket, X } from 'lucide-react'
import { Logo, SidebarNav } from './sidebar'

export function Topbar() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <header className="sticky top-0 z-30 border-b border-border bg-background/90 backdrop-blur">
        <div className="flex h-16 items-center gap-3 px-4 md:px-8">
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="grid size-9 place-items-center border border-border lg:hidden"
            aria-label="Open navigation"
          >
            <Menu className="size-4" strokeWidth={1.5} />
          </button>

          <div className="hidden items-center gap-3 border-r border-border pr-5 md:flex">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-success/60" />
              <span className="relative inline-flex size-2 rounded-full bg-success" />
            </span>
            <div className="leading-tight">
              <p className="label-tech text-muted-foreground">Admin Ops Control</p>
              <p className="text-[13px] font-medium">Telemetry Active · Day 01 // 30 Nov</p>
            </div>
          </div>

          <label className="relative flex flex-1 items-center md:max-w-md">
            <span className="sr-only">Search participants, tickets, events</span>
            <Search className="pointer-events-none absolute left-3 size-4 text-muted-foreground" strokeWidth={1.5} />
            <input
              type="search"
              placeholder="Search tickets, participants, testing bays..."
              className="h-9 w-full border border-border bg-card pl-9 pr-12 text-[13px] placeholder:text-muted-foreground focus:border-gold focus:outline-none"
            />
            <kbd className="pointer-events-none absolute right-2 hidden border border-border px-1.5 font-mono text-[10px] text-muted-foreground sm:block">
              /
            </kbd>
          </label>

          <div className="ml-auto flex items-center gap-2">
            <Link
              href="/"
              target="_blank"
              className="hidden lg:inline-flex items-center gap-1.5 px-3 py-1.5 border border-border bg-card text-[12px] text-muted-foreground hover:text-foreground hover:border-gold transition-colors"
            >
              <Globe className="size-3.5 text-gold" />
              <span>Public Site</span>
            </Link>

            <Link
              href="/portal"
              target="_blank"
              className="hidden lg:inline-flex items-center gap-1.5 px-3 py-1.5 border border-border bg-card text-[12px] text-muted-foreground hover:text-foreground hover:border-gold transition-colors"
            >
              <Ticket className="size-3.5 text-gold" />
              <span>Delegate Portal</span>
            </Link>

            <button
              type="button"
              className="relative grid size-9 place-items-center border border-border bg-card transition-colors hover:border-foreground/40"
              aria-label="Notifications, 3 unread"
            >
              <Bell className="size-4" strokeWidth={1.5} />
              <span className="absolute top-1.5 right-1.5 size-1.5 bg-gold" />
            </button>
            <Link
              href="/admin/events"
              className="hidden h-9 items-center gap-2 bg-primary px-4 text-[13px] font-medium text-primary-foreground transition-colors hover:bg-primary/90 sm:inline-flex"
            >
              <Plus className="size-4" strokeWidth={1.5} />
              New Event
            </Link>
            <div className="flex items-center gap-3 border-l border-border pl-3">
              <div className="grid size-9 place-items-center bg-secondary font-mono text-[11px] font-medium">SP</div>
              <div className="hidden leading-tight xl:block">
                <p className="text-[13px] font-medium">Shreya Patil</p>
                <p className="label-tech text-gold font-medium">Chief Controller</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true" aria-label="Navigation">
          <button
            type="button"
            className="absolute inset-0 bg-slate/40 animate-in fade-in"
            onClick={() => setOpen(false)}
            aria-label="Close navigation"
          />
          <div className="relative flex h-full w-72 flex-col bg-sidebar blueprint-grid-dark animate-in slide-in-from-left duration-300">
            <div className="flex items-center justify-between border-b border-sidebar-border px-5 py-5">
              <Logo />
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="grid size-8 place-items-center text-stone"
                aria-label="Close navigation"
              >
                <X className="size-4" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-3 py-5">
              <SidebarNav onNavigate={() => setOpen(false)} />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
