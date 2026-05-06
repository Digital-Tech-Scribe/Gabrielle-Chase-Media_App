import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import ScrollFadeIn from '../components/ScrollFadeIn';
import { services, sceneVideos } from '../assets/data';

const ServicesPage = () => {
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    const handleResize = () => setIsDesktop(window.innerWidth > 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <PageTransition>
      <main className="section-dark">

        {/* Hero */}
        <section className="pos-relative">
          <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
            <ScrollFadeIn>
              <h1 style={{ fontSize: 'clamp(2.5rem, 7vw, 7rem)', textTransform: 'uppercase', marginBottom: '1rem', lineHeight: 0.95 }}>
                Our <span className="text-gold">Services</span>
              </h1>
              <p style={{ 
                maxWidth: '600px', 
                color: 'var(--text-muted)', 
                fontSize: isDesktop ? '1.2rem' : '1rem',
                fontFamily: 'var(--font-heading)',
                letterSpacing: '0.02em',
                lineHeight: 1.6
              }}>
                From concept to completion — we offer end-to-end creative solutions spanning art direction, production design, and content creation.
              </p>
            </ScrollFadeIn>
          </div>
        </section>

        {/* Service Sections */}
        {services.map((service, idx) => {
          const isEven = idx % 2 === 0;
          const relatedVideo = Object.values(sceneVideos)[idx]?.src || service.video;
          
          return (
            <section key={service.id} style={{ 
              padding: 'var(--section-padding) var(--container-padding)', 
              borderTop: '1px solid var(--border)' 
            }}>
              <div style={{
                maxWidth: '1400px',
                margin: '0 auto',
                display: 'grid',
                gridTemplateColumns: isDesktop ? 'repeat(2, 1fr)' : '1fr',
                gap: isDesktop ? 'clamp(3rem, 8vw, 6rem)' : '2rem',
                alignItems: 'center'
              }}>
                {/* Image / Video Column */}
                <ScrollFadeIn delay={0.1}>
                  <motion.div
                    style={{
                      position: 'relative',
                      aspectRatio: '4/5',
                      overflow: 'hidden',
                      borderRadius: '4px',
                      order: isDesktop ? (isEven ? 1 : 2) : 1
                    }}
                    whileHover={isDesktop ? { scale: 1.01 } : {}}
                    transition={{ duration: 0.4 }}
                  >
                    {relatedVideo ? (
                      <video 
                        src={relatedVideo}
                        autoPlay 
                        muted 
                        loop 
                        playsInline
                        aria-label={`${service.name} showcase video`}
                        className="cinematic-filter"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    ) : (
                      <img 
                        src={service.image} 
                        alt={service.name}
                        className="cinematic-filter"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    )}
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, var(--bg-primary) 0%, transparent 30%)', pointerEvents: 'none' }} />
                  </motion.div>
                </ScrollFadeIn>

                {/* Content Column */}
                <div style={{ order: isDesktop ? (isEven ? 2 : 1) : 2 }}>
                  <ScrollFadeIn delay={0.2}>
                    <div style={{ fontSize: isDesktop ? '3rem' : '2rem', marginBottom: '1.5rem' }}>{service.icon}</div>
                    <h2 style={{ fontSize: isDesktop ? 'clamp(2rem, 4vw, 3.5rem)' : 'clamp(1.8rem, 5vw, 2.5rem)', marginBottom: '1.5rem', lineHeight: 1.1 }}>
                      {service.name}
                    </h2>
                    <p style={{ 
                      fontSize: isDesktop ? '1.15rem' : '1rem', 
                      color: 'var(--text-muted)', 
                      lineHeight: 1.7, 
                      marginBottom: '2.5rem' 
                    }}>
                      {service.description}
                    </p>
                    
                    <h4 style={{ 
                      color: 'var(--accent)', 
                      fontSize: '0.8rem', 
                      letterSpacing: '0.2em', 
                      textTransform: 'uppercase', 
                      marginBottom: '1.5rem' 
                    }}>
                      Deliverables
                    </h4>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                      {service.deliverables.map((item, i) => (
                        <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.05rem', color: '#fff' }}>
                          <div style={{ width: '6px', height: '6px', backgroundColor: 'var(--accent)', borderRadius: '50%', flexShrink: 0 }} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </ScrollFadeIn>
                </div>
              </div>
            </section>
          );
        })}

        {/* CTA */}
        <section className="section" style={{ textAlign: 'center', borderTop: '1px solid var(--border)', paddingBottom: isDesktop ? '8rem' : '4rem' }}>
          <div className="container">
            <ScrollFadeIn>
              <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', marginBottom: '2rem' }}>Interested in working with us?</h2>
              <Link to="/contact" className="cta-gold cursor-hover">
                Get In Touch
              </Link>
            </ScrollFadeIn>
          </div>
        </section>

      </main>
    </PageTransition>
  );
};

export default ServicesPage;
