import { useState } from 'react'
import SectionHeading from './SectionHeading'

const education = [
  {
    tab: 'B.Tech',
    title: 'B.Tech (CSE)',
    place: 'GLA University',
    period: 'Expected 2027',
    details: ['GPA: 7.1'],
  },
  {
    tab: 'Class 12',
    title: 'Class 12 (PCMCE)',
    place: 'St. Francis Academy, Auraiya',
    period: '2023',
    details: ['Board: CBSE', 'Score: 78.6%'],
  },
  {
    tab: 'Class 10',
    title: 'Class 10',
    place: 'St. Francis Academy, Auraiya',
    period: '2021',
    details: ['Board: CBSE', 'Score: 92%'],
  },
]

export default function Education() {
  const [active, setActive] = useState(0)
  const item = education[active]

  return (
    <section id="education" className="px-6 py-24 sm:px-12 md:px-24 lg:px-40">
      <div className="max-w-3xl">
        <SectionHeading>Education</SectionHeading>

        <div className="flex flex-col gap-6 md:flex-row md:gap-8">
          {/* Tab list */}
          <div
            role="tablist"
            aria-label="Education"
            className="flex shrink-0 overflow-x-auto md:w-40 md:flex-col md:overflow-visible"
          >
            {education.map((e, i) => (
              <button
                key={e.tab}
                role="tab"
                id={`edu-tab-${i}`}
                aria-selected={active === i}
                aria-controls={`edu-panel-${i}`}
                onClick={() => setActive(i)}
                className={`whitespace-nowrap border-b-2 px-5 py-3 text-left font-mono text-sm transition-colors md:border-b-0 md:border-l-2 ${
                  active === i
                    ? 'border-accent bg-light-navy text-accent'
                    : 'border-lightest-slate/20 text-slate hover:bg-light-navy hover:text-accent'
                }`}
              >
                {e.tab}
              </button>
            ))}
          </div>

          {/* Panel */}
          <div
            role="tabpanel"
            id={`edu-panel-${active}`}
            aria-labelledby={`edu-tab-${active}`}
            className="min-h-[160px] flex-1"
          >
            <h3 className="text-xl font-medium text-lightest-slate">
              {item.title}{' '}
              <span className="text-accent">@ {item.place}</span>
            </h3>
            <p className="mb-5 mt-1 font-mono text-sm text-light-slate">
              {item.period}
            </p>
            <ul className="space-y-2 text-lg">
              {item.details.map((d) => (
                <li key={d} className="flex gap-3">
                  <span className="text-accent">▹</span>
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}