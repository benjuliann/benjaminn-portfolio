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
            <div className="flex flex-wrap gap-2 mt-8">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setSelected(category)}
                        className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors duration-200 ${
                            selected === category
                                ? "bg-blue-400 text-white"
                                : "bg-zinc-200 text-zinc-700 hover:bg-zinc-300 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
                        }`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <div className="grid gap-6 mt-6 sm:grid-cols-2">
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
