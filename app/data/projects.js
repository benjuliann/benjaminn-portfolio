import { createReader } from "@keystatic/core/reader";
import { createGitHubReader } from "@keystatic/core/reader/github";
import keystaticConfig from "../../keystatic.config.js";

// Production reads straight from GitHub so edits show up without a redeploy (the pages render on demand).
// Set KEYSTATIC_GITHUB_TOKEN (a token with read access) to avoid GitHub's anonymous rate limit.
const reader = process.env.NODE_ENV === "production"
    ? createGitHubReader(keystaticConfig, {
        repo: "benjuliann/benjaminn-portfolio",
        ref: process.env.VERCEL_GIT_COMMIT_REF,
        token: process.env.KEYSTATIC_GITHUB_TOKEN,
    })
    : createReader(process.cwd(), keystaticConfig);

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
