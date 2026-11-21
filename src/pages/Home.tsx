import { ArrowUpRight, Globe, Star } from 'lucide-react'
import { useEffect } from 'react'

import { GithubIcon, Reveal } from '../components/Bits'
import { Nav } from '../components/Nav'
import { SkinStage } from '../components/SkinStage'
import { ABOUT, CREW, LINKS, PROGRAMS, SITE, SKIN, TEAM, type Program } from '../data'
import { cx } from '../lib/cx'

/**
 * The repositories ride an ellipse around the crew: two on each side, one at
 * each end. `connector` draws the dot line back toward the centre.
 */
const FLOATS: Array<{
  name: string
  position: string
  connector: 'left' | 'right' | null
  delay: number
}> = [
  { name: 'Vulkan-map', position: 'left-0 top-[25%]', connector: 'left', delay: 0 },
  { name: 'voice-text-translator-for-minecraft', position: 'right-0 top-[25%]', connector: 'right', delay: 0.8 },
  { name: 'Vulkan-map2', position: 'left-[calc(29%_-_103px)] top-0', connector: null, delay: 1.5 },
  { name: 'AURA-Finale', position: 'left-[calc(71%_-_103px)] top-0', connector: null, delay: 2.2 },
  { name: 'game-of-life', position: 'left-0 top-[61%]', connector: 'left', delay: 0.4 },
  { name: 'Mathlib', position: 'right-0 top-[61%]', connector: 'right', delay: 1.1 },
  { name: 'sitoalmanacco', position: 'left-[calc(29%_-_103px)] bottom-0', connector: null, delay: 1.9 },
  { name: 'GradeProgettoAurificato', position: 'left-[calc(71%_-_103px)] bottom-0', connector: null, delay: 0.6 },
]

/** One colour per language, used by the dots and the floating cards. */
const langDot: Record<Program['language'], string> = {
  Java: 'bg-violet shadow-[0_0_10px_rgba(160,107,255,0.85)]',
  'C++': 'bg-pink shadow-[0_0_10px_rgba(255,122,217,0.85)]',
  HTML: 'bg-cyan shadow-[0_0_10px_rgba(110,231,255,0.85)]',
}

const langText: Record<Program['language'], string> = {
  Java: 'text-violet-light',
  'C++': 'text-pink',
  HTML: 'text-cyan',
}

function FloatCard({
  program,
  position,
  connector,
  delay,
}: {
  program: Program
  position: string
  connector: 'left' | 'right' | null
  delay: number
}) {
  return (
    <li
      className={cx('group pointer-events-auto absolute w-[206px]', position)}
      style={{ animation: 'float 9s ease-in-out infinite', animationDelay: `${delay}s` }}
    >
      <a
        href={program.href}
        target="_blank"
        rel="noreferrer"
        className="relative block rounded-[var(--radius-card-sm)] border border-line bg-night/75 p-3.5 backdrop-blur-md transition-[border-color,background-color,box-shadow] duration-[var(--duration-base)] short-laptop:p-2.5 hov:border-violet/60 hov:bg-night/90 hov:shadow-[var(--shadow-float)]"
      >
        <span className="flex items-center gap-2">
          <span className={cx('size-2 shrink-0 rounded-full', langDot[program.language])} aria-hidden />
          <span className={cx('caps', langText[program.language])}>{program.language}</span>
          {program.stars > 0 && (
            <span className="ml-auto inline-flex items-center gap-1 text-[10px] text-faint">
              <Star className="size-2.5" aria-hidden />
              {program.stars}
            </span>
          )}
        </span>
        <span
          title={program.name}
          className="mt-2 line-clamp-2 text-[12.5px] leading-snug font-medium break-words text-ink transition-colors short-laptop:mt-1.5 short-laptop:text-[12px] group-hov:text-violet-light"
        >
          {program.name}
        </span>

        {connector && (
          <>
            <span
              aria-hidden
              className={cx(
                'absolute top-1/2 h-px w-12 bg-gradient-to-r from-violet/45 to-transparent',
                connector === 'left' ? '-right-12' : '-left-12 rotate-180',
              )}
            />
            <span
              aria-hidden
              className={cx(
                'absolute top-1/2 size-1.5 -translate-y-1/2 rounded-full border border-violet/60 bg-violet/40',
                connector === 'left' ? '-right-[3.1rem]' : '-left-[3.1rem]',
              )}
            />
          </>
        )}
      </a>
    </li>
  )
}

