export default function FAB() {
  const handleBookClick = (e) => {
    e.preventDefault();
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* ── 7. MOBILE-ONLY STICKY BOTTOM ACTION BAR (Requirement 7) ── */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#03213B] border-t border-[#133A5B] px-3 py-2.5 flex items-center justify-between gap-2 md:hidden safe-bottom shadow-[0_-4px_25px_rgba(3,33,59,0.3)]">
        {/* Call Action */}
        <a
          href="tel:+918839557607"
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 active:scale-95 text-white text-xs font-bold transition-all"
        >
          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 3.5c-2 0-3.5 1.8-3.2 3.7C4.7 14.6 9.4 19.3 16.8 20.2c1.9.3 3.7-1.2 3.7-3.2v-1.8c0-.6-.4-1.1-1-1.3l-3.4-1.1c-.5-.2-1.1 0-1.4.4l-1 1.3c-2.3-1.1-4.1-2.9-5.2-5.2l1.3-1c.4-.3.6-.9.4-1.4L9.1 3.5c-.2-.6-.7-1-1.3-1H7z" />
          </svg>
          <span>Call</span>
        </a>

        {/* WhatsApp Action */}
        <a
          href="https://wa.me/918839557607"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] active:scale-95 text-white text-xs font-bold transition-all"
        >
          <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
            <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.6 0 0 0 1.333 4.993L2 22l5.233-1.37a9.95 9.95 0 0 0 4.779 1.216h.004c5.505 0 9.988-4.478 9.989-9.984 0-2.669-1.038-5.176-2.925-7.062A9.92 9.92 0 0 0 12.012 2z" />
          </svg>
          <span>WhatsApp</span>
        </a>

        {/* Primary Book Appointment Action */}
        <a
          href="#booking"
          onClick={handleBookClick}
          className="flex-[1.4] flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-[#123b5d] hover:bg-[#0c2a44] active:scale-95 text-white text-xs font-bold shadow-sm transition-all"
        >
          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3.5" y="5" width="17" height="15" rx="2.4" />
            <line x1="3.5" y1="9.5" x2="20.5" y2="9.5" />
          </svg>
          <span>Book Visit</span>
        </a>
      </div>

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
