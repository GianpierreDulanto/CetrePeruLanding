'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { scrollToSection, scrollToTop } from '@/lib/scrollUtils';
import { Menu, X, ArrowRight } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Servicios', id: 'servicios' },
    { label: 'Quiénes Somos', id: 'quienes-somos' },
    { label: 'Contacto', id: 'contacto' }
  ];

  const handleLogoClick = () => {
    if (pathname === '/') {
      scrollToTop();
    } else {
      window.location.href = '/';
    }
  };

  const handleNavClick = (sectionId: string) => {
    if (sectionId === 'servicios') {
      window.location.href = '/servicios';
    } else if (sectionId === 'quienes-somos') {
      window.location.href = '/quienes-somos';
    } else if (sectionId === 'contacto') {
      window.location.href = '/contacto';
    }
  };

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      hasScrolled 
        ? 'bg-white/95 backdrop-blur-[10px] shadow-[0_10px_30px_rgba(0,0,0,0.1)] border-b border-gray-200/50' 
        : 'bg-white/80 backdrop-blur-md border-b border-gray-100/50'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
        {/* Logo with gradient background */}
        <button onClick={handleLogoClick} className="flex items-center space-x-2 sm:space-x-3 group cursor-pointer">
          <div className="relative h-12 w-auto">
            <img src="/logo-cetre.png" alt="CETRE PERU Logo" className="h-12 w-auto object-contain" />
          </div>
          <div className="hidden sm:block">
            <span className="text-lg font-bold bg-gradient-to-r from-red-800 to-red-700 bg-clip-text text-transparent">CETRE PERU</span>
            <p className="text-xs text-gray-500 -mt-1 font-medium">NDT & WELDING</p>
          </div>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="px-4 py-2.5 text-sm font-medium text-gray-700 relative group cursor-pointer hover:text-red-800 transition-colors duration-200"
            >
              {item.label}
              {/* Underline effect */}
              <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-gradient-to-r from-red-800 to-red-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              {/* Glow effect on hover */}
              <span className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-800 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          ))}
          <Link
            href="/cursos"
            className="px-4 py-2.5 text-sm font-medium text-gray-700 relative group cursor-pointer hover:text-red-800 transition-colors duration-200"
          >
            Cursos
            {/* Underline effect */}
            <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-gradient-to-r from-red-800 to-red-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            {/* Glow effect on hover */}
            <span className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-800 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>
        </div>

        {/* Desktop CTA Button */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={() => handleNavClick('contacto')}
            className="bg-gradient-to-r from-red-800 to-red-900 text-white px-6 py-2 h-auto hover:shadow-lg hover:shadow-red-900/30 transition-all duration-300 flex gap-2 items-center border border-red-700 hover:border-red-600 rounded-lg font-semibold cursor-pointer"
          >
            Solicitar Demo
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-gray-900" />
          ) : (
            <Menu className="w-6 h-6 text-gray-900" />
          )}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-16 left-0 right-0 bg-white border-b border-gray-200 lg:hidden shadow-lg backdrop-blur-sm bg-white/95">
            <div className="px-3 py-4 space-y-1 max-h-[calc(100vh-80px)] overflow-y-auto">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    handleNavClick(item.id);
                    setIsOpen(false);
                  }}
                  className="block w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:text-slate-900 hover:bg-slate-50 font-medium cursor-pointer rounded-lg transition-colors duration-200"
                >
                  {item.label}
                </button>
              ))}
              <Link
                href="/cursos"
                className="block w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:text-slate-900 hover:bg-slate-50 font-medium cursor-pointer rounded-lg transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Cursos
              </Link>
              <button
                onClick={() => {
                  handleNavClick('contacto');
                  setIsOpen(false);
                }}
                className="w-full bg-gradient-to-r from-red-800 to-red-900 text-white hover:shadow-lg transition-all duration-300 flex gap-2 justify-center items-center border border-red-700 text-sm py-2 px-4 mt-3 rounded-lg font-semibold"
              >
                Solicitar Demo
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
