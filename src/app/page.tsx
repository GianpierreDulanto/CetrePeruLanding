import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight, Wrench, Users, MessageSquare, BookOpen } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      
      {/* Quick Links Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Explora nuestras soluciones</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Servicios Card */}
            <Link href="/servicios">
              <Card className="p-8 bg-white border-red-200 hover:shadow-lg hover:border-red-400 transition-all cursor-pointer h-full">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-red-100 rounded-lg">
                    <Wrench className="w-8 h-8 text-red-800" />
                  </div>
                  <h3 className="text-2xl font-bold text-red-800">Servicios</h3>
                </div>
                <p className="text-gray-700 text-lg mb-4">
                  Conoce nuestros servicios especializados en capacitación, evaluación y consultoría técnica en Ensayos No Destructivos.
                </p>
                <div className="flex items-center text-red-800 font-semibold gap-2">
                  Ver detalles <ArrowRight className="w-4 h-4" />
                </div>
              </Card>
            </Link>

            {/* Quiénes Somos Card */}
            <Link href="/quienes-somos">
              <Card className="p-8 bg-white border-red-200 hover:shadow-lg hover:border-red-400 transition-all cursor-pointer h-full">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-red-100 rounded-lg">
                    <Users className="w-8 h-8 text-red-800" />
                  </div>
                  <h3 className="text-2xl font-bold text-red-800">Quiénes Somos</h3>
                </div>
                <p className="text-gray-700 text-lg mb-4">
                  Descubre quiénes somos, nuestra misión, visión y 25 años de experiencia en el sector de ensayos no destructivos.
                </p>
                <div className="flex items-center text-red-800 font-semibold gap-2">
                  Conoce más <ArrowRight className="w-4 h-4" />
                </div>
              </Card>
            </Link>

            {/* Cursos Card */}
            <Link href="/cursos">
              <Card className="p-8 bg-white border-red-200 hover:shadow-lg hover:border-red-400 transition-all cursor-pointer h-full">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-red-100 rounded-lg">
                    <BookOpen className="w-8 h-8 text-red-800" />
                  </div>
                  <h3 className="text-2xl font-bold text-red-800">Cursos</h3>
                </div>
                <p className="text-gray-700 text-lg mb-4">
                  Explore nuestros programas de capacitación especializados en Ensayos No Destructivos (END).
                </p>
                <div className="flex items-center text-red-800 font-semibold gap-2">
                  Ver cursos <ArrowRight className="w-4 h-4" />
                </div>
              </Card>
            </Link>

            {/* Contacto Card */}
            <Link href="/contacto">
              <Card className="p-8 bg-white border-red-200 hover:shadow-lg hover:border-red-400 transition-all cursor-pointer h-full">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-red-100 rounded-lg">
                    <MessageSquare className="w-8 h-8 text-red-800" />
                  </div>
                  <h3 className="text-2xl font-bold text-red-800">Contacto</h3>
                </div>
                <p className="text-gray-700 text-lg mb-4">
                  Ponte en contacto con nosotros para consultas sobre capacitación, servicios o cualquier otra información que necesites.
                </p>
                <div className="flex items-center text-red-800 font-semibold gap-2">
                  Contactar <ArrowRight className="w-4 h-4" />
                </div>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
