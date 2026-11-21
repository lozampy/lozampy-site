// Every string, link and piece of seed data for the site lives here.
// Start editing from the top: SITE, then the page sections below it.

export const SITE = {
  name: 'Lastwerk',
  tagline: 'Limitless design solutions',
  email: 'hello@lastwerk.studio',
  phone: '+49 30 5557 0190',
  address: ['Lastwerk Studio', 'Lohmühlenstraße 65', '12435 Berlin'],
  hours: 'Monday to Friday, 9:00–18:00 CET',
  socials: [
    { label: 'Instagram', href: 'https://instagram.com' },
    { label: 'Behance', href: 'https://www.behance.net' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com' },
    { label: 'Dribbble', href: 'https://dribbble.com' },
  ],
}

/** Main navigation. The first four sit in the header; the menu shows all of them. */
export const NAV = [
  { label: 'About', to: '/studio' },
  { label: 'Services', to: '/services' },
  { label: 'Project', to: '/work' },
  { label: 'Testimony', to: '/#testimony' },
]
export const MENU = [
  { label: 'Home', to: '/' },
  { label: 'Work', to: '/work' },
  { label: 'Services', to: '/services' },
  { label: 'Studio', to: '/studio' },
  { label: 'Careers', to: '/careers' },
  { label: 'Start a project', to: '/contact' },
]

/*
  Photography and renders. Every image on the site goes through this one
  constant: swap `src` for your own file in public/images/ (or any URL) and
  update `alt`. The placeholders are generated, not real client work.
  The `holo*` entries are the iridescent chrome objects (transparent webp);
  set one's `src` to '' to fall back to its SVG drawing in components/Holo.tsx.
*/
export const IMAGES = {
  aurora: { src: '/images/aurora.webp', alt: 'Soft translucent 3D forms in mint, peach and lilac on a pale background' },
  fold: { src: '/images/fold.webp', alt: 'Geometric shapes pressed into cream cotton paper beside a stack of colour-blocked book covers' },
  halcyon: { src: '/images/halcyon.webp', alt: 'Calm hotel lobby with a curved travertine reception desk and warm indirect light' },
  kite: { src: '/images/kite.webp', alt: 'Orange technical jacket hung against a green wall in hard sunlight' },
  meridian: { src: '/images/meridian.webp', alt: 'Two phones showing a banking app on a cobalt blue background' },
  nocturne: { src: '/images/nocturne.webp', alt: 'Swirling violet, magenta and teal liquid on black' },
  portrait: { src: '/images/portrait.webp', alt: 'The studio worktable with printed layouts, swatches and a moodboard in morning light' },
  ostra: { src: '/images/ostra.webp', alt: 'Ceramic jug and cups on linen in warm morning light' },
  glass: { src: '/images/glass.webp', alt: 'Clear glass carafe and tumbler casting light on a pale grey surface' },
  lookbook: { src: '/images/lookbook.webp', alt: 'Wooden bench with a folded throw beside a paper floor lamp in a bright room' },
  holoKnot: { src: '/images/holo/knot.webp', alt: '' },
  holoSphere: { src: '/images/holo/sphere.webp', alt: '' },
  holoCloud: { src: '/images/holo/cloud.webp', alt: '' },
  holoScissors: { src: '/images/holo/scissors.webp', alt: '' },
  holoStar: { src: '/images/holo/star.webp', alt: '' },
  holoPrism: { src: '/images/holo/prism.webp', alt: '' },
} as const satisfies Record<string, { src: string; alt: string }>
export type ImageKey = keyof typeof IMAGES

export const HOME = {
  stats: [
    { value: 300, label: ['Success', 'project'] },
    { value: 200, label: ['Product', 'launches'] },
    { value: 100, label: ['Startup', 'raised'] },
  ],
  captionTop: 'Unleashing boundless creativity for your brand',
  captionBottom: 'Visionary designers dedicated to transforming your ideas into visuals',
  headline: ['Limitless', 'design', 'solutions'],
  reachOut: 'Reach out',
  servicesTitle: ['Explore our', 'services'],
  manifestoTitle: ['A world', 'of infinite', 'ideas'],
  manifesto:
    'At our agency, we believe in breaking boundaries and pushing the limits of creativity. Our team of visionary designers and strategists is dedicated to transforming your ideas into extraordinary visual experiences.',
  approachTitle: ['Our excellent', 'approach'],
  workTitle: ['Selected', 'work'],
  testimonyTitle: ['Kind words', 'from clients'],
  clientsLabel: 'Trusted by teams at',
  cta: { title: ['Have a project', 'in mind?'], body: 'Tell us what you are making. We reply to every brief within two working days.', action: 'Start a project' },
}

export const CLIENTS = ['Aurora Labs', 'Fold Press', 'Halcyon', 'Kite Outdoor', 'Meridian', 'Nocturne', 'Ostra Home', 'Parallel', 'Sundial', 'Vantage']

export type Service = {
  slug: string
  title: string
  short: string
  art: HoloKind
  intro: string
  deliverables: string[]
}
export type HoloKind = 'knot' | 'sphere' | 'cloud' | 'scissors' | 'star' | 'prism'

export const SERVICES: Service[] = [
  {
    slug: 'brand-identity',
    title: 'Brand identity creation',
    short: 'Crafting unique and memorable brand identities',
    art: 'star',
    intro: 'Names, marks, type and colour systems that hold up from a favicon to a building wrap, with guidelines your team will actually open.',
    deliverables: ['Brand strategy and positioning', 'Logo and wordmark', 'Type, colour and graphic systems', 'Brand guidelines', 'Launch toolkit'],
  },
  {
    slug: 'web-mobile',
    title: 'Web & mobile design',
    short: 'Crafting unique and memorable digital products',
    art: 'cloud',
    intro: 'Marketing sites, apps and design systems built for speed: responsive, accessible and handed over in components your engineers can ship.',
    deliverables: ['Marketing websites', 'iOS and Android apps', 'Design systems', 'Prototypes', 'Developer handoff'],
  },
  {
    slug: 'ux-ui',
    title: 'UX/UI design',
    short: 'Ensuring intuitive and delightful user experiences',
    art: 'prism',
    intro: 'Research, flows and interfaces that make complicated products feel obvious. We test with real people before a pixel is final.',
    deliverables: ['User research', 'Information architecture', 'Wireframes and flows', 'Interface design', 'Usability testing'],
  },
  {
    slug: 'motion-3d',
    title: 'Motion & 3D',
    short: 'Bringing brands to life in movement and depth',
    art: 'sphere',
    intro: 'Logo animation, product renders and campaign films. The iridescent objects on this site are our house style; yours will be your own.',
    deliverables: ['Logo and UI motion', '3D product renders', 'Campaign films', 'Social content kits'],
  },
  {
    slug: 'campaigns',
    title: 'Campaigns & content',
    short: 'Launching ideas people talk about',
    art: 'knot',
    intro: 'Launch campaigns across out-of-home, social and film, from the first idea to the final asset sizes.',
    deliverables: ['Campaign concepts', 'Art direction', 'Out-of-home and print', 'Social and paid assets'],
  },
]

export const APPROACH = [
  { title: 'Creative direction', body: 'One senior lead owns the idea from the first workshop to the final file.', art: 'knot' as HoloKind, tone: 'violet' as const },
  { title: 'Tailored design', body: 'Nothing off the shelf. Every system is cut to fit your brand and your team.', art: 'scissors' as HoloKind, tone: 'white' as const },
  { title: 'Rapid iteration', body: 'Weekly reviews, working prototypes and decisions made in the room.', art: 'star' as HoloKind, tone: 'white' as const },
  { title: 'Measured launch', body: 'We set the numbers that matter before launch and report on them after.', art: 'sphere' as HoloKind, tone: 'night' as const },
]

export const PROCESS = [
  { step: '01', title: 'Discover', body: 'Workshops, interviews and an audit of what you have. We leave with a one-page brief everyone signs.' },
  { step: '02', title: 'Define', body: 'Strategy, positioning and two or three creative routes, each argued for in plain language.' },
  { step: '03', title: 'Design', body: 'One route developed in full, reviewed weekly, tested with real users and real content.' },
  { step: '04', title: 'Deliver', body: 'Files, components, guidelines and a launch plan, plus 30 days of support after go-live.' },
]

export const ENGAGEMENTS = [
  { name: 'Sprint', price: 'From €18k', length: '2–3 weeks', body: 'A focused burst: a logo refresh, a landing page or a product concept.', points: ['One discipline', 'Two review rounds', 'Final files and handoff'] },
  { name: 'Project', price: 'From €45k', length: '6–12 weeks', body: 'A full identity or product design, from strategy to launch.', points: ['Strategy and creative routes', 'Weekly reviews', 'Guidelines or design system', '30 days of launch support'], featured: true },
  { name: 'Partnership', price: 'From €12k / month', length: 'Ongoing', body: 'A dedicated team that works as your in-house studio.', points: ['Reserved team capacity', 'Monthly planning', 'Priority turnaround'] },
]

export const FAQ = [
  { q: 'How soon can you start?', a: 'We usually start new projects three to five weeks after a brief is signed. Sprints can sometimes begin within a week.' },
  { q: 'Do you work with startups?', a: 'Yes. Around a third of our clients are pre-seed to Series A. We have helped more than a hundred startups raise with a new brand or product.' },
  { q: 'Who will I work with?', a: 'A creative director leads every project, with two to four designers. You meet the whole team at kickoff and talk to them directly.' },
  { q: 'Do you build websites too?', a: 'We design and hand over in production-ready components. For builds we partner with two development studios we trust, or work with your engineers.' },
  { q: 'Where are you based?', a: 'In Berlin, with clients across Europe and North America. Most work is remote; workshops happen wherever suits you.' },
]

export type Project = {
  slug: string
  client: string
  title: string
  year: number
  disciplines: string[]
  cover: ImageKey
  gallery: ImageKey[]
  summary: string
  challenge: string
  approach: string
  results: { value: string; label: string }[]
  quote?: { text: string; name: string; role: string }
  accent: string
}

export const DISCIPLINES = ['Branding', 'Digital', 'Motion', 'Campaign'] as const

export const PROJECTS: Project[] = [
  {
    slug: 'aurora-labs',
    client: 'Aurora Labs',
    title: 'A soft-tech identity for a materials science lab',
    year: 2026,
    disciplines: ['Branding', 'Motion'],
    cover: 'aurora',
    gallery: ['aurora', 'nocturne', 'glass'],
    summary: 'Aurora develops translucent bio-polymers. We built a brand that looks like the material: soft, layered and hard to pin down.',
    challenge: 'Aurora was raising its Series A with a deck full of microscope images and a name nobody could remember. Investors understood the science; nobody felt anything.',
    approach: 'We modelled the polymer itself in 3D and made it the logo: a living form that shifts colour with the light. A restrained type system keeps it serious.',
    results: [
      { value: '€24m', label: 'Series A raised after launch' },
      { value: '3.4×', label: 'More inbound partner enquiries' },
      { value: '11', label: 'Weeks from kickoff to launch' },
    ],
    quote: { text: 'Lastwerk gave our science a face. Investors started the meeting talking about the brand.', name: 'Dr. Ines Hartmann', role: 'Founder, Aurora Labs' },
    accent: '#b9a2ff',
  },
  {
    slug: 'meridian',
    client: 'Meridian',
    title: 'Banking that fits in one hand',
    year: 2026,
    disciplines: ['Digital'],
    cover: 'meridian',
    gallery: ['meridian', 'aurora'],
    summary: 'A full redesign of Meridian’s mobile bank: new navigation, a design system of 180 components and a calmer way to see your money.',
    challenge: 'Meridian’s app had grown to 46 screens off the home tab. Support calls were rising and ratings had fallen to 3.1.',
    approach: 'Six weeks of research with 40 customers led to three tabs and one question per screen. We rebuilt the design system alongside their engineers.',
    results: [
      { value: '4.8', label: 'App Store rating, up from 3.1' },
      { value: '−38%', label: 'Support calls in the first quarter' },
      { value: '180', label: 'Components in the system' },
    ],
    quote: { text: 'They sat with our engineers every week. Handoff was not a moment, it was the whole project.', name: 'Jonas Weber', role: 'VP Product, Meridian' },
    accent: '#3f5bff',
  },
  {
    slug: 'halcyon',
    client: 'Halcyon Hotels',
    title: 'Quiet luxury for a group of seven hotels',
    year: 2025,
    disciplines: ['Branding', 'Digital'],
    cover: 'halcyon',
    gallery: ['halcyon', 'lookbook', 'ostra'],
    summary: 'A brand and booking site for seven small hotels that share a philosophy rather than a look.',
    challenge: 'Each hotel had its own logo and website. Guests did not know they belonged together, and direct bookings were only 18% of the total.',
    approach: 'One calm master brand with a material palette per property, and a booking site that sells the stay before the room.',
    results: [
      { value: '41%', label: 'Direct bookings, up from 18%' },
      { value: '7', label: 'Properties under one brand' },
      { value: '2.1×', label: 'Time on site' },
    ],
    accent: '#c7b49a',
  },
  {
    slug: 'kite-outdoor',
    client: 'Kite Outdoor',
    title: 'Colour-first campaign for technical outerwear',
    year: 2025,
    disciplines: ['Campaign', 'Motion'],
    cover: 'kite',
    gallery: ['kite', 'nocturne'],
    summary: 'A loud spring campaign across out-of-home, social and film, built around a single colour.',
    challenge: 'Outdoor brands all shoot mountains. Kite needed to stand out in cities, where most of its customers actually live.',
    approach: 'We left the mountains out and put the jackets on walls of pure colour, from billboards to 6-second films.',
    results: [
      { value: '62m', label: 'Campaign impressions' },
      { value: '+27%', label: 'Spring sales year on year' },
      { value: '14', label: 'Cities on out-of-home' },
    ],
    quote: { text: 'The bravest brief we ever wrote, and they made it look obvious.', name: 'Mara Olsen', role: 'Brand Director, Kite Outdoor' },
    accent: '#ff6a1f',
  },
  {
    slug: 'fold-press',
    client: 'Fold Press',
    title: 'A letterpress identity for an independent publisher',
    year: 2024,
    disciplines: ['Branding'],
    cover: 'fold',
    gallery: ['fold', 'glass'],
    summary: 'A wordmark cut for letterpress, a custom serif and a cover system for forty new titles a year.',
    challenge: 'Fold Press’s books were beautiful one by one but looked unrelated on a shelf.',
    approach: 'A strict cover grid with one free zone per title, printed by hand in the studio’s own press.',
    results: [
      { value: '40', label: 'Titles a year on the system' },
      { value: '3', label: 'Design awards' },
      { value: '+19%', label: 'Bookshop orders' },
    ],
    accent: '#2b2b2b',
  },
  {
    slug: 'nocturne',
    client: 'Nocturne Records',
    title: 'Motion identity for an electronic label',
    year: 2024,
    disciplines: ['Motion', 'Digital'],
    cover: 'nocturne',
    gallery: ['nocturne', 'aurora'],
    summary: 'A generative visual system that turns every release’s audio into its own cover and loop.',
    challenge: 'Nocturne releases a record a week. Commissioning artwork for each was slow and inconsistent.',
    approach: 'We built a tool that reads the stems and renders a fluid simulation, so every cover is unique but unmistakably Nocturne.',
    results: [
      { value: '52', label: 'Releases a year, zero briefs' },
      { value: '4×', label: 'Social engagement on release days' },
      { value: '1', label: 'Tool, open to the artists' },
    ],
    accent: '#7b3cff',
  },
  {
    slug: 'ostra-home',
    client: 'Ostra Home',
    title: 'Packaging and shop for a ceramics brand',
    year: 2023,
    disciplines: ['Branding', 'Digital'],
    cover: 'ostra',
    gallery: ['ostra', 'lookbook', 'glass'],
    summary: 'Warm, tactile packaging and an online shop that sells pottery like a morning ritual.',
    challenge: 'Ostra was moving from markets to online and had no photography, no packaging and no shop.',
    approach: 'We art-directed one week of shoots, designed recyclable packaging and a shop where every product is shown in use.',
    results: [
      { value: '€1.2m', label: 'Online sales in the first year' },
      { value: '3.9%', label: 'Shop conversion rate' },
      { value: '0', label: 'Plastic in the packaging' },
    ],
    accent: '#c2703d',
  },
]

export const TESTIMONIALS = [
  { quote: 'Lastwerk gave our science a face. Investors started the meeting talking about the brand.', name: 'Dr. Ines Hartmann', role: 'Founder, Aurora Labs', project: 'aurora-labs' },
  { quote: 'They sat with our engineers every week. Handoff was not a moment, it was the whole project.', name: 'Jonas Weber', role: 'VP Product, Meridian', project: 'meridian' },
  { quote: 'The bravest brief we ever wrote, and they made it look obvious. Spring sales were the best in our history.', name: 'Mara Olsen', role: 'Brand Director, Kite Outdoor', project: 'kite-outdoor' },
  { quote: 'Calm, precise and very fast. Our seven hotels finally look like a family.', name: 'Luca Bianchi', role: 'CEO, Halcyon Hotels', project: 'halcyon' },
]

export const STUDIO = {
  title: ['Independent', 'by design'],
  intro: 'Lastwerk is a studio of 24 designers, strategists and motion artists in Berlin. We founded it in 2015 to do the kind of work we wanted to see more of: bold, careful and built to last.',
  stats: [
    { value: 24, label: 'People in the studio' },
    { value: 11, label: 'Years independent' },
    { value: 38, label: 'Design awards' },
    { value: 17, label: 'Countries served' },
  ],
  values: [
    { title: 'Bold by default', body: 'The safe option is always available. We start from the brave one and earn our way back if we have to.' },
    { title: 'Small senior teams', body: 'No pyramid of juniors. The people you meet at the pitch are the people who design your work.' },
    { title: 'Open files', body: 'You own everything: source files, fonts we commissioned, code. No lock-in, ever.' },
  ],
  team: [
    { name: 'Lena Vogt', role: 'Founder, Creative Director' },
    { name: 'Daniel Okafor', role: 'Design Director, Digital' },
    { name: 'Sofia Marques', role: 'Head of Strategy' },
    { name: 'Yuki Tanaka', role: 'Lead 3D & Motion' },
    { name: 'Ben Hollis', role: 'Senior Brand Designer' },
    { name: 'Amira Haddad', role: 'Studio Manager' },
  ],
  awards: [
    { year: 2026, name: 'D&AD', note: 'Wood Pencil, Branding — Aurora Labs' },
    { year: 2025, name: 'Awwwards', note: 'Site of the Day — Halcyon Hotels' },
    { year: 2025, name: 'ADC Germany', note: 'Gold, Campaign — Kite Outdoor' },
    { year: 2024, name: 'Type Directors Club', note: 'Certificate of Excellence — Fold Press' },
  ],
}

export type Role = {
  slug: string
  title: string
  team: string
  location: string
  type: string
  summary: string
  responsibilities: string[]
  requirements: string[]
}

export const CAREERS = {
  title: ['Make', 'with us'],
  intro: 'We hire rarely and carefully. If you care about craft and like working in small, senior teams, we would love to see your work.',
  perks: [
    { title: 'Four-day weeks in August', body: 'The whole studio works Monday to Thursday all summer.' },
    { title: '€2,000 learning budget', body: 'Courses, books, conferences or a type design workshop. Your call.' },
    { title: 'Hybrid, Berlin-first', body: 'Three days in the studio, two wherever you work best.' },
    { title: 'Your own projects', body: 'One Friday a month for self-initiated work, shown at the studio crit.' },
  ],
}

export const ROLES: Role[] = [
  {
    slug: 'senior-brand-designer',
    title: 'Senior Brand Designer',
    team: 'Branding',
    location: 'Berlin, hybrid',
    type: 'Full time',
    summary: 'Lead identity projects from first routes to final guidelines, working directly with clients and our creative director.',
    responsibilities: ['Develop creative routes and argue for them', 'Build type, colour and graphic systems', 'Present to clients and run reviews', 'Mentor two mid-level designers'],
    requirements: ['Six or more years in brand design', 'A portfolio of identities you led', 'Excellent typography', 'German is a plus, English is required'],
  },
  {
    slug: 'product-designer',
    title: 'Product Designer',
    team: 'Digital',
    location: 'Berlin or remote (EU)',
    type: 'Full time',
    summary: 'Design apps and design systems for clients like Meridian, from research to developer handoff.',
    responsibilities: ['Plan and run usability tests', 'Design flows, interfaces and prototypes', 'Build and document components', 'Pair with client engineering teams'],
    requirements: ['Three or more years in product design', 'Fluent in Figma variables and auto layout', 'Comfortable reading front-end code', 'Clear writing'],
  },
  {
    slug: '3d-motion-designer',
    title: '3D & Motion Designer',
    team: 'Motion',
    location: 'Berlin, hybrid',
    type: 'Full time',
    summary: 'Make the iridescent objects, product renders and logo animations our clients are known for.',
    responsibilities: ['Model, light and render in Blender or Cinema 4D', 'Animate logos and interfaces', 'Produce campaign films', 'Build reusable asset kits'],
    requirements: ['A reel that shows taste and range', 'Strong lighting and materials', 'After Effects and one 3D tool', 'Real-time experience is a plus'],
  },
  {
    slug: 'new-business-lead',
    title: 'New Business Lead',
    team: 'Studio',
    location: 'Berlin',
    type: 'Full time',
    summary: 'Find and win the projects we want to be known for, and look after clients from first call to signed brief.',
    responsibilities: ['Qualify inbound briefs', 'Write proposals and estimates', 'Plan our pipeline with the founders', 'Represent the studio at events'],
    requirements: ['Four or more years in agency new business', 'You love design and can talk about it', 'Organised and calm under deadlines'],
  },
]

export const CONTACT = {
  title: ['Start a', 'project'],
  intro: 'Three short steps. We read every brief ourselves and reply within two working days.',
  budgets: ['Under €20k', '€20k–50k', '€50k–100k', '€100k+'] as const,
  timelines: ['As soon as possible', 'In 1–3 months', 'In 3–6 months', 'Just exploring'] as const,
  services: ['Brand identity', 'Web & mobile', 'UX/UI', 'Motion & 3D', 'Campaign'] as const,
  steps: ['What you need', 'Budget and timing', 'About you'],
}

export const FOOTER = {
  newsletter: { title: 'Studio notes', body: 'One email a month: new work, open roles, nothing else.' },
  legal: `© ${new Date().getFullYear()} Lastwerk Studio GmbH`,
}
