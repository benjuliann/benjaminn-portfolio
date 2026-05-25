import Image from "next/image";
//import Link from "next/link";
export default function Home() {
    return (
        
        <main className="max-w-4xl mx-auto flex flex-col min-h-screen justify-center bg-zinc-50 dark:bg-gray-950 p-10 dark:text-white">
                 
            <header className="text-5xl font-bold tracking-tight">Benjamin Julian Noel</header>
            <h1 className="text-lg font-semibold mt-4 uppercase">Software Engineer / Producer / SAIT Graduate</h1>
            <p className="mt-4 text-md">Hi there! I'm Benjamin, a software engineer, producer, and creative based in Calgary. Graduating from SAIT and incoming student at ULeth in 2026. My work lives at the intersection of full-stack development, cloud infrastructure, and visual design. Outside of code, I produce music and perform live, and was even brought back by my high school as an audio engineering resource. Most recently, my team placed 2nd at MegaHacks 2026.</p>

            <footer className="mt-16 text-sm text-zinc-500 items-center">
                last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })} <br/>
                © 2026 benjulian noel.
            </footer>
        </main>
    );
}