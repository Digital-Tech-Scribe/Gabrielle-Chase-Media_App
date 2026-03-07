import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logoLight from '../assets/GCM-logo_light.png';

const navItems = [
  { name: 'Home', subItems: [] },
  { name: 'Work', subItems: ['Campaigns', 'Clients', 'Recognition', 'Press', 'Case Studies'] },
  { name: 'Services', subItems: ['Creative', 'Media', 'Strategy', 'Integrated', 'Consulting', 'Commerce', 'Influencer & Talent', 'Analytics'] },
  { name: 'About', subItems: ['Blog', 'Research', 'Bio'] },
  { name: 'Connect', subItems: ['Contact Us', 'Leadership', 'Events'] }
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isMenuAnimComplete, setIsMenuAnimComplete] = useState(false);

  const toggleMenu = () => {
    if (isOpen) {
      setIsMenuAnimComplete(false);
      setActiveMenu(null);
    }
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Top Navbar */}
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
          padding: '2rem 4rem',
          zIndex: 100,
          mixBlendMode: 'difference',
          color: '#fff'
        }}
      >
        <div style={{ flex: 1, fontSize: '0.9rem', letterSpacing: '0.05em', fontWeight: 500 }}>
          Los Angeles, CA
        </div>
        
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img 
            src={logoLight} 
            alt="Gabrielle Chase Media" 
            style={{ 
              height: '40px', 
              objectFit: 'contain'
            }} 
          />
        </div>

        <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end', fontSize: '0.9rem', letterSpacing: '0.05em', fontWeight: 500 }}>
          <a href="mailto:hello@gabriellechasemedia.com" style={{ color: 'inherit', textDecoration: 'none' }}>
            hello@gabriellechasemedia.com
          </a>
        </div>
      </motion.nav>

      {/* Art Dir Toggle Menu (Bottom Center) */}
      <div 
        style={{
          position: 'fixed',
          bottom: '2rem',
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
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          style={{
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            backgroundColor: '#111',
            border: '1px solid rgba(255,255,255,0.1)',
            color: '#fff',
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
          <div style={{ width: '20px', height: '2px', backgroundColor: '#fff', borderRadius: '2px' }} />
          <div style={{ width: '20px', height: '2px', backgroundColor: '#fff', borderRadius: '2px' }} />
        </motion.button>

        {/* The Expanding Menu Container */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 'auto', opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              onAnimationComplete={() => {
                if (isOpen) setIsMenuAnimComplete(true);
              }}
              style={{
                overflow: isMenuAnimComplete ? 'visible' : 'hidden',
                backgroundColor: 'rgba(17, 17, 17, 0.9)',
                backdropFilter: 'blur(10px)',
                borderRadius: '30px',
                border: '1px solid rgba(255,255,255,0.1)',
                display: 'flex',
                alignItems: 'center',
                padding: '0 1.5rem',
                height: '60px',
                whiteSpace: 'nowrap'
              }}
            >
              <div style={{ display: 'flex', gap: '2rem', height: '100%' }}>
                {navItems.map((item, idx) => (
                  <div
                    key={item.name}
                    onMouseEnter={() => setActiveMenu(item.name)}
                    onMouseLeave={() => setActiveMenu(null)}
                    style={{ position: 'relative', display: 'flex', alignItems: 'center', height: '100%' }}
                  >
                    {/* Invisible hover bridge to connect nav item with submenu */}
                    {activeMenu === item.name && item.subItems.length > 0 && (
                      <div style={{ position: 'absolute', bottom: '100%', left: '-20px', right: '-20px', height: '15px' }} />
                    )}

                    <motion.a
                      href={`#${item.name.toLowerCase()}`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ delay: 0.1 + (idx * 0.05) }}
                      style={{
                        color: typeof window !== 'undefined' ? '#fff' : '#fff',
                        textDecoration: 'none',
                        fontSize: '0.9rem',
                        fontWeight: 500,
                        letterSpacing: '0.05em',
                        textTransform: 'uppercase',
                        position: 'relative',
                        zIndex: 2,
                        cursor: 'pointer'
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.color = '#aaa';
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.color = '#fff';
                      }}
                    >
                      {item.name}
                    </motion.a>

                    <AnimatePresence>
                      {isMenuAnimComplete && activeMenu === item.name && item.subItems.length > 0 && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          style={{
                            position: 'absolute',
                            bottom: 'calc(100% + 15px)',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            backgroundColor: 'rgba(17, 17, 17, 0.95)',
                            backdropFilter: 'blur(10px)',
                            borderRadius: '16px',
                            border: '1px solid rgba(255,255,255,0.1)',
                            padding: '1.25rem 1.75rem',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1rem',
                            minWidth: '220px',
                            boxShadow: '0 -10px 40px rgba(0,0,0,0.5)',
                            zIndex: 120
                          }}
                        >
                          {item.subItems.map((sub, i) => (
                            <motion.div
                              key={sub}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.05 }}
                            >
                              <a
                                href={`#${sub.toLowerCase().replace(/ /g, '-')}`}
                                style={{
                                  color: 'rgba(255,255,255,0.7)',
                                  textDecoration: 'none',
                                  fontSize: '0.85rem',
                                  textTransform: 'uppercase',
                                  letterSpacing: '0.05em',
                                  fontWeight: 500,
                                  display: 'flex',
                                  alignItems: 'center',
                                  gap: '10px',
                                  transition: 'color 0.2s ease, transform 0.2s ease',
                                  cursor: 'pointer'
                                }}
                                onMouseOver={(e) => {
                                  e.currentTarget.style.color = '#fff';
                                  e.currentTarget.style.transform = 'translateX(5px)';
                                }}
                                onMouseOut={(e) => {
                                  e.currentTarget.style.color = 'rgba(255,255,255,0.7)';
                                  e.currentTarget.style.transform = 'translateX(0)';
                                }}
                              >
                                {sub}
                              </a>
                            </motion.div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
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
