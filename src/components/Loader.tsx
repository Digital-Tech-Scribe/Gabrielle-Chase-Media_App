import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { loaderImages } from '../assets/data';

interface LoaderProps {
  onComplete: () => void;
}

const Loader = ({ onComplete }: LoaderProps) => {
  const flashImages = loaderImages;
  const [currentIdx, setCurrentIdx] = useState(0);
  const [phase, setPhase] = useState<'flashing' | 'expanding' | 'text' | 'exiting'>('flashing');

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    
    if (phase === 'flashing') {
      const interval = setInterval(() => {
        setCurrentIdx((prev) => {
          if (prev >= 4) { // 5 flashes ~ 3.0 seconds
            setPhase('expanding');
            clearInterval(interval);
            return flashImages.length - 1; // lock onto the last image
          }
          return prev + 1;
        });
      }, 600);
      return () => clearInterval(interval);
    }
    
    if (phase === 'expanding') {
      timer = setTimeout(() => {
        setPhase('text');
      }, 1000); // 1.0s to expand
    } 
    
    if (phase === 'text') {
      timer = setTimeout(() => {
        setPhase('exiting');
      }, 1500); // 1.5s reading time
    }

    if (phase === 'exiting') {
      // Trigger the exit animation then call onComplete
      timer = setTimeout(() => {
        onComplete();
      }, 1000); // matches the exit transition duration
    }

    return () => clearTimeout(timer);
  }, [phase, onComplete]);

  const activeImage = flashImages[currentIdx % flashImages.length];

  return (
    <motion.div
      className="loader-container"
      initial={{ y: 0 }}
      animate={{ y: phase === 'exiting' ? '-100%' : 0 }}
      transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: '#EBEBEB',
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
          opacity: 1,
          width: phase === 'flashing' ? '25vw' : '100vw', 
          height: phase === 'flashing' ? '35vh' : '100vh',
          borderRadius: '0px'
        }}
        transition={{ 
          duration: phase === 'flashing' ? 0.3 : 1.2, 
          ease: [0.16, 1, 0.3, 1] 
        }}
        style={{
          position: 'relative',
          overflow: 'hidden',
          boxShadow: phase === 'flashing' ? '0 30px 60px rgba(0,0,0,0.2)' : 'none'
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
          animate={{ opacity: phase === 'text' || phase === 'exiting' ? 0.4 : 0 }}
          style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: '#050505',
            zIndex: 10
          }}
        />
      </motion.div>

      {/* Reveal Text */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ 
          opacity: phase === 'text' || phase === 'exiting' ? 1 : 0, 
          y: phase === 'text' || phase === 'exiting' ? 0 : 50 
        }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: 'absolute',
          color: '#EBEBEB',
          textAlign: 'center',
          pointerEvents: 'none'
        }}
      >
        <h1 style={{ 
          fontSize: 'clamp(3rem, 10vw, 8rem)', 
          fontWeight: 400, 
          lineHeight: 1, 
          letterSpacing: '-0.03em',
          textTransform: 'uppercase'
        }}>
          Gabrielle<br/>Chase
        </h1>
      </motion.div>

    </motion.div>
  );
};

export default Loader;
