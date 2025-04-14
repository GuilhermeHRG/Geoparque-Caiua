import { Card } from '@/components/ui/card'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@radix-ui/react-tabs'
import { MapPin, Mountain, Camera, BookOpen, Users, Leaf } from 'lucide-react'
import React from 'react'

function Activities() {
  return (
    <section id="atividades" className="py-16 md:py-24 bg-stone-50 flex flex-col justify-center items-center">
    <div className="container px-4 md:px-6">
      <div className="flex flex-col items-center text-center mb-12">
        <div className="inline-block rounded-lg bg-emerald-100 px-3 py-1 text-sm text-emerald-800 mb-4">
          Experiências
        </div>
        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-emerald-900 mb-4">
          Atividades para Todos os Interesses
        </h2>
        <p className="max-w-3xl text-gray-600 md:text-lg">
          De trilhas guiadas a oficinas educativas, oferecemos diversas atividades para que você aproveite ao
          máximo sua visita.
        </p>
      </div>

      <Tabs defaultValue="aventura" className="w-full">
        <div className="flex justify-center mb-8">
          <TabsList className="bg-emerald-50">
            <TabsTrigger
              value="aventura"
              className="data-[state=active]:bg-emerald-600 data-[state=active]:text-white"
            >
              Aventura
            </TabsTrigger>
            <TabsTrigger
              value="educacao"
              className="data-[state=active]:bg-emerald-600 data-[state=active]:text-white"
            >
              Educação
            </TabsTrigger>
            <TabsTrigger
              value="cultura"
              className="data-[state=active]:bg-emerald-600 data-[state=active]:text-white"
            >
              Cultura
            </TabsTrigger>
            <TabsTrigger
              value="relaxamento"
              className="data-[state=active]:bg-emerald-600 data-[state=active]:text-white"
            >
              Relaxamento
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="aventura" className="mt-0">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Trilhas Guiadas",
                description:
                  "Explore as formações geológicas com guias especializados que explicam a história de cada local.",
                icon: <MapPin className="h-10 w-10 text-emerald-600" />,
              },
              {
                title: "Escalada em Rocha",
                description:
                  "Desafie-se nas paredes rochosas com diferentes níveis de dificuldade para iniciantes e experientes.",
                icon: <Mountain className="h-10 w-10 text-emerald-600" />,
              },
              {
                title: "Expedições Fotográficas",
                description:
                  "Capture a beleza do geoparque com dicas de fotógrafos profissionais em locais privilegiados.",
                icon: <Camera className="h-10 w-10 text-emerald-600" />,
              },
            ].map((atividade, i) => (
              <Card key={i} className="p-6">
                <div className="mb-4">{atividade.icon}</div>
                <h3 className="text-xl font-bold text-emerald-800 mb-2">{atividade.title}</h3>
                <p className="text-gray-600">{atividade.description}</p>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="educacao" className="mt-0">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Oficinas Geológicas",
                description:
                  "Aprenda sobre os diferentes tipos de rochas e minerais em oficinas práticas para todas as idades.",
                icon: <BookOpen className="h-10 w-10 text-emerald-600" />,
              },
              {
                title: "Palestras Científicas",
                description:
                  "Participe de palestras com geólogos e pesquisadores sobre a formação e evolução do planeta.",
                icon: <Users className="h-10 w-10 text-emerald-600" />,
              },
              {
                title: "Laboratório Aberto",
                description:
                  "Visite nosso laboratório e observe como são realizadas as pesquisas geológicas e paleontológicas.",
                icon: <Leaf className="h-10 w-10 text-emerald-600" />,
              },
            ].map((atividade, i) => (
              <Card key={i} className="p-6">
                <div className="mb-4">{atividade.icon}</div>
                <h3 className="text-xl font-bold text-emerald-800 mb-2">{atividade.title}</h3>
                <p className="text-gray-600">{atividade.description}</p>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="cultura" className="mt-0">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Visitas a Sítios Arqueológicos",
                description:
                  "Conheça os vestígios das civilizações antigas que habitaram a região há milhares de anos.",
                icon: <BookOpen className="h-10 w-10 text-emerald-600" />,
              },
              {
                title: "Festivais Culturais",
                description:
                  "Participe de festivais que celebram a cultura local com música, dança e gastronomia tradicional.",
                icon: <Users className="h-10 w-10 text-emerald-600" />,
              },
              {
                title: "Artesanato Local",
                description:
                  "Aprenda técnicas de artesanato com artesãos locais que utilizam materiais da região.",
                icon: <Leaf className="h-10 w-10 text-emerald-600" />,
              },
            ].map((atividade, i) => (
              <Card key={i} className="p-6">
                <div className="mb-4">{atividade.icon}</div>
                <h3 className="text-xl font-bold text-emerald-800 mb-2">{atividade.title}</h3>
                <p className="text-gray-600">{atividade.description}</p>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="relaxamento" className="mt-0">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Banhos Termais",
                description: "Relaxe em águas termais naturais com propriedades terapêuticas em meio à natureza.",
                icon: <Leaf className="h-10 w-10 text-emerald-600" />,
              },
              {
                title: "Meditação ao Ar Livre",
                description:
                  "Participe de sessões de meditação guiada em locais de energia especial dentro do geoparque.",
                icon: <Mountain className="h-10 w-10 text-emerald-600" />,
              },
              {
                title: "Piqueniques Panorâmicos",
                description:
                  "Desfrute de refeições preparadas com ingredientes locais em pontos com vistas deslumbrantes.",
                icon: <MapPin className="h-10 w-10 text-emerald-600" />,
              },
            ].map((atividade, i) => (
              <Card key={i} className="p-6">
                <div className="mb-4">{atividade.icon}</div>
                <h3 className="text-xl font-bold text-emerald-800 mb-2">{atividade.title}</h3>
                <p className="text-gray-600">{atividade.description}</p>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  </section>
  )
}

export default Activities
