export default function SectionHeading({ children }) {
  return (
    <h2 className="mb-10 flex w-full items-center text-[clamp(1.6rem,5vw,2rem)] font-semibold text-lightest-slate">
      {children}
      <span className="ml-5 h-px flex-1 bg-lightest-slate/20 sm:max-w-xs" />
    </h2>
  )
}