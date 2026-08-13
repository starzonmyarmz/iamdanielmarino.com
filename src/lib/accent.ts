// An article's accent color, either seeded from its title or set explicitly
// in frontmatter.
import { seededRandom } from "./prng"

// OKLCH components of an article's accent color.
export interface Accent {
  l: number
  c: number
  h: number
}

// Parses "oklch(60% 0.12 250)" (optionally with an alpha channel, which is
// ignored). Returns null if the string doesn't match, so a malformed accent
// is treated the same as no accent rather than forcing a fallback look.
export function parseOklch(value: string): Accent | null {
  const match = value.match(/oklch\(\s*([\d.]+)%\s+([\d.]+)\s+([\d.]+)/i)
  if (!match) return null
  const [, l, c, h] = match
  return { l: Number(l), c: Number(c), h: Number(h) }
}

// Fixed lightness/chroma for the title-seeded accent — only hue varies,
// deterministically, per article title.
const TITLE_ACCENT_LIGHTNESS = 65
const TITLE_ACCENT_CHROMA = 0.15

// Derives an article's accent color from its title: same seed always
// produces the same hue, so a title's color is stable across builds.
export function titleAccent(seed: string): Accent {
  const h = Math.floor(seededRandom(seed)() * 360)
  return { l: TITLE_ACCENT_LIGHTNESS, c: TITLE_ACCENT_CHROMA, h }
}
