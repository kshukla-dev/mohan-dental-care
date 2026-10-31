import { useState } from 'react';
import { useScrollReveal, getAssetUrl } from '../utils';

const SERVICES = [
  'Root Canal Treatment (RCT)',
  'Digital Dental X-Ray (RVG)',
  'Wisdom Tooth Surgery',
  'Tooth Extraction',
  'Teeth Cleaning & Scaling',
  'Teeth Whitening',
  'Clear Aligners',
  'Crown, Bridge & Denture',
  'Dental Implants',
  'Tooth Filling',
  'Smile Makeover & Cosmetic Treatment',
  'General Consultation',
];

const FAQS = [
  {
    q: 'Do I need an appointment?',
    a: 'While we welcome walk-in patients during clinic hours, scheduling an appointment in advance guarantees dedicated chairside time with Dr. Rajwade and minimizes your wait.',
  },
  {
    q: 'What happens during my first visit?',
    a: 'Dr. Rajwade conducts a gentle, comprehensive oral examination, takes chairside digital RVG X-rays if needed, and discusses your diagnosis with complete transparency before beginning any treatment.',
  },
  {
    q: 'Do you provide emergency dental care?',
    a: 'Yes. We accommodate urgent dental emergencies including severe toothaches, trauma, broken restorations, and dental bleeding. Call us directly at 88395 57607.',
  },
  {
    q: 'Do you provide dental implants?',
    a: 'Yes. We offer modern titanium dental implants and precision aesthetic crowns that permanently replace missing teeth, restoring complete bite force and natural smile aesthetics.',
  },
  {
    q: 'Do you offer teeth whitening?',
    a: 'Yes. We provide clinical-grade teeth whitening procedures designed to safely eliminate coffee, tea, and age stains, brightening teeth by several natural shades without damaging enamel.',
  },
  {
    q: 'Do you offer clear aligners?',
    a: 'Yes. We provide customized clear aligners for discreet, comfortable orthodontic teeth straightening without metal brackets or wires.',
  },
];

