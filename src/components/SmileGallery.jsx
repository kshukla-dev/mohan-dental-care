import { useState } from 'react';
import { useScrollReveal } from '../utils';

const GALLERY_CASES = [
  {
    id: 1,
    treatment: 'Teeth Whitening',
    desc: 'Professional whitening - 8 shades brighter in a single session',
    gradient: 'from-amber-50 to-yellow-50',
    sessions: '1–2',
    duration: '2–3 Years',
  },
  {
    id: 2,
    treatment: 'Smile Makeover',
    desc: 'Full smile transformation with ceramic veneers & gum contouring',
    gradient: 'from-blue-50 to-sky-50',
    sessions: '3–4',
    duration: 'Permanent',
  },
  {
    id: 3,
    treatment: 'Clear Aligners',
    desc: 'Invisible orthodontics - natural, aligned smile in 9 months',
    gradient: 'from-teal-50 to-emerald-50',
    sessions: '8–12',
    duration: 'Permanent',
  },
  {
    id: 4,
    treatment: 'Dental Implants',
    desc: 'Missing tooth restored permanently with a Zirconia implant crown',
    gradient: 'from-violet-50 to-purple-50',
    sessions: '3–4',
    duration: 'Permanent',
  },
];

function BeforeSVG({ idx }) {
  const stainColors = ['#C09000', '#A07800', '#B0882A', '#9A7010'];
  const sc = stainColors[idx % stainColors.length];
  return (
    <svg viewBox="0 0 120 145" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-md">
      <defs>
        <radialGradient id={`bf${idx}`} cx="40%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#f5eecc" />
          <stop offset="100%" stopColor="#c8b050" />
        </radialGradient>
      </defs>
      <path d="M25 28 Q22 14 32 10 Q50 3 70 6 Q90 3 97 14 Q104 26 98 55 Q92 84 86 104 Q80 124 60 134 Q44 128 40 114 Q30 94 25 62 Z" fill={`url(#bf${idx})`} stroke="#c0a040" strokeWidth="1.5" />
      <ellipse cx="45" cy="55" rx="16" ry="11" fill={sc} opacity="0.3" />
      <ellipse cx="78" cy="82" rx="11" ry="7" fill={sc} opacity="0.25" />
      <ellipse cx="32" cy="88" rx="9" ry="6" fill={sc} opacity="0.22" />
      <path d="M63 32 L59 62 L66 67 L61 102" stroke="#a08020" strokeWidth="1.5" fill="none" opacity="0.45" />
      <text x="60" y="148" textAnchor="middle" fontSize="10" fill="#8B6914" fontWeight="700" fontFamily="sans-serif">Discoloured</text>
    </svg>
  );
}

function AfterSVG({ idx }) {
  return (
    <svg viewBox="0 0 120 145" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-md">
      <defs>
        <radialGradient id={`af${idx}`} cx="35%" cy="25%" r="75%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="60%" stopColor="#f0f8ff" />
          <stop offset="100%" stopColor="#d0eaff" />
        </radialGradient>
      </defs>
      <path d="M25 28 Q22 14 32 10 Q50 3 70 6 Q90 3 97 14 Q104 26 98 55 Q92 84 86 104 Q80 124 60 134 Q44 128 40 114 Q30 94 25 62 Z" fill={`url(#af${idx})`} stroke="#90c8f0" strokeWidth="1.5" />
      <ellipse cx="42" cy="40" rx="13" ry="9" fill="white" opacity="0.8" />
      <circle cx="60" cy="74" r="17" fill="#0284c7" opacity="0.1" />
      <path d="M51 74 L57 80 L70 64" stroke="#0284c7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M88 26 L91 33 L98 26 L91 19Z" fill="#0284c7" opacity="0.55" />
      <path d="M100 48 L102 53 L107 48 L102 43Z" fill="#0ea5e9" opacity="0.4" />
      <text x="60" y="148" textAnchor="middle" fontSize="10" fill="#0284c7" fontWeight="700" fontFamily="sans-serif">Transformed</text>
    </svg>
  );
}

