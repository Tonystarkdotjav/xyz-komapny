import React from 'react';
import { X, ExternalLink, Cpu, Layers, Activity, ArrowRight, ShieldCheck } from 'lucide-react';
import { sound } from '../utils/sound';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="project-modal-backdrop" onClick={onClose}>
      <div
        className="project-modal-dialog glass-panel"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="modal-header">
          <div className="modal-meta-left">
            <span className="modal-category font-mono">{project.category}</span>
            <span className="modal-divider">/</span>
            <span className="modal-year font-mono">{project.year}</span>
          </div>

          <button
            onClick={() => {
              sound.playClick();
              onClose();
            }}
            className="modal-close-btn"
            aria-label="Close Case Study"
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Content Body */}
        <div className="modal-body">
          <h2 className="modal-title">{project.title}</h2>
          <p className="modal-tagline">{project.tagline}</p>

          {/* Project Visual Stage */}
          <div className="modal-hero-visual">
            <div className="modal-visual-inner" style={{ background: project.gradientBg }}>
              {project.visualElement}
            </div>
          </div>

          {/* Specs / Architecture Grid */}
          <div className="modal-specs-grid">
            <div className="modal-spec-card">
              <span className="spec-label">SYSTEM CORE</span>
              <span className="spec-value">{project.specs.core}</span>
            </div>
            <div className="modal-spec-card">
              <span className="spec-label">LATENCY TARGET</span>
              <span className="spec-value text-cyan-400">{project.specs.latency}</span>
            </div>
            <div className="modal-spec-card">
              <span className="spec-label">GRAPHICS PIPELINE</span>
              <span className="spec-value">{project.specs.pipeline}</span>
            </div>
            <div className="modal-spec-card">
              <span className="spec-label">DEPLOYMENT REGION</span>
              <span className="spec-value">{project.specs.region}</span>
            </div>
          </div>

          {/* Deep Architectural Narrative */}
          <div className="modal-narrative">
            <h3 className="narrative-heading">ENGINEERING ARCHITECTURE</h3>
            <p className="narrative-p">{project.fullDescription}</p>

            <h3 className="narrative-heading">TECHNICAL ACHIEVEMENTS</h3>
            <ul className="narrative-list">
              {project.achievements.map((item, idx) => (
                <li key={idx} className="narrative-list-item">
                  <ShieldCheck size={16} className="text-cyan-400 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="modal-footer">
          <div className="modal-status-badge">
            <span className="pulse-dot"></span>
            <span>VERIFIED PRODUCTION SYSTEM</span>
          </div>

          <button
            onClick={() => {
              sound.playClick();
              onClose();
            }}
            className="btn-primary"
          >
            <span>Return to Portfolio</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
