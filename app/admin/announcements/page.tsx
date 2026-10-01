'use client'

import { AnnouncementBoard } from '@/components/announcements/announcement-board'
import { PageHeader } from '@/components/system/primitives'

export default function AnnouncementsPage() {
  return (
    <>
      <PageHeader
        index="06"
        eyebrow="Notices · Broadcast"
        title="Announcements"
        serif="Clear words, on the record."
        description="Publish updates to everyone or target a single event, audience or crew."
      />
      <AnnouncementBoard />
    </>
  )
}
