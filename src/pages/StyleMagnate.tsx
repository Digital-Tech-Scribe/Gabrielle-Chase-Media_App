import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import ScrollFadeIn from '../components/ScrollFadeIn';
import { filmTvProjects, tutorialVideos } from '../assets/data';

const StyleMagnate = () => {
  const navigate = useNavigate();
  // Get the Style Magnate project data
  const project = filmTvProjects.find(p => p.id === 'style-magnate');
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main style={{ backgroundColor: 'var(--bg-primary)', minHeight: '100vh', overflow: 'hidden' }}>
      
      {/* Hero Section */}
      <section style={{ position: 'relative', height: '100vh', width: '100%', display: 'flex', alignItems: 'center' }}>
        
        {/* Background Image with Cinematic Filter */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <img 
            src={project?.image} 
            alt="Style Magnate" 
            className="cinematic-filter"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          {/* Gradients for text readability */}
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, var(--bg-primary) 0%, rgba(13,13,13,0.7) 50%, transparent 100%)' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, var(--bg-primary) 0%, transparent 50%)' }} />
        </div>

        {/* Content */}
        <div className="container" style={{ position: 'relative', zIndex: 10, width: '100%' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ maxWidth: '700px' }}
          >
            <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
              <span style={{ 
                color: 'var(--accent)', 
                fontSize: '0.8rem', 
                letterSpacing: '0.2em', 
                textTransform: 'uppercase',
                border: '1px solid var(--accent)',
                padding: '0.4rem 1rem',
                borderRadius: '2px'
              }}>
                Showmax Original
              </span>
              <span className="award-badge glass-panel text-gold" style={{ padding: '0.4rem 1rem' }}>
                🏆 AMVCA11 Nominated
              </span>
            </div>

            <h1 style={{ 
              fontSize: 'clamp(4rem, 10vw, 8rem)', 
              lineHeight: 0.9,
              marginBottom: '2rem',
              color: 'var(--text-primary)',
              textShadow: '0 10px 30px rgba(0,0,0,0.8)'
            }}>
              Style<br />Magnate
            </h1>

            <p style={{ 
              color: 'var(--text-muted)', 
              fontSize: '1.2rem', 
              fontFamily: 'var(--font-heading)',
              lineHeight: 1.6,
              marginBottom: '3rem',
              maxWidth: '500px'
            }}>
              20 designers. ₦100M prize. Nigeria's most prestigious fashion competition series. Created and executive produced by Abisola Omolade.
            </p>

            <button 
              className="cta-gold cursor-hover"
              onClick={() => window.open('https://www.showmax.com', '_blank')}
            >
              Watch on Showmax
            </button>
          </motion.div>
        </div>
      </section>

      {/* Details Section */}
      <section className="section" style={{ backgroundColor: 'var(--bg-primary)', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
            
            <ScrollFadeIn>
              <h3 style={{ color: 'var(--text-primary)', fontSize: '0.85rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '2rem' }}>
                The Vision
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '1.5rem' }}>
                Style Magnate is more than a competition; it's a celebration of African sartorial excellence. The series brings together 20 of Nigeria's most promising fashion designers to compete for a life-changing ₦100M prize.
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>
                As Creator and Executive Producer, Abisola Omolade built a world that is visually stunning, brutally competitive, and deeply authentic to the Nigerian fashion experience.
              </p>
            </ScrollFadeIn>

            <ScrollFadeIn delay={0.2}>
              <h3 style={{ color: 'var(--text-primary)', fontSize: '0.85rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '2rem' }}>
                The Judges
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ padding: '1.5rem', backgroundColor: 'var(--bg-secondary)', borderLeft: '2px solid var(--accent)' }}>
                  <h4 style={{ fontSize: '1.2rem', marginBottom: '0.2rem' }}>Mai Atafo</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: 0 }}>Legendary Fashion Designer & Master Tailor</p>
                </div>
                <div style={{ padding: '1.5rem', backgroundColor: 'var(--bg-secondary)', borderLeft: '2px solid var(--accent)' }}>
                  <h4 style={{ fontSize: '1.2rem', marginBottom: '0.2rem' }}>Joseph Benjamin</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: 0 }}>Award-winning Actor & Style Icon</p>
                </div>
              </div>
            </ScrollFadeIn>

          </div>
        </div>
      </section>

      {/* Media / Video teaser */}
      <section style={{ position: 'relative', width: '100%', height: '80vh', backgroundColor: '#000' }}>
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.6 }}
        >
          <source src={tutorialVideos.mainView.src} type="video/mp4" />
        </video>
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <button 
            onClick={() => navigate('/work')}
            style={{
              width: '100px',
              height: '100px',
              borderRadius: '50%',
              backgroundColor: 'var(--accent)',
              color: 'var(--bg-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              border: 'none',
              transition: 'transform 0.3s ease'
            }}
            className="cursor-hover"
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', letterSpacing: '0.1em', marginLeft: '0.2rem' }}>PLAY</span>
          </button>
        </div>
      </section>

    </main>
  );
};

export default StyleMagnate;
