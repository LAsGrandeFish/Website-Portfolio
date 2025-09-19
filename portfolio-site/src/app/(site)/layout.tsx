import Link from "next/link";
import { ReactNode } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/resources", label: "Resources" },
  { href: "/blog", label: "Blog" },
];

export default function SiteLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <div className="flex items-center gap-8">
            <Link className="text-lg font-semibold tracking-wide" href="/">
              Ivan Zapote
            </Link>
            <nav className="hidden items-center gap-6 text-sm font-medium text-neutral-600 md:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  className="transition-colors hover:text-neutral-900"
                  href={link.href}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
          <div className="flex items-center gap-3">
            <a
              className="hidden rounded-full border border-neutral-200 px-4 py-2 text-sm font-medium text-neutral-700 transition-colors hover:border-neutral-900 hover:text-neutral-900 sm:inline-flex"
              href="mailto:ivanzapote.careers@outlook.com"
            >
              Contact
            </a>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-neutral-300 text-neutral-700 transition hover:border-neutral-900 hover:text-neutral-900 md:hidden"
              aria-label="Toggle navigation"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto flex max-w-6xl flex-col gap-24 px-4 pb-24 pt-12 sm:px-6 sm:pb-32 sm:pt-16" id="top">
        {children}
      </main>

      <footer className="border-t border-neutral-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 text-sm text-neutral-500 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>(c) {new Date().getFullYear()} Ivan Zapote. Crafted with Next.js.</p>
          <div className="flex gap-4 text-sm">
            <a className="transition hover:text-neutral-800" href="mailto:ivanzapote.careers@outlook.com">
              ivanzapote.careers@outlook.com
            </a>
            <a className="transition hover:text-neutral-800" href="https://www.linkedin.com/in/ivan-zapote/" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a className="transition hover:text-neutral-800" href="https://github.com/LAsGrandeFish" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
