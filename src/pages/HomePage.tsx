import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import ArtDirScroll from '../components/ArtDirScroll';
import { heroVideos, galleryImages } from '../assets/data';

const HomePage = () => {
  return (
    <PageTransition>
      <div style={{ backgroundColor: 'var(--bg-primary)' }}>
        {/* 1. Hero Section (ArtDirScroll handles its own fixed background visually) */}
        <div style={{ position: 'relative', zIndex: 1 }}>
          <ArtDirScroll />
        </div>

        {/* The rest of the content scrolls normally below the ArtDirScroll runway */}
        <div style={{ position: 'relative', zIndex: 20, backgroundColor: 'var(--bg-primary)' }}>
          {/* 2. Reel Section */}
          <section style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden' }}>
            <video 
              autoPlay 
              muted 
              loop 
              playsInline 
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                opacity: 0.6
              }}
            >
              <source src={heroVideos[0]} type="video/mp4" />
            </video>
            <div style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              pointerEvents: 'none'
            }}>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                style={{
                  fontSize: 'clamp(4rem, 10vw, 8rem)',
                  textTransform: 'uppercase',
                  fontWeight: 400,
                  letterSpacing: '0.05em',
                  color: '#fff',
                  lineHeight: 1
                }}
              >
                OUR WORK
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 }}
                style={{
                  fontSize: '1rem',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'var(--accent)',
                  marginTop: '1rem'
                }}
              >
                548 Projects · 1,503 Community Members
              </motion.p>
            </div>
          </section>

          {/* 3. Services Ticker */}
          <section style={{
            padding: '4rem 0',
            borderTop: '1px solid var(--border)',
            borderBottom: '1px solid var(--border)',
            overflow: 'hidden',
            backgroundColor: '#050505'
          }}>
            <motion.div
              animate={{ x: [0, -2000] }}
              transition={{ repeat: Infinity, duration: 40, ease: 'linear' }}
              style={{
                display: 'flex',
                gap: '4rem',
                whiteSpace: 'nowrap'
              }}
            >
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} style={{ display: 'flex', gap: '4rem', alignItems: 'center' }}>
                  {['CREATIVE', 'MEDIA', 'STRATEGY', 'INTEGRATED', 'CONSULTING', 'COMMERCE', 'INFLUENCER & TALENT', 'ANALYTICS'].map((service, j) => (
                    <span key={j} style={{ 
                      fontSize: '1.2rem', 
                      letterSpacing: '0.1em', 
                      color: 'var(--accent)',
                      fontWeight: 300 
                    }}>
                      {service} <span style={{ color: 'var(--text-muted)' }}>·</span>
                    </span>
                  ))}
                </div>
              ))}
            </motion.div>
          </section>

          {/* 4. Featured Work Grid */}
          <section style={{ padding: '8rem 4rem' }}>
            <h3 style={{ 
              fontSize: '2.5rem', 
              marginBottom: '4rem', 
              textAlign: 'center', 
              fontWeight: 400 
            }}>
              Featured Projects
            </h3>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem',
              maxWidth: '1400px',
              margin: '0 auto'
            }}>
              {[
                { img: galleryImages[0], title: 'Fashion Campaign', category: 'Creative' },
                { img: galleryImages[1], title: 'Product Launch', category: 'Commerce' },
                { img: galleryImages[3], title: 'Brand Identity', category: 'Strategy' },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  whileHover="hover"
                  style={{
                    position: 'relative',
                    aspectRatio: '3/4',
                    overflow: 'hidden',
                    borderRadius: '4px',
                    cursor: 'pointer'
                  }}
                >
                  <motion.img 
                    src={item.img} 
                    alt={item.title}
                    variants={{
                      hover: { scale: 1.05 }
                    }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      filter: 'contrast(1.1) grayscale(20%)'
                    }}
                  />
                  <motion.div
                    variants={{
                      hover: { opacity: 1 }
                    }}
                    initial={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'flex-end',
                      padding: '2rem'
                    }}
                  >
                    <span style={{ color: 'var(--accent)', fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                      {item.category}
                    </span>
                    <h4 style={{ fontSize: '1.5rem', color: '#fff' }}>{item.title}</h4>
                  </motion.div>
                </motion.div>
              ))}
            </div>
            
            <div style={{ textAlign: 'center', marginTop: '4rem' }}>
              <Link to="/work" style={{
                display: 'inline-block',
                borderBottom: '1px solid var(--accent)',
                paddingBottom: '0.5rem',
                color: '#fff',
                fontSize: '0.9rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase'
              }}>
                View All Work
              </Link>
            </div>
          </section>

          {/* 5. CTA Section */}
          <section style={{
            backgroundColor: 'var(--bg-light)',
            color: 'var(--text-dark)',
            padding: '10rem 2rem',
            textAlign: 'center'
          }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              style={{ maxWidth: '800px', margin: '0 auto' }}
            >
              <h2 style={{
                fontSize: 'clamp(2.5rem, 6vw, 5rem)',
                lineHeight: 1.1,
                marginBottom: '3rem'
              }}>
                READY TO START YOUR NEXT BIG IDEA?
              </h2>
              <Link to="/connect/contact" style={{
                display: 'inline-block',
                padding: '1.2rem 3rem',
                border: '1px solid var(--text-dark)',
                borderRadius: '30px',
                color: 'var(--bg-light)',
                backgroundColor: 'var(--text-dark)',
                fontSize: '1rem',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = 'var(--text-dark)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--text-dark)';
                e.currentTarget.style.color = 'var(--bg-light)';
              }}
              >
                Get In Touch
              </Link>
            </motion.div>
          </section>
        </div>
      </div>
    </PageTransition>
  );
};

export default HomePage;
