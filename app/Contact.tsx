import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react'
import React from 'react'

function Contact() {
  return (
    <section className="py-16 md:py-24 flex flex-col items-center justify-center">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2">
              <Card className="p-6">
                <h3 className="text-xl font-bold text-emerald-800 mb-4">Entre em Contato</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-emerald-600" />
                    <p>(11) 1234-5678</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-emerald-600" />
                    <p>contato@geoparqueterra.com.br</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-emerald-600" />
                    <p>Estrada do Geoparque, km 15 - Serra Verde</p>
                  </div>
                </div>
                <div className="flex gap-4 mt-6">
                  <Button
                    size="icon"
                    variant="outline"
                    className="rounded-full border-emerald-600 text-emerald-600 hover:bg-emerald-50"
                  >
                    <Facebook className="h-5 w-5" />
                    <span className="sr-only">Facebook</span>
                  </Button>
                  <Button
                    size="icon"
                    variant="outline"
                    className="rounded-full border-emerald-600 text-emerald-600 hover:bg-emerald-50"
                  >
                    <Instagram className="h-5 w-5" />
                    <span className="sr-only">Instagram</span>
                  </Button>
                  <Button
                    size="icon"
                    variant="outline"
                    className="rounded-full border-emerald-600 text-emerald-600 hover:bg-emerald-50"
                  >
                    <Twitter className="h-5 w-5" />
                    <span className="sr-only">Twitter</span>
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </section>
  )
}

export default Contact
