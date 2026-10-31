import { useScrollReveal, useTilt, getAssetUrl } from '../utils';

// ─── Gallery items with real images ─────────────────────────────────────────
const GALLERY = [
  { label: 'Doctor Consultation Office', img: 'images/office.webp' },
  { label: 'Reception & Waiting Lounge', img: 'images/reception.webp' },
  { label: 'Treatment Chair & Operatory', img: 'images/treatment.webp' },
  { label: 'Digital RVG X-Ray Room', img: 'images/xray.webp' },
  { label: 'Sterilization & Autoclave', img: 'images/sterilization.webp' },
  { label: 'Consultation Desk', img: 'images/office.webp' },
];

// ─── Doctor card with real photo ─────────────────────────────────────────────
function DoctorCard() {
  const tilt = useTilt(5);

  return (
    <div className="flex justify-center">
      <div
        {...tilt}
        className="card-3d bg-white rounded-[26px] p-3 shadow-3d max-w-[320px] w-full relative cursor-default border border-[#E4E5E4]"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Real doctor photo */}
        <div className="rounded-[18px] overflow-hidden aspect-[4/5] relative bg-gradient-to-b from-[#133A5B] to-[#03213B]">
          <img
            src={getAssetUrl('images/dr_p_r_rajwade.webp')}
            alt="Dr. P. R. Rajwade - Dentist Surajpur"
            className="w-full h-full object-cover object-top"
          />
          {/* Gradient overlay at bottom for name */}
          <div className="absolute bottom-0 left-0 right-0 px-5 py-5 bg-gradient-to-t from-ink-950 via-ink-950/80 to-transparent">
            <p className="text-white font-display font-bold text-lg leading-tight">Dr. P. R. Rajwade</p>
            <p className="text-[#BFA88F] text-xs font-semibold mt-0.5">Govt. Dental College, Raipur</p>
          </div>
        </div>

        {/* Registration badge */}
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-ink-950 text-white rounded-full px-5 py-2.5 text-xs font-bold whitespace-nowrap shadow-[0_12px_26px_-12px_rgba(3,33,59,0.5)] border border-[#BFA88F]/40">
          Reg. CGDC/G/23/3989
        </div>

        {/* Floating credentials */}
        <div className="hidden sm:flex absolute -left-10 top-1/3 bg-white rounded-2xl px-4 py-2.5 shadow-card items-center gap-2.5 border border-[#E4E5E4]"
          style={{ animation: 'badgeFloat1 4s ease-in-out infinite' }}>
          <div className="w-8 h-8 rounded-xl bg-accent-500/15 flex items-center justify-center flex-shrink-0">
            <svg className="w-4 h-4 text-accent-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 3l7 3v6c0 4.8-3 8-7 9-4-1-7-4.2-7-9V6z" />
              <path d="M9 12l2 2 4-4" />
            </svg>
          </div>
          <div>
            <p className="text-[0.6rem] font-bold uppercase tracking-wide text-ink-700">Role</p>
            <p className="text-[0.8rem] font-bold text-ink-950">Dental Surgeon</p>
          </div>
        </div>

        <div className="hidden sm:flex absolute -right-8 bottom-[20%] bg-white rounded-2xl px-4 py-2.5 shadow-card items-center gap-2.5 border border-[#E4E5E4]"
          style={{ animation: 'badgeFloat2 5s ease-in-out infinite 1s' }}>
          <div className="w-8 h-8 rounded-xl bg-teal-500/10 flex items-center justify-center flex-shrink-0">
            <svg className="w-4 h-4 text-teal-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="8.5" /><path d="M12 7.5V12l3 2" />
            </svg>
          </div>
          <div>
            <p className="text-[0.6rem] font-bold uppercase tracking-wide text-ink-700">Available</p>
            <p className="text-[0.8rem] font-bold text-ink-950">9 AM – 8 PM</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Doctor teaser on homepage ───────────────────────────────────────────────
export function DoctorTeaser({ setActivePage }) {
  const [ref, visible] = useScrollReveal(0.1);

  return (
    <section id="doctor" className="py-16 sm:py-24 bg-[#F8FAFA]">
      <div
        ref={ref}
        className="max-w-[1240px] mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center"
      >
        {/* Left: Editorial Image Presentation (5 cols) */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-full max-w-[360px] sm:max-w-[390px]">
            <div className={`rounded-3xl overflow-hidden aspect-[4/5] bg-gradient-to-b from-[#133A5B] to-[#03213B] shadow-[0_20px_50px_-15px_rgba(3,33,59,0.15)] border border-[#E5E8E8] relative group transition-all duration-700 ease-out ${visible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-[0.98] translate-y-4'
              }`}>
              <img
                src={getAssetUrl('images/dr_p_r_rajwade.webp')}
                alt="Dr. P. R. Rajwade, Lead Dental Surgeon at Mohan Dental Care Clinic"
                className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-400 ease-out"
              />
              <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-[#03213B] via-[#03213B]/80 to-transparent">
                <span className="text-[#BFA88F] text-xs font-bold uppercase tracking-wider block">Lead Dental Surgeon</span>
                <span className="text-white font-display font-bold text-lg">Dr. P. R. Rajwade</span>
              </div>
            </div>

            {/* Subtle floating badge */}
            <div className={`absolute -bottom-4 right-4 bg-white rounded-full px-4 py-2 shadow-card border border-[#E5E8E8] flex items-center gap-2 text-xs font-bold text-[#03213B] transition-all duration-500 delay-300 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
              }`}>
              CGDC Reg. 23/3989
            </div>
          </div>
        </div>

        {/* Right: Editorial Content & Highlights (7 cols) */}
        <div className="lg:col-span-7 text-left">
          <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8F1F8] border border-[#123b5d]/20 text-[#123b5d] text-xs font-bold tracking-[0.08em] uppercase mb-4 transition-all duration-500 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            }`}>
            DEDICATED CLINICAL LEADERSHIP
          </div>

          <h2 className={`font-display font-bold text-[clamp(1.85rem,3.2vw,2.5rem)] text-[#03213B] leading-tight mb-2 transition-all duration-600 delay-100 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
            }`}>
            Meet Your Dentist
          </h2>
          <p className={`text-[#123b5d] font-semibold text-[1.05rem] mb-5 transition-all duration-600 delay-150 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            }`}>
            Dr. P. R. Rajwade, <span className="text-[#66737F] font-normal">Govt. Dental College, Raipur</span>
          </p>

          <p className={`text-[#66737F] text-[0.98rem] sm:text-[1.05rem] leading-relaxed mb-8 max-w-[56ch] transition-all duration-600 delay-200 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            }`}>
            With extensive clinical experience in both restorative and cosmetic procedures, Dr. Rajwade is committed to making dentistry approachable, gentle, and transparent. Every consultation is structured to give you clarity, comfort, and long-term peace of mind.
          </p>

          {/* 3 Core Highlights */}
          <div className={`grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6 transition-all duration-600 delay-250 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
            }`}>
            <div className="p-3.5 rounded-xl bg-white border border-[#E5E8E8] shadow-[0_2px_10px_-4px_rgba(3,33,59,0.04)] hover:-translate-y-0.5 transition-transform duration-200">
              <div className="w-7 h-7 rounded-lg bg-[#E8F1F8] flex items-center justify-center text-[#123b5d] mb-2">
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </div>
              <h4 className="font-bold text-xs sm:text-sm text-[#03213B] mb-0.5">Patient-Focused Care</h4>
              <p className="text-[0.72rem] text-[#66737F]">Unhurried consultations &amp; gentle care.</p>
            </div>

            <div className="p-3.5 rounded-xl bg-white border border-[#E5E8E8] shadow-[0_2px_10px_-4px_rgba(3,33,59,0.04)] hover:-translate-y-0.5 transition-transform duration-200">
              <div className="w-7 h-7 rounded-lg bg-[#E8F1F8] flex items-center justify-center text-[#123b5d] mb-2">
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h4 className="font-bold text-xs sm:text-sm text-[#03213B] mb-0.5">Personalized Plans</h4>
              <p className="text-[0.72rem] text-[#66737F]">Customized to your clinical needs.</p>
            </div>

            <div className="p-3.5 rounded-xl bg-white border border-[#E5E8E8] shadow-[0_2px_10px_-4px_rgba(3,33,59,0.04)] hover:-translate-y-0.5 transition-transform duration-200">
              <div className="w-7 h-7 rounded-lg bg-[#E8F1F8] flex items-center justify-center text-[#123b5d] mb-2">
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                </svg>
              </div>
              <h4 className="font-bold text-xs sm:text-sm text-[#03213B] mb-0.5">Modern Technology</h4>
              <p className="text-[0.72rem] text-[#66737F]">Digital imaging &amp; aesthetic crowns.</p>
            </div>
          </div>

          {/* Clinical & Hospital Experience */}
          <div className={`mb-8 p-4 sm:p-5 rounded-2xl bg-white border border-[#E5E8E8] shadow-[0_4px_20px_-6px_rgba(3,33,59,0.04)] transition-all duration-600 delay-300 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
            }`}>
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-[#03213B] mb-3 flex items-center gap-2">
              Clinical &amp; Hospital Background
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {[
                { title: 'Balco Medical Centre', loc: 'Naya Raipur, Chhattisgarh', role: 'Ex Dental Surgeon' },
                { title: 'Dentaproof Dental Hospital', loc: 'Zora, Raipur', role: 'Dental Surgeon' },
                { title: 'City Dental Hospital', loc: 'Korba', role: 'Dental Surgeon' },
                { title: 'Govt. CHC Hospital', loc: 'Udaipur, Surguja', role: 'Dental Surgeon' },
              ].map((exp, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-2.5 rounded-xl bg-[#F8FAFA] border border-[#E5E8E8]/70">
                  <div className="w-6 h-6 rounded-lg bg-[#E8F1F8] text-[#123b5d] flex items-center justify-center flex-shrink-0 text-xs font-bold mt-0.5">
                    {idx + 1}
                  </div>
                  <div>
                    <p className="font-bold text-xs text-[#03213B] leading-snug">{exp.title}</p>
                    <p className="text-[0.72rem] text-[#66737F]">{exp.loc} · <span className="text-[#123b5d] font-semibold">{exp.role}</span></p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className={`transition-all duration-600 delay-350 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            }`}>
            <button
              onClick={() => { setActivePage('about'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#03213B] hover:bg-[#133A5B] text-white font-bold text-[0.94rem] hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-200 group"
            >
              <span>View Full Doctor Profile &amp; Clinic Details</span>
              <span className="group-hover:translate-x-[3px] transition-transform duration-250 ease-out">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Full about page ─────────────────────────────────────────────────────────
export function AboutPage() {
  const [ref, visible] = useScrollReveal(0.05);

  const CREDS = [
    { label: 'Role', value: 'Dental Surgeon' },
    { label: 'Registration', value: 'CGDC/G/23/3989' },
    { label: 'Focus', value: 'General & Cosmetic' },
    { label: 'College', value: 'Govt. Dental, Raipur' },
  ];

  const BIO = [
    'Dr. P. R. Rajwade completed a Bachelor of Dental Surgery at Government Dental College, Raipur, and is registered with the Chhattisgarh Dental Council under CGDC/G/23/3989.',
    'At the Surajpur clinic, treatment covers routine care as well as more involved work - root canals, wisdom tooth surgery, jaw fractures, orthodontics and full smile makeovers - supported by digital RVG X-ray imaging and modern crown materials (Zirconia, EMAX, DMLS).',
    'Our approach is straightforward: explain what\'s happening, offer the options that fit, and treat every patient - young or old - at an unhurried pace.',
  ];

  return (
    <div className="pt-[68px] sm:pt-[76px] bg-[#F8FAFA]">
      {/* Page hero */}
      <div className="bg-[#EEF1F1]/60 py-16 relative overflow-hidden border-b border-[#E5E8E8]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 relative">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8F1F8] border border-[#123b5d]/20 text-[#123b5d] text-xs font-bold tracking-[0.08em] uppercase mb-4">
            <img src={getAssetUrl('images/logo.webp')} alt="Mohan Dental Care Surajpur Emblem" className="w-4 h-4 object-contain" />
            MEET THE DOCTOR &amp; CLINIC
          </div>
          <h2 className="font-display font-bold text-[clamp(2rem,3.6vw,2.9rem)] text-[#03213B] mb-4">About Mohan Dental Care</h2>
          <p className="text-[#66737F] text-[1.06rem] max-w-[60ch]">
            Led by Dr. P. R. Rajwade, the Surajpur clinic combines routine dental care with surgical,
            orthodontic and cosmetic treatment - all in one place on M.G. Road.
          </p>
        </div>
      </div>

      {/* Doctor detail */}
      <section className="py-12 sm:py-20 max-w-[1240px] mx-auto px-4 sm:px-6">
        <div
          ref={ref}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <DoctorCard />

          <div className="mt-6 lg:mt-0">
            <h2 className="font-display font-bold text-[1.8rem] text-[#03213B] mb-1">Dr. P. R. Rajwade</h2>
            <p className="text-[#66737F] text-[0.98rem] mb-6">Government Dental College, Raipur</p>

            {/* Credential pills */}
            <div className="flex flex-wrap gap-3 mb-8">
              {CREDS.map(c => (
                <div key={c.label} className="px-4 py-3 rounded-2xl bg-white border border-[#E5E8E8]">
                  <p className="text-[0.65rem] font-bold uppercase tracking-wider text-[#123b5d] mb-0.5">{c.label}</p>
                  <p className="text-[0.88rem] font-bold text-[#03213B]">{c.value}</p>
                </div>
              ))}
            </div>

            {BIO.map((p, i) => (
              <p key={i} className="text-ink-700 text-[1.02rem] leading-relaxed mb-4">{p}</p>
            ))}

            {/* Checklist */}
            <div className="mt-6 mb-8 grid grid-cols-1 sm:grid-cols-2 gap-2">
              {[
                'Root Canal Treatment', 'Wisdom Tooth Surgery',
                'Digital RVG X-Ray', 'Braces & Orthodontics',
                'Zirconia / EMAX Crowns', 'Smile Designing',
                'Pediatric Dentistry', 'Jaw Fracture Care',
              ].map(item => (
                <div key={item} className="flex items-center gap-2 text-[0.9rem] text-ink-700">
                  <svg className="w-4 h-4 text-teal-500 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12.5l4.5 4.5L19 7" />
                  </svg>
                  {item}
                </div>
              ))}
            </div>

            {/* Prior Clinical & Hospital Experience */}
            <div className="mt-8 mb-8 p-6 rounded-2xl bg-white border border-[#E5E8E8] shadow-sm">
              <h3 className="font-display font-bold text-sm uppercase tracking-wider text-[#03213B] mb-4 flex items-center gap-2">
                Professional &amp; Hospital Experience
              </h3>
              <div className="space-y-3">
                {[
                  {
                    num: '01',
                    hospital: 'Balco Medical Centre',
                    location: 'Naya Raipur, Chhattisgarh',
                    role: 'Ex Dental Surgeon',
                    desc: 'Tertiary oncology-support protocols, maxillofacial evaluations, and advanced oral surgical procedures.',
                  },
                  {
                    num: '02',
                    hospital: 'Dentaproof Dental Hospital',
                    location: 'Zora, Raipur',
                    role: 'Dental Surgeon',
                    desc: 'Multidisciplinary dental clinic handling high-precision root canals, aesthetic crowns, and smile designing.',
                  },
                  {
                    num: '03',
                    hospital: 'City Dental Hospital',
                    location: 'Korba',
                    role: 'Dental Surgeon',
                    desc: 'Endodontics, restorative fillings, prosthetic replacements, and comprehensive family dental healthcare.',
                  },
                  {
                    num: '04',
                    hospital: 'Govt. CHC Hospital',
                    location: 'Udaipur, Surguja',
                    role: 'Dental Surgeon',
                    desc: 'Public healthcare service, emergency trauma management, exodontia, and community oral health.',
                  },
                ].map((exp) => (
                  <div key={exp.hospital} className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#F8FAFA] border border-[#E5E8E8]">
                    <span className="font-display font-extrabold text-xs text-[#123b5d] bg-[#E8F1F8] px-2.5 py-1 rounded-lg flex-shrink-0">
                      {exp.num}
                    </span>
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-0.5">
                        <h4 className="font-bold text-sm text-[#03213B]">{exp.hospital}</h4>
                        <span className="text-[0.72rem] px-2 py-0.5 rounded-full bg-[#EEF1F1] text-[#66737F] font-semibold">{exp.location}</span>
                      </div>
                      <p className="text-xs text-[#123b5d] font-bold mb-1">{exp.role}</p>
                      <p className="text-xs text-[#66737F]">{exp.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <a
              href="#booking"
              onClick={(e) => { e.preventDefault(); document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="btn-shimmer inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#123b5d] hover:bg-[#0c2a44] text-white font-bold shadow-[0_10px_25px_-6px_rgba(18,59,93,0.45)] hover:-translate-y-1 transition-all duration-200"
            >
              Book With Dr. Rajwade
            </a>
          </div>
        </div>
      </section>

      {/* Gallery section */}
      <section id="clinic-tour" className="py-14 sm:py-20 bg-[#E4E5E4]/50">
        <div className="max-w-[1180px] mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-500/15 text-accent-600 text-xs font-bold tracking-[0.08em] uppercase mb-5">
            Around The Clinic
          </div>
          <h2 className="font-display font-bold text-[clamp(1.7rem,2.8vw,2.2rem)] text-ink-950 mb-4">Gallery</h2>
          <p className="text-ink-700 text-[1rem] mb-10 max-w-[52ch]">
            A look inside Mohan Dental Care - modern, clean and designed around your comfort.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {GALLERY.map(({ label, img }) => (
              <div key={label} className="card-3d rounded-2xl overflow-hidden aspect-[4/3] relative cursor-default group shadow-card border border-[#E4E5E4]">
                <img
                  src={getAssetUrl(img)}
                  alt={label}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-x-0 bottom-0 px-4 py-3 bg-gradient-to-t from-black/70 to-transparent">
                  <p className="text-white font-bold text-[0.9rem]">{label}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-ink-700 text-sm mt-5">
            Placeholder images - will be replaced with real clinic photos.
          </p>
        </div>
      </section>

      {/* Why choose us on about page */}
      <section className="py-14 sm:py-20 bg-[#FBFDFD]">
        <div className="max-w-[1180px] mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-500/15 text-accent-600 text-xs font-bold tracking-[0.08em] uppercase mb-5">
            Our Approach
          </div>
          <h2 className="font-display font-bold text-[clamp(1.7rem,2.8vw,2.2rem)] text-ink-950 mb-10">What Makes Us Different</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                icon: (
                  <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 3l7 3v6c0 4.8-3 8-7 9-4-1-7-4.2-7-9V6z" />
                  </svg>
                ),
                grad: 'from-[#03213B] to-[#133A5B]',
                title: '12 Treatments Under One Roof',
                desc: 'From routine cleanings to wisdom tooth surgery, braces and smile makeovers - no referrals needed for most cases.',
              },
              {
                icon: (
                  <svg className="w-6 h-6 text-white" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="6" y="9" width="28" height="20" rx="3" /><circle cx="20" cy="18" r="4" />
                    <line x1="6" y1="33" x2="34" y2="33" />
                  </svg>
                ),
                grad: 'from-[#133A5B] to-[#03213B]',
                title: 'Digital RVG X-Ray Chairside',
                desc: 'Images appear on screen in 5 seconds, with 80% less radiation than traditional film - diagnosis and planning in the same visit.',
              },
              {
                icon: (
                  <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="8.5" /><path d="M8.5 15.5c1 2 2 2.5 3.5 2.5s2.5-.5 3.5-2.5" />
                    <circle cx="9.5" cy="10" r="1" fill="currentColor" />
                    <circle cx="14.5" cy="10" r="1" fill="currentColor" />
                  </svg>
                ),
                grad: 'from-[#BFA88F] to-[#987F68]',
                title: 'Unhurried, Gentle Approach',
                desc: 'We take time to explain what is happening, answer your questions and make sure you are comfortable at every stage.',
              },
              {
                icon: (
                  <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 3l2.6 5.9 6.4.6-4.8 4.3 1.4 6.3L12 17l-5.6 3.1 1.4-6.3-4.8-4.3 6.4-.6z" />
                  </svg>
                ),
                grad: 'from-[#987F68] to-[#133A5B]',
                title: 'Premium Crown Materials',
                desc: 'Zirconia, EMAX and DMLS options give you the best material for your specific tooth - strength and aesthetics matched to need.',
              },
              {
                icon: (
                  <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                ),
                grad: 'from-[#133A5B] to-[#BFA88F]',
                title: 'Child-Friendly Environment',
                desc: 'Pediatric patients get a specially gentle, fear-free approach that builds positive dental habits early.',
              },
              {
                icon: (
                  <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 3.5c-2 0-3.5 1.8-3.2 3.7C4.7 14.6 9.4 19.3 16.8 20.2c1.9.3 3.7-1.2 3.7-3.2v-1.8c0-.6-.4-1.1-1-1.3l-3.4-1.1c-.5-.2-1.1 0-1.4.4l-1 1.3c-2.3-1.1-4.1-2.9-5.2-5.2l1.3-1c.4-.3.6-.9.4-1.4L9.1 3.5c-.2-.6-.7-1-1.3-1H7z" />
                  </svg>
                ),
                grad: 'from-[#BFA88F] to-[#03213B]',
                title: 'Easy Booking via WhatsApp',
                desc: 'No waiting on hold. Fill the form, it opens WhatsApp - appointment confirmed quickly.',
              },
            ].map(({ icon, grad, title, desc }) => (
              <div key={title} className="card-3d bg-white rounded-2xl p-6 border border-[#E4E5E4] shadow-card cursor-default">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${grad} flex items-center justify-center mb-5 shadow-[0_8px_20px_-8px_rgba(3,33,59,0.3)]`}>
                  {icon}
                </div>
                <h3 className="font-display font-bold text-[1rem] text-ink-950 mb-2">{title}</h3>
                <p className="text-ink-700 text-[0.9rem] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
