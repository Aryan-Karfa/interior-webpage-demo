import React from 'react';
import { Instagram, Facebook, MessageCircle } from 'lucide-react';
import { socialLinks } from '../data/locations';

export default function SocialLinks({ variant = 'default', className = '' }) {
  // Variants:
  // 'default': light background (navy border/text, hover gold)
  // 'dark': navy background (white/gold text)
  // 'minimal': without background circles

  const isDark = variant === 'dark';

  const baseBtnClass = isDark
    ? 'text-white/80 hover:text-gold-light border-white/15 hover:border-gold-light/50 bg-white/5 hover:bg-white/10'
    : 'text-navy-800 hover:text-gold border-navy-800/15 hover:border-gold/50 bg-white hover:bg-gold-pale/50';

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Instagram */}
      <a
        href={socialLinks.instagram.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Follow Interior Demo on Instagram"
        className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300 transform hover:-translate-y-0.5 shadow-sm ${baseBtnClass}`}
      >
        <Instagram size={18} strokeWidth={1.75} />
      </a>

      {/* Facebook */}
      <a
        href={socialLinks.facebook.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Follow Interior Demo on Facebook"
        className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300 transform hover:-translate-y-0.5 shadow-sm ${baseBtnClass}`}
      >
        <Facebook size={18} strokeWidth={1.75} />
      </a>

      {/* WhatsApp */}
      <a
        href={socialLinks.whatsapp.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Interior Demo Concierge on WhatsApp"
        className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300 transform hover:-translate-y-0.5 shadow-sm ${
          isDark
            ? 'text-gold-light border-gold/30 hover:border-gold bg-gold/10 hover:bg-gold/20'
            : 'text-emerald-700 hover:text-emerald-800 border-emerald-600/20 hover:border-emerald-600 bg-emerald-50/50 hover:bg-emerald-50'
        }`}
      >
        <MessageCircle size={18} strokeWidth={1.75} />
      </a>
    </div>
  );
}
