import Link from "next/link";

export const metadata = { title: "Page not found" };

export default function NotFound() {
    return (
        <main className="max-w-6xl mx-auto px-6 md:px-10 pt-28 md:pt-36">
            <p className="font-mono text-sm text-muted italic">{"/* 404 */"}</p>
            <h1 className="mt-4 text-5xl md:text-7xl font-semibold tracking-tight">Nothing here<span className="text-yellow">.</span></h1>
            <p className="mt-6 text-lg text-muted">That page doesn&apos;t exist, or it moved.</p>
            <Link href="/" className="inline-block mt-10 px-4 py-2.5 text-sm font-medium bg-fg text-background hover:bg-yellow transition-colors">
                Back home
            </Link>
        </main>
    );
}
