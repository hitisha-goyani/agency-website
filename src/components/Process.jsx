import { useRef, useEffect, useState } from 'react';

const STEPS = [
  { num:'01', title:'Discovery',    icon:'🔍', desc:'We dive deep into your business, audience, and goals to build a clear strategic foundation.' },
  { num:'02', title:'Strategy',     icon:'🗺', desc:'A bespoke roadmap is crafted that aligns creative vision with measurable business outcomes.' },
  { num:'03', title:'Execution',    icon:'⚙️', desc:'Our specialist teams bring the strategy to life with precision, speed, and quality.' },
  { num:'04', title:'Optimisation', icon:'📊', desc:'We measure, learn, and iterate continuously to maximise performance and ROI.' },
];

export default function Process() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="process" ref={ref} style={{ padding:'90px 0', background:'#fff' }}>
      <div className="container">
        <div style={{ textAlign:'center', marginBottom:56 }}>
          <span className="section-label" style={{ justifyContent:'center' }}>HOW WE WORK</span>
          <h2 className="section-title">Our Simple 4-Step Process</h2>
          <p style={{ color:'var(--text-body)', maxWidth:460, margin:'0 auto', fontSize:14.5 }}>
            A clear, transparent process that keeps you informed and in control at every step.
          </p>
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(220px, 1fr))', gap:28, position:'relative' }}>
          {/* Connecting line (desktop only) */}
          <div style={{
            position:'absolute', top:44, left:'12.5%', right:'12.5%', height:2,
            background:'linear-gradient(90deg,var(--purple),#b388ff)',
            zIndex:0, opacity:0.25,
          }} />

          {STEPS.map((step, i) => (
            <div key={step.num} style={{
              textAlign:'center', position:'relative', zIndex:1,
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(30px)',
              transition: `opacity 0.6s ease ${i * 0.12}s, transform 0.6s ease ${i * 0.12}s`,
            }}>
              {/* Circle */}
              <div style={{
                width:88, height:88, borderRadius:'50%', margin:'0 auto 20px',
                background:'linear-gradient(135deg,#6c3ce1,#9c6dff)',
                display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center',
                boxShadow:'0 8px 28px rgba(108,60,225,0.35)',
                color:'#fff',
              }}>
                <span style={{ fontSize:24 }}>{step.icon}</span>
                <span style={{ fontSize:10, fontWeight:700, letterSpacing:'0.08em', opacity:0.8 }}>{step.num}</span>
              </div>
              <h3 style={{ fontFamily:'var(--font-display)', fontWeight:800, fontSize:'1.1rem', marginBottom:10 }}>{step.title}</h3>
              <p style={{ color:'var(--text-body)', fontSize:13.5, lineHeight:1.65 }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