export default function Booking() {
  const [form, setForm] = useState({ name: '', phone: '', service: '', date: '', message: '' });
  const [status, setStatus] = useState('idle');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const [leftRef, leftVisible] = useScrollReveal();
  const [rightRef, rightVisible] = useScrollReveal();
  const [faqRef, faqVisible] = useScrollReveal();
  const today = new Date().toISOString().split('T')[0];

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.service) {
      setStatus('error');
      return;
    }
    const lines = [
      "Hello Mohan Dental Care, I'd like to book an appointment.",
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Service: ${form.service}`,
      form.date && `Preferred date: ${form.date}`,
      form.message && `Notes: ${form.message}`,
    ].filter(Boolean);
    window.open(`https://wa.me/918839557607?text=${encodeURIComponent(lines.join('\n'))}`, '_blank', 'noopener');
    setStatus('sent_wa');
  };

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.service) {
      setStatus('error');
      return;
    }

    setIsSubmitting(true);
    setStatus('submitting');

    try {
      const accessKey = import.meta.env.VITE_WEB3FORMS_KEY || 'YOUR_WEB3FORMS_ACCESS_KEY';

      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `New Appointment Request - ${form.name}`,
          from_name: 'Mohan Dental Care Website',
          name: form.name,
          phone: form.phone,
          service: form.service,
          date: form.date || 'Not specified',
          message: form.message || 'None',
        }),
      });

      const data = await res.json();

      if (data.success) {
        setStatus('sent_email');
        setForm({ name: '', phone: '', service: '', date: '', message: '' });
      } else {
        handleWhatsAppSubmit(e);
      }
    } catch (err) {
      console.error('Email submission error:', err);
      handleWhatsAppSubmit(e);
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputCls =
    'w-full px-4 py-3 rounded-xl border border-[#E5E8E8] bg-white text-[#17202A] text-[0.94rem] focus:outline-none focus:border-[#123b5d] transition-colors duration-200';
  const labelCls = 'block text-[0.84rem] font-bold text-[#03213B] mb-1.5';

  return (
    <section id="booking" className="py-16 sm:py-24 bg-[#F8FAFA] border-t border-[#E5E8E8]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">

        {/* ── Appointment Form Grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start mb-20">

          {/* Left Info (5 cols) */}
          <div
            ref={leftRef}
            className={`lg:col-span-5 transition-all duration-700 ${leftVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8F1F8] border border-[#123b5d]/20 text-[#123b5d] text-xs font-bold tracking-[0.08em] uppercase mb-4">
              <img src={getAssetUrl('images/logo.webp')} alt="Mohan Dental Care Surajpur Emblem" className="w-4 h-4 object-contain" />
              APPOINTMENT &amp; ENQUIRY
            </div>

            <h2 className="font-display font-bold text-[clamp(1.85rem,3.2vw,2.5rem)] text-[#03213B] leading-tight mb-3">
              Book Your Visit
            </h2>
            <p className="text-[#66737F] text-[0.98rem] sm:text-[1.05rem] leading-relaxed mb-8">
              Send us an appointment request online, or reach out directly by phone or WhatsApp for prompt scheduling.
            </p>

            {/* Direct Phone Lines */}
            <div className="space-y-3 mb-8">
              {[
                { href: 'tel:+918839557607', num: '+91 88395 57607', label: 'Primary Reception' },
                { href: 'tel:+916267104997', num: '+91 62671 04997', label: 'Alternative Line' },
              ].map(({ href, num, label }) => (
                <a
                  key={num}
                  href={href}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-[#E5E8E8] hover:border-[#123b5d]/40 hover:shadow-sm transition-all duration-200 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#E8F1F8] flex items-center justify-center text-[#123b5d] flex-shrink-0 group-hover:scale-105 transition-transform">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 3.5c-2 0-3.5 1.8-3.2 3.7C4.7 14.6 9.4 19.3 16.8 20.2c1.9.3 3.7-1.2 3.7-3.2v-1.8c0-.6-.4-1.1-1-1.3l-3.4-1.1c-.5-.2-1.1 0-1.4.4l-1 1.3c-2.3-1.1-4.1-2.9-5.2-5.2l1.3-1c.4-.3.6-.9.4-1.4L9.1 3.5c-.2-.6-.7-1-1.3-1H7z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-[#66737F] font-semibold">{label}</p>
                    <p className="font-bold text-[0.98rem] text-[#03213B]">{num}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="p-4 rounded-2xl bg-[#EEF1F1]/50 border border-[#E5E8E8]">
              <h4 className="font-bold text-xs uppercase tracking-wider text-[#03213B] mb-1">Clinic Timings</h4>
              <p className="text-sm text-[#66737F]">Monday – Saturday: 9:00 AM – 8:00 PM</p>
              <p className="text-sm text-[#66737F]">Sunday: By Appointment Only</p>
            </div>
          </div>

          {/* Right Form (7 cols) */}
          <div
            ref={rightRef}
            className={`lg:col-span-7 transition-all duration-700 delay-150 ${rightVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
          >
            <div className="bg-white rounded-3xl p-6 sm:p-9 shadow-[0_4px_25px_-6px_rgba(3,33,59,0.06)] border border-[#E5E8E8]">
              <h3 className="font-display font-bold text-[1.25rem] text-[#03213B] mb-6">
                Request an Appointment
              </h3>

              <form onSubmit={handleEmailSubmit} noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className={labelCls}>
                      Full Name <span className="text-[#123b5d]">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      value={form.name}
                      onChange={handleChange}
                      className={inputCls}
                      placeholder="e.g. Ramesh Kumar"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className={labelCls}>
                      Phone Number <span className="text-[#123b5d]">*</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      inputMode="tel"
                      value={form.phone}
                      onChange={handleChange}
                      className={inputCls}
                      placeholder="e.g. 98271 00000"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="service" className={labelCls}>
                      Clinical Service <span className="text-[#123b5d]">*</span>
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={form.service}
                      onChange={handleChange}
                      className={inputCls}
                    >
                      <option value="" disabled>Select a treatment</option>
                      {SERVICES.map((s) => (
                        <option key={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="date" className={labelCls}>
                      Preferred Date
                    </label>
                    <input
                      id="date"
                      name="date"
                      type="date"
                      min={today}
                      value={form.date}
                      onChange={handleChange}
                      className={inputCls}
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className={labelCls}>
                    Notes or Symptoms <span className="font-normal text-[#66737F]">(optional)</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    className={`${inputCls} resize-y min-h-[85px]`}
                    placeholder="Briefly describe your symptoms or inquiry..."
                  />
                </div>

                {status === 'error' && (
                  <div className="mb-4 p-3 rounded-xl bg-red-50 text-red-600 text-xs font-semibold">
                    Please provide your name, phone number, and required service.
                  </div>
                )}

                {status === 'sent_email' && (
                  <div className="mb-4 p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold flex items-center gap-2">
                    <svg className="w-5 h-5 text-emerald-600 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>Thank you! Your appointment request has been received. We will contact you shortly.</span>
                  </div>
                )}

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-shimmer flex-1 flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#123b5d] hover:bg-[#0c2a44] text-white font-bold shadow-[0_8px_20px_-6px_rgba(18,59,93,0.45)] transition-all duration-200 text-[0.94rem]"
                  >
                    {isSubmitting ? (
                      <span>Sending Request...</span>
                    ) : (
                      <>
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M22 2L11 13" />
                          <path d="M22 2l-7 20-4-9-9-4 20-7z" />
                        </svg>
                        <span>Book Appointment</span>
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsAppSubmit}
                    className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold shadow-sm hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-200 text-[0.94rem]"
                  >
                    <svg className="w-4 h-4 fill-white flex-shrink-0" viewBox="0 0 448 512">
                      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                    </svg>
                    <span>WhatsApp</span>
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>

        {/* ── 16. FAQ SECTION (Clean minimal accordion) ── */}
        <div
          ref={faqRef}
          className={`max-w-[820px] mx-auto transition-all duration-700 ease-out ${faqVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="text-center mb-10">
            <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8F1F8] border border-[#123b5d]/20 text-[#123b5d] text-xs font-bold tracking-[0.08em] uppercase mb-3 transition-all duration-500 ease-out ${faqVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
              FREQUENTLY ASKED QUESTIONS
            </div>
            <h3 className={`font-display font-bold text-[clamp(1.6rem,2.8vw,2.2rem)] text-[#03213B] transition-all duration-600 delay-100 ease-out ${faqVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
              Common Patient Questions
            </h3>
          </div>

          <div className="divide-y divide-[#E5E8E8] border-y border-[#E5E8E8]">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={faq.q} className="py-5">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between text-left gap-4 group focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display font-semibold text-[1.02rem] text-[#03213B] group-hover:text-[#123b5d] transition-colors">
                      {faq.q}
                    </span>
                    <span className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ease-out ${isOpen ? 'bg-[#E8F1F8] text-[#123b5d] rotate-45' : 'bg-[#EEF1F1] text-[#03213B]'}`}>
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                      </svg>
                    </span>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ease-out ${isOpen ? 'grid-rows-[1fr] opacity-100 mt-3' : 'grid-rows-[0fr] opacity-0 mt-0 pointer-events-none'
                      }`}
                  >
                    <div className="overflow-hidden pr-10 text-[0.94rem] leading-relaxed text-[#66737F]">
                      {faq.a}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
