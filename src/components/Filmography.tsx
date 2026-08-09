import React, { useState } from 'react';
import { FILMOGRAPHY_DATA } from '../data/content';
import { Film, Sparkles, ChevronDown, ChevronUp, Star, Calendar } from 'lucide-react';

export const Filmography: React.FC = () => {
  const [showPre2015, setShowPre2015] = useState(true);

  // Filter list based on toggle state
  const displayedFilms = showPre2015
    ? FILMOGRAPHY_DATA
    : FILMOGRAPHY_DATA.filter((f) => !f.isPre2015);

  const pre2015Count = FILMOGRAPHY_DATA.filter((f) => f.isPre2015).length;

  return (
    <section id="filmography" className="py-24 bg-[#0b0906] relative overflow-hidden border-t border-[#1c160f]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#7a1710]/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#d4a72c]/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1e1710] border border-[#d4a72c]/30 text-[#f2ca50] text-xs font-inter tracking-widest uppercase mb-4">
            <Film className="w-3.5 h-3.5 text-[#d4a72c]" />
            <span>Cinematic Archive</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-extrabold text-amber-50 tracking-tight mb-4">
            FILMOGRAPHY TIMELINE
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#7a1710] via-[#d4a72c] to-[#7a1710] mx-auto mb-6 rounded-full" />
          <p className="font-cormorant italic text-xl text-amber-200/80 leading-relaxed">
            Tracing 25+ years of iconic screen presence — from child artist prodigy to blockbuster Superstar.
          </p>

          {/* Toggle Button for Pre-2015 Films */}
          <div className="mt-8 flex justify-center">
            <button
              onClick={() => setShowPre2015(!showPre2015)}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-inter font-semibold uppercase tracking-wider text-amber-200 bg-[#1e1710] border border-[#2a2016] hover:border-[#d4a72c] hover:text-[#f2ca50] transition-all shadow-md cursor-pointer"
            >
              <span>
                {showPre2015
                  ? `Showing All 27 Films`
                  : `Show Earlier Classics (${pre2015Count} Pre-2015 Films)`}
              </span>
              {showPre2015 ? <ChevronUp className="w-4 h-4 text-[#d4a72c]" /> : <ChevronDown className="w-4 h-4 text-[#d4a72c]" />}
            </button>
          </div>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Timeline Progress Center Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 bg-gradient-to-b from-[#7a1710] via-[#d4a72c] to-[#1a3a5c] opacity-60" />

          <div className="space-y-12 relative">
            {displayedFilms.map((film, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={`${film.year}-${film.title}`}
                  className={`relative flex flex-col md:flex-row items-start md:items-center ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Center Dot Indicator */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#0b0906] border-2 border-[#d4a72c] flex items-center justify-center z-20 shadow-lg group">
                    <div className={`w-3 h-3 rounded-full ${film.highlight ? 'bg-[#f2ca50] animate-pulse' : 'bg-[#7a1710]'}`} />
                  </div>

                  {/* Card Content Side */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-10">
                    <div
                      className={`p-6 rounded-2xl bg-[#14100b] border transition-all duration-300 hover:-translate-y-1 ${
                        film.highlight
                          ? 'border-[#d4a72c]/60 shadow-lg shadow-[#d4a72c]/5 bg-gradient-to-b from-[#18130d] to-[#100d08]'
                          : 'border-[#2a2016] hover:border-[#d4a72c]/40'
                      }`}
                    >
                      {/* Year & Badge row */}
                      <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-cinzel font-bold text-[#f2ca50] bg-[#1e1710] border border-[#3d2e1b]">
                          <Calendar className="w-3.5 h-3.5 text-[#d4a72c]" />
                          {film.year}
                        </span>

                        {film.tag && (
                          <span
                            className={`px-2.5 py-0.5 rounded-full text-[10px] font-inter font-semibold uppercase tracking-wider ${
                              film.highlight
                                ? 'bg-[#7a1710]/80 text-amber-200 border border-[#a8281c]'
                                : 'bg-[#1e1710] text-amber-300/80 border border-[#2a2016]'
                            }`}
                          >
                            {film.tag}
                          </span>
                        )}
                      </div>

                      {/* Movie Title */}
                      <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-amber-100 flex items-center gap-2 mb-2">
                        {film.title}
                        {film.highlight && <Star className="w-4 h-4 text-[#f2ca50] fill-[#f2ca50] shrink-0" />}
                      </h3>

                      {/* Role Note */}
                      {film.roleNote && (
                        <p className="font-cormorant italic text-base text-[#f2ca50] font-semibold mb-2">
                          {film.roleNote}
                        </p>
                      )}

                      {/* Description */}
                      {film.description && (
                        <p className="font-inter text-xs sm:text-sm text-amber-100/70 leading-relaxed">
                          {film.description}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Empty Spacer Side for Desktop Symmetry */}
                  <div className="hidden md:block w-1/2" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
