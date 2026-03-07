import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageTransition from '../../components/PageTransition';

const ContactUsPage = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputStyle = {
    width: '100%',
    backgroundColor: 'transparent',
    border: 'none',
    borderBottom: '1px solid var(--border)',
    color: '#fff',
    padding: '1rem 0',
    fontSize: '1.2rem',
    fontFamily: 'Inter, sans-serif',
    outline: 'none',
    transition: 'border-color 0.3s',
    marginBottom: '2rem'
  };

  return (
    <PageTransition>
      <div style={{ backgroundColor: 'var(--bg-primary)', minHeight: '100vh', paddingTop: '10rem', paddingBottom: '6rem' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
            gap: '8rem'
          }}>
            
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', textTransform: 'uppercase', marginBottom: '2rem', lineHeight: 1 }}>
                Say<br/>Hello
              </h1>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginTop: '4rem' }}>
                <div>
                  <h3 style={{ fontSize: '0.9rem', color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>Email</h3>
                  <a href="mailto:hello@gabriellechasemedia.com" style={{ fontSize: '1.2rem', color: '#fff', textDecoration: 'none' }}>hello@gabriellechasemedia.com</a>
                </div>
                <div>
                  <h3 style={{ fontSize: '0.9rem', color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>Instagram</h3>
                  <a href="https://instagram.com/gabriellechasemedia" target="_blank" rel="noopener noreferrer" style={{ fontSize: '1.2rem', color: '#fff', textDecoration: 'none' }}>@gabriellechasemedia</a>
                </div>
                <div>
                  <h3 style={{ fontSize: '0.9rem', color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>Office</h3>
                  <p style={{ fontSize: '1.2rem', color: '#fff', margin: 0 }}>Los Angeles, CA</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div style={{ backgroundColor: 'var(--bg-secondary)', padding: '4rem', borderRadius: '4px' }}>
                <AnimatePresence mode="wait">
                  {!submitted ? (
                    <motion.form 
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0, y: -20 }}
                      onSubmit={handleSubmit}
                    >
                      <h2 style={{ fontSize: '2rem', marginBottom: '3rem', fontWeight: 400 }}>Project Inquiry</h2>
                      
                      <input 
                        required 
                        type="text" 
                        placeholder="Your Name *" 
                        style={inputStyle} 
                        onFocus={(e) => e.target.style.borderBottomColor = 'var(--accent)'}
                        onBlur={(e) => e.target.style.borderBottomColor = 'var(--border)'}
                      />
                      
                      <input 
                        required 
                        type="email" 
                        placeholder="Email Address *" 
                        style={inputStyle} 
                        onFocus={(e) => e.target.style.borderBottomColor = 'var(--accent)'}
                        onBlur={(e) => e.target.style.borderBottomColor = 'var(--border)'}
                      />
                      
                      <input 
                        type="text" 
                        placeholder="Company / Brand" 
                        style={inputStyle} 
                        onFocus={(e) => e.target.style.borderBottomColor = 'var(--accent)'}
                        onBlur={(e) => e.target.style.borderBottomColor = 'var(--border)'}
                      />
                      
                      <textarea 
                        required 
                        placeholder="Tell us about your project *" 
                        rows={4}
                        style={{ ...inputStyle, resize: 'none' }} 
                        onFocus={(e) => e.target.style.borderBottomColor = 'var(--accent)'}
                        onBlur={(e) => e.target.style.borderBottomColor = 'var(--border)'}
                      />
                      
                      <button type="submit" style={{
                        marginTop: '2rem',
                        padding: '1.2rem 3rem',
                        backgroundColor: 'var(--text-primary)',
                        color: 'var(--bg-primary)',
                        border: 'none',
                        borderRadius: '30px',
                        fontSize: '1rem',
                        letterSpacing: '0.05em',
                        textTransform: 'uppercase',
                        cursor: 'pointer',
                        transition: 'background-color 0.3s'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--accent)'}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--text-primary)'}>
                        Send Message
                      </button>
                    </motion.form>
                  ) : (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      style={{ textAlign: 'center', padding: '4rem 0' }}
                    >
                      <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>✨</div>
                      <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', fontWeight: 400 }}>Message Received</h2>
                      <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.6 }}>
                        Thank you for reaching out to Gabrielle Chase Media.<br/>Our team will get back to you within 24 hours.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </PageTransition>
  );
};

export default ContactUsPage;
