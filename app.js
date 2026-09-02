/* On Record app logic */

const STRINGS = {"brand":{"en":"On Record","hi":"On Record"},"footer":{"en":"On Record is an independent prototype. It is not affiliated with any government department.","hi":"On Record एक स्वतंत्र prototype है। यह किसी भी government department से affiliated नहीं है।"},"stamp":{"en":"RECORDED","hi":"दर्ज़"},"recordCode":{"en":"OR / 2026","hi":"OR / 2026"},"d1":{"en":"Organise & Protect","hi":"Organise & Protect"},"d2":{"en":"Find What's Lost","hi":"Find What’s Lost"},"d3":{"en":"Know Your Rights","hi":"Know Your Rights"},"back":{"en":"← Back to index","hi":"← Index पर वापस"},"addTitle":{"en":"Build your record","hi":"अपना record बनाएं"},"addSub":{"en":"Add what you know. This stays in this browser session; no account or login is needed.","hi":"जो जानते हैं वह जोड़ें। यह इसी browser session में रहता है; account या login की जरूरत नहीं।"},"type":{"en":"Type","hi":"Type"},"institution":{"en":"Institution name","hi":"Institution का नाम"},"nomineeSet":{"en":"Nominee currently listed?","hi":"क्या nominee अभी record में है?"},"yes":{"en":"Yes","hi":"हां"},"no":{"en":"No","hi":"नहीं"},"nomineeName":{"en":"Nominee name","hi":"Nominee का नाम"},"relation":{"en":"Relation","hi":"Relation"},"updated":{"en":"Last updated year","hi":"Last updated year"},"remove":{"en":"Remove","hi":"हटाएं"},"addAsset":{"en":"+ Add another asset","hi":"+ दूसरा asset जोड़ें"},"check":{"en":"Check my record →","hi":"मेरा record check करें →"},"checkTitle":{"en":"A first reading of your record","hi":"आपके record की पहली reading"},"checkSub":{"en":"These are completeness signals, not legal conclusions.","hi":"ये completeness signals हैं, legal conclusions नहीं।"},"missing":{"en":"Missing nominee","hi":"Nominee record में नहीं"},"outdated":{"en":"Nominee may be outdated","hi":"Nominee पुराना हो सकता है"},"complete":{"en":"On record, complete","hi":"Record में, complete"},"fixMissing":{"en":"Fix: add a nominee at your bank's branch or net-banking nomination page.","hi":"Fix: अपने bank की branch या net-banking nomination page पर nominee जोड़ें।"},"fixOld":{"en":"Fix: revisit and refresh the nominee details.","hi":"Fix: nominee details फिर से check करके update करें।"},"explainer":{"en":"What a nominee record means","hi":"Nominee record का मतलब"},"handover":{"en":"Make handover sheet →","hi":"Handover sheet बनाएं →"},"draft":{"en":"Prepare a will draft","hi":"Will draft तैयार करें"},"testator":{"en":"Name of the person making this draft","hi":"Draft बनाने वाले व्यक्ति का नाम"},"beneficiary":{"en":"Beneficiary","hi":"Beneficiary"},"whatThey":{"en":"What they are described as receiving","hi":"उन्हें क्या मिलने का वर्णन है"},"addBeneficiary":{"en":"+ Add beneficiary","hi":"+ Beneficiary जोड़ें"},"makeDraft":{"en":"Create draft →","hi":"Draft बनाएं →"},"draftWarning":{"en":"DRAFT — NOT LEGALLY VALID UNTIL PROPERLY EXECUTED","hi":"DRAFT — PROPERLY EXECUTED होने तक LEGALLY VALID नहीं"},"draftSub":{"en":"This is a draft to take to a lawyer or the Sub-Registrar. It has no legal effect until properly executed and, where applicable, registered.","hi":"यह lawyer या Sub-Registrar को ले जाने के लिए draft है। Properly executed और जहां लागू हो registered होने तक इसका कोई legal effect नहीं है।"},"willChecklist":{"en":"What the general checklist says","hi":"General checklist क्या कहती है"},"print":{"en":"Print this draft","hi":"इस draft को print करें"},"sheetTitle":{"en":"Handover sheet / What is currently on record","hi":"Handover sheet / अभी record में क्या है"},"sheetSub":{"en":"A factual snapshot for the person who owns this record.","hi":"इस record के owner के लिए factual snapshot।"},"currentNominee":{"en":"Nominee currently listed","hi":"अभी record में listed nominee"},"status":{"en":"Status","hi":"Status"},"share":{"en":"Share this sheet","hi":"यह sheet share करें"},"shareTitle":{"en":"Before you share","hi":"Share करने से पहले"},"shareSub":{"en":"This is exactly what will be shared with the named recipient:","hi":"Named recipient के साथ exactly यह share होगा:"},"recipient":{"en":"Recipient name","hi":"Recipient का नाम"},"cancel":{"en":"Cancel","hi":"Cancel"},"confirmShare":{"en":"Confirm share","hi":"Share confirm करें"},"shared":{"en":"Share recorded. It can be revoked in this session.","hi":"Share record हो गया। इस session में इसे revoke किया जा सकता है।"},"revoke":{"en":"Revoke share","hi":"Share revoke करें"},"lostTitle":{"en":"Find what's lost","hi":"जो खोया है उसे खोजें"},"lostSub":{"en":"This is a fast, simulated cross-registry search. No government system is contacted.","hi":"यह fast, simulated cross-registry search है। किसी government system से संपर्क नहीं होता।"},"person":{"en":"Person or family name","hi":"Person या family name"},"years":{"en":"Approximate years (optional)","hi":"Approximate years (optional)"},"search":{"en":"Search the five registries →","hi":"पांच registries में खोजें →"},"searching":{"en":"Checking","hi":"Checking"},"matches":{"en":"Possible matches in the mock index","hi":"Mock index में possible matches"},"viewChecklist":{"en":"See claim checklist →","hi":"Claim checklist देखें →"},"strong":{"en":"Strong match","hi":"Strong match"},"possible":{"en":"Possible match","hi":"Possible match"},"simulated":{"en":"This search is simulated for this prototype. A real version would need direct, authorised data-sharing agreements with RBI, IRDAI, SEBI and EPFO, the same institutions the government’s own portal already links out to.","hi":"यह search इस prototype के लिए simulated है। Real version के लिए RBI, IRDAI, SEBI और EPFO के साथ direct, authorised data-sharing agreements चाहिए होंगे; government का अपना portal भी इन्हीं institutions के links देता है।"},"claimTitle":{"en":"If this match is yours to follow up","hi":"अगर इस match पर follow up करना हो"},"claimNote":{"en":"This is a general document checklist, not a decision about a claim.","hi":"यह general document checklist है, किसी claim पर decision नहीं।"},"rightsTitle":{"en":"What is your situation?","hi":"आपकी situation क्या है?"},"rightsSub":{"en":"Choose a path. This is a fixed decision tree, not a chatbot.","hi":"एक path चुनें। यह fixed decision tree है, chatbot नहीं।"},"lostRelative":{"en":"A relative may have left something unclaimed","hi":"किसी relative की unclaimed चीज हो सकती है"},"setup":{"en":"I am worried about my family’s setup","hi":"मुझे अपने family setup की चिंता है"},"pressure":{"en":"I feel pressured about my property","hi":"मेरी property को लेकर मुझ पर pressure है"},"dispute":{"en":"There is already a dispute","hi":"पहले से dispute है"},"next":{"en":"What to do next","hi":"अगला कदम"},"escalation":{"en":"Places that handle disputes","hi":"Dispute संभालने वाली जगहें"},"verify":{"en":"Confirm before relying on this","hi":"भरोसा करने से पहले confirm करें"},"generalRule":{"en":"This explains the general rule. It does not decide your specific case. Confirm with a lawyer or the relevant office.","hi":"यह general rule समझाता है। यह आपकी specific case का फैसला नहीं करता। Lawyer या relevant office से confirm करें।"},"noAssets":{"en":"No assets added yet.","hi":"अभी कोई asset नहीं जोड़ा गया।"},"prepareTitle":{"en":"Prepare","hi":"Prepare"},"handoverTitle":{"en":"Make the first days less confusing.","hi":"पहले दिनों का confusion कम करें।"},"handoverEyebrow":{"en":"Handover / after a death","hi":"Handover / death के बाद"},"handoverSub":{"en":"Start with what you know. This prototype shows the documents, possible records, and next authorities a family may need to consider.","hi":"जो जानते हैं उससे शुरू करें। यह prototype documents, possible records और next authorities दिखाता है जिन पर family को विचार करना पड़ सकता है।"},"mockBoundary":{"en":"This is a simulated journey. It does not access government systems or decide inheritance.","hi":"यह simulated journey है। यह government systems access नहीं करता और inheritance का फैसला नहीं करता।"},"recordRef":{"en":"Record reference (synthetic)","hi":"Record reference (synthetic)"},"documentLocation":{"en":"Where is the document kept?","hi":"Document कहां रखा है?"},"recordNotes":{"en":"Short note (optional)","hi":"Short note (optional)"},"syntheticHint":{"en":"Use fictional details only. Do not enter real account numbers or IDs.","hi":"केवल fictional details लिखें। असली account numbers या IDs न लिखें।"},"handoverPerson":{"en":"Name of the person who died (synthetic)","hi":"जिस व्यक्ति की मृत्यु हुई उनका नाम (synthetic)"},"deathCertificate":{"en":"Death certificate available?","hi":"क्या death certificate उपलब्ध है?"},"willFound":{"en":"Will or draft found?","hi":"क्या will या draft मिला है?"},"available":{"en":"Available","hi":"उपलब्ध"},"notSure":{"en":"Not sure yet","hi":"अभी पता नहीं"},"missingDoc":{"en":"Not available yet","hi":"अभी उपलब्ध नहीं"},"beginHandover":{"en":"Create handover checklist →","hi":"Handover checklist बनाएं →"},"handoverChecklistTitle":{"en":"Your handover checklist","hi":"आपकी handover checklist"},"handoverChecklistSub":{"en":"A practical list for the first conversation with an institution or authority.","hi":"Institution या authority से पहली बातचीत के लिए practical list।"},"openSearch":{"en":"Check possible records →","hi":"Possible records check करें →"},"openPrepare":{"en":"Open family record","hi":"Family record खोलें"},"important":{"en":"Important","hi":"महत्वपूर्ण"},"serviceName":{"en":"Family Continuity Services","hi":"Family Continuity Services"},"serviceNav":{"en":"Services","hi":"Services"},"serviceHome":{"en":"Service home","hi":"Service home"},"serviceNotice":{"en":"This prototype uses synthetic information. It is not an official government service and does not decide inheritance.","hi":"यह prototype synthetic information इस्तेमाल करता है। यह official government service नहीं है और inheritance का फैसला नहीं करता।"},"railPrepare":{"en":"Prepare","hi":"Prepare"},"railHandover":{"en":"Handover","hi":"Handover"},"railResolve":{"en":"Resolve","hi":"Resolve"},"railCases":{"en":"My cases","hi":"My cases"},"gapKicker":{"en":"Why On Record is different","hi":"On Record अलग क्यों है"},"gapPunch":{"en":"In May 2026 the government built its own fix. It does not search anything. It sends you to five separate logins.","hi":"May 2026 में government ने अपना खुद का fix बनाया। यह खुद कुछ search नहीं करता। यह आपको पांच अलग logins पर भेज देता है।"},"gapFollow":{"en":"On Record is what a unified version looks like: one family case, in plain language, in English or Hindi.","hi":"On Record वह unified version है: एक family case, plain language में, English या Hindi में।"},"scaleTitle":{"en":"What is real, what is mocked, and how this could scale","hi":"क्या असली है, क्या mocked है, और यह कैसे scale हो सकता है"},"scaleWorks":{"en":"What works today: the full Prepare, Handover, and Resolve journey, in English and Hindi, with real routing logic and no login.","hi":"आज क्या काम करता है: पूरा Prepare, Handover और Resolve journey, English और Hindi में, real routing logic के साथ, बिना login के।"},"scaleMocked":{"en":"What is mocked: the cross-registry search and the sample records. No live government system is contacted.","hi":"क्या mocked है: cross-registry search और sample records। किसी live government system से संपर्क नहीं होता।"},"scaleNext":{"en":"How this could scale: with consent-based, DPDP-compliant data-sharing agreements with RBI, IRDAI, SEBI, and EPFO, the same institutions the government's own portal already links to, the simulated search becomes a real one.","hi":"यह कैसे scale हो सकता है: RBI, IRDAI, SEBI और EPFO के साथ consent-based, DPDP-compliant data-sharing agreements से, जिन्हें government का अपना portal पहले से link करता है, simulated search एक real search बन जाती है।"},"startHeroBody":{"en":"On Record helps families organise financial and property facts, identify what needs attention, and reach the right official service.","hi":"On Record family को financial और property facts organise करने, attention वाली चीजें पहचानने और सही official service तक पहुंचने में मदद करता है।"},"startHeroPrimary":{"en":"Start the demo case","hi":"Demo case शुरू करें"},"startHeroSecondary":{"en":"See how the service works","hi":"Service कैसे काम करती है देखें"},"rail1":{"en":"Before a dispute","hi":"विवाद से पहले"},"rail1d":{"en":"Prepare the facts","hi":"Facts तैयार करें"},"rail2":{"en":"After a death","hi":"Death के बाद"},"rail2d":{"en":"Make the handover clear","hi":"Handover clear करें"},"rail3":{"en":"When help is needed","hi":"जब help चाहिए"},"rail3d":{"en":"Reach the right authority","hi":"सही authority तक पहुंचें"},"proofBandTitle":{"en":"See the service in action","hi":"Service को action में देखें"},"proofBandSub":{"en":"A synthetic case shows how one family moves from scattered records to a clear next step.","hi":"Synthetic case दिखाता है कि family scattered records से clear next step तक कैसे पहुंचती है।"},"proofBandCase":{"en":"DEMO CASE / FC-001","hi":"DEMO CASE / FC-001"},"proofBandNext":{"en":"Open case journey →","hi":"Case journey खोलें →"},"proof1Value":{"en":"₹78,000 crore","hi":"₹78,000 करोड़"},"proof1Label":{"en":"Approximate bank deposits inactive for 10+ years, listed for RBI UDGAM.","hi":"10+ साल से inactive bank deposits का approximate figure, RBI UDGAM में listed।"},"proof2Value":{"en":"₹89,000 crore","hi":"₹89,000 करोड़"},"proof2Label":{"en":"Approximate unclaimed shares and dividends listed for IEPF.","hi":"IEPF के लिए listed unclaimed shares और dividends का approximate figure।"},"proof3Value":{"en":"2.07 crore","hi":"2.07 करोड़"},"proof3Label":{"en":"Cases settled by the 2nd National Lok Adalat of 2026 alone.","hi":"2026 की दूसरी National Lok Adalat में अकेले settle हुए cases।"},"officialTitle":{"en":"Where official services fit","hi":"Official services यहां जुड़ती हैं"},"officialSub":{"en":"On Record prepares the context. These public services handle the official process.","hi":"On Record context prepare करता है। Official process ये public services handle करती हैं।"},"openOfficial":{"en":"Open official service ↗","hi":"Official service खोलें ↗"},"contextTitle":{"en":"Why this needs a clearer first step","hi":"इसमें clearer first step क्यों जरूरी है"},"contextSub":{"en":"Public systems are valuable, but families still have to know what to search for and where to begin.","hi":"Public systems valuable हैं, लेकिन family को फिर भी पता होना चाहिए कि क्या search करना है और कहां से शुरू करना है।"},"officialBoundary":{"en":"These links are destinations only. This prototype does not send data or submit a claim.","hi":"ये links सिर्फ destinations हैं। यह prototype data भेजता या claim submit नहीं करता।"},"impactKicker":{"en":"Public-service prototype / Demo case opened","hi":"Public-service prototype / Demo case opened"},"impactStatus":{"en":"ACTIVE DEMO CASE","hi":"ACTIVE DEMO CASE"},"impactPersona":{"en":"Meera Sharma","hi":"Meera Sharma"},"impactFact1":{"en":"records found","hi":"records मिले"},"impactFact2":{"en":"detail needs attention","hi":"detail पर ध्यान चाहिए"},"impactFact3":{"en":"official destinations","hi":"official destinations"},"impactNext":{"en":"Next: create the handover checklist","hi":"Next: handover checklist बनाएं"},"impactNote":{"en":"No live data. No legal decision. A clearer starting point.","hi":"No live data. No legal decision. एक clearer starting point।"}};

