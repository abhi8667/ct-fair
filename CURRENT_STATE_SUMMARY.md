# Concrete Fair 2026 — Current State Summary
**Document Version:** 1.0  
**Repository:** `ct-fair`  
**Framework:** Next.js 16.3.3 (React 19, Tailwind CSS v4, TypeScript 5.7, Lucide Icons, GSAP, Recharts, Three.js)  
**Deployment Target:** Cloudflare Pages (Static Export) / Docker Container  
**Date of Audit:** October 2026  

---

## 1. Executive Overview

The **Concrete Fair 2026** codebase is currently a **fully realized, highly styled frontend prototype and interactive mock platform** built for the Department of Civil Engineering at RV College of Engineering (Bengaluru).

The application features a distinct, tailored design language described as an **"architectural journal × brutalist civil-engineering workspace"** (slate, cement greys, stone white, blueprint grids, technical typography, and muted gold accents).

All user-facing surfaces, routing structures, and administrative interfaces have been designed and implemented with comprehensive interactive fidelity. However, the application currently operates on **in-memory and static mock data** ([`lib/data.ts`](file:///c:/Hacks/CT-Fair/lib/data.ts)) with **client-side simulation** rather than a persistent backend database or live payment gateway.

---

## 2. Implemented Surfaces & Feature Breakdown

### 2.1 Public Experience Surfaces

| Route | Purpose & Implementation | Key Features & Components |
|---|---|---|
| [`/`](file:///c:/Hacks/CT-Fair/app/page.tsx) | **Public Homepage & Conclave Introduction** | • Interactive 3D Vedic Stone Shikhara / temple monument canvas ([`JapaneseTowerLandscape.tsx`](file:///c:/Hacks/CT-Fair/components/public/JapaneseTowerLandscape.tsx)) with WebGL shaders<br>• Hero live countdown timer synced to Nov 30, 2026 ([`countdown-timer.tsx`](file:///c:/Hacks/CT-Fair/components/public/countdown-timer.tsx))<br>• Flagship bay accordion gallery with keyboard navigation & ARIA support ([`accordion-gallery.tsx`](file:///c:/Hacks/CT-Fair/components/public/accordion-gallery.tsx))<br>• Conclave narrative section ("Tradition → Transformation → Tomorrow")<br>• Featured events carousel with category tabs<br>• Institutional accreditation showcase (NBA Tier-1, NABL) |
| [`/events`](file:///c:/Hacks/CT-Fair/app/events/page.tsx) | **Public Event Directory & Catalogue** | • Multi-category filter tabs (Heavy Engineering, Structural Design, Material Innovation, Computational BIM, Symposium & Lecture, Quizzes & Cultural)<br>• Search bar across event codes, titles, and venues<br>• Accordion showcase of flagship bays + structured card grid<br>• Direct links to pre-filled registration |
| [`/register`](file:///c:/Hacks/CT-Fair/app/register/page.tsx) | **Delegate & Contingent Registration Desk** | • Delegate category selector (Individual, Team, Faculty, Delegate)<br>• Dynamic event selector bound to fee schedule<br>• Form validation fields (Name, Email, Phone, College, USN, Team details)<br>• Simulated payment selection (UPI / NetBanking / Institutional Pass)<br>• Instant client-side ticket & QR badge generation (`CF26-XX-XXXX`) |
| [`/portal`](file:///c:/Hacks/CT-Fair/app/portal/page.tsx) | **Participant & Delegate Console** | • Authenticated delegate view (currently mocked for delegate *Aditi Kulkarni*)<br>• Tab 1: **My Registrations** (status, reporting time, lab PPE requirements)<br>• Tab 2: **Digital Ticket & QR Pass** (printable card with dynamic SVG QR code)<br>• Tab 3: **My Event Schedule** (chronological Day 1 & Day 2 itinerary)<br>• Tab 4: **Payment Invoices & Receipts** (reconciliation IDs, transaction records)<br>• Tab 5: **Live Conclave Announcements** (push bulletin feed) |
| [`/schedule`](file:///c:/Hacks/CT-Fair/app/schedule/page.tsx) | **Conclave Itinerary & Timeline** | • Day 01 (30 Nov 2026) & Day 02 (01 Dec 2026) schedule tabs ([`schedule-tabs.tsx`](file:///c:/Hacks/CT-Fair/components/public/schedule-tabs.tsx))<br>• Venue check-in guidelines and testing bay safety rules<br>• Schedule PDF download trigger |
| [`/about`](file:///c:/Hacks/CT-Fair/app/about/page.tsx) | **Institutional Heritage & Laboratory Specs** | • History of RVCE Civil Engineering (Est. 1963, 14th Conclave edition)<br>• Detailed specs of 14 testing bays (2,000 kN UTM, Aqua flume dock, Shake-table, BIM lab)<br>• Conclave pillars: Rigorous Physical Testing, Decarbonized Aggregates, Industry Mentorship |
| [`/faq`](file:///c:/Hacks/CT-Fair/app/faq/page.tsx) | **Protocols & Helpdesk Directory** | • IS 516 & NABL safety warnings<br>• Expandable FAQ accordion ([`faq-accordion.tsx`](file:///c:/Hacks/CT-Fair/components/public/faq-accordion.tsx))<br>• Secretariat contact directory (Registrar, Materials, Logistics) |
| [`/towers`](file:///c:/Hacks/CT-Fair/app/towers/page.tsx) | **3D Monumental Study Laboratory** | • Dedicated full-screen Three.js WebGL simulation of monolithic cyclopean masonry<br>• Day/Sunset/Storm atmospheric shader controls<br>• Structural annotations (Shikhara, Amalaka, Adhisthana plinth) |

---

### 2.2 Operational / Admin Management Surfaces

The operations console lives under [`/admin`](file:///c:/Hacks/CT-Fair/app/admin/page.tsx) with a unified technical blueprint shell ([`sidebar.tsx`](file:///c:/Hacks/CT-Fair/components/shell/sidebar.tsx) and [`topbar.tsx`](file:///c:/Hacks/CT-Fair/components/shell/topbar.tsx)):

| Route | Module Name | Current Capabilities |
|---|---|---|
| [`/admin`](file:///c:/Hacks/CT-Fair/app/admin/page.tsx) | **Operations Overview** | • Live metric cards (M.01–M.06): Total Registrations, Revenue in INR, Checked-in count, Volunteers, Capacity utilisation %<br>• SVG charts: Registration trend & Hourly attendance ring ([`charts.tsx`](file:///c:/Hacks/CT-Fair/components/charts/charts.tsx))<br>• Event capacity status list & Upcoming event schedule<br>• Live auto-refreshing activity feed ([`widgets.tsx`](file:///c:/Hacks/CT-Fair/components/overview/widgets.tsx)) |
| [`/admin/events`](file:///c:/Hacks/CT-Fair/app/admin/events/page.tsx) | **Event Master Catalogue** | • Status filtering (`ALL`, `OPEN`, `SOLD OUT`, `CLOSED`)<br>• Event cards with capacity meters, dates, fees, and quick action links<br>• Modal triggers for event configuration |
| [`/admin/registrations`](file:///c:/Hacks/CT-Fair/app/admin/registrations/page.tsx) | **Participant Ledger** | • Tabular participant list with real-time status badges (`CONFIRMED`, `PENDING`, `CHECKED IN`, `CANCELLED`)<br>• Payment reconciliation status (`PAID`, `PENDING`, `WAIVED`, `REFUNDED`)<br>• Search and filter by event and status<br>• Client-side CSV export functionality |
| [`/admin/attendance`](file:///c:/Hacks/CT-Fair/app/admin/attendance/page.tsx) | **Gate Control & Check-in** | • Real-time check-in console ([`checkin-console.tsx`](file:///c:/Hacks/CT-Fair/components/attendance/checkin-console.tsx))<br>• Simulated barcode/QR scanning engine<br>• Real-time duplicate scan prevention and alert banner<br>• Manual participant lookup by name or ticket ID |
| [`/admin/analytics`](file:///c:/Hacks/CT-Fair/app/admin/analytics/page.tsx) | **Conclave Analytics** | • Registration velocity vs. revenue charts<br>• Gate throughput per hour for Day 01<br>• Event revenue distribution bar charts<br>• Volunteer presence & attendance compliance tracking |
| [`/admin/announcements`](file:///c:/Hacks/CT-Fair/app/admin/announcements/page.tsx) | **Notice Broadcaster** | • Announcement composer with audience targeting (Global, Event-specific, Volunteers, Registered Delegates)<br>• Live announcement board ([`announcement-board.tsx`](file:///c:/Hacks/CT-Fair/components/announcements/announcement-board.tsx)) |
| [`/admin/settings`](file:///c:/Hacks/CT-Fair/app/admin/settings/page.tsx) | **Specification & Preferences** | • Fair configuration (dates, organizers, theme)<br>• Automation toggles (email receipts, duplicate scan override, capacity alerts)<br>• Access role breakdown (Admin: 3, Coordinator: 9, Volunteer: 142) |

---

## 3. Technology Stack & Infrastructure

- **Next.js Version:** `16.3.3` (App Router)
- **React Version:** `19.0.0`
- **Styling:** Tailwind CSS `v4.3.3` + `@tailwindcss/postcss` with custom CSS variables in [`globals.css`](file:///c:/Hacks/CT-Fair/app/globals.css) (architectural cement palette, hairline blueprint grid lines, hatch fills)
- **3D & Visual FX:** Three.js `^0.186.1`, custom WebGL GLSL shaders, GSAP `^3.15.0`, `fflate` `^0.8.3`
- **Component Primitives:** `@base-ui/react`, Radix/Shadcn UI foundation, Lucide React icons
- **Data Visualization:** Recharts `^3.10.1` and custom SVG stroke meters
- **Build & Deploy:**
  - `next.config.mjs`: Set to `output: 'export'` for static build output (`./out`)
  - `wrangler.toml`: Configured for Cloudflare Pages deployment (`pages:deploy`)
  - `Dockerfile` & `docker-compose.yml`: Multi-stage Docker containerization support

---

## 4. Current State Limitations & Technical Debt

1. **No Live Database:**
   All event records, delegate accounts, registration statuses, and volunteer rosters are hardcoded in [`lib/data.ts`](file:///c:/Hacks/CT-Fair/lib/data.ts). Reloading the browser resets all state.
2. **Simulated Authentication:**
   Both the participant dashboard (`/portal`) and admin panel (`/admin`) are openly accessible without session tokens, OAuth, or RBAC guards.
3. **Mock Payment Pipeline:**
   The checkout flow produces a simulated ticket code upon form submission without real Razorpay/UPI gateway API calls or webhook verification.
4. **Mock QR Scanner:**
   The check-in console uses a timer simulation (`setTimeout`) rather than accessing the device camera via WebRTC / `html5-qrcode`.
5. **Static Export Constraint:**
   Because `next.config.mjs` targets `output: 'export'`, server actions, dynamic server-side rendering, and server API routes (`/api/*`) are currently disabled.
