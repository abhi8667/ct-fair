// Central configuration for Concrete Fair 2026
// Official Google Form Links
export const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSfvQjkUzBgonTGpUZXeU4GRZzcRMVUwwoHECPXGngugxsza2g/viewform'
export const GOOGLE_FORM_EMBED_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSfvQjkUzBgonTGpUZXeU4GRZzcRMVUwwoHECPXGngugxsza2g/viewform?embedded=true'

export type EventStatus = 'OPEN' | 'UPCOMING' | 'COMPLETED'

export type PrizeBreakdown = {
  first: string
  second: string
  third: string
  total: string
}

export type FairEvent = {
  id: string
  code: string
  name: string
  subtitle: string
  category: 'Technical' | 'Non-Technical' | string
  eventType: 'Technical' | 'Non-Technical'
  date: string
  day: 'Day 01' | 'Day 02'
  time: string
  venue: string
  image: string
  description: string
  teamSize: string
  rounds: { name: string; details: string }[]
  status: EventStatus
  // Compatibility fields for admin/table components
  registered: number
  capacity: number
  checkedIn: number
  fee: number
  coordinator: string
  prizes?: string
  prizePool?: string
  prizeBreakdown?: PrizeBreakdown
}

export const events: FairEvent[] = [
  // =========================================================================
  // DAY 1 — DESIGN, TEST, PLAN AND BUILD (30 NOV 2026)
  // =========================================================================
  {
    id: 'conmix',
    code: 'CF-01',
    name: 'CONmix: Mix Design',
    subtitle: 'Can you design the perfect concrete mix and prove its performance?',
    category: 'Technical',
    eventType: 'Technical',
    date: '30 Nov 2026',
    day: 'Day 01',
    time: '09:30 AM',
    venue: 'Concrete & Materials Testing Lab, RVCE',
    status: 'OPEN',
    image: '/images/card-cubes.jpg',
    description: 'Can you design the perfect concrete mix and prove its performance? Prepare a target mix, conduct slump and workability tests, and cast concrete specimens. After 20 hours, the specimens will be tested under a UTM for compressive strength to determine the best-performing mix.',
    teamSize: '3–4 participants',
    coordinator: 'Department of Civil Engineering, RVCE',
    prizes: '₹ 18,000',
    prizePool: '₹ 18,000',
    prizeBreakdown: { first: '₹ 10,000', second: '₹ 5,000', third: '₹ 3,000', total: '₹ 18,000' },
    registered: 0,
    capacity: 60,
    checkedIn: 0,
    fee: 0,
    rounds: [
      {
        name: 'Round 1 — Technical Quiz',
        details: 'Test your knowledge of concrete mix design and relevant IS codes through a technical quiz.',
      },
      {
        name: 'Round 2 — Mix Design Challenge',
        details: 'Prepare a mix design, conduct slump and workability tests, and cast concrete specimens. After 20 hours, the specimens will be tested under a UTM for compressive strength to determine the best-performing mix.',
      },
    ],
  },
  {
    id: 'conarch',
    code: 'CF-02',
    name: 'CONarch: Arch Design & Build',
    subtitle: 'Design with purpose. Build with precision.',
    category: 'Technical',
    eventType: 'Technical',
    date: '30 Nov 2026',
    day: 'Day 01',
    time: '11:00 AM',
    venue: 'Structural Fabrication Yard, RVCE',
    status: 'OPEN',
    image: '/images/event-bridge.png',
    description: 'Transform structural concepts into reality through a challenge that combines design creativity and construction skills.',
    teamSize: '4–5 participants',
    coordinator: 'Department of Civil Engineering, RVCE',
    prizes: '₹ 18,000',
    prizePool: '₹ 18,000',
    prizeBreakdown: { first: '₹ 10,000', second: '₹ 5,000', third: '₹ 3,000', total: '₹ 18,000' },
    registered: 0,
    capacity: 48,
    checkedIn: 0,
    fee: 0,
    rounds: [
      {
        name: 'Round 1: Design on Paper',
        details: 'Design an arch or bridge on paper.',
      },
      {
        name: 'Round 2: Build the Arch / Bridge',
        details: 'Build the designed arch or bridge.',
      },
    ],
  },
  {
    id: 'conzine',
    code: 'CF-03',
    name: 'CONzine: Smart City Designing',
    subtitle: 'Imagine the cities of tomorrow and design a smarter future.',
    category: 'Technical',
    eventType: 'Technical',
    date: '30 Nov 2026',
    day: 'Day 01',
    time: '02:00 PM',
    venue: 'CAD & GIS Modeling Studio, RVCE',
    status: 'OPEN',
    image: '/images/event-blueprint.png',
    description: 'Put your technical knowledge and urban-planning creativity to work to develop a vision for a well-planned city.',
    teamSize: '4–5 participants',
    coordinator: 'Department of Civil Engineering, RVCE',
    prizes: '₹ 18,000',
    prizePool: '₹ 18,000',
    prizeBreakdown: { first: '₹ 10,000', second: '₹ 5,000', third: '₹ 3,000', total: '₹ 18,000' },
    registered: 0,
    capacity: 40,
    checkedIn: 0,
    fee: 0,
    rounds: [
      {
        name: 'Round 1: Technical Crossword',
        details: 'Technical crossword challenge.',
      },
      {
        name: 'Round 2: Town-Planning Drafting & Presentation',
        details: 'Town-planning drafting and presentation.',
      },
    ],
  },
  {
    id: 'conmake',
    code: 'CF-04',
    name: 'CONmake: Model Making',
    subtitle: 'Visualize, create and build — transform raw materials into miniature masterpieces!',
    category: 'Technical',
    eventType: 'Technical',
    date: '30 Nov 2026',
    day: 'Day 01',
    time: '03:30 PM',
    venue: 'Masonry & Model Workshop, RVCE',
    status: 'OPEN',
    image: '/images/card-sprout.jpg',
    description: 'Visualize, create and build — transform raw materials into miniature masterpieces! Put your observation and craft skills to the test.',
    teamSize: '3–4 participants',
    coordinator: 'Department of Civil Engineering, RVCE',
    prizes: '₹ 18,000',
    prizePool: '₹ 18,000',
    prizeBreakdown: { first: '₹ 10,000', second: '₹ 5,000', third: '₹ 3,000', total: '₹ 18,000' },
    registered: 0,
    capacity: 45,
    checkedIn: 0,
    fee: 0,
    rounds: [
      {
        name: 'Round 1: Dimension Estimation',
        details: 'Estimate the dimensions of civil engineering-related objects through visual observation, without using measuring instruments.',
      },
      {
        name: 'Round 2: Model Making',
        details: 'Construct a miniature house or architectural model using provided materials such as cement mortar and miniature bricks.',
      },
    ],
  },

  // =========================================================================
  // DAY 2 — EXPLORE, ESCAPE, EXPRESS AND EXCEL (01 DEC 2026)
  // =========================================================================
  {
    id: 'conquest',
    code: 'CF-05',
    name: 'CONquest: Civil Engineering Quiz',
    subtitle: 'Challenge your knowledge. Beat the buzzer. Claim the victory!',
    category: 'Technical',
    eventType: 'Technical',
    date: '01 Dec 2026',
    day: 'Day 02',
    time: '10:00 AM',
    venue: 'Civil Seminar Hall, RVCE',
    status: 'OPEN',
    image: '/images/event-column.png',
    description: 'Challenge your knowledge. Beat the buzzer. Claim the victory! Put your civil engineering fundamentals to the test.',
    teamSize: '4 participants',
    coordinator: 'Department of Civil Engineering, RVCE',
    prizes: '₹ 13,000',
    prizePool: '₹ 13,000',
    prizeBreakdown: { first: '₹ 7,000', second: '₹ 4,000', third: '₹ 2,000', total: '₹ 13,000' },
    registered: 0,
    capacity: 64,
    checkedIn: 0,
    fee: 0,
    rounds: [
      {
        name: 'Round 1 — Technical Quiz',
        details: 'Compete in a civil engineering-based MCQ or technical quiz, with the top teams qualifying for the next round.',
      },
      {
        name: 'Round 2 — Buzzer Battle',
        details: 'Race to buzz in and answer technical questions. The team that answers the most questions correctly wins!',
      },
    ],
  },
  {
    id: 'conscape',
    code: 'CF-06',
    name: 'CONscape: Surveying Treasure Hunt & Escape Room',
    subtitle: 'Follow the clues. Explore the campus. Unlock the mystery!',
    category: 'Technical',
    eventType: 'Technical',
    date: '01 Dec 2026',
    day: 'Day 02',
    time: '11:30 AM',
    venue: 'Campus Surveying Ground & Lab, RVCE',
    status: 'OPEN',
    image: '/images/event-survey.png',
    description: 'Follow the clues. Explore the campus. Unlock the mystery! Combine field surveying navigation with escape room puzzle-solving.',
    teamSize: '4–5 participants',
    coordinator: 'Department of Civil Engineering, RVCE',
    prizes: '₹ 18,000',
    prizePool: '₹ 18,000',
    prizeBreakdown: { first: '₹ 10,000', second: '₹ 5,000', third: '₹ 3,000', total: '₹ 18,000' },
    registered: 0,
    capacity: 40,
    checkedIn: 0,
    fee: 0,
    rounds: [
      {
        name: 'Round 1 — Surveying Treasure Hunt',
        details: 'Navigate the campus through a surveying-based challenge involving clues, observation and teamwork.',
      },
      {
        name: 'Round 2 — Escape Room',
        details: 'Follow a series of hidden clues and solve puzzles to locate the next clue and reach the final destination within the given time.',
      },
    ],
  },
  {
    id: 'conflix',
    code: 'CF-07',
    name: 'CONflix: Short Film',
    subtitle: 'Lights. Camera. Creativity! Tell a story that leaves an impact.',
    category: 'Non-Technical',
    eventType: 'Non-Technical',
    date: '01 Dec 2026',
    day: 'Day 02',
    time: '02:00 PM',
    venue: 'Audio Visual Auditorium, RVCE',
    status: 'OPEN',
    image: '/images/hero-montage.jpg',
    description: 'Bring your storytelling and filmmaking skills together to create an engaging short film inspired by products associated with the event\'s sponsors. Important Deadlines — Last date for registration: 20 November 2026. Last date for short-film submission: 26 November 2026.',
    teamSize: '6–7 participants · Duration: 5 minutes',
    coordinator: 'Department of Civil Engineering, RVCE',
    prizes: '₹ 13,000',
    prizePool: '₹ 13,000',
    prizeBreakdown: { first: '₹ 7,000', second: '₹ 4,000', third: '₹ 2,000', total: '₹ 13,000' },
    registered: 0,
    capacity: 35,
    checkedIn: 0,
    fee: 0,
    rounds: [
      {
        name: 'Deadlines & Timeline',
        details: 'Registration Deadline: 20 November 2026 | Short-Film Submission Deadline: 26 November 2026.',
      },
      {
        name: 'Round 1: Screening & Presentation',
        details: 'Teams create and present a five-minute short film based on sponsor products.',
      },
    ],
  },
  {
    id: 'confight',
    code: 'CF-08',
    name: 'CONfight: Debate Challenge',
    subtitle: 'Think critically. Speak confidently. Defend your ideas.',
    category: 'Non-Technical',
    eventType: 'Non-Technical',
    date: '01 Dec 2026',
    day: 'Day 02',
    time: '03:30 PM',
    venue: 'Professors Council Chamber, RVCE',
    status: 'OPEN',
    image: '/images/event-brutalist.png',
    description: 'Think critically. Speak confidently. Defend your ideas in a timed debate demonstrating logical reasoning and persuasive communication.',
    teamSize: '3 participants · Panel: 2–3 professors',
    coordinator: 'Department of Civil Engineering, RVCE',
    prizes: '₹ 13,000',
    prizePool: '₹ 13,000',
    prizeBreakdown: { first: '₹ 7,000', second: '₹ 4,000', third: '₹ 2,000', total: '₹ 13,000' },
    registered: 0,
    capacity: 30,
    checkedIn: 0,
    fee: 0,
    rounds: [
      {
        name: 'Round 1 — Pick and Speak',
        details: 'Analyse a real-world problem or case study and present possible solutions in 2–3 minutes.',
      },
      {
        name: 'Round 2 — Debate',
        details: 'Present and defend your arguments in a timed debate, demonstrating logical reasoning and persuasive communication.',
      },
    ],
  },
]

