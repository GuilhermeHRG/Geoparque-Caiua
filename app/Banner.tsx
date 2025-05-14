// app/Banner.tsx
import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function Banner() {
  return (
    <section className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent z-10" />
      <div className="relative h-[100svh] w-full ">
        <Image
          src="/images/bannerHome.jpg"
          alt="Cânion do Geoparque Caiuá"
          fill
          priority
          className='max-sm:object-cover'
        />
        <div className="absolute inset-0 z-20 flex flex-col justify-center items-start px-8 md:px-16 lg:px-32">



          <div className="relative w-full max-sm:w-[45dvh] max-sm:mr-6 md:w-[60%] lg:w-[72%]  ">
            <Image
              src="/images/logoBanner.png"
              alt="Cânion do Geoparque Caiuá"
              priority
              width={800}
              height={200}
              className="w-full h-auto "
            />
          </div>



          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Bem‑vindo ao Geoparque Caiuá
          </h1>
          <p className="mt-4 text-white max-w-2xl">
            Explore as belezas naturais e culturais do Geoparque Caiuá.
          </p>
          {/* <Button
            variant="outline"
            className="mt-6 bg-orange-600/80 text-orange-100 border-white/20 hover:text-white hover:bg-orange-600"
          >
            Explorar Geossítios <ChevronRight className="ml-2 h-4 w-4" />
          </Button> */}
        </div>
      </div>
    </section>
  )
}

export default Banner