const OFFICIAL_DESTINATIONS = [
  { name: 'RBI UDGAM', kind: 'Unclaimed bank deposits', url: 'https://udgam.rbi.org.in', desc: 'Search facility for unclaimed bank deposits.' },
  { name: 'IEPF', kind: 'Shares and dividends', url: 'https://www.iepf.gov.in', desc: 'Investor Education and Protection Fund services.' },
  { name: 'Bima Bharosa', kind: 'Insurance', url: 'https://bimabharosa.irdai.gov.in', desc: 'Insurance grievance and service pathway.' },
  { name: 'EPFO', kind: 'Provident fund', url: 'https://www.epfindia.gov.in', desc: 'Provident fund member and claim services.' },
  { name: 'MF Central', kind: 'Mutual funds', url: 'https://www.mfcentral.com', desc: 'Mutual fund account and service access.' },
  { name: 'NALSA', kind: 'Legal aid and settlement', url: 'https://nalsa.gov.in', desc: 'Legal aid, Lok Adalat, mediation, and state links.' }
];

function demoAssets() {
  return [
    { type: 'bank', institution: 'State Bank of India', reference: 'DEMO-BANK-001', documentLocation: 'Home file, blue folder', notes: 'Passbook listed in family papers', hasNominee: false, nominee: '', relation: '', year: '' },
    { type: 'property', institution: 'Family property record', reference: 'DEMO-LAND-001', documentLocation: 'Parent’s document file', notes: 'Mutation status needs checking', hasNominee: true, nominee: 'Meera Sharma', relation: 'Daughter', year: '2020' },
    { type: 'insurance', institution: 'LIC', reference: 'DEMO-LIFE-001', documentLocation: 'Home file, policy section', notes: 'Policy paper available', hasNominee: true, nominee: 'Arjun Sharma', relation: 'Son', year: '2025' }
  ];
}

