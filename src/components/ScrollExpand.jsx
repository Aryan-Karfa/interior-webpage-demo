import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, Compass, Eye, Check } from 'lucide-react';

export default function ScrollExpand() {
  const containerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeHotspot, setActiveHotspot] = useState(null);

  useEffect(() => {
    let animationFrameId = null;

    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate progress between when container enters view and when it reaches center
      // rect.top goes from windowHeight to -rect.height
      const startTrigger = windowHeight * 0.85;
      const endTrigger = windowHeight * 0.15;
      const totalDistance = startTrigger - endTrigger;
      const currentPos = startTrigger - rect.top;

      let progress = currentPos / totalDistance;
      progress = Math.max(0, Math.min(1, progress));

      animationFrameId = requestAnimationFrame(() => {
        setScrollProgress(progress);
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Compute interpolated values
  // Width starts at ~78% and goes to 100%
  const containerWidthPercent = 76 + scrollProgress * 24;
  // Border radius starts at 16px and goes to 0
  const borderRadius = (1 - scrollProgress) * 16;
  // Scale starts at 0.95 and goes to 1.0
  const imageScale = 1.05 - scrollProgress * 0.05;

  const hotspots = [
    {
      id: 1,
      x: '32%',
      y: '45%',
      title: 'Honed Roman Travertine',
      description: 'Continuous monolithic cladding quarried from Tivoli, with soft organic texture.'
    },
    {
      id: 2,
      x: '68%',
      y: '58%',
      title: 'Italian Bouclé & Custom Seating',
      description: 'Custom organic silhouettes upholstered in low-sheen textured wool bouclé.'
    },
    {
      id: 3,
      x: '84%',
      y: '28%',
      title: 'Circadian Daylight Aperture',
      description: 'Ceiling light cove tuned to follow natural solar color temperatures.'
    }
  ];

  return (
    <section 
      ref={containerRef} 
      className="relative py-16 md:py-24 bg-white overflow-hidden"
      aria-label="Architectural Showcase Scroll Expand"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-ultra-wide text-gold mb-3">
          <Sparkles size={14} />
          <span>Spatial Transformation</span>
        </div>
        <h2 className="font-serif text-2xl sm:text-3xl md:text-5xl text-navy-900 font-bold max-w-2xl mx-auto tracking-tight leading-tight">
          Where Architecture Meets Domestic Serenity
        </h2>
        <p className="mt-3 text-sm sm:text-base text-neutral-muted max-w-xl mx-auto font-light">
          Scroll to immerse yourself in our signature living pavilion. Notice how spatial volume, natural materiality, and illumination harmonize into quiet luxury.
        </p>
      </div>

      {/* Expanding Visual Container */}
      <div className="w-full flex justify-center px-2 sm:px-4">
        <div
          className="relative transition-all duration-300 ease-out overflow-hidden shadow-luxury border border-gold/30"
          style={{
            width: `${containerWidthPercent}%`,
            maxWidth: scrollProgress > 0.8 ? '100%' : '1400px',
            borderRadius: `${borderRadius}px`,
          }}
        >
          {/* Main Visual Image */}
          <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full min-h-[380px] sm:min-h-[460px] md:min-h-[580px] overflow-hidden bg-navy-900">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2200&q=85"
              alt="Atelier Vélène Signature Architectural Living Pavilion"
              className="w-full h-full object-cover transition-transform duration-700 ease-out"
              style={{
                transform: `scale(${imageScale})`
              }}
            />

            {/* Subtle Gradient & Atmosphere */}
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-900/25 to-navy-950/20"></div>

            {/* Floating Architectural Hotspots */}
            {hotspots.map((spot) => (
              <div
                key={spot.id}
                className="absolute z-20"
                style={{ top: spot.y, left: spot.x }}
              >
                <button
                  type="button"
                  onClick={() => setActiveHotspot(activeHotspot?.id === spot.id ? null : spot)}
                  className="relative group p-2 text-gold-light hover:text-white focus:outline-none"
                  aria-label={`Inspect ${spot.title}`}
                >
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-navy-900/90 border border-gold shadow-gold-glow">
                    <span className="h-2 w-2 rounded-full bg-gold animate-ping"></span>
                  </span>
                </button>

                {/* Hotspot Popover Tooltip */}
                {activeHotspot?.id === spot.id && (
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-3.5 bg-white text-navy-900 shadow-2xl border border-gold/40 rounded-none z-30 animate-fade-in text-left">
                    <div className="text-[10px] uppercase tracking-wider text-gold-dark font-bold mb-1">
                      Material Specification
                    </div>
                    <div className="font-serif text-sm font-semibold text-navy-900 mb-1">
                      {spot.title}
                    </div>
                    <div className="text-xs text-neutral-600 leading-snug">
                      {spot.description}
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Editorial Showcase Caption & Progress Indicator */}
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-white">
              <div className="max-w-xl space-y-2">
                <span className="inline-block text-[10px] font-semibold tracking-widest-luxury uppercase text-gold bg-navy-900/80 px-2.5 py-1 border border-gold/40">
                  Case Study No. 04 — Private Living Pavilion
                </span>
                <h3 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold tracking-wide text-white">
                  Alipore Sanctuary, Kolkata
                </h3>
                <p className="text-xs sm:text-sm text-neutral-200 font-light leading-relaxed">
                  Sculpted with 16-foot ceiling heights, continuous fluted travertine, and floor-to-ceiling glass pocket doors that vanish into the courtyard garden.
                </p>
              </div>

              {/* Expansion Feedback Meter */}
              <div className="flex items-center gap-3 bg-navy-900/80 backdrop-blur-md px-4 py-2 border border-white/15 self-start sm:self-auto">
                <div className="w-16 bg-white/20 h-1 rounded-full overflow-hidden">
                  <div
                    className="bg-gold h-full transition-all duration-150"
                    style={{ width: `${Math.round(scrollProgress * 100)}%` }}
                  ></div>
                </div>
                <span className="text-[11px] font-mono text-gold-light">
                  {Math.round(scrollProgress * 100)}% Full Bleed
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
