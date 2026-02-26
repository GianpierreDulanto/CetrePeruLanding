'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { courses } from '@/data/courses-data';
import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { BookOpen, ArrowRight } from 'lucide-react';

export default function CursosPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Page Header */}
      <section className="py-20 bg-gradient-to-r from-red-800 to-red-900 text-white pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Nuestros Cursos</h1>
          <p className="text-lg text-red-100">Capacitación especializada en Ensayos No Destructivos y Soldadura</p>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {courses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Link href={`/cursos/${course.id}`}>
                  <Card className="h-full p-8 border-red-200 bg-white shadow hover:shadow-xl transition-all hover:border-red-300 hover:scale-105 cursor-pointer">
                    <div className="flex items-start gap-4 mb-4">
                      <BookOpen className="w-8 h-8 text-red-800 flex-shrink-0 mt-1" />
                      <h3 className="text-xl font-bold text-red-800">{course.name}</h3>
                    </div>
                    
                    <p className="text-gray-700 leading-relaxed mb-6 line-clamp-3">
                      {course.description}
                    </p>

                    {course.duration && (
                      <div className="mb-4 pb-4 border-b border-red-100">
                        <p className="text-sm text-red-700">
                          <span className="font-semibold">Duración:</span> {course.duration}
                        </p>
                      </div>
                    )}

                    <div className="flex items-center gap-2 text-red-800 font-semibold">
                      Ver detalles
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-red-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-red-800 mb-4">¿Interesado en alguno de nuestros cursos?</h2>
          <p className="text-gray-700 text-lg mb-8 max-w-2xl mx-auto">
            Contáctanos para más información sobre fechas, horarios y modalidades de capacitación.
          </p>
          <Link href="/#contacto">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-red-800 to-red-900 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
            >
              Solicitar Información
            </motion.button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
