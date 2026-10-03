import React, { useState } from 'react';
import { Send, Mail, MapPin, Copy, Check, ArrowUpRight, ShieldCheck, Sparkles } from 'lucide-react';
import { sound } from '../utils/sound';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    scope: 'Spatial Experience',
    message: ''
  });

  const [copied, setCopied] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    sound.playClick();
    navigator.clipboard?.writeText('initiatives@xyz-systems.io');
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    sound.playModeShift();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      sound.playActivate();
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', scope: 'Spatial Experience', message: '' });
      }, 5000);
    }, 1200);
  };

  const studios = [
    { city: 'Tokyo', coord: '35.6762° N, 139.6503° E', address: 'Roppongi Hills Mori Tower 48F' },
    { city: 'Zurich', coord: '47.3769° N, 8.5417° E', address: 'Limmatquai 114, 8001 Zürich' },
    { city: 'San Francisco', coord: '37.7749° N, 122.4194° W', address: 'Pier 1, The Embarcadero' }
  ];

  const socials = [
    { name: 'X / Twitter', url: 'https://twitter.com' },
    { name: 'GitHub', url: 'https://github.com' },
    { name: 'Linear', url: 'https://linear.app' },
    { name: 'Discord', url: 'https://discord.com' },
    { name: 'LinkedIn', url: 'https://linkedin.com' }
  ];

  return (
    <section id="contact" className="section-container contact-section">
      {/* Background Animated Kinetic Emblem */}
      <div className="contact-bg-emblem">
        <div className="emblem-ring ring-outer"></div>
        <div className="emblem-ring ring-middle"></div>
        <div className="emblem-ring ring-inner"></div>
        <div className="emblem-symbol">XYZ</div>
      </div>

      <div className="content-wrapper">
        <div className="section-eyebrow">
          <span className="eyebrow-index">06</span>
          <span className="eyebrow-divider">/</span>
          <span className="eyebrow-text">INITIATION &amp; CONTACT</span>
        </div>

        <h2 className="contact-headline">
          LET’S BUILD SOMETHING <br />
          <span className="gradient-text">UNEXPECTED.</span>
        </h2>

        <div className="contact-layout-grid">
          {/* Left Column: Direct Inquiries & Global Nodes */}
          <div className="contact-info-col">
            <p className="contact-lead-desc">
              We collaborate with forward-thinking enterprises, boundary-pushing founders, and cultural institutions ready to abandon the conventional.
            </p>

            {/* Direct Channel Email Card */}
            <div className="contact-email-card glass-panel">
              <div className="email-meta-top">
                <span className="font-mono text-xs text-zinc-400">DIRECT ENCRYPTED TRANSMISSION</span>
                <span className="channel-status-pill">
                  <span className="pulse-dot"></span>
                  <span>OPEN FOR COMMISSIONS</span>
                </span>
              </div>

              <div className="email-address-row">
                <span className="email-address-text font-mono">initiatives@xyz-systems.io</span>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="copy-email-btn"
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {copied ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
                  <span className="copy-label">{copied ? 'COPIED' : 'COPY'}</span>
                </button>
              </div>
            </div>

            {/* Global Studio Coordinates */}
            <div className="contact-studios-block">
              <div className="studios-title font-mono text-xs text-zinc-400">
                GLOBAL STUDIO NODES
              </div>
              <div className="studios-list">
                {studios.map((st, i) => (
                  <div key={i} className="studio-item">
                    <div className="studio-city-row">
                      <MapPin size={13} className="text-cyan-400" />
                      <span className="studio-city-name">{st.city}</span>
                      <span className="studio-coord font-mono">{st.coord}</span>
                    </div>
                    <div className="studio-addr">{st.address}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Network Channels */}
            <div className="contact-socials-block">
              <span className="socials-label font-mono text-xs text-zinc-400">CONNECT ON PROTOCOLS</span>
              <div className="social-links-wrap">
                {socials.map((soc, i) => (
                  <a
                    key={i}
                    href={soc.url}
                    target="_blank"
                    rel="noreferrer"
                    onMouseEnter={() => sound.playHover()}
                    className="social-pill-link"
                  >
                    <span>{soc.name}</span>
                    <ArrowUpRight size={12} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: High-Touch Initiation Form */}
          <div className="contact-form-col">
            <form onSubmit={handleSubmit} className="contact-form-card glass-panel">
              <div className="form-header">
                <div className="form-title-group">
                  <Sparkles size={16} className="text-cyan-400" />
                  <span className="form-title">TRANSMIT INQUIRY</span>
                </div>
                <span className="font-mono text-xs text-zinc-500">PGP 256-BIT</span>
              </div>

              {submitted ? (
                <div className="form-success-box">
                  <div className="success-icon-wrap">
                    <ShieldCheck size={36} className="text-cyan-400" />
                  </div>
                  <h3 className="success-title">TRANSMISSION RECEIVED</h3>
                  <p className="success-desc">
                    Your parameters have been logged into the XYZ dispatch queue. A partner will establish contact within 12 hours.
                  </p>
                  <span className="font-mono text-xs text-zinc-500">REF: XYZ-{Math.random().toString(36).substring(2, 8).toUpperCase()}</span>
                </div>
              ) : (
                <>
                  <div className="form-group">
                    <label className="form-label" htmlFor="form-name">
                      <span>IDENTITY / NAME</span>
                      <span className="form-required">*</span>
                    </label>
                    <input
                      id="form-name"
                      type="text"
                      required
                      placeholder="e.g. Dr. Elena Vance"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="form-email">
                      <span>CORRESPONDENCE / EMAIL</span>
                      <span className="form-required">*</span>
                    </label>
                    <input
                      id="form-email"
                      type="email"
                      required
                      placeholder="e.g. elena@nova-ventures.co"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">
                      <span>INITIATIVE SCOPE</span>
                    </label>
                    <div className="scope-pills-row">
                      {['Spatial Experience', 'Generative AI', 'Kinetic Design', 'System Architecture'].map((sc) => (
                        <button
                          key={sc}
                          type="button"
                          onClick={() => {
                            sound.playHover();
                            setFormData({ ...formData, scope: sc });
                          }}
                          className={`scope-pill-btn ${formData.scope === sc ? 'active' : ''}`}
                        >
                          {sc}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="form-message">
                      <span>BRIEF / OBJECTIVES</span>
                    </label>
                    <textarea
                      id="form-message"
                      rows={4}
                      placeholder="Outline the vision, desired technological threshold, and target deployment timeline..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="form-textarea"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    onMouseEnter={() => sound.playHover()}
                    className="btn-submit"
                  >
                    <span>{submitting ? 'TRANSMITTING PACKETS...' : 'SEND INQUIRY'}</span>
                    <Send size={15} />
                  </button>
                </>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
