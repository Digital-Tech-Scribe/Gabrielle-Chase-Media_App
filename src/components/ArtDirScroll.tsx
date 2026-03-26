import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue, useMotionTemplate } from 'framer-motion';
import { Link } from 'react-router-dom';
import { filmTvProjects } from '../assets/data';

// Configuration for consistent tile shapes
const tileAspectRatios = [
  ['4/3', '3/4', '4/3', '3/4', '4/3'],   
  ['3/4', '4/3', '16/9', '4/3', '3/4'],   
  ['4/3', '3/4', '4/3', '3/4', '4/3'],   
];

const baseRowOffsets = ['8vw', '0', '-8vw'];

const ArtDirScroll = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDesktop, setIsDesktop] = useState(true);
  
  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth > 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // We only use scroll progress to fade out the Hero Text natively as it scrolls up
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 80, damping: 40, restDelta: 0.001 });
  const heroContentOpacity = useTransform(smoothProgress, [0, 0.8], [1, 0]);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothMouseX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 50, damping: 20 });
  
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDesktop) return;
    mouseX.set((e.clientX / window.innerWidth) * 2 - 1);
    mouseY.set((e.clientY / window.innerHeight) * 2 - 1);
  };
  
  const handleMouseLeave = () => { mouseX.set(0); mouseY.set(0); };

  // Static hero composition values for the 3D grid
  const gridScale = 0.95;
  const gridRotation = -12;
  const gridSkew = -8;
  const peripheralOpacity = 0.35;
  
  // Mouse parallax
  const mouseOffsetX = useTransform(() => smoothMouseX.get() * -8);
  const mouseOffsetY = useTransform(() => smoothMouseY.get() * -8);
  
  // Shift the grid just slightly down globally
  const totalY = useTransform(() => mouseOffsetY.get() + 5);
  
  const currentX = useMotionTemplate`${mouseOffsetX}vw`;
  const currentY = useMotionTemplate`${totalY}vh`;

  // Static offsets instead of scroll-based
  const rowOffset0 = baseRowOffsets[0];
  const rowOffset1 = baseRowOffsets[1];
  const rowOffset2 = baseRowOffsets[2];
  const dynamicRowOffsets = [rowOffset0, rowOffset1, rowOffset2];

  // Map filmTvProjects into the grid cells
  const getProject = (rowIndex: number, colIndex: number) => {
    const flatIndex = rowIndex * 5 + colIndex;
    // We have ~10 projects, so we cycle them for the 15 grid slots
    return filmTvProjects[flatIndex % filmTvProjects.length];
  };

  return (
    <div style={{ position: 'relative', width: '100vw' }}>
      
      {/* 1. HERO OVERLAY (Fades on scroll) */}
      <motion.div 
        style={{ 
          position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', 
          zIndex: 15, opacity: heroContentOpacity, pointerEvents: 'none',
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'
        }}
      >
        <div style={{ pointerEvents: 'auto', textAlign: 'center' }}>
          <motion.h1 
            layoutId="main-hero-title"
            style={{ 
              fontSize: 'clamp(3.5rem, 10vw, 8rem)', fontWeight: 700, lineHeight: 0.9, 
              color: '#fff', textTransform: 'uppercase', letterSpacing: '-0.03em' 
            }}
          >
            GABRIELLE<br/>
            CHASE <span style={{ fontStyle: 'italic', fontWeight: 400 }}>MEDIA</span>
          </motion.h1>
          <motion.p style={{ marginTop: '2rem', fontSize: '1.2rem', color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            Award-Winning Art Direction & Content Production
          </motion.p>
        </div>
      </motion.div>

      {/* 2. THE INTERACTIVE GRID - NOW A STANDARD HERO SECTION */}
      <div 
        ref={containerRef} 
        style={{ position: 'relative', zIndex: 10, backgroundColor: '#050505', height: '100vh', width: '100vw', overflow: 'hidden' }}
      >
        <div 
          style={{ 
            position: 'absolute', top: 0, height: '100vh', width: '100vw', 
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            perspective: '1200px' 
          }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <div style={{ position: 'absolute', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>
            <motion.div
              style={{
                display: 'flex', flexDirection: 'column', gap: '2vw', alignItems: 'center', justifyContent: 'center',
                scale: gridScale, rotate: gridRotation, skewX: gridSkew, x: currentX, y: currentY, transformStyle: 'preserve-3d', willChange: 'transform'
              }}
            >
              {tileAspectRatios.map((rowRatios, rowIndex) => (
                <motion.div key={rowIndex} style={{ display: 'flex', gap: '2vw', justifyContent: 'center', marginLeft: dynamicRowOffsets[rowIndex] }}>
                  {rowRatios.map((ratio, colIndex) => {
                    const project = getProject(rowIndex, colIndex);
                    const isFocusImage = rowIndex === 1 && colIndex === 2;

                    return (
                      <motion.div
                        key={`${rowIndex}-${colIndex}`}
                        style={{
                          flexShrink: 0, width: '30vw', aspectRatio: ratio, borderRadius: '16px', overflow: 'hidden',
                          backgroundColor: '#111', boxShadow: '0 30px 60px rgba(0,0,0,0.8)',
                          opacity: isFocusImage ? 1 : peripheralOpacity, transformOrigin: 'center center',
                          position: 'relative'
                        }}
                        whileHover={isDesktop ? { scale: 1.05, zIndex: 50, transition: { duration: 0.4 } } : {}}
                      >
                        {project.video ? (
                          <video 
                            src={project.video} autoPlay loop muted playsInline 
                            aria-label={`${project.title} video showcase`}
                            style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.8)' }} 
                          />
                        ) : (
                          <img 
                            src={project.image} alt={project.title} 
                            style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.8)' }} 
                          />
                        )}
                        
                        {/* Interactive Overlay */}
                        <motion.div 
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 1 }}
                          style={{ 
                            position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                            display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '1.5rem'
                          }}
                        >
                          <h3 style={{ color: '#fff', fontSize: '1rem', margin: 0 }}>{project.title}</h3>
                          <p style={{ color: 'var(--accent)', fontSize: '0.7rem', textTransform: 'uppercase', margin: '0.2rem 0 0 0' }}>{project.role}</p>
                        </motion.div>

                        <Link to="/work" style={{ position: 'absolute', inset: 0, zIndex: 10 }} />
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
