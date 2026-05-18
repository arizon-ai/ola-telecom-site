# Ola Telecom Site

Landing page institucional de Ola Telecom construida con Next.js App Router, Tailwind CSS v4 y Framer Motion.

## Setup local

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Estructura

- `app/`: layout global, página principal, metadata y assets SEO.
- `components/`: secciones de la landing y componentes reutilizables.
- `lib/plans.ts`: planes y precios.
- `lib/coverage.ts`: zonas de cobertura.
- `lib/whatsapp.ts`: links centralizados de WhatsApp.

## Cómo actualizar contenido

- Planes y precios: edita `lib/plans.ts`.
- Cobertura: edita `lib/coverage.ts`.
- Links de WhatsApp: edita `lib/whatsapp.ts`.
- Metadata SEO y schema: edita `app/layout.tsx`.
- Imagen social OG/Twitter: edita `app/opengraph-image.tsx`.

## Deploy

- Recomendado: Vercel.
- Antes de desplegar, revisa `metadataBase` en `app/layout.tsx` y reemplázalo por el dominio final si cambia.
