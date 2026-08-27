/* Static, mock-only data. Domain copy is limited to ON-RECORD-BUILD-PROMPT.md §5. */
const FACTS = {
  nominee: { confidence: 'verified', en: 'A nominee is not automatically the owner. Supreme Court, Shakti Yezdani v. Jayanand Salgaonkar (2023): for most asset types a nominee is a caretaker who must pass the asset to the legal heirs; ownership is decided by a will or the applicable succession law, not by the nomination form.', hi: 'Nominee अपने-आप मालिक नहीं होता। Supreme Court के Shakti Yezdani v. Jayanand Salgaonkar (2023) मामले के अनुसार, अधिकांश asset types में nominee एक caretaker होता है जिसे asset legal heirs तक पहुंचाना होता है; ownership वसीयत या लागू succession law से तय होती है, nomination form से नहीं।' },
  insurance: { confidence: 'verified', en: 'Life insurance is the one exception: Section 39(7), Insurance Act 1938 (as amended 2015), gives a policyholder’s parent, spouse, or child a real beneficial entitlement. Non-family nominees do not get this.', hi: 'Life insurance इसका एक अपवाद है: Insurance Act 1938 की Section 39(7) (2015 में संशोधित) के अनुसार policyholder के parent, spouse या child nominee को वास्तविक beneficial entitlement मिलता है। Non-family nominee को यह नहीं मिलता।' },
  banks: { confidence: 'verify', en: 'From November 2025, bank account holders can nominate up to 4 people, either simultaneously with specified percentage shares, or successively in order of priority.', hi: 'November 2025 से bank account holders अधिकतम 4 लोगों को nominee बना सकते हैं: एक साथ तय percentage shares के साथ, या priority order में एक के बाद एक।' },
  personalLaw: { confidence: 'verified', en: 'Which succession law applies depends on personal law. The app names the framework generally based on what you select and never calculates an actual share.', hi: 'कौन सा succession law लागू होता है, यह personal law पर निर्भर करता है। App आपके चयन के आधार पर framework का सामान्य नाम बताता है और actual share की गणना नहीं करता।' },
  elder: { confidence: 'verify', en: 'Under the Maintenance and Welfare of Parents and Senior Citizens Act, 2007, certain property transfers can be set aside if the transfer was conditional on being maintained and that condition was not honoured. Route to a Maintenance Tribunal; this app does not file or decide a case.', hi: 'Maintenance and Welfare of Parents and Senior Citizens Act, 2007 के तहत कुछ property transfers रद्द किए जा सकते हैं, यदि transfer देखभाल की शर्त पर हुआ था और वह शर्त पूरी नहीं हुई। Maintenance Tribunal तक route लें; यह app कोई case file या तय नहीं करता।' }
};
const CHECKLISTS = {
  claim: { confidence: 'verified', en: ['Death certificate', 'Legal heir certificate or surviving member certificate from the District Magistrate or revenue authority', 'Succession certificate from the district court for higher-value or contested cases', 'Proof of identity and address of the claimant', 'Original passbook, policy, or folio document if available'], hi: ['मृत्यु प्रमाण पत्र', 'District Magistrate या revenue authority का legal heir certificate या surviving member certificate', 'अधिक value या contested case के लिए district court का succession certificate', 'Claimant की identity और address proof', 'यदि उपलब्ध हो तो original passbook, policy या folio document'] },
  will: { confidence: 'verified', en: ['Written document naming an executor and beneficiaries', 'Attested by at least 2 witnesses', 'Registration at the Sub-Registrar office is optional under Indian law but strongly reduces later disputes over authenticity'], hi: ['Executor और beneficiaries के नाम वाला written document', 'कम-से-कम 2 witnesses द्वारा attested', 'Indian law में Sub-Registrar office में registration optional है, लेकिन authenticity पर बाद के disputes को कम करता है'] },
  nominee: { confidence: 'verified', en: ['Nomination form specific to the institution', 'Identity proof', 'Existing account or policy number', 'No court process is needed for this update'], hi: ['Institution का specific nomination form', 'Identity proof', 'Existing account या policy number', 'इस update के लिए court process की जरूरत नहीं'] }
};
const REGISTRIES = ['UDGAM', 'IEPF', 'Bima Bharosa', 'EPFO', 'MF Central'];
const MATCHES = [
  { id: 'm1', registry: 'UDGAM', type: 'bank', amount: 184300, confidence: 'strong' },
  { id: 'm2', registry: 'IEPF', type: 'shares', amount: 952000, confidence: 'possible' },
  { id: 'm3', registry: 'EPFO', type: 'provident_fund', amount: 276500, confidence: 'possible' }
];
const ASSET_TYPES = [
  ['bank', 'Bank account', 'बैंक खाता'], ['insurance', 'Insurance policy', 'बीमा पॉलिसी'],
  ['shares', 'Shares / demat', 'शेयर / डीमैट'], ['mutual_fund', 'Mutual fund', 'म्यूचुअल फंड'],
  ['provident_fund', 'Provident fund', 'भविष्य निधि'], ['property', 'Property', 'संपत्ति']
];
const ESCALATION = [
  { confidence: 'verified', en: 'Lok Adalat (National Legal Services Authority): free, no court fee, binding settlement. The 2nd National Lok Adalat of 2026 alone settled over 2.07 crore cases.', hi: 'लोक अदालत (राष्ट्रीय विधिक सेवा प्राधिकरण): निःशुल्क, कोई court fee नहीं, बाध्यकारी समझौता। 2026 की दूसरी National Lok Adalat में ही 2.07 करोड़ से अधिक मामले निपटाए गए।' },
  { confidence: 'verified', en: 'Senior Citizen Maintenance Tribunal: handles maintenance claims and property-transfer reversal claims from senior citizens.', hi: 'Senior Citizen Maintenance Tribunal: senior citizens के maintenance claims और property-transfer reversal claims संभालता है।' },
  { confidence: 'verified', en: 'A civil or district court: for contested succession certificates, will validity challenges, and partition suits.', hi: 'Civil या district court: contested succession certificates, will validity challenges और partition suits के लिए।' }
];
