'use client';

import { motion } from 'framer-motion';
import { Check, MessageCircle } from 'lucide-react';
import { Plan } from '../lib/plans';

export default function PlanCard({ plan, index }: { plan: Plan; index: number }) {
  const message = encodeURIComponent(`Hola Ari, me interesa el plan ${plan.name}`);
  const whatsappUrl = `https://wa.me/584247612828?text=${message}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative glass-panel rounded-2xl p-6 md:p-8 flex flex-col h-full transition-all duration-500 hover:-translate-y-1 ${
        plan.isPopular 
          ? 'border-accent-cyan/30 shadow-[0_0_30px_rgba(56,189,248,0.06)]' 
          : 'border-white/5 hover:border-white/10'
      }`}
    >
      {plan.badge && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-accent-green via-accent-cyan to-accent-magenta px-4 py-1 rounded-full text-[11px] uppercase tracking-wider font-bold text-bg-primary shadow-lg whitespace-nowrap">
          {plan.badge}
        </div>
      )}
      
      <div className="mb-6 text-center">
        <span className="text-accent-cyan text-sm font-semibold tracking-wider uppercase">{plan.type}</span>
        <h3 className="text-2xl font-bold mt-2 mb-4">{plan.name}</h3>
        <div className="flex items-end justify-center gap-1 mb-2">
          <span className="text-5xl font-extrabold text-gradient">{plan.speed}</span>
          <span className="text-xl font-medium text-text-muted mb-1">{plan.speedUnit}</span>
        </div>
        <div className="text-3xl font-bold mt-4">
          ${plan.price}<span className="text-lg text-text-muted font-normal">/mes</span>
        </div>
      </div>

      <div className="flex-grow">
        <ul className="space-y-3 mb-8">
          {plan.features.map((feature, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-text-muted">
              <Check size={18} className="text-accent-green shrink-0 mt-0.5" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold transition-all ${
          plan.isPopular 
            ? 'bg-text-primary text-bg-primary hover:bg-gray-200' 
            : 'glass-panel hover:bg-white/10 text-white'
        }`}
      >
        <MessageCircle size={18} className={plan.isPopular ? 'text-bg-primary' : 'text-accent-green'} />
        Contratar
      </a>
    </motion.div>
  );
}
