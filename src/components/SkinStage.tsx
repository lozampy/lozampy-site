import { useEffect, useRef, useState } from 'react'

import { SKIN } from '../data'
import { cx } from '../lib/cx'

/**
 * The Minecraft skin on the stage. Drag to turn it — it never turns by itself.
 * three.js and skinview3d are imported only after the page has painted, so the
 * initial bundle stays small; the static render shows until the model is ready.
 */
export function SkinStage({
  className,
  texture = SKIN.texture,
  render = SKIN.render,
  name = SKIN.name,
  zoom = 0.9,
  touchAction = 'none',
  pauseOffscreen = false,
}: {
  className?: string
  texture?: string
  render?: string
  name?: string
  zoom?: number
  /** 'pan-y' keeps a vertical swipe scrolling the page on touch screens. */
  touchAction?: 'none' | 'pan-y'
  /** Stop the render loop while the viewer is out of view. */
  pauseOffscreen?: boolean
}) {
  const wrapRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [ready, setReady] = useState(false)
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    const wrap = wrapRef.current
    const canvas = canvasRef.current
    if (!wrap || !canvas) return

    let cancelled = false
    let viewer: import('skinview3d').SkinViewer | null = null
    let observer: ResizeObserver | null = null
    let visibility: IntersectionObserver | null = null

    import('skinview3d')
      .then(async ({ SkinViewer }) => {
        if (cancelled) return
        viewer = new SkinViewer({
          canvas,
          width: wrap.clientWidth || 320,
          height: wrap.clientHeight || 440,
          fov: 30,
          zoom,
        })
        viewer.renderer.setClearAlpha(0)
        // OrbitControls writes touch-action: none inline; keep vertical swipes
        // scrolling the page in the compact crew cards.
        canvas.style.touchAction = touchAction === 'pan-y' ? 'pan-y' : 'none'
        viewer.controls.enableZoom = false
        viewer.controls.enablePan = false
        viewer.controls.rotateSpeed = 0.85
        viewer.controls.minPolarAngle = Math.PI / 3.2
        viewer.controls.maxPolarAngle = Math.PI / 1.75
        viewer.autoRotate = false
        viewer.animation = null

        if (pauseOffscreen) {
          visibility = new IntersectionObserver(
            ([entry]) => {
              if (viewer) viewer.renderPaused = !entry.isIntersecting
            },
            { rootMargin: '120px 0px' },
          )
          visibility.observe(wrap)
        }

        await viewer.loadSkin(texture, { model: 'auto-detect' })
        if (cancelled) return
        setReady(true)

        observer = new ResizeObserver(() => viewer?.setSize(wrap.clientWidth, wrap.clientHeight))
        observer.observe(wrap)
      })
      .catch(() => {
        if (!cancelled) setFailed(true)
      })

    return () => {
      cancelled = true
      observer?.disconnect()
      visibility?.disconnect()
      viewer?.dispose()
    }
  }, [texture, zoom, touchAction, pauseOffscreen])

  return (
    <div ref={wrapRef} className={className}>
      {/* Poster: visible until the model is ready, and the fallback if WebGL fails */}
      <img
        src={render}
        alt={ready || failed ? `${name} in Minecraft` : `${name}'s Minecraft skin`}
        className={cx(
          'pointer-events-none absolute inset-0 m-auto h-full w-auto max-w-full object-contain transition-opacity duration-500',
          ready ? 'opacity-0' : 'opacity-100',
        )}
        draggable={false}
      />
      <canvas
        ref={canvasRef}
        aria-label={`${name}'s Minecraft skin — drag to turn`}
        className={cx(
          'relative h-full w-full cursor-grab active:cursor-grabbing',
          touchAction === 'pan-y' ? 'touch-pan-y' : 'touch-none',
        )}
      />
    </div>
  )
}
