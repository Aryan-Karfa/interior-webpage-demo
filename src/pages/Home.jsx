import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Compass, Sparkles, Award, ShieldCheck, Clock, Layers } from 'lucide-react';
import ScrollExpand from '../components/ScrollExpand';
import ProjectCard from '../components/ProjectCard';
import ServiceCard from '../components/ServiceCard';
import LocationCard from '../components/LocationCard';
import SocialLinks from '../components/SocialLinks';
import { projects } from '../data/projects';
import { services } from '../data/services';
import { locations, socialLinks } from '../data/locations';
import { studioMetrics } from '../data/team';

export default function Home() {
  const featuredProjects = projects.slice(0, 3);
  const featuredServices = services.slice(0, 3);

  return (
    <div className="bg-ivory text-navy-900 pt-20 sm:pt-24">
      {/* 1. HERO / EDITORIAL STUDIO INTRODUCTION */}
      <section className="relative overflow-hidden pt-10 pb-16 md:pt-16 md:pb-24 border-b border-neutral-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-gold/40 text-gold-dark text-[11px] font-semibold uppercase tracking-ultra-wide shadow-subtle">
                <Compass size={13} className="text-gold" />
                <span>Interior Architecture & Bespoke Sanctuaries</span>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl md:text-6xl font-bold text-navy-900 tracking-tight leading-[1.12]">
                Thoughtful Interiors <br className="hidden sm:inline" />
                <span className="italic font-normal text-navy-800">Shaped Around</span> <br />
                The Way You Live.
              </h1>

              <p className="text-base sm:text-lg text-neutral-600 font-light leading-relaxed max-w-xl">
                Interior Demo orchestrates luminous, warm, and transcendent environments. We balance classical architectural proportions with tactile materials—raw travertine, fumed oak, and unlacquered brass.
              </p>

              {/* CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                <Link
                  to="/gallery"
                  className="inline-flex items-center justify-center px-7 py-3.5 bg-navy-900 hover:bg-navy-800 text-white text-xs font-semibold uppercase tracking-wider border border-gold/40 hover:border-gold transition-all duration-300 shadow-elevated"
                >
                  <span>Explore Selected Portfolio</span>
                  <ArrowUpRight size={15} className="ml-2 text-gold-light" />
                </Link>

                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-7 py-3.5 bg-white hover:bg-gold-pale text-navy-900 text-xs font-semibold uppercase tracking-wider border border-neutral-border hover:border-gold transition-all duration-300"
                >
                  <span>Consult Design Principal</span>
                </Link>
              </div>

              {/* Quick Metrics Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-neutral-border/80">
                {studioMetrics.map((m, idx) => (
                  <div key={idx}>
                    <span className="font-serif text-xl sm:text-2xl font-bold text-navy-900 block">
                      {m.value}
                    </span>
                    <span className="text-[11px] text-neutral-500 uppercase tracking-wider block mt-0.5">
                      {m.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Hero Visual Collage (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/5] sm:aspect-[3/4] overflow-hidden border border-gold/40 shadow-luxury bg-neutral-100">
                <img
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80"
                  alt="Interior Demo Luxury Living Sanctuary"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent"></div>

                {/* Floating Architectural Badge */}
                <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-md p-4 border border-gold/30 shadow-subtle">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-gold-dark font-semibold block">
                    Featured Private Estate
                  </span>
                  <div className="font-serif text-sm sm:text-base font-bold text-navy-900 mt-0.5">
                    Worli Seafront Horizon Residence
                  </div>
                  <span className="text-[11px] text-neutral-500">
                    6,200 sq.ft • Turnkey Architectural Curation
                  </span>
                </div>
              </div>

              {/* Background Decorative Gold Accent Frame */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border border-gold/25 -z-10 pointer-events-none hidden sm:block"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SCROLL EXPAND SHOWCASE SECTION */}
      <ScrollExpand />

      {/* 3. STUDIO INTRODUCTION & DESIGN ETHOS */}
      <section className="py-20 md:py-28 bg-off-white border-y border-neutral-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Image Feature (5 cols) */}
            <div className="lg:col-span-5 relative order-2 lg:order-1">
              <div className="aspect-[4/3] sm:aspect-[16/11] overflow-hidden border border-neutral-border shadow-elevated">
                <img
                  src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80"
                  alt="Materiality and Craftsmanship at Interior Demo"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -top-4 -left-4 bg-navy-900 text-white p-4 border border-gold/40 shadow-luxury max-w-[200px] hidden sm:block">
                <span className="text-[10px] font-mono text-gold uppercase tracking-wider block">
                  Design Standard
                </span>
                <p className="text-xs font-serif italic mt-1 text-neutral-200">
                  "Authentic materials require no apology."
                </p>
              </div>
            </div>

            {/* Right Philosophy Narrative (7 cols) */}
            <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gold">
                <Sparkles size={14} />
                <span>The Studio Philosophy</span>
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-navy-900 leading-snug">
                We Reject Transient Trends in Favor of Enduring Architectural Poetics.
              </h2>

              <p className="text-sm sm:text-base text-neutral-600 font-light leading-relaxed">
                Founded on the belief that spatial volume directly governs peace of mind, Interior Demo crafts spaces that celebrate quiet elegance. We collaborate directly with historic quarries in Italy and master woodworking guilds across India to curate bespoke environments that mature gracefully over generations.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 text-xs">
                <div className="p-4 bg-white border border-neutral-border/80">
                  <span className="font-bold text-navy-900 text-sm block mb-1">
                    Holistic Turnkey Management
                  </span>
                  <p className="text-neutral-500">
                    From civil restructuring to bespoke bedding, we execute every detail with meticulous oversight.
                  </p>
                </div>

                <div className="p-4 bg-white border border-neutral-border/80">
                  <span className="font-bold text-navy-900 text-sm block mb-1">
                    Direct Artisan Provenance
                  </span>
                  <p className="text-neutral-500">
                    Custom bronze metalwork, single-slab marble surfaces, and hand-spun wool rugs commissioned per client.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-navy-900 hover:text-gold transition-colors"
                >
                  <span>Learn About Our Studio Heritage & Principals</span>
                  <ArrowUpRight size={14} className="text-gold" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FEATURED DISCIPLINES & SERVICES */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-gold block mb-2">
                Studio Capabilities
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-navy-900">
                Core Interior Architectural Disciplines
              </h2>
            </div>

            <Link
              to="/services"
              className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-navy-900 hover:text-gold transition-colors"
            >
              <span>View All 6 Disciplines</span>
              <ArrowUpRight size={14} className="text-gold" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* 5. FEATURED PROJECTS SHOWCASE */}
      <section className="py-20 md:py-28 bg-ivory border-t border-neutral-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-gold block mb-2">
                Curated Works
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-navy-900">
                Featured Private Residences & Spaces
              </h2>
            </div>

            <Link
              to="/gallery"
              className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-navy-900 hover:text-gold transition-colors"
            >
              <span>Explore Complete Gallery</span>
              <ArrowUpRight size={14} className="text-gold" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* 6. OFFICE LOCATIONS (TWO ELEGANT STUDIO CARDS) */}
      <section className="py-20 md:py-28 bg-white border-t border-neutral-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-semibold uppercase tracking-widest text-gold block mb-2">
              National Practice
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-navy-900">
              Our Studio Locations
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-neutral-500 font-light">
              Visit our presentation studios for private material viewings, CAD walkthroughs, and bespoke consultations by appointment.
            </p>
          </div>

          {/* TWO LOCATIONS GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {locations.map((loc) => (
              <LocationCard key={loc.id} location={loc} />
            ))}
          </div>
        </div>
      </section>

      {/* 7. SOCIAL MEDIA / CONTACT CTA */}
      <section className="py-16 md:py-20 bg-off-white border-t border-neutral-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-gold/40 p-8 sm:p-14 shadow-subtle flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
            <div className="space-y-3 max-w-xl">
              <span className="text-xs font-semibold uppercase tracking-widest text-gold block">
                Direct Dialogue & Inquiries
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-navy-900">
                Ready to Shape Your Sanctuary?
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed">
                Connect directly with our partners via WhatsApp, Instagram, or reserve a scheduled private consultation.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <SocialLinks />

              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-navy-900 hover:bg-navy-800 text-white text-xs font-semibold uppercase tracking-wider border border-gold/40 hover:border-gold transition-all shadow-sm"
              >
                <span>Initiate Commission</span>
                <ArrowUpRight size={14} className="ml-1.5 text-gold-light" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
