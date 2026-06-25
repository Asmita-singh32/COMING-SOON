import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = ({ onContactClick }) => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 md:px-8 py-16 overflow-hidden">
      {/* Decorative background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] glow-green rounded-full opacity-40 pointer-events-none -z-10 animate-glow-drift" />
      <div className="absolute bottom-1/4 left-1/3 w-[250px] h-[250px] glow-red rounded-full opacity-20 pointer-events-none -z-10 animate-glow-drift" style={{ animationDelay: '-5s' }} />

      {/* Floating Elements/Background leaf hint */}
      <div className="absolute top-16 left-12 w-6 h-6 text-primary-green opacity-20 animate-float-slow hidden md:block">
        <svg fill="currentColor" viewBox="0 0 24 24" className="w-full h-full">
          <path d="M17 8C8 10 9 21 9 21s6.5-7.5 8-13zm-5.5 5.5C8 14 8 18 8 18s3.5-3 3.5-4.5zM21 2c0 0-11.5 3-13 13C6.5 13.5 5 11 5 11s-2 5.5 3.5 8.5C6.5 21 3 21 3 21s11-1.5 13-11.5c1.5 1 3.5 1.5 3.5 1.5s3.5-5.5 1.5-9z" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto flex flex-col items-center z-10">
        {/* Brand Tagline Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, cubicBezier: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EEF7FF] border border-primary-green/20 text-primary-green text-sm font-semibold tracking-wide mb-8 shadow-sm"
        >
          <span className="w-2 h-2 rounded-full bg-primary-green animate-pulse" />
          Your Trusted Homeopathic Healthcare Partner
        </motion.div>

        {/* Prominent Glowing Logo */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.15, duration: 1, cubicBezier: [0.16, 1, 0.3, 1] }}
          className="w-48 h-48 md:w-60 md:h-60 flex items-center justify-center mb-10 glow-logo"
        >
          <img
            src="/logo.png"
            alt="Medicores Logo"
            className="w-full h-full object-contain"
            onError={(e) => {
              // Fallback SVG if logo fails to load
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'block';
            }}
          />
          <div className="hidden text-dark-navy font-bold text-center">
            <span className="text-primary-green text-2xl font-serif">M</span>
            <span className="block text-xs uppercase tracking-widest mt-1">Medicores</span>
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, cubicBezier: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-[#1E293B] mb-4"
        >
          We're <span className="bg-gradient-to-r from-primary-green to-dark-green bg-clip-text text-transparent">Launching Soon</span>
        </motion.h1>

        {/* Subheading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.8, cubicBezier: [0.16, 1, 0.3, 1] }}
          className="text-lg sm:text-xl md:text-2xl font-semibold text-[#475569] mb-6 tracking-wide max-w-2xl px-4"
        >
          India's Trusted Online Homeopathic & Healthcare Store
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8, cubicBezier: [0.16, 1, 0.3, 1] }}
          className="text-base md:text-lg text-[#64748B] max-w-2xl leading-relaxed mb-12 px-6"
        >
          Bringing quality homeopathic medicines and healthcare products directly to your doorstep with trust, authenticity, and care.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.8, cubicBezier: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-6"
        >
          <button
            onClick={onContactClick}
            className="flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-primary-green hover:bg-medical-red text-white transition-colors duration-300 font-bold text-base shadow-[0_4px_15px_rgba(93,187,0,0.2)] hover:shadow-[0_4px_15px_rgba(214,40,40,0.2)] transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            Contact Us
            <ArrowRight size={18} />
          </button>
        </motion.div>
      </div>

      {/* Floating Leaves Background Decoration (Bottom Right) */}
      <div className="absolute bottom-16 right-16 w-8 h-8 text-dark-green opacity-15 animate-float-medium hidden md:block">
        <svg fill="currentColor" viewBox="0 0 24 24" className="w-full h-full">
          <path d="M17 8C8 10 9 21 9 21s6.5-7.5 8-13zm-5.5 5.5C8 14 8 18 8 18s3.5-3 3.5-4.5zM21 2c0 0-11.5 3-13 13C6.5 13.5 5 11 5 11s-2 5.5 3.5 8.5C6.5 21 3 21 3 21s11-1.5 13-11.5c1.5 1 3.5 1.5 3.5 1.5s3.5-5.5 1.5-9z" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
