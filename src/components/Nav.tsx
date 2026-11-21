import { ArrowUpRight } from 'lucide-react'

import { NAV, SITE } from '../data'
import { Logo } from './Bits'

/** Floating pill header that sits over the hero stage. */
export function Nav() {
  return (
    <header className="relative z-20 flex items-center justify-between gap-3 rounded-full border border-line bg-night/60 py-1.5 pr-1.5 pl-3 backdrop-blur-md sm:pl-4">
      <a href="#top" aria-label={`${SITE.name} home`} className="-m-1 rounded-[var(--radius-xs)] p-1">
        <Logo />
      </a>

      <nav aria-label="Sections" className="hidden md:block">
        <ul className="flex items-center gap-6">
          {NAV.map((item) => (
            <li key={item.to}>
              <a
                href={item.to}
                className="inline-flex min-h-9 items-center px-1 text-[13px] font-medium text-muted transition-colors duration-[var(--duration-fast)] hov:text-ink"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <a
        href={SITE.github}
        target="_blank"
        rel="noreferrer"
        className="inline-flex h-9 items-center gap-1.5 rounded-full bg-ink px-3.5 text-[13px] font-medium text-canvas transition-[background-color,box-shadow] duration-[var(--duration-fast)] hov:bg-violet hov:text-white hov:shadow-[var(--shadow-violet)]"
      >
        GitHub
        <ArrowUpRight className="size-3.5" strokeWidth={2} aria-hidden />
      </a>
    </header>
  )
}
