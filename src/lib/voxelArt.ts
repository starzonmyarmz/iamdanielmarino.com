// Deterministic isometric voxel art, seeded by a string (article title).
// Style modeled on meodai/heerich (https://github.com/meodai/heerich):
// unit cubes stacked into a random tower per grid cell, rendered as flat
// isometric faces (top/left/right), painter's-algorithm sorted.

export interface Block {
  x: number // grid column
  y: number // grid row
  zBottom: number // height (in grid units) where this block starts
  hue: number
  href?: string
}

export interface Face {
  points: string
  face: "top" | "left" | "right" // which cube face this is, for CSS to shade differently
}

export interface VoxelGroup {
  href?: string
  fill: string // single base color for the cube; CSS tints per face (see .voxel-cube)
  faces: Face[]
  wavePhase: number // x - y (screen-horizontal axis), lets callers stagger a float animation into a left-to-right wave
}

// Deterministic string -> uint32 hash (xmur3), feeds a mulberry32 PRNG
// so the same seed always produces the same cluster.
function xmur3(str: string) {
  let h = 1779033703 ^ str.length
  for (let i = 0; i < str.length; i++) {
    h = Math.imul(h ^ str.charCodeAt(i), 3432918353)
    h = (h << 13) | (h >>> 19)
  }
  return () => {
    h = Math.imul(h ^ (h >>> 16), 2246822507)
    h = Math.imul(h ^ (h >>> 13), 3266489909)
    return (h ^= h >>> 16) >>> 0
  }
}

