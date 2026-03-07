import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageTransition from '../../components/PageTransition';

const upcomingEvents = [
  { date: 'NOV 2025', title: 'Creative Futures Summit', location: 'Los Angeles, CA' },
  { date: 'SEP 2025', title: 'Content Creator Masterclass', location: 'Los Angeles, CA' },
  { date: 'AUG 2025', title: 'Influencer Marketing Week', location: 'New York, NY' }
];

const pastEvents = [
  { date: 'APR 2025', title: 'SXSW Media Panel', location: 'Austin, TX' },
  { date: 'JAN 2025', title: 'GCM Brand Strategy Workshop', location: 'London, UK' }
];

const EventsPage = () => {
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
              Events
            </h1>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '600px' }}>
              Speaking engagements, masterclasses, and industry summits.
            </p>
          </motion.div>

          <div style={{ marginBottom: '8rem' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '3rem', fontWeight: 400, borderBottom: '1px solid var(--border)', paddingBottom: '1rem' }}>Upcoming</h2>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {upcomingEvents.map((evt, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '3rem 0',
                    borderBottom: '1px solid var(--border)',
                    gap: '2rem'
                  }}
                >
                  <div style={{ display: 'flex', gap: '4rem', alignItems: 'center', flex: 1, minWidth: '300px' }}>
                    <div style={{ color: 'var(--accent)', fontSize: '0.9rem', letterSpacing: '0.1em', width: '100px' }}>
                      {evt.date}
                    </div>
                    <h3 style={{ fontSize: '2.5rem', fontWeight: 400, margin: 0 }}>
                      {evt.title}
                    </h3>
                  </div>
                  <div style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>
                    {evt.location}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h2 style={{ fontSize: '2rem', marginBottom: '3rem', fontWeight: 400, borderBottom: '1px solid var(--border)', paddingBottom: '1rem', color: 'var(--text-muted)' }}>Past</h2>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {pastEvents.map((evt, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '3rem 0',
                    borderBottom: '1px solid var(--border)',
                    gap: '2rem',
                    opacity: 0.5
                  }}
                >
                  <div style={{ display: 'flex', gap: '4rem', alignItems: 'center', flex: 1, minWidth: '300px' }}>
                    <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', letterSpacing: '0.1em', width: '100px' }}>
                      {evt.date}
                    </div>
                    <h3 style={{ fontSize: '2.5rem', fontWeight: 400, margin: 0 }}>
                      {evt.title}
                    </h3>
                  </div>
                  <div style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>
                    {evt.location}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

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
              Request as Speaker
            </Link>
          </div>

        </div>
      </div>
    </PageTransition>
  );
};

export default EventsPage;