// Official Department and Conclave Details
export const conclaveInfo = {
  name: 'Concrete Fair 2026',
  tagline: 'Where Concrete Meets Creativity',
  promise: 'Learn by doing. Compete with purpose. Connect with industry.',
  edition: '13th Edition',
  totalPrizePool: '₹ 1,30,000',
  totalPrizeAmount: '₹ 1,30,000',
  participantsExpected: '600+',
  participantsLegacy: '5,000+',
  dates: '30 NOV & 1 DEC 2026',
  datesFormatted: '30 November & 1 December 2026',
  venue: 'RV College of Engineering',
  address: 'RV Vidyaniketan Post, Mysuru Road, Bengaluru, Karnataka 560059',
  email: 'ici@rvce.edu.in',
  instagram: '@icirvce',
  instagramUrl: 'https://instagram.com/icirvce',
  contacts: [
    { name: 'Prateek Mahantesh Baligar', phone: '+91 95907 93555', rawPhone: '919590793555', category: 'Events and registration' },
    { name: 'Swathi M Revankar', phone: '+91 83102 76278', rawPhone: '918310276278', category: 'Events and registration' },
    { name: 'Vishal Patil', phone: '+91 93800 86451', rawPhone: '919380086451', category: 'Events and registration' },
    { name: 'Abhishek Kotyal', phone: '+91 91480 76735', rawPhone: '919148076735', category: 'General' },
    { name: 'Suyash Tiwari', phone: '+91 70900 30000', rawPhone: '917090030000', category: 'General' },
    { name: 'Venkatesh K', phone: '+91 95355 62019', rawPhone: '919535562019', category: 'General' },
  ],
  contactsCategorized: {
    eventsAndRegistration: [
      { name: 'Prateek Mahantesh Baligar', phone: '+91 95907 93555', rawPhone: '919590793555' },
      { name: 'Swathi M Revankar', phone: '+91 83102 76278', rawPhone: '918310276278' },
      { name: 'Vishal Patil', phone: '+91 93800 86451', rawPhone: '919380086451' },
    ],
    general: [
      { name: 'Abhishek Kotyal', phone: '+91 91480 76735', rawPhone: '919148076735' },
      { name: 'Suyash Tiwari', phone: '+91 70900 30000', rawPhone: '917090030000' },
      { name: 'Venkatesh K', phone: '+91 95355 62019', rawPhone: '919535562019' },
    ],
  },
  organizedBy: 'Department of Civil Engineering, RV College of Engineering, Bengaluru',
  inAssociationWith: 'Indian Concrete Institute (ICI) Student Chapter RVCE',
  departmentHistory:
    'Established in 1963, the Civil Engineering Department at RVCE is one of the oldest engineering departments, offering B.E. and M.Tech. programs. The department is affiliated with VTU and has autonomous status. Accredited by the NBA, the department is actively involved in research and development (R&D), offers consultancy services, and conducts training programs. Students are encouraged to participate in extracurricular activities, and industry-institute interaction is fostered through frequent industrial visits and expert lectures.',
  values: [
    {
      code: 'VALUE 01',
      title: 'CODE TO CONCRETE',
      description: 'Move beyond theory through mix-design, concrete testing and code-based challenges.',
    },
    {
      code: 'VALUE 02',
      title: 'DESIGN TO DELIVERY',
      description: 'Translate ideas into drawings, models, structures and town-planning concepts.',
    },
    {
      code: 'VALUE 03',
      title: 'FIELD TO PROBLEM-SOLVING',
      description: 'Bring surveying, escape-room logic and real-world case studies into the learning experience.',
    },
    {
      code: 'VALUE 04',
      title: 'TECHNICAL + CREATIVE',
      description: 'Balance engineering knowledge with debate, short films, quizzes and teamwork.',
    },
  ],
}

