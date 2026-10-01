import React from 'react';
import { Camera, Sparkles } from 'lucide-react';
import GalleryGrid from '../components/GalleryGrid';

export default function Gallery() {
  return (
    <div className="bg-ivory text-navy-900 pt-20 sm:pt-24 min-h-screen">
      {/* Editorial Header */}
      <section className="py-16 md:py-24 bg-white border-b border-neutral-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gold mb-3">
            <Camera size={14} />
            <span>Curated Portfolio Archive</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-navy-900 tracking-tight leading-[1.15]">
            Visual Studies In Proportion & Light.
          </h1>
          <p className="mt-4 text-sm sm:text-base text-neutral-600 font-light leading-relaxed">
            A comprehensive retrospective of our private residential commissions, sky penthouses, and bespoke hospitality spaces. Click any study to enter high-resolution inspection.
          </p>
        </div>
      </section>

      {/* Main Gallery Grid Section */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <GalleryGrid />
      </section>
    </div>
  );
}
