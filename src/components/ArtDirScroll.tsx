import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue, useMotionTemplate } from 'framer-motion';
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
const baseRowOffsets = ['8vw', '0', '-8vw'];

const ArtDirScroll = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // 1. Screen size detection for desktop features
  const [isDesktop, setIsDesktop] = useState(true);
  
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768);
    };
    handleResize(); // Init on mount
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 40,
    damping: 25,
    restDelta: 0.001
  });

  // 2. Mouse tracking values (-1 to 1)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Smooth the mouse values so panning feels weighty/fluid
  const smoothMouseX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 50, damping: 20 });
  
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDesktop) return;
    
    // Normalize mouse position relative to viewport center (-1 to 1)
    const x = (e.clientX / window.innerWidth) * 2 - 1;
    const y = (e.clientY / window.innerHeight) * 2 - 1;
    
    mouseX.set(x);
    mouseY.set(y);
  };
  
  const handleMouseLeave = () => {
    // Reset mouse pos when leaving the area gently
    mouseX.set(0);
    mouseY.set(0);
  };

  // 3. PHASE 1: [0 to 0.4] - Graceful contraction from zoomed-in to full grid
  const gridScale = useTransform(smoothProgress, [0, 0.4], [2.5, 1]);
  // PHASE 3: At the very end [0.8 to 1.0], untangle the rotation back to 0
  const gridRotation = useTransform(smoothProgress, [0, 0.4, 0.8, 1], [0, -12, -12, 0]);
  
  // Surrounding cards fade in as user scrolls
  const peripheralOpacity = useTransform(smoothProgress, [0, 0.3, 0.4], [0, 0, 1]);

  // 4. Transform calculations
  // Base scroll translation (Phase 2 [0.4 to 1.0])
  const baseScrollX = useTransform(smoothProgress, [0, 0.4, 1], [0, 0, -30]);
  const baseScrollY = useTransform(smoothProgress, [0, 0.4, 1], [0, 0, -30]);
  
  // Determine if we're in the interactive phase (zoomed out) -> scroll > 0.4
  // We use this to scale up the mouse effect ONLY when zoomed out
  const interactivityIntensity = useTransform(smoothProgress, [0, 0.4, 0.5], [0, 0, 1]);
  
  // Calculate dynamic mouse offset
  // We multiply the smoothed mouse value (-1 to 1) by a max pixel/percentage offset
  // and multiply by the intensity so it only kicks in when the grid is visible.
  const mouseOffsetX = useTransform(() => smoothMouseX.get() * -15 * interactivityIntensity.get());
  const mouseOffsetY = useTransform(() => smoothMouseY.get() * -15 * interactivityIntensity.get());
  
  // Combine scroll offset + interactive mouse offset into CSS strings
  const currentX = useMotionTemplate`calc(${baseScrollX}% + ${mouseOffsetX}vw)`;
  const currentY = useMotionTemplate`calc(${baseScrollY}% + ${mouseOffsetY}vh)`;

  // Phase 3: Untangle the staggered row offsets back to 0 at the end of scroll
  const rowOffset0 = useTransform(smoothProgress, [0.8, 1], [baseRowOffsets[0], '0vw']);
  const rowOffset1 = useTransform(smoothProgress, [0.8, 1], [baseRowOffsets[1], '0vw']);
  const rowOffset2 = useTransform(smoothProgress, [0.8, 1], [baseRowOffsets[2], '0vw']);
  const dynamicRowOffsets = [rowOffset0, rowOffset1, rowOffset2];

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
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
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
                <motion.div
                  key={rowIndex}
                  style={{
                    display: 'flex',
                    gap: '2vw',
                    justifyContent: 'center',
                    // Dynamic Row stagger via margin — untangles at the end of scroll
                    marginLeft: dynamicRowOffsets[rowIndex],
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
                          borderRadius: '16px',
                          overflow: 'hidden',
                          backgroundColor: '#111',
                          boxShadow: '0 30px 60px rgba(0,0,0,0.8)',
                          opacity: isFocusImage ? 1 : peripheralOpacity,
                          // Important: set transform origin so hover expansions zoom outward organically
                          transformOrigin: 'center center',
                        }}
                        // HOVER EXPANSION LOGIC
                        whileHover={isDesktop && !isFocusImage ? {
                          scale: 1.1,
                          zIndex: 50,
                          boxShadow: '0 40px 80px rgba(0,0,0,0.9)',
                          transition: { duration: 0.4, ease: 'easeOut' }
                        } : {}}
                      >
                        <motion.img 
                          src={getImage(rowIndex, colIndex)} 
                          alt={`Grid ${id}`} 
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            filter: 'contrast(1.1) brightness(0.9)',
                          }}
                          // Optional sub-image zoom during hover 
                          whileHover={isDesktop && !isFocusImage ? {
                            scale: 1.05,
                            transition: { duration: 0.6, ease: 'easeOut' }
                          } : {}}
                          loading={isFocusImage ? "eager" : "lazy"}
                        />
                      </motion.div>
                    );
                  })}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtDirScroll;
