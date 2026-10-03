import React, { useState, useRef } from 'react';
import { Monitor, Lightbulb, Palette, Terminal, Sparkles, ChevronRight, CheckCircle2 } from 'lucide-react';
import { sound } from '../utils/sound';

export default function CapabilitiesSection() {
  const [activeCap, setActiveCap] = useState(0);

  const capabilities = [
    {
      id: 'digital-experiences',
      icon: Monitor,
      title: 'Digital Experiences',
      subtitle: 'SPATIAL & REAL-TIME WEBGL',
      description: 'We construct hyper-immersive digital realms that obliterate the boundary between cinema, software, and physical reality. Leveraging custom GLSL shaders and real-time physics engines.',
      deliverables: [
        'Real-Time WebGL & WebGPU Systems',
        'Spatial Computing & VisionOS Architectures',
        'Interactive Generative Landscapes',
        'Micro-Perceptual Haptic Feedback'
      ],
      metrics: { latency: '0.8ms', framerate: '120 FPS', pipeline: 'Direct WebGL2' }
    },
    {
      id: 'innovation',
      icon: Lightbulb,
      title: 'Innovation',
      subtitle: 'NEUROMORPHIC & GENERATIVE AI',
      description: 'We invent proprietary cognitive layers and autonomous interaction primitives. Translating complex model weights into intuitive, kinetic user interfaces that adapt dynamically to human intent.',
      deliverables: [
        'Proprietary Spatial UI Frameworks',
        'Autonomous Agent Orchestration',
        'Predictive Intent Mapping',
        'Zero-Latency Edge Inference'
      ],
      metrics: { latency: '1.4ms', framerate: '90 FPS', pipeline: 'Tensor RT Edge' }
    },
    {
      id: 'design',
      icon: Palette,
      title: 'Design',
      subtitle: 'PRECISION KINETIC SYSTEMS',
      description: 'Design is not cosmetic veneer; it is the fundamental architecture of human perception. Every curve, font weight, reflection coefficient, and micro-transition is calculated with algorithmic rigor.',
      deliverables: [
        'Cinematic Brand Identifiers',
        'Harmonic Kinetic Design Systems',
        'Custom Micro-Typography Engines',
        'Volumetric Interface Libraries'
      ],
      metrics: { latency: '0.1ms', framerate: '240 FPS', pipeline: 'Vector Fluidity' }
    },
    {
      id: 'technology',
      icon: Terminal,
      title: 'Technology',
      subtitle: 'ENTERPRISE-GRADE ARCHITECTURES',
      description: 'Behind the breathtaking visuals lies uncompromising engineering. Bulletproof distributed architectures, sub-millisecond data pipes, and cryptographic verification for mission-critical operations.',
      deliverables: [
        'High-Frequency Distributed Web Services',
        'Cryptographic Identity & Ledger Stacks',
        'Zero-Trust Security Perimeters',
        'Cloud-Native Scalable GPU Clusters'
      ],
      metrics: { latency: '0.4ms', framerate: '60 FPS', pipeline: 'Rust & WASM Core' }
    }
  ];

  // Mouse tilt calculation for the interactive 3D glass cards
  const handleMouseMove = (e, index) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -12;
    const rotateY = ((x - centerX) / centerX) * 12;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
    card.style.setProperty('--mouse-x', `${(x / rect.width) * 100}%`);
    card.style.setProperty('--mouse-y', `${(y / rect.height) * 100}%`);
  };

  const handleMouseLeave = (e) => {
    const card = e.currentTarget;
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
  };

  return (
    <section id="solutions" className="section-container capabilities-section">
      <div className="content-wrapper">
        {/* Section Header */}
        <div className="section-header-flex">
          <div>
            <div className="section-eyebrow">
              <span className="eyebrow-index">02</span>
              <span className="eyebrow-divider">/</span>
              <span className="eyebrow-text">CAPABILITIES &amp; SPECIALTIES</span>
            </div>
            <h2 className="section-title">
              WHAT <span className="gradient-text">XYZ DOES.</span>
            </h2>
          </div>
          <p className="section-lead-inline">
            Four interconnected disciplines operating in concert to manufacture unprecedented digital artifacts.
          </p>
        </div>

        {/* 3D Reactive Glass Panels Grid */}
        <div className="capabilities-grid">
          {capabilities.map((cap, idx) => {
            const Icon = cap.icon;
            const isSelected = activeCap === idx;
            return (
              <div
                key={cap.id}
                className={`capability-card-3d glass-panel ${isSelected ? 'selected' : ''}`}
                onMouseMove={(e) => handleMouseMove(e, idx)}
                onMouseLeave={handleMouseLeave}
                onClick={() => {
                  sound.playClick();
                  setActiveCap(idx);
                }}
                onMouseEnter={() => sound.playHover()}
                data-interactive="true"
              >
                {/* Specular Glare Layer */}
                <div className="card-specular-glare"></div>

                {/* Card Top Banner */}
                <div className="cap-card-top">
                  <div className="cap-icon-wrapper">
                    <Icon size={20} className="cap-icon" />
                  </div>
                  <span className="cap-index">0{idx + 1}</span>
                </div>

                <div className="cap-card-body">
                  <span className="cap-subtitle">{cap.subtitle}</span>
                  <h3 className="cap-title">{cap.title}</h3>
                  <p className="cap-desc">{cap.description}</p>
                </div>

                {/* Deliverables List */}
                <div className="cap-deliverables">
                  <div className="cap-deliv-header">KEY CAPABILITIES</div>
                  <ul className="cap-deliv-list">
                    {cap.deliverables.map((item, dIdx) => (
                      <li key={dIdx} className="cap-deliv-item">
                        <CheckCircle2 size={13} className="text-cyan-400" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Live Engineering Metrics Pill */}
                <div className="cap-metrics-footer">
                  <div className="metric-pill">
                    <span className="metric-key">LATENCY</span>
                    <span className="metric-val">{cap.metrics.latency}</span>
                  </div>
                  <div className="metric-pill">
                    <span className="metric-key">TARGET</span>
                    <span className="metric-val">{cap.metrics.framerate}</span>
                  </div>
                </div>

                {/* Interactive corner markers */}
                <div className="tech-corner corner-tl"></div>
                <div className="tech-corner corner-br"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
