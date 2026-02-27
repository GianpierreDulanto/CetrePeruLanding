import { notFound } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/Header';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import { getCourseById, courses } from '@/data/courses-data';
import { Card } from '@/components/ui/card';
import { ArrowLeft, BookOpen, Users, Clock, CheckCircle2 } from 'lucide-react';

interface CoursePageProps {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return courses.map((course) => ({
    id: course.id,
  }));
}

export default async function CoursePage({ params }: CoursePageProps) {
  const { id } = await params;
  const course = getCourseById(id);

  if (!course) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Course Header */}
      <section className="py-20 bg-gradient-to-r from-red-800 to-red-900 text-white pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            href="/cursos" 
            className="flex items-center gap-2 text-red-100 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="w-5 h-5" />
            Volver a Cursos
          </Link>
          
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">{course.name}</h1>
          <p className="text-lg text-red-100">{course.description}</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2">
              {/* Key Info Cards */}
              {(course.duration || course.schedule || course.maxParticipants) && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {course.duration && (
                    <Card className="p-6 border-red-200 bg-red-50">
                      <div className="flex items-start gap-3">
                        <Clock className="w-6 h-6 text-red-800 flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="font-semibold text-red-800">Duración</h3>
                          <p className="text-gray-700">{course.duration}</p>
                        </div>
                      </div>
                    </Card>
                  )}
                  
                  {course.maxParticipants && (
                    <Card className="p-6 border-red-200 bg-red-50">
                      <div className="flex items-start gap-3">
                        <Users className="w-6 h-6 text-red-800 flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="font-semibold text-red-800">Participantes</h3>
                          <p className="text-gray-700">{course.maxParticipants}</p>
                        </div>
                      </div>
                    </Card>
                  )}
                </div>
              )}

              {/* Objectives */}
              {course.objectives.length > 0 && (
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-red-800 mb-6">Objetivos</h2>
                  <div className="space-y-4">
                    {course.objectives.map((objective, index) => (
                      <div key={index} className="flex gap-3">
                        <CheckCircle2 className="w-6 h-6 text-red-800 flex-shrink-0 mt-0.5" />
                        <p className="text-gray-700">{objective}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Target Audience */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-red-800 mb-4">Dirigido a</h2>
                <Card className="p-6 border-red-200 bg-white">
                  <p className="text-gray-700 leading-relaxed">{course.targetAudience}</p>
                </Card>
              </div>

              {/* Methodology */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-red-800 mb-4">Metodología</h2>
                <Card className="p-6 border-red-200 bg-white">
                  <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">{course.methodology}</p>
                </Card>
              </div>

              {/* Chapters Content */}
              {course.chapters && course.chapters.length > 0 && (
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-red-800 mb-6">Contenido del Curso</h2>
                  <div className="space-y-3">
                    {course.chapters.map((chapter, chapterIndex) => (
                      <Card key={chapterIndex} className="border-red-200 overflow-hidden">
                        <div className="p-6 bg-gradient-to-r from-red-800 to-red-900 text-white">
                          <h3 className="font-bold text-lg">{chapter.title}</h3>
                        </div>
                        <div className="p-6 bg-red-50">
                          <ul className="space-y-2">
                            {chapter.topics.map((topic, topicIndex) => (
                              <li key={topicIndex} className="flex gap-3">
                                <span className="text-red-800 font-semibold">•</span>
                                <span className="text-gray-700">{topic}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              )}

              {/* Content */}
              {course.content && course.content.length > 0 && !course.chapters && (
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-red-800 mb-6">Contenido del Curso</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {course.content.map((topic, index) => (
                      <Card key={index} className="p-4 border-red-200 bg-red-50">
                        <div className="flex gap-3">
                          <BookOpen className="w-5 h-5 text-red-800 flex-shrink-0 mt-0.5" />
                          <p className="text-gray-700">{topic}</p>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Column - Sidebar */}
            <div>
              <Card className="sticky top-32 p-6 border-red-200 bg-gradient-to-br from-red-50 to-red-100">
                <h3 className="text-xl font-bold text-red-800 mb-4">¿Interesado en este curso?</h3>
                <p className="text-sm text-gray-700 mb-6">
                  Completa el formulario a continuación y nos pondremos en contacto contigo en breve.
                </p>
                <Link
                  href="/contacto"
                  className="block w-full bg-red-800 text-white text-center py-3 rounded-lg hover:bg-red-900 transition-colors font-semibold"
                >
                  Solicitar Información
                </Link>
              </Card>

              {course.schedule && (
                <Card className="mt-4 p-6 border-red-200 bg-white">
                  <h4 className="font-semibold text-red-800 mb-3">Horario</h4>
                  <p className="text-sm text-gray-700">{course.schedule}</p>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>

      <ContactForm />
      <Footer />
    </main>
  );
}
