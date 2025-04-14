import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function Banner() {
  return (
    <section className="relative">
    <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent z-10" />
    <div className="relative h-[70vh] w-full">
      <Image
        src="/placeholder.svg?height=1080&width=1920"
        alt="Paisagem do Geoparque"
        fill
        className="object-cover"
        priority
      />
    </div>
    <div className="absolute inset-0 z-20 flex items-center">
      <div className="container px-4 md:px-6">
        <div className="max-w-2xl space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl">
            Descubra a História da Terra
          </h1>
          <p className="text-xl text-white/90 md:text-2xl">
            Uma jornada fascinante através de milhões de anos de evolução geológica
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
              Planejar Visita
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 text-white border-white/20 hover:bg-white/20"
            >
              Explorar Atrações
            </Button>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Banner
