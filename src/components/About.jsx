import { useState } from 'react'
import SectionHeading from './SectionHeading'

// Taken from the Tech Stack section of your GitHub README
const skills = [
  'Java',
  'Python',
  'JavaScript',
  'SQL',
  'HTML & CSS',
  'Node.js',
  'React',
  'MongoDB',
  'MySQL',
  'Git & GitHub',
]

function PhotoFrame() {
  const [failed, setFailed] = useState(false)

  return (
    <div className="group relative isolate w-full max-w-[300px] self-start">
      <div className="absolute inset-0 -z-10 translate-x-4 translate-y-4 rounded border-2 border-accent transition-transform duration-300 group-hover:translate-x-3 group-hover:translate-y-3" />

      <div className="relative aspect-square overflow-hidden rounded bg-accent">
        {failed ? (
          <div className="flex h-full w-full items-center justify-center bg-light-navy font-mono text-5xl text-accent">
            KT
          </div>
        ) : (
          <img
            src={`${import.meta.env.BASE_URL}photo.jpg`}
            alt="Kohinoor Tiwari"
            onError={() => setFailed(true)}
            className="h-full w-full object-cover mix-blend-multiply grayscale transition duration-300 group-hover:mix-blend-normal group-hover:grayscale-0"
          />
        )}
      </div>
    </div>
  )
}

export default function About() {
  return (
    <section id="about" className="px-6 py-24 sm:px-12 md:px-24 lg:px-40">
      <div className="max-w-4xl">
        <SectionHeading>About Me</SectionHeading>

        <div className="grid gap-14 md:grid-cols-[3fr_2fr]">
          <div className="space-y-4 text-lg leading-relaxed text-slate">
            <p>
              Hi, I&apos;m Kohinoor, a Computer Science undergraduate at{' '}
              <span className="text-accent">GLA University, Mathura</span>. I
              enjoy building practical applications and learning how reliable
              software works, with a growing interest in backend development and
              problem-solving.
            </p>
            <p>
              I&apos;m strengthening my foundations in DSA, OOP, DBMS and
              Operating Systems, and I learn by building projects, debugging
              them, and improving them one iteration at a time.
            </p>
            <p>
              I also founded{' '}
              <span className="text-accent">While(True)</span>, a student tech
              community that brings people together through coding initiatives,
              technical events and collaborative learning.
            </p>
            <p>Here are a few technologies I work with:</p>

            <ul className="grid grid-cols-2 gap-x-4 gap-y-2 pt-2 font-mono text-sm">
              {skills.map((skill) => (
                <li key={skill} className="flex items-center gap-3">
                  <span className="text-accent">▹</span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-start justify-start pr-4 md:justify-center md:pr-0">
            <PhotoFrame />
          </div>
        </div>
      </div>
    </section>
  )
}