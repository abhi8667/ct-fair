'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Building, Award, CheckCircle, Shield } from 'lucide-react'
import { PublicHeader } from '@/components/public/public-header'
import { PublicFooter } from '@/components/public/public-footer'

export default function AboutPage() {
  return (
    <div className="min-h-[100dvh] bg-background text-foreground flex flex-col blueprint-grid selection:bg-gold-soft">
      <PublicHeader />

      <main className="flex-1 w-full pt-32 pb-24 px-4 sm:px-6 lg:px-12">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Header */}
          <div className="border-b border-border pb-8">
            <span className="label-tech text-gold uppercase tracking-widest block">
              CONCRETE FAIR 2026 // INSTITUTIONAL HERITAGE // EST. 1963
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-foreground font-normal tracking-tight mt-2 uppercase text-balance">
              About Concrete Fair &amp; RVCE Civil Engineering
            </h1>
            <p className="font-serif text-2xl italic text-muted-foreground mt-3 max-w-3xl font-light text-pretty">
              &ldquo;Where theoretical mechanics meet physical yield points, shaping sustainable skylines across decades.&rdquo;
            </p>
          </div>

          {/* 2-Column Story */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7 space-y-6">
              <h2 className="font-serif text-2xl text-foreground font-medium">
                Six Decades of Structural Excellence
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The Department of Civil Engineering at R.V. College of Engineering (RVCE), established in 1963, is among the most prestigious civil engineering departments in India. Recognized as a premier research hub affiliated with Visvesvaraya Technological University (VTU) and accredited by the National Board of Accreditation (NBA), the department has pioneered research in structural materials, geotechnics, environmental hydraulics, and disaster-resilient infrastructure.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Concrete Fair was founded as a biennial national conclave to bridge the gap between textbook mechanics and real-world monumental construction. In its 14th edition, Concrete Fair 2026 brings together over 3,000 delegates, undergraduate researchers, licensed structural engineers, and corporate infrastructure heads for 48 hours of intense testing, prototyping, and knowledge exchange.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="bg-card border border-border p-4">
                  <span className="label-tech text-gold block">ACCREDITATION</span>
                  <span className="font-serif text-xl text-foreground font-medium mt-1 block">NBA Tier-1 &amp; NABL</span>
                  <p className="text-[11px] text-muted-foreground mt-1">Calibrated materials testing bay</p>
                </div>
                <div className="bg-card border border-border p-4">
                  <span className="label-tech text-gold block">CONCLAVE EDITION</span>
                  <span className="font-serif text-xl text-foreground font-medium mt-1 block">13th Edition (2026)</span>
                  <p className="text-[11px] text-muted-foreground mt-1">Continuing a legacy of excellence</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-card border border-border p-6 space-y-6">
              <div className="relative w-full aspect-[4/3] bg-muted overflow-hidden border border-border">
                <Image
                  src="/images/event-brutalist.png"
                  alt="RVCE Civil Engineering campus testing grounds"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>

              <div className="space-y-3">
                <span className="label-tech text-muted-foreground">LABORATORY SPECIFICATION</span>
                <h3 className="font-serif text-xl text-foreground font-medium">Specialized Testing Facilities</h3>
                <ul className="space-y-2 text-xs text-muted-foreground font-mono">
                  <li className="flex items-center gap-2">
                    <span className="size-1.5 bg-gold" />
                    <span>2,000 kN Universal Testing Machine (UTM)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="size-1.5 bg-gold" />
                    <span>Optical Surveying &amp; Geodetics Bay</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="size-1.5 bg-gold" />
                    <span>Structural Model Fabrication Yard</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="size-1.5 bg-gold" />
                    <span>CAD &amp; Smart City Computational Studio</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Core Philosophy Section matching Slide 4 */}
          <div className="bg-card border border-border p-8 md:p-12 space-y-6">
            <span className="label-tech text-gold font-bold">04 • WHAT MAKES US DIFFERENT</span>
            <h2 className="font-sans font-black text-3xl text-foreground uppercase tracking-tight">
              Four Pillars of Technical Excellence
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
              <div className="space-y-2 p-4 rounded-2xl bg-muted/40 border border-border">
                <span className="font-mono text-xs uppercase text-gold font-bold">VALUE 01</span>
                <h4 className="font-sans font-bold text-lg text-foreground">Code to Concrete</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Move beyond theory through mix-design, concrete testing and code-based challenges.
                </p>
              </div>
              <div className="space-y-2 p-4 rounded-2xl bg-muted/40 border border-border">
                <span className="font-mono text-xs uppercase text-gold font-bold">VALUE 02</span>
                <h4 className="font-sans font-bold text-lg text-foreground">Design to Delivery</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Translate ideas into drawings, models, structures and town-planning concepts.
                </p>
              </div>
              <div className="space-y-2 p-4 rounded-2xl bg-muted/40 border border-border">
                <span className="font-mono text-xs uppercase text-gold font-bold">VALUE 03</span>
                <h4 className="font-sans font-bold text-lg text-foreground">Field to Problem-Solving</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Bring surveying, escape-room logic and real-world case studies into learning.
                </p>
              </div>
              <div className="space-y-2 p-4 rounded-2xl bg-muted/40 border border-border">
                <span className="font-mono text-xs uppercase text-gold font-bold">VALUE 04</span>
                <h4 className="font-sans font-bold text-lg text-foreground">Technical + Creative</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Balance engineering knowledge with debate, short films, quizzes and teamwork.
                </p>
              </div>
            </div>
          </div>

          {/* Action Row */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-border pt-8">
            <p className="text-xs text-muted-foreground">
              Interested in faculty partnership or corporate sponsorship?
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="/events"
                className="px-6 py-3 bg-muted hover:bg-card border border-border text-foreground font-mono text-xs uppercase tracking-wider transition-colors"
              >
                Browse Competitions
              </Link>
              <Link
                href="/register"
                className="px-6 py-3 bg-foreground hover:bg-gold text-background hover:text-foreground border border-foreground font-mono text-xs uppercase tracking-wider transition-colors"
              >
                Register Delegate Pass →
              </Link>
            </div>
          </div>
        </div>
      </main>

      <PublicFooter />
    </div>
  )
}
