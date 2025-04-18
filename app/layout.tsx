import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Geoparque Caiuá',
  description: 'Turismo e conservação no Geoparque Caiuá – Cruzeiro do Oeste, Tuneiras do Oeste, Formosa do Oeste, Alto Piquiri e Mariluz',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
