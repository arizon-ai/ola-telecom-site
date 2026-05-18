import Link from 'next/link';
import Image from 'next/image';
import { whatsappLinks } from '../lib/whatsapp';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-bg-surface/50 pt-16 pb-8">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 gap-10 px-6 lg:grid-cols-3 lg:px-8">
        <div>
          <Link href="/" className="mb-4 inline-flex items-center">
            <Image
              src="/logo.png"
              alt="Ola Telecom"
              width={512}
              height={512}
              className="h-16 w-auto"
            />
          </Link>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-text-muted">
            Proveedor de internet por fibra óptica e inalámbrico en Seboruco, Estado
            Táchira, Venezuela.
          </p>
          <a
            href={whatsappLinks.generic}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center rounded-full px-4 py-2 text-sm font-medium button-secondary"
          >
            Hablar con Ari
          </a>
        </div>

        <div>
          <h4 className="mb-4 text-lg font-bold text-white">Contacto</h4>
          <ul className="space-y-4 text-sm text-text-muted">
            <li>
              <span className="mb-1 block text-xs uppercase tracking-[0.18em] text-text-subtle">
                WhatsApp
              </span>
              <a
                href={whatsappLinks.generic}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base font-medium transition-colors hover:text-accent-cyan"
              >
                0424-7612828
              </a>
            </li>
            <li>
              <span className="mb-1 block text-xs uppercase tracking-[0.18em] text-text-subtle">
                Teléfono Fijo
              </span>
              <span className="text-base">0277-4142955</span>
            </li>
            <li>
              <span className="mb-1 block text-xs uppercase tracking-[0.18em] text-text-subtle">
                Dirección
              </span>
              <span>Seboruco, Estado Táchira, Venezuela</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-lg font-bold text-white">Horario de Atención</h4>
          <ul className="space-y-3 text-sm text-text-muted">
            <li className="flex max-w-[240px] justify-between gap-4">
              <span>Lunes a Viernes</span>
              <span>8:00 AM - 5:00 PM</span>
            </li>
            <li className="flex max-w-[240px] justify-between gap-4">
              <span>Sábados</span>
              <span>8:00 AM - 12:00 PM</span>
            </li>
            <li className="rounded-2xl glass-panel p-4">
              <strong className="mb-1 block text-accent-cyan">Atención con Ari</strong>
              Soporte comercial y de pagos por WhatsApp.
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 px-6 pt-8 text-center text-sm text-text-subtle md:flex-row lg:px-8">
        <p>Copyright &copy; 2026 Ola Telecom.</p>
        <div className="flex gap-4">
          <Link href="#planes" className="transition-colors hover:text-accent-cyan">
            Planes
          </Link>
          <Link href="#cobertura" className="transition-colors hover:text-accent-cyan">
            Cobertura
          </Link>
          <Link href="#contacto" className="transition-colors hover:text-accent-cyan">
            Contacto
          </Link>
        </div>
      </div>
    </footer>
  );
}
