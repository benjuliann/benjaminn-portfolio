# Handoff — portfolio redesign

Status as of 2026-11-19. Branch `mockup1`. **Nothing is committed**: all work below is in the working tree.

## Read first

1. `CLAUDE.md`: working rules (ask before assuming, surgical changes, verify).
2. `DESIGN.md`: the current design system and why. **This wins over both briefs** where they disagree.
3. `portfolio-redesign-brief-v2.md`: content rules (never invent facts, links, photos or metrics; ask Benjamin).
4. `portfolio-redesign-brief.md` and `PORTFOLIO_REDESIGN.md` are older. Treat them as history.

## How we got here

1. **v1 brief:** warm off-white editorial. Built, then superseded.
2. **v2 brief:** dark amber, collage, Anton display type. Built; Benjamin said it looked "vibecoded".
3. **Current version:** rebuilt from Benjamin's actual reference images (Instagram grid, three Pinterest boards, a Strudel REPL screenshot). The Strudel "warm" theme is Gruvbox, and that is now the palette. Full rationale is in `DESIGN.md`.

## Decisions Benjamin has made

- **Theme:** dark throughout, plus light paper-coloured sections. Currently only About is on paper (Gruvbox light `#fbf1c7`).
- **Headline:** keep the current positioning, "Software Engineer / Producer / SAIT Graduate". Don't use the brief's "Building things for the web…" line.
- **Hero:** typography only until he sends approved photos.
- **Featured projects:** "use one for now, I'll add later". VibeMap has `featured: true` in `app/data/projects.js`.
- **References:** work from the supplied images, saved in `references/`. These are design references only and are not approved for use on the site.

## What changed (files)

| File | Change |
|---|---|
| `app/globals.css` | Gruvbox tokens, focus ring, `.paper` section class, reduced-motion rules |
| `app/layout.js` | Instrument Sans + JetBrains Mono; metadata, Open Graph data and `metadataBase`; shared Footer |
| `app/page.js` | Home page sections: hero (comment header, role boxes, static waveform SVG), `$WORK`, `$MUSIC`, About on paper |
| `app/projects/page.js` | Work index (route stays `/projects` so existing links work) |
| `app/components/Navbar.jsx` | `bj.` wordmark; work / about / contact; socials moved to the footer |
| `app/components/Footer.jsx` | **new.** Contact section (`id="contact"`) and the 4 existing social links |
| `app/components/ProjectCard.jsx` | Spec-sheet layout, lowercase caption label, `large` variant for the home page |
| `app/components/ProjectsGrid.jsx` | Mono filter buttons using `aria-pressed` |
| `app/components/SectionLabel.jsx` | **new.** `$NAME: stack(` heading, plain text for screen readers |
| `app/components/StationBadge.jsx` | **new.** `SW 01` / `MU 01` / `DS 01` category badges |
| `app/components/PageTransition.jsx` | Respects `prefers-reduced-motion` |
| `app/data/projects.js` | `featured` flag on VibeMap; `stationNumber()` helper |
| `app/not-found.js`, `app/icon.svg`, `app/opengraph-image.js` | **new.** 404 page, `bj.` favicon, social preview image |
| `app/favicon.ico` | Deleted (the Next.js default) |

## Verified

- `npm run lint` is clean and `npm run build` passes.
- On a production server: `/` and `/projects` return 200, an unknown route returns 404, and `/icon.svg` and `/opengraph-image` both serve.
- Headless Chrome screenshots at 1440px and inside a 390px iframe show no horizontal overflow.
- Screenshot gotchas:
  - Plain headless shots look dimmed because they catch the page fade-in mid-animation. Use `--force-prefers-reduced-motion`.
  - `--window-size=390` is wider in practice; headless seems to have a minimum width. Use an iframe for real phone widths.

## Known issues / gotchas

- `stationNumber()` matches projects by **title**, not object identity, because client components receive serialized copies. Titles must stay unique.
- The hero waveform is decorative and generated (not real audio). Benjamin hasn't reacted to it yet.
- Footer line "say hello, or follow along." is Claude-written copy, not yet approved.
- `app/def/page.js` is leftover create-next-app boilerplate that is publicly reachable at `/def`. Suggested deleting it; not done.
- The `geist` package in `package.json` is unused.
- Mobile layout has not been checked on a real device.

## Waiting on Benjamin

1. **Education wording.** The bio still says "Graduating from SAIT and incoming student at ULeth in 2026", which is likely stale. Don't rewrite it without his wording.
2. **Photos.** Can Instagram photos be used (e.g. the glitch portraits) for the hero or About?
3. **"sway" screenshot.** Can the Strudel screenshot be published as the image for the live-coding project?
4. **Featured projects.** 2–4 total, plus the status of each (shipped / WIP / prototype).
5. **Resume PDF.** Only then add a Resume nav link; no fake download link.
6. **Public email.** Currently none is shown; don't add his address without approval.

## Suggested next steps

1. Get Benjamin's reaction to the current look before more visual work.
2. Commit the current state on `mockup1` (only when asked).
3. Add the answers to the list above as they arrive.
4. Phase 3 of the brief: project detail / case-study pages. Only for projects where he supplies role, approach and outcome.
