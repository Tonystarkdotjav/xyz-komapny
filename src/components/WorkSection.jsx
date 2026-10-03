import React, { useState } from 'react';
import { ArrowUpRight, Sparkles, Terminal, Activity, Layers } from 'lucide-react';
import { sound } from '../utils/sound';
import ProjectModal from './ProjectModal';

export default function WorkSection() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 'aura',
      title: 'PROJECT AURA',
      tagline: 'Autonomous Neuromorphic Interface & Spatial Computing OS',
      category: 'SPATIAL OS // AI',
      year: '2026',
      shortDescription: 'A zero-latency spatial operating environment designed for next-generation volumetric optics. Features real-time fluid ocular tracking, ambient dimensional windows, and predictive acoustic feedback.',
      fullDescription: 'Project AURA represents a paradigm shift in human-machine communion. By bypassing traditional 2D window managers in favor of an egocentric spatial graph, AURA models user intent through continuous eye-gaze vectors and micro-gestural acceleration. Built directly on custom Vulkan and WebGPU pipelines, it operates with less than 1.1ms of spatial motion-to-photon latency.',
      specs: {
        core: 'Neuromorphic Graph Runtime v2',
        latency: '< 1.1ms Motion-to-Photon',
        pipeline: 'Direct WebGPU / Vulkan Compute',
        region: 'Global Distributed Clusters'
      },
      achievements: [
        'Over 99.8% gaze-vector prediction accuracy under high cognitive load',
        'Dynamic spatial audio rendering across 64 virtual acoustic zones',
        'Awarded Best in Spatial Design at Global Interface Summit 2026'
      ],
      gradientBg: 'radial-gradient(circle at 60% 40%, rgba(0, 242, 254, 0.18), rgba(6, 7, 9, 0.95))',
      visualElement: (
        <div className="project-visual-canvas aura-canvas">
          <div className="aura-ring ring-1"></div>
          <div className="aura-ring ring-2"></div>
          <div className="aura-ring ring-3"></div>
          <div className="aura-core-glow"></div>
          <div className="aura-grid-lines"></div>
          <div className="visual-badge">
            <span className="pulse-dot"></span>
            <span>GAZE TRACKING ACTIVE</span>
          </div>
        </div>
      )
    },
    {
      id: 'kairos',
      title: 'KAIROS TOPOGRAPHY',
      tagline: 'Cryptographic Quantum State Visualization Engine',
      category: 'SYSTEMS // VISUALIZATION',
      year: '2026',
      shortDescription: 'An architectural real-time 3D telemetry platform mapping global distributed compute clusters into a kinetic topological landmass. Translating millions of micro-transactions into living geometric flows.',
      fullDescription: 'KAIROS transforms hyper-dense financial and cryptographic telemetry into an intuitive physical-digital topography. Through dynamic heightmap displacement and real-time volumetric raymarching, system architects can perceive throughput bottlenecks, cluster desynchronizations, and latency waves as organic geological phenomena.',
      specs: {
        core: 'Dynamic Heightmap Tessellator',
        latency: '3.4ms Global Stream Sync',
        pipeline: 'Custom GLSL Raymarching Shader',
        region: 'Zurich // Tokyo // NYC'
      },
      achievements: [
        'Real-time simulation of 12M+ concurrent telemetry events with zero frame drops',
        'Adaptive LOD tessellation reducing memory bandwidth by 74%',
        'Integrated into 18 Fortune 100 mission control rooms worldwide'
      ],
      gradientBg: 'radial-gradient(circle at 40% 60%, rgba(168, 85, 247, 0.18), rgba(6, 7, 9, 0.95))',
      visualElement: (
        <div className="project-visual-canvas kairos-canvas">
          <div className="kairos-mesh"></div>
          <div className="kairos-nodes">
            {[...Array(8)].map((_, i) => (
              <span key={i} className={`node-point node-${i}`}></span>
            ))}
          </div>
          <div className="visual-badge">
            <Activity size={12} className="text-purple-400" />
            <span>12.4M OPS/SEC</span>
          </div>
        </div>
      )
    },
    {
      id: 'synapse',
      title: 'SYNAPSE PAVILION',
      tagline: 'Biosensing Kinetic Architectural Installation',
      category: 'IMMERSIVE // HARDWARE',
      year: '2025–2026',
      shortDescription: 'A monumental architectural pavilion in Tokyo that responds to collective biometric data from visitors. Translates respiratory rhythm, heart rate variability, and spatial movement into kinetic acoustic lighting waves.',
      fullDescription: 'SYNAPSE synthesizes architecture, biometric telemetry, and generative spatial composition. Standing 14 meters tall in the heart of Shibuya, the structure utilizes 480 custom carbon-fiber articulating louvers and 1,200 addressable laser-etched light guides that ripple in sync with biometric inputs captured from ambient sensor floors.',
      specs: {
        core: 'Biometric Collective Ingestion Bus',
        latency: '8.2ms Sensor-to-Mechanical Actuation',
        pipeline: 'Spatial Audio Array + DMX512 Rig',
        region: 'Tokyo, Japan'
      },
      achievements: [
        'Synchronized mechanical actuation across 480 physical carbon louvers',
        'Ambient biometric acoustic mapping tested with over 250,000 visitors',
        'Grand Prix in Experimental Spatial Architecture 2025'
      ],
      gradientBg: 'radial-gradient(circle at 50% 50%, rgba(56, 189, 248, 0.15), rgba(6, 7, 9, 0.95))',
      visualElement: (
        <div className="project-visual-canvas synapse-canvas">
          <div className="synapse-pillars">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="synapse-bar" style={{ animationDelay: `${i * 0.15}s` }}></div>
            ))}
          </div>
          <div className="visual-badge">
            <span className="pulse-dot"></span>
            <span>BIOMETRIC MATRIX LIVE</span>
          </div>
        </div>
      )
    }
  ];

  return (
    <section id="work" className="section-container work-section">
      <div className="content-wrapper">
        {/* Section Header */}
        <div className="section-header-flex">
          <div>
            <div className="section-eyebrow">
              <span className="eyebrow-index">04</span>
              <span className="eyebrow-divider">/</span>
              <span className="eyebrow-text">SELECTED INITIATIVES</span>
            </div>
            <h2 className="section-title">
              FLAGSHIP <span className="gradient-text">PROJECTS.</span>
            </h2>
          </div>
          <p className="section-lead-inline">
            A curated portfolio of radical digital engineering, spatial interfaces, and living architectural systems.
          </p>
        </div>

        {/* Editorial Project Showcase List */}
        <div className="projects-editorial-list">
          {projects.map((proj, idx) => {
            const isReversed = idx % 2 === 1;
            return (
              <article
                key={proj.id}
                className={`editorial-project-item ${isReversed ? 'layout-reversed' : ''}`}
                onMouseEnter={() => sound.playHover()}
              >
                {/* Visual Canvas Column */}
                <div
                  className="editorial-visual-wrapper glass-panel"
                  onClick={() => {
                    sound.playClick();
                    setSelectedProject(proj);
                  }}
                  data-interactive="true"
                >
                  <div
                    className="editorial-visual-inner"
                    style={{ background: proj.gradientBg }}
                  >
                    {proj.visualElement}
                  </div>
                  <div className="visual-hover-overlay">
                    <span className="hover-cta-pill">
                      <span>Inspect Spec &amp; Case Study</span>
                      <ArrowUpRight size={14} />
                    </span>
                  </div>
                </div>

                {/* Editorial Content Column */}
                <div className="editorial-info-wrapper">
                  <div className="editorial-meta-row">
                    <span className="meta-category font-mono">{proj.category}</span>
                    <span className="meta-divider">/</span>
                    <span className="meta-year font-mono">{proj.year}</span>
                  </div>

                  <h3 className="editorial-project-title">
                    {proj.title}
                  </h3>

                  <p className="editorial-project-tagline">
                    {proj.tagline}
                  </p>

                  <p className="editorial-project-desc">
                    {proj.shortDescription}
                  </p>

                  {/* Highlights Mini Grid */}
                  <div className="editorial-highlights-grid">
                    <div className="highlight-pill">
                      <span className="highlight-label">CORE:</span>
                      <span className="highlight-value font-mono">{proj.specs.core.split(' ')[0]}</span>
                    </div>
                    <div className="highlight-pill">
                      <span className="highlight-label">LATENCY:</span>
                      <span className="highlight-value font-mono text-cyan-400">{proj.specs.latency.split(' ')[0]}</span>
                    </div>
                  </div>

                  <div className="editorial-actions">
                    <button
                      onClick={() => {
                        sound.playClick();
                        setSelectedProject(proj);
                      }}
                      className="btn-editorial-explore"
                    >
                      <span>Explore Case Study</span>
                      <ArrowUpRight size={16} />
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Case Study Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
