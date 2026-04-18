import "./globals.css"

import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"

export const metadata = {
  title: "Grandma's Cake",
  icons: {
    icon: [
      { url: "/images/icons/favicon.ico"},
      { url: "/images/icons/faviconCake.png", type:"image/png"},
    ],
  },
};

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

        <Footer isHome={false} />
      </body>
    </html>
  )
}
