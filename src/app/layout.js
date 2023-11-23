'use client'
import '@/css/style.css'
import '@/css/main.css'
import '@/css/bootstrap-icons.css'
import Navbar from '@/components/navbar'
import PageFooter from '@/components/pageFooter'
import Script from 'next/script'
import logo from '@/img/logo.jpg'
import { usePathname } from 'next/navigation'

export default function RootLayout({ children }) {

  const pathName = usePathname()

  const isAuthPage = pathName.includes('/auth')

  return (
    <html lang="en">
      <head>
        <title>Weboender | Laravel Class BootCamp 2023</title>

        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet" />

        {/* Shortcut icon */}
        <link rel="shortcut icon" href={logo.src} type="image/x-icon" />

      </head>
      <body className={isAuthPage ? 'bg-primary' : 'bg-light'}>

        {!isAuthPage && (
          <Navbar></Navbar>
        )}

        {children}

        {!isAuthPage && (
          <PageFooter></PageFooter>
        )}

        {/* Script */}
        <Script src="/assets/js/bootstrap.bundle.min.js"></Script>
      </body>
    </html>
  )
}
