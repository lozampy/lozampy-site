import { motion, type HTMLMotionProps } from 'motion/react'

import { SITE } from '../data'
import { cx } from '../lib/cx'

/** The GitHub mark (lucide dropped brand icons), sized by className. */
export function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-2.11c-3.2.7-3.87-1.36-3.87-1.36-.52-1.32-1.28-1.67-1.28-1.67-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.09 0 4.43-2.69 5.41-5.25 5.69.41.36.78 1.06.78 2.14v3.17c0 .3.21.67.8.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
    </svg>
  )
}

/** A pixel cube and the wordmark. */
export function Logo({ className, withName = true }: { className?: string; withName?: boolean }) {
  return (
    <span className={cx('inline-flex items-center gap-2.5', className)}>
      <svg viewBox="0 0 24 24" className="size-7 shrink-0" aria-hidden>
        <path d="M12 2.2 21.6 7v9.9L12 21.8 2.4 16.9V7z" fill="none" stroke="var(--color-violet)" strokeWidth="1.5" />
        <path d="M12 7.4 17 9.9v4.3l-5 2.4-5-2.4V9.9z" fill="var(--color-violet)" />
        <path d="M12 7.4 17 9.9l-5 2.5-5-2.5z" fill="var(--color-violet-light)" opacity="0.85" />
      </svg>
      {withName && <span className="text-[15px] font-semibold tracking-[-0.02em]">{SITE.name}</span>}
    </span>
  )
}

/** Fades and lifts its children in the first time they scroll into view. */
export function Reveal({ delay = 0, y = 20, ...rest }: HTMLMotionProps<'div'> & { delay?: number; y?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -60px 0px' }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    />
  )
}
