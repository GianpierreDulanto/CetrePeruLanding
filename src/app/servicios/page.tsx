import Header from '@/components/Header';
import Services from '@/components/Services';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Servicios | CETRE PERU',
  description: 'Conoce nuestros servicios de capacitación, evaluación y consultoría en ensayos no destructivos.',
};

export default function ServiciosPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Services Header */}
      <section className="py-20 bg-gradient-to-r from-red-800 to-red-900 text-white pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Nuestros Servicios</h1>
          <p className="text-lg text-red-100">Soluciones integrales en capacitación, evaluación y consultoría técnica especializadas en END (Ensayos No Destructivos)</p>
        </div>
      </section>

      {/* Services Content */}
      <div className="pt-12">
        <Services />
      </div>

      <Footer />
    </main>
  );
}
