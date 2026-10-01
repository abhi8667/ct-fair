# Product Requirements Document — Concrete Fair 2026

**Product:** Concrete Fair 2026 — Event Discovery, Registration & Management Platform  
**Institution:** RV College of Engineering, Bengaluru  
**Department:** Department of Civil Engineering  
**Event dates:** **30 November – 1 December 2026**  
**Primary platform:** Responsive web application  
**Primary audiences:** Students from other colleges, civil engineering students, RVCE students, sponsors, industry professionals, faculty, alumni, general visitors

---

## 1. Executive Summary

Concrete Fair 2026 will be a complete digital event platform for discovering, registering for, paying for, and managing events associated with Concrete Fair.

The product will have two major experiences:

### Public experience
A premium editorial website that introduces Concrete Fair, communicates its identity, presents the event story, shows the festival timeline, and directs visitors toward event registration.

### Event platform
A functional system where participants can:

- Browse events
- Filter events by category
- View complete event information
- Register individually or as a team
- Pay for paid events
- Receive digital tickets
- Access QR codes
- View payment receipts
- Receive in-app announcements
- Check event-specific check-in status

### Organizer platform
A separate functional administration interface where organizers can:

- Create and manage events
- Configure registration
- Set pricing
- Set participant/team capacity
- Manage participants
- Manage payments
- Manage schedules
- Send announcements
- Scan QR codes
- Perform manual check-in
- Monitor attendance
- View analytics
- Manage event imagery

---

# 2. Product Vision

> **Turn Concrete Fair from an event into a complete digital experience.**

The website should guide visitors through:

```text
DISCOVER
   ↓
UNDERSTAND
   ↓
EXPLORE
   ↓
CHOOSE
   ↓
REGISTER
   ↓
PAY
   ↓
RECEIVE
   ↓
ATTEND
   ↓
CHECK IN
```

The public website communicates:

> **Tradition → Transformation → Tomorrow**

while the product functionality remains straightforward and reliable.

---

# 3. Core Design Philosophy

The website should feel like:

> **A premium architecture journal × civil-engineering festival × modern event platform**

It should not feel like:

- A generic college fest website
- A SaaS dashboard
- A futuristic AI landing page
- A ticket-booking clone
- An overly decorative architecture portfolio
- An AI-generated collage

### Core principle

> **Premium through restraint.**

---

# 4. Product Goals

## 4.1 Primary Goals

### G1 — Explain the event
A first-time visitor should understand:

- What Concrete Fair is
- Why it exists
- Who it is for
- When it happens
- Where it happens
- What they can participate in

### G2 — Drive event discovery
Visitors should easily discover:

- Competitions
- Cultural events
- Networking
- Quizzes

### G3 — Enable complete registration
Users should be able to register without relying on external forms.

### G4 — Support payments
Paid events must support secure online payment and verification.

### G5 — Generate tickets
Successful registrations must produce digital tickets with event-specific QR codes.

### G6 — Simplify event-day operations
Organizers should be able to:

- Scan tickets
- Search registrations manually
- Check participants into individual events
- See registration status

### G7 — Provide organizer visibility
Admins should have access to:

- Registration statistics
- Revenue
- Attendance
- Capacity
- Event performance
- Participant demographics

---

# 5. Non-Goals

The first version should not attempt to become:

- A general college ERP
- A permanent event-management SaaS product
- A social network
- A full CRM
- A public photo archive
- A messaging/social-media platform
- A loyalty system
- A generalized ticket marketplace

---

# 6. Target Users

## 6.1 Participant — Primary

Students from other colleges.

Needs:

- Discover events
- Compare events
- Understand eligibility
- Register
- Pay
- Receive tickets
- Attend
- Check in

## 6.2 Civil Engineering Student

Interested in:

- Technical competitions
- Quizzes
- Networking
- Civil engineering content

## 6.3 RVCE Student

Needs the same participant experience, with possible institution-specific eligibility or pricing in future.

## 6.4 Sponsor / Industry Visitor

Primarily needs:

- Event overview
- Schedule
- Industry interactions
- Networking opportunities
- Contact information

## 6.5 Organizer

Needs:

- Event management
- Participant management
- Payment management
- Capacity management
- Schedule management
- Check-in
- Announcements
- Analytics

