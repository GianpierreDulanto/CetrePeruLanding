'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, CheckCircle2 } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contacto" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Contáctanos
          </h2>
          <p className="text-xl text-gray-700">
            Consultas y solicitudes de información serán respondidas en el menor tiempo posible
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0, duration: 0.4 }}
            viewport={{ once: false }}
          >
            <Card className="p-4 sm:p-6 text-center hover:shadow-lg transition-all">
              <Phone className="w-8 h-8 mx-auto mb-3 text-slate-800" />
              <h3 className="font-bold text-slate-900 mb-2">Teléfono</h3>
              <p className="text-gray-700 text-sm sm:text-base">+51 941 833 673</p>
              <p className="text-gray-700 text-sm sm:text-base">+51 964 732 003</p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            viewport={{ once: false }}
          >
            <Card className="p-4 sm:p-6 text-center hover:shadow-lg transition-all">
              <Mail className="w-8 h-8 mx-auto mb-3 text-slate-800" />
              <h3 className="font-bold text-slate-900 mb-2">Email</h3>
              <p className="text-gray-700 text-sm sm:text-base">admin@empresa.tech</p>
              <p className="text-gray-700 text-sm sm:text-base">soporte@empresa.tech</p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            viewport={{ once: false }}
          >
            <Card className="p-4 sm:p-6 text-center hover:shadow-lg transition-all">
              <MapPin className="w-8 h-8 mx-auto mb-3 text-slate-800" />
              <h3 className="font-bold text-slate-900 mb-2">Horario</h3>
              <p className="text-gray-700 text-sm sm:text-base">Lima, Perú</p>
              <p className="text-gray-700 text-sm sm:text-base">Lunes a Viernes 8 AM - 6 PM</p>
            </Card>
          </motion.div>
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          viewport={{ once: false }}
        >
          <Card className="p-8 sm:p-12">
            {submitted ? (
              <motion.div 
                className="text-center py-8"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
              >
                <CheckCircle2 className="w-16 h-16 mx-auto mb-4 text-slate-800" />
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Mensaje Enviado</h3>
                <p className="text-gray-700">Nos pondremos en contacto a la brevedad.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name and Email */}
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-900 font-semibold mb-2">Nombre Completo *</label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-900 font-semibold mb-2">Email *</label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>

                {/* Phone and Company */}
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-900 font-semibold mb-2">Teléfono</label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+51 ..."
                    />
                  </div>
                  <div>
                    <label className="block text-gray-900 font-semibold mb-2">Empresa</label>
                    <Input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Tu empresa"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-gray-900 font-semibold mb-2">Mensaje *</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Cuéntanos qué necesitas..."
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full bg-slate-800 text-white font-bold py-3 h-auto hover:bg-slate-900"
                >
                  Enviar Mensaje
                </Button>

                <p className="text-gray-600 text-sm text-center">
                  Tus datos serán tratados de forma confidencial y conforme a la privacidad.
                </p>
              </form>
            )}
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
