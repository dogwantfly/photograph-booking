import { Noto_Sans_TC, Inter, Oswald } from 'next/font/google'
import CssBaseline from '@mui/material/CssBaseline';
import './globals.css'
import Footer from '@/app/components/Footer'

const noto_sans_tc = Noto_Sans_TC({
  subsets: ['latin'],
  weight: ['300','400','500','700']
});
// const inter = Inter({ subsets: ['latin'] })
// const oswald = Oswald({
//   subsets: ['latin'],
//   weight: ['300','400','500','700']
// });

export const metadata = {
  title: '隨旅拍',
  description: '隨行攝影預約服務',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={noto_sans_tc.className}>
        <CssBaseline/>
        {children}
        <Footer />
      </body>
    </html>
  )
}
