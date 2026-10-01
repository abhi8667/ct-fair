import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Participant Portal | Concrete Fair 2026',
  description: 'Manage registrations, view personalized schedules, access digital passes with QR codes, and view receipts for Concrete Fair 2026.',
}

export default function ParticipantLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-background text-foreground blueprint-grid selection:bg-gold-soft">
      {children}
    </div>
  )
}
