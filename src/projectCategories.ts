export const projectCategories = {
  audio: "Music and audio",
  apps: "Apps and tools",
  games: "Games",
  assets: "Game assets",
  art: "Art and lettering",
  music: "Music",
} as const

export type ProjectCategory = keyof typeof projectCategories
