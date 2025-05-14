// app/Sobre.tsx
import { ArrowRight, Leaf, MapPin, Mountain, Users } from 'lucide-react'
import React from 'react'

function Sobre() {
  return (
    <section
      id="sobre"
      className="py-16 md:py-24 bg-stone-50 w-full flex flex-col items-center"
    >
      <div className="container px-4 md:px-6 flex flex-col items-center text-center">
        <div className="inline-block rounded-lg bg-emerald-100 px-3 py-1 text-sm text-emerald-800 mb-4">
          Patrimônio Geológico
        </div>
        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-emerald-900 mb-4">
          Sobre o Geoparque Caiuá
        </h2>
        <p className="max-w-2xl text-gray-700 mb-12">
          Localizado nos municípios de Cruzeiro do Oeste, Tuneiras do Oeste,
          Alto Piquiri e Mariluz, o Geoparque Caiuá é um
          território dedicado à conservação de biodiversidade, que revelam a história geológica da região.
        </p>
        <div className="w-full max-w-2xl aspect-video mb-12">
          <iframe
            className="w-full h-full rounded-lg"
            src="https://www.youtube.com/embed/51wK_LU4hac?autoplay=1&mute=1"
            title="Apresentação - História do Geoparque Caiuá"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>

        <div className="grid gap-10 lg:grid-cols-4 max-sm:w-full">
          {[
            {
              icon: <MapPin className="h-8 w-8 text-emerald-600" />,
              title: 'Municípios',
              value: '4',
            },
            {
              icon: <Mountain className="h-8 w-8 text-emerald-600" />,
              title: 'Geossítios',
              value: '12',
            },
            {
              icon: <Leaf className="h-8 w-8  text-emerald-600" />,
              title: 'Espécies Endêmicas',
              value: '50+',
            },
            {
              icon: <Users className="h-8 w-8 text-emerald-600" />,
              title: 'Visitas Anuais',
              value: '20K+',
            },
          ].map((stat, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-sm"
            >
              {stat.icon}
              <h3 className="mt-4 text-3xl font-bold text-emerald-800">
                {stat.value}
              </h3>
              <p className="text-gray-600">{stat.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Sobre
