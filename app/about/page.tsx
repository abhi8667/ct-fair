'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ArrowUpRight, Award, Building, CheckCircle, Mail, Phone, Users } from 'lucide-react'
import { PublicHeader } from '@/components/public/public-header'
import { PublicFooter } from '@/components/public/public-footer'
import { conclaveInfo } from '@/lib/data'

export default function AboutPage() {
  return (
    <div className="min-h-[100dvh] bg-[#fff8ef] text-[#34252b] flex flex-col font-sans selection:bg-[#3b0924] selection:text-[#fff8ef]">
      <PublicHeader />

      <main className="flex-1 w-full pt-32 pb-24 px-4 sm:px-6 lg:px-12">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Header */}
          <div className="border-b border-[#eadfd4] pb-8 space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-5 h-0.5 bg-[#3b0924]" aria-hidden="true" />
              <span className="font-mono text-xs uppercase tracking-widest text-[#a98b78] font-bold">
                02 • ABOUT US // DEPARTMENT OF CIVIL ENGINEERING · RVCE
              </span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#34252b] font-normal tracking-tight uppercase text-balance">
              About Concrete Fair 2026
            </h1>
            <p className="font-serif text-2xl italic text-[#a98b78] mt-2 max-w-3xl font-light text-pretty">
              &ldquo;{conclaveInfo.tagline}&rdquo; — {conclaveInfo.promise}
            </p>
          </div>

          {/* 2-Column Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-3">
                <span className="font-mono text-xs uppercase tracking-wider text-[#3b0924] font-bold">
                  THE CONCRETE FAIR PROMISE
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl text-[#34252b] font-medium leading-tight">
                  More than a fest. A meeting point for the built environment.
                </h2>
              </div>

              <p className="text-sm text-[#77666a] leading-relaxed">
                Concrete Fair 2026 is a national-level technical fest organized by the Department of Civil Engineering at RV College of Engineering, Bengaluru, in association with the ICI (Indian Concrete Institute) Chapter.
              </p>

              <p className="text-sm text-[#77666a] leading-relaxed">
                With a legacy of bringing together aspiring civil engineers, Concrete Fair provides a dynamic platform for technical excellence, creative thinking, practical learning, and collaboration. Bringing together 800+ participants from across India, the fest celebrates engineering talent while fostering connections between students, academia, and the construction industry.
              </p>

              {/* Department History Box from Brochure */}
              <div className="p-6 bg-white border border-[#eadfd4] rounded-2xl space-y-3 shadow-2xs">
                <span className="font-mono text-[10px] uppercase tracking-wider text-[#3b0924] font-bold block">
                  DEPARTMENT OF CIVIL ENGINEERING (EST. 1963)
                </span>
                <p className="text-xs text-[#77666a] leading-relaxed">
                  {conclaveInfo.departmentHistory}
                </p>
              </div>

              {/* 3 Metric Stats from Slide 3 */}
              <div className="grid grid-cols-3 gap-4 pt-2">
                <div className="bg-white border border-[#eadfd4] p-4 rounded-2xl shadow-2xs text-center">
                  <span className="font-mono text-[9px] text-[#77666a] uppercase font-bold block">EDITION</span>
                  <span className="font-sans font-black text-2xl sm:text-3xl text-[#3b0924] mt-1 block">
                    {conclaveInfo.edition}
                  </span>
                  <span className="text-[10px] text-[#77666a] mt-0.5 block">Continuing Legacy</span>
                </div>

                <div className="bg-white border border-[#eadfd4] p-4 rounded-2xl shadow-2xs text-center">
                  <span className="font-mono text-[9px] text-[#77666a] uppercase font-bold block">PARTICIPANTS</span>
                  <span className="font-sans font-black text-2xl sm:text-3xl text-[#3b0924] mt-1 block">
                    {conclaveInfo.participantsExpected}
                  </span>
                  <span className="text-[10px] text-[#77666a] mt-0.5 block">Expected (Current)</span>
                </div>

                <div className="bg-white border border-[#eadfd4] p-4 rounded-2xl shadow-2xs text-center">
                  <span className="font-mono text-[9px] text-[#77666a] uppercase font-bold block">PAST REACH</span>
                  <span className="font-sans font-black text-2xl sm:text-3xl text-[#a98b78] mt-1 block">
                    {conclaveInfo.participantsLegacy}
                  </span>
                  <span className="text-[10px] text-[#77666a] mt-0.5 block">Across Editions</span>
                </div>
              </div>
            </div>

            {/* Right Column: Institutional Cards */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white border border-[#eadfd4] p-6 rounded-3xl shadow-sm space-y-5">
                <div className="relative w-full aspect-[4/3] bg-[#f4e9dc] rounded-2xl overflow-hidden border border-[#eadfd4]">
                  <Image
                    src="/images/event-brutalist.png"
                    alt="RVCE Civil Engineering"
                    fill
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="object-cover"
                  />
                </div>

                <div className="space-y-2">
                  <span className="font-mono text-[10px] uppercase text-[#a98b78] font-bold block">
                    LOCATION &amp; CONTACT
                  </span>
                  <h3 className="font-serif text-xl text-[#34252b] font-bold">
                    RV College of Engineering
                  </h3>
                  <p className="text-xs text-[#77666a] leading-relaxed">
                    {conclaveInfo.address}
                  </p>
                  <div className="pt-2 border-t border-[#eadfd4] text-xs font-mono space-y-1">
                    <div>
                      <span className="text-[#3b0924] font-bold">Email:</span>{' '}
                      <a href={`mailto:${conclaveInfo.email}`} className="text-[#34252b] hover:underline">
                        {conclaveInfo.email}
                      </a>
                    </div>
                    <div>
                      <span className="text-[#3b0924] font-bold">Instagram:</span>{' '}
                      <a href={conclaveInfo.instagramUrl} target="_blank" rel="noopener noreferrer" className="text-[#34252b] hover:underline">
                        {conclaveInfo.instagram}
                      </a>
                    </div>
                    {conclaveInfo.contacts.map((c) => (
                      <div key={c.name}>
                        <span className="text-[#3b0924] font-bold">{c.name}:</span> {c.phone}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* What Makes Us Different: 4 Values from Slide 4 */}
          <div className="bg-white border border-[#eadfd4] p-8 md:p-12 rounded-3xl space-y-8 shadow-sm">
            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-[#a98b78] font-bold block">
                04 • WHAT MAKES US DIFFERENT
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#34252b] font-medium tracking-tight mt-1">
                Designed for technical depth. Built for participation.
              </h2>
              <p className="text-xs sm:text-sm text-[#77666a] mt-2">
                Concrete Fair connects technical learning with communication, creativity and collaborative problem-solving.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {conclaveInfo.values.map((v) => (
                <div key={v.code} className="p-5 rounded-2xl bg-[#fff8ef] border border-[#eadfd4] space-y-2">
                  <span className="font-mono text-[10px] uppercase text-[#3b0924] font-bold block">
                    {v.code}
                  </span>
                  <h4 className="font-sans font-bold text-base text-[#34252b]">{v.title}</h4>
                  <p className="text-xs text-[#77666a] leading-relaxed">
                    {v.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Sponsorship Section from Proposal & Brochure */}
          <div id="sponsorship" className="space-y-8 pt-4">
            <div className="border-b border-[#eadfd4] pb-6 space-y-2">
              <span className="font-mono text-xs uppercase tracking-wider text-[#a98b78] font-bold block">
                PARTNER WITH CONCRETE FAIR 2026 // SPONSORSHIP PACKAGES
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#34252b] font-medium tracking-tight">
                Let’s Build Something Solid Together
              </h2>
              <p className="text-sm text-[#77666a] max-w-3xl leading-relaxed">
                Connect with 800+ participants and 5,000+ aspiring civil engineers from institutions across the country, showcase your products, and recruit emerging engineering talent.
              </p>
            </div>

            {/* Packages Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {conclaveInfo.sponsorshipPackages.map((pkg) => (
                <div
                  key={pkg.name}
                  className="bg-white border border-[#eadfd4] p-6 rounded-3xl flex flex-col justify-between space-y-6 shadow-2xs hover:border-[#3b0924]/60 transition-all"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-[#3b0924] uppercase">
                        {pkg.name}
                      </span>
                      <span className="text-[10px] font-mono text-[#a98b78] bg-[#f4e9dc] px-2 py-0.5 rounded-full font-bold">
                        {pkg.slots}
                      </span>
                    </div>

                    <div className="font-serif text-3xl font-black text-[#34252b]">
                      {pkg.price}
                    </div>

                    <ul className="space-y-2 text-xs text-[#77666a] font-sans pt-2 border-t border-[#eadfd4]">
                      {pkg.benefits.map((b) => (
                        <li key={b} className="flex items-start gap-2">
                          <CheckCircle className="size-3.5 text-[#3b0924] shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href={`mailto:${conclaveInfo.email}?subject=Concrete Fair 2026 Sponsorship - ${pkg.name} Package`}
                    className="w-full text-center py-2.5 bg-[#f4e9dc] hover:bg-[#3b0924] text-[#3b0924] hover:text-white rounded-full font-sans text-xs font-semibold tracking-wide transition-all"
                  >
                    Partner as {pkg.name}
                  </a>
                </div>
              ))}
            </div>

            {/* Build your own package table */}
            <div className="bg-white border border-[#eadfd4] p-6 sm:p-8 rounded-3xl space-y-4 shadow-2xs">
              <h3 className="font-serif text-xl text-[#34252b] font-bold">
                Build Your Own Package
              </h3>
              <p className="text-xs text-[#77666a]">
                Pick individual incentives to suit your organization&apos;s goals and budget:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 pt-2">
                {conclaveInfo.customSponsorship.map((item) => (
                  <div key={item.item} className="p-3 bg-[#fff8ef] rounded-xl border border-[#eadfd4] text-center">
                    <span className="block text-xs font-medium text-[#34252b]">{item.item}</span>
                    <span className="block font-serif text-lg font-bold text-[#3b0924] mt-1">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Action Row */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-[#eadfd4] pt-8">
            <p className="text-xs text-[#77666a]">
              Have questions or want to participate?
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="/events"
                className="px-6 py-3 bg-white hover:bg-[#f4e9dc] border border-[#eadfd4] text-[#34252b] font-sans text-xs font-semibold rounded-full transition-colors"
              >
                Browse 8 Events
              </Link>
              <Link
                href="/register"
                className="px-6 py-3 bg-[#3b0924] hover:bg-[#521331] text-[#fff8ef] font-sans text-xs font-semibold rounded-full transition-colors shadow-2xs"
              >
                Register via Google Form →
              </Link>
            </div>
          </div>
        </div>
      </main>

      <PublicFooter />
    </div>
  )
}
