import { Link } from 'react-router-dom';
import { logoLight } from '../assets/data';

const Footer = () => {
  return (
    <footer style={{
      backgroundColor: '#0D0D0D', // BRAND COLOR
      borderTop: '1px solid rgba(245,240,235,0.1)',
      padding: '4rem 2rem 2rem',
      marginTop: 'auto',
      fontFamily: '"DM Sans", sans-serif'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '3rem',
        marginBottom: '4rem'
      }}>
        
        {/* Left Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <Link to="/" style={{ display: 'block', width: 'fit-content' }}>
            <img src={logoLight} alt="Gabrielle Chase Media" style={{ height: '100px', width: 'auto' }} />
          </Link>
          <p style={{ 
            color: 'var(--text-muted)', 
            fontSize: '0.9rem',
            maxWidth: '300px',
            lineHeight: 1.6
          }}>
            Award-Winning Art Direction & Content Production Studio · Lagos, Nigeria
          </p>
        </div>

        {/* Middle Column - Nav Links */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <h4 style={{ 
            color: 'var(--accent)', 
            fontSize: '1rem',
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            marginBottom: '0.5rem'
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
              style={{
                color: 'var(--text-muted)',
                fontSize: '0.95rem',
                textDecoration: 'none',
                width: 'fit-content',
                transition: 'color 0.3s ease'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-light)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Right Column - Socials */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <h4 style={{ 
            color: 'var(--accent)', 
            fontSize: '1rem',
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            marginBottom: '0.5rem'
          }}>
            Contact
          </h4>
          <a 
            href="https://www.instagram.com/gabriellechasemedia" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{
              color: 'var(--text-muted)',
              fontSize: '0.95rem',
              transition: 'color 0.3s ease'
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-light)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
          >
            Instagram
          </a>
          <a 
            href="mailto:info@gabriellechasemedia.com"
            style={{
              color: 'var(--text-muted)',
              fontSize: '0.95rem',
              transition: 'color 0.3s ease'
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-light)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
          >
            info@gabriellechasemedia.com
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        paddingTop: '2rem',
        borderTop: '1px solid rgba(245,240,235,0.1)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '1rem'
      }}>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>
          © {new Date().getFullYear()} Gabrielle Chase Media Limited. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
