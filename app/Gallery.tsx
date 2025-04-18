// app/Gallery.tsx
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function Gallery() {
  const fotos = [
    '/images/colonia72.jpg',
    '/images/bannerHome.jpg',
    '/images/dinossauro.jpg',
    '/images/cachoeira.jpg',
  ]

  return (
    <section
      id="galeria"
      className="py-16 md:py-24 flex flex-col items-center justify-center"
    >
      <div className="container px-4 md:px-6 text-center">
        <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800 mb-4">
          Galeria
        </div>
        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-blue-900 mb-8">
          Belezas do Geoparque
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {fotos.map((src, i) => (
            <div key={i} className="relative h-48 w-full overflow-hidden rounded-lg">
              <Image
                src={src}
                alt={`Foto ${i + 1} do Geoparque Caiuá`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>

       
      </div>
    </section>
  )
}

export default Gallery
