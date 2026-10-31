import { useScrollReveal, getAssetUrl } from '../utils';

const TECH_ITEMS = [
  {
    title: 'Digital X-Ray (RVG)',
    desc: 'Instant chairside imaging with significantly reduced radiation exposure, enabling fast, accurate diagnosis during your visit.',
    img: 'images/xray.webp',
    icon: (
      <svg className="w-5 h-5 text-[#123b5d]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    title: 'Modern Dental Equipment',
    desc: 'High-precision rotary endodontics and premium dental restorative materials including Zirconia and EMAX for natural aesthetics.',
    img: 'images/treatment.webp',
    icon: (
      <svg className="w-5 h-5 text-[#123b5d]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2C8 2 5 5 5 9c0 3 2 6 3 9 1 3 2 4 4 4s3-1 4-4c1-3 3-6 3-9 0-4-3-7-7-7z" />
      </svg>
    ),
  },
  {
    title: 'Advanced Sterilization',
    desc: 'Strict multi-tier hospital-grade autoclaving and sanitized operatory protocols ensuring 100% patient safety and hygiene.',
    img: 'images/sterilization.webp',
    icon: (
      <svg className="w-5 h-5 text-[#123b5d]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: 'Comfort-focused Treatment',
    desc: 'Ergonomic treatment chairs, gentle ultrasonic plaque scaling, and an anxiety-free environment suited for patients of all ages.',
    img: 'images/reception.webp',
    icon: (
      <svg className="w-5 h-5 text-[#123b5d]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
];

export default function Technology({ _isAbout = false }) {
  const [headRef, headVisible] = useScrollReveal();

  return (
    <section id="technology" className="py-16 sm:py-24 bg-[#EEF1F1]/50 relative">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div
          ref={headRef}
          className="text-center max-w-[640px] mx-auto mb-12 sm:mb-16"
        >
          <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8F1F8] border border-[#123b5d]/20 text-[#123b5d] text-xs font-bold tracking-[0.08em] uppercase mb-4 transition-all duration-500 ease-out ${headVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
            CLINICAL EXCELLENCE
          </div>
          <h2 className={`font-display font-bold text-[clamp(1.85rem,3.2vw,2.5rem)] text-[#03213B] leading-tight mb-3 transition-all duration-600 delay-100 ease-out ${headVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
            Modern Technology. Better Dental Care.
          </h2>
          <p className={`text-[#66737F] text-[0.98rem] sm:text-[1.05rem] leading-relaxed transition-all duration-600 delay-200 ease-out ${headVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
            Advanced diagnostic imaging, sterile instruments, and refined materials that make visits faster, gentler, and more predictable.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TECH_ITEMS.map((item, i) => (
            <div
              key={item.title}
              className={`group bg-white rounded-2xl overflow-hidden border border-[#E5E8E8] shadow-[0_4px_20px_-6px_rgba(3,33,59,0.05)] hover:shadow-[0_12px_30px_-8px_rgba(3,33,59,0.1)] hover:-translate-y-1 transition-all duration-300 ease-out flex flex-col ${
                headVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
              style={{ transitionDelay: headVisible ? `${100 + i * 80}ms` : '0ms' }}
            >
              {/* Image Preview */}
              <div className="relative h-44 overflow-hidden bg-[#EEF1F1]">
                <img
                  src={getAssetUrl(item.img)}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                />
                <div className="absolute top-3 right-3 w-8 h-8 rounded-lg bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-sm transition-transform duration-250 ease-out group-hover:scale-105">
                  {item.icon}
                </div>
              </div>

              {/* Text */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display font-bold text-[1.05rem] text-[#03213B] mb-2 group-hover:text-[#123b5d] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[#66737F] text-xs sm:text-[0.88rem] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
