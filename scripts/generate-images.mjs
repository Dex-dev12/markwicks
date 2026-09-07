// Generates responsive WebP variants for everything in public/images.
//
// The site previously served one full-size JPEG to every device: a 1600px
// 257KB hero went to phones rendering it at ~400px. These variants let the
// browser pick a size that matches the viewport.
//
// Run with: npm run images
// Output is committed, so builds stay fast and deterministic.

import sharp from 'sharp'
import { readdir, mkdir, stat, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const SRC = path.join(__dirname, '..', 'public', 'images')
const OUT = path.join(SRC, 'r')
// 640/1024 cover most phones; 1440 exists for high-DPR devices - an iPhone at
// 390px CSS and 3x needs roughly 1170px, and without a candidate that large the
// browser reaches past the WebP set for the full-size JPEG.
// Quality drops at larger sizes: the hero sits under a brightness(0.5) overlay,
// so the difference is not visible and 1600px WebP at q78 came out larger than
// the source JPEG.
// 1200 exists for high-DPR phones: a 390px viewport at DPR 3 needs ~1170px, so
// without it the browser jumps straight to 1440 and pulls 192KB for a hero it
// renders at 50% brightness under text. Quality tapers with width because
// artefacts are less visible per-pixel on the larger variants. 1200 sits at q44
// so its file lands at or below what the 1024 candidate cost - otherwise adding
// the tier makes below-the-fold images heavier, not lighter.
const WIDTHS = [640, 1024, 1200, 1440]
const QUALITY = { 640: 78, 1024: 74, 1200: 44, 1440: 62 }

async function main() {
  await mkdir(OUT, { recursive: true })
  const files = (await readdir(SRC)).filter((f) => /\.(jpe?g|png)$/i.test(f))

  let before = 0
  let after = 0
  const manifest = {}

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
      await sharp(srcPath).resize(target).webp({ quality: QUALITY[w] ?? 74 }).toFile(outPath)
      after += (await stat(outPath)).size
      ;(manifest[base] ??= []).push(w)
    }
  }

  // Widths are skipped when the source is narrower, so the component cannot
  // assume every width exists: advertising one that was never written makes the
  // browser request a missing file, and the SPA rewrite answers those with
  // index.html at 200, which decodes as a broken image rather than a 404.
  await writeFile(
    path.join(__dirname, '..', 'src', 'data', 'image-manifest.json'),
    JSON.stringify(manifest, null, 2) + '\n',
    'utf-8'
  )

  const kb = (n) => `${Math.round(n / 1024)} KB`
  console.log(`  sources : ${files.length} files, ${kb(before)}`)
  console.log(`  variants: ${kb(after)} across ${WIDTHS.join('/')}px WebP`)
  console.log(`  manifest : ${Object.keys(manifest).length} images`)
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
