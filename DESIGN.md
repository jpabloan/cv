---
name: Technical memo CV
description: A restrained reading document for verified backend experience.
colors:
  paper: '#f8f9f7'
  ink: '#202925'
  muted: '#526159'
  accent: '#355f55'
  rule: '#cbd3cd'
  selection: '#d2e3da'
typography:
  body:
    fontFamily: 'Segoe UI, Source Sans 3, Optima, Candara, sans-serif'
    fontSize: '1rem'
    lineHeight: 1.65
  section:
    fontSize: '1.125rem'
    fontWeight: 600
    lineHeight: 1.2
  employer:
    fontSize: '1.75rem'
    fontWeight: 600
    letterSpacing: '-0.025em'
spacing:
  small: '0.5rem'
  medium: '1.25rem'
  large: '2rem'
  section: '3rem'
components:
  section-link:
    textColor: '{colors.accent}'
    padding: '0.5rem 0'
---

## Overview

Technical memo places a narrow identity margin beside an uninterrupted professional record. Experience supplies the evidence; typography, spacing and fine rules supply hierarchy. No images, cards, ratings or decorative motion.

## Colors

Paper is the page background; ink is the main text. Muted text retains readable contrast. Green accents identify links and roles. Rules separate sections without enclosing them.

## Typography

The implemented reading stack uses locally available humanist sans faces, without font requests. Body text is 1rem at 1.65 line height; introductory text is 1.1875rem, reducing to 1.125rem on mobile. Section and contribution headings use weight 600. Dates use tabular numerals. The current name heading uses the same local stack, 2–2.75rem and -0.035em tracking; its system-font display treatment is an implementation compromise, not a requirement for future surfaces.

## Layout

The document caps at 1220px, with 48px horizontal padding, a 280px identity column and an 80px gap. At 1000px the margin becomes 235px and the gap 48px. At 720px it becomes one column with 24px side padding and wrapping section navigation. Text measure caps at 72ch. Job dates move below the role at intermediate widths. Print removes navigation and stacks the document.

## Elevation & Depth

No shadows. One-pixel rules provide section boundaries.

## Components

Identity header, section navigation, professional profile, job record, contribution list, technology summary, skills definition list and language definition list. Links underline on hover and show a 2px green focus outline with 5px offset. A keyboard-accessible skip link precedes the document. Content is visible without JavaScript.

## Do's and Don'ts

Keep facts in src/data/cv.ts and presentation in the Astro page. Preserve comfortable reading order and six distinct work contributions. Do not invent claims, add proficiency scores, hide experience in accordions, or add contact placeholders. GitHub is the only authorized public professional link in this version.
