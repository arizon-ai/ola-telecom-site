'use client';

import { motion } from 'framer-motion';
import { Check, MessageCircle, ArrowRight } from 'lucide-react';
import { Plan } from '../lib/plans';

export default function PlanCard({ plan, index }: { plan: Plan; index: number }) {
  const message = encodeURIComponent(`Hola Ari, me interesa el plan ${plan.name}`);
  const whatsappUrl = `https://wa.me/584247612828?text=${message}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className={`relative glass-panel rounded-2xl p-6 md:p-8 flex flex-col h-full card-hover-glow ${
        plan.isPopular 
          ? 'border-accent-cyan/30 shadow-[0_0_40px_rgba(56,189,248,0.08)]' 
          : 'border-white/5 hover:border-white/12'
      }`}
    >
      {/* Top glow line for popular plan */}
      {plan.isPopular && (
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-cyan/50 to-transparent rounded-t-2xl" />
      )}

      {plan.badge && (
        <motion.div
          initial={{ opacity: 0, y: -10, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 + index * 0.1 }}
          className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-accent-green via-accent-cyan to-accent-magenta px-4 py-1 rounded-full text-[11px] uppercase tracking-wider font-bold text-bg-primary shadow-[0_4px_20px_rgba(56,189,248,0.3)] whitespace-nowrap"
        >
          {plan.badge}
        </motion.div>
      )}
      
      <div className="mb-6 text-center">
        <span className="text-accent-cyan text-sm font-semibold tracking-wider uppercase">{plan.type}</span>
        <h3 className="text-2xl font-bold mt-2 mb-4">{plan.name}</h3>
        <div className="flex items-end justify-center gap-1 mb-2">
          <motion.span
            className="text-5xl font-extrabold text-gradient"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + index * 0.1, type: 'spring', stiffness: 200 }}
          >
            {plan.speed}
          </motion.span>
          <span className="text-xl font-medium text-text-muted mb-1">{plan.speedUnit}</span>
        </div>
        <div className="text-3xl font-bold mt-4">
          ${plan.price}<span className="text-lg text-text-muted font-normal">/mes</span>
        </div>
      </div>

      <div className="flex-grow">
        <ul className="space-y-3 mb-8">
          {plan.features.map((feature, i) => (
            <motion.li
              key={i}
              className="flex items-start gap-3 text-sm text-text-muted"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + index * 0.08 + i * 0.06 }}
            >
              <Check size={18} className="text-accent-green shrink-0 mt-0.5" />
              <span>{feature}</span>
            </motion.li>
          ))}
        </ul>
      </div>

      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className={`w-full flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-[15px] ${
          plan.isPopular 
            ? 'bg-gradient-to-r from-accent-green via-accent-cyan to-accent-cyan text-bg-primary btn-contratar' 
            : 'glass-panel text-white btn-contratar-glass border border-white/10'
        }`}
      >
        <MessageCircle size={18} className={plan.isPopular ? 'text-bg-primary' : 'text-accent-green'} />
        Contratar
        {plan.isPopular && (
          <motion.span
            animate={{ x: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ArrowRight size={16} />
          </motion.span>
        )}
      </motion.a>
    </motion.div>
  );
}
