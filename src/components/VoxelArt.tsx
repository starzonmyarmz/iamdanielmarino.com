import { useEffect, useRef, useState } from "preact/hooks"
import type { VoxelGroup } from "../lib/voxel"

interface Props {
  groups: VoxelGroup[]
  minX: number
  minY: number
  w: number
  h: number
}

export default function VoxelArt({ groups, minX, minY, w, h }: Props) {
  const DRAG_HIDE_INTERVAL = 80 // ms between hides while dragging

  const [dirty, setDirty] = useState<boolean>(false)
  const [hidden, setHidden] = useState<Set<number>>(new Set())
  const dragging = useRef(false)
  const lastHideTime = useRef(0)

  useEffect(() => {
    if (hidden.size === 0) return

    setDirty(true)
  }, [hidden])

  useEffect(() => {
    function stopDragging() {
      dragging.current = false
    }

    window.addEventListener("pointerup", stopDragging)
    window.addEventListener("pointercancel", stopDragging)

    return () => {
      window.removeEventListener("pointerup", stopDragging)
      window.removeEventListener("pointercancel", stopDragging)
    }
  }, [])

  function resetVoxels() {
    setHidden(new Set())
    setDirty(false)
  }

  function hideVoxel(i: number) {
    setHidden((prev) => (prev.has(i) ? prev : new Set(prev).add(i)))
  }

  function hideVoxelAt(x: number, y: number) {
    const el = document.elementFromPoint(x, y)?.closest<HTMLElement>("[data-index]")
    if (!el) return

    hideVoxel(Number(el.dataset.index))
  }

  // Cap how fast dragging can hide cubes, so a fast swipe doesn't wipe the whole shape instantly.
  function throttledHideVoxelAt(x: number, y: number) {
    const now = performance.now()
    if (now - lastHideTime.current < DRAG_HIDE_INTERVAL) return

    lastHideTime.current = now
    hideVoxelAt(x, y)
  }

  return (
    <div class="vox-frame" aria-hidden="true">
      <svg
        viewBox={`${minX} ${minY} ${w} ${h}`}
        xmlns="http://www.w3.org/2000/svg"
        class="vox-art"
        shape-rendering="crispEdges"
        onPointerDown={(e) => {
          if (e.button !== 0) return

          dragging.current = true
          lastHideTime.current = performance.now()
          hideVoxelAt(e.clientX, e.clientY)
        }}
        onPointerMove={(e) => {
          if (!dragging.current) return

          throttledHideVoxelAt(e.clientX, e.clientY)
        }}
      >
        {groups.map((g, i) => (
          <g
            key={i}
            class={hidden.has(i) ? "vox vox-shrink" : "vox"}
            data-delay={g.wavePhase}
            data-hue={g.hue}
            data-index={i}
          >
            <g class="vox-float">
              <g class="vox-cube">
                {g.faces.map((f, fi) => (
                  <polygon key={fi} points={f.points} data-face={f.face} />
                ))}
              </g>
            </g>
          </g>
        ))}
      </svg>

      {dirty && (
        <button class="vox-reset" onClick={resetVoxels} tabIndex={-1}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="vox-reset-icon"
          >
            <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8" />
            <path d="M21 3v5h-5" />
          </svg>
        </button>
      )}
    </div>
  )
}
