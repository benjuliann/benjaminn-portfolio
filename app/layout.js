import { Instrument_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import PageTransition from "./components/PageTransition";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument-sans",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

const description = "Benjamin Julian Noel's personal portfolio showcasing projects and skills in software development and music production. Explore a collection of innovative projects, creative works, and insights into Benjamin's journey as a developer and musician.";

export const metadata = {
  metadataBase: new URL("https://benjuliannoel.vercel.app"),
  title: {
    default: "Benjamin Julian Noel",
    template: "%s — Benjamin Julian Noel",
  },
  description,
  openGraph: {
    title: "Benjamin Julian Noel",
    description,
    url: "/",
    siteName: "Benjamin Julian Noel",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${instrumentSans.variable} ${jetbrainsMono.variable} antialiased font-sans`}>
        <Navbar />
        <PageTransition>
          {children}
          <Footer />
        </PageTransition>
      </body>
    </html>
  );
}
