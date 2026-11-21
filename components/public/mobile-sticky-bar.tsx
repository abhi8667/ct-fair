'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { ArrowUpRight, MessageCircle } from 'lucide-react'

export function MobileStickyBar() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled past 280px (past hero header on mobile)
      if (window.scrollY > 280) {
        setVisible(true)
      } else {
        setVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!visible) return null

  return (
    <aside
      aria-label="Quick Actions"
      className="fixed bottom-3 inset-x-3 z-40 sm:hidden transition-all duration-300 ease-out animate-in fade-in slide-in-from-bottom-3"
    >
      <div className="bg-[#240616]/95 backdrop-blur-md border border-[#75435c] text-[#fff8ef] px-3.5 py-2.5 rounded-2xl shadow-[0_12px_36px_rgba(36,6,22,0.65)] flex items-center justify-between gap-2.5">
        <div className="flex flex-col min-w-0 leading-tight">
          <div className="flex items-center gap-1.5">
            <span className="size-1.5 rounded-full bg-[#f5d58f] animate-pulse" />
            <span className="font-mono text-[9px] uppercase tracking-wider text-[#eadfd4] font-bold">
              LAST DATE: <strong className="text-[#f5d58f] font-black">28 NOV</strong>
            </span>
          </div>
          <span className="text-xs font-bold text-white truncate">
            ₹ 118 <span className="text-[10px] text-[#eadfd4]/80 font-normal">/ person · Stay ~₹350</span>
          </span>
        </div>

        <div className="flex items-center gap-1.5 shrink-0">
          <a
            href="https://wa.me/919590793555"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp with Coordinator"
            className="size-8 rounded-xl bg-[#3b0924] hover:bg-[#521331] text-[#d8c2ab] border border-[#75435c] grid place-items-center transition-colors active:scale-95"
            title="Coordinator WhatsApp"
          >
            <MessageCircle className="size-4" />
          </a>

          <Link
            href="/register"
            className="inline-flex items-center gap-1 px-3.5 py-2 rounded-xl bg-[#521331] hover:bg-[#75435c] text-white font-sans text-xs font-bold tracking-wide transition-all border border-[#d8c2ab]/50 shadow-xs active:scale-95"
          >
            <span>Register</span>
            <ArrowUpRight className="size-3.5 text-[#d8c2ab]" />
          </Link>
        </div>
      </div>
    </aside>
  )
}
