import React, { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, MapPin, Calendar, Compass, Layers } from 'lucide-react';

export default function Lightbox({ item, items, onClose, onNavigate }) {
  const currentIndex = items.findIndex((i) => i.id === item.id);
  const total = items.length;

  const handleNext = useCallback(() => {
    const nextIdx = (currentIndex + 1) % total;
    onNavigate(items[nextIdx]);
  }, [currentIndex, total, items, onNavigate]);

  const handlePrev = useCallback(() => {
    const prevIdx = (currentIndex - 1 + total) % total;
    onNavigate(items[prevIdx]);
  }, [currentIndex, total, items, onNavigate]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, handleNext, handlePrev]);

  // Prevent background scrolling while lightbox is active
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Portfolio Image Viewer"
      className="fixed inset-0 z-50 flex items-center justify-center bg-navy-950/95 backdrop-blur-xl animate-fade-in"
      onClick={onClose}
    >
      {/* Top Header Bar */}
      <div 
        className="absolute top-0 inset-x-0 p-4 sm:p-6 flex items-center justify-between z-20 bg-gradient-to-b from-navy-950/90 to-transparent"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3">
          <span className="text-xs font-mono text-gold bg-navy-900/80 px-2.5 py-1 border border-gold/40">
            {String(currentIndex + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
          </span>
          <span className="text-xs uppercase tracking-widest text-neutral-300 hidden sm:inline">
            {item.categoryLabel || item.category}
          </span>
        </div>

        <button
          type="button"
          onClick={onClose}
          aria-label="Close Lightbox"
          className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white hover:text-gold transition-colors focus:outline-none focus:ring-2 focus:ring-gold"
        >
          <X size={22} />
        </button>
      </div>

      {/* Navigation Arrows */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          handlePrev();
        }}
        aria-label="Previous Image"
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-navy-900/70 hover:bg-navy-900 text-white hover:text-gold border border-white/15 hover:border-gold transition-all shadow-luxury"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          handleNext();
        }}
        aria-label="Next Image"
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-navy-900/70 hover:bg-navy-900 text-white hover:text-gold border border-white/15 hover:border-gold transition-all shadow-luxury"
      >
        <ChevronRight size={24} />
      </button>

      {/* Main Image Stage & Editorial Caption */}
      <div
        className="relative max-w-6xl w-full max-h-[85vh] p-4 sm:p-6 flex flex-col items-center justify-center z-10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative overflow-hidden border border-white/15 shadow-2xl max-h-[65vh] w-auto">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-contain max-h-[65vh] mx-auto select-none"
          />
        </div>

        {/* Caption & Metadata Bar */}
        <div className="w-full max-w-4xl mt-4 bg-navy-900/90 backdrop-blur-md p-4 sm:p-5 border border-white/10 text-white">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-2 mb-2">
            <h3 className="font-serif text-lg sm:text-xl font-semibold text-white">
              {item.title}
            </h3>
            <div className="flex items-center gap-3 text-xs text-gold-light">
              <span className="flex items-center gap-1">
                <MapPin size={12} className="text-gold" />
                <span>{item.location}</span>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1 font-mono">
                <Calendar size={12} className="text-gold" />
                <span>{item.year}</span>
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-neutral-300">
            <p className="max-w-xl font-light">
              {item.description}
            </p>
            {item.scope && (
              <span className="text-[11px] font-mono text-gold/90 shrink-0 bg-white/5 px-2.5 py-1 border border-gold/30">
                Scope: {item.scope}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
