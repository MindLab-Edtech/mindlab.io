# MindLab.io — Design Handoff Package

**For the designer / design session picking this up: this folder is self-contained. Everything
you need to design the MindLab landing page and founding design system is in these six documents.
You do not need access to any other repository, conversation, or account.**

---

## What MindLab is, in three lines

MindLab is an AI research and portfolio-monitoring system for lean private-equity deal teams.
AI drafts research from the firm's own sources; a named human reviews and approves; only approved
work becomes firm record. The mantra — and likely hero line — is:
**"AI prepares. Humans approve. MindLab remembers."**

## What we're asking design to produce

1. **A founding mini design system** — tokens (type, color, space, rules), core components,
   and three signature graphics (specs in `04` and `05`).
2. **The landing page design** — an 11-section page, fully specified with draft copy in `03`.
3. Delivered as **HTML/CSS prototypes or Figma** (either is fine; if HTML, tokens as CSS custom
   properties — naming conventions in `05`).

## Reading order

| File | What it gives you | Read when |
|---|---|---|
| `01-design-brief.md` | Project definition, scope, deliverables, success tests | First |
| `02-brand-foundation.md` | Positioning, personality, voice, messaging bank, lexicon | Before any visual work |
| `03-page-content-spec.md` | The full page, section by section, with draft copy | Before layout |
| `04-visual-direction.md` | Typography, color, grid, imagery rules, the three signature graphics, references | Before visual work |
| `05-design-system-scope.md` | Tokens, components, responsive behavior, accessibility | When systematizing |
| `06-product-reference.md` | What the product actually contains + fictional sample data for mock UI content | When building product vignettes |
| `assets/product-screenshots/` | **Real product screenshots** pulled from the old site, each documented (its own `README.md`) with what it shows + which new section to use it in | When building product vignettes |
| `assets/` | Existing logo mark (connected-dots "M") + favicon SVG | With `04` |

## Suggested session plan (if working iteratively with Claude)

1. **Session 1 — foundations:** read `01`, `02`, `04`. Produce: 2–3 typography pairings (as
   specimen sheets), color trials, and the numbered-section/hairline layout skeleton. Pick one
   direction.
2. **Session 2 — signature graphics:** the R3 gate diagram, the hero product composition, the
   record timeline (specs in `04` §6; product truth in `06`). These carry the page — invest here.
3. **Session 3 — hero + first scroll:** S1 + S2 from `03`, desktop and mobile.
4. **Session 4 — full page assembly:** remaining sections, responsive pass, reduced-motion pass.
5. **Session 5 — system extraction:** tokenize what was built into the `05` structure.

Design in the order the visitor reads, not the order components are listed.

## Decision status (do not re-litigate; do flag conflicts)

These are **working defaults, decided for now** — proceed on them; the founder may revisit:

- Hero line = the mantra (not the benefit-led alternative "Turn deal work into institutional memory.")
- Page speaks **PE-first** (deal teams), even though the broader market includes family offices,
  private credit, wealth teams.
- Primary CTA = **"Bring one live deal"** (a free 30-min workflow diagnosis), secondary =
  **"See the workflow"**. Never "Book a demo" / "Start free trial".
- Pricing shown as **shape only** ("fixed-fee pilot + plans from $2k/mo"), not a full table.
- The 59% re-verification stat appears on-page, attributed (details in `03` §S2).

## Hard guardrails (non-negotiable, from the founder's brand rules)

- No gradient heroes, glassmorphism, sparkle/emoji iconography, purple "AI" palettes, stock
  photography, cartoon illustration.
- No claims the company can't back: no SOC 2 badge, no "bank-grade security", no "guaranteed
  accuracy", no "unlimited".
- Voice: expert, precise, unflashy. No exclamation marks. No hype adjectives.
- Accessibility: WCAG 2.1 AA, visible focus states, `prefers-reduced-motion` respected, color
  never the sole status carrier.
- Density is a feature for this audience — dense *inside* modules, calm editorial space *around*
  them. Neither sparse minimalism nor terminal hostility.

## Provenance

This package distills: MindLab internal strategy docs (company bible v7, UI generation brief,
data-governance brief, pricing & packaging, investor deck), the product's PE-pack PRD, and an
external research pass (Deloitte 2025 M&A GenAI study; Bain GPE Report 2025; Hebbia's 2026
"Diligence Paradox" survey; competitor marketing analysis of AlphaSense/Hebbia/Rogo; Pentagram
finance portfolio; Ramp × Bakken & Baeck case study) — every external claim was independently
verified before inclusion. Stats quoted in the content spec carry their sources inline.
