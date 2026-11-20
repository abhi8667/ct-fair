'use client'

import { useEffect, useState } from 'react'

export interface CountdownTimerProps {
  targetDate?: string
  variant?: 'grid' | 'card' | 'hero-strip'
}

interface TimeRemaining {
  days: number
  hours: number
  minutes: number
  seconds: number
}

function calculateTimeRemaining(targetTimestamp: number): TimeRemaining {
  const now = Date.now()
  const difference = targetTimestamp - now

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  }
}

export function CountdownTimer({
  targetDate = '2026-11-30T09:00:00+05:30',
  variant = 'grid',
}: CountdownTimerProps) {
  const [mounted, setMounted] = useState(false)
  const [timeLeft, setTimeLeft] = useState<TimeRemaining>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const targetTimestamp = new Date(targetDate).getTime()

    // Immediately calculate real time remaining on client mount
    setTimeLeft(calculateTimeRemaining(targetTimestamp))
    setMounted(true)

    const interval = setInterval(() => {
      setTimeLeft(calculateTimeRemaining(targetTimestamp))
    }, 1000)

    return () => clearInterval(interval)
  }, [targetDate])

  const pad = (n: number) => String(n).padStart(2, '0')

  if (variant === 'hero-strip') {
    return (
      <div className="flex items-center gap-1.5 sm:gap-4 text-center tabular-nums" aria-label="Event countdown">
        <div className="flex flex-col items-center w-8 sm:w-12">
          <span className="font-serif text-lg sm:text-3xl font-light text-white leading-none inline-block w-full">
            {mounted ? pad(timeLeft.days) : '--'}
          </span>
          <span className="font-mono text-[7px] sm:text-[9px] text-[#eadfd4] tracking-wider uppercase mt-0.5 sm:mt-1">DAYS</span>
        </div>
        <span className="text-[#d8c2ab]/60 font-light text-sm sm:text-xl -mt-2 sm:-mt-3">:</span>
        <div className="flex flex-col items-center w-8 sm:w-12">
          <span className="font-serif text-lg sm:text-3xl font-light text-white leading-none inline-block w-full">
            {mounted ? pad(timeLeft.hours) : '--'}
          </span>
          <span className="font-mono text-[7px] sm:text-[9px] text-[#eadfd4] tracking-wider uppercase mt-0.5 sm:mt-1">HRS</span>
        </div>
        <span className="text-[#d8c2ab]/60 font-light text-sm sm:text-xl -mt-2 sm:-mt-3">:</span>
        <div className="flex flex-col items-center w-8 sm:w-12">
          <span className="font-serif text-lg sm:text-3xl font-light text-white leading-none inline-block w-full">
            {mounted ? pad(timeLeft.minutes) : '--'}
          </span>
          <span className="font-mono text-[7px] sm:text-[9px] text-[#eadfd4] tracking-wider uppercase mt-0.5 sm:mt-1">MIN</span>
        </div>
        <span className="text-[#d8c2ab]/60 font-light text-sm sm:text-xl -mt-2 sm:-mt-3">:</span>
        <div className="flex flex-col items-center w-8 sm:w-12">
          <span className="font-serif text-lg sm:text-3xl font-light text-[#d8c2ab] leading-none inline-block w-full">
            {mounted ? pad(timeLeft.seconds) : '--'}
          </span>
          <span className="font-mono text-[7px] sm:text-[9px] text-[#d8c2ab] tracking-wider uppercase mt-0.5 sm:mt-1">SEC</span>
        </div>
      </div>
    )
  }

  if (variant === 'card') {
    return (
      <div className="relative z-10 grid grid-cols-4 gap-1 text-center py-2" aria-label="Event countdown">
        <div>
          <span className="font-serif text-2xl font-light leading-none block text-white tabular-nums">
            {mounted ? pad(timeLeft.days) : '--'}
          </span>
          <span className="font-mono text-[8px] text-stone-400 uppercase mt-0.5 block">DAYS</span>
        </div>
        <div>
          <span className="font-serif text-2xl font-light leading-none block text-white tabular-nums">
            {mounted ? pad(timeLeft.hours) : '--'}
          </span>
          <span className="font-mono text-[8px] text-stone-400 uppercase mt-0.5 block">HOURS</span>
        </div>
        <div>
          <span className="font-serif text-2xl font-light leading-none block text-white tabular-nums">
            {mounted ? pad(timeLeft.minutes) : '--'}
          </span>
          <span className="font-mono text-[8px] text-stone-400 uppercase mt-0.5 block">MINS</span>
        </div>
        <div>
          <span className="font-serif text-2xl font-light leading-none block text-[#d8c2ab] tabular-nums">
            {mounted ? pad(timeLeft.seconds) : '--'}
          </span>
          <span className="font-mono text-[8px] text-[#d8c2ab] uppercase mt-0.5 block">SECS</span>
        </div>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-2 gap-3 my-5" aria-label="Event countdown">
      <div className="bg-card border border-border/80 p-3.5 flex flex-col items-center justify-center">
        <span className="font-serif text-3xl md:text-4xl text-foreground font-light tabular-nums leading-none">
          {mounted ? pad(timeLeft.days) : '--'}
        </span>
        <span className="label-tech text-muted-foreground mt-1.5">DAYS</span>
      </div>
      <div className="bg-card border border-border/80 p-3.5 flex flex-col items-center justify-center">
        <span className="font-serif text-3xl md:text-4xl text-foreground font-light tabular-nums leading-none">
          {mounted ? pad(timeLeft.hours) : '--'}
        </span>
        <span className="label-tech text-muted-foreground mt-1.5">HOURS</span>
      </div>
      <div className="bg-card border border-border/80 p-3.5 flex flex-col items-center justify-center">
        <span className="font-serif text-3xl md:text-4xl text-foreground font-light tabular-nums leading-none">
          {mounted ? pad(timeLeft.minutes) : '--'}
        </span>
        <span className="label-tech text-muted-foreground mt-1.5">MINUTES</span>
      </div>
      <div className="bg-card border border-border/80 p-3.5 flex flex-col items-center justify-center">
        <span className="font-serif text-3xl md:text-4xl text-gold font-light tabular-nums leading-none">
          {mounted ? pad(timeLeft.seconds) : '--'}
        </span>
        <span className="label-tech text-gold mt-1.5">SECONDS</span>
      </div>
    </div>
  )
}
