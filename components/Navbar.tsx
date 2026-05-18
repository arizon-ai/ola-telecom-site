'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, MessageCircle } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-bg-primary/80 backdrop-blur-xl border-b border-white/[0.04] py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Ola Telecom"
            width={512}
            height={512}
            priority
            className="h-12 w-auto md:h-14"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="#planes" className="text-text-primary hover:text-accent-cyan transition-colors text-sm font-medium">Planes</Link>
          <Link href="#cobertura" className="text-text-primary hover:text-accent-cyan transition-colors text-sm font-medium">Cobertura</Link>
          <Link href="#contacto" className="text-text-primary hover:text-accent-cyan transition-colors text-sm font-medium">Contacto</Link>
          
          <a
            href="https://wa.me/584247612828?text=Hola%20Ari%20%F0%9F%91%8B"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-accent-green hover:bg-green-400 text-bg-primary px-5 py-2.5 rounded-full font-semibold transition-all transform hover:scale-105"
          >
            <MessageCircle size={18} />
            Pagar / Contactar
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-text-primary p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full glass-panel border-t border-white/10 p-6 flex flex-col space-y-4">
          <Link href="#planes" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium">Planes</Link>
          <Link href="#cobertura" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium">Cobertura</Link>
          <Link href="#contacto" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium">Contacto</Link>
          <a
            href="https://wa.me/584247612828?text=Hola%20Ari%20%F0%9F%91%8B"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-accent-green text-bg-primary px-5 py-3 rounded-xl font-semibold mt-4"
          >
            <MessageCircle size={20} />
            Pagar / Contactar
          </a>
        </div>
      )}
    </nav>
  );
}
