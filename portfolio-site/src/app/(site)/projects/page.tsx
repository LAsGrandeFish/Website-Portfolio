import { projects } from "../content";

export default function ProjectsPage() {
  return (
    <section aria-label="Projects" className="space-y-8">
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">Projects</p>
          <h1 className="mt-2 font-serif text-3xl text-neutral-900 sm:text-4xl">
            Selected side work with measurable impact
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-neutral-700">
            A mix of experiments and long-running side efforts that explore observability, collaboration, and offline-first experiences.
            Each project link includes a deeper breakdown of outcomes and implementation details.
          </p>
        </div>
        <a className="hidden text-sm font-medium text-neutral-600 hover:text-neutral-900 sm:inline" href="mailto:hello@example.com">
          Request a walkthrough
        </a>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <article key={project.title} className="flex h-full flex-col justify-between rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
            <div className="space-y-4">
              <h2 className="font-serif text-2xl text-neutral-900">{project.title}</h2>
              <p className="text-sm leading-relaxed text-neutral-700">{project.description}</p>
            </div>
            <div className="mt-6 flex items-center justify-between text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
              <span>{project.tech}</span>
              <a className="text-neutral-700 transition hover:text-neutral-900" href={project.href}>
                Case study
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
