import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Calendar,
  MapPin,
  Mountain,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react"
import Header from "@/components/ui/header"
import Banner from "./Banner"
import Sobre from "./Sobre"
import Atractions from "./Atractions"
import Activities from "./Activities"
import Education from "./Education"
import Gallery from "./Gallery"
import Contact from "./Contact"
import Cta from "./Cta"
import Info from "./Info"
import Footer from "./Footer"

export default function GeoparqueLandingPage() {
  return (
    <div className="flex min-h-screen min-w-screen flex-col">
      {/* Header */}
      <Header/>

      <main className="flex-1">
        {/* Hero Section */}
       <Banner/>

        {/* Sobre o Geoparque */}
        <Sobre/>

        {/* Atrações Principais */}
       <Atractions/>

        {/* Atividades */}
       <Activities/>

        {/* Conservação e Educação */}
       <Education/>

        {/* Galeria de Imagens */}
       <Gallery/>

        {/* Informações de Visitação */}
       <Info/>

        {/* Contato */}
        <Contact/>

        {/* CTA Final */}
       <Cta/>
      </main>

      {/* Footer */}
    <Footer/>
    </div>
  )
}
