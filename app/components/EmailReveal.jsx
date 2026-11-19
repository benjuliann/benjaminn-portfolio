"use client";

import { useState } from "react";
import { FaEnvelope } from "react-icons/fa";

// Base64 so the address is not a plain string in the HTML or JS bundle; decoded only on click.
const encoded = "YmVuanVsaWFuLm5vZWxAZ21haWwuY29t";

export default function EmailReveal() {
    const [address, setAddress] = useState(null);

    if (address) {
        return (
            <a href={`mailto:${address}`} className="inline-flex items-center gap-2 px-1 hover:outline hover:outline-fg">
                <FaEnvelope aria-hidden="true" />
                {address}
            </a>
        );
    }

    return (
        <button
            type="button"
            onClick={() => setAddress(atob(encoded))}
            className="inline-flex items-center gap-2 px-1 hover:outline hover:outline-fg cursor-pointer"
        >
            <FaEnvelope aria-hidden="true" />
            show email
        </button>
    );
}
