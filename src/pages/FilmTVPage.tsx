import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { filmTvProjects } from '../assets/data';
import '../index.css';

const FilmTVPage = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    const handleResize = () => setIsDesktop(window.innerWidth > 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-85%"]);

  // Desktop: horizontal scroll / Mobile: vertical card layout
  if (!isDesktop) {
    return (
      <main style={{ backgroundColor: 'var(--bg-primary)', paddingTop: '6rem', minHeight: '100vh' }}>
        
        {/* Mobile Intro */}
        <div style={{ padding: '2rem var(--container-padding) 3rem' }}>
          <h1 style={{ fontSize: 'clamp(2rem, 8vw, 4rem)', marginBottom: '1rem' }}>
            Film & <span className="text-gold">TV</span>
          </h1>
          <p style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-heading)', fontSize: '1rem', maxWidth: '400px' }}>
            Explore our cinematic footprint across global streaming platforms.
          </p>
        </div>

        {/* Mobile: Vertical Card List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', padding: '0 var(--container-padding) 4rem' }}>
          {filmTvProjects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="filmtv-card"
            >
              {/* Media */}
              <div style={{ position: 'relative', width: '100%', aspectRatio: '16/10', overflow: 'hidden' }}>
                {project.video ? (
                  <video
                    autoPlay muted loop playsInline
                    aria-label={`${project.title} on ${project.platform || 'streaming'}`}
                    className="cinematic-filter"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  >
                    <source src={project.video} type="video/mp4" />
                  </video>
                ) : (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="cinematic-filter"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                )}
                
                {/* Number badge */}
                <div style={{
                  position: 'absolute',
                  top: '0.75rem',
                  left: '0.75rem',
                  color: 'var(--bg-primary)',
                  backgroundColor: 'var(--accent)',
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1rem',
                  width: '2.25rem',
                  height: '2.25rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '50%',
                  zIndex: 2,
                  fontWeight: 600,
                }}>
                  {i + 1}
                </div>
              </div>

              {/* Details */}
              <div className="filmtv-card-details">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <h2 style={{ fontSize: '1.5rem', margin: 0, lineHeight: 1.1 }}>{project.title}</h2>
                  {project.platform && (
                    <span style={{
                      color: 'var(--text-muted)',
                      fontSize: '0.6rem',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      border: '1px solid var(--border)',
                      padding: '0.25rem 0.6rem',
                      borderRadius: '20px',
                      flexShrink: 0,
                      whiteSpace: 'nowrap',
                    }}>
                      {project.platform}
                    </span>
                  )}
                </div>

                <div style={{ color: 'var(--accent)', fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                  {project.role} {project.year && `(${project.year})`}
                </div>

                {project.award && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.75rem', color: 'var(--accent)' }}>
                    <span>🏆</span>
                    <span style={{ fontSize: '0.8rem', fontFamily: 'var(--font-heading)' }}>{project.award}</span>
                  </div>
                )}

                {project.note && (
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.5rem', lineHeight: 1.5 }}>
                    {project.note}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </main>
    );
  }

  // Desktop: Horizontal Scroll
  return (
    <main style={{ backgroundColor: 'var(--bg-primary)' }}>
      {/* Absolute intro */}
      <div style={{
        position: 'absolute',
        top: '8rem',
        left: '4rem',
        zIndex: 10,
        pointerEvents: 'none'
      }}>
        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', marginBottom: '1rem' }}>Film & <span className="text-gold">TV</span></h1>
        <p style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-heading)', fontSize: '1.2rem', maxWidth: '400px' }}>
          Scroll to explore our cinematic footprint across global streaming platforms.
        </p>
      </div>

      {/* Horizontal Scroll Section */}
      <section ref={targetRef} style={{ position: 'relative', height: '400vh' }}>
        <div style={{
          position: 'sticky',
          top: 0,
          display: 'flex',
          height: '100vh',
          alignItems: 'center',
          overflow: 'hidden',
          paddingLeft: '30vw'
        }}>
          <motion.div style={{ x, display: 'flex', gap: '4rem', padding: '0 4rem' }}>
            
            {filmTvProjects.map((project, i) => (
              <div 
                key={project.id}
                style={{
                  width: '600px',
                  height: '70vh',
                  minHeight: '500px',
                  position: 'relative',
                  flexShrink: 0,
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                {/* Media frame */}
                <div style={{
                  position: 'relative',
                  width: '100%',
                  flexGrow: 1,
                  backgroundColor: 'var(--bg-secondary)',
                  overflow: 'hidden'
                }}>
                  {project.video ? (
                    <video 
                      autoPlay 
                      muted 
                      loop 
                      playsInline
                      aria-label={`${project.title} on ${project.platform || 'streaming'}`}
                      className="cinematic-filter"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    >
                      <source src={project.video} type="video/mp4" />
                    </video>
                  ) : (
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="cinematic-filter"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  )}

                  {/* Number indicator */}
                  <div style={{
                    position: 'absolute',
                    top: '1.5rem',
                    left: '1.5rem',
                    color: 'var(--bg-primary)',
                    backgroundColor: 'var(--accent)',
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.5rem',
                    width: '3rem',
                    height: '3rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '50%',
                    zIndex: 2
                  }}>
                    {i + 1}
                  </div>
                </div>

                {/* Details below frame */}
                <div style={{ paddingTop: '2rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <h2 style={{ fontSize: '2.5rem', margin: 0, lineHeight: 1 }}>{project.title}</h2>
                    {project.platform && (
                      <span style={{ 
                        color: 'var(--text-muted)', 
                        fontSize: '0.75rem', 
                        letterSpacing: '0.1em', 
                        textTransform: 'uppercase',
                        border: '1px solid var(--border)',
                        padding: '0.3rem 0.8rem',
                        borderRadius: '20px'
                      }}>
                        {project.platform}
                      </span>
                    )}
                  </div>
                  
                  <div style={{ color: 'var(--accent)', fontSize: '0.9rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                    {project.role} {project.year && `(${project.year})`}
                  </div>

                  {project.award && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '1rem', color: 'var(--accent)' }}>
                      <span>🏆</span>
                      <span style={{ fontSize: '0.85rem', fontFamily: 'var(--font-heading)' }}>{project.award}</span>
                    </div>
                  )}

                  {project.note && (
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '0.5rem' }}>
                      {project.note}
                    </p>
                  )}
                </div>
              </div>
            ))}
            
            {/* Final spacer */}
            <div style={{ width: '10vw' }} />

          </motion.div>
        </div>
      </section>

    </main>
  );
};

export default FilmTVPage;
