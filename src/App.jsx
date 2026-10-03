import React, { useState, useEffect } from 'react';
import ThreeScene from './components/ThreeScene';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import CapabilitiesSection from './components/CapabilitiesSection';
import Showcase3DSection from './components/Showcase3DSection';
import WorkSection from './components/WorkSection';
import PhilosophySection from './components/PhilosophySection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import LoadingScreen from './components/LoadingScreen';

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeMode, setActiveMode] = useState('titanium');
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollProgress, setScrollProgress] = useState(0);

  // Monitor active section via IntersectionObserver
  useEffect(() => {
    const sectionIds = ['hero', 'about', 'solutions', 'showcase', 'work', 'philosophy', 'contact'];
    const observers = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        { threshold: 0.3 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    // Scroll progress bar calculation
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (scrollY / totalHeight) * 100 : 0;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observers.forEach((obs) => obs.disconnect());
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isLoaded]);

  const handleNavigate = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="xyz-app-root">
      {/* Loading Screen */}
      {!isLoaded && <LoadingScreen onLoaded={() => setIsLoaded(true)} />}

      {/* Top Precision Scroll Progress Bar */}
      <div
        className="scroll-progress-bar"
        style={{ transform: `scaleX(${scrollProgress / 100})` }}
      />

      {/* Interactive Custom Cursor */}
      <CustomCursor />

      {/* Central Three.js 3D Background World Canvas */}
      <ThreeScene
        activeMode={activeMode}
        interactiveShowcase={activeSection === 'showcase'}
      />

      {/* Main Glassmorphic Navigation Bar */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />

      {/* Page Content Flow: Continuous Cinematic Journey */}
      <main className="main-content-flow">
        {/* Full-Screen Hero */}
        <HeroSection
          onExplore={() => handleNavigate('about')}
          onViewExperience={() => handleNavigate('showcase')}
        />

        {/* Section 1: About XYZ */}
        <AboutSection />

        {/* Section 2: What XYZ Does (3-4 Key Capabilities) */}
        <CapabilitiesSection />

        {/* Section 3: 3D Showcase (Interactive Monolith Core) */}
        <Showcase3DSection
          activeMode={activeMode}
          onModeChange={setActiveMode}
        />

        {/* Section 4: Project / Work Showcase */}
        <WorkSection />

        {/* Section 5: Philosophy ("DON'T FOLLOW THE FUTURE. CREATE IT.") */}
        <PhilosophySection />

        {/* Section 6: Contact ("LET'S BUILD SOMETHING UNEXPECTED.") */}
        <ContactSection />
      </main>

      {/* Modern Minimal Footer */}
      <Footer />
    </div>
  );
}
