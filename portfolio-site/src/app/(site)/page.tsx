import Image from "next/image";
import Link from "next/link";

import { posts, projects, resources } from "./content";

const featuredProjects = projects.slice(0, 2);
const featuredPosts = posts.slice(0, 2);
const highlightedResources = resources.slice(0, 2);

export default function HomePage() {
  return (
    <>
      <section aria-label="Hero" className="space-y-10">
        <div className="flex flex-wrap items-center gap-3 text-sm text-neutral-500">
          <Link className="hover:text-neutral-800" href="/">
            Home
          </Link>
          <span aria-hidden className="text-neutral-400">/</span>
          <span>Profile</span>
        </div>
        <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr]">
          <div className="rounded-3xl bg-[#F2ECE3] p-10 sm:p-14">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-neutral-500">
              Software Engineer / Builder / Mentor
            </p>
            <h1 className="mt-6 font-serif text-4xl leading-tight text-neutral-900 sm:text-5xl md:text-6xl">
              Shipping polished, human-centered products end-to-end.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-neutral-700 sm:text-lg">
              I thrive in the messy middle between product and platform teams, identifying the signal, instrumenting data, and crafting
              interfaces that make complex systems feel effortless.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                className="rounded-full bg-neutral-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800"
                href="/projects"
              >
                View projects
              </Link>
              <a
                className="rounded-full border border-neutral-900 px-6 py-3 text-sm font-semibold text-neutral-900 transition hover:bg-neutral-900 hover:text-white"
                href="/resume.pdf"
              >
                Download resume
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="aspect-square w-full max-w-sm overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-200 shadow-sm">
              <Image
                alt="Portrait placeholder"
                className="h-full w-full object-cover"
                height={480}
                src="/profile-placeholder.svg"
                width={480}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section aria-label="Highlights" className="grid gap-6 md:grid-cols-3">
        <Link
          className="flex h-full flex-col justify-between rounded-2xl border border-neutral-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-md"
          href="/about"
        >
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">About</p>
            <h2 className="font-serif text-2xl text-neutral-900">Snapshot of my experience</h2>
            <p className="text-sm leading-relaxed text-neutral-700">
              Six years of product engineering across fintech and productivity tooling with a focus on observability and design systems.
            </p>
          </div>
          <span className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">Explore</span>
        </Link>
        <Link
          className="flex h-full flex-col justify-between rounded-2xl border border-neutral-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-md"
          href="/projects"
        >
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">Projects</p>
            <h2 className="font-serif text-2xl text-neutral-900">Selected side work</h2>
            <ul className="space-y-2 text-sm leading-relaxed text-neutral-700">
              {featuredProjects.map((project) => (
                <li key={project.title}>- {project.title}</li>
              ))}
            </ul>
          </div>
          <span className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">See all</span>
        </Link>
        <Link
          className="flex h-full flex-col justify-between rounded-2xl border border-neutral-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-md"
          href="/resources"
        >
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">Resources</p>
            <h2 className="font-serif text-2xl text-neutral-900">Playbooks and talks</h2>
            <ul className="space-y-2 text-sm leading-relaxed text-neutral-700">
              {highlightedResources.map((item) => (
                <li key={item.title}>- {item.title}</li>
              ))}
            </ul>
          </div>
          <span className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">Browse</span>
        </Link>
      </section>

      <section aria-label="Latest writing" className="space-y-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">Blog</p>
            <h2 className="mt-2 font-serif text-3xl text-neutral-900 sm:text-4xl">Recent ideas on resilient products</h2>
          </div>
          <Link className="hidden text-sm font-medium text-neutral-600 hover:text-neutral-900 sm:inline" href="/blog">
            View all
          </Link>
        </div>
        <div className="grid gap-4">
          {featuredPosts.map((post) => (
            <div
              key={post.title}
              className="flex flex-col justify-between gap-2 rounded-2xl border border-neutral-200 bg-white px-6 py-5 transition hover:-translate-y-0.5 hover:border-neutral-400"
            >
              <span className="text-xs font-medium uppercase tracking-[0.3em] text-neutral-500">{post.date}</span>
              <h3 className="font-serif text-2xl text-neutral-900">{post.title}</h3>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
