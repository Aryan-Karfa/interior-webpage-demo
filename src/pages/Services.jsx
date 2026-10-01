import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Compass, Sparkles, Layers, Sliders, CheckCircle2 } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';
import { services } from '../data/services';

export default function Services() {
  const steps = [
    {
      step: '01',
      title: 'Discovery & Spatial Brief',
      description: 'We explore your lifestyle, spatial aspirations, aesthetic inclinations, and programmatic needs over deep conversational interviews.'
    },
    {
      step: '02',
      title: 'Concept & 3D Architectural Vision',
      description: 'We generate photorealistic 3D perspectives, volumetric studies, and tactile mood boards showcasing lighting and materials.'
    },
    {
      step: '03',
      title: 'Technical Detailing & Procurement',
      description: 'Production of millimeter-accurate CAD drawings, custom joinery specs, stone quarry visits, and bespoke furniture engineering.'
    },
    {
      step: '04',
      title: 'Turnkey Realization & Final Styling',
      description: 'On-site structural execution, craftsmanship quality audits, white-glove art installation, and atmospheric styling ready for handover.'
    }
  ];

  return (
    <div className="bg-ivory text-navy-900 pt-20 sm:pt-24">
      {/* Editorial Header */}
      <section className="py-16 md:py-24 bg-white border-b border-neutral-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gold mb-3">
              <Layers size={14} />
              <span>Full-Scope Architectural Disciplines</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-navy-900 tracking-tight leading-[1.15]">
              Bespoke Services For Discerning Spaces.
            </h1>
            <p className="mt-6 text-base sm:text-lg text-neutral-600 font-light leading-relaxed">
              We provide turnkey interior architecture and design consultancy for private estates, penthouses, and executive commercial environments. Every service is calibrated to deliver timeless spatial integrity.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid (Mapped from mock data) */}
      <section className="py-20 md:py-28 bg-ivory border-b border-neutral-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Working Process / Methodology */}
      <section className="py-20 md:py-28 bg-off-white border-b border-neutral-border/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-gold block mb-2">
              The Studio Method
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-navy-900">
              Four Phases to Architectural Perfection
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-neutral-500 font-light">
              A transparent, rigorous, and stress-free journey from the initial blank canvas to the final completed sanctuary.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {steps.map((st) => (
              <div
                key={st.step}
                className="bg-white p-7 border border-neutral-border shadow-subtle flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-2xl font-bold text-gold block mb-3">
                    {st.step}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-navy-900 mb-2">
                    {st.title}
                  </h3>
                  <p className="text-xs text-neutral-600 font-light leading-relaxed">
                    {st.description}
                  </p>
                </div>
                <div className="mt-6 pt-3 border-t border-neutral-border/60 text-[10px] font-mono text-neutral-400 uppercase tracking-widest">
                  Studio Phase {st.step}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commission Inquiry Strip */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-navy-900 text-white p-8 sm:p-14 border border-gold/40 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-2 text-center lg:text-left max-w-xl">
              <span className="text-xs font-semibold uppercase tracking-widest text-gold">
                Tailored Advisory
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold">
                Not Certain Which Discipline Fits Your Project?
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 font-light">
                Schedule a 30-minute preliminary spatial appraisal with our senior architectural team.
              </p>
            </div>

            <Link
              to="/contact"
              className="px-8 py-3.5 bg-gold hover:bg-gold-light text-navy-950 font-semibold text-xs uppercase tracking-wider transition-colors shrink-0"
            >
              <span>Request Spatial Appraisal</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
