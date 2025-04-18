import { Facebook, Instagram, Twitter } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <footer className="w-full border-t bg-white py-8 md:py-12">
      <div className="container mx-auto px-4 md:px-6 flex flex-col gap-12">
        {/* Topo: Logo + descrição + menus */}
        <div className="flex flex-col lg:flex-row lg:justify-between gap-8">

          {/* Branding */}
          <div className="max-w-sm space-y-4">
            <div className="flex items-center gap-2">
              <img
                src="/images/logo.jpg"
                alt="Logotipo Geoparque Caiuá"
                className="h-32 w-auto"
              />
              <span className="text-2xl font-bold text-emerald-800">
                Geoparque Caiuá
              </span>
            </div>
            <p className="text-gray-600">
              Território reunindo 5 municípios do Paraná, dedicado à conservação
              de afloramentos mesozóicos, fósseis e trilhas educativas.
            </p>
          </div>

          {/* Navegação */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            <div>
              <h4 className="text-sm font-semibold text-gray-700 mb-3">
                Explorar
              </h4>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <Link
                    href="#sobre"
                    className="hover:text-emerald-600 transition-colors"
                  >
                    Sobre
                  </Link>
                </li>
                <li>
                  <Link
                    href="#atracoes"
                    className="hover:text-emerald-600 transition-colors"
                  >
                    Atrações
                  </Link>
                </li>
                <li>
                  <Link
                    href="#atividades"
                    className="hover:text-emerald-600 transition-colors"
                  >
                    Atividades
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-700 mb-3">
                Visitação
              </h4>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <Link
                    href="#visitar"
                    className="hover:text-emerald-600 transition-colors"
                  >
                    Horários
                  </Link>
                </li>
                <li>
                  <Link
                    href="#ingressos"
                    className="hover:text-emerald-600 transition-colors"
                  >
                    Ingressos
                  </Link>
                </li>
                <li>
                  <Link
                    href="#como-chegar"
                    className="hover:text-emerald-600 transition-colors"
                  >
                    Como Chegar
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-700 mb-3">
                Recursos
              </h4>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <Link
                    href="#blog"
                    className="hover:text-emerald-600 transition-colors"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="#galeria"
                    className="hover:text-emerald-600 transition-colors"
                  >
                    Galeria
                  </Link>
                </li>
                <li>
                  <Link
                    href="#pesquisas"
                    className="hover:text-emerald-600 transition-colors"
                  >
                    Pesquisas
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-700 mb-3">
                Legal
              </h4>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <Link
                    href="#termos"
                    className="hover:text-emerald-600 transition-colors"
                  >
                    Termos
                  </Link>
                </li>
                <li>
                  <Link
                    href="#privacidade"
                    className="hover:text-emerald-600 transition-colors"
                  >
                    Privacidade
                  </Link>
                </li>
                <li>
                  <Link
                    href="#cookies"
                    className="hover:text-emerald-600 transition-colors"
                  >
                    Cookies
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Rodapé: direitos + redes sociais */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t pt-6">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Geoparque Caiuá. Todos os direitos
            reservados.
          </p>
          <div className="flex space-x-4">
            <Link
              href="https://facebook.com/geoparque.caiua"
              className="text-gray-600 hover:text-emerald-600 transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5" />
            </Link>
            <Link
              href="https://instagram.com/geoparque.caiua"
              className="text-gray-600 hover:text-emerald-600 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </Link>
            <Link
              href="https://twitter.com/GeoparqueCaiua"
              className="text-gray-600 hover:text-emerald-600 transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
