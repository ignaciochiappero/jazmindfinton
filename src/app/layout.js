import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from "./components/Navbar";


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Jazmín Fintón',
  description: 'Portfolio personal de Jazmín Fintón - Desarrollado por Nacho Dev',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
