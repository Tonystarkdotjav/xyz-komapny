import React from 'react';
import { ArrowRight, Play, Compass, ShieldCheck, Sparkles } from 'lucide-react';
import { sound } from '../utils/sound';

export default function HeroSection({ onExplore, onViewExperience }) {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-container">
        {/* Left Content Column */}
        <div className="hero-content">
          {/* Futuristic Protocol Tag */}
          <div className="hero-tag-badge">
            <span className="pulse-dot"></span>
            <span className="badge-text">AUTONOMOUS SPATIAL ARCHITECTURE // V4.8</span>
          </div>

          {/* Main Headline */}
          <h1 className="hero-headline">
            <span className="hero-headline-line">BUILDING</span>
            <span className="hero-headline-line gradient-text">WHAT COMES</span>
            <span className="hero-headline-line outline-text">NEXT.</span>
          </h1>

          {/* Supporting Statement */}
          <p className="hero-description">
            XYZ pioneers the convergence of high-order spatial computing, physical-digital architecture, and neuromorphic interfaces. We design transcendent digital artifacts for world-defining brands and visionary systems.
          </p>

          {/* Actions / CTAs */}
          <div className="hero-cta-group">
            <button
              onClick={() => {
                sound.playClick();
                if (onExplore) onExplore();
              }}
              onMouseEnter={() => sound.playHover()}
              className="btn-primary"
            >
              <span>Explore XYZ</span>
              <div className="btn-arrow-wrap">
                <ArrowRight size={16} />
              </div>
            </button>

            <button
              onClick={() => {
                sound.playClick();
                if (onViewExperience) onViewExperience();
              }}
              onMouseEnter={() => sound.playHover()}
              className="btn-secondary"
            >
              <div className="play-icon-wrap">
                <Play size={12} fill="currentColor" />
              </div>
              <span>View Experience</span>
            </button>
          </div>

          {/* Micro Telemetry Metrics */}
          <div className="hero-telemetry-grid">
            <div className="telemetry-item">
              <span className="telemetry-value">99.98%</span>
              <span className="telemetry-label">NEURAL FIDELITY</span>
            </div>
            <div className="telemetry-divider"></div>
            <div className="telemetry-item">
              <span className="telemetry-value">&lt; 1.2ms</span>
              <span className="telemetry-label">SPATIAL LATENCY</span>
            </div>
            <div className="telemetry-divider"></div>
            <div className="telemetry-item">
              <span className="telemetry-value">ZERO</span>
              <span className="telemetry-label">COMPROMISE</span>
            </div>
          </div>
        </div>

        {/* Right side interactive 3D Focal Reticle (Guides interaction with the Three.js background object) */}
        <div className="hero-3d-hint-container" data-dragzone="true">
          <div className="hero-3d-reticle">
            <div className="reticle-corner corner-tl"></div>
            <div className="reticle-corner corner-tr"></div>
            <div className="reticle-corner corner-bl"></div>
            <div className="reticle-corner corner-br"></div>
            
            <div className="reticle-label">
              <Sparkles size={12} className="text-cyan-400" />
              <span>CORE ARTIFACT // INTERACTIVE 3D</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="hero-scroll-indicator">
        <div className="mouse-icon">
          <div className="mouse-wheel"></div>
        </div>
        <span className="scroll-hint-text">SCROLL TO TRAVERSE</span>
      </div>
    </section>
  );
}
