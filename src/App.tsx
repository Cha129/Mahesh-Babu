import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Filmography } from './components/Filmography';
import { Milestones } from './components/Milestones';
import { Charity } from './components/Charity';
import { Family } from './components/Family';
import { Gallery } from './components/Gallery';
import { Music } from './components/Music';
import { Wishes } from './components/Wishes';
import { CreditsFooter } from './components/CreditsFooter';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = ['home', 'filmography', 'milestones', 'awards', 'charity', 'family', 'gallery', 'music', 'wishes'];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i];
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0b0906] text-amber-50 font-inter antialiased selection:bg-[#7a1710] selection:text-amber-200">
      {/* Sticky Navigation Bar */}
      <Navbar activeSection={activeSection} />

      {/* Main Sections */}
      <main>
        <Hero />
        <Filmography />
        <Milestones />
        <Charity />
        <Family />
        <Gallery />
        <Music />
        <Wishes />
      </main>

      {/* Credits & Footer */}
      <CreditsFooter />
    </div>
  );
}
