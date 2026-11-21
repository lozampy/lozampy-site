import { ArrowUpRight } from 'lucide-react'

import { FOOTER, NAV, SITE } from '../data'
import { Logo } from './Bits'

export function Footer() {
  return (
    <footer className="px-2 pb-2 sm:px-3 sm:pb-3">
      <div className="relative overflow-hidden rounded-[var(--radius-card)] border border-line bg-card px-5 pt-9 sm:px-8 sm:pt-12">
        <div className="grid gap-9 sm:grid-cols-[1.3fr_auto]">
          <div className="max-w-md">
            <Logo />
            <p className="mt-4 text-[15px] leading-relaxed text-muted">{FOOTER.note}</p>
          </div>

          <div className="flex flex-wrap gap-x-12 gap-y-6">
            <nav aria-label="Footer">
              <p className="caps mb-2 text-faint">Sections</p>
              <ul>
                {NAV.map((item) => (
                  <li key={item.to}>
                    <a href={item.to} className="inline-flex min-h-10 items-center text-sm text-ink-2 hov:text-violet-light">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div>
              <p className="caps mb-2 text-faint">Elsewhere</p>
              <ul>
                <li>
                  <a
                    href={SITE.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-10 items-center gap-1 text-sm text-ink-2 hov:text-violet-light"
                  >
                    GitHub
                    <ArrowUpRight className="size-3.5" aria-hidden />
                  </a>
                </li>
                <li>
                  <a href="#links" className="inline-flex min-h-10 items-center text-sm text-ink-2 hov:text-violet-light">
                    All links
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <p
          aria-hidden
          className="display mt-12 -mb-[0.1em] bg-gradient-to-b from-violet/50 to-violet/0 bg-clip-text text-center text-[clamp(3.6rem,-0.5rem+18vw,15rem)] text-transparent select-none"
        >
          𝙻𝚘𝚉𝚊𝚖𝚙𝚢
        </p>

        <div className="mt-5 flex flex-col items-start justify-between gap-2 border-t border-line py-4 text-xs text-faint sm:flex-row sm:items-center">
          <span>{FOOTER.legal} · Built with React, Vite &amp; a purple skin</span>
          <a href="#top" className="inline-flex min-h-9 items-center text-ink-2 hov:text-violet-light">
            Back to top
          </a>
        </div>
      </div>
    </footer>
  )
}
