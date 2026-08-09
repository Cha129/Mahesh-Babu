import React from 'react';
import { ChevronDown, Sparkles, Flame, Film } from 'lucide-react';
import { ImagePlaceholder } from './ImagePlaceholder';

export const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="home"
      className="relative w-full min-h-[100svh] flex flex-col justify-between items-center bg-[#0b0906] overflow-hidden pt-20 pb-12 hero-padding"
    >
      {/* Full-bleed background image container with gradient overlays */}
      <div className="absolute inset-0 z-0 opacity-30">
        <img
          src="/assets/trident-hero.png"
          alt="Superstar Mahesh Babu Intense Avatar"
          className="w-full h-full object-cover object-center scale-105 filter contrast-125"
        />
        {/* Dark radial and vertical overlays for crisp text contrast */}
        <div className="absolute inset-0 bg-radial from-transparent via-[#0b0906]/70 to-[#0b0906]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0906] via-[#0b0906]/60 to-[#0b0906]/90" />
      </div>

      {/* Subtle floating gold glow accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#d4a72c]/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/3 right-10 w-[300px] h-[300px] bg-[#7a1710]/20 blur-[100px] rounded-full pointer-events-none" />

      {/* Top spacing element */}
      <div className="w-full h-4" />

      {/* Main Vertically Centered Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center my-auto flex flex-col items-center">
        {/* Eyebrow - Deep Cinematic Blue Accent */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1a3a5c]/40 border border-[#2c5f8a]/50 text-sky-200 text-xs sm:text-sm font-inter tracking-[0.25em] uppercase mb-4 shadow-lg backdrop-blur-sm">
          <Sparkles className="w-3.5 h-3.5 text-[#f2ca50]" />
          <span>A Tribute To</span>
          <Sparkles className="w-3.5 h-3.5 text-[#f2ca50]" />
        </div>

        {/* Featured Image Spotlight Card on Landing Page */}
        <div className="relative mb-6 max-w-md sm:max-w-xl group">
          <div className="relative rounded-2xl overflow-hidden border-2 border-[#d4a72c] bg-[#14100b] shadow-2xl gold-border-glow transition-transform duration-300 group-hover:scale-[1.02]">
            <img
              src="/assets/trident-hero.png"
              alt="Superstar Mahesh Babu Trident Avatar"
              className="w-full aspect-[16/9] object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b0906] via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-3 left-4 right-4 text-left flex items-center justify-between">
              <div>
                <span className="inline-block px-2.5 py-0.5 rounded bg-[#d4a72c] text-[#0b0906] text-[10px] font-inter font-bold uppercase tracking-wider mb-1">
                  Upcoming Spectacle
                </span>
                <h3 className="font-cinzel text-base sm:text-lg font-bold text-amber-100 leading-tight">
                  SSMB29 / Varanasi
                </h3>
                <p className="font-cormorant italic text-xs sm:text-sm text-amber-300/80">
                  Directed by S.S. Rajamouli
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Headline */}
        <h1 className="hero-headline font-cinzel text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-amber-50 tracking-tight leading-[1.1] mb-4 drop-shadow-2xl max-w-4xl">
          THE <span className="gold-shimmer-text px-1">PRINCE</span> OF TOLLYWOOD
        </h1>

        {/* Tagline */}
        <p className="font-cormorant italic text-lg sm:text-2xl text-amber-200/90 font-medium max-w-2xl mb-8 leading-relaxed">
          Superstar. Storyteller. Soul of Telugu cinema.
        </p>

        {/* Two CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto">
          <button
            onClick={() => scrollTo('filmography')}
            className="w-full sm:w-auto px-8 py-4 rounded-xl font-cinzel font-bold text-sm tracking-wider text-[#0b0906] bg-gradient-to-r from-[#f2ca50] via-[#d4a72c] to-[#b3881b] hover:from-[#fff0bd] hover:to-[#f2ca50] transition-all duration-300 shadow-xl shadow-amber-900/20 hover:scale-105 active:scale-95 flex items-center justify-center gap-2.5 cursor-pointer"
          >
            <Film className="w-4 h-4 text-[#0b0906]" />
            <span>Explore His Journey</span>
          </button>

          <button
            onClick={() => scrollTo('wishes')}
            className="w-full sm:w-auto px-8 py-4 rounded-xl font-cinzel font-bold text-sm tracking-wider text-amber-100 bg-[#1e1710]/80 hover:bg-[#2a2016] border border-[#d4a72c]/50 hover:border-[#f2ca50] transition-all duration-300 shadow-xl backdrop-blur-sm hover:scale-105 active:scale-95 flex items-center justify-center gap-2.5 cursor-pointer"
          >
            <Flame className="w-4 h-4 text-[#f2ca50]" />
            <span>Light a Candle</span>
          </button>
        </div>
      </div>

      {/* Scroll-hint indicator pinned near bottom, never overlapping buttons */}
      <div className="relative z-10 pt-8 pb-2 flex flex-col items-center">
        <button
          onClick={() => scrollTo('filmography')}
          className="flex flex-col items-center gap-1.5 text-amber-300/60 hover:text-[#f2ca50] transition-colors cursor-pointer group"
          aria-label="Scroll down to filmography"
        >
          <span className="text-[10px] font-inter uppercase tracking-[0.2em] font-semibold">
            Scroll To Discover
          </span>
          <ChevronDown className="w-5 h-5 animate-bounce text-[#d4a72c]" />
        </button>
      </div>
    </section>
  );
};
