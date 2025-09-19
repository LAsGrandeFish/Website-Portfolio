import { resources } from "../content";

export default function ResourcesPage() {
  return (
    <section aria-label="Resources" className="space-y-8">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">Resources</p>
        <h1 className="mt-2 font-serif text-3xl text-neutral-900 sm:text-4xl">Tools, talks, and notes worth sharing</h1>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-neutral-700">
          These are the artifacts I reference when helping teams kick off a new product area or scale an existing one. Most items link to
          public write-ups; reach out if you would like deeper dives or workshop material.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {resources.map((item) => (
          <a
            key={item.title}
            className="flex h-full flex-col justify-between rounded-2xl border border-neutral-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-md"
            href={item.href}
          >
            <div className="space-y-4">
              <h2 className="font-serif text-xl text-neutral-900">{item.title}</h2>
              <p className="text-sm leading-relaxed text-neutral-700">{item.description}</p>
            </div>
            <span className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">Open</span>
          </a>
        ))}
      </div>
    </section>
  );
}
