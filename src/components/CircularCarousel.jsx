import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowUpRight, Compass, Maximize2, X } from 'lucide-react';
import { projects } from '../data/projects';

export default function CircularCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [selectedProjectModal, setSelectedProjectModal] = useState(null);
  const [radius, setRadius] = useState(480);
  const containerRef = useRef(null);

  const totalItems = projects.length;
  const angleStep = 360 / totalItems;

  // Responsive radius calculation
  useEffect(() => {
    const updateDimensions = () => {
      if (window.innerWidth < 640) {
        setRadius(230); // Mobile
      } else if (window.innerWidth < 1024) {
        setRadius(340); // Tablet
      } else {
        setRadius(460); // Desktop
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  // Handlers for next / prev
  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalItems);
  }, [totalItems]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems);
  }, [totalItems]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'Escape' && selectedProjectModal) {
        setSelectedProjectModal(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev, selectedProjectModal]);

  // Drag / touch interactions
  const handleDragStart = (clientX) => {
    setIsDragging(true);
    setStartX(clientX);
    setDragOffset(0);
  };

  const handleDragMove = (clientX) => {
    if (!isDragging) return;
    const delta = clientX - startX;
    setDragOffset(delta);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    if (dragOffset > 50) {
      handlePrev();
    } else if (dragOffset < -50) {
      handleNext();
    }
    setDragOffset(0);
  };

  const activeProject = projects[currentIndex];

  return (
    <div className="relative w-full min-h-[90vh] md:min-h-screen flex flex-col justify-between overflow-hidden bg-ivory select-none py-8 md:py-12">
      {/* Subtle Background Architectural Grid & Light Glow */}
      <div className="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(#C9A227_0.75px,transparent_0.75px)] [background-size:24px_24px]"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gold-pale/60 rounded-full blur-3xl pointer-events-none -z-10"></div>

      {/* Top Header / Branding on Landing */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 w-full flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold tracking-ultra-wide uppercase text-gold">
            <Compass size={14} className="animate-spin-slow" />
            <span>Curated Portfolio Reel</span>
          </div>
          <h1 className="font-serif text-xl sm:text-2xl md:text-3xl text-navy-900 font-bold tracking-wide mt-1">
            ATELIER VÉLÈNE
          </h1>
        </div>

        {/* Enter Studio Primary CTA */}
        <Link
          to="/home"
          className="group inline-flex items-center gap-2 px-5 py-2.5 bg-navy-900 hover:bg-navy-800 text-white text-xs md:text-sm font-medium uppercase tracking-widest border border-gold/40 hover:border-gold transition-all duration-300 shadow-elevated"
        >
          <span>Enter Studio</span>
          <ArrowUpRight size={16} className="text-gold-light group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </Link>
      </div>

      {/* 3D Carousel Stage */}
      <div
        ref={containerRef}
        className="relative z-10 w-full my-auto py-12 flex items-center justify-center perspective-1200 cursor-grab active:cursor-grabbing"
        onMouseDown={(e) => handleDragStart(e.clientX)}
        onMouseMove={(e) => handleDragMove(e.clientX)}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
        onTouchStart={(e) => handleDragStart(e.touches[0].clientX)}
        onTouchMove={(e) => handleDragMove(e.touches[0].clientX)}
        onTouchEnd={handleDragEnd}
      >
        <div
          className="relative w-[280px] sm:w-[360px] md:w-[480px] h-[260px] sm:h-[320px] md:h-[360px] preserve-3d transition-transform duration-700 ease-out"
          style={{
            transform: `rotateY(${-(currentIndex * angleStep) + (dragOffset * 0.2)}deg)`
          }}
        >
          {projects.map((project, index) => {
            const itemAngle = index * angleStep;
            const isActive = index === currentIndex;

            return (
              <div
                key={project.id}
                className="absolute inset-0 preserve-3d transition-all duration-500 rounded-none overflow-hidden"
                style={{
                  transform: `rotateY(${itemAngle}deg) translateZ(${radius}px)`,
                }}
              >
                <div
                  className={`w-full h-full relative transition-all duration-500 border ${
                    isActive
                      ? 'border-gold shadow-luxury scale-100 opacity-100 ring-2 ring-gold/20'
                      : 'border-neutral-border/80 shadow-subtle scale-90 opacity-40 hover:opacity-75'
                  }`}
                  onClick={() => {
                    if (!isActive) setCurrentIndex(index);
                  }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center pointer-events-none"
                    loading="lazy"
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-navy-900/30 to-transparent"></div>

                  {/* Card Content Overlay */}
                  <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 text-white">
                    <span className="inline-block text-[10px] uppercase tracking-widest-luxury font-semibold text-gold-light bg-navy-900/80 px-2 py-0.5 mb-1.5 border border-gold/30">
                      {project.category}
                    </span>
                    <h3 className="font-serif text-base sm:text-lg md:text-xl font-medium tracking-wide text-white drop-shadow-sm truncate">
                      {project.title}
                    </h3>
                    <p className="text-xs text-neutral-300 font-light mt-0.5 flex items-center justify-between">
                      <span>{project.location}</span>
                      <span className="text-gold font-mono">{project.year}</span>
                    </p>

                    {isActive && (
                      <div className="mt-3 pt-2.5 border-t border-white/20 flex items-center justify-between">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedProjectModal(project);
                          }}
                          className="inline-flex items-center gap-1.5 text-xs text-gold-light hover:text-white font-medium uppercase tracking-wider transition-colors"
                        >
                          <span>View Project</span>
                          <Maximize2 size={13} />
                        </button>
                        <span className="text-[10px] text-neutral-300 uppercase tracking-widest">
                          {project.area}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Controls & Active Summary */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 w-full flex flex-col md:flex-row items-center justify-between gap-6 pt-4 border-t border-neutral-border/60">
        {/* Active Project Highlight Details */}
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 text-xs font-mono text-gold-dark font-medium mb-1">
            <span>0{currentIndex + 1}</span>
            <span className="text-neutral-400">/</span>
            <span>0{totalItems}</span>
            <span className="mx-2 text-neutral-300">|</span>
            <span className="uppercase tracking-widest text-navy-800 font-sans font-semibold">
              {activeProject.tag}
            </span>
          </div>
          <p className="text-xs md:text-sm text-neutral-muted max-w-lg hidden sm:block">
            {activeProject.quote}
          </p>
        </div>

        {/* Carousel Navigation Buttons & Indicators */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous project slide"
              className="w-11 h-11 rounded-none border border-navy-800/30 hover:border-gold bg-white hover:bg-gold-pale flex items-center justify-center text-navy-900 hover:text-gold-dark transition-all duration-200 shadow-sm"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next project slide"
              className="w-11 h-11 rounded-none border border-navy-800/30 hover:border-gold bg-white hover:bg-gold-pale flex items-center justify-center text-navy-900 hover:text-gold-dark transition-all duration-200 shadow-sm"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          <div className="hidden sm:flex items-center gap-1.5 ml-2">
            {projects.map((_, dotIdx) => (
              <button
                key={dotIdx}
                type="button"
                onClick={() => setCurrentIndex(dotIdx)}
                aria-label={`Go to slide ${dotIdx + 1}`}
                className={`h-1.5 transition-all duration-300 rounded-full ${
                  dotIdx === currentIndex ? 'w-8 bg-gold' : 'w-2 bg-neutral-300 hover:bg-neutral-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Project Quick View Modal */}
      {selectedProjectModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-navy-900/80 backdrop-blur-md p-4 animate-fade-in">
          <div className="relative max-w-3xl w-full bg-white border border-gold/40 shadow-2xl p-6 sm:p-8 animate-scale-up">
            <button
              type="button"
              onClick={() => setSelectedProjectModal(null)}
              className="absolute top-4 right-4 p-2 text-navy-800 hover:text-gold transition-colors"
              aria-label="Close modal"
            >
              <X size={22} />
            </button>

            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gold-dark">
                <span>{selectedProjectModal.category}</span>
                <span>•</span>
                <span>{selectedProjectModal.location}</span>
                <span>•</span>
                <span>{selectedProjectModal.year}</span>
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl text-navy-900 font-bold">
                {selectedProjectModal.title}
              </h2>

              <div className="aspect-[16/9] w-full overflow-hidden border border-neutral-border">
                <img
                  src={selectedProjectModal.image}
                  alt={selectedProjectModal.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                {selectedProjectModal.description}
              </p>

              {/* Architectural Highlights */}
              <div className="pt-2">
                <h4 className="text-xs uppercase tracking-widest text-navy-900 font-bold mb-2">
                  Key Architectural Features:
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {selectedProjectModal.highlights.map((h, i) => (
                    <li key={i} className="text-xs text-neutral-700 bg-neutral-subtle px-3 py-2 border-l-2 border-gold">
                      {h}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 flex items-center justify-between border-t border-neutral-border">
                <span className="text-xs text-neutral-muted">
                  Spatial Area: <strong className="text-navy-900">{selectedProjectModal.area}</strong>
                </span>
                <Link
                  to="/gallery"
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-navy-900 text-white text-xs font-semibold uppercase tracking-wider hover:bg-gold hover:text-navy-950 transition-colors"
                >
                  <span>Explore Gallery</span>
                  <ArrowUpRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
