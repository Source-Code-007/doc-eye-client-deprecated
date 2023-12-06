import Navbar from '@/Components/SharedCompo/Nav/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/Components/SharedCompo/Footer/Footer'
import AuthProvider from '@/Providers/AuthProvider'
import { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'DocEye',
  description: 'Doctor portal website!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
      <SkeletonTheme baseColor="#112841" highlightColor="#07172B">
          <AuthProvider>
            <Navbar></Navbar>
            {children}
            <Footer></Footer>
          </AuthProvider>
        </SkeletonTheme>
      </body>
    </html>
  )
}
