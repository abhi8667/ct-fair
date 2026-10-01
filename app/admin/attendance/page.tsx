'use client'

import { CheckinConsole } from '@/components/attendance/checkin-console'
import { PageHeader } from '@/components/system/primitives'

export default function AttendancePage() {
  return (
    <>
      <PageHeader
        index="04"
        eyebrow="Gate Control · QR Check-in"
        title="Attendance"
        serif="Measured at the threshold."
        description="Scan digital tickets at each venue gate, or check participants in manually by name or ticket ID."
      />
      <CheckinConsole />
    </>
  )
}
