export type EventStatus = 'OPEN' | 'CLOSED' | 'SOLD OUT'

export type FairEvent = {
  id: string
  code: string
  name: string
  category: 'Heavy Engineering' | 'Structural Design' | 'Material Innovation' | 'Computational BIM' | 'Symposium & Lecture' | 'Quizzes & Cultural' | 'Competition' | 'Workshop' | 'Field'
  date: string
  day: 'Day 01' | 'Day 02'
  time: string
  venue: string
  registered: number
  capacity: number
  checkedIn: number
  fee: number
  status: EventStatus
  image: string
  coordinator: string
  description?: string
  teamSize?: string
  prizes?: string
}

export const events: FairEvent[] = [
  {
    id: 'canoe-x',
    code: 'CF-01',
    name: 'Canoe-X: Concrete Floatation Challenge',
    category: 'Heavy Engineering',
    date: '30 Nov 2026',
    day: 'Day 01',
    time: 'TBA',
    venue: 'TBA',
    registered: 24,
    capacity: 28,
    checkedIn: 22,
    fee: 1200,
    status: 'OPEN',
    image: '/images/event-concrete.png',
    coordinator: 'TBA',
    description: 'Design, cast, and paddle a 4.5-meter buoyant lightweight concrete canoe. Tested for compressive buoyancy, hydrodynamic drag, and rapid steering on the campus aqua-dock.',
    teamSize: '4–5 members',
    prizes: 'TBA',
  },
  {
    id: 'seismic-shake',
    code: 'CF-02',
    name: 'Seismic Integrity: Shake-Table Symposium',
    category: 'Structural Design',
    date: '30 Nov 2026',
    day: 'Day 01',
    time: 'TBA',
    venue: 'TBA',
    registered: 48,
    capacity: 50,
    checkedIn: 45,
    fee: 800,
    status: 'OPEN',
    image: '/images/event-column.png',
    coordinator: 'TBA',
    description: 'Fabricate multi-story scaled shear frames under strict mass constraints. Structural models are subjected to progressive lateral base excitation waves.',
    teamSize: '2–3 members',
    prizes: 'TBA',
  },
  {
    id: 'bio-concrete',
    code: 'CF-03',
    name: 'Bio-Concrete & Bacterial Healing Workshop',
    category: 'Material Innovation',
    date: '30 Nov 2026',
    day: 'Day 01',
    time: 'TBA',
    venue: 'TBA',
    registered: 60,
    capacity: 60,
    checkedIn: 58,
    fee: 600,
    status: 'OPEN',
    image: '/images/event-concrete.png',
    coordinator: 'TBA',
    description: 'Hands-on laboratory culture of Bacillus pseudofirmus bacteria infused inside calcium lactate nutrient capsules to autonomously precipitate limestone sealing micro-fissures.',
    teamSize: 'Individual / Delegate',
    prizes: 'TBA',
  },
  {
    id: 'bridge-build',
    code: 'CF-04',
    name: 'Bridge It — Structural Model Challenge',
    category: 'Structural Design',
    date: '30 Nov 2026',
    day: 'Day 01',
    time: 'TBA',
    venue: 'TBA',
    registered: 184,
    capacity: 200,
    checkedIn: 162,
    fee: 400,
    status: 'OPEN',
    image: '/images/event-bridge.png',
    coordinator: 'TBA',
    description: 'Fabricate an efficient truss bridge using restricted balsa and composite binders. Evaluated for maximum load-to-weight structural efficiency.',
    teamSize: '3–4 members',
    prizes: 'TBA',
  },
  {
    id: 'cad-sprint',
    code: 'CF-05',
    name: 'AutoCAD & Revit Rapid Model-Athon',
    category: 'Computational BIM',
    date: '01 Dec 2026',
    day: 'Day 02',
    time: 'TBA',
    venue: 'TBA',
    registered: 76,
    capacity: 90,
    checkedIn: 0,
    fee: 500,
    status: 'OPEN',
    image: '/images/event-blueprint.png',
    coordinator: 'TBA',
    description: '6-hour live computational sprint. Turn unstructured architectural sketches into fully coordinated LOD-400 structural BIM models with automated rebar clash detection.',
    teamSize: 'Individual or Duo',
    prizes: 'TBA',
  },
  {
    id: 'concrete-cube',
    code: 'CF-06',
    name: 'Cube Strength — Mix Design Contest',
    category: 'Material Innovation',
    date: '01 Dec 2026',
    day: 'Day 02',
    time: 'TBA',
    venue: 'TBA',
    registered: 120,
    capacity: 120,
    checkedIn: 0,
    fee: 350,
    status: 'OPEN',
    image: '/images/event-concrete.png',
    coordinator: 'TBA',
    description: 'Target precise M60 high-performance concrete cylinder mix ratios. 28-day water-cured specimens undergo crushing in the calibrated 2,000 kN UTM.',
    teamSize: '2–3 members',
    prizes: 'TBA',
  },
  {
    id: 'heritage-talk',
    code: 'CF-07',
    name: 'Ancient Foundations — Heritage Structures Keynote',
    category: 'Symposium & Lecture',
    date: '30 Nov 2026',
    day: 'Day 01',
    time: 'TBA',
    venue: 'TBA',
    registered: 412,
    capacity: 600,
    checkedIn: 390,
    fee: 0,
    status: 'OPEN',
    image: '/images/event-column.png',
    coordinator: 'TBA',
    description: 'Keynote opening lecture examining Roman pozzolanic mortars, Vedic monolithic temples, and what 2,000-year-old structures teach modern low-carbon concrete design.',
    teamSize: 'All Registered Delegates',
    prizes: 'TBA',
  },
  {
    id: 'brutalist-symposium',
    code: 'CF-08',
    name: 'Modern Possibilities — Infrastructure Conclave',
    category: 'Symposium & Lecture',
    date: '01 Dec 2026',
    day: 'Day 02',
    time: 'TBA',
    venue: 'TBA',
    registered: 238,
    capacity: 300,
    checkedIn: 0,
    fee: 500,
    status: 'OPEN',
    image: '/images/event-brutalist.png',
    coordinator: 'TBA',
    description: 'Titan infrastructure conclave with industry directors exploring LC3 calcined clays, pre-cast metro segments, and zero-clinker binders.',
    teamSize: 'Open to All',
    prizes: 'TBA',
  },
  {
    id: 'survey-hunt',
    code: 'CF-09',
    name: 'Total Station — Geodetic Treasure Hunt',
    category: 'Field',
    date: '01 Dec 2026',
    day: 'Day 02',
    time: 'TBA',
    venue: 'TBA',
    registered: 64,
    capacity: 80,
    checkedIn: 0,
    fee: 300,
    status: 'OPEN',
    image: '/images/event-survey.png',
    coordinator: 'TBA',
    description: 'High-precision spatial orienteering using robotic total stations and digital levelling instruments across challenging campus terrain contours.',
    teamSize: '3 members',
    prizes: 'TBA',
  },
  {
    id: 'truss-quiz',
    code: 'CF-10',
    name: 'Truss & Torsion: National Civil Quiz',
    category: 'Quizzes & Cultural',
    date: '30 Nov 2026',
    day: 'Day 01',
    time: 'TBA',
    venue: 'TBA',
    registered: 92,
    capacity: 100,
    checkedIn: 88,
    fee: 150,
    status: 'OPEN',
    image: '/images/event-blueprint.png',
    coordinator: 'TBA',
    description: 'Fast-paced buzzer rounds on structural mechanics, concrete history, monumental mega-structures, IS code trivia, and geotechnical failures.',
    teamSize: '2 members',
    prizes: 'TBA',
  },
  {
    id: 'concrete-bowling',
    code: 'CF-11',
    name: 'Heavy Aggregate Bowling & Ballistic Test',
    category: 'Quizzes & Cultural',
    date: '01 Dec 2026',
    day: 'Day 02',
    time: 'TBA',
    venue: 'TBA',
    registered: 50,
    capacity: 60,
    checkedIn: 0,
    fee: 200,
    status: 'OPEN',
    image: '/images/event-concrete.png',
    coordinator: 'TBA',
    description: 'Hand-cast concrete bowling balls rolled along outdoor banked runway pins to test dynamic impact toughness and fracture resistance under crowd cheering.',
    teamSize: 'Fun Individual / Duo',
    prizes: 'TBA',
  },
]

