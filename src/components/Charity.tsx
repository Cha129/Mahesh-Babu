import React from 'react';
import { Heart, Activity, ShieldCheck, Award, Sparkles } from 'lucide-react';
import { ImagePlaceholder } from './ImagePlaceholder';

export const Charity: React.FC = () => {
  return (
    <section id="charity" className="py-24 bg-[#0b0906] relative overflow-hidden border-t border-[#1c160f] scroll-mt-20">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#7a1710]/15 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#1a3a5c]/20 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          {/* Eyebrow - Deep Cinematic Blue Accent as specified in rules */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1a3a5c]/40 border border-[#2c5f8a]/50 text-sky-200 text-xs font-inter tracking-widest uppercase mb-4 shadow-md">
            <Heart className="w-3.5 h-3.5 text-[#f2ca50]" />
            <span>Philanthropy & Hope</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-extrabold text-amber-50 tracking-tight mb-4">
            HEAL A CHILD FOUNDATION
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#7a1710] via-[#d4a72c] to-[#7a1710] mx-auto mb-6 rounded-full" />
          <p className="font-cormorant italic text-xl text-amber-200/80 leading-relaxed">
            Giving thousands of children a second chance at life through life-saving cardiac surgeries and medical care.
          </p>
        </div>

        {/* 2-Column Layout (Desktop) / Stacked (Mobile) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Text + Stat Cards (7 Cols on desktop) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="p-8 rounded-2xl bg-[#14100b] border border-[#2a2016] shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-[#d4a72c] to-[#7a1710]" />
              
              <div className="flex items-center gap-4 mb-6">
                {/* Small Logo Lockup Placeholder */}
                <div className="w-16 h-16 shrink-0">
                  <ImagePlaceholder
                    src="/assets/foundation-logo.png"
                    alt="Heal A Child Foundation Logo Lockup"
                    title="HAC"
                    type="logo"
                    aspectRatio="aspect-square"
                    className="rounded-xl border border-[#3d2e1b]"
                  />
                </div>
                <div>
                  <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-amber-100">
                    Heal A Child Charitable Trust
                  </h3>
                  <span className="text-xs font-inter text-[#d4a72c] uppercase tracking-wider font-medium">
                    Co-Founder & Chief Patron
                  </span>
                </div>
              </div>

              <div className="space-y-4 font-inter text-xs sm:text-sm text-amber-100/80 leading-relaxed">
                <p>
                  Mahesh Babu co-runs the <strong className="text-amber-200">Heal a Child</strong> charitable trust/foundation, focusing primarily on funding critical congenital heart surgeries and urgent medical treatments for underprivileged children across Telangana and Andhra Pradesh.
                </p>
                <p>
                  Believing that no child should suffer due to financial hardship, he has publicly stated that he contributes a significant share of his annual earnings to charitable causes.
                </p>
                <p>
                  Known for keeping much of his philanthropic work unpublicized by choice, he has quietly supported thousands of families through emergency medical funding over the years, personally adopting villages for holistic community development.
                </p>
              </div>
            </div>

            {/* Stat Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-5 rounded-xl bg-[#14100b] border border-[#2a2016] hover:border-[#d4a72c]/50 transition-all text-center">
                <div className="w-10 h-10 rounded-full bg-[#1e1710] border border-[#3d2e1b] flex items-center justify-center mx-auto mb-3">
                  <Heart className="w-5 h-5 text-[#f2ca50]" />
                </div>
                <h4 className="font-cinzel text-lg font-bold text-amber-100">1000s</h4>
                <p className="font-inter text-xs text-amber-200/60 mt-1">Children Supported</p>
              </div>

              <div className="p-5 rounded-xl bg-[#14100b] border border-[#2a2016] hover:border-[#d4a72c]/50 transition-all text-center">
                <div className="w-10 h-10 rounded-full bg-[#1e1710] border border-[#3d2e1b] flex items-center justify-center mx-auto mb-3">
                  <Activity className="w-5 h-5 text-[#f2ca50]" />
                </div>
                <h4 className="font-cinzel text-lg font-bold text-amber-100">1000+</h4>
                <p className="font-inter text-xs text-amber-200/60 mt-1">Cardiac Surgeries Funded</p>
              </div>

              <div className="p-5 rounded-xl bg-[#14100b] border border-[#2a2016] hover:border-[#d4a72c]/50 transition-all text-center">
                <div className="w-10 h-10 rounded-full bg-[#1e1710] border border-[#3d2e1b] flex items-center justify-center mx-auto mb-3">
                  <ShieldCheck className="w-5 h-5 text-[#f2ca50]" />
                </div>
                <h4 className="font-cinzel text-lg font-bold text-amber-100">By Choice</h4>
                <p className="font-inter text-xs text-amber-200/60 mt-1">Unpublicized Giving</p>
              </div>
            </div>
          </div>

          {/* Right Side: Image Placeholders (5 Cols on desktop) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Main Visual Placeholder */}
            <div className="shadow-2xl">
              <ImagePlaceholder
                src="/assets/foundation-campaign.png"
                alt="Heal A Child Campaign Visual"
                title="Heal A Child Medical Campaign"
                subtitle="Life-saving cardiac surgeries for children"
                type="charity"
                aspectRatio="aspect-[4/3]"
                className="w-full rounded-2xl border border-[#2a2016]"
              />
            </div>

            {/* Small Captioned Partnership Photo Placeholder */}
            <div className="shadow-xl">
              <ImagePlaceholder
                src="/assets/foundation-event.png"
                alt="Foundation Hospital Event & Patient Interaction Photo"
                title="Hospital Outreach & Medical Support"
                subtitle="Personal visits & medical aid distribution"
                type="charity"
                aspectRatio="aspect-video"
                className="w-full rounded-xl border border-[#2a2016]"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
