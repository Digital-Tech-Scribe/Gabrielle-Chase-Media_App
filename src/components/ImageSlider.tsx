import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const images = [
  "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?q=80&w=2500&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2500&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1542204165-65bf26472b9b?q=80&w=2500&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=2500&auto=format&fit=crop"
];

const ImageSlider = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth > 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["10%", "-80%"]);

  return (
    <section ref={targetRef} className="pos-relative overflow-hidden">
      <div className="overflow-hidden" style={{ position: 'sticky', top: 0, height: '100vh', display: 'flex', alignItems: 'center' }}>
        
        {/* Title layer */}
        <div style={{ position: 'absolute', top: '20%', left: isDesktop ? '10%' : '5%', zIndex: 10 }}>
          <h2 style={{ fontSize: isDesktop ? '3rem' : '1.8rem', fontWeight: 300, color: '#fff', opacity: 0.8 }}>
            Featured Collections
          </h2>
          <div style={{ width: '50px', height: '2px', backgroundColor: 'var(--accent-color)', marginTop: '1rem' }} />
        </div>

        <motion.div style={{ x, display: 'flex', gap: isDesktop ? '4rem' : '2rem', paddingLeft: isDesktop ? '20vw' : '5vw', alignItems: 'center' }}>
          {images.map((img, index) => (
            <div 
              key={index} 
              className="glass-panel"
              style={{
                width: isDesktop ? '60vw' : '85vw',
                height: isDesktop ? '60vh' : '50vh',
                flexShrink: 0,
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '8px',
                boxShadow: '0 20px 40px rgba(0,0,0,0.5)'
              }}
            >
              <img 
                src={img} 
                alt={`Collection ${index + 1}`} 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  filter: 'grayscale(20%) contrast(110%)',
                  transition: 'transform 0.5s ease',
                }}
                onMouseOver={(e) => { if (isDesktop) e.currentTarget.style.transform = 'scale(1.05)'; }}
                onMouseOut={(e) => { if (isDesktop) e.currentTarget.style.transform = 'scale(1)'; }}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ImageSlider;
