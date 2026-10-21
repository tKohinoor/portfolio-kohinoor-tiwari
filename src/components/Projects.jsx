import { useState } from 'react'
import SectionHeading from './SectionHeading'

const featured = [
  {
    title: 'Agile Project Management & Collaboration System',
    description:
      'An upgraded version of Kollab: a web-based project management system with sprint planning, Kanban boards, real-time collaboration and progress analytics. Currently in development.',
    tech: ['MongoDB', 'Express', 'React', 'Node.js'],
    image: '/projects/apmcs.png',
    github: 'https://github.com/tKohinoor/apmcs',
  },
  {
    title: 'Daily Journal',
    description:
      'A browser-based journal app with create, read, update and delete operations. It uses Local Storage to keep entries across sessions.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    image: '/projects/daily-journal.png',
    github: 'https://github.com/tKohinoor/daily-journal',
    live: 'https://tkohinoor.github.io/daily-journal/',
  },
  {
    title: 'Resume Analyzer',
    description:
      'An LLM-based tool that predicts an ATS score for a resume against a given job description. It also works standalone, giving a general analysis of a resume without a job description.',
    tech: ['LLM', 'ATS Scoring'],
    image: '/projects/resume-analyzer.png',
    // TODO: add github: 'https://github.com/tKohinoor/<repo>' once pushed
  },
  {
    title: 'Akshar',
    description:
      'A reader-focused digital library for books and chapters. Chapters are written in Markdown and organized by book metadata, and a Python script generates the catalogue. It also runs on Android through Capacitor.',
    tech: ['React', 'Vite', 'Capacitor', 'Markdown', 'Python'],
    image: '/projects/akshar.png',
    github: 'https://github.com/tKohinoor/akshar',
  },
]

const others = [
  {
    title: 'Kollab',
    description:
      'The earlier version of APMCS: a team-collaboration and ticketing project exploring project organization and task management.',
    tech: ['JavaScript', 'Firebase'],
    github: 'https://github.com/tKohinoor/Kollab',
  },
  {
    title: 'Distributed Lock Manager',
    description:
      'A systems-oriented project exploring distributed locking and coordination challenges.',
    tech: [],
    github: 'https://github.com/tKohinoor/distributed-lock-manager',
  },
  {
    title: 'Sales Analytics Pipeline',
    description:
      'A Python project focused on sales-data processing and analytics workflows.',
    tech: ['Python'],
    github: 'https://github.com/tKohinoor/sales-analytics-pipeline',
  },
  {
    title: 'urbanMarket',
    description:
      'A web development project exploring a marketplace-style application.',
    tech: ['JavaScript'],
    github: 'https://github.com/tKohinoor/urbanMarket',
  },
]

/* ---------- Icons ---------- */
const iconProps = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

function FolderIcon() {
  return (
    <svg {...iconProps} className="h-10 w-10 text-accent">
      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
    </svg>
  )
}

function GithubIcon() {
  return (
    <svg {...iconProps} className="h-5 w-5">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  )
}

function ExternalIcon() {
  return (
    <svg {...iconProps} className="h-5 w-5">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  )
}

/* ---------- Featured project ---------- */
function ProjectImage({ src, alt, href }) {
  const [failed, setFailed] = useState(false)

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={alt}
      className="group/img block h-full w-full rounded bg-accent"
    >
      {failed ? (
        <div className="flex h-full min-h-[200px] w-full items-center justify-center rounded bg-light-navy font-mono text-sm text-light-slate">
          Add screenshot
        </div>
      ) : (
        <img
          src={`${import.meta.env.BASE_URL}${src.replace(/^\//, '')}`}
          alt={alt}
          onError={() => setFailed(true)}
          className="h-full w-full rounded object-cover mix-blend-multiply grayscale transition duration-300 md:group-hover/img:mix-blend-normal md:group-hover/img:grayscale-0"
        />
      )}
    </a>
  )
}

