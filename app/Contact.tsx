// app/Contact.tsx
import React from 'react'
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react'

export default function Contact() {
  const contactMethods = [
    {
      icon: <Phone className="h-6 w-6 text-emerald-600" />,
      label: '(44) 3574‑1234',
    },
    {
      icon: <Mail className="h-6 w-6 text-emerald-600" />,
      label: 'contato@geoparquecaiua.org.br',
    },
    {
      icon: <MapPin className="h-6 w-6 text-emerald-600" />,
      label: 'Rod. PR‑272, Km 18, Cruzeiro do Oeste ‑ PR',
    },
  ]

  return (
    <section
      id="contato"
      className="py-20 md:py-28 bg-white flex justify-center "
    >
      <div className="w-full max-w-[80%]  px-4 md:px-6 text-center border border-gray-200 shadow-lg rounded-lg p-6">
        <span className="inline-block px-4 py-1 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium mb-4">
          Fale Conosco
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-emerald-900 mb-2">
          Entre em Contato
        </h2>
        <p className="text-gray-600 mb-8">
          Tem dúvidas, sugestões ou quer agendar uma visita guiada? Fale conosco pelos canais abaixo.
        </p>

        <div className="space-y-6 text-left">
          {contactMethods.map((m, i) => (
            <div key={i} className="flex items-center gap-4">
              {m.icon}
              <span className="text-gray-700">{m.label}</span>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-6 mt-8">
          <a
            href="https://www.facebook.com/profile.php?id=61551064623617"
            aria-label="Facebook"
            className="text-gray-600 hover:text-emerald-600 transition-colors"
          >
            <Facebook className="h-6 w-6" />
          </a>
          <a
            href="https://instagram.com/geoparquecaiua"
            aria-label="Instagram"
            className="text-gray-600 hover:text-emerald-600 transition-colors"
          >
            <Instagram className="h-6 w-6" />
          </a>
         
        </div>
      </div>
    </section>
  )
}
