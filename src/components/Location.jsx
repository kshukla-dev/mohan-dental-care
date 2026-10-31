import { useState } from 'react';
import { useScrollReveal, getAssetUrl } from '../utils';

export default function Location() {
  const [viewMode, setViewMode] = useState('office');
  const [leftRef, leftVisible] = useScrollReveal();
  const [rightRef, rightVisible] = useScrollReveal();
  const addr = "Mohan Dental Care, M.G. Road, opposite Bajaj Showroom, Surajpur, Chhattisgarh";
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(addr)}`;

  const INFO = [
    {
      title: 'Clinic Address',
      desc: 'M.G. Road, opposite Bajaj Showroom, Surajpur, Chhattisgarh - 497229',
      hindiDesc: 'एम.जी. रोड, बजाज शोरूम के सामने, सूरजपुर, छत्तीसगढ़ - 497229',
      icon: (
        <svg className="w-5 h-5 text-[#123b5d]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 21s7-6.3 7-11.5S16.4 3 12 3 5 5.4 5 9.5 12 21 12 21z" />
          <circle cx="12" cy="9.5" r="2.6" />
        </svg>
      ),
    },
    {
      title: 'Opening Hours',
      desc: 'Monday – Saturday: 9:00 AM – 8:00 PM · Sunday by appointment only',
      icon: (
        <svg className="w-5 h-5 text-[#123b5d]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="8.5" />
          <path d="M12 7.5V12l3 2" />
        </svg>
      ),
    },
    {
      title: 'Phone & WhatsApp',
      desc: '+91 88395 57607 · +91 62671 04997',
      icon: (
        <svg className="w-5 h-5 text-[#123b5d]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 3.5c-2 0-3.5 1.8-3.2 3.7C4.7 14.6 9.4 19.3 16.8 20.2c1.9.3 3.7-1.2 3.7-3.2v-1.8c0-.6-.4-1.1-1-1.3l-3.4-1.1c-.5-.2-1.1 0-1.4.4l-1 1.3c-2.3-1.1-4.1-2.9-5.2-5.2l1.3-1c.4-.3.6-.9.4-1.4L9.1 3.5c-.2-.6-.7-1-1.3-1H7z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="location" className="py-16 sm:py-24 bg-[#F8FAFA] border-t border-[#E5E8E8]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        
        {/* Left info */}
        <div ref={leftRef} className={`transition-all duration-700 ${leftVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8F1F8] border border-[#123b5d]/20 text-[#123b5d] text-xs font-bold tracking-[0.08em] uppercase mb-4">
            FIND OUR CLINIC
          </div>
          <h2 className="font-display font-bold text-[clamp(1.85rem,3.2vw,2.5rem)] text-[#03213B] leading-tight mb-3">
            Visit Mohan Dental Care
          </h2>
          <p className="text-[#66737F] text-[1.02rem] mb-1.5">
            Centrally located on M.G. Road opposite the Bajaj Showroom, with easy parking and immediate road access.
          </p>
          <p className="font-hindi text-[0.95rem] text-[#03213B]/80 font-medium mb-8">
            सूरजपुर में एम.जी. रोड पर बजाज शोरूम के सामने, सुविधाजनक पार्किंग व मुख्य मार्ग पर स्थित।
          </p>

          <div className="flex flex-col divide-y divide-[#E5E8E8] mb-8">
            {INFO.map(({ title, desc, hindiDesc, icon }) => (
              <div key={title} className="flex gap-4 items-start py-4">
                <div className="w-10 h-10 rounded-xl bg-[#E8F1F8] flex items-center justify-center flex-shrink-0 mt-0.5">
                  {icon}
                </div>
                <div>
                  <h4 className="font-bold text-[0.96rem] text-[#03213B] mb-1">{title}</h4>
                  <p className="text-[#66737F] text-[0.92rem] leading-relaxed">{desc}</p>
                  {hindiDesc && (
                    <p className="font-hindi text-[0.93rem] text-[#03213B] font-semibold leading-relaxed mt-1">
                      {hindiDesc}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#03213B] hover:bg-[#133A5B] text-white font-bold text-[0.92rem] hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-200 shadow-sm"
            >
              <svg className="w-4 h-4 text-[#38bdf8] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>Get Directions</span>
            </a>

            <a
              href="#booking"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#123b5d] text-[#123b5d] hover:bg-[#E8F1F8] font-bold text-[0.92rem] hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-200"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3.5" y="5" width="17" height="15" rx="2.4" />
                <line x1="3.5" y1="9.5" x2="20.5" y2="9.5" />
              </svg>
              <span>Book Appointment</span>
            </a>
          </div>
        </div>

        {/* Right: Interactive Clinic Office Photo (office.webp) & Map Switcher */}
        <div ref={rightRef} className={`transition-all duration-700 ${rightVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
          <div className="rounded-3xl overflow-hidden border border-[#E5E8E8] shadow-[0_10px_35px_-10px_rgba(3,33,59,0.1)] bg-white p-3">
            {/* View Switcher Tabs */}
            <div className="flex items-center gap-2 p-1.5 bg-[#EEF1F1] rounded-2xl mb-3">
              <button
                type="button"
                onClick={() => setViewMode('office')}
                className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-xl text-xs font-bold transition-all duration-200 ${viewMode === 'office' ? 'bg-white text-[#03213B] shadow-sm' : 'text-[#66737F] hover:text-[#03213B]'}`}
              >
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                  <circle cx="12" cy="13" r="4" />
                </svg>
                <span>Clinic Office Photo</span>
              </button>

              <button
                type="button"
                onClick={() => setViewMode('map')}
                className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-xl text-xs font-bold transition-all duration-200 ${viewMode === 'map' ? 'bg-white text-[#03213B] shadow-sm' : 'text-[#66737F] hover:text-[#03213B]'}`}
              >
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" />
                  <line x1="8" y1="2" x2="8" y2="18" />
                  <line x1="16" y1="6" x2="16" y2="22" />
                </svg>
                <span>Road Map &amp; Route</span>
              </button>
            </div>

            {/* View Mode: Clinic Office Photo */}
            {viewMode === 'office' ? (
              <div className="rounded-2xl overflow-hidden aspect-[4/3] relative bg-[#EEF1F1] group">
                <img
                  src={getAssetUrl('images/office.webp')}
                  alt="Mohan Dental Care Clinic Office & Consultation Room"
                  className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-[#03213B] via-[#03213B]/80 to-transparent text-left">
                  <p className="text-white font-display font-bold text-sm">Consultation Office &amp; Reception</p>
                  <p className="text-[#BFA88F] text-xs font-medium">Mohan Dental Care • Dr. P. R. Rajwade</p>
                </div>
              </div>
            ) : (
              /* View Mode: Map */
              <div className="rounded-2xl overflow-hidden aspect-[4/3] relative bg-[#EEF1F1]">
                <iframe
                  title="Mohan Dental Care Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.592!2d82.5783!3d23.0854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a27e7aae9c08dd3%3A0x71a9b35e8fad5c3b!2sMohan%20Dental%20Care!5e0!3m2!1sen!2sin!4v1696000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0, position: 'absolute', inset: 0, width: '100%', height: '100%' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
