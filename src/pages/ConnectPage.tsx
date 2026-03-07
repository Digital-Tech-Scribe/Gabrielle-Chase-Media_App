import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';

const connectLinks = [
  { name: 'Contact Us', path: '/connect/contact', desc: 'Direct inquiries, RFPs, and consultation requests.' },
  { name: 'Leadership', path: '/connect/leadership', desc: 'Meet the team behind Gabrielle Chase Media.' },
  { name: 'Events', path: '/connect/events', desc: 'Upcoming masterclasses, summits, and panels.' }
];

const ConnectPage = () => {
  return (
    <PageTransition>
      <div style={{ backgroundColor: 'var(--bg-primary)', minHeight: '100vh', paddingTop: '10rem', paddingBottom: '6rem' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ marginBottom: '8rem' }}
          >
            <h1 style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', textTransform: 'uppercase', marginBottom: '1rem', lineHeight: 1 }}>
              Connect
            </h1>
            <p style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', color: 'var(--accent)', maxWidth: '900px', fontWeight: 300, lineHeight: 1.4, marginTop: '2rem' }}>
              Let's make something great together.
            </p>
          </motion.div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            marginBottom: '8rem'
          }}>
            {connectLinks.map((link, idx) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                style={{ height: '100%' }}
              >
                <Link to={link.path} style={{
                  display: 'flex',
                  flexDirection: 'column',
                  padding: '4rem 3rem',
                  backgroundColor: 'var(--bg-secondary)',
                  borderRadius: '4px',
                  color: 'inherit',
                  textDecoration: 'none',
                  height: '100%',
                  border: '1px solid transparent',
                  transition: 'all 0.3s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border)';
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  const title = e.currentTarget.querySelector('h2');
                  if (title) (title as HTMLElement).style.color = 'var(--accent)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'transparent';
                  e.currentTarget.style.transform = 'translateY(0)';
                  const title = e.currentTarget.querySelector('h2');
                  if (title) (title as HTMLElement).style.color = '#fff';
                }}>
                  <h2 style={{ fontSize: '2.5rem', margin: '0 0 1.5rem 0', fontWeight: 400, transition: 'color 0.3s' }}>
                    {link.name}
                  </h2>
                  <p style={{ color: 'var(--text-muted)', lineHeight: 1.6, marginTop: 'auto' }}>
                    {link.desc}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '4rem',
            borderTop: '1px solid var(--border)',
            paddingTop: '6rem'
          }}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 style={{ fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--accent)', marginBottom: '1.5rem' }}>
                Contact Info
              </h3>
              <a href="mailto:hello@gabriellechasemedia.com" style={{ display: 'block', fontSize: '1.5rem', marginBottom: '1rem', color: '#fff', textDecoration: 'none', transition: 'color 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent)'} onMouseLeave={(e) => e.currentTarget.style.color = '#fff'}>
                hello@gabriellechasemedia.com
              </a>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>
                Los Angeles, CA
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 style={{ fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--accent)', marginBottom: '1.5rem' }}>
                Social
              </h3>
              <a href="https://instagram.com/gabriellechasemedia" target="_blank" rel="noopener noreferrer" style={{ display: 'block', fontSize: '1.5rem', color: '#fff', textDecoration: 'none', transition: 'color 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent)'} onMouseLeave={(e) => e.currentTarget.style.color = '#fff'}>
                Instagram
              </a>
            </motion.div>
          </div>

        </div>
      </div>
    </PageTransition>
  );
};

export default ConnectPage;
