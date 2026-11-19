import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjects } from "../../data/projects.js";
import StationBadge from "../../components/StationBadge.jsx";

export async function generateStaticParams() {
    const projects = await getProjects();
    return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const project = (await getProjects()).find((p) => p.slug === slug);
    return project ? { title: project.title, description: project.description } : {};
}

export default async function ProjectPage({ params }) {
    const { slug } = await params;
    const projects = await getProjects();
    const index = projects.findIndex((p) => p.slug === slug);
    if (index === -1) notFound();

    const project = projects[index];
    const next = projects[(index + 1) % projects.length];
    const host = new URL(project.projectLink).hostname.replace(/^www\./, "");

    return (
        <main className="max-w-6xl mx-auto px-6 md:px-10 pt-28 md:pt-36">
            <Link href="/projects" className="font-mono text-sm text-muted px-1 hover:text-fg hover:outline hover:outline-fg">
                ← all work
            </Link>

            <div className="mt-8 flex items-center gap-3">
                <StationBadge category={project.category} number={project.number} />
            </div>
            <h1 className="mt-4 text-4xl md:text-6xl font-semibold tracking-tight leading-tight">{project.title}</h1>
            <p className="mt-5 max-w-2xl text-lg text-muted">{project.description}</p>

            <div className="mt-8 grid gap-6 md:grid-cols-12 md:items-start">
                <dl className="md:col-span-7 grid grid-cols-[5rem_1fr] font-mono text-sm border-t border-line">
                    <dt className="py-3 text-muted border-b border-line">type</dt>
                    <dd className="py-3 border-b border-line lowercase">{project.category}</dd>
                    <dt className="py-3 text-muted border-b border-line">stack</dt>
                    <dd className="py-3 border-b border-line">{project.tech.join(", ")}</dd>
                </dl>
                <div className="md:col-span-5 md:text-right">
                    <a href={project.projectLink} target="_blank" rel="noopener noreferrer" className="inline-block px-4 py-2.5 text-sm font-medium bg-fg text-background hover:bg-yellow transition-colors">
                        View on {host} ↗
                        <span className="sr-only">(opens in a new tab)</span>
                    </a>
                </div>
            </div>

            <div className="mt-12 bg-surface">
                <Image
                    src={project.image}
                    alt={`${project.title} preview`}
                    width={1600}
                    height={1000}
                    sizes="(min-width: 1152px) 1072px, 100vw"
                    className="mx-auto w-auto h-auto max-h-[75vh] object-contain"
                    priority
                />
            </div>

            <Link href={`/projects/${next.slug}`} className="group mt-24 flex items-baseline justify-between gap-6 border-t border-line pt-6">
                <span className="font-mono text-sm text-muted">next</span>
                <span className="text-2xl md:text-3xl font-semibold tracking-tight group-hover:underline underline-offset-4 decoration-1 text-right">
                    {next.title} →
                </span>
            </Link>
        </main>
    );
}
