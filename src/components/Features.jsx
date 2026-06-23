import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Activity, Truck, CreditCard, Headphones, Award } from 'lucide-react';

const features = [
  {
    icon: Leaf,
    title: 'Genuine Homeopathic Medicines',
    description: '100% authentic, premium homeopathic dilutions, mother tinctures, and biochemic tablets directly from certified laboratories.',
    color: 'text-primary-green',
    bgColor: 'bg-primary-green/10',
    borderColor: 'group-hover:border-primary-green/45'
  },
  {
    icon: Activity,
    title: 'Healthcare & Wellness Products',
    description: 'A curated selection of daily healthcare essentials, vitamins, supplements, personal care, and organic wellness items.',
    color: 'text-medical-red',
    bgColor: 'bg-medical-red/10',
    borderColor: 'group-hover:border-medical-red/40'
  },
  {
    icon: Truck,
    title: 'Fast & Safe Delivery',
    description: 'Quick dispatch and secure transit mapping, bringing your essential healthcare products straight to your doorstep across India.',
    color: 'text-[#475569]',
    bgColor: 'bg-slate-100',
    borderColor: 'group-hover:border-slate-300'
  },
  {
    icon: CreditCard,
    title: 'Secure Payments',
    description: 'Safe checkout processes with fully encrypted gateways supporting UPI, Net Banking, credit cards, and major wallets.',
    color: 'text-primary-green',
    bgColor: 'bg-primary-green/10',
    borderColor: 'group-hover:border-primary-green/45'
  },
  {
    icon: Headphones,
    title: 'Expert Support',
    description: 'Dedicated client support line to help guide you through product selections, orders, delivery tracking, and general queries.',
    color: 'text-[#475569]',
    bgColor: 'bg-slate-100',
    borderColor: 'group-hover:border-slate-300'
  },
  {
    icon: Award,
    title: 'Quality Assurance',
    description: 'Tested and verified goods ensuring maximum efficacy and strict adherence to homoeopathic manufacturing pharmacopoeias.',
    color: 'text-medical-red',
    bgColor: 'bg-medical-red/10',
    borderColor: 'group-hover:border-medical-red/40'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  show: { 
    y: 0, 
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 70,
      damping: 15
    }
  }
};

const Features = () => {
  return (
    <section id="features-section" className="relative py-24 px-4 md:px-8 bg-white border-y border-slate-100 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] glow-green rounded-full opacity-10 pointer-events-none -z-10 animate-glow-drift" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] glow-red rounded-full opacity-10 pointer-events-none -z-10 animate-glow-drift" style={{ animationDelay: '-7s' }} />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold tracking-tight text-[#1E293B] mb-4"
          >
            Why Choose <span className="bg-gradient-to-r from-primary-green to-dark-green bg-clip-text text-transparent">Medicore</span>?
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="h-1 bg-primary-green mx-auto rounded-full mb-6"
          />
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.7 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-[#475569] max-w-xl mx-auto text-base md:text-lg"
          >
            We are dedicated to building a healthcare platform centered around pure homeopathy, prompt service, and authenticated wellness care.
          </motion.p>
        </div>

        {/* Features Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative flex flex-col p-8 rounded-2xl glass-card transition-all duration-300 h-full justify-between border border-slate-100"
              >
                <div>
                  {/* Icon container */}
                  <div className={`inline-flex p-4 rounded-xl ${feature.bgColor} ${feature.color} mb-6 transition-transform duration-300 group-hover:scale-110 shadow-sm`}>
                    <Icon size={24} strokeWidth={2} />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-[#1E293B] mb-3 tracking-wide group-hover:text-primary-green transition-colors duration-300">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#475569] text-sm leading-relaxed mb-6 font-body">
                    {feature.description}
                  </p>
                </div>

                {/* Subtle bottom line transition */}
                <div className="w-full h-[2px] bg-slate-100 rounded-full overflow-hidden mt-auto">
                  <div className="w-0 h-full bg-gradient-to-r from-primary-green to-dark-green transition-all duration-500 group-hover:w-full" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
