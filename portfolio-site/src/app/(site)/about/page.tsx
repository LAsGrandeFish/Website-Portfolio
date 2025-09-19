const facts = [
  { label: "Location", value: "Seattle, WA" },
  { label: "Currently", value: "Senior SWE @ Builder Lab" },
  { label: "Focus Areas", value: "Platform UX / Observability / Design Systems" },
  { label: "Open To", value: "Staff+ product engineering roles" },
];

export default function AboutPage() {
  return (
    <section className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
      <div className="space-y-6">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">About</p>
        <h1 className="font-serif text-3xl text-neutral-900 sm:text-4xl">A quick snapshot of the work I lead</h1>
        <p className="text-base leading-relaxed text-neutral-700">
          I am a product-minded engineer with six years of experience shipping customer-facing experiences across fintech, internal tooling,
          and productivity platforms. My sweet spot is partnering with design and product peers to translate fuzzy business goals into
          instrumented, measurable solutions.
        </p>
        <p className="text-base leading-relaxed text-neutral-700">
          Recently I have been focused on developer experience, building telemetry pipelines that uncover latency outliers, and crafting
          component libraries that keep accessibility front and center. Outside of work you will usually find me mentoring early-career
          engineers or experimenting with hardware projects.
        </p>
        <div>
          <h2 className="font-semibold text-neutral-900">How I approach new initiatives</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-neutral-700">
            <li>Start with discovery interviews and lightweight prototypes to align on the customer job.</li>
            <li>Instrument the happy path and edge cases so we can observe performance from the first deploy.</li>
            <li>Coach the team on iteration rituals that keep quality, accessibility, and velocity balanced.</li>
          </ul>
        </div>
      </div>
      <dl className="grid gap-4 self-start rounded-2xl border border-neutral-200 bg-white p-6 text-sm text-neutral-600 sm:grid-cols-2">
        {facts.map((fact) => (
          <div key={fact.label}>
            <dt className="font-medium text-neutral-500">{fact.label}</dt>
            <dd className="mt-1 text-neutral-900">{fact.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
