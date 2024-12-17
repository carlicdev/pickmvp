import { Analytics } from '@vercel/analytics/react';
import { Poppins, Inter, Londrina_Shadow, Rubik } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from './components/Sidebar';

const inter = Inter({ 
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ["latin"], 
  variable: '--font-inter'
});

const poppins = Poppins({ 
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-poppins',
 })

 const londrina = Londrina_Shadow({ 
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-londrina',
 })

 const rubik = Rubik({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-rubik',
})

export const metadata = {
  title: "PickMVP",
  description: "Picks Y Noticias Deportivas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${inter.variable} ${londrina.variable} ${rubik.variable} antialiased`}
      >
        <Navbar />
        <Sidebar />
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
