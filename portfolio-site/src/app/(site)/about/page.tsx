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
          Ivan Zapote is a software engineer with a strong foundation in computer science, holding a B.S. from the Georgia Institute of
          Technology with concentrations in Devices and Intelligence. Throughout his academic journey, he developed expertise in artificial
          intelligence, machine learning, computer vision, and software engineering.
        </p>
        <p className="text-base leading-relaxed text-neutral-700">
          Ivan blends creativity with rigorous problem-solving. His projects range from machine-learning models designed for healthcare to
          collaborative calendar conflict-resolution tools built on cloud platforms. Today he is focused on launching a Spotify playlist
          management web application that streamlines music library curation.
        </p>
        <p className="text-base leading-relaxed text-neutral-700">
          Guided by curiosity, creativity, and an unwavering belief in free will, Ivan approaches every build with a willingness to explore,
          iterate, and refine. His guiding principle is simple yet bold: <span className="italic">&quot;change the world.&quot;</span>
        </p>
        <p className="text-base leading-relaxed text-neutral-700">
          Outside of work, he is a dedicated soccer player and fan, and he enjoys exploring languages and global perspectives through news and
          storytelling. Those interests reflect his love of connection, culture, and continuous learning.
        </p>
        <div>
          <h2 className="font-semibold text-neutral-900">What guides my work</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-neutral-700">
            <li>Blend imagination with engineering discipline to craft useful, human-centered tools.</li>
            <li>Stay curious and iterate quickly, letting experiments reveal the next insight.</li>
            <li>Build experiences that spark connection and make room for people to explore freely.</li>
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
