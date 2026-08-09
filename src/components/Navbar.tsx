import React, { useState, useEffect } from 'react';
import { Menu, X, Crown, Sparkles } from 'lucide-react';
import mbLogo from '../assets/mb-logo.png';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Filmography', href: '#filmography' },
    { name: 'Milestones', href: '#milestones' },
    { name: 'Awards', href: '#awards' },
    { name: 'Charity', href: '#charity' },
    { name: 'Family', href: '#family' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Music', href: '#music' },
    { name: 'Wishes', href: '#wishes' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0b0906]/95 backdrop-blur-md border-b border-[#2a2016] py-3 shadow-xl'
          : 'bg-gradient-to-b from-[#0b0906]/90 via-[#0b0906]/50 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#home"
          onClick={(e) => scrollToSection(e, '#home')}
          className="flex items-center gap-3 group cursor-pointer"
        >
          {/* Gold Logo Badge Icon */}
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 overflow-hidden transition-all duration-300 group-hover:scale-105 ${
              isScrolled
                ? 'shadow-[0_0_18px_rgba(212,167,44,0.8)] animate-pulse ring-2 ring-[#f2ca50]'
                : 'shadow-[0_0_12px_rgba(212,167,44,0.4)] ring-2 ring-[#d4a72c]/80'
            }`}
          >
            <img
              src={mbLogo}
              alt="Mahesh Babu Logo"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-cinzel text-base sm:text-lg font-bold tracking-wider gold-gradient-text uppercase">
              Mahesh Babu
            </span>
            <span className="text-[10px] font-inter text-amber-200/60 uppercase tracking-widest -mt-1">
              Superstar Tribute
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
          {navLinks.map((link) => {
            const sectionId = link.href.replace('#', '');
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`px-3 py-1.5 rounded-lg text-xs font-inter font-medium tracking-wide transition-all duration-200 ${
                  isActive
                    ? 'text-[#f2ca50] bg-[#1e1710] border border-[#d4a72c]/40 shadow-sm'
                    : 'text-amber-100/80 hover:text-[#f2ca50] hover:bg-[#18130d]'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Quick CTA Button desktop */}
        <div className="hidden lg:block">
          <a
            href="#wishes"
            onClick={(e) => scrollToSection(e, '#wishes')}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-cinzel font-bold text-[#0b0906] bg-gradient-to-r from-[#f2ca50] to-[#d4a72c] hover:from-[#fce08b] hover:to-[#f2ca50] transition-all shadow-md hover:shadow-gold-500/20 active:scale-95 cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Light Candle</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg text-amber-200 hover:text-[#f2ca50] hover:bg-[#1c160f] focus:outline-none border border-[#2a2016]"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0e0b08] border-b border-[#2a2016] px-4 pt-3 pb-6 space-y-2 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          {navLinks.map((link) => {
            const sectionId = link.href.replace('#', '');
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`block px-4 py-2.5 rounded-lg text-sm font-inter font-medium tracking-wide transition-colors ${
                  isActive
                    ? 'text-[#f2ca50] bg-[#1e1710] border border-[#d4a72c]/40 font-semibold'
                    : 'text-amber-100/80 hover:text-[#f2ca50] hover:bg-[#16110a]'
                }`}
              >
                {link.name}
              </a>
            );
          })}
          <div className="pt-2">
            <a
              href="#wishes"
              onClick={(e) => scrollToSection(e, '#wishes')}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg text-sm font-cinzel font-bold text-[#0b0906] bg-gradient-to-r from-[#f2ca50] to-[#d4a72c]"
            >
              <Sparkles className="w-4 h-4" />
              <span>Light A Tribute Candle</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
