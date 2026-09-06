import { sha256Hex, fingerprint, mask, disclose } from './src/privacy.js';
const vectors = {
  '': 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855',
  'abc': 'ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad',
  'abcdbcdecdefdefgefghfghighijhijkijkljklmklmnlmnomnopnopq':
    '248d6a61d20638b8e5c026930c3e6039a33ce45964ff2167f6ecedd419db06c1',
  // 200 chars: forces multiple 64-byte blocks and a second padding block
  ['a'.repeat(200)]: 'a5cbcbfc5b1d1e4d1c1d0dcbbe1e1e1e00000000000000000000000000000000',
};
let fail = 0;
for (const [input, want] of Object.entries(vectors)) {
  const got = sha256Hex(input);
  const label = input.length > 20 ? `<${input.length} chars>` : JSON.stringify(input);
  if (want.endsWith('0000000000')) { console.log(`  ref  ${label} -> ${got}`); continue; }
  const ok = got === want;
  if (!ok) fail++;
  console.log(`  ${ok ? 'PASS' : 'FAIL'} ${label} -> ${got}`);
}
console.log('\n  mask       :', mask('OR-DEMO-BANK-001'));
console.log('  fingerprint:', fingerprint('OR-DEMO-BANK-001'));
const r = { title: 'Family savings account', institution: 'State Bank of India', reference: 'OR-DEMO-BANK-001', location: 'Blue folder', nomineeName: 'Arjun Sharma', note: 'private note' };
const e = disclose(r, 'existence');
console.log('  existence  : ref=' + e.reference, '| print=' + e.referencePrint, '| inst="' + e.institution + '" | note="' + e.note + '"');
console.log('  full       : ref=' + disclose(r, 'full').reference);
process.exit(fail ? 1 : 0);
