# Recruiter-Optimized Quiet-Luxury Engineering Portfolio — Implementation Plan

## Goal

Create a high-converting, lightweight engineering portfolio for GitHub Pages that preserves a quiet-luxury editorial aesthetic while making a recruiter or engineering manager understand the candidate’s expertise, proof of work, and contact options within seconds.

The implementation will use only native HTML, CSS, and lightweight vanilla JavaScript. It will require no build step, framework, server, database, or JavaScript dependency.

## Deliverables

- `index.html`: Complete semantic portfolio structure with recruiter-oriented hero messaging, immediate CTAs, scannable case studies, categorized skills, persistent contact pathways, and mobile outreach controls.
- `styles.css`: Full responsive editorial styling with dark monochromatic tokens, fluid typography, asymmetric layouts, high-contrast CTA treatment, compact project metadata, accessible focus states, and mobile-first outreach positioning.
- `script.js`: Minimal interaction layer for mobile navigation, smooth section scrolling, scroll reveals, copy-email feedback, optional pointer details, and reduced-motion-safe behavior.

## Required Portfolio Structure

### 1. Persistent Header

Implement a compact, sticky or persistent header with:

- Candidate name or monogram.
- Navigation links to Work, Skills, and Contact.
- An always-visible Resume link.
- A compact mobile menu control with an accessible label and keyboard support.
- Clear active/focus states without depending on hover.

### 2. High-Impact Hero

The hero must communicate the candidate’s value proposition in approximately two seconds. It will include:

- A crisp headline combining role, core expertise, technology focus, and high-value capability. Example structure: “Frontend engineer building fast, accessible digital products with React, TypeScript, and thoughtful systems design.”
- A concise supporting statement emphasizing outcomes rather than generic self-description.
- Three immediate CTAs in the requested priority set:
  - `View Work`, linking to the case-study section.
  - `Download Resume`, linking to a replaceable local PDF path such as `assets/resume.pdf`.
  - `Get in Touch`, linking to the contact section or `mailto:` address.
- Compact credibility metadata such as location, availability, and preferred engagement type, written as replaceable content rather than decorative filler.

### 3. Recruiter-Friendly Case Studies

Create a featured work section with minimal editorial case-study blocks. Each project must expose the requested information without requiring interaction:

- Project title.
- Concise one-line descriptor.
- Tech stack tags.
- Key problem solved.
- Impact or outcome.
- `Live Demo` link.
- `GitHub Repo` link.

The layout will prioritize scanability: project title and outcome will be visually dominant, stack tags will be compact, and the problem/impact fields will use short, high-information copy. Each case study will be understandable in under 15 seconds. Links will include meaningful accessible names and use safe external-link attributes where appropriate.

Use two or three fully written placeholder projects that model strong evidence-based language. Content will be clearly replaceable for the candidate’s real projects.

### 4. Skill Taxonomy

Add a skills section with no percentage bars, arbitrary scores, or inflated claims. Organize skills into crisp groups:

- Languages.
- Frameworks and Libraries.
- Developer Tools and Practices.

Use typographic lists or restrained tags with enough spacing for fast scanning and good mobile wrapping. The taxonomy should support recruiter keyword matching while remaining visually editorial.

### 5. Frictionless Contact Architecture

Build a direct contact section that includes:

- A prominent invitation to discuss roles, collaborations, or product work.
- A tactile `Copy Email` control using the Clipboard API with a visible success/fallback state.
- A reliable `mailto:` link as the primary fallback.
- Direct GitHub and LinkedIn links.
- Optional location/time-zone metadata.

No contact form will be required in the first version, avoiding server dependencies and friction. The email, GitHub URL, LinkedIn URL, candidate name, and resume path will be clearly marked as customization points.

### 6. Mobile Outreach Optimization

Add a fixed or sticky mobile-only `Contact Me` element that remains elegant, unobtrusive, and safe-area aware. It will link to the candidate’s `mailto:` address and remain hidden on larger screens where the header and contact CTA are sufficient.

