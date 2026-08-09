import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { SEED_WISHES } from '../data/content';
import { FanWish } from '../types';
import { Flame, Sparkles, Send, Heart, User, MapPin, CheckCircle, Wind, Share2, ExternalLink, Tv, Image as ImageIcon, Users, Crown } from 'lucide-react';

export const Wishes: React.FC = () => {
  const [isLit, setIsLit] = useState(true);
  const [wishCount, setWishCount] = useState<number>(25480);
  const [wishes, setWishes] = useState<FanWish[]>(SEED_WISHES);

  // Form states
  const [authorName, setAuthorName] = useState('');
  const [authorLocation, setAuthorLocation] = useState('');
  const [authorMessage, setAuthorMessage] = useState('');
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  // Load wish count & session wishes from storage
  useEffect(() => {
    const savedCount = localStorage.getItem('mb_tribute_wish_count');
    if (savedCount) {
      setWishCount(parseInt(savedCount, 10));
    }

    const savedWishes = sessionStorage.getItem('mb_tribute_session_wishes');
    if (savedWishes) {
      try {
        const parsed = JSON.parse(savedWishes);
        setWishes([...parsed, ...SEED_WISHES]);
      } catch (e) {
        // ignore parse error
      }
    }
  }, []);

  const triggerCandleInteraction = () => {
    if (isLit) {
      // Blowing out candle: trigger celebratory gold & maroon confetti!
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#f2ca50', '#d4a72c', '#7a1710', '#a8281c', '#ffffff']
      });

      const newCount = wishCount + 1;
      setWishCount(newCount);
      localStorage.setItem('mb_tribute_wish_count', newCount.toString());
      setIsLit(false);
    } else {
      // Relighting candle
      setIsLit(true);
    }
  };

  const handleSubmitWish = (e: React.FormEvent) => {
    e.preventDefault();
    if (!authorName.trim() || !authorMessage.trim()) return;

    const newWish: FanWish = {
      id: `user-wish-${Date.now()}`,
      name: authorName.trim(),
      location: authorLocation.trim() || 'Global Fan',
      message: authorMessage.trim(),
      timestamp: 'Just now',
      isVerifiedFan: true
    };

    const updatedWishes = [newWish, ...wishes];
    setWishes(updatedWishes);

    // Save session wishes
    const userSubmittedOnly = updatedWishes.filter(w => w.id.startsWith('user-wish-'));
    sessionStorage.setItem('mb_tribute_session_wishes', JSON.stringify(userSubmittedOnly));

    // Increment count & trigger confetti
    const newCount = wishCount + 1;
    setWishCount(newCount);
    localStorage.setItem('mb_tribute_wish_count', newCount.toString());

    confetti({
      particleCount: 60,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#f2ca50', '#d4a72c', '#7a1710']
    });

    // Reset form
    setAuthorName('');
    setAuthorLocation('');
    setAuthorMessage('');
    setSubmittedSuccess(true);

    setTimeout(() => setSubmittedSuccess(false), 4000);
  };

  return (
    <section id="wishes" className="py-24 bg-[#0e0b08] relative overflow-hidden border-t border-[#1c160f] scroll-mt-20">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#d4a72c]/10 blur-[180px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1e1710] border border-[#d4a72c]/30 text-[#f2ca50] text-xs font-inter tracking-widest uppercase mb-4">
            <Flame className="w-3.5 h-3.5 text-[#d4a72c]" />
            <span>Interactive Tribute</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-extrabold text-amber-50 tracking-tight mb-4">
            LIGHT A TRIBUTE CANDLE
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#7a1710] via-[#d4a72c] to-[#7a1710] mx-auto mb-6 rounded-full" />
          <p className="font-cormorant italic text-xl text-amber-200/80">
            Join thousands of fans worldwide in offering warm birthday wishes and celebrating Superstar Mahesh Babu.
          </p>
        </div>

        {/* CANDLE INTERACTIVE FEATURE BOX */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#14100b] border-2 border-[#d4a72c]/50 shadow-2xl gold-border-glow text-center max-w-2xl mx-auto mb-20">
          
          {/* Wish Counter Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1e1710] border border-[#3d2e1b] text-amber-200 text-sm font-inter font-bold mb-8 shadow-inner">
            <Sparkles className="w-4 h-4 text-[#f2ca50]" />
            <span>{wishCount.toLocaleString()} Candles Lit Worldwide</span>
          </div>

          {/* Candle Graphic Element */}
          <div className="relative w-28 h-44 mx-auto mb-8 flex flex-col items-center justify-end select-none">
            {/* Flame element */}
            <div
              onClick={triggerCandleInteraction}
              className={`relative cursor-pointer transition-all duration-500 mb-2 group`}
            >
              {isLit ? (
                <div className="relative flex flex-col items-center animate-bounce">
                  {/* Outer flame glow */}
                  <div className="w-10 h-14 rounded-full bg-gradient-to-t from-[#a8281c] via-[#f2ca50] to-[#ffffff] blur-xs shadow-lg shadow-amber-500/50" />
                  {/* Flame core */}
                  <div className="absolute inset-x-2 bottom-1 top-3 rounded-full bg-amber-100 animate-pulse" />
                </div>
              ) : (
                <div className="flex flex-col items-center py-2 opacity-60">
                  <Wind className="w-8 h-8 text-amber-200/50 animate-pulse" />
                  <span className="text-[10px] font-inter text-amber-400/80 mt-1 uppercase tracking-widest">
                    Click To Relight
                  </span>
                </div>
              )}
            </div>

            {/* Candle wax pillar */}
            <div className="w-12 h-28 bg-gradient-to-b from-[#2a2016] via-[#1c150e] to-[#0e0b08] rounded-t-lg border-x border-t border-[#3d2e1b] shadow-2xl relative">
              <div className="absolute top-0 inset-x-0 h-2 bg-[#d4a72c]/40 rounded-t-lg" />
              <div className="w-1 h-3 bg-[#100c08] mx-auto -mt-3 rounded-t" />
            </div>
          </div>

          {/* Action Button */}
          <button
            onClick={triggerCandleInteraction}
            className="px-8 py-3.5 rounded-xl font-cinzel font-bold text-sm tracking-wider text-[#0b0906] bg-gradient-to-r from-[#f2ca50] via-[#d4a72c] to-[#b3881b] hover:from-[#fff0bd] hover:to-[#f2ca50] transition-all shadow-xl hover:scale-105 active:scale-95 cursor-pointer flex items-center justify-center gap-2 mx-auto"
          >
            <Flame className="w-4 h-4 text-[#0b0906]" />
            <span>{isLit ? 'Blow Out Candle & Offer Wish' : 'Relight Tribute Candle'}</span>
          </button>
          
          <p className="font-inter text-xs text-amber-200/60 mt-3">
            {isLit ? 'Click the flame or button above to celebrate' : 'Candle blown out! Click again to relight.'}
          </p>
        </div>

        {/* FAN WALL & MESSAGE FORM */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Form: Submit Fan Wish (5 cols) */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-[#14100b] border border-[#2a2016] shadow-xl">
            <h3 className="font-cinzel text-xl font-bold text-amber-100 mb-2 flex items-center gap-2">
              <Send className="w-5 h-5 text-[#f2ca50]" />
              Leave Your Fan Message
            </h3>
            <p className="font-inter text-xs text-amber-200/70 mb-6">
              Write a personal message to Superstar Mahesh Babu. It will appear on the live fan wall below.
            </p>

            {submittedSuccess && (
              <div className="mb-6 p-4 rounded-xl bg-[#7a1710]/40 border border-[#a8281c] text-amber-200 text-xs font-inter flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#f2ca50] shrink-0" />
                <span>Your message has been posted on the Fan Wall!</span>
              </div>
            )}

            <form onSubmit={handleSubmitWish} className="space-y-4">
              <div>
                <label className="block text-xs font-inter font-medium text-amber-200/80 mb-1">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  value={authorName}
                  onChange={(e) => setAuthorName(e.target.value)}
                  placeholder="e.g. Sravan Kumar"
                  className="w-full px-4 py-2.5 rounded-lg bg-[#0b0906] border border-[#2a2016] text-amber-100 placeholder-amber-200/30 text-xs sm:text-sm focus:outline-none focus:border-[#d4a72c]"
                />
              </div>

              <div>
                <label className="block text-xs font-inter font-medium text-amber-200/80 mb-1">
                  City / Country
                </label>
                <input
                  type="text"
                  value={authorLocation}
                  onChange={(e) => setAuthorLocation(e.target.value)}
                  placeholder="e.g. Hyderabad, Telangana"
                  className="w-full px-4 py-2.5 rounded-lg bg-[#0b0906] border border-[#2a2016] text-amber-100 placeholder-amber-200/30 text-xs sm:text-sm focus:outline-none focus:border-[#d4a72c]"
                />
              </div>

              <div>
                <label className="block text-xs font-inter font-medium text-amber-200/80 mb-1">
                  Your Message *
                </label>
                <textarea
                  required
                  rows={4}
                  value={authorMessage}
                  onChange={(e) => setAuthorMessage(e.target.value)}
                  placeholder="Express your birthday wishes and thoughts..."
                  className="w-full px-4 py-2.5 rounded-lg bg-[#0b0906] border border-[#2a2016] text-amber-100 placeholder-amber-200/30 text-xs sm:text-sm focus:outline-none focus:border-[#d4a72c] resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-lg font-cinzel font-bold text-xs uppercase tracking-wider text-[#0b0906] bg-gradient-to-r from-[#f2ca50] to-[#d4a72c] hover:from-[#fff0bd] hover:to-[#f2ca50] transition-all cursor-pointer shadow-md"
              >
                Post Tribute Message
              </button>
            </form>
          </div>

          {/* Right Fan Wall Cards List (7 cols) */}
          <div className="lg:col-span-7 space-y-4 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-cinzel text-lg font-bold text-amber-100">
                Live Fan Wall ({wishes.length})
              </h4>
              <span className="text-xs font-inter text-amber-300/60">
                Sorted by latest
              </span>
            </div>

            {wishes.map((wish) => (
              <div
                key={wish.id}
                className="p-5 rounded-2xl bg-[#14100b] border border-[#2a2016] hover:border-[#d4a72c]/40 transition-all shadow-md"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-[#1e1710] border border-[#3d2e1b] flex items-center justify-center text-[#f2ca50] font-bold text-xs">
                      {wish.name.charAt(0)}
                    </div>
                    <div>
                      <h5 className="font-cinzel text-sm font-bold text-amber-100 flex items-center gap-1.5">
                        {wish.name}
                        {wish.isVerifiedFan && (
                          <CheckCircle className="w-3.5 h-3.5 text-[#f2ca50]" />
                        )}
                      </h5>
                      <span className="text-[11px] font-inter text-amber-300/60 flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-[#d4a72c]" />
                        {wish.location}
                      </span>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-amber-200/40">
                    {wish.timestamp}
                  </span>
                </div>

                <p className="font-inter text-xs sm:text-sm text-amber-100/80 leading-relaxed italic">
                  "{wish.message}"
                </p>
              </div>
            ))}
          </div>

        </div>

        {/* CONNECT WITH THE FAN COMMUNITY */}
        <div className="mt-20 pt-16 border-t border-[#1c160f]">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1e1710] border border-[#d4a72c]/30 text-[#f2ca50] text-xs font-inter tracking-widest uppercase mb-3">
              <Share2 className="w-3.5 h-3.5 text-[#d4a72c]" />
              <span>Official & Community Hub</span>
            </div>
            <h3 className="font-cinzel text-2xl sm:text-3xl font-extrabold text-amber-50 tracking-tight mb-2">
              Connect With the Fan Community
            </h3>
            <p className="font-cormorant italic text-base sm:text-lg text-amber-200/80">
              Follow official channels and join millions of fans celebrating Superstar Mahesh Babu.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {/* Instagram Card */}
            <a
              href="https://www.instagram.com/urstrulymahesh"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-5 rounded-2xl bg-[#14100b] border border-[#2a2016] hover:border-[#d4a72c] hover:bg-[#1a130c] hover:-translate-y-1.5 transition-all duration-300 shadow-lg hover:shadow-2xl gold-border-glow flex flex-col items-center text-center cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-[#f2ca50]/20 via-[#7a1710]/30 to-[#d4a72c]/20 border border-[#3d2e1b] group-hover:border-[#d4a72c] flex items-center justify-center mb-3 transition-colors shadow-inner">
                <svg
                  className="w-6 h-6 text-[#f2ca50] group-hover:scale-110 transition-transform"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </div>
              <h4 className="font-cinzel text-sm sm:text-base font-bold text-amber-100 group-hover:text-[#f2ca50] transition-colors flex items-center gap-1">
                Instagram
                <ExternalLink className="w-3 h-3 text-amber-300/50 group-hover:text-[#f2ca50]" />
              </h4>
              <p className="font-inter text-xs text-amber-300/70 mt-1">
                Follow @urstrulymahesh
              </p>
            </a>

            {/* Photo Gallery */}
            <a
              href="#gallery"
              className="group p-5 rounded-2xl bg-[#14100b] border border-[#2a2016] hover:border-[#d4a72c] hover:bg-[#1a130c] hover:-translate-y-1.5 transition-all duration-300 shadow-lg hover:shadow-2xl gold-border-glow flex flex-col items-center text-center cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl bg-[#1e1710] border border-[#3d2e1b] group-hover:border-[#d4a72c] flex items-center justify-center mb-3 transition-colors">
                <ImageIcon className="w-6 h-6 text-[#f2ca50] group-hover:scale-110 transition-transform" />
              </div>
              <h4 className="font-cinzel text-sm sm:text-base font-bold text-amber-100 group-hover:text-[#f2ca50] transition-colors">
                Photo Gallery
              </h4>
              <p className="font-inter text-xs text-amber-300/70 mt-1">
                HD Stills & Event Photos
              </p>
            </a>

            {/* Fan Forum */}
            <a
              href="#wishes"
              className="group p-5 rounded-2xl bg-[#14100b] border border-[#2a2016] hover:border-[#d4a72c] hover:bg-[#1a130c] hover:-translate-y-1.5 transition-all duration-300 shadow-lg hover:shadow-2xl gold-border-glow flex flex-col items-center text-center cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl bg-[#1e1710] border border-[#3d2e1b] group-hover:border-[#d4a72c] flex items-center justify-center mb-3 transition-colors">
                <Users className="w-6 h-6 text-[#f2ca50] group-hover:scale-110 transition-transform" />
              </div>
              <h4 className="font-cinzel text-sm sm:text-base font-bold text-amber-100 group-hover:text-[#f2ca50] transition-colors">
                Fan Forum
              </h4>
              <p className="font-inter text-xs text-amber-300/70 mt-1">
                Discussions & Wishes
              </p>
            </a>

            {/* Join S.S.M.B */}
            <a
              href="https://x.com/urstrulyMahesh"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-5 rounded-2xl bg-[#14100b] border border-[#2a2016] hover:border-[#d4a72c] hover:bg-[#1a130c] hover:-translate-y-1.5 transition-all duration-300 shadow-lg hover:shadow-2xl gold-border-glow flex flex-col items-center text-center cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl bg-[#1e1710] border border-[#3d2e1b] group-hover:border-[#d4a72c] flex items-center justify-center mb-3 transition-colors">
                <Crown className="w-6 h-6 text-[#f2ca50] group-hover:scale-110 transition-transform" />
              </div>
              <h4 className="font-cinzel text-sm sm:text-base font-bold text-amber-100 group-hover:text-[#f2ca50] transition-colors flex items-center gap-1">
                Join S.S.M.B
                <ExternalLink className="w-3 h-3 text-amber-300/50 group-hover:text-[#f2ca50]" />
              </h4>
              <p className="font-inter text-xs text-amber-300/70 mt-1">
                Official Fan Network
              </p>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
