import { getProjects } from "../data/projects.js";
import ProjectsGrid from "../components/ProjectsGrid.jsx";

export const metadata = {
  title: "Work",
  description: "Benjamin Julian Noel's personal portfolio showcasing projects and skills in software development and music production. Explore a collection of innovative projects, creative works, and insights into Benjamin's journey as a developer and musician.",
};

export default async function Projects() {
    const projects = await getProjects();

    return (
        <main className="max-w-6xl mx-auto px-6 md:px-10 pt-28 md:pt-36">
            <h1 className="text-5xl md:text-7xl font-semibold tracking-tight">Work<span className="text-yellow">.</span></h1>
            <p className="mt-4 text-lg text-muted">Here are some of my favorite works!</p>
            <ProjectsGrid projects={projects} />
        </main>
    );
}
