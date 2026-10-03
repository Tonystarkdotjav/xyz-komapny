import React from 'react';
import { ArrowDownRight, Layers, Eye, Cpu } from 'lucide-react';
import { sound } from '../utils/sound';

export default function AboutSection() {
  const pillars = [
    {
      icon: Layers,
      num: '01',
      title: 'Spatial Synthesis',
      desc: 'Dissolving the boundaries between physical environment and digital dimension through real-time ray-traced optics.'
    },
    {
      icon: Eye,
      num: '02',
      title: 'Cognitive Aesthetics',
      desc: 'Interfaces crafted with psychoacoustic precision and mathematical elegance, commanding immediate focus.'
    },
    {
      icon: Cpu,
      num: '03',
      title: 'Neuromorphic Scale',
      desc: 'High-frequency systems engineered to process complex generative state machines without latency artifacts.'
    }
  ];

  return (
    <section id="about" className="section-container about-section">
      <div className="section-ambient-glow"></div>

      <div className="content-wrapper">
        {/* Section Header */}
        <div className="section-eyebrow">
          <span className="eyebrow-index">01</span>
          <span className="eyebrow-divider">/</span>
          <span className="eyebrow-text">GENESIS &amp; PHILOSOPHY</span>
        </div>

        {/* Big Impact Statement */}
        <h2 className="about-headline">
          <span className="reveal-line">WE TURN IDEAS</span>
          <span className="reveal-line gradient-text">INTO EXPERIENCES.</span>
        </h2>

        {/* Narrative Grid */}
        <div className="about-grid">
          <div className="about-lead">
            <p className="about-lead-text">
              XYZ was founded on a singular conviction: the next era of digital computing will not live behind flat glass squares. It will exist as a continuous, ambient layer woven into the fabric of space itself.
            </p>
            <p className="about-sub-text">
              We operate at the volatile intersection of spatial computing, generative artificial intelligence, and cinematic digital craft. We do not design static pages; we architect living worlds that react, breathe, and evolve with every human interaction.
            </p>

            <div className="about-stats-row">
              <div className="about-stat-box">
                <span className="about-stat-num">14+</span>
                <span className="about-stat-label">AWARDS &amp; RECOGNITIONS</span>
              </div>
              <div className="about-stat-box">
                <span className="about-stat-num">42</span>
                <span className="about-stat-label">GLOBAL PATENTS FILED</span>
              </div>
              <div className="about-stat-box">
                <span className="about-stat-num">100%</span>
                <span className="about-stat-label">BESPOKE CODEBASES</span>
              </div>
            </div>
          </div>

          {/* Interactive Pillars */}
          <div className="about-pillars">
            {pillars.map((p, idx) => {
              const Icon = p.icon;
              return (
                <div
                  key={idx}
                  className="pillar-card glass-panel"
                  onMouseEnter={() => sound.playHover()}
                >
                  <div className="pillar-header">
                    <div className="pillar-icon-box">
                      <Icon size={18} className="text-cyan-400" />
                    </div>
                    <span className="pillar-num">{p.num}</span>
                  </div>
                  <h3 className="pillar-title">{p.title}</h3>
                  <p className="pillar-desc">{p.desc}</p>
                  <div className="pillar-shimmer"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