function mulberry32(a: number) {
  return () => {
    a |= 0
    a = (a + 0x6d2b79f5) | 0
    let t = Math.imul(a ^ (a >>> 15), 1 | a)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

// Rounds to a whole number. The viewBox scales to whatever size the <svg>
// is drawn at, so sub-pixel precision here buys nothing — whole numbers
// keep the markup readable without changing how anything scales.
function round(n: number) {
  return Math.round(n)
}

// Every block is a unit cube (1x1x1 grid units) — kept as a constant so
// callers that reserve headroom between stacked clusters (see test.astro)
// don't have a magic number to track.
export const MAX_BLOCK_HEIGHT = 1

// One seeded stack of unit cubes for a single grid column. The base cube
// is always present (every column has a floor); each cube above it is a
// coin-flip that gets less likely the more cubes are already stacked. A
// column stops at the first gap or once it clears `maxHeight` grid units
// (no floating cubes). Shared by generateCluster (one rand stream for the
// whole grid) and generateCellStack (one rand stream per cell).
function stackCell(
  rand: () => number,
  baseHue: number,
  x: number,
  y: number,
  maxHeight: number,
): Block[] {
  const blocks: Block[] = []
  let zBottom = 0
  let i = 0

  while (zBottom < maxHeight) {
    if (i > 0 && rand() >= Math.max(0.72 - i * 0.18, 0.1)) break

    const hueJitter = ((x * 13 + y * 7 + i * 5) % 20) - 10
    blocks.push({ x, y, zBottom, hue: (baseHue + hueJitter + 360) % 360 })

    zBottom += MAX_BLOCK_HEIGHT
    i++
  }

  return blocks
}

// Builds one seeded stack per grid column (0..grid-1 in x/y).
export function generateCluster(seed: string, grid: number, maxHeight = grid): Block[] {
  const rand = mulberry32(xmur3(seed)())
  const baseHue = Math.floor(rand() * 360)
  const blocks: Block[] = []

  for (let x = 0; x < grid; x++) {
    for (let y = 0; y < grid; y++) {
      blocks.push(...stackCell(rand, baseHue, x, y, maxHeight))
    }
  }

  return blocks
}

// Fraction of a grid cell left empty around each cube (split evenly on
// every side) so stacks read as separated blocks instead of a fused mass.
const GAP = 0.12

// Projects positioned blocks (grid coords, already placed in shared space)
// into isometric SVG faces, sorted back-to-front for correct occlusion.
// Each block's 3 faces stay grouped so a caller can wrap them in a single
// clickable <a> (a whole box as one link target) without breaking the
// paint order between blocks.
export function voxelsToGroups(blocks: Block[], size: number): VoxelGroup[] {
  // Different (x, y) columns never overlap in 3D, so whichever is closer
  // to the camera (larger x + y) always draws on top, regardless of
  // height — z only breaks ties for cubes stacked in the same column.
  const sorted = [...blocks].sort((a, b) => {
    const depth = a.x + a.y - (b.x + b.y)
    return depth !== 0 ? depth : a.zBottom - b.zBottom
  })

  // Cube edge shrinks by GAP, inset evenly within its unit cell so the
  // shrunk cube stays centered — that inset shows up as whitespace on
  // every side, including between stacked cubes in the same column.
  const cube = 1 - GAP
  const inset = GAP / 2

  // Projects a grid-space point (gx, gy, gz) into isometric SVG space.
  const project = (gx: number, gy: number, gz: number) => {
    const cellDx = (size * Math.sqrt(3)) / 2
    const cellDy = size / 2
    const x = (gx - gy) * cellDx
    const y = (gx + gy) * cellDy - gz * size
    return `${round(x)},${round(y)}`
  }

  return sorted.map((v) => {
    const x0 = v.x + inset
    const y0 = v.y + inset
    const x1 = x0 + cube
    const y1 = y0 + cube
    const z0 = v.zBottom + inset
    const z1 = z0 + cube

    const top = project(x0, y0, z1)
    const right = project(x1, y0, z1)
    const bottom = project(x1, y1, z1)
    const left = project(x0, y1, z1)

    const rightDown = project(x1, y0, z0)
    const bottomDown = project(x1, y1, z0)
    const leftDown = project(x0, y1, z0)

    return {
      href: v.href,
      fill: `hsl(${v.hue}, 60%, 50%)`,
      wavePhase: v.x - v.y,
      faces: [
        { points: `${top} ${right} ${bottom} ${left}`, face: "top" },
        { points: `${left} ${bottom} ${bottomDown} ${leftDown}`, face: "left" },
        { points: `${right} ${rightDown} ${bottomDown} ${bottom}`, face: "right" },
      ],
    }
  })
}

// --- Prototype helpers below: for mixing multiple articles' clusters
// together on one canvas (see test-skyline/test-mosaic/test-pile). Kept
// separate from generateCluster so its output (and any published article's
// art) never shifts.

// Base hue for a seed alone, matching generateCluster's first RNG draw —
// split out so a mixed layout can look up an article's color without
// generating its whole cluster.
export function baseHueFor(seed: string): number {
  const rand = mulberry32(xmur3(seed)())
  return Math.floor(rand() * 360)
}

// Independent per-cell coin-flip stack, keyed by (seed, x, y) rather than
// generateCluster's single sequential stream — lets a layout populate
// cells one at a time (e.g. a shared grid where each cell's owning article
// is chosen independently) instead of generating a whole grid at once.
export function generateCellStack(
  seed: string,
  baseHue: number,
  x: number,
  y: number,
  maxHeight: number,
): Block[] {
  const rand = mulberry32(xmur3(`${seed}:${x}:${y}`)())
  return stackCell(rand, baseHue, x, y, maxHeight)
}

// Deterministic Fisher-Yates — same seed always produces the same shuffled
// order, so a "mixed" layout is stable across builds instead of reshuffling
// every render.
export function seededShuffle<T>(arr: readonly T[], seed: string): T[] {
  const rand = mulberry32(xmur3(seed)())
  const out = [...arr]
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1))
    ;[out[i], out[j]] = [out[j], out[i]]
  }
  return out
}

// Deterministically picks one item per seed — used to assign a shared
// grid's cells to owning articles independently of each other.
export function seededPick<T>(items: readonly T[], seed: string): T {
  if (items.length === 0) throw new Error("seededPick: items is empty")
  const rand = mulberry32(xmur3(seed)())
  return items[Math.floor(rand() * items.length)]
}

export function groupsBounds(groups: VoxelGroup[], pad: number) {
  if (groups.length === 0) throw new Error("groupsBounds: groups is empty")
  const points = groups.flatMap((g) => g.faces.flatMap((f) => f.points.split(" ")))
  const xs = points.map((p) => Number(p.split(",")[0]))
  const ys = points.map((p) => Number(p.split(",")[1]))
  const minX = round(Math.min(...xs) - pad)
  const maxX = round(Math.max(...xs) + pad)
  const minY = round(Math.min(...ys) - pad)
  const maxY = round(Math.max(...ys) + pad)
  return { minX, minY, maxX, maxY, w: round(maxX - minX), h: round(maxY - minY) }
}
