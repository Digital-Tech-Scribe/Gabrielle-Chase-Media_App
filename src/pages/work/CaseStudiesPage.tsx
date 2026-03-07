import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageTransition from '../../components/PageTransition';
import { galleryImages } from '../../assets/data';

const caseStudies = [
  {
    id: 1,
    client: 'Global Fashion Brand',
    category: 'Integrated Campaign',
    image: galleryImages[0],
    brief: 'A complete overhaul of the brand\'s digital presence, focusing on Gen-Z engagement through TikTok and Instagram Reels.',
    stats: [
      { label: 'Reach', value: '+350%' },
      { label: 'Engagement', value: '4.2x' },
      { label: 'Conversion', value: '+28%' }
    ]
  },
  {
    id: 2,
    client: 'Luxury Beauty Launch',
    category: 'Content Production',
    image: galleryImages[1],
    brief: 'End-to-end production for a new skincare line, including hero photography, video assets, and social roll-out strategy.',
    stats: [
      { label: 'Assets', value: '120+' },
      { label: 'Views', value: '2.5M' },
      { label: 'Sell-Out', value: '3 Days' }
    ]
  },
  {
    id: 3,
    client: 'Emerging Designer',
    category: 'Brand Identity',
    image: galleryImages[3],
    brief: 'Defining the visual language for a new streetwear brand debuting at LA Fashion Week.',
    stats: [
      { label: 'Press Features', value: '15+' },
      { label: 'Follower Growth', value: '+15k' },
      { label: 'Pre-Orders', value: 'Sold Out' }
    ]
  }
];

const CaseStudiesPage = () => {
  return (
    <PageTransition>
      <div style={{ minHeight: '100vh', paddingTop: '10rem', paddingBottom: '6rem' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ marginBottom: '8rem' }}
          >
            <h1 style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', textTransform: 'uppercase', marginBottom: '1rem', lineHeight: 1 }}>
              Case Studies
            </h1>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '600px' }}>
              Deep dives into our most impactful partnerships.
            </p>
          </motion.div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8rem' }}>
            {caseStudies.map((study, idx) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8 }}
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                  gap: '4rem',
                  alignItems: 'center'
                }}
              >
                {/* Left side: Image */}
                <div style={{ 
                  position: 'relative', 
                  aspectRatio: '4/5', 
                  borderRadius: '4px', 
                  overflow: 'hidden',
                  order: idx % 2 === 1 ? 2 : 1 
                }}>
                  <img 
                    src={study.image} 
                    alt={study.client} 
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      filter: 'grayscale(20%)'
                    }}
                  />
                </div>

                {/* Right side: Content */}
                <div style={{ order: idx % 2 === 1 ? 1 : 2 }}>
                  <span style={{ color: 'var(--accent)', fontSize: '0.9rem', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: '1rem' }}>
                    {study.category}
                  </span>
                  <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '2rem', lineHeight: 1.1 }}>
                    {study.client}
                  </h2>
                  <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '3rem' }}>
                    {study.brief}
                  </p>
                  
                  <div style={{ display: 'flex', gap: '3rem', marginBottom: '4rem', paddingBottom: '3rem', borderBottom: '1px solid var(--border)' }}>
                    {study.stats.map(stat => (
                      <div key={stat.label}>
                        <div style={{ fontSize: '2rem', fontFamily: 'Inter, sans-serif', fontWeight: 300, color: 'var(--text-primary)' }}>
                          {stat.value}
                        </div>
                        <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <Link to="#" style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: '#fff',
                    textTransform: 'uppercase',
                    fontSize: '0.9rem',
                    letterSpacing: '0.1em',
                    borderBottom: '1px solid var(--accent)',
                    paddingBottom: '0.2rem'
                  }}>
                    View Full Study →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </PageTransition>
  );
};

export default CaseStudiesPage;
