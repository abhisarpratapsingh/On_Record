export const FACTS = {
  readiness: { value: '84.8%', title: 'reported having no will', detail: '1 Finance survey of 1,218 respondents across 20+ Indian cities, reported June 2026.', source: 'Business Standard', href: 'https://www.business-standard.com/amp/finance/personal-finance/india-biggest-wealth-planning-problem-nearly-85-dont-have-a-will-126060300578_1.html' },
  disputes: { value: '30.5%', title: 'reported an inheritance dispute', detail: 'The same 2026 1 Finance survey; this is a survey finding, not an administrative count.', source: 'Business Standard', href: 'https://www.business-standard.com/amp/finance/personal-finance/india-biggest-wealth-planning-problem-nearly-85-dont-have-a-will-126060300578_1.html' },
  land: { value: '66.2%', title: 'of surveyed civil matters were land/property-related', detail: 'Daksh Access to Justice Survey, as cited in CPR research. This is a litigant survey, not every civil case.', source: 'CPR', href: 'https://cprindia.org/understanding-land-conflict-in-india-and-suggestions/' },
  delay: { value: '≈20 years', title: 'reported average pendency for a land-acquisition dispute', detail: 'From the origin of the dispute to resolution by the Supreme Court in the cited land-conflict research.', source: 'NITI Aayog / CPR', href: 'https://www.niti.gov.in/node/296' },
  bank: { value: '15 days', title: 'RBI settlement guidance for eligible deceased-depositor claims', detail: 'After proof of death and satisfactory identification are provided to the bank.', source: 'Reserve Bank of India', href: 'https://www.rbi.org.in/Scripts/NotificationUser.aspx?Id=9862' },
  court: { value: '≈5.1 crore', title: 'pending district and taluka court cases', detail: 'NJDG snapshot; figures change continuously. The same snapshot shows ≈1.13 crore civil cases.', source: 'NJDG', href: 'https://njdg.ecourts.gov.in/njdg_v3/?p=home%2Findex' },
};

export const CATEGORIES = [
  { id: 'money', label: 'Money', icon: '₹', hint: 'Bank, insurance, shares, mutual funds, PF' },
  { id: 'property', label: 'Property', icon: '⌂', hint: 'Home, land, title and mutation papers' },
  { id: 'documents', label: 'Documents', icon: '▤', hint: 'Certificates, policies and file locations' },
  { id: 'wishes', label: 'Wishes', icon: '✦', hint: 'People to call and what to find first' },
];

export const MEMBERS = [
  { id: 'ananya', name: 'Ananya Sharma', relation: 'Spouse', initials: 'AS', token: 'demo-ananya-7f2' },
  { id: 'arjun', name: 'Arjun Sharma', relation: 'Son', initials: 'AS', token: 'demo-arjun-4k9' },
  { id: 'rhea', name: 'Rhea Kapoor', relation: 'Sister', initials: 'RK', token: 'demo-rhea-2m6' },
];

