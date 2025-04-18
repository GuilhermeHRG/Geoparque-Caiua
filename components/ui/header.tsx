import { Mountain } from 'lucide-react'
import React from 'react'
import { MobileMenu } from '../mobile-menu'
import Link from 'next/link'

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
                    <Link href="#sobre" className="text-sm font-medium text-gray-700 hover:text-emerald-600 transition-colors">
                        Sobre
                    </Link>
                    <Link
                        href="#atracoes"
                        className="text-sm font-medium text-gray-700 hover:text-emerald-600 transition-colors"
                    >
                        Atrações
                    </Link>
                    <Link
                        href="#atividades"
                        className="text-sm font-medium text-gray-700 hover:text-emerald-600 transition-colors"
                    >
                        Atividades
                    </Link>
                    <Link
                        href="#conservacao"
                        className="text-sm font-medium text-gray-700 hover:text-emerald-600 transition-colors"
                    >
                        Conservação
                    </Link>
                    <Link
                        href="#visitar"
                        className="text-sm font-medium text-gray-700 hover:text-emerald-600 transition-colors"
                    >
                        Visitar
                    </Link>
                </nav>
                <MobileMenu />
            </div>
        </header>
    )
}

export default Header