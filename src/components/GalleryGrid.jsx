import React, { useState } from 'react';
import { Maximize2, MapPin, Calendar, Sparkles } from 'lucide-react';
import { galleryItems, galleryCategories } from '../data/gallery';
import Lightbox from './Lightbox';

export default function GalleryGrid() {
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [activeLightboxItem, setActiveLightboxItem] = useState(null);

  const filteredItems = selectedCategory === 'ALL'
    ? galleryItems
    : galleryItems.filter((item) => item.category === selectedCategory);

  return (
    <div className="w-full">
      {/* Category Filter Bar */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10 sm:mb-14">
        {galleryCategories.map((cat) => {
          const isActive = selectedCategory === cat.id;
          const count = cat.id === 'ALL' 
            ? galleryItems.length 
            : galleryItems.filter((i) => i.category === cat.id).length;

          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 sm:px-5 py-2.5 text-xs font-semibold uppercase tracking-wider transition-all duration-300 border ${
                isActive
                  ? 'bg-navy-900 text-white border-gold shadow-sm'
                  : 'bg-white text-navy-800/80 border-neutral-border hover:border-gold/50 hover:bg-gold-pale/30'
              }`}
            >
              <span>{cat.label}</span>
              <span className={`ml-2 text-[10px] font-mono ${isActive ? 'text-gold-light' : 'text-neutral-400'}`}>
                ({count})
              </span>
            </button>
          );
        })}
      </div>

      {/* Grid: Strictly Prioritizing Landscape Ratios
          Desktop: 3 columns (lg:grid-cols-3)
          Tablet: 2 columns (md:grid-cols-2)
          Mobile: 1 column (grid-cols-1)
      */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredItems.map((item) => (
          <article
            key={item.id}
            onClick={() => setActiveLightboxItem(item)}
            className="group relative bg-white border border-neutral-border hover:border-gold/60 transition-all duration-300 shadow-subtle hover:shadow-elevated overflow-hidden cursor-pointer"
          >
            {/* Landscape Viewport */}
            <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100">
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/20 to-transparent opacity-60 group-hover:opacity-75 transition-opacity"></div>

              {/* Category Pill */}
              <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-navy-900 border border-neutral-border/60">
                {item.categoryLabel}
              </div>

              {/* Zoom Trigger Button */}
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-navy-900/90 text-gold-light p-2 border border-gold/40 shadow-sm">
                <Maximize2 size={15} />
              </div>

              {/* Title & Metadata overlay */}
              <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                <div className="flex items-center gap-3 text-[11px] text-neutral-300 mb-1">
                  <span className="flex items-center gap-1">
                    <MapPin size={11} className="text-gold" />
                    <span>{item.location}</span>
                  </span>
                  <span>•</span>
                  <span className="font-mono text-gold-light">{item.year}</span>
                </div>
                <h3 className="font-serif text-lg font-bold tracking-wide text-white group-hover:text-gold-light transition-colors drop-shadow-sm line-clamp-1">
                  {item.title}
                </h3>
              </div>
            </div>

            {/* Bottom Card Footer with Scope */}
            <div className="p-4 bg-white border-t border-neutral-border/60 flex items-center justify-between text-xs">
              <span className="text-neutral-500 truncate max-w-[80%]">
                {item.scope}
              </span>
              <span className="text-gold font-semibold uppercase tracking-wider text-[11px] shrink-0">
                Inspect
              </span>
            </div>
          </article>
        ))}
      </div>

      {filteredItems.length === 0 && (
        <div className="text-center py-16 bg-white border border-neutral-border">
          <p className="font-serif text-lg text-navy-900">No projects currently listed in this category.</p>
          <button
            type="button"
            onClick={() => setSelectedCategory('ALL')}
            className="mt-3 text-xs uppercase tracking-wider text-gold hover:underline font-semibold"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* Lightbox Modal */}
      {activeLightboxItem && (
        <Lightbox
          item={activeLightboxItem}
          items={filteredItems}
          onClose={() => setActiveLightboxItem(null)}
          onNavigate={(nextItem) => setActiveLightboxItem(nextItem)}
        />
      )}
    </div>
  );
}