function Stage() {
  const floats = FLOATS.map((f) => ({
    ...f,
    program: PROGRAMS.find((p) => p.name === f.name),
  })).filter((f): f is (typeof FLOATS)[number] & { program: Program } => Boolean(f.program))

  return (
    <div className="mx-auto mt-6 flex min-h-[190px] w-full max-w-[1040px] flex-1 flex-col short-laptop:mt-3.5">
      <div className="relative min-h-0 flex-1">
      {/* Spotlight and floor */}
      <div
        aria-hidden
        className="absolute top-0 left-1/2 h-[88%] w-[min(90%,620px)] -translate-x-1/2 bg-[radial-gradient(ellipse_at_top,rgba(160,107,255,0.26),transparent_66%)]"
      />
      <div aria-hidden className="absolute bottom-5 left-1/2 h-24 w-[min(80%,440px)] -translate-x-1/2">
        <div className="absolute inset-0 rounded-[50%] bg-violet/25 blur-2xl" />
        <div className="absolute inset-x-0 bottom-1/2 h-px bg-gradient-to-r from-transparent via-violet-light/60 to-transparent" />
        <div className="absolute inset-x-[14%] bottom-[34%] h-14 rounded-[50%] border border-violet/35" />
        <div className="absolute inset-x-[26%] bottom-[30%] h-10 rounded-[50%] border border-violet/20" />
      </div>

      {/* The skin */}
      <SkinStage pauseOffscreen className="absolute inset-x-0 top-0 z-10 h-full" />

      {/* Repositories riding an ellipse around the crew */}
      <ul className="pointer-events-none absolute inset-0 z-20 hidden lg:block">
        {floats.map((f) => (
          <FloatCard
            key={f.name}
            program={f.program}
            position={f.position}
            connector={f.connector}
            delay={f.delay}
          />
        ))}
      </ul>

      </div>

      <p className="caps mt-2 text-center text-[10px] text-faint">
        <span className="mr-1.5 inline-block size-1.5 rounded-full bg-violet align-middle" aria-hidden />
        {SKIN.caption}
      </p>
    </div>
  )
}

