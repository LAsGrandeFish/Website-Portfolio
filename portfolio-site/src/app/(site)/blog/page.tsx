import { posts } from "../content";

export default function BlogPage() {
  return (
    <section aria-label="Blog" className="space-y-8">
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">Blog</p>
          <h1 className="mt-2 font-serif text-3xl text-neutral-900 sm:text-4xl">Writing on building resilient products</h1>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-neutral-700">
            Essays and notes covering observability, product delivery, and design systems. I publish new entries every few weeks as I wrap
            up experiments or share learnings from mentoring sessions.
          </p>
        </div>
        <a className="hidden text-sm font-medium text-neutral-600 hover:text-neutral-900 sm:inline" href="mailto:hello@example.com">
          Request a topic
        </a>
      </div>
      <div className="grid gap-4">
        {posts.map((post) => (
          <a
            key={post.title}
            className="flex flex-col justify-between gap-2 rounded-2xl border border-neutral-200 bg-white px-6 py-5 transition hover:-translate-y-0.5 hover:border-neutral-400"
            href={post.href}
          >
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-neutral-500">{post.date}</span>
            <h2 className="font-serif text-2xl text-neutral-900">{post.title}</h2>
          </a>
        ))}
      </div>
    </section>
  );
}
