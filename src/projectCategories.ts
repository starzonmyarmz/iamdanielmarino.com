export const projectCategories = {
  audio: "Music and audio",
  apps: "Apps and tools",
  games: "Games",
  assets: "Game assets",
  art: "Art and lettering",
  albums: "Albums",
} as const

export type ProjectCategory = keyof typeof projectCategories
