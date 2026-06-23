import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Newsletter from './components/Newsletter';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Pre-defined random positions and configurations for floating background elements
const backgroundElements = [
  // Leaves (Homeopathy aspect)
  { id: 1, type: 'leaf', left: '6%', top: '8%', scale: 0.95, rotate: 12, animation: 'animate-float-slow', opacity: 0.08, color: 'text-primary-green' },
  { id: 2, type: 'leaf', left: '88%', top: '6%', scale: 1.4, rotate: 45, animation: 'animate-float-medium', opacity: 0.07, color: 'text-dark-green' },
  { id: 3, type: 'leaf', left: '14%', top: '48%', scale: 0.8, rotate: -25, animation: 'animate-float-slow-alt', opacity: 0.12, color: 'text-primary-green' },
  { id: 4, type: 'leaf', left: '84%', top: '52%', scale: 1.25, rotate: 60, animation: 'animate-float-medium-alt', opacity: 0.09, color: 'text-dark-green' },
  { id: 5, type: 'leaf', left: '42%', top: '22%', scale: 0.85, rotate: -15, animation: 'animate-float-slow', opacity: 0.06, color: 'text-primary-green' },
  { id: 6, type: 'leaf', left: '4%', top: '76%', scale: 1.3, rotate: 105, animation: 'animate-float-slow-alt', opacity: 0.08, color: 'text-dark-green' },
  { id: 7, type: 'leaf', left: '91%', top: '82%', scale: 0.9, rotate: -40, animation: 'animate-float-fast', opacity: 0.1, color: 'text-primary-green' },
  
  // Medical Crosses (Healthcare/Lab aspect)
  { id: 8, type: 'cross', left: '25%', top: '15%', scale: 0.7, rotate: 0, animation: 'animate-drift-slow', opacity: 0.07, color: 'text-primary-green' },
  { id: 9, type: 'cross', left: '78%', top: '28%', scale: 1.0, rotate: 15, animation: 'animate-float-medium', opacity: 0.05, color: 'text-medical-red' },
  { id: 10, type: 'cross', left: '55%', top: '85%', scale: 0.9, rotate: 45, animation: 'animate-float-slow', opacity: 0.06, color: 'text-primary-green' },
  { id: 11, type: 'cross', left: '3%', top: '38%', scale: 0.8, rotate: -10, animation: 'animate-float-slow-alt', opacity: 0.08, color: 'text-medical-red' },
  { id: 12, type: 'cross', left: '72%', top: '70%', scale: 1.1, rotate: 30, animation: 'animate-drift-slow', opacity: 0.07, color: 'text-dark-green' },

  // Bubbles / Dots (Aesthetics)
  { id: 13, type: 'bubble', left: '48%', top: '56%', scale: 1.6, rotate: 0, animation: 'animate-pulse-slow', opacity: 0.06, color: 'text-primary-green' },
  { id: 14, type: 'bubble', left: '30%', top: '75%', scale: 1.0, rotate: 0, animation: 'animate-float-slow', opacity: 0.08, color: 'text-medical-red' },
  { id: 15, type: 'bubble', left: '80%', top: '90%', scale: 1.2, rotate: 0, animation: 'animate-float-medium-alt', opacity: 0.05, color: 'text-primary-green' },
  { id: 16, type: 'bubble', left: '60%', top: '10%', scale: 0.9, rotate: 0, animation: 'animate-pulse-slow', opacity: 0.07, color: 'text-dark-green' }
];

function App() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#F4F9FF] text-[#475569] selection:bg-primary-green/20 selection:text-primary-green">

      {/* Floating Elements Animation Layer */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {backgroundElements.map((el) => (
          <div
            key={el.id}
            className={`absolute ${el.animation} ${el.color} transition-all`}
            style={{
              left: el.left,
              top: el.top,
              transform: `scale(${el.scale}) rotate(${el.rotate}deg)`,
              width: el.type === 'bubble' ? '24px' : '32px',
              height: el.type === 'bubble' ? '24px' : '32px',
              opacity: el.opacity
            }}
          >
            {el.type === 'leaf' && (
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-full h-full">
                <path d="M17 8C8 10 9 21 9 21s6.5-7.5 8-13zm-5.5 5.5C8 14 8 18 8 18s3.5-3 3.5-4.5zM21 2c0 0-11.5 3-13 13C6.5 13.5 5 11 5 11s-2 5.5 3.5 8.5C6.5 21 3 21 3 21s11-1.5 13-11.5c1.5 1 3.5 1.5 3.5 1.5s3.5-5.5 1.5-9z" />
              </svg>
            )}
            {el.type === 'cross' && (
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-full h-full">
                <path d="M19 10.5h-5.5V5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v5.5H5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5h5.5V19c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-5.5H19c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5z" />
              </svg>
            )}
            {el.type === 'bubble' && (
              <div className="w-full h-full rounded-full bg-current blur-[1px]" />
            )}
          </div>
        ))}
      </div>

      {/* Main Page Layout */}
      <main className="relative z-10">
        <Hero
          onNotifyClick={() => scrollToSection('newsletter-section')}
          onContactClick={() => scrollToSection('contact-section')}
        />

        <Features />

        <Newsletter />

        <Contact />

        <Footer />
      </main>
    </div>
  );
}

export default App;
