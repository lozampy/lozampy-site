import { useEffect } from 'react'
import { Link } from 'react-router'

import { Nav } from '../components/Nav'

export function NotFound() {
  useEffect(() => {
    document.title = 'Not found — lozampy'
  }, [])
  return (
    <div className="p-2 sm:p-3">
      <section className="rounded-[var(--radius-card)] border border-line bg-card px-5 pt-3 pb-12 sm:px-8">
        <Nav />
        <div className="mt-16 grid gap-6">
          <p className="caps text-violet">Error 404</p>
          <h1 className="display text-[clamp(3rem,12vw,8rem)]">Nothing here.</h1>
          <p className="max-w-md text-muted">That page does not exist. The programs and links all live on the home page.</p>
          <Link
            to="/"
            className="inline-flex h-11 w-fit items-center rounded-full border border-line-strong bg-soft px-5 text-sm font-medium transition-colors hov:border-violet hov:bg-violet hov:text-white"
          >
            Back home
          </Link>
        </div>
      </section>
    </div>
  )
}
