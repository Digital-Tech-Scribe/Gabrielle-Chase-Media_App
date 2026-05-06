import { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import { portfolioItems } from '../assets/data';

type FilterCategory = 'All' | 'Film & TV' | 'Set Design';

const WorkPage = () => {
  const [filter, setFilter] = useState<FilterCategory>('All');
  const [selectedProject, setSelectedProject] = useState<typeof portfolioItems[0] | null>(null);
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    const handleResize = () => setIsDesktop(window.innerWidth > 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const filtered = filter === 'All' ? portfolioItems : portfolioItems.filter(p => p.category === filter);

  const closeModal = useCallback(() => setSelectedProject(null), []);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [selectedProject]);

  return (
    <PageTransition>
      <main style={{ backgroundColor: 'var(--bg-primary)', paddingTop: isDesktop ? '10rem' : '7rem', minHeight: '100vh' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: `0 var(--container-padding) ${isDesktop ? '6rem' : '3rem'}` }}>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ marginBottom: isDesktop ? '4rem' : '2.5rem' }}
          >
            <h1 style={{ fontSize: 'clamp(2.5rem, 7vw, 7rem)', textTransform: 'uppercase', marginBottom: '1rem' }}>
              Our <span className="text-gold">Work</span>
            </h1>
            <p style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-heading)', fontSize: isDesktop ? '1.2rem' : '1rem', maxWidth: '500px' }}>
              A curated selection of projects spanning film, TV, music videos, and experiential set design.
            </p>
          </motion.div>

          {/* Filters */}
          <div style={{ 
            display: 'flex', 
            gap: isDesktop ? '1.5rem' : '0.75rem', 
            marginBottom: isDesktop ? '4rem' : '2.5rem', 
            flexWrap: 'wrap' 
          }}>
            {(['All', 'Film & TV', 'Set Design'] as FilterCategory[]).map((cat) => (
              <button 
                key={cat}
                onClick={() => setFilter(cat)}
                style={{
                  padding: isDesktop ? '0.7rem 2rem' : '0.6rem 1.2rem',
                  borderRadius: '30px',
                  border: filter === cat ? '1px solid var(--accent)' : '1px solid var(--border)',
                  backgroundColor: filter === cat ? 'var(--accent)' : 'transparent',
                  color: filter === cat ? 'var(--bg-primary)' : 'var(--text-primary)',
                  fontFamily: '"DM Sans", sans-serif',
                  fontSize: isDesktop ? '0.9rem' : '0.8rem',
                  fontWeight: 500,
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  minHeight: '44px',
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Masonry Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: isDesktop ? 'repeat(auto-fit, minmax(280px, 1fr))' : 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: isDesktop ? '2rem' : '1rem'
          }}>
            <AnimatePresence mode="popLayout">
              {filtered.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  onClick={() => setSelectedProject(item)}
                  whileHover={isDesktop ? "hover" : undefined}
                  style={{
                    position: 'relative',
                    height: item.aspect === 'portrait' 
                      ? (isDesktop ? '600px' : '400px') 
                      : (isDesktop ? '400px' : '280px'),
                    cursor: 'pointer',
                    overflow: 'hidden',
                    borderRadius: '8px'
                  }}
                >
                  {item.video ? (
                    <motion.video
                      src={item.video}
                      autoPlay muted loop playsInline
                      variants={{ hover: { scale: 1.05 } }}
                      transition={{ duration: 0.6 }}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.8)' }}
                    />
                  ) : (
                    <motion.img
                      src={item.image}
                      alt={item.title}
                      variants={{ hover: { scale: 1.05 } }}
                      transition={{ duration: 0.6 }}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.8)' }}
                    />
                  )}

                  {/* Desktop: gold overlay / Mobile: bottom gradient */}
                  {isDesktop ? (
                    <motion.div
                      className="portfolio-overlay"
                      variants={{ hover: { opacity: 1 } }}
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
                        padding: '2rem',
                        textAlign: 'center'
                      }}
                    >
                      <span style={{ color: '#0D0D0D', fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1rem', fontWeight: 600 }}>
                        {item.category}
                      </span>
                      <h3 style={{ color: '#0D0D0D', fontSize: '1.8rem', fontFamily: '"Cormorant Garamond", serif', marginBottom: '1rem' }}>
                        {item.title}
                      </h3>
                      <span style={{ color: '#0D0D0D', fontSize: '0.85rem', letterSpacing: '0.05em', textTransform: 'uppercase', fontWeight: 700, borderBottom: '2px solid #0D0D0D', paddingBottom: '0.3rem' }}>
                        View Details →
                      </span>
                    </motion.div>
                  ) : (
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 35%, transparent 60%)',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'flex-end',
                      padding: '1rem',
                    }}>
                      <span style={{ color: 'var(--accent)', fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '0.3rem' }}>
                        {item.category}
                      </span>
                      <h3 style={{ color: '#fff', fontSize: '1rem', fontFamily: '"Cormorant Garamond", serif', margin: 0 }}>
                        {item.title}
                      </h3>
                    </div>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="lightbox-overlay"
              style={{
                justifyContent: 'center',
                padding: isDesktop ? '4rem' : '1rem',
                overflowY: 'auto'
              }}
            >
              <motion.div
                initial={{ scale: 0.9, y: 30 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 30 }}
                transition={{ duration: 0.4 }}
                onClick={(e) => e.stopPropagation()}
                style={{
                  maxWidth: '1200px',
                  width: '100%',
                  backgroundColor: 'var(--bg-secondary)',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  maxHeight: isDesktop ? '90vh' : '95vh',
                  overflowY: 'auto',
                }}
              >
                {/* Media */}
                <div style={{ width: '100%', height: isDesktop ? '70vh' : '40vh', position: 'relative', backgroundColor: '#000' }}>
                  {selectedProject.video ? (
                    <video 
                      src={selectedProject.video}
                      controls 
                      autoPlay 
                      playsInline
                      muted
                      style={{ width: '100%', height: '100%', objectFit: 'contain' }} 
                    />
                  ) : (
                    <img 
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                    />
                  )}

                  {/* Close button */}
                  <button
                    onClick={closeModal}
                    aria-label="Close"
                    className="lightbox-close"
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* Details */}
                <div style={{ padding: isDesktop ? '3rem' : '1.5rem' }}>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: isDesktop ? '1fr 1fr' : '1fr',
                    gap: isDesktop ? '3rem' : '1.5rem',
                    alignItems: 'start'
                  }}>
                    <div>
                      <span style={{ color: 'var(--accent)', fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600 }}>
                        {selectedProject.category}
                      </span>
                      <h2 style={{ fontSize: isDesktop ? '2.5rem' : '1.8rem', fontFamily: '"Cormorant Garamond", serif', marginTop: '0.5rem', marginBottom: '1rem', lineHeight: 1.1 }}>
                        {selectedProject.title}
                      </h2>
                      {selectedProject.description && (
                        <p style={{ color: 'var(--text-muted)', lineHeight: 1.6, fontSize: '1.05rem' }}>{selectedProject.description}</p>
                      )}
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                      {selectedProject.role && (
                        <div>
                          <span style={{ color: 'var(--text-subtle)', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: '0.3rem' }}>Role</span>
                          <span style={{ fontSize: '1.1rem' }}>{selectedProject.role}</span>
                        </div>
                      )}
                      {selectedProject.year && (
                        <div>
                          <span style={{ color: 'var(--text-subtle)', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: '0.3rem' }}>Year</span>
                          <span style={{ fontSize: '1.1rem' }}>{selectedProject.year}</span>
                        </div>
                      )}
                      {selectedProject.platform && (
                        <div>
                          <span style={{ color: 'var(--text-subtle)', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: '0.3rem' }}>Platform</span>
                          <span style={{ fontSize: '1.1rem' }}>{selectedProject.platform}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </PageTransition>
  );
};

export default WorkPage;
