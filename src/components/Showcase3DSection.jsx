import React, { useState } from 'react';
import { Eye, Layers, Zap, Cpu, Sparkles, Compass, RotateCcw, Maximize2 } from 'lucide-react';
import { sound } from '../utils/sound';

export default function Showcase3DSection({ activeMode, onModeChange }) {
  const [fullscreenHUD, setFullscreenHUD] = useState(false);

  const modes = [
    {
      id: 'titanium',
      name: 'Titanium Obsidian',
      tag: 'PBR PHYSICAL',
      desc: 'Specular physical reflectivity with anisotropic carbon and obsidian facets.',
      icon: Eye
    },
    {
      id: 'quantum',
      name: 'Quantum Core',
      tag: 'EMISSIVE LUMINESCENCE',
      desc: 'Internal energy reactor pulsating with harmonic spatial frequencies.',
      icon: Zap
    },
    {
      id: 'wireframe',
      name: 'Laser Wireframe',
      tag: 'HOLOGRAPHIC VECTOR',
      desc: 'Ultra-fine cyan and magenta vector grid exposing topological geometry.',
      icon: Layers
    },
    {
      id: 'neural',
      name: 'Neural Synapse',
      tag: 'CONNECTED TOPOLOGY',
      desc: 'Dynamic node cluster simulating cognitive synaptic firing pathways.',
      icon: Cpu
    }
  ];

  const handleSelectMode = (id) => {
    sound.playModeShift();
    if (onModeChange) onModeChange(id);
  };

  return (
    <section id="showcase" className="section-container showcase-section">
      <div className="content-wrapper">
        {/* Section Header */}
        <div className="section-header-center">
          <div className="section-eyebrow center">
            <span className="eyebrow-index">03</span>
            <span className="eyebrow-divider">/</span>
            <span className="eyebrow-text">INTERACTIVE 3D LAB</span>
          </div>

          <h2 className="showcase-headline">
            THE MONOLITHIC <span className="gradient-text">XYZ CORE.</span>
          </h2>

          <p className="showcase-subhead">
            Traverse the architectural structure at the heart of XYZ. Rotate, explore topological wireframes, and test physical surface reflectance in real-time.
          </p>
        </div>

        {/* Central Interactive HUD Viewport */}
        <div
          className={`showcase-viewport-frame glass-panel ${fullscreenHUD ? 'expanded' : ''}`}
          data-dragzone="true"
        >
          {/* Top HUD Telemetry Bar */}
          <div className="hud-top-bar">
            <div className="hud-title-cluster">
              <span className="hud-status-blink"></span>
              <span className="hud-label font-mono">OBJECT: ARTIFACT_XYZ_01</span>
              <span className="hud-divider">/</span>
              <span className="hud-spec font-mono text-cyan-400">SHADER: {activeMode.toUpperCase()}</span>
            </div>

            <div className="hud-controls">
              <button
                onClick={() => {
                  sound.playClick();
                  setFullscreenHUD(!fullscreenHUD);
                }}
                className="hud-action-btn"
                title="Toggle HUD Frame"
                aria-label="Expand viewport frame"
              >
                <Maximize2 size={14} />
                <span className="hud-btn-text">{fullscreenHUD ? 'Normal' : 'Expand'}</span>
              </button>
            </div>
          </div>

          {/* Central Interactive Target Reticle */}
          <div className="hud-center-reticle">
            <div className="reticle-circle-outer"></div>
            <div className="reticle-circle-inner"></div>
            <div className="reticle-axis-h"></div>
            <div className="reticle-axis-v"></div>

            <div className="reticle-hint-bubble">
              <Compass size={14} className="animate-spin text-cyan-400" style={{ animationDuration: '8s' }} />
              <span>CLICK &amp; DRAG TO ORBIT IN 3D SPACE</span>
            </div>
          </div>

          {/* Bottom HUD Mode Selector Strip */}
          <div className="hud-bottom-modes">
            <div className="mode-selector-tabs">
              {modes.map((mode) => {
                const Icon = mode.icon;
                const isActive = activeMode === mode.id;
                return (
                  <button
                    key={mode.id}
                    onClick={() => handleSelectMode(mode.id)}
                    onMouseEnter={() => sound.playHover()}
                    className={`mode-tab-btn ${isActive ? 'active' : ''}`}
                  >
                    <div className="mode-tab-icon-wrap">
                      <Icon size={16} />
                    </div>
                    <div className="mode-tab-info">
                      <span className="mode-tab-name">{mode.name}</span>
                      <span className="mode-tab-tag">{mode.tag}</span>
                    </div>
                    {isActive && <div className="mode-active-indicator" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Corner Precision Tech Marks */}
          <div className="hud-corner-bracket corner-tl"></div>
          <div className="hud-corner-bracket corner-tr"></div>
          <div className="hud-corner-bracket corner-bl"></div>
          <div className="hud-corner-bracket corner-br"></div>

          {/* Side Telemetry Coordinates */}
          <div className="hud-side-telemetry left">
            <div className="telemetry-row"><span>ROT_X:</span><span className="font-mono text-white">0.008 rad/s</span></div>
            <div className="telemetry-row"><span>ROT_Y:</span><span className="font-mono text-white">0.012 rad/s</span></div>
            <div className="telemetry-row"><span>VERTICES:</span><span className="font-mono text-cyan-400">18,432</span></div>
          </div>

          <div className="hud-side-telemetry right">
            <div className="telemetry-row"><span>LIGHT_REF:</span><span className="font-mono text-white">ACES Filmic</span></div>
            <div className="telemetry-row"><span>DPI_SCALE:</span><span className="font-mono text-white">2.0 MAX</span></div>
            <div className="telemetry-row"><span>OCCLUSION:</span><span className="font-mono text-purple-400">ACTIVE</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
