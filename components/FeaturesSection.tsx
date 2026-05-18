'use client';

import { motion } from 'framer-motion';
import { Gauge, Bot, ShieldCheck } from 'lucide-react';
import FeatureCard from './FeatureCard';

export default function FeaturesSection() {
  const features = [
    {
      icon: <Gauge size={24} className="text-accent-green" />,
      title: 'Velocidad Real',
      description:
        'Hasta 400 Mbps simétricos por fibra óptica para hogares exigentes, teletrabajo, estudio y entretenimiento.',
    },
    {
      icon: <Bot size={24} className="text-accent-cyan" />,
      title: 'Atención 24/7 con IA',
      description:
        'Ari, nuestra asistente virtual, responde al instante por WhatsApp para ventas, pagos y consultas rápidas.',
    },
    {
      icon: <ShieldCheck size={24} className="text-accent-magenta" />,
      title: 'Sin Sorpresas',
      description:
        'Equipo en préstamo e instalación gratuita en zonas de fibra seleccionadas, con condiciones claras desde el inicio.',
    },
  ];

  return (
    <section className="bg-bg-surface/40 py-20 md:py-28">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 text-sm font-medium uppercase tracking-[0.28em] text-text-muted"
          >
            Diferenciadores
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            ¿Por qué <span className="text-gradient">Ola Telecom?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mx-auto max-w-2xl text-lg leading-relaxed text-text-muted"
          >
            Una propuesta simple: velocidad estable, atención inmediata y condiciones
            transparentes.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              index={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