Ensure the mobile CTA does not obscure content, account for `env(safe-area-inset-bottom)`, and remain accessible to keyboard and screen-reader users.

## Visual and UX Direction

1. Preserve the established quiet-luxury language: obsidian or warm charcoal background, alabaster type, a muted accent, fine rules, and generous negative space.
2. Use an expressive serif for the primary editorial display and a highly legible sans-serif for metadata, body text, tags, and navigation.
3. Keep the page asymmetrical but not obscure. Visual drama must support hierarchy and conversion, not make essential information difficult to find.
4. Make CTAs visually distinct through contrast, border treatment, spacing, and subtle tactile transitions rather than loud gradients or excessive animation.
5. Use progressive reveal motion only as an enhancement. All key copy, links, and contact paths must remain available without JavaScript.
6. Maintain a clear visual hierarchy: value proposition first, proof of work second, skills third, contact always nearby.

## Implementation Steps

1. Create or revise root-level `index.html`, `styles.css`, and `script.js` with relative paths only.
2. Add metadata, semantic landmarks, a skip link, one primary `h1`, accessible navigation, and descriptive link text.
3. Define CSS custom properties for palette, typography, spacing, borders, layout width, motion, and responsive behavior.
4. Implement the hero and header first, ensuring the headline and three CTAs remain visible and legible on small screens.
5. Implement scannable case-study modules with all required fields and links present in the initial DOM.
6. Implement categorized skills and contact architecture, including copy-email feedback and direct social links.
7. Add the mobile-only persistent contact control with safe-area support.
8. Add lightweight JavaScript behaviors using feature detection, `IntersectionObserver`, and `prefers-reduced-motion` handling. Avoid unnecessary scroll loops and third-party libraries.
9. Mark all candidate-specific values with comments or clearly identifiable placeholder text so customization is straightforward.

## Verification Plan

- Confirm all three files exist, are complete, and use only relative deployment-safe references.
- Confirm the hero states role, expertise, primary stack, and value in a short scan, with `View Work`, `Download Resume`, and `Get in Touch` immediately available.
- Confirm every case study contains title, stack tags, problem, outcome, Live Demo, and GitHub Repo links.
- Confirm skills are grouped under Languages, Frameworks/Libraries, and Developer Tools/Practices with no percentage ratings.
- Confirm header access to Resume and Contact remains available while scrolling.
- Confirm `Copy Email` copies successfully where supported and falls back to a visible mailto path where unsupported or denied.
- Confirm GitHub and LinkedIn links are direct, descriptive, and keyboard reachable.
- Confirm the mobile `Contact Me` element appears only at the intended breakpoint, does not cover essential content, and respects device safe areas.
- Test keyboard navigation, visible focus, logical tab order, accessible mobile menu behavior, and screen-reader labels.
- Test reduced-motion mode and JavaScript-disabled behavior; all core content and links must remain usable.
- Check layout at narrow phone, tablet, laptop, and wide desktop widths for overflow, wrapping, and visual hierarchy.
- Perform a static dependency check to ensure there is no build tooling, framework requirement, server endpoint, or unnecessary external script.

## Assumptions and Customization Points

- No candidate identity or actual work details were provided, so the first implementation will use a polished fictional candidate profile and strong placeholder project evidence that must be replaced before publishing.
- The resume link will point to `assets/resume.pdf`; the PDF itself is not part of this implementation unless supplied later.
- Placeholder contact values will include a clearly labeled email, GitHub profile, LinkedIn profile, location, and availability status.
- The design will use Google Fonts with system fallbacks, but functionality will not depend on successful font loading.
- GitHub Pages root deployment is the target; no custom backend, form processing, analytics, or CMS will be included.

## Approval Gate

After approval, implement the complete three-file portfolio, validate every required recruitment mechanism and responsive state, correct any issues found, and return the verified artifacts with exact file paths.
