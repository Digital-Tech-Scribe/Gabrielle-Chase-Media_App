import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue, useMotionTemplate } from 'framer-motion';
import { filmTvProjects } from '../assets/data';
import { Link } from 'react-router-dom';

const ArtDirScroll = () => {
  const [isDesktop, setIsDesktop] = useState(true);
  
  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth > 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const { scrollY } = useScroll();

  const rawProgress = useTransform(scrollY, [0, 250], [0, 1]);
  const progress = useSpring(rawProgress, { stiffness: 60, damping: 20, restDelta: 0.0001, restSpeed: 0.0001 });

  // 3D Rotations — reduced on mobile
  const rotateX = useTransform(progress, [0, 1], [isDesktop ? '25deg' : '15deg', '0deg']);
  const rotateY = useTransform(progress, [0, 1], [isDesktop ? '-15deg' : '-8deg', '0deg']);
  const rotateZ = useTransform(progress, [0, 1], [isDesktop ? '5deg' : '0deg', '0deg']);
  const zPosition = useTransform(progress, [0, 1], [isDesktop ? '-300px' : '-150px', '0px']);

  // Parallax (desktop only)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothMouseX = useSpring(mouseX, { stiffness: 40, damping: 20, restDelta: 0.0001, restSpeed: 0.0001 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 40, damping: 20, restDelta: 0.0001, restSpeed: 0.0001 });
  
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDesktop) return;
    const x = (e.clientX / window.innerWidth) * 2 - 1;
    const y = (e.clientY / window.innerHeight) * 2 - 1;
    mouseX.set(x);
    mouseY.set(y);
  };
  const handleMouseLeave = () => { mouseX.set(0); mouseY.set(0); };

  const parallaxX = useTransform(() => isDesktop ? smoothMouseX.get() * -20 : 0);
  const parallaxY = useTransform(() => isDesktop ? smoothMouseY.get() * -20 : 0);
  const currentX = useMotionTemplate`${parallaxX}px`;
  const currentY = useMotionTemplate`${parallaxY}px`;

  // Row offsets — reduced on mobile
  const rowOffset0 = useTransform(progress, [0, 1], [isDesktop ? '-10vw' : '-4vw', '0vw']);
  const rowOffset1 = useTransform(progress, [0, 1], [isDesktop ? '10vw' : '4vw', '0vw']);
  const rowOffset2 = useTransform(progress, [0, 1], [isDesktop ? '-5vw' : '-2vw', '0vw']);
  const dynamicRowOffsets = [rowOffset0, rowOffset1, rowOffset2];

  const gridItems = filmTvProjects.slice(0, 9);
  const matrix: (typeof filmTvProjects)[0][][] = [
    [gridItems[0], gridItems[1], gridItems[2]],
    [gridItems[3], gridItems[4], gridItems[5]],
    [gridItems[6], gridItems[7], gridItems[8]],
  ].map(row => row.filter(Boolean));

  const heroOpacity = useTransform(scrollY, [0, 100], [1, 0]);
  const heroY = useTransform(scrollY, [0, 150], ['0px', '-50px']);

  return (
    <div style={{ position: 'relative', width: '100vw', backgroundColor: '#0D0D0D', perspective: isDesktop ? '1200px' : '800px', overflowX: 'hidden' }}>
      
      {/* Hero Typography */}
      <motion.div 
        style={{ 
          position: 'absolute', top: isDesktop ? '22vh' : '15vh', left: 0, width: '100%', 
          zIndex: 50, opacity: heroOpacity, y: heroY,
          display: 'flex', flexDirection: 'column', alignItems: 'center', pointerEvents: 'none', textAlign: 'center',
          padding: isDesktop ? 0 : '0 1rem',
        }}
      >
        <h1 style={{ 
          fontFamily: '"DM Sans", sans-serif', 
          fontSize: 'clamp(3rem, 10vw, 8.5rem)', 
          color: '#fff', fontWeight: 700, lineHeight: 0.9, letterSpacing: '-0.03em', margin: 0 
        }}>
          ART <span style={{ fontFamily: '"Cormorant Garamond", serif', fontStyle: 'italic', fontWeight: 400 }}>Director</span><br/>
          & DESIGNER
        </h1>
        <div style={{ 
          display: 'flex', alignItems: 'center', gap: isDesktop ? '1rem' : '0.6rem', 
          marginTop: isDesktop ? '2.5rem' : '1.5rem', 
          background: 'rgba(13,13,13,0.5)', 
          padding: isDesktop ? '0.6rem 1.8rem' : '0.5rem 1rem', 
          borderRadius: '30px', border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)' 
        }}>
           <span style={{ fontSize: isDesktop ? '1.2rem' : '1rem' }}>🏆</span>
           <span style={{ 
             color: 'var(--accent)', 
             fontSize: isDesktop ? '0.9rem' : '0.7rem', 
             fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' 
           }}>
             AMVCA10 Winner — Best Art Director
           </span>
        </div>
      </motion.div>

      {/* The 3D Grid */}
      <div 
        style={{ 
          width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'flex-start',
          paddingTop: isDesktop ? '15vh' : '12vh', paddingBottom: isDesktop ? '10vh' : '6vh'
        }} 
        onMouseMove={handleMouseMove} 
        onMouseLeave={handleMouseLeave}
      >
        <motion.div 
          style={{ 
            display: 'flex', flexDirection: 'column', gap: isDesktop ? '3vw' : '2vw', 
            rotateX, rotateY, rotateZ, z: zPosition,
            x: currentX, y: currentY,
            transformStyle: 'preserve-3d',
            width: '90vw', maxWidth: '1400px',
            willChange: 'transform',
          }}
        >
          {matrix.map((row, rowIndex) => (
            <motion.div key={rowIndex} style={{ display: 'flex', gap: isDesktop ? '3vw' : '2vw', x: dynamicRowOffsets[rowIndex], width: '100%', transformStyle: 'preserve-3d' }}>
              {row.map((item) => {
                if (!item) return null;
                
                let height = '45vh';
                let marginTop = '10vh';
                
                if (item.aspect === 'portrait') {
                  height = isDesktop ? '70vh' : '50vh';
                  marginTop = '0vh';
                } else if (item.aspect === 'wide-aspect-ratio' || item.aspect === 'square') {
                  height = isDesktop ? '50vh' : '35vh';
                  marginTop = isDesktop ? '7.5vh' : '5vh';
                } else {
                  height = isDesktop ? '40vh' : '30vh';
                  marginTop = isDesktop ? '15vh' : '8vh';
                }

                return (
                  <motion.div
                    key={item.id}
                    initial={{ flex: 1 }}
                    whileHover={isDesktop ? { flex: 1.5 } : {}}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    style={{
                      position: 'relative', overflow: 'hidden', borderRadius: isDesktop ? '16px' : '10px', backgroundColor: '#111',
                      height, marginTop, cursor: isDesktop ? 'crosshair' : 'pointer', boxShadow: '0 30px 60px rgba(0,0,0,0.5)',
                      willChange: 'transform',
                      WebkitFontSmoothing: 'antialiased',
                    }}
                  >
                    {item.video ? (
                      <motion.video 
                        src={item.video} autoPlay loop muted playsInline 
                        aria-label={`${item.title} background video`}
                        style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.7)', willChange: 'transform' }} 
                        whileHover={isDesktop ? { scale: 1.05, filter: 'brightness(1.1)', transition: { duration: 0.6 } } : {}}
                      />
                    ) : (
                      <motion.img 
                        src={item.image} alt={item.title} 
                        style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.7)', willChange: 'transform' }} 
                        whileHover={isDesktop ? { scale: 1.05, filter: 'brightness(1.1)', transition: { duration: 0.6 } } : {}}
                      />
                    )}
                    
                    {/* Info card — hover on desktop, always visible on mobile */}
                    <motion.div 
                      initial={{ opacity: isDesktop ? 0 : 1, y: isDesktop ? 15 : 0 }} 
                      whileHover={isDesktop ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.3 }}
                      style={{ 
                        position: 'absolute', bottom: isDesktop ? '1.5rem' : '0.75rem', left: isDesktop ? '1.5rem' : '0.5rem', right: isDesktop ? '1.5rem' : '0.5rem', 
                        backgroundColor: isDesktop ? '#F5F0EB' : 'rgba(245, 240, 235, 0.92)', 
                        borderRadius: isDesktop ? '8px' : '6px', 
                        display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', 
                        padding: isDesktop ? '1.2rem' : '0.6rem 0.8rem', 
                        pointerEvents: 'none', zIndex: 10 
                      }}
                    >
                      <h3 style={{ fontFamily: '"DM Sans", sans-serif', color: '#0D0D0D', fontSize: isDesktop ? 'clamp(1rem, 1.2vw, 1.5rem)' : '0.7rem', margin: 0, lineHeight: 1.1, fontWeight: 700, textTransform: 'uppercase' }}>{item.title}</h3>
                      <p style={{ color: '#444', fontFamily: '"DM Sans", sans-serif', fontSize: isDesktop ? 'clamp(0.75rem, 0.8vw, 0.85rem)' : '0.55rem', letterSpacing: '0.05em', margin: '0.2rem 0 0 0', fontWeight: 600, textTransform: 'uppercase' }}>
                        {item.role} {item.platform ? `— ${item.platform}` : ''}
                      </p>
                    </motion.div>
                    <Link to="/work" style={{ position: 'absolute', inset: 0, zIndex: 20 }} aria-label={`View ${item.title}`} />
                  </motion.div>
                );
              })}
            </motion.div>
          ))}
        </motion.div>
      </div>

    </div>
  );
};

export default ArtDirScroll;
