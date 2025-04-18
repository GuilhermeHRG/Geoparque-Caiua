// app/Info.tsx
import { Clock, MapPin, Check } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function Info() {
  return (
    <section
      id="visitar"
      className="py-16 md:py-24 bg-stone-50 flex flex-col items-center justify-center"
    >
      <div className="container px-4 md:px-6 text-center">
        <div className="inline-block rounded-lg bg-purple-100 px-3 py-1 text-sm text-purple-800 mb-4">
          Visitação
        </div>
        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-purple-900 mb-4">
          Planeje Sua Visita
        </h2>
        <p className="max-w-2xl mx-auto text-gray-700 mb-8">
          Aberto de terça a domingo, das 8h às 17h. Grupos acima de 10 pessoas
          devem agendar com antecedência.
        </p>

        <div className="grid gap-6 lg:grid-cols-3">
          {[
            {
              icon: <MapPin className="h-8 w-8 text-purple-600" />,
              title: 'Localização',
              description:
                'Rod. PR-272, Km 18, Cruzeiro do Oeste – PR (próximo ao Parque de Exposições).',
            },
            {
              icon: <Clock className="h-8 w-8 text-purple-600" />,
              title: 'Horário',
              description: 'Terça a Domingo, das 8h às 17h.',
            },
            {
              icon: <Check className="h-8 w-8 text-purple-600" />,
              title: 'Visita Guiada',
              description:
                'Disponível mediante agendamento; até 10 pessoas sem custo.',
            },
          ].map((dica, i) => (
            <div key={i} className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-sm">
              {dica.icon}
              <h4 className="mt-4 font-bold text-purple-800">{dica.title}</h4>
              <p className="text-gray-600">{dica.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Info
