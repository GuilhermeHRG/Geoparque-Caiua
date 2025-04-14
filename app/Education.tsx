import { Check } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export default function Education() {
  return (
    <section id="conservacao" className="py-16 md:py-24 bg-emerald-900 text-white flex flex-col justify-center items-center">
    <div className="container px-4 md:px-6">
      <div className="grid gap-10 lg:grid-cols-2 items-center">
        <div className="space-y-4">
          <div className="inline-block rounded-lg bg-emerald-800 px-3 py-1 text-sm text-emerald-100">
            Sustentabilidade
          </div>
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
            Preservando o Patrimônio para as Futuras Gerações
          </h2>
          <p className="text-emerald-100 md:text-lg">
            Nosso compromisso é preservar o patrimônio geológico, natural e cultural da região através de práticas
            sustentáveis e programas educativos que promovem a conscientização ambiental.
          </p>
          <div className="space-y-4 pt-4">
            {[
              {
                title: "Pesquisa Científica",
                description:
                  "Apoiamos pesquisas que ampliam o conhecimento sobre a geologia e biodiversidade da região.",
              },
              {
                title: "Educação Ambiental",
                description:
                  "Desenvolvemos programas educativos para escolas e comunidades sobre a importância da conservação.",
              },
              {
                title: "Turismo Sustentável",
                description:
                  "Promovemos práticas de turismo que minimizam o impacto ambiental e beneficiam as comunidades locais.",
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-3">
                <div className="mt-1 rounded-full bg-emerald-700 p-1">
                  <Check className="h-4 w-4 text-emerald-100" />
                </div>
                <div>
                  <h3 className="font-bold">{item.title}</h3>
                  <p className="text-emerald-100">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative h-[400px] overflow-hidden rounded-xl">
          <Image
            src="/placeholder.svg?height=800&width=1200"
            alt="Atividades de conservação no Geoparque"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  </section>
  )
}
