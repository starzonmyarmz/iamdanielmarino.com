import { visit } from "unist-util-visit"
import { fromMarkdown } from "mdast-util-from-markdown"
import { toHast } from "mdast-util-to-hast"

/**
 * Port of `markdown-it-image-figures` (figcaption: true, lazy: true).
 *
 * Wraps a paragraph containing a single image in a <figure>, adds
 * loading="lazy" to the image, and — when present — renders the image's
 * `title` (parsed as inline markdown, so links etc. still work) as the
 * <figcaption>. Falls back to `alt` when there's no title.
 */
export default function rehypeFigure() {
  return (tree) => {
    visit(tree, "element", (node, index, parent) => {
      if (node.tagName !== "p" || !parent || index === null) return

      const children = node.children.filter(
        (child) => !(child.type === "text" && child.value.trim() === ""),
      )
      if (children.length !== 1 || children[0].tagName !== "img") return

      const img = children[0]
      img.properties = { ...img.properties, loading: "lazy" }

      const captionSource = img.properties.title || img.properties.alt
      const figureChildren = [img]

      if (captionSource) {
        delete img.properties.title
        const mdast = fromMarkdown(String(captionSource))
        const hast = toHast(mdast, { allowDangerousHtml: false })
        const inline =
          hast?.children?.[0]?.type === "element" && hast.children[0].tagName === "p"
            ? hast.children[0].children
            : (hast?.children ?? [])
        figureChildren.push({
          type: "element",
          tagName: "figcaption",
          properties: {},
          children: inline,
        })
      }

      parent.children[index] = {
        type: "element",
        tagName: "figure",
        properties: {},
        children: figureChildren,
      }
    })
  }
}
