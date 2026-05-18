# PRD — Sitio Web Ola Telecom

**Producto:** Landing Page / Sitio Web Institucional  
**Empresa:** Ola Telecom — Proveedor de Internet (Fibra Óptica e Inalámbrico)  
**Ubicación:** Seboruco, Estado Táchira, Venezuela  
**Fecha:** Abril 2026  
**Stack recomendado:** Next.js 14+ (App Router) · Tailwind CSS · Framer Motion  
**Dominio de producción:** Por definir  

---

## 1. Visión del Producto

Un sitio web de una sola página (SPA/Landing Page) ultra moderno y minimalista que comunique la propuesta de valor de Ola Telecom en menos de 10 segundos de scroll. Diseño "glass-morphism" oscuro inspirado en la identidad visual del logo (fondo púrpura profundo, gradientes neón verde→cyan→magenta, esferas decorativas flotantes). El flujo principal del usuario culmina en un botón de pago/contacto que abre un chat de WhatsApp directo con Ari, el agente IA de la empresa.

---

## 2. Identidad Visual — Design Tokens

Extraídos del logo oficial para mantener coherencia de marca en toda la web.

### 2.1 Paleta de Colores

| Token | Hex | Uso |
|---|---|---|
| `--bg-primary` | `#1A0A2E` | Fondo principal del body |
| `--bg-surface` | `#2D1050` | Cards, secciones alternas |
| `--bg-glass` | `rgba(255,255,255,0.05)` | Glassmorphism panels |
| `--accent-green` | `#4ADE80` | CTAs primarios, íconos de velocidad |
| `--accent-cyan` | `#22D3EE` | Links, subtítulos, detalles |
| `--accent-magenta` | `#D946EF` | Highlights, badges de plan Ultra |
| `--accent-gradient` | `linear-gradient(135deg, #4ADE80, #22D3EE, #D946EF)` | Texto hero, bordes de cards |
| `--text-primary` | `#FFFFFF` | Texto principal |
| `--text-muted` | `#A78BBA` | Texto secundario |
| `--text-subtle` | `#6B5080` | Placeholders, notas al pie |

### 2.2 Tipografía

| Nivel | Font | Weight | Tamaño (desktop / mobile) |
|---|---|---|---|
| Display (Hero) | Inter | 800 | 72px / 40px |
| H1 | Inter | 700 | 48px / 32px |
| H2 | Inter | 600 | 32px / 24px |
| H3 | Inter | 600 | 24px / 20px |
| Body | Inter | 400 | 16px / 16px |
| Caption | Inter | 400 | 14px / 13px |

### 2.3 Efectos y Motifs

- **Glassmorphism:** `backdrop-filter: blur(16px)` + borde `1px solid rgba(255,255,255,0.1)` sobre fondos semi-transparentes.
- **Esferas flotantes:** Círculos de 8–120px con los colores `accent-green`, `accent-cyan`, `accent-magenta` al 20–40% de opacidad, animados con `float` suave (Framer Motion). Inspirados directamente en las burbujas del logo.
- **Gradiente en texto:** El nombre "Olá" y CTAs clave usan `background-clip: text` con `--accent-gradient`.
- **Bordes glow:** Cards de plan con `box-shadow: 0 0 30px rgba(74,222,128,0.15)` al hover.

### 2.4 Espaciado y Layout

- Contenedor máximo: `1200px` centrado.
- Secciones: padding vertical `120px` desktop / `80px` mobile.
- Gap entre cards: `24px`.
- Border radius global: `16px` cards, `12px` botones, `999px` pills/badges.

---

## 3. Arquitectura de Secciones

La landing page se compone de **7 secciones** en scroll vertical:

### 3.1 Navbar (Fija)

- Logo "Olá Telecom" a la izquierda (versión simplificada: solo texto con gradiente, sin burbujas).
- Links ancla: Planes · Cobertura · Contacto.
- Botón CTA flotante a la derecha: **"Pagar / Contactar"** → Abre WhatsApp con Ari.
- Efecto: Glassmorphism con blur al hacer scroll, transparente al inicio.

### 3.2 Hero Section

