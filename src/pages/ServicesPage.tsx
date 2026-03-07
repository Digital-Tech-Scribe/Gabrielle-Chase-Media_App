import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';

const services = [
  { name: 'Creative', path: '/services/creative', desc: 'Art direction, photography, and editorial campaigns.' },
  { name: 'Media', path: '/services/media', desc: 'Social media content creation and short-form video.' },
  { name: 'Strategy', path: '/services/strategy', desc: 'Brand positioning and audience insights.' },
  { name: 'Integrated', path: '/services/integrated', desc: 'Multi-channel campaign execution.' },
  { name: 'Consulting', path: '/services/consulting', desc: '1:1 brand consulting and creative audits.' },
  { name: 'Commerce', path: '/services/commerce', desc: 'Product photography and shoppable content.' },
  { name: 'Influencer & Talent', path: '/services/influencer-&-talent', desc: 'Influencer matching and contract management.' },
  { name: 'Analytics', path: '/services/analytics', desc: 'Campaign performance tracking and ROI.' }
];

const ServicesPage = () => {
  return (
    <PageTransition>
      <div style={{ backgroundColor: 'var(--bg-primary)', minHeight: '100vh', paddingTop: '10rem', paddingBottom: '6rem' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ marginBottom: '6rem' }}
          >
            <h1 style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', textTransform: 'uppercase', marginBottom: '1rem', lineHeight: 1 }}>
              Services
            </h1>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '600px' }}>
              What We Do
            </p>
          </motion.div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '1px',
            backgroundColor: 'var(--border)',
            border: '1px solid var(--border)'
          }}>
            {services.map((service, idx) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                style={{ backgroundColor: 'var(--bg-primary)' }}
              >
                <Link 
                  to={service.path}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    padding: '4rem 3rem',
                    height: '100%',
                    textDecoration: 'none',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                  className="service-card"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--bg-secondary)';
                    const arrow = e.currentTarget.querySelector('.arrow');
                    if(arrow) (arrow as HTMLElement).style.transform = 'translateX(5px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--bg-primary)';
                    const arrow = e.currentTarget.querySelector('.arrow');
                    if(arrow) (arrow as HTMLElement).style.transform = 'translateX(0)';
                  }}
                >
                  <h3 style={{ 
                    fontSize: '2rem', 
                    marginBottom: '1rem', 
                    fontWeight: 400,
                    fontFamily: 'Playfair Display, serif'
                  }}>
                    {service.name}
                  </h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '2rem' }}>
                    {service.desc}
                  </p>
                  
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' }}>
                    <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--accent)' }}>
                      0{idx + 1}
                    </span>
                    <span className="arrow" style={{ transition: 'transform 0.3s ease', color: '#fff' }}>
                      →
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div style={{ marginTop: '8rem', textAlign: 'center', padding: '4rem 0', borderTop: '1px solid var(--border)' }}>
            <p style={{ 
              fontSize: '1.2rem', 
              letterSpacing: '0.2em', 
              textTransform: 'uppercase',
              color: 'var(--text-muted)',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 300
            }}>
              10+ Years &nbsp;·&nbsp; 200+ Campaigns &nbsp;·&nbsp; 50+ Brands &nbsp;·&nbsp; 3 Continents
            </p>
          </div>

        </div>
      </div>
    </PageTransition>
  );
};

export default ServicesPage;
