"use client"

import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import Link from "next/link"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"

export function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Abrir menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="flex flex-col">
        <div className="flex flex-col space-y-4 mt-8">
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
                    <a
                        href="#equipe"
                        className="text-sm font-medium text-gray-700 hover:text-emerald-600 transition-colors"
                    >
                        Equipe
                    </a>
                    <a
                        href="#visitar"
                        className="text-sm font-medium text-gray-700 hover:text-emerald-600 transition-colors"
                    >
                        Visitar
                    </a>
        </div>
        
      </SheetContent>
    </Sheet>
  )
}
