import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { galleryImages } from '../assets/data';

// Use the third gallery image for the fixed hero viewport
const staticHeroBackground = galleryImages[2]; 

// Grid configuration: 3 rows × 5 columns
// Aspect ratios preserve original card shapes
const tileAspectRatios = [
  ['4/3', '3/4', '4/3', '3/4', '4/3'],   // row 0
  ['3/4', '4/3', '16/9', '4/3', '3/4'],   // row 1 — center tile (col 2) is the focus
  ['4/3', '3/4', '4/3', '3/4', '4/3'],   // row 2
];

// Row offsets for visual stagger — row 1 (focus row) has NO offset
const rowOffsets = ['8vw', '0', '-8vw'];

const ArtDirScroll = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 40,
    damping: 25,
    restDelta: 0.001
  });

  // PHASE 1: [0 to 0.4] - Graceful contraction from zoomed-in to full grid
  const gridScale = useTransform(smoothProgress, [0, 0.4], [2.5, 1]);
  const gridRotation = useTransform(smoothProgress, [0, 0.4], [0, -12]);
  
  // Surrounding cards fade in as user scrolls
  const peripheralOpacity = useTransform(smoothProgress, [0, 0.3, 0.4], [0, 0, 1]);

  // PHASE 2: [0.4 to 1.0] - Slow diagonal translation
  const currentX = useTransform(smoothProgress, [0.4, 1], ["0%", "-30%"]);
  const currentY = useTransform(smoothProgress, [0.4, 1], ["0%", "-30%"]);

  // Distribute gallery images across the grid
  const getImage = (rowIndex: number, colIndex: number) => {
    const flatIndex = rowIndex * 5 + colIndex;
    return galleryImages[flatIndex % galleryImages.length];
  };

  return (
    <div style={{ position: 'relative', width: '100vw' }}>
      
      {/* 1. SEAMLESS FIXED HERO SECTION */}
      <div style={{ height: '100vh', width: '100vw' }}>
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 0 }}>
          <img 
            src={staticHeroBackground} 
            alt="Hero Background" 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
            loading="eager"
          />
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
              <span style={{ fontStyle: 'italic', fontWeight: 400, color: 'var(--accent)' }}>
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
              Premium Content Production & Brand Strategy
            </motion.p>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            style={{
              position: 'absolute',
              bottom: '2rem',
              left: '50%',
              transform: 'translateX(-50%)',
              color: '#fff',
              fontSize: '0.9rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.5rem'
            }}
          >
           <span>Scroll to explore</span>
           <motion.div
             animate={{ y: [0, 10, 0] }}
             transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
             style={{
               width: '1px',
               height: '40px',
               backgroundColor: 'var(--accent)'
             }}
           />
          </motion.div>
        </div>
      </div>

      {/* 2. THE ROTATING SCROLL CAROUSEL */}
      <div 
        ref={containerRef} 
        style={{ 
          position: 'relative', 
          zIndex: 10, 
          backgroundColor: '#050505', 
          height: '400vh',
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
          {/* 
            Centering wrapper: positions the grid so that the center cell 
            (row 1, col 2) aligns with the viewport center.
            This wrapper does ONLY centering — no animation transforms.
          */}
          <div
            style={{
              position: 'absolute',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              height: '100%',
            }}
          >
            {/* Animated grid — Framer Motion handles scale/rotate/translate */}
            <motion.div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '2vw',
                alignItems: 'center',
                justifyContent: 'center',
                scale: gridScale,
                rotate: gridRotation,
                x: currentX,
                y: currentY,
                willChange: 'transform'
              }}
            >
              {/* 3 rows × 5 columns */}
              {tileAspectRatios.map((rowRatios, rowIndex) => (
                <div
                  key={rowIndex}
                  style={{
                    display: 'flex',
                    gap: '2vw',
                    justifyContent: 'center',
                    // Row stagger via margin — focus row (1) has no offset
                    marginLeft: rowOffsets[rowIndex],
                  }}
                >
                  {rowRatios.map((ratio, colIndex) => {
                    const id = rowIndex * 100 + colIndex;
                    // Focus image: exact center of the grid (row 1, col 2)
                    const isFocusImage = rowIndex === 1 && colIndex === 2;

                    return (
                      <motion.div
                        key={id}
                        style={{
                          flexShrink: 0,
                          width: '35vw',
                          aspectRatio: ratio,
                          borderRadius: isFocusImage ? '8px' : '16px',
                          overflow: 'hidden',
                          backgroundColor: '#111',
                          boxShadow: '0 30px 60px rgba(0,0,0,0.8)',
                          opacity: isFocusImage ? 1 : peripheralOpacity,
                        }}
                      >
                        <img 
                          src={getImage(rowIndex, colIndex)} 
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
    </div>
  );
};

export default ArtDirScroll;
