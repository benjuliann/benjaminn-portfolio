import Image from "next/image";
import Link from "next/link";
import StationBadge from "./StationBadge.jsx";

// Image-led tile: the picture does the talking, details live on the project page.
export default function ProjectCard({ number, slug, title, category, image }) {
    const safeImage = image && String(image).trim() !== "" ? image : "/globe.svg";

    return (
        <Link href={`/projects/${slug}`} className="group block">
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-surface">
                <Image
                    src={safeImage}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
            </div>
            <div className="mt-3 flex items-center gap-3">
                <StationBadge category={category} number={number} />
                <h3 className="font-semibold tracking-tight leading-tight group-hover:underline underline-offset-4 decoration-1">
                    {title}
                </h3>
            </div>
        </Link>
    );
}
