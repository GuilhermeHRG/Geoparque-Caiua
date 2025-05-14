import { Mountain } from 'lucide-react'
import React from 'react'
import { MobileMenu } from '../mobile-menu'

function Header() {
    return (
        <header className="sticky top-0 z-40 w-full border-b bg-white/80 backdrop-blur-md">
            <div className="container flex h-16 items-center justify-between">
                <div className="flex items-center gap-2 ">
                    <img
                        src="/images/logo.jpg"
                        alt="Logotipo Geoparque Caiuá"
                        className=" w-32 xl:ml-2 rounded"
                    />
                    <span className="text-xl font-bold text-orange-800">Geoparque Caiuá</span>
                </div>
                <nav className="hidden md:flex items-center space-x-6">
                    <a href="#sobre" className="text-sm font-medium text-gray-700 hover:text-emerald-600 transition-colors">
                        Sobre
                    </a>
                    
                    <a
                        href="#atracoes"
                        className="text-sm font-medium text-gray-700 hover:text-emerald-600 transition-colors"
                    >
                        Atrações
                    </a>
                    <a
                        href="#atividades"
                        className="text-sm font-medium text-gray-700 hover:text-emerald-600 transition-colors"
                    >
                        Atividades
                    </a>
                    <a
                        href="#conservacao"
                        className="text-sm font-medium text-gray-700 hover:text-emerald-600 transition-colors"
                    >
                        Conservação
                    </a>
                    
                    <a
                        href="#galeria"
                        className="text-sm font-medium text-gray-700 hover:text-emerald-600 transition-colors"
                    >
                        Galeria
                    </a>
                    {/* <a
                        href="#equipe"
                        className="text-sm font-medium text-gray-700 hover:text-emerald-600 transition-colors"
                    >
                        Equipe
                    </a> */}
                    <a
                        href="#visitar"
                        className="text-sm font-medium text-gray-700 hover:text-emerald-600 transition-colors"
                    >
                        Visitar
                    </a>
                </nav>
                <MobileMenu />
            </div>
        </header>
    )
}

export default Header