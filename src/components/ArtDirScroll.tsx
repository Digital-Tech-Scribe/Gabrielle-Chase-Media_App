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

const ArtDirScroll = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDesktop, setIsDesktop] = useState(true);
  
  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth > 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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

  // Responsive 3D grid values
  const gridScale = isDesktop ? 0.95 : 0.75;
  const gridRotation = isDesktop ? -12 : -6;
  const gridSkew = isDesktop ? -8 : -4;
  const peripheralOpacity = isDesktop ? 0.35 : 0.25;
  const baseRowOffsets = isDesktop ? ['8vw', '0', '-8vw'] : ['4vw', '0', '-4vw'];
  
  // Mouse parallax (desktop only)
  const mouseOffsetX = useTransform(() => isDesktop ? smoothMouseX.get() * -8 : 0);
  const mouseOffsetY = useTransform(() => isDesktop ? smoothMouseY.get() * -8 : 0);
  
  const totalY = useTransform(() => mouseOffsetY.get() + 5);
  
  const currentX = useMotionTemplate`${mouseOffsetX}vw`;
  const currentY = useMotionTemplate`${totalY}vh`;

  const dynamicRowOffsets = baseRowOffsets;

  // Map filmTvProjects into the grid cells
  const getProject = (rowIndex: number, colIndex: number) => {
    const flatIndex = rowIndex * 5 + colIndex;
    return filmTvProjects[flatIndex % filmTvProjects.length];
  };

  return (
    <div style={{ position: 'relative', width: '100vw', overflow: 'hidden' }}>
      
      {/* 1. HERO OVERLAY (Fades on scroll) */}
      <motion.div 
        style={{ 
          position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', 
          zIndex: 15, opacity: heroContentOpacity, pointerEvents: 'none',
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
          padding: isDesktop ? 0 : '0 1rem',
        }}
      >
        <div style={{ pointerEvents: 'auto', textAlign: 'center' }}>
          <motion.h1 
            layoutId="main-hero-title"
            style={{ 
              fontSize: 'clamp(3rem, 10vw, 8rem)', fontWeight: 700, lineHeight: 0.9, 
              color: '#fff', textTransform: 'uppercase', letterSpacing: '-0.03em' 
            }}
          >
            GABRIELLE<br/>
            CHASE <span style={{ fontStyle: 'italic', fontWeight: 400 }}>MEDIA</span>
          </motion.h1>
          <motion.p style={{ 
            marginTop: isDesktop ? '2rem' : '1.5rem', 
            fontSize: isDesktop ? '1.2rem' : '0.9rem', 
            color: 'var(--text-muted)', 
            letterSpacing: '0.1em', 
            textTransform: 'uppercase' 
          }}>
            Award-Winning Art Direction & Content Production
          </motion.p>
        </div>
      </motion.div>

      {/* 2. THE INTERACTIVE GRID */}
      <div 
        ref={containerRef} 
        style={{ position: 'relative', zIndex: 10, backgroundColor: '#050505', height: '100vh', width: '100vw', overflow: 'hidden' }}
      >
        <div 
          style={{ 
            position: 'absolute', top: 0, height: '100vh', width: '100vw', 
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            perspective: isDesktop ? '1200px' : '800px'
          }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <div style={{ position: 'absolute', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>
            <motion.div
              style={{
                display: 'flex', flexDirection: 'column', gap: isDesktop ? '2vw' : '1.5vw', alignItems: 'center', justifyContent: 'center',
                scale: gridScale, rotate: gridRotation, skewX: gridSkew, x: currentX, y: currentY, transformStyle: 'preserve-3d', willChange: 'transform'
              }}
            >
              {tileAspectRatios.map((rowRatios, rowIndex) => (
                <motion.div key={rowIndex} style={{ display: 'flex', gap: isDesktop ? '2vw' : '1.5vw', justifyContent: 'center', marginLeft: dynamicRowOffsets[rowIndex] }}>
                  {rowRatios.map((ratio, colIndex) => {
                    const project = getProject(rowIndex, colIndex);
                    const isFocusImage = rowIndex === 1 && colIndex === 2;

                    return (
                      <motion.div
                        key={`${rowIndex}-${colIndex}`}
                        style={{
                          flexShrink: 0, width: isDesktop ? '30vw' : '40vw', aspectRatio: ratio, borderRadius: isDesktop ? '16px' : '10px', overflow: 'hidden',
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
                        
                        {/* Interactive Overlay — always visible on mobile */}
                        <motion.div 
                          initial={{ opacity: isDesktop ? 0 : 1 }}
                          whileHover={isDesktop ? { opacity: 1 } : {}}
                          style={{ 
                            position: 'absolute', inset: 0, 
                            background: isDesktop 
                              ? 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)'
                              : 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 50%)',
                            display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', 
                            padding: isDesktop ? '1.5rem' : '0.75rem'
                          }}
                        >
                          <h3 style={{ color: '#fff', fontSize: isDesktop ? '1rem' : '0.7rem', margin: 0 }}>{project.title}</h3>
                          <p style={{ color: 'var(--accent)', fontSize: isDesktop ? '0.7rem' : '0.55rem', textTransform: 'uppercase', margin: '0.2rem 0 0 0' }}>{project.role}</p>
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
