import { useState, useEffect, useRef } from 'react';

const TESTIMONIALS = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, TechVenture',
    avatar: 'https://i.pravatar.cc/80?img=47',
    rating: 5,
    text: 'Working with this agency transformed our digital presence completely. Our organic traffic tripled within 6 months and conversion rates are through the roof. Absolutely phenomenal team!',
  },
  {
    name: 'Marcus Chen',
    role: 'Founder, GrowthLab',
    avatar: 'https://i.pravatar.cc/80?img=68',
    rating: 5,
    text: 'The strategy they built for us was unlike anything we\'d seen before. Creative, data-backed, and executed flawlessly. We saw 240% growth in Q3 alone.',
  },
  {
    name: 'Amara Okafor',
    role: 'CMO, Nexus Media',
    avatar: 'https://i.pravatar.cc/80?img=44',
    rating: 5,
    text: 'Their team understood our brand vision immediately. The rebrand was stunning and the campaigns they run consistently exceed KPIs. Couldn\'t recommend more highly.',
  },
];

function Stars({ count }) {
  return (
    <div style={{ display:'flex', gap:3, marginBottom:14 }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} style={{ color: i < count ? '#fbbf24' : '#ddd', fontSize:16 }}>★</span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const t = setInterval(() => setCurrent(c => (c + 1) % TESTIMONIALS.length), 5000);
    return () => clearInterval(t);
  }, []);

  const t = TESTIMONIALS[current];

  return (
    <section ref={ref} style={{ padding:'90px 0', background:'var(--section-bg)', overflow:'hidden' }}>
      <div className="container">
        <div style={{ textAlign:'center', marginBottom:56 }}>
          <span className="section-label" style={{ justifyContent:'center' }}>TESTIMONIALS</span>
          <h2 className="section-title">What Our Clients Say</h2>
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(300px, 1fr))', gap:24 }}>
          {TESTIMONIALS.map((t, i) => (
            <div key={t.name} style={{
              background:'#fff', borderRadius:16, padding:'28px 28px 24px',
              border: i === current ? '2px solid var(--purple)' : '1px solid var(--border)',
              boxShadow: i === current ? '0 12px 40px rgba(108,60,225,0.14)' : '0 2px 12px rgba(0,0,0,0.06)',
              transition:'all 0.4s ease',
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(30px)',
              transitionDelay: `${i * 0.1}s`,
              transitionProperty:'opacity,transform,border,box-shadow',
              transitionDuration:'0.6s',
            }}>
              {/* Quote */}
              <div style={{ fontSize:48, color:'var(--purple)', lineHeight:1, marginBottom:8, fontFamily:'Georgia, serif', opacity:0.25 }}>"</div>
              <Stars count={t.rating} />
              <p style={{ color:'var(--text-body)', fontSize:14, lineHeight:1.75, marginBottom:24, fontStyle:'italic' }}>"{t.text}"</p>
              {/* Author */}
              <div style={{ display:'flex', alignItems:'center', gap:12, borderTop:'1px solid var(--border)', paddingTop:16 }}>
                <img src={t.avatar} alt={t.name} style={{ width:46, height:46, borderRadius:'50%', objectFit:'cover', border:'2px solid var(--purple-bg)' }} />
                <div>
                  <div style={{ fontWeight:700, fontSize:14, color:'var(--text-dark)' }}>{t.name}</div>
                  <div style={{ fontSize:12, color:'var(--text-light)' }}>{t.role}</div>
                </div>
                {i === current && (
                  <div style={{ marginLeft:'auto', background:'var(--purple)', color:'#fff', borderRadius:20, padding:'3px 10px', fontSize:11, fontWeight:600 }}>Featured</div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div style={{ display:'flex', justifyContent:'center', gap:8, marginTop:32 }}>
          {TESTIMONIALS.map((_, i) => (
            <button key={i} onClick={() => setCurrent(i)} style={{
              width: i === current ? 24 : 8, height:8, borderRadius:4, border:'none',
              background: i === current ? 'var(--purple)' : 'var(--border)',
              transition:'all 0.3s', cursor:'pointer',
            }} aria-label={`Testimonial ${i+1}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