- Título grande con gradiente: **"Internet de alta velocidad para el Táchira"**
- Subtítulo en `--text-muted`: "Fibra óptica hasta 400 Mbps. Planes desde $20/mes."
- Esferas animadas flotando en el fondo (3–5 círculos difuminados).
- CTA principal: Botón grande **"Ver Planes"** (scroll a sección planes).
- CTA secundario: **"Habla con Ari 💬"** → WhatsApp link.

### 3.3 Planes de Internet

- 4 cards en grid 2×2 (desktop) / stack vertical (mobile).
- Cada card: nombre del plan, tipo (Fibra/Inalámbrico), velocidad destacada en grande, precio, botón "Contratar" → WhatsApp.
- Cards de plan Ultra con borde gradiente y badge "Más Popular" o "Ultra".
- Nota al pie: "Precios en USD. Pago en bolívares con 50% de recargo sobre tasa BCV del día. Pago en COP a tasa de 4.000 COP/USD."

**Detalle de las 4 cards:**

| Card | Nombre | Velocidad | Precio | Badge |
|---|---|---|---|---|
| 1 | Fibra Básico | 200 Mbps | $20/mes | — |
| 2 | Fibra Ultra | 400 Mbps | $40/mes | ⚡ Ultra |
| 3 | Inalámbrico Básico | 20 Mbps | $20/mes | — |
| 4 | Inalámbrico Ultra | 40 Mbps | $40/mes | ⚡ Ultra |

### 3.4 Cobertura

- Mapa estilizado o ilustración SVG minimalista del sur del Táchira.
- Dos columnas: **Fibra Óptica** (con ícono de fibra) y **Inalámbrico** (con ícono de antena).
- Fibra: Seboruco (Casco Central), Jáuregui (Venegara, Sabana Grande), Umuquena (Casco Central).
- Inalámbrico: Seboruco, Jáuregui, Antonio Rómulo Costa, José María Vargas, García de Hevia, San Judas Tadeo, Panamericano.
- Badge: "Instalación gratuita en Seboruco y Sabana Grande" (zonas de fibra).
- CTA: "¿No encuentras tu zona? Pregúntale a Ari →" → WhatsApp.

### 3.5 ¿Por qué Ola Telecom? (Diferenciadores)

- 3 feature cards horizontales con íconos minimalistas:
  1. **Velocidad Real** — "Hasta 400 Mbps simétricos por fibra óptica."
  2. **Atención 24/7 con IA** — "Ari, nuestra asistente virtual, te atiende al instante por WhatsApp."
  3. **Sin Sorpresas** — "Equipo en préstamo. Instalación gratuita en zonas de fibra."

### 3.6 Botón de Pago / Contacto (Sección CTA Final)

- Fondo con gradiente sutil más claro que el resto.
- Título: **"¿Listo para conectarte?"**
- Dos botones grandes:
  1. **"Pagar mi servicio 💳"** → `https://wa.me/584247612828?text=Hola%20Ari%2C%20quiero%20pagar%20mi%20servicio`
  2. **"Contratar un plan 📡"** → `https://wa.me/584247612828?text=Hola%20Ari%2C%20quiero%20información%20sobre%20los%20planes`
- Nota: "Serás atendido por Ari, nuestra asistente virtual, y nuestro equipo humano."

### 3.7 Footer

- Logo simplificado.
- Datos de contacto: WhatsApp 04247612828 · Fijo 02774142955.
- Dirección de oficina.
- Horario de atención.
- Copyright © 2026 Ola Telecom.

---

## 4. Flujo Principal del Usuario

```
[Usuario llega al sitio]
       │
       ▼
  [Hero Section]
  "Internet de alta velocidad para el Táchira"
       │
       ├── CTA "Ver Planes" ──────► [Scroll a Sección Planes]
       │                                    │
       │                              [Selecciona plan]
       │                                    │
       │                              CTA "Contratar"
       │                                    │
       │                                    ▼
       │                          [WhatsApp → Ari]
       │                    Mensaje pre-llenado con plan de interés
       │
       ├── CTA "Habla con Ari" ──► [WhatsApp → Ari]
       │                          Saludo genérico
       │
       ▼
  [Scroll natural]
  Planes → Cobertura → Diferenciadores → CTA Pago
       │
       ▼
  [CTA Final: "Pagar mi servicio"]
       │
       ▼
  [WhatsApp → Ari]
  Mensaje: "Hola Ari, quiero pagar mi servicio"
```

