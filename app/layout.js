
import { Poppins, Inter, Londrina_Shadow } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ 
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

export const metadata = {
  title: "PickMVP",
  description: "Picks Y Noticias Deportivas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${inter.variable} ${londrina.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
