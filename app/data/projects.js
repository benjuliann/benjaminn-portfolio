import { createReader } from "@keystatic/core/reader";
import keystaticConfig from "../../keystatic.config.js";

const reader = createReader(process.cwd(), keystaticConfig);

// Projects are edited at /keystatic and stored in content/projects/*.yaml.
// Each gets a station-style `number` within its category, e.g. the 2nd Software project -> 2.
export async function getProjects() {
    const entries = await reader.collections.projects.all();
    const projects = entries
        .map(({ slug, entry }) => ({ slug, ...entry }))
        .sort((a, b) => (a.position ?? 99) - (b.position ?? 99) || a.title.localeCompare(b.title));

    return projects.map((project) => ({
        ...project,
        number: projects.filter((p) => p.category === project.category).indexOf(project) + 1,
    }));
}
