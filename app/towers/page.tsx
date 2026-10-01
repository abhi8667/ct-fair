"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Box, Compass, Sparkles, RefreshCw, Eye, Layers } from "lucide-react";
import { JapaneseTowerLandscape, TOWER_COUNTRIES, TowerCountry } from "@/components/public/JapaneseTowerLandscape";
import "@/src/shaders/japanese-tower/style.css";

const COUNTRY_DETAILS: Record<TowerCountry, { name: string; title: string; subtitle: string; era: string; description: string }> = {
  india: {
    name: "Indian Temple Monument",
    title: "Vedic Stone Shikhara",
    subtitle: "Monolithic Cyclopean Masonry & Interlocking Stone Joints (RVCE · 2026)",
    era: "Classical Indian Temple Architecture (Nagara & Dravidian Tradition)",
    description: "Monolithic cyclopean stonecraft featuring a soaring Shikhara tower rising over a stepped adhisthana plinth. Engineered with dry-friction interlocking stone masonry, sanctum garbhagriha pillars, and crowning amalaka finials.",
  },
  japan: {
    name: "Indian Temple Monument",
    title: "Vedic Stone Shikhara",
    subtitle: "Monolithic Cyclopean Masonry & Interlocking Stone Joints (RVCE · 2026)",
    era: "Classical Indian Temple Architecture (Nagara & Dravidian Tradition)",
    description: "Monolithic cyclopean stonecraft featuring a soaring Shikhara tower rising over a stepped adhisthana plinth. Engineered with dry-friction interlocking stone masonry, sanctum garbhagriha pillars, and crowning amalaka finials.",
  },
};

