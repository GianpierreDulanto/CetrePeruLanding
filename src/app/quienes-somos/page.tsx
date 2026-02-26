import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CheckCircle2, Heart, Eye } from 'lucide-react';
import { Card } from '@/components/ui/card';

export const metadata = {
  title: 'Quiénes Somos | CETRE PERU',
  description: 'Conoce sobre CETRE PERU, nuestra misión, visión y los 25 años de experiencia en ensayos no destructivos.',
};

export default function QuienesSomosPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Page Header */}
      <section className="py-20 bg-gradient-to-r from-red-800 to-red-900 text-white pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">¿Quiénes Somos?</h1>
          <p className="text-lg text-red-100">CETRE PERU - Profesionales en Ensayos No Destructivos desde 1999</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Welcome Section */}
          <div className="mb-12">
            <Card className="p-8 border-red-200 bg-red-50">
              <h2 className="text-3xl font-bold text-red-800 mb-4">Bienvenidos a CETRE PERU</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Somos una empresa especializada en la prestación de servicios profesionales de capacitación, evaluación y consultoría en Ensayos No Destructivos (END), con más de 25 años de experiencia en el mercado.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Nuestro compromiso es proporcionar soluciones integrales que garanticen la calidad y seguridad en inspección de componentes mecánicos, soldaduras y estructuras industriales.
              </p>
            </Card>
          </div>

          {/* Founder Info */}
          <div className="mb-12 bg-white border border-red-200 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-red-800 mb-3">Fundador</h3>
            <p className="text-gray-700">
              <span className="font-semibold">Ing. Regulo Visugarra Sosa</span> - Presidente y Fundador
            </p>
            <p className="text-gray-600 mt-2">
              Con 25 años de experiencia en ensayos no destructivos y presidente de la Asociación de Especialistas en Ensayos No Destructivos (END). Su visión y liderazgo han permitido posicionar a CETRE PERU como referente en el sector.
            </p>
          </div>

          {/* Objectives */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-red-800 mb-8">Nuestros Objetivos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                'Desarrollar programas de capacitación integral que cumplan con estándares internacionales (ASNT SNT-TC-1A)',
                'Proporcionar servicios de evaluación y certificación de personal especializado en END',
                'Brindar consultoría técnica especializada para optimizar procesos de inspección industrial',
                'Contribuir al mejoramiento de la calidad y seguridad en la industria manufacturera y de construcción'
              ].map((objective, index) => (
                <div key={index} className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-red-800 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">{objective}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Mission and Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <Card className="p-8 bg-white border-red-200 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <Heart className="w-8 h-8 text-red-800" />
                <h3 className="text-2xl font-bold text-red-800">Misión</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Ser una empresa de referencia en la prestación de servicios profesionales de capacitación, evaluación y consultoría técnica en ensayos no destructivos, contribuyendo al mejoramiento de la calidad y seguridad en procesos industriales.
              </p>
            </Card>

            {/* Vision */}
            <Card className="p-8 bg-white border-red-200 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <Eye className="w-8 h-8 text-red-800" />
                <h3 className="text-2xl font-bold text-red-800">Visión</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Consolidarse como líder en el mercado de ensayos no destructivos en Latinoamérica, reconocidos por nuestra excelencia, innovación y compromiso con la formación continua de profesionales de clase mundial.
              </p>
            </Card>
          </div>

          {/* Values */}
          <div className="mt-12 bg-red-50 p-8 rounded-lg border border-red-200">
            <h3 className="text-2xl font-bold text-red-800 mb-6">Nuestros Valores</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {['Excelencia Profesional', 'Integridad', 'Innovación Continua', 'Compromiso con la Calidad', 'Responsabilidad Social', 'Trabajo en Equipo'].map((value, index) => (
                <div key={index} className="flex items-center gap-3 text-gray-800">
                  <div className="w-2 h-2 rounded-full bg-red-800" />
                  <span className="font-semibold">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
