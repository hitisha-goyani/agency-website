import { useRef, useEffect, useState } from 'react';

const FEATURES = [
  { icon: '🚀', title: 'Growth-Focused',  desc: 'Every strategy is designed with measurable outcomes and scalable growth at its core.' },
  { icon: '🎯', title: 'Data-Driven',     desc: 'We use analytics and insights to make smart decisions that maximise your ROI.' },
  { icon: '💡', title: 'Creative First',  desc: 'Bold ideas backed by rigorous research to differentiate your brand in the market.' },
  { icon: '🔒', title: 'Trusted Partner', desc: 'Transparent communication and accountability at every stage of the project.' },
];

export default function About() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold: 0.15 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="about" ref={ref} style={{ padding:'90px 0', background:'var(--section-bg)' }}>
      <div className="container">
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:64, alignItems:'center' }}>

          {/* Left: image collage */}
          <div style={{
            position:'relative', minHeight:460,
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateX(0)' : 'translateX(-40px)',
            transition: 'opacity 0.7s ease, transform 0.7s ease',
          }}>
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80&auto=format&fit=crop"
              alt="Team working"
              style={{ width:'78%', borderRadius:16, boxShadow:'0 20px 60px rgba(0,0,0,0.15)', position:'relative', zIndex:1 }}
            />
            {/* Floating second image */}
            <img
              src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=400&q=80&auto=format&fit=crop"
              alt="Team meeting"
              style={{
                width:'52%', borderRadius:12,
                boxShadow:'0 16px 48px rgba(108,60,225,0.2)',
                position:'absolute', bottom:0, right:0,
                border:'4px solid #fff', zIndex:2,
              }}
            />
            {/* Experience badge */}
            <div style={{
              position:'absolute', top:24, right:16, zIndex:3,
              background:'linear-gradient(135deg,#6c3ce1,#9c6dff)',
              borderRadius:14, padding:'16px 20px', textAlign:'center',
              boxShadow:'0 8px 28px rgba(108,60,225,0.45)',
              color:'#fff',
            }}>
              <div style={{ fontFamily:'var(--font-display)', fontSize:'2.2rem', fontWeight:900, lineHeight:1 }}>15+</div>
              <div style={{ fontSize:11, fontWeight:600, letterSpacing:'0.06em', opacity:0.85, marginTop:4 }}>Years of<br/>Experience</div>
            </div>
          </div>

          {/* Right: content */}
          <div style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateX(0)' : 'translateX(40px)',
            transition: 'opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s',
          }}>
            <span className="section-label">About Us</span>
            <h2 className="section-title">We Offer Best Creatives IT Solutions &amp; Consulting Firm</h2>
            <p style={{ color:'var(--text-body)', fontSize:14.5, lineHeight:1.75, marginBottom:28 }}>
              Business is a marketing discipline focused on growing visibility in organic (non-paid) search engine results. It encompasses both the technical and creative elements required to improve rankings, drive traffic, and increase awareness.
            </p>
            <p style={{ color:'var(--text-body)', fontSize:14.5, lineHeight:1.75, marginBottom:36 }}>
              We bring together strategy, design, and technology to help brands grow with clarity and confidence. From startups to Fortune 500 companies, we've helped hundreds of businesses achieve their goals.
            </p>

            {/* Feature grid */}
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:18, marginBottom:36 }}>
              {FEATURES.map(f => (
                <div key={f.title} style={{ display:'flex', gap:12, alignItems:'flex-start' }}>
                  <div style={{
                    width:38, height:38, borderRadius:8, flexShrink:0,
                    background:'var(--purple-bg)',
                    display:'flex', alignItems:'center', justifyContent:'center', fontSize:18,
                  }}>{f.icon}</div>
                  <div>
                    <div style={{ fontWeight:700, fontSize:13.5, color:'var(--text-dark)', marginBottom:3 }}>{f.title}</div>
                    <div style={{ fontSize:12.5, color:'var(--text-body)', lineHeight:1.55 }}>{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <a href="#contact" className="btn-primary">Discover More →</a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #about .container > div { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
}
