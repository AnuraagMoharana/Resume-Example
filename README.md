# Anuraag Moharana — Developer Portfolio

[![Live Portfolio](https://img.shields.io/badge/Live%20Portfolio-View%20Website-8b263d?style=flat-square)](https://anuraagmoharana.github.io/Resume-Example/)
[![ATS Resume](https://img.shields.io/badge/ATS%20Resume-PDF-111111?style=flat-square)](./resume.pdf)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=111111)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white)](https://www.python.org/)

## Overview

Personal developer portfolio and ATS-friendly resume repository for **Anuraag Moharana**.

The project combines an editorial, cinematic portfolio with a separate recruiter-focused resume source. The portfolio is intentionally lightweight and uses semantic HTML, CSS, and vanilla JavaScript. The resume uses semantic HTML and standard system fonts so its content remains selectable and easy for automated resume-processing systems to parse.

## Visual layout

```text
┌──────────────────────────────────────────────────────────────┐
│  AM                                      WORK  SKILLS  RESUME │
│                                                              │
│                         ◌                                    │
│              Building digital products                       │
│              with curiosity and intent.                      │
│                                                              │
│                 [ VIEW MY WORK ]                             │
├──────────────────────────────────────────────────────────────┤
│  SELECTED WORK                                               │
│                                                              │
│  ┌────────────────┐ ┌────────────────┐ ┌────────────────┐    │
│  │  AURA MOTORS   │ │    DAYFLOW     │ │   PORTFOLIO    │    │
│  │  3D SHOWROOM   │ │  HR SYSTEM     │ │  THIS SITE     │    │
│  └────────────────┘ └────────────────┘ └────────────────┘    │
├──────────────────────────────────────────────────────────────┤
│  TECHNICAL RANGE                                             │
│  Python · JavaScript · HTML · CSS · SQL · Flask · GitHub     │
├──────────────────────────────────────────────────────────────┤
│                 LET'S BUILD SOMETHING USEFUL.                │
└──────────────────────────────────────────────────────────────┘
```

## Featured projects

### AURA MOTORS

An immersive luxury-car showroom focused on interactive 3D vehicle exploration and premium interface design.

**Stack:** HTML5, Tailwind CSS, Google Model Viewer, GLB/glTF.

[View the repository](https://github.com/AnuraagMoharana/Luxury-Car-Dealership)

### Dayflow

A full HR management system for employee profiles, attendance, leave, payroll, authentication, and administrative workflows.

**Stack:** Python, Flask, SQLite, HTML, CSS.

[View the repository](https://github.com/AnuraagMoharana/Virtual-Round-Odoo-)

### Personal Portfolio

This repository contains the portfolio itself: a lightweight editorial-style website with responsive layout, CSS-based celestial visuals, mobile navigation, and progressive reveal effects.

[View the repository](https://github.com/AnuraagMoharana/Resume-Example)

## Core stack

| Area | Technologies |
|---|---|
| Languages | Python, JavaScript, HTML5, CSS3, SQL |
| Frontend | HTML, CSS, JavaScript, Tailwind CSS |
| Backend | Flask |
| Database | SQLite, SQL |
| Web | Responsive UI, 3D Web |
| Tools | Git, GitHub, VS Code |
| Approach | Product thinking, UI design, problem solving |

## Repository structure

```text
Resume-Example/
├── .github/
│   └── workflows/
│       └── pdf-build.yml
├── resume/
│   ├── resume.html
│   └── resume.css
├── scripts/
│   └── build-pdf.js
├── assets/                 # Optional static asset area for future media
├── index.html              # Portfolio entry point
├── styles.css              # Portfolio styles
├── script.js               # Portfolio interactions
├── resume.pdf              # Generated ATS resume
├── resume.md               # Human-readable resume notes
├── package.json
├── package-lock.json
├── validate.py
└── README.md
```

> The current portfolio CSS and JavaScript remain at the root deliberately so the live site is not broken during the migration. They can be moved into `assets/css/` and `assets/js/` in a dedicated cleanup commit once the paths are tested.

## Local setup

Clone the repository:

```bash
git clone https://github.com/AnuraagMoharana/Resume-Example.git
cd Resume-Example
```

The portfolio is a static site and can be opened directly with `index.html`. For a better development workflow, use VS Code Live Server or another static HTTP server.

Install the PDF build dependency:

```bash
npm ci
```

Generate the ATS resume locally:

```bash
npm run build:pdf
```

The generated file is written to:

```text
resume.pdf
```

## Hosting

The portfolio is compatible with GitHub Pages.

1. Open the repository's **Settings**.
2. Open **Pages**.
3. Select the `main` branch.
4. Select the repository root as the publishing directory.
5. Save the configuration.

The public portfolio URL is:

https://anuraagmoharana.github.io/Resume-Example/

## Automated PDF generation

Every push to `main` runs `.github/workflows/pdf-build.yml`.

The workflow:

1. Checks out the repository.
2. Installs Node.js and the locked npm dependencies.
3. Runs Puppeteer in headless mode.
4. Loads the semantic HTML resume.
5. Generates an A4, text-selectable PDF.
6. Uploads the resulting PDF as a GitHub Actions artifact.

The PDF is uploaded as an artifact rather than committed on every push, which avoids unnecessary binary commits and keeps the repository history clean.

## ATS rules

The resume source follows these rules:

- Use semantic `<header>`, `<main>`, `<section>`, `<article>`, `<ul>`, `<h1>`–`<h3>`, and `<footer>` elements.
- Keep important information as real selectable text.
- Use conventional section headings such as Profile, Skills, Projects, and Education when applicable.
- Use standard system fonts in the ATS resume.
- Do not put essential information inside images, canvas elements, or CSS pseudo-elements.
- Keep links as real HTML links.
- Keep the document hierarchy simple and predictable.
- Do not rely on JavaScript for essential resume content.

## Development workflow

```bash
git pull origin main

# make changes

git add .
git commit -m "Update portfolio"
git push origin main
```

A successful push to `main` automatically triggers the PDF workflow.

## Repository metadata

**Recommended repository description:**

> Personal developer portfolio and ATS-friendly resume showcasing Anuraag Moharana's software, frontend, and web development projects.

**Recommended GitHub topics:**

```text
portfolio
developer-portfolio
resume
web-development
frontend-development
python
javascript
html
css
github-pages
```

## Contact

GitHub: https://github.com/AnuraagMoharana

Projects:

- https://github.com/AnuraagMoharana/Luxury-Car-Dealership
- https://github.com/AnuraagMoharana/Virtual-Round-Odoo-

© 2026 Anuraag Moharana
