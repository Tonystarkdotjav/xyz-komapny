import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Menu, X, ArrowUpRight } from 'lucide-react';
import { sound } from '../utils/sound';

export default function Navbar({ activeSection, onNavigate }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'solutions', label: 'Solutions' },
    { id: 'showcase', label: '3D Lab' },
    { id: 'work', label: 'Work' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id) => {
    sound.playClick();
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(id);
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const toggleSound = () => {
    const state = sound.toggle();
    setSoundEnabled(state);
  };

  return (
    <header className={`navbar-container ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-inner">
        {/* XYZ Brand Logo */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('hero');
          }}
          className="brand-logo"
          onMouseEnter={() => sound.playHover()}
        >
          <div className="brand-mark">
            <span className="brand-dot"></span>
            <svg viewBox="0 0 24 24" className="brand-svg">
              <path
                d="M4 6L12 14M12 14L20 6M12 14L4 22M12 14L20 22"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <div className="brand-text">
            <span className="brand-title">XYZ</span>
            <span className="brand-badge">STUDIO</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                onMouseEnter={() => sound.playHover()}
                className={`nav-link-btn ${isActive ? 'active' : ''}`}
              >
                <span className="nav-link-text">{link.label}</span>
                {isActive && <span className="nav-link-indicator" />}
              </button>
            );
          })}
        </nav>

        {/* Right Action Cluster: Audio FX & Direct CTA */}
        <div className="nav-actions">
          {/* Sound FX Toggle with Animated Equalizer */}
          <button
            onClick={toggleSound}
            onMouseEnter={() => sound.playHover()}
            className={`sound-toggle-btn ${soundEnabled ? 'active' : ''}`}
            title={soundEnabled ? 'Mute Audio FX' : 'Enable Generative Audio FX'}
            aria-label="Toggle procedural sound FX"
          >
            {soundEnabled ? (
              <div className="sound-eq">
                <span className="eq-bar bar-1"></span>
                <span className="eq-bar bar-2"></span>
                <span className="eq-bar bar-3"></span>
              </div>
            ) : (
              <VolumeX size={15} className="sound-icon-muted" />
            )}
            <span className="sound-label">{soundEnabled ? 'SFX ON' : 'SFX'}</span>
          </button>

          {/* Quick CTA */}
          <button
            onClick={() => handleNavClick('contact')}
            onMouseEnter={() => sound.playHover()}
            className="nav-cta-btn"
          >
            <span>Initiate</span>
            <ArrowUpRight size={14} />
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => {
              sound.playClick();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="mobile-menu-btn"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          <div className="mobile-drawer-inner">
            <div className="mobile-nav-list">
              {navLinks.map((link, i) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className="mobile-nav-item"
                  style={{ animationDelay: `${i * 0.05}s` }}
                >
                  <span className="mobile-nav-index">0{i + 1}</span>
                  <span className="mobile-nav-label">{link.label}</span>
                </button>
              ))}
            </div>

            <div className="mobile-drawer-footer">
              <div className="mobile-status-tag">
                <span className="pulse-dot"></span>
                <span>SYSTEM STATUS // ONLINE</span>
              </div>
              <p className="mobile-copyright">© 2026 XYZ SYSTEMS INC.</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
