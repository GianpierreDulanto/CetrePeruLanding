'use client';

import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { Target, Eye, Heart, CheckCircle2, BookOpen } from 'lucide-react';

const courses = [
  { name: 'Partículas Magnéticas Nivel I y II', id: 'particulas-magneticas' },
  { name: 'Radiografía Industrial Nivel I y II', id: 'radiografia-industrial' },
  { name: 'Ultrasonido Nivel II', id: 'ultrasonido-nivel-ii' },
  { name: 'Ultrasonido Nivel I', id: 'ultrasonido-nivel-i' },
  { name: 'Introducción a los Métodos de Inspección Mediante Ensayos no Destructivos (END)', id: 'introduccion-end' },
  { name: 'Interpretación Radiográfica en Soldadura', id: 'interpretacion-radiografica-soldadura' },
  { name: 'Líquidos Penetrantes Nivel I y II', id: 'liquidos-penetrantes' },
  { name: 'Inspección Visual Nivel I y II', id: 'inspeccion-visual' }
];

const objectives = [
  'Conocer los principios básicos de los diferentes métodos de los ensayos no destructivos.',
  'Elegir el método más adecuado de ensayo según el caso y tipo de falla.',
  'Conocer las diferentes limitaciones de los ensayos no destructivos.',
  'Diferenciar entre indicaciones originadas por discontinuidades verdaderas por proceso de fabricación y las ocasionadas por indicaciones por fallas (mecánicas, químicas o proceso)'
];

export default function WhoWeAre() {
  return (
    <section id="quienes-somos" className="w-full py-24 bg-gradient-to-b from-white via-white to-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-red-800 mb-4">
            CETRE PERU
          </h2>
          <p className="text-gray-600 text-lg">¿Quiénes somos?</p>
        </motion.div>

        {/* Who We Are */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <Card className="p-8 border-red-200 bg-white shadow-lg">
            <h3 className="text-2xl font-bold text-red-800 mb-6">¡Te damos la bienvenida!</h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              CETRE PERU S.A.C es una empresa dedicada a servicios de consultaría, capacitación y certificación en 
              Ensayos no destructivos y Soldadura.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              La finalidad principal de la empresa es formar y fortalecer los conocimientos y habilidades de nuestros 
              clientes que permitan desarrollar un perfil profesional adecuado para desenvolverse de forma eficiente en 
              los diferentes métodos que su actividad diaria en diversos sectores exige.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              El programa es preparado por el <span className="font-semibold text-red-800">Ing. Regulo Visugarra Sosa</span> 
              quien es Presidente de la Asociación de Ensayos no Destructivos del Perú, y cuenta con 25 años de experiencia 
              en END y Soldadura siendo uno de los pioneros en capacitar y preparar a Técnicos e Ingenieros de nuestro país.
            </p>
          </Card>
        </motion.div>

        {/* Objectives */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-2xl font-bold text-red-800 mb-8">OBJETIVOS</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {objectives.map((objective, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-4 p-6 bg-white rounded-lg border border-red-200 shadow"
              >
                <CheckCircle2 className="w-6 h-6 text-red-800 flex-shrink-0 mt-1" />
                <p className="text-gray-700 leading-relaxed">{objective}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Mission and Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="h-full p-8 border-red-200 bg-white shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <Heart className="w-8 h-8 text-red-800" />
                <h3 className="text-2xl font-bold text-red-800">MISIÓN</h3>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                Formar especialistas con amplio conocimiento, capaces de diagnosticar los problemas y necesidades de su 
                entorno laboral, proponiendo alternativas viables para la solución de procesos técnicos e industriales.
              </p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Card className="h-full p-8 border-red-200 bg-white shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <Eye className="w-8 h-8 text-red-800" />
                <h3 className="text-2xl font-bold text-red-800">VISIÓN</h3>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                Ser la mejor empresa de servicios de formación y consultoría de profesionales en END y Soldadura, con gran 
                dominio en el uso de los diferentes métodos para su excelente desempeño profesional, contribuyendo mediante 
                sus excelentes capacidades al desarrollo del país.
              </p>
            </Card>
          </motion.div>
        </div>

        {/* Courses Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-2"
        >
          <h3 className="text-3xl font-bold text-red-800 mb-10 text-center">CURSOS Y CERTIFICACIÓN</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {courses.map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Link href={`/cursos/${course.id}`}>
                  <Card className="p-8 border-red-200 bg-white shadow hover:shadow-lg transition-all hover:border-red-300 cursor-pointer h-full">
                    <div className="flex items-start gap-4">
                      <BookOpen className="w-6 h-6 text-red-800 flex-shrink-0 mt-1" />
                      <h4 className="text-lg font-bold text-red-800 group-hover:text-red-900">{course.name}</h4>
                    </div>
                    <p className="text-sm text-red-600 mt-4 font-medium">Ver detalles →</p>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
