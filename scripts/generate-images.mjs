// Generates responsive WebP variants for everything in public/images.
//
// The site previously served one full-size JPEG to every device: a 1600px
// 257KB hero went to phones rendering it at ~400px. These variants let the
// browser pick a size that matches the viewport.
//
// Run with: npm run images
// Output is committed, so builds stay fast and deterministic.

import sharp from 'sharp'
import { readdir, mkdir, stat } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const SRC = path.join(__dirname, '..', 'public', 'images')
const OUT = path.join(SRC, 'r')
// 1600px WebP came out larger than the source JPEG at usable quality, and
// desktop already passes LCP comfortably. The original JPEG stays as the
// large-viewport source; these two exist to cut the mobile payload.
const WIDTHS = [640, 1024]

async function main() {
  await mkdir(OUT, { recursive: true })
  const files = (await readdir(SRC)).filter((f) => /\.(jpe?g|png)$/i.test(f))

  let before = 0
  let after = 0

  for (const file of files) {
    const base = file.replace(/\.(jpe?g|png)$/i, '')
    const srcPath = path.join(SRC, file)
    before += (await stat(srcPath)).size

    const meta = await sharp(srcPath).metadata()

    for (const w of WIDTHS) {
      // Never upscale: a 1200px source has no business being written at 1600.
      if (meta.width && meta.width < w && w !== WIDTHS[0]) continue
      const target = Math.min(w, meta.width || w)
      const outPath = path.join(OUT, `${base}-${w}.webp`)
      await sharp(srcPath).resize(target).webp({ quality: 78 }).toFile(outPath)
      after += (await stat(outPath)).size
    }
  }

  const kb = (n) => `${Math.round(n / 1024)} KB`
  console.log(`  sources : ${files.length} files, ${kb(before)}`)
  console.log(`  variants: ${kb(after)} across ${WIDTHS.join('/')}px WebP`)
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
