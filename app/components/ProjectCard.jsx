import Image from "next/image";

export default function ProjectCard({ title, description, tech = [], image, imageSrc, projectLink }) {
    const preferred = image ?? imageSrc;
    const safeImage = preferred && String(preferred).trim() !== "" ? preferred : "/globe.svg";

    return (
        <a href={projectLink} target="_blank" rel="noopener noreferrer" className="block rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="relative h-48 w-full">
                <Image
                    src={safeImage}
                    alt={title}
                    fill
                    style={{ objectFit: "cover", objectPosition: "center" }}
                />
            </div>
            <div className="p-4 bg-white dark:bg-gray-800">
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                    {tech.map((t, index) => (
                        <span key={index} className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
                            {t}
                        </span>
                    ))}
                </div>
            </div>
        </a>
    );
}