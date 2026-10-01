import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight, Phone, MessageCircle } from 'lucide-react';
import { socialLinks } from '../data/locations';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'Home', path: '/home' },
    { label: 'About Us', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => {
    if (path === '/home' && (location.pathname === '/home' || location.pathname === '/')) {
      return true;
    }
    return location.pathname === path;
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-subtle border-b border-neutral-border/60 py-3.5'
            : 'bg-white/80 backdrop-blur-sm border-b border-neutral-border/30 py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Studio Brand Logo */}
            <Link 
              to="/home" 
              className="group flex flex-col focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            >
              <span className="font-serif tracking-ultra-wide text-lg sm:text-xl md:text-2xl font-semibold text-navy-900 group-hover:text-gold transition-colors duration-300">
                ATELIER VÉLÈNE
              </span>
              <span className="text-[9px] sm:text-[10px] tracking-widest-luxury uppercase text-neutral-muted group-hover:text-navy-800 transition-colors">
                Architecture & Interiors
              </span>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center space-x-1 lg:space-x-8" aria-label="Main Navigation">
              {navLinks.map((link) => {
                const active = isActive(link.path);
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`relative py-2 text-xs lg:text-sm tracking-wider uppercase font-medium transition-colors duration-200 ${
                      active ? 'text-navy-900 font-semibold' : 'text-navy-800/80 hover:text-gold'
                    }`}
                  >
                    {link.label}
                    {active && (
                      <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold rounded-full transition-all duration-300" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right Actions: WhatsApp quick badge & Start a Project CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href={socialLinks.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs tracking-wider text-navy-800 hover:text-emerald-700 transition-colors px-2 py-1"
                title="Chat on WhatsApp"
              >
                <MessageCircle size={15} className="text-emerald-600" />
                <span className="hidden xl:inline">Concierge</span>
              </a>

              <Link
                to="/contact"
                className="group relative inline-flex items-center justify-center px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-navy-900 hover:bg-navy-800 border border-gold/40 hover:border-gold rounded-none transition-all duration-300 shadow-sm hover:shadow-gold-glow"
              >
                <span>Start a Project</span>
                <ArrowUpRight size={14} className="ml-1.5 text-gold-light group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex md:hidden items-center gap-2">
              <Link
                to="/contact"
                className="px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-white bg-navy-900 rounded-none border border-gold/30"
              >
                Inquire
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-navy-900 hover:text-gold focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden bg-navy-900/60 backdrop-blur-sm animate-fade-in">
          <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-white shadow-2xl p-6 flex flex-col justify-between border-l border-gold/20 animate-slide-left">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-neutral-border">
                <div className="flex flex-col">
                  <span className="font-serif tracking-wider text-lg font-bold text-navy-900">
                    ATELIER VÉLÈNE
                  </span>
                  <span className="text-[9px] tracking-widest-luxury uppercase text-neutral-muted">
                    Architecture & Interiors
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 text-navy-900 hover:text-gold"
                  aria-label="Close menu"
                >
                  <X size={22} />
                </button>
              </div>

              {/* Navigation Links List */}
              <nav className="mt-8 flex flex-col space-y-4">
                {navLinks.map((link) => {
                  const active = isActive(link.path);
                  return (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={`text-base font-medium uppercase tracking-wider py-2 border-b border-neutral-border/40 transition-colors flex items-center justify-between ${
                        active ? 'text-gold font-semibold' : 'text-navy-800 hover:text-gold'
                      }`}
                    >
                      <span>{link.label}</span>
                      {active && <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>}
                    </Link>
                  );
                })}
              </nav>

              {/* Visual Intro Landing Link */}
              <div className="mt-6 pt-4">
                <Link
                  to="/"
                  className="text-xs uppercase tracking-widest text-neutral-muted hover:text-navy-900 flex items-center gap-1"
                >
                  <span>Launch Visual Intro (Carousel)</span>
                  <ArrowUpRight size={12} />
                </Link>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-6 border-t border-neutral-border space-y-4">
              <Link
                to="/contact"
                className="w-full inline-flex items-center justify-center px-4 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-navy-900 hover:bg-navy-800 border border-gold/40 text-center"
              >
                <span>Start a Project</span>
                <ArrowUpRight size={14} className="ml-1.5 text-gold-light" />
              </Link>

              <div className="flex justify-between items-center text-xs text-neutral-muted pt-2">
                <span>Direct Studio:</span>
                <a href="tel:+913322874590" className="text-navy-900 font-medium hover:text-gold">
                  +91 33 2287 4590
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
