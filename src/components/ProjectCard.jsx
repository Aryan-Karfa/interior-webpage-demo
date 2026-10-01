import React from 'react';
import { ArrowUpRight, MapPin, Calendar, Maximize2 } from 'lucide-react';

export default function ProjectCard({ project, onSelect }) {
  return (
    <article
      onClick={() => onSelect && onSelect(project)}
      className="group relative bg-white border border-neutral-border hover:border-gold/60 transition-all duration-300 shadow-subtle hover:shadow-elevated overflow-hidden cursor-pointer"
    >
      {/* Landscape Image Container */}
      <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-navy-950/20 to-transparent opacity-75 group-hover:opacity-60 transition-opacity"></div>

        {/* Top Badges */}
        <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-navy-900 border border-neutral-border/50">
          {project.category}
        </div>

        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-navy-900/90 text-gold-light p-1.5 border border-gold/30">
          <Maximize2 size={14} />
        </div>

        {/* Bottom Content within Image */}
        <div className="absolute inset-x-0 bottom-0 p-5 text-white">
          <div className="flex items-center gap-3 text-[11px] text-neutral-300 mb-1">
            <span className="flex items-center gap-1">
              <MapPin size={12} className="text-gold" />
              <span>{project.location}</span>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1 font-mono">
              <Calendar size={12} className="text-gold" />
              <span>{project.year}</span>
            </span>
          </div>

          <h3 className="font-serif text-lg sm:text-xl font-bold tracking-wide text-white group-hover:text-gold-light transition-colors drop-shadow-sm">
            {project.title}
          </h3>
        </div>
      </div>

      {/* Card Metadata Bar */}
      <div className="px-5 py-3.5 bg-white flex items-center justify-between border-t border-neutral-border/60 text-xs">
        <span className="text-neutral-500 font-mono text-[11px]">
          Scope: <span className="text-navy-900 font-sans font-medium">{project.area}</span>
        </span>

        <span className="inline-flex items-center gap-1 font-semibold uppercase tracking-wider text-navy-800 group-hover:text-gold transition-colors text-[11px]">
          <span>View Study</span>
          <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </span>
      </div>
    </article>
  );
}
