import { Button } from '@/components/ui/button'
import { ArrowRight, Leaf, MapPin, Mountain, Users } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function Sobre() {
  return (
    <section id="sobre" className="py-16 md:py-24 bg-stone-50 w-full items-center justify-center flex flex-col">
          <div className="container px-4 md:px-6 justify-center items-center flex flex-col">
            <div className="grid gap-10 lg:grid-cols-2 items-center justify-center flex">
              <div className="space-y-4 ">
                <div className="inline-block rounded-lg bg-emerald-100 px-3 py-1 text-sm text-emerald-800">
                  Patrimônio Natural
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-emerald-900">
                  Um Tesouro Geológico Reconhecido Mundialmente
                </h2>
                <p className="text-gray-600 md:text-lg">
                  O Geoparque Caiuá é um território com limites bem definidos que possui um patrimônio geológico de
                  importância internacional. Reconhecido pela UNESCO, nosso geoparque preserva formações rochosas que
                  contam a história de mais de 500 milhões de anos da evolução do planeta.
                </p>
                <p className="text-gray-600 md:text-lg">
                  Além da riqueza geológica, o parque abriga uma biodiversidade única, sítios arqueológicos e um rico
                  patrimônio cultural, oferecendo uma experiência completa aos visitantes.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <Button className="bg-emerald-600 hover:bg-emerald-700">
                    Nossa História
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="relative h-[400px] overflow-hidden rounded-xl">
                <Image
                  src="/placeholder.svg?height=800&width=1200"
                  alt="Formação geológica do Geoparque"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
              {[
                {
                  icon: <Mountain className="h-8 w-8 text-emerald-600" />,
                  title: "Formações Geológicas",
                  value: "25+",
                },
                { icon: <Leaf className="h-8 w-8 text-emerald-600" />, title: "Espécies Endêmicas", value: "120+" },
                { icon: <MapPin className="h-8 w-8 text-emerald-600" />, title: "Trilhas Mapeadas", value: "18" },
                { icon: <Users className="h-8 w-8 text-emerald-600" />, title: "Visitantes Anuais", value: "50K+" },
              ].map((stat, i) => (
                <div key={i} className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-sm">
                  {stat.icon}
                  <h3 className="mt-4 text-3xl font-bold text-emerald-800">{stat.value}</h3>
                  <p className="text-gray-600">{stat.title}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
  )
}

export default Sobre
