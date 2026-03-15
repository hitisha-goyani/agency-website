const LINKS = {
  Company:  ['About Us', 'Our Team', 'Careers', 'Press'],
  Services: ['Digital Marketing', 'SEO & Content', 'Brand Strategy', 'Web Development', 'Business Advisory'],
  Resources:['Blog', 'Case Studies', 'Whitepapers', 'Newsletter'],
};

export default function Footer() {
  return (
    <footer style={{ background:'#0f0a2e', color:'rgba(255,255,255,0.7)', paddingTop:72, paddingBottom:32 }}>
      <div className="container">
        <div style={{ display:'grid', gridTemplateColumns:'2fr 1fr 1fr 1fr', gap:40, marginBottom:56 }}>
          {/* Brand */}
          <div>
            <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:18 }}>
              <div style={{ width:38, height:38, borderRadius:'50%', background:'linear-gradient(135deg,#6c3ce1,#9c6dff)', display:'flex', alignItems:'center', justifyContent:'center' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" fill="white"/>
                </svg>
              </div>
              <span style={{ fontFamily:'var(--font-display)', fontWeight:900, fontSize:22, color:'#fff' }}>Agency</span>
            </div>
            <p style={{ fontSize:13.5, lineHeight:1.75, maxWidth:260, marginBottom:24 }}>
              We believe in the power of creativity to transform brands and drive meaningful business results.
            </p>
            {/* Socials */}
            <div style={{ display:'flex', gap:10 }}>
              {['f', 'in', '𝕏', '▶'].map(icon => (
                <a key={icon} href="#" style={{
                  width:36, height:36, borderRadius:8,
                  background:'rgba(255,255,255,0.08)',
                  border:'1px solid rgba(255,255,255,0.1)',
                  display:'flex', alignItems:'center', justifyContent:'center',
                  color:'rgba(255,255,255,0.65)', fontSize:13, fontWeight:700,
                  transition:'all 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.background='var(--purple)'; e.currentTarget.style.borderColor='transparent'; e.currentTarget.style.color='#fff'; }}
                onMouseLeave={e => { e.currentTarget.style.background='rgba(255,255,255,0.08)'; e.currentTarget.style.borderColor='rgba(255,255,255,0.1)'; e.currentTarget.style.color='rgba(255,255,255,0.65)'; }}
                >{icon}</a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(LINKS).map(([title, items]) => (
            <div key={title}>
              <h4 style={{ color:'#fff', fontWeight:700, fontSize:14, marginBottom:18, letterSpacing:'0.04em' }}>{title}</h4>
              <ul style={{ display:'flex', flexDirection:'column', gap:10 }}>
                {items.map(item => (
                  <li key={item}>
                    <a href="#" style={{ fontSize:13.5, color:'rgba(255,255,255,0.55)', transition:'color 0.2s' }}
                      onMouseEnter={e => e.target.style.color='var(--purple-light)'}
                      onMouseLeave={e => e.target.style.color='rgba(255,255,255,0.55)'}
                    >{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div style={{ background:'rgba(108,60,225,0.12)', border:'1px solid rgba(108,60,225,0.25)', borderRadius:14, padding:'28px 32px', marginBottom:48, display:'flex', alignItems:'center', justifyContent:'space-between', flexWrap:'wrap', gap:20 }}>
          <div>
            <h4 style={{ color:'#fff', fontWeight:700, fontSize:15, marginBottom:4 }}>Subscribe to our newsletter</h4>
            <p style={{ fontSize:13, color:'rgba(255,255,255,0.55)' }}>Get the latest insights and news delivered to your inbox.</p>
          </div>
          <div style={{ display:'flex', gap:10, flexWrap:'wrap' }}>
            <input
              type="email" placeholder="Enter your email"
              style={{ padding:'11px 16px', borderRadius:8, border:'1px solid rgba(255,255,255,0.15)', background:'rgba(255,255,255,0.07)', color:'#fff', fontSize:13, fontFamily:'var(--font-body)', outline:'none', minWidth:240 }}
              onFocus={e => e.target.style.borderColor='var(--purple-light)'}
              onBlur={e => e.target.style.borderColor='rgba(255,255,255,0.15)'}
            />
            <button className="btn-primary" style={{ padding:'11px 22px', fontSize:13 }}>Subscribe</button>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop:'1px solid rgba(255,255,255,0.08)', paddingTop:24, display:'flex', alignItems:'center', justifyContent:'space-between', flexWrap:'wrap', gap:12 }}>
          <p style={{ fontSize:13 }}>© {new Date().getFullYear()} Agency. All rights reserved.</p>
          <div style={{ display:'flex', gap:20 }}>
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map(t => (
              <a key={t} href="#" style={{ fontSize:13, color:'rgba(255,255,255,0.45)', transition:'color 0.2s' }}
                onMouseEnter={e => e.target.style.color='var(--purple-light)'}
                onMouseLeave={e => e.target.style.color='rgba(255,255,255,0.45)'}
              >{t}</a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          footer .container > div:first-of-type { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 560px) {
          footer .container > div:first-of-type { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
