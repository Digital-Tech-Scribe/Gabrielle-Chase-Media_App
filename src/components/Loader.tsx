import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { loaderImages } from '../assets/data';

interface LoaderProps {
  onComplete: () => void;
}

const Loader = ({ onComplete }: LoaderProps) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [phase, setPhase] = useState<'flashing' | 'expanding' | 'text' | 'exiting'>('flashing');

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    
    if (phase === 'flashing') {
      const interval = setInterval(() => {
        setCurrentIdx((prev) => {
          if (prev >= loaderImages.length - 2) {
            setPhase('expanding');
            clearInterval(interval);
            return loaderImages.length - 1;
          }
          return prev + 1;
        });
      }, 600);
      return () => clearInterval(interval);
    }
    
    if (phase === 'expanding') {
      timer = setTimeout(() => {
        setPhase('text');
      }, 1000);
    } 
    
    if (phase === 'text') {
      timer = setTimeout(() => {
        setPhase('exiting');
      }, 2000);
    }

    if (phase === 'exiting') {
      timer = setTimeout(() => {
        onComplete();
      }, 2000);
    }

    return () => clearTimeout(timer);
  }, [phase, onComplete]);

  const activeImage = loaderImages[currentIdx % loaderImages.length];

  return (
    <motion.div
      className="loader-container"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: '#0D0D0D', // BRAND COLOR
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999,
        overflow: 'hidden'
      }}
    >
      {/* Prime Template style entrance flash */}
      <motion.div
        layout
        initial={{ width: '25vw', height: '35vh', opacity: 0 }}
        animate={{ 
          opacity: phase === 'exiting' ? 0 : 1,
          width: phase === 'flashing' ? '25vw' : '100vw', 
          height: phase === 'flashing' ? '35vh' : '100vh',
          borderRadius: '0px'
        }}
        transition={{ 
          opacity: { duration: 1.5, ease: 'easeInOut' },
          width: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
          height: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
        }}
        style={{
          position: 'relative',
          overflow: 'hidden',
          boxShadow: phase === 'flashing' ? '0 30px 60px rgba(201,168,76,0.2)' : 'none'
        }}
      >
        <AnimatePresence mode="popLayout">
          <motion.img 
            key={activeImage}
            src={activeImage} 
            alt="Loading Flash"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />
        </AnimatePresence>
        
        {/* Dark overlay for text readability when expanded */}
        <motion.div
          animate={{ opacity: phase === 'text' || phase === 'exiting' ? 0.6 : 0 }}
          style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: '#0D0D0D',
            zIndex: 10
          }}
        />
      </motion.div>

      {/* Centered Synced Layout Wrapper */}
      <motion.div
        style={{
          position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', 
          zIndex: 100, pointerEvents: 'none',
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'
        }}
      >
        <motion.div 
          initial={{ opacity: 0, y: -100 }}
          animate={{ 
            opacity: phase === 'text' || phase === 'exiting' ? 1 : 0, 
            y: phase === 'text' || phase === 'exiting' ? 0 : -100
          }}
          transition={{ 
            y: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
            opacity: { duration: 1, ease: 'easeOut' }
          }}
          style={{ textAlign: 'center' }}
        >
          <motion.h1 
            layoutId="main-hero-title"
            style={{ 
              fontSize: 'clamp(3.5rem, 10vw, 8rem)', fontWeight: 700, lineHeight: 0.9, 
              color: '#fff', textTransform: 'uppercase', letterSpacing: '-0.03em', margin: 0
            }}
          >
            GABRIELLE<br/>
            CHASE <span style={{ fontStyle: 'italic', fontWeight: 400 }}>MEDIA</span>
          </motion.h1>
          {/* Transparent duplicate of Hero sub-headline to assure exact 1:1 vertical alignment */}
          <p style={{ marginTop: '2rem', fontSize: '1.2rem', color: 'transparent', letterSpacing: '0.1em', textTransform: 'uppercase', userSelect: 'none' }}>
            Award-Winning Art Direction & Content Production
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Loader;
