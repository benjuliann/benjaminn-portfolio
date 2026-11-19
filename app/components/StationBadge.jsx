// Transit-wayfinding style badge, e.g. "SW 01". The code carries the meaning; colour reinforces it.
const lines = {
    Software: { code: "SW", className: "text-aqua border-aqua" },
    Music: { code: "MU", className: "text-purple border-purple" },
    Design: { code: "DS", className: "text-yellow border-yellow" },
};

export default function StationBadge({ category, number }) {
    const line = lines[category] ?? { code: category.slice(0, 2).toUpperCase(), className: "text-fg border-fg" };

    return (
        <span className={`inline-flex items-center gap-1 rounded-md border-2 px-1.5 py-0.5 font-mono text-xs font-bold leading-none ${line.className}`}>
            <span className="sr-only">{category} project </span>
            <span aria-hidden="true">{line.code}</span>
            {String(number).padStart(2, "0")}
        </span>
    );
}
