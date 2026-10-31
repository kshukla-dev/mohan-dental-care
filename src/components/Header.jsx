import { useState, useEffect } from 'react';
import BrandLogo from './BrandLogo';

const NAV_LINKS = [
  { label: 'Home', href: '#home', page: 'home' },
  { label: 'About', href: '#about', page: 'about' },
  { label: 'Doctors', href: '#doctor', page: null },
  { label: 'Treatments', href: '#treatments', page: 'services' },
  { label: 'Contact', href: '#booking', page: null },
];

const MOBILE_NAV_ITEMS = [
  {
    label: 'Home',
    page: 'home',
    href: '#home',
    icon: (
      <svg className="w-[22px] h-[22px] text-[#026592] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 10.5L12 3l9 7.5V20a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V10.5z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    label: 'About Clinic',
    page: 'about',
    href: '#about',
    icon: (
      <svg className="w-[22px] h-[22px] text-[#026592] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="16" x2="12" y2="12" />
        <circle cx="12" cy="8" r="0.8" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: 'Dental Treatments',
    page: 'services',
    href: '#treatments',
    icon: (
      <svg className="w-[22px] h-[22px] text-[#026592] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 3C4.2 3 2 5.2 2 8c0 3.6 1.4 6.8 2.6 10.2.7 2.1 3 2.8 4.2.6.9-1.6 1.8-3.3 3.2-3.3s2.3 1.7 3.2 3.3c1.2 2.2 3.5 1.5 4.2-.6 1.2-3.4 2.6-6.6 2.6-10.2 0-2.8-2.2-5-5-5-1.9 0-3.1 1-4.5 1S8.9 3 7 3z" />
      </svg>
    ),
  },
  {
    label: 'Dr. P.R. Rajwade',
    page: null,
    href: '#doctor',
    icon: (
      <svg className="w-[22px] h-[22px] text-[#026592] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
  {
    label: 'Technology & Sterilization',
    page: null,
    href: '#technology',
    icon: (
      <svg className="w-[22px] h-[22px] text-[#026592] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 18h8" />
        <path d="M3 22h18" />
        <path d="M14 22a7 7 0 1 0 0-14h-1" />
        <path d="M9 14h2" />
        <path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z" />
        <path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3" />
      </svg>
    ),
  },
  {
    label: 'Contact & Directions',
    page: null,
    href: '#location',
    icon: (
      <svg className="w-[22px] h-[22px] text-[#026592] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
];

export default function Header({ activePage, setActivePage }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  // Close menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleNavClick = (page, href) => {
    setMenuOpen(false);

    if (page) {
      setActivePage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      if (activePage !== 'home') {
        setActivePage('home');
        setTimeout(() => {
          const el = document.querySelector(href);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      } else {
        setTimeout(() => {
          const el = document.querySelector(href);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 50);
      }
    }
  };

  return (
    <>
      <header
        className={`sticky top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80'
          : 'bg-white border-b border-slate-100'
          }`}
      >
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 h-[72px] sm:h-[76px] flex items-center justify-between gap-3 sm:gap-5">
          {/* Brand Logo */}
          <button
            onClick={() => handleNavClick('home', '#home')}
            className="group py-1 focus:outline-none"
            aria-label="मोहन डेंटल केयर सूरजपुर - Mohan Dental Care"
          >
            <BrandLogo />
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {NAV_LINKS.map(({ label, href, page }) => {
              const isActive = (page && activePage === page) || (label === 'Home' && activePage === 'home');
              return (
                <button
                  key={label}
                  onClick={() => handleNavClick(page, href)}
                  className={`text-[0.92rem] font-semibold transition-all duration-200 py-1 relative ${isActive
                    ? 'text-[#032b53] font-bold border-b-2 border-[#032b53]'
                    : 'text-[#475569] hover:text-[#032b53]'
                    }`}
                >
                  {label}
                </button>
              );
            })}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <a
              href="tel:+918839557607"
              className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 text-[#0f172a] text-[0.88rem] font-bold hover:bg-slate-50 transition-all"
            >
              <svg className="w-4 h-4 text-[#0284c7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 3.5c-2 0-3.5 1.8-3.2 3.7C4.7 14.6 9.4 19.3 16.8 20.2c1.9.3 3.7-1.2 3.7-3.2v-1.8c0-.6-.4-1.1-1-1.3l-3.4-1.1c-.5-.2-1.1 0-1.4.4l-1 1.3c-2.3-1.1-4.1-2.9-5.2-5.2l1.3-1c.4-.3.6-.9.4-1.4L9.1 3.5c-.2-.6-.7-1-1.3-1H7z" />
              </svg>
              <span>88395-57607</span>
            </a>

            <button
              onClick={() => handleNavClick(null, '#booking')}
              className="btn-shimmer flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#032b53] hover:bg-[#021f3d] text-white text-[0.88rem] font-bold shadow-md hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-200"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3.5" y="5" width="17" height="15" rx="2.4" />
                <line x1="3.5" y1="9.5" x2="20.5" y2="9.5" />
                <line x1="8" y1="3" x2="8" y2="7" />
                <line x1="16" y1="3" x2="16" y2="7" />
              </svg>
            </button>

            {/* Mobile hamburger button */}
            <button
              onClick={() => setMenuOpen(true)}
              aria-label="Open navigation menu"
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl hover:bg-slate-100 text-[#0f172a] transition-colors"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="17" x2="20" y2="17" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Backdrop */}
      <div
        className={`fixed inset-0 bg-[#03213B]/60 backdrop-blur-[2px] z-[999] transition-opacity duration-300 lg:hidden ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Drawer Panel */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-[80vw] max-w-[330px] bg-white z-[1000] shadow-2xl flex flex-col transition-transform duration-300 ease-out lg:hidden ${menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation Menu"
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#E5E8E8]">
          <button
            onClick={() => handleNavClick('home', '#home')}
            className="group focus:outline-none"
            aria-label="मोहन डेंटल केयर सूरजपुर - Mohan Dental Care"
          >
            <BrandLogo size="compact" />
          </button>
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Close navigation menu"
            className="p-1.5 -mr-1.5 text-slate-700 hover:text-black transition-colors"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Drawer Body */}
        <div className="flex-1 overflow-y-auto px-6 py-6 flex flex-col">
          {/* Section Title */}
          <div className="text-[0.8rem] font-bold tracking-[0.06em] text-[#0a4b6e] uppercase mb-4 px-2">
            NAVIGATION MENU
          </div>

          {/* Nav List */}
          <nav className="flex flex-col gap-2">
            {MOBILE_NAV_ITEMS.map(({ label, page, href, icon }) => {
              const isCurrent = page ? activePage === page : false;
              return (
                <button
                  key={label}
                  onClick={() => handleNavClick(page, href)}
                  className={`flex items-center gap-4 px-3 py-3 rounded-xl text-left transition-colors group ${isCurrent
                    ? 'bg-[#EBF3F8] text-[#035388] font-semibold'
                    : 'text-[#243342] hover:bg-[#F2F6F9] hover:text-[#03213B] font-medium'
                    }`}
                >
                  <span className="shrink-0 transition-transform duration-200 group-hover:scale-105">
                    {icon}
                  </span>
                  <span className="text-[1.03rem] leading-snug">{label}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </div>
    </>
  );
}
