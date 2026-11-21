/**
 * Every string and figure on the site lives here.
 * Links: add an entry to LINKS and it appears in the Links section.
 */

export const SITE = {
  name: 'lozampy',
  handle: '@lozampy',
  avatar: '/images/avatar.jpg',
  avatarAlt: 'lozampy',
  eyebrow: 'Minecraft modder · toolmaker',
  tagline: 'Minecraft mods in Java, small programs in C++, and the occasional website.',
  github: 'https://github.com/lozampy',
  blurb:
    'I build things for Minecraft — mostly mods in Java — and smaller programs in C++ when an idea needs one. Some of it is serious. Some of it is whatever I felt like making that week.',
}

/**
 * The skin on the stage. /public/skin.png is the 64×64 skin texture the 3D
 * viewer loads (currently the default Steve as a placeholder); /public/skin-360.png
 * is the static render shown if WebGL is unavailable. Drop in your own files, or
 * ask me to fetch them from your Minecraft username, and nothing else changes.
 */
export const SKIN = {
  name: 'LoZampy',
  texture: '/skin.png',
  render: '/skin-360.png',
  caption: "LoZampy's skin · drag to turn",
}

/** The crew's GitHub organisation. */
export const CREW = {
  name: 'TUFFgruppo',
  href: 'https://github.com/TUFFgruppo',
}

/** The Tuff Gruppo crew. A blank white skin stands in where there is none yet. */
export type Member = {
  name: string
  ign: string
  texture: string
  render: string
}

export const TEAM: Member[] = [
  { name: 'LoZampy', ign: 'LoZampy', texture: SKIN.texture, render: SKIN.render },
  { name: 'ConDan 10', ign: 'elementi', texture: '/skin-elementi.png', render: '/skin-elementi-360.png' },
  { name: 'jackjackxi', ign: 'jackjackxi', texture: '/skin-white.png', render: '/skin-white-360.png' },
  { name: 'leos', ign: 'leos', texture: '/skin-white.png', render: '/skin-white-360.png' },
]

export type Language = 'Java' | 'C++' | 'HTML'

export type Program = {
  name: string
  description: string
  language: Language
  href: string
  demo?: string
  stars: number
  forks: number
  license?: string
}

export const LANGUAGES: Array<'All' | Language> = ['All', 'Java', 'C++', 'HTML']

/** Newest first. Every entry links straight to its public repository. */
export const PROGRAMS: Program[] = [
  {
    name: 'voice-text-translator-for-minecraft',
    description: 'A Minecraft mod that turns speech into text, with translation.',
    language: 'Java',
    href: 'https://github.com/lozampy/voice-text-translator-for-minecraft',
    stars: 0,
    forks: 0,
  },
  {
    name: 'Vulkan-map',
    description: 'A Vulkan map mod for Minecraft.',
    language: 'Java',
    href: 'https://github.com/lozampy/Vulkan-map',
    stars: 1,
    forks: 4,
  },
  {
    name: 'GradeProgettoAurificato',
    description: 'An HTML project from school.',
    language: 'HTML',
    href: 'https://github.com/lozampy/GradeProgettoAurificato',
    stars: 0,
    forks: 0,
  },
  {
    name: 'sitoalmanacco',
    description: 'The almanac as a plain website — the HTML remake of the original.',
    language: 'HTML',
    href: 'https://github.com/lozampy/sitoalmanacco',
    demo: 'https://sitoalmanacco.vercel.app',
    stars: 0,
    forks: 0,
  },
  {
    name: 'Vulkan-map2',
    description: 'The second pass at the map mod, released under CC0.',
    language: 'Java',
    href: 'https://github.com/lozampy/Vulkan-map2',
    stars: 0,
    forks: 0,
    license: 'CC0-1.0',
  },
  {
    name: 'AURA-Finale',
    description: 'A grab bag of experiments in C++.',
    language: 'C++',
    href: 'https://github.com/lozampy/AURA-Finale',
    stars: 2,
    forks: 1,
  },
  {
    name: 'game-of-life',
    description: "Conway's Game of Life, written from scratch in C++.",
    language: 'C++',
    href: 'https://github.com/lozampy/game-of-life',
    stars: 0,
    forks: 0,
  },
  {
    name: 'Mathlib',
    description: 'A small C++ maths library.',
    language: 'C++',
    href: 'https://github.com/lozampy/Mathlib',
    stars: 0,
    forks: 0,
  },
]

export type LinkItem = {
  label: string
  handle: string
  note: string
  href: string
  kind: 'github' | 'site'
}

/**
 * Add your Discord, X, email or anything else here as another entry —
 * { label: 'Discord', handle: 'yourname', note: 'DMs open', href: 'https://discord.com/users/…', kind: 'site' }
 */
export const LINKS: LinkItem[] = [
  {
    label: 'GitHub',
    handle: '@lozampy',
    note: 'Every repo, commit and half-finished idea.',
    href: 'https://github.com/lozampy',
    kind: 'github',
  },
  {
    label: 'Almanacco',
    handle: 'sitoalmanacco.vercel.app',
    note: 'The HTML almanac, live in a browser.',
    href: 'https://sitoalmanacco.vercel.app',
    kind: 'site',
  },
  {
    label: 'Almanacco Maggico',
    handle: 'almanaccomaggico.vercel.app',
    note: 'The original almanac, also live.',
    href: 'https://almanaccomaggico.vercel.app',
    kind: 'site',
  },
]

export const ABOUT = {
  title: ['What I', 'actually do.'],
  paragraphs: [
    SITE.blurb,
    'The Minecraft work is the main thread: mods in Java, built and broken until they behave. The rest is C++ — a Game of Life, a maths library, whatever the idea needs — plus a couple of almanac sites I keep online.',
    'Everything is public on GitHub, including the things that never got finished. That is usually the interesting part.',
  ],
  facts: [
    { term: 'Languages', value: 'Java · C++ · HTML' },
    { term: 'Public repos', value: '10' },
    { term: 'On GitHub since', value: '2025' },
    { term: 'Focus', value: 'Minecraft mods' },
  ],
}

export const NAV = [
  { label: 'Programs', to: '#programs' },
  { label: 'Links', to: '#links' },
  { label: 'About', to: '#about' },
  { label: 'Tuff Gruppo', to: '#gruppo' },
]

export const FOOTER = {
  note: 'Minecraft mods, C++ programs and a couple of websites. No trackers, no cookie banner, no newsletter.',
  legal: '© 2026 lozampy',
}
