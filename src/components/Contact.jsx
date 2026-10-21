const EMAIL = 'kohinoortiwari2006@gmail.com'

export default function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto px-6 py-24 text-center sm:px-12 md:py-32"
    >
      <div className="mx-auto max-w-xl">
        <p className="mb-4 font-mono text-base text-accent">What&apos;s Next?</p>

        <h2 className="mb-5 text-[clamp(2.5rem,6vw,3.75rem)] font-bold leading-tight text-lightest-slate">
          Get In Touch
        </h2>

        <p className="text-lg leading-relaxed text-slate">
          I&apos;m currently looking for new opportunities, and my inbox is
          always open. Whether you have a question, a project idea, or just want
          to say hi, I&apos;ll do my best to get back to you!
        </p>

        <a
          href={`mailto:${EMAIL}`}
          className="mt-12 inline-block rounded border border-accent px-8 py-5 font-mono text-sm text-accent transition-colors hover:bg-accent/10"
        >
          Say Hello
        </a>
      </div>
    </section>
  )
}