import React, { useEffect, useState } from 'react';

export default function LoadingScreen({ onLoaded }) {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('INITIALIZING QUANTUM RUNTIME...');
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const steps = [
      { at: 20, text: 'COMPILING SHADER PIPELINES...' },
      { at: 50, text: 'GENERATING PHYSICAL MESH HIERARCHY...' },
      { at: 80, text: 'CALIBRATING SPATIAL LIGHTING & CAMERA...' },
      { at: 98, text: 'SYNCHRONIZING NEURAL MESH...' },
      { at: 100, text: 'READY.' }
    ];

    let current = 0;
    const interval = setInterval(() => {
      current += Math.floor(Math.random() * 8) + 4;
      if (current >= 100) {
        current = 100;
        clearInterval(interval);
        setStatusText('SYSTEM READY // ENTERING WORLD');
        setTimeout(() => {
          setFading(true);
          setTimeout(() => {
            if (onLoaded) onLoaded();
          }, 600);
        }, 300);
      } else {
        const step = steps.find(s => current <= s.at);
        if (step) setStatusText(step.text);
      }
      setProgress(current);
    }, 45);

    return () => clearInterval(interval);
  }, [onLoaded]);

  return (
    <div className={`loading-screen ${fading ? 'fade-out' : ''}`}>
      <div className="loading-content">
        {/* Animated XYZ Monogram */}
        <div className="loading-monogram">
          <svg viewBox="0 0 100 100" className="loading-svg">
            <polygon
              points="50,5 90,25 90,75 50,95 10,75 10,25"
              className="loading-hex"
            />
            <path
              d="M30 35 L70 65 M70 35 L30 65"
              className="loading-x"
            />
          </svg>
          <div className="loading-glow"></div>
        </div>

        <div className="loading-title">XYZ ARCHITECTURE</div>

        <div className="loading-bar-wrap">
          <div
            className="loading-bar-fill"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="loading-meta">
          <span className="loading-status">{statusText}</span>
          <span className="loading-percent">{progress}%</span>
        </div>
      </div>
    </div>
  );
}
