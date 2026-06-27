import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'DeseOS.io',
  description: 'Tu sistema operativo de negocio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
