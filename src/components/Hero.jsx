export default function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-screen flex-col justify-center px-6 pb-16 pt-28 sm:px-12 md:px-24 lg:px-40"
    >
      <div className="max-w-5xl">
        <p className="mb-5 font-mono text-base text-accent sm:text-lg">
          Hi, my name is
        </p>

        <h1 className="font-bold leading-[1.1] tracking-tight text-[clamp(2.5rem,8vw,5.5rem)]">
          <span className="block text-lightest-slate">Kohinoor Tiwari.</span>
          <span className="block text-slate">I build things for the web.</span>
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate">
          I&apos;m a Computer Science undergraduate at GLA University who enjoys
          building practical applications and learning how reliable software
          works. I&apos;m especially interested in backend development and
          problem-solving, and I&apos;m the founder of{' '}
          <span className="text-accent">While(True)</span>, a student tech
          community.
        </p>

        <a
          href="#projects"
          className="mt-12 inline-block rounded border border-accent px-8 py-5 font-mono text-sm text-accent transition-colors hover:bg-accent/10"
        >
          Check out my projects!
        </a>
      </div>
    </section>
  )
}