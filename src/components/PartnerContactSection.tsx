import React, { useState } from 'react';
import { Send, Handshake } from 'lucide-react';

export function PartnerContactSection() {
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      companyName: '',
      contactPerson: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Handshake className="w-16 h-16 mx-auto text-[#d709dd] mb-4" />
            <h2 className="text-4xl font-bold mb-4">Rejoignez-nous</h2>
            <p className="text-gray-600 text-lg">Rejoignez le team MXTRAINER et faites partie de notre réussite</p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-2">
                  Nom de l'entreprise *
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#d709dd] focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="contactPerson" className="block text-sm font-medium text-gray-700 mb-2">
                  Nom & Prénom du contact *
                </label>
                <input
                  type="text"
                  id="contactPerson"
                  name="contactPerson"
                  value={formData.contactPerson}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#d709dd] focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Adresse mail *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#d709dd] focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Numéro de téléphone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#d709dd] focus:border-transparent"
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Votre message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#d709dd] focus:border-transparent"
                placeholder="Parlez-nous de votre entreprise et de la manière dont vous aimeriez collaborer avec nous..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-black hover:bg-gray-800 text-white font-bold py-3 px-6 rounded-md transition-colors duration-200 flex items-center justify-center gap-2"
            >
              <Send size={20} />
              Envoyer la demande
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}