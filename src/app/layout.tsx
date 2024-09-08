import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Sidebar from './components/Sidebar'
import Header from './components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'A simple dashboard layout',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex h-screen bg-gray-100">
          <aside className="w-64 bg-white shadow-md">
          <Sidebar />
          </aside>
          

          <main className="flex-1 overflow-x-hidden overflow-y-auto">
            <Header />
            <header className="bg-white shadow-sm">
            </header>

            <div className="container mx-auto px-6 py-8">
              <h1 className='text-center mt-60 text-2xl'>Here's my Assesment</h1>
            </div>
          </main>
        </div>
      </body>
    </html>
  )
}