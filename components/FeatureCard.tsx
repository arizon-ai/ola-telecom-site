'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  index: number;
}

export default function FeatureCard({ icon, title, description, index }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      whileHover={{ y: -6 }}
      className="glass-panel flex flex-col items-start gap-4 rounded-[28px] p-6 md:p-8 card-hover-glow hover:border-white/15"
    >
      <motion.div
        className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,rgba(92,230,155,0.18),rgba(66,216,244,0.14),rgba(218,99,239,0.16))] text-text-primary"
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        {icon}
      </motion.div>
      <div>
        <h3 className="mb-2 text-xl font-bold">{title}</h3>
        <p className="text-text-muted leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}
