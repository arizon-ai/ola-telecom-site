'use client';

import { motion } from 'framer-motion';
import { fiberCoverage, wirelessCoverage } from '../lib/coverage';
import { Cable, MapPinned, MessageCircle, RadioTower, Wifi } from 'lucide-react';

type MapNode = {
  name: string;
  x: number;
  y: number;
  labelX: number;
  labelY: number;
  lineX: number;
  lineY: number;
  anchor: 'start' | 'end';
};

export default function CoverageSection() {
  const mapPath =
    'M171 24C186 30 209 31 227 31C246 31 256 36 257 52C258 66 255 79 262 93C272 110 278 124 271 135C262 145 252 154 247 166C243 177 243 188 250 194C261 196 274 203 284 216C296 232 305 252 318 270C327 284 338 286 343 297C339 312 326 322 323 336C320 352 324 372 316 389C310 401 313 416 322 427C331 439 339 453 333 463C322 470 299 466 278 463C253 459 232 460 212 455C197 452 198 463 201 475C200 493 187 509 169 514C151 519 131 514 117 503C102 491 93 474 78 472C60 471 44 487 32 484C25 473 26 458 20 444C16 428 15 405 16 381C16 351 18 325 19 301C19 282 20 265 16 248C11 234 8 221 14 213C22 208 31 204 36 194C38 184 35 173 39 158C43 143 42 129 39 114C36 98 40 86 49 77C56 71 61 63 62 53C67 44 76 39 83 31C90 24 98 18 104 20C110 25 111 39 109 56C107 74 106 90 109 105C113 109 118 103 124 95C132 84 140 76 148 77C158 78 165 69 167 56C168 43 170 34 171 24Z';

  const fiberNodes: MapNode[] = [
    { name: 'Jauregui', x: 238, y: 165, labelX: 286, labelY: 152, lineX: 274, lineY: 156, anchor: 'start' },
    { name: 'Seboruco', x: 182, y: 248, labelX: 232, labelY: 254, lineX: 220, lineY: 252, anchor: 'start' },
  ];

  const wirelessNodes: MapNode[] = [
    { name: 'Garcia de Hevia', x: 142, y: 102, labelX: 96, labelY: 92, lineX: 108, lineY: 96, anchor: 'end' },
    { name: 'Antonio Romulo Costa', x: 122, y: 224, labelX: 86, labelY: 234, lineX: 96, lineY: 230, anchor: 'end' },
    { name: 'San Judas Tadeo', x: 205, y: 192, labelX: 272, labelY: 186, lineX: 258, lineY: 188, anchor: 'start' },
    { name: 'Jose Maria Vargas', x: 202, y: 300, labelX: 276, labelY: 314, lineX: 262, lineY: 308, anchor: 'start' },
  ];
  const allNodes = [
    ...wirelessNodes,
    ...fiberNodes,
  ];

  return (
    <section id="cobertura" className="relative overflow-hidden bg-bg-primary py-24 md:py-36">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-bg-surface/90 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-b from-transparent to-bg-surface/30" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-cyan/[0.03] blur-[120px]" />
      <div className="pointer-events-none absolute left-[15%] top-[15%] -z-10 h-56 w-56 rounded-full bg-accent-green/[0.04] blur-[90px]" />
      <div className="pointer-events-none absolute bottom-[10%] right-[12%] -z-10 h-64 w-64 rounded-full bg-accent-magenta/[0.05] blur-[120px]" />

      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 text-sm font-medium uppercase tracking-[0.28em] text-text-muted"
          >
            Cobertura real
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 tracking-tight"
          >
            Nuestra <span className="text-gradient">Cobertura</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-text-muted text-lg max-w-2xl mx-auto font-light leading-relaxed"
          >
            Una visual inspirada en el estado Tachira para mostrar donde ya tenemos
            cobertura por fibra e inalambrico.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-5 shadow-[0_30px_80px_rgba(3,2,10,0.22)] backdrop-blur-xl md:p-7">
              <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />
              <div className="pointer-events-none absolute inset-0 rounded-[32px] border border-white/[0.04]" />
              <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-text-subtle">
                    Estado Tachira
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold text-text-primary">
                    Perimetro y zonas activas
                  </h3>
                </div>
              </div>

              <div className="relative mx-auto aspect-[0.86] w-full max-w-[560px] overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(12,8,20,0.82),rgba(8,5,14,0.92))]">
                <svg
                  viewBox="0 0 360 520"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-full w-full"
                >
                  <motion.path
                    d={mapPath}
                    fill="none"
                    stroke="rgba(255,255,255,0.94)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1.8, ease: 'easeInOut' }}
                    viewport={{ once: true }}
                  />
                  {allNodes.map((node, index) => (
                    <motion.g
                      key={node.name}
                      initial={{ opacity: 0, scale: 0.7 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.25 + index * 0.08, duration: 0.35 }}
                      viewport={{ once: true }}
                    >
                      <path
                        d={`M ${node.x} ${node.y} L ${node.lineX} ${node.lineY}`}
                        stroke="rgba(255,255,255,0.26)"
                        strokeWidth="1"
                        strokeLinecap="round"
                      />
                      <motion.circle
                        cx={node.x}
                        cy={node.y}
                        r="11"
                        fill="rgba(56,189,248,0.16)"
                        animate={{ scale: [1, 1.45, 1], opacity: [0.55, 0.15, 0.55] }}
                        transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut', delay: index * 0.14 }}
                      />
                      <circle cx={node.x} cy={node.y} r="6.5" fill="rgba(56,189,248,0.22)" />
                      <circle cx={node.x} cy={node.y} r="4.5" fill="#7DD3FC" />
                      <text
                        x={node.labelX}
                        y={node.labelY}
                        fontSize="11.5"
                        fill="#34D399"
                        fontWeight="500"
                        stroke="rgba(5,3,10,0.96)"
                        strokeWidth="3"
                        paintOrder="stroke"
                        strokeLinejoin="round"
                        textAnchor={node.anchor}
                      >
                        {node.name}
                      </text>
                    </motion.g>
                  ))}
                </svg>
              </div>

              <div className="mt-5 grid gap-3 md:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-text-subtle">
                    Cobertura fibra
                  </p>
                  <p className="mt-2 text-2xl font-semibold text-text-primary">2 zonas</p>
                  <p className="mt-1 text-sm text-text-muted">Instalacion gratuita en zonas activas.</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-text-subtle">
                    Cobertura inalambrica
                  </p>
                  <p className="mt-2 text-2xl font-semibold text-text-primary">5 municipios</p>
                  <p className="mt-1 text-sm text-text-muted">Expansiva y flexible para nuevas zonas.</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-text-subtle">
                    Activacion
                  </p>
                  <p className="mt-2 text-2xl font-semibold text-text-primary">Rapida</p>
                  <p className="mt-1 text-sm text-text-muted">Validamos disponibilidad por WhatsApp.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="mt-8 grid grid-cols-1 gap-6 lg:col-span-5 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass-panel rounded-[28px] p-6 md:p-8 transition-colors hover:border-accent-green/30"
            >
              <div className="mb-6 flex items-center gap-3">
                <div className="p-3 bg-accent-green/10 rounded-xl text-accent-green">
                  <Cable size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Zonas Fibra Optica</h3>
                  <p className="mt-1 text-sm text-text-muted">
                    Mayor estabilidad y mejor rendimiento para zonas activas.
                  </p>
                </div>
              </div>
              <ul className="space-y-4">
                {fiberCoverage.map((zone, i) => (
                  <li key={i} className="rounded-2xl border border-white/8 bg-white/[0.02] p-4 text-text-primary">
                    <strong className="mb-1 block text-accent-green">{zone.municipality}</strong>
                    {zone.sectors && (
                      <span className="block border-l-2 border-white/10 pl-2 text-sm leading-relaxed text-text-muted">
                        {zone.sectors.join(' • ')}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="glass-panel rounded-[28px] p-6 md:p-8 transition-colors hover:border-accent-cyan/30"
            >
              <div className="mb-6 flex items-center gap-3">
                <div className="p-3 bg-accent-cyan/10 rounded-xl text-accent-cyan">
                  <Wifi size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Zonas Inalambrico</h3>
                  <p className="mt-1 text-sm text-text-muted">
                    Cobertura flexible para municipios y sectores en expansion.
                  </p>
                </div>
              </div>
              <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {wirelessCoverage.map((zone, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 rounded-2xl border border-white/8 bg-white/[0.02] px-4 py-3 text-text-muted"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent-cyan/10 text-accent-cyan">
                      <RadioTower size={15} />
                    </div>
                    <span>{zone.municipality}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="rounded-[28px] border border-white/10 bg-[linear-gradient(135deg,rgba(52,211,153,0.08),rgba(56,189,248,0.06),rgba(192,132,252,0.08))] p-6 md:p-7"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-accent-green">
                  <MapPinned size={22} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-text-primary">
                    Validamos tu zona en minutos
                  </h3>
                  <p className="mt-2 max-w-xl text-text-muted">
                    Si tu sector no aparece en el mapa o en las listas, te confirmamos
                    disponibilidad, tecnologia y tiempos de instalacion por WhatsApp.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.45 }}
          className="mt-16 text-center"
        >
          <a
            href="https://wa.me/584247612828?text=Hola%20Ari%2C%20quiero%20saber%20si%20tienen%20cobertura%20en%20mi%20zona%20%F0%9F%93%8D"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-text-primary px-8 py-3.5 font-bold text-bg-primary shadow-lg transition-all hover:bg-gray-200"
          >
            <MessageCircle size={18} className="text-accent-magenta" />
            No encuentras tu zona? Preguntale a Ari
          </a>
        </motion.div>
      </div>
    </section>
  );
}
