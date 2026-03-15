import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name:'', email:'', phone:'', service:'', message:'' });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim())    e.name    = 'Name is required';
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = 'Valid email required';
    if (!form.message.trim()) e.message = 'Message is required';
    return e;
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const e = validate();
    if (Object.keys(e).length) { setErrors(e); return; }
    setSubmitted(true);
  };

  const field = (key, label, type='text', placeholder='') => (
    <div style={{ marginBottom:18 }}>
      <label style={{ display:'block', fontSize:13, fontWeight:600, color:'var(--text-dark)', marginBottom:6 }}>{label}</label>
      <input
        type={type}
        value={form[key]}
        onChange={e => { setForm(f => ({...f, [key]:e.target.value})); setErrors(er => ({...er, [key]:''})); }}
        placeholder={placeholder}
        style={{
          width:'100%', padding:'12px 16px', borderRadius:8, fontSize:14,
          border: errors[key] ? '1.5px solid #ef4444' : '1.5px solid var(--border)',
          outline:'none', transition:'border 0.2s',
          fontFamily:'var(--font-body)', color:'var(--text-dark)',
          background:'#fff',
        }}
        onFocus={e => e.target.style.borderColor='var(--purple)'}
        onBlur={e => e.target.style.borderColor=errors[key]?'#ef4444':'var(--border)'}
      />
      {errors[key] && <span style={{ color:'#ef4444', fontSize:12, marginTop:4, display:'block' }}>{errors[key]}</span>}
    </div>
  );

  return (
    <section id="contact" style={{ padding:'90px 0', background:'#fff' }}>
      <div className="container">
        <div style={{ textAlign:'center', marginBottom:56 }}>
          <span className="section-label" style={{ justifyContent:'center' }}>CONTACT US</span>
          <h2 className="section-title">Let's Start a Conversation</h2>
          <p style={{ color:'var(--text-body)', maxWidth:440, margin:'0 auto', fontSize:14.5 }}>
            Ready to grow? Tell us about your project and we'll get back to you within 24 hours.
          </p>
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:56, alignItems:'start' }}>
          {/* Info */}
          <div>
            <h3 style={{ fontFamily:'var(--font-display)', fontSize:'1.4rem', fontWeight:800, marginBottom:16 }}>Get In Touch</h3>
            <p style={{ color:'var(--text-body)', fontSize:14, lineHeight:1.75, marginBottom:32 }}>
              Whether you're looking to launch a new campaign, rebrand, or scale your digital presence — we're here to help you achieve it.
            </p>
            {[
              { icon:'📍', label:'Address',  val:'123 Agency Street, New York, NY 10001' },
              { icon:'📞', label:'Phone',    val:'+1 (555) 234-5678' },
              { icon:'✉️', label:'Email',    val:'hello@agencyco.com' },
              { icon:'⏰', label:'Hours',    val:'Mon–Fri: 9am – 6pm EST' },
            ].map(item => (
              <div key={item.label} style={{ display:'flex', gap:14, marginBottom:20 }}>
                <div style={{
                  width:44, height:44, borderRadius:10, flexShrink:0,
                  background:'var(--purple-bg)',
                  display:'flex', alignItems:'center', justifyContent:'center', fontSize:20,
                }}>{item.icon}</div>
                <div>
                  <div style={{ fontWeight:700, fontSize:12, color:'var(--text-light)', letterSpacing:'0.06em', textTransform:'uppercase', marginBottom:2 }}>{item.label}</div>
                  <div style={{ fontSize:14, color:'var(--text-dark)', fontWeight:500 }}>{item.val}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <div style={{ background:'var(--section-bg)', borderRadius:20, padding:'36px 32px', border:'1px solid var(--border)' }}>
            {submitted ? (
              <div style={{ textAlign:'center', padding:'40px 0' }}>
                <div style={{ fontSize:56, marginBottom:16 }}>🎉</div>
                <h3 style={{ fontFamily:'var(--font-display)', fontSize:'1.4rem', fontWeight:800, marginBottom:10 }}>Message Sent!</h3>
                <p style={{ color:'var(--text-body)', fontSize:14, marginBottom:24 }}>Thanks for reaching out. We'll be in touch within 24 hours.</p>
                <button onClick={() => { setSubmitted(false); setForm({ name:'', email:'', phone:'', service:'', message:'' }); }}
                  className="btn-primary">Send Another</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:12 }}>
                  <div>{field('name', 'Full Name *', 'text', 'John Smith')}</div>
                  <div>{field('email', 'Email Address *', 'email', 'john@email.com')}</div>
                </div>
                <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:12 }}>
                  <div>{field('phone', 'Phone Number', 'tel', '+1 555 000 0000')}</div>
                  <div style={{ marginBottom:18 }}>
                    <label style={{ display:'block', fontSize:13, fontWeight:600, color:'var(--text-dark)', marginBottom:6 }}>Service</label>
                    <select value={form.service} onChange={e => setForm(f => ({...f, service:e.target.value}))}
                      style={{ width:'100%', padding:'12px 16px', borderRadius:8, fontSize:14, border:'1.5px solid var(--border)', fontFamily:'var(--font-body)', color:'var(--text-dark)', background:'#fff', outline:'none' }}
                      onFocus={e => e.target.style.borderColor='var(--purple)'}
                      onBlur={e => e.target.style.borderColor='var(--border)'}
                    >
                      <option value="">Select a service</option>
                      <option>Digital Marketing</option>
                      <option>SEO & Content</option>
                      <option>Brand Strategy</option>
                      <option>Web Development</option>
                      <option>Business Advisory</option>
                    </select>
                  </div>
                </div>
                <div style={{ marginBottom:24 }}>
                  <label style={{ display:'block', fontSize:13, fontWeight:600, color:'var(--text-dark)', marginBottom:6 }}>Message *</label>
                  <textarea
                    value={form.message}
                    onChange={e => { setForm(f => ({...f, message:e.target.value})); setErrors(er => ({...er, message:''})); }}
                    rows={4} placeholder="Tell us about your project..."
                    style={{
                      width:'100%', padding:'12px 16px', borderRadius:8, fontSize:14, resize:'vertical',
                      border: errors.message ? '1.5px solid #ef4444' : '1.5px solid var(--border)',
                      fontFamily:'var(--font-body)', color:'var(--text-dark)', outline:'none', transition:'border 0.2s',
                    }}
                    onFocus={e => e.target.style.borderColor='var(--purple)'}
                    onBlur={e => e.target.style.borderColor=errors.message?'#ef4444':'var(--border)'}
                  />
                  {errors.message && <span style={{ color:'#ef4444', fontSize:12 }}>{errors.message}</span>}
                </div>
                <button type="submit" className="btn-primary" style={{ width:'100%', justifyContent:'center', padding:'14px 24px', fontSize:15 }}>
                  Send Message →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          #contact .container > div { grid-template-columns: 1fr !important; gap: 36px !important; }
          #contact form > div { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
