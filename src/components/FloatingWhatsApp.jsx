import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { socialLinks } from '../data/locations';

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Subtle intro prompt / badge */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-full border border-gold/30 shadow-luxury text-xs text-navy-800 animate-fade-in transition-all">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="font-medium">Direct Concierge</span>
          <button 
            onClick={() => setShowTooltip(false)}
            aria-label="Dismiss message"
            className="text-neutral-muted hover:text-navy-900 ml-1 p-0.5"
          >
            <X size={12} />
          </button>
        </div>
      )}

      {/* Main floating button */}
      <a
        href={socialLinks.whatsapp.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Connect with Atelier Vélène via WhatsApp"
        className="group relative flex items-center justify-center w-13 h-13 p-3.5 bg-navy-900 text-gold-light hover:text-white rounded-full border border-gold/40 shadow-luxury hover:shadow-gold-glow hover:border-gold transition-all duration-300 transform hover:scale-105"
      >
        <MessageCircle size={24} className="text-gold-light group-hover:scale-110 transition-transform duration-300" />
        <span className="sr-only">Open WhatsApp chat</span>
        {/* Subtle ripple wave */}
        <span className="absolute -inset-1 rounded-full border border-gold/20 animate-ping pointer-events-none opacity-50"></span>
      </a>
    </div>
  );
}
