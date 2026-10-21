const EMAIL = 'kohinoortiwari2006@gmail.com'

export default function EmailRail() {
  return (
    <div className="fixed bottom-0 right-10 z-40 hidden w-10 flex-col items-center md:flex">
      <a
        href={`mailto:${EMAIL}`}
        className="font-mono text-xs tracking-[0.15em] text-light-slate transition-all duration-200 [writing-mode:vertical-rl] hover:-translate-y-1 hover:text-accent"
      >
        {EMAIL}
      </a>
      <div className="mt-6 h-24 w-px bg-light-slate" />
    </div>
  )
}