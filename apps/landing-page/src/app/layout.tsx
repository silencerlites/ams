import Header from './shared/widgets/header/header';
import './global.css';
import {Poppins, Roboto} from "next/font/google"
import Footer from './shared/widgets/footer/footer';

export const metadata = {
  title: 'SRJJ Accounting Services',
  description: 'Your Business, Our Expertise.',
}

const poppins = Poppins({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700', '900'], variable: '--font-poppins' });
const roboto = Roboto({ subsets: ['latin'], weight: ['100', '300', '400', '500', '700', '900'], variable: '--font-roboto' });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${roboto.variable}`}>
        <Header />
        {children}
        <Footer />
        </body>
    </html>
  )
}
