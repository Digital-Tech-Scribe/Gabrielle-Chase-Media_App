import { motion } from 'framer-motion';
import PageTransition from '../../components/PageTransition';

const articles = [
  { pub: 'VOGUE BUSINESS', title: 'GCM Recognized as Top Content Agency 2024', date: 'Oct 12, 2025' },
  { pub: 'ADWEEK', title: 'How GCM is Redefining Brand Storytelling for Lux', date: 'Sep 04, 2025' },
  { pub: 'FORBES', title: 'Inside the Creative Mind of Gabrielle Chase', date: 'Aug 22, 2025' },
  { pub: 'WWD', title: 'The Agency Behind The Year\'s Biggest Beauty Campaigns', date: 'Jul 15, 2025' },
];

const PressPage = () => {
  return (
    <PageTransition>
      <div style={{ minHeight: '100vh', paddingTop: '10rem', paddingBottom: '6rem' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ marginBottom: '6rem' }}
          >
            <h1 style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', textTransform: 'uppercase', marginBottom: '1rem', lineHeight: 1 }}>
              Press
            </h1>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '600px' }}>
              Editorial features and industry commentary.
            </p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))', gap: '2rem' }}>
            {articles.map((article, idx) => (
              <motion.a
                key={idx}
                href="#"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                style={{
                  display: 'block',
                  backgroundColor: 'var(--bg-secondary)',
                  padding: '3rem',
                  borderRadius: '4px',
                  borderTop: '2px solid var(--accent)',
                  textDecoration: 'none'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem' }}>
                  <span style={{ color: 'var(--accent)', fontSize: '0.8rem', letterSpacing: '0.1em' }}>
                    {article.pub}
                  </span>
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>
                    {article.date}
                  </span>
                </div>
                <h3 style={{ fontSize: '1.8rem', fontWeight: 400, marginBottom: '3rem', lineHeight: 1.3 }}>
                  {article.title}
                </h3>
                <span style={{ fontSize: '0.9rem', color: '#fff', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  Read More →
                </span>
              </motion.a>
            ))}
          </div>

        </div>
      </div>
    </PageTransition>
  );
};

export default PressPage;
