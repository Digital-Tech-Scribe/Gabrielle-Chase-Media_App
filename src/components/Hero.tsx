import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll position
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Zoom focus effect: scales from 1 on load, and further zooms out as user scrolls down
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Sliding animation for text
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  return (
    <div ref={containerRef} style={{ height: '200vh', position: 'relative' }}>
      {/* Sticky Hero Section */}
      <div 
        style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          width: '100vw',
          overflow: 'hidden',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        {/* Background Image with Zoom Focus */}
        <motion.div
          style={{
            position: 'absolute',
            inset: 0,
            scale,
            opacity,
            backgroundImage: 'url(https://images.unsplash.com/photo-1594910360676-e177ce6daddd?q=80&w=2500&auto=format&fit=crop)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: -1
          }}
          // Initial entrance zoom focus (Art Dir style)
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
        >
          {/* Dark Overlay */}
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(5,5,5,0.4)' }} />
        </motion.div>

        {/* Hero Content */}
        <motion.div
          style={{
            y: textY,
            textAlign: 'center',
            color: '#fff',
            zIndex: 10,
            padding: '0 2rem'
          }}
        >
          <motion.h1 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            style={{
              fontSize: 'clamp(3rem, 8vw, 6rem)',
              fontWeight: 300,
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
              marginBottom: '1rem'
            }}
          >
            Visual Storytelling
            <br />
            <span style={{ fontStyle: 'italic', fontWeight: 400, color: 'var(--accent-color)' }}>
              Elevated
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            style={{
              fontSize: '1.2rem',
              fontWeight: 300,
              maxWidth: '600px',
              margin: '0 auto',
              opacity: 0.8
            }}
          >
            Premium media production & brand strategy inspired by Gabriel Chase Media.
          </motion.p>
        </motion.div>
      </div>

    </div>
  );
};

export default Hero;
