import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, CheckCircle2, Clock, Sparkles, X } from 'lucide-react';

export default function ServiceCard({ service, index }) {
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  return (
    <>
      <article className="group relative bg-white border border-neutral-border hover:border-gold/60 transition-all duration-300 shadow-subtle hover:shadow-elevated flex flex-col justify-between overflow-hidden">
        {/* Top Image Section */}
        <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
          
          <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-navy-900 border border-neutral-border/60">
            {service.category}
          </div>

          <div className="absolute bottom-3 right-3 bg-navy-900/80 backdrop-blur-sm px-2.5 py-0.5 text-[10px] font-mono text-gold-light">
            Phase 0{index + 1}
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-7 flex flex-col flex-grow justify-between">
          <div>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-navy-900 group-hover:text-gold transition-colors duration-200">
              {service.title}
            </h3>

            <p className="mt-2.5 text-xs sm:text-sm text-neutral-600 leading-relaxed font-light">
              {service.shortDescription}
            </p>

            {/* Scope Snippet */}
            <div className="mt-4 pt-3 border-t border-neutral-border/60">
              <span className="text-[10px] uppercase tracking-wider font-semibold text-gold-dark block mb-1">
                Design Scope:
              </span>
              <p className="text-xs text-neutral-500 line-clamp-2">
                {service.scope}
              </p>
            </div>
          </div>

          {/* Card Footer Actions */}
          <div className="mt-6 pt-4 border-t border-neutral-border/60 flex items-center justify-between">
            <button
              type="button"
              onClick={() => setIsDetailOpen(true)}
              className="text-xs font-semibold uppercase tracking-wider text-navy-800 hover:text-gold transition-colors"
            >
              <span>Explore Deliverables</span>
            </button>

            <Link
              to="/contact"
              className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-gold hover:text-gold-dark transition-colors"
            >
              <span>Commission</span>
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </article>

      {/* Comprehensive Deliverables Modal */}
      {isDetailOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-navy-900/80 backdrop-blur-md p-4 animate-fade-in">
          <div className="relative max-w-2xl w-full bg-white border border-gold/40 shadow-luxury p-6 sm:p-8 animate-scale-up">
            <button
              type="button"
              onClick={() => setIsDetailOpen(false)}
              className="absolute top-4 right-4 p-2 text-neutral-500 hover:text-navy-900 transition-colors"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gold-dark">
                <Sparkles size={14} />
                <span>{service.category} Discipline</span>
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl text-navy-900 font-bold">
                {service.title}
              </h2>

              <p className="text-sm text-neutral-600 leading-relaxed font-light">
                {service.longDescription}
              </p>

              {/* Deliverables Checklist */}
              <div className="pt-3">
                <h4 className="text-xs font-bold uppercase tracking-widest text-navy-900 mb-2.5">
                  Standard Studio Deliverables:
                </h4>
                <ul className="space-y-2">
                  {service.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-neutral-700">
                      <CheckCircle2 size={15} className="text-gold shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Timeline & Ideal For */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 border-t border-neutral-border text-xs">
                <div className="bg-neutral-subtle p-3 border-l-2 border-gold">
                  <span className="text-[10px] uppercase tracking-wider text-neutral-muted block">Typical Timeline</span>
                  <div className="flex items-center gap-1.5 font-medium text-navy-900 mt-0.5">
                    <Clock size={13} className="text-gold" />
                    <span>{service.timeline}</span>
                  </div>
                </div>

                <div className="bg-neutral-subtle p-3 border-l-2 border-navy-800">
                  <span className="text-[10px] uppercase tracking-wider text-neutral-muted block">Ideal Client Scope</span>
                  <div className="font-medium text-navy-900 mt-0.5 truncate">
                    {service.idealFor}
                  </div>
                </div>
              </div>

              <div className="pt-4 flex items-center justify-between border-t border-neutral-border">
                <button
                  type="button"
                  onClick={() => setIsDetailOpen(false)}
                  className="text-xs uppercase tracking-wider text-neutral-500 hover:text-navy-900"
                >
                  Close Specification
                </button>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-navy-900 text-white text-xs font-semibold uppercase tracking-wider hover:bg-navy-800 border border-gold/40"
                >
                  <span>Book Consultation For This Service</span>
                  <ArrowUpRight size={14} className="text-gold-light" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
