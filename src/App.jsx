import Navbar       from './components/Navbar';
import Hero         from './components/Hero';
import Stats        from './components/Stats';
import Services     from './components/Services';
import About        from './components/About';
import Process      from './components/Process';
import Testimonials from './components/Testimonials';
import Team         from './components/Team';
import Blog         from './components/Blog';
import Contact      from './components/Contact';
import Footer       from './components/Footer';

// Scroll-to-top button
import { useState, useEffect } from 'react';

function ScrollTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const fn = () => setShow(window.scrollY > 400);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);
  return show ? (
    <button
      onClick={() => window.scrollTo({ top:0, behavior:'smooth' })}
      style={{
        position:'fixed', bottom:28, right:28, zIndex:800,
        width:46, height:46, borderRadius:'50%',
        background:'linear-gradient(135deg,#6c3ce1,#9c6dff)',
        color:'#fff', fontSize:20, border:'none', cursor:'pointer',
        boxShadow:'0 6px 24px rgba(108,60,225,0.45)',
        display:'flex', alignItems:'center', justifyContent:'center',
        transition:'transform 0.2s',
      }}
      onMouseEnter={e => e.currentTarget.style.transform='scale(1.1) translateY(-2px)'}
      onMouseLeave={e => e.currentTarget.style.transform='none'}
      aria-label="Back to top"
    >↑</button>
  ) : null;
}

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <About />
        <Process />
        <Testimonials />
        <Team />
        <Blog />
        <Contact />
      </main>
      <Footer />
      <ScrollTop />
    </>
  );
}