## 6.6 Event Manager

Responsible for specific events.

Needs access to:

- Assigned events
- Registrations
- Participants
- Team information
- Check-in
- Event announcements
- Event analytics

---

# 7. Information Architecture

## Public Website

```text
/
├── Home
├── About
├── Events
├── Schedule
├── FAQ
├── Register
│   ├── Event Catalogue
│   └── Event Details
├── Login
└── Participant Dashboard
```

## Organizer System

```text
/admin
├── Dashboard
├── Events
│   ├── All Events
│   ├── Create Event
│   └── Edit Event
├── Registrations
├── Participants
├── Payments
├── Check-in
├── Schedule
├── Announcements
├── Analytics
└── Settings
```

---

# 8. Homepage Requirements

The homepage is an editorial landing experience, not the complete event catalogue.

## 8.1 Navigation

Primary links:

- About
- Events
- Schedule
- FAQ
- Register

Branding:

- Concrete Fair
- RVCE

Primary CTA:

`REGISTER`

---

# 9. Hero Section

## Content

```text
CONCRETE FAIR 2026

TRADITION
MEETS
TOMORROW

30 NOVEMBER — 1 DECEMBER
RVCE · BENGALURU

[ EXPLORE EVENTS ] [ REGISTER ]

COUNTDOWN
```

The hero should not contain unnecessary participant statistics.

## 9.1 Hero Visual

Combine:

- Raw stone
- Classical architecture
- Classical column/arch elements
- Modern concrete infrastructure
- Architectural geometry
- Subtle drafting lines
- Muted gold geometric accent

### Important

Avoid golden-looking pillars.

Classical architecture should remain:

- Stone
- Marble
- Grayscale
- Desaturated

Gold should exist only as a geometric/graphic accent.

---

# 10. Countdown

Countdown is located inside the hero.

Example:

```text
EVENT STARTS IN

12 DAYS
08 HOURS
42 MINUTES
19 SECONDS
```

Requirements:

- Real-time update
- Event start date/time as source
- Correct timezone handling
- Stop when event begins
- Accessible text representation

---

# 11. About Section

Immediately follows the hero.

Purpose:

Explain Concrete Fair as:

> A celebration of civil engineering.

Keep copy to approximately 2–3 sentences.

---

# 12. Story Section

## Theme

### TRADITION → TRANSFORMATION → TOMORROW

The story is a compact interactive sequence.

## 12.1 Tradition

Visual language:

- Classical Greek/Roman architecture
- Stone
- Columns
- Arches
- Monumental forms

## 12.2 Transformation

Visual progression:

```text
ARCHITECTURAL DRAWING
        ↓
BLUEPRINT
        ↓
CONSTRUCTION
        ↓
CONCRETE STRUCTURE
```

Possible visuals:

- Elevation drawings
- Structural diagrams
- Rebar
- Concrete formwork
- Bridges
- Modern structures

## 12.3 Tomorrow

Subtle future-facing engineering:

- Smart infrastructure
- Digital construction
- BIM
- Advanced materials
- Data-driven infrastructure
- Contemporary cities

Avoid:

- Robots
- Cyberpunk
- Neon
- Holograms
- Sci-fi interfaces
- Excessive AI symbolism

---

# 13. Story Animation

## Desktop

Use:

- Scroll-linked transitions
- Pinned moments
- Limited horizontal movement
- Image reveals
- Typography transitions

## Mobile

Use a simplified version.

Do not reproduce complex desktop pinned sequences if they hurt usability or performance.

---

# 14. Events Overview on Homepage

The homepage introduces event categories but does not become the full registration catalogue.

Categories:

- Competitions
- Cultural
- Networking
- Quizzes

CTA:

`EXPLORE ALL EVENTS`

or

`REGISTER`

---

# 15. Registration Entry Point

The homepage `Register` CTA leads to:

```text
/register
```

It should not directly open a registration form.

---

# 16. Registration Catalogue

Page title:

> **CHOOSE YOUR EVENT**

Filters:

```text
ALL
COMPETITIONS
CULTURAL
NETWORKING
QUIZZES
```

## 16.1 Event Grid

Every event has its own uploaded visual.

Cards should be spacious and editorial.

## 16.2 Event Card Information

Required:

