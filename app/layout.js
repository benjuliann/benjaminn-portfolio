import {  Inter, Archivo, } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
});

export const metadata = { 
  title: "benjulian noel", 
  description: "my portfolio", 
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${archivo.variable} antialiased font-sans`}>
        {children}
      </body>
    </html>
  );
}