export type RegStatus = 'CONFIRMED' | 'PENDING' | 'CHECKED IN' | 'CANCELLED'
export type PayStatus = 'PAID' | 'PENDING' | 'WAIVED' | 'REFUNDED'

export type Registration = {
  id: string
  name: string
  college: string
  eventId: string
  type: 'Individual' | 'Team' | 'Faculty' | 'Delegate'
  payment: PayStatus
  amount: number
  ticket: string
  date: string
  status: RegStatus
  checkInTime?: string
  teamName?: string
  teamCount?: number
}

export const registrations: Registration[] = [
  { id: 'r1', name: 'Aditi Kulkarni', college: 'RV College of Engineering', eventId: 'canoe-x', type: 'Team', payment: 'PAID', amount: 1200, ticket: 'CF26-CX-0412', date: '18 Oct 2026', status: 'CHECKED IN', checkInTime: '09:12', teamName: 'Arcus Hydro-Works', teamCount: 4 },
  { id: 'r2', name: 'Vikram Nair', college: 'B.M.S. College of Engineering', eventId: 'seismic-shake', type: 'Team', payment: 'PAID', amount: 800, ticket: 'CF26-SS-0118', date: '19 Oct 2026', status: 'CHECKED IN', checkInTime: '13:48', teamName: 'Seismic Shield', teamCount: 3 },
  { id: 'r3', name: 'Sneha Iyer', college: 'M.S. Ramaiah Institute of Tech', eventId: 'heritage-talk', type: 'Delegate', payment: 'WAIVED', amount: 0, ticket: 'CF26-HT-0277', date: '20 Oct 2026', status: 'CONFIRMED' },
  { id: 'r4', name: 'Rahul Deshpande', college: 'PES University', eventId: 'cad-sprint', type: 'Individual', payment: 'PENDING', amount: 500, ticket: 'CF26-CS-0051', date: '21 Oct 2026', status: 'PENDING' },
  { id: 'r5', name: 'Meera Joshi', college: 'RVCE', eventId: 'brutalist-symposium', type: 'Faculty', payment: 'PAID', amount: 500, ticket: 'CF26-BS-0190', date: '22 Oct 2026', status: 'CONFIRMED' },
  { id: 'r6', name: 'Arjun Reddy', college: 'NIE Mysuru', eventId: 'survey-hunt', type: 'Team', payment: 'PAID', amount: 300, ticket: 'CF26-SH-0033', date: '22 Oct 2026', status: 'CONFIRMED', teamName: 'Total Surveyors', teamCount: 3 },
  { id: 'r7', name: 'Kavya Hegde', college: 'SJCE Mysuru', eventId: 'bridge-build', type: 'Team', payment: 'PAID', amount: 400, ticket: 'CF26-BB-0388', date: '23 Oct 2026', status: 'CHECKED IN', checkInTime: '09:21', teamName: 'Truss Dynamics', teamCount: 4 },
  { id: 'r8', name: 'Nikhil Bhat', college: 'Dayananda Sagar College', eventId: 'concrete-cube', type: 'Individual', payment: 'REFUNDED', amount: 350, ticket: 'CF26-CC-0097', date: '24 Oct 2026', status: 'CANCELLED' },
  { id: 'r9', name: 'Ishaan Verma', college: 'RVCE', eventId: 'heritage-talk', type: 'Individual', payment: 'WAIVED', amount: 0, ticket: 'CF26-HT-0312', date: '25 Oct 2026', status: 'CONFIRMED' },
  { id: 'r10', name: 'Pooja Shenoy', college: 'NITK Surathkal', eventId: 'brutalist-symposium', type: 'Delegate', payment: 'PAID', amount: 500, ticket: 'CF26-BS-0204', date: '26 Oct 2026', status: 'CONFIRMED' },
  { id: 'r11', name: 'Siddharth Rao', college: 'Bangalore Institute of Tech', eventId: 'bio-concrete', type: 'Individual', payment: 'PAID', amount: 600, ticket: 'CF26-BC-0066', date: '27 Oct 2026', status: 'CONFIRMED' },
  { id: 'r12', name: 'Tanvi Gowda', college: 'RVCE', eventId: 'bridge-build', type: 'Team', payment: 'PENDING', amount: 400, ticket: 'CF26-BB-0421', date: '28 Oct 2026', status: 'PENDING' },
  { id: 'r13', name: 'Harsha Murthy', college: 'CMRIT Bengaluru', eventId: 'concrete-cube', type: 'Team', payment: 'PAID', amount: 350, ticket: 'CF26-CC-0121', date: '28 Oct 2026', status: 'CHECKED IN', checkInTime: '13:55' },
  { id: 'r14', name: 'Divya Prakash', college: 'Christ University', eventId: 'heritage-talk', type: 'Individual', payment: 'WAIVED', amount: 0, ticket: 'CF26-HT-0340', date: '29 Oct 2026', status: 'CONFIRMED' },
  { id: 'r15', name: 'Manoj Kumar', college: 'RVCE', eventId: 'truss-quiz', type: 'Team', payment: 'PAID', amount: 150, ticket: 'CF26-TQ-0041', date: '29 Oct 2026', status: 'CONFIRMED' },
  { id: 'r16', name: 'Ritika Sen', college: 'Indian Institute of Science (IISc)', eventId: 'brutalist-symposium', type: 'Faculty', payment: 'PAID', amount: 500, ticket: 'CF26-BS-0219', date: '30 Oct 2026', status: 'CONFIRMED' },
]

