import { motion } from 'framer-motion';
import PageTransition from '../../components/PageTransition';
import { galleryImages } from '../../assets/data';

const team = [
  { name: 'Gabrielle Chase', role: 'Founder & Creative Director', img: galleryImages[0], bio: 'The visionary force behind GCM, Gabrielle blends a deep editorial eye with measurable brand strategy.' },
  { name: 'Julian Hayes', role: 'Head of Production', img: galleryImages[3], bio: 'Architect of logistics. Julian ensures every campaign looks like a million dollars, strictly on timeline.' },
  { name: 'Elena Rostova', role: 'Strategy Director', img: galleryImages[4], bio: 'Data-driven and culture-obsessed, Elena builds the theoretical foundation that our creative stands on.' }
];

const LeadershipPage = () => {
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
            <h1 style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', textTransform: 'uppercase', marginBottom: '1rem', lineHeight: 1 }}>
              Leadership
            </h1>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '600px' }}>
              The minds engineering modern brand narratives.
            </p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '4rem' }}>
            {team.map((member, idx) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                style={{
                  backgroundColor: 'var(--bg-secondary)',
                  padding: '2rem',
                  borderRadius: '4px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '2rem',
                  transition: 'background-color 0.3s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#1a1a1a';
                  const nameEl = e.currentTarget.querySelector('h3');
                  if (nameEl) (nameEl as HTMLElement).style.color = 'var(--accent)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--bg-secondary)';
                  const nameEl = e.currentTarget.querySelector('h3');
                  if (nameEl) (nameEl as HTMLElement).style.color = '#fff';
                }}
              >
                <div style={{ width: '100%', aspectRatio: '1/1', overflow: 'hidden', borderRadius: '4px' }}>
                  <img src={member.img} alt={member.name} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(30%)' }} />
                </div>
                <div>
                  <h3 style={{ fontSize: '2rem', marginBottom: '0.5rem', fontWeight: 400, transition: 'color 0.3s' }}>
                    {member.name}
                  </h3>
                  <p style={{ color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.8rem', marginBottom: '1.5rem' }}>
                    {member.role}
                  </p>
                  <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </PageTransition>
  );
};

export default LeadershipPage;