- Event image
- Event name
- Category
- Date
- Time
- Venue
- Fee
- Registration status
- Explore action

Example:

```text
┌──────────────────────────────┐
│                              │
│         EVENT IMAGE          │
│                              │
├──────────────────────────────┤
│ COMPETITION                  │
│                              │
│ CONCRETE DESIGN CHALLENGE    │
│                              │
│ 30 NOV · 10:00 AM            │
│ Civil Seminar Hall           │
│                              │
│ ₹399               OPEN   →  │
└──────────────────────────────┘
```

---

# 17. Event Card Interaction

Desktop:

- Card expands on hover
- Image subtly scales
- Additional information appears
- CTA becomes prominent

Mobile:

- Tap interaction
- Expand/reveal behavior
- No hover dependency

---

# 18. Event Images

Organizers upload event visuals.

System enforces:

- Fixed aspect ratio
- Recommended resolution
- Consistent crop
- Preview
- No text baked into images

---

# 19. Event Detail Page

Structure:

```text
EVENT IMAGE

CATEGORY

EVENT NAME

DATE · TIME · VENUE
FEE · STATUS

REGISTER NOW

--------------------------------

ABOUT

RULES

ELIGIBILITY

SCHEDULE

PRIZES

TEAM DETAILS

FAQ

--------------------------------

REGISTER
```

This is a hybrid page:

**Editorial hero + structured information + prominent registration action.**

---

# 20. Event Information Model

## Basic

- Event ID
- Event name
- Slug
- Category
- Description
- Hero image
- Status

## Schedule

- Date
- Start time
- End time
- Venue

## Registration

- Individual/team/both
- Registration open date
- Registration close date
- Capacity
- Team size
- Eligibility

## Pricing

- Free/paid
- Price
- Pricing rules
- Pricing validity

## Competition

- Rules
- Prizes
- Qualification criteria

## Communication

- FAQ
- Event announcements
- Organizer contact

---

# 21. Event Status

Only three public statuses:

### OPEN
Registration available.

### CLOSED
Registration deadline passed or organizer closed registration.

### SOLD OUT
Capacity reached.

---

# 22. Registration Types

The platform supports:

## Individual

```text
Participant
→ Details
→ Payment
→ Confirmation
→ Ticket
```

## Team

```text
Team name
→ Captain
→ Add members
→ Participant details
→ Payment
→ Confirmation
→ Event tickets
```

Organizer configures whether an event supports:

- Individual
- Team
- Both

---

# 23. Pricing System

Each event can have flexible pricing.

Examples:

```text
Early Bird
Regular
Late
```

or:

```text
Student
General
Team
```

The event manager controls the pricing structure.

---

# 24. Capacity

Each event supports configurable capacity.

Examples:

```text
Maximum participants: 100
```

or:

```text
Maximum teams: 30
```

When capacity is reached:

```text
OPEN
   ↓
SOLD OUT
```

No waitlist in V1.

---

# 25. Registration Flow

## Guest

```text
Event
 ↓
Register
 ↓
Participant details
 ↓
Order summary
 ↓
Payment
 ↓
Confirmation
 ↓
Ticket
```

## Account

```text
Login / OTP
 ↓
Event
 ↓
Register
 ↓
Details
 ↓
Payment
 ↓
Confirmation
 ↓
Dashboard
```

---

# 26. Authentication

Selected method:

### Email OTP / Magic Link

No mandatory password.

Guest registration remains possible.

---

# 27. Checkout

Branded checkout experience:

```text
EVENT
        ↓
PARTICIPANT DETAILS
        ↓
ORDER SUMMARY
        ↓
PAYMENT
        ↓
CONFIRMATION
```

The payment experience should feel integrated with Concrete Fair.

---

# 28. Payment Requirements

For paid events:

1. Create pending registration
2. Create payment order
3. Process payment
4. Verify payment server-side
5. Confirm registration
6. Generate ticket
7. Generate receipt
8. Update dashboard

Never trust frontend payment success alone.

---

# 29. Payment Failure

Selected behavior:

> Failed/interrupted payment → registration is cancelled → user starts again.

Message:

> **Payment unsuccessful**

Action:

`TRY AGAIN`

---

# 30. Digital Ticket

Each successful registration generates a digital ticket.

Contains:

