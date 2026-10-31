import Link from 'next/link'
import { conclaveInfo } from '@/lib/data'

export function PublicFooter() {
  return (
    <footer className="w-full bg-[#3b0924] text-[#fff8ef] border-t border-[#75435c] pt-16 pb-12 mt-20 relative overflow-hidden">
      {/* Subtle architectural hatching background */}
      <div className="absolute inset-0 hatch-wine pointer-events-none opacity-40" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10 space-y-12">
        {/* Top Prominent Banner from Slide 8 */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#fff8ef] text-[#34252b] border border-[#d8c2ab] shadow-xl flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="font-mono text-[10px] text-[#75435c] uppercase tracking-widest font-bold">
              ICI CHAPTER • RVCE
            </span>
            <h3 className="font-sans font-black text-3xl sm:text-4xl text-[#3b0924] uppercase tracking-tight">
              LET’S BUILD WHAT’S NEXT.
            </h3>
            <p className="text-sm text-[#77666a] max-w-xl font-medium">
              Join Concrete Fair 2026 and showcase your engineering talent across 8 national-level events.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link
              href="mailto:ici@rvce.edu.in"
              className="px-6 py-3 bg-[#3b0924] hover:bg-[#521331] text-[#fff8ef] rounded-full font-sans text-xs font-semibold tracking-wide transition-all shadow-md hover:-translate-y-0.5"
            >
              Contact Coordinators
            </Link>
            <Link
              href="/register"
              className="px-6 py-3 bg-[#f4e9dc] hover:bg-[#eadfd4] text-[#3b0924] border border-[#d8c2ab] rounded-full font-sans text-xs font-semibold tracking-wide transition-all"
            >
              Register via Google Form
            </Link>
          </div>
        </div>

        {/* 4 Official Columns from Slide 8 & Brochure */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-[#75435c]/60">
          {/* Col 1: Contact */}
          <div className="space-y-3">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#d8c2ab] font-bold block">
              CONTACT
            </span>
            <Link
              href={`mailto:${conclaveInfo.email}`}
              className="text-base font-semibold text-white hover:text-[#d8c2ab] transition-colors block"
            >
              {conclaveInfo.email}
            </Link>
            <div className="text-xs text-[#eadfd4]/90 space-y-1 font-sans">
              {conclaveInfo.contacts.map((c) => (
                <div key={c.name}>
                  <span className="text-[#d8c2ab] font-medium">{c.name}:</span> {c.phone}
                </div>
              ))}
            </div>
          </div>

          {/* Col 2: Instagram */}
          <div className="space-y-3">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#d8c2ab] font-bold block">
              INSTAGRAM
            </span>
            <Link
              href={conclaveInfo.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-base font-semibold text-white hover:text-[#d8c2ab] transition-colors block"
            >
              {conclaveInfo.instagram}
            </Link>
            <p className="text-xs text-[#eadfd4]/80 leading-relaxed">
              Follow @icirvce on Instagram for official updates and announcements.
            </p>
          </div>

          {/* Col 3: Organized By */}
          <div className="space-y-3">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#d8c2ab] font-bold block">
              ORGANIZED BY
            </span>
            <p className="text-sm font-semibold text-white leading-snug">
              Department of Civil Engineering<br />
              RV College of Engineering
            </p>
            <p className="font-mono text-[10px] text-[#eadfd4]/80">
              {conclaveInfo.address}
            </p>
          </div>

          {/* Col 4: Conclave Details */}
          <div className="space-y-3">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#d8c2ab] font-bold block">
              CONCLAVE DATES
            </span>
            <div className="text-base font-semibold text-white">
              {conclaveInfo.dates}
            </div>
            <p className="font-serif italic text-xs text-[#eadfd4]">
              &ldquo;{conclaveInfo.tagline}&rdquo;
            </p>
            <div className="font-mono text-[10px] text-[#d8c2ab] pt-1">
              {conclaveInfo.edition} · {conclaveInfo.participantsExpected} PARTICIPANTS
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[10px] text-[#eadfd4]/70">
          <div>CONCRETE FAIR 2026 • WHERE CONCRETE MEETS CREATIVITY</div>
          <div className="flex items-center gap-5">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>•</span>
            <Link href="/about" className="hover:text-white transition-colors">About</Link>
            <span>•</span>
            <Link href="/events" className="hover:text-white transition-colors">Events</Link>
            <span>•</span>
            <Link href="/schedule" className="hover:text-white transition-colors">Schedule</Link>
            <span>•</span>
            <Link href="/register" className="text-[#d8c2ab] hover:text-white transition-colors font-bold">Register (Google Form)</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