export type VolunteerTeam = 'CORE' | 'EVENT TEAM' | 'REGISTRATION' | 'TECH' | 'LOGISTICS'

export type Volunteer = {
  id: string
  name: string
  usn: string
  team: VolunteerTeam
  role: string
  shift: string
  eventId: string | null
  attendance: number
  status: 'ON DUTY' | 'OFF DUTY' | 'UNASSIGNED' | 'ON BREAK'
}

export const volunteers: Volunteer[] = [
  { id: 'v1', name: 'Shreya Patil', usn: '1RV22CV041', team: 'CORE', role: 'Operations Lead', shift: '08:00 — 18:00', eventId: null, attendance: 100, status: 'ON DUTY' },
  { id: 'v2', name: 'Aman Gupta', usn: '1RV22CV007', team: 'EVENT TEAM', role: 'Flume Bay Marshal', shift: '08:30 — 13:30', eventId: 'canoe-x', attendance: 96, status: 'ON DUTY' },
  { id: 'v3', name: 'Neha Krishnan', usn: '1RV23CV058', team: 'REGISTRATION', role: 'Desk Lead', shift: '08:00 — 12:00', eventId: 'canoe-x', attendance: 100, status: 'ON DUTY' },
  { id: 'v4', name: 'Rohit Shankar', usn: '1RV23CV022', team: 'TECH', role: 'QR Verification Agent', shift: '08:00 — 17:00', eventId: null, attendance: 92, status: 'ON DUTY' },
  { id: 'v5', name: 'Ananya Pillai', usn: '1RV24CV013', team: 'LOGISTICS', role: 'Batch Aggregate Handler', shift: '13:00 — 17:30', eventId: 'concrete-cube', attendance: 88, status: 'ON BREAK' },
  { id: 'v6', name: 'Karan Malhotra', usn: '1RV22CV030', team: 'EVENT TEAM', role: 'UTM Testing Marshal', shift: '13:30 — 17:30', eventId: 'seismic-shake', attendance: 94, status: 'ON DUTY' },
  { id: 'v7', name: 'Lakshmi Varma', usn: '1RV23CV064', team: 'REGISTRATION', role: 'Check-in Agent', shift: '09:00 — 12:00', eventId: 'heritage-talk', attendance: 0, status: 'OFF DUTY' },
  { id: 'v8', name: 'Pranav Iyengar', usn: '1RV24CV005', team: 'TECH', role: 'AV Rig & Acoustic Setup', shift: '09:30 — 12:00', eventId: 'heritage-talk', attendance: 0, status: 'OFF DUTY' },
  { id: 'v9', name: 'Zoya Khan', usn: '1RV23CV071', team: 'CORE', role: 'VIP & Faculty Liaison', shift: '08:00 — 18:00', eventId: null, attendance: 98, status: 'ON DUTY' },
  { id: 'v10', name: 'Tejas Gowda', usn: '1RV24CV039', team: 'LOGISTICS', role: 'Hydrology Pump Station', shift: '09:00 — 15:00', eventId: 'canoe-x', attendance: 85, status: 'ON DUTY' },
  { id: 'v11', name: 'Bhavana Rao', usn: '1RV24CV044', team: 'EVENT TEAM', role: 'Deflection Strain Recorder', shift: '10:00 — 16:00', eventId: 'bridge-build', attendance: 90, status: 'ON DUTY' },
  { id: 'v12', name: 'Dhruv Kamath', usn: '1RV23CV019', team: 'TECH', role: 'Local Network & Telemetry', shift: '08:00 — 14:00', eventId: null, attendance: 90, status: 'ON DUTY' },
]

