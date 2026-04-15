import "./globals.css"

import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"

export default function RootLayout({ 
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />

        <main className="px-6
                         max-w-[1300px] m-auto">
          { children }
        </main>

        <Footer />
      </body>
    </html>
  )
}
