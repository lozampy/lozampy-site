import { useEffect } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router'

import { Footer } from './components/Footer'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
  }, [pathname])
  return null
}

export function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <a
        href="#main"
        className="sr-only z-[100] focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:rounded-full focus:bg-violet focus:px-5 focus:py-3 focus:text-white"
      >
        Skip to content
      </a>
      <div id="top" className="flex min-h-svh flex-col">
        <main id="main" className="flex-1">
          <Routes>
            <Route index element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
