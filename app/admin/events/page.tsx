'use client'

import { Plus } from 'lucide-react'
import { EventGrid } from '@/components/events/event-grid'
import { PageHeader, ActionButton } from '@/components/system/primitives'

export default function EventsPage() {
  return (
    <>
      <PageHeader
        index="01"
        eyebrow="Programme · 11 Conclave Events · 02 Days // 30 Nov – 01 Dec"
        title="Events"
        serif="The programme, in plan and section."
        description="Every competition, lecture and workshop in the fair — capacity, venue and live status at a glance."
        actions={
          <ActionButton variant="solid">
            <Plus className="size-4" strokeWidth={1.5} /> Create Event
          </ActionButton>
        }
      />
      <EventGrid />
    </>
  )
}
