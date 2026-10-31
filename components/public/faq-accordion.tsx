'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { conclaveInfo } from '@/lib/data'

interface FAQItem {
  id: string
  code: string
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    id: 'f1',
    code: 'ABOUT',
    question: 'What is Concrete Fair 2026 and who is organizing it?',
    answer:
      'Concrete Fair 2026 is a national-level technical fest organized by the Department of Civil Engineering at RV College of Engineering, Bengaluru, in association with the Indian Concrete Institute (ICI) Chapter. Continuing a legacy of technical excellence, this 13th edition brings together 800+ participants from across India.',
  },
  {
    id: 'f2',
    code: 'DATES & VENUE',
    question: 'When and where will the fest take place?',
    answer: `Concrete Fair 2026 takes place on 30 November & 01 December 2026 at the Department of Civil Engineering, RV College of Engineering, ${conclaveInfo.address}.`,
  },
  {
    id: 'f3',
    code: 'EVENTS',
    question: 'What events are conducted during the 2-day fest?',
    answer:
      'The fest features eight competitive events: 6 Technical challenges (CONmix Mix-design, CONarch Arch design & build, CONzine Smart city designing, CONmake Model making, CONquest Civil engineering quiz, CONscape Surveying treasure hunt & escape room) and 2 Non-Technical events (CONflix Short film, CONfight Debate challenge).',
  },
  {
    id: 'f4',
    code: 'REGISTRATION',
    question: 'How do participants register for events?',
    answer:
      'All registrations are handled centrally via the official Google Form embedded on our Registration page. Teams can submit their details directly online without any ticket booking fees.',
  },
  {
    id: 'f5',
    code: 'TEAM SIZES',
    question: 'What are the team size requirements for each event?',
    answer:
      'Team sizes: CONmix (3 participants), CONarch (4 participants), CONzine (4–5 participants), CONmake (3 participants), CONquest (4 participants), CONscape (3–4 participants), CONflix (6–7 participants), and CONfight (3 participants).',
  },
  {
    id: 'f6',
    code: 'QUERIES',
    question: 'Who can I contact for queries regarding events?',
    answer:
      'You can reach out to our student coordinators Dakshak Pradeep (+91 91085 73889) or Prachi Singh (+91 80036 22469), or email us directly at ici@rvce.edu.in.',
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
            className="bg-white border border-[#eadfd4] rounded-2xl transition-all duration-200 overflow-hidden shadow-2xs"
          >
            <button
              type="button"
              id={`faq-header-${faq.id}`}
              onClick={() => toggle(faq.id)}
              className="w-full text-left p-5 flex items-center justify-between gap-4 cursor-pointer hover:bg-[#fff8ef] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3b0924]"
              aria-expanded={isOpen}
              aria-controls={`faq-panel-${faq.id}`}
            >
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-[#3b0924] font-bold">{faq.code} //</span>
                <span className="font-serif text-base sm:text-lg text-[#34252b] font-medium text-balance">
                  {faq.question}
                </span>
              </div>
              <ChevronDown
                className={`size-4 text-[#77666a] transition-transform duration-200 shrink-0 ${
                  isOpen ? 'rotate-180 text-[#3b0924]' : ''
                }`}
                aria-hidden="true"
              />
            </button>
            {isOpen && (
              <div
                id={`faq-panel-${faq.id}`}
                role="region"
                aria-labelledby={`faq-header-${faq.id}`}
                className="px-5 pb-5 pt-1 border-t border-[#eadfd4] text-xs sm:text-sm text-[#77666a] leading-relaxed animate-in fade-in-50 duration-200 text-pretty"
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