- Concrete Fair branding
- Event name
- Participant/team
- Date
- Time
- Venue
- Registration ID
- Event-specific QR

Visual direction:

**Editorial + physical-event ticket character**

---

# 31. QR System

QR is event-specific.

A participant registered for multiple events receives separate event registration/ticket QR codes.

---

# 32. Participant Dashboard

Visual direction:

**Editorial dashboard**, not a generic SaaS dashboard.

Contains:

### My Events

- Event
- Date
- Venue
- Status
- Ticket

### Registration

- Registration details
- Payment status
- Receipt

### Ticket

- Digital ticket
- QR

### Announcements

In-app announcements.

### Check-in

Simple status:

> **✓ CHECKED IN**

---

# 33. Check-in

Check-in is event-specific.

## Primary

QR scanner:

```text
SCAN
↓
VERIFY
↓
CHECK IN
```

## Fallback

Manual search by:

- Participant name
- Registration ID

---

# 34. Check-in Result

Successful:

> **✓ CHECKED IN**

Failed:

- Registration not found
- Invalid event ticket

No complicated attendance history is shown to participants.

---

# 35. Schedule

The public schedule uses a day-based timeline.

```text
DAY 01 · 30 NOV
DAY 02 · 01 DEC
```

Example:

```text
09:00
│
├── Event
│   Venue
│
10:30
│
├── Event
│   Venue
│
13:00
│
└── Event
    Venue
```

---

# 36. Schedule Filters

Users can filter by:

- Day
- Event category
- Venue

Clicking a schedule item opens the relevant event detail page.

---

# 37. FAQ

Two levels.

## Global FAQ

Examples:

- What is Concrete Fair?
- Who can participate?
- Where is it held?
- How do registrations work?
- Are paid events refundable?
- How does check-in work?

## Event FAQ

Specific event questions.

---

# 38. Announcements

Organizers can publish:

### Global announcements
Visible to all registered participants.

### Event-specific announcements
Visible only to participants registered for that event.

Notifications are **in-app only**.

---

# 39. Organizer Platform

The organizer system is more functional than the public site.

Public:

> Editorial / architectural

Admin:

> Professional / operational

---

# 40. Admin Dashboard

Overview metrics:

```text
TOTAL REGISTRATIONS
TOTAL REVENUE
ATTENDANCE
ACTIVE EVENTS
CAPACITY
```

Analytics:

- Registration trend
- Revenue trend
- Event popularity
- Attendance
- Capacity utilization
- Participant demographics

---

# 41. Event Management

Admin can:

- Create event
- Edit event
- Publish/unpublish event
- Upload event image
- Set category
- Set date/time
- Set venue
- Configure registration
- Configure pricing
- Configure capacity
- Configure eligibility
- Add rules
- Add prizes
- Add FAQs

---

# 42. Event Manager

Event Managers have access to assigned events.

They can:

- View registrations
- View participants
- Manage teams
- Check participants in
- Send event announcements
- View event analytics

They should not automatically have access to unrelated events.

---

# 43. Registration Management

Admin can view:

- Registration ID
- Participant
- College
- Event
- Registration type
- Payment status
- Registration status
- Check-in status
- Registration date

Filters:

- Event
- Category
- Payment status
- Check-in status
- College
- Date

---

# 44. Payment Management

Admin can view:

- Transaction ID
- Registration ID
- Event
- Amount
- Payment status
- Payment timestamp
- Participant
- Gateway reference

Maintain an auditable payment record.

---

# 45. Analytics

## Registration

- Total registrations
- Registrations per event
- Registrations by category
- Registration growth

## Revenue

- Gross revenue
- Revenue per event
- Revenue by day
- Paid vs free registrations

## Attendance

- Checked-in participants
- Attendance rate
- Event-specific attendance

## Capacity

- Capacity
- Remaining capacity
- Utilization

## Participant demographics

Depending on collected data:

- College
- Student category
- Other configured participant attributes

---

# 46. Footer

Very minimal:

```text
CONCRETE FAIR 2026

About
Events
Schedule
FAQ
Register

RV College of Engineering
Bengaluru

Instagram

© 2026 Concrete Fair
```

Only Instagram is required as the social link.

---

# 47. Visual Design System

## Palette

