import { motion } from 'framer-motion';
import PageTransition from '../../components/PageTransition';

const reports = [
  { type: 'Report', title: 'Social Media Consumption Trends 2025', desc: 'An analysis of platform usage, format preferences, and algorithmic shifts affecting fashion and beauty brands.' },
  { type: 'Study', title: 'Influencer ROI Benchmarks by Category', desc: 'Quantitative breakdown of actual conversion rates across micro, macro, and mega influencers in the luxury sector.' },
  { type: 'Whitepaper', title: 'The Impact of Short-Form Video', desc: 'How sub-15 second content affects long-term brand recall versus traditional 60-second broadcast spots.' },
  { type: 'Industry Analysis', title: 'LA Creative Economy Report', desc: 'A localized dive into the changing dynamics of talent rates, studio costs, and agency retainers in Los Angeles.' }
];

const ResearchPage = () => {
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
              Research
            </h1>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '600px' }}>
              Data-backed insights to inform your brand strategy.
            </p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(500px, 1fr))', gap: '3rem' }}>
            {reports.map((report, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  borderBottom: '1px solid var(--border)',
                  paddingBottom: '3rem'
                }}
              >
                <div style={{ 
                  display: 'inline-block', 
                  alignSelf: 'flex-start',
                  padding: '0.4rem 1rem', 
                  backgroundColor: 'var(--text-primary)', 
                  color: 'var(--bg-primary)',
                  fontSize: '0.8rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  fontWeight: 500,
                  marginBottom: '2rem'
                }}>
                  {report.type}
                </div>
                
                <h3 style={{ fontSize: '2rem', fontWeight: 400, marginBottom: '1.5rem' }}>
                  {report.title}
                </h3>
                
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '2.5rem', fontSize: '1.1rem' }}>
                  {report.desc}
                </p>
                
                <button style={{
                  background: 'none',
                  border: '1px solid var(--text-primary)',
                  color: 'var(--text-primary)',
                  padding: '1rem 2rem',
                  fontSize: '0.9rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  width: 'fit-content',
                  transition: 'all 0.3s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--text-primary)';
                  e.currentTarget.style.color = 'var(--bg-primary)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = 'var(--text-primary)';
                }}>
                  Download PDF
                </button>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </PageTransition>
  );
};

export default ResearchPage;
