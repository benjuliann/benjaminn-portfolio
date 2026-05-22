import { Geist, Archivo, } from "next/font/google";
import "./globals.css";
import PageTransition from "./components/PageTransition";
import Navbar from "./components/Navbar.jsx";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
});

export const metadata = { 
  title: "Benjamin Julian Noel Portfolio", 
  description: "Benjamin Julian Noel's personal portfolio showcasing projects and skills in software development and music production. Explore a collection of innovative projects, creative works, and insights into Benjamin's journey as a developer and musician.", 
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geist.variable} ${archivo.variable} antialiased font-sans`}>
        <Navbar />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