const state = {
  lang: new URLSearchParams(location.search).get('lang') === 'hi' ? 'hi' : 'en',
  assets: demoAssets(),
  beneficiaries: [{ name: 'Meera Sharma', relation: 'Daughter', what: 'The property record described above' }],
  testator: 'Demo family member',
  draft: false,
  search: null,
  share: null,
  handoverCase: { person: 'Demo family member', deathCertificate: 'notSure', willFound: 'notSure', started: false }
};

const $ = (s) => document.querySelector(s);
const t = (k) => String(STRINGS[k] && STRINGS[k][state.lang] || STRINGS[k] && STRINGS[k].en || k).replace(/\s*—\s*/g, ', ');
const esc = (v) => String(v == null ? '' : v).replace(/[&<>"']/g, function(c){ return ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'})[c]; });
const typeLabel = (type) => { const a = ASSET_TYPES.find(x => x[0] === type); return a ? a[state.lang === 'hi' ? 2 : 1] : type; };
const verify = (f) => (f && f.confidence === 'verify') ? ('<span class="verify">◌ ' + t('verify') + '</span>') : '';

function go(path) { location.hash = path; }
function setLang(lang) { state.lang = lang; const q = new URLSearchParams(location.search); q.set('lang', lang); history.replaceState(null, '', location.pathname + '?' + q.toString() + location.hash); renderApp(); }
function status(s) { return '<span class="status ' + s + '">' + (s === 'missing' ? '!' : s === 'outdated' ? '◌' : '✓') + ' ' + t(s) + '</span>'; }
function completeness(a) { if (!a.hasNominee) return 'missing'; if (a.year && 2026 - Number(a.year) > 5) return 'outdated'; return 'complete'; }

function updateAsset(i, k, v) { state.assets[i][k] = v; if (k === 'hasNominee' || k === 'type') renderApp(); }
function addAsset() { state.assets.push({ type: 'bank', institution: '', reference: '', documentLocation: '', notes: '', hasNominee: false, nominee: '', relation: '', year: '' }); renderApp(); }
function removeAsset(i) { state.assets.splice(i, 1); renderApp(); }
function updateHandover(k, v) { state.handoverCase[k] = v; }
function beginHandover() { state.handoverCase.started = true; renderApp(); }

function layout(content) {
  document.documentElement.lang = state.lang === 'hi' ? 'hi' : 'en';
  $('#lang-en').classList.toggle('active', state.lang === 'en');
  $('#lang-hi').classList.toggle('active', state.lang === 'hi');
  document.querySelectorAll('[data-i18n]').forEach(function(el){ el.textContent = t(el.dataset.i18n); });
  $('#app').innerHTML = content;
  $('#app').focus();
}

function assetForm(a, i) {
  var opts = ASSET_TYPES.map(function(x){ return '<option value="' + x[0] + '" ' + (a.type === x[0] ? 'selected' : '') + '>' + x[state.lang === 'hi' ? 2 : 1] + '</option>'; }).join('');
  var nomineeFields = a.hasNominee ? (
    '<div class="fields"><div class="field"><label for="name-' + i + '">' + t('nomineeName') + '</label><input id="name-' + i + '" value="' + esc(a.nominee) + '" oninput="updateAsset(' + i + ',\'nominee\',this.value)"></div>' +
    '<div class="field"><label for="rel-' + i + '">' + t('relation') + '</label><input id="rel-' + i + '" value="' + esc(a.relation) + '" oninput="updateAsset(' + i + ',\'relation\',this.value)"></div>' +
    '<div class="field"><label for="year-' + i + '">' + t('updated') + '</label><input id="year-' + i + '" type="number" min="1990" max="2026" value="' + esc(a.year) + '" oninput="updateAsset(' + i + ',\'year\',this.value)"></div></div>'
  ) : '';
  return '<article class="asset-card"><span class="asset-index mono">' + String(i + 1).padStart(2, '0') + '</span>' +
    '<div class="fields"><div class="field"><label for="type-' + i + '">' + t('type') + '</label><select id="type-' + i + '" onchange="updateAsset(' + i + ',\'type\',this.value)">' + opts + '</select></div>' +
    '<div class="field"><label for="inst-' + i + '">' + t('institution') + '</label><input id="inst-' + i + '" value="' + esc(a.institution) + '" oninput="updateAsset(' + i + ',\'institution\',this.value)"></div>' +
    '<div class="field"><label for="ref-' + i + '">' + t('recordRef') + '</label><input id="ref-' + i + '" value="' + esc(a.reference) + '" placeholder="e.g. MOCK-001" oninput="updateAsset(' + i + ',\'reference\',this.value)"></div>' +
    '<div class="field"><label for="loc-' + i + '">' + t('documentLocation') + '</label><input id="loc-' + i + '" value="' + esc(a.documentLocation) + '" placeholder="e.g. Home file" oninput="updateAsset(' + i + ',\'documentLocation\',this.value)"></div></div>' +
    '<p class="field-hint">' + t('syntheticHint') + '</p>' +
    '<div class="field"><label for="nom-' + i + '">' + t('nomineeSet') + '</label><select id="nom-' + i + '" onchange="updateAsset(' + i + ',\'hasNominee\',this.value===\'yes\')"><option value="no" ' + (!a.hasNominee ? 'selected' : '') + '>' + t('no') + '</option><option value="yes" ' + (a.hasNominee ? 'selected' : '') + '>' + t('yes') + '</option></select></div>' +
    nomineeFields +
    '<div class="field"><label for="note-' + i + '">' + t('recordNotes') + '</label><input id="note-' + i + '" value="' + esc(a.notes) + '" oninput="updateAsset(' + i + ',\'notes\',this.value)"></div>' +
    '<button class="btn danger" type="button" onclick="removeAsset(' + i + ')">' + t('remove') + '</button></article>';
}

function door1Add() {
  return '<a class="back" href="#/">' + t('back') + '</a><div class="step">01 / ' + t('prepareTitle') + '</div><h2>' + t('addTitle') + '</h2><p>' + t('addSub') + '</p>' +
    '<div class="form-stack">' + state.assets.map(assetForm).join('') + '</div>' +
    '<div class="actions"><button class="btn" onclick="addAsset()">' + t('addAsset') + '</button><button class="btn primary" onclick="go(\'/door1/check\')">' + t('check') + '</button></div>';
}

function door1Check() {
  var rows = state.assets.length ? state.assets.map(function(a){
    var c = completeness(a);
    var fix = c === 'missing' ? ('<p>' + t('fixMissing') + '</p>') : c === 'outdated' ? ('<p>' + t('fixOld') + '</p>') : '';
    return '<div class="panel"><div class="screen-head"><div><h3>' + esc(typeLabel(a.type)) + '</h3><div>' + (esc(a.institution) || '—') + '</div>' +
      '<div class="record-meta mono">' + (esc(a.reference) || '—') + ' · ' + (esc(a.documentLocation) || '—') + '</div></div>' + status(c) + '</div>' + fix + '</div>';
  }).join('') : ('<div class="empty">' + t('noAssets') + '</div>');
  return '<a class="back" href="#/door1/add">' + t('back') + '</a><div class="step">01 / ' + t('prepareTitle') + '</div><h2>' + t('checkTitle') + '</h2><p>' + t('checkSub') + '</p>' + rows +
    '<div class="fact">' + verify(FACTS.nominee) + '<h3>' + t('explainer') + '</h3><p>' + FACTS.nominee[state.lang] + '</p></div>' +
    '<p class="disclaimer">' + t('generalRule') + '</p>' +
    '<div class="actions"><button class="btn" onclick="go(\'/door1/will\')">' + t('draft') + '</button><button class="btn primary" onclick="go(\'/door1/sheet\')">' + t('handover') + '</button></div>';
}

function door1Will() {
  if (!state.beneficiaries.length) state.beneficiaries.push({ name: '', relation: '', what: '' });
  var beneficiaryCards = state.beneficiaries.map(function(b, i){
    return '<article class="asset-card"><h3>' + t('beneficiary') + ' ' + (i + 1) + '</h3><div class="fields">' +
      '<div class="field"><label>' + t('beneficiary') + '</label><input value="' + esc(b.name) + '" oninput="state.beneficiaries[' + i + '].name=this.value"></div>' +
      '<div class="field"><label>' + t('relation') + '</label><input value="' + esc(b.relation) + '" oninput="state.beneficiaries[' + i + '].relation=this.value"></div>' +
      '<div class="field"><label>' + t('whatThey') + '</label><input value="' + esc(b.what) + '" oninput="state.beneficiaries[' + i + '].what=this.value"></div></div></article>';
  }).join('');
  var output = state.draft ? (
    '<article class="panel" id="draft-output"><div class="stamp-wrap"><span class="stamp">' + t('stamp') + '<br>' + t('brand') + '</span></div>' +
    '<div class="warn">' + t('draftWarning') + '</div><h3>' + (esc(state.testator) || '—') + '</h3><ul>' +
    (state.beneficiaries.filter(function(b){ return b.name; }).map(function(b){ return '<li>' + esc(b.name) + ' (' + (esc(b.relation) || '—') + ') — ' + (esc(b.what) || '—') + '</li>'; }).join('') || '<li>—</li>') +
    '</ul><h3>' + t('willChecklist') + '</h3><ul>' + CHECKLISTS.will[state.lang].map(function(x){ return '<li>' + x + '</li>'; }).join('') + '</ul>' +
    '<button class="btn" onclick="window.print()">' + t('print') + '</button></article>'
  ) : '';
  return '<a class="back" href="#/door1/check">' + t('back') + '</a><div class="step">01 / ' + t('draft') + '</div><h2>' + t('draft') + '</h2>' +
    '<div class="warn">' + t('draftWarning') + '</div><p>' + t('draftSub') + '</p>' +
    '<div class="form-stack"><div class="field"><label for="testator">' + t('testator') + '</label><input id="testator" value="' + esc(state.testator) + '" oninput="state.testator=this.value"></div>' + beneficiaryCards + '</div>' +
    '<div class="actions"><button class="btn" onclick="state.beneficiaries.push({name:\'\',relation:\'\',what:\'\'});renderApp()">' + t('addBeneficiary') + '</button>' +
    '<button class="btn primary" onclick="state.draft=true;renderApp()">' + t('makeDraft') + '</button></div>' + output;
}

function door1Sheet() {
  var rows = state.assets.map(function(a){
    return '<tr><td>' + esc(typeLabel(a.type)) + '</td><td>' + (esc(a.institution) || '—') + '<br><span class="mono">' + (esc(a.reference) || '—') + '</span></td>' +
      '<td>' + (esc(a.documentLocation) || '—') + '</td><td>' + (a.hasNominee ? ((esc(a.nominee) || '—') + ' (' + (esc(a.relation) || '—') + ')') : '—') + '</td><td>' + status(completeness(a)) + '</td></tr>';
  }).join('');
  var shareBlock = (state.share && !state.share.pending) ? (
    '<div class="panel"><div class="stamp-wrap"><span class="stamp">' + t('stamp') + '<br>' + t('brand') + '</span></div>' +
    '<p>' + t('shared') + ' <strong>' + esc(state.share.recipient) + '</strong></p>' +
    '<button class="btn danger" onclick="state.share=null;renderApp()">' + t('revoke') + '</button></div>'
  ) : (!state.share ? (
    '<div class="actions"><button class="btn brass" onclick="state.share={pending:true,recipient:\'\'};renderApp()">' + t('share') + '</button></div>'
  ) : '');
  var previewBlock = (state.share && state.share.pending) ? (
    '<div class="share-preview"><h3>' + t('shareTitle') + '</h3><p>' + t('shareSub') + '</p>' +
    '<div class="mono">' + (state.assets.map(function(a){ return esc(typeLabel(a.type)) + ' / ' + (esc(a.institution) || '—') + ' / ' + (esc(a.reference) || '—') + ' / ' + (esc(a.documentLocation) || '—') + ' / ' + (a.hasNominee ? ((esc(a.nominee) || '—') + ' (' + (esc(a.relation) || '—') + ')') : '—') + ' / ' + t(completeness(a)); }).join('<br>') || '—') + '</div>' +
    '<div class="field"><label for="recipient">' + t('recipient') + '</label><input id="recipient" oninput="state.share.recipient=this.value"></div>' +
    '<div class="actions"><button class="btn danger" onclick="state.share=null;renderApp()">' + t('cancel') + '</button>' +
    '<button class="btn primary" onclick="if(state.share.recipient.trim()){state.share={recipient:state.share.recipient.trim(),pending:false,fields:[\'assets\',\'references\',\'documentLocations\',\'completeness\',\'nominees\'],revoked:false,sharedAt:new Date().toISOString()};renderApp()}">' + t('confirmShare') + '</button></div></div>'
  ) : '';
  return '<a class="back" href="#/door1/check">' + t('back') + '</a><div class="step">01 / ' + t('handover') + '</div><h2>' + t('sheetTitle') + '</h2><p>' + t('sheetSub') + '</p>' +
    '<div class="panel table-wrap"><table class="record-table"><thead><tr><th>' + t('type') + '</th><th>' + t('institution') + ' / ' + t('recordRef') + '</th><th>' + t('documentLocation') + '</th><th>' + t('currentNominee') + '</th><th>' + t('status') + '</th></tr></thead>' +
    '<tbody>' + (rows || ('<tr><td colspan="5">' + t('noAssets') + '</td></tr>')) + '</tbody></table></div>' + shareBlock + previewBlock;
}

function handover() {
  var c = state.handoverCase;
  var body;
  if (!c.started) {
    body = '<div class="handover-intake panel"><h3>' + t('handoverChecklistTitle') + '</h3><p>' + t('handoverChecklistSub') + '</p>' +
      '<div class="form-stack"><div class="field"><label for="handover-person">' + t('handoverPerson') + '</label><input id="handover-person" value="' + esc(c.person) + '" oninput="updateHandover(\'person\',this.value)"></div>' +
      '<div class="fields"><div class="field"><label for="death-cert">' + t('deathCertificate') + '</label><select id="death-cert" onchange="updateHandover(\'deathCertificate\',this.value)">' +
      '<option value="notSure" ' + (c.deathCertificate === 'notSure' ? 'selected' : '') + '>' + t('notSure') + '</option>' +
      '<option value="available" ' + (c.deathCertificate === 'available' ? 'selected' : '') + '>' + t('available') + '</option>' +
      '<option value="missing" ' + (c.deathCertificate === 'missing' ? 'selected' : '') + '>' + t('missingDoc') + '</option></select></div>' +
      '<div class="field"><label for="will-found">' + t('willFound') + '</label><select id="will-found" onchange="updateHandover(\'willFound\',this.value)">' +
      '<option value="notSure" ' + (c.willFound === 'notSure' ? 'selected' : '') + '>' + t('notSure') + '</option>' +
      '<option value="available" ' + (c.willFound === 'available' ? 'selected' : '') + '>' + t('available') + '</option>' +
      '<option value="missing" ' + (c.willFound === 'missing' ? 'selected' : '') + '>' + t('missingDoc') + '</option></select></div></div>' +
      '<button class="btn primary" onclick="beginHandover()">' + t('beginHandover') + '</button></div></div>';
  } else {
    body = '<div class="panel"><div class="eyebrow">' + (esc(c.person) || '—') + '</div><h3>' + t('handoverChecklistTitle') + '</h3><p>' + t('handoverChecklistSub') + '</p><ul>' +
      '<li>' + CHECKLISTS.claim[state.lang][0] + '</li>' +
      '<li>' + t('deathCertificate') + ' ' + (c.deathCertificate === 'available' ? t('available') : c.deathCertificate === 'missing' ? t('missingDoc') : t('notSure')) + '</li>' +
      '<li>' + t('willFound') + ' ' + (c.willFound === 'available' ? t('available') : c.willFound === 'missing' ? t('missingDoc') : t('notSure')) + '</li>' +
      '<li>' + t('sheetSub') + '</li></ul>' +
      '<div class="actions"><button class="btn primary" onclick="go(\'/door2/search\')">' + t('openSearch') + '</button><button class="btn" onclick="go(\'/door1/add\')">' + t('openPrepare') + '</button></div></div>';
  }
  return '<a class="back" href="#/">' + t('back') + '</a><div class="step">02 / ' + t('handoverEyebrow') + '</div><h2>' + t('handoverTitle') + '</h2><p>' + t('handoverSub') + '</p>' + body + '<div class="honesty">' + t('mockBoundary') + '</div>';
}

function door2() {
  return '<a class="back" href="#/">' + t('back') + '</a><div class="step">02 / ' + t('d2') + '</div><h2>' + t('lostTitle') + '</h2><p>' + t('lostSub') + '</p>' +
    '<div class="form-stack"><div class="fields"><div class="field"><label for="person">' + t('person') + '</label><input id="person"></div>' +
    '<div class="field"><label for="years">' + t('years') + '</label><input id="years"></div></div>' +
    '<button class="btn primary" onclick="runSearch()">' + t('search') + '</button></div>' +
    '<div id="search-results">' + (state.search ? results() : '') + '</div>';
}
function runSearch() { state.search = 'searching'; renderApp(); setTimeout(function(){ state.search = 'done'; renderApp(); }, 650); }
function results() {
  if (state.search === 'searching') {
    return '<div class="panel search-log">' + REGISTRIES.map(function(r, i){ return '<div style="animation-delay:' + (i * .1) + 's">' + t('searching') + ' ' + r + '…</div>'; }).join('') + '</div>';
  }
  return '<h3>' + t('matches') + '</h3>' + MATCHES.map(function(m){
    return '<article class="result"><div><div class="eyebrow">' + m.registry + '</div><div class="amount">₹' + m.amount.toLocaleString('en-IN') + '</div></div>' +
      '<div><span class="confidence ' + m.confidence + '">' + t(m.confidence) + '</span><br><a href="#/door2/match/' + m.id + '">' + t('viewChecklist') + '</a></div></article>';
  }).join('') + '<div class="honesty">' + t('simulated') + '</div>';
}
function match(id) {
  var m = MATCHES.find(function(x){ return x.id === id; }) || MATCHES[0];
  return '<a class="back" href="#/door2/search">' + t('back') + '</a><div class="step">02 / ' + m.registry + '</div><h2>₹' + m.amount.toLocaleString('en-IN') + '</h2>' +
    '<div class="panel"><div class="eyebrow">' + m.registry + ' · ' + t(m.confidence) + '</div><h3>' + t('claimTitle') + '</h3><p>' + t('claimNote') + '</p>' +
    '<ul>' + CHECKLISTS.claim[state.lang].map(function(x){ return '<li>' + x + '</li>'; }).join('') + '</ul></div>' +
    '<div class="honesty">' + t('simulated') + '</div>';
}

function door3() {
  var branches = [['lostRelative', '/door3/lost'], ['setup', '/door3/setup'], ['pressure', '/door3/pressure'], ['dispute', '/door3/dispute']];
  return '<a class="back" href="#/">' + t('back') + '</a><div class="step">03 / ' + t('d3') + '</div><h2>' + t('rightsTitle') + '</h2><p>' + t('rightsSub') + '</p>' +
    '<div class="branch-grid">' + branches.map(function(x, i){ return '<button class="branch" onclick="go(\'' + x[1] + '\')"><span>0' + (i + 1) + '</span>' + t(x[0]) + '</button>'; }).join('') + '</div>';
}
function branch(kind) {
  var body = '';
  if (kind === 'lost') body = '<div class="fact">' + verify(FACTS.nominee) + '<p>' + FACTS.nominee[state.lang] + '</p></div><div class="panel"><ul>' + CHECKLISTS.claim[state.lang].map(function(x){ return '<li>' + x + '</li>'; }).join('') + '</ul></div>';
  if (kind === 'setup') body = '<div class="fact">' + verify(FACTS.personalLaw) + '<p>' + FACTS.personalLaw[state.lang] + '</p></div><div class="panel"><ul>' + CHECKLISTS.nominee[state.lang].map(function(x){ return '<li>' + x + '</li>'; }).join('') + '</ul></div>';
  if (kind === 'pressure') body = '<div class="fact">' + verify(FACTS.elder) + '<p>' + FACTS.elder[state.lang] + '</p></div>' + escalation();
  if (kind === 'dispute') body = escalation();
  return '<a class="back" href="#/door3">' + t('back') + '</a><div class="step">03 / ' + t('next') + '</div><h2>' + t('next') + '</h2>' + body + '<p class="disclaimer">' + t('generalRule') + '</p>';
}
function escalation() {
  return '<div class="panel"><h3>' + t('escalation') + '</h3><ul>' + ESCALATION.map(function(e){ return '<li>' + verify(e) + e[state.lang] + '</li>'; }).join('') + '</ul></div>';
}

function destinationCards() {
  return (OFFICIAL_DESTINATIONS || []).map(function(d){
    return '<article class="official-card"><div class="official-kind">' + esc(d.kind) + '</div><h3>' + esc(d.name) + '</h3><p>' + esc(d.desc) + '</p>' +
      '<a href="' + d.url + '" target="_blank" rel="noreferrer">' + t('openOfficial') + '</a></article>';
  }).join('');
}

function rail(active) {
  return '<aside class="service-rail"><div class="rail-label">' + t('serviceNav') + '</div>' +
    '<a class="rail-item ' + (active === 'home' ? 'active' : '') + '" href="#/"><span class="rail-num">⌂</span>' + t('serviceHome') + '</a>' +
    '<a class="rail-item ' + (active === 'prepare' ? 'active' : '') + '" href="#/door1/add"><span class="rail-num">01</span>' + t('railPrepare') + '</a>' +
    '<a class="rail-item ' + (active === 'handover' ? 'active' : '') + '" href="#/handover"><span class="rail-num">02</span>' + t('railHandover') + '</a>' +
    '<a class="rail-item ' + (active === 'resolve' ? 'active' : '') + '" href="#/door3"><span class="rail-num">03</span>' + t('railResolve') + '</a>' +
    '<a class="rail-item" href="#/"><span class="rail-num">▣</span>' + t('railCases') + '</a></aside>';
}
function platformWrap(content, active) { return '<div class="service-shell">' + rail(active || 'home') + '<section class="service-main">' + content + '</section></div>'; }
function platformScreen(inner, active) { return platformWrap('<div class="service-page">' + inner + '</div>', active); }

function platformHome() {
  var hero = '<section class="service-start-hero"><div class="service-start-copy">' +
    '<div class="service-kicker">' + t('impactKicker') + '</div>' +
    '<h1><span class="stat-accent">' + esc(FACTS.noWill.stat[state.lang]) + '</span> ' + esc(FACTS.noWill[state.lang]) + '</h1>' +
    '<p class="hero-cite">' + verify(FACTS.noWill) + ' ' + esc(FACTS.noWill.source[state.lang]) + '</p>' +
    '<p>' + t('startHeroBody') + '</p>' +
    '<div class="hero-actions"><a class="btn primary" href="#/handover">' + t('startHeroPrimary') + '</a>' +
    '<a class="text-link" href="#service-journey">' + t('startHeroSecondary') + ' <span aria-hidden="true">↓</span></a></div>' +
    '<p class="hero-boundary">' + t('impactNote') + '</p></div>' +
    '<div class="start-proof"><div class="start-proof-label">' + t('gapKicker') + '</div><div class="start-proof-rule"></div>' +
    '<strong>' + t('gapPunch') + '</strong><span>' + t('gapFollow') + '</span></div></section>';

  var proof = '<section class="meera-proof" id="service-journey"><div class="meera-proof-intro">' +
    '<div class="service-kicker">' + t('proofBandCase') + '</div><h2>' + t('proofBandTitle') + '</h2><p>' + t('proofBandSub') + '</p>' +
    '<a class="text-link" href="#/handover">' + t('proofBandNext') + '</a></div>' +
    '<div class="meera-proof-card"><div class="meera-proof-top"><span>' + t('impactStatus') + '</span><strong>' + t('impactPersona') + '</strong><span>FC-001</span></div>' +
    '<div class="meera-proof-stats"><div><strong>03</strong><span>' + t('impactFact1') + '</span></div>' +
    '<div><strong>01</strong><span>' + t('impactFact2') + '</span></div>' +
    '<div><strong>06</strong><span>' + t('impactFact3') + '</span></div></div>' +
    '<div class="meera-proof-next"><span class="impact-dot"></span>' + t('impactNext') + '</div></div></section>';

  var rail3 = '<section class="impact-rail">' +
    '<a href="#/door1/add"><span>01</span><strong>' + t('rail1') + '</strong><small>' + t('rail1d') + '</small></a>' +
    '<a href="#/handover"><span>02</span><strong>' + t('rail2') + '</strong><small>' + t('rail2d') + '</small></a>' +
    '<a href="#/door3"><span>03</span><strong>' + t('rail3') + '</strong><small>' + t('rail3d') + '</small></a></section>';

  var alert = '<div class="service-alert"><strong>' + t('important') + '</strong><span>' + t('serviceNotice') + '</span></div>';

  var official = '<section class="official-section"><div class="service-section-title"><div><h2>' + t('officialTitle') + '</h2><p>' + t('officialSub') + '</p></div></div>' +
    '<div class="official-grid">' + destinationCards() + '</div><div class="honesty">' + t('officialBoundary') + '</div></section>';

  var scale = '<section class="scale-section"><div class="service-section-title"><div><h2>' + t('scaleTitle') + '</h2></div></div>' +
    '<div class="scale-grid">' +
    '<div class="scale-card"><span class="scale-dot works"></span><p>' + t('scaleWorks') + '</p></div>' +
    '<div class="scale-card"><span class="scale-dot mocked"></span><p>' + t('scaleMocked') + '</p></div>' +
    '<div class="scale-card"><span class="scale-dot next"></span><p>' + t('scaleNext') + '</p></div>' +
    '</div></section>';

  var context = '<section class="context-section"><div class="service-section-title"><div><h2>' + t('contextTitle') + '</h2><p>' + t('contextSub') + '</p></div></div>' +
    '<div class="proof-grid">' +
    '<div class="proof-card"><strong>' + t('proof1Value') + '</strong><span>' + t('proof1Label') + '</span><small>' + verify(FACTS.udgamFigure) + ' ' + esc(FACTS.udgamFigure[state.lang]) + '</small></div>' +
    '<div class="proof-card"><strong>' + t('proof2Value') + '</strong><span>' + t('proof2Label') + '</span><small>' + verify(FACTS.iepfFigure) + ' ' + esc(FACTS.iepfFigure[state.lang]) + '</small></div>' +
    '<div class="proof-card"><strong>' + t('proof3Value') + '</strong><span>' + t('proof3Label') + '</span><small>' + verify(FACTS.lokAdalatFigure) + ' ' + esc(FACTS.lokAdalatFigure[state.lang]) + '</small></div>' +
    '</div></section>';

  return platformWrap(hero + proof + rail3 + alert + official + scale + context, 'home');
}

function renderApp() {
  var h = location.hash.replace('#', '') || '/';
  var html = platformHome();
  if (h === '/door1/add') html = platformScreen(door1Add(), 'prepare');
  else if (h === '/door1/check') html = platformScreen(door1Check(), 'prepare');
  else if (h === '/door1/will') html = platformScreen(door1Will(), 'prepare');
  else if (h === '/door1/sheet') html = platformScreen(door1Sheet(), 'prepare');
  else if (h === '/handover') html = platformScreen(handover(), 'handover');
  else if (h === '/door2/search') html = platformScreen(door2(), 'handover');
  else if (h.indexOf('/door2/match/') === 0) html = platformScreen(match(h.split('/').pop()), 'handover');
  else if (h === '/door3') html = platformScreen(door3(), 'resolve');
  else if (h.indexOf('/door3/') === 0) html = platformScreen(branch(h.split('/').pop()), 'resolve');
  layout(html);
}

document.addEventListener('click', function(e){ var b = e.target.closest('[data-lang]'); if (b) setLang(b.dataset.lang); });
window.addEventListener('hashchange', renderApp);
renderApp();
