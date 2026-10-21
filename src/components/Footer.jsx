import { socials } from './SocialRail'

export default function Footer() {
  return (
    <footer className="px-6 pb-8 pt-4 text-center">
      {/* Social links: shown on mobile, where the side rail is hidden */}
      <ul className="mb-5 flex items-center justify-center gap-6 md:hidden">
        {socials.map(({ label, href, icon }) => (
          <li key={label}>
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="block text-light-slate transition-colors hover:text-accent"
            >
              {icon}
            </a>
          </li>
        ))}
      </ul>

      <p className="font-mono text-xs text-light-slate">
        Built by Kohinoor Tiwari
      </p>
    </footer>
  )
}