---

## 5. Requisitos No Funcionales

| Requisito | Meta |
|---|---|
| Lighthouse Performance | ≥ 95 |
| Lighthouse Accessibility | ≥ 95 |
| First Contentful Paint | < 1.2s |
| Cumulative Layout Shift | < 0.05 |
| Responsive | Mobile-first, breakpoints: 640 / 768 / 1024 / 1280 px |
| SEO | Meta tags, Open Graph, favicon, schema.org LocalBusiness |
| Hosting | Vercel (recomendado) o cualquier plataforma estática |
| Analytics | Google Analytics 4 o Plausible |
| Idioma | Español (Venezuela), sin internacionalización |

---

## 6. Plan de Sprints

### Sprint 1 — Fundación y Hero (Tareas 1–6)

**Duración estimada:** 3–4 horas con Claude Code  
**Objetivo:** Proyecto inicializado, design system configurado, navbar y hero section funcionales.

| # | Tarea | Descripción | Criterio de aceptación |
|---|---|---|---|
| 1 | Scaffold del proyecto | `npx create-next-app@latest` con App Router, TypeScript, Tailwind. Estructura de carpetas: `app/`, `components/`, `lib/`, `public/`. | Proyecto corre en `localhost:3000` sin errores. |
| 2 | Design tokens en Tailwind | Extender `tailwind.config.ts` con toda la paleta (Sección 2.1), tipografía Inter vía Google Fonts, border-radius, spacing. CSS custom properties en `globals.css`. | Tokens accesibles como `bg-bg-primary`, `text-accent-green`, etc. |
| 3 | Layout global + fuentes | `app/layout.tsx` con `<html lang="es">`, font Inter, fondo `--bg-primary`, meta tags básicos. | Fondo púrpura, texto blanco por defecto, fuente Inter cargada. |
| 4 | Componente: Navbar | Navbar fija con glassmorphism. Logo texto "Olá Telecom" con gradiente. Links ancla. Botón CTA WhatsApp. Responsive con menú hamburguesa en mobile. | Navbar visible, sticky, blur al scroll. Links hacen scroll suave. Botón abre WhatsApp. |
| 5 | Componente: Hero Section | Título con gradiente. Subtítulo. Botón "Ver Planes" (scroll). Botón "Habla con Ari" (WhatsApp). | Ambos CTAs funcionales. Responsive. |
| 6 | Esferas decorativas | Componente `FloatingOrbs` con 3–5 círculos en posición absoluta, animados con CSS o Framer Motion. Colores de la paleta al 20–40% opacidad. | Esferas visibles en hero, animación suave sin afectar performance. |

---

### Sprint 2 — Sección de Planes (Tareas 7–11)

**Duración estimada:** 2–3 horas con Claude Code  
**Objetivo:** Cards de planes completas con toda la información y CTAs funcionales.

| # | Tarea | Descripción | Criterio de aceptación |
|---|---|---|---|
| 7 | Data model de planes | Archivo `lib/plans.ts` con array de objetos: `{ id, name, type, speed, speedUnit, price, badge?, features[] }` para los 4 planes. | Datos tipados, importables. |
| 8 | Componente: PlanCard | Card glassmorphism. Muestra: badge (si aplica), nombre, tipo, velocidad en grande, precio, botón "Contratar". Plan Ultra con borde gradiente y glow. | Card renderiza correctamente con y sin badge. |
| 9 | Sección: Planes | Grid 2×2 desktop, stack mobile. Título "Nuestros Planes". Nota al pie sobre precios y monedas. | 4 cards visibles, responsive, nota al pie legible. |
| 10 | Deep links WhatsApp por plan | Cada botón "Contratar" genera URL `wa.me/584247612828?text=...` con mensaje pre-llenado mencionando el plan específico. | Al hacer clic, abre WhatsApp con texto: "Hola Ari, me interesa el plan [nombre del plan]". |
| 11 | Animaciones de entrada | Cards aparecen con fade-in + slide-up al entrar en viewport (Intersection Observer o Framer Motion `whileInView`). | Animación suave al scrollear hacia la sección. |

---

### Sprint 3 — Cobertura y Diferenciadores (Tareas 12–17)

**Duración estimada:** 3–4 horas con Claude Code  
**Objetivo:** Sección de cobertura con mapa/ilustración y sección de diferenciadores.

| # | Tarea | Descripción | Criterio de aceptación |
|---|---|---|---|
| 12 | Data model de cobertura | `lib/coverage.ts` con arrays para zonas de fibra y zonas inalámbricas, incluyendo municipios y sectores. | Datos tipados, importables. |
| 13 | Componente: CoverageSection | Dos columnas: Fibra (ícono fibra) e Inalámbrico (ícono antena). Lista de zonas. Badge "Instalación gratuita". CTA "Pregúntale a Ari". | Zonas listadas correctamente, CTA abre WhatsApp, responsive. |
| 14 | Ilustración SVG del mapa | SVG minimalista y estilizado mostrando la región sur del Táchira con puntos de cobertura iluminados en los colores de la marca. No necesita ser geográficamente preciso, solo decorativo. | SVG renderiza, se adapta al contenedor, colores coherentes con la marca. |
| 15 | Componente: FeatureCard | Card minimalista con ícono (Lucide o SVG custom), título, descripción. Efecto hover sutil. | Card renderiza con ícono, texto legible, hover funcional. |
| 16 | Sección: Diferenciadores | 3 FeatureCards en row (desktop) / stack (mobile). Título "¿Por qué Ola Telecom?". Contenido: Velocidad Real, Atención IA, Sin Sorpresas. | 3 cards visibles, responsive, íconos diferenciados. |
| 17 | Animaciones de entrada | Misma lógica de Sprint 2 para las nuevas secciones. Stagger en feature cards. | Animaciones suaves sin jank. |

---

### Sprint 4 — CTA de Pago, Footer y SEO (Tareas 18–24)

**Duración estimada:** 2–3 horas con Claude Code  
**Objetivo:** Sección final de pago/contacto, footer, meta tags, y optimización.

| # | Tarea | Descripción | Criterio de aceptación |
|---|---|---|---|
| 18 | Sección: CTA Final | Fondo con gradiente sutil. Título "¿Listo para conectarte?". Dos botones grandes: "Pagar mi servicio 💳" y "Contratar un plan 📡". Nota sobre Ari. | Botones abren WhatsApp con mensajes pre-llenados distintos. Sección visualmente destacada. |
| 19 | Componente: Footer | Logo, datos de contacto (WhatsApp, fijo), dirección de oficina, horario, copyright. Links a secciones. | Footer completo, responsive, links funcionales. |
| 20 | SEO: Meta tags y Open Graph | `app/layout.tsx`: title, description, og:title, og:description, og:image (crear imagen OG 1200×630 con los colores de la marca). twitter:card. | Meta tags presentes en `<head>`. Preview correcto al compartir URL. |
| 21 | SEO: Schema.org | JSON-LD `LocalBusiness` con nombre, dirección, teléfono, horario, tipo de servicio. Insertado en layout. | JSON-LD válido en el source del HTML. |
| 22 | Favicon y manifest | Favicon generado a partir del logo (versión simplificada: letra "O" con gradiente). `site.webmanifest` con colores de la marca. | Favicon visible en pestaña del navegador. |
| 23 | Analytics | Integrar Google Analytics 4 (o Plausible) con el ID de medición. Tracking de eventos en botones de WhatsApp. | Eventos de clic en CTAs registrados en el dashboard de analytics. |
| 24 | Performance audit | Ejecutar Lighthouse. Optimizar imágenes (WebP/AVIF), lazy loading, font-display: swap. Verificar CLS < 0.05. | Lighthouse Performance ≥ 95, Accessibility ≥ 95. |

---

### Sprint 5 — Pulido, Testing y Deploy (Tareas 25–30)

**Duración estimada:** 2–3 horas con Claude Code  
**Objetivo:** QA completo, ajustes finales y despliegue a producción.

