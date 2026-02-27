'use client';

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, CheckCircle, TrendingUp } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-20 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-white to-slate-50 relative overflow-hidden">
      {/* Aceternity-style grid background - disabled on mobile */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-slate-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob" />
        <div className="absolute top-0 -right-4 w-72 h-72 bg-slate-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000" />
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center relative z-10">
        {/* Left Content */}
        <motion.div 
          className="space-y-8"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Badge */}
          <motion.div 
            className="inline-flex items-center gap-2 border border-red-300/50 text-red-800 px-4 py-2.5 rounded-full text-sm font-semibold w-fit bg-red-50/50 backdrop-blur-sm hover:bg-red-50/80 transition-colors duration-300"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.4 }}
          >
            <Sparkles className="w-4 h-4" />
            Acreditado Internacionalmente - SNT TC-1A, ASNT
          </motion.div>

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-red-900 leading-tight">
              Capacitación Técnica
              <span className="block bg-gradient-to-r from-red-900 to-red-800 bg-clip-text text-transparent mt-2">
                de Nivel Superior
              </span>
            </h1>
          </motion.div>

          {/* Description */}
          <motion.p 
            className="text-lg text-gray-700 leading-relaxed max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Servicio especializado en capacitación y certificación de personal en ensayos no destructivos. Formamos a profesionales bajo estándares internacionales reconocidos a nivel mundial.
          </motion.p>

          {/* Features */}
          <motion.div
            className="space-y-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            {[
              'Certificaciones SNT TC-1A, ASNT CP 105, ISO reconocidas globalmente',
              'Instructores Nivel III certificados con 25+ años de experiencia',
              'Más de 2000 profesionales capacitados exitosamente'
            ].map((feature, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-red-800 flex-shrink-0" />
                <span className="text-gray-700 font-medium">{feature}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col gap-3 pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <Button className="w-full sm:w-auto bg-red-800 text-white px-8 py-3 h-auto hover:bg-red-900 inline-flex items-center justify-center gap-2">
              Solicitar Información
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button variant="outline" className="w-full sm:w-auto border-2 border-red-800 text-red-800 px-8 py-3 h-auto">
              Ver Servicios
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 pt-6 sm:pt-8 border-t border-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <div>
              <p className="text-2xl sm:text-3xl font-bold text-red-800">2000+</p>
              <p className="text-gray-700 text-xs sm:text-sm">Profesionales Capacitados</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-bold text-red-800">1200+</p>
              <p className="text-gray-700 text-xs sm:text-sm">Cursos Dictados</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-bold text-red-800">25+</p>
              <p className="text-gray-700 text-xs sm:text-sm">Años de Experiencia</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Visual */}
        <motion.div 
          className="relative hidden md:block h-96"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img 
            src="https://picsum.photos/500/400?random=1" 
            alt="Capacitación Técnica" 
            className="w-full h-full object-cover rounded-lg border border-slate-300 shadow-md"
          />
          <motion.div 
            className="absolute inset-0 bg-black bg-opacity-20 rounded-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          />
        </motion.div>
      </div>
    </section>
  );
}
