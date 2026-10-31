import { useRef, useState } from 'react';
import { useScrollReveal, getAssetUrl } from '../utils';

export default function CompareSlider() {
  const [pos, setPos] = useState(50);
  const [dragging, setDragging] = useState(false);
  const sliderRef = useRef(null);
  const [ref, visible] = useScrollReveal();

  const calcPos = (clientX) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(100, ((clientX - rect.left) / rect.width) * 100));
    setPos(x);
  };

  const onPointerDown = (e) => {
    setDragging(true);
    calcPos(e.clientX);
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e) => {
    if (dragging) calcPos(e.clientX);
  };

  const onPointerUp = (e) => {
    setDragging(false);
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {}
  };

  return (
    <section id="before-after" className="py-16 sm:py-24 bg-[#EEF1F1]/40 relative overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        
        <div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center"
        >
          
          {/* ── Left Column: Interactive Before & After Slider (7 cols) ── */}
          <div className="lg:col-span-7">
            <div className={`bg-white rounded-3xl p-3 sm:p-4 shadow-[0_20px_50px_-15px_rgba(3,33,59,0.12)] border border-[#E5E8E8] transition-all duration-700 ease-out ${
              visible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-[0.98] translate-y-4'
            }`}>
              <div
                ref={sliderRef}
                className="compare-slider aspect-[16/10] sm:aspect-[16/9] select-none touch-none rounded-2xl overflow-hidden relative cursor-ew-resize"
                onPointerDown={onPointerDown}
                onPointerMove={onPointerMove}
                onPointerUp={onPointerUp}
              >
                {/* 1. Base layer: Full White (After) image */}
                <div className="absolute inset-0 select-none">
                  <img
                    src={getAssetUrl('images/smile-after.webp')}
                    alt="After smile makeover - White teeth"
                    className="w-full h-full object-cover object-center pointer-events-none select-none"
                    draggable="false"
                  />
                  <div
                    className={`absolute bottom-4 right-4 px-3.5 py-1.5 rounded-full text-xs font-bold text-white bg-[#03213B]/85 backdrop-blur-md uppercase tracking-wider shadow-md pointer-events-none transition-opacity duration-200 ${
                      pos > 88 ? 'opacity-0' : 'opacity-100'
                    }`}
                  >
                    After
                  </div>
                </div>

                {/* 2. Top layer: Full Yellow (Before) image clipped to slider position */}
                <div
                  className="absolute inset-0 select-none pointer-events-none"
                  style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
                >
                  <img
                    src={getAssetUrl('images/smile-before.webp')}
                    alt="Before smile makeover - Yellow teeth"
                    className="w-full h-full object-cover object-center pointer-events-none select-none"
                    draggable="false"
                  />
                  <div
                    className={`absolute bottom-4 left-4 px-3.5 py-1.5 rounded-full text-xs font-bold text-white bg-[#03213B]/85 backdrop-blur-md uppercase tracking-wider shadow-md pointer-events-none transition-opacity duration-200 ${
                      pos < 12 ? 'opacity-0' : 'opacity-100'
                    }`}
                  >
                    Before
                  </div>
                </div>

                {/* 3. Vertical Divider & Drag Handle */}
                <div
                  className="absolute top-0 bottom-0 z-20 flex items-center justify-center pointer-events-none"
                  style={{ left: `${pos}%`, transform: 'translateX(-50%)' }}
                >
                  <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[3px] bg-white shadow-[0_0_10px_rgba(0,0,0,0.6)]" />
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white flex items-center justify-center shadow-[0_8px_25px_-4px_rgba(3,33,59,0.35)] border border-[#E5E8E8] text-[#03213B] z-10 transition-transform duration-150">
                    <svg className="w-4 h-4 text-[#0284c7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="15 18 9 12 15 6" />
                      <polyline points="9 18 3 12 9 6" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Subtitle instructions */}
              <div className="flex items-center justify-between px-2 pt-3 text-xs text-[#66737F]">
                <span>← Drag slider horizontally</span>
                <span>Real Clinical Outcome</span>
              </div>
            </div>
          </div>

          {/* ── Right Column: Transformation Details (5 cols) ── */}
          <div className="lg:col-span-5 text-left">
            <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8F1F8] border border-[#123b5d]/20 text-[#123b5d] text-xs font-bold tracking-[0.08em] uppercase mb-4 transition-all duration-500 ease-out ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            }`}>
              SMILE TRANSFORMATION
            </div>

            <h2 className={`font-display font-bold text-[clamp(1.85rem,3.2vw,2.5rem)] text-[#03213B] leading-tight mb-4 transition-all duration-600 delay-100 ease-out ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
            }`}>
              See the Difference
            </h2>

            <p className={`text-[#66737F] text-[0.98rem] sm:text-[1.04rem] leading-relaxed mb-6 transition-all duration-600 delay-200 ease-out ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            }`}>
              A balanced smile boosts both oral health and everyday self-confidence. With advanced ceramic veneers, aesthetic composite bonding, and restorative crowns, we craft natural results tailored to your facial harmony.
            </p>

            {/* Small Treatment Information Chips */}
            <div className={`space-y-3 mb-8 transition-all duration-600 delay-300 ease-out ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
            }`}>
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-[#E5E8E8] shadow-[0_2px_10px_-4px_rgba(3,33,59,0.04)]">
                <div className="w-8 h-8 rounded-lg bg-[#E8F1F8] flex items-center justify-center flex-shrink-0 text-[#123b5d] mt-0.5">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-[#66737F] font-semibold uppercase tracking-wider">Treatment Approach</p>
                  <p className="text-sm font-bold text-[#03213B]">Aesthetic Veneers &amp; Smile Alignment</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-[#E5E8E8] shadow-[0_2px_10px_-4px_rgba(3,33,59,0.04)]">
                <div className="w-8 h-8 rounded-lg bg-[#E8F1F8] flex items-center justify-center flex-shrink-0 text-[#123b5d] mt-0.5">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-[#66737F] font-semibold uppercase tracking-wider">Typical Timeline</p>
                  <p className="text-sm font-bold text-[#03213B]">2 to 3 Clinical Visits with Chairside Preview</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className={`transition-all duration-600 delay-300 ease-out ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            }`}>
              <a
                href="#gallery"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#03213B] hover:bg-[#133A5B] text-white font-bold text-[0.93rem] hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-200 group"
              >
                <span>View Real Smile Gallery</span>
                <span className="group-hover:translate-x-[3px] transition-transform duration-250 ease-out">→</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
