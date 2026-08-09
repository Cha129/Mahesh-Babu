import React, { useState } from 'react';
import { Film, Heart, Image as ImageIcon, Sparkles, Shield, User } from 'lucide-react';

interface ImagePlaceholderProps {
  src: string;
  alt: string;
  title?: string;
  subtitle?: string;
  year?: string | number;
  className?: string;
  aspectRatio?: string; // e.g. 'aspect-[2/3]' or 'aspect-video' or 'aspect-square'
  type?: 'poster' | 'hero' | 'charity' | 'family' | 'logo';
  onClick?: () => void;
}

export const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({
  src,
  alt,
  title,
  subtitle,
  year,
  className = '',
  aspectRatio = 'aspect-[2/3]',
  type = 'poster',
  onClick
}) => {
  const [imageError, setImageError] = useState(false);

  // Check if src is a raw placeholder string like 'POSTER_POKIRI' or 'HERO_IMAGE_URL'
  const isPlaceholderToken =
    !src.startsWith('http://') &&
    !src.startsWith('https://') &&
    !src.startsWith('/') &&
    !src.startsWith('data:');

  const showPlaceholderOverlay = isPlaceholderToken || imageError;

  const getPlaceholderIcon = () => {
    switch (type) {
      case 'charity':
        return <Heart className="w-8 h-8 text-[#d4a72c]" />;
      case 'family':
        return <User className="w-8 h-8 text-[#d4a72c]" />;
      case 'hero':
        return <Sparkles className="w-10 h-10 text-[#f2ca50]" />;
      case 'logo':
        return <Shield className="w-6 h-6 text-[#d4a72c]" />;
      default:
        return <Film className="w-8 h-8 text-[#d4a72c]" />;
    }
  };

  return (
    <div
      onClick={onClick}
      className={`relative overflow-hidden bg-[#14100b] border border-[#2a2016] rounded-xl group transition-all duration-300 ${
        onClick ? 'cursor-pointer hover:border-[#d4a72c]/60 hover:shadow-lg' : ''
      } ${aspectRatio} ${className}`}
    >
      {/* Actual HTML img tag so DOM inspect and user src replacement works as specified */}
      <img
        src={src}
        alt={alt}
        onError={() => setImageError(true)}
        className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${
          showPlaceholderOverlay ? 'opacity-0 absolute inset-0 pointer-events-none' : 'opacity-100'
        }`}
      />

      {/* Stylized fallback poster card when src is a placeholder token */}
      {showPlaceholderOverlay && (
        <div className="absolute inset-0 flex flex-col justify-between p-4 bg-gradient-to-b from-[#1a140d] via-[#120d08] to-[#0a0805] select-none">
          {/* Subtle background grid pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(#d4a72c_1px,transparent_1px)] [background-size:16px_16px] opacity-10 pointer-events-none" />
          
          {/* Top header badge */}
          <div className="flex items-center justify-between z-10">
            <span className="text-[10px] font-mono tracking-widest text-[#d4a72c] uppercase bg-[#1e1710] px-2 py-0.5 rounded border border-[#3d2e1b]">
              {type === 'hero' ? 'FULL BLEED HERO' : type === 'logo' ? 'FOUNDATION LOGO' : 'CINEMATIC POSTER'}
            </span>
            {year && (
              <span className="text-xs font-cinzel font-semibold text-amber-200/80 bg-[#7a1710]/40 px-2 py-0.5 rounded border border-[#a8281c]/50">
                {year}
              </span>
            )}
          </div>

          {/* Center Graphic Icon & Title */}
          <div className="flex flex-col items-center justify-center my-auto text-center z-10 px-2">
            <div className="p-3 mb-3 rounded-full bg-[#1e1710] border border-[#3d2e1b] group-hover:border-[#d4a72c] group-hover:scale-110 transition-all duration-300 shadow-md">
              {getPlaceholderIcon()}
            </div>
            {title && (
              <h4 className="font-cinzel text-lg font-bold text-amber-100 tracking-wide line-clamp-2 group-hover:text-[#f2ca50] transition-colors">
                {title}
              </h4>
            )}
            {subtitle && (
              <p className="font-cormorant italic text-sm text-amber-300/80 mt-1 line-clamp-1">
                {subtitle}
              </p>
            )}
          </div>

          {/* Bottom Placeholder Source String Label */}
          <div className="pt-2 border-t border-[#2a2016]/80 flex items-center justify-between z-10">
            <span className="text-[11px] font-mono text-amber-400/60 truncate max-w-[85%]" title={`src="${src}"`}>
              src="{src}"
            </span>
            <ImageIcon className="w-3.5 h-3.5 text-amber-500/40" />
          </div>
        </div>
      )}

      {/* Hover glow overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0b0906] via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300 pointer-events-none" />
    </div>
  );
};
