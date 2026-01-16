import Image from "next/image";
//import Link from "next/link";

export default function Home() {
    return (
        
        <main className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 dark:bg-gray-950 p-10 dark:text-white">
            <nav className="flex gap-6 text-sm uppercase tracking-wide">nav</nav>
            <header className="mb-10">
                <h2 className="text-2xl">welcome.</h2>
            </header>
                 
            <h1 className="text-5xl font-bold tracking-tight">hi, i am <span className="bg-blue-400/70">benjamin</span> julian noel</h1>
            <p className="mt-4 text-lg">a passionate developer and music enthusiast. work in progress.</p>
            <Image
                src="/images/selfie.jpg"
                alt="benjie's selfie"
                width={450}
                height={300}
                className="filter brightness-105 saturate-120 mt-6"
            />
            <div className="mt-6 flex space-x-4 text-xl h-[2.5rem] items-center">
                <a href="https://github.com/benjuliann"className="underline bg-blue-400/25 hover:bg-blue-400/70 transition-all duration-200 hover:scale-105 hover:font-bold px-1 rounded-sm">github.</a>
                <a href="https://www.linkedin.com/in/benjuliannoel/"className="underline bg-blue-400/25 hover:bg-blue-400/70 transition-all duration-200 hover:scale-105 hover:font-bold px-1 rounded-sm">linkedin.</a>
                <a href="https://instagram.com/8enjulian"className="underline bg-blue-400/25 hover:bg-blue-400/70 transition-all duration-200 hover:scale-105 hover:font-bold px-1 rounded-sm">instagram.</a>
                <a href="https://www.youtube.com/@8enjulian"className="underline bg-blue-400/25 hover:bg-blue-400/70 transition-all duration-200 hover:scale-105 hover:font-bold px-1 rounded-sm">youtube.</a>
                <a href="https://benjulian.carrd.co/"className="underline bg-blue-400/25 hover:bg-blue-400/70 transition-all duration-200 hover:scale-105 hover:font-bold px-1 rounded-sm">etc.</a>
            </div>

            <footer className="mt-16 text-sm text-zinc-500 ">
                last updated: jan 2026. <br/>
                © 2026 benjulian noel.
            </footer>
        </main>
    );
}