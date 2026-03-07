import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageTransition from '../../components/PageTransition';

const posts = [
  { category: 'Feature', title: 'The Future of Visual Storytelling in the Age of AI', summary: 'How generative models are changing the pre-production workflow for high-end campaigns.', date: 'Oct 24, 2025' },
  { category: 'Opinion', title: 'What Makes a Great Brand Campaign in 2025', summary: 'Why authenticity is a buzzword and intentionality is the new standard.', date: 'Sep 12, 2025' },
  { category: 'Behind The Scenes', title: 'How We Created the Fenty Beauty Campaign', summary: 'A breakdown of the lighting, talent casting, and set design decisions.', date: 'Aug 05, 2025' },
  { category: 'Retrospective', title: '10 Lessons from 10 Years of Content Production', summary: 'Gabrielle Chase reflects on a decade in the Los Angeles creative scene.', date: 'Jul 19, 2025' }
];

const BlogPage = () => {
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
              Editorial
            </h1>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '600px' }}>
              Insights, observations, and cultural commentary from the GCM team.
            </p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '2rem' }}>
            {posts.map((post, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Link to="#" style={{
                  display: 'flex',
                  flexDirection: 'column',
                  padding: '3rem 2.5rem',
                  backgroundColor: 'var(--bg-secondary)',
                  borderTop: '2px solid var(--accent)',
                  borderRadius: '4px',
                  height: '100%',
                  textDecoration: 'none',
                  color: 'inherit'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#1a1a1a';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--bg-secondary)';
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem' }}>
                    <span style={{ color: 'var(--accent)', fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                      {post.category}
                    </span>
                    <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>
                      {post.date}
                    </span>
                  </div>
                  
                  <h3 style={{ fontSize: '1.8rem', fontWeight: 400, marginBottom: '1.5rem', lineHeight: 1.3 }}>
                    {post.title}
                  </h3>
                  
                  <p style={{ color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '2rem' }}>
                    {post.summary}
                  </p>
                  
                  <span style={{ marginTop: 'auto', fontSize: '0.9rem', color: '#fff', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                    Read Article &rarr;
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </PageTransition>
  );
};

export default BlogPage;
