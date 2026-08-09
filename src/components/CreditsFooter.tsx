import React from 'react';
import { Crown, Heart, Sparkles } from 'lucide-react';
import wishcraftLogo from '../assets/wishcraft-logo.png';

export const CreditsFooter: React.FC = () => {
  return (
    <footer className="bg-[#080604] border-t border-[#1c160f] text-amber-100 relative overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#d4a72c]/5 blur-[150px] pointer-events-none" />

      {/* CREDITS SECTION (End-Credits Style) */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center relative z-10">
        
        {/* Top Thin Gold Divider */}
        <div className="w-full max-w-xl mx-auto h-[1px] bg-gradient-to-r from-transparent via-[#d4a72c]/50 to-transparent mb-12" />

        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#14100b] border border-[#d4a72c]/30 text-[#f2ca50] text-xs font-inter tracking-[0.2em] uppercase mb-4 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-[#f2ca50]" />
          <span>A Gift for the Superstar</span>
        </div>

        {/* Heading */}
        <h2 className="font-cinzel text-2xl sm:text-3xl md:text-4xl font-bold text-amber-50 tracking-tight mb-4">
          Crafted With Devotion, Built With Code
        </h2>

        {/* Tagline */}
        <p className="font-cormorant italic text-lg sm:text-xl text-amber-200/80 max-w-2xl mx-auto leading-relaxed mb-10">
          This tribute is a small offering from one fan team to millions — a page built to hold twenty-five years of screen presence, style, and heart. Happy Birthday, Superstar.
        </p>

        {/* Credit Block */}
        <div className="bg-[#100c08] p-8 rounded-2xl border border-[#2a2016] shadow-2xl max-w-xl mx-auto space-y-4 mb-8">
          <div className="flex items-center justify-center gap-2 text-xs font-inter uppercase tracking-widest text-[#d4a72c] font-semibold">
            <Crown className="w-4 h-4 text-[#f2ca50]" />
            <span>TRIBUTE CREATORS</span>
          </div>

          {/* WishCraft Studios Logo */}
          <div className="flex flex-col items-center justify-center py-2">
            <img
              src={wishcraftLogo}
              alt="WishCraft Studios Logo"
              className="w-28 h-28 sm:w-36 sm:h-36 object-contain filter drop-shadow-[0_0_20px_rgba(212,167,44,0.35)] hover:scale-105 transition-transform duration-300"
            />
          </div>

          <div className="space-y-2 pt-2 border-t border-[#1e1710]">
            <p className="font-cinzel text-base sm:text-lg font-bold text-amber-100">
              Vadlamudi Sai Chanakya <span className="font-cormorant italic font-normal text-amber-300/70 text-sm sm:text-base">— Founder, WishCraft Studios</span>
            </p>
            <p className="font-cinzel text-base sm:text-lg font-bold text-amber-100">
              Devella Sankeerth <span className="font-cormorant italic font-normal text-amber-300/70 text-sm sm:text-base">— Co-Founder, WishCraft Studios</span>
            </p>
          </div>

          <div className="pt-3 border-t border-[#1e1710] flex items-center justify-center gap-2">
            <img src={wishcraftLogo} alt="WishCraft Logo" className="w-5 h-5 object-contain" />
            <span className="text-xs font-inter text-amber-200/70 uppercase tracking-widest font-medium">
              WishCraft Studios — Digital Craft, Fan-Made
            </span>
          </div>
        </div>

        {/* Bottom Thin Gold Divider */}
        <div className="w-full max-w-xl mx-auto h-[1px] bg-gradient-to-r from-transparent via-[#d4a72c]/50 to-transparent my-12" />

        {/* FOOTER DISCLAIMER */}
        <div className="text-center space-y-2 text-xs font-inter text-amber-300/40">
          <p>
            Unofficial fan tribute, unaffiliated with Mahesh Babu, GMB Entertainment, or any official production house.
          </p>
          <p className="text-[10px]">
            © {new Date().getFullYear()} Superstar Mahesh Babu Tribute • Built with admiration & reverence for Telugu Cinema.
          </p>
        </div>

      </div>
    </footer>
  );
};
