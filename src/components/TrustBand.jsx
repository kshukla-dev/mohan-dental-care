import { useScrollReveal } from '../utils';

const JOURNEY_STEPS = [
  {
    step: '01',
    title: 'Book Appointment',
    desc: 'Choose your convenient time online via our simple form, WhatsApp, or direct call.',
    icon: (
      <svg className="w-5 h-5 text-[#123b5d]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3.5" y="5" width="17" height="15" rx="2.4" />
        <line x1="3.5" y1="9.5" x2="20.5" y2="9.5" />
        <line x1="8" y1="3" x2="8" y2="7" />
        <line x1="16" y1="3" x2="16" y2="7" />
      </svg>
    ),
  },
  {
    step: '02',
    title: 'Consultation',
    desc: 'Comprehensive clinical examination, digital RVG X-ray imaging, and discussion of concerns.',
    icon: (
      <svg className="w-5 h-5 text-[#123b5d]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    step: '03',
    title: 'Personalized Plan',
    desc: 'Clear, transparent treatment recommendations tailored specifically to your clinical goals.',
    icon: (
      <svg className="w-5 h-5 text-[#123b5d]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  },
  {
    step: '04',
    title: 'Smile Journey',
    desc: 'Gentle, modern treatment followed by preventive guidance for a lasting, confident smile.',
    icon: (
      <svg className="w-5 h-5 text-[#123b5d]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
];

const REVIEWS = [
  {
    name: 'Sunil Verma',
    treatment: 'Root Canal & Zirconia Crown',
    rating: 5,
    text: 'Dr. Rajwade performed my root canal with virtually no pain. The digital X-ray was right next to the chair, and the crown fits perfectly. Very clean clinic in Surajpur.',
  },
  {
    name: 'Priyanka Patel',
    treatment: 'Teeth Cleaning & Scaling',
    rating: 5,
    text: 'Extremely gentle scaling experience. Dr. Rajwade explained how to brush properly to prevent future tartar. Transparent approach and no unnecessary procedures.',
  },
  {
    name: 'Rajesh Agrawal',
    treatment: 'Dental Alignment Consultation',
    rating: 5,
    text: 'Highly professional doctor. He spent time listening to my concerns and gave me honest options. Very modern clinic setup with comfortable chairs.',
  },
];

export default function TrustBand() {
  const [journeyRef, journeyVisible] = useScrollReveal();
  const [reviewsRef, reviewsVisible] = useScrollReveal();
  const [ctaRef, ctaVisible] = useScrollReveal();

  return (
    <>
      {/* ── 14. PATIENT JOURNEY ── */}
      <section className="py-16 sm:py-24 bg-[#F8FAFA] border-t border-[#E5E8E8]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div
            ref={journeyRef}
            className="text-center max-w-[620px] mx-auto mb-12 sm:mb-16"
          >
            <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8F1F8] border border-[#123b5d]/20 text-[#123b5d] text-xs font-bold tracking-[0.08em] uppercase mb-4 transition-all duration-500 ease-out ${journeyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
            SIMPLE, TRANSPARENT CARE
            </div>
            <h2 className={`font-display font-bold text-[clamp(1.85rem,3.2vw,2.5rem)] text-[#03213B] leading-tight mb-3 transition-all duration-600 delay-100 ease-out ${journeyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
              Your Patient Journey
            </h2>
            <p className={`text-[#66737F] text-[0.98rem] sm:text-[1.05rem] leading-relaxed transition-all duration-600 delay-200 ease-out ${journeyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
              We ensure your dental treatment is completely clear, relaxed, and comfortable from first contact to recovery.
            </p>
          </div>

          {/* Timeline Grid: Horizontal on Desktop, Vertical on Mobile */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            {JOURNEY_STEPS.map((item, i) => (
              <div
                key={item.step}
                className={`group bg-white rounded-2xl p-6 border border-[#E5E8E8] shadow-[0_4px_20px_-6px_rgba(3,33,59,0.05)] hover:shadow-[0_12px_28px_-8px_rgba(3,33,59,0.09)] hover:-translate-y-1 transition-all duration-300 ease-out relative flex flex-col justify-between ${
                  journeyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                }`}
                style={{ transitionDelay: journeyVisible ? `${100 + i * 80}ms` : '0ms' }}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#E8F1F8] flex items-center justify-center transition-transform duration-250 ease-out group-hover:scale-105 group-hover:-translate-y-0.5">
                      {item.icon}
                    </div>
                    <span className="font-display font-extrabold text-xl text-[#03213B]/20">
                      {item.step}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-[1.1rem] text-[#03213B] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[#66737F] text-xs sm:text-[0.9rem] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 15. PATIENT REVIEWS ── */}
      <section id="reviews" className="py-16 sm:py-24 bg-[#EEF1F1]/50 border-t border-[#E5E8E8]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div
            ref={reviewsRef}
            className="text-center max-w-[620px] mx-auto mb-12 sm:mb-16"
          >
            <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8F1F8] border border-[#123b5d]/20 text-[#123b5d] text-xs font-bold tracking-[0.08em] uppercase mb-4 transition-all duration-500 ease-out ${reviewsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
            PATIENT EXPERIENCES
            </div>
            <h2 className={`font-display font-bold text-[clamp(1.85rem,3.2vw,2.5rem)] text-[#03213B] leading-tight mb-3 transition-all duration-600 delay-100 ease-out ${reviewsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
              What Our Patients Say
            </h2>
            <p className={`text-[#66737F] text-[0.98rem] sm:text-[1.05rem] leading-relaxed transition-all duration-600 delay-200 ease-out ${reviewsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
              Real feedback from patients who trust Dr. P. R. Rajwade for their family's dental health.
            </p>
          </div>

          {/* Testimonial Cards - Staggered (0ms, 100ms, 200ms) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {REVIEWS.map((rev, i) => (
              <div
                key={rev.name}
                className={`bg-white rounded-2xl p-7 border border-[#E5E8E8] shadow-[0_4px_20px_-6px_rgba(3,33,59,0.05)] hover:shadow-[0_12px_30px_-8px_rgba(3,33,59,0.1)] hover:-translate-y-1 transition-all duration-500 ease-out flex flex-col justify-between ${
                  reviewsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: reviewsVisible ? `${i * 100}ms` : '0ms' }}
              >
                <div>
                  {/* Star Rating */}
                  <div className="flex text-[#BFA88F] mb-4">
                    {[...Array(rev.rating)].map((_, idx) => (
                      <svg key={idx} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  <p className="text-[#03213B] text-[0.95rem] sm:text-[0.98rem] leading-relaxed mb-6 italic">
                    "{rev.text}"
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E5E8E8]/70 flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-[0.95rem] text-[#03213B]">{rev.name}</h4>
                    <p className="text-xs text-[#66737F]">{rev.treatment}</p>
                  </div>
                  <span className="text-[0.68rem] font-bold text-[#123b5d] bg-[#E8F1F8] px-2.5 py-1 rounded-full uppercase tracking-wider">
                    Verified
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <a
              href="https://www.google.com/maps/search/?api=1&query=Mohan+Dental+Care+Surajpur+reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-sm font-bold text-[#03213B] hover:text-[#123b5d] transition-colors"
            >
              <span>View Google Reviews</span>
              <span className="group-hover:translate-x-[3px] transition-transform duration-250 ease-out">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── 11. PREMIUM CTA SECTION (Replaced Empty Black Section) ── */}
      <section className="py-14 sm:py-20 bg-[#F8FAFA]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div
            ref={ctaRef}
            className={`bg-[#03213B] rounded-3xl px-6 sm:px-12 py-12 sm:py-16 text-center relative overflow-hidden transition-all duration-700 ease-out ${ctaVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-[0.98]'}`}
          >
            {/* Subtle background gradient glow */}
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#133A5B] rounded-full blur-[100px] pointer-events-none opacity-40" />

            <div className="relative z-10 max-w-[620px] mx-auto">
              <h2 className={`font-display font-bold text-[clamp(1.9rem,3.4vw,2.7rem)] text-white leading-tight mb-4 transition-all duration-600 delay-100 ease-out ${
                ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
              }`}>
                Ready for a Healthier, More Confident Smile?
              </h2>
              <p className={`text-[#EEF1F1]/80 text-[1rem] sm:text-[1.08rem] leading-relaxed mb-8 transition-all duration-600 delay-200 ease-out ${
                ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
              }`}>
                Book your consultation with Dr. P. R. Rajwade today. Expert dental care in a comfortable, modern setting.
              </p>

              <div className={`flex flex-wrap items-center justify-center gap-4 transition-all duration-600 delay-300 ease-out ${
                ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
              }`}>
                <a
                  href="#booking"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="btn-shimmer px-8 py-3.5 rounded-full bg-[#123b5d] hover:bg-[#0c2a44] text-white font-bold text-[0.96rem] shadow-[0_10px_25px_-6px_rgba(18,59,93,0.45)] hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-200"
                >
                  Book Appointment
                </a>

                <a
                  href="https://wa.me/918839557607"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-7 py-3.5 rounded-full border border-white/40 text-white hover:bg-white/10 font-bold text-[0.96rem] hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-200 flex items-center gap-2"
                >
                  <svg className="w-4 h-4 text-teal-400 fill-current flex-shrink-0" viewBox="0 0 448 512">
                    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                  </svg>
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
