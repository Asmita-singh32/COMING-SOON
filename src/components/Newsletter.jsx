import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple regex validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      setStatus('error');
      setErrorMessage('Please enter an email address.');
      return;
    }
    if (!emailRegex.test(email)) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setStatus('loading');

    // Simulate network latency (1.5s)
    setTimeout(() => {
      try {
        // Save to local storage for demonstration
        const subscriptions = JSON.parse(localStorage.getItem('medicore_subscriptions') || '[]');
        if (subscriptions.includes(email)) {
          setStatus('error');
          setErrorMessage('This email is already subscribed!');
          return;
        }
        subscriptions.push(email);
        localStorage.setItem('medicore_subscriptions', JSON.stringify(subscriptions));

        setStatus('success');
        setEmail('');
      } catch (err) {
        setStatus('error');
        setErrorMessage('Something went wrong. Please try again.');
      }
    }, 1500);
  };

  return (
    <section id="newsletter-section" className="relative py-24 px-4 md:px-8 overflow-hidden">
      {/* Decorative glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] md:w-[700px] h-[350px] md:h-[700px] glow-green rounded-full opacity-10 pointer-events-none -z-10 animate-glow-drift" />

      <div className="max-w-4xl mx-auto z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, cubicBezier: [0.16, 1, 0.3, 1] }}
          className="relative rounded-3xl p-8 md:p-14 glass-card text-center overflow-hidden border border-slate-200/60"
        >
          {/* Subtle design elements */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary-green/5 rounded-full blur-2xl" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-medical-red/5 rounded-full blur-2xl" />

          {/* Icon */}
          <div className="mx-auto w-14 h-14 rounded-full bg-primary-green/10 flex items-center justify-center text-primary-green mb-6 shadow-sm border border-primary-green/20">
            <Mail size={24} />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#1E293B] mb-4">
            Be the First to <span className="bg-gradient-to-r from-primary-green to-dark-green bg-clip-text text-transparent">Know When We Launch</span>
          </h2>
          <p className="text-[#475569] max-w-xl mx-auto text-sm md:text-base mb-10 leading-relaxed font-body">
            Subscribe to our newsletter to receive launch notifications, exclusive early-bird offers, and authentic health guides from Medicore.
          </p>

          <AnimatePresence mode="wait">
            {status !== 'success' ? (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="max-w-xl mx-auto"
              >
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="relative flex-grow">
                    <span className="absolute inset-y-0 left-4 flex items-center text-slate-400 pointer-events-none">
                      <Mail size={18} />
                    </span>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (status === 'error') setStatus('idle');
                      }}
                      placeholder="Enter your email address"
                      disabled={status === 'loading'}
                      className="w-full pl-12 pr-4 py-4 rounded-xl text-[#1E293B] placeholder-slate-400 glass-input font-body text-base bg-white"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="px-8 py-4 rounded-xl bg-primary-green hover:bg-medical-red text-white transition-colors duration-300 font-bold text-base shadow-[0_4px_15px_rgba(93,187,0,0.2)] hover:shadow-[0_4px_15px_rgba(214,40,40,0.2)] flex items-center justify-center gap-2 cursor-pointer min-w-[140px]"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <span>Notify Me</span>
                    )}
                  </button>
                </div>

                {/* Error message */}
                <AnimatePresence>
                  {status === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex items-center justify-center gap-2 mt-4 text-medical-red text-sm"
                    >
                      <AlertCircle size={16} />
                      <span className="font-semibold">{errorMessage}</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                className="flex flex-col items-center justify-center p-6 bg-primary-green/5 border border-primary-green/20 rounded-2xl max-w-md mx-auto"
              >
                <CheckCircle2 size={48} className="text-primary-green mb-4 animate-bounce" />
                <h3 className="text-xl font-bold text-[#1E293B] mb-2">You're Subscribed!</h3>
                <p className="text-[#475569] text-sm mb-4 font-body">
                  Thank you for joining Medicore. We will keep you updated with the latest news and launch dates.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="text-xs text-primary-green hover:underline font-semibold cursor-pointer"
                >
                  Register another email
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
