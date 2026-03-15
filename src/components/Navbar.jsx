import { useState, useEffect } from 'react';

const NAV_LINKS = [
  { label: 'Home',     href: '#home',     dropdown: ['Landing', 'Portfolio', 'Agency'] },
  { label: 'About Us', href: '#about',    dropdown: ['Our Story', 'Team', 'Mission'] },
  { label: 'Service',  href: '#services', dropdown: ['Digital Marketing', 'SEO', 'Branding'] },
  { label: 'Blog',     href: '#blog',     dropdown: ['Latest Posts', 'Case Studies'] },
  { label: 'Pages',    href: '#',         dropdown: ['FAQ', 'Pricing', 'Testimonials'] },
];

export default function Navbar() {
  const [scrolled, setScrolled]       = useState(false);
  const [mobileOpen, setMobileOpen]   = useState(false);
  const [activeDD, setActiveDD]       = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const close = () => setActiveDD(null);
    document.addEventListener('click', close);
    return () => document.removeEventListener('click', close);
  }, []);

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 900,
        background: scrolled ? 'rgba(255,255,255,0.97)' : 'transparent',
        boxShadow: scrolled ? '0 2px 24px rgba(0,0,0,0.09)' : 'none',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        transition: 'all 0.35s ease',
      }}>
        <div className="container" style={{ display:'flex', alignItems:'center', justifyContent:'space-between', height: 72 }}>
          {/* Logo */}
          <a href="#home" style={{ display:'flex', alignItems:'center', gap: 10 }}>
            <div style={{
              width: 38, height: 38, borderRadius: '50%',
              background: 'linear-gradient(135deg, #6c3ce1, #9c6dff)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 4px 14px rgba(108,60,225,0.4)',
            }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" fill="white"/>
              </svg>
            </div>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 22, color: scrolled ? 'var(--text-dark)' : '#fff' }}>
              Agency
            </span>
          </a>

          {/* Desktop Nav */}
          <div style={{ display:'flex', alignItems:'center', gap: 6 }} className="desktop-nav">
            {NAV_LINKS.map((link) => (
              <div
                key={link.label}
                style={{ position: 'relative' }}
                onClick={(e) => { e.stopPropagation(); setActiveDD(activeDD === link.label ? null : link.label); }}
              >
                <button style={{
                  background: 'none',
                  color: scrolled ? 'var(--text-dark)' : 'rgba(255,255,255,0.92)',
                  fontWeight: 600, fontSize: 14,
                  padding: '8px 14px', borderRadius: 6,
                  display: 'flex', alignItems: 'center', gap: 4,
                  transition: 'color 0.2s, background 0.2s',
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--purple-light)'}
                onMouseLeave={(e) => e.currentTarget.style.color = scrolled ? 'var(--text-dark)' : 'rgba(255,255,255,0.92)'}
                >
                  {link.label}
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                    <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                  </svg>
                </button>

                {/* Dropdown */}
                {activeDD === link.label && (
                  <div style={{
                    position: 'absolute', top: '110%', left: 0,
                    background: '#fff', borderRadius: 10,
                    boxShadow: '0 12px 40px rgba(0,0,0,0.14)',
                    minWidth: 180, padding: '8px 0',
                    animation: 'fadeUp 0.2s ease both',
                    border: '1px solid var(--border)',
                  }}>
                    {link.dropdown.map((item) => (
                      <a key={item} href="#" style={{
                        display: 'block', padding: '10px 18px',
                        color: 'var(--text-body)', fontSize: 13, fontWeight: 500,
                        transition: 'all 0.15s',
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--purple)'; e.currentTarget.style.paddingLeft = '24px'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-body)'; e.currentTarget.style.paddingLeft = '18px'; }}
                      >{item}</a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <a href="#contact" className="btn-primary" style={{ marginLeft: 10, padding: '10px 22px', borderRadius: 6 }}>
              Contact Us
            </a>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMobileOpen(true)}
            className="hamburger"
            style={{ background:'none', color: scrolled ? 'var(--text-dark)' : '#fff', padding: 8 }}
            aria-label="Open menu"
          >
            <svg width="26" height="26" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/>
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="mobile-menu">
          <button
            onClick={() => setMobileOpen(false)}
            style={{ position:'absolute', top:24, right:24, background:'none', color:'#fff', fontSize:28 }}
          >✕</button>
          {NAV_LINKS.map(l => <a key={l.label} href={l.href} onClick={() => setMobileOpen(false)}>{l.label}</a>)}
          <a href="#contact" className="btn-primary" onClick={() => setMobileOpen(false)}>Contact Us</a>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) { .desktop-nav { display: none !important; } }
        @media (min-width: 901px) { .hamburger { display: none !important; } }
      `}</style>
    </>
  );
}
