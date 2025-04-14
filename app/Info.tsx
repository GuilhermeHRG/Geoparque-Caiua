import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Clock, MapPin, Check } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function Info() {
  return (
    <section id="visitar" className="py-16 md:py-24 bg-stone-50 flex flex-col items-center justify-center">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center mb-12">
              <div className="inline-block rounded-lg bg-emerald-100 px-3 py-1 text-sm text-emerald-800 mb-4">
                Visitação
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-emerald-900 mb-4">
                Planeje Sua Visita
              </h2>
              <p className="max-w-3xl text-gray-600 md:text-lg">
                Tudo o que você precisa saber para aproveitar ao máximo sua experiência no Geoparque Caiuá.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <Card className="p-6">
                <div className="flex flex-col space-y-4">
                  <h3 className="text-xl font-bold text-emerald-800 flex items-center gap-2">
                    <Clock className="h-5 w-5" /> Horários e Ingressos
                  </h3>
                  <div className="space-y-2">
                    <p className="font-medium">Horário de Funcionamento:</p>
                    <p className="text-gray-600">Terça a Domingo: 8h às 17h</p>
                    <p className="text-gray-600">Segunda-feira: Fechado para manutenção</p>
                  </div>
                  <div className="space-y-2">
                    <p className="font-medium">Valores:</p>
                    <p className="text-gray-600">Adultos: R$ 30,00</p>
                    <p className="text-gray-600">Crianças (6-12 anos): R$ 15,00</p>
                    <p className="text-gray-600">Idosos (acima de 60 anos): R$ 15,00</p>
                    <p className="text-gray-600">Estudantes: R$ 15,00 (com carteirinha)</p>
                    <p className="text-gray-600">Crianças até 5 anos: Gratuito</p>
                  </div>
                  <div className="pt-2">
                    <Button className="bg-emerald-600 hover:bg-emerald-700">Comprar Ingressos</Button>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex flex-col space-y-4">
                  <h3 className="text-xl font-bold text-emerald-800 flex items-center gap-2">
                    <MapPin className="h-5 w-5" /> Como Chegar
                  </h3>
                  <div className="space-y-2">
                    <p className="font-medium">Endereço:</p>
                    <p className="text-gray-600">Estrada do Geoparque, km 15 - Serra Verde</p>
                    <p className="text-gray-600">CEP: 12345-678</p>
                  </div>
                  <div className="space-y-2">
                    <p className="font-medium">Acesso:</p>
                    <p className="text-gray-600">De carro: Acesso pela Rodovia BR-101, saída 45</p>
                    <p className="text-gray-600">Transporte público: Ônibus saindo da rodoviária central a cada hora</p>
                  </div>
                  <div className="relative h-40 w-full rounded-lg overflow-hidden mt-2">
                    <Image
                      src="/placeholder.svg?height=400&width=800&text=Mapa"
                      alt="Mapa do Geoparque"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="pt-2">
                    <Button variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50">
                      Ver no Google Maps
                    </Button>
                  </div>
                </div>
              </Card>
            </div>

            <div className="mt-12 p-8 bg-white rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-emerald-800 mb-6 text-center">Dicas para sua Visita</h3>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    title: "Use calçados adequados",
                    description:
                      "As trilhas possuem terrenos irregulares. Calçados fechados e confortáveis são essenciais.",
                  },
                  {
                    title: "Traga protetor solar",
                    description:
                      "Mesmo em dias nublados, a proteção solar é importante durante as atividades ao ar livre.",
                  },
                  {
                    title: "Leve água",
                    description: "Mantenha-se hidratado durante as trilhas. Temos pontos de reabastecimento no parque.",
                  },
                  {
                    title: "Respeite a sinalização",
                    description:
                      "Siga sempre as placas e orientações dos guias para sua segurança e preservação do local.",
                  },
                  {
                    title: "Não deixe lixo",
                    description:
                      "Ajude a preservar o geoparque levando seu lixo de volta ou utilizando as lixeiras disponíveis.",
                  },
                ].map((dica, i) => (
                  <div key={i} className="flex gap-3">
                    <div className="mt-1 rounded-full bg-emerald-100 p-1">
                      <Check className="h-4 w-4 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-emerald-800">{dica.title}</h4>
                      <p className="text-gray-600">{dica.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
  )
}

export default Info
