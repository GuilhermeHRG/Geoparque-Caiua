'use client'

import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import React, { useEffect } from 'react'

function Equip() {
  const equipe = [
    {
      nome: 'João Silva',
      descricao: 'Coordenador do projeto, atua na integração entre municípios.',
      foto: '/images/colonia72.jpg',
    },
    {
      nome: 'Maria Souza',
      descricao: 'Responsável pela curadoria histórica do museu.',
      foto: '/images/bannerHome.jpg',
    },
    {
      nome: 'Carlos Lima',
      descricao: 'Especialista em biodiversidade e conservação.',
      foto: '/images/dinossauro.jpg',
    },
    {
      nome: 'Ana Costa',
      descricao: 'Educadora ambiental, promove visitas guiadas.',
      foto: '/images/cachoeira.jpg',
    },
  ]

  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: false, // anima sempre que voltar pra tela
    threshold: 0.3,
  })

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    } else {
      controls.start('hidden')
    }
  }, [inView, controls])

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6 },
    }),
  }

  return (
    <section
      id="equipe"
      className="py-16 md:py-24 flex flex-col items-center justify-center"
      ref={ref}
    >
      <div className="container px-4 md:px-6 text-center">
        <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800 mb-4">
          Equipe
        </div>
        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-blue-900 mb-12">
          Equipe do Geoparque
        </h2>

        <div className="xl:grid lg:grid lg:grid-cols-4 xl:grid-cols-4 flex flex-col auto-rows-auto gap-y-16 sm:gap-4 xl:gap-x-8 w-full">
          {equipe.map((membro, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              animate={controls}
              variants={variants}
              className={`col-start-${(i % 2 === 0) ? 1 : 4} row-start-${i * 2 + 1} bg-white shadow-md rounded-xl p-4 flex flex-col items-center`}
            >
              <div className="relative w-32 h-32 mb-4 rounded-full overflow-hidden">
                <Image
                  src={membro.foto}
                  alt={membro.nome}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg font-bold text-blue-800">{membro.nome}</h3>
              <p className="text-sm text-gray-600 mt-2">{membro.descricao}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Equip
