import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { logoLight } from '../assets/data';
import { Smartphone, Mail, Instagram } from 'lucide-react';

const Footer = () => {
  const location = useLocation();
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth > 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNavClick = (path: string) => {
    if (location.pathname === path) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setTimeout(() => window.scrollTo(0, 0), 100);
    }
  };

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{
      backgroundColor: '#050505',
      color: '#fff',
      padding: isDesktop ? '6rem 2rem 2rem' : '3rem 1.25rem 1.5rem',
      marginTop: 'auto',
      fontFamily: '"DM Sans", sans-serif',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Decorative gradient */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(212,175,55,0.3), transparent)'
      }} />

      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: isDesktop ? '4rem' : '2.5rem',
        marginBottom: isDesktop ? '6rem' : '3rem'
      }}>
        
        {/* Left Column - Brand */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: isDesktop ? '2rem' : '1.5rem' }}>
          <Link to="/" onClick={handleLogoClick} style={{ display: 'inline-block', width: 'fit-content', transition: 'transform 0.3s ease' }} className="hover-scale">
            <img src={logoLight} alt="Gabrielle Chase Media" style={{ height: isDesktop ? '110px' : '70px', width: 'auto', opacity: 0.9 }} />
          </Link>
          <p style={{ 
            color: 'var(--text-muted)', 
            fontSize: isDesktop ? '1.05rem' : '0.9rem',
            maxWidth: '320px',
            lineHeight: 1.7,
            letterSpacing: '0.02em',
            fontWeight: 300
          }}>
            Award-Winning Art Direction & Content Production Studio · Lagos, Nigeria
          </p>
        </div>

        {/* Middle Column - Explore */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <h4 style={{ 
            color: 'var(--accent)', 
            fontSize: '0.85rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            marginBottom: '0.5rem',
            fontFamily: 'var(--font-heading)'
          }}>
            Explore
          </h4>
          {[
            { name: 'Home', path: '/' },
            { name: 'About', path: '/about' },
            { name: 'Services', path: '/services' },
            { name: 'Work', path: '/work' },
            { name: 'Contact', path: '/contact' }
          ].map((item) => (
            <Link 
              key={item.name} 
              to={item.path}
              onClick={() => handleNavClick(item.path)}
              style={{
                color: 'var(--text-muted)',
                fontSize: isDesktop ? '1.05rem' : '0.95rem',
                textDecoration: 'none',
                width: 'fit-content',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}
              className="footer-link-item"
            >
              <span className="link-line" style={{ height: '1px', backgroundColor: 'var(--accent)', display: 'inline-block' }} />
              {item.name}
            </Link>
          ))}
        </div>

        {/* Right Column - Contact & Socials */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <h4 style={{ 
            color: 'var(--accent)', 
            fontSize: '0.85rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            marginBottom: '0.5rem',
            fontFamily: 'var(--font-heading)'
          }}>
            Connect
          </h4>

          <a 
            href="tel:+234000000000"
            className="footer-contact-item"
            style={{
              color: 'var(--text-muted)',
              fontSize: isDesktop ? '1.05rem' : '0.95rem',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              textDecoration: 'none'
            }}
          >
            <Smartphone size={18} color="var(--accent)" strokeWidth={1.5} />
            Mobile Contact
          </a>

          <a 
            href="mailto:info@gabriellechasemedia.com"
            className="footer-contact-item"
            style={{
              color: 'var(--text-muted)',
              fontSize: isDesktop ? '1.05rem' : '0.95rem',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              textDecoration: 'none'
            }}
          >
            <Mail size={18} color="var(--accent)" strokeWidth={1.5} />
            {isDesktop ? 'info@gabriellechasemedia.com' : 'Email Us'}
          </a>

          <a 
            href="https://www.instagram.com/gabriellechasemedia" 
            target="_blank" 
            rel="noopener noreferrer"
            className="footer-contact-item"
            style={{
              color: 'var(--text-muted)',
              fontSize: isDesktop ? '1.05rem' : '0.95rem',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              textDecoration: 'none'
            }}
          >
            <Instagram size={18} color="var(--accent)" strokeWidth={1.5} />
            @gabriellechasemedia
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        paddingTop: isDesktop ? '2.5rem' : '1.5rem',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '1rem',
        flexDirection: isDesktop ? 'row' : 'column',
      }}>
        <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: isDesktop ? '0.85rem' : '0.75rem', letterSpacing: '0.05em', textAlign: isDesktop ? 'left' : 'center' }}>
          © {new Date().getFullYear()} GABRIELLE CHASE MEDIA. ALL RIGHTS RESERVED.
        </p>
        <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: isDesktop ? '0.85rem' : '0.75rem', letterSpacing: '0.05em', textAlign: isDesktop ? 'right' : 'center' }}>
          WEBSITE DESIGNED AND BUILT BY{' '}
          <a 
            href="https://digitaltechscribe.com" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ color: 'var(--accent)', textDecoration: 'none', transition: 'color 0.3s ease' }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#fff'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'var(--accent)'}
          >
            DIGITAL TECH SCRIBE
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
