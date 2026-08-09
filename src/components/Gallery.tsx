import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/content';
import { GalleryItem } from '../types';
import { ImagePlaceholder } from './ImagePlaceholder';
import { Image as ImageIcon, X, ZoomIn, Film, Calendar, Sparkles, ChevronLeft, ChevronRight, Filter } from 'lucide-react';

export const Gallery: React.FC = () => {
  const [activeItemIndex, setActiveItemIndex] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Poster', 'Upcoming', 'Family', 'Charity'];

  const filteredItems = selectedCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  const activeItem = activeItemIndex !== null ? filteredItems[activeItemIndex] : null;

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeItemIndex === null) return;
    setActiveItemIndex((prev) => (prev! === 0 ? filteredItems.length - 1 : prev! - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeItemIndex === null) return;
    setActiveItemIndex((prev) => (prev! === filteredItems.length - 1 ? 0 : prev! + 1));
  };

  return (
    <section id="gallery" className="py-24 bg-[#0b0906] relative overflow-hidden border-t border-[#1c160f] scroll-mt-20">
      {/* Background radial light */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#1a3a5c]/20 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[500px] h-[500px] bg-[#d4a72c]/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1e1710] border border-[#d4a72c]/30 text-[#f2ca50] text-xs font-inter tracking-widest uppercase mb-4">
            <ImageIcon className="w-3.5 h-3.5 text-[#d4a72c]" />
            <span>Visual Showcase</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-extrabold text-amber-50 tracking-tight mb-4">
            CINEMATIC GALLERY
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#7a1710] via-[#d4a72c] to-[#7a1710] mx-auto mb-6 rounded-full" />
          <p className="font-cormorant italic text-xl text-amber-200/80">
            A visual retrospective spanning landmark posters, upcoming epics, and philanthropic milestones.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setActiveItemIndex(null);
                }}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-cinzel font-semibold tracking-wider transition-all duration-300 border cursor-pointer ${
                  isSelected
                    ? 'bg-gradient-to-r from-[#d4a72c] to-[#b3881b] text-[#0b0906] border-[#f2ca50] shadow-lg shadow-amber-900/20 scale-105'
                    : 'bg-[#14100b] text-amber-200/80 border-[#2a2016] hover:border-[#d4a72c]/50 hover:text-amber-100'
                }`}
              >
                {cat === 'All' ? 'All Images' : cat === 'Poster' ? 'Movie Posters' : cat}
              </button>
            );
          })}
        </div>

        {/* 4-Column Desktop / 2-Column Mobile Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setActiveItemIndex(index)}
              className="group relative cursor-pointer rounded-2xl overflow-hidden bg-[#14100b] border border-[#2a2016] hover:border-[#d4a72c] hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden aspect-[3/4] bg-[#0b0906]">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  onError={(e) => {
                    // Fallback if image fails to load
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />

                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0906] via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                  <div className="p-3 rounded-full bg-[#0b0906]/80 border border-[#d4a72c] text-[#f2ca50] transform scale-75 group-hover:scale-100 transition-transform shadow-xl">
                    <ZoomIn className="w-6 h-6" />
                  </div>
                </div>
              </div>

              {/* Caption Box */}
              <div className="p-4 bg-[#120e09] border-t border-[#2a2016] flex flex-col justify-between">
                <div className="flex items-center justify-between gap-1 mb-1">
                  <h4 className="font-cinzel text-sm sm:text-base font-bold text-amber-100 group-hover:text-[#f2ca50] transition-colors truncate">
                    {item.title}
                  </h4>
                  {item.year && (
                    <span className="text-[10px] font-inter font-bold text-[#f2ca50] bg-[#1e1710] px-2 py-0.5 rounded border border-[#3d2e1b] shrink-0">
                      {item.year}
                    </span>
                  )}
                </div>
                <p className="font-cormorant italic text-xs text-amber-200/70 truncate">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* LIGHTBOX MODAL */}
      {activeItem && (
        <div
          onClick={() => setActiveItemIndex(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl bg-[#14100b] border-2 border-[#d4a72c] rounded-3xl overflow-hidden shadow-2xl gold-border-glow my-auto flex flex-col max-h-[90vh]"
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveItemIndex(null)}
              className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-[#0b0906]/80 text-amber-200 hover:text-white hover:bg-[#7a1710] transition-all border border-[#3d2e1b] cursor-pointer"
              aria-label="Close Lightbox"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Navigation Arrows */}
            {filteredItems.length > 1 && (
              <>
                <button
                  onClick={handlePrev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-[#0b0906]/80 text-amber-200 hover:text-[#f2ca50] hover:bg-[#1e1710] transition-all border border-[#3d2e1b] cursor-pointer"
                  aria-label="Previous Image"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-3 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-[#0b0906]/80 text-amber-200 hover:text-[#f2ca50] hover:bg-[#1e1710] transition-all border border-[#3d2e1b] cursor-pointer"
                  aria-label="Next Image"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}

            {/* Modal Image Box */}
            <div className="relative bg-[#080604] p-4 flex items-center justify-center min-h-[300px] overflow-hidden">
              <img
                src={activeItem.src}
                alt={activeItem.title}
                className="max-h-[65vh] w-auto max-w-full object-contain rounded-xl shadow-2xl border border-[#2a2016]"
              />
            </div>

            {/* Modal Details */}
            <div className="p-5 bg-[#14100b] border-t border-[#2a2016] text-center">
              <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-[#1e1710] border border-[#3d2e1b] text-xs font-inter text-[#f2ca50] uppercase mb-2">
                <Sparkles className="w-3.5 h-3.5 text-[#d4a72c]" />
                <span>{activeItem.category} Showcase</span>
              </div>
              <h3 className="font-cinzel text-2xl font-bold text-amber-100 mb-1">
                {activeItem.title} {activeItem.year && `(${activeItem.year})`}
              </h3>
              <p className="font-cormorant italic text-lg text-amber-300/80">
                {activeItem.subtitle}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
