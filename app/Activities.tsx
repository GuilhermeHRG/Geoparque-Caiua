// app/Activities.tsx
import { Card } from '@/components/ui/card'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@radix-ui/react-tabs'
import {
  MapPin,
  Mountain,
  Camera,
  BookOpen,
  Users,
  Leaf,
} from 'lucide-react'
import React from 'react'

const atividadesData = {
  trilhas: [
    {
      icon: <MapPin className="h-8 w-8 text-yellow-600" />,
      title: 'Trilha das Águas',
      description:
        'Caminhada por cursos d’água que mostram a ação da erosão.',
    },
    {
      icon: <Mountain className="h-8 w-8 text-yellow-600" />,
      title: 'Trilha Paleontológica',
      description: 'Rota pelos principais pontos de fósseis do Parque.',
    },
  ],
  oficinas: [
    {
      icon: <BookOpen className="h-8 w-8 text-yellow-600" />,
      title: 'Oficina de Rochas',
      description: 'Aprenda a identificar diferentes tipos de rochas.',
    },
    {
      icon: <Camera className="h-8 w-8 text-yellow-600" />,
      title: 'Laboratório de Fósseis',
      description:
        'Exercícios práticos com réplicas de fósseis mesozóicos.',
    },
  ],
  palestras: [
    {
      icon: <Users className="h-8 w-8 text-yellow-600" />,
      title: 'Palestra de Paleontologia',
      description:
        'Apresentação sobre fósseis e sua importância histórica.',
    },
    {
      icon: <Leaf className="h-8 w-8 text-yellow-600" />,
      title: 'Seminário de Conservação',
      description: 'Debate sobre práticas de preservação ambiental.',
    },
  ],
}

export default function Activities() {
  return (
    <section
      id="atividades"
      className="py-20 md:py-28 bg-stone-50 flex flex-col items-center justify-center"
    >
      <div className="max-w-6xl w-full px-4 md:px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <span className="inline-block rounded-full bg-yellow-100 px-4 py-1 text-sm font-medium text-yellow-800 mb-4">
            Atividades
          </span>
          <h2 className="text-4xl font-bold text-yellow-900 mb-2">
            O que Fazer no Geoparque
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Escolha entre trilhas incríveis, oficinas práticas e palestras
            especializadas.
          </p>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="trilhas" className="w-full">
          <div className="flex justify-center mb-10">
            <TabsList className="inline-flex bg-white rounded-lg shadow p-1">
              {(['trilhas', 'oficinas', 'palestras'] as const).map((tab) => (
                <TabsTrigger
                  key={tab}
                  value={tab}
                  className="
                    px-6 py-2 text-sm font-medium
                    text-gray-700 rounded-lg
                    hover:bg-yellow-100
                    data-[state=active]:bg-yellow-600
                    data-[state=active]:text-white
                    transition-colors
                  "
                >
                  {tab === 'trilhas'
                    ? 'Trilhas'
                    : tab === 'oficinas'
                    ? 'Oficinas'
                    : 'Palestras'}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {/* Content */}
          {(['trilhas', 'oficinas', 'palestras'] as const).map((tab) => (
            <TabsContent key={tab} value={tab} className="w-full">
              <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
                {atividadesData[tab].map((item, i) => (
                  <Card
                    key={i}
                    className="
                      p-6 flex flex-col items-start
                      hover:shadow-xl hover:scale-105
                      transition-transform duration-200
                    "
                  >
                    <div className="mb-4">{item.icon}</div>
                    <h3 className="text-xl font-semibold text-yellow-800 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.description}</p>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
