import Image from "next/image";
//import Link from "next/link";


export default function Home() {
    return (
        <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 dark:bg-black p-10">
            <header className="mb-10">
                <h2 className="text-2xl">welcome.</h2>
            </header>
            
            <h1 className="text-5xl font-bold">hi, i am <span className="bg-green-400">benjamin</span> julian noel</h1>
            <p className="mt-4 text-lg">a passionate developer and music enthusiast. site in progress, stay tuned.</p>
            <Image
                src="/images/selfie.jpg"
                alt="benjie's selfie"
                width={450}
                height={300}
                className="filter brightness-105 saturate-120 mt-6"
            />
            <div className="mt-6 flex space-x-4 text-xl">
                <a href="https://github.com/benjuliann" className="underline bg-gray-400 hover:text-3xl">github.</a>
                <a href="https://www.linkedin.com/in/benjuliannoel/" className="underline bg-blue-400   hover:text-3xl">linkedin.</a>
                <a href="https://instagram.com/8enjulian" className="underline bg-pink-600   hover:text-3xl">instagram.</a>
                <a href="https://www.youtube.com/@8enjulian" className="underline bg-red-600   hover:text-3xl">youtube.</a>
                <a href="https://benjulian.carrd.co/" className="underline bg-green-300   hover:text-3xl">etc.</a>
            </div>

            <footer className="mt-20 text-sm text-zinc-500">
                © 2026 benjulian noel.
            </footer>
        </div>
    );
}