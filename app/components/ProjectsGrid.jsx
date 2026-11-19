'use client'

import { useState } from "react";
import ProjectCard from "./ProjectCard.jsx";

export default function ProjectsGrid({ projects }) {
    const categories = ["All", ...new Set(projects.map((p) => p.category))];
    const [selected, setSelected] = useState("All");

    const filtered = selected === "All"
        ? projects
        : projects.filter((p) => p.category === selected);

    return (
        <>
            <div role="group" aria-label="Filter by category" className="flex flex-wrap gap-4 mt-12 border-b border-line pb-5 font-mono text-sm lowercase">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setSelected(category)}
                        aria-pressed={selected === category}
                        className="px-1 text-muted hover:text-fg aria-pressed:text-fg aria-pressed:outline aria-pressed:outline-fg"
                    >
                        {category}
                    </button>
                ))}
            </div>

            <div className="grid gap-x-6 gap-y-10 mt-10 sm:grid-cols-2 lg:grid-cols-3">
                {filtered.map((project) => (
                    <ProjectCard
                        key={project.title}
                        {...project}
                    />
                ))}
            </div>
        </>
    );
}
