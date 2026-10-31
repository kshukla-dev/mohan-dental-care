import { useState, useEffect, useCallback, useMemo } from 'react';
import { getAssetUrl, useScrollReveal } from '../utils';

const BROCHURES = [
  { id: 1, title: 'Orthodontics & Braces', hindi: 'टेढ़े-मेढ़े दांतों का आधुनिक इलाज - ब्रेसिज़', category: 'Braces' },
  { id: 2, title: 'Dental Implants', hindi: 'स्थाई नकली दांत - डेंटल इम्प्लांट', category: 'Implants' },
  { id: 3, title: 'Root Canal Treatment (RCT)', hindi: 'रूट कैनाल - सड़े दांतों को बचाएं', category: 'RCT' },
  { id: 4, title: 'Smile Makeover & Veneers', hindi: 'स्माइल मेकओवर व कॉस्मेटिक डेंटिस्ट्री', category: 'Cosmetic' },
  { id: 5, title: 'Teeth Cleaning & Scaling', hindi: 'दांतों की सफाई - अल्ट्रासोनिक स्केलिंग', category: 'Preventive' },
  { id: 6, title: 'Pediatric Dental Care', hindi: 'बच्चों के दांतों की संपूर्ण देखभाल', category: 'Kids' },
  { id: 7, title: 'Wisdom Tooth Surgery', hindi: 'अकल दाढ़ का दर्द व सर्जरी', category: 'Surgery' },
  { id: 8, title: 'Zirconia & Ceramic Crowns', hindi: 'कैप, ब्रिज व फिक्स्ड दांत', category: 'Crowns' },
  { id: 9, title: 'Cavity Filling & Restoration', hindi: 'दांतों में मसाला भरना (लाइट क्योर)', category: 'Filling' },
  { id: 10, title: 'Clear Aligners / Invisalign', hindi: 'अदृश्य ब्रेसिज़ - पारदर्शी अलाइनर्स', category: 'Braces' },
  { id: 11, title: 'Gum Disease & Bleeding Gums', hindi: 'मसूड़ों की सूजन व पायरिया का इलाज', category: 'Gums' },
  { id: 12, title: 'Digital RVG X-Ray & Diagnostics', hindi: 'तुरंत डिजिटल एक्स-रे व जांच', category: 'Diagnostics' },
  { id: 13, title: 'Full Mouth Rehabilitation', hindi: 'पूरे जबड़े का नया दांत सेट (Denture)', category: 'Implants' },
  { id: 14, title: 'Jaw Pain & Fracture Treatment', hindi: 'जबड़े का फ्रैक्चर व मुंह की चोट', category: 'Surgery' },
  { id: 15, title: 'Oral Hygiene & Prevention', hindi: 'मुख स्वास्थ्य व दैनिक देखभाल नियम', category: 'Preventive' },
  { id: 16, title: 'Tooth Extraction (Painless)', hindi: 'दर्द रहित दांत निकालना', category: 'Surgery' },
  { id: 17, title: 'Teeth Whitening & Polishing', hindi: 'दांतों का पीलापन हटाना व चमक', category: 'Cosmetic' },
  { id: 18, title: 'Clinic Overview & Facilities', hindi: 'क्लिनिक सुविधाएं व आधुनिक उपकरण', category: 'Clinic' },
].map((item) => ({
  ...item,
  src: getAssetUrl(`images/brochures/brochure-${item.id}.webp`),
  alt: `Mohan Dental Care - ${item.title} (${item.hindi})`,
}));