export function getEvent(id: string | null) {
  if (!id) return undefined
  return events.find((e) => e.id === id)
}

// ---------------------------------------------------------------------------
// Compatibility Mock Types & Helpers (Maintains compatibility with Admin / Tables)
// ---------------------------------------------------------------------------
export const inr = (n: number) => '₹ ' + n.toLocaleString('en-IN')

export type RegStatus = 'CONFIRMED' | 'PENDING' | 'CHECKED IN' | 'CANCELLED'
export type PayStatus = 'PAID' | 'PENDING' | 'WAIVED' | 'REFUNDED'

export type Registration = {
  id: string
  name: string
  college: string
  eventId: string
  type: string
  payment: PayStatus
  amount: number
  ticket: string
  date: string
  status: RegStatus
  checkInTime?: string
  teamName?: string
  teamCount?: number
}

export const registrations: Registration[] = []

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

export const volunteers: Volunteer[] = []

export const totals = {
  registered: 600,
  capacity: 600,
  checkedIn: 0,
  revenue: 0,
  volunteers: 0,
  events: events.length,
}

export const hourlyAttendance: { hour: string; checkins: number }[] = []
export const registrationTrend: { date: string; registrations: number; revenue: number }[] = []
export const volunteerAttendance: { day: string; present: number; expected: number }[] = []

