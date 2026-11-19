'use client'

import Link from "next/link";
import { usePathname } from 'next/navigation'

const links = [
    { href: "/projects", label: "work" },
    { href: "/#about", label: "about" },
    { href: "/#contact", label: "contact" },
];

export default function Navbar() {
    const pathname = usePathname()

    return (
        <header className="fixed top-0 left-0 right-0 z-30 bg-surface">
            <nav aria-label="Primary" className="max-w-6xl mx-auto flex justify-between items-center h-12 px-6 md:px-10">
                <Link href="/" aria-label="Benjamin Julian Noel, home" className="text-lg font-semibold tracking-tight">
                    <span className="sm:hidden">bjn</span>
                    <span className="hidden sm:inline">Benjamin julian noel</span>
                    <span className="text-yellow">.</span>
                </Link>
                <ul className="flex gap-5 font-mono text-sm">
                    {links.map(({ href, label }) => (
                        <li key={href}>
                            <Link
                                href={href}
                                aria-current={pathname === href || (href === "/projects" && pathname.startsWith("/projects/")) ? "page" : undefined}
                                className="px-1 text-muted hover:text-fg aria-[current=page]:text-fg aria-[current=page]:outline aria-[current=page]:outline-fg"
                            >
                                {label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}
