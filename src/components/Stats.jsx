import { useEffect, useRef, useState } from 'react';

const STATS = [
  { value: 850,  suffix: '+', label: 'Projects Completed' },
  { value: 240,  suffix: '+', label: 'Happy Clients'      },
  { value: 15,   suffix: '',  label: 'Years Experience'   },
  { value: 98,   suffix: '%', label: 'Client Satisfaction'},
];

function useCountUp(target, started) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!started) return;
    let start = 0;
    const step = Math.ceil(target / 60);
    const t = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(t); }
      else setCount(start);
    }, 24);
    return () => clearInterval(t);
  }, [target, started]);
  return count;
}

function StatItem({ value, suffix, label, started }) {
  const count = useCountUp(value, started);
  return (
    <div style={{ textAlign:'center', padding:'0 16px' }}>
      <div style={{ fontFamily:'var(--font-display)', fontSize:'clamp(2rem,4vw,2.8rem)', fontWeight:900, color:'#fff', lineHeight:1 }}>
        {count}{suffix}
      </div>
      <div style={{ color:'rgba(255,255,255,0.65)', fontSize:13, marginTop:6, fontWeight:500 }}>{label}</div>
    </div>
  );
}

export default function Stats() {
  const ref = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setStarted(true); obs.disconnect(); } }, { threshold: 0.4 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} style={{ background:'linear-gradient(120deg,#4a1fa8,#6c3ce1)', padding:'52px 0' }}>
      <div className="container">
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(160px, 1fr))', gap:24 }}>
          {STATS.map(s => <StatItem key={s.label} {...s} started={started} />)}
        </div>
      </div>
    </section>
  );
}
