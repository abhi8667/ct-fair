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
    <div className="min-h-[100dvh] bg-[#fff8ef] text-[#34252b] flex flex-col font-sans selection:bg-[#3b0924] selection:text-[#fff8ef]">
      {/* Top Architectural Navigation Bar */}
      <header className="border-b border-[#d8c2ab]/50 bg-[#fff8ef]/90 backdrop-blur-md sticky top-0 z-50 px-4 sm:px-8 py-3.5 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#75435c]/40 hover:border-[#3b0924] text-xs font-mono font-bold uppercase tracking-wider text-[#34252b] hover:text-[#3b0924] transition-all bg-white/60 focus-visible:outline-2 focus-visible:outline-[#d8c2ab]"
          >
            <ArrowLeft className="size-3.5" aria-hidden="true" />
            <span>Concrete Fair 2026</span>
          </Link>

          <span className="h-4 w-px bg-[#d8c2ab] hidden sm:inline-block" aria-hidden="true" />

          <div className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-[#3b0924] animate-pulse" aria-hidden="true" />
            <span className="font-mono text-xs font-bold tracking-widest uppercase text-[#77666a]">
              INDIAN TEMPLE MONUMENT · 3D STUDY
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/register"
            className="px-4 py-1.5 rounded-full bg-[#3b0924] hover:bg-[#521331] text-white text-xs font-mono font-semibold uppercase tracking-wider transition-colors shadow-sm focus-visible:outline-2 focus-visible:outline-[#d8c2ab]"
          >
            Attend Conclave
          </Link>
        </div>
      </header>

      {/* Main Experience Grid */}
      <main className="flex-1 max-w-[1512px] w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col gap-6">
        {/* Archetype Indicator */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#d8c2ab]/40 pb-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#3b0924] text-white text-xs font-mono font-bold uppercase tracking-wider shadow-sm">
              <Compass className="size-3.5 text-[#d8c2ab]" aria-hidden="true" />
              <span>ARCHETYPE: VEDIC STONE SHIKHARA</span>
            </div>
            <span className="hidden sm:inline-block text-xs font-mono text-[#77666a]">
              RVCE Civil Engineering Conclave 2026
            </span>
          </div>

          <div className="flex items-center gap-2 font-mono text-[11px] text-[#77666a]">
            <Eye className="size-3.5 text-[#3b0924]" aria-hidden="true" />
            <span>Interactive 3D Stage · Drag to Orbit</span>
          </div>
        </div>

        {/* 3D WebGL Shader Stage Canvas Container */}
        <section className="relative w-full rounded-2xl overflow-hidden border border-[#d8c2ab] shadow-[0_24px_60px_-15px_rgba(59,9,36,0.2)] bg-[#1d0411] aspect-[16/10] sm:aspect-[16/9] min-h-[580px] max-h-[820px]" aria-label="3D Temple Visualization Stage">
          <div className="shader-frame w-full h-full absolute inset-0">
            <JapaneseTowerLandscape
              country="india"
              weather="storm"
              time="sunset"
              className="w-full h-full"
            />
          </div>
        </section>

        {/* Architectural Context & Research Dossier */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-6 bg-white/80 border border-[#d8c2ab]/60 rounded-2xl p-6 sm:p-8 shadow-sm">
          <div className="md:col-span-4 space-y-3 border-b md:border-b-0 md:border-r border-[#d8c2ab]/40 md:pr-6 pb-6 md:pb-0">
            <div className="flex items-center gap-2 text-[#3b0924] font-mono text-xs font-bold uppercase tracking-widest">
              <Box className="size-4 text-[#d8c2ab]" aria-hidden="true" />
              <span>ARCHITECTURAL DOSSIER</span>
            </div>
            <h2 className="font-serif text-3xl text-[#34252b] font-bold leading-tight text-balance">
              {details.title}
            </h2>
            <div className="font-serif text-lg text-[#521331] italic text-balance">
              {details.subtitle}
            </div>
            <div className="inline-block px-3 py-1 rounded bg-[#f4e9dc] font-mono text-[11px] font-semibold text-[#3b0924] uppercase tracking-wider">
              {details.era}
            </div>
          </div>

          <div className="md:col-span-8 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-[#77666a]">
                STRUCTURAL MECHANICS &amp; ASSEMBLY NOTES
              </h3>
              <p className="font-serif text-base sm:text-lg text-[#34252b] leading-relaxed text-pretty">
                {details.description}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 font-mono text-xs text-[#34252b]">
                <div className="p-3 bg-[#fff8ef] rounded-xl border border-[#d8c2ab]/60">
                  <span className="text-[#77666a] text-[10px] block uppercase">FOUNDATION</span>
                  <span className="font-bold text-[#34252b] mt-1 block">Interlocking Stone Plinth</span>
                </div>
                <div className="p-3 bg-[#fff8ef] rounded-xl border border-[#d8c2ab]/60">
                  <span className="text-[#77666a] text-[10px] block uppercase">SUPERSTRUCTURE</span>
                  <span className="font-bold text-[#34252b] mt-1 block">Trabeated Corbelled Shikhara</span>
                </div>
                <div className="p-3 bg-[#fff8ef] rounded-xl border border-[#d8c2ab]/60">
                  <span className="text-[#77666a] text-[10px] block uppercase">CROWNING APEX</span>
                  <span className="font-bold text-[#3b0924] mt-1 block">Monolithic Amalaka Finial</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#d8c2ab]/40 flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-[#77666a]">
              <span className="flex items-center gap-2">
                <Sparkles className="size-3.5 text-[#3b0924]" aria-hidden="true" />
                Concrete Fair 2026 · RVCE Department of Civil Engineering
              </span>
              <div className="flex items-center gap-4">
                <Link href="/events" className="text-[#3b0924] hover:text-[#521331] font-bold underline focus-visible:outline-2 focus-visible:outline-[#d8c2ab]">
                  View Competitions →
                </Link>
                <Link href="/schedule" className="text-[#3b0924] hover:text-[#521331] font-bold underline focus-visible:outline-2 focus-visible:outline-[#d8c2ab]">
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
