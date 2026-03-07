import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageTransition from '../../components/PageTransition';
import { galleryImages } from '../../assets/data';

const filters = ['All', 'Fashion', 'Beauty', 'Lifestyle', 'Culture'];

const CampaignsPage = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  // Duplicate images for gallery density
  const campaigns = [...galleryImages, ...galleryImages].map((img, i) => ({
    id: i,
    image: img,
    category: filters[(i % 4) + 1],
    year: 2024 - (i % 3)
  }));

  return (
    <PageTransition>
      <div style={{ minHeight: '100vh', paddingTop: '10rem', paddingBottom: '6rem' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', textTransform: 'uppercase', marginBottom: '1rem', lineHeight: 1 }}>
              Campaigns
            </h1>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '600px', marginBottom: '4rem' }}>
              Award-winning campaigns crafted for leading brands in fashion, beauty, and culture.
            </p>
          </motion.div>

          {/* Filters */}
          <div style={{ display: 'flex', gap: '2rem', marginBottom: '4rem', overflowX: 'auto', paddingBottom: '1rem' }}>
            {filters.map(filter => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: activeFilter === filter ? 'var(--accent)' : 'var(--text-muted)',
                  fontSize: '1rem',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  borderBottom: activeFilter === filter ? '1px solid var(--accent)' : '1px solid transparent',
                  paddingBottom: '0.5rem',
                  transition: 'all 0.3s'
                }}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Masonry Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '1rem'
          }}>
            <AnimatePresence>
              {campaigns
                .filter(c => activeFilter === 'All' || c.category === activeFilter)
                .map((campaign, idx) => (
                <motion.div
                  key={`${campaign.id}-${activeFilter}`}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: (idx % 8) * 0.05 }}
                  whileHover="hover"
                  style={{
                    position: 'relative',
                    aspectRatio: campaign.id % 3 === 0 ? '4/5' : '1/1',
                    overflow: 'hidden',
                    backgroundColor: '#111',
                    borderRadius: '4px',
                    cursor: 'pointer'
                  }}
                >
                  <img 
                    src={campaign.image} 
                    alt={`Campaign ${campaign.id}`}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  
                  <motion.div
                    variants={{
                      hover: { opacity: 1, backdropFilter: 'blur(8px)' }
                    }}
                    initial={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      position: 'absolute',
                      inset: 0,
                      backgroundColor: 'rgba(10,10,10,0.6)',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                      color: '#fff'
                    }}
                  >
                    <span style={{ color: 'var(--accent)', fontSize: '0.9rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                      {campaign.category}
                    </span>
                    <span style={{ fontSize: '1.2rem', letterSpacing: '0.1em' }}>
                      {campaign.year}
                    </span>
                  </motion.div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </PageTransition>
  );
};

export default CampaignsPage;