export const initialRecords = [
  { id: 'bank-01', category: 'money', kind: 'Bank account', title: 'Family savings account', institution: 'State Bank of India', reference: 'OR-DEMO-BANK-001', location: 'Blue folder · home study', note: 'Passbook listed in family papers.', nomineeStatus: 'missing', nomineeName: '', nomineeRelation: '', nomineeReviewed: '', visibility: 'private', handover: false },
  { id: 'property-01', category: 'property', kind: 'Property record', title: 'Family home', institution: 'Residential property file', reference: 'OR-DEMO-LAND-001', location: 'Parent’s document file', note: 'Mutation status needs checking.', nomineeStatus: 'na', nomineeName: '', nomineeRelation: '', nomineeReviewed: '', visibility: 'private', handover: true },
  { id: 'insurance-01', category: 'money', kind: 'Insurance policy', title: 'Life cover policy', institution: 'LIC', reference: 'OR-DEMO-LIFE-001', location: 'Blue folder · policy section', note: 'Policy paper available.', nomineeStatus: 'current', nomineeName: 'Arjun Sharma', nomineeRelation: 'Son', nomineeReviewed: '2025', visibility: 'private', handover: true },
  { id: 'shares-01', category: 'money', kind: 'Shares / demat', title: 'Long-term holdings', institution: 'HDFC Securities', reference: 'OR-DEMO-DEM-014', location: 'Digital investment folder', note: 'Nomination should be reviewed after life events.', nomineeStatus: 'review', nomineeName: 'Ananya Sharma', nomineeRelation: 'Spouse', nomineeReviewed: '2021', visibility: 'private', handover: false },
  { id: 'pf-01', category: 'money', kind: 'Provident fund', title: 'Provident fund account', institution: 'EPFO', reference: 'OR-DEMO-PF-208', location: 'Employment records · 2024', note: 'Nominee is a minor; check the institution process.', nomineeStatus: 'minor', nomineeName: 'Kabir Sharma', nomineeRelation: 'Son', nomineeReviewed: '2024', visibility: 'private', handover: true },
  { id: 'documents-01', category: 'documents', kind: 'Document set', title: 'Family certificates', institution: 'Home records', reference: 'OR-DEMO-DOC-032', location: 'Red file · top shelf', note: 'Death and birth certificates are stored together.', nomineeStatus: 'na', nomineeName: '', nomineeRelation: '', nomineeReviewed: '', visibility: 'private', handover: true },
  { id: 'wishes-01', category: 'wishes', kind: 'Continuity note', title: 'What to find first', institution: 'Owner-authored note', reference: 'OR-DEMO-WISH-006', location: 'On Record · private', note: 'Call Ananya first. Start with the blue folder and the property file.', nomineeStatus: 'na', nomineeName: '', nomineeRelation: '', nomineeReviewed: '', visibility: 'private', handover: false },
];

export const initialGrants = { 'ananya:property-01': 'existence', 'ananya:documents-01': 'existence', 'arjun:insurance-01': 'full', 'arjun:pf-01': 'existence' };

export const initialEvents = [
  { id: 'evt-1', at: '06 Sep 2026 · 09:12', actor: 'Meera Sharma', label: 'Created the private family record', detail: '7 records started private by default.', scope: 'owner' },
  { id: 'evt-2', at: '06 Sep 2026 · 09:14', actor: 'Meera Sharma', label: 'Reviewed nominee status', detail: 'Bank account marked “Nominee missing”.', scope: 'owner' },
  { id: 'evt-3', at: '06 Sep 2026 · 09:19', actor: 'Meera Sharma', label: 'Shared existence-only access', detail: 'Family home → Ananya Sharma.', scope: 'ananya' },
  { id: 'evt-4', at: '06 Sep 2026 · 09:23', actor: 'Meera Sharma', label: 'Shared full detail', detail: 'Life cover policy → Arjun Sharma.', scope: 'arjun' },
];

export const cloneSeed = () => ({ records: structuredClone(initialRecords), grants: { ...initialGrants }, events: structuredClone(initialEvents), concerns: {}, pendingDowngrades: {}, handover: { recipient: 'ananya', selected: ['property-01', 'insurance-01', 'documents-01'], released: false } });
export function categoryFor(id) { return CATEGORIES.find((item) => item.id === id) || CATEGORIES[0]; }
export function memberFor(id) { return MEMBERS.find((item) => item.id === id) || MEMBERS[0]; }
export function recordFor(records, id) { return records.find((item) => item.id === id); }
export function recordStatus(record) { return record.institution && record.location ? 'recorded' : 'incomplete'; }
export function nomineeLabel(record) { return ({ missing: 'Nominee missing', current: 'Nominee recorded', review: 'Nominee needs review', minor: 'Minor nominee', na: 'Nominee not applicable' })[record.nomineeStatus] || 'Nominee needs review'; }
export function nomineeTone(record) { return ({ missing: 'alert', current: 'positive', review: 'warn', minor: 'info', na: 'neutral' })[record.nomineeStatus] || 'warn'; }
