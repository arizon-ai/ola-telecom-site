'use client';

import { motion } from 'framer-motion';
import { CreditCard, SatelliteDish } from 'lucide-react';
import { whatsappLinks } from '../lib/whatsapp';

export default function CTASection() {
  return (
    <section id="contacto" className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(66,216,244,0.14),transparent_45%)]" />
      <div className="relative z-10 mx-auto max-w-5xl px-6">
        <div className="glass-panel rounded-[36px] px-6 py-12 md:px-12 md:py-16 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 text-sm font-medium uppercase tracking-[0.28em] text-text-muted"
          >
            Pago y Contacto
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-5 text-4xl md:text-6xl font-bold tracking-tight"
          >
            ¿Listo para conectarte?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-text-muted"
          >
            Elige la acción que necesitas y abre el chat con Ari para continuar en
            segundos.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href={whatsappLinks.payService}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-2xl px-8 py-5 text-lg font-bold transition-all button-primary"
            >
              <CreditCard size={22} />
              Pagar mi servicio
            </a>

            <a
              href={whatsappLinks.hirePlan}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-2xl px-8 py-5 text-lg font-bold transition-all button-secondary"
            >
              <SatelliteDish size={22} className="text-accent-cyan" />
              Contratar un plan
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mx-auto mt-8 max-w-xl text-text-muted"
          >
            Serás atendido por Ari, nuestra asistente virtual, y por nuestro equipo
            humano cuando sea necesario.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
