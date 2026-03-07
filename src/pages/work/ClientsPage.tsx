import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageTransition from '../../components/PageTransition';

const marqueeClients = [
  'ZARA', 'FENTY', 'REVOLVE', 'SHEIN', 'NETFLIX', 'HULU', 'SPOTIFY', 'AMAZON', 'APPLE', 'NIKE', 'GLOSSIER', 'BEAUTYCOUNTER'
];

const featuredClients = [
  { name: 'Vogue', category: 'Editorial', desc: 'Cover shoots and multi-platform visual storytelling.' },
  { name: 'Fenty Beauty', category: 'Beauty', desc: 'Product photography and influencer content pipelines.' },
  { name: 'Revolve', category: 'Fashion', desc: 'Lookbook production and social media strategy.' },
  { name: 'Spotify', category: 'Culture', desc: 'Artist promo campaigns and billboard placements.' },
  { name: 'Nike', category: 'Lifestyle', desc: 'Athleisure campaigns and athlete feature videos.' },
  { name: 'Glossier', category: 'Beauty', desc: 'UGC sourcing and aesthetic direction.' },
];

const ClientsPage = () => {
  return (
    <PageTransition>
      <div style={{ minHeight: '100vh', paddingTop: '10rem', paddingBottom: '6rem' }}>
        
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem', marginBottom: '6rem' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', textTransform: 'uppercase', marginBottom: '1rem', lineHeight: 1 }}>
              Clients
            </h1>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '600px' }}>
              Trusted by leading brands across fashion, beauty, and culture.
            </p>
          </motion.div>
        </div>

        {/* Marquee Row */}
        <div style={{ 
          borderTop: '1px solid var(--border)', 
          borderBottom: '1px solid var(--border)', 
          padding: '4rem 0',
          overflow: 'hidden',
          backgroundColor: '#050505',
          marginBottom: '6rem'
        }}>
          <motion.div
            animate={{ x: [0, -2000] }}
            transition={{ repeat: Infinity, duration: 30, ease: 'linear' }}
            style={{ display: 'flex', gap: '6rem', whiteSpace: 'nowrap' }}
          >
            {[...marqueeClients, ...marqueeClients].map((client, idx) => (
              <h3 key={idx} style={{ 
                fontSize: '2.5rem', 
                color: 'var(--text-muted)', 
                fontFamily: 'Inter, sans-serif',
                fontWeight: 300,
                letterSpacing: '0.1em'
              }}>
                {client}
              </h3>
            ))}
          </motion.div>
        </div>

        {/* Client Grid */}
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
            gap: '2rem'
          }}>
            {featuredClients.map((client, idx) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                style={{
                  backgroundColor: 'var(--bg-secondary)',
                  padding: '3rem 2rem',
                  borderBottom: '2px solid var(--accent)',
                  borderRadius: '4px'
                }}
              >
                <span style={{ color: 'var(--accent)', fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                  {client.category}
                </span>
                <h3 style={{ fontSize: '2rem', margin: '1rem 0', fontFamily: 'Inter, sans-serif', fontWeight: 400 }}>
                  {client.name}
                </h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>
                  {client.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <div style={{ marginTop: '8rem', textAlign: 'center' }}>
            <Link to="/connect/contact" style={{
              display: 'inline-block',
              padding: '1.2rem 3rem',
              border: '1px solid var(--text-primary)',
              borderRadius: '30px',
              fontSize: '1rem',
              letterSpacing: '0.05em',
              textTransform: 'uppercase'
            }}>
              Ready to be our next client?
            </Link>
          </div>
        </div>

      </div>
    </PageTransition>
  );
};

export default ClientsPage;
