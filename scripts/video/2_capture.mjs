/**
 * Capture real screens from the built On Record app.
 *
 * The whole journey runs in a single browser context because App state lives in
 * the root component and hash routing keeps it mounted (src/App.jsx). Driving the
 * real state machine — rather than reloading each route — means the captures show
 * genuine consequences: Ananya's view only contains what we actually granted her,
 * and the cooling-off card only exists because we really requested a downgrade.
 */
import { chromium } from 'playwright';
import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { existsSync, mkdirSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(HERE, '..', '..');
const DIST = path.join(ROOT, 'dist');
const OUT = path.join(HERE, 'build', 'screens');
const PORT = 4319;

const MIME = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.svg': 'image/svg+xml', '.json': 'application/json' };

function serve() {
  const server = createServer(async (req, res) => {
    const rel = decodeURIComponent(req.url.split('?')[0]);
    let file = path.join(DIST, rel === '/' ? 'index.html' : rel);
    if (!existsSync(file)) file = path.join(DIST, 'index.html');
    try {
      const body = await readFile(file);
      res.writeHead(200, { 'Content-Type': MIME[path.extname(file)] || 'application/octet-stream' });
      res.end(body);
    } catch { res.writeHead(404).end('not found'); }
  });
  return new Promise((resolve) => server.listen(PORT, () => resolve(server)));
}

const base = `http://127.0.0.1:${PORT}/`;

/** Freeze scroll reveals and the caret so every capture is a settled frame. */
const SETTLE_CSS = `
  [data-reveal]{opacity:1!important;transform:none!important;transition:none!important}
  *{caret-color:transparent!important}
  html{scroll-behavior:auto!important}
`;

async function shot(page, name, selector) {
  mkdirSync(OUT, { recursive: true });
  const target = selector ? page.locator(selector).first() : page;
  await target.screenshot({ path: path.join(OUT, `${name}.png`), animations: 'disabled' });
  console.log(`  captured ${name}${selector ? ` (${selector})` : ''}`);
}

/** Set the access tier for the row whose title matches `title`. */
async function setTier(page, title, tier) {
  const row = page.locator('.access-row', { hasText: title }).first();
  await row.locator('select').selectOption(tier);
  await page.waitForTimeout(350);
}

async function goto(page, hash, height = 1000) {
  await page.setViewportSize({ width: 1600, height });
  await page.evaluate((h) => { window.location.hash = h; window.scrollTo(0, 0); }, hash);
  await page.waitForTimeout(600);
}

const server = await serve();
const browser = await chromium.launch();
const page = await browser.newPage({
  viewport: { width: 1600, height: 1000 },
  deviceScaleFactor: 2,
});
await page.goto(base + '#/', { waitUntil: 'networkidle' });
await page.addStyleTag({ content: SETTLE_CSS });
await page.waitForTimeout(700);

console.log('capturing On Record screens...');

// 01 — the owner's landing view
await shot(page, '01-hero');

// 02 — the connected five-action case rail
await page.evaluate(() => document.getElementById('flow')?.scrollIntoView());
await page.waitForTimeout(500);
await shot(page, '02-flow', '.case-flow-wrap');

// 03 — the private record ledger: seven records, everything private
await goto(page, '/records', 1300);
await page.addStyleTag({ content: SETTLE_CSS });
await shot(page, '03-records', '.record-table');
await shot(page, '03b-records-page');

// 04 — consent architecture, Ananya. Grant existence-only on the family home.
await goto(page, '/family', 1200);
await page.addStyleTag({ content: SETTLE_CSS });
await setTier(page, 'Family home', 'existence');
await shot(page, '04-consent', '.access-panel');
await shot(page, '04b-ananya-preview', '.recipient-preview');

// 05 — Ananya's separate read-only route, not the owner account
await goto(page, '/preview/demo-ananya-7f2', 1100);
await page.addStyleTag({ content: SETTLE_CSS });
await shot(page, '05-ananya-view');

// 06 — a downgrade on Arjun's life-cover access enters the 7-day cooling-off
await goto(page, '/family', 1200);
await page.addStyleTag({ content: SETTLE_CSS });
await page.locator('.member-switcher button', { hasText: 'Arjun' }).click();
await page.waitForTimeout(300);
await setTier(page, 'Life cover policy', 'existence');
await shot(page, '06-cooling-off', '.access-panel');
await shot(page, '06b-cooling-row', '.access-row:has(.cooldown)');

// 07 — the Consent Log, now carrying every decision we just made
await shot(page, '07-consent-log', '.trace');

// 08 — the handover fork and the read-only file it produces
await goto(page, '/handover', 1400);
await page.addStyleTag({ content: SETTLE_CSS });
await shot(page, '08-handover', '.handover-layout');
await shot(page, '08b-handover-file', '.bundle-paper');
await shot(page, '08c-handover-select', '.bundle-panel');

await browser.close();
server.close();
console.log('done -> scripts/video/build/screens');