export const registrationTrend = [
  { date: '10 Oct', registrations: 42, revenue: 21200 },
  { date: '14 Oct', registrations: 58, revenue: 29400 },
  { date: '18 Oct', registrations: 71, revenue: 38800 },
  { date: '22 Oct', registrations: 96, revenue: 52100 },
  { date: '25 Oct', registrations: 88, revenue: 47600 },
  { date: '27 Oct', registrations: 124, revenue: 65900 },
  { date: '28 Oct', registrations: 141, revenue: 78200 },
  { date: '29 Oct', registrations: 153, revenue: 86700 },
  { date: '30 Oct', registrations: 182, revenue: 104800 },
  { date: '31 Oct', registrations: 198, revenue: 119300 },
  { date: '01 Nov', registrations: 171, revenue: 95500 },
  { date: '02 Nov', registrations: 160, revenue: 89400 },
]

export const hourlyAttendance = [
  { hour: '08:00', checkins: 28 },
  { hour: '09:00', checkins: 142 },
  { hour: '10:00', checkins: 56 },
  { hour: '11:00', checkins: 22 },
  { hour: '12:00', checkins: 14 },
  { hour: '13:00', checkins: 78 },
  { hour: '14:00', checkins: 62 },
  { hour: '15:00', checkins: 19 },
]

