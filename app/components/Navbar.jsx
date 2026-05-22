'use client'

import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";
import { usePathname } from 'next/navigation'

export default function Navbar() {
    const pathname = usePathname()
    
    return (
        <nav className="dark:text-white fixed top-0 left-0 right-0 flex justify-between items-center px-10 py-4 text-sm uppercase tracking-wide bg-zinc-50/80 dark:bg-gray-950/80 backdrop-blur-sm z-10">
            <Link href="/" className="hidden md:block font-bold text-base normal-case hover:text-blue-400 transition-colors duration-200">
                benjulian.
            </Link>
            <div className="flex gap-6">
                <Link href="/" className={pathname === '/' ? 'text-blue-400' : 'hover:text-blue-400'}>about</Link>
                <Link href="/projects" className={pathname === '/projects' ? 'text-blue-400' : 'hover:text-blue-400'}>projects</Link>
            </div>
            <div className="flex gap-2 items-center">
                <a href="https://github.com/benjuliann" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-6 h-6 hover:text-blue-400 transition-all duration-200 hover:scale-110" aria-label="GitHub">
                    <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/benjuliannoel/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-6 h-6 hover:text-blue-400 transition-all duration-200 hover:scale-110" aria-label="LinkedIn">
                    <FaLinkedin />
                </a>
                <a href="https://instagram.com/8enjulian" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-6 h-6 hover:text-blue-400 transition-all duration-200 hover:scale-110" aria-label="Instagram">
                    <FaInstagram />
                </a>
                <a href="https://www.youtube.com/@8enjulian" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-6 h-6 hover:text-blue-400 transition-all duration-200 hover:scale-110" aria-label="YouTube">
                    <FaYoutube />
                </a>
            </div>
        </nav>
    );
}
