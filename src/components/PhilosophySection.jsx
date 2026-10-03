import React, { useEffect, useRef, useState } from 'react';
import { Sparkles, Terminal } from 'lucide-react';
import { sound } from '../utils/sound';

export default function PhilosophySection() {
  const sectionRef = useRef(null);
  const [scrollRatio, setScrollRatio] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate how far section has traveled across the viewport
      const progress = (windowHeight - rect.top) / (windowHeight + rect.height);
      setScrollRatio(Math.min(Math.max(progress, 0), 1));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const line1Words = ["DON'T", "FOLLOW", "THE", "FUTURE."];
  const line2Words = ["CREATE", "IT."];

  return (
    <section id="philosophy" ref={sectionRef} className="section-container philosophy-section">
      {/* 3D Depth Layer Behind Typography */}
      <div className="philosophy-depth-grid">
        <div className="depth-radial-gradient"></div>
        <div className="depth-iso-lines"></div>
      </div>

      <div className="content-wrapper philosophy-content">
        <div className="section-eyebrow center">
          <span className="eyebrow-index">05</span>
          <span className="eyebrow-divider">/</span>
          <span className="eyebrow-text">THE XYZ THESIS</span>
        </div>

        {/* Huge Animated Statement */}
        <div className="philosophy-statement">
          <div className="statement-line line-1">
            {line1Words.map((word, i) => {
              const threshold = 0.2 + i * 0.08;
              const isLit = scrollRatio >= threshold;
              return (
                <span
                  key={i}
                  className={`statement-word ${isLit ? 'illuminated' : ''}`}
                  onMouseEnter={() => sound.playHover()}
                >
                  {word}
                </span>
              );
            })}
          </div>

          <div className="statement-line line-2">
            {line2Words.map((word, i) => {
              const threshold = 0.52 + i * 0.1;
              const isLit = scrollRatio >= threshold;
              return (
                <span
                  key={i}
                  className={`statement-word highlight ${isLit ? 'illuminated' : ''}`}
                  onMouseEnter={() => sound.playHover()}
                >
                  {word}
                </span>
              );
            })}
          </div>
        </div>

        {/* Narrative Thesis */}
        <div className="philosophy-manifesto-box glass-panel">
          <p className="philosophy-lead-p">
            Most digital experiences replicate what already exists. They inherit the conventions, the templates, and the limitations of previous decades. At XYZ, we reject the passive acceptance of predetermined trajectories.
          </p>
          <p className="philosophy-sub-p">
            The next computational reality is an unrendered volume. It is up to visionary creators, mathematicians, and engineers to define its geometry, calibrate its physics, and imbue it with timeless human soul.
          </p>

          <div className="philosophy-author-row">
            <div className="author-sig">
              <span className="sig-title">XYZ ARCHITECTURAL FOUNDATION</span>
              <span className="sig-sub font-mono">GLOBAL DISPATCH // 2026</span>
            </div>
            <div className="author-coords font-mono text-xs text-zinc-500">
              35.6762° N, 139.6503° E // TOKYO LAB
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
