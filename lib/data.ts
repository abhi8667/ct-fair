export type EventStatus = 'OPEN' | 'CLOSED' | 'SOLD OUT'

export type FairEvent = {
  id: string
  code: string
  name: string
  category: 'Heavy Engineering' | 'Structural Design' | 'Material Innovation' | 'Computational BIM' | 'Symposium & Lecture' | 'Quizzes & Cultural' | 'Competition' | 'Workshop' | 'Field' | 'Technical' | 'Non-Technical'
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
  subtitle?: string
  eventType?: 'Technical' | 'Non-Technical'
  rounds?: { name: string; details: string }[]
}

export const events: FairEvent[] = [
  // =========================================================================
  // DAY 1 — DESIGN, TEST, PLAN AND BUILD (30 NOV 2026)
  // =========================================================================
  {
    id: 'conmix',
    code: 'CF-01',
    name: 'CONmix: Mix Design Challenge',
    subtitle: 'Can you design the perfect concrete mix and prove its performance?',
    category: 'Material Innovation',
    eventType: 'Technical',
    date: '30 Nov 2026',
    day: 'Day 01',
    time: '09:30 AM',
    venue: 'Concrete & Materials Testing Lab',
    registered: 42,
    capacity: 60,
    checkedIn: 0,
    fee: 450,
    status: 'OPEN',
    image: '/images/card-cubes.jpg',
    coordinator: 'ICI Student Chapter',
    description: 'Can you design the perfect concrete mix and prove its performance? Prepare a target mix, conduct slump and workability tests, and cast concrete specimens. After 20 hours, specimens will be tested under a UTM for compressive strength to determine the champion mix.',
    teamSize: '3 participants',
    prizes: 'TBA',
    rounds: [
      { name: 'Round 1 — Technical Quiz', details: 'Test your knowledge of concrete mix design principles and relevant IS codes through a technical written quiz.' },
      { name: 'Round 2 — Mix Design Challenge', details: 'Prepare mix design, conduct slump and workability tests, cast concrete specimens. After 20 hours, tested under UTM for compressive strength.' }
    ]
  },
  {
    id: 'conarch',
    code: 'CF-02',
    name: 'CONarch: Arch Design & Build',
    subtitle: 'Design with purpose. Build with precision.',
    category: 'Structural Design',
    eventType: 'Technical',
    date: '30 Nov 2026',
    day: 'Day 01',
    time: '11:00 AM',
    venue: 'Structural Fabrication Yard',
    registered: 36,
    capacity: 48,
    checkedIn: 0,
    fee: 500,
    status: 'OPEN',
    image: '/images/event-bridge.png',
    coordinator: 'ICI Student Chapter',
    description: 'Transform structural concepts into reality through a challenge that combines design creativity and construction skills. Draft your architectural arch or bridge on paper and construct it under strict load-bearing parameters.',
    teamSize: '4 participants',
    rounds: [
      { name: 'Round 1: Paper Drafting', details: 'Design an arch or bridge on drafting paper incorporating structural mechanics and moment distribution.' },
      { name: 'Round 2: Construction & Testing', details: 'Build the designed arch or bridge using provided structural materials and submit to center-point loading.' }
    ]
  },
  {
    id: 'conzine',
    code: 'CF-03',
    name: 'CONzine: Smart City Designing',
    subtitle: 'Imagine the cities of tomorrow and design a smarter future.',
    category: 'Computational BIM',
    eventType: 'Technical',
    date: '30 Nov 2026',
    day: 'Day 01',
    time: '02:00 PM',
    venue: 'CAD & GIS Modeling Studio',
    registered: 28,
    capacity: 40,
    checkedIn: 0,
    fee: 400,
    status: 'OPEN',
    image: '/images/event-blueprint.png',
    coordinator: 'ICI Student Chapter',
    description: 'Put your technical knowledge and urban-planning creativity to work to develop a vision for a well-planned city. Address transit-oriented infrastructure, storm-water drainage, zoning, and sustainable green corridors.',
    teamSize: '4–5 participants',
    rounds: [
      { name: 'Round 1: Technical Crossword', details: 'Rapid technical crossword challenge covering urban planning, geodetics, zoning laws, and smart city infrastructure.' },
      { name: 'Round 2: Town-Planning Drafting', details: 'Town-planning drafting and multi-criteria presentation before our urban engineering panel.' }
    ]
  },
  {
    id: 'conmake',
    code: 'CF-04',
    name: 'CONmake: Model Making',
    subtitle: 'Visualize, create and build — transform raw materials into miniature masterpieces!',
    category: 'Heavy Engineering',
    eventType: 'Technical',
    date: '30 Nov 2026',
    day: 'Day 01',
    time: '03:30 PM',
    venue: 'Masonry & Model Workshop',
    registered: 30,
    capacity: 45,
    checkedIn: 0,
    fee: 400,
    status: 'OPEN',
    image: '/images/card-sprout.jpg',
    coordinator: 'ICI Student Chapter',
    description: 'Visualize, create and build — transform raw materials into miniature masterpieces! Hone your visual dimension estimation and craft a miniature architectural dwelling with cement mortar and miniature bricks.',
    teamSize: '3 participants',
    rounds: [
      { name: 'Round 1: Dimension Estimation', details: 'Estimate dimensions of civil engineering objects through visual observation without measuring instruments.' },
      { name: 'Round 2: Model Making', details: 'Construct a miniature house or architectural model using provided cement mortar and miniature bricks.' }
    ]
  },

  // =========================================================================
  // DAY 2 — EXPLORE, ESCAPE, EXPRESS AND EXCEL (01 DEC 2026)
  // =========================================================================
  {
    id: 'conquest',
    code: 'CF-05',
    name: 'CONquest: Civil Engineering Quiz',
    subtitle: 'Challenge your knowledge. Beat the buzzer. Claim the victory!',
    category: 'Quizzes & Cultural',
    eventType: 'Technical',
    date: '01 Dec 2026',
    day: 'Day 02',
    time: '10:00 AM',
    venue: 'Civil Seminar Hall',
    registered: 48,
    capacity: 64,
    checkedIn: 0,
    fee: 300,
    status: 'OPEN',
    image: '/images/event-column.png',
    coordinator: 'ICI Student Chapter',
    description: 'Challenge your knowledge. Beat the buzzer. Claim the victory! Compete in rigorous civil engineering MCQ screening, leading into high-voltage live buzzer battles on structures, materials, and mega-projects.',
    teamSize: '4 participants',
    rounds: [
      { name: 'Round 1 — Technical Quiz', details: 'Civil engineering MCQ screening exam; top scoring teams advance to the stage arena.' },
      { name: 'Round 2 — Buzzer Battle', details: 'Race to buzz in and answer rapid technical questions. Highest scoring team takes victory!' }
    ]
  },
  {
    id: 'conscape',
    code: 'CF-06',
    name: 'CONscape: Surveying Treasure Hunt & Escape Room',
    subtitle: 'Follow the clues. Explore the campus. Unlock the mystery!',
    category: 'Field',
    eventType: 'Technical',
    date: '01 Dec 2026',
    day: 'Day 02',
    time: '11:30 AM',
    venue: 'Campus Surveying Ground & Lab',
    registered: 36,
    capacity: 40,
    checkedIn: 0,
    fee: 400,
    status: 'OPEN',
    image: '/images/event-survey.png',
    coordinator: 'ICI Student Chapter',
    description: 'Follow the clues. Explore the campus. Unlock the mystery! Navigate the sprawling RVCE grounds using optical surveying clues, coordinates, and observation, then crack an engineering escape room to finish.',
    teamSize: '3–4 participants',
    rounds: [
      { name: 'Round 1 — Surveying Treasure Hunt', details: 'Navigate the campus through a surveying challenge involving clues, bearings, observation and teamwork.' },
      { name: 'Round 2 — Escape Room', details: 'Follow hidden clues, decipher structural puzzles, and unlock the final destination within the countdown.' }
    ]
  },
  {
    id: 'conflix',
    code: 'CF-07',
    name: 'CONflix: Short Film',
    subtitle: 'Lights. Camera. Creativity! Tell a story that leaves an impact.',
    category: 'Quizzes & Cultural',
    eventType: 'Non-Technical',
    date: '01 Dec 2026',
    day: 'Day 02',
    time: '02:00 PM',
    venue: 'Audio Visual Auditorium',
    registered: 20,
    capacity: 35,
    checkedIn: 0,
    fee: 500,
    status: 'OPEN',
    image: '/images/hero-montage.jpg',
    coordinator: 'ICI Student Chapter',
    description: 'Lights. Camera. Creativity! Tell a story that leaves an impact. Bring your storytelling and filmmaking talent together to create an engaging 5-minute short film inspired by products associated with event sponsors.',
    teamSize: '6–7 participants',
    rounds: [
      { name: 'Round 1: Screening & Presentation', details: 'Teams create and present a five-minute short film inspired by sponsor products and construction innovations.' }
    ]
  },
  {
    id: 'confight',
    code: 'CF-08',
    name: 'CONfight: Debate Challenge',
    subtitle: 'Think critically. Speak confidently. Defend your ideas.',
    category: 'Symposium & Lecture',
    eventType: 'Non-Technical',
    date: '01 Dec 2026',
    day: 'Day 02',
    time: '03:30 PM',
    venue: 'Professors Council Chamber',
    registered: 24,
    capacity: 30,
    checkedIn: 0,
    fee: 300,
    status: 'OPEN',
    image: '/images/event-brutalist.png',
    coordinator: 'ICI Student Chapter',
    description: 'Think critically. Speak confidently. Defend your ideas. Analyse real-world civil engineering infrastructure controversies, sustainability dilemmas, and present persuasive arguments before a faculty panel.',
    teamSize: '3 participants',
    rounds: [
      { name: 'Round 1 — Pick and Speak', details: 'Analyse a real-world case study or environmental controversy and present possible solutions in 2–3 minutes.' },
      { name: 'Round 2 — Live Debate', details: 'Defend your arguments in a timed Oxford-style debate demonstrating logical reasoning and persuasive rhetoric.' }
    ]
  },

  // Aliases for backward compatibility with existing links
  {
    id: 'concrete-cube',
    code: 'CF-01',
    name: 'CONmix: Mix Design Challenge',
    subtitle: 'Can you design the perfect concrete mix and prove its performance?',
    category: 'Material Innovation',
    eventType: 'Technical',
    date: '30 Nov 2026',
    day: 'Day 01',
    time: '09:30 AM',
    venue: 'Concrete & Materials Testing Lab',
    registered: 42,
    capacity: 60,
    checkedIn: 0,
    fee: 450,
    status: 'OPEN',
    image: '/images/card-cubes.jpg',
    coordinator: 'ICI Student Chapter',
    description: 'Prepare a mix design, conduct slump and workability tests, cast concrete specimens. Compressive strength tested after 20 hours.',
    teamSize: '3 participants',
  },
  {
    id: 'bridge-build',
    code: 'CF-02',
    name: 'CONarch: Arch Design & Build',
    subtitle: 'Design with purpose. Build with precision.',
    category: 'Structural Design',
    eventType: 'Technical',
    date: '30 Nov 2026',
    day: 'Day 01',
    time: '11:00 AM',
    venue: 'Structural Fabrication Yard',
    registered: 36,
    capacity: 48,
    checkedIn: 0,
    fee: 500,
    status: 'OPEN',
    image: '/images/event-bridge.png',
    coordinator: 'ICI Student Chapter',
    description: 'Design an arch or bridge on paper, then build and test under load.',
    teamSize: '4 participants',
  },
  {
    id: 'survey-hunt',
    code: 'CF-06',
    name: 'CONscape: Surveying Treasure Hunt & Escape Room',
    subtitle: 'Follow the clues. Explore the campus. Unlock the mystery!',
    category: 'Field',
    eventType: 'Technical',
    date: '01 Dec 2026',
    day: 'Day 02',
    time: '11:30 AM',
    venue: 'Campus Surveying Ground & Lab',
    registered: 36,
    capacity: 40,
    checkedIn: 0,
    fee: 400,
    status: 'OPEN',
    image: '/images/event-survey.png',
    coordinator: 'ICI Student Chapter',
    description: 'Surveying treasure hunt across campus followed by structural escape room.',
    teamSize: '3–4 participants',
  },
  {
    id: 'bio-concrete',
    code: 'CF-04',
    name: 'CONmake: Model Making',
    subtitle: 'Visualize, create and build — transform raw materials into miniature masterpieces!',
    category: 'Heavy Engineering',
    eventType: 'Technical',
    date: '30 Nov 2026',
    day: 'Day 01',
    time: '03:30 PM',
    venue: 'Masonry & Model Workshop',
    registered: 30,
    capacity: 45,
    checkedIn: 0,
    fee: 400,
    status: 'OPEN',
    image: '/images/card-sprout.jpg',
    coordinator: 'ICI Student Chapter',
    description: 'Visual dimension estimation followed by architectural miniature model construction using cement mortar and bricks.',
    teamSize: '3 participants',
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
