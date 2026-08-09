import React from 'react';
import { Music as MusicIcon, Play, Youtube, ExternalLink, Sparkles, Disc } from 'lucide-react';

interface Track {
  id: string;
  title: string;
  movie: string;
  link: string;
}

const FEATURED_TRACK = {
  title: 'Mahesh Babu Hit Songs Collection',
  subtitle: 'A curated playlist of career-spanning hits',
  link: 'https://youtu.be/ra7jH6DjxZ0',
};

const TRACK_LIST: Track[] = [
  { id: '1', title: 'Nee Dookudu', movie: 'Dookudu', link: 'https://youtu.be/cYlzSLSzeAM' },
  { id: '2', title: 'Idhe Kadha Nee Katha', movie: 'Maharshi', link: 'https://youtu.be/G7Fxzz-NH_s' },
  { id: '3', title: 'Phir Shuru', movie: 'Maharshi', link: 'https://youtu.be/a6PhZL44898' },
  { id: '4', title: 'Nuvve Samastham', movie: 'Maharshi', link: 'https://youtu.be/OpMJbeC7VV0' },
  { id: '5', title: 'Bharat Ane Nenu (title track)', movie: 'Bharat Ane Nenu', link: 'https://youtu.be/2wGSKHW2PvI' },
  { id: '6', title: 'Cheppave Chirugali', movie: 'Okkadu', link: 'https://youtu.be/yBPm4oWiRIM' },
  { id: '7', title: 'Businessman (title track)', movie: 'Businessman', link: 'https://youtu.be/hcSp4pWc_fI' },
  { id: '8', title: 'Hare Rama', movie: 'Okkadu', link: 'https://youtu.be/f7R-3ySpDJw' },
  { id: '9', title: 'Nuvvemaya Chesavo', movie: 'Okkadu', link: 'https://youtu.be/2wwqmBaIL7c' },
  { id: '10', title: 'Jagadame', movie: 'Pokiri', link: 'https://youtu.be/5WZq74m9KbU' },
  { id: '11', title: 'Adharaku', movie: 'Athadu', link: 'https://youtu.be/QVJMLkvuFdo' },
  { id: '12', title: 'Srimanthuda', movie: 'Srimanthudu', link: 'https://youtu.be/cs0v1_KimYs' },
  { id: '13', title: 'Rama Rama', movie: 'Srimanthudu', link: 'https://youtu.be/qosk6ECHJpk' },
];

export const Music: React.FC = () => {
  return (
    <section id="music" className="py-24 bg-[#0e0b08] relative overflow-hidden border-t border-[#1c160f] scroll-mt-20">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#d4a72c]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1e1710] border border-[#d4a72c]/30 text-[#f2ca50] text-xs font-inter tracking-widest uppercase mb-4">
            <MusicIcon className="w-3.5 h-3.5 text-[#d4a72c]" />
            <span>Iconic Tracks</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-extrabold text-amber-50 tracking-tight mb-4">
            The Sound of a Superstar
          </h2>
          <p className="font-cormorant italic text-lg sm:text-xl text-amber-200/80">
            Unforgettable melodies and high-octane anthems that defined an era of Telugu cinema.
          </p>
        </div>

        {/* Top Featured Playlist Card */}
        <div className="mb-8">
          <a
            href={FEATURED_TRACK.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group block relative rounded-2xl p-6 sm:p-8 bg-gradient-to-r from-[#1c150c] via-[#241a0e] to-[#1a1209] border-2 border-[#d4a72c] shadow-2xl gold-border-glow hover:border-[#f2ca50] hover:scale-[1.01] transition-all duration-300 cursor-pointer overflow-hidden"
          >
            {/* Background Decorative Accent */}
            <div className="absolute -right-8 -bottom-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <Disc className="w-48 h-48 text-[#f2ca50] animate-spin-slow" />
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 relative z-10">
              <div className="flex items-center gap-4 sm:gap-6">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-[#d4a72c] to-[#7a1710] p-0.5 shrink-0 shadow-lg group-hover:scale-105 transition-transform">
                  <div className="w-full h-full bg-[#0b0906] rounded-[14px] flex items-center justify-center">
                    <Youtube className="w-7 h-7 text-[#ff0000] group-hover:scale-110 transition-transform" />
                  </div>
                </div>

                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#d4a72c] text-[#0b0906] text-[10px] font-inter font-bold uppercase tracking-wider mb-1.5 shadow-sm">
                    <Sparkles className="w-3 h-3" />
                    <span>Featured Playlist</span>
                  </div>
                  <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-amber-100 group-hover:text-[#f2ca50] transition-colors">
                    {FEATURED_TRACK.title}
                  </h3>
                  <p className="font-cormorant italic text-sm sm:text-base text-amber-300/80">
                    {FEATURED_TRACK.subtitle}
                  </p>
                </div>
              </div>

              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#f2ca50] to-[#d4a72c] text-[#0b0906] font-cinzel text-xs font-bold uppercase tracking-wider group-hover:from-[#fce08b] group-hover:to-[#f2ca50] transition-all shadow-md shrink-0 self-end sm:self-center">
                <Play className="w-4 h-4 fill-current" />
                <span>Play Collection</span>
              </div>
            </div>
          </a>
        </div>

        {/* Track List Grid (1 Col Mobile, 2 Col Desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {TRACK_LIST.map((track, idx) => (
            <a
              key={track.id}
              href={track.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-4 sm:p-5 rounded-xl bg-[#14100b] border border-[#2a2016] hover:border-[#d4a72c]/70 hover:bg-[#1c150c] transition-all duration-300 shadow-md hover:shadow-xl cursor-pointer"
            >
              <div className="flex items-center gap-3.5 sm:gap-4 min-w-0 pr-2">
                {/* Track Index Badge */}
                <div className="w-9 h-9 rounded-lg bg-[#0b0906] border border-[#2a2016] group-hover:border-[#d4a72c]/40 flex items-center justify-center shrink-0 transition-colors">
                  <span className="font-mono text-xs font-bold text-amber-400/80 group-hover:text-[#f2ca50]">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                </div>

                <div className="min-w-0">
                  <h4 className="font-cinzel text-base font-bold text-amber-100 group-hover:text-[#f2ca50] transition-colors truncate">
                    {track.title}
                  </h4>
                  <p className="font-cormorant italic text-sm text-amber-300/70 truncate">
                    {track.movie}
                  </p>
                </div>
              </div>

              {/* YouTube Icon & Action */}
              <div className="flex items-center gap-2 shrink-0">
                <div className="p-2 rounded-lg bg-[#0b0906] text-amber-300/60 group-hover:text-[#ff0000] group-hover:bg-[#ff0000]/10 transition-colors border border-[#2a2016]">
                  <Youtube className="w-4 h-4" />
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-amber-300/40 group-hover:text-[#f2ca50] transition-colors" />
              </div>
            </a>
          ))}
        </div>

        {/* Section Caption */}
        <div className="mt-10 text-center">
          <p className="font-inter text-xs text-amber-200/50 uppercase tracking-widest">
            Tap any track to listen on YouTube.
          </p>
        </div>
      </div>
    </section>
  );
};
