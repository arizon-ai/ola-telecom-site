'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CheckCircle2, MessageCircle, ShieldCheck, Zap } from 'lucide-react';
import FloatingOrbs from './FloatingOrbs';
import { motion } from 'framer-motion';

export default function Hero() {
  const highlights = [
    'Instalacion rapida',
    'Soporte por WhatsApp',
    'Fibra e inalambrico',
  ];

  const stats = [
    { value: '1024 Mbps', label: 'Velocidad maxima' },
    { value: '$20', label: 'Planes desde' },
    { value: '24/7', label: 'Monitoreo de red' },
  ];

  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden px-0 pt-24 pb-20 md:pb-24">
      <FloatingOrbs />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-bg-primary to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-bg-surface/90" />
      <div className="pointer-events-none absolute left-1/2 top-24 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-accent-cyan/6 blur-[140px]" />

      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-6">
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1fr)_520px] lg:gap-14">
          <div className="text-center lg:max-w-[620px] lg:text-left">
            <motion.div
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-text-muted shadow-[0_10px_40px_rgba(4,2,10,0.22)]"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="h-2.5 w-2.5 rounded-full bg-accent-green shadow-[0_0_18px_rgba(52,211,153,0.9)]" />
              Cobertura confiable para hogares y negocios
            </motion.div>

            <motion.h1
              className="mb-6 text-[46px] font-extrabold leading-[1.02] tracking-[-0.04em] md:text-[78px]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              Internet de <span className="text-gradient">alta velocidad</span>
              <br className="hidden md:block" /> para el Tachira
            </motion.h1>

            <motion.p
              className="mx-auto mb-10 max-w-2xl text-[17px] font-light leading-relaxed text-text-muted md:text-[20px] lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              Fibra optica hasta 1024 Mbps y conexiones inalambricas confiables para
              hogares, comercios y negocios. Planes claros, instalacion rapida y
              atencion inmediata.
            </motion.p>

            <motion.div
              className="mb-10 flex flex-wrap justify-center gap-3 lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.14, ease: [0.16, 1, 0.3, 1] }}
            >
              {highlights.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-text-primary/90"
                >
                  {item}
                </span>
              ))}
            </motion.div>

            <motion.div
              className="flex flex-col items-center gap-4 sm:flex-row lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                href="#planes"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-text-primary px-8 py-4 text-[15px] font-semibold text-bg-primary transition-all duration-300 hover:bg-gray-200 sm:w-auto"
              >
                Ver Planes <ArrowRight size={18} />
              </Link>

              <a
                href="https://wa.me/584247612828?text=Hola%20Ari%20%F0%9F%91%8B"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 px-8 py-4 text-[15px] font-semibold text-text-primary transition-all duration-300 hover:bg-white/5 sm:w-auto"
              >
                Habla con Ari <MessageCircle size={18} className="text-accent-cyan" />
              </a>
            </motion.div>

            <motion.div
              className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
            >
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="glass-panel rounded-2xl px-5 py-4 text-left shadow-[0_10px_30px_rgba(4,2,10,0.18)]"
                >
                  <div className="text-xl font-semibold text-text-primary">{stat.value}</div>
                  <div className="mt-1 text-sm text-text-muted">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            <motion.div
              className="mt-10 flex items-center justify-center gap-3 text-sm text-text-subtle lg:justify-start"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.34, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="h-px w-12 bg-gradient-to-r from-transparent to-white/20" />
              Conectividad moderna para Seboruco y el sur del Tachira
            </motion.div>
          </div>

          <motion.div
            className="relative hidden lg:flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.96, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="absolute left-10 top-10 h-44 w-44 rounded-full bg-accent-cyan/20 blur-[90px]" />
            <div className="absolute bottom-10 right-6 h-40 w-40 rounded-full bg-accent-magenta/20 blur-[90px]" />
            <div className="absolute left-0 top-1/2 h-32 w-32 rounded-full bg-accent-green/15 blur-[80px]" />
            <div className="absolute inset-0 rounded-[40px] border border-white/[0.04]" />

            <div className="relative w-full max-w-[520px] rounded-[36px] border border-white/10 bg-white/[0.04] p-6 shadow-[0_30px_80px_rgba(3,2,10,0.34)] backdrop-blur-2xl">
              <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

              <div className="rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] p-7">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-text-subtle">
                      Ola Telecom
                    </p>
                    <h3 className="mt-3 max-w-[260px] text-3xl font-semibold leading-tight text-text-primary">
                      Internet para trabajar, estudiar y disfrutar
                    </h3>
                  </div>
                  <Image
                    src="/logo.png"
                    alt="Ola Telecom"
                    width={499}
                    height={500}
                    className="h-16 w-auto shrink-0"
                  />
                </div>

                <div className="mt-8 overflow-hidden rounded-[28px] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.16),transparent_42%),linear-gradient(180deg,rgba(10,8,18,0.88),rgba(9,5,15,0.96))] p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-text-muted">Cobertura disponible</p>
                      <p className="mt-2 text-4xl font-semibold text-text-primary">Fibra +</p>
                      <p className="text-lg font-medium text-text-muted">Inalambrico</p>
                    </div>
                    <div className="flex items-end gap-2">
                      <span className="h-10 w-3 rounded-full bg-accent-green/60" />
                      <span className="h-16 w-3 rounded-full bg-accent-cyan/70" />
                      <span className="h-12 w-3 rounded-full bg-accent-magenta/70" />
                      <span className="h-20 w-3 rounded-full bg-text-primary/85" />
                    </div>
                  </div>

                  <div className="relative mt-8 flex items-center justify-center py-6">
                    <div className="absolute h-44 w-44 rounded-full bg-accent-cyan/8 blur-[50px]" />
                    <div className="absolute h-40 w-40 rounded-full border border-accent-cyan/20" />
                    <div className="absolute h-[7.5rem] w-[7.5rem] rounded-full border border-accent-cyan/20" />
                    <div className="absolute h-[5.5rem] w-[5.5rem] rounded-full border border-accent-cyan/20" />
                    <motion.div
                      className="absolute h-40 w-40 rounded-full border border-accent-cyan/40"
                      animate={{ scale: [1, 1.08, 1], opacity: [0.55, 0.15, 0.55] }}
                      transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}
                    />
                    <motion.div
                      className="absolute h-[7.5rem] w-[7.5rem] rounded-full border border-accent-green/35"
                      animate={{ scale: [1, 1.1, 1], opacity: [0.45, 0.12, 0.45] }}
                      transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
                    />
                    <div className="relative flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full bg-[linear-gradient(135deg,rgba(52,211,153,0.9),rgba(56,189,248,0.9),rgba(192,132,252,0.85))] shadow-[0_0_32px_rgba(56,189,248,0.28)]">
                      <Zap size={24} className="text-bg-primary" />
                    </div>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-3 gap-3">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <CheckCircle2 size={18} className="text-accent-green" />
                    <p className="mt-3 text-sm font-medium text-text-primary">
                      Instalacion sin costo en zonas de fibra
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <ShieldCheck size={18} className="text-accent-cyan" />
                    <p className="mt-3 text-sm font-medium text-text-primary">
                      Planes claros y soporte cercano
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <MessageCircle size={18} className="text-accent-magenta" />
                    <p className="mt-3 text-sm font-medium text-text-primary">
                      Atencion agil por WhatsApp con Ari
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
