import { useEffect, useState } from 'react'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

function Logo() {
  return (
    <a href="#" aria-label="Home" className="block h-12 w-12">
      <svg viewBox="0 0 100 100" className="h-full w-full">
        <polygon
          points="50,5 90,27.5 90,72.5 50,95 10,72.5 10,27.5"
          fill="none"
          stroke="#64ffda"
          strokeWidth="5"
          strokeLinejoin="round"
        />
        <text
          x="50"
          y="50"
          textAnchor="middle"
          dominantBaseline="central"
          fill="#64ffda"
          fontSize="42"
          fontWeight="600"
          fontFamily="Inter, sans-serif"
        >
          K
        </text>
      </svg>
    </a>
  )
}

function ResumeButton({ className = '', onClick }) {
  return (
    <a
      href={`${import.meta.env.BASE_URL}resume.pdf`}
      target="_blank"
      rel="noreferrer"
      onClick={onClick}
      className={`rounded border border-accent px-5 py-3 font-mono text-sm text-accent transition-colors hover:bg-accent/10 ${className}`}
    >
      Resume
    </a>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-navy/85 shadow-lg shadow-black/30 backdrop-blur'
          : 'bg-transparent'
      }`}
    >
      <nav className="flex items-center justify-between px-6 py-5 md:px-12">
        <Logo />

        {/* Desktop links */}
        <div className="hidden items-center gap-9 md:flex">
          <ul className="flex items-center gap-9">
            {links.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className="font-mono text-sm text-accent/90 transition-colors hover:text-accent"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <ResumeButton />
        </div>

        {/* Hamburger */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span
            className={`h-0.5 w-7 bg-accent transition-transform duration-300 ${
              open ? 'translate-y-2 rotate-45' : ''
            }`}
          />
          <span
            className={`h-0.5 w-7 bg-accent transition-opacity duration-300 ${
              open ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`h-0.5 w-7 bg-accent transition-transform duration-300 ${
              open ? '-translate-y-2 -rotate-45' : ''
            }`}
          />
        </button>
      </nav>

      {/* Mobile overlay + panel */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black/50 transition-opacity duration-300 md:hidden ${
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      />
      <aside
        className={`fixed right-0 top-0 flex h-screen w-3/4 max-w-sm flex-col items-center justify-center gap-8 bg-light-navy px-6 shadow-2xl transition-transform duration-300 md:hidden ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <ul className="flex flex-col items-center gap-8">
          {links.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                onClick={() => setOpen(false)}
                className="font-mono text-lg text-lightest-slate transition-colors hover:text-accent"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
        <ResumeButton onClick={() => setOpen(false)} />
      </aside>
    </header>
  )
}