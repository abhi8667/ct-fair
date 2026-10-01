'use client'

import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'

/**
 * Spatial 3D Tilt Card wrapper implementing Antigravity Design Principles:
 * - Weightlessness with layered diffused shadows (box-shadow: 0 20px 40px rgba(0,0,0,0.05))
 * - Spatial depth with CSS 3D perspective and mouse tracking
 * - Smooth dampening (no instant snapping: 0.3s ease-out)
 */
export function AntigravityTilt({
  children,
  className = '',
  maxTilt = 7,
  scale = 1.02,
  glare = false,
}: {
  children: React.ReactNode
  className?: string
  maxTilt?: number
  scale?: number
  glare?: boolean
}) {
  const cardRef = useRef<HTMLDivElement>(null)
  const glareRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return
    }

    const card = cardRef.current
    if (!card) return

    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const tiltX = ((y - centerY) / centerY) * -maxTilt
    const tiltY = ((x - centerX) / centerX) * maxTilt

    card.style.transform = `perspective(1000px) rotateX(${tiltX.toFixed(2)}deg) rotateY(${tiltY.toFixed(2)}deg) scale3d(${scale}, ${scale}, ${scale})`

    if (glare && glareRef.current) {
      const glareX = (x / rect.width) * 100
      const glareY = (y / rect.height) * 100
      glareRef.current.style.background = `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.25) 0%, transparent 60%)`
      glareRef.current.style.opacity = '1'
    }
  }

  const handleMouseLeave = () => {
    const card = cardRef.current
    if (!card) return
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)'

    if (glare && glareRef.current) {
      glareRef.current.style.opacity = '0'
    }
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative transition-transform duration-300 ease-out will-change-transform ${className}`}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {children}
      {glare && (
        <div
          ref={glareRef}
          className="pointer-events-none absolute inset-0 rounded-inherit opacity-0 transition-opacity duration-300 z-20"
        />
      )}
    </div>
  )
}

/**
 * GSAP Staggered Entrance Animator:
 * Drops elements in like dominoes with 0.08s - 0.1s stagger, subtle rotation & translation.
 * Respects prefers-reduced-motion: reduce.
 */
export function StaggerEntrance({
  children,
  stagger = 0.08,
  selector = '.stagger-item',
  yOffset = 24,
  duration = 0.7,
}: {
  children: React.ReactNode
  stagger?: number
  selector?: string
  yOffset?: number
  duration?: number
}) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion || !containerRef.current) return

    const elements = containerRef.current.querySelectorAll(selector)
    if (!elements.length) return

    gsap.fromTo(
      elements,
      {
        opacity: 0,
        y: yOffset,
        rotateX: -4,
      },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        duration: duration,
        stagger: stagger,
        ease: 'power3.out',
      }
    )
  }, [selector, stagger, yOffset, duration])

  return <div ref={containerRef}>{children}</div>
}

/**
 * Weightless Floating Badge with layered shadow & glassmorphism
 */
export function FloatingBadge({
  children,
  className = '',
  slow = false,
}: {
  children: React.ReactNode
  className?: string
  slow?: boolean
}) {
  return (
    <div
      className={`glass-panel px-3 py-1.5 rounded-full inline-flex items-center gap-2 shadow-[0_12px_24px_-6px_rgba(28,32,36,0.12)] border border-white/60 ${
        slow ? 'animate-float-slow' : 'animate-float'
      } ${className}`}
      style={{ transformStyle: 'preserve-3d', transform: 'translateZ(30px)' }}
    >
      {children}
    </div>
  )
}
