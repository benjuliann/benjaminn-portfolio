# Portfolio Redesign Brief

Notes from a design-direction conversation, meant as reference when mocking up or implementing changes. Not a spec — a starting point for discussion.

## Current State

- Two pages: About-style home + Projects.
- Body font is Geist. Archivo is imported and set as a CSS variable but never applied anywhere — dead weight, or free differentiation if we assign it to headings.
- Accent color is blue-400 on a zinc/gray neutral palette — functional but generic ("developer portfolio blue").
- No dark-mode toggle — currently just follows OS preference.
- No hero visual (just text on a flat background).
- No skills/stack section (tech only appears inside project cards).
- No experience/timeline section.
- No contact section/form (only header social icons).
- No music/production showcase, despite producing/performing being part of identity.
- `PageTransition` component exists, suggesting appetite for motion, but it's not used elsewhere.

## Sections Worth Adding

- **Hero visual** — photo, illustrated avatar, or animated gradient/blob behind the name. Right now it reads as a doc, not a person's site.
- **Skills/stack section** — grid or row of icons (React, Next.js, Tailwind, cloud tools, DAW/audio tools) instead of tech being buried in project cards.
- **Experience/timeline** — SAIT, ULeth (incoming), audio engineering at high school, MegaHacks 2nd place. Vertical timeline reads stronger than a paragraph.
- **Contact section/footer CTA** — a "let's talk" block with email/Calendly link at the bottom of the homepage.
- **Music/production showcase** — embed (Spotify/SoundCloud/YouTube). Could be its own "Sound" section or page.
- **Featured/pinned project** — a large hero card at the top of Projects (bigger image, more description) before the equal-weight grid.

## Visual Polish for What Exists

- **Accent color** — move off generic blue-400 toward something tied to identity (amber, teal, or a signature color from music branding).
- **Texture/depth** — everything is currently flat (`bg-zinc-50`, flat shadows). Consider subtle noise texture, soft radial gradient behind hero, or 1px border instead of/with shadow.
- **Category pills** — currently only 2 states (blue-400 active / zinc-200 idle). Could differentiate categories by color instead of just active/inactive.
- **Project card hover** — currently only changes shadow. Consider image zoom-on-hover, or tags/tech sliding in.
- **Micro-interactions** — cursor-follow effects, fade-up on scroll, staggered entrance for project cards.
- **Typography scale** — both pages reuse the same `text-5xl font-bold` header pattern. Homepage name treatment could get more personality (larger, mixed weight, distinct display font vs. body).

## Font Alternatives

Geist is clean but extremely common (it's Vercel's own font — many Next.js portfolios default to it).

- **Clean/neutral but less "default":** Inter Tight, Instrument Sans, General Sans, Satoshi.
- **More character (fits the music-producer side):** Space Grotesk, Cabinet Grotesk, or Clash Display for headings, paired with a plain body font.
- **Editorial/portfolio feel:** serif display font (Fraunces, Instrument Serif, Source Serif) for name/headings + simple sans body.
- **Zero-cost option:** Archivo is already loaded and unused — apply it to headings only, keep Geist for body. Instant differentiation, no new dependencies.

## Identity Signals from Instagram (@8enjulian)

Pulled from reviewing the actual profile grid — these are real, ownable visual signatures, not generic archetypes:

- **DAW timeline strips** — color-coded horizontal clip bars (orange/pink/green/blue) appear across multiple posts. Distinctive motif, not seen on typical dev portfolios.
- **Bold caption-over-dark-photo style** — lyric/caption posts like "DU BIST GUT GENUG", "keep winning", "it's got my head spinning while im out" use heavy white sans-serif text overlaid on moody, dark or blue-toned backgrounds. This is an existing personal typographic voice.
- **Cool blue color grade** — MIDI keyboard glowing blue, hawk-in-grass shot, snowy photo all share a consistent blue-night tone.
- **CS project as content** — the object-detection (stop sign, bounding boxes) screenshot is already something posted about, not just buried in a project card.
- **Analog/sketchbook energy** — a charcoal drawing captioned `console.log('is this it')` mixes hand-drawn art with code humor — playful, not corporate.
- **"8enjulian" wordmark** — the stylized "8" (in place of "B") is a built-in logo/wordmark opportunity, more distinctive than plain text "Benjulian."

## Direction Concepts

### A. Timeline as Design System

- DAW color-bar motif becomes a literal UI element — section dividers, a skills "track" (each stack item is a colored clip on a timeline instead of an icon), scroll progress bar styled as a playhead.
- Hero: full-bleed blue-toned photo with a bold white overlaid line in the IG caption style — e.g. a rotating tagline instead of "Hi, I'm Benjulian."
- "8enjulian" wordmark set in a heavy grotesk as the site's nav/logo mark.
- Stop-sign CV project pulled out as an interactive thumbnail (bounding-box hover effect) rather than a generic screenshot.

### B. Two-Lane Split

- Home page visually forks into two lanes echoing the grid itself: left = SWE (dark terminal aesthetic, monospace, CV/object-detection work), right = producer (colorful DAW strips, embedded track player, blue-toned photography).
- Instead of merging "SWE + producer" into one bio chip list, the site structurally shows both, letting visitors self-select — closer to how the actual IG grid reads (code screenshots interleaved with DAW/photo posts).
- Timeline/experience entries keep the caption-poster typographic style (bold white-on-dark blocks) rather than plain text.

## Open Questions / Not Yet Decided

- Which direction (A, B, a hybrid, or something new) to prototype first.
- Whether real photos/screenshots from Instagram will be sourced as actual image assets, or used only as style reference.
- Dark mode: toggle vs. continuing to follow OS preference.
- Whether music/production gets its own page or a homepage section.
