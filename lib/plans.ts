export type PlanType = 'Fibra Óptica' | 'Inalámbrico';

export interface Plan {
  id: string;
  name: string;
  type: PlanType;
  speed: string;
  speedUnit: string;
  price: number;
  badge?: string;
  isPopular?: boolean;
  features: string[];
}

export const plans: Plan[] = [
  {
    id: 'inalambrico-basico',
    name: 'Inalámbrico Básico',
    type: 'Inalámbrico',
    speed: '20',
    speedUnit: 'Mbps',
    price: 20,
    features: [
      'Hasta 20 Mbps de conexión inalámbrica',
      'Cobertura en varios municipios del Táchira',
      'Equipo entregado en calidad de préstamo',
      'Soporte comercial por WhatsApp',
    ],
  },
  {
    id: 'inalambrico-plus',
    name: 'Inalámbrico Plus',
    type: 'Inalámbrico',
    speed: '40',
    speedUnit: 'Mbps',
    price: 30,
    features: [
      'Hasta 40 Mbps para trabajo remoto y entretenimiento',
      'Mayor capacidad para varios dispositivos',
      'Equipo entregado en calidad de préstamo',
      'Atención inmediata con Ari y el equipo humano',
    ],
  },
  {
    id: 'fibra-basico',
    name: 'Fibra Básico',
    type: 'Fibra Óptica',
    speed: '410',
    speedUnit: 'Mbps',
    price: 20,
    features: [
      'Hasta 410 Mbps por fibra óptica',
      'Velocidad simétrica para estudiar, trabajar y ver streaming',
      'Instalación gratuita en zonas de fibra seleccionadas',
      'Atención por WhatsApp con Ari',
    ],
  },
  {
    id: 'fibra-plus',
    name: 'Fibra Plus',
    type: 'Fibra Óptica',
    speed: '610',
    speedUnit: 'Mbps',
    price: 30,
    features: [
      'Hasta 610 Mbps simétricos',
      'Ideal para hogares exigentes y negocios',
      'Instalación gratuita en zonas de fibra seleccionadas',
      'Atención por WhatsApp con Ari',
    ],
  },
  {
    id: 'fibra-ultra',
    name: 'Fibra Ultra',
    type: 'Fibra Óptica',
    speed: '1024',
    speedUnit: 'Mbps',
    price: 50,
    badge: '⚡ Ultra',
    isPopular: true,
    features: [
      'Hasta 1024 Mbps simétricos',
      'Máxima velocidad para los más exigentes',
      'Prioridad en soporte técnico',
      'Instalación gratuita en zonas de fibra seleccionadas',
    ],
  },
];
