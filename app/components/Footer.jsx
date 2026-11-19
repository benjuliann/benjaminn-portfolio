import { FaGithub, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";
import SectionLabel from "./SectionLabel.jsx";
import EmailReveal from "./EmailReveal.jsx";

const socials = [
    { label: "github", href: "https://github.com/benjuliann", Icon: FaGithub },
    { label: "linkedin", href: "https://www.linkedin.com/in/benjuliannoel/", Icon: FaLinkedin },
    { label: "instagram", href: "https://instagram.com/8enjulian", Icon: FaInstagram },
];

export default function Footer() {
    return (
        <footer id="contact" aria-labelledby="contact-title" className="mt-28 border-t border-line">
            <div className="max-w-6xl mx-auto px-6 md:px-10 py-16">
                <SectionLabel id="contact-title">contact</SectionLabel>
                <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3 font-mono text-sm">
                    {socials.map(({ label, href, Icon }) => (
                        <li key={label}>
                            <a href={href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-1 hover:outline hover:outline-fg">
                                <Icon aria-hidden="true" />
                                {label}
                                <span className="sr-only">(opens in a new tab)</span>
                            </a>
                        </li>
                    ))}
                    <li>
                        <EmailReveal />
                    </li>
                </ul>
                <div className="mt-16 flex flex-wrap justify-between gap-4 font-mono text-xs text-muted">
                    <p>© {new Date().getFullYear()} Benjamin Julian Noel</p>
                    <p>Last updated: November 19, 2026</p>
                </div>
            </div>
        </footer>
    );
}
