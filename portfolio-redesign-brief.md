# Portfolio Redesign Brief — Benjamin Julian Noel

> **Purpose:** Redesign [benjuliannoel.vercel.app](https://benjuliannoel.vercel.app/) into a more distinctive personal portfolio while keeping it credible as a software-development portfolio.
>
> **Working direction:** A creative developer / personal digital studio — editorial typography and clean project presentation, with subtle music and internet-nostalgia influences.
>
> **Important implementation rule:** Do not invent content, experience, project details, metrics, testimonials, links, photos, music, or functionality. If a proposed element needs information or an asset that is not already available, ask Benjamin before implementing it. Use clearly marked placeholders only during development; do not publish them as real content.

---

## 1. Existing site: confirmed starting point

The live homepage currently exposes:

- Name: **Benjamin Julian Noel**
- Positioning: **Software Engineer / Producer / SAIT Graduate**
- Navigation links visible in the page content: **About** and **Projects**
- Introductory bio describing Benjamin as a software engineer, producer, and creative based in Calgary.
- The bio says his work spans full-stack development, cloud infrastructure, and visual design.
- The bio mentions music production/live performance, being invited back by his high school as an audio-engineering resource, and a second-place finish at MegaHacks 2026.
- A last-updated label currently reads **July 5, 2026**.
- Footer copyright: **© 2026 benjulian noel.**

Treat the live site as the source of truth for existing content. Verify the current implementation and repository before changing components or styling. Do not assume a feature exists just because it is recommended below.

## 2. Design goals

1. Make the site feel recognizably personal rather than like a generic developer template.
2. Communicate technical ability quickly and clearly.
3. Show that software development and music/creative work are both genuine parts of Benjamin's interests.
4. Give projects enough context to demonstrate the problem, Benjamin's contribution, and the outcome.
5. Keep navigation simple and make contact/resume access easy.
6. Make the site fast, responsive, accessible, and easy to maintain.

### Desired personality

- Thoughtful, creative, slightly playful.
- Confident but not self-important.
- Professional enough for recruiters, collaborators, and potential employers.
- A few personal details are welcome; avoid turning the whole site into a novelty or gimmick.

### Visual direction

Use an **editorial portfolio + creative studio** direction:

- Neutral base: warm off-white or a restrained dark neutral. Choose one dominant theme rather than mixing several competing visual styles.
- Strong typography and deliberate whitespace.
- Instrument Sans (or a similar clean sans-serif) can be used for interface/body text. Pair with a restrained serif only if it improves hierarchy.
- Large, memorable headline; compact captions and metadata.
- A mixture of simple grids and occasional asymmetric compositions.
- Real project screenshots, personal photography, and original visuals should take priority over generic stock imagery.
- Subtle references to early personal websites / 2000s internet culture may appear in small details, not as the entire visual language.
- Avoid excessive gradients, glassmorphism, oversized rounded cards, and generic SaaS landing-page patterns.

## 3. Proposed information architecture

These are recommendations, not claims about existing functionality. Confirm content and links before publishing.

### Primary navigation

- Home
- Work
- About
- Playground (optional; ask first)
- Resume
- Contact

Keep the navigation compact. On smaller screens, use an accessible mobile menu. If a separate page is unnecessary, sections on one page with anchor links are acceptable.

### Homepage

Suggested order:

1. **Header**
   - Wordmark or simple `bj.` monogram.
   - Navigation.
   - Optional availability indicator only if Benjamin confirms the wording and current status.

2. **Hero**
   - Suggested headline: **“Building things for the web. Making things for the ears.”**
   - Supporting copy: a short, accurate one- or two-sentence introduction.
   - Primary action: View work.
   - Secondary action: Contact or View resume.
   - Optional portrait/photo or custom graphic, only if Benjamin supplies or approves the asset.

3. **Selected work**
   - Feature 2–4 strongest confirmed projects.
   - Each item should show project name, concise description, role, relevant technologies, and a meaningful visual.
   - Link to a case-study page, live project, or repository only when the destination is confirmed.
   - Do not invent project outcomes, usage numbers, or individual contributions.

4. **A little beyond code**
   - A compact introduction to music production, live coding, audio work, or other creative interests.
   - Include playable audio or external music links only after Benjamin supplies/approves the tracks and destinations.
   - This section should complement the engineering work, not compete with it.

5. **About preview**
   - A short personal introduction and link to the full About section/page.

6. **Contact invitation**
   - A clear, friendly closing line and confirmed email/social links.

7. **Footer**
   - Name/wordmark, current year, and confirmed social links.
   - Remove or update stale date labels. Do not automatically claim the site was updated on a date unless it is actually maintained.

### Work / Projects

Create a clear project index with a consistent visual system.

Each project entry should ideally include:

- Project title
- One-line summary
- Project type (e.g. full-stack, hackathon, creative coding)
- Benjamin's role and specific contribution
- Technologies used
- Screenshot, short demo, or other approved visual
- Current status (completed, in progress, concept), confirmed by Benjamin
- Links: live site, source repository, demo, or write-up, where available

Potential projects to ask Benjamin about including (not an automatic approved list):

- PASOC website revamp
- VibeMap
- AIVA / road-sign recognition project
- Then & There
- Calgary '88: Relight the Flame
- Other completed or current projects Benjamin identifies

For projects that are concepts or prototypes, label them honestly. Do not present an idea as a shipped product.

### Project detail / case-study template

Use this structure when there is enough confirmed material:

1. Overview
2. The problem or motivation
3. The approach
4. Benjamin's role and contributions
5. Technical decisions / architecture
6. Challenges and what was learned
7. Outcome / demo
8. Credits and collaborators, if applicable

Keep case studies concise and visual. Ask for missing details rather than filling gaps with assumptions.

### About

The About section should feel human without becoming a long autobiography.

Possible content blocks:

- Short biography
- Current education / career direction (confirm the latest wording first)
- Technical interests
- Creative interests: music production, live coding, audio engineering
- A small “outside of development” detail or photo, if Benjamin wants one

Do not publish personal details just because they are known from prior conversations. Ask Benjamin to approve the final About copy.

### Resume

- Provide a clearly visible **Download resume** link only after Benjamin supplies the current PDF or confirms the correct file.
- Optionally show a concise HTML summary of experience and education.
- Ensure the downloadable document is current and consistent with the website.
- Do not invent dates, qualifications, job titles, or achievements.

### Contact

- Show a confirmed email address or a contact form only if Benjamin wants one.
- Include only social profiles Benjamin confirms (possible examples: GitHub, LinkedIn, SoundCloud).
- If using a form, provide accessible labels, validation, success/error feedback, and spam protection.
- Do not expose private contact information without explicit approval.

### Optional: Playground

Ask before adding this section. It could collect smaller experiments that do not warrant full case studies:

- Strudel/live-coded music experiments
- Small UI or creative-coding experiments
- Audio experiments or approved mixes
- Prototypes and works in progress

Make the distinction between experiments, concepts, and finished projects obvious. Do not embed or publish audio without permission and confirmed source links.

## 4. Character details and micro-interactions

Use a few of these, not all of them:

- `bj.` monogram / favicon.
- Project numbering such as `01 / VibeMap`.
- Small “Currently exploring” or “Currently listening” note, only if Benjamin wants to maintain it.
- Subtle hover states, underlines, image transitions, and restrained motion.
- Small metadata labels, timestamps, or editorial captions.
- A concise personal footer line.
- Optional now-playing / music embed only with a confirmed source and a clear pause/mute control.

Avoid:
- Fake terminal interfaces that do not serve a purpose.
- Fake live status, fake availability, or automatically generated personal updates.
- Autoplaying audio or video.
- Motion that makes text hard to read or causes accessibility issues.
- Decorative interactions that make navigation less predictable.

## 5. Content and asset policy: ask before adding

Before implementing any item below, ask Benjamin if the required information is not already present and clearly approved:

- A new profile photo, portrait, or personal photography.
- A custom hero illustration or graphic.
- New project screenshots, videos, demos, descriptions, metrics, or case studies.
- Current resume PDF and resume content.
- Email address and social-profile URLs.
- Music tracks, SoundCloud links, audio players, mixes, or performance footage.
- “Available for work” / “open to opportunities” status.
- “Currently listening,” “currently building,” or other frequently changing status content.
- Testimonials, references, collaborator credits, and endorsements.
- Any new section that introduces personal information.
- Any third-party embed, analytics, tracking, contact-form service, or paid dependency.

When asking, be specific: identify the proposed element, explain what is needed, and offer the simplest alternative. Do not block the rest of the redesign while waiting for optional content; build the layout so the section can be added later.

## 6. Responsive and accessibility requirements

- Design mobile-first and test narrow phones, tablets, laptops, and wide screens.
- Use semantic landmarks and a logical heading hierarchy.
- Ensure keyboard navigation and visible focus states.
- Provide meaningful alt text for informative images; use empty alt text for purely decorative imagery.
- Maintain sufficient color contrast.
- Respect reduced-motion preferences.
- Do not rely on color alone to communicate status.
- Ensure navigation, buttons, forms, and media controls have accessible names.
- Avoid horizontal overflow and tiny metadata text.
- Optimize images and avoid layout shifts.
- Keep page performance and loading behavior in mind.

## 7. Technical implementation guidance

First inspect the existing repository, framework, routes, components, styling conventions, and deployment setup. Preserve working infrastructure unless there is a clear reason to change it.

- Reuse the current stack and existing dependencies where practical.
- Do not introduce a CMS, database, authentication, backend, or paid service just for a static portfolio.
- Keep content separate from presentation where it makes future updates easier.
- Use reusable project and social-link data structures.
- Add metadata, page title, description, Open Graph information, favicon, and a sensible social preview.
- Check all internal and external links.
- Ensure external links behave consistently and safely.
- Add a custom 404 page if the site uses multiple routes.
- Do not add analytics or tracking without asking first.

## 8. Suggested implementation phases

### Phase 1 — Audit and content confirmation
- Inspect the repository and current live site.
- Record existing routes, components, styles, and content.
- Identify which proposed sections already exist.
- Ask for missing content/assets that are necessary for the chosen design.
- Do not rewrite content that is already accurate without reason.

### Phase 2 — Visual foundation
- Establish typography, colors, spacing, layout grid, and interaction rules.
- Update header, navigation, hero, and footer.
- Confirm mobile layout early.

### Phase 3 — Projects and personal identity
- Improve project cards and project detail presentation.
- Add approved About and creative-work content.
- Add optional Playground only after approval.

### Phase 4 — Resume and contact
- Add the confirmed resume file and contact destinations.
- Test downloads, forms, and external links.

### Phase 5 — QA and polish
- Test responsive behavior and keyboard accessibility.
- Check contrast, reduced motion, image optimization, metadata, and broken links.
- Verify every claim and link.
- Remove placeholder content before deployment.

## 9. Acceptance checklist

- [ ] Existing site and repository audited before changes.
- [ ] No invented facts, project details, metrics, links, or assets.
- [ ] Missing information requested from Benjamin before publication.
- [ ] Homepage clearly communicates software + creative identity.
- [ ] Projects show real contributions and confirmed outcomes.
- [ ] About copy is approved.
- [ ] Resume link points to the current approved file.
- [ ] Contact details and social links are confirmed.
- [ ] Optional Playground is included only with approval.
- [ ] Mobile and desktop layouts work.
- [ ] Keyboard navigation and visible focus states work.
- [ ] Reduced-motion preference is respected.
- [ ] No autoplaying media.
- [ ] Metadata, favicon, and social preview are set.
- [ ] No placeholder text remains.
- [ ] Build and deployment succeed.

---

## 10. Questions to ask Benjamin

Ask these progressively, when the relevant design/content decision is reached. Avoid sending a huge questionnaire all at once.

1. **Visual theme:** Should the main site be warm off-white, dark, or should it support both themes?
2. **Hero visual:** Do you want a portrait/personal photo, an abstract graphic, a project image, or typography only?
3. **Headline:** Are you happy with “Building things for the web. Making things for the ears,” or should the positioning be more engineering-focused?
4. **Projects:** Which 3–4 projects should be featured first, and which are completed versus still concepts?
5. **Project evidence:** Do you have screenshots, demos, repositories, and approved descriptions for each selected project?
6. **Music:** Should music be a small section on the homepage, a separate Playground page, or only an external link?
7. **Playground:** Do you want to maintain a section for experiments and works in progress?
8. **Resume:** What is the current PDF, and should the site show a short resume summary too?
9. **Contact:** Which email address and social links are public and approved?
10. **Personal details:** Are you comfortable with a “currently listening / currently building” note or other small personal details?

**Default if Benjamin has no preference:** Keep the first release focused: Home, Work, About, Resume, and Contact. Use the editorial/creative-studio visual direction, and leave optional status widgets, music embeds, and Playground out until approved.