export default function SmileGallery() {
  const [activeCase, setActiveCase] = useState(0);
  const [ref, visible] = useScrollReveal();
  const [headRef, headVisible] = useScrollReveal();

  return (
    <section id="gallery" className="py-16 sm:py-24 bg-[#F8FAFA] border-t border-[#E5E8E8]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">

        {/* Header */}
        <div ref={headRef} className="text-center max-w-[680px] mx-auto mb-12 sm:mb-16">
          <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8F1F8] border border-[#123b5d]/20 text-[#123b5d] text-xs font-bold tracking-[0.08em] uppercase mb-4 transition-all duration-500 ease-out ${headVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
            <span className="w-1.5 h-1.5 rounded-full bg-[#123b5d]" />
            SMILE GALLERY
          </div>
          <h2 className={`font-display font-bold text-[clamp(1.85rem,3.2vw,2.5rem)] text-[#03213B] leading-tight mb-3 transition-all duration-600 delay-100 ease-out ${headVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
            Real Patients. Real Smiles.<br />
            <span className="text-[#0284c7]">Real Transformations.</span>
          </h2>
          <p className={`text-[#66737F] text-[0.98rem] sm:text-[1.05rem] leading-relaxed transition-all duration-600 delay-200 ease-out ${headVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
            Every smile tells a story. See how our patients have transformed their confidence through expert dental care at Mohan Dental Care, Surajpur.
          </p>
        </div>

        {/* Treatment Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {GALLERY_CASES.map((c, i) => (
            <button
              key={c.id}
              onClick={() => setActiveCase(i)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 border ${activeCase === i
                  ? 'bg-[#03213B] text-white border-[#03213B] shadow-md'
                  : 'bg-white text-[#66737F] border-[#E5E8E8] hover:border-[#123b5d]/40 hover:text-[#03213B]'
                }`}
            >
              {c.treatment}
            </button>
          ))}
        </div>

        {/* Active Case */}
        <div ref={ref} className={`transition-all duration-700 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {GALLERY_CASES.map((c, i) => (
            <div key={c.id} className={activeCase === i ? 'block' : 'hidden'}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center">
                {/* Before / After */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-amber-50 rounded-2xl p-4 border border-amber-200/60 shadow-sm text-center">
                    <div className="text-[0.65rem] font-bold uppercase tracking-widest text-amber-700 bg-amber-100 rounded-full px-3 py-1 inline-block mb-3">Before</div>
                    <div className="w-full h-40 sm:h-52 flex items-center justify-center px-4">
                      <BeforeSVG idx={i} />
                    </div>
                  </div>
                  <div className="bg-[#e0f2fe] rounded-2xl p-4 border border-[#0284c7]/30 shadow-sm text-center">
                    <div className="text-[0.65rem] font-bold uppercase tracking-widest text-[#0284c7] bg-white rounded-full px-3 py-1 inline-block mb-3">After</div>
                    <div className="w-full h-40 sm:h-52 flex items-center justify-center px-4">
                      <AfterSVG idx={i} />
                    </div>
                  </div>
                </div>

                {/* Info panel */}
                <div className={`bg-gradient-to-br ${c.gradient} rounded-3xl p-7 sm:p-9 border border-[#E5E8E8]`}>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#E5E8E8] text-[#123b5d] text-xs font-bold uppercase tracking-wider mb-5 shadow-sm">
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                    {c.treatment}
                  </div>
                  <h3 className="font-display font-bold text-[1.35rem] sm:text-[1.6rem] text-[#03213B] leading-snug mb-3">{c.desc}</h3>
                  <p className="text-[#66737F] text-[0.93rem] leading-relaxed mb-6">
                    Treatment performed by Dr. P.R. Rajwade at Mohan Dental Care, Surajpur using advanced clinical techniques and premium aesthetic materials.
                  </p>
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {[
                      { label: 'Treatment Sessions', val: c.sessions },
                      { label: 'Result Duration', val: c.duration },
                    ].map(({ label, val }) => (
                      <div key={label} className="bg-white rounded-xl p-3 border border-[#E5E8E8] shadow-sm">
                        <p className="text-[0.62rem] font-bold uppercase tracking-wider text-[#66737F] mb-1">{label}</p>
                        <p className="font-bold text-[0.95rem] text-[#03213B]">{val}</p>
                      </div>
                    ))}
                  </div>
                  <a
                    href={`https://wa.me/918839557607?text=${encodeURIComponent(`Hello, I am interested in ${c.treatment} at Mohan Dental Care. Please share details.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#03213B] hover:bg-[#133A5B] text-white font-bold text-[0.88rem] hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-200 shadow-md"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.6 0 0 0 1.333 4.993L2 22l5.233-1.37a9.95 9.95 0 0 0 4.779 1.216h.004c5.505 0 9.988-4.478 9.989-9.984 0-2.669-1.038-5.176-2.925-7.062A9.92 9.92 0 0 0 12.012 2z" />
                    </svg>
                    Ask About {c.treatment}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots nav */}
        <div className="flex justify-center gap-2 mt-8">
          {GALLERY_CASES.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveCase(i)}
              className={`rounded-full transition-all duration-300 ${activeCase === i ? 'w-7 h-2.5 bg-[#03213B]' : 'w-2.5 h-2.5 bg-[#E5E8E8] hover:bg-[#123b5d]/40'}`}
              aria-label={`Case ${i + 1}`}
            />
          ))}
        </div>

        {/* Bottom strip */}
        <div className="mt-12 bg-[#EEF1F1]/60 rounded-2xl px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4 border border-[#E5E8E8]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E8F1F8] flex items-center justify-center text-[#123b5d] flex-shrink-0">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                <circle cx="9" cy="9" r="1" fill="currentColor" />
                <circle cx="15" cy="9" r="1" fill="currentColor" />
              </svg>
            </div>
            <div>
              <p className="font-bold text-[0.95rem] text-[#03213B]">Want to see your smile transformation?</p>
              <p className="text-[0.82rem] text-[#66737F]">Book a free consultation and discuss your smile goals with Dr. Rajwade.</p>
            </div>
          </div>
          <a
            href="https://www.mohandentalclinic.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#03213B] text-[#03213B] hover:bg-[#03213B] hover:text-white font-bold text-[0.88rem] transition-all duration-200 whitespace-nowrap"
          >
            View More Cases →
          </a>
        </div>

      </div>
    </section>
  );
}
