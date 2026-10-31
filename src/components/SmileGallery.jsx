import { useState } from 'react';
import { useScrollReveal, getAssetUrl } from '../utils';

const GALLERY_CASES = [
  {
    id: 1,
    treatment: 'Teeth Whitening',
    desc: 'Professional whitening - 8 shades brighter in a single session',
    gradient: 'from-amber-50 to-yellow-50',
    sessions: '1–2',
    duration: '2–3 Years',
    beforeImg: 'images/smile-before.webp',
    afterImg: 'images/smile-after.webp',
    beforeTag: 'Discoloured Teeth',
    afterTag: '8 Shades Brighter',
  },
  {
    id: 2,
    treatment: 'Smile Makeover',
    desc: 'Full smile transformation with ceramic veneers & gum contouring',
    gradient: 'from-blue-50 to-sky-50',
    sessions: '3–4',
    duration: 'Permanent',
    beforeImg: 'images/makeover-before.webp',
    afterImg: 'images/makeover-after.webp',
    beforeTag: 'Chipped & Uneven',
    afterTag: 'Veneers Restored',
  },
  {
    id: 3,
    treatment: 'Clear Aligners',
    desc: 'Invisible orthodontics - natural, aligned smile in 9 months',
    gradient: 'from-teal-50 to-emerald-50',
    sessions: '8–12',
    duration: 'Permanent',
    beforeImg: 'images/aligners-before.webp',
    afterImg: 'images/aligners-after.webp',
    beforeTag: 'Crowded / Misaligned',
    afterTag: 'Straightened & Aligned',
  },
  {
    id: 4,
    treatment: 'Dental Implants',
    desc: 'Missing tooth restored permanently with a Zirconia implant crown',
    gradient: 'from-violet-50 to-purple-50',
    sessions: '3–4',
    duration: 'Permanent',
    beforeImg: 'images/implant-before.webp',
    afterImg: 'images/implant-after.webp',
    beforeTag: 'Missing / Broken Teeth',
    afterTag: 'Permanent Implant Smile',
  },
];

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

        {/* Treatment Tabs: Single row on mobile with horizontal scroll */}
        <div className="flex flex-nowrap sm:flex-wrap items-center justify-start sm:justify-center gap-2.5 sm:gap-3 mb-8 sm:mb-10 overflow-x-auto no-scrollbar py-1 px-4 sm:px-0 -mx-4 sm:mx-0">
          {GALLERY_CASES.map((c, i) => (
            <button
              key={c.id}
              onClick={() => setActiveCase(i)}
              className={`whitespace-nowrap flex-shrink-0 px-4 py-2 sm:py-2.5 rounded-full text-xs font-bold transition-all duration-200 border ${activeCase === i
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
                {/* Real Before / After Comparison Cards */}
                <div className="grid grid-cols-2 gap-3.5 sm:gap-5">
                  {/* Before Photo Card */}
                  <div className="group bg-white rounded-2xl overflow-hidden border border-amber-200/80 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col">
                    <div className="relative w-full aspect-[4/3] bg-neutral-100 overflow-hidden">
                      <img
                        src={getAssetUrl(c.beforeImg)}
                        alt={`${c.treatment} Before Treatment - Mohan Dental Care`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute top-2.5 left-2.5">
                        <span className="text-[0.62rem] sm:text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-50/95 backdrop-blur-sm border border-amber-200/80 rounded-full px-2.5 sm:px-3 py-0.5 sm:py-1 shadow-sm">
                          Before
                        </span>
                      </div>
                    </div>
                    <div className="py-2.5 px-2 text-center bg-amber-50/50 border-t border-amber-100/70">
                      <p className="text-[0.72rem] sm:text-xs font-semibold text-amber-900 truncate">
                        {c.beforeTag}
                      </p>
                    </div>
                  </div>

                  {/* After Photo Card */}
                  <div className="group bg-white rounded-2xl overflow-hidden border border-[#0284c7]/40 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col ring-1 ring-[#0284c7]/20">
                    <div className="relative w-full aspect-[4/3] bg-neutral-100 overflow-hidden">
                      <img
                        src={getAssetUrl(c.afterImg)}
                        alt={`${c.treatment} After Treatment - Mohan Dental Care`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute top-2.5 left-2.5">
                        <span className="text-[0.62rem] sm:text-xs font-bold uppercase tracking-wider text-[#0284c7] bg-white/95 backdrop-blur-sm border border-[#0284c7]/40 rounded-full px-2.5 sm:px-3 py-0.5 sm:py-1 shadow-sm">
                          After
                        </span>
                      </div>
                      <div className="absolute top-2.5 right-2.5">
                        <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#0284c7] text-white flex items-center justify-center text-[0.65rem] sm:text-xs font-bold shadow-sm">
                          ✓
                        </span>
                      </div>
                    </div>
                    <div className="py-2.5 px-2 text-center bg-sky-50/60 border-t border-sky-100">
                      <p className="text-[0.72rem] sm:text-xs font-semibold text-[#0284c7] truncate">
                        {c.afterTag}
                      </p>
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
                    <svg className="w-4 h-4 fill-white flex-shrink-0" viewBox="0 0 448 512">
                      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                    </svg>
                    Ask About {c.treatment}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots nav */}
        <div className="flex justify-center items-center gap-2 mt-8 dot-nav">
          {GALLERY_CASES.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActiveCase(i)}
              style={{ minHeight: 'unset', minWidth: 'unset', padding: 0 }}
              className={`pagination-dot rounded-full transition-all duration-300 border-0 focus:outline-none cursor-pointer ${
                activeCase === i
                  ? 'w-2.5 h-2.5 sm:w-3 sm:h-3 bg-[#03213B] ring-2 ring-[#03213B]/25 scale-110'
                  : 'w-2 sm:w-2.5 h-2 sm:h-2.5 bg-[#CBD5E1] hover:bg-[#94A3B8]'
              }`}
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
            href="#booking"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#03213B] hover:bg-[#133A5B] text-white font-bold text-[0.88rem] transition-all duration-200 whitespace-nowrap shadow-sm"
          >
            Book Consultation →
          </a>
        </div>

      </div>
    </section>
  );
}
