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

  const { scrollY } = useScroll(); // Native global scroll

  // The grid transforms from 3D floating to flat screen over the first 250px
  const rawProgress = useTransform(scrollY, [0, 250], [0, 1]);
  const progress = useSpring(rawProgress, { stiffness: 60, damping: 20 });

  // 3D Rotations collapsing to 0 degrees for a perfect flat rectangle structure
  const rotateX = useTransform(progress, [0, 1], ['25deg', '0deg']);
  const rotateY = useTransform(progress, [0, 1], ['-15deg', '0deg']);
  const rotateZ = useTransform(progress, [0, 1], ['5deg', '0deg']);
  const zPosition = useTransform(progress, [0, 1], ['-300px', '0px']);

  // Parallax constraints (subtle interactive panning)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothMouseX = useSpring(mouseX, { stiffness: 40, damping: 20 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 40, damping: 20 });
  
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDesktop) return;
    const x = (e.clientX / window.innerWidth) * 2 - 1;
    const y = (e.clientY / window.innerHeight) * 2 - 1;
    mouseX.set(x);
    mouseY.set(y);
  };
  const handleMouseLeave = () => { mouseX.set(0); mouseY.set(0); };

  const parallaxX = useTransform(() => smoothMouseX.get() * -20);
  const parallaxY = useTransform(() => smoothMouseY.get() * -20);
  const currentX = useMotionTemplate`${parallaxX}px`;
  const currentY = useMotionTemplate`${parallaxY}px`;

  // Staggered rows moving into perfect alignment
  const rowOffset0 = useTransform(progress, [0, 1], ['-10vw', '0vw']);
  const rowOffset1 = useTransform(progress, [0, 1], ['10vw', '0vw']);
  const rowOffset2 = useTransform(progress, [0, 1], ['-5vw', '0vw']);
  const dynamicRowOffsets = [rowOffset0, rowOffset1, rowOffset2];

  const gridItems = filmTvProjects.slice(0, 9);
  const matrix: (typeof filmTvProjects)[0][][] = [
    [gridItems[0], gridItems[1], gridItems[2]],
    [gridItems[3], gridItems[4], gridItems[5]],
    [gridItems[6], gridItems[7], gridItems[8]],
  ].map(row => row.filter(Boolean));

  // Hero text fades out smoothly immediately upon scrolling
  const heroOpacity = useTransform(scrollY, [0, 150], [1, 0]);
  const heroY = useTransform(scrollY, [0, 150], ['0px', '-50px']);

  return (
    <div style={{ position: 'relative', width: '100vw', backgroundColor: '#0D0D0D', perspective: '1200px', overflowX: 'hidden' }}>
      
      {/* Absolute Hero Typography (Fades instantly as grid flattens) */}
      <motion.div 
        style={{ 
          position: 'absolute', top: '22vh', left: 0, width: '100%', 
          zIndex: 50, opacity: heroOpacity, y: heroY,
          display: 'flex', flexDirection: 'column', alignItems: 'center', pointerEvents: 'none', textAlign: 'center'
        }}
      >
        <h1 style={{ fontFamily: '"DM Sans", sans-serif', fontSize: 'clamp(4rem, 10vw, 8.5rem)', color: '#fff', fontWeight: 700, lineHeight: 0.9, letterSpacing: '-0.03em', margin: 0 }}>
          ART <span style={{ fontFamily: '"Cormorant Garamond", serif', fontStyle: 'italic', fontWeight: 400 }}>Director</span><br/>
          & DESIGNER
        </h1>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '2.5rem', background: 'rgba(13,13,13,0.5)', padding: '0.6rem 1.8rem', borderRadius: '30px', border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)' }}>
           <span style={{ fontSize: '1.2rem' }}>🏆</span>
           <span style={{ color: 'var(--accent)', fontSize: '0.9rem', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' }}>AMVCA10 Winner — Best Art Director</span>
        </div>
      </motion.div>

      {/* The 3D Grid DOM natural flow - NO STICKY JAIL */}
      <div 
        style={{ 
          width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'flex-start',
          paddingTop: '15vh', paddingBottom: '10vh'
        }} 
        onMouseMove={handleMouseMove} 
        onMouseLeave={handleMouseLeave}
      >
        <motion.div 
          style={{ 
            display: 'flex', flexDirection: 'column', gap: '3vw', 
            rotateX, rotateY, rotateZ, z: zPosition,
            x: currentX, y: currentY,
            transformStyle: 'preserve-3d',
            width: '90vw', maxWidth: '1400px'
          }}
        >
          {matrix.map((row, rowIndex) => (
            <motion.div key={rowIndex} style={{ display: 'flex', gap: '3vw', x: dynamicRowOffsets[rowIndex], width: '100%' }}>
              {row.map((item) => {
                if (!item) return null;
                
                // Determine heights natively based exactly on the user's explicit aspect ratio labels
                let height = '45vh';
                let marginTop = '10vh';
                
                if (item.aspect === 'portrait') {
                  height = '70vh';
                  marginTop = '0vh'; // Tallest, sits at the top
                } else if (item.aspect === 'wide-aspect-ratio' || item.aspect === 'square') {
                  height = '50vh';
                  marginTop = '7.5vh'; // Squared, slight drop
                } else {
                  // landscape default
                  height = '40vh';
                  marginTop = '15vh'; // Shortest, drops lowest for extreme masonry overlap feeling
                }

                return (
                  <motion.div
                    key={item.id}
                    layout // allows smooth reflow adjustments
                    initial={{ flex: 1 }}
                    whileHover={isDesktop ? { flex: 1.5 } : {}}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    style={{
                      position: 'relative', overflow: 'hidden', borderRadius: '16px', backgroundColor: '#111',
                      height, marginTop, cursor: 'crosshair', boxShadow: '0 30px 60px rgba(0,0,0,0.5)'
                    }}
                  >
                    {item.video ? (
                      <motion.video 
                        src={item.video} autoPlay loop muted playsInline 
                        aria-label={`${item.title} background video`}
                        style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.7)' }} 
                        whileHover={{ scale: 1.05, filter: 'brightness(1.1)', transition: { duration: 0.6 } }} 
                      />
                    ) : (
                      <motion.img 
                        src={item.image} alt={item.title} 
                        style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.7)' }} 
                        whileHover={{ scale: 1.05, filter: 'brightness(1.1)', transition: { duration: 0.6 } }} 
                      />
                    )}
                    
                    {/* The Webflow "White Field" exact match */}
                    <motion.div 
                      initial={{ opacity: 0, y: 15 }} 
                      whileHover={{ opacity: 1, y: 0 }} 
                      transition={{ duration: 0.3 }}
                      style={{ 
                        position: 'absolute', bottom: '1.5rem', left: '1.5rem', right: '1.5rem', 
                        backgroundColor: '#F5F0EB', borderRadius: '8px', 
                        display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '1.2rem', pointerEvents: 'none', zIndex: 10 
                      }}
                    >
                      <h3 style={{ fontFamily: '"DM Sans", sans-serif', color: '#0D0D0D', fontSize: 'clamp(1rem, 1.2vw, 1.5rem)', margin: 0, lineHeight: 1.1, fontWeight: 700, textTransform: 'uppercase' }}>{item.title}</h3>
                      <p style={{ color: '#444', fontFamily: '"DM Sans", sans-serif', fontSize: 'clamp(0.75rem, 0.8vw, 0.85rem)', letterSpacing: '0.05em', margin: '0.4rem 0 0 0', fontWeight: 600, textTransform: 'uppercase' }}>
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
