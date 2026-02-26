'use client';

import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { GraduationCap, CheckSquare, Lightbulb, Wrench } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: GraduationCap,
      title: 'Capacitación Especializada',
      description: 'Programas de entrenamiento en 12+ métodos de ensayos no destructivos con certificación internacional.',
      methods: ['VT', 'PT', 'MT', 'UT', 'PAUT', 'TOFD', 'RT', 'MFL']
    },
    {
      icon: CheckSquare,
      title: 'Evaluación y Certificación',
      description: 'Evaluaciones rigurosas según estándares SNT TC 1 A y ASNT CP 105 reconocidos globalmente.',
      methods: ['Nivel I', 'Nivel II', 'Nivel III', 'Re-certificación']
    },
    {
      icon: Lightbulb,
      title: 'Consultoría Técnica',
      description: 'Asesoramiento de tercera parte y soporte técnico especializado para auditorías y procedimientos.',
      methods: ['Auditorías', 'Procedimientos', 'Supervisión', 'Soporte']
    },
    {
      icon: Wrench,
      title: 'Servicios Técnicos',
      description: 'Ejecución de ensayos, calibración de equipos y verificación de materiales con precisión garantizada.',
      methods: ['Ensayos', 'Calibración', 'Verificación', 'Reportes']
    }
  ];

  return (
    <section id="servicios" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-red-800 mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Soluciones integrales en capacitación, certificación, consultoría y auditoría técnica con estándares internacionales
          </p>
        </div>

        {/* Services Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: false }}
              >
                <Card
                  className="group overflow-hidden hover:shadow-lg transition-all duration-300 h-full"
                >
                  <img 
                    src={`https://picsum.photos/400/250?random=${index + 3}`}
                    alt={service.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4 sm:p-8">
                    <div className="flex items-center gap-3 mb-3">
                      <IconComponent className="w-6 h-6 text-red-800" />
                      <h3 className="text-2xl font-bold text-red-800">{service.title}</h3>
                    </div>
                    <p className="text-gray-700 mb-6 leading-relaxed">{service.description}</p>
                    
                    {/* Method Tags */}
                    <div className="flex flex-wrap gap-2">
                      {service.methods.map((method, idx) => (
                        <Badge key={idx} variant="secondary">
                          {method}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
