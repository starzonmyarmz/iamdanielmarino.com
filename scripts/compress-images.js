const fs = require('fs')
const path = require('path')
const sharp = require('sharp')

const ROOT = path.join(__dirname, '..', 'dist', 'images')

async function walk(dir) {
  const out = []
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) out.push(...await walk(full))
    else out.push(full)
  }
  return out
}

async function compress(file) {
  const ext = path.extname(file).toLowerCase()
  const before = fs.statSync(file).size
  const buf = fs.readFileSync(file)
  let pipeline = sharp(buf, { failOn: 'none' }).rotate()

  if (ext === '.jpg' || ext === '.jpeg') {
    pipeline = pipeline.jpeg({ quality: 82, mozjpeg: true })
  } else if (ext === '.png') {
    pipeline = pipeline.png({ compressionLevel: 9, palette: true })
  } else if (ext === '.webp') {
    pipeline = pipeline.webp({ quality: 82 })
  } else {
    return null
  }

  const output = await pipeline.toBuffer()
  if (output.length < before) {
    fs.writeFileSync(file, output)
    return { file, before, after: output.length }
  }
  return { file, before, after: before, skipped: true }
}

;(async () => {
  if (!fs.existsSync(ROOT)) {
    console.log('No dist/images dir; skipping.')
    return
  }
  const files = await walk(ROOT)
  let totalBefore = 0, totalAfter = 0, count = 0
  for (const f of files) {
    const r = await compress(f).catch(err => {
      console.error(`Failed ${f}: ${err.message}`)
      return null
    })
    if (!r) continue
    totalBefore += r.before
    totalAfter += r.after
    count++
  }
  const saved = totalBefore - totalAfter
  const pct = totalBefore ? ((saved / totalBefore) * 100).toFixed(1) : '0'
  console.log(`Compressed ${count} images. Saved ${(saved / 1024).toFixed(1)} KB (${pct}%).`)
})()
