import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Compass, Sparkles, Award, Shield, Check, Clock, Feather } from 'lucide-react';
import { teamMembers, studioMetrics, studioTimeline, designPrinciples } from '../data/team';

export default function About() {
  const founder = teamMembers[0];
  const seniorTeam = teamMembers.slice(1);

  return (
    <div className="bg-ivory text-navy-900 pt-20 sm:pt-24">
      {/* 1. EDITORIAL HEADER */}
      <section className="py-16 md:py-24 border-b border-neutral-border/60 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gold mb-3">
              <Feather size={14} />
              <span>Studio Monograph</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-navy-900 tracking-tight leading-[1.15]">
              Shaping Architectural Sanctuaries With Tactile Restraint.
            </h1>
            <p className="mt-6 text-base sm:text-lg text-neutral-600 font-light leading-relaxed">
              Interior Demo was established in 2012 out of a conviction that contemporary luxury is not ostentation, but the sensory ease of honest stone, natural light, and spaces tuned to the quiet rhythms of life.
            </p>
          </div>

          {/* Metrics Ribbon */}
          <div className="mt-14 pt-8 border-t border-neutral-border grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {studioMetrics.map((m, idx) => (
              <div key={idx} className="space-y-1">
                <span className="font-serif text-3xl sm:text-4xl font-bold text-navy-900">
                  {m.value}
                </span>
                <p className="text-xs uppercase tracking-wider font-semibold text-navy-800">
                  {m.label}
                </p>
                <p className="text-[11px] text-neutral-500 font-light">
                  {m.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. FOUNDING PRINCIPAL SPOTLIGHT */}
      <section className="py-20 md:py-28 bg-off-white border-b border-neutral-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Founder Portrait (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="aspect-[3/4] overflow-hidden border border-gold/40 shadow-luxury bg-neutral-100">
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-navy-900 text-white p-4 border border-gold/40 max-w-[220px] hidden sm:block">
                <span className="text-[10px] font-mono uppercase text-gold block">Design Director</span>
                <span className="font-serif text-sm font-semibold">{founder.name}</span>
              </div>
            </div>

            {/* Founder Narrative (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gold">
                <Compass size={14} />
                <span>Founding Leadership</span>
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-navy-900">
                {founder.name}
              </h2>

              <p className="text-xs font-mono uppercase tracking-wider text-neutral-500">
                {founder.role} • {founder.credentials}
              </p>

              <blockquote className="relative p-6 bg-white border-l-2 border-gold shadow-subtle italic text-base sm:text-lg font-serif text-navy-900 leading-relaxed">
                "{founder.quote}"
              </blockquote>

              <p className="text-sm sm:text-base text-neutral-600 font-light leading-relaxed">
                {founder.bio}
              </p>

              <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed font-light">
                Over the past decade and a half, Aarav has directed projects spanning prestigious colonial residences in Kolkata, high-rise penthouses in South Mumbai, and tropical pavilions in Goa. His work has been featured in Architectural Digest, Elle Decor, and international monographs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FOUR CORE DESIGN PRINCIPLES */}
      <section className="py-20 md:py-28 bg-white border-b border-neutral-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-gold block mb-2">
              Philosophical Foundation
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-navy-900">
              The Four Principles of Our Studio
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-neutral-500 font-light">
              Every floor plan, material joint, and luminaire specification is guided by these enduring commitments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {designPrinciples.map((p) => (
              <div
                key={p.number}
                className="p-8 bg-ivory border border-neutral-border/80 hover:border-gold/50 transition-colors shadow-subtle flex gap-5"
              >
                <span className="font-mono text-xl sm:text-2xl font-bold text-gold shrink-0">
                  {p.number}
                </span>
                <div>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-navy-900 mb-2">
                    {p.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed">
                    {p.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SENIOR ARCHITECTURAL PARTNERS */}
      <section className="py-20 md:py-28 bg-off-white border-b border-neutral-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-gold block mb-2">
                Collaborative Excellence
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-navy-900">
                Studio Leadership & Associates
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-neutral-500 max-w-md font-light">
              A multidisciplinary collective of architects, interior engineers, and material historians trained at premier global academies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {seniorTeam.map((member) => (
              <article key={member.id} className="bg-white border border-neutral-border shadow-subtle p-6 flex flex-col justify-between">
                <div>
                  <div className="aspect-[4/5] overflow-hidden bg-neutral-100 mb-5">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>

                  <span className="text-[10px] font-mono uppercase tracking-wider text-gold-dark block mb-1">
                    {member.credentials}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-navy-900">
                    {member.name}
                  </h3>
                  <p className="text-xs font-medium text-navy-800/80 mb-3">
                    {member.role}
                  </p>
                  <p className="text-xs text-neutral-600 font-light leading-relaxed">
                    {member.bio}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-neutral-border/60">
                  <span className="text-[11px] italic font-serif text-neutral-500 block">
                    "{member.quote}"
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 5. STUDIO TIMELINE & HERITAGE */}
      <section className="py-20 md:py-28 bg-white border-b border-neutral-border/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-gold block mb-2">
              Our Journey
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-navy-900">
              Fourteen Years of Quiet Dedication
            </h2>
          </div>

          <div className="relative border-l border-gold/40 pl-6 sm:pl-10 space-y-12">
            {studioTimeline.map((item, idx) => (
              <div key={idx} className="relative group">
                {/* Timeline Dot */}
                <div className="absolute -left-[31px] sm:-left-[47px] top-1 w-3.5 h-3.5 rounded-full bg-white border-2 border-gold shadow-sm group-hover:bg-gold transition-colors"></div>

                <span className="font-mono text-sm font-bold text-gold block mb-1">
                  {item.year}
                </span>
                <h3 className="font-serif text-xl font-bold text-navy-900">
                  {item.title}
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-neutral-600 font-light leading-relaxed max-w-2xl">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CONSULTATION CTA */}
      <section className="py-16 md:py-24 bg-navy-900 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <span className="text-xs font-semibold uppercase tracking-ultra-wide text-gold">
            Begin the Dialogue
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold">
            Let Us Craft A Home That Truly Resonates.
          </h2>
          <p className="text-sm sm:text-base text-neutral-300 font-light max-w-xl mx-auto leading-relaxed">
            We accept a limited number of residential and boutique commercial commissions each season to ensure uncompromising devotion to every architectural facet.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-gold hover:bg-gold-light text-navy-950 font-semibold text-xs uppercase tracking-wider transition-colors shadow-elevated"
            >
              <span>Schedule Initial Consultation</span>
              <ArrowUpRight size={15} />
            </Link>
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold uppercase tracking-wider border border-white/20 transition-colors"
            >
              <span>View Portfolio Gallery</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