export default function TowersPage() {
  const details = COUNTRY_DETAILS.india;

  return (
    <div className="min-h-[100dvh] bg-[#f8f9fa] text-[#0f172a] flex flex-col font-sans selection:bg-[#b88e3e] selection:text-white">
      {/* Top Architectural Navigation Bar */}
      <header className="border-b border-[#1e293b]/20 bg-[#f8f9fa]/90 backdrop-blur-md sticky top-0 z-50 px-4 sm:px-8 py-3.5 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#64748b]/40 hover:border-[#b88e3e] text-xs font-mono font-bold uppercase tracking-wider text-[#0f172a] hover:text-[#b88e3e] transition-all bg-white/40 focus-visible:outline-2 focus-visible:outline-[#b88e3e]"
          >
            <ArrowLeft className="size-3.5" aria-hidden="true" />
            <span>Concrete Fair 2026</span>
          </Link>

          <span className="h-4 w-px bg-[#1e293b]/20 hidden sm:inline-block" aria-hidden="true" />

          <div className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-[#b88e3e] animate-pulse" aria-hidden="true" />
            <span className="font-mono text-xs font-bold tracking-widest uppercase text-[#64748b]">
              INDIAN TEMPLE MONUMENT · 3D STUDY
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/register"
            className="px-4 py-1.5 rounded-full bg-[#0f172a] hover:bg-[#b88e3e] text-[#ffffff] text-xs font-mono font-semibold uppercase tracking-wider transition-colors shadow-sm focus-visible:outline-2 focus-visible:outline-[#b88e3e]"
          >
            Attend Conclave
          </Link>
        </div>
      </header>

      {/* Main Experience Grid */}
      <main className="flex-1 max-w-[1512px] w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col gap-6">
        {/* Archetype Indicator */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#1e293b]/15 pb-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0f172a] text-[#ffffff] text-xs font-mono font-bold uppercase tracking-wider shadow-sm">
              <Compass className="size-3.5 text-[#b88e3e]" aria-hidden="true" />
              <span>ARCHETYPE: VEDIC STONE SHIKHARA</span>
            </div>
            <span className="hidden sm:inline-block text-xs font-mono text-[#64748b]">
              RVCE Civil Engineering Conclave 2026
            </span>
          </div>

          <div className="flex items-center gap-2 font-mono text-[11px] text-[#64748b]">
            <Eye className="size-3.5 text-[#b88e3e]" aria-hidden="true" />
            <span>Interactive 3D Stage · Drag to Orbit</span>
          </div>
        </div>

        {/* 3D WebGL Shader Stage Canvas Container */}
        <section className="relative w-full rounded-2xl overflow-hidden border border-[#e2e8f0] shadow-[0_24px_60px_-15px_rgba(46,37,21,0.25)] bg-[#f8f9fa] aspect-[16/10] sm:aspect-[16/9] min-h-[580px] max-h-[820px]" aria-label="3D Temple Visualization Stage">
          <div className="shader-frame w-full h-full absolute inset-0">
            <JapaneseTowerLandscape
              country="india"
              className="w-full h-full"
            />
          </div>
        </section>

        {/* Architectural Context & Research Dossier */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-6 bg-[#ffffff]/80 border border-[#e2e8f0] rounded-2xl p-6 sm:p-8 shadow-sm">
          <div className="md:col-span-4 space-y-3 border-b md:border-b-0 md:border-r border-[#1e293b]/15 md:pr-6 pb-6 md:pb-0">
            <div className="flex items-center gap-2 text-[#b88e3e] font-mono text-xs font-bold uppercase tracking-widest">
              <Box className="size-4" aria-hidden="true" />
              <span>ARCHITECTURAL DOSSIER</span>
            </div>
            <h2 className="font-serif text-3xl text-[#0f172a] font-bold leading-tight text-balance">
              {details.title}
            </h2>
            <div className="font-serif text-lg text-[#b88e3e] italic text-balance">
              {details.subtitle}
            </div>
            <div className="inline-block px-3 py-1 rounded bg-[#f1f5f9] font-mono text-[11px] font-semibold text-[#334155] uppercase tracking-wider">
              {details.era}
            </div>
          </div>

          <div className="md:col-span-8 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-[#64748b]">
                STRUCTURAL MECHANICS &amp; ASSEMBLY NOTES
              </h3>
              <p className="font-serif text-base sm:text-lg text-[#334155] leading-relaxed text-pretty">
                {details.description}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 font-mono text-xs text-[#334155]">
                <div className="p-3 bg-white/60 rounded-xl border border-[#e2e8f0]">
                  <span className="text-[#64748b] text-[10px] block uppercase">FOUNDATION</span>
                  <span className="font-bold text-[#0f172a] mt-1 block">Interlocking Stone Plinth</span>
                </div>
                <div className="p-3 bg-white/60 rounded-xl border border-[#e2e8f0]">
                  <span className="text-[#64748b] text-[10px] block uppercase">SUPERSTRUCTURE</span>
                  <span className="font-bold text-[#0f172a] mt-1 block">Trabeated Corbelled Shikhara</span>
                </div>
                <div className="p-3 bg-white/60 rounded-xl border border-[#e2e8f0]">
                  <span className="text-[#64748b] text-[10px] block uppercase">CROWNING APEX</span>
                  <span className="font-bold text-[#b88e3e] mt-1 block">Monolithic Amalaka Finial</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#1e293b]/15 flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-[#64748b]">
              <span className="flex items-center gap-2">
                <Sparkles className="size-3.5 text-[#b88e3e]" aria-hidden="true" />
                Concrete Fair 2026 · RVCE Department of Civil Engineering
              </span>
              <div className="flex items-center gap-4">
                <Link href="/events" className="text-[#0f172a] hover:text-[#b88e3e] font-bold underline focus-visible:outline-2 focus-visible:outline-[#b88e3e]">
                  View Competitions →
                </Link>
                <Link href="/schedule" className="text-[#0f172a] hover:text-[#b88e3e] font-bold underline focus-visible:outline-2 focus-visible:outline-[#b88e3e]">
                  Schedule →
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
