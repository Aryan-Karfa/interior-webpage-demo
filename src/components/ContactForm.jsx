import React, { useState } from 'react';
import { Send, CheckCircle2, Sparkles, AlertCircle, ArrowUpRight } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    projectType: 'Residential',
    location: '',
    budget: '₹25L – ₹50L',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const projectTypes = [
    'Residential Architecture',
    'Penthouse Interior',
    'Commercial Workspace',
    'Hospitality & Wellness',
    'Historic Renovation',
    'Furniture & Styling Curation'
  ];

  const budgetTiers = [
    '₹25 Lakhs – ₹50 Lakhs',
    '₹50 Lakhs – ₹1.5 Crore',
    '₹1.5 Crore – ₹5 Crore',
    '₹5 Crore + (Estate Scale)',
    'To Be Discussed'
  ];

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) errs.fullName = 'Please provide your full name.';
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email format.';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Please provide your contact number.';
    }
    if (!formData.location.trim()) {
      errs.location = 'Please state your project city or region.';
    }
    if (!formData.message.trim() || formData.message.length < 15) {
      errs.message = 'Please share a brief note about your space (min 15 characters).';
    }
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Simulate realistic asynchronous network submission for the prototype
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      projectType: 'Residential Architecture',
      location: '',
      budget: '₹25 Lakhs – ₹50 Lakhs',
      message: ''
    });
  };

  if (submitted) {
    return (
      <div className="bg-white border border-gold/40 p-8 sm:p-12 text-center shadow-luxury animate-fade-in">
        <div className="w-16 h-16 rounded-full bg-gold-pale border border-gold flex items-center justify-center mx-auto mb-5 text-gold-dark">
          <CheckCircle2 size={32} />
        </div>

        <div className="inline-block text-[11px] font-mono uppercase tracking-widest text-gold-dark bg-gold-pale px-3 py-1 mb-2 border border-gold/30">
          Prototype Ingestion Confirmed
        </div>

        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-navy-900">
          Thank you, {formData.fullName}.
        </h3>

        <p className="mt-3 text-sm text-neutral-600 max-w-md mx-auto leading-relaxed">
          Your project inquiry for <strong>{formData.projectType}</strong> in <strong>{formData.location}</strong> has been safely recorded in our client consultation queue.
        </p>

        <div className="mt-6 p-4 bg-neutral-subtle border border-neutral-border text-xs text-neutral-500 max-w-md mx-auto text-left space-y-1">
          <div className="flex justify-between">
            <span>Client Reference:</span>
            <span className="font-mono text-navy-900">#AV-{Math.floor(100000 + Math.random() * 900000)}</span>
          </div>
          <div className="flex justify-between">
            <span>Direct Follow-up:</span>
            <span className="text-navy-900 font-medium">Within 24 Business Hours</span>
          </div>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            type="button"
            onClick={handleReset}
            className="px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-navy-900 border border-neutral-border hover:border-gold transition-colors"
          >
            Submit Another Inquiry
          </button>
          <a
            href="tel:+913322874590"
            className="px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-navy-900 hover:bg-navy-800 transition-colors"
          >
            Speak With Studio Now
          </a>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="bg-white border border-neutral-border p-6 sm:p-10 shadow-subtle">
      <div className="mb-8 pb-6 border-b border-neutral-border/60">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gold">
          <Sparkles size={14} />
          <span>Project Dialogue</span>
        </div>
        <h3 className="font-serif text-2xl font-bold text-navy-900 mt-1">
          Initiate Your Commission
        </h3>
        <p className="text-xs sm:text-sm text-neutral-500 mt-1 font-light">
          Share your architectural aspirations. Our design principals review all new commissions weekly.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
        {/* Full Name */}
        <div>
          <label htmlFor="fullName" className="block text-xs font-semibold uppercase tracking-wider text-navy-900 mb-1.5">
            Full Name <span className="text-gold">*</span>
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="e.g. Priya & Siddharth Roy"
            className={`w-full px-3.5 py-2.5 text-xs sm:text-sm bg-neutral-subtle/50 border ${
              errors.fullName ? 'border-red-400 focus:ring-red-400' : 'border-neutral-border focus:border-gold'
            } focus:outline-none focus:ring-1 focus:ring-gold transition-colors`}
          />
          {errors.fullName && (
            <p className="mt-1 text-[11px] text-red-500 flex items-center gap-1">
              <AlertCircle size={12} /> {errors.fullName}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-navy-900 mb-1.5">
            Email Address <span className="text-gold">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="e.g. contact@domain.com"
            className={`w-full px-3.5 py-2.5 text-xs sm:text-sm bg-neutral-subtle/50 border ${
              errors.email ? 'border-red-400 focus:ring-red-400' : 'border-neutral-border focus:border-gold'
            } focus:outline-none focus:ring-1 focus:ring-gold transition-colors`}
          />
          {errors.email && (
            <p className="mt-1 text-[11px] text-red-500 flex items-center gap-1">
              <AlertCircle size={12} /> {errors.email}
            </p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-navy-900 mb-1.5">
            Phone / WhatsApp <span className="text-gold">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="e.g. +91 98300 12345"
            className={`w-full px-3.5 py-2.5 text-xs sm:text-sm bg-neutral-subtle/50 border ${
              errors.phone ? 'border-red-400 focus:ring-red-400' : 'border-neutral-border focus:border-gold'
            } focus:outline-none focus:ring-1 focus:ring-gold transition-colors`}
          />
          {errors.phone && (
            <p className="mt-1 text-[11px] text-red-500 flex items-center gap-1">
              <AlertCircle size={12} /> {errors.phone}
            </p>
          )}
        </div>

        {/* Project Location */}
        <div>
          <label htmlFor="location" className="block text-xs font-semibold uppercase tracking-wider text-navy-900 mb-1.5">
            Project City / Site <span className="text-gold">*</span>
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="e.g. Kolkata (Alipore), Mumbai (Worli)"
            className={`w-full px-3.5 py-2.5 text-xs sm:text-sm bg-neutral-subtle/50 border ${
              errors.location ? 'border-red-400 focus:ring-red-400' : 'border-neutral-border focus:border-gold'
            } focus:outline-none focus:ring-1 focus:ring-gold transition-colors`}
          />
          {errors.location && (
            <p className="mt-1 text-[11px] text-red-500 flex items-center gap-1">
              <AlertCircle size={12} /> {errors.location}
            </p>
          )}
        </div>

        {/* Project Type */}
        <div>
          <label htmlFor="projectType" className="block text-xs font-semibold uppercase tracking-wider text-navy-900 mb-1.5">
            Discipline / Scope
          </label>
          <select
            id="projectType"
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
            className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-neutral-subtle/50 border border-neutral-border focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold transition-colors"
          >
            {projectTypes.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>

        {/* Approximate Budget */}
        <div>
          <label htmlFor="budget" className="block text-xs font-semibold uppercase tracking-wider text-navy-900 mb-1.5">
            Anticipated Investment Tier
          </label>
          <select
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-neutral-subtle/50 border border-neutral-border focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold transition-colors"
          >
            {budgetTiers.map((b) => (
              <option key={b} value={b}>{b}</option>
            ))}
          </select>
        </div>

        {/* Message */}
        <div className="sm:col-span-2">
          <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-navy-900 mb-1.5">
            Tell Us About Your Space & Vision <span className="text-gold">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            placeholder="Share details on your floor area, architectural stage, lifestyle requirements, and preferred timeline..."
            className={`w-full px-3.5 py-2.5 text-xs sm:text-sm bg-neutral-subtle/50 border ${
              errors.message ? 'border-red-400 focus:ring-red-400' : 'border-neutral-border focus:border-gold'
            } focus:outline-none focus:ring-1 focus:ring-gold transition-colors`}
          />
          {errors.message && (
            <p className="mt-1 text-[11px] text-red-500 flex items-center gap-1">
              <AlertCircle size={12} /> {errors.message}
            </p>
          )}
        </div>
      </div>

      <div className="mt-7 pt-5 border-t border-neutral-border/60 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-[11px] text-neutral-400">
          All communications are kept strictly confidential by our partners.
        </p>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 bg-navy-900 hover:bg-navy-800 text-white text-xs font-semibold uppercase tracking-wider border border-gold/40 hover:border-gold transition-all duration-300 shadow-sm disabled:opacity-50"
        >
          {isSubmitting ? (
            <span>Securing Consultation Slot...</span>
          ) : (
            <>
              <span>Submit Project Enquiry</span>
              <ArrowUpRight size={14} className="text-gold-light" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
