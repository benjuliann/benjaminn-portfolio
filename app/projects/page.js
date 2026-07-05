import projects from "../data/projects.js";
import ProjectsGrid from "../components/ProjectsGrid.jsx";

export const metadata = { 
  title: "Projects - Benjamin Julian Noel Portfolio", 
  description: "Benjamin Julian Noel's personal portfolio showcasing projects and skills in software development and music production. Explore a collection of innovative projects, creative works, and insights into Benjamin's journey as a developer and musician.", 
};

export default function Projects() {
    return (
        
        <main className="w-full max-w-4xl mx-auto flex flex-col min-h-screen justify-center bg-zinc-50 dark:bg-gray-950 px-10 pt-32 pb-10 dark:text-white">
                 
            <h1 className="text-5xl font-bold tracking-tight">Projects</h1>
            <p className="mt-4 text-lg">Here are some of my favorite works!</p>
            
            <ProjectsGrid projects={projects} />
            <footer className="mt-16 text-sm text-zinc-500 ">
                last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })} <br/>
                © 2026 benjulian noel.
            </footer>
        </main>
    );
}