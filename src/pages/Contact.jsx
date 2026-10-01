import React, { useState } from 'react';
import { Mail, Phone, MapPin, MessageCircle, Clock, Compass, ExternalLink, Sparkles } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import SocialLinks from '../components/SocialLinks';
import { locations, socialLinks } from '../data/locations';

export default function Contact() {
  const [selectedStudio, setSelectedStudio] = useState('studio-01');
  const activeStudio = locations.find((l) => l.id === selectedStudio) || locations[0];

  return (
    <div className="bg-ivory text-navy-900 pt-20 sm:pt-24 min-h-screen">
      {/* Editorial Header */}
      <section className="py-16 md:py-24 bg-white border-b border-neutral-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gold mb-3">
              <Compass size={14} />
              <span>Client Advisory & Inquiries</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-navy-900 tracking-tight leading-[1.15]">
              Begin Your Architectural Journey.
            </h1>
            <p className="mt-4 text-sm sm:text-base text-neutral-600 font-light leading-relaxed">
              Whether you are commissioning a new private estate, redesigning a seafront penthouse, or seeking consultation for executive spaces, our design team welcomes your inquiry.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Studios, Map Placeholder, Direct Concierge (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            {/* Quick Contact Ribbon */}
            <div className="bg-white border border-neutral-border p-6 shadow-subtle space-y-4">
              <h3 className="font-serif text-lg font-bold text-navy-900">
                Direct Communications
              </h3>

              <div className="space-y-3 text-xs text-neutral-600">
                <div className="flex items-center gap-3">
                  <Mail size={16} className="text-gold" />
                  <div>
                    <span className="text-neutral-400 block text-[10px] uppercase tracking-wider">General Enquiries</span>
                    <a href={`mailto:${socialLinks.email}`} className="text-navy-900 font-medium hover:text-gold transition-colors">
                      {socialLinks.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone size={16} className="text-gold" />
                  <div>
                    <span className="text-neutral-400 block text-[10px] uppercase tracking-wider">Headquarters Reception</span>
                    <a href={`tel:${socialLinks.generalPhone}`} className="text-navy-900 font-medium hover:text-gold font-mono transition-colors">
                      {socialLinks.generalPhone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <MessageCircle size={16} className="text-emerald-600" />
                  <div>
                    <span className="text-neutral-400 block text-[10px] uppercase tracking-wider">Instant Concierge</span>
                    <a
                      href={socialLinks.whatsapp.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-700 font-semibold hover:underline"
                    >
                      Chat on WhatsApp (+91 98300 00000)
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-neutral-border/60">
                <span className="text-[10px] uppercase tracking-wider text-neutral-400 block mb-2 font-medium">
                  Follow Our Journal & Projects
                </span>
                <SocialLinks />
              </div>
            </div>

            {/* Studio Selector & Address Box */}
            <div className="bg-white border border-neutral-border p-6 shadow-subtle">
              <div className="flex items-center justify-between pb-3 border-b border-neutral-border/60 mb-4">
                <h3 className="font-serif text-lg font-bold text-navy-900">
                  Presentation Studios
                </h3>
                {/* Tabs to switch studio preview */}
                <div className="flex items-center gap-1 bg-neutral-100 p-1 border border-neutral-200">
                  <button
                    type="button"
                    onClick={() => setSelectedStudio('studio-01')}
                    className={`px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider transition-colors ${
                      selectedStudio === 'studio-01' ? 'bg-white text-navy-900 shadow-sm' : 'text-neutral-500 hover:text-navy-900'
                    }`}
                  >
                    Kolkata
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedStudio('studio-02')}
                    className={`px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider transition-colors ${
                      selectedStudio === 'studio-02' ? 'bg-white text-navy-900 shadow-sm' : 'text-neutral-500 hover:text-navy-900'
                    }`}
                  >
                    Mumbai
                  </button>
                </div>
              </div>

              {/* Active Studio Details */}
              <div className="space-y-3 text-xs text-neutral-600 animate-fade-in">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono font-bold text-gold uppercase bg-gold-pale px-2 py-0.5 border border-gold/30">
                    {activeStudio.tag}
                  </span>
                  <span className="font-semibold text-navy-900 uppercase tracking-wider text-[11px]">
                    {activeStudio.badge}
                  </span>
                </div>

                <p className="font-medium text-navy-900 text-sm">
                  {activeStudio.name}
                </p>

                <p className="text-neutral-500 leading-relaxed">
                  {activeStudio.fullAddress}
                </p>

                <div className="pt-2 border-t border-neutral-border/60 flex items-center justify-between">
                  <span className="text-[11px] text-neutral-500">
                    Visiting Hours: {activeStudio.visitingHours}
                  </span>
                </div>
              </div>
            </div>

            {/* Interactive Architectural Map Placeholder */}
            <div className="bg-white border border-neutral-border overflow-hidden shadow-subtle">
              <div className="p-3 bg-neutral-subtle border-b border-neutral-border flex items-center justify-between text-xs">
                <span className="font-medium text-navy-900 flex items-center gap-1.5">
                  <MapPin size={13} className="text-gold" />
                  <span>{activeStudio.city} Studio Map Placeholder</span>
                </span>
                <a
                  href={activeStudio.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] text-gold font-semibold uppercase hover:underline"
                >
                  <span>Google Maps</span>
                  <ExternalLink size={12} />
                </a>
              </div>

              {/* Stylized Architectural Map Graphic */}
              <div className="relative aspect-[16/9] bg-[#E9EBE8] flex items-center justify-center p-6 text-center overflow-hidden">
                {/* Abstract grid lines simulating city architectural plan */}
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#0B1F3A_1px,transparent_1px)] [background-size:16px_16px]"></div>
                <div className="absolute inset-y-0 left-1/3 w-px bg-navy-900/15"></div>
                <div className="absolute inset-y-0 left-2/3 w-px bg-navy-900/15"></div>
                <div className="absolute inset-x-0 top-1/2 h-px bg-navy-900/15"></div>

                <div className="relative z-10 bg-white/95 backdrop-blur-md p-4 border border-gold/40 shadow-elevated max-w-xs">
                  <div className="w-8 h-8 rounded-full bg-navy-900 text-gold mx-auto mb-2 flex items-center justify-center shadow-gold-glow">
                    <MapPin size={16} />
                  </div>
                  <h4 className="font-serif text-sm font-bold text-navy-900">
                    {activeStudio.name}
                  </h4>
                  <p className="text-[11px] text-neutral-500 mt-1">
                    {activeStudio.addressLine1}, {activeStudio.city}
                  </p>
                  <span className="inline-block mt-2 text-[10px] font-mono text-gold-dark uppercase tracking-widest font-semibold">
                    Valet Parking Available
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Inquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
