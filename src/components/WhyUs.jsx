import { useScrollReveal } from '../utils';

const WHY_ITEMS = [
  {
    step: '01',
    title: 'Comprehensive Care',
    desc: 'From routine checkups and cleanings to complex root canals, dental implants, wisdom tooth surgery, and full smile makeovers under one roof.',
    icon: (
      <svg className="w-6 h-6 text-[#123b5d]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    step: '02',
    title: 'Modern Equipment',
    desc: 'Chairside digital RVG X-rays with reduced radiation, modern ultrasonic scaling, and high-strength aesthetic materials like Zirconia and EMAX.',
    icon: (
      <svg className="w-6 h-6 text-[#123b5d]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    step: '03',
    title: 'Comfortable Treatment',
    desc: 'Gentle, unhurried chairside care focused on patient comfort, clear treatment explanations, and stress-free dental visits for every age group.',
    icon: (
      <svg className="w-6 h-6 text-[#123b5d]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
];

export default function WhyUs() {
  const [headRef, headVisible] = useScrollReveal();

  return (
    <section className="py-16 sm:py-24 bg-[#EEF1F1]/50 relative">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div
          ref={headRef}
          className="text-center max-w-[620px] mx-auto mb-12 sm:mb-16"
        >
          <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8F1F8] border border-[#123b5d]/20 text-[#123b5d] text-xs font-bold tracking-[0.08em] uppercase mb-4 transition-all duration-500 ease-out ${headVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
            OUR DENTAL PHILOSOPHY
          </div>
          <h2 className={`font-display font-bold text-[clamp(1.85rem,3.2vw,2.5rem)] text-[#03213B] leading-tight mb-3 transition-all duration-600 delay-100 ease-out ${headVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
            Why Patients Choose Mohan Dental Care
          </h2>
          <p className={`text-[#66737F] text-[0.98rem] sm:text-[1.05rem] leading-relaxed transition-all duration-600 delay-200 ease-out ${headVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
            Personalized treatment, advanced equipment, and a calm, transparent chairside manner trusted by families.
          </p>
        </div>

        {/* 3 Clean Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {WHY_ITEMS.map((item, i) => (
            <div
              key={item.title}
              className={`group bg-white rounded-2xl p-7 sm:p-8 border border-[#E5E8E8] shadow-[0_4px_20px_-6px_rgba(3,33,59,0.05)] hover:shadow-[0_12px_30px_-10px_rgba(3,33,59,0.12)] hover:-translate-y-1 transition-all duration-300 ease-out flex flex-col justify-between ${
                headVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
              style={{ transitionDelay: headVisible ? `${150 + i * 100}ms` : '0ms' }}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#E8F1F8] flex items-center justify-center transition-transform duration-250 ease-out group-hover:scale-105 group-hover:-translate-y-0.5">
                    {item.icon}
                  </div>
                  <span className="font-display font-extrabold text-2xl text-[#E5E8E8] tracking-tight">
                    {item.step}
                  </span>
                </div>
                <h3 className="font-display font-bold text-[1.2rem] text-[#03213B] mb-3">
                  {item.title}
                </h3>
                <p className="text-[#66737F] text-[0.94rem] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
