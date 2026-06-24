import React from 'react';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';

const InstagramIcon = ({ size = 24, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ width: size, height: size }}
    {...props}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const GmailIcon = ({ size = 24, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    style={{ width: size, height: size }}
    {...props}
  >
    {/* Base light grey envelope body */}
    <path
      d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2z"
      fill="#F2F2F2"
    />
    {/* Red pillars and top fold (the classic M) */}
    <path
      d="M22 6c0-1.1-.9-2-2-2h-3v7.5L12 14 7 9.5V4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h3V9.5l5 3.75 5-3.75V20h3c1.1 0 2-.9 2-2V6z"
      fill="#EA4335"
    />
    {/* Shadow detail */}
    <path
      d="M12 14L22 6.5V6c0-1.1-.9-2-2-2h-1L12 10.5 5 4H4c-1.1 0-2 .9-2 2v.5L12 14z"
      fill="#C5221F"
      opacity="0.2"
    />
  </svg>
);



const contactMethods = [
  {
    icon: Phone,
    label: 'Call Us',
    value: '+91 9910009347',
    href: 'tel:+919910009347',
    color: 'text-white',
    bgColor: 'bg-[#5DBB00] shadow-[0_4px_12px_rgba(93,187,0,0.25)] border-none',
    wrapperClass: 'p-4 rounded-full'
  },
  {
    icon: GmailIcon,
    label: 'Email Us',
    value: 'medicores.in@gmail.com',
    href: 'mailto:medicores.in@gmail.com',
    color: '',
    bgColor: 'bg-white shadow-[0_4px_12px_rgba(0,0,0,0.06)] border border-slate-100',
    wrapperClass: 'p-3.5 rounded-xl'
  },
  {
    icon: InstagramIcon,
    label: 'Follow Us',
    value: '@medicores.in',
    href: 'https://www.instagram.com/medicores.in',
    color: 'text-white',
    bgColor: 'bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] shadow-[0_4px_12px_rgba(238,42,123,0.3)] border-none',
    wrapperClass: 'p-4 rounded-xl'
  }
];

const Contact = () => {
  return (
    <section id="contact-section" className="relative py-24 px-4 md:px-8 bg-[#EEF7FF]/50 border-t border-slate-100 overflow-hidden">
      {/* Decorative glows */}
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] glow-green rounded-full opacity-10 pointer-events-none -z-10 animate-glow-drift" />
      <div className="absolute top-12 right-12 w-[300px] h-[300px] glow-red rounded-full opacity-10 pointer-events-none -z-10 animate-glow-drift" style={{ animationDelay: '-3s' }} />

      <div className="max-w-6xl mx-auto z-10">
        


        {/* CONTACT SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Header Copy */}
          <div className="lg:col-span-5 text-center lg:text-left">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-5xl font-bold tracking-tight text-[#1E293B] mb-6"
            >
              Get In Touch With <span className="text-primary-green">Medicore</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.7 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-[#475569] text-sm md:text-base leading-relaxed mb-8 font-body"
            >
              Have queries about our upcoming homeopathic catalog, delivery regions, or healthcare products? Contact us directly. Our support representatives are happy to assist you.
            </motion.p>
          </div>

          {/* Contact Details List */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {contactMethods.map((method, idx) => {
              const Icon = method.icon;
              return (
                <motion.a
                  href={method.href}
                  key={idx}
                  target={method.href.startsWith('http') ? '_blank' : undefined}
                  rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15, duration: 0.6 }}
                  className="group relative flex flex-col items-center text-center p-6 rounded-2xl glass-card transition-all duration-300 border border-slate-100"
                >
                  <div className={`${method.wrapperClass || 'p-4 rounded-xl'} ${method.bgColor} ${method.color} mb-4 transition-transform duration-300 group-hover:scale-110 shadow-sm flex items-center justify-center`}>
                    <Icon size={20} />
                  </div>
                  <span className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-1 font-body">
                    {method.label}
                  </span>
                  <span className="text-[#1E293B] font-bold text-sm tracking-wide break-all max-w-full font-body group-hover:text-primary-green transition-colors duration-300">
                    {method.value}
                  </span>
                </motion.a>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
