import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { logoLight } from '../assets/data';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Work', path: '/work' },
  { name: 'Contact', path: '/contact' }
];

const locations = [
  'Lagos, Nigeria',
  'Toronto, United States',
  'London, UK'
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuAnimComplete, setIsMenuAnimComplete] = useState(false);
  const [locationIndex, setLocationIndex] = useState(0);

  const { scrollY } = useScroll();
  const headerOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const headerY = useTransform(scrollY, [0, 400], [0, -25]);

  useEffect(() => {
    const timer = setInterval(() => {
      setLocationIndex((prev) => (prev + 1) % locations.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
    setIsMenuAnimComplete(false);
  }, []);

  const toggleMenu = () => {
    if (isOpen) {
      closeMenu();
    } else {
      setIsOpen(true);
    }
  };

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape' && isOpen) {
      closeMenu();
    }
  }, [isOpen, closeMenu]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      {/* Top Navbar - Fades out on scroll */}
      <motion.nav 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '2rem 5rem',
          zIndex: 100,
          color: '#fff',
          fontFamily: '"DM Sans", sans-serif',
          opacity: headerOpacity,
          y: headerY,
        }}
      >
        <div style={{ 
          flex: 1, 
          fontSize: '0.85rem', 
          letterSpacing: '0.05em', 
          fontWeight: 600,
          display: 'flex',
          justifyContent: 'flex-start'
        }}>
          <div style={{
            backgroundColor: 'rgba(13, 13, 13, 0.4)',
            backdropFilter: 'blur(10px)',
            padding: '0.6rem 1.2rem',
            borderRadius: '8px',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            height: '3rem',
            display: 'flex',
            alignItems: 'center',
            overflow: 'hidden',
            minWidth: '160px'
          }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={locations[locationIndex]}
                initial={{ y: 15, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -15, opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                style={{ whiteSpace: 'nowrap', width: '100%', textTransform: 'uppercase', fontSize: '0.95rem' }}
              >
                {locations[locationIndex]}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
        
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Link to="/">
            <img 
              src={logoLight} 
              alt="Gabrielle Chase Media" 
              style={{ 
                height: '180px', 
                objectFit: 'contain'
              }} 
            />
          </Link>
        </div>

        <div style={{ 
          flex: 1, 
          display: 'flex', 
          justifyContent: 'flex-end', 
          fontSize: '0.95rem', 
          letterSpacing: '0.05em', 
          fontWeight: 600 
        }}>
          <div style={{
            backgroundColor: 'rgba(13, 13, 13, 0.4)',
            backdropFilter: 'blur(10px)',
            padding: '0.8rem 1.5rem',
            borderRadius: '8px',
            border: '1px solid rgba(255, 255, 255, 0.08)',
          }}>
            <a href="mailto:info@gabriellechasemedia.com" style={{ color: 'inherit', textDecoration: 'none' }}>
              info@gabriellechasemedia.com
            </a>
          </div>
        </div>
      </motion.nav>

      {/* Art Dir Toggle Menu (Bottom Center) */}
      <div 
        style={{
          position: 'fixed',
          bottom: '12vh',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          zIndex: 100
        }}
      >
        {/* The Toggle Button */}
        <motion.button
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-controls="nav-menu"
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          style={{
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            backgroundColor: '#0D0D0D',
            border: '1px solid rgba(201,168,76,0.2)',
            color: '#F5F0EB',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '6px',
            cursor: 'pointer',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
            zIndex: 10,
            outline: 'none',
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Hamburger Lines */}
          <div style={{ width: '20px', height: '2px', backgroundColor: '#F5F0EB', borderRadius: '2px' }} />
          <div style={{ width: '20px', height: '2px', backgroundColor: '#F5F0EB', borderRadius: '2px' }} />
        </motion.button>

        {/* The Expanding Menu Container */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              id="nav-menu"
              role="menu"
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 'auto', opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              onAnimationComplete={() => {
                if (isOpen) setIsMenuAnimComplete(true);
              }}
              style={{
                overflow: isMenuAnimComplete ? 'visible' : 'hidden',
                backgroundColor: 'rgba(13, 13, 13, 0.95)',
                backdropFilter: 'blur(10px)',
                borderRadius: '30px',
                border: '1px solid rgba(201,168,76,0.2)',
                display: 'flex',
                alignItems: 'center',
                padding: '0 1.5rem',
                height: '60px',
                whiteSpace: 'nowrap'
              }}
            >
              <div style={{ display: 'flex', gap: '2rem', height: '100%' }} role="none">
                {navItems.map((item) => (
                  <div
                    key={item.name}
                    role="menuitem"
                    style={{ position: 'relative', display: 'flex', alignItems: 'center', height: '100%' }}
                  >
                    <Link
                      to={item.path}
                      onClick={closeMenu}
                      style={{
                        color: '#F5F0EB',
                        textDecoration: 'none',
                        fontFamily: '"DM Sans", sans-serif',
                        fontSize: '0.9rem',
                        fontWeight: 500,
                        letterSpacing: '0.05em',
                        textTransform: 'uppercase',
                        position: 'relative',
                        zIndex: 2,
                        cursor: 'pointer',
                        transition: 'color 0.3s'
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.color = '#C9A84C';
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.color = '#F5F0EB';
                      }}
                    >
                      {item.name}
                    </Link>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Navigation;
