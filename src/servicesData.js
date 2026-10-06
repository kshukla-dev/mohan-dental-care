// ──────────────────────────────────────────────────────────────────────────────
// servicesData.js - Pure data file (no React components)
// Separated from Services.jsx to satisfy Vite Fast Refresh requirements
// ──────────────────────────────────────────────────────────────────────────────

export const ALL_SERVICES = [

  // ── GROUP 1: Preventive & Diagnostic ─────────────────────────────────────
  {
    id: 'cleaning',
    group: 'Preventive & Diagnostic',
    title: 'Teeth Cleaning (Scaling & Polishing)',
    hindi: 'दांतों की सफाई - Ultrasonic Scaler',
    tagline: 'The most important dental habit you can build',
    badge: 'Preventive',
    color: 'from-teal-500 to-teal-700',
    duration: '30 – 45 min',
    freq: 'Every 6 months',
    shortDesc:
      'Ultrasonic scaling removes stubborn plaque, tartar and stains that brushing alone cannot reach - protecting your gums and keeping your breath fresh.',
    overview: `Plaque is a soft, sticky film of bacteria that forms on teeth every day. When it is not removed by brushing it hardens into tartar (calculus) within 48 hours - and tartar cannot be removed by a toothbrush. Only a professional cleaning with ultrasonic instruments can break it up safely.

At Mohan Dental Care we use an ultrasonic scaler - a vibrating metal tip with a fine water spray that dislodges deposits above and below the gumline without the scraping discomfort of old-fashioned hand instruments. After scaling, the teeth are polished with a mildly abrasive paste to smooth the enamel surface so that future plaque finds it harder to stick.

Left untreated, tartar irritates the gum tissue, causing redness, bleeding and eventually the chronic infection known as periodontitis - which destroys the bone holding teeth in place. A twice-yearly cleaning is the single most effective step a patient can take to prevent tooth loss in later life.

Cleaning also lets Dr. Rajwade examine the whole mouth in detail, catching cavities, cracked teeth, gum recession and early signs of oral cancer at a stage when treatment is simple and inexpensive.`,
    benefits: [
      'Removes calculus that brushing cannot reach',
      'Stops gum disease before it starts',
      'Freshens breath by eliminating bacteria-laden deposits',
      'Polishing smooths enamel so less plaque accumulates',
      'Allows full examination of the whole mouth',
      'Identifies problems early - saving time and money later',
    ],
    steps: [
      'Ultrasonic scaler removes plaque and calculus above and below the gumline',
      'Water spray flushes out loosened debris continuously',
      'Hand scalers used on stubborn calculus in pockets',
      'Rotary polisher with prophylaxis paste smooths all surfaces',
      'Fluoride rinse or gel applied for extra protection (optional)',
      'Oral hygiene advice - brushing technique, floss, interdental brushes',
    ],
    aftercare: [
      'Avoid very hot or cold food for a few hours if sensitivity occurs',
      'Light bleeding from inflamed gums is normal and stops within 24 hours',
      'Brush twice daily with a fluoride toothpaste',
      'Use interdental brushes or floss daily',
      'Book the next cleaning before you leave',
    ],
    faq: [
      { q: 'Does teeth cleaning hurt?', a: 'Most patients feel only mild vibration and a cool water spray. If your gums are already inflamed from long-standing tartar build-up, there can be some sensitivity - this fades within 24 hours. Patients who clean regularly find each session becomes progressively more comfortable.' },
      { q: 'How often should I have my teeth cleaned professionally?', a: 'Every 6 months is the standard recommendation for healthy adults. Patients with active gum disease, diabetes, a dry mouth or who smoke may benefit from cleaning every 3–4 months.' },
      { q: 'Will cleaning remove the yellow stains from tea and coffee?', a: 'Polishing will remove light surface stains and leave teeth looking cleaner and brighter. Intrinsic staining (inside the enamel from food, tobacco or certain medicines) is not removed by scaling and may need professional whitening.' },
      { q: 'Is scaling harmful to the enamel?', a: 'No. The ultrasonic tip vibrates at a frequency that breaks apart tartar without touching the enamel structure. Multiple scientific studies confirm that regular professional cleaning does not thin or damage tooth enamel.' },
      { q: 'My teeth feel loose after cleaning - is that normal?', a: 'If you had heavy calculus build-up, the tartar was actually splinting the teeth together. Once removed, individual teeth can feel slightly mobile. This sensation fades as the gums heal and re-attach to the now-clean root surfaces, usually within 2–4 weeks.' },
    ],
    related: ['xray', 'lesion', 'rct'],
  },

  {
    id: 'xray',
    group: 'Preventive & Diagnostic',
    title: 'Digital X-Ray (RVG Imaging)',
    hindi: 'तुरंत डिजिटल एक्स-रे - RVG Sensor',
    tagline: 'Precise diagnosis with minimal radiation',
    badge: 'Diagnostic',
    color: 'from-blue-500 to-blue-700',
    duration: '5 – 15 min',
    freq: 'As needed / annually',
    shortDesc: 'RVG digital sensors capture high-resolution tooth images in under 5 seconds, with up to 80% less radiation than traditional dental film - results visible on-screen chairside immediately.',
    overview: `RadioVisioGraphy (RVG) is the modern standard in dental imaging. Instead of a film packet that needs chemical processing in a darkroom, an RVG sensor contains millions of tiny pixels that capture the X-ray signal electronically. The image appears on the computer screen beside the dental chair in 3–5 seconds.

The clinical benefits over old-style film are significant. The digital sensor needs far less radiation to produce a usable image - meaning the dose to you is reduced by up to 80%. The image can be zoomed, brightened, and contrast-adjusted on screen, making tiny cavities between teeth or subtle bone changes far more visible than on a small film packet. Images are saved permanently in your digital record, so future X-rays can be compared side-by-side to track changes over time.

At Mohan Dental Care, Dr. Rajwade reviews the RVG image with you on the monitor and explains exactly what he sees - where a cavity begins, how deep it is, whether the root and bone are healthy, whether a root canal has reached the apex. You become a partner in your own diagnosis rather than waiting for a vague report.

Common X-ray types used here include periapical (full tooth including root and bone), bitewing (crown area, detecting between-tooth cavities) and occlusal views for wider areas.`,
    benefits: [
      'Up to 80% less radiation than conventional film X-ray',
      'Image visible on screen in 3–5 seconds - same appointment diagnosis',
      'Digital image can be zoomed and enhanced for greater accuracy',
      'Detects cavities between teeth invisible to the naked eye',
      'Assesses root tip infections, bone level and cyst formation',
      'Images stored permanently - easy comparison over years',
      'No chemical processing - environmentally cleaner',
    ],
    steps: [
      'Small RVG sensor wrapped in a disposable cover placed in the mouth',
      'Patient bites gently to hold sensor in correct position',
      'X-ray beam activated - image captured in under 5 seconds',
      'Image appears immediately on chairside monitor',
      'Doctor reviews and explains findings with patient in real time',
      'Image saved to secure digital patient record',
      'Treatment planned based on combined clinical and X-ray findings',
    ],
    aftercare: [
      'No aftercare needed - the procedure is entirely non-invasive',
      'Results are discussed in the same appointment',
      'A treatment plan is given based on what the X-ray reveals',
    ],
    faq: [
      { q: 'How safe are dental X-rays?', a: 'Very safe. The RVG dose is roughly equivalent to a few hours of natural background radiation you receive just by being outdoors. A full set of four bitewing X-rays delivers less radiation than a one-hour flight. With a lead thyroid collar, exposure is reduced further.' },
      { q: 'How often do I need dental X-rays?', a: 'New patients: a full periapical and bitewing series establishes a baseline. For existing patients with low cavity risk and healthy gums, bitewings every 18–24 months is typical. Higher-risk patients may need them annually.' },
      { q: 'Can pregnant women have dental X-rays?', a: 'We avoid non-essential X-rays during the first trimester. If an X-ray is genuinely needed in the second or third trimester, a lead apron and thyroid collar provides complete abdominal protection. The benefits of treating an active infection during pregnancy always outweigh the tiny theoretical risk.' },
      { q: 'Why do I need an X-ray if my tooth looks fine?', a: 'Decay between teeth, early bone loss from gum disease, root tip infections, cysts and unerupted wisdom teeth are all invisible during a clinical examination. By the time a cavity is visible to the naked eye it has often already reached the nerve.' },
      { q: 'What is the difference between RVG and an OPG?', a: 'An RVG (intraoral sensor) shows 1–4 teeth in fine detail including the root tip and surrounding bone. An OPG (orthopantomogram) is a panoramic X-ray that shows all teeth, both jaws and the sinus in a single image - used for orthodontic planning, wisdom tooth assessment and general overview.' },
    ],
    related: ['cleaning', 'rct', 'wisdom'],
  },

  {
    id: 'lesion',
    group: 'Preventive & Diagnostic',
    title: 'Oral Lesion & Oral Cancer Screening',
    hindi: 'मुंह के घाव और Pre-Cancerous Lesion का इलाज',
    tagline: 'Two minutes that could save your life',
    badge: 'Screening',
    color: 'from-red-500 to-pink-700',
    duration: '15 – 20 min',
    freq: 'At every routine visit',
    shortDesc: 'Visual and physical examination of all soft tissues for white patches, red sores, lumps or non-healing ulcers - pre-cancerous conditions are highly curable when caught early.',
    overview: `Oral cancer kills more than 77,000 Indians every year - more than cervical or thyroid cancer - yet it is one of the most preventable and treatable cancers when detected early. The five-year survival rate when caught at Stage I is over 80%. When caught at Stage IV it drops below 30%. Regular dental visits with a thorough soft-tissue examination are the most reliable way to find oral cancer early.

At every routine check-up at Mohan Dental Care, Dr. Rajwade performs a systematic soft-tissue examination of the lips, cheeks, gum, hard and soft palate, tongue (top, sides and underside), floor of the mouth and the back of the throat. The lymph nodes of the neck are gently palpated for swelling.

Risk factors that make screening especially important include tobacco in any form (smoked or chewed - gutka, pan masala, khaini), alcohol consumption, areca nut (supari), a diet low in fruits and vegetables and a history of previous oral lesions.

Common lesions treated here include aphthous ulcers (canker sores), traumatic ulcers from sharp teeth or dentures, viral lesions (herpes labialis), and white patches from tobacco use. When a lesion looks suspicious, a referral for biopsy is arranged without delay.`,
    benefits: [
      'Catches pre-cancer at the most treatable stage',
      'Takes only 2–3 minutes added to a routine check-up',
      'No instruments required - entirely non-invasive',
      'Identifies tobacco-related white patches for monitoring',
      'Referral network for biopsy and specialist care',
      'Peace of mind after a clear examination',
    ],
    steps: [
      'Patient history - tobacco, alcohol, betel nut use, symptoms',
      'Visual inspection of lips, cheeks, gum, tongue (all surfaces) and palate',
      'Gentle palpation of the tongue and floor of the mouth for lumps',
      'Neck lymph node palpation for swelling',
      'Any suspicious area photographed and documented',
      'Referral for biopsy arranged if indicated',
      'Follow-up schedule set; tobacco-cessation counselling offered',
    ],
    aftercare: [
      'If a lesion is found, attend all follow-up appointments without fail',
      'Stop tobacco and areca nut use - the number-one preventable cause',
      'Return immediately if a sore does not heal within 14 days',
      'Any new numbness, difficulty swallowing or unexplained bleeding warrants urgent review',
    ],
    faq: [
      { q: 'What does a suspicious oral lesion look like?', a: 'Red or white patches that cannot be wiped off, a sore that has not healed in 14 days, an unexplained lump or thickening, unexplained bleeding, numbness or a persistent sore throat - any of these deserve professional examination.' },
      { q: 'I chew gutkha / pan masala. Am I at high risk?', a: 'Yes - areca nut combined with tobacco is the leading cause of oral submucous fibrosis and oral squamous cell carcinoma in India. Submucous fibrosis causes the cheeks to stiffen progressively and is a pre-cancerous condition. Early examination and cessation of the habit is critical.' },
      { q: 'Is an oral ulcer always cancer?', a: 'No. The vast majority of mouth ulcers are benign aphthous ulcers that heal in 7–14 days. Any ulcer present for longer than 14 days without an obvious innocent cause must be examined professionally and, if doubt exists, referred for biopsy.' },
      { q: 'What happens if a suspicious lesion is found?', a: 'Dr. Rajwade will photograph and document the lesion, discuss it with you openly and refer you to an oral surgeon or oncologist for an incisional biopsy - the only definitive way to determine whether cells are cancerous, pre-cancerous or benign.' },
    ],
    related: ['cleaning', 'xray'],
  },

  // ── GROUP 2: Restorative ──────────────────────────────────────────────────
  {
    id: 'filling',
    group: 'Restorative Treatments',
    title: 'Tooth Filling (Composite Restoration)',
    hindi: 'Light Cure Composite Filling - कैविटी भरना',
    tagline: 'Invisible repairs that strengthen your tooth',
    badge: 'Restorative',
    color: 'from-yellow-500 to-amber-600',
    duration: '30 – 60 min',
    freq: 'One visit - lasts 7–10 years',
    shortDesc: 'Tooth-coloured composite resin removes decay and restores the tooth in a single visit - bonding directly to the enamel for a strong, natural-looking result.',
    overview: `A dental cavity (caries) is a bacterial infection. Streptococcus mutans and other acid-producing bacteria dissolve the mineral structure of enamel and dentine, creating a hole that will grow steadily until the whole tooth is destroyed or the nerve becomes infected. A filling stops the infection, restores the lost tooth structure and returns the tooth to full function.

Modern composite resin (tooth-coloured filling material) has replaced old-fashioned silver amalgam as the standard of care. Composite bonds chemically to the tooth surface through a micro-mechanical adhesive system, which means significantly less healthy tooth structure needs to be removed compared to amalgam, which relied on undercuts for mechanical retention. The result is a smaller, stronger restoration that is invisible in the mouth.

Light-cured composite is placed in thin incremental layers - each layer is hardened with a powerful LED light in about 20 seconds - building up the filling from the inside out to control shrinkage and maximise strength. The final surface is contoured to the exact shape of the original tooth and polished to a natural sheen.

At Mohan Dental Care, we use BPA-free composite materials and shade-match the resin to your tooth colour under natural light before starting. Most fillings are completed in a single appointment of 30–60 minutes.`,
    benefits: [
      'Tooth-coloured - completely invisible in the mouth',
      'Bonds chemically - requires less tooth removal than amalgam',
      'Completed in one visit',
      'BPA-free materials available',
      'Stops cavity from growing and infecting the nerve',
      'Restores full biting strength',
      'Smooth, polished surface resists future staining',
    ],
    steps: [
      'Local anaesthetic injected - area is completely numb within 3 minutes',
      'All decayed tissue removed precisely with a high-speed drill and hand instruments',
      'Cavity etched with phosphoric acid gel, rinsed and dried',
      'Bonding agent applied and cured with LED light',
      'Composite layered incrementally, each layer cured 20 seconds',
      'Final shape carved with finishing burs',
      'Bite checked and adjusted; surface polished to a natural shine',
    ],
    aftercare: [
      'Numbness lasts 1–3 hours - avoid chewing until feeling returns',
      'Some sensitivity to hot and cold is normal for 1–2 weeks',
      'Avoid very sticky or hard foods for 24 hours while composite reaches full hardness',
      'Brush normally from the same day',
      'If the bite feels high or uneven after a day, call to have it adjusted',
    ],
    faq: [
      { q: 'Is tooth filling painful?', a: 'With effective local anaesthetic, a filling is painless. You will feel pressure and vibration but no sharp pain. If you feel any pain during the procedure, raise your hand and additional anaesthetic will be given immediately. After the numbness wears off, mild achiness for 1–2 days is normal, controlled easily with paracetamol.' },
      { q: 'How long do composite fillings last?', a: 'Typically 7–10 years with good oral hygiene and regular check-ups. Back-tooth fillings on large surfaces subject to heavy bite forces may wear faster. Avoiding ice-crunching, nail-biting and grinding extends filling life significantly.' },
      { q: 'Can I eat and drink immediately after a filling?', a: 'Wait until the anaesthetic wears off to avoid accidentally biting your cheek or tongue. Composite is fully hardened by the curing light during placement, so you do not need to avoid eating once the numbness is gone - unlike old-style amalgam which took 24 hours to set.' },
      { q: 'Should I choose white or silver filling?', a: 'Modern tooth-coloured composite is superior to silver amalgam in most situations - it bonds to the tooth (so less drilling), looks natural, contains no mercury, and is BPA-free.' },
      { q: 'What if the cavity is very deep - will I still need a filling?', a: 'If the decay reaches very close to the nerve, a calcium hydroxide liner is placed over the deepest part before the composite filling. If the nerve is already infected, a root canal is needed before the filling. Dr. Rajwade will assess this on the X-ray before starting.' },
      { q: 'My old silver filling fell out - can it be replaced with white?', a: 'Yes. Old amalgam fillings can be replaced with composite when they fail, fracture, or when the patient prefers tooth-coloured material. We follow safe amalgam removal protocols to minimise mercury vapour during removal.' },
    ],
    related: ['rct', 'crown', 'xray'],
  },

  {
    id: 'rct',
    group: 'Restorative Treatments',
    title: 'Root Canal Treatment (RCT)',
    hindi: 'रूट कैनाल - सड़े दांतों को बचाने का इलाज',
    tagline: 'Save the tooth. End the pain. Keep your smile.',
    badge: 'Restorative',
    color: 'from-purple-500 to-accent-600',
    duration: '60 – 90 min (1–2 visits)',
    freq: 'One-time procedure per tooth',
    shortDesc: 'Removes infected pulp tissue, sterilises the root canals and seals them permanently - eliminating pain, stopping infection and saving the natural tooth instead of extracting it.',
    overview: `A tooth has three layers: enamel on the outside, dentine in the middle, and at the very centre a soft living tissue called the pulp - nerves, blood vessels and connective tissue. When decay is left untreated long enough to reach the pulp, or when a tooth is cracked, bacteria enter and infect this tissue. The immune system cannot reach the pulp effectively, so the infection grows unchecked, producing the classic symptoms: spontaneous severe pain (often worse at night), intense sensitivity to heat, pain on biting, a pimple of pus on the gum (dental abscess) or swelling of the face.

Root canal treatment (also called endodontic therapy) solves this by removing the infected pulp, cleaning and shaping every root canal with very fine flexible instruments, disinfecting with sodium hypochlorite irrigation, then sealing the empty canals with a rubber-like material called gutta-percha. The tooth becomes non-vital (no longer has a living nerve) but remains structurally intact and can last decades.

The fear most patients associate with root canal treatment is based on outdated experience. Modern RCT performed under adequate local anaesthesia is no more uncomfortable than getting a filling. Many patients are genuinely surprised at how straightforward it is. The pain people attribute to root canal is really the pain of the infection before treatment - the procedure relieves that pain.

After root canal treatment, the tooth becomes brittle because it is no longer nourished by the pulp. A crown is almost always recommended afterwards to protect it from fracture, especially on molars. Without a crown, a root-canal-treated tooth is at high risk of splitting - which usually means extraction.`,
    benefits: [
      'Saves the natural tooth - no gap, no implant needed',
      'Relieves severe throbbing pain immediately',
      'Stops infection from spreading to jaw, neck or blood',
      'Restores full chewing function',
      'With a crown, can last a lifetime',
      'Far less costly than extraction + implant in the long run',
    ],
    steps: [
      'Detailed periapical X-ray to map root length, number of canals and infection extent',
      'Local anaesthetic - the tooth and surrounding area are fully numb',
      'Rubber dam placed to isolate the tooth and keep the field sterile',
      'Access opening created through the crown of the tooth',
      'Infected pulp tissue removed with fine stainless-steel or NiTi files',
      'Canals shaped progressively to the measured working length',
      'Irrigation with sodium hypochlorite disinfects the entire canal system',
      'Canals dried and filled with gutta-percha and sealer to the root apex',
      'Temporary or permanent filling placed; crown recommended at next visit',
    ],
    aftercare: [
      'Mild soreness for 2–5 days - managed with paracetamol or ibuprofen',
      'Avoid chewing on the treated tooth until the crown is placed',
      'Finish the full antibiotic course if prescribed',
      'Return promptly for the crown - do not delay more than 4–6 weeks',
      'If swelling, fever or severe pain develops, contact the clinic immediately',
    ],
    faq: [
      { q: 'Is root canal treatment painful?', a: 'Under modern local anaesthesia, RCT is not painful. The procedure is performed in a completely numb tooth. You will feel pressure and movement of instruments but no sharp pain. If a tooth is severely infected it can occasionally be harder to achieve complete anaesthesia immediately - in this case an antibacterial dressing is placed for a week to reduce infection before the main procedure.' },
      { q: 'How many appointments does root canal treatment take?', a: 'Single-rooted teeth (incisors, canines) with straightforward canals often complete in one visit of 60–90 minutes. Multi-rooted molars with complex curved canals, or teeth with severe active infection, typically need two visits - the first to clean and medicate the canals, the second (1–2 weeks later) to complete the fill.' },
      { q: 'Why do I need a crown after root canal treatment?', a: 'RCT removes the living pulp, so the tooth no longer receives nutrients through the root. It becomes more brittle and is prone to vertical fracture - especially molars which bear enormous biting forces. A crown encases the tooth completely, protecting it from cracking.' },
      { q: 'What if I choose extraction instead of root canal?', a: 'Extraction removes the infection faster and is cheaper upfront. However, a missing tooth causes the surrounding teeth to drift and tilt into the gap, the opposing tooth to over-erupt, bone loss in the extraction site, and bite imbalance that can strain the jaw joint. Long-term solutions - implant, bridge or partial denture - cost considerably more than RCT + crown.' },
      { q: 'Can a root-canal-treated tooth get infected again?', a: 'Occasionally yes - if the seal breaks down over time, a new crack allows bacteria back in, or a canal was missed during treatment. Signs of re-infection include new pain, swelling or a pimple on the gum near the tooth.' },
      { q: 'My dentist said I need RCT but my tooth does not hurt - is that possible?', a: 'Yes. Once the pulp is completely dead, the nerve no longer signals pain. The infection spreads silently to the bone around the root tip, visible on X-ray as a dark shadow called a periapical lesion. Treating an asymptomatic dead tooth is far safer than waiting for a crisis.' },
    ],
    related: ['filling', 'crown', 'extraction'],
  },

  {
    id: 'crown',
    group: 'Restorative Treatments',
    title: 'Crown, Bridge & Denture',
    hindi: 'कैप, ब्रिज और नकली दांत - Zirconia, EMAX, DMLS',
    tagline: 'Replace what is lost. Restore what remains.',
    badge: 'Restorative',
    color: 'from-indigo-500 to-purple-700',
    duration: '2 visits over 1–2 weeks',
    freq: 'Lasts 10–15 years or longer',
    shortDesc: 'Modern Zirconia, EMAX and DMLS crowns rebuild damaged teeth and replace missing ones with a strength and appearance indistinguishable from natural enamel.',
    overview: `When a tooth is too damaged to be restored with a filling alone - because the cavity is very large, the tooth is cracked, or it has had root canal treatment - a crown (commonly called a cap) is the solution. A crown encases the entire visible portion of the tooth above the gumline, restoring its original shape, size and biting strength.

A bridge replaces one or more missing teeth by anchoring artificial teeth (pontics) to the natural teeth on either side of the gap (abutments). It is a fixed, non-removable option for tooth replacement that does not require surgery. A partial or complete denture replaces multiple missing teeth with a removable appliance.

Three premium materials are offered at Mohan Dental Care:

Zirconia: White oxide ceramic - the strongest tooth-coloured crown material available. Ideal for molars and premolars that bear heavy bite forces. Modern full-contour zirconia is also translucent enough for front teeth. Zirconia crowns typically last 15+ years.

EMAX (Lithium Disilicate): A glass-ceramic with exceptional translucency and a warm, natural depth that mimics real enamel. The best choice for visible front teeth where aesthetics are the priority. Preferred for veneers as well.

DMLS (Direct Metal Laser Sintering): A metal framework produced by laser-fusing metal powder layer by layer from a CAD design. Provides the highest dimensional accuracy and strength for bridges spanning multiple teeth.`,
    benefits: [
      'Rebuilds a severely damaged or cracked tooth to full function',
      'Protects a root-canal-treated tooth from fracture',
      'Three premium material options matched to each tooth and patient',
      'Zirconia and EMAX are metal-free - no dark gum lines',
      'Fixed bridges eliminate gaps without surgery',
      'Natural colour, shape and translucency matched to adjacent teeth',
      'Lasts 10–15 years or more with proper care',
    ],
    steps: [
      'Consultation: material chosen based on tooth position, bite forces and aesthetics',
      'Tooth shaped - outer layer reduced evenly to create space for the crown',
      'Impression taken (or digital scan) of prepared tooth and bite registration',
      'Shade selection under natural and artificial light',
      'Temporary crown cemented while laboratory fabricates the permanent one',
      'Crown trial-fitted at second visit - colour, shape and bite checked',
      'Permanent cementation with dental luting cement',
      'Final adjustments and polish',
    ],
    aftercare: [
      'Temporary crown: avoid sticky foods (toffee, gum), chew on the opposite side',
      'Permanent crown: no restrictions - eat normally once cemented',
      'Brush and floss normally - clean under bridges with a floss threader or interdental brush',
      'Sensitivity to cold may last 1–2 weeks after preparation - normal',
      'Do not use teeth as tools (opening bottles, biting nails)',
      'Night-guard recommended if you grind - grinding destroys crowns just as it destroys natural teeth',
    ],
    faq: [
      { q: 'Zirconia vs EMAX - which should I choose?', a: 'For back teeth (molars, premolars) where strength matters most and visibility is low: Zirconia. For front teeth where aesthetics and translucency matter: EMAX. Many patients choose Zirconia throughout for its strength and durability. Dr. Rajwade will guide the decision based on your specific tooth, opposing teeth and any grinding habit.' },
      { q: 'How long does a crown last?', a: 'Zirconia and EMAX crowns regularly last 15 years or longer. The weakest point is typically the cement bond at the gum margin - regular check-ups allow the margin to be inspected and re-cemented if microleakage is detected early.' },
      { q: 'Will my crown look like a natural tooth?', a: 'Modern ceramic crowns are fabricated by dental technicians who match colour, translucency, surface texture and shape to your adjacent natural teeth. Most patients find the crown indistinguishable from the surrounding teeth, even in photographs.' },
      { q: 'Is a bridge or an implant better for a missing tooth?', a: 'An implant is the gold standard - it replaces the root, prevents bone loss, and does not involve the adjacent teeth. However, implants require surgery, adequate bone, and a longer treatment timeline. A bridge is a reliable, faster and less costly alternative.' },
      { q: 'Can I have a crown without root canal treatment?', a: 'Yes - if the tooth is cracked or heavily broken but the nerve is still alive and healthy, a crown can be placed without RCT. The tooth will continue to be sensitive as normal (cold, pressure) which is a good sign the nerve is intact.' },
    ],
    related: ['rct', 'smile', 'extraction'],
  },

  // ── GROUP 3: Surgical Care ────────────────────────────────────────────────
  {
    id: 'extraction',
    group: 'Surgical Care',
    title: 'Tooth Extraction',
    hindi: 'दांत निकालना - Simple & Surgical Extraction',
    tagline: 'When removal is the right choice',
    badge: 'Surgical',
    color: 'from-orange-500 to-red-600',
    duration: '20 – 45 min',
    freq: 'One-time procedure',
    shortDesc: 'When a tooth is beyond saving - from severe decay, fracture, advanced gum disease or crowding - gentle surgical removal under local anaesthesia ends the problem with minimal discomfort.',
    overview: `Tooth extraction is always the last resort. At Mohan Dental Care, every effort is made to save a tooth through filling, root canal treatment or a crown before extraction is considered. A tooth is extracted only when it is too structurally destroyed to restore, the bone supporting it is severely compromised by advanced periodontitis, it is causing repeated infection that endangers adjacent teeth or overall health, or it needs to be removed for orthodontic alignment.

Two types of extraction are performed:

Simple extraction: Used when the tooth is fully erupted, visible above the gum and the root structure is uncomplicated. Instruments called elevators gently loosen the tooth in its socket by expanding the bone around it. Forceps then remove the tooth. Performed under local anaesthesia - you feel pressure and movement but no pain.

Surgical extraction: Used when the tooth is broken at the gumline, has curved or divergent roots, or is embedded in bone (as is common with impacted wisdom teeth or retained deciduous teeth). A small incision in the gum exposes the root; the tooth may be sectioned into pieces with a surgical drill for easier removal. Sutures close the wound.

Clear aftercare instructions are essential to prevent dry socket (alveolar osteitis) - the most common post-extraction complication, where the blood clot is dislodged before healing is complete, exposing bare bone and causing intense delayed pain.`,
    benefits: [
      'Eliminates source of infection and pain completely',
      'Prevents spread of infection to adjacent teeth or jaw bone',
      'Faster resolution than an untreatable tooth left in place',
      'Creates space for orthodontic alignment where needed',
      'Socket heals fully within 3–6 months',
      'Replacement options (bridge, implant) available afterwards',
    ],
    steps: [
      'Dental X-ray to map root anatomy, curvature and proximity to nerves',
      'Medical history reviewed - blood thinners, clotting disorders, diabetes noted',
      'Local anaesthetic injected - 3–5 minutes to take full effect',
      'Elevation - instruments gently loosen tooth from ligament and bone',
      'Extraction with forceps using controlled rocking motion',
      'Socket irrigated and inspected for any bone fragments',
      'Gauze placed - patient bites down for 20–30 minutes',
      'Aftercare instructions given verbally and in writing',
    ],
    aftercare: [
      'Bite on gauze for 30 minutes without removing it - allows clot to form',
      'Do NOT rinse, spit forcefully or use a straw for 24 hours - protects the clot',
      'Apply an ice pack to the cheek - 20 minutes on, 20 minutes off for the first 4 hours',
      'Eat soft, cool foods: yogurt, dal, mashed potato, banana - no hot or spicy food for 48 hours',
      'Do not smoke for at least 72 hours - smoking is the #1 cause of dry socket',
      'Take prescribed painkillers and antibiotics as directed - do not stop early',
      'Gentle warm salt-water rinses from 24 hours after extraction help healing',
      'Contact us immediately if: severe worsening pain after day 3, bad taste/smell, fever, or increasing swelling',
    ],
    faq: [
      { q: 'Will extraction hurt?', a: 'Under adequate local anaesthesia, extraction should be entirely pain-free. You will feel strong pressure and movement as the tooth is rocked and lifted - this is normal and unavoidable - but no sharp pain. If you feel pain at any point, raise your hand for more anaesthetic.' },
      { q: 'What is dry socket and how do I avoid it?', a: 'Dry socket occurs when the blood clot that forms in the extraction socket is washed out or dislodged before the socket has healed. It exposes bare bone, causing severe aching pain that typically begins 3–5 days after extraction. Avoidance: do not spit, rinse forcefully or use a straw for 24 hours; do not smoke; avoid sucking motions.' },
      { q: 'How long does healing take?', a: 'The gum tissue closes over the socket in 1–2 weeks. The bone fills in over 3–6 months. Most patients feel comfortable for daily activities within 2–3 days.' },
      { q: 'Do I need to replace the extracted tooth?', a: 'A missing tooth causes the teeth on either side to tilt into the gap, the opposing tooth to over-erupt, progressive bone loss in the jaw, and shift of the bite. For aesthetic reasons or chewing efficiency, replacement with a bridge, partial denture or dental implant is recommended.' },
      { q: 'I am on blood thinners - can I still have a tooth extracted?', a: 'Usually yes, but with precautions. Current guidelines recommend continuing most blood thinners (aspirin, warfarin, clopidogrel) rather than stopping them - the clotting risk from stopping outweighs the risk of slightly prolonged socket bleeding. Local haemostatic measures are used in the socket.' },
    ],
    related: ['wisdom', 'crown', 'rct'],
  },

  {
    id: 'wisdom',
    group: 'Surgical Care',
    title: 'Wisdom Tooth Surgery (Disimpaction)',
    hindi: 'अकल दांत की सर्जरी - Impacted Wisdom Tooth',
    tagline: 'Permanent relief from wisdom tooth pain',
    badge: 'Surgical',
    color: 'from-red-600 to-rose-700',
    duration: '45 – 90 min per tooth',
    freq: 'One-time per tooth',
    shortDesc: 'Surgical removal of impacted, partially erupted or repeatedly infected wisdom teeth - the most common oral surgery procedure, with most patients back to normal in 2–3 days.',
    overview: `Wisdom teeth (third molars) are the last teeth to erupt, typically between ages 17 and 25. Modern human jaws are often too small to accommodate them, so they become impacted - unable to erupt fully into the correct position. An impacted wisdom tooth can be partially erupted (causing repeated infection called pericoronitis), horizontally impacted (pressing against the roots of the second molar - potentially destroying it), or completely buried in bone (potentially causing a dentigerous cyst if left).

Not all wisdom teeth need removal. Fully erupted, symptom-free wisdom teeth that are accessible to cleaning can stay. Removal is indicated when the tooth is impacted, causing repeated infection, decayed and beyond restoration, damaging the adjacent molar, or causing a cyst.

The surgical procedure - disimpaction - is performed under local anaesthesia. A small incision exposes the tooth; bone may be removed to access it; the tooth is often sectioned into pieces with a surgical handpiece before being lifted out; the socket is irrigated and sutured. Post-operative swelling peaks at 48–72 hours and subsides over 5–7 days.

Not removing an impacted wisdom tooth carries real risks: repeated painful pericoronitis, irreversible damage to the second molar, cyst formation that can displace and weaken the jaw, and difficulty in future surgery as roots become more fully formed with age.`,
    benefits: [
      'Permanent end to recurring pericoronitis pain',
      'Protects the second molar from root damage',
      'Eliminates risk of cyst development',
      'Most patients resume normal activity within 3 days',
      'Full X-ray assessment before any decision to remove',
      'Local anaesthesia ensures a comfortable procedure',
    ],
    steps: [
      'Panoramic or periapical X-ray to map root shape, angulation, depth and nerve proximity',
      'Treatment plan discussed - whether removal is necessary and which technique',
      'Local anaesthetic injection - full numbness in 5 minutes',
      'Incision in gum tissue to expose the tooth and overlying bone',
      'Bone removal with surgical drill if the tooth is deeply embedded',
      'Tooth sectioned into 2–3 pieces for easier, atraumatic removal',
      'Socket irrigated thoroughly; any loose bone fragments removed',
      'Sutures placed - dissolve on their own within 7–10 days',
      'Post-operative instructions and medications prescribed',
    ],
    aftercare: [
      'Bite on gauze for 30–45 minutes; keep head elevated for 24 hours',
      'Apply ice packs to the cheek - 20 min on, 20 min off - for first 24 hours',
      'Eat cold, soft foods only for 48 hours - cold soothes swelling',
      'Do NOT rinse, spit or use a straw for 24 hours',
      'Do NOT smoke for at least 72 hours - the single biggest dry-socket risk',
      'Take all prescribed antibiotics and anti-inflammatory/painkiller medications',
      'Gentle warm salt-water rinses from day 2 - 30 seconds, 3–4 times a day',
      'Call immediately for: difficulty breathing/swallowing, fever, spreading swelling, numbness lasting more than 24 hours',
    ],
    faq: [
      { q: 'Should I remove my wisdom teeth if they are not hurting?', a: 'Asymptomatic, fully erupted wisdom teeth with no infection, cyst or damage to the adjacent tooth do not need removal. However, partially erupted or deeply impacted teeth that are impossible to clean are at high risk of eventual problems - many dentists recommend preventive removal before age 25 when roots are not fully formed and recovery is faster.' },
      { q: 'How much swelling should I expect?', a: 'Swelling typically peaks 36–72 hours after surgery and then gradually subsides over 5–7 days. Some asymmetric facial puffiness is entirely normal. Aggressive icing in the first 24 hours significantly reduces swelling. After 48 hours, switch to warm packs to promote blood flow and healing.' },
      { q: 'Will wisdom tooth removal damage the nerve?', a: 'The inferior alveolar nerve runs through the lower jaw near the roots of lower wisdom teeth. Before surgery, an X-ray maps the relationship between the roots and the nerve. Temporary numbness (paraesthesia) of the lip and chin affects a small percentage of cases - around 1–5%. Permanent numbness is rare with careful technique and good X-ray assessment.' },
      { q: 'How long until I can eat normally?', a: 'Liquid and very soft foods for 48 hours. Soft foods (dal, eggs, mashed vegetables, pasta) for 3–5 days. Most patients return to a near-normal diet by day 5–7. Avoid crunchy foods until the socket has healed, usually 2–3 weeks.' },
      { q: 'Can I have all four wisdom teeth removed at once?', a: 'It is technically possible but not always practical. Removing all four at once means recovery affects all four quadrants simultaneously - eating and speaking become very difficult. Many surgeons prefer removing same-side upper and lower together (left side first, then right after 2–3 weeks).' },
    ],
    related: ['extraction', 'jaw', 'xray'],
  },

  {
    id: 'jaw',
    group: 'Surgical Care',
    title: 'Jaw Fracture Management',
    hindi: 'जबड़े का फ्रैक्चर - मुंह की चोट का इलाज',
    tagline: 'Restore your bite after trauma',
    badge: 'Emergency',
    color: 'from-slate-600 to-slate-800',
    duration: '60–90 min initial assessment',
    freq: 'Emergency treatment + follow-up',
    shortDesc: 'Prompt assessment, stabilisation and treatment of jaw injuries - from hairline fractures to displaced breaks - restoring correct bite and normal jaw movement.',
    overview: `The mandible (lower jaw) is the third most frequently fractured facial bone, commonly from road traffic accidents, sports injuries, falls and interpersonal violence. A fractured jaw needs prompt assessment because untreated fractures lead to permanent malocclusion (bite problems), chronic jaw pain and infection.

At Mohan Dental Care, jaw fractures are assessed urgently using periapical X-rays and, when needed, referral for a CT scan or OPG. Undisplaced (hairline) fractures are treated conservatively with a liquid/soft diet for 4–6 weeks, analgesics and antibiotics. A mandibular support may be worn for comfort.

Displaced fractures are treated with intermaxillary fixation (IMF) - wires or arch bars attached to the teeth hold the jaws together in correct occlusion while the bone heals (typically 4–6 weeks), or with surgical open reduction and internal fixation (ORIF) where titanium plates and screws rigidly fix the bone fragments. ORIF cases are referred to a maxillofacial surgeon.

Dental injuries accompanying fractures - displaced, avulsed or cracked teeth - are also assessed and treated simultaneously. A knocked-out (avulsed) tooth replanted within 60 minutes of the injury (kept moist in milk or saline) can often be saved.`,
    benefits: [
      'Immediate assessment within the same appointment',
      'Digital X-ray to classify fracture type and severity',
      'Conservative or surgical plan depending on displacement',
      'Correct occlusion restored to prevent long-term bite problems',
      'Referral pathway to maxillofacial surgeons for complex cases',
      'Associated dental injuries assessed simultaneously',
    ],
    steps: [
      'Emergency assessment - airway, bleeding, swelling evaluated',
      'History: mechanism of injury, pain, bite change, opening limitation',
      'Digital X-ray - periapical and OPG referral for complex fractures',
      'Fracture classified: undisplaced, displaced, condylar, symphysis, etc.',
      'Undisplaced: diet, analgesia, antibiotics, support strap',
      'Displaced: arch bars fitted and IMF applied, or referral for ORIF',
      'Associated tooth injuries managed',
      'Follow-up schedule: 1 week, 2 weeks, 4 weeks until healed',
    ],
    aftercare: [
      'Strict liquid or blended diet for 4–6 weeks during bone healing',
      'Oral hygiene maintained with a soft brush and chlorhexidine rinse',
      'Wire cutters kept on person at all times if jaws are wired shut (for emergency airway)',
      'Antibiotics taken for the full course',
      'No contact sports until fully healed and cleared by the treating dentist',
      'Follow-up X-rays to confirm satisfactory bone healing',
    ],
    faq: [
      { q: 'How do I know if my jaw is broken?', a: 'Key signs: intense pain at the fracture site that worsens with any movement, inability to close the mouth properly or a sudden change in how the teeth bite together, swelling and bruising of the face, numbness of the lower lip and chin, difficulty opening the mouth fully, loose or missing teeth.' },
      { q: 'Do all jaw fractures need surgery?', a: 'No. Simple, undisplaced fractures in which the teeth meet correctly heal well with conservative management (soft diet, analgesics, antibiotics). Displaced or comminuted fractures where the bone segments have moved, or condylar (joint) fractures with significant displacement, usually require surgical fixation.' },
      { q: 'My tooth was knocked out in an accident - can it be saved?', a: 'Possibly - time is critical. A knocked-out permanent tooth should be picked up by the crown (not the root), rinsed gently with clean water (do not scrub), and either placed back in the socket immediately or kept in cold milk, saline, or the patient\'s saliva until you reach the clinic. Do not let it dry out. Replantation within 30 minutes gives the best chance of success.' },
      { q: 'How long does a broken jaw take to heal?', a: 'Clinical union (bone tough enough to withstand normal function) occurs in 4–6 weeks for most mandibular fractures. Radiographic bone consolidation takes 3–4 months. IMF (jaws wired shut) is typically maintained for 4–6 weeks.' },
    ],
    related: ['extraction', 'xray'],
  },

  // ── GROUP 4: Orthodontic & Cosmetic ──────────────────────────────────────
  {
    id: 'braces',
    group: 'Orthodontic & Cosmetic',
    title: 'Braces & Orthodontic Treatment',
    hindi: 'आड़े-तिरछे दांतों का इलाज - Metal & Ceramic Braces',
    tagline: 'Straighter teeth for a healthier, more confident life',
    badge: 'Orthodontic',
    color: 'from-violet-500 to-purple-700',
    duration: '12 – 24 months total treatment',
    freq: 'Monthly adjustment visits',
    shortDesc: 'Metal or ceramic fixed braces apply continuous gentle pressure to move crowded, crooked or spaced teeth into correct alignment - improving appearance, bite and long-term oral health.',
    overview: `Orthodontic treatment (braces) does far more than improve the appearance of the smile. Correctly aligned teeth are easier to clean - reducing the risk of cavities and gum disease throughout life. A well-balanced bite distributes chewing forces evenly, protecting teeth from excessive wear, reducing jaw joint stress and preventing fractures.

Fixed braces work by bonding small metal or ceramic brackets to each tooth and connecting them with an archwire. The wire exerts a continuous, light force on each bracket, gradually moving teeth through the bone in the desired direction. The bone around the tooth dissolves on the pressure side and builds up on the tension side - allowing the tooth to move at roughly 1 mm per month.

Treatment journey: Consultation (X-rays, photographs, models), treatment planning (space analysis, tooth movement plan, estimated duration), bonding (brackets attached; archwire placed), active treatment with monthly adjustment visits over 12–24 months, debonding (brackets removed; teeth polished), and retention (a fixed wire bonded behind front teeth + a removable night retainer).

Retention is as important as the active phase. Teeth naturally try to drift back - a retainer worn consistently prevents this indefinitely.`,
    benefits: [
      'Corrects crowding, spacing, deep bite, open bite and crossbite',
      'Dramatically improves appearance and confidence',
      'Straight teeth are easier to clean - lasting gum health benefit',
      'Balanced bite - reduces jaw joint stress and tooth wear',
      'Metal or ceramic bracket options',
      'Durable, reliable results that last a lifetime with retainers',
    ],
    steps: [
      'Comprehensive records: X-rays (OPG + lateral cephalometric), intraoral photographs, digital impressions',
      'Diagnosis and cephalometric analysis - classifying the bite relationship',
      'Treatment plan explained - tooth movements, estimated time, whether extractions needed for space',
      'Separator elastics placed between molars 1 week before banding',
      'Molar bands cemented; brackets bonded to all other teeth with composite',
      'First archwire placed - thin, flexible; gentle initial forces',
      'Monthly adjustments - progressively stiffer archwires for refined tooth position',
      'Finishing: fine adjustments to detailing, torque and rotation',
      'Debonding: brackets removed, adhesive cleaned, teeth polished',
      'Fixed retainer bonded behind upper and lower front teeth',
      'Removable Hawley or vacuum-formed retainer for night use',
    ],
    aftercare: [
      'Avoid hard, crunchy foods throughout treatment (raw carrots, hard sweets, ice) - they break brackets',
      'Avoid sticky foods (toffee, chewing gum) - they pull brackets off',
      'Brush after every meal using a soft brush and interdental brushes around brackets',
      'Use fluoride mouthwash daily - braces dramatically increase cavity risk if oral hygiene lapses',
      'Wear retainers as instructed after treatment - missing this causes relapse',
      'Contact clinic if a bracket comes off or a wire pokes - do not leave it',
    ],
    faq: [
      { q: 'What is the best age for braces?', a: 'The ideal window is 11–16 years when the jaw is still growing and teeth move most efficiently. However, adults of any age can have orthodontic treatment - bone does not stop responding to orthodontic forces after adolescence. The main difference is that adult treatment may take slightly longer and extractions to create space are more common.' },
      { q: 'Do braces hurt?', a: 'Braces do not hurt going on - the bonding process is entirely painless. For 3–5 days after fitting and after each monthly adjustment you will feel aching pressure as the teeth begin to move. This is well-managed with paracetamol or ibuprofen.' },
      { q: 'Will I need teeth extracted for braces?', a: 'Not always. Mild to moderate crowding can often be managed without extraction using expansion techniques or inter-proximal reduction (IPR - micro-fine stripping of enamel between teeth). Severe crowding may require the removal of one premolar per quadrant (typically 4 teeth) to create sufficient space for alignment.' },
      { q: 'How long do I need to wear retainers after braces?', a: 'The short answer is: indefinitely, at least at night. The bone around teeth continues to remodel throughout life, and teeth always have some tendency to drift. Patients who stop wearing retainers - even years after completing braces - often see some relapse.' },
      { q: 'Can I play sports with braces?', a: 'Yes, but a mouthguard designed to fit over braces is essential for any contact sport. A standard mouthguard will not fit properly over brackets. A boil-and-bite mouthguard moulded over the braces is adequate; a custom mouthguard from the clinic is ideal.' },
    ],
    related: ['smile', 'extraction', 'cleaning'],
  },

  {
    id: 'smile',
    group: 'Orthodontic & Cosmetic',
    title: 'Smile Designing & Cosmetic Dentistry',
    hindi: 'Smile Makeover - आपकी मुस्कान, आपका डिज़ाइन',
    tagline: 'Your smile, carefully designed around your face',
    badge: 'Cosmetic',
    color: 'from-pink-500 to-rose-600',
    duration: '2–6 visits depending on plan',
    freq: 'One-time (maintenance touch-ups)',
    shortDesc: 'A bespoke combination of whitening, bonding, veneers, contouring and gum reshaping - digitally planned and minimally invasive where possible - to create the smile you have always wanted.',
    overview: `A smile makeover is not a single treatment - it is a carefully planned sequence of procedures tailored to the individual face, skin tone, tooth shape and personal preference. At Mohan Dental Care, the process begins with a thorough smile analysis: photographs, tooth measurements, and a conversation about what specifically the patient wants to change.

Common cosmetic concerns and solutions: Dark or stained teeth are treated with professional in-office whitening - lightens teeth 2–8 shades in a single session. Chipped, worn or short teeth are restored with composite bonding - tooth-coloured resin sculpted directly onto the tooth in a single visit, no drilling required for small chips. Durable, natural-looking and reversible.

Crooked or gapped front teeth can be corrected with porcelain veneers - wafer-thin ceramic shells bonded to the front surface of teeth. EMAX veneers require minimal enamel removal (0.3–0.5 mm) and produce a dramatic transformation that looks entirely natural. A gummy smile is corrected with gum contouring (gingivectomy) - excess gum tissue removed with a scalpel or laser to reveal more tooth surface. Uneven or rough tooth edges are smoothed with enameloplasty.

Every smile design plan is shown digitally (or with mock-ups) before any irreversible treatment begins - so you can approve the outcome before it is implemented.`,
    benefits: [
      'Fully personalised to your face shape, skin tone and wishes',
      'Digital preview - see the outcome before any treatment',
      'Minimally invasive techniques wherever possible',
      'Composite bonding is completely reversible',
      'EMAX veneers last 10–15 years and look completely natural',
      'Gum contouring and contouring for instant frame improvement',
      'Transforms confidence, professional appearance and social ease',
    ],
    steps: [
      'Smile analysis appointment - photographs, measurements, discussion of goals',
      'Digital smile design (DSD) or wax mock-up to preview the result',
      'Step-by-step treatment plan agreed and sequenced correctly',
      'Whitening completed first - always bleach before bonding (shade matching to whiter base)',
      'Gum contouring if needed - heals before veneers are placed',
      'Veneer or bonding preparation and temporary placement for trial',
      'Final EMAX veneers or composite restorations placed and polished',
      'Photographs and review - any fine-tuning completed',
      'Maintenance plan: touch-up whitening, night-guard if grinding',
    ],
    aftercare: [
      'After whitening: avoid coloured foods and drinks (coffee, tea, red wine, turmeric) for 48 hours',
      'Composite bonding stains slightly over time - annual polishing maintains appearance',
      'Veneers: do not bite nails, pens or hard objects with front teeth',
      'Night-guard strongly recommended - grinding destroys veneers and bonding',
      'Regular 6-month check-ups and professional cleaning to maintain appearance',
      'Touch-up whitening every 12–18 months keeps the base shade bright',
    ],
    faq: [
      { q: 'Will my cosmetically treated teeth look fake or "too white"?', a: 'Good cosmetic dentistry looks completely natural. We work from photographs and careful shade selection to create results that are bright and beautiful but not artificial-looking. The goal is a smile that compliments your face - not one that announces itself as "dental work".' },
      { q: 'How long do veneers last?', a: 'EMAX porcelain veneers regularly last 12–15 years with good care. The main risks are fracture from biting hard objects or severe bruxism (grinding) and microleakage at the gum margin if oral hygiene lapses. A night-guard is strongly recommended for veneer patients who grind.' },
      { q: 'Is veneer placement reversible?', a: 'Traditional veneers require a thin layer of enamel to be removed (0.3–0.5 mm) to create space for the ceramic - this is irreversible. No-prep veneers can be placed without any enamel removal on teeth that are small or set back. Composite bonding is 100% reversible.' },
      { q: 'How white can whitening make my teeth?', a: 'Professional in-office whitening typically lifts the natural tooth shade by 4–8 shades on the Vita guide. Important: whitening only works on natural tooth enamel. Crowns, veneers, bonding and fillings do not change colour with whitening gel. If you have restorations on visible front teeth, these must be factored into the shade planning.' },
      { q: 'Can I just get whitening without any other treatment?', a: 'Absolutely - whitening alone is one of the most impactful and affordable cosmetic improvements available. It is a great starting point before deciding whether further cosmetic work is needed or desired. Whitening should always be preceded by a check-up and cleaning to ensure gum health and rule out cavities.' },
    ],
    related: ['braces', 'crown', 'cleaning'],
  },

  // ── GROUP 5: Pediatric ────────────────────────────────────────────────────
  {
    id: 'pediatric',
    group: 'Pediatric Dentistry',
    title: "Pediatric Dentistry (Children's Dental Care)",
    hindi: 'बच्चों के दांतों की देखभाल - पहले दांत से',
    tagline: 'Building healthy habits from the very first tooth',
    badge: 'Pediatric',
    color: 'from-green-500 to-teal-600',
    duration: '30 – 45 min',
    freq: 'Every 6 months from age 1',
    shortDesc: 'Gentle, child-adapted dental care in a calm, reassuring environment - from first tooth check-ups and sealants to cavity treatment in baby teeth - building positive dental attitudes for life.',
    overview: `The foundation of lifelong dental health is laid in childhood. How a child experiences their first few dental visits determines whether they become a confident dental patient for life or an anxious adult who avoids the dentist until pain forces the issue. At Mohan Dental Care, we invest time in making every young patient's visit positive.

Baby (primary) teeth are not "just temporary". They hold space for the permanent teeth developing underneath them, guide their eruption into the correct position, are essential for chewing and nutrition, affect speech development, and impact the child's confidence. Decayed baby teeth cause pain that affects sleep, eating and concentration. They can develop abscesses that damage the permanent tooth bud beneath.

The first dental visit should happen by the child's first birthday or within 6 months of the first tooth erupting. This appointment is brief - a lap exam with the parent, a look at the teeth and gums, dietary advice for the parent, and introducing the child to the dental environment with no procedures. Subsequent visits build gradually on this foundation.

Services for children at our clinic include: preventive check-up and oral hygiene instruction for parents; fluoride application (gel or varnish) - dramatically reduces decay rate; fissure sealants - plastic coating applied to the grooves of newly erupted permanent molars, sealing out bacteria and preventing up to 80% of molar cavities; tooth-coloured fillings in baby teeth; pulp therapy (baby root canal/pulpotomy) to save badly decayed baby teeth; space maintainers if a baby tooth is lost early; and dental injury management.`,
    benefits: [
      'Prevents dental fear from developing - positive early experiences',
      'Fissure sealants prevent 80% of molar cavities before they form',
      'Fluoride treatments reduce decay rate by 30–40%',
      'Early detection of developing crowding or orthodontic problems',
      'Space maintainers protect permanent tooth eruption after early loss',
      'Dietary counselling for parents - reducing hidden sugar exposure',
      'Child-adapted X-rays with minimum necessary radiation',
    ],
    steps: [
      'Meet-and-greet - child explores the chair, instruments explained with tell-show-do technique',
      'Gentle examination - soft probe, mirror, parent lap exam for under-3s',
      'X-rays only if clinically indicated (never routine in very young children)',
      'Scaling or polishing if needed - adapting the pace to the child',
      'Fluoride gel or varnish applied after cleaning',
      'Fissure sealants applied to newly erupted permanent molars (age 6 and 12)',
      'Dietary diary and oral hygiene advice given to parents',
      'Next 6-month appointment scheduled before leaving',
    ],
    aftercare: [
      'Do not give the child food or drink for 30 minutes after fluoride application',
      "Brush the child's teeth for them until they are 7–8 years old; supervise until 10–12",
      'Use a rice-grain amount of fluoride toothpaste from first tooth; pea-size from age 3',
      'Avoid putting the child to bed with a bottle of milk, juice or formula - nursing bottle caries destroys front teeth rapidly',
      "Cut the child's dummy habit by age 3 at the latest to avoid open bite",
      'Establish a regular 6-month dental routine - it normalises dental visits',
    ],
    faq: [
      { q: 'When should my child first see a dentist?', a: 'By their first birthday, or within 6 months of the first tooth appearing - whichever comes first. Early visits are about establishing the relationship, giving parents guidance on diet and hygiene, and identifying any early developmental concerns. There is no minimum age.' },
      { q: "My child's baby tooth has a cavity - does it need to be filled?", a: 'Yes, in most cases. Leaving a decayed baby tooth untreated risks: pain and infection, spread to the permanent tooth developing underneath, premature loss leading to space problems, and the child developing a fear of dentists when the pain becomes acute.' },
      { q: 'What are fissure sealants and does my child need them?', a: 'Permanent molars (the big back teeth that erupt at age 6 and 12) have deep grooves on their chewing surfaces that are impossible to clean effectively with a toothbrush. A fissure sealant is a liquid plastic flowed into the grooves and light-cured - painlessly sealing them. Studies show sealants prevent over 80% of molar cavities for 5–10 years.' },
      { q: 'How do I prepare my anxious child for the dentist?', a: "Never use the dentist as a threat. Avoid projecting your own dental anxiety onto the child. Read child-friendly books about visiting the dentist beforehand. Allow them to bring a comfort toy. At our clinic, the first visit involves no procedures - the child just meets the team and sits in the chair. Trust builds gradually." },
      { q: 'Is fluoride toothpaste safe for young children?', a: 'Yes - fluoride toothpaste is recommended from the first tooth. The amount used is critical: a rice-grain smear for under-3s, a pea-size amount from ages 3–6. Fluoride is safe when used in appropriate amounts. Supervised brushing and correct amounts prevent fluorosis completely.' },
    ],
    related: ['cleaning', 'xray', 'braces'],
  },
];
