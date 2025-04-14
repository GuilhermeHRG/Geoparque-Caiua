import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function Atractions() {
  return (
    <section id="atracoes" className="py-16 md:py-24 flex flex-col items-center justify-center">
    <div className="container px-4 md:px-6">
      <div className="flex flex-col items-center text-center mb-12">
        <div className="inline-block rounded-lg bg-emerald-100 px-3 py-1 text-sm text-emerald-800 mb-4">
          Atrações Geológicas
        </div>
        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-emerald-900 mb-4">
          Maravilhas Naturais para Explorar
        </h2>
        <p className="max-w-3xl text-gray-600 md:text-lg">
          Descubra formações rochosas impressionantes, cavernas milenares e paisagens deslumbrantes que contam a
          história da evolução do nosso planeta.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {[
          {
            title: "Cânion das Eras",
            description:
              "Um impressionante cânion com camadas rochosas que revelam 300 milhões de anos de história geológica.",
            image: "/placeholder.svg?height=400&width=600",
          },
          {
            title: "Cavernas de Cristal",
            description: "Formações de cristais raros em cavernas subterrâneas com mais de 2 milhões de anos.",
            image: "/placeholder.svg?height=400&width=600",
          },
          {
            title: "Picos Vulcânicos",
            description: "Antigos vulcões que moldaram a paisagem e criaram formações rochosas únicas.",
            image: "/placeholder.svg?height=400&width=600",
          },
          {
            title: "Vale dos Fósseis",
            description: "Uma área rica em fósseis de plantas e animais que viveram há milhões de anos.",
            image: "/placeholder.svg?height=400&width=600",
          },
          {
            title: "Cachoeira Petrificada",
            description: "Uma impressionante formação calcária que parece uma cachoeira congelada no tempo.",
            image: "/placeholder.svg?height=400&width=600",
          },
          {
            title: "Mirante das Eras",
            description:
              "Um ponto de observação que oferece vistas panorâmicas de diversas formações geológicas.",
            image: "/placeholder.svg?height=400&width=600",
          },
        ].map((atracao, i) => (
          <Card key={i} className="overflow-hidden">
            <div className="relative h-48">
              <Image
                src={atracao.image || "/placeholder.svg"}
                alt={atracao.title}
                fill
                className="object-cover transition-transform hover:scale-105 duration-300"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-emerald-800 mb-2">{atracao.title}</h3>
              <p className="text-gray-600">{atracao.description}</p>
              <Button variant="link" className="p-0 h-auto mt-4 text-emerald-600">
                Saiba mais <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
  )
}

export default Atractions
