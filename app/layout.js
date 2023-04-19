import { Poppins } from 'next/font/google';
import './globals.css'
import Header from './components/Header';

const poppins = Poppins({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export const metadata = {
  title: 'Create Next App',
  description: 'Crash Course Next_13 /app',
  keywords: 'Web development, web design, javscript, react, node, angular, vue, html, css'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={ poppins.className }>
        <Header />
        <main className='container'>
          {children}
        </main>
      </body>
    </html>
  )
}
