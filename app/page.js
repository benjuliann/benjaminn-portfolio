import { getProjects } from "./data/projects.js";
import ProjectCard from "./components/ProjectCard.jsx";
import SectionLabel from "./components/SectionLabel.jsx";

const roles = ["software engineer", "producer", "SAIT graduate", "UofL student"];

// Static, decorative oscilloscope line, like Strudel's ._scope(): a quiet lead-in, then the signal.
const scope = Array.from({ length: 220 }, (_, i) => {
    const t = i / 219;
    const env = t < 0.12 ? 0.06 : Math.min(1, (t - 0.12) * 10) * (1 - (t - 0.12) * 0.6);
    return Math.abs(env * (0.6 + 0.4 * Math.sin(i * 1.7) * Math.cos(i * 0.31)));
});

export default async function Home() {
    const projects = await getProjects();

    return (
        <main>
            <section aria-labelledby="hero-title" className="max-w-6xl mx-auto px-6 md:px-10 pt-32 md:pt-40">
                <h1 id="hero-title" className="text-5xl sm:text-7xl md:text-8xl font-semibold tracking-tight leading-[0.95]">
                    Benjamin Julian Noel<span className="text-yellow">.</span>
                </h1>

                <p className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-sm">
                    {roles.map((role, i) => (
                        <span key={role} className="contents">
                            {i > 0 && <span aria-hidden="true" className="text-muted">/</span>}
                            <span className="px-1 outline outline-fg">{role}</span>
                        </span>
                    ))}
                    <span className="text-muted">— based in Calgary</span>
                </p>

                <svg aria-hidden="true" viewBox="0 0 440 40" preserveAspectRatio="none" className="mt-16 h-10 w-full text-fg">
                    <path
                        d={scope.map((v, i) => `M${i * 2} ${20 - v * 18}V${20 + v * 18}`).join("")}
                        stroke="currentColor"
                        strokeWidth="1.2"
                        fill="none"
                    />
                </svg>
            </section>

            <section id="work" aria-labelledby="work-title" className="max-w-6xl mx-auto px-6 md:px-10 mt-20">
                <SectionLabel id="work-title">work</SectionLabel>
                <div className="mt-8 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project) => (
                        <ProjectCard key={project.slug} {...project} />
                    ))}
                </div>
            </section>

            <section id="about" aria-labelledby="about-title" className="paper mt-28">
                <div className="max-w-6xl mx-auto px-6 md:px-10 py-20 grid gap-6 md:grid-cols-12">
                    <SectionLabel id="about-title" className="md:col-span-4 [&>span]:text-ink-muted">about</SectionLabel>
                    <p className="md:col-span-8 text-lg leading-relaxed max-w-2xl">Hi there! I&apos;m Benjamin, a software engineer, producer, and creative based in Calgary. Graduating from SAIT and incoming student at ULeth in 2026. My work lives at the intersection of full-stack development, cloud infrastructure, and visual design. Outside of code, I produce music and perform live, and was even brought back by my high school as an audio engineering resource. Most recently, my team placed 2nd at MegaHacks 2026.</p>
                </div>
            </section>
        </main>
    );
}
