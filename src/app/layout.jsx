import { Inter } from 'next/font/google'
import './globals.css'
import PrimaryNavbar from '@/components/molecules/PrimaryNavbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Next Mongo App',
  description: 'A boilerplate for Next.js and MongoDB',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <header><PrimaryNavbar /></header>
        <main className='container lg:px-10 mx-auto'>{children}</main>
      </body>
    </html>
  )
}

