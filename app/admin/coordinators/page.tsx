'use client'

import { CoordinatorView } from '@/components/coordinators/coordinator-view'
import { PageHeader } from '@/components/system/primitives'

export default function CoordinatorsPage() {
  return (
    <>
      <PageHeader
        index="05"
        eyebrow="Coordinator View · Scoped Access"
        title="Coordinators"
        serif="Your events, nothing else."
        description="A focused workspace for faculty and student coordinators — only the events, participants and crew they own."
      />
      <CoordinatorView />
    </>
  )
}
