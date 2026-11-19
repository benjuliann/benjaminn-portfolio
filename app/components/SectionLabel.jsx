// Section heading with the `$` from Benjamin's Strudel labels (`$WORK:`) as a small accent.
export default function SectionLabel({ id, children, className = "" }) {
    return (
        <h2 id={id} className={`text-3xl md:text-4xl font-semibold tracking-tight lowercase ${className}`}>
            <span aria-hidden="true" className="font-mono font-normal text-aqua">$</span>
            {children}
        </h2>
    );
}
