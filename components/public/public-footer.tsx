import Link from 'next/link'

export function PublicFooter() {
  return (
    <footer className="w-full bg-card border-t border-border/70 pt-16 pb-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-border/60">
          {/* Col 1 */}
          <div className="space-y-3 md:col-span-1">
            <div className="flex items-center gap-3">
              <div className="grid size-8 place-items-center border border-foreground/60 bg-background">
                <svg viewBox="0 0 24 24" className="size-4 text-foreground" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <path d="M3 20h18M4 9h16M12 3 4 9M12 3l8 6M6 9v11M10 9v11M14 9v11M18 9v11" />
                </svg>
              </div>
              <span className="font-serif text-xl text-foreground font-medium">Concrete Fair 2026</span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed text-pretty">
              Department of Civil Engineering, R.V. College of Engineering, Bengaluru. Advancing monumental infrastructure, materials science, and structural sustainability across the Asian subcontinent.
            </p>
            <div className="font-mono text-[10px] text-gold pt-2">
              <span>COORD: [LAT 12.9237° N, 77.4987° E]</span>
            </div>
          </div>

          {/* Col 2 */}
          <div className="space-y-3">
            <span className="label-tech text-foreground block">Conclave Navigation</span>
            <ul className="space-y-1.5 text-xs text-muted-foreground">
              <li className="border-b border-border/30 pb-1.5">
                <Link href="/" className="hover:text-foreground transition-colors focus-visible:outline-2 focus-visible:outline-[#B66A1F]">Main Blueprint / Home</Link>
              </li>
              <li className="border-b border-border/30 pb-1.5">
                <Link href="/about" className="hover:text-foreground transition-colors focus-visible:outline-2 focus-visible:outline-[#B66A1F]">Institutional History (Est. 1963)</Link>
              </li>
              <li className="border-b border-border/30 pb-1.5">
                <Link href="/events" className="hover:text-foreground transition-colors focus-visible:outline-2 focus-visible:outline-[#B66A1F]">Competitions &amp; Testing Bays</Link>
              </li>
              <li className="border-b border-border/30 pb-1.5">
                <Link href="/schedule" className="hover:text-foreground transition-colors focus-visible:outline-2 focus-visible:outline-[#B66A1F]">Day 01 &amp; 02 Keynote Timeline</Link>
              </li>
            </ul>
          </div>

          {/* Col 3 */}
          <div className="space-y-3">
            <span className="label-tech text-foreground block">Campus & Laboratory Axis</span>
            <p className="text-xs text-muted-foreground leading-relaxed">
              R.V. College of Engineering<br />
              Mysore Road, RV Vidyaniketan Post<br />
              Bengaluru, Karnataka 560059, India
            </p>
            <p className="font-mono text-[10px] text-muted-foreground pt-1">
              AICTE APPROVED · VTU AFFILIATED<br />
              NABL ACCREDITED TESTING CELL
            </p>
          </div>

          {/* Col 4 */}
          <div className="space-y-3">
            <span className="label-tech text-foreground block">Connected Platforms</span>
            <ul className="space-y-1.5 text-xs text-muted-foreground">
              <li className="border-b border-border/30 pb-1.5">
                <Link href="/register" className="hover:text-gold transition-colors font-medium focus-visible:outline-2 focus-visible:outline-[#B66A1F]">Delegate Pass Registration</Link>
              </li>
              <li className="border-b border-border/30 pb-1.5">
                <Link href="/portal" className="hover:text-gold transition-colors font-medium focus-visible:outline-2 focus-visible:outline-[#B66A1F]">Participant Portal (Tickets &amp; QR)</Link>
              </li>
              <li className="border-b border-border/30 pb-1.5">
                <Link href="/faq" className="hover:text-foreground transition-colors focus-visible:outline-2 focus-visible:outline-[#B66A1F]">Testing Safety &amp; PPE Guidelines</Link>
              </li>
              <li className="border-b border-border/30 pb-1.5">
                <Link href="/admin" className="hover:text-gold transition-colors font-mono text-[11px] focus-visible:outline-2 focus-visible:outline-[#B66A1F]">Control Room (Organizers Only) →</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[10px] text-muted-foreground">
          <div>© 2026 RVCE Department of Civil Engineering. All rights reserved.</div>
          <div className="flex items-center gap-5">
            <span>Bengaluru, India</span>
            <span>•</span>
            <Link href="/portal" className="text-gold hover:underline focus-visible:outline-2 focus-visible:outline-[#B66A1F]">Delegate Portal</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
