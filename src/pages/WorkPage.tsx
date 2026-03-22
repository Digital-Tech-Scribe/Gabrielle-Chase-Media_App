import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import ScrollFadeIn from '../components/ScrollFadeIn';
import { portfolioItems } from '../assets/data';
import '../index.css';

const WorkPage = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedItem, setSelectedItem] = useState<typeof portfolioItems[0] | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = ['All', 'Film & TV', 'Set Design'];

  const filteredItems = activeFilter === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <main className="app-container" style={{ paddingTop: '8rem', backgroundColor: 'var(--bg-primary)', minHeight: '100vh' }}>
      
      {/* 1. Page Header */}
      <section className="container" style={{ paddingBottom: '3rem' }}>
        <ScrollFadeIn>
          <h1 style={{ marginBottom: '1rem', fontSize: 'clamp(3rem, 6vw, 6rem)' }}>
            Selected <span className="text-gold">Works</span>.
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', fontFamily: 'var(--font-heading)', maxWidth: '600px' }}>
            A curated selection of our finest productions, set designs, and visual campaigns.
          </p>
        </ScrollFadeIn>
      </section>

      {/* 2. Filter Bar */}
      <section className="container" style={{ marginBottom: '3rem' }}>
        <ScrollFadeIn delay={0.2}>
          <div style={{ 
            display: 'flex', 
            gap: '1rem', 
            flexWrap: 'wrap',
            borderBottom: '1px solid var(--border)',
            paddingBottom: '1.5rem'
          }}>
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className="cursor-hover"
                style={{
                  background: 'none',
                  border: 'none',
                  padding: '0.5rem 1rem',
                  color: activeFilter === category ? 'var(--accent)' : 'var(--text-muted)',
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.8rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  fontWeight: activeFilter === category ? 600 : 400,
                  transition: 'color 0.3s ease'
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </ScrollFadeIn>
      </section>

      {/* 3. Masonry Grid */}
      <section className="container" style={{ paddingBottom: '6rem' }}>
        <motion.div 
          layout
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
            gap: '1.5rem',
          }}
        >
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={item.id}
                className="cursor-hover"
                onClick={() => setSelectedItem(item)}
                style={{
                  position: 'relative',
                  width: '100%',
                  height: item.aspect === 'portrait' ? '600px' : '400px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  backgroundColor: 'var(--bg-secondary)',
                  gridRowEnd: item.aspect === 'portrait' ? 'span 2' : 'span 1'
                }}
              >
                {item.video ? (
                  <video 
                    src={item.video} 
                    autoPlay 
                    muted 
                    loop 
                    playsInline
                    className="cinematic-filter"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.8s var(--ease-out-expo)'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  />
                ) : (
                  <img 
                    src={item.image} 
                    alt={item.title}
                    loading="lazy"
                    className="cinematic-filter"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.8s var(--ease-out-expo)'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  />
                )}

                
                {/* Always visible category pill */}
                <div style={{
                  position: 'absolute',
                  top: '1.5rem',
                  left: '1.5rem',
                  padding: '0.4rem 1rem',
                  backgroundColor: 'rgba(13, 13, 13, 0.6)',
                  backdropFilter: 'blur(4px)',
                  color: 'var(--text-primary)',
                  fontSize: '0.7rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  border: '1px solid rgba(245, 240, 235, 0.1)',
                  zIndex: 2
                }}>
                  {item.category}
                </div>

                {/* Hover title */}
                <div className="portfolio-overlay">
                  <span style={{ marginBottom: '0.5rem', fontSize: '1.4rem', fontFamily: 'var(--font-heading)', textTransform: 'none', textAlign: 'center', padding: '0 2rem' }}>
                    {item.title}
                  </span>
                  <div style={{ display: 'flex', gap: '1rem', opacity: 0.8 }}>
                    <span style={{ fontSize: '0.75rem' }}>{item.year}</span>
                    <span style={{ fontSize: '0.75rem' }}>•</span>
                    <span style={{ fontSize: '0.75rem' }}>{item.role}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* 4. Contact CTA */}
      <section style={{ backgroundColor: 'var(--bg-tertiary)', padding: '6rem 0', textAlign: 'center' }}>
        <h2 style={{ marginBottom: '2rem' }}>Love our work?</h2>
        <button onClick={() => navigate('/contact')} className="cta-gold cursor-hover">
          Let's collaborate
        </button>
      </section>

      {/* 5. Lightbox Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              inset: 0,
              backgroundColor: 'rgba(13, 13, 13, 0.98)',
              zIndex: 9999,
              display: 'flex',
              padding: '2rem',
              overflowY: 'auto'
            }}
          >
            <button 
              className="cursor-hover"
              onClick={() => setSelectedItem(null)}
              style={{
                position: 'fixed',
                top: '2rem',
                right: '2rem',
                background: 'none',
                border: 'none',
                color: 'var(--text-primary)',
                fontSize: '1rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                zIndex: 10000
              }}
            >
              Close ✕
            </button>

            <div style={{ margin: 'auto', width: '100%', maxWidth: '1400px', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              
              {/* Media Container */}
              <div style={{ width: '100%', height: '70vh', position: 'relative', backgroundColor: '#000' }}>
                {selectedItem.video ? (
                  <video 
                    controls 
                    autoPlay 
                    src={selectedItem.video} 
                    style={{ width: '100%', height: '100%', objectFit: 'contain' }} 
                  />
                ) : (
                  <img 
                    src={selectedItem.image} 
                    alt={selectedItem.title} 
                    style={{ width: '100%', height: '100%', objectFit: 'contain' }} 
                  />
                )}
              </div>

              {/* Details Container */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', padding: '2rem 0' }}>
                <div>
                  <h2 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>{selectedItem.title}</h2>
                  <div style={{ color: 'var(--accent)', fontSize: '0.85rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1rem' }}>
                    {selectedItem.category}
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div style={{ display: 'flex', borderBottom: '1px solid var(--border)', paddingBottom: '1rem' }}>
                    <span style={{ width: '120px', color: 'var(--text-muted)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Role</span>
                    <span style={{ color: 'var(--text-primary)' }}>{selectedItem.role}</span>
                  </div>
                  
                  {selectedItem.platform && (
                    <div style={{ display: 'flex', borderBottom: '1px solid var(--border)', paddingBottom: '1rem' }}>
                      <span style={{ width: '120px', color: 'var(--text-muted)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Platform</span>
                      <span style={{ color: 'var(--text-primary)' }}>{selectedItem.platform}</span>
                    </div>
                  )}

                  <div style={{ display: 'flex', borderBottom: '1px solid var(--border)', paddingBottom: '1rem' }}>
                    <span style={{ width: '120px', color: 'var(--text-muted)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Year</span>
                    <span style={{ color: 'var(--text-primary)' }}>{selectedItem.year}</span>
                  </div>
                </div>
              </div>
              
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </main>
  );
};

export default WorkPage;