export const volunteerAttendance = [
  { day: 'Setup (29 Nov)', present: 38, expected: 42 },
  { day: 'Day 01 (30 Nov)', present: 61, expected: 64 },
  { day: 'Day 02 (01 Dec)', present: 0, expected: 66 },
]

export const activity = [
  { time: '14:02', actor: 'Neha K.', action: 'checked in', target: 'Harsha Murthy', meta: 'CF-06', kind: 'checkin' },
  { time: '13:55', actor: 'System', action: 'marked sold out', target: 'Cube Strength', meta: 'CF-06', kind: 'status' },
  { time: '13:41', actor: 'Razorpay', action: 'payment received', target: '₹ 500 — Ritika Sen', meta: 'CF-08', kind: 'payment' },
  { time: '13:20', actor: 'Shreya P.', action: 'published', target: 'Canoe-X hull weighing begins at Dock A', meta: 'Global', kind: 'announcement' },
  { time: '12:58', actor: 'Rohit S.', action: 'assigned', target: '3 volunteers to Earthquake Lab', meta: 'CF-02', kind: 'volunteer' },
  { time: '12:30', actor: 'Kavya H.', action: 'registered', target: 'Team Arcus (4)', meta: 'CF-04', kind: 'registration' },
] as const

export type Announcement = {
  id: string
  title: string
  body: string
  scope: 'Global' | string
  audience: string
  status: 'PUBLISHED' | 'SCHEDULED' | 'DRAFT'
  time: string
  author: string
}

export const announcements: Announcement[] = [
  { id: 'a1', title: 'Canoe-X Flotation Weighing Protocol', body: 'All registered canoe entries must report to Aqua Flume Dock at 09:30 AM for hull inspection, wall thickness ultrasonic gauge checks, and buoyancy verification before launch.', scope: 'CF-01', audience: 'Participants', status: 'PUBLISHED', time: '30 Nov · 07:30', author: 'Prof. Ananya Rao' },
  { id: 'a2', title: 'Safety Footwear & Goggles Mandatory at Bay A', body: 'Steel-toed boots and shatterproof eye protection are strictly enforced in Heavy Testing Bay A and Earthquake Lab. Equipment is available at the Safety Counter.', scope: 'Global', audience: 'Everyone', status: 'PUBLISHED', time: '30 Nov · 08:15', author: 'Shreya Patil' },
  { id: 'a3', title: 'Keynote Seating Protocol: Main Auditorium', body: 'Doors open at 08:00 AM for the Inaugural Address by Dr. A. Ramanathan (L&T). Digital QR badge required for express turnstile entry.', scope: 'CF-07', audience: 'Registered', status: 'PUBLISHED', time: '30 Nov · 08:00', author: 'Prof. Ananya Rao' },
  { id: 'a4', title: 'Day 02 Volunteer Briefing at 07:45 AM', body: 'All Day 02 marshals report to the Civil Department Foyer for UTM sensor calibration checks and delegate registration desk assignments.', scope: 'Global', audience: 'Volunteers', status: 'SCHEDULED', time: '30 Nov · 19:00', author: 'Shreya Patil' },
]

export const coordinators = [
  { id: 'c1', name: 'TBA', title: 'Faculty Coordinator · Structural Lab & Keynotes', initials: 'TB' },
  { id: 'c2', name: 'TBA', title: 'Faculty Coordinator · Materials & Bio-Concrete', initials: 'TB' },
  { id: 'c3', name: 'TBA', title: 'Student General Secretary · Technical & BIM', initials: 'TB' },
]

