import { useRef, useEffect, useState } from 'react';

const SERVICES = [
  {
    icon: '📈',
    title: 'Investment Stock',
    desc: 'We help you build data-driven investment strategies and track portfolio performance with precision analytics tools.',
    img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&q=80&auto=format&fit=crop',
  },
  {
    icon: '🤝',
    title: 'Business Advisory',
    desc: 'Expert consulting services to streamline operations, identify opportunities, and accelerate sustainable business growth.',
    img: 'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=500&q=80&auto=format&fit=crop',
  },
  {
    icon: '🧾',
    title: 'Accounting and Tax',
    desc: 'Comprehensive financial management, tax optimization, and compliance solutions tailored to your business size.',
    img: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=500&q=80&auto=format&fit=crop',
  },
  {
    icon: '📣',
    title: 'Digital Marketing',
    desc: 'Full-funnel digital marketing from SEO to paid media, crafting campaigns that convert browsers into buyers.',
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&q=80&auto=format&fit=crop',
  },
  {
    icon: '🎨',
    title: 'Brand Strategy',
    desc: 'Crafting distinctive brand identities that resonate with your audience and stand out in competitive markets.',
    img: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=500&q=80&auto=format&fit=crop',
  },
  {
    icon: '💻',
    title: 'Web Development',
    desc: 'High-performance, beautifully crafted websites and web apps built for speed, accessibility, and conversions.',
    img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&q=80&auto=format&fit=crop',
  },
];

function ServiceCard({ icon, title, desc, img, delay }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold: 0.15 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <article
      ref={ref}
      style={{
        background:'#fff',
        borderRadius:16,
        overflow:'hidden',
        boxShadow:'0 2px 16px rgba(0,0,0,0.07)',
        border:'1px solid var(--border)',
        transition:'transform 0.3s, box-shadow 0.3s',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(32px)',
        transitionDelay: delay,
        transitionProperty:'opacity, transform, box-shadow',
        transitionDuration:'0.6s',
        cursor:'default',
      }}
      onMouseEnter={e => { e.currentTarget.style.transform='translateY(-6px)'; e.currentTarget.style.boxShadow='0 16px 48px rgba(108,60,225,0.15)'; }}
      onMouseLeave={e => { e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.boxShadow='0 2px 16px rgba(0,0,0,0.07)'; }}
    >
      {/* Image + icon badge */}
      <div style={{ position:'relative', height:200, overflow:'hidden' }}>
        <img src={img} alt={title} style={{ width:'100%', height:'100%', objectFit:'cover', transition:'transform 0.5s' }}
          onMouseEnter={e => e.target.style.transform='scale(1.06)'}
          onMouseLeave={e => e.target.style.transform='scale(1)'}
        />
        <div style={{
          position:'absolute', top:14, left:14,
          width:44, height:44, borderRadius:10,
          background:'var(--purple)',
          display:'flex', alignItems:'center', justifyContent:'center',
          fontSize:20, boxShadow:'0 4px 14px rgba(108,60,225,0.5)',
        }}>{icon}</div>
      </div>

      {/* Body */}
      <div style={{ padding:'22px 24px 24px' }}>
        <h3 style={{ fontFamily:'var(--font-display)', fontSize:'1.15rem', fontWeight:800, marginBottom:10, color:'var(--text-dark)' }}>{title}</h3>
        <p style={{ color:'var(--text-body)', fontSize:13.5, lineHeight:1.7, marginBottom:20 }}>{desc}</p>

        {/* Learn More */}
        <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between' }}>
          <a href="#contact" style={{ color:'var(--text-dark)', fontSize:13, fontWeight:700, transition:'color 0.2s' }}
            onMouseEnter={e => e.target.style.color='var(--purple)'}
            onMouseLeave={e => e.target.style.color='var(--text-dark)'}
          >Learn More</a>
          <a href="#contact" style={{
            width:38, height:38, borderRadius:8,
            background:'var(--purple)', color:'#fff',
            display:'flex', alignItems:'center', justifyContent:'center',
            fontSize:16, transition:'transform 0.2s, background 0.2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.background='var(--purple-dark)'; e.currentTarget.style.transform='translateX(3px)'; }}
          onMouseLeave={e => { e.currentTarget.style.background='var(--purple)'; e.currentTarget.style.transform='none'; }}
          >→</a>
        </div>
      </div>
    </article>
  );
}

export default function Services() {
  return (
    <section id="services" style={{ padding:'90px 0', background:'#fff' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign:'center', marginBottom:56 }}>
          <span className="section-label" style={{ justifyContent:'center' }}>OUR SERVICES</span>
          <h2 className="section-title">What We Provide To You</h2>
          <p style={{ color:'var(--text-body)', maxWidth:480, margin:'0 auto', fontSize:14.5, lineHeight:1.7 }}>
            From strategy to execution, we offer a complete suite of digital services designed to grow your brand and business.
          </p>
        </div>

        {/* Grid */}
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(300px, 1fr))', gap:28 }}>
          {SERVICES.map((s, i) => (
            <ServiceCard key={s.title} {...s} delay={`${i * 0.08}s`} />
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign:'center', marginTop:52 }}>
          <a href="#contact" className="btn-primary" style={{ fontSize:15 }}>View All Services →</a>
        </div>
      </div>
    </section>
  );
}