function FeaturedProject({ project, reversed }) {
  const { title, description, tech, image, github, live } = project

  return (
    <li className="relative mb-20 grid overflow-hidden rounded bg-light-navy md:mb-28 md:grid-cols-12 md:items-center md:overflow-visible md:bg-transparent">
      {/* Image: faded background on mobile, side image on desktop */}
      <div
        className={`absolute inset-0 opacity-[0.15] md:relative md:inset-auto md:row-start-1 md:aspect-[16/10] md:opacity-100 ${
          reversed
            ? 'md:col-start-1 md:col-end-8'
            : 'md:col-start-6 md:col-end-13'
        }`}
      >
        <ProjectImage src={image} alt={`${title} screenshot`} href={live || github} />
      </div>

      {/* Text column: sits beside the image, never on top of it */}
      <div
        className={`relative z-10 p-6 sm:p-8 md:row-start-1 md:p-0 ${
          reversed
            ? 'md:col-start-8 md:col-end-13 md:text-left'
            : 'md:col-start-1 md:col-end-6 md:text-right'
        }`}
      >
        <p className="mb-2 font-mono text-sm text-accent">Featured Project</p>

        <h3 className="mb-5 text-2xl font-semibold text-lightest-slate">
          <a
            href={live || github}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-accent"
          >
            {title}
          </a>
        </h3>

        {/* Only this box overlaps the image */}
        <p
          className={`relative text-base leading-relaxed text-light-slate md:rounded md:bg-light-navy md:p-6 md:text-lg md:shadow-xl md:shadow-black/40 ${
            reversed ? 'md:-ml-20' : 'md:-mr-20'
          }`}
        >
          {description}
        </p>

        {tech.length > 0 && (
          <ul
            className={`mt-5 flex flex-wrap gap-x-5 gap-y-1 font-mono text-xs text-light-slate ${
              reversed ? 'md:justify-start' : 'md:justify-end'
            }`}
          >
            {tech.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        )}

        <div
          className={`mt-5 flex items-center gap-5 text-lightest-slate ${
            reversed ? 'md:justify-start' : 'md:justify-end'
          }`}
        >
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            aria-label={`${title} on GitHub`}
            className="transition-colors hover:text-accent"
          >
            <GithubIcon />
          </a>
          {live && (
            <a
              href={live}
              target="_blank"
              rel="noreferrer"
              aria-label={`${title} live demo`}
              className="transition-colors hover:text-accent"
            >
              <ExternalIcon />
            </a>
          )}
        </div>
      </div>
    </li>
  )
}

/* ---------- Other projects ---------- */
function ProjectCard({ project }) {
  const { title, description, tech, github, live } = project

  return (
    <li className="group flex flex-col justify-between rounded bg-light-navy p-7 shadow-lg shadow-black/30 transition-transform duration-300 hover:-translate-y-2">
      <div>
        <div className="mb-8 flex items-center justify-between">
          <FolderIcon />
          <div className="flex items-center gap-4 text-light-slate">
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              aria-label={`${title} on GitHub`}
              className="transition-colors hover:text-accent"
            >
              <GithubIcon />
            </a>
            {live && (
              <a
                href={live}
                target="_blank"
                rel="noreferrer"
                aria-label={`${title} live demo`}
                className="transition-colors hover:text-accent"
              >
                <ExternalIcon />
              </a>
            )}
          </div>
        </div>

        <h3 className="mb-3 text-xl font-semibold text-lightest-slate transition-colors group-hover:text-accent">
          <a href={live || github} target="_blank" rel="noreferrer">
            {title}
          </a>
        </h3>
        <p className="text-base leading-relaxed text-slate">{description}</p>
      </div>

      {tech.length > 0 && (
        <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs text-light-slate">
          {tech.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      )}
    </li>
  )
}

/* ---------- Section ---------- */
export default function Projects() {
  return (
    <section id="projects" className="px-6 py-24 sm:px-12 md:px-24 lg:px-40">
      <div className="max-w-5xl">
        <SectionHeading>Some Things I&apos;ve Built</SectionHeading>

        <ul className="mt-6">
          {featured.map((p, i) => (
            <FeaturedProject key={p.title} project={p} reversed={i % 2 === 1} />
          ))}
        </ul>

        <div className="mt-8 text-center">
          <h3 className="text-2xl font-semibold text-lightest-slate">
            Other Noteworthy Projects
          </h3>
          <a
            href="https://github.com/tKohinoor?tab=repositories"
            target="_blank"
            rel="noreferrer"
            className="mt-2 inline-block font-mono text-sm text-accent hover:underline"
          >
            view the archive
          </a>
        </div>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {others.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </ul>

        <div className="mt-14 flex justify-center">
          <a
            href="https://github.com/tKohinoor?tab=repositories"
            target="_blank"
            rel="noreferrer"
            className="rounded border border-accent px-8 py-5 font-mono text-sm text-accent transition-colors hover:bg-accent/10"
          >
            Show More on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}