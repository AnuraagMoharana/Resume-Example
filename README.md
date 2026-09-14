# Resume-Example
 Click on https://anuraagmoharana.github.io/Resume-Example/

 
I have a GitHub repository named `Resume-Example` that hosts my developer resume. I want to upgrade the repository structure, presentation, and automation to make it production-ready and recruiter-focused.

Please generate all necessary markdown files, directory structure, and workflow code based on these requirements:

### 1. High-Impact `README.md`
* Create a clean, modern `README.md` with status badges at the top (e.g., Live Preview link, ATS PDF download link, main tech stack).
* Include a visual layout overview, a quick summary of my core tech stack, and step-by-step instructions for local setup and hosting.
* Add repository metadata recommendations at the end (a 1-sentence repo description and 8-10 GitHub topics/tags to add).

### 2. Clean Directory Structure
* Output an ideal repository file tree, moving styles, scripts, images, and fonts into an `assets/` subfolder to keep the root clean.

### 3. Automated PDF Generation (GitHub Action)
* Write a `.github/workflows/pdf-build.yml` file that triggers on every push to `main`.
* Use a lightweight headless runner (like Puppeteer or Playwright) to automatically convert the source document/HTML into a downloadable, text-selectable PDF artifact and commit or attach it to the release.

### 4. ATS Optimization Rules
* Ensure all code structures use semantic tags (`<section>`, `<ul>`, `<article>`) and plain-text standard fonts so automated ATS software can parse every line without errors.

Output the complete, copy-paste-ready contents for each file (`README.md`, `.github/workflows/pdf-build.yml`, and the directory tree diagram).
