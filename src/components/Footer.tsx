import { Link, useLocation } from 'react-router-dom';
import { logoLight } from '../assets/data';
import { Smartphone, Mail, Instagram } from 'lucide-react';

const Footer = () => {
  const location = useLocation();

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
      padding: '6rem 2rem 2rem',
      marginTop: 'auto',
      fontFamily: '"DM Sans", sans-serif',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Decorative sophisticated gradient */}
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
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '4rem',
        marginBottom: '6rem'
      }}>
        
        {/* Left Column - Brand */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <Link to="/" onClick={handleLogoClick} style={{ display: 'inline-block', width: 'fit-content', transition: 'transform 0.3s ease' }} className="hover-scale">
            <img src={logoLight} alt="Gabrielle Chase Media" style={{ height: '110px', width: 'auto', opacity: 0.9 }} />
          </Link>
          <p style={{ 
            color: 'var(--text-muted)', 
            fontSize: '1.05rem',
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
                fontSize: '1.05rem',
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

          {/* Phone / iPhone Icon */}
          <a 
            href="tel:+234000000000"
            className="footer-contact-item"
            style={{
              color: 'var(--text-muted)',
              fontSize: '1.05rem',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              textDecoration: 'none'
            }}
          >
            <Smartphone size={18} color="var(--accent)" strokeWidth={1.5} />
            Mobile Contact
          </a>

          {/* Email Icon */}
          <a 
            href="mailto:info@gabriellechasemedia.com"
            className="footer-contact-item"
            style={{
              color: 'var(--text-muted)',
              fontSize: '1.05rem',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              textDecoration: 'none'
            }}
          >
            <Mail size={18} color="var(--accent)" strokeWidth={1.5} />
            info@gabriellechasemedia.com
          </a>

          {/* Instagram Link */}
          <a 
            href="https://www.instagram.com/gabriellechasemedia" 
            target="_blank" 
            rel="noopener noreferrer"
            className="footer-contact-item"
            style={{
              color: 'var(--text-muted)',
              fontSize: '1.05rem',
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
        paddingTop: '2.5rem',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '1rem'
      }}>
        <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem', letterSpacing: '0.05em' }}>
          © {new Date().getFullYear()} GABRIELLE CHASE MEDIA. ALL RIGHTS RESERVED.
        </p>
        <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem', letterSpacing: '0.05em' }}>
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
