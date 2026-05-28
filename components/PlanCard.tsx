'use client';

import { motion, useTransform, type MotionValue } from 'framer-motion';
import { Check, MessageCircle, ArrowRight } from 'lucide-react';
import { Plan } from '../lib/plans';

interface PlanCardProps {
  plan: Plan;
  index: number;
  total: number;
  scrollProgress: MotionValue<number>;
}

export default function PlanCard({ plan, index, total, scrollProgress }: PlanCardProps) {
  const message = encodeURIComponent(`Hola Ari, me interesa el plan ${plan.name}`);
  const whatsappUrl = `https://wa.me/584247612828?text=${message}`;

  // Each card reveals at a different slice of the scroll progress
  // Card 0 appears first (0% → 30%), card 1 (15% → 45%), etc.
  const segmentSize = 0.35;
  const gap = (1 - segmentSize) / Math.max(total - 1, 1);
  const start = index * gap;
  const end = start + segmentSize;

  const opacity = useTransform(scrollProgress, [start, end], [0, 1]);
  const y = useTransform(scrollProgress, [start, end], [70, 0]);
  const scale = useTransform(scrollProgress, [start, end], [0.88, 1]);

  return (
    <motion.div
      style={{ opacity, y, scale }}
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
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-accent-green via-accent-cyan to-accent-magenta px-4 py-1 rounded-full text-[11px] uppercase tracking-wider font-bold text-bg-primary shadow-[0_4px_20px_rgba(56,189,248,0.3)] whitespace-nowrap">
          {plan.badge}
        </div>
      )}
      
      <div className="mb-6 text-center">
        <span className="text-accent-cyan text-sm font-semibold tracking-wider uppercase">{plan.type}</span>
        <h3 className="text-2xl font-bold mt-2 mb-4">{plan.name}</h3>
        <div className="flex items-end justify-center gap-1 mb-2">
          <span className="text-5xl font-extrabold text-gradient">
            {plan.speed}
          </span>
          <span className="text-xl font-medium text-text-muted mb-1">{plan.speedUnit}</span>
        </div>
        <div className="text-3xl font-bold mt-4">
          ${plan.price}<span className="text-lg text-text-muted font-normal">/mes</span>
        </div>
      </div>

      <div className="flex-grow">
        <ul className="space-y-3 mb-8">
          {plan.features.map((feature, i) => (
            <li
              key={i}
              className="flex items-start gap-3 text-sm text-text-muted"
            >
              <Check size={18} className="text-accent-green shrink-0 mt-0.5" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* All Contratar buttons have the same gradient + glow effect */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
        className="w-full flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-[15px] bg-gradient-to-r from-accent-green via-accent-cyan to-accent-cyan text-bg-primary btn-contratar"
      >
        <MessageCircle size={18} />
        Contratar
        <motion.span
          animate={{ x: [0, 4, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowRight size={16} />
        </motion.span>
      </motion.a>
    </motion.div>
  );
}
