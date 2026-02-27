import Header from '@/components/Header';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Contacto | CETRE PERU',
  description: 'Ponte en contacto con nosotros para consultas sobre capacitación, evaluación o servicios de consultoría en ensayos no destructivos.',
};

export default function ContactoPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Contact Header */}
      <section className="py-20 bg-gradient-to-r from-red-800 to-red-900 text-white pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Contacto</h1>
          <p className="text-lg text-red-100">¿Tienes preguntas o necesitas más información? Comunícate con nosotros</p>
        </div>
      </section>

      {/* Contact Content */}
      <ContactForm />

      <Footer />
    </main>
  );
}
