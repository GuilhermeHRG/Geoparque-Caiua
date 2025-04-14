import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function Gallery() {
  return (
    <section className="py-16 md:py-24 flex flex-col items-center justify-center">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center mb-12">
              <div className="inline-block rounded-lg bg-emerald-100 px-3 py-1 text-sm text-emerald-800 mb-4">
                Galeria
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-emerald-900 mb-4">
                Belezas do Geoparque
              </h2>
              <p className="max-w-3xl text-gray-600 md:text-lg">
                Confira algumas das paisagens deslumbrantes que você encontrará em sua visita.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="relative aspect-square overflow-hidden rounded-lg">
                  <Image
                    src={`/placeholder.svg?height=600&width=600&text=Imagem+${i + 1}`}
                    alt={`Paisagem do Geoparque ${i + 1}`}
                    fill
                    className="object-cover transition-transform hover:scale-105 duration-300"
                  />
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-8">
              <Button className="bg-emerald-600 hover:bg-emerald-700">
                Ver Mais Fotos
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
  )
}

export default Gallery
