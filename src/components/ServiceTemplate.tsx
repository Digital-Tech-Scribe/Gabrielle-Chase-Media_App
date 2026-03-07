import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageTransition from './PageTransition';

interface ServiceTemplateProps {
  title: string;
  tagline: string;
  image: string;
  description: string;
  deliverables: string[];
}

const ServiceTemplate = ({ title, tagline, image, description, deliverables }: ServiceTemplateProps) => {
  return (
    <PageTransition>
      <div style={{ backgroundColor: 'var(--bg-primary)', minHeight: '100vh', paddingTop: '10rem', paddingBottom: '6rem' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
          
          {/* 1. Hero */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ marginBottom: '8rem' }}
          >
            <h1 style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', textTransform: 'uppercase', marginBottom: '1rem', lineHeight: 1 }}>
              {title}
            </h1>
            <p style={{ fontSize: '1.5rem', color: 'var(--accent)', maxWidth: '800px', fontWeight: 300 }}>
              {tagline}
            </p>
          </motion.div>

          {/* 2. Overview Section */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
            gap: '6rem',
            alignItems: 'center',
            marginBottom: '10rem'
          }}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              style={{
                position: 'relative',
                aspectRatio: '3/4',
                borderRadius: '4px',
                overflow: 'hidden'
              }}
            >
              <img src={image} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(20%)' }} />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', fontWeight: 400 }}>Overview</h2>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '4rem' }}>
                {description}
              </p>

              {/* 3. Deliverables */}
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                Deliverables
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {deliverables.map((item, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.1rem', color: '#fff' }}>
                    <div style={{ width: '6px', height: '6px', backgroundColor: 'var(--accent)', borderRadius: '50%' }} />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* 4. Process */}
          <div style={{ marginBottom: '10rem', borderTop: '1px solid var(--border)', paddingTop: '6rem' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '4rem', textAlign: 'center', fontWeight: 400 }}>Our Process</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '4rem' }}>
              {[
                { step: '01', name: 'Discovery', desc: 'Deep dive into brand DNA, competitive landscape, and audience insights.' },
                { step: '02', name: 'Creation', desc: 'Concept development, production mapping, and art direction execution.' },
                { step: '03', name: 'Launch', desc: 'Asset delivery, cross-channel roll-out, and performance monitoring.' }
              ].map((phase, idx) => (
                <motion.div
                  key={phase.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <span style={{ color: 'var(--accent)', fontSize: '2rem', fontFamily: 'Inter', fontWeight: 300 }}>{phase.step}</span>
                  <h3 style={{ fontSize: '1.5rem', margin: '1rem 0' }}>{phase.name}</h3>
                  <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>{phase.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* 5. CTA */}
          <div style={{ textAlign: 'center', padding: '6rem 0', backgroundColor: 'var(--bg-secondary)', borderRadius: '4px' }}>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '2rem' }}>Ready to start your project?</h2>
            <Link to="/connect/contact" style={{
              display: 'inline-block',
              padding: '1.2rem 3rem',
              border: '1px solid var(--accent)',
              backgroundColor: 'var(--accent)',
              color: 'var(--bg-primary)',
              borderRadius: '30px',
              fontSize: '1rem',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              fontWeight: 500
            }}>
              Connect With Us
            </Link>
          </div>

        </div>
      </div>
    </PageTransition>
  );
};

export default ServiceTemplate;
