export default function FAB() {
  const handleBookClick = (e) => {
    e.preventDefault();
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* ── MOBILE-ONLY PERSISTENT STICKY BOTTOM ACTION BAR ── */}
      <nav
        aria-label="Mobile quick actions"
        className="fixed bottom-0 inset-x-0 z-[90] w-full bg-[#03213B] border-t border-[#133A5B] px-3 py-2 sm:py-2.5 flex items-center justify-between gap-2.5 md:hidden safe-bottom shadow-[0_-8px_30px_rgba(3,33,59,0.5)] transform-gpu"
        style={{ transform: 'translateZ(0)', WebkitTransform: 'translateZ(0)' }}
      >
        {/* Call Action */}
        <a
          href="tel:+918839557607"
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl bg-[#0b253d] hover:bg-[#133A5B] active:scale-95 text-white text-xs font-bold border border-white/10 transition-all duration-150 min-h-[44px]"
        >
          <svg className="w-4 h-4 text-[#38bdf8] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          <span className="tracking-wide">Call</span>
        </a>

        {/* WhatsApp Action */}
        <a
          href="https://wa.me/918839557607"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] active:scale-95 text-white text-xs font-bold shadow-[0_2px_12px_rgba(37,211,102,0.4)] transition-all duration-150 min-h-[44px]"
        >
          <svg className="w-4 h-4 fill-current flex-shrink-0" viewBox="0 0 24 24">
            <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.6 0 0 0 1.333 4.993L2 22l5.233-1.37a9.95 9.95 0 0 0 4.779 1.216h.004c5.505 0 9.988-4.478 9.989-9.984 0-2.669-1.038-5.176-2.925-7.062A9.92 9.92 0 0 0 12.012 2z" />
          </svg>
          <span className="tracking-wide">WhatsApp</span>
        </a>

        {/* Primary Book Appointment Action */}
        <a
          href="#booking"
          onClick={handleBookClick}
          className="flex-[1.25] flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl bg-[#123b5d] hover:bg-[#0c2a44] active:scale-95 text-white text-xs font-bold border border-white/10 transition-all duration-150 min-h-[44px]"
        >
          <svg className="w-4 h-4 text-[#38bdf8] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
          <span className="tracking-wide whitespace-nowrap">Book Visit</span>
        </a>
      </nav>

      {/* ── DESKTOP FLOATING QUICK ASSISTANCE (Hidden on Mobile) ── */}
      <div className="hidden md:flex fixed right-6 bottom-6 z-50 flex-col items-end gap-3">
        <a
          href="https://wa.me/918839557607"
          target="_blank"
          rel="noopener noreferrer"
          className="w-13 h-13 rounded-full flex items-center justify-center bg-[#25D366] text-white shadow-[0_8px_25px_-4px_rgba(37,211,102,0.5)] hover:scale-105 hover:-translate-y-0.5 transition-all duration-200"
          aria-label="Chat on WhatsApp"
        >
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.6 0 0 0 1.333 4.993L2 22l5.233-1.37a9.95 9.95 0 0 0 4.779 1.216h.004c5.505 0 9.988-4.478 9.989-9.984 0-2.669-1.038-5.176-2.925-7.062A9.92 9.92 0 0 0 12.012 2z" />
          </svg>
        </a>
      </div>
    </>
  );
}
