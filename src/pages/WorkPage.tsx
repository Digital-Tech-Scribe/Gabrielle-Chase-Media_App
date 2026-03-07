import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import { galleryImages } from '../assets/data';

const categories = [
  { name: 'Campaigns', path: '/work/campaigns', image: galleryImages[0], colSpan: 2 },
  { name: 'Clients', path: '/work/clients', image: galleryImages[1], colSpan: 1 },
  { name: 'Recognition', path: '/work/recognition', image: galleryImages[2], colSpan: 1 },
  { name: 'Press', path: '/work/press', image: galleryImages[3], colSpan: 1 },
  { name: 'Case Studies', path: '/work/case-studies', image: galleryImages[4], colSpan: 1 },
];

const WorkPage = () => {
  return (
    <PageTransition>
      <div style={{ backgroundColor: 'var(--bg-primary)', minHeight: '100vh', paddingTop: '10rem', paddingBottom: '6rem' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ marginBottom: '4rem' }}
          >
            <h1 style={{ 
              fontSize: 'clamp(4rem, 10vw, 8rem)', 
              fontWeight: 400, 
              lineHeight: 1, 
              textTransform: 'uppercase',
              letterSpacing: '-0.02em',
              margin: 0
            }}>
              Work
            </h1>
            <div style={{ 
              height: '1px', 
              width: '100%', 
              backgroundColor: 'var(--border)', 
              marginTop: '2rem' 
            }} />
          </motion.div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            {categories.map((cat, idx) => (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + idx * 0.1 }}
                style={{
                  gridColumn: `span ${cat.colSpan > 1 ? 'min(2, auto)' : 1}`,
                  position: 'relative',
                  aspectRatio: cat.colSpan > 1 ? '16/9' : '3/4',
                  overflow: 'hidden',
                  borderRadius: '4px',
                  backgroundColor: '#111'
                }}
              >
                <Link to={cat.path} style={{ display: 'block', width: '100%', height: '100%' }}>
                  <motion.img 
                    src={cat.image} 
                    alt={cat.name}
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      filter: 'grayscale(30%) contrast(1.1)'
                    }}
                  />
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.2))',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center'
                    }}
                  >
                    <h2 style={{
                      fontSize: 'clamp(2rem, 5vw, 4rem)',
                      color: '#fff',
                      margin: 0,
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em'
                    }}>
                      {cat.name}
                    </h2>
                    <span style={{
                      marginTop: '1rem',
                      fontSize: '0.9rem',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: 'var(--accent)',
                      borderBottom: '1px solid var(--accent)',
                      paddingBottom: '0.2rem'
                    }}>
                      View Category
                    </span>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </PageTransition>
  );
};

export default WorkPage;
