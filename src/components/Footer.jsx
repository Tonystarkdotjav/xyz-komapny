import React, { useState, useEffect } from 'react';
import { ArrowUp, Terminal } from 'lucide-react';
import { sound } from '../utils/sound';

export default function Footer() {
  const [utcTime, setUtcTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setUtcTime(now.toUTCString().replace('GMT', 'UTC'));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    sound.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-container">
      <div className="content-wrapper footer-content">
        <div className="footer-top-row">
          <div className="footer-brand">
            <div className="brand-mark small">
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
            <span className="footer-brand-name">XYZ</span>
            <span className="footer-tagline">ARCHITECTURAL COMPUTING GROUP</span>
          </div>

          <button
            onClick={scrollToTop}
            onMouseEnter={() => sound.playHover()}
            className="back-to-top-btn"
            aria-label="Back to top"
          >
            <span>TOP OF WORLD</span>
            <ArrowUp size={14} />
          </button>
        </div>

        <div className="footer-bottom-row">
          <div className="footer-meta-cluster">
            <span className="font-mono text-xs text-zinc-500">
              TIME: <span className="text-zinc-300">{utcTime || 'SYNCHRONIZING...'}</span>
            </span>
            <span className="footer-dot-divider">•</span>
            <span className="font-mono text-xs text-zinc-500">
              BUILD: <span className="text-cyan-400">XYZ-2026.10-PROD</span>
            </span>
          </div>

          <div className="footer-copy font-mono text-xs text-zinc-500">
            © 2026 XYZ SYSTEMS INC. ALL RIGHTS RESERVED. BEYOND CONVENTION.
          </div>
        </div>
      </div>
    </footer>
  );
}
