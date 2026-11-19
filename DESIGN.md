# Design direction

Working notes for the portfolio redesign. Read alongside `portfolio-redesign-brief-v2.md`; where they disagree, this file wins because it's based on the actual reference images.

## Why the last pass felt "vibecoded"

It used the generic brutalist-portfolio kit instead of anything from the references:

- Huge stacked condensed display name (Anton): every "creative dev" template does this.
- Tilted sticker label, offset drop-shadow block behind images, film grain overlay: decoration with no source.
- `01 / SECTION` uppercase tracked labels on everything.
- Amber palette that was guessed, not taken from Benjamin's own material.

## What the references actually show

| Reference | What's really there | What to take |
|---|---|---|
| Instagram grid | Glitch / pixel-sorted photos, Strudel code screens, DAW timelines, lowercase white captions over images (`queen st.`, `head spinning`, `montreal × calgary live coding`) | Lowercase caption overlays on images. Code-as-content. |
| Strudel REPL (warm) | Gruvbox palette, monospace, `$KICK:` / `$DRUMS:` labelled blocks, cream outline boxes around the active values, a cream oscilloscope waveform, `/* "sway" @by benjulian */` header comment | **The core design system.** Palette, section labels, highlight boxes, waveform. |
| Y2K identity / flash sites | Transit wayfinding (station-number badges like `JY 01`), brand-manual spec sheets, type specimens (Helvetica, Frutiger, DIN), thin rules, small precise UI | Station-style project badges. Projects as spec sheets: image + small data table. |
| Zine / poster board | Loud yellow / red / green, cut-outs, layered type | Used only as *occasional* saturated accents (Gruvbox yellow/orange). No fake collage. |
| Archive / photocollage board | Photomontage, product grids with labels, sky blue / green / gold | Systematic grids with labels; collage reserved for real photos later. |

## System

### Palette (Gruvbox, sampled from the Strudel screenshot)

| Token | Hex | Use |
|---|---|---|
| `background` | `#282828` | Page |
| `surface` | `#3c3836` | Header bar, image frames |
| `line` | `#504945` | Rules, borders |
| `fg` | `#ebdbb2` | Text, highlight boxes, waveform |
| `muted` | `#a89984` | Secondary text (5.3:1) |
| `dim` | `#7c6f64` | Decorative only (line numbers) |
| `aqua` | `#8ec07c` | Software category, `stack(` |
| `purple` | `#d3869b` | Music category |
| `yellow` | `#fabd2f` | Design category, focus ring, wordmark dot |
| `paper` / `ink` | `#fbf1c7` / `#3c3836` | Gruvbox light, for the About section |

Category colour is never the only signal: badges always carry a two-letter code.

### Type

- **Instrument Sans**: names, headings, body.
- **JetBrains Mono**: labels, metadata, nav, spec tables.
- Two families, no display face.

### Motifs (each used with a purpose)

1. **`$SECTION:` labels**, straight from Benjamin's Strudel code (`$WORK: stack(` … `)`). Screen readers get a plain heading.
2. **Highlight boxes**: the cream outline Strudel draws around active values. Used for the current nav item, the active filter, hovered links and the role keywords in the hero.
3. **Header comment**: `/* "portfolio" @by benjulian */` in the hero, mirroring the track header.
4. **Station badges**: `SW 01`, `MU 01`, `DS 01` per project, coloured by category.
5. **Spec sheet**: each project is an image plus a small mono `dl` (type / stack / link).
6. **Lowercase caption** over each project image, Instagram-style. Decorative (`aria-hidden`); the real title sits below.
7. **Scope line**: a static waveform divider under the hero. No animation.

### Avoid

Rotated stickers, drop-shadow blocks, grain, giant condensed type, fake terminals/REPLs, autoplay, animated waveforms.

## Pending (needs Benjamin)

- Approved personal photos (the glitch portraits from Instagram would suit the hero / About).
- Whether the "sway" Strudel screenshot can be published as a project image.
- Education wording, featured projects, resume PDF, public email.
