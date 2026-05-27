import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#12081f',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://ola-telecom-site.vercel.app'),
  title: 'Ola Telecom | Internet de alta velocidad para el Táchira',
  description:
    'Fibra óptica hasta 1024 Mbps y cobertura inalámbrica confiable en Seboruco y el sur del Táchira. Planes desde $20/mes y atención inmediata por WhatsApp.',
  applicationName: 'Ola Telecom',
  manifest: '/manifest.webmanifest',
  alternates: {
    canonical: '/',
  },

  openGraph: {
    title: 'Ola Telecom | Internet de alta velocidad para el Táchira',
    description:
      'Planes de fibra e inalámbrico desde $20/mes. Consulta cobertura, paga tu servicio o contrata por WhatsApp con Ari.',
    locale: 'es_VE',
    type: 'website',
    siteName: 'Ola Telecom',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ola Telecom | Internet de alta velocidad para el Táchira',
    description:
      'Fibra óptica hasta 1024 Mbps, instalación gratuita en zonas de fibra y atención por WhatsApp con Ari.',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Ola Telecom',
  description:
    'Proveedor de Internet por fibra óptica e inalámbrico en Seboruco y zonas del Estado Táchira.',
  telephone: '+58 424 761 2828',
  areaServed: [
    'Seboruco',
    'Jauregui',
    'Antonio Romulo Costa',
    'Jose Maria Vargas',
    'Garcia de Hevia',
    'San Judas Tadeo',

  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Seboruco',
    addressRegion: 'Tachira',
    addressCountry: 'VE',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '17:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '08:00',
      closes: '12:00',
    },
  ],
  sameAs: ['https://wa.me/584247612828'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${inter.variable} font-[family-name:var(--font-inter)] bg-bg-primary text-text-primary antialiased`}
      >
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
