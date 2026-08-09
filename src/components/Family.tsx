import React from 'react';
import { Quote, Users, MapPin } from 'lucide-react';

export const Family: React.FC = () => {
  return (
    <section id="family" className="py-24 bg-[#0e0b08] relative overflow-hidden border-t border-[#1c160f] scroll-mt-20">
      {/* Background soft glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#d4a72c]/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1e1710] border border-[#d4a72c]/30 text-[#f2ca50] text-xs font-inter tracking-widest uppercase mb-4">
            <Users className="w-3.5 h-3.5 text-[#d4a72c]" />
            <span>Heritage & Roots</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl font-extrabold text-amber-50 tracking-tight mb-4">
            FAMILY & ROOTS
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#7a1710] via-[#d4a72c] to-[#7a1710] mx-auto mb-4 rounded-full" />
        </div>

        {/* 2-Column Layout: Father-Son Photo on one side, Family Text on the other */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Column 1: Image Slot (Father & Son Photo) */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="group relative rounded-2xl overflow-hidden border-2 border-[#d4a72c]/60 bg-[#14100b] shadow-2xl gold-border-glow hover:-translate-y-1.5 transition-all duration-300">
              <div className="relative aspect-[4/3] sm:aspect-[5/4] lg:aspect-[4/5] overflow-hidden bg-[#0b0906]">
                <img
                  src="/assets/mahesh_with_father.jpg"
                  alt="Superstar Krishna with Mahesh Babu"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/posters/family.png';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0906] via-transparent to-transparent opacity-80" />
              </div>

              {/* Caption Below the Image */}
              <div className="p-4 sm:p-5 bg-[#14100b] border-t border-[#2a2016] text-center">
                <p className="font-cormorant italic text-lg sm:text-xl text-amber-200 font-semibold tracking-wide">
                  A bond built on legacy and love
                </p>
                <p className="font-inter text-xs text-amber-300/60 mt-1 uppercase tracking-wider">
                  Superstar Krishna & Mahesh Babu
                </p>
              </div>
            </div>
          </div>

          {/* Column 2: Family Text Content */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="relative p-6 sm:p-10 rounded-3xl bg-[#14100b] border-2 border-[#d4a72c]/50 shadow-2xl gold-border-glow">
              
              {/* Decorative Quote Mark Icon */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#1e1710] border border-[#3d2e1b] flex items-center justify-center shadow-md shrink-0">
                  <Quote className="w-6 h-6 text-[#f2ca50]" />
                </div>
                <div>
                  <h3 className="font-cinzel text-2xl font-bold text-amber-100">
                    The Ghattamaneni Lineage
                  </h3>
                  <p className="font-cormorant italic text-base text-[#f2ca50]">
                    Carrying forward a celebrated legacy of artistic integrity in Telugu cinema.
                  </p>
                </div>
              </div>

              {/* Text Content */}
              <div className="space-y-4 font-inter text-sm sm:text-base text-amber-100/80 leading-relaxed mb-8">
                <p>
                  Mahesh Babu is the son of legendary veteran Telugu actor <strong className="text-amber-100">Superstar Krishna</strong> and <strong className="text-amber-100">Indira Devi</strong>. Born in Chennai, Tamil Nadu, his ancestral roots trace back to <strong className="text-amber-100">Burripalem</strong> in the Guntur district of Andhra Pradesh.
                </p>
                <p>
                  He is the fourth of five children in the family. Belonging to one of the most respected Telugu film dynasties, several of his siblings and extended family members continue to make notable contributions to the Indian film industry.
                </p>
              </div>

              {/* Bottom Root Tag */}
              <div className="pt-4 border-t border-[#2a2016] flex items-center gap-2 text-xs font-inter text-amber-300/70">
                <MapPin className="w-4 h-4 text-[#d4a72c] shrink-0" />
                <span>Ancestral Roots: Burripalem, Guntur • Chennai • Hyderabad</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

