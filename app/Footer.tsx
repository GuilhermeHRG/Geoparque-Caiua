import { Mountain,  Facebook, Instagram, Twitter } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <footer className="w-full border-t bg-white py-6 md:py-12">
    <div className="container flex flex-col gap-8 px-4 md:px-6">
      <div className="flex flex-col gap-6 lg:flex-row lg:gap-12">
        <div className="flex flex-col gap-3 lg:max-w-sm">
          <div className="flex items-center gap-2">
            <Mountain className="h-8 w-8 text-emerald-600" />
            <span className="text-xl font-bold text-emerald-800">Geoparque Caiuá</span>
          </div>
          <p className="text-gray-600">
            Um patrimônio geológico reconhecido mundialmente, dedicado à conservação, educação e desenvolvimento
            sustentável.
          </p>
        </div>
        <div className="grid flex-1 grid-cols-2 gap-8 sm:grid-cols-4">
          <div className="space-y-3">
            <h4 className="text-sm font-medium">Explorar</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#sobre" className="text-sm text-gray-600 hover:text-emerald-600 transition-colors">
                  Sobre
                </Link>
              </li>
              <li>
                <Link href="#atracoes" className="text-sm text-gray-600 hover:text-emerald-600 transition-colors">
                  Atrações
                </Link>
              </li>
              <li>
                <Link href="#atividades" className="text-sm text-gray-600 hover:text-emerald-600 transition-colors">
                  Atividades
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="text-sm font-medium">Visitação</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-emerald-600 transition-colors">
                  Horários
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-emerald-600 transition-colors">
                  Ingressos
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-emerald-600 transition-colors">
                  Como Chegar
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="text-sm font-medium">Recursos</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-emerald-600 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-emerald-600 transition-colors">
                  Galeria
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-emerald-600 transition-colors">
                  Pesquisas
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="text-sm font-medium">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-emerald-600 transition-colors">
                  Termos
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-emerald-600 transition-colors">
                  Privacidade
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-emerald-600 transition-colors">
                  Cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-gray-600">
          &copy; {new Date().getFullYear()} Geoparque Caiuá. Todos os direitos reservados.
        </p>
        <div className="flex gap-4">
          <Link href="#" className="text-gray-600 hover:text-emerald-600 transition-colors">
            <span className="sr-only">Facebook</span>
            <Facebook className="h-5 w-5" />
          </Link>
          <Link href="#" className="text-gray-600 hover:text-emerald-600 transition-colors">
            <span className="sr-only">Instagram</span>
            <Instagram className="h-5 w-5" />
          </Link>
          <Link href="#" className="text-gray-600 hover:text-emerald-600 transition-colors">
            <span className="sr-only">Twitter</span>
            <Twitter className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer
