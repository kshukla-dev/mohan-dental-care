import { getAssetUrl } from '../utils';

export default function Hero({ _setActivePage }) {
  const scrollToBooking = (e) => {
    e?.preventDefault();
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  const features = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-[#0284c7]">
          <path d="M12 2C8 2 5 5 5 9c0 3 2 6 3 9 1 3 2 4 4 4s3-1 4-4c1-3 3-6 3-9 0-4-3-7-7-7z" />
          <path d="M9 10h6" />
        </svg>
      ),
      title: 'Advanced Technology',
      desc: 'Modern & painless treatment',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-[#0284c7]">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      title: 'Patient Friendly',
      desc: 'Comfortable & caring environment',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-[#0284c7]">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      ),
      title: 'Healthy Smiles',
      desc: 'For a brighter tomorrow',
    },
  ];

  return (
    <section
      id="home"
      className="relative w-full flex flex-col justify-between bg-[#F8FAFA] lg:bg-slate-900 lg:min-h-[clamp(620px,calc(100vh-72px),850px)] lg:overflow-hidden"
    >

      {/* ── MOBILE: Hero Image at top (clearly visible, no dark overlay) ── */}
      <div className="relative w-full h-[275px] sm:h-[330px] lg:hidden overflow-hidden bg-slate-100">
        <img
          src={getAssetUrl('images/hero-desktop.webp')}
          alt="Mohan Dental Care Clinic Surajpur"
          className="w-full h-full object-cover object-[center_20%]"
        />
        {/* Pagination indicator dots */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/25 backdrop-blur-sm z-10 pointer-events-none">
          <span className="w-2 h-2 rounded-full bg-white shadow-sm"></span>
          <span className="w-1.5 h-1.5 rounded-full bg-white/60"></span>
          <span className="w-1.5 h-1.5 rounded-full bg-white/60"></span>
        </div>
      </div>

      {/* ── DESKTOP: Background image & subtle contrast gradient ── */}
      <img
        src={getAssetUrl('images/hero-desktop.webp')}
        alt="Mohan Dental Care Modern Operatory Surajpur"
        className="absolute inset-0 w-full h-full object-cover object-[center_35%] hidden lg:block pointer-events-none"
        style={{ zIndex: 0 }}
      />
      <div
        className="absolute inset-0 hidden lg:block pointer-events-none"
        style={{
          zIndex: 1,
          background: 'linear-gradient(90deg, rgba(2,6,23,0.02) 0%, rgba(2,6,23,0.05) 50%, rgba(2,6,23,0.18) 100%)',
        }}
      />

      {/* ── MAIN CONTENT (Card) ── */}
      <div
        className="relative flex-1 w-full max-w-[1360px] mx-auto px-0 sm:px-4 lg:px-6 flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-6 py-0 lg:py-6"
        style={{ zIndex: 2, minHeight: 0 }}
      >
        {/* Desktop left spacer */}
        <div className="hidden lg:block lg:flex-1" />

        {/* Card: on mobile full width bottom sheet with rounded top corners overlapping image */}
        <div className="w-full sm:max-w-[480px] lg:max-w-[390px] xl:max-w-[420px] -mt-7 lg:mt-0 relative z-10 bg-white lg:bg-white/95 lg:backdrop-blur-md rounded-t-[32px] sm:rounded-2xl lg:rounded-3xl shadow-[0_-8px_25px_rgba(0,15,40,0.08)] lg:shadow-[0_25px_60px_-15px_rgba(0,15,40,0.35)] px-5 pt-7 pb-6 sm:p-6 lg:p-6 border-t border-slate-100 sm:border lg:border-white/95 my-0 lg:my-auto">

          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#e0f2fe] text-[#0284c7] text-[0.67rem] font-bold tracking-[0.06em] uppercase mb-2.5">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
            MOHAN DENTAL CARE &bull; SURAJPUR
          </div>

          {/* Headline */}
          <h1 className="font-display font-black leading-[1.12] mb-2 sm:mb-2.5 text-[clamp(1.65rem,2.8vw,2.2rem)] text-[#0b2545] tracking-tight">
            <span className="sr-only">Mohan Dental Care Surajpur - Best Dentist in Surajpur &amp; Ambikapur | </span>
            Healthy Teeth.<br />
            <span className="text-[#0284c7]">Confident Smiles.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-[#475569] text-[0.84rem] sm:text-[0.88rem] leading-relaxed mb-3.5">
            Personalized dental care with modern technology, experienced treatment and a comfortable patient-first approach right in the heart of Surajpur.
          </p>

          {/* Doctor */}
          <div className="flex items-center gap-3.5 mb-3.5 pb-3.5 border-b border-slate-100">
            <div className="w-12 h-12 sm:w-[52px] sm:h-[52px] rounded-full overflow-hidden flex-shrink-0 ring-2 ring-[#0284c7]/25 bg-slate-100 shadow-sm">
              <img
                src={getAssetUrl('images/dr_p_r_rajwade.webp')}
                alt="Dr. P. R. Rajwade - Chief Dental Surgeon at Mohan Dental Care Surajpur"
                className="w-full h-full object-contain scale-[2.7] origin-[54%_22%]"
              />
            </div>
            <div>
              <p className="font-bold text-[0.92rem] text-[#0b2545] leading-snug">Dr. P.R. Rajwade</p>
              <p className="text-[0.72rem] text-[#64748b]">Professional Dental Care</p>
              <p className="text-[0.68rem] text-[#0284c7] font-semibold flex items-center gap-1 mt-0.5">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c3 3 9 3 12 0v-5" />
                </svg>
                Govt. Dental College Raipur
              </p>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col gap-2.5">
            <button
              onClick={scrollToBooking}
              className="btn-shimmer w-full flex items-center justify-between px-5 py-3 rounded-xl font-bold text-[0.88rem] text-white bg-[#0a2560] hover:bg-[#061840] shadow-[0_8px_20px_-6px_rgba(10,37,96,0.40)] hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-200"
            >
              <span className="flex items-center gap-2">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <rect x="3.5" y="5" width="17" height="15" rx="2.4" />
                  <line x1="3.5" y1="9.5" x2="20.5" y2="9.5" />
                  <line x1="8" y1="3" x2="8" y2="7" />
                  <line x1="16" y1="3" x2="16" y2="7" />
                </svg>
                Book an Appointment
              </span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 opacity-70">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>

            <a
              href="tel:+918839557607"
              className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-[0.88rem] text-[#0a2560] border-2 border-[#0a2560]/20 hover:border-[#0a2560]/60 hover:bg-[#0a2560]/5 transition-all duration-200"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-[#0284c7]">
                <path d="M7 3.5c-2 0-3.5 1.8-3.2 3.7C4.7 14.6 9.4 19.3 16.8 20.2c1.9.3 3.7-1.2 3.7-3.2v-1.8c0-.6-.4-1.1-1-1.3l-3.4-1.1c-.5-.2-1.1 0-1.4.4l-1 1.3c-2.3-1.1-4.1-2.9-5.2-5.2l1.3-1c.4-.3.6-.9.4-1.4L9.1 3.5c-.2-.6-.7-1-1.3-1H7z" />
              </svg>
              Call 8839557607
            </a>
          </div>
        </div>
      </div>

      {/* ── FEATURES STRIP ── */}
      <div
        className="relative flex-shrink-0 w-full px-4 sm:px-6 pt-3 pb-6 sm:pb-6 lg:pt-0 lg:pb-6"
        style={{ zIndex: 3 }}
      >
        <div
          className="w-full max-w-[1360px] mx-auto rounded-xl sm:rounded-2xl overflow-hidden shadow-sm lg:shadow-lg border border-slate-200/80 lg:border-white/70 p-2 bg-white/95 backdrop-blur-md"
        >
          <div className="grid grid-cols-3 divide-x divide-slate-200/80">
            {features.map(({ icon, title, desc }) => (
              <div key={title} className="flex items-center gap-2 sm:gap-3 px-2 sm:px-4 py-2 sm:py-2.5">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center bg-[#e0f2fe]">
                  {icon}
                </div>
                <div className="min-w-0">
                  <p className="font-bold text-[0.72rem] sm:text-[0.8rem] text-[#0b2545] leading-tight truncate">{title}</p>
                  <p className="text-[0.62rem] sm:text-[0.7rem] text-[#64748b] leading-tight truncate mt-0.5">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