| Token | Role |
|---|---|
| Stone White | Primary background |
| Cement Grey | Secondary neutral |
| Concrete Slate | Dark sections |
| Deep Charcoal | Primary text |
| Accent Gold | Rare emphasis |

Gold should be used only for:

- Small highlights
- Active states
- Fine rules
- Small icons
- Geometric elements

Avoid large gold surfaces.

---

# 48. Typography

Three roles:

## Display Sans

For:

> CONCRETE FAIR 2026

Strong, modern, clean, high-impact.

## Editorial Serif

For:

> TRADITION  
> TRANSFORMATION  
> TOMORROW

Elegant and classical, used sparingly.

## Technical Sans

For:

- Dates
- Times
- Metadata
- Buttons
- Navigation
- Labels

Avoid excessive uppercase everywhere.

---

# 49. Layout System

Use:

- Fluid grids
- Asymmetric compositions
- Large whitespace
- Strong vertical alignment
- Thin rules
- Editorial margins
- Controlled card rounding

Avoid:

- Excessive rounded containers
- Dashboard-style nested cards
- Excessive shadows
- Floating glass panels

---

# 50. Card System

Cards should feel like editorial catalogue entries.

Characteristics:

- Strong image
- Fine border
- Restrained radius
- Clear typography
- Generous spacing
- Minimal metadata

Avoid generic SaaS card styling.

---

# 51. Architectural Graphic System

Use moderately:

- Blueprint lines
- Elevation marks
- Measurement lines
- Crosshairs
- Geometric circles
- Fine grids
- Structural axes
- Small drafting annotations

They should support composition rather than overwhelm it.

---

# 52. Texture

Use extremely subtle:

- Paper grain
- Stone grain
- Concrete texture

Keep opacity low.

---

# 53. Photography / Imagery

## Hero

Art-directed classical + modern architecture.

## Story

Architectural imagery representing:

**Tradition → Transformation → Tomorrow**

## Events

Organizer-provided images.

No dedicated public gallery in V1.

---

# 54. Animation System

Overall ratio:

**70% editorial / 30% interactive**

Use:

- Fade
- Slide
- Scale
- Pin
- Reveal
- Image movement
- Card expansion
- Scroll transitions

Avoid:

- Excessive parallax
- Continuous floating
- 3D objects everywhere
- Neon effects
- Cursor gimmicks
- Excessive morphing

---

# 55. Responsive Strategy

## Desktop

- Full editorial experience
- Large hero
- Architectural composition
- Pinned story sequences
- Large event cards
- Spacious schedule

## Tablet

Reduce:

- Grid columns
- Typography scale
- Story animation complexity

## Mobile

Prioritize:

- Navigation
- Event discovery
- Registration
- Schedule
- Ticket access

Story animation is simplified on mobile.

---

# 56. Accessibility

V1 supports standard accessibility:

- Semantic HTML
- Keyboard navigation
- Visible focus states
- Adequate contrast
- Accessible forms
- Accessible buttons
- Image alt text
- Reduced-motion support
- Screen-reader-friendly labels

---

# 57. Performance Requirements

Because of large architectural imagery and animation:

- Fast initial page load
- Responsive interaction
- Optimized images
- Lazy-loaded event imagery
- Responsive image sizes
- Minimal JavaScript on non-interactive sections

Animations must never block navigation.

---

# 58. Security Requirements

## Authentication

- Secure OTP/magic-link authentication
- Session expiry
- Secure token handling

## Authorization

Roles:

```text
Admin
Event Manager
Participant
```

## Payments

- Server-side payment verification
- Webhook verification
- Never trust frontend payment state

## QR

QR tokens should be:

- Unique
- Non-guessable
- Associated with registration
- Associated with event
- Invalidatable if necessary

---

# 59. Suggested Technical Architecture

```text
                    PUBLIC WEB
                        │
                        ▼
              React / Next.js Frontend
                        │
                 REST / API Layer
                        │
              ┌─────────┴─────────┐
              │                   │
         Application API      Auth Service
              │
       ┌──────┼────────┐
       │      │        │
    Events  Users   Registrations
       │      │        │
       └──────┼────────┘
              │
           Database
              │
      ┌───────┼────────┐
      │       │        │
   Payment   Storage   Notifications
   Gateway   /Images   In-App
```

