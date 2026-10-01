import React from 'react';
import { MapPin, Phone, Mail, Clock, ArrowUpRight, Compass } from 'lucide-react';

export default function LocationCard({ location }) {
  return (
    <div className="group relative bg-white border border-neutral-border hover:border-gold/60 transition-all duration-300 shadow-subtle hover:shadow-elevated p-7 sm:p-9 flex flex-col justify-between">
      {/* Top Tag & Title */}
      <div>
        <div className="flex items-center justify-between pb-4 border-b border-neutral-border/60">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-mono font-bold tracking-widest text-gold bg-gold-pale px-2.5 py-1 border border-gold/30">
              {location.tag}
            </span>
            <span className="text-xs uppercase tracking-wider font-semibold text-navy-800">
              {location.badge}
            </span>
          </div>
          <span className="text-xs font-mono text-neutral-400">
            {location.city}
          </span>
        </div>

        {/* Location Title & Image Snippet */}
        <div className="mt-5">
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-navy-900 group-hover:text-gold transition-colors">
            {location.name}
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-neutral-500 font-light leading-relaxed">
            {location.description}
          </p>
        </div>

        {/* Visual Architectural Thumbnail */}
        <div className="mt-5 aspect-[16/8] overflow-hidden border border-neutral-border/80 bg-neutral-100">
          <img
            src={location.image}
            alt={location.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            loading="lazy"
          />
        </div>

        {/* Detail List */}
        <div className="mt-6 space-y-3.5 text-xs text-neutral-600">
          <div className="flex items-start gap-3">
            <MapPin size={16} className="text-gold shrink-0 mt-0.5" />
            <div>
              <p className="text-navy-900 font-medium">{location.addressLine1}</p>
              <p className="text-neutral-500">{location.addressLine2}, {location.city}, {location.state} {location.postalCode}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Phone size={16} className="text-gold shrink-0" />
            <a
              href={`tel:${location.phone}`}
              className="text-navy-800 hover:text-gold font-mono transition-colors"
            >
              {location.phoneDisplay}
            </a>
          </div>

          <div className="flex items-center gap-3">
            <Mail size={16} className="text-gold shrink-0" />
            <a
              href={`mailto:${location.email}`}
              className="text-navy-800 hover:text-gold transition-colors"
            >
              {location.email}
            </a>
          </div>

          <div className="flex items-start gap-3 pt-2 border-t border-neutral-border/60">
            <Clock size={16} className="text-gold shrink-0 mt-0.5" />
            <span className="text-neutral-500">{location.visitingHours}</span>
          </div>
        </div>
      </div>

      {/* Card Action Link */}
      <div className="mt-7 pt-4 border-t border-neutral-border/60 flex items-center justify-between">
        <a
          href={location.mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-navy-900 hover:text-gold transition-colors"
        >
          <span>Get Directions</span>
          <ArrowUpRight size={14} className="text-gold group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>

        <span className="text-[10px] uppercase tracking-widest text-neutral-400">
          Private Studio
        </span>
      </div>
    </div>
  );
}
