import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import { galleryImages } from '../assets/data';

const aboutLinks = [
  { name: 'Biography', path: '/about/bio', desc: 'Read the story behind Gabrielle Chase Media.' },
  { name: 'Blog', path: '/about/blog', desc: 'Editorial insights and cultural commentary.' },
  { name: 'Research', path: '/about/research', desc: 'Data-backed reports on the state of media.' }
];

const AboutPage = () => {
  return (
    <PageTransition>
      <div style={{ backgroundColor: 'var(--bg-primary)', minHeight: '100vh', paddingTop: '10rem', paddingBottom: '0' }}>
        
        {/* Mission Statement (Hero) */}
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem', marginBottom: '8rem' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', textTransform: 'uppercase', marginBottom: '1rem', lineHeight: 1 }}>
              About
            </h1>
            <p style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', color: 'var(--accent)', maxWidth: '900px', fontWeight: 300, lineHeight: 1.4, marginTop: '2rem' }}>
              Where Art Meets Strategy. We are a Los Angeles-based content production and art direction studio dedicated to crafting premium visual experiences that move culture forward.
            </p>
          </motion.div>
        </div>

        {/* Feature Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          style={{ width: '100vw', height: '60vh', overflow: 'hidden' }}
        >
          <img src={galleryImages[1]} alt="Gabrielle Chase Media Studio" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(15%) contrast(1.1)' }} />
        </motion.div>

        {/* Navigation Cards */}
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '8rem 2rem' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '2rem'
          }}>
            {aboutLinks.map((link, idx) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Link to={link.path} style={{
                  display: 'flex',
                  flexDirection: 'column',
                  padding: '4rem 3rem',
                  backgroundColor: 'var(--bg-secondary)',
                  borderTop: '2px solid var(--border)',
                  color: 'inherit',
                  textDecoration: 'none',
                  height: '100%',
                  transition: 'border-color 0.3s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--accent)';
                  const title = e.currentTarget.querySelector('h2');
                  if (title) (title as HTMLElement).style.color = 'var(--accent)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border)';
                  const title = e.currentTarget.querySelector('h2');
                  if (title) (title as HTMLElement).style.color = '#fff';
                }}>
                  <span style={{ fontSize: '0.9rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
                    Explore
                  </span>
                  <h2 style={{ fontSize: '2.5rem', margin: '2rem 0', fontWeight: 400, transition: 'color 0.3s' }}>
                    {link.name}
                  </h2>
                  <p style={{ color: 'var(--text-muted)', lineHeight: 1.6, marginTop: 'auto' }}>
                    {link.desc}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </PageTransition>
  );
};

export default AboutPage;
