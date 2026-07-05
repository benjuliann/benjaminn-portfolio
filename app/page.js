import Image from "next/image";
//import Link from "next/link";

const scatteredPhotos = [
    { src: "/images/PASOC.png", className: "top-12 left-0 w-36 h-28 -rotate-6" },
    { src: "/images/VibeMap.png", className: "top-4 right-6 w-32 h-24 rotate-6" },
    { src: "/images/eastside.png", className: "top-1/2 -translate-y-1/2 -left-6 w-28 h-20 rotate-12" },
    { src: "/images/strudel.png", className: "bottom-28 left-8 w-32 h-24 rotate-3" },
    { src: "/images/AIVA.png", className: "bottom-8 right-0 w-36 h-28 -rotate-3" },
    { src: "/images/FindMyGourmet.png", className: "top-1/2 -translate-y-1/2 -right-6 w-28 h-20 -rotate-12" },
];

export default function Home() {
    return (

        <main className="relative max-w-4xl mx-auto flex flex-col min-h-screen justify-center bg-zinc-50 dark:bg-gray-950 p-10 dark:text-white overflow-hidden">

            <div className="absolute inset-0 hidden md:block">
                {scatteredPhotos.map(({ src, className }) => (
                    <div
                        key={src}
                        className={`absolute ${className} shadow-lg rounded-md overflow-hidden border-4 border-white dark:border-gray-800 hover:scale-110 hover:z-20 transition-transform duration-300`}
                    >
                        <Image src={src} alt="" fill style={{ objectFit: "cover" }} />
                    </div>
                ))}
            </div>

            <div className="relative z-10">
                <header className="text-5xl font-bold tracking-tight">Benjamin Julian Noel</header>
                <h1 className="text-lg font-semibold mt-4 uppercase">Software Engineer / Producer / SAIT Graduate</h1>
                <p className="mt-4 text-md">Hi there! I'm Benjamin, a software engineer, producer, and creative based in Calgary. Graduating from SAIT and incoming student at ULeth in 2026. My work lives at the intersection of full-stack development, cloud infrastructure, and visual design. Outside of code, I produce music and perform live, and was even brought back by my high school as an audio engineering resource. Most recently, my team placed 2nd at MegaHacks 2026.</p>

                <footer className="mt-16 text-sm text-zinc-500 items-center">
                    last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })} <br/>
                    © 2026 benjulian noel.
                </footer>
            </div>
        </main>
    );
}