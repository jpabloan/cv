# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Recruiters, hiring managers, technical leads, and potential collaborators evaluating Juan Pablo Arceo Noriega, primarily for Backend Developer roles.

## Product Purpose

A personal professional CV/portfolio website. Visitors should quickly understand Juan Pablo's professional profile, backend experience, technical skills, and work history, then find a contact mechanism or visit his GitHub and LinkedIn profiles.

## Positioning

The main CV focuses on backend development. Sound design and creative technology remain outside the main CV for now; they may become a separate section or route later. No distinguishing professional claims should be invented before supporting content is supplied.

## Operating Context

The public site supports professional evaluation and contact. A separate private/printable CV may include personal contact details later; that document is outside the initial scope.

Spanish is the initial content language. Leave room in the architecture for English later.

## Capabilities and Constraints

- Include professional profile, work experience, technical skills, education/background, languages, GitHub, LinkedIn, general location, and a contact mechanism.
- Do not expose a personal email address or phone number on the public website, including its shipped source or assets.
- Do not present Med Assist yet: it remains under development.
- Preserve content accuracy. Never invent achievements, metrics, technologies, projects, or experience.
- Use the existing Astro stack and support static deployment to GitHub Pages under `/cv/`. The current configuration specifies `https://jpabloan.github.io` with base `/cv`.
- Keep the site responsive, accessible, and fast. Avoid unnecessary JavaScript and excessive animation; any motion should be minimal and functional.
- Follow the repository's background development-server workflow: `astro dev --background`, with `astro dev stop`, `astro dev status`, and `astro dev logs` for management.

## Brand Commitments

Use the name Juan Pablo Arceo Noriega. The site should be sober, professional, technically oriented, and carefully designed without resembling a generic developer portfolio. Honor the user's preference for restrained typography, spacing, hierarchy, and subtle visual details over decorative effects.

## Evidence on Hand

The owner, target role, audience, scope, and constraints are confirmed by the user. The repository currently contains Astro starter content, not a verified CV or portfolio.

Open inputs: professional summary, employment history and dates, verified skills, education/background, spoken languages and proficiency, general location, and exact GitHub and LinkedIn profile URLs. The privacy-preserving contact mechanism is also undecided. Do not infer these facts from usernames or local environment metadata.

## Product Principles

- Make professional relevance and backend experience easy to assess quickly.
- Publish only accurate, supported professional information.
- Preserve personal contact privacy across public content and artifacts.
- Keep the primary CV focused; reserve unrelated creative work for a possible later surface.
- Favor accessible, fast, maintainable delivery with a lean design process.

## Accessibility & Inclusion

The site must be accessible and responsive across screen sizes. Spanish comes first, with room for English later. No specific conformance target or additional user needs have been established yet.

## Confirmed implementation update

The initial public version links only to https://github.com/jpabloan. Omit LinkedIn and all contact placeholders or mechanisms until the user supplies and authorizes them. Verified Spanish CV content supplied during shape is stored in src/data/cv.ts: Monterrey location, Enviatodo 2021–2026, six contributions, technologies, skills, self-directed education and languages. These confirmations supersede earlier open-input and contact requirements above.
