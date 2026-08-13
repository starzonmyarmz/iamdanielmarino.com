// Deterministic isometric voxel art, seeded by a string (article title).
// Style modeled on meodai/heerich (https://github.com/meodai/heerich):
// unit cubes stacked into a random tower per grid cell, rendered as flat
// isometric faces (top/left/right), painter's-algorithm sorted.

export interface Block {
  x: number // grid column
  y: number // grid row
  zBottom: number // height (in grid units) where this block starts
  hue: number
}

export interface Face {
  points: string
  face: "top" | "left" | "right"
}

export interface VoxelGroup {
  fill: string
  faces: Face[]
  wavePhase: number
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

// Every block is a unit cube (1x1x1 grid units) — named so the +=  below
// isn't a bare magic number.
const MAX_BLOCK_HEIGHT = 1

// Tuning knobs for stackCell's per-level coin flip: chance starts high and
// decays each level up, floored so a stack can never become a sure thing
// or a sure stop.
const STACK_BASE_CHANCE = 0.72
const STACK_DECAY_PER_LEVEL = 0.18
const STACK_MIN_CHANCE = 0.1

// Coefficients for hueJitter below. No individual significance — just
// arbitrary multipliers on x/y/i chosen to decorrelate neighboring cells'
// jitter (avoid visible repeating patterns), then folded into a +/-10 range.
const HUE_JITTER_X_COEFF = 13
const HUE_JITTER_Y_COEFF = 7
const HUE_JITTER_I_COEFF = 5
const HUE_JITTER_RANGE = 20

// Fixed saturation/lightness for every cube — only hue varies per block.
const CUBE_SATURATION = 60
const CUBE_LIGHTNESS = 50

// One seeded stack of unit cubes for a single grid column. The base cube
// is always present (every column has a floor); each cube above it is a
// coin-flip that gets less likely the more cubes are already stacked. A
// column stops at the first gap or once it clears `maxHeight` grid units
// (no floating cubes).
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
    if (
      i > 0 &&
      rand() >= Math.max(STACK_BASE_CHANCE - i * STACK_DECAY_PER_LEVEL, STACK_MIN_CHANCE)
    )
      break

    const hueJitter =
      ((x * HUE_JITTER_X_COEFF + y * HUE_JITTER_Y_COEFF + i * HUE_JITTER_I_COEFF) %
        HUE_JITTER_RANGE) -
      HUE_JITTER_RANGE / 2
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
// element (see Voxels.astro's <g>) without breaking the paint order between
// blocks.
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
      fill: `hsl(${v.hue}, ${CUBE_SATURATION}%, ${CUBE_LIGHTNESS}%)`,
      wavePhase: v.x - v.y,
      faces: [
        { points: `${top} ${right} ${bottom} ${left}`, face: "top" },
        { points: `${left} ${bottom} ${bottomDown} ${leftDown}`, face: "left" },
        { points: `${right} ${rightDown} ${bottomDown} ${bottom}`, face: "right" },
      ],
    }
  })
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
  return { minX, minY, w: round(maxX - minX), h: round(maxY - minY) }
}