export type Announcement = {
  id: string
  title: string
  body: string
  scope: string
  audience: string
  status: string
  time: string
  author: string
}

export const announcements: Announcement[] = [
  {
    id: 'a1',
    title: 'Concrete Fair 2026 Registration via Google Form',
    body: 'All delegates must submit their team and participant details via the official Google Form link.',
    scope: 'Global',
    audience: 'Everyone',
    status: 'PUBLISHED',
    time: '30 Nov · 08:00',
    author: 'Department of Civil Engineering, RVCE',
  },
]

export const activity: any[] = []

export const coordinators = [
  { id: 'c1', name: 'Prateek Mahantesh Baligar', title: 'Events & Registration', phone: '+91 95907 93555', rawPhone: '919590793555', initials: 'PB' },
  { id: 'c2', name: 'Swathi M Revankar', title: 'Events & Registration', phone: '+91 83102 76278', rawPhone: '918310276278', initials: 'SR' },
  { id: 'c3', name: 'Vishal Patil', title: 'Events & Registration', phone: '+91 93800 86451', rawPhone: '919380086451', initials: 'VP' },
  { id: 'c4', name: 'Abhishek Kotyal', title: 'General Enquiries', phone: '+91 91480 76735', rawPhone: '919148076735', initials: 'AK' },
  { id: 'c5', name: 'Suyash Tiwari', title: 'General Enquiries', phone: '+91 70900 30000', rawPhone: '917090030000', initials: 'ST' },
  { id: 'c6', name: 'Venkatesh K', title: 'General Enquiries', phone: '+91 95355 62019', rawPhone: '919535562019', initials: 'VK' },
]

export const currentDelegate = {
  id: 'CF26-DELEGATE',
  name: 'Student Delegate',
  email: 'ici@rvce.edu.in',
  phone: 'Verified Account',
  college: 'R.V. College of Engineering, Bengaluru',
  department: 'Department of Civil Engineering',
  registeredEvents: [],
  payments: [],
}
