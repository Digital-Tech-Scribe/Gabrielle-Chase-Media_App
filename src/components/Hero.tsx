import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { heroVideos } from '../assets/data';
import '../index.css';

const Hero = () => {
  const navigate = useNavigate();
  // Using the Rema CHARM or House of Gaa video as the main hero background
  const videoSrc = heroVideos[1] || heroVideos[0]; 

  return (
    <section style={{
      position: 'relative',
      height: '100vh',
      minHeight: '600px',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      backgroundColor: 'var(--bg-primary)'
    }}>
      {/* Video Background */}
      <motion.div 
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
        }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="cinematic-filter"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: 0.6 // Dark overlay effect
          }}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
        
        {/* Gradient overlays for text readability */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at center, transparent 0%, rgba(13,13,13,0.8) 100%)',
        }} />
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, rgba(13,13,13,0.8) 0%, transparent 20%, transparent 80%, var(--bg-primary) 100%)',
        }} />
      </motion.div>

      {/* AMVCA Badge Top Right */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        style={{
          position: 'absolute',
          top: 'clamp(6rem, 15vh, 10rem)',
          right: 'var(--container-padding)',
          zIndex: 10,
        }}
        className="desktop-only"
      >
        <div className="award-badge glass-panel text-gold" style={{ padding: '0.8rem 1.5rem' }}>
          <span>🏆 AMVCA10 Winner</span>
        </div>
      </motion.div>

      {/* Hero Content */}
      <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center', width: '100%' }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 style={{ 
            color: 'var(--text-primary)', 
            marginBottom: '1rem',
            textShadow: '0 4px 20px rgba(0,0,0,0.5)',
            letterSpacing: '0.02em'
          }}>
            Gabrielle Chase
            <br />
            <span style={{ color: 'var(--accent)' }}>Media</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <p style={{
            color: 'var(--text-light)',
            fontSize: 'clamp(1.1rem, 2vw, 1.5rem)',
            fontFamily: 'var(--font-heading)',
            letterSpacing: '0.05em',
            maxWidth: '600px',
            margin: '0 auto 3rem',
            opacity: 0.9,
            textShadow: '0 2px 10px rgba(0,0,0,0.5)'
          }}>
            Award-Winning Art Direction & Content Production.
            Building worlds from concept to reality.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}
        >
          <button 
            className="cta-gold cursor-hover"
            onClick={() => navigate('/work')}
          >
            View Our Work
          </button>
          
          <button 
            className="cta-outline cursor-hover"
            onClick={() => navigate('/contact')}
            style={{ 
              borderColor: 'rgba(245, 240, 235, 0.3)', 
              backdropFilter: 'blur(5px)' 
            }}
          >
            Get In Touch
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
          zIndex: 10
        }}
      >
        <span style={{ 
          fontSize: '0.7rem', 
          letterSpacing: '0.2em', 
          textTransform: 'uppercase', 
          color: 'var(--text-subtle)' 
        }}>
          Scroll
        </span>
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          style={{ width: '1px', height: '40px', backgroundColor: 'var(--accent)' }}
        />
      </motion.div>
    </section>
  );
};

export default Hero;
