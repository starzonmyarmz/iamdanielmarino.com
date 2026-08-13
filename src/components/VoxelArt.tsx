import { useState } from "preact/hooks"
import type { VoxelGroup } from "../lib/voxel"

interface Props {
  groups: VoxelGroup[]
  minX: number
  minY: number
  w: number
  h: number
}

export default function VoxelArt({ groups, minX, minY, w, h }: Props) {
  const [shrunk, setShrunk] = useState<Set<number>>(new Set())

  return (
    <svg
      viewBox={`${minX} ${minY} ${w} ${h}`}
      xmlns="http://www.w3.org/2000/svg"
      class="vox-art"
      shape-rendering="crispEdges"
      aria-hidden="true"
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
  )
}
