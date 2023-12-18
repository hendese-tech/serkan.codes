import './globals.css'
import { inter, manrope } from '@/ui/Fonts'

export const metadata = {
  title: 'Serkan Ertan',
  description: 'website desctiption',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${manrope.className} antialiased bg-light dark:bg-dark`}>
        {children}
        <footer>
          {/* Footer Added */}
        </footer>
      </body>
    </html>
  )
}
