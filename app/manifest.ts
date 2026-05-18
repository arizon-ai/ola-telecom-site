import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Ola Telecom',
    short_name: 'Ola Telecom',
    description: 'Proveedor de Internet por Fibra Óptica e Inalámbrico',
    start_url: '/',
    display: 'standalone',
    background_color: '#12081f',
    theme_color: '#12081f',
    icons: [
      {
        src: '/logo.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
