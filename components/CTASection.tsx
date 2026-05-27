'use client';

import { motion } from 'framer-motion';
import { CreditCard, SatelliteDish, ArrowRight, Sparkles } from 'lucide-react';
import { whatsappLinks } from '../lib/whatsapp';

export default function CTASection() {
  return (
    <section id="contacto" className="relative overflow-hidden py-24 md:py-32 section-glow-divider">
      {/* Animated background glow */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(66,216,244,0.14),transparent_45%)]" />
      <motion.div
        className="absolute left-1/4 top-1/3 h-72 w-72 rounded-full bg-accent-green/[0.06] blur-[120px]"
        animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute right-1/4 bottom-1/3 h-60 w-60 rounded-full bg-accent-magenta/[0.06] blur-[100px]"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />

      <div className="relative z-10 mx-auto max-w-5xl px-6">
        <motion.div
          className="glass-panel rounded-[36px] px-6 py-12 md:px-12 md:py-16 text-center"
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Top glow line */}
          <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-accent-cyan/30 to-transparent rounded-t-[36px]" />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent-cyan/20 bg-accent-cyan/5 px-4 py-2"
          >
            <Sparkles size={14} className="text-accent-cyan" />
            <span className="text-sm font-medium text-accent-cyan">Pago y Contacto</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="mb-5 text-4xl md:text-6xl font-bold tracking-tight"
          >
            ¿Listo para <span className="text-gradient">conectarte?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-text-muted"
          >
            Elige la acción que necesitas y abre el chat con Ari para continuar en
            segundos.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.28 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.a
              href={whatsappLinks.payService}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-3 rounded-2xl px-8 py-5 text-lg font-bold button-primary"
            >
              <CreditCard size={22} />
              Pagar mi servicio
              <ArrowRight size={18} />
            </motion.a>

            <motion.a
              href={whatsappLinks.hirePlan}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-3 rounded-2xl px-8 py-5 text-lg font-bold btn-contratar bg-gradient-to-r from-accent-green via-accent-cyan to-accent-cyan text-bg-primary"
            >
              <SatelliteDish size={22} />
              Contratar un plan
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <ArrowRight size={18} />
              </motion.span>
            </motion.a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mx-auto mt-8 max-w-xl text-text-muted"
          >
            Serás atendido por Ari, nuestra asistente virtual, y por nuestro equipo
            humano cuando sea necesario.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
