import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Work from './components/Work';
import Philosophy from './components/Philosophy';
import Services from './components/Services';
import MaterialStudy from './components/MaterialStudy';
import Founder from './components/Founder';
import Contact from './components/Contact';
import Gallery from './components/Gallery';
import CustomCursor from './components/CustomCursor';
import './App.css';

function App() {
  useEffect(() => {
    // Load animation
    requestAnimationFrame(() => {
      document.body.classList.add('load');
    });

    // Reveal on scroll
    const io = 'IntersectionObserver' in window
      ? new IntersectionObserver(
          (entries) => {
            entries.forEach((e) => {
              if (e.isIntersecting) {
                e.target.classList.add('on');
                io.unobserve(e.target);
              }
            });
          },
          { threshold: 0.12 }
        )
      : null;

    document.querySelectorAll('.rv').forEach((el) => {
      if (io) {
        io.observe(el);
      } else {
        el.classList.add('on');
      }
    });

    return () => {
      if (io) io.disconnect();
    };
  }, []);

  return (
    <>
      <CustomCursor />
      <a className="skip" href="#work">
        Skip to selected work
      </a>
      <Header />
      <main id="top">
        <Hero />
        <Work />
        <Philosophy />
        <Services />
        <MaterialStudy />
        <Founder />
        <Contact />
      </main>
      <Gallery />
    </>
  );
}

export default App;
