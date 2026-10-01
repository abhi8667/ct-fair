'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface FAQItem {
  id: string
  code: string
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    id: 'f1',
    code: 'SPEC_01',
    question: 'Accommodation & Campus Lodging for Outstation Delegations',
    answer: 'Subsidized hostel dormitory accommodation is reserved on the RVCE campus for accredited outstation university contingents from 29 November to 02 December. Private twin-sharing quarters are available for faculty mentors and industry delegates upon early request during registration. Campus dining halls serve all meals during the conclave.',
  },
  {
    id: 'f2',
    code: 'SPEC_02',
    question: 'Team Eligibility & Inter-Disciplinary / Inter-College Collaboration',
    answer: 'All enrolled undergraduate and postgraduate students from Civil, Architecture, Mechanical, Structural, and Materials Science faculties are eligible. Inter-college teams are expressly encouraged for both Canoe-X and the Rapid Model-Athon, provided a single primary institution acts as the official liaison contact.',
  },
  {
    id: 'f3',
    code: 'SPEC_03',
    question: 'Equipment & Laboratory Testing Protocols (Mandatory PPE Guidelines)',
    answer: 'Steel-toed safety boots and safety goggles are strictly mandatory within Heavy Testing Bay A, the Structures Lab, and the Materials Testing Yard. RVCE Civil Labs will supply all test jigs, standardized silica sand, cementitious binders, and digital strain measurement calibration certificates. Safety glasses and ear protection can also be rented at Safety Counter 2.',
  },
  {
    id: 'f4',
    code: 'SPEC_04',
    question: 'Certification & Continuing Professional Education (CPE) Credits',
    answer: 'All registered delegates receive a cryptographically signed Certificate of Technical Participation issued jointly by the Indian Concrete Institute (ICI) and RVCE Department of Civil Engineering. Practicing structural engineers and faculty delegates are awarded 12 certified Continuing Professional Education (CPE) units.',
  },
  {
    id: 'f5',
    code: 'SPEC_05',
    question: 'Registration Deadlines & Capacity Limits for Testing Bays',
    answer: 'Due to hydraulic pump cycle constraints and flume bay testing times, slots for Canoe-X (28 boats max), Seismic Shake-Table (50 models max), and Bio-Concrete Lab (60 seats) close strictly upon reaching saturation. Early registration is advised to secure physical specimen curing slots.',
  },
]

export function FAQAccordion() {
  const [openId, setOpenId] = useState<string | null>('f1')

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id)
  }

  return (
    <div className="space-y-3">
      {faqs.map((faq) => {
        const isOpen = openId === faq.id
        return (
          <div
            key={faq.id}
            className="bg-card border border-border/80 transition-all duration-200 overflow-hidden"
          >
            <button
              type="button"
              id={`faq-header-${faq.id}`}
              onClick={() => toggle(faq.id)}
              className="w-full text-left p-5 flex items-center justify-between gap-4 cursor-pointer hover:bg-muted/30 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b88e3e]"
              aria-expanded={isOpen}
              aria-controls={`faq-panel-${faq.id}`}
            >
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-gold font-semibold">{faq.code} //</span>
                <span className="font-serif text-lg md:text-xl text-foreground font-medium text-balance">
                  {faq.question}
                </span>
              </div>
              <ChevronDown
                className={`size-4 text-muted-foreground transition-transform duration-200 shrink-0 ${
                  isOpen ? 'rotate-180 text-gold' : ''
                }`}
                aria-hidden="true"
              />
            </button>
            {isOpen && (
              <div
                id={`faq-panel-${faq.id}`}
                role="region"
                aria-labelledby={`faq-header-${faq.id}`}
                className="px-5 pb-5 pt-1 border-t border-border/40 text-xs md:text-sm text-muted-foreground leading-relaxed animate-in fade-in-50 duration-200 text-pretty"
              >
                {faq.answer}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