export function getEvent(id: string | null) {
  return events.find((e) => e.id === id)
}

export const totals = (() => {
  const registered = events.reduce((s, e) => s + e.registered, 0)
  const capacity = events.reduce((s, e) => s + e.capacity, 0)
  const checkedIn = events.reduce((s, e) => s + e.checkedIn, 0)
  const revenue = events.reduce((s, e) => s + e.registered * e.fee, 0)
  return { registered, capacity, checkedIn, revenue, volunteers: 142, events: events.length }
})()

export const inr = (n: number) => '₹ ' + n.toLocaleString('en-IN')

// Current logged in delegate mock for the Participant Portal
export const currentDelegate = {
  id: 'CF26-DEL-8942',
  name: 'Aditi Kulkarni',
  email: 'aditi.kulkarni@rvce.edu.in',
  phone: '+91 98450 12894',
  college: 'R.V. College of Engineering, Bengaluru',
  department: 'Department of Civil Engineering',
  usn: '1RV22CV014',
  role: 'Undergraduate Student Delegate',
  accessLevel: 'ALL-ACCESS CONCLAVE BADGE',
  registeredEvents: [
    {
      eventId: 'canoe-x',
      eventName: 'Canoe-X: Concrete Floatation Challenge',
      ticketId: 'CF26-CX-0412',
      category: 'Heavy Engineering',
      day: 'Day 01 // 30 Nov',
      time: '10:00 — 14:00',
      venue: 'Aqua Flume Dock & Hydrology Tank',
      reportingTime: '09:30 AM',
      teamName: 'Arcus Hydro-Works',
      teamRole: 'Captain & Mix Specialist',
      teamMembers: ['Aditi Kulkarni (RVCE)', 'Varun Shenoy (RVCE)', 'Pooja Hegde (RVCE)', 'Naveen Kumar (RVCE)'],
      status: 'CONFIRMED',
      payment: 'PAID',
      amount: 1200,
      ppeRequired: 'Life Jacket (Provided) + Non-slip deck footwear',
    },
    {
      eventId: 'bio-concrete',
      eventName: 'Bio-Concrete & Bacterial Healing Workshop',
      ticketId: 'CF26-BC-0066',
      category: 'Material Innovation',
      day: 'Day 01 // 30 Nov',
      time: '14:00 — 17:30',
      venue: 'Materials Testing Lab 02',
      reportingTime: '13:45 PM',
      status: 'CONFIRMED',
      payment: 'PAID',
      amount: 600,
      ppeRequired: 'Lab Coat & Latex Gloves (Provided) + Safety Goggles',
    },
    {
      eventId: 'heritage-talk',
      eventName: 'Ancient Foundations — Heritage Structures Keynote',
      ticketId: 'CF26-HT-0277',
      category: 'Symposium & Lecture',
      day: 'Day 01 // 30 Nov',
      time: '08:30 — 09:45',
      venue: 'Main Auditorium',
      reportingTime: '08:15 AM',
      status: 'CONFIRMED',
      payment: 'WAIVED',
      amount: 0,
      ppeRequired: 'None',
    },
    {
      eventId: 'brutalist-symposium',
      eventName: 'Modern Possibilities — Infrastructure Conclave',
      ticketId: 'CF26-BS-0190',
      category: 'Symposium & Lecture',
      day: 'Day 02 // 01 Dec',
      time: '14:00 — 17:30',
      venue: 'Grand Plaza Amphitheatre',
      reportingTime: '13:45 PM',
      status: 'CONFIRMED',
      payment: 'PAID',
      amount: 500,
      ppeRequired: 'None',
    },
  ],
  payments: [
    {
      invoiceId: 'CF26-INV-1092',
      transactionId: 'TXN-882193-HDFC',
      date: '18 Oct 2026, 14:22 IST',
      items: [
        { desc: 'Canoe-X Team Entry (Arcus Hydro-Works)', amount: 1200 },
        { desc: 'Bio-Concrete Lab Workshop Delegate Pass', amount: 600 },
        { desc: 'Infrastructure Conclave Pass', amount: 500 },
      ],
      subtotal: 2300,
      gst: 0,
      total: 2300,
      status: 'PAID',
      method: 'UPI / HDFC NetBanking (Ref #4192083)',
    },
  ],
}
