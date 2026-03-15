import { useState, useEffect, useCallback } from 'react';

const SLIDES = [
  {
    tag: 'Digital Marketing Agency',
    title: 'We Believe In\nCreativity',
    desc: 'We craft bold digital strategies that drive growth, spark engagement, and build brands that people truly remember.',
    cta: 'Contact Us',
    ctaSecondary: 'Our Services',
    gradient: 'linear-gradient(120deg, #4a1fa8 0%, #6c3ce1 50%, #9b5de5 100%)',
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80&auto=format&fit=crop',
  },
  {
    tag: 'Creative Solutions',
    title: 'Grow Your\nBusiness Fast',
    desc: 'Data-driven marketing solutions tailored to amplify your reach, convert leads, and scale revenue efficiently.',
    cta: 'Get Started',
    ctaSecondary: 'Learn More',
    gradient: 'linear-gradient(120deg, #1a1a6e 0%, #3a0ca3 50%, #560bad 100%)',
    img: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80&auto=format&fit=crop',
  },
  {
    tag: 'Expert Team',
    title: 'Strategy That\nDelivers Results',
    desc: 'Our team of specialists combines creativity with analytics to produce campaigns that exceed expectations every time.',
    cta: 'Meet Our Team',
    ctaSecondary: 'Case Studies',
    gradient: 'linear-gradient(120deg, #2d0067 0%, #6c3ce1 60%, #b388ff 100%)',
    img: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80&auto=format&fit=crop',
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [animKey, setAnimKey] = useState(0);

  const go = useCallback((idx) => {
    setCurrent((idx + SLIDES.length) % SLIDES.length);
    setAnimKey(k => k + 1);
  }, []);

  useEffect(() => {
    const t = setInterval(() => go(current + 1), 5500);
    return () => clearInterval(t);
  }, [current, go]);

  const slide = SLIDES[current];

  return (
    <section id="home" style={{ position: 'relative', minHeight: '100vh', display: 'flex', overflow: 'hidden' }}>
      {/* Left purple panel */}
      <div style={{
        position: 'absolute', inset: 0,
        background: slide.gradient,
        clipPath: 'polygon(0 0, 55% 0, 48% 100%, 0 100%)',
        transition: 'background 0.8s ease',
        zIndex: 1,
      }} />

      {/* Background image (right side) */}
      <div style={{ position:'absolute', inset:0, zIndex:0 }}>
        <img
          key={animKey}
          src={slide.img}
          alt=""
          style={{
            width:'100%', height:'100%', objectFit:'cover', objectPosition:'center top',
            animation: 'fadeIn 0.8s ease both',
          }}
        />
        <div style={{ position:'absolute', inset:0, background:'rgba(10,5,30,0.25)' }} />
      </div>

      {/* Content */}
      <div className="container" style={{
        position: 'relative', zIndex: 2,
        display: 'flex', alignItems: 'center',
        paddingTop: 100, paddingBottom: 60,
        minHeight: '100vh',
      }}>
        <div style={{ maxWidth: 520 }} key={animKey}>
          {/* Tag */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)',
            borderRadius: 30, padding: '6px 16px', marginBottom: 24,
            animation: 'fadeUp 0.5s ease both',
          }}>
            <span style={{ width:8, height:8, borderRadius:'50%', background:'#fbbf24', display:'block', animation: 'pulse 2s infinite' }} />
            <span style={{ color:'#fff', fontSize:12, fontWeight:600, letterSpacing:'0.1em' }}>{slide.tag}</span>
          </div>

          {/* Title */}
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.4rem, 6vw, 4.2rem)',
            fontWeight: 900,
            color: '#fff',
            lineHeight: 1.1,
            marginBottom: 20,
            whiteSpace: 'pre-line',
            animation: 'slideRight 0.6s ease both 0.1s',
            textShadow: '0 2px 20px rgba(0,0,0,0.3)',
          }}>{slide.title}</h1>

          {/* Desc */}
          <p style={{
            color: 'rgba(255,255,255,0.82)',
            fontSize: 15, lineHeight: 1.7,
            marginBottom: 36,
            maxWidth: 420,
            animation: 'fadeUp 0.6s ease both 0.2s',
          }}>{slide.desc}</p>

          {/* CTAs */}
          <div style={{ display:'flex', gap:14, flexWrap:'wrap', animation:'fadeUp 0.6s ease both 0.3s' }}>
            <a href="#contact" className="btn-primary">{slide.cta}</a>
            <a href="#services" className="btn-outline">{slide.ctaSecondary}</a>
          </div>
        </div>
      </div>

      {/* Arrows */}
      <NavArrow dir="left"  onClick={() => go(current - 1)} />
      <NavArrow dir="right" onClick={() => go(current + 1)} />

      {/* Dots */}
      <div style={{
        position:'absolute', bottom:28, left:'50%', transform:'translateX(-50%)',
        display:'flex', gap:8, zIndex:3,
      }}>
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => go(i)}
            style={{
              width: i === current ? 28 : 8, height: 8,
              borderRadius: 4, border:'none',
              background: i === current ? '#fff' : 'rgba(255,255,255,0.4)',
              transition: 'all 0.3s',
              cursor: 'pointer',
            }}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <div style={{
        position:'absolute', bottom:28, right:32, zIndex:3,
        display:'flex', flexDirection:'column', alignItems:'center', gap:6,
        color:'rgba(255,255,255,0.5)', fontSize:10, letterSpacing:'0.1em',
      }}>
        <span>SCROLL</span>
        <div style={{ width:1, height:40, background:'rgba(255,255,255,0.3)', animation:'scrollLine 1.5s ease infinite' }} />
      </div>

      <style>{`
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }
        @keyframes scrollLine { 0%{transform:scaleY(0);transform-origin:top} 50%{transform:scaleY(1);transform-origin:top} 51%{transform:scaleY(1);transform-origin:bottom} 100%{transform:scaleY(0);transform-origin:bottom} }
      `}</style>
    </section>
  );
}

function NavArrow({ dir, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        position:'absolute', top:'50%', transform:'translateY(-50%)',
        [dir === 'left' ? 'left' : 'right']: 20,
        zIndex:3,
        width:44, height:44, borderRadius:'50%',
        background:'rgba(255,255,255,0.15)', backdropFilter:'blur(8px)',
        border:'1px solid rgba(255,255,255,0.25)',
        color:'#fff', fontSize:18,
        display:'flex', alignItems:'center', justifyContent:'center',
        transition:'all 0.25s',
      }}
      onMouseEnter={e => { e.currentTarget.style.background='rgba(108,60,225,0.8)'; e.currentTarget.style.borderColor='transparent'; }}
      onMouseLeave={e => { e.currentTarget.style.background='rgba(255,255,255,0.15)'; e.currentTarget.style.borderColor='rgba(255,255,255,0.25)'; }}
      aria-label={dir === 'left' ? 'Previous slide' : 'Next slide'}
    >
      {dir === 'left' ? '‹' : '›'}
    </button>
  );
}
