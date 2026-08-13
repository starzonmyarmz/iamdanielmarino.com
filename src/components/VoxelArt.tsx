import { useEffect, useState } from "preact/hooks"
import type { VoxelGroup } from "../lib/voxel"

interface Props {
  groups: VoxelGroup[]
  minX: number
  minY: number
  w: number
  h: number
}

export default function VoxelArt({ groups, minX, minY, w, h }: Props) {
  const [dirty, setDirty] = useState<boolean>(false)
  const [shrunk, setShrunk] = useState<Set<number>>(new Set())

  useEffect(() => {
    if (shrunk.size === 0) return

    setDirty(true)
  }, [shrunk])

  function resetVoxels() {
    setShrunk(new Set())
    setDirty(false)
  }

  return (
    <div class="vox-frame" aria-hidden="true">
      <svg
        viewBox={`${minX} ${minY} ${w} ${h}`}
        xmlns="http://www.w3.org/2000/svg"
        class="vox-art"
        shape-rendering="crispEdges"
      >
        {groups.map((g, i) => (
          <g
            key={i}
            class={shrunk.has(i) ? "vox vox-shrink" : "vox"}
            data-delay={g.wavePhase}
            data-hue={g.hue}
            onClick={() => setShrunk((prev) => new Set(prev).add(i))}
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
