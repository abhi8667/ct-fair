'use client'

import { useState } from 'react'
import { Send } from 'lucide-react'
import { announcements as seed, events, type Announcement } from '@/lib/data'
import { ActionButton, CornerMarks, FilterTabs, StatusBadge } from '@/components/system/primitives'

const filters = ['ALL', 'PUBLISHED', 'SCHEDULED', 'DRAFT'] as const

export function AnnouncementBoard() {
  const [items, setItems] = useState<Announcement[]>(seed)
  const [filter, setFilter] = useState<(typeof filters)[number]>('ALL')
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [scope, setScope] = useState('Global')
  const [audience, setAudience] = useState('Everyone')

  const list = filter === 'ALL' ? items : items.filter((a) => a.status === filter)

  function submit(status: Announcement['status']) {
    if (!title.trim() || !body.trim()) return
    setItems((prev) => [
      {
        id: crypto.randomUUID(),
        title: title.trim(),
        body: body.trim(),
        scope,
        audience,
        status,
        time: 'Just now',
        author: 'Shreya Patil',
      },
      ...prev,
    ])
    setTitle('')
    setBody('')
  }

  const field = 'w-full border border-border bg-background px-3 text-[13px] focus:border-gold focus:outline-none'

  return (
    <div className="grid gap-6 lg:grid-cols-12">
      <form
        onSubmit={(e) => {
          e.preventDefault()
          submit('PUBLISHED')
        }}
        className="relative h-fit border border-foreground/80 bg-card lg:sticky lg:top-24 lg:col-span-5"
      >
        <CornerMarks />
        <div className="border-b border-border px-5 py-3.5">
          <span className="mr-3 font-mono text-[10px] text-gold">A.01</span>
          <span className="text-[13px] font-semibold uppercase tracking-[0.12em]">Compose</span>
        </div>
        <div className="space-y-4 p-5">
          <label className="block">
            <span className="label-tech mb-1.5 block text-muted-foreground">Headline</span>
            <input value={title} onChange={(e) => setTitle(e.target.value)} required className={`${field} h-10`} placeholder="e.g. Venue change for CAD Sprint" />
          </label>
          <label className="block">
            <span className="label-tech mb-1.5 block text-muted-foreground">Message</span>
            <textarea
              value={body}
              onChange={(e) => setBody(e.target.value)}
              required
              rows={5}
              className={`${field} resize-none py-2.5 leading-relaxed`}
              placeholder="Write a clear, concise update…"
            />
          </label>
          <div className="grid grid-cols-2 gap-3">
            <label className="block">
              <span className="label-tech mb-1.5 block text-muted-foreground">Scope</span>
              <select value={scope} onChange={(e) => setScope(e.target.value)} className={`${field} h-10`}>
                <option value="Global">Global</option>
                {events.map((e) => (
                  <option key={e.id} value={e.code}>
                    {e.code}
                  </option>
                ))}
              </select>
            </label>
            <label className="block">
              <span className="label-tech mb-1.5 block text-muted-foreground">Audience</span>
              <select value={audience} onChange={(e) => setAudience(e.target.value)} className={`${field} h-10`}>
                {['Everyone', 'Participants', 'Volunteers', 'Coordinators'].map((a) => (
                  <option key={a}>{a}</option>
                ))}
              </select>
            </label>
          </div>
        </div>
        <div className="flex items-center justify-between gap-2 border-t border-border px-5 py-4">
          <ActionButton variant="ghost" onClick={() => submit('DRAFT')}>
            Save draft
          </ActionButton>
          <div className="flex gap-2">
            <ActionButton onClick={() => submit('SCHEDULED')}>Schedule</ActionButton>
            <ActionButton type="submit" variant="solid">
              <Send className="size-3.5" strokeWidth={1.5} /> Publish
            </ActionButton>
          </div>
        </div>
      </form>

      <div className="lg:col-span-7">
        <div className="mb-4 flex items-center justify-between gap-3">
          <FilterTabs label="Filter announcements" options={filters} value={filter} onChange={setFilter} />
          <span className="font-mono text-[11px] text-muted-foreground">{list.length} notices</span>
        </div>
        <ol className="space-y-4">
          {list.map((a, i) => (
            <li key={a.id} className="relative border border-border bg-card p-5 animate-in fade-in slide-in-from-top-1">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[10px] text-muted-foreground">N.{String(list.length - i).padStart(2, '0')}</span>
                  <span className="border border-border px-2 py-0.5 font-mono text-[10px] tracking-[0.12em]">{a.scope}</span>
                  <span className="label-tech text-muted-foreground">→ {a.audience}</span>
                </div>
                <StatusBadge status={a.status} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-balance">{a.title}</h3>
              <p className="mt-1.5 text-pretty text-[13px] leading-relaxed text-muted-foreground">{a.body}</p>
              <p className="mt-4 border-t border-dashed border-border pt-3 font-mono text-[11px] text-muted-foreground">
                {a.author} · {a.time}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}