---

# 60. Frontend

Recommended:

- Next.js / React
- TypeScript
- Tailwind CSS or custom CSS architecture
- Framer Motion
- GSAP only where complex scroll sequencing genuinely requires it

Reasons:

- SEO
- Strong image rendering
- Responsive UI
- Dynamic event data
- Authenticated dashboards
- Interactive schedule
- Payment flows

---

# 61. Backend

Recommended:

- Node.js
- TypeScript
- NestJS / Express / Fastify

Responsibilities:

- Authentication
- Event management
- Registration
- Payment verification
- Ticket generation
- QR validation
- Check-in
- Announcements
- Analytics

---

# 62. Database

Recommended:

**PostgreSQL**

Core relationships include:

```text
Users
Events
Registrations
Teams
Team Members
Payments
Tickets
Check-ins
Announcements
Venues
Schedules
Pricing
```

---

# 63. File Storage

Object storage for:

- Event images
- Rules PDFs
- Ticket assets
- Organizer uploads

Use CDN delivery for public images.

---

# 64. Core Database Entities

## User

```text
id
email
name
phone
college
role
created_at
```

## Event

```text
id
name
slug
category
description
image
venue
start_time
end_time
status
capacity
registration_open
registration_close
registration_type
```

## Pricing

```text
id
event_id
name
amount
valid_from
valid_until
participant_type
```

## Registration

```text
id
event_id
user_id
registration_type
status
amount
registered_at
```

## Team

```text
id
event_id
registration_id
name
captain_id
```

## Team Member

```text
id
team_id
user_id
role
```

## Payment

```text
id
registration_id
gateway
gateway_order_id
gateway_payment_id
amount
status
created_at
```

## Ticket

```text
id
registration_id
event_id
qr_token
issued_at
```

## Check-in

```text
id
ticket_id
event_id
checked_in_at
checked_in_by
```

## Announcement

```text
id
event_id nullable
title
body
created_at
```

---

# 65. Registration State Machine

```text
DRAFT
  ↓
PENDING_PAYMENT
  ↓
PAYMENT_FAILED
```

or:

```text
PENDING_PAYMENT
  ↓
PAYMENT_VERIFIED
  ↓
REGISTERED
  ↓
CHECKED_IN
```

Event closure is separate from individual registration status.

---

# 66. Event State Machine

```text
DRAFT
 ↓
PUBLISHED
 ↓
OPEN
 ↓
SOLD OUT
 ↓
CLOSED
```

An event can move from OPEN to CLOSED manually or automatically when the registration deadline passes.

---

# 67. Key User Stories

## Participant

### US-01
As a visitor, I want to understand Concrete Fair so I can decide whether to participate.

### US-02
As a visitor, I want to browse events by category so I can find something relevant.

### US-03
As a participant, I want complete event information before registering.

### US-04
As a participant, I want to register individually.

### US-05
As a participant, I want to register as a team.

### US-06
As a participant, I want to pay online.

### US-07
As a participant, I want confirmation after payment.

### US-08
As a participant, I want a digital ticket.

### US-09
As a participant, I want an event-specific QR.

### US-10
As a participant, I want to see my registration from my dashboard.

### US-11
As a participant, I want to receive event announcements.

### US-12
As a participant, I want to know whether I have checked in.

## Organizer

### US-13
As an organizer, I want to create events.

### US-14
As an organizer, I want to upload event images.

### US-15
As an organizer, I want to set registration capacity.

### US-16
As an organizer, I want to configure pricing.

### US-17
As an organizer, I want to view participants.

### US-18
As an organizer, I want to verify payments.

### US-19
As an organizer, I want to scan tickets.

### US-20
As an organizer, I want to manually search participants.

### US-21
As an organizer, I want to send announcements.

### US-22
As an organizer, I want event analytics.

### US-23
As an organizer, I want revenue analytics.

### US-24
As an organizer, I want attendance analytics.

---

# 68. Critical User Flows

## Flow 1 — Discover Event

```text
Home
 ↓
Events
 ↓
Category filter
 ↓
Event card
 ↓
Event detail
```

## Flow 2 — Register Free Event

```text
Event
 ↓
Register
 ↓
Participant details
 ↓
Confirm
 ↓
Registration successful
 ↓
Ticket generated
```

