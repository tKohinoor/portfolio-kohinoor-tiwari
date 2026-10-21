import { useEffect, useState } from 'react'

export default function Loader({ onDone }) {
  const [leaving, setLeaving] = useState(false)

  useEffect(() => {
    const reduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    if (reduced) {
      onDone()
      return
    }

    const leaveTimer = setTimeout(() => setLeaving(true), 2000)
    const doneTimer = setTimeout(onDone, 2500)

    return () => {
      clearTimeout(leaveTimer)
      clearTimeout(doneTimer)
    }
  }, [onDone])

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-navy transition-opacity duration-500 ${
        leaving ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div
        className={`h-24 w-24 transition-transform duration-500 ${
          leaving ? 'scale-90' : 'scale-100'
        }`}
      >
        <svg viewBox="0 0 100 100" className="loader-logo h-full w-full">
          <polygon
            className="loader-hex"
            pathLength="1"
            points="50,5 90,27.5 90,72.5 50,95 10,72.5 10,27.5"
            fill="none"
            stroke="#64ffda"
            strokeWidth="5"
            strokeLinejoin="round"
          />
          <text
            className="loader-letter"
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
      </div>
    </div>
  )
}