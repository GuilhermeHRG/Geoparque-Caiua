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
          <SheetClose asChild>
            <Link
              href="#sobre"
              className="flex items-center text-lg font-medium transition-colors hover:text-emerald-600"
            >
              Sobre
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link
              href="#atracoes"
              className="flex items-center text-lg font-medium transition-colors hover:text-emerald-600"
            >
              Atrações
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link
              href="#atividades"
              className="flex items-center text-lg font-medium transition-colors hover:text-emerald-600"
            >
              Atividades
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link
              href="#conservacao"
              className="flex items-center text-lg font-medium transition-colors hover:text-emerald-600"
            >
              Conservação
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link
              href="#visitar"
              className="flex items-center text-lg font-medium transition-colors hover:text-emerald-600"
            >
              Visitar
            </Link>
          </SheetClose>
        </div>
        
      </SheetContent>
    </Sheet>
  )
}
