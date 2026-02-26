'use client';

import Link from 'next/link';
import { scrollToSection } from '@/lib/scrollUtils';

export default function Footer() {
  return (
    <footer className="bg-red-950 text-gray-300 pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-10 w-auto">
                <img src="/logo-cetre.png" alt="Logo" className="h-10 w-auto object-contain" />
              </div>
              <span className="text-xl font-bold text-white">CETRE PERU</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Servicios profesionales de capacitación, certificación, consultoría y auditoría en Ensayos No Destructivos con estándares internacionales.
            </p>
            {/* Social Links */}
            <div className="flex space-x-4 mt-4">
              <a href="#" className="hover:text-white transition">LinkedIn</a>
              <a href="#" className="hover:text-white transition">Facebook</a>
              <a href="#" className="hover:text-white transition">WhatsApp</a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold mb-4">Servicios</h3>
            <ul className="space-y-2 text-sm">
              <li><button onClick={() => scrollToSection('servicios')} className="hover:text-gray-300 transition cursor-pointer">Capacitación</button></li>
              <li><button onClick={() => scrollToSection('servicios')} className="hover:text-gray-300 transition cursor-pointer">Evaluación</button></li>
              <li><button onClick={() => scrollToSection('servicios')} className="hover:text-gray-300 transition cursor-pointer">Consultoría</button></li>
              <li><button onClick={() => scrollToSection('servicios')} className="hover:text-gray-300 transition cursor-pointer">Servicios Técnicos</button></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-4">Información</h3>
            <ul className="space-y-2 text-sm">
              <li><button onClick={() => scrollToSection('metodologia')} className="hover:text-gray-300 transition cursor-pointer">Metodología</button></li>
              <li><button onClick={() => scrollToSection('metodologia')} className="hover:text-gray-300 transition cursor-pointer">Certificaciones</button></li>
              <li><Link href="#" className="hover:text-gray-300 transition">Preguntas Frecuentes</Link></li>
              <li><Link href="#" className="hover:text-gray-300 transition">Recursos</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold mb-4">Contacto</h3>
            <p className="text-sm mb-2">
              <strong>Teléfono:</strong><br />
              +51 941 833 673
            </p>
            <p className="text-sm mb-2">
              <strong>Email:</strong><br />
              admin@empresa.tech
            </p>
            <p className="text-sm">
              <strong>Horario:</strong><br />
              L-V 8 AM - 6 PM
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-red-900 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2026 CETRE PERU S.A.C. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6 text-sm mt-4 sm:mt-0">
            <Link href="#" className="hover:text-white transition">Privacidad</Link>
            <Link href="#" className="hover:text-white transition">Términos</Link>
            <Link href="#" className="hover:text-white transition">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
