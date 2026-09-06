/**
 * Render film.html to a frame sequence.
 *
 * The film exposes window.__seek(t); we drive it frame by frame rather than
 * letting it play. Every frame is therefore reproducible, and the audio bed
 * built in 1_voice.py lines up without any sync pass.
 *
 *   node scripts/video/3_render.mjs [--probe]
 *     --probe   render eight representative stills only (fast design check)
 */
import { chromium } from 'playwright';
import { readFile, mkdir, rm } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const BUILD = path.join(HERE, 'build');
const timings = JSON.parse(await readFile(path.join(BUILD, 'timings.json'), 'utf8'));

const PROBE = process.argv.includes('--probe');
const FPS = timings.fps;
const TOTAL = timings.total;
const FRAMES = Math.ceil(TOTAL * FPS);
const OUT = path.join(BUILD, PROBE ? 'probe' : 'frames');

await rm(OUT, { recursive: true, force: true });
await mkdir(OUT, { recursive: true });

const browser = await chromium.launch({ args: ['--force-color-profile=srgb', '--font-render-hinting=none'] });
const page = await browser.newPage({ viewport: { width: 1920, height: 1080 }, deviceScaleFactor: 1 });
await page.addInitScript((t) => { window.__TIMINGS__ = t; }, timings);
await page.goto(pathToFileURL(path.join(HERE, 'film.html')).href, { waitUntil: 'load' });
await page.waitForFunction(() => window.__ready !== undefined);
await page.evaluate(() => window.__ready);

if (PROBE) {
  // one still per act beat, for eyeballing the design without a full render
  const marks = [3.4, 10.5, 16.5, 27.0, 37.0, 52.0, 58.5, 66.5, 75.0, 82.0, 93.5, 100.0, 105.0, 115.0];
  for (const [i, t] of marks.entries()) {
    await page.evaluate((v) => window.__seek(v), t);
    await page.screenshot({ path: path.join(OUT, `probe-${String(i).padStart(2, '0')}-${t}s.png`) });
  }
  console.log(`probe stills -> ${OUT}`);
} else {
  const t0 = Date.now();
  for (let f = 0; f < FRAMES; f++) {
    await page.evaluate((v) => window.__seek(v), f / FPS);
    await page.screenshot({
      path: path.join(OUT, `f${String(f).padStart(5, '0')}.jpg`),
      type: 'jpeg', quality: 94, animations: 'disabled',
    });
    if (f % 240 === 0) {
      const done = f / FRAMES;
      const eta = done > 0 ? ((Date.now() - t0) / done) * (1 - done) / 1000 : 0;
      console.log(`  frame ${f}/${FRAMES}  ${(done * 100).toFixed(1)}%  eta ${eta.toFixed(0)}s`);
    }
  }
  console.log(`rendered ${FRAMES} frames in ${((Date.now() - t0) / 1000).toFixed(0)}s -> ${OUT}`);
}

await browser.close();
