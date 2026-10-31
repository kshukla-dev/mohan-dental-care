import BrandLogo from './BrandLogo';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#03213B] text-[#EEF1F1]/80 pt-16 pb-12 border-t border-[#133A5B]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 mb-14">

          {/* Col 1: Brand (4 cols) */}
          <div className="lg:col-span-4">
            <div className="mb-5 inline-block bg-white px-4 py-3 rounded-2xl shadow-sm border border-[#E5E8E8]">
              <BrandLogo />
            </div>
            <p className="text-sm text-[#EEF1F1]/70 leading-relaxed max-w-[34ch] mb-4">
              Modern dental studio and family dental healthcare practice in Surajpur, under the clinical leadership of <strong className="text-white">Dr. P. R. Rajwade</strong>.
            </p>
            <p className="text-xs text-[#BFA88F] font-semibold">
              Reg. CGDC/G/23/3989 · Chhattisgarh Dental Council
            </p>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2">
            <h5 className="text-white text-xs font-bold uppercase tracking-wider mb-4">
              Quick Links
            </h5>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: 'Home', href: '#home' },
                { label: 'About Doctor', href: '#doctor' },
                { label: 'Treatments', href: '#treatments' },
                { label: 'Patient Reviews', href: '#reviews' },
                { label: 'Contact Us', href: '#booking' },
              ].map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-[#EEF1F1]/70 hover:text-white transition-colors duration-200"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Treatments (3 cols) */}
          <div className="lg:col-span-3">
            <h5 className="text-white text-xs font-bold uppercase tracking-wider mb-4">
              Treatments
            </h5>
            <ul className="space-y-2.5 text-sm">
              {[
                'General Dentistry',
                'Root Canal Treatment',
                'Dental Implants',
                'Teeth Whitening',
                'Clear Aligners',
                'Smile Makeovers',
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#treatments"
                    className="text-[#EEF1F1]/70 hover:text-white transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Hours (3 cols) */}
          <div className="lg:col-span-3">
            <h5 className="text-white text-xs font-bold uppercase tracking-wider mb-4">
              Contact &amp; Hours
            </h5>
            <div className="space-y-3 text-sm text-[#EEF1F1]/70">
              <div className="space-y-1">
                <p>M.G. Road, opposite Bajaj Showroom, Surajpur, Chhattisgarh - 497229</p>
                <p className="font-hindi text-xs sm:text-[0.84rem] text-[#BFA88F] font-medium leading-relaxed">
                  एम.जी. रोड, बजाज शोरूम के सामने, सूरजपुर, छत्तीसगढ़ - 497229
                </p>
              </div>
              <p className="text-white font-bold">
                <a href="tel:+918839557607" className="hover:text-teal-400 transition-colors">
                  +91 88395 57607
                </a>
              </p>
              <div className="pt-2 border-t border-[#133A5B] text-xs space-y-1 text-[#EEF1F1]/60">
                <p>Mon – Sat: 9:00 AM – 8:00 PM</p>
                <p>Sunday: By Appointment Only</p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#133A5B] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#EEF1F1]/60">
          <p>© {year} Mohan Dental Care. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#home" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#home" className="hover:text-white transition-colors">Terms &amp; Conditions</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
