/** Behavioural checks for the consent/privacy fixes, against the built app. */
import { chromium } from 'playwright';
import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';

const DIST = path.resolve('dist'); const PORT = 4321;
const MIME = { '.html':'text/html', '.js':'text/javascript', '.css':'text/css' };
await new Promise((r) => createServer(async (req, res) => {
  const rel = decodeURIComponent(req.url.split('?')[0]);
  let f = path.join(DIST, rel === '/' ? 'index.html' : rel);
  if (!existsSync(f)) f = path.join(DIST, 'index.html');
  res.writeHead(200, { 'Content-Type': MIME[path.extname(f)] || 'text/plain' });
  res.end(await readFile(f));
}).listen(PORT, r));

const b = await chromium.launch();
const page = await b.newPage({ viewport: { width: 1500, height: 1100 } });
const base = `http://127.0.0.1:${PORT}/`;
let pass = 0, fail = 0;
const check = (name, ok, extra = '') => { ok ? pass++ : fail++; console.log(`  ${ok ? 'PASS' : 'FAIL'}  ${name}${extra ? ' — ' + extra : ''}`); };

await page.goto(base + '#/family', { waitUntil: 'networkidle' });
await page.waitForTimeout(700);

// 1. the owner view must offer no way to raise a concern as someone else
const ownerConcernBtns = await page.locator('.family-side button', { hasText: /concern/i }).count();
check('owner view cannot raise a concern for a member', ownerConcernBtns === 0, `${ownerConcernBtns} buttons`);

// 2. a downgrade must enter a real, gated cooling-off
const row = page.locator('.access-row', { hasText: 'Family certificates' }).first();
await row.locator('select').selectOption('private');
await page.waitForTimeout(500);
const cool = row.locator('.cooldown');
check('downgrade opens a cooling-off', await cool.count() === 1);
const applyDisabled = await cool.locator('button', { hasText: 'Apply' }).isDisabled();
check('Apply is disabled until the window elapses', applyDisabled);
const label = await cool.locator('small').nth(1).innerText();
check('remaining time is shown', /\d+d \d+h before/.test(label), label);

// 3. re-selecting the live tier cancels the pending downgrade
await row.locator('select').selectOption('existence');
await page.waitForTimeout(500);
check('re-selecting the live tier cancels the pending change', await row.locator('.cooldown').count() === 0);

// 4. fast-forward is explicit, and only then can it apply
await row.locator('select').selectOption('private');
await page.waitForTimeout(400);
await row.locator('button', { hasText: 'Fast-forward' }).click();
await page.waitForTimeout(500);
check('after fast-forward, Apply becomes available',
      !(await row.locator('button', { hasText: 'Apply' }).isDisabled()));
await row.locator('button', { hasText: 'Apply' }).click();
await page.waitForTimeout(500);
const logTxt = await page.locator('.trace').innerText();
check('the log discloses the simulated clock', /simulated clock/i.test(logTxt));

// 5. existence-only must mask the reference and show a fingerprint
await page.evaluate(() => { window.location.hash = '/preview/demo-arjun-4k9'; });
await page.waitForTimeout(800);
const recs = await page.locator('.recipient-record').allInnerTexts();
const pf = recs.find((r) => /Provident fund/.test(r)) || '';
check('existence-only masks the reference', /••••/.test(pf), pf.replace(/\n/g, ' | '));
check('existence-only shows a sha256 fingerprint', /sha256:[0-9a-f]{10}/.test(pf));
check('existence-only hides the institution', !/EPFO/.test(pf));
const life = recs.find((r) => /Life cover/.test(r)) || '';
check('full detail still releases the reference', /OR-DEMO-LIFE-001/.test(life), life.replace(/\n/g, ' | '));

// 6. a concern needs the member's own words
await page.locator('.recipient-record', { hasText: 'Life cover' }).locator('button', { hasText: 'Raise a concern' }).click();
await page.waitForTimeout(300);
const send = page.locator('.concern-box button', { hasText: 'Send privately' });
check('concern cannot be sent empty', await send.isDisabled());
await page.locator('.concern-box textarea').fill('Why is this shared at full detail?');
check('concern sends once the member has written something', !(await send.isDisabled()));

// 7. the handover file carries an actionable next step
await page.evaluate(() => { window.location.hash = '/handover'; });
await page.waitForTimeout(800);
// the bank record is not in the default bundle; add it to reach the RBI link
await page.locator('.bundle-row', { hasText: 'Family savings account' }).locator('input').check();
await page.waitForTimeout(400);
const paper = await page.locator('.bundle-paper').innerText();
check('handover file names where to start', /Where to start/i.test(paper));
check('handover file links the vetted RBI guidance', await page.locator('.bundle-paper a[href*="rbi.org.in"]').count() > 0);
check('an unselected record contributes no link', !/epfindia/.test(await page.locator('.bundle-paper').innerHTML()));
check('handover file is honest where no link exists', /No official link recorded/.test(paper));

console.log(`\n  ${pass} passed, ${fail} failed`);
await b.close(); process.exit(fail ? 1 : 0);
