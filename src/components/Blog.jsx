import { useRef, useEffect, useState } from 'react';

const POSTS = [
  {
    cat: 'Digital Marketing',
    title: '10 SEO Strategies That Will Dominate 2025',
    excerpt: 'Search algorithms are evolving rapidly. Here\'s what you need to know to stay ahead of the curve and capture organic traffic.',
    date: 'March 8, 2025',
    author: 'Sarah K.',
    readTime: '5 min read',
    img: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=500&q=80&auto=format&fit=crop',
  },
  {
    cat: 'Branding',
    title: 'How to Build a Brand Identity That Converts',
    excerpt: 'Your brand is more than a logo. We break down the psychology behind brands that build lasting loyalty and trust.',
    date: 'Feb 22, 2025',
    author: 'Marcus L.',
    readTime: '7 min read',
    img: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=500&q=80&auto=format&fit=crop',
  },
  {
    cat: 'Business Growth',
    title: 'The ROI of Content Marketing in 2025',
    excerpt: 'Content is still king — but the game has changed. See how leading brands are generating 3× ROI from strategic content.',
    date: 'Feb 10, 2025',
    author: 'Priya M.',
    readTime: '6 min read',
    img: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=500&q=80&auto=format&fit=crop',
  },
];

function BlogCard({ post, delay }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <article ref={ref} style={{
      background:'#fff', borderRadius:16, overflow:'hidden',
      border:'1px solid var(--border)',
      boxShadow:'0 2px 14px rgba(0,0,0,0.06)',
      transition:'transform 0.3s, box-shadow 0.3s',
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateY(0)' : 'translateY(28px)',
      transitionDelay: delay,
      transitionProperty:'opacity,transform,box-shadow',
      transitionDuration:'0.6s',
    }}
    onMouseEnter={e => { e.currentTarget.style.transform='translateY(-6px)'; e.currentTarget.style.boxShadow='0 16px 48px rgba(108,60,225,0.13)'; }}
    onMouseLeave={e => { e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.boxShadow='0 2px 14px rgba(0,0,0,0.06)'; }}
    >
      <div style={{ position:'relative', height:200, overflow:'hidden' }}>
        <img src={post.img} alt={post.title} style={{ width:'100%', height:'100%', objectFit:'cover', transition:'transform 0.5s' }}
          onMouseEnter={e => e.target.style.transform='scale(1.06)'}
          onMouseLeave={e => e.target.style.transform='scale(1)'}
        />
        <span style={{
          position:'absolute', top:14, left:14,
          background:'var(--purple)', color:'#fff',
          fontSize:11, fontWeight:700, letterSpacing:'0.06em',
          padding:'4px 12px', borderRadius:20,
        }}>{post.cat}</span>
      </div>
      <div style={{ padding:'22px 22px 24px' }}>
        <div style={{ display:'flex', gap:12, fontSize:12, color:'var(--text-light)', marginBottom:12 }}>
          <span>📅 {post.date}</span>
          <span>⏱ {post.readTime}</span>
          <span>✍️ {post.author}</span>
        </div>
        <h3 style={{ fontFamily:'var(--font-display)', fontWeight:800, fontSize:'1.05rem', lineHeight:1.3, marginBottom:10, color:'var(--text-dark)' }}>
          <a href="#blog" style={{ transition:'color 0.2s' }}
            onMouseEnter={e => e.target.style.color='var(--purple)'}
            onMouseLeave={e => e.target.style.color='var(--text-dark)'}
          >{post.title}</a>
        </h3>
        <p style={{ color:'var(--text-body)', fontSize:13.5, lineHeight:1.65, marginBottom:18 }}>{post.excerpt}</p>
        <a href="#blog" style={{ color:'var(--purple)', fontWeight:700, fontSize:13, display:'flex', alignItems:'center', gap:6, transition:'gap 0.2s' }}
          onMouseEnter={e => e.currentTarget.style.gap='10px'}
          onMouseLeave={e => e.currentTarget.style.gap='6px'}
        >Read Full Article →</a>
      </div>
    </article>
  );
}

export default function Blog() {
  return (
    <section id="blog" style={{ padding:'90px 0', background:'#fff' }}>
      <div className="container">
        <div style={{ textAlign:'center', marginBottom:56 }}>
          <span className="section-label" style={{ justifyContent:'center' }}>LATEST BLOG</span>
          <h2 className="section-title">News &amp; Insights</h2>
          <p style={{ color:'var(--text-body)', maxWidth:440, margin:'0 auto', fontSize:14.5 }}>
            Stay ahead with expert perspectives on digital marketing, branding, and business growth.
          </p>
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(300px, 1fr))', gap:28 }}>
          {POSTS.map((p, i) => <BlogCard key={p.title} post={p} delay={`${i * 0.1}s`} />)}
        </div>
        <div style={{ textAlign:'center', marginTop:48 }}>
          <a href="#blog" className="btn-primary">View All Posts →</a>
        </div>
      </div>
    </section>
  );
}
