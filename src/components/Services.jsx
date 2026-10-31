import { useState } from 'react';
import { useScrollReveal, useTilt } from '../utils';
import { ALL_SERVICES } from '../servicesData';

// ──────────────────────────────────────────────────────────────────────────────
// BADGE COLOR MAP
// ──────────────────────────────────────────────────────────────────────────────
const BADGE_COLORS = {
  Preventive: 'bg-teal-50 text-teal-700 border-teal-200',
  Diagnostic: 'bg-blue-50 text-blue-700 border-blue-200',
  Screening: 'bg-red-50 text-red-700 border-red-200',
  Restorative: 'bg-purple-50 text-purple-700 border-purple-200',
  Surgical: 'bg-orange-50 text-orange-700 border-orange-200',
  Emergency: 'bg-red-100 text-red-800 border-red-300',
  Orthodontic: 'bg-violet-50 text-violet-700 border-violet-200',
  Cosmetic: 'bg-pink-50 text-pink-700 border-pink-200',
  Pediatric: 'bg-green-50 text-green-700 border-green-200',
};

// ──────────────────────────────────────────────────────────────────────────────
// SERVICE CARD
// ──────────────────────────────────────────────────────────────────────────────
function ServiceCard({ svc, delay = 0, onClick }) {
  const [ref, visible] = useScrollReveal();
  const tilt = useTilt(5);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div
        {...tilt}
        onClick={onClick}
        className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-[0_4px_20px_-6px_rgba(3,43,83,0.06)] hover:shadow-[0_16px_35px_-10px_rgba(3,43,83,0.12)] hover:border-[#0284c7]/40 h-full cursor-pointer group active:scale-[0.98] transition-all duration-300 flex flex-col justify-between"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div>
          {/* Icon + badge row */}
          <div className="flex items-start justify-between mb-5 gap-2">
            <div className="w-12 h-12 rounded-xl bg-[#e0f2fe] text-[#0284c7] flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform duration-250 ease-out flex-shrink-0">
              <svg className="w-6 h-6 text-[#0284c7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2C8 2 5 5 5 9c0 3 2 6 3 9 1 3 2 4 4 4s3-1 4-4c1-3 3-6 3-9 0-4-3-7-7-7z" />
                <path d="M9 10h6" />
              </svg>
            </div>
            <span className="inline-block text-[0.65rem] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#e0f2fe] text-[#0284c7] border border-[#0284c7]/20 flex-shrink-0">
              {svc.badge}
            </span>
          </div>

          <h3 className="font-display font-bold text-[1.1rem] text-[#0f172a] mb-1 leading-snug group-hover:text-[#0284c7] transition-colors">{svc.title}</h3>
          <p className="text-[#0284c7] text-xs font-semibold mb-3 leading-snug">{svc.hindi}</p>
          <p className="text-[#475569] text-[0.91rem] leading-relaxed mb-5 line-clamp-3">{svc.shortDesc}</p>
        </div>

        <div>
          <div className="flex items-center gap-1.5 text-[#64748b] text-xs font-semibold mb-4 pt-3 border-t border-slate-100">
            <svg className="w-4 h-4 text-[#0284c7] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="8.5" /><path d="M12 7.5V12l3 2" />
            </svg>
            <span>{svc.duration}</span>
          </div>

          <div className="flex items-center justify-between text-[#032b53] text-xs font-bold transition-all group-hover:text-[#0284c7]">
            <span>Tap for details</span>
            <span className="group-hover:translate-x-[4px] transition-transform duration-250 ease-out text-sm">→</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ──────────────────────────────────────────────────────────────────────────────
// SERVICE DETAIL MODAL - bottom sheet on mobile, centered on desktop
// ──────────────────────────────────────────────────────────────────────────────
function ServiceModal({ svc, onClose }) {
  const [openFaq, setOpenFaq] = useState(null);
  const relatedServices = ALL_SERVICES.filter(s => svc.related?.includes(s.id));

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center bg-ink-950/75 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="bg-white w-full sm:max-w-2xl max-h-[92vh] sm:max-h-[88vh] overflow-y-auto modal-scroll rounded-t-[24px] sm:rounded-3xl shadow-[0_40px_100px_-20px_rgba(0,0,0,0.6)]"
        onClick={e => e.stopPropagation()}
      >
        {/* ── Gradient header ── */}
        <div className={`bg-gradient-to-br ${svc.color} px-5 sm:px-8 pt-6 pb-10 relative overflow-hidden`}>
          <div className="absolute -top-6 -right-6 w-32 h-32 bg-white/10 rounded-full pointer-events-none" />
          <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-white/10 rounded-full pointer-events-none" />

          {/* Mobile drag handle */}
          <div className="w-10 h-1 bg-white/40 rounded-full mx-auto mb-4 sm:hidden" />

          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/25 hover:bg-white/40 transition-colors flex items-center justify-center"
            style={{ minHeight: '32px' }}
          >
            <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M6 6l12 12M18 6l-12 12" />
            </svg>
          </button>

          <span className="inline-block text-[0.65rem] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white/25 text-white mb-3">
            {svc.badge}
          </span>
          <h2 className="font-display font-extrabold text-[1.2rem] sm:text-[1.6rem] text-white mb-1 pr-8 leading-tight">{svc.title}</h2>
          <p className="text-white/80 text-xs sm:text-sm font-semibold">{svc.hindi}</p>
          <p className="text-white/90 font-medium mt-2 text-[0.9rem] sm:text-[1rem] italic">"{svc.tagline}"</p>
        </div>

        {/* ── Body ── */}
        <div className="px-5 sm:px-8 py-6 sm:py-8">

          {/* About */}
          <div className="mb-7">
            <h3 className="font-display font-bold text-[1rem] text-ink-950 mb-4">About This Treatment</h3>
            {svc.overview.split('\n\n').map((para, i) => (
              <p key={i} className="text-ink-700 text-[0.9rem] sm:text-[0.95rem] leading-relaxed mb-3 last:mb-0">{para}</p>
            ))}
          </div>

          {/* Meta chips */}
          <div className="flex flex-wrap gap-2 sm:gap-3 mb-7">
            {[
              { icon: <circle cx="12" cy="12" r="8.5" />, path: <path d="M12 7.5V12l3 2" />, label: 'Duration', val: svc.duration },
              { icon: null, path: null, label: 'Frequency', val: svc.freq, isCalendar: true },
            ].map(({ label, val, isCalendar }) => (
              <div key={label} className="flex items-center gap-2 px-3 sm:px-4 py-2.5 rounded-2xl bg-[#E4E5E4]/60 border border-[#E4E5E4] min-w-0 max-w-full">
                <svg className="w-4 h-4 text-accent-500 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  {isCalendar ? (
                    <>
                      <rect x="3.5" y="5" width="17" height="15" rx="2.4" />
                      <line x1="3.5" y1="9.5" x2="20.5" y2="9.5" />
                      <line x1="8" y1="3" x2="8" y2="7" />
                      <line x1="16" y1="3" x2="16" y2="7" />
                    </>
                  ) : (
                    <>
                      <circle cx="12" cy="12" r="8.5" /><path d="M12 7.5V12l3 2" />
                    </>
                  )}
                </svg>
                <div className="min-w-0">
                  <p className="text-[0.6rem] font-bold uppercase tracking-wider text-ink-700">{label}</p>
                  <p className="text-[0.82rem] sm:text-[0.87rem] font-bold text-ink-950 truncate">{val}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Benefits + Steps grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-7">
            <div className="bg-[#E4E5E4]/50 rounded-2xl p-4 sm:p-5 border border-[#E4E5E4]/60">
              <h4 className="font-display font-bold text-[0.88rem] text-ink-950 mb-4 flex items-center gap-2">
                <svg className="w-4 h-4 text-teal-500 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12.5l4.5 4.5L19 7" />
                </svg>
                Key Benefits
              </h4>
              <ul className="flex flex-col gap-2">
                {svc.benefits.map(b => (
                  <li key={b} className="flex items-start gap-2 text-[0.84rem] text-ink-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-[6px] flex-shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#E4E5E4]/50 rounded-2xl p-4 sm:p-5 border border-[#E4E5E4]/60">
              <h4 className="font-display font-bold text-[0.88rem] text-ink-950 mb-4 flex items-center gap-2">
                <svg className="w-4 h-4 text-accent-500 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 12l2 2 4-4M12 3l7 3v6c0 4.8-3 8-7 9-4-1-7-4.2-7-9V6z" />
                </svg>
                Treatment Steps
              </h4>
              <ol className="flex flex-col gap-2">
                {svc.steps.map((s, i) => (
                  <li key={i} className="flex items-start gap-2 text-[0.84rem] text-ink-700">
                    <span className={`w-5 h-5 rounded-full bg-gradient-to-br ${svc.color} text-white text-[0.6rem] font-bold flex items-center justify-center flex-shrink-0 mt-0.5`}>
                      {i + 1}
                    </span>
                    {s}
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Aftercare */}
          {svc.aftercare && svc.aftercare.length > 0 && (
            <div className="bg-amber-50 border border-amber-100 rounded-2xl p-4 sm:p-5 mb-7">
              <h4 className="font-display font-bold text-[0.88rem] text-amber-900 mb-3 flex items-center gap-2">
                <svg className="w-4 h-4 text-amber-600 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 9v4M12 17h.01M10.29 3.86l-8.17 14A2 2 0 0 0 3.86 21h16.28a2 2 0 0 0 1.74-3l-8.17-14a2 2 0 0 0-3.48 0z" />
                </svg>
                Aftercare Instructions
              </h4>
              <ul className="flex flex-col gap-2">
                {svc.aftercare.map(a => (
                  <li key={a} className="flex items-start gap-2 text-[0.84rem] text-amber-900">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-[6px] flex-shrink-0" />
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* FAQ accordion */}
          <div className="mb-7">
            <h4 className="font-display font-bold text-[0.92rem] text-ink-950 mb-4">Frequently Asked Questions</h4>
            <div className="flex flex-col gap-2">
              {svc.faq.map((item, i) => (
                <div key={i} className="border border-[#E4E5E4] rounded-2xl overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-start justify-between px-4 sm:px-5 py-3.5 sm:py-4 text-left hover:bg-[#FBFDFD] transition-colors gap-3"
                    style={{ minHeight: '52px' }}
                  >
                    <span className="font-semibold text-[0.85rem] sm:text-[0.9rem] text-ink-950">{item.q}</span>
                    <svg
                      className={`w-4 h-4 text-accent-500 flex-shrink-0 mt-0.5 transition-transform duration-200 ${openFaq === i ? 'rotate-180' : ''}`}
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </button>
                  {openFaq === i && (
                    <div className="px-4 sm:px-5 pb-4 pt-3 text-ink-700 text-[0.84rem] sm:text-[0.88rem] leading-relaxed border-t border-[#E4E5E4] bg-[#FBFDFD]">
                      {item.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Related */}
          {relatedServices.length > 0 && (
            <div className="mb-7">
              <h4 className="font-display font-bold text-[0.88rem] text-ink-950 mb-3">Related Treatments</h4>
              <div className="flex flex-wrap gap-2">
                {relatedServices.map(r => (
                  <span key={r.id} className={`px-3 py-1.5 rounded-full text-xs font-bold border ${BADGE_COLORS[r.badge] || 'bg-gray-50 text-gray-600 border-gray-200'}`}>
                    {r.title}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Book CTA */}
          <a
            href={`https://wa.me/918839557607?text=${encodeURIComponent(`Hello Mohan Dental Care, I'd like to book / enquire about: ${svc.title}`)}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="w-full flex items-center justify-center gap-2.5 py-4 rounded-2xl bg-gradient-to-r from-teal-500 to-teal-600 text-white font-bold text-[0.93rem] sm:text-[0.97rem] shadow-[0_10px_30px_-8px_rgba(37,211,102,0.5)] hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-200"
          >
            <svg className="w-5 h-5 fill-white flex-shrink-0" viewBox="0 0 448 512">
              <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
            </svg>
            Book This Treatment on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}

// ──────────────────────────────────────────────────────────────────────────────
// FEATURED 6 TREATMENTS FOR HOMEPAGE
// ──────────────────────────────────────────────────────────────────────────────
const FEATURED_TREATMENTS = [
  {
    id: 'general-dentistry',
    title: 'General Dentistry',
    desc: 'Comprehensive checkups, gentle teeth cleaning, oral screenings, and durable tooth fillings for lasting oral health.',
    icon: (
      <svg className="w-6 h-6 text-[#123b5d]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2C8 2 5 5 5 9c0 3 2 6 3 9 1 3 2 4 4 4s3-1 4-4c1-3 3-6 3-9 0-4-3-7-7-7z" />
        <path d="M9 10h6" />
      </svg>
    ),
    matchId: 'cleaning',
  },
  {
    id: 'root-canal',
    title: 'Root Canal Treatment',
    desc: 'Precision single-visit RCT to relieve pain, eliminate deep tooth infection, and preserve your natural tooth.',
    icon: (
      <svg className="w-6 h-6 text-[#123b5d]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    matchId: 'rct',
  },
  {
    id: 'dental-implants',
    title: 'Dental Implants',
    desc: 'Permanent, durable tooth replacements and high-strength crowns that restore complete chewing and aesthetic confidence.',
    icon: (
      <svg className="w-6 h-6 text-[#123b5d]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="4" width="14" height="6" rx="2" />
        <line x1="12" y1="10" x2="12" y2="20" />
        <line x1="8" y1="14" x2="16" y2="14" />
        <line x1="9" y1="18" x2="15" y2="18" />
      </svg>
    ),
    matchId: 'crown-bridge',
  },
  {
    id: 'teeth-whitening',
    title: 'Teeth Whitening',
    desc: 'Professional clinic-grade whitening to safely lift stubborn stains, brightening your smile by several natural shades.',
    icon: (
      <svg className="w-6 h-6 text-[#123b5d]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l2.4 7.2L22 12l-7.6 2.8L12 22l-2.4-7.2L2 12l7.6-2.8z" />
      </svg>
    ),
    matchId: 'cleaning',
  },
  {
    id: 'clear-aligners',
    title: 'Clear Aligners',
    desc: 'Custom-fit transparent orthodontic aligners designed to straighten teeth discreetly, comfortably, and wire-free.',
    icon: (
      <svg className="w-6 h-6 text-[#123b5d]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
        <line x1="9" y1="9" x2="9.01" y2="9" />
        <line x1="15" y1="9" x2="15.01" y2="9" />
      </svg>
    ),
    matchId: 'braces',
  },
  {
    id: 'smile-makeover',
    title: 'Smile Makeover',
    desc: 'Complete aesthetic transformations combining natural translucency veneers, Zirconia crowns, and gum contouring.',
    icon: (
      <svg className="w-6 h-6 text-[#123b5d]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    matchId: 'cosmetic',
  },
];

// ──────────────────────────────────────────────────────────────────────────────
// SERVICE TEASER - homepage
// ──────────────────────────────────────────────────────────────────────────────
export function ServiceTeaser({ setActivePage }) {
  const [headRef, headVisible] = useScrollReveal();

  return (
    <section id="treatments" className="py-16 sm:py-24 bg-[#F8FAFA]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">

        {/* Header */}
        <div
          ref={headRef}
          className="text-center max-w-[680px] mx-auto mb-12 sm:mb-16"
        >
          <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8F1F8] border border-[#123b5d]/20 text-[#123b5d] text-xs font-bold tracking-[0.08em] uppercase mb-4 transition-all duration-500 ease-out ${headVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
            OUR CLINICAL SERVICES
          </div>
          <h2 className={`font-display font-bold text-[clamp(1.85rem,3.2vw,2.5rem)] text-[#03213B] leading-tight mb-3 transition-all duration-600 delay-100 ease-out ${headVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
            Complete Dental Care, All in One Place
          </h2>
          <p className={`text-[#66737F] text-[0.98rem] sm:text-[1.05rem] leading-relaxed transition-all duration-600 delay-200 ease-out ${headVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
            From preventive checkups to advanced smile transformations, personalized care for every stage of your dental journey.
          </p>
        </div>

        {/* 6 Clean Informational Cards Grid (No dead clicks) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {FEATURED_TREATMENTS.map((item, i) => (
            <div
              key={item.id}
              className={`bg-white rounded-2xl p-7 sm:p-8 border border-[#E5E8E8] shadow-[0_4px_20px_-6px_rgba(3,33,59,0.05)] hover:shadow-[0_12px_28px_-8px_rgba(3,33,59,0.09)] hover:-translate-y-1 transition-all duration-300 ease-out flex flex-col justify-between group ${headVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                }`}
              style={{ transitionDelay: headVisible ? `${100 + (i % 3) * 100}ms` : '0ms' }}
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#E8F1F8] flex items-center justify-center mb-6 transition-transform duration-250 ease-out group-hover:scale-105">
                  {item.icon}
                </div>
                <h3 className="font-display font-bold text-[1.15rem] text-[#03213B] mb-2 transition-colors">
                  {item.title}
                </h3>
                <p className="text-[#66737F] text-[0.93rem] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-10 sm:mt-14">
          <button
            onClick={() => { setActivePage('services'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full border border-[#03213B] text-[#03213B] hover:bg-[#03213B] hover:text-white font-bold text-[0.94rem] hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-200"
          >
            <span>View All 12 Clinical Services</span>
            <span className="group-hover:translate-x-[3px] transition-transform duration-200">→</span>
          </button>
        </div>

      </div>
    </section>
  );
}

// ──────────────────────────────────────────────────────────────────────────────
// FULL SERVICES PAGE
// ──────────────────────────────────────────────────────────────────────────────
export function ServicesPage() {
  const GROUPS = [...new Set(ALL_SERVICES.map(s => s.group))];
  const [selected, setSelected] = useState(null);
  const [activeGroup, setActiveGroup] = useState(null);
  const [headRef, headVisible] = useScrollReveal();

  const displayGroups = activeGroup ? [activeGroup] : GROUPS;
  const grouped = (g) => ALL_SERVICES.filter(s => s.group === g);

  return (
    <div className="pt-[68px] sm:pt-[76px] bg-[#F8FAFA]">
      {selected && <ServiceModal svc={selected} onClose={() => setSelected(null)} />}

      {/* ── Page hero ── */}
      <div className="bg-[#EEF1F1]/60 py-12 sm:py-16 relative overflow-hidden border-b border-[#E5E8E8]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 relative">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8F1F8] border border-[#123b5d]/20 text-[#123b5d] text-xs font-bold tracking-[0.08em] uppercase mb-4">
            SPECIALISED CLINICAL CARE
          </div>
          <h2 className="font-display font-bold text-[clamp(1.85rem,3.4vw,2.7rem)] text-[#03213B] mb-3">Our 12 Clinical Services</h2>
          <p className="text-[#66737F] text-[0.98rem] sm:text-[1.05rem] max-w-[58ch] mb-8">
            Complete oral care at one address on M.G. Road, Surajpur. Tap any card for full clinical details, treatment steps, aftercare, and patient FAQs.
          </p>

          <div className="flex flex-wrap gap-3">
            {[
              { num: '12', label: 'Services' },
              { num: '5', label: 'Specialties' },
              { num: 'Expert', label: 'Qualified Doctor' },
              { num: '9AM–8PM', label: 'Daily Hours' },
            ].map(({ num, label }) => (
              <div key={label} className="px-4 py-2.5 bg-white rounded-2xl shadow-sm border border-[#E5E8E8] text-center">
                <p className="font-display font-extrabold text-[0.95rem] sm:text-[1.1rem] text-[#03213B]">{num}</p>
                <p className="text-[0.62rem] sm:text-[0.7rem] font-semibold text-[#66737F] uppercase tracking-wide">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Sticky filter tabs ── */}
      <div className="sticky top-[72px] sm:top-[76px] z-30 bg-white/98 backdrop-blur-md border-b border-[#E5E8E8] shadow-[0_2px_10px_-4px_rgba(3,33,59,0.08)]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 py-2.5 flex items-center gap-3">
          {/* Filter label */}
          <span className="hidden sm:flex items-center gap-1.5 text-[0.68rem] font-bold uppercase tracking-[0.1em] text-[#66737F] flex-shrink-0 border-r border-[#E5E8E8] pr-3 mr-1">
            <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
            </svg>
            Filter
          </span>
          {/* Scrollable tabs */}
          <div className="flex gap-2 overflow-x-auto scrollbar-hide flex-1">
            <button
              onClick={() => setActiveGroup(null)}
              className={`flex-shrink-0 px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-200 ${!activeGroup ? 'bg-[#03213B] text-white shadow-sm' : 'bg-[#EEF1F1] text-[#66737F] hover:bg-[#E5E8E8] hover:text-[#03213B]'}`}
            >
              All (12)
            </button>
            {GROUPS.map(g => (
              <button
                key={g}
                onClick={() => setActiveGroup(activeGroup === g ? null : g)}
                className={`flex-shrink-0 px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-200 whitespace-nowrap ${activeGroup === g ? 'bg-[#03213B] text-white shadow-sm' : 'bg-[#EEF1F1] text-[#66737F] hover:bg-[#E5E8E8] hover:text-[#03213B]'}`}
              >
                {g} ({grouped(g).length})
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Services by group ── */}
      <div className="py-10 sm:py-14 max-w-[1180px] mx-auto px-4 sm:px-6">
        {displayGroups.map((group, gi) => (
          <div key={group} className="mb-10 sm:mb-16">
            <div
              ref={headRef}
              className={`flex items-center gap-3 mb-5 sm:mb-8 transition-all duration-700 ${headVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            >
              <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-ink-950 text-white text-[0.72rem] font-display font-bold flex items-center justify-center shadow-[0_4px_12px_-4px_rgba(21,19,15,0.4)] flex-shrink-0">
                {gi + 1}
              </span>
              <div>
                <h2 className="font-display font-bold text-[1.1rem] sm:text-[1.35rem] text-ink-950 leading-tight">{group}</h2>
                <p className="text-ink-700 text-xs font-semibold">{grouped(group).length} treatment{grouped(group).length > 1 ? 's' : ''}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {grouped(group).map((svc, i) => (
                <ServiceCard key={svc.id} svc={svc} delay={i * 80} onClick={() => setSelected(svc)} />
              ))}
            </div>
          </div>
        ))}

        {/* ── Bottom CTA ── */}
        <div className="mt-4 bg-ink-950 rounded-2xl sm:rounded-3xl px-6 sm:px-10 py-10 flex flex-wrap items-center justify-between gap-6 relative overflow-hidden">
          <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-accent-500/15 rounded-full blur-3xl pointer-events-none" />
          <div className="relative max-w-[480px]">
            <h3 className="font-display font-bold text-[1.1rem] sm:text-[1.35rem] text-white mb-2">Not sure which treatment you need?</h3>
            <p className="text-[#c9c3ba] text-[0.88rem] sm:text-[0.95rem]">
              Send us a message on WhatsApp and Dr. Rajwade will guide you to the right treatment.
            </p>
          </div>
          <a
            href="https://wa.me/918839557607"
            target="_blank"
            rel="noopener noreferrer"
            className="relative btn-shimmer flex items-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-teal-500 to-teal-600 text-white font-bold shadow-[0_14px_30px_-8px_rgba(37,211,102,0.5)] hover:-translate-y-1 active:scale-[0.98] transition-all duration-200 whitespace-nowrap"
          >
            <svg className="w-5 h-5 fill-white flex-shrink-0" viewBox="0 0 448 512">
              <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
            </svg>
            Ask Dr. Rajwade on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
