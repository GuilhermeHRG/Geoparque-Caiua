import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MobileMenu } from "@/components/mobile-menu"
import {
  Calendar,
  MapPin,
  Mountain,
  Leaf,
  BookOpen,
  Camera,
  Users,
  ChevronRight,
  ArrowRight,
  Clock,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Twitter,
  Check,
} from "lucide-react"
import Header from "@/components/ui/header"

export default function GeoparqueLandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <Header/>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent z-10" />
          <div className="relative h-[70vh] w-full">
            <Image
              src="/placeholder.svg?height=1080&width=1920"
              alt="Paisagem do Geoparque"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute inset-0 z-20 flex items-center">
            <div className="container px-4 md:px-6">
              <div className="max-w-2xl space-y-4">
                <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl">
                  Descubra a História da Terra
                </h1>
                <p className="text-xl text-white/90 md:text-2xl">
                  Uma jornada fascinante através de milhões de anos de evolução geológica
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                    Planejar Visita
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-white/10 text-white border-white/20 hover:bg-white/20"
                  >
                    Explorar Atrações
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sobre o Geoparque */}
        <section id="sobre" className="py-16 md:py-24 bg-stone-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 items-center">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-emerald-100 px-3 py-1 text-sm text-emerald-800">
                  Patrimônio Natural
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-emerald-900">
                  Um Tesouro Geológico Reconhecido Mundialmente
                </h2>
                <p className="text-gray-600 md:text-lg">
                  O Geoparque Caiuá é um território com limites bem definidos que possui um patrimônio geológico de
                  importância internacional. Reconhecido pela UNESCO, nosso geoparque preserva formações rochosas que
                  contam a história de mais de 500 milhões de anos da evolução do planeta.
                </p>
                <p className="text-gray-600 md:text-lg">
                  Além da riqueza geológica, o parque abriga uma biodiversidade única, sítios arqueológicos e um rico
                  patrimônio cultural, oferecendo uma experiência completa aos visitantes.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <Button className="bg-emerald-600 hover:bg-emerald-700">
                    Nossa História
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="relative h-[400px] overflow-hidden rounded-xl">
                <Image
                  src="/placeholder.svg?height=800&width=1200"
                  alt="Formação geológica do Geoparque"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
              {[
                {
                  icon: <Mountain className="h-8 w-8 text-emerald-600" />,
                  title: "Formações Geológicas",
                  value: "25+",
                },
                { icon: <Leaf className="h-8 w-8 text-emerald-600" />, title: "Espécies Endêmicas", value: "120+" },
                { icon: <MapPin className="h-8 w-8 text-emerald-600" />, title: "Trilhas Mapeadas", value: "18" },
                { icon: <Users className="h-8 w-8 text-emerald-600" />, title: "Visitantes Anuais", value: "50K+" },
              ].map((stat, i) => (
                <div key={i} className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-sm">
                  {stat.icon}
                  <h3 className="mt-4 text-3xl font-bold text-emerald-800">{stat.value}</h3>
                  <p className="text-gray-600">{stat.title}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Atrações Principais */}
        <section id="atracoes" className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center mb-12">
              <div className="inline-block rounded-lg bg-emerald-100 px-3 py-1 text-sm text-emerald-800 mb-4">
                Atrações Geológicas
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-emerald-900 mb-4">
                Maravilhas Naturais para Explorar
              </h2>
              <p className="max-w-3xl text-gray-600 md:text-lg">
                Descubra formações rochosas impressionantes, cavernas milenares e paisagens deslumbrantes que contam a
                história da evolução do nosso planeta.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Cânion das Eras",
                  description:
                    "Um impressionante cânion com camadas rochosas que revelam 300 milhões de anos de história geológica.",
                  image: "/placeholder.svg?height=400&width=600",
                },
                {
                  title: "Cavernas de Cristal",
                  description: "Formações de cristais raros em cavernas subterrâneas com mais de 2 milhões de anos.",
                  image: "/placeholder.svg?height=400&width=600",
                },
                {
                  title: "Picos Vulcânicos",
                  description: "Antigos vulcões que moldaram a paisagem e criaram formações rochosas únicas.",
                  image: "/placeholder.svg?height=400&width=600",
                },
                {
                  title: "Vale dos Fósseis",
                  description: "Uma área rica em fósseis de plantas e animais que viveram há milhões de anos.",
                  image: "/placeholder.svg?height=400&width=600",
                },
                {
                  title: "Cachoeira Petrificada",
                  description: "Uma impressionante formação calcária que parece uma cachoeira congelada no tempo.",
                  image: "/placeholder.svg?height=400&width=600",
                },
                {
                  title: "Mirante das Eras",
                  description:
                    "Um ponto de observação que oferece vistas panorâmicas de diversas formações geológicas.",
                  image: "/placeholder.svg?height=400&width=600",
                },
              ].map((atracao, i) => (
                <Card key={i} className="overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src={atracao.image || "/placeholder.svg"}
                      alt={atracao.title}
                      fill
                      className="object-cover transition-transform hover:scale-105 duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-emerald-800 mb-2">{atracao.title}</h3>
                    <p className="text-gray-600">{atracao.description}</p>
                    <Button variant="link" className="p-0 h-auto mt-4 text-emerald-600">
                      Saiba mais <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Atividades */}
        <section id="atividades" className="py-16 md:py-24 bg-stone-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center mb-12">
              <div className="inline-block rounded-lg bg-emerald-100 px-3 py-1 text-sm text-emerald-800 mb-4">
                Experiências
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-emerald-900 mb-4">
                Atividades para Todos os Interesses
              </h2>
              <p className="max-w-3xl text-gray-600 md:text-lg">
                De trilhas guiadas a oficinas educativas, oferecemos diversas atividades para que você aproveite ao
                máximo sua visita.
              </p>
            </div>

            <Tabs defaultValue="aventura" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList className="bg-emerald-50">
                  <TabsTrigger
                    value="aventura"
                    className="data-[state=active]:bg-emerald-600 data-[state=active]:text-white"
                  >
                    Aventura
                  </TabsTrigger>
                  <TabsTrigger
                    value="educacao"
                    className="data-[state=active]:bg-emerald-600 data-[state=active]:text-white"
                  >
                    Educação
                  </TabsTrigger>
                  <TabsTrigger
                    value="cultura"
                    className="data-[state=active]:bg-emerald-600 data-[state=active]:text-white"
                  >
                    Cultura
                  </TabsTrigger>
                  <TabsTrigger
                    value="relaxamento"
                    className="data-[state=active]:bg-emerald-600 data-[state=active]:text-white"
                  >
                    Relaxamento
                  </TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="aventura" className="mt-0">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    {
                      title: "Trilhas Guiadas",
                      description:
                        "Explore as formações geológicas com guias especializados que explicam a história de cada local.",
                      icon: <MapPin className="h-10 w-10 text-emerald-600" />,
                    },
                    {
                      title: "Escalada em Rocha",
                      description:
                        "Desafie-se nas paredes rochosas com diferentes níveis de dificuldade para iniciantes e experientes.",
                      icon: <Mountain className="h-10 w-10 text-emerald-600" />,
                    },
                    {
                      title: "Expedições Fotográficas",
                      description:
                        "Capture a beleza do geoparque com dicas de fotógrafos profissionais em locais privilegiados.",
                      icon: <Camera className="h-10 w-10 text-emerald-600" />,
                    },
                  ].map((atividade, i) => (
                    <Card key={i} className="p-6">
                      <div className="mb-4">{atividade.icon}</div>
                      <h3 className="text-xl font-bold text-emerald-800 mb-2">{atividade.title}</h3>
                      <p className="text-gray-600">{atividade.description}</p>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="educacao" className="mt-0">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    {
                      title: "Oficinas Geológicas",
                      description:
                        "Aprenda sobre os diferentes tipos de rochas e minerais em oficinas práticas para todas as idades.",
                      icon: <BookOpen className="h-10 w-10 text-emerald-600" />,
                    },
                    {
                      title: "Palestras Científicas",
                      description:
                        "Participe de palestras com geólogos e pesquisadores sobre a formação e evolução do planeta.",
                      icon: <Users className="h-10 w-10 text-emerald-600" />,
                    },
                    {
                      title: "Laboratório Aberto",
                      description:
                        "Visite nosso laboratório e observe como são realizadas as pesquisas geológicas e paleontológicas.",
                      icon: <Leaf className="h-10 w-10 text-emerald-600" />,
                    },
                  ].map((atividade, i) => (
                    <Card key={i} className="p-6">
                      <div className="mb-4">{atividade.icon}</div>
                      <h3 className="text-xl font-bold text-emerald-800 mb-2">{atividade.title}</h3>
                      <p className="text-gray-600">{atividade.description}</p>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="cultura" className="mt-0">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    {
                      title: "Visitas a Sítios Arqueológicos",
                      description:
                        "Conheça os vestígios das civilizações antigas que habitaram a região há milhares de anos.",
                      icon: <BookOpen className="h-10 w-10 text-emerald-600" />,
                    },
                    {
                      title: "Festivais Culturais",
                      description:
                        "Participe de festivais que celebram a cultura local com música, dança e gastronomia tradicional.",
                      icon: <Users className="h-10 w-10 text-emerald-600" />,
                    },
                    {
                      title: "Artesanato Local",
                      description:
                        "Aprenda técnicas de artesanato com artesãos locais que utilizam materiais da região.",
                      icon: <Leaf className="h-10 w-10 text-emerald-600" />,
                    },
                  ].map((atividade, i) => (
                    <Card key={i} className="p-6">
                      <div className="mb-4">{atividade.icon}</div>
                      <h3 className="text-xl font-bold text-emerald-800 mb-2">{atividade.title}</h3>
                      <p className="text-gray-600">{atividade.description}</p>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="relaxamento" className="mt-0">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    {
                      title: "Banhos Termais",
                      description: "Relaxe em águas termais naturais com propriedades terapêuticas em meio à natureza.",
                      icon: <Leaf className="h-10 w-10 text-emerald-600" />,
                    },
                    {
                      title: "Meditação ao Ar Livre",
                      description:
                        "Participe de sessões de meditação guiada em locais de energia especial dentro do geoparque.",
                      icon: <Mountain className="h-10 w-10 text-emerald-600" />,
                    },
                    {
                      title: "Piqueniques Panorâmicos",
                      description:
                        "Desfrute de refeições preparadas com ingredientes locais em pontos com vistas deslumbrantes.",
                      icon: <MapPin className="h-10 w-10 text-emerald-600" />,
                    },
                  ].map((atividade, i) => (
                    <Card key={i} className="p-6">
                      <div className="mb-4">{atividade.icon}</div>
                      <h3 className="text-xl font-bold text-emerald-800 mb-2">{atividade.title}</h3>
                      <p className="text-gray-600">{atividade.description}</p>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Conservação e Educação */}
        <section id="conservacao" className="py-16 md:py-24 bg-emerald-900 text-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 items-center">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-emerald-800 px-3 py-1 text-sm text-emerald-100">
                  Sustentabilidade
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Preservando o Patrimônio para as Futuras Gerações
                </h2>
                <p className="text-emerald-100 md:text-lg">
                  Nosso compromisso é preservar o patrimônio geológico, natural e cultural da região através de práticas
                  sustentáveis e programas educativos que promovem a conscientização ambiental.
                </p>
                <div className="space-y-4 pt-4">
                  {[
                    {
                      title: "Pesquisa Científica",
                      description:
                        "Apoiamos pesquisas que ampliam o conhecimento sobre a geologia e biodiversidade da região.",
                    },
                    {
                      title: "Educação Ambiental",
                      description:
                        "Desenvolvemos programas educativos para escolas e comunidades sobre a importância da conservação.",
                    },
                    {
                      title: "Turismo Sustentável",
                      description:
                        "Promovemos práticas de turismo que minimizam o impacto ambiental e beneficiam as comunidades locais.",
                    },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-3">
                      <div className="mt-1 rounded-full bg-emerald-700 p-1">
                        <Check className="h-4 w-4 text-emerald-100" />
                      </div>
                      <div>
                        <h3 className="font-bold">{item.title}</h3>
                        <p className="text-emerald-100">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative h-[400px] overflow-hidden rounded-xl">
                <Image
                  src="/placeholder.svg?height=800&width=1200"
                  alt="Atividades de conservação no Geoparque"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Galeria de Imagens */}
        <section className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center mb-12">
              <div className="inline-block rounded-lg bg-emerald-100 px-3 py-1 text-sm text-emerald-800 mb-4">
                Galeria
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-emerald-900 mb-4">
                Belezas do Geoparque
              </h2>
              <p className="max-w-3xl text-gray-600 md:text-lg">
                Confira algumas das paisagens deslumbrantes que você encontrará em sua visita.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="relative aspect-square overflow-hidden rounded-lg">
                  <Image
                    src={`/placeholder.svg?height=600&width=600&text=Imagem+${i + 1}`}
                    alt={`Paisagem do Geoparque ${i + 1}`}
                    fill
                    className="object-cover transition-transform hover:scale-105 duration-300"
                  />
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-8">
              <Button className="bg-emerald-600 hover:bg-emerald-700">
                Ver Mais Fotos
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Informações de Visitação */}
        <section id="visitar" className="py-16 md:py-24 bg-stone-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center mb-12">
              <div className="inline-block rounded-lg bg-emerald-100 px-3 py-1 text-sm text-emerald-800 mb-4">
                Visitação
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-emerald-900 mb-4">
                Planeje Sua Visita
              </h2>
              <p className="max-w-3xl text-gray-600 md:text-lg">
                Tudo o que você precisa saber para aproveitar ao máximo sua experiência no Geoparque Caiuá.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <Card className="p-6">
                <div className="flex flex-col space-y-4">
                  <h3 className="text-xl font-bold text-emerald-800 flex items-center gap-2">
                    <Clock className="h-5 w-5" /> Horários e Ingressos
                  </h3>
                  <div className="space-y-2">
                    <p className="font-medium">Horário de Funcionamento:</p>
                    <p className="text-gray-600">Terça a Domingo: 8h às 17h</p>
                    <p className="text-gray-600">Segunda-feira: Fechado para manutenção</p>
                  </div>
                  <div className="space-y-2">
                    <p className="font-medium">Valores:</p>
                    <p className="text-gray-600">Adultos: R$ 30,00</p>
                    <p className="text-gray-600">Crianças (6-12 anos): R$ 15,00</p>
                    <p className="text-gray-600">Idosos (acima de 60 anos): R$ 15,00</p>
                    <p className="text-gray-600">Estudantes: R$ 15,00 (com carteirinha)</p>
                    <p className="text-gray-600">Crianças até 5 anos: Gratuito</p>
                  </div>
                  <div className="pt-2">
                    <Button className="bg-emerald-600 hover:bg-emerald-700">Comprar Ingressos</Button>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex flex-col space-y-4">
                  <h3 className="text-xl font-bold text-emerald-800 flex items-center gap-2">
                    <MapPin className="h-5 w-5" /> Como Chegar
                  </h3>
                  <div className="space-y-2">
                    <p className="font-medium">Endereço:</p>
                    <p className="text-gray-600">Estrada do Geoparque, km 15 - Serra Verde</p>
                    <p className="text-gray-600">CEP: 12345-678</p>
                  </div>
                  <div className="space-y-2">
                    <p className="font-medium">Acesso:</p>
                    <p className="text-gray-600">De carro: Acesso pela Rodovia BR-101, saída 45</p>
                    <p className="text-gray-600">Transporte público: Ônibus saindo da rodoviária central a cada hora</p>
                  </div>
                  <div className="relative h-40 w-full rounded-lg overflow-hidden mt-2">
                    <Image
                      src="/placeholder.svg?height=400&width=800&text=Mapa"
                      alt="Mapa do Geoparque"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="pt-2">
                    <Button variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50">
                      Ver no Google Maps
                    </Button>
                  </div>
                </div>
              </Card>
            </div>

            <div className="mt-12 p-8 bg-white rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-emerald-800 mb-6 text-center">Dicas para sua Visita</h3>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    title: "Use calçados adequados",
                    description:
                      "As trilhas possuem terrenos irregulares. Calçados fechados e confortáveis são essenciais.",
                  },
                  {
                    title: "Traga protetor solar",
                    description:
                      "Mesmo em dias nublados, a proteção solar é importante durante as atividades ao ar livre.",
                  },
                  {
                    title: "Leve água",
                    description: "Mantenha-se hidratado durante as trilhas. Temos pontos de reabastecimento no parque.",
                  },
                  {
                    title: "Respeite a sinalização",
                    description:
                      "Siga sempre as placas e orientações dos guias para sua segurança e preservação do local.",
                  },
                  {
                    title: "Não deixe lixo",
                    description:
                      "Ajude a preservar o geoparque levando seu lixo de volta ou utilizando as lixeiras disponíveis.",
                  },
                ].map((dica, i) => (
                  <div key={i} className="flex gap-3">
                    <div className="mt-1 rounded-full bg-emerald-100 p-1">
                      <Check className="h-4 w-4 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-emerald-800">{dica.title}</h4>
                      <p className="text-gray-600">{dica.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contato e Newsletter */}
        <section className="py-16 md:py-24">
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

        {/* CTA Final */}
        <section className="py-16 md:py-24 bg-emerald-900 text-white">
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
      </main>

      {/* Footer */}
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
    </div>
  )
}