export default function BrochureCarousel() {
  const [current, setCurrent] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [sectionRef, isVisible] = useScrollReveal();

  const total = BROCHURES.length;

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev - 1 + total) % total);
  }, [total]);

  const goToSlide = (index) => {
    setCurrent(index);
  };

  // Auto-play interval
  useEffect(() => {
    if (!isAutoPlay || lightboxOpen) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 4500);
    return () => clearInterval(interval);
  }, [isAutoPlay, lightboxOpen, nextSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxOpen) {
        if (e.key === 'Escape') setLightboxOpen(false);
        if (e.key === 'ArrowRight') nextSlide();
        if (e.key === 'ArrowLeft') prevSlide();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, nextSlide, prevSlide]);

  // Touch swipe support
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > 50) nextSlide();
    if (distance < -50) prevSlide();
    setTouchStart(0);
    setTouchEnd(0);
  };

  // 7 slots in 3D Curved Arc: offsets -3, -2, -1, 0, 1, 2, 3
  const visibleSlots = useMemo(() => {
    const offsets = [-3, -2, -1, 0, 1, 2, 3];
    return offsets.map((offset) => {
      const idx = (current + offset + total) % total;
      return {
        offset,
        brochure: BROCHURES[idx],
        index: idx,
      };
    });
  }, [current, total]);

  const activeBrochure = BROCHURES[current];
  const whatsappUrl = `https://wa.me/918839557607?text=${encodeURIComponent(
    `Hello Dr. Rajwade, I saw the brochure for "${activeBrochure.title}" (${activeBrochure.hindi}) on Mohan Dental Care website and would like to consult.`
  )}`;

  return (
    <section
      id="brochures"
      ref={sectionRef}
      className="py-8 sm:py-12 bg-[#FAF7F2] text-[#03213B] relative overflow-hidden select-none border-t border-[#E8E4DC]"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div
          className={`text-center max-w-[760px] mx-auto mb-4 sm:mb-6 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-[#EAE5DC] border border-[#D5CFC3] text-[#03213B] text-[11px] sm:text-xs font-bold tracking-[0.08em] uppercase mb-2 shadow-sm">
            TREATMENT BROCHURES (1 से 18)
          </div>
          <h2 className="font-display font-bold text-[clamp(1.75rem,3vw,2.35rem)] text-[#03213B] leading-tight mb-1">
            Clinical Guides &amp; Awareness Brochures
          </h2>
          <p className="font-hindi text-[1.05rem] sm:text-[1.15rem] text-[#0284c7] font-semibold mb-1.5">
            मोहन डेंटल केयर सूरजपुर - उपचार व परामर्श ब्रोशर
          </p>
          <p className="text-[#66737F] text-[0.88rem] sm:text-[0.95rem] leading-relaxed max-w-[62ch] mx-auto">
            हमारे क्लिनिक के सभी 18 विशेष उपचार ब्रोशर देखें। ब्रेसिज़, इम्प्लांट, रूट कैनाल, बच्चों के दांत व स्माइल मेकओवर की सम्पूर्ण जानकारी।
          </p>
        </div>

        {/* 3D Cylindrical Curved Perspective Stage */}
        <div
          className="relative w-full py-2 sm:py-3 flex items-center justify-center overflow-visible"
          style={{ perspective: '1400px' }}
          onMouseEnter={() => setIsAutoPlay(false)}
          onMouseLeave={() => setIsAutoPlay(true)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Left Arrow Button */}
          <button
            onClick={prevSlide}
            aria-label="Previous brochure"
            className="absolute left-2 sm:left-4 lg:left-8 z-40 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-white/95 hover:bg-white text-[#03213B] border border-slate-200/90 shadow-[0_8px_25px_rgba(0,0,0,0.15)] hover:scale-105 active:scale-95 transition-all flex items-center justify-center backdrop-blur-sm"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={nextSlide}
            aria-label="Next brochure"
            className="absolute right-2 sm:right-4 lg:right-8 z-40 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-white/95 hover:bg-white text-[#03213B] border border-slate-200/90 shadow-[0_8px_25px_rgba(0,0,0,0.15)] hover:scale-105 active:scale-95 transition-all flex items-center justify-center backdrop-blur-sm"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>

          {/* 3D Arc Track (Larger height for clearer brochure viewing) */}
          <div
            className="relative flex items-center justify-center w-full min-h-[420px] xs:min-h-[480px] sm:min-h-[560px] md:min-h-[640px] lg:min-h-[700px]"
            style={{ transformStyle: 'preserve-3d' }}
          >
            {visibleSlots.map(({ offset, brochure, index }) => {
              const isCenter = offset === 0;

              // 3D Cylindrical Curved Transform Parameters
              let xTranslate = '0px';
              let yTranslate = '0px';
              let zTranslate = '0px';
              let rotateYDeg = 0;
              let scale = 1;
              let zIndex = 30;
              let opacity = 1;
              let visibility = 'flex';

              if (offset === 0) {
                // Center card: fully in front, elevated
                xTranslate = '0px';
                yTranslate = '0px';
                zTranslate = '40px';
                rotateYDeg = 0;
                scale = 1.06;
                zIndex = 35;
                opacity = 1;
              } else if (offset === -1) {
                // Immediate left card
                xTranslate = 'calc(-102% - 16px)';
                yTranslate = '16px';
                zTranslate = '-50px';
                rotateYDeg = 18;
                scale = 0.92;
                zIndex = 25;
                opacity = 0.90;
              } else if (offset === 1) {
                // Immediate right card
                xTranslate = 'calc(102% + 16px)';
                yTranslate = '16px';
                zTranslate = '-50px';
                rotateYDeg = -18;
                scale = 0.92;
                zIndex = 25;
                opacity = 0.90;
              } else if (offset === -2) {
                // Far left card
                xTranslate = 'calc(-198% - 28px)';
                yTranslate = '38px';
                zTranslate = '-140px';
                rotateYDeg = 32;
                scale = 0.82;
                zIndex = 20;
                opacity = 0.70;
                visibility = 'hidden sm:flex';
              } else if (offset === 2) {
                // Far right card
                xTranslate = 'calc(198% + 28px)';
                yTranslate = '38px';
                zTranslate = '-140px';
                rotateYDeg = -32;
                scale = 0.82;
                zIndex = 20;
                opacity = 0.70;
                visibility = 'hidden sm:flex';
              } else if (offset === -3) {
                // Outermost left card (desktop only)
                xTranslate = 'calc(-290% - 36px)';
                yTranslate = '68px';
                zTranslate = '-240px';
                rotateYDeg = 42;
                scale = 0.70;
                zIndex = 15;
                opacity = 0.45;
                visibility = 'hidden lg:flex';
              } else if (offset === 3) {
                // Outermost right card (desktop only)
                xTranslate = 'calc(290% + 36px)';
                yTranslate = '68px';
                zTranslate = '-240px';
                rotateYDeg = -42;
                scale = 0.70;
                zIndex = 15;
                opacity = 0.45;
                visibility = 'hidden lg:flex';
              }

              const transformStyle = `translate3d(${xTranslate}, ${yTranslate}, ${zTranslate}) rotateY(${rotateYDeg}deg) scale(${scale})`;

              return (
                <div
                  key={`${brochure.id}-${offset}`}
                  onClick={() => {
                    if (isCenter) {
                      setLightboxOpen(true);
                    } else {
                      goToSlide(index);
                    }
                  }}
                  className={`absolute transition-all duration-500 ease-out cursor-pointer ${visibility}`}
                  style={{
                    transform: transformStyle,
                    zIndex,
                    opacity,
                    transformStyle: 'preserve-3d',
                  }}
                  title={isCenter ? 'बड़ा करके देखने के लिए क्लिक करें' : `ब्रोशर #${brochure.id} देखें`}
                >
                  {/* Portrait Card - Significantly enlarged for crystal-clear brochure reading */}
                  <div
                    className={`relative w-[230px] xs:w-[270px] sm:w-[320px] md:w-[370px] lg:w-[420px] xl:w-[450px] h-[340px] xs:h-[390px] sm:h-[460px] md:h-[530px] lg:h-[600px] xl:h-[640px] rounded-[22px] sm:rounded-[30px] overflow-hidden bg-white transition-all duration-300 border border-slate-200/90 ${
                      isCenter
                        ? 'shadow-[0_25px_60px_-12px_rgba(3,33,59,0.30)] ring-4 ring-[#0284c7]/40'
                        : 'shadow-[0_14px_35px_-8px_rgba(3,33,59,0.18)] hover:shadow-2xl'
                    }`}
                  >
                    {/* Clean Full-Card Brochure Image with NO obstructing icons */}
                    <img
                      src={brochure.src}
                      alt={brochure.alt}
                      className="w-full h-full object-contain bg-white p-1.5 sm:p-2 transition-transform duration-500 hover:scale-[1.01]"
                      loading="lazy"
                    />

                    {/* Top Category Badge */}
                    <div className="absolute top-3 left-3 z-10 pointer-events-none">
                      <span className="text-[10px] sm:text-xs font-bold text-white bg-[#03213B]/85 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 shadow-md">
                        #{brochure.id} {brochure.category}
                      </span>
                    </div>

                    {/* Quick zoom hint pill on center card (unobtrusive at top right) */}
                    {isCenter && (
                      <div className="absolute top-3 right-3 z-10 pointer-events-none">
                        <span className="inline-flex items-center gap-1 text-[10px] sm:text-xs font-bold text-[#03213B] bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-full shadow-md border border-slate-200">
                          <svg className="w-3 h-3 text-[#0284c7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                          </svg>
                          <span>ज़ूम करें</span>
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Center Active Detail & Coral/Orange CTA Button */}
        <div className="mt-4 sm:mt-6 flex flex-col items-center justify-center text-center">
          {/* Active Title Banner */}
          <div className="mb-3">
            <h3 className="font-display font-bold text-lg sm:text-2xl text-[#03213B]">
              {activeBrochure.title}
            </h3>
            <p className="font-hindi text-sm sm:text-base text-[#0284c7] font-semibold mt-0.5">
              {activeBrochure.hindi}
            </p>
          </div>

          {/* Action Button Pill (Coral/Orange CTA matching User Image) */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 sm:px-7 py-2.5 sm:py-3 rounded-full bg-[#FF6B6B] hover:bg-[#ff5252] text-white font-bold text-xs sm:text-sm shadow-[0_6px_18px_-4px_rgba(255,107,107,0.5)] hover:-translate-y-0.5 active:scale-95 transition-all duration-200"
            >
              <svg className="w-4 h-4 fill-white flex-shrink-0" viewBox="0 0 448 512">
                <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
              </svg>
              <span>WhatsApp पर परामर्श लें</span>
            </a>

            <button
              onClick={() => setLightboxOpen(true)}
              className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-[#03213B] hover:bg-[#133A5B] text-white font-bold text-xs sm:text-sm shadow-sm hover:-translate-y-0.5 active:scale-95 transition-all duration-200"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
                <line x1="11" y1="8" x2="11" y2="14" />
                <line x1="8" y1="11" x2="14" y2="11" />
              </svg>
              <span>फुलस्क्रीन में देखें</span>
            </button>
          </div>

          {/* Clean Round Circular Dots Pagination */}
          <div className="flex items-center justify-center gap-1.5 sm:gap-2 mt-4 sm:mt-5 px-4 flex-wrap max-w-xl pagination-dots">
            {BROCHURES.map((_, dotIdx) => {
              const isActive = current === dotIdx;
              return (
                <button
                  key={dotIdx}
                  type="button"
                  onClick={() => goToSlide(dotIdx)}
                  style={{ minHeight: 'unset', minWidth: 'unset', padding: 0 }}
                  className={`pagination-dot transition-all duration-300 rounded-full border-0 focus:outline-none cursor-pointer ${
                    isActive
                      ? 'w-2.5 h-2.5 sm:w-3 sm:h-3 bg-[#0284c7] ring-2 ring-[#0284c7]/30 scale-125'
                      : 'w-2 sm:w-2.5 h-2 sm:h-2.5 bg-[#CBD5E1] hover:bg-[#94A3B8]'
                  }`}
                  aria-label={`Go to brochure ${dotIdx + 1}`}
                />
              );
            })}
          </div>

          <div className="mt-1.5 text-[11px] sm:text-xs font-semibold text-slate-500">
            ब्रोशर {current + 1} of {total} · (साइड कार्ड पर क्लिक करें या स्वाइप करें)
          </div>
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[1000] bg-black/94 backdrop-blur-md flex flex-col items-center justify-between p-3 sm:p-6 animate-fadeIn"
          onClick={() => setLightboxOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          {/* Modal Header */}
          <div
            className="w-full max-w-5xl flex items-center justify-between text-white pb-3 border-b border-white/20 select-none"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <p className="font-bold text-base sm:text-lg">{activeBrochure.title}</p>
              <p className="font-hindi text-xs sm:text-sm text-[#FDE047]">{activeBrochure.hindi}</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs text-white/90 font-bold px-3 py-1 rounded-full bg-white/15">
                {current + 1} / {total}
              </span>
              <button
                onClick={() => setLightboxOpen(false)}
                className="w-10 h-10 rounded-full bg-white/15 hover:bg-white/30 flex items-center justify-center text-white transition-colors"
                aria-label="Close fullscreen modal"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
          </div>

          {/* Modal Body Image */}
          <div
            className="relative flex-1 w-full max-w-5xl flex items-center justify-center my-3"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={prevSlide}
              aria-label="Previous brochure"
              className="absolute left-2 sm:left-4 z-10 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-transform hover:scale-110 active:scale-95 shadow-xl border border-white/20"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            <img
              src={activeBrochure.src}
              alt={activeBrochure.alt}
              className="max-h-[78vh] w-auto max-w-full object-contain rounded-2xl shadow-2xl select-none bg-white p-2"
            />

            <button
              onClick={nextSlide}
              aria-label="Next brochure"
              className="absolute right-2 sm:right-4 z-10 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-transform hover:scale-110 active:scale-95 shadow-xl border border-white/20"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>

          {/* Modal Footer */}
          <div
            className="w-full max-w-5xl flex items-center justify-between text-white text-xs pt-2 border-t border-white/10 select-none"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="text-white/70 hidden sm:inline">
              Tip: Use Left / Right arrow keys to navigate · Escape to close
            </span>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#25D366] text-white font-bold hover:bg-[#20ba59] transition-colors ml-auto shadow-md"
            >
              <svg className="w-4 h-4 fill-white flex-shrink-0" viewBox="0 0 448 512">
                <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
              </svg>
              <span>WhatsApp पर बात करें</span>
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
