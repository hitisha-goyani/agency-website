import { useRef, useEffect, useState } from 'react';

const TEAM = [
  { name:'Alex Rivera',   role:'CEO & Founder',       avatar:'https://i.pravatar.cc/200?img=65', socials:['linkedin','twitter','github'] },
  { name:'Priya Sharma',  role:'Creative Director',   avatar:'https://i.pravatar.cc/200?img=47', socials:['linkedin','twitter','dribbble'] },
  { name:'Marcus Webb',   role:'Head of Strategy',    avatar:'https://i.pravatar.cc/200?img=68', socials:['linkedin','twitter'] },
  { name:'Amara Diallo',  role:'Lead Developer',      avatar:'https://i.pravatar.cc/200?img=44', socials:['github','linkedin','twitter'] },
];

const SOCIAL_ICONS = {
  linkedin: 'in',
  twitter:  '𝕏',
  github:   '⌥',
  dribbble: '◉',
};

function TeamCard({ member, delay }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} style={{
      background:'#fff', borderRadius:16, overflow:'hidden',
      border:'1px solid var(--border)',
      textAlign:'center',
      boxShadow:'0 2px 14px rgba(0,0,0,0.06)',
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateY(0)' : 'translateY(28px)',
      transitionDelay: delay,
      transitionProperty:'opacity,transform',
      transitionDuration:'0.6s',
      transition:'all 0.3s',
      position:'relative',
      group: true,
    }}
    onMouseEnter={e => { e.currentTarget.style.transform='translateY(-6px)'; e.currentTarget.style.boxShadow='0 16px 48px rgba(108,60,225,0.14)'; e.currentTarget.querySelector('.overlay').style.opacity='1'; }}
    onMouseLeave={e => { e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.boxShadow='0 2px 14px rgba(0,0,0,0.06)'; e.currentTarget.querySelector('.overlay').style.opacity='0'; }}
    >
      <div style={{ position:'relative', overflow:'hidden', height:220 }}>
        <img src={member.avatar} alt={member.name} style={{ width:'100%', height:'100%', objectFit:'cover', transition:'transform 0.5s' }} />
        {/* Social overlay */}
        <div className="overlay" style={{
          position:'absolute', inset:0,
          background:'linear-gradient(to top, rgba(108,60,225,0.88), rgba(108,60,225,0.3))',
          display:'flex', alignItems:'flex-end', justifyContent:'center', gap:10, padding:'20px',
          opacity:0, transition:'opacity 0.3s',
        }}>
          {member.socials.map(s => (
            <a key={s} href="#" style={{
              width:36, height:36, borderRadius:8,
              background:'rgba(255,255,255,0.2)', backdropFilter:'blur(6px)',
              color:'#fff', display:'flex', alignItems:'center', justifyContent:'center',
              fontSize:14, fontWeight:700, border:'1px solid rgba(255,255,255,0.3)',
              transition:'background 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.background='rgba(255,255,255,0.4)'}
            onMouseLeave={e => e.currentTarget.style.background='rgba(255,255,255,0.2)'}
            >{SOCIAL_ICONS[s]}</a>
          ))}
        </div>
      </div>
      <div style={{ padding:'18px 16px 20px' }}>
        <h3 style={{ fontFamily:'var(--font-display)', fontWeight:800, fontSize:'1rem', marginBottom:4 }}>{member.name}</h3>
        <div style={{ color:'var(--purple)', fontSize:12.5, fontWeight:600 }}>{member.role}</div>
      </div>
    </div>
  );
}

export default function Team() {
  return (
    <section id="team" style={{ padding:'90px 0', background:'var(--section-bg)' }}>
      <div className="container">
        <div style={{ textAlign:'center', marginBottom:56 }}>
          <span className="section-label" style={{ justifyContent:'center' }}>OUR TEAM</span>
          <h2 className="section-title">Meet the Experts Behind Your Growth</h2>
          <p style={{ color:'var(--text-body)', maxWidth:440, margin:'0 auto', fontSize:14.5 }}>
            A passionate team of strategists, creatives, and technologists working together for your success.
          </p>
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(220px, 1fr))', gap:24 }}>
          {TEAM.map((m, i) => <TeamCard key={m.name} member={m} delay={`${i * 0.1}s`} />)}
        </div>
      </div>
    </section>
  );
}
