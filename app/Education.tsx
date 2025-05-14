// app/Education.tsx
import { Check } from 'lucide-react'
import React from 'react'

export default function Education() {
  return (
    <section
      id="conservacao"
      className="
        py-16 md:py-24 
        text-white flex flex-col justify-center items-center 
        bg-orange-900/90
      "
    >
      <div className="container px-4 md:px-6 grid gap-10 lg:grid-cols-2 items-center">
        <div className="space-y-4">
          <div className="inline-block rounded-lg bg-orange-600 px-3 py-1 text-sm text-orange-100">
            Conservação
          </div>
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
            Conservação e Pesquisa
          </h2>
          <ul className="list-disc ml-6 mt-2 space-y-2 list-none">
            <li>
              <Check className="inline-block mr-2 align-middle" />
              Monitoramento e estudo de fósseis mesozóicos
            </li>
            <li>
              <Check className="inline-block mr-2 align-middle" />
              Projetos de educação ambiental em escolas locais
            </li>
            <li>
              <Check className="inline-block mr-2 align-middle" />
              Programas de preservação de formações rochosas
            </li>
          </ul>
        </div>
        <div className="overflow-hidden rounded-xl w-full h-[25em]">
          <img
            src="/images/education.jpg"
            alt="Educação no Geoparque Caiuá"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  )
}
