import { motion } from 'framer-motion';
import PageTransition from '../../components/PageTransition';
import { galleryImages } from '../../assets/data';

const BioPage = () => {
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
            <h1 style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', textTransform: 'uppercase', marginBottom: '1rem', lineHeight: 1 }}>
              <span style={{ fontFamily: 'Playfair Display', fontStyle: 'italic', fontWeight: 400 }}>Gabrielle Chase</span>
            </h1>
            <p style={{ fontSize: '1.2rem', color: 'var(--accent)', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
              Founder & Creative Director
            </p>
          </motion.div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
            gap: '6rem',
            alignItems: 'start'
          }}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{ position: 'sticky', top: '150px' }}
            >
              <div style={{ aspectRatio: '3/4', overflow: 'hidden', borderRadius: '4px' }}>
                <img src={galleryImages[0]} alt="Gabrielle Chase" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              style={{ paddingTop: '2rem' }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', fontSize: '1.2rem', lineHeight: 1.8, color: 'var(--text-muted)' }}>
                <p>
                  <strong style={{ color: '#fff', fontSize: '1.5rem', fontWeight: 400, fontFamily: 'Playfair Display' }}>
                    Gabrielle Chase is a Los Angeles-based creative director
                  </strong> and producer with over a decade of experience crafting premium visual content for leading fashion, beauty, and lifestyle brands.
                </p>
                <p>
                  Her studio, Gabrielle Chase Media, operates at the intersection of art and commerce — producing campaigns that don't just look good, but drive measurable results. Her philosophy is rooted in the belief that true luxury is defined by intentionality; every frame, every lighting choice, and every piece of copy must serve the broader brand narrative.
                </p>
                <p>
                  With a roster that spans Fortune 500 brands, emerging designers, and cultural icons, GCM is the trusted partner for brands ready to elevate their visual identity. Under her leadership, the agency has grown from a boutique photography studio into a full-service creative powerhouse, producing award-winning work that dominates digital and physical landscapes alike.
                </p>
              </div>

              <div style={{ marginTop: '4rem', paddingBottom: '2rem', borderBottom: '1px solid var(--border)' }}>
                <h3 style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-primary)', marginBottom: '1rem' }}>
                  Connect Directly
                </h3>
                <div style={{ display: 'flex', gap: '2rem' }}>
                  <a href="#" style={{ color: 'var(--accent)', textDecoration: 'none', transition: 'color 0.3s' }}>Email</a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)', textDecoration: 'none', transition: 'color 0.3s' }}>LinkedIn</a>
                  <a href="https://instagram.com/gabriellechasemedia" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)', textDecoration: 'none', transition: 'color 0.3s' }}>Instagram</a>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </PageTransition>
  );
};

export default BioPage;
