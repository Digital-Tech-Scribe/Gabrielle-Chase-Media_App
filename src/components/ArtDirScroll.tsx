import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { galleryImages } from '../assets/data';

const infiniteImages = [...galleryImages, ...galleryImages, ...galleryImages];

// Use the first gallery image for the fixed hero viewport
const staticHeroBackground = galleryImages[2]; 

const ArtDirScroll = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll only when the Carousel runway hits the top of the viewport
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Apply a very gentle spring physics to the scroll progress.
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 40,
    damping: 25,
    restDelta: 0.001
  });

  // PHASE 1: [0 to 0.4] - The slow, graceful contraction into the grid
  // The carousel items start large and flat, rotating dynamically as you scrub down
  const gridScale = useTransform(smoothProgress, [0, 0.4], [2.5, 1]);
  const gridRotation = useTransform(smoothProgress, [0, 0.4], [0, -12]);
  
  // Peripherals fade in gradually
  const peripheralOpacity = useTransform(smoothProgress, [0, 0.3, 0.4], [0, 0, 1]);

  // PHASE 2: [0.4 to 1.0] - The slow diagonal translation
  const currentX = useTransform(smoothProgress, [0.4, 1], ["0%", "-30%"]);
  const currentY = useTransform(smoothProgress, [0.4, 1], ["0%", "-30%"]);

  return (
    <div style={{ position: 'relative', width: '100vw' }}>
      
      {/* 1. SEAMLESS FIXED HERO SECTION */}
      {/* The Hero image sits at the very bottom z-index and remains entirely fixed */}
      <div style={{ height: '100vh', width: '100vw' }}>
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 0 }}>
          <img 
            src={staticHeroBackground} 
            alt="Hero Background" 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
            loading="eager"
          />
          {/* Subtle gradient overlay to enhance text readability */}
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.6))' }} />
          
          <motion.div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              textAlign: 'center',
              color: '#fff',
              width: '100%'
            }}
          >
            <motion.h1 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              style={{
                fontSize: 'clamp(3rem, 8vw, 6rem)',
                fontWeight: 300,
                letterSpacing: '-0.02em',
                lineHeight: 1.1,
                marginBottom: '1rem',
                textShadow: '0 10px 30px rgba(0,0,0,0.8)'
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
              transition={{ duration: 1, delay: 0.7 }}
              style={{
                fontSize: '1.2rem',
                fontWeight: 300,
                maxWidth: '600px',
                margin: '0 auto',
                textShadow: '0 4px 10px rgba(0,0,0,0.8)'
              }}
            >
              Premium media production & brand strategy inspired by Gabriel Chase Media.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* 2. THE ROTATING SCROLL CAROUSEL */}
      {/* This solid container scrolls up over the fixed Hero layer like a curtain */}
      <div 
        ref={containerRef} 
        style={{ 
          position: 'relative', 
          zIndex: 10, 
          backgroundColor: '#050505', 
          height: '400vh', // Massive scroll runway for the graceful rotation
          width: '100vw'
        }}
      >
        <div 
          style={{
            position: 'sticky',
            top: 0,
            height: '100vh',
            width: '100vw',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {/* The Animating Grid Container */}
          <motion.div
            style={{
              position: 'absolute',
              width: '250vw',
              height: '250vh',
              // All transforms are strictly tied to the smoothed scroll progress
              scale: gridScale,
              rotate: gridRotation,
              x: currentX,
              y: currentY,
              display: 'flex',
              flexDirection: 'column',
              gap: '2vw',
              alignItems: 'center',
              justifyContent: 'center',
              willChange: 'transform'
            }}
          >
            {/* Create rows for the grid */}
            {[0, 1, 2].map((rowIndex) => (
              <div
                key={rowIndex}
                style={{
                  display: 'flex',
                  gap: '2vw',
                  marginLeft: rowIndex % 2 === 0 ? '0' : '-15vw',
                  justifyContent: 'center'
                }}
              >
                {infiniteImages.map((src, colIndex) => {
                  const id = rowIndex * 100 + colIndex;
                  const isFocusImage = rowIndex === 1 && colIndex === Math.floor(infiniteImages.length / 2);

                  return (
                    <motion.div
                      key={id}
                      style={{
                        flexShrink: 0,
                        width: '35vw',
                        aspectRatio: isFocusImage ? '16/9' : (id % 3 === 0 ? '4/3' : '3/4'), 
                        borderRadius: isFocusImage ? '8px' : '16px',
                        overflow: 'hidden',
                        backgroundColor: '#111',
                        boxShadow: '0 30px 60px rgba(0,0,0,0.8)',
                        // Peripheral images map directly to scroll progress
                        opacity: isFocusImage ? 1 : peripheralOpacity
                      }}
                    >
                      <img 
                        src={src} 
                        alt={`Grid ${id}`} 
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          filter: 'contrast(1.1) brightness(0.9)',
                        }}
                        loading={isFocusImage ? "eager" : "lazy"}
                      />
                    </motion.div>
                  );
                })}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ArtDirScroll;
