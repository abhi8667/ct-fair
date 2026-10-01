'use client'

import { useEffect, useState } from 'react'

export interface CountdownTimerProps {
  targetDate?: string
  variant?: 'grid' | 'card' | 'hero-strip'
}

export function CountdownTimer({
  targetDate = '2026-11-30T09:00:00+05:30',
  variant = 'grid',
}: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 60,
    hours: 14,
    minutes: 32,
    seconds: 15,
  })

  useEffect(() => {
    const target = new Date(targetDate).getTime()

    const calculate = () => {
      const now = new Date().getTime()
      const difference = target - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    calculate()
    const interval = setInterval(calculate, 1000)
    return () => clearInterval(interval)
  }, [targetDate])

  const pad = (n: number) => String(n).padStart(2, '0')

  if (variant === 'hero-strip') {
    return (
      <div className="flex items-center gap-3 sm:gap-5 text-center tabular-nums" aria-label="Event countdown">
        <div className="flex flex-col items-center min-w-[38px] sm:min-w-[46px]">
          <span className="font-serif text-2xl sm:text-3xl font-light text-white leading-none">
            {pad(timeLeft.days)}
          </span>
          <span className="font-mono text-[9px] text-[#94a3b8] tracking-wider uppercase mt-1">DAYS</span>
        </div>
        <span className="text-[#64748b] font-light text-xl -mt-3">:</span>
        <div className="flex flex-col items-center min-w-[38px] sm:min-w-[46px]">
          <span className="font-serif text-2xl sm:text-3xl font-light text-white leading-none">
            {pad(timeLeft.hours)}
          </span>
          <span className="font-mono text-[9px] text-[#94a3b8] tracking-wider uppercase mt-1">HRS</span>
        </div>
        <span className="text-[#64748b] font-light text-xl -mt-3">:</span>
        <div className="flex flex-col items-center min-w-[38px] sm:min-w-[46px]">
          <span className="font-serif text-2xl sm:text-3xl font-light text-white leading-none">
            {pad(timeLeft.minutes)}
          </span>
          <span className="font-mono text-[9px] text-[#94a3b8] tracking-wider uppercase mt-1">MIN</span>
        </div>
        <span className="text-[#64748b] font-light text-xl -mt-3">:</span>
        <div className="flex flex-col items-center min-w-[38px] sm:min-w-[46px]">
          <span className="font-serif text-2xl sm:text-3xl font-light text-[#b88e3e] leading-none">
            {pad(timeLeft.seconds)}
          </span>
          <span className="font-mono text-[9px] text-[#b88e3e] tracking-wider uppercase mt-1">SEC</span>
        </div>
      </div>
    )
  }

  if (variant === 'card') {
    return (
      <div className="relative z-10 grid grid-cols-4 gap-1 text-center py-2" aria-label="Event countdown">
        <div>
          <span className="font-serif text-2xl font-light leading-none block text-white tabular-nums">
            {pad(timeLeft.days)}
          </span>
          <span className="font-mono text-[8px] text-stone-400 uppercase mt-0.5 block">DAYS</span>
        </div>
        <div>
          <span className="font-serif text-2xl font-light leading-none block text-white tabular-nums">
            {pad(timeLeft.hours)}
          </span>
          <span className="font-mono text-[8px] text-stone-400 uppercase mt-0.5 block">HOURS</span>
        </div>
        <div>
          <span className="font-serif text-2xl font-light leading-none block text-white tabular-nums">
            {pad(timeLeft.minutes)}
          </span>
          <span className="font-mono text-[8px] text-stone-400 uppercase mt-0.5 block">MINS</span>
        </div>
        <div>
          <span className="font-serif text-2xl font-light leading-none block text-[#b88e3e] tabular-nums">
            {pad(timeLeft.seconds)}
          </span>
          <span className="font-mono text-[8px] text-[#b88e3e] uppercase mt-0.5 block">SECS</span>
        </div>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-2 gap-3 my-5" aria-label="Event countdown">
      <div className="bg-card border border-border/80 p-3.5 flex flex-col items-center justify-center">
        <span className="font-serif text-3xl md:text-4xl text-foreground font-light tabular-nums leading-none">
          {pad(timeLeft.days)}
        </span>
        <span className="label-tech text-muted-foreground mt-1.5">DAYS</span>
      </div>
      <div className="bg-card border border-border/80 p-3.5 flex flex-col items-center justify-center">
        <span className="font-serif text-3xl md:text-4xl text-foreground font-light tabular-nums leading-none">
          {pad(timeLeft.hours)}
        </span>
        <span className="label-tech text-muted-foreground mt-1.5">HOURS</span>
      </div>
      <div className="bg-card border border-border/80 p-3.5 flex flex-col items-center justify-center">
        <span className="font-serif text-3xl md:text-4xl text-foreground font-light tabular-nums leading-none">
          {pad(timeLeft.minutes)}
        </span>
        <span className="label-tech text-muted-foreground mt-1.5">MINUTES</span>
      </div>
      <div className="bg-card border border-border/80 p-3.5 flex flex-col items-center justify-center">
        <span className="font-serif text-3xl md:text-4xl text-gold font-light tabular-nums leading-none">
          {pad(timeLeft.seconds)}
        </span>
        <span className="label-tech text-gold mt-1.5">SECONDS</span>
      </div>
    </div>
  )
}