function Hero() {
  return (
    <section
      id="programs"
      className="relative flex min-h-[calc(100svh_-_1rem)] scroll-mt-3 flex-col overflow-hidden rounded-[var(--radius-card)] border border-line bg-card sm:min-h-[calc(100svh_-_1.5rem)]"
    >
      <div aria-hidden className="grid-bg pointer-events-none absolute inset-0 opacity-70" />
      <div
        aria-hidden
        className="animate-glow pointer-events-none absolute -top-32 left-1/2 size-[34rem] -translate-x-1/2 rounded-full bg-violet/15 blur-[120px]"
      />

      <div className="relative flex flex-1 flex-col px-3 pt-3 sm:px-5 sm:pt-4">
        <Nav />

        <div className="relative mt-7 text-center sm:mt-9 short-laptop:mt-3.5">
          <p className="caps mx-auto w-fit rounded-full border border-line bg-soft/60 px-3 py-1 text-[10px] text-violet-light short-laptop:hidden">
            {PROGRAMS.length} programs · 3 languages · one person
          </p>
          <h1 className="display mt-4 text-[clamp(2.5rem,8.4vw,6.2rem)] short-laptop:mt-0 short-laptop:text-[clamp(2rem,3.9vw,3rem)]">
            <span className="block short-laptop:inline">Minecraft mods.</span>{' '}
            <span className="block text-violet-light short-laptop:inline">Made to tinker.</span>
          </h1>
          <p className="mx-auto mt-3.5 max-w-md text-balance text-[15px] leading-relaxed text-muted short-laptop:mt-2 short-laptop:text-[14px]">
            Everything I have built, hanging around the skin. Click a card to open its repository.
          </p>
        </div>

        <Stage />
      </div>

      {/* The strip of every program, like the reference's bottom row */}
      <div className="relative z-10 border-t border-line bg-night/40 px-3 py-2.5 sm:px-5">
        <ul className="flex gap-1.5 overflow-x-auto pb-0.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {PROGRAMS.map((p) => (
            <li key={p.name}>
              <a
                href={p.href}
                target="_blank"
                rel="noreferrer"
                className="caps inline-flex h-9 items-center gap-2 rounded-full border border-line bg-soft/60 px-3 text-[10px] whitespace-nowrap text-muted transition-colors hov:border-violet/60 hov:text-ink"
              >
                <span className={cx('size-2 rounded-full', langDot[p.language])} aria-hidden />
                {p.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function Links() {
  return (
    <section id="links" aria-labelledby="links-title" className="scroll-mt-3 px-2 sm:px-3">
      <div className="rounded-[var(--radius-card)] border border-line bg-card px-4 py-7 sm:px-7 sm:py-9">
        <p className="caps text-violet">01 — links</p>
        <div className="mt-3 flex flex-wrap items-end justify-between gap-4">
          <h2 id="links-title" className="display text-[clamp(2.2rem,6vw,4rem)]">
            Find me here.
          </h2>
          <span className="caps text-faint">All external</span>
        </div>

        <ul className="mt-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {LINKS.map((link, i) => {
            const Icon = link.kind === 'github' ? GithubIcon : Globe
            return (
              <li key={link.label}>
                <Reveal delay={i * 0.05} className="h-full">
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex h-full flex-col rounded-[var(--radius-card-sm)] border border-line bg-soft/60 p-4 transition-[border-color,background-color,transform] duration-[var(--duration-base)] hov:-translate-y-0.5 hov:border-violet/50 hov:bg-soft"
                  >
                    <span className="flex items-center justify-between">
                      <span className="inline-flex size-9 items-center justify-center rounded-[var(--radius-xs)] border border-line-strong bg-card text-violet-light">
                        <Icon className="size-4" />
                      </span>
                      <ArrowUpRight
                        className="size-4 text-violet-light transition-transform duration-[var(--duration-base)] group-hov:-translate-y-0.5 group-hov:translate-x-0.5"
                        aria-hidden
                      />
                    </span>
                    <span className="mt-4 text-[15px] font-medium text-ink group-hov:text-violet-light">{link.label}</span>
                    <span className="mono mt-0.5 truncate text-[11px] text-violet-light/80">{link.handle}</span>
                    <span className="mt-2 text-sm leading-relaxed text-muted">{link.note}</span>
                  </a>
                </Reveal>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="scroll-mt-3 px-2 sm:px-3">
      <div className="grid gap-2 lg:grid-cols-[1.45fr_1fr]">
        <div className="rounded-[var(--radius-card)] border border-line bg-card px-4 py-7 sm:px-7 sm:py-9">
          <p className="caps text-violet">02 — about</p>
          <h2 id="about-title" className="display mt-3 text-[clamp(2rem,5.4vw,3.4rem)]">
            {ABOUT.title.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>
          <div className="mt-5 grid max-w-xl gap-4 text-[15px] leading-relaxed text-muted">
            {ABOUT.paragraphs.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
        </div>

        <div className="rounded-[var(--radius-card)] border border-line bg-card px-4 py-7 sm:px-7 sm:py-9">
          <p className="caps text-violet">At a glance</p>
          <dl className="mt-5 divide-y divide-line">
            {ABOUT.facts.map((f) => (
              <div key={f.term} className="flex items-baseline justify-between gap-4 py-3">
                <dt className="caps text-faint">{f.term}</dt>
                <dd className="text-right text-sm text-ink-2">{f.value}</dd>
              </div>
            ))}
          </dl>
          <a
            href={SITE.github}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex h-11 items-center gap-2 rounded-full border border-line-strong px-5 text-sm font-medium text-ink transition-colors hov:border-violet hov:bg-violet hov:text-white"
          >
            <GithubIcon className="size-4" />
            Browse the source
            <ArrowUpRight className="size-4" aria-hidden />
          </a>
        </div>
      </div>
    </section>
  )
}

function Team() {
  return (
    <section id="gruppo" aria-labelledby="gruppo-title" className="scroll-mt-3 px-2 sm:px-3">
      <div className="rounded-[var(--radius-card)] border border-line bg-card px-4 py-7 sm:px-7 sm:py-9">
        <p className="caps text-violet">03 — the crew</p>
        <div className="mt-3 flex flex-wrap items-end justify-between gap-x-4 gap-y-3">
          <div>
            <h2 id="gruppo-title" className="display text-[clamp(2.2rem,6vw,4rem)]">
              Tuff Gruppo.
            </h2>
            <p className="mt-3 max-w-lg text-[15px] leading-relaxed text-muted">
              Everyone in the group, in skin form.
            </p>
          </div>
          <a
            href={CREW.href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-10 shrink-0 items-center gap-2 rounded-full border border-line-strong px-4 text-sm font-medium text-ink transition-colors duration-[var(--duration-base)] hov:border-violet hov:bg-violet hov:text-white"
          >
            <GithubIcon className="size-4" />
            {CREW.name} on GitHub
            <ArrowUpRight className="size-4" aria-hidden />
          </a>
        </div>

        <ul className="mt-6 grid grid-cols-2 gap-2.5 lg:mx-auto lg:max-w-[660px] lg:grid-cols-4 lg:gap-3">
          {TEAM.map((member) => (
            <li
              key={member.ign}
              className="flex items-center gap-3 rounded-[var(--radius-card-sm)] border border-line bg-night/50 px-3 py-3"
            >
              <img
                src={member.render}
                alt={`${member.name}'s Minecraft skin`}
                className="h-16 w-auto shrink-0 drop-shadow-[0_8px_18px_rgba(0,0,0,0.55)]"
                draggable={false}
              />
              <div className="min-w-0">
                <p className="truncate text-sm font-medium text-ink">{member.name}</p>
                <p className="mono truncate text-[11px] text-violet-light/80">@{member.ign}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export function Home() {
  useEffect(() => {
    document.title = 'lozampy — Minecraft mods & tools'
  }, [])

  return (
    <div className="grid gap-2 p-2 sm:p-3">
      <Hero />
      <Links />
      <About />
      <Team />
    </div>
  )
}
