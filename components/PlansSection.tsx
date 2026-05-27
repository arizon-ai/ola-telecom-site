'use client';

import { motion } from 'framer-motion';
import { plans } from '../lib/plans';
import PlanCard from './PlanCard';

export default function PlansSection() {
  return (
    <section
      id="planes"
      className="relative z-10 overflow-hidden border-y border-white/[0.02] bg-bg-surface py-24 md:py-36 section-glow-divider"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-bg-surface/60 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-bg-primary/50" />
      <div className="pointer-events-none absolute left-[18%] top-16 h-48 w-48 rounded-full bg-accent-cyan/[0.03] blur-[90px]" />
      <div className="pointer-events-none absolute bottom-10 right-[12%] h-48 w-48 rounded-full bg-accent-magenta/[0.04] blur-[100px]" />
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 tracking-tight"
          >
            Nuestros <span className="text-gradient">Planes</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-text-muted text-lg max-w-2xl mx-auto font-light leading-relaxed"
          >
            Internet veloz y estable para lo que necesites, en casa o en tu negocio.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8 pt-4">
          {plans.map((plan, index) => (
            <PlanCard key={plan.id} plan={plan} index={index} />
          ))}
        </div>


      </div>
    </section>
  );
}
