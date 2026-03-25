import { useState, useEffect, useCallback } from 'react';
import type { FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Instagram } from 'lucide-react';
import ScrollFadeIn from '../components/ScrollFadeIn';
import { services } from '../assets/data';
import '../index.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const styleTag = document.createElement('style');
    styleTag.innerHTML = `
      input:focus, textarea:focus, select:focus {
        border-color: var(--accent) !important;
      }
    `;
    document.head.appendChild(styleTag);
    
    return () => {
      document.head.removeChild(styleTag);
    };
  }, []);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  }, []);

  const handleSubmit = useCallback((e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  }, []);

  return (
    <main className="app-container" style={{ backgroundColor: 'var(--bg-primary)', minHeight: '100vh', display: 'flex' }}>
      
      {/* 1. Split Layout Container */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', width: '100%', minHeight: '100vh' }}>
        
        {/* Left Side: Image Panel */}
        <div style={{ position: 'relative', width: '100%', height: '100%', minHeight: '400px', overflow: 'hidden' }}>
          <div 
            aria-label="Gabrielle Chase Media creative workspace"
            style={{ width: '100%', height: '100%', backgroundColor: '#1a1a1a', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <span style={{ color: 'var(--accent)', fontSize: '4rem' }}>🎬</span>
          </div>
          {/* Dark overlay */}
          <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(13,13,13,0.6)' }} />
          
          <div style={{ position: 'absolute', inset: 0, padding: 'clamp(2rem, 6vw, 6rem)', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', zIndex: 10 }}>
            <ScrollFadeIn delay={0.2} direction="right">
              <h1 style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', marginBottom: '1rem', lineHeight: 1 }}>
                Let's <span className="text-gold">Create</span>.
              </h1>
              <p style={{ color: 'var(--text-light)', fontFamily: 'var(--font-heading)', fontSize: '1.2rem', maxWidth: '400px' }}>
                Whether it's an epic period film, an immersive set design, or a global commercial campaign — we bring vision to life.
              </p>
            </ScrollFadeIn>
          </div>
        </div>

        {/* Right Side: Contact Form & Info */}
        <div style={{ 
          padding: 'clamp(4rem, 8vw, 8rem) clamp(2rem, 6vw, 6rem)', 
          backgroundColor: 'var(--bg-tertiary)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}>
          <ScrollFadeIn>
            
            {/* Contact Details */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
              <div>
                <h4 style={{ color: 'var(--text-primary)', fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1rem' }}>Location</h4>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.8rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                  <MapPin size={18} color="var(--accent)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    Lagos, Nigeria<br />
                    Available globally.
                  </div>
                </div>
              </div>
              
              <div>
                <h4 style={{ color: 'var(--text-primary)', fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1rem' }}>Reach Us</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                  <a href="mailto:info@gabriellechase.com" className="cursor-hover" style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                    <Mail size={18} color="var(--accent)" />
                    <span style={{ transition: 'color 0.3s' }} className="text-opacity-hover">info@gabriellechase.com</span>
                  </a>
                  <a href="tel:+2340000000000" className="cursor-hover" style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                    <Phone size={18} color="var(--accent)" />
                    <span style={{ transition: 'color 0.3s' }} className="text-opacity-hover">+234 (0) 800 000 0000</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Form */}
            <h3 style={{ fontSize: '2rem', fontFamily: 'var(--font-heading)', marginBottom: '2rem' }}>Start a Conversation</h3>
            
            {isSuccess ? (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                style={{ 
                  padding: '2rem', 
                  backgroundColor: 'rgba(201, 168, 76, 0.1)', 
                  border: '1px solid var(--accent)',
                  color: 'var(--text-primary)',
                  textAlign: 'center'
                }}
              >
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✨</div>
                <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Message Received</h4>
                <p style={{ color: 'var(--text-muted)' }}>Thank you for reaching out. Our team will get back to you shortly.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                  <div className="form-group">
                    <label htmlFor="name" style={labelStyle}>Name *</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      required 
                      value={formData.name}
                      onChange={handleChange}
                      style={inputStyle}
                      className="cursor-hover"
                      placeholder="Jane Doe"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email" style={labelStyle}>Email *</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      required 
                      value={formData.email}
                      onChange={handleChange}
                      style={inputStyle}
                      className="cursor-hover"
                      placeholder="jane@example.com"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="service" style={labelStyle}>Service of Interest *</label>
                  <select 
                    id="service" 
                    name="service" 
                    required 
                    value={formData.service}
                    onChange={handleChange}
                    style={inputStyle}
                    className="cursor-hover"
                  >
                    <option value="" disabled>Select a service...</option>
                    {services.map(service => (
                      <option key={service.id} value={service.name}>{service.name}</option>
                    ))}
                    <option value="General Inquiry">General Inquiry / Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message" style={labelStyle}>Project Brief / Message *</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    required 
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    style={{ ...inputStyle, resize: 'vertical' }}
                    className="cursor-hover"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="cta-gold cursor-hover"
                  style={{ marginTop: '1rem', alignSelf: 'flex-start', opacity: isSubmitting ? 0.7 : 1 }}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}

            {/* Socials */}
            <div style={{ marginTop: '4rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <span style={{ color: 'var(--text-primary)', fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Follow Us</span>
              <div style={{ width: '40px', height: '1px', backgroundColor: 'var(--border)' }}></div>
              <a 
                href="https://www.instagram.com/gabriellechasemedia/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="cursor-hover"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  border: '1px solid var(--border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-muted)',
                  transition: 'all 0.3s ease',

                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--accent)';
                  e.currentTarget.style.color = 'var(--accent)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border)';
                  e.currentTarget.style.color = 'var(--text-muted)';
                }}
              >
                <Instagram size={18} />
              </a>
            </div>

          </ScrollFadeIn>
        </div>
      </div>
    </main>
  );
};

// Form styles
const labelStyle = {
  display: 'block',
  color: 'var(--text-primary)',
  fontSize: '0.8rem',
  letterSpacing: '0.1em',
  textTransform: 'uppercase' as const,
  marginBottom: '0.5rem'
};

const inputStyle = {
  width: '100%',
  backgroundColor: 'rgba(255, 255, 255, 0.03)',
  border: '1px solid var(--border)',
  color: 'var(--text-primary)',
  padding: '1rem 1.25rem',
  fontFamily: 'var(--font-body)',
  fontSize: '1rem',
  outline: 'none',
  transition: 'border-color 0.3s ease'
};

export default ContactPage;
