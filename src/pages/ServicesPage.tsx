import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ScrollFadeIn from '../components/ScrollFadeIn';
import { services } from '../assets/data';
import '../index.css';

const ServicesPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="app-container" style={{ paddingTop: '8rem', backgroundColor: 'var(--bg-primary)' }}>
      {/* 1. Services Header */}
      <section className="section" style={{ paddingBottom: '4rem' }}>
        <div className="container">
          <ScrollFadeIn>
            <h3 style={{ color: 'var(--accent)', fontSize: '0.85rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
              What We Do
            </h3>
            <h1 style={{ marginBottom: '2rem', maxWidth: '900px', fontSize: 'clamp(3rem, 6vw, 6rem)' }}>
              Crafting <span className="text-gold">visual excellence</span> across disciplines.
            </h1>
            <p style={{ 
              color: 'var(--text-muted)', 
              fontSize: 'clamp(1rem, 1.5vw, 1.25rem)', 
              maxWidth: '600px',
              fontFamily: 'var(--font-heading)',
              letterSpacing: '0.05em'
            }}>
              From epic period piece film sets to high-end commercial photo shoots, our multi-disciplinary approach ensures every detail tells the right story.
            </p>
          </ScrollFadeIn>
        </div>
      </section>

      {/* 2. Full-Width Service Sections */}
      {services.map((service, index) => {
        const isEven = index % 2 === 0;

        return (
          <section 
            key={service.id} 
            style={{ 
              backgroundColor: isEven ? 'var(--bg-primary)' : 'var(--bg-tertiary)',
              borderTop: isEven ? 'none' : '1px solid var(--border)',
              borderBottom: isEven ? 'none' : '1px solid var(--border)',
            }}
            className="section"
          >
            <div className="container">
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                gap: 'clamp(3rem, 8vw, 6rem)',
                alignItems: 'center'
              }}>
                
                {/* Image Side (Alternating on Desktop) */}
                <div style={{ order: isEven ? 1 : 2 }}>
                  <ScrollFadeIn direction={isEven ? 'right' : 'left'}>
                    <div style={{ 
                      position: 'relative', 
                      width: '100%', 
                      aspectRatio: '4/5',
                      overflow: 'hidden'
                    }}>
                      {service.video ? (
                        <video 
                          autoPlay 
                          muted 
                          loop 
                          playsInline
                          aria-label={`${service.name} showcase video`}
                          className="cinematic-filter"
                          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        >
                          <source src={service.video} type="video/mp4" />
                        </video>
                      ) : (
                        <img 
                          src={service.image} 
                          alt={service.name} 
                          className="cinematic-filter"
                          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                      )}
                      
                      {/* Subtle border overlay */}
                      <div style={{ 
                        position: 'absolute', 
                        inset: 0, 
                        border: '1px solid var(--border-gold)', 
                        margin: '1.5rem', 
                        pointerEvents: 'none' 
                      }} />
                    </div>
                  </ScrollFadeIn>
                </div>

                {/* Content Side */}
                <div style={{ order: isEven ? 2 : 1 }}>
                  <ScrollFadeIn direction={isEven ? 'left' : 'right'}>
                    <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>
                      {service.icon}
                    </div>
                    
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                      <span style={{ color: 'var(--accent)', fontSize: '0.9rem', fontFamily: 'var(--font-heading)', letterSpacing: '0.1em' }}>
                        0{index + 1}
                      </span>
                      <h2 style={{ margin: 0 }}>{service.name}</h2>
                    </div>
                    
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem', marginBottom: '3rem', maxWidth: '500px' }}>
                      {service.description}
                    </p>

                    <div style={{ marginBottom: '3rem' }}>
                      <h4 style={{ color: 'var(--text-primary)', fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
                        Deliverables
                      </h4>
                      <ul style={{ listStyle: 'none', padding: 0 }}>
                        {service.deliverables.map((item, i) => (
                          <li key={i} style={{ 
                            color: 'var(--text-muted)', 
                            padding: '0.8rem 0',
                            borderBottom: '1px solid var(--border)',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1rem'
                          }}>
                            <span style={{ color: 'var(--accent)', fontSize: '0.5rem' }}>◆</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <button 
                      onClick={() => navigate('/contact')} 
                      className="cta-outline cursor-hover"
                    >
                      Request Service
                    </button>
                  </ScrollFadeIn>
                </div>

              </div>
            </div>
          </section>
        );
      })}

    </main>
  );
};

export default ServicesPage;
