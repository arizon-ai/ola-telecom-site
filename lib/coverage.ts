export interface CoverageZone {
  municipality: string;
  sectors?: string[];
}

export const fiberCoverage: CoverageZone[] = [
  {
    municipality: 'Seboruco',
    sectors: ['Casco Central', 'Santa Filomena'],
  },
  {
    municipality: 'Jáuregui',
    sectors: ['Venegara', 'Sabana Grande'],
  },

];

export const wirelessCoverage: CoverageZone[] = [
  { municipality: 'Seboruco' },
  { municipality: 'Jáuregui' },
  { municipality: 'Antonio Rómulo Costa' },
  { municipality: 'José María Vargas' },
  { municipality: 'García de Hevia' },
  { municipality: 'San Judas Tadeo' },

];
