import { motion } from 'framer-motion';
import PageTransition from '../../components/PageTransition';

const awards = [
  { id: '01', name: 'Webby Awards', cat: 'Best Art Direction' },
  { id: '02', name: 'Shorty Awards', cat: 'Fashion Campaign of the Year' },
  { id: '03', name: 'Clio Awards', cat: 'Social Media Strategy' },
  { id: '04', name: 'One Show', cat: 'Visual Storytelling' },
  { id: '05', name: 'AICP', cat: 'NextGen Production' }
];

const quotes = [
  { quote: "Gabrielle Chase Media redefined our entire visual identity. Their eye for detail is unmatched.", author: "- CMO, Revolve" },
  { quote: "A masterclass in modern editorial production. They just get culture.", author: "- Editor in Chief, Fashion Mag" }
];

const RecognitionPage = () => {
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
              Recognition
            </h1>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '600px' }}>
              Our work has been recognized by leading industry bodies.
            </p>
          </motion.div>

          <div style={{ display: 'flex', flexDirection: 'column', borderTop: '1px solid var(--border)' }}>
            {awards.map((award, idx) => (
              <motion.div
                key={award.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  gap: '2rem',
                  padding: '3rem 0',
                  borderBottom: '1px solid var(--border)'
                }}
              >
                <span style={{ fontSize: '1.5rem', color: 'var(--accent)', fontFamily: 'Inter, sans-serif' }}>
                  #{award.id}
                </span>
                <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', margin: 0, fontWeight: 400 }}>
                  {award.name}
                </h2>
                <span style={{ marginLeft: 'auto', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '0.9rem' }}>
                  {award.cat}
                </span>
              </motion.div>
            ))}
          </div>

          <div style={{ marginTop: '10rem', display: 'flex', flexDirection: 'column', gap: '6rem' }}>
            {quotes.map((q, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}
              >
                <h3 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', fontStyle: 'italic', fontWeight: 300, lineHeight: 1.4, margin: '0 0 2rem' }}>
                  "{q.quote}"
                </h3>
                <p style={{ color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  {q.author}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </PageTransition>
  );
};

export default RecognitionPage;
