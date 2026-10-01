import { Sidebar } from '@/components/shell/sidebar'
import { Topbar } from '@/components/shell/topbar'

export default function OpsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-svh">
      <Sidebar />
      <div className="flex min-w-0 flex-1 flex-col">
        <Topbar />
        <main className="relative flex-1 blueprint-grid">{children}</main>
      </div>
    </div>
  )
}
