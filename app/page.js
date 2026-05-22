import Image from "next/image";
//import Link from "next/link";
export default function Home() {
    return (
        
        <main className="max-w-4xl mx-auto flex flex-col min-h-screen justify-center bg-zinc-50 dark:bg-gray-950 p-10 dark:text-white">
                 
            <header className="text-5xl font-bold tracking-tight">Benjamin Julian Noel</header>
            <h1 className="text-lg font-semibold mt-4 uppercase">Software Engineer / Producer / Student @ SAIT</h1>
            <p className="mt-4 text-md">Hi there! I'm Benjamin, currently a student finishing up at SAIT. My work mainly focuses on full-stack programming, audio technology, and visual design. I combine these disciplines to create web-applications and projects that are robust and visually compelling.</p>

            <footer className="mt-16 text-sm text-zinc-500 items-center">
                last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })} <br/>
                © 2026 benjulian noel.
            </footer>
        </main>
    );
}