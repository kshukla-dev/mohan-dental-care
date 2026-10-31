import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WhyUs from './components/WhyUs';
import { ServiceTeaser, ServicesPage } from './components/Services';
import CompareSlider from './components/CompareSlider';
import SmileGallery from './components/SmileGallery';
import { DoctorTeaser, AboutPage } from './components/Doctor';
import Technology from './components/Technology';
import TrustBand from './components/TrustBand';
import Location from './components/Location';
import Booking from './components/Booking';
import Footer from './components/Footer';
import FAB from './components/FAB';

export default function App() {
  const [activePage, setActivePage] = useState('home');

  const handleSetPage = (page) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen font-body pb-16 md:pb-0 bg-[#F8FAFA] animate-page-fade-in">
      <Header activePage={activePage} setActivePage={handleSetPage} />

      {/* ── HOME PAGE ─────────────────────────────────────────── */}
      {activePage === 'home' && (
        <>
          <Hero setActivePage={handleSetPage} />
          <WhyUs />
          <ServiceTeaser setActivePage={handleSetPage} />
          <CompareSlider />
          <SmileGallery />
          <DoctorTeaser setActivePage={handleSetPage} />
          <Technology />
          <TrustBand />
          <Location />
          <Booking />
        </>
      )}

      {/* ── SERVICES PAGE ─────────────────────────────────────── */}
      {activePage === 'services' && (
        <>
          <ServicesPage />
          <Location />
          <Booking />
        </>
      )}

      {/* ── ABOUT PAGE ────────────────────────────────────────── */}
      {activePage === 'about' && (
        <>
          <AboutPage />
          <Technology isAbout />
          <Location />
          <Booking />
        </>
      )}

      <Footer />
      <FAB />
    </div>
  );
}
