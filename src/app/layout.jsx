import './globals.css'
import { Inter } from 'next/font/google'
import AuthProvider from '@/Providers/AuthProvider'
import { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import 'react-toastify/dist/ReactToastify.css';
import 'react-tabs/style/react-tabs.css';
import StoreProvider from './storeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'DocEye',
  description: 'Doctor portal website!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <SkeletonTheme baseColor="#09528C" highlightColor="#173250">
          <AuthProvider>
            <StoreProvider>
              {children}
            </StoreProvider>
          </AuthProvider>
        </SkeletonTheme>
      </body>
    </html>
  )
}
