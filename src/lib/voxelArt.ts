// Deterministic isometric voxel art, seeded by a string (article title).
// Style modeled on meodai/heerich (https://github.com/meodai/heerich):
// small boxes stacked into a random tower, rendered as flat isometric
// faces (top/left/right), painter's-algorithm sorted. Unlike plain unit
// voxels, each box can have its own width/depth/height so stacks read as
// varied brickwork rather than a uniform Lego grid.

export interface Block {
  x: number // grid column
  y: number // grid row
  zBottom: number // height (in grid units) where this block starts
  w: number // width multiplier (x-axis), 1 = one grid cell
  d: number // depth multiplier (y-axis), 1 = one grid cell
  h: number // height multiplier (z-axis), 1 = one grid cell
  hue: number
  href?: string
}

export interface Face {
  points: string
  fill: string
}

export interface VoxelGroup {
  href?: string
  faces: Face[]
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

// Keeps SVG coordinates readable (no float noise from sqrt(3)/2 etc).
function round2(n: number) {
  return Math.round(n * 100) / 100
}

// The tallest a single block can be (in grid units) — used by callers that
// need to reserve headroom between stacked clusters (see test.astro).
export const MAX_BLOCK_HEIGHT = 1.4

// Builds one seeded stack of boxes per grid column (0..grid-1 in x/y).
// The base box in each column is always present (every cluster has a
// floor); each box above it is a coin-flip that gets less likely the more
// boxes are already stacked, and every box gets its own randomized
// width/depth/height so the stack reads as varied brickwork instead of a
// uniform voxel grid. A column stops at the first gap or once it clears
// `maxHeight` grid units (no floating boxes).
export function generateCluster(seed: string, grid: number, maxHeight = grid): Block[] {
  const rand = mulberry32(xmur3(seed)())
  const baseHue = Math.floor(rand() * 360)
  const blocks: Block[] = []

  for (let x = 0; x < grid; x++) {
    for (let y = 0; y < grid; y++) {
      let zBottom = 0
      let i = 0

      while (zBottom < maxHeight) {
        if (i > 0 && rand() >= 0.72 - i * 0.18) break

        const w = 0.55 + rand() * 0.55
        const d = 0.55 + rand() * 0.55
        const h = 0.5 + rand() * (MAX_BLOCK_HEIGHT - 0.5)

        const hueJitter = ((x * 13 + y * 7 + i * 5) % 20) - 10
        blocks.push({ x, y, zBottom, w, d, h, hue: (baseHue + hueJitter + 360) % 360 })

        zBottom += h
        i++
      }
    }
  }

  return blocks
}

// Projects positioned blocks (grid coords, already placed in shared space)
// into isometric SVG faces, sorted back-to-front for correct occlusion.
// Each block's 3 faces stay grouped so a caller can wrap them in a single
// clickable <a> (a whole box as one link target) without breaking the
// paint order between blocks.
export function voxelsToGroups(blocks: Block[], size: number): VoxelGroup[] {
  const sorted = [...blocks].sort((a, b) => {
    const da = a.x + a.y - (a.zBottom + a.h)
    const db = b.x + b.y - (b.zBottom + b.h)
    return da - db
  })

  return sorted.map((v) => {
    // Grid spacing stays uniform regardless of a block's own size, so
    // oversized blocks bulge over their neighbors and undersized ones
    // leave gaps — that's the "variable width/depth/height" look.
    const cellDx = (size * Math.sqrt(3)) / 2
    const cellDy = size / 2

    const px = (v.x - v.y) * cellDx
    const py = (v.x + v.y) * cellDy - (v.zBottom + v.h) * size

    // Edge vectors scaled to this block's own width (e1) and depth (e2).
    const e1x = (v.w * size * Math.sqrt(3)) / 2
    const e1y = (v.w * size) / 2
    const e2x = -((v.d * size * Math.sqrt(3)) / 2)
    const e2y = (v.d * size) / 2
    const bh = v.h * size

    const pt = (x: number, y: number) => `${round2(x)},${round2(y)}`

    const top = pt(px, py)
    const right = pt(px + e1x, py + e1y)
    const bottom = pt(px + e1x + e2x, py + e1y + e2y)
    const left = pt(px + e2x, py + e2y)

    const rightDown = pt(px + e1x, py + e1y + bh)
    const bottomDown = pt(px + e1x + e2x, py + e1y + e2y + bh)
    const leftDown = pt(px + e2x, py + e2y + bh)

    return {
      href: v.href,
      faces: [
        {
          // top
          points: `${top} ${right} ${bottom} ${left}`,
          fill: `hsl(${v.hue}, 65%, 62%)`,
        },
        {
          // left
          points: `${left} ${bottom} ${bottomDown} ${leftDown}`,
          fill: `hsl(${v.hue}, 60%, 38%)`,
        },
        {
          // right
          points: `${right} ${rightDown} ${bottomDown} ${bottom}`,
          fill: `hsl(${v.hue}, 60%, 48%)`,
        },
      ],
    }
  })
}

export function groupsBounds(groups: VoxelGroup[], pad: number) {
  const points = groups.flatMap((g) => g.faces.flatMap((f) => f.points.split(" ")))
  const xs = points.map((p) => Number(p.split(",")[0]))
  const ys = points.map((p) => Number(p.split(",")[1]))
  const minX = round2(Math.min(...xs) - pad)
  const maxX = round2(Math.max(...xs) + pad)
  const minY = round2(Math.min(...ys) - pad)
  const maxY = round2(Math.max(...ys) + pad)
  return { minX, minY, maxX, maxY, w: round2(maxX - minX), h: round2(maxY - minY) }
}
