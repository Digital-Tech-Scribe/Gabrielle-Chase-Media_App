import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import ArtDirScroll from '../components/ArtDirScroll';
import { services, portfolioItems, abisolaAwardPortrait } from '../assets/data';

const HomePage = () => {
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth > 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <PageTransition>
      <div style={{ backgroundColor: '#0D0D0D' }}>
        
        {/* 1. ART DIRECTION SCROLL SEQUENCE (Hero + 3D Grid) */}
        <ArtDirScroll />

        {/* Normal scrolling content below */}
        <div className="section-darker">
          
          <section id="works" className="section-dark pos-relative" style={{ 
            padding: 'var(--section-padding) var(--container-padding)', 
            marginTop: '0',
            zIndex: 20
          }}>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{ 
                fontFamily: '"Cormorant Garamond", serif', 
                fontSize: 'clamp(2.5rem, 5vw, 4rem)', 
                color: '#fff', 
                textAlign: 'center', 
                marginBottom: isDesktop ? '4rem' : '2.5rem'
              }}
            >
              Selected Works
            </motion.h2>

            <div style={{
              display: 'grid',
              gridTemplateColumns: isDesktop ? 'repeat(auto-fit, minmax(280px, 1fr))' : 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: isDesktop ? '2rem' : '1rem',
              maxWidth: '1400px',
              margin: '0 auto'
            }}>
              {portfolioItems.slice(0, 6).map((item, idx) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  whileHover={isDesktop ? "hover" : undefined}
                  style={{
                    position: 'relative',
                    aspectRatio: item.aspect === 'landscape' ? '4/3' : '3/4',
                    overflow: 'hidden',
                    borderRadius: '8px',
                    cursor: 'pointer'
                  }}
                >
                  {item.video ? (
                    <motion.video
                      src={item.video}
                      autoPlay
                      muted
                      loop
                      playsInline
                      variants={{
                        hover: { scale: 1.05 }
                      }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        filter: 'contrast(1.1) brightness(0.8)'
                      }}
                    />
                  ) : (
                    <motion.img 
                      src={item.image} 
                      alt={item.title}
                      variants={{
                        hover: { scale: 1.05 }
                      }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        filter: 'contrast(1.1) brightness(0.8)'
                      }}
                    />
                  )}

                  {/* Desktop: gold overlay on hover / Mobile: always-visible bottom gradient */}
                  {isDesktop ? (
                    <motion.div
                      variants={{
                        hover: { opacity: 1 }
                      }}
                      initial={{ opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'rgba(201,168,76,0.9)',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: '2rem'
                      }}
                    >
                      <span style={{ color: '#0D0D0D', fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1rem', fontWeight: 600 }}>
                        {item.category}
                      </span>
                      <h4 style={{ fontSize: '1.8rem', color: '#0D0D0D', fontFamily: '"Cormorant Garamond", serif', textAlign: 'center', marginBottom: '2rem' }}>{item.title}</h4>
                      <span style={{ color: '#0D0D0D', fontSize: '0.9rem', fontWeight: 600, borderBottom: '1px solid #0D0D0D', paddingBottom: '0.2rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        View Project →
                      </span>
                    </motion.div>
                  ) : (
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 40%, transparent 65%)',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'flex-end',
                      padding: '1rem',
                    }}>
                      <span style={{ color: 'var(--accent)', fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '0.3rem' }}>
                        {item.category}
                      </span>
                      <h4 style={{ fontSize: '1rem', color: '#fff', fontFamily: '"Cormorant Garamond", serif', margin: 0 }}>{item.title}</h4>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            <div style={{ textAlign: 'center', marginTop: isDesktop ? '5rem' : '3rem' }}>
              <Link to="/work" style={{
                display: 'inline-block',
                border: '1px solid var(--accent)',
                padding: isDesktop ? '1rem 3rem' : '0.85rem 2rem',
                borderRadius: '30px',
                color: '#fff',
                fontFamily: '"DM Sans", sans-serif',
                fontSize: '0.95rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                if (isDesktop) {
                  e.currentTarget.style.backgroundColor = 'var(--accent)';
                  e.currentTarget.style.color = '#0D0D0D';
                }
              }}
              onMouseLeave={(e) => {
                if (isDesktop) {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = '#fff';
                }
              }}
              >
                See All Work
              </Link>
            </div>
          </section>

          {/* 3. SERVICES STRIP */}
          <section style={{ padding: 'var(--section-padding) var(--container-padding)', backgroundColor: '#050505', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
            <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'grid', gridTemplateColumns: isDesktop ? 'repeat(auto-fit, minmax(280px, 1fr))' : '1fr', gap: isDesktop ? '2rem' : '1.25rem' }}>
              {services.slice(0, 4).map((service, idx) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  whileHover={isDesktop ? "hover" : undefined}
                  style={{
                    backgroundColor: '#111',
                    padding: isDesktop ? '2.5rem' : '1.5rem',
                    borderRadius: '8px',
                    border: '1px solid rgba(201,168,76,0.05)',
                    cursor: 'pointer',
                    transition: 'border-color 0.3s ease'
                  }}
                >
                  <div style={{ fontSize: isDesktop ? '2.5rem' : '2rem', marginBottom: '1.5rem' }}>{service.icon}</div>
                  <h3 style={{ fontFamily: '"Cormorant Garamond", serif', color: '#fff', fontSize: isDesktop ? '1.5rem' : '1.3rem', marginBottom: '1rem' }}>{service.name}</h3>
                  <p style={{ fontFamily: '"DM Sans", sans-serif', color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>{service.shortDesc}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* 4. AWARDS & RECOGNITION BAR */}
          <section style={{ backgroundColor: '#050505', padding: 'calc(var(--section-padding)/2) var(--container-padding)', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
            <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: isDesktop ? '3rem' : '1.25rem 1.5rem', alignItems: 'center' }}>
              {["AMVCA10 Winner", "AMVCA11 Nominated", "Netflix", "HBO", "Amazon Prime", "Showmax", "Toronto International Film Festival", "Deutsche Welle TV"].map((label, idx) => (
                <span key={idx} style={{ fontFamily: '"DM Sans", sans-serif', color: 'var(--text-muted)', fontSize: isDesktop ? '0.9rem' : '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 500 }}>
                  {label}
                </span>
              ))}
            </div>
          </section>

          {/* 5. ABOUT TEASER SECTION */}
          <section style={{ padding: 'var(--section-padding) var(--container-padding)', backgroundColor: '#0D0D0D' }}>
            <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: isDesktop ? 'clamp(3rem, 6vw, 6rem)' : '2rem', alignItems: 'center' }}>
              
              {/* Left: Abisola Photo */}
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8 }}
                style={{ flex: '1 1 500px', position: 'relative', minWidth: 0 }}
              >
                <img src={abisolaAwardPortrait} alt="Abisola Omolade" style={{ width: '100%', height: 'auto', borderRadius: '8px', filter: 'contrast(1.1) brightness(0.9)' }} />
                {/* Decorative border — desktop only */}
                {isDesktop && (
                  <div style={{ position: 'absolute', bottom: '-1.5rem', right: '-1.5rem', width: '60%', height: '60%', border: '1px solid var(--accent)', borderRadius: '8px', zIndex: -1 }} />
                )}
              </motion.div>

              {/* Right: Story */}
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, delay: 0.2 }}
                style={{ flex: '1 1 500px', minWidth: 0 }}
              >
                <h3 style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: '#fff', marginBottom: '2rem', lineHeight: 1.1 }}>
                  Gabrielle Chase Media is a creative powerhouse redefining storytelling through art direction, cinematic production, and immersive design.
                </h3>
                <p style={{ fontFamily: '"DM Sans", sans-serif', color: 'var(--accent)', fontSize: isDesktop ? '1.1rem' : '1rem', lineHeight: 1.6, marginBottom: isDesktop ? '3rem' : '2rem' }}>
                  Founded by Abisola Abolaji Omolade — AMVCA Award-Winning Art Director and Executive Producer.
                </p>
                <Link to="/about" style={{
                  display: 'inline-block',
                  borderBottom: '1px solid var(--accent)',
                  paddingBottom: '0.5rem',
                  color: '#fff',
                  fontFamily: '"DM Sans", sans-serif',
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => { if (isDesktop) e.currentTarget.style.color = 'var(--accent)'; }}
                onMouseLeave={(e) => { if (isDesktop) e.currentTarget.style.color = '#fff'; }}
                >
                  Meet The Team
                </Link>
              </motion.div>

            </div>
          </section>

        </div>
      </div>
    </PageTransition>
  );
};

export default HomePage;
