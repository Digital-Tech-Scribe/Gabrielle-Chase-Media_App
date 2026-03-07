import { Link } from 'react-router-dom';
import logoLight from '../assets/GCM-logo_light.png';

const Footer = () => {
  return (
    <footer style={{
      backgroundColor: 'var(--bg-primary)',
      borderTop: '1px solid var(--border)',
      padding: '4rem 2rem 2rem',
      marginTop: 'auto'
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
            <img src={logoLight} alt="Gabrielle Chase Media" style={{ height: '40px', width: 'auto' }} />
          </Link>
          <p style={{ 
            color: 'var(--text-muted)', 
            fontSize: '0.9rem',
            maxWidth: '300px'
          }}>
            Content Production & Art Direction · Los Angeles, CA
          </p>
        </div>

        {/* Middle Column - Nav Links */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <h4 style={{ 
            color: 'var(--text-primary)', 
            fontSize: '1rem',
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            marginBottom: '0.5rem'
          }}>
            Explore
          </h4>
          {['Home', 'Work', 'Services', 'About', 'Connect'].map((item) => (
            <Link 
              key={item} 
              to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
              style={{
                color: 'var(--text-muted)',
                fontSize: '0.95rem',
                textDecoration: 'none',
                width: 'fit-content'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Right Column - Socials */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <h4 style={{ 
            color: 'var(--text-primary)', 
            fontSize: '1rem',
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            marginBottom: '0.5rem'
          }}>
            Follow
          </h4>
          <a 
            href="https://www.instagram.com/gabriellechasemedia" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{
              color: 'var(--text-muted)',
              fontSize: '0.95rem'
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
          >
            Instagram
          </a>
          <a 
            href="mailto:hello@gabriellechasemedia.com"
            style={{
              color: 'var(--text-muted)',
              fontSize: '0.95rem'
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
          >
            Email Us
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        paddingTop: '2rem',
        borderTop: '1px solid var(--border)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '1rem'
      }}>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>
          © {new Date().getFullYear()} Gabrielle Chase Media. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
