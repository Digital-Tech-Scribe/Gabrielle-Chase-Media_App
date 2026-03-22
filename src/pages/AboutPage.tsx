import { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import ScrollFadeIn from '../components/ScrollFadeIn';
import { teamMembers, milestones, logoLight, awards } from '../assets/data';

const AboutPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="app-container" style={{ paddingTop: '8rem', backgroundColor: 'var(--bg-primary)' }}>
      {/* 1. Hero Teaser Section */}
      <section className="section" style={{ paddingBottom: '4rem' }}>
        <div className="container">
          <ScrollFadeIn>
            <h1 style={{ marginBottom: '2rem', maxWidth: '800px', fontSize: 'clamp(3rem, 6vw, 6rem)' }}>
              Built for the <br />
              <span className="text-gold">cinematic eye.</span>
            </h1>
            <p style={{ 
              color: 'var(--text-muted)', 
              fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', 
              maxWidth: '600px',
              fontFamily: 'var(--font-heading)',
              letterSpacing: '0.02em',
              lineHeight: 1.6
            }}>
              Gabrielle Chase Media Limited is a Nigerian award-winning Art Direction and Content Production studio founded by Abisola Abolaji Omolade.
            </p>
          </ScrollFadeIn>
        </div>
      </section>

      {/* 2. Full Width Editorial Hero Image */}
      <section style={{ width: '100%', height: '70vh', minHeight: '500px', position: 'relative' }}>
        <img 
          src={teamMembers[0].image} 
          alt="Abisola Omolade" 
          className="cinematic-filter"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, var(--bg-primary) 0%, transparent 40%)' }} />
        <div className="container" style={{ position: 'absolute', bottom: '2rem', left: 0, right: 0 }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '0.2rem' }}>Abisola Abolaji Omolade</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Founder / Art Director</p>
        </div>
      </section>

      {/* 3. Our Story & Timeline */}
      <section className="section">
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '6rem' }}>
          
          <ScrollFadeIn>
            <h3 style={{ color: 'var(--accent)', fontSize: '0.85rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
              The Origin
            </h3>
            <div style={{ color: 'var(--text-muted)', fontSize: '1.1rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <p>
                From screenwriting at Met Film School in the UK to mastering the business and art of television at the London Film School, Abisola's journey has always been about storytelling.
              </p>
              <p>
                Founded in Lagos, Nigeria, Gabrielle Chase Media was born out of a desire to elevate the visual narrative of African cinema. We don't just dress sets; we build worlds that resonate with authenticity and artistic excellence.
              </p>
              <p>
                Our work on groundbreaking projects like Netflix's <em>Blood Sisters</em>, HBO's <em>Eyimofe</em>, and the epic <em>House of GA'A</em> has cemented our reputation as a creative powerhouse, culminating in our AMVCA 10 win for Best Art Director.
              </p>
            </div>
          </ScrollFadeIn>

          <ScrollFadeIn delay={0.2}>
            <div style={{ position: 'relative', paddingLeft: '2rem', borderLeft: '1px solid var(--border)' }}>
              {milestones.map((milestone, i) => (
                <div key={i} style={{ marginBottom: i === milestones.length - 1 ? 0 : '3rem', position: 'relative' }}>
                  <div style={{
                    position: 'absolute',
                    left: '-2.35rem',
                    top: '0.4rem',
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--bg-primary)',
                    border: '2px solid var(--accent)'
                  }} />
                  <div style={{ color: 'var(--accent)', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.1em', marginBottom: '0.5rem' }}>
                    {milestone.year}
                  </div>
                  <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', fontFamily: 'var(--font-heading)' }}>{milestone.title}</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{milestone.description}</p>
                </div>
              ))}
            </div>
          </ScrollFadeIn>

        </div>
      </section>

      {/* 4. The Vision Quote Block */}
      <section style={{ 
        backgroundColor: 'var(--bg-tertiary)', 
        padding: '8rem 0',
        textAlign: 'center',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)'
      }}>
        <div className="container">
          <ScrollFadeIn>
            <img 
              src={logoLight} 
              alt="GCM Logo" 
              style={{ width: '60px', opacity: 0.2, margin: '0 auto 3rem' }} 
            />
            <h2 style={{ 
              color: 'var(--accent)', 
              fontFamily: 'var(--font-heading)', 
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              lineHeight: 1.3,
              maxWidth: '900px',
              margin: '0 auto'
            }}>
              "Every corner, every prop, every shadow must serve the story. If it doesn't speak, it doesn't belong."
            </h2>
          </ScrollFadeIn>
        </div>
      </section>

      {/* 5. Awards & Recognition (Merged from Press) */}
      <section className="section" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <ScrollFadeIn>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <h3 style={{ color: 'var(--accent)', fontSize: '0.85rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1rem' }}>
                Recognition
              </h3>
              <h2>Awards & Press</h2>
            </div>
          </ScrollFadeIn>

          <div style={{ borderTop: '1px solid var(--border)' }}>
            {awards.map((award, i) => (
              <ScrollFadeIn key={award.id} delay={i * 0.05}>
                <div 
                  className="cursor-hover"
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 3fr 2fr 1fr',
                    gap: '2rem',
                    padding: '2.5rem 0',
                    borderBottom: '1px solid var(--border)',
                    alignItems: 'center',
                    transition: 'background-color 0.3s ease',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.02)'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                >
                  <div style={{ color: 'var(--accent)', fontSize: '1.1rem', fontFamily: 'var(--font-heading)' }}>
                    {award.year}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.3rem', marginBottom: '0.3rem', color: 'var(--text-primary)' }}>
                      {award.title}
                    </h3>
                    <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                      {award.category}
                    </div>
                  </div>
                  <div style={{ fontSize: '1.1rem', fontFamily: 'var(--font-heading)', color: 'var(--text-primary)' }}>
                    {award.project}
                  </div>
                  <div style={{ color: 'var(--text-subtle)', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', textAlign: 'right' }}>
                    {award.platform}
                  </div>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 6. The Team */}
      <section className="section">
        <div className="container">
          <ScrollFadeIn>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <h3 style={{ color: 'var(--accent)', fontSize: '0.85rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1rem' }}>
                The Collective
              </h3>
              <h2>Meet The Team</h2>
            </div>
          </ScrollFadeIn>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem' }}>
            {teamMembers.map((member, i) => (
              <ScrollFadeIn key={member.name} delay={i * 0.1}>
                <div style={{ width: '100%', aspectRatio: '3/4', marginBottom: '1.5rem', overflow: 'hidden' }}>
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="cinematic-filter"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.25rem' }}>{member.name}</h3>
                <p style={{ color: 'var(--accent)', fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                  {member.role}
                </p>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 6. As Seen On (Logo Strip text) */}
      <section className="section" style={{ backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h3 style={{ color: 'var(--text-muted)', fontSize: '0.85rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '3rem' }}>
            Trusted by the biggest platforms
          </h3>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: 'clamp(2rem, 6vw, 5rem)', 
            flexWrap: 'wrap',
            alignItems: 'center',
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
            color: 'var(--text-primary)',
            opacity: 0.7
          }}>
            <span>NETFLIX</span>
            <span>SHOWMAX</span>
            <span>HBO</span>
            <span>AMAZON PRIME</span>
            <span>DW TV</span>
          </div>
        </div>
      </section>

      {/* Next Step CTA */}
      <section className="section" style={{ textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ marginBottom: '2rem' }}>Ready to build your world?</h2>
          <button onClick={() => navigate('/contact')} className="cta-gold cursor-hover">
            Start a Project
          </button>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
