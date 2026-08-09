import React from 'react';
import { INDUSTRY_HITS, AWARDS_DATA } from '../data/content';
import { Award, Trophy, Star, Crown, Flame, Sparkles, Medal, Film, Zap, FlameKindling } from 'lucide-react';

export const Milestones: React.FC = () => {
  const getAwardIcon = (iconName: string) => {
    switch (iconName) {
      case 'Award':
        return <Award className="w-6 h-6 text-[#f2ca50]" />;
      case 'Trophy':
        return <Trophy className="w-6 h-6 text-[#f2ca50]" />;
      case 'Star':
        return <Star className="w-6 h-6 text-[#f2ca50]" />;
      case 'Crown':
        return <Crown className="w-6 h-6 text-[#f2ca50]" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-[#f2ca50]" />;
      case 'Flame':
        return <Flame className="w-6 h-6 text-[#f2ca50]" />;
      case 'Medal':
        return <Medal className="w-6 h-6 text-[#f2ca50]" />;
      case 'Film':
        return <Film className="w-6 h-6 text-[#f2ca50]" />;
      default:
        return <Trophy className="w-6 h-6 text-[#f2ca50]" />;
    }
  };

  return (
    <section className="py-24 bg-[#0e0b08] relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-0 right-1/4 w-[450px] h-[450px] bg-[#d4a72c]/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[450px] h-[450px] bg-[#7a1710]/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION 1: INDUSTRY HITS & BOX-OFFICE MILESTONES */}
        <div id="milestones" className="mb-24 scroll-mt-24">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1e1710] border border-[#d4a72c]/30 text-[#f2ca50] text-xs font-inter tracking-widest uppercase mb-4">
              <Zap className="w-3.5 h-3.5 text-[#d4a72c]" />
              <span>Box-Office Juggernaut</span>
            </div>
            <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-extrabold text-amber-50 tracking-tight mb-4">
              INDUSTRY HITS & MILESTONES
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#7a1710] via-[#d4a72c] to-[#7a1710] mx-auto mb-6 rounded-full" />
            <p className="font-cormorant italic text-xl text-amber-200/80">
              Landmark blockbusters that reshaped Telugu box-office history and set unprecedented industry standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {INDUSTRY_HITS.map((hit) => (
              <div
                key={hit.title}
                className="group relative p-6 rounded-2xl bg-[#14100b] border border-[#2a2016] hover:border-[#d4a72c]/60 transition-all duration-300 hover:-translate-y-1.5 shadow-xl flex flex-col justify-between overflow-hidden"
              >
                {/* Accent top border highlight */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#7a1710] via-[#d4a72c] to-[#7a1710] opacity-80 group-hover:opacity-100 transition-opacity" />

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-cinzel text-2xl font-bold text-amber-100 group-hover:text-[#f2ca50] transition-colors">
                      {hit.title}
                    </span>
                    <span className="text-xs font-inter font-bold text-[#f2ca50] bg-[#1e1710] px-3 py-1 rounded-full border border-[#3d2e1b]">
                      {hit.year}
                    </span>
                  </div>

                  <p className="font-inter text-xs sm:text-sm text-amber-100/70 leading-relaxed mb-6">
                    {hit.significance}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#2a2016] flex items-center justify-between">
                  <span className="text-[10px] font-inter uppercase tracking-widest text-amber-400/80 font-semibold">
                    {hit.badge}
                  </span>
                  <FlameKindling className="w-4 h-4 text-[#d4a72c] group-hover:scale-110 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 2: CAREER MILESTONES & AWARDS */}
        <div id="awards" className="scroll-mt-24 pt-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1e1710] border border-[#d4a72c]/30 text-[#f2ca50] text-xs font-inter tracking-widest uppercase mb-4">
              <Trophy className="w-3.5 h-3.5 text-[#d4a72c]" />
              <span>Honors & Accolades</span>
            </div>
            <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-extrabold text-amber-50 tracking-tight mb-4">
              CAREER MILESTONES & AWARDS
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#7a1710] via-[#d4a72c] to-[#7a1710] mx-auto mb-6 rounded-full" />
            <p className="font-cormorant italic text-xl text-amber-200/80">
              State honors, prestigious film trophies, and national style icon recognitions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {AWARDS_DATA.map((award, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-[#14100b] border border-[#2a2016] hover:border-[#d4a72c]/50 transition-all duration-300 hover:shadow-lg hover:shadow-amber-900/10 group flex flex-col items-center text-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#1e1710] border border-[#3d2e1b] flex items-center justify-center mb-4 group-hover:border-[#d4a72c] group-hover:scale-110 transition-all">
                  {getAwardIcon(award.iconName)}
                </div>

                <h3 className="font-cinzel text-lg font-bold text-amber-100 mb-2 group-hover:text-[#f2ca50] transition-colors">
                  {award.title}
                </h3>

                <p className="font-inter text-xs text-amber-200/60 leading-relaxed">
                  {award.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