| # | Tarea | Descripción | Criterio de aceptación |
|---|---|---|---|
| 25 | Responsive QA | Testear en viewports: 375px (iPhone SE), 390px (iPhone 14), 768px (iPad), 1024px, 1440px. Ajustar cualquier overflow, texto cortado o layout roto. | Sin problemas visuales en ningún breakpoint. |
| 26 | Cross-browser QA | Verificar en Chrome, Safari, Firefox. Especial atención a `backdrop-filter` (Safari) y gradientes en texto. | Funcional y visualmente consistente en los 3 browsers. |
| 27 | Accesibilidad | Verificar contraste de colores (WCAG AA mínimo). Alt text en imágenes. Focus states en botones y links. Skip to content link. | Lighthouse Accessibility ≥ 95. Navegable con teclado. |
| 28 | WhatsApp links QA | Testear todos los deep links de WhatsApp en dispositivo real (Android + iOS). Verificar que los mensajes pre-llenados llegan correctamente con caracteres especiales y tildes. | Todos los links abren WhatsApp con el mensaje correcto. |
| 29 | Deploy a Vercel | Conectar repo a Vercel. Configurar dominio personalizado (cuando esté disponible). Variables de entorno para analytics. | Sitio accesible en URL de Vercel. Build exitoso. |
| 30 | Documentación | README.md con: instrucciones de setup local, estructura del proyecto, cómo cambiar planes/precios/cobertura, cómo actualizar el link de WhatsApp. | README completo y claro para mantenimiento futuro. |

---

## 7. Resumen de Sprints

| Sprint | Nombre | Tareas | Horas est. | Entregable principal |
|---|---|---|---|---|
| 1 | Fundación y Hero | 1–6 | 3–4h | Proyecto base + navbar + hero funcional |
| 2 | Planes | 7–11 | 2–3h | Cards de planes con CTAs a WhatsApp |
| 3 | Cobertura y Diferenciadores | 12–17 | 3–4h | Sección de cobertura + features |
| 4 | CTA, Footer y SEO | 18–24 | 2–3h | Sección de pago + footer + SEO completo |
| 5 | Pulido y Deploy | 25–30 | 2–3h | QA + deploy a producción |

**Total estimado:** 12–17 horas con Claude Code / Cursor  
**Total de tareas atómicas:** 30

---

## 8. Links de WhatsApp (Referencia Rápida)

Todos los CTAs de WhatsApp apuntan al número de Ari: **+58 424 761 2828**

| Contexto | URL | Mensaje pre-llenado |
|---|---|---|
| CTA genérico (navbar, hero) | `https://wa.me/584247612828?text=Hola%20Ari%20%F0%9F%91%8B` | "Hola Ari 👋" |
| Contratar plan específico | `https://wa.me/584247612828?text=Hola%20Ari%2C%20me%20interesa%20el%20plan%20{NOMBRE_PLAN}` | "Hola Ari, me interesa el plan {nombre}" |
| Pagar servicio | `https://wa.me/584247612828?text=Hola%20Ari%2C%20quiero%20pagar%20mi%20servicio%20%F0%9F%92%B3` | "Hola Ari, quiero pagar mi servicio 💳" |
| Consultar cobertura | `https://wa.me/584247612828?text=Hola%20Ari%2C%20quiero%20saber%20si%20tienen%20cobertura%20en%20mi%20zona%20%F0%9F%93%8D` | "Hola Ari, quiero saber si tienen cobertura en mi zona 📍" |

---

## 9. Condiciones del Equipo y Notas Legales (Contenido para el sitio)

- El equipo (router/antena) se entrega bajo modalidad de **calidad de préstamo**.
- La instalación es gratuita únicamente en zonas con red de fibra en Seboruco (incluyendo Santa Filomena) y Sabana Grande.
- Los precios indicados son renta mensual en USD. No incluyen equipos adicionales del cliente.
- Pago en bolívares: 50% de recargo sobre el precio USD, convertido a tasa BCV del día.
- Pago en pesos colombianos: tasa fija de 4.000 COP por USD.

---

## 10. Datos de Pago (Referencia — NO publicar en el sitio)

Estos datos los maneja Ari por WhatsApp. No se publican en la web por seguridad.

- **Bancamiga (0172):** Titular Jhon Martínez · Pago Móvil 04141199704 · C.I. 30261704
- **Nequi:** Titular Jhon Martínez · Tel. 3152523913

---

*Documento generado como referencia de desarrollo. Todas las tareas están diseñadas para ejecución atómica con Claude Code, Cursor o herramientas de desarrollo asistido por IA.*