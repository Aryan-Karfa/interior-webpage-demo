import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, CheckCircle2, Mail, Phone, MapPin } from 'lucide-react';
import SocialLinks from './SocialLinks';
import { locations, socialLinks } from '../data/locations';

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (newsletterEmail && newsletterEmail.includes('@')) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setNewsletterEmail('');
      }, 5000);
    }
  };

  return (
    <footer className="bg-navy-900 text-white border-t border-gold/20 pt-16 pb-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-white/10">
          {/* Brand Column (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <div>
              <span className="font-serif tracking-ultra-wide text-2xl font-bold text-white block">
                ATELIER VÉLÈNE
              </span>
              <span className="text-[10px] tracking-widest-luxury uppercase text-gold-light font-medium">
                Architecture & Interior Design Studio
              </span>
            </div>
            <p className="text-sm text-neutral-300 font-light leading-relaxed max-w-sm">
              We design luminous, warm, and transcendent living environments shaped around natural light, authentic materiality, and the quiet intimacy of human rituals.
            </p>
            <div className="pt-2">
              <span className="text-xs uppercase tracking-wider text-gold/80 block mb-2.5 font-medium">
                Connect With The Atelier
              </span>
              <SocialLinks variant="dark" />
            </div>
          </div>

          {/* Quick Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-widest-luxury text-gold">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-neutral-300">
              <li>
                <Link to="/home" className="hover:text-gold-light transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-gold-light transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-gold-light transition-colors">Services & Disciplines</Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-gold-light transition-colors">Portfolio Gallery</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-gold-light transition-colors">Start a Project</Link>
              </li>
              <li>
                <Link to="/" className="text-gold-light/70 hover:text-gold transition-colors text-xs uppercase tracking-wider">
                  Visual Intro (Carousel)
                </Link>
              </li>
            </ul>
          </div>

          {/* Studios / Presence (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-widest-luxury text-gold">
              Studios & Presence
            </h4>
            <div className="space-y-4 text-xs text-neutral-300">
              {locations.map((loc) => (
                <div key={loc.id} className="border-l-2 border-gold/40 pl-3">
                  <span className="text-[10px] font-semibold tracking-wider uppercase text-gold-light block">
                    {loc.badge} — {loc.city}
                  </span>
                  <p className="text-neutral-300 mt-0.5">{loc.addressLine1}</p>
                  <p className="text-neutral-400">{loc.city}, {loc.state}</p>
                  <a
                    href={`tel:${loc.phone}`}
                    className="text-neutral-300 hover:text-gold-light inline-block mt-1 font-mono text-[11px]"
                  >
                    {loc.phoneDisplay}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter / Direct Dialogue (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-widest-luxury text-gold">
              Private Journal
            </h4>
            <p className="text-xs text-neutral-300 leading-relaxed">
              Receive quarterly architectural essays, monograph releases, and private project unveilings.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2.5">
              <div className="relative">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="w-full bg-white/5 border border-white/20 focus:border-gold px-3.5 py-2.5 text-xs text-white placeholder-neutral-400 focus:outline-none focus:ring-1 focus:ring-gold transition-colors"
                />
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center px-4 py-2.5 bg-gold hover:bg-gold-light text-navy-950 font-semibold text-xs uppercase tracking-wider transition-colors duration-200"
              >
                <span>Subscribe to Journal</span>
                <ArrowUpRight size={13} className="ml-1" />
              </button>

              {subscribed && (
                <div className="flex items-center gap-1.5 text-emerald-400 text-xs mt-2 animate-fade-in">
                  <CheckCircle2 size={13} />
                  <span>Thank you. You have been added to our private register.</span>
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Subtle Accreditation */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-400 gap-4">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} Atelier Vélène Architecture & Interiors.</span>
            <span className="hidden sm:inline text-neutral-600">|</span>
            <span className="text-[11px] text-neutral-400">All Rights Reserved.</span>
          </div>

          <div className="flex items-center space-x-6 text-[11px] text-neutral-400">
            <span className="hover:text-gold transition-colors cursor-pointer">Privacy Charter</span>
            <span className="hover:text-gold transition-colors cursor-pointer">Design Ethics</span>
            <span className="hover:text-gold transition-colors cursor-pointer">Client Access</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
