import { Button } from '@/components/ui/button'
import { Calendar } from 'lucide-react'
import React from 'react'

function Cta() {
    return (
        <section className="py-16 md:py-24 bg-emerald-900 text-white flex flex-col items-center justify-center w-full">
            <div className="container px-4 md:px-6 text-center">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl mb-4">
                    Venha Descobrir as Maravilhas do Geoparque Caiuá
                </h2>
                <p className="max-w-3xl mx-auto text-emerald-100 md:text-lg mb-8">
                    Uma experiência única que combina aprendizado, aventura e conexão com a natureza.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" className="bg-white text-emerald-900 hover:bg-emerald-100">
                        Agendar Visita
                        <Calendar className="ml-2 h-5 w-5" />
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default Cta
