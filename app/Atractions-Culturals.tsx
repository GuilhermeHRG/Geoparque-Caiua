// app/AtractionsCulturals.tsx
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function AtractionsCulturals() {
  const atracoes = [
    {
      title: 'Cânion do Rio Piquiri',
      description:
        'Formações rochosas esculpidas pelas águas do Rio Piquiri ao longo de milhões de anos.',
      image: '/images/cachoeira.jpg',
    },
    {
      title: 'Registro Fossilizado',
      description:
        'Fósseis de plantas e animais do período mesozóico preservados em arenitos do Grupo Caiuá.',
      image: '/images/geossitio.jpg',
    },
    {
      title: 'Trilha das Águas',
      description:
        'Caminhada guiada por cursos d’água que ilustram processos erosivos em ação.',
      image: '/images/trilhadasaguas.jpg',
    },
    {
      title: 'Mirante das Eras',
      description:
        'Ponto de observação com vista panorâmica das formações rochosas do Geoparque.',
      image: '/images/mirante.jpg',
    },
  ]

  return (
    <section
      id="atracoes"
      className="py-16 md:py-24 flex flex-col items-center justify-center"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-block rounded-lg bg-orange-100 px-3 py-1 text-sm text-orange-800 mb-4">
            Atrações culturais
          </div>
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-orange-900 mb-4">
            (lucas vai mandar o que colocar aqui)
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {atracoes.map((atracao, i) => (
            <Card key={i} className="overflow-hidden">
              <div className="relative h-48 w-full">
                <Image
                  src={atracao.image}
                  alt={atracao.title}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-orange-800 mb-2">
                  {atracao.title}
                </h3>
                <p className="text-gray-600">{atracao.description}</p>
                <Button
                  variant="link"
                  className="p-0 h-auto mt-4 text-orange-600"
                >
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AtractionsCulturals
