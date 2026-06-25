import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 px-4 border-t border-slate-200/60 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Brand & Corporate details */}
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-1 mb-2">
            <span className="text-xl font-extrabold tracking-tight text-[#1E293B] font-sans">
              Medicores<span className="text-primary-green">.</span>
            </span>
          </div>
          <p className="text-[#64748B] text-xs tracking-wider uppercase font-semibold font-body">
            A Brand of Medicores Homoeopathic Laboratory
          </p>
        </div>

        {/* Copyright */}
        <div className="text-center md:text-right flex flex-col sm:flex-row items-center gap-4 md:gap-8">
          <p className="text-[#64748B] text-sm font-body">
            &copy; 2026 Medicores. All Rights Reserved.
          </p>

          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 hover:border-primary-green/30 text-slate-500 hover:text-primary-green flex items-center justify-center transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <ArrowUp size={16} />
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