## Flow 3 — Register Paid Event

```text
Event
 ↓
Register
 ↓
Participant/team details
 ↓
Order summary
 ↓
Payment
 ↓
Server verification
 ↓
Registration confirmed
 ↓
Ticket generated
 ↓
Dashboard
```

## Flow 4 — Event-Day Check-in

```text
Participant shows QR
 ↓
Organizer scans
 ↓
System validates:
  - ticket
  - event
  - registration
 ↓
CHECKED IN
```

Fallback:

```text
Search name / ID
 ↓
Select registration
 ↓
Check in
```

---

# 69. Success Metrics

## Discovery

- Homepage → event catalogue click-through rate
- Event detail views
- Category usage
- Schedule interactions

## Registration

- Event detail → registration conversion
- Registration completion rate
- Payment success rate
- Free-event registration completion

## Operations

- Successful QR scans
- Manual check-ins
- Average check-in time
- Failed QR attempts

## Event

- Total registrations
- Paid registrations
- Revenue
- Event capacity utilization
- Attendance rate

---

# 70. MVP Scope

## Public

- Homepage
- About
- Story
- Events
- Event details
- Schedule
- FAQ
- Register catalogue

## Participant

- Guest registration
- OTP login
- Individual registration
- Team registration
- Payment
- Confirmation
- Digital ticket
- QR
- Dashboard
- Announcements
- Check-in status

## Admin

- Login
- Event CRUD
- Event images
- Pricing
- Capacity
- Registration management
- Payment tracking
- QR scanning
- Manual check-in
- Announcements
- Analytics

---

# 71. Phase 2

Potential additions:

- Advanced reporting
- Automated certificates
- Sponsor portal
- Volunteer management
- Waitlists
- Refund workflows
- Advanced notifications
- Personalized recommendations
- Event reviews/feedback
- More granular permissions

---

# 72. Acceptance Criteria

## Public Site

- [ ] Homepage loads correctly on desktop/mobile
- [ ] Hero displays correct event date
- [ ] Countdown works
- [ ] About section is present
- [ ] Story sequence works
- [ ] Events can be discovered
- [ ] Schedule works
- [ ] FAQ works
- [ ] Register leads to event catalogue

## Event System

- [ ] Events can be created
- [ ] Images upload correctly
- [ ] Categories work
- [ ] Status changes correctly
- [ ] Capacity limits work
- [ ] Pricing works
- [ ] Individual registration works
- [ ] Team registration works

## Payment

- [ ] Payment order generated
- [ ] Successful payment verified server-side
- [ ] Failed payment handled correctly
- [ ] Registration is not falsely confirmed
- [ ] Receipt is generated

## Ticketing

- [ ] Ticket generated after confirmed registration
- [ ] QR is unique
- [ ] QR belongs to correct event
- [ ] Ticket accessible from dashboard

## Check-in

- [ ] QR scanner works
- [ ] Invalid QR rejected
- [ ] Wrong-event QR rejected
- [ ] Manual search works
- [ ] Check-in status updates correctly

## Admin

- [ ] Event managers see authorized events
- [ ] Admin sees all events
- [ ] Analytics calculate correctly
- [ ] Announcements reach intended participants

---

# 73. Final Design Direction

The entire product is governed by:

# **TRADITION MEETS TOMORROW**

Not as a slogan pasted onto the website, but as the design system itself.

### Tradition

Stone  
Classical architecture  
Serif typography  
Monumental forms

### Transformation

Concrete  
Engineering  
Blueprints  
Construction  
Modern infrastructure

### Tomorrow

Contemporary structures  
Digital engineering  
Smart infrastructure  
Advanced materials

The future remains quiet and sophisticated.

---

# 74. Final Brand Mood

**Premium · Minimal · Architectural · Festival**

With:

- Stone White
- Cement Grey
- Concrete Slate
- Deep Charcoal
- Tiny amounts of Accent Gold
- Modern sans
- Classical serif
- Architectural photography
- Subtle physical texture
- Moderate technical graphics
- Clean editorial layouts
- Fluid responsive design

### Guiding principle

> **Ancient foundations. Modern possibilities.**

### Product principle

> **Home tells the story. Register helps people participate. Admin makes the event run.**
