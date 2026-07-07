# Product

## Register

brand

## Users

Three readers, one page — lean private-equity deal teams (5–50 investment professionals):

1. **Partner / Managing Director** (economic buyer): 10-second skim on a phone from a forwarded link. Needs instant credibility — typography, restraint, governance language. Allergic to anything resembling the AI slop in their inbox.
2. **VP / Principal** (the champion): 3-minute evaluation. Needs their vocabulary (CIM, data room, IC memo, covenant, watch list), a bounded low-risk next step, and material they can forward internally.
3. **Analyst / Associate** (daily user): deep read, especially product vignettes. Needs to see they remain the author — review, edit, approve, sign. The product kills the blank page, not their job.
4. *(Silent)* **Compliance / Ops**: checks trust claims and FAQ. Needs isolation, no-training-on-customer-data, audit trail, export/deletion — stated plainly, no badges.

These are domain experts who live in dense tables and reports all day and distrust anything that looks automated or dumbed-down. Context: 86% of senior dealmakers already use AI but don't trust it; 59% of finance professionals manually re-verify AI output.

## Product Purpose

This workspace produces the **public landing page for MindLab.io and the founding design system it establishes** — the company's first marketing surface, replacing the old mindlab.io entirely.

MindLab is an AI research and portfolio-monitoring system for lean PE deal teams, built on the **R3 mechanism: Resources → Reports → Records**. AI drafts source-backed research; a named human reviews and approves; only approved work becomes firm record. Competitors sell speed and automation; **MindLab sells the approval gate** — unclaimed whitespace vs. AlphaSense (content breadth) and Hebbia (automation breadth).

The page's job: convert borrowed attention (founder outbound, forwarded links, PE newsletters) into free 30-minute workflow-diagnosis calls, and arm an internal champion with a forwardable argument. There is no self-serve product. Primary CTA: **"Bring one live deal"**. Secondary: **"See the workflow"**. Never "Book a demo" / "Start free trial".

Success = the six tests in `design/01-design-brief.md`: H2-spine, 10-second partner test, density test, anti-slop test, honesty test, AA test.

## Brand Personality

**Expert. Precise. Unflashy.** The voice of a senior colleague who has done the work — evidence-led, composed, never breathless. A professional instrument, not a consumer app. Earned confidence, calm under load. When the brand makes a claim, it shows its sources — it practices the product's own discipline.

Voice rules: no exclamation marks, no emoji, no rhetorical questions in headers, no hype adjectives. Short declaratives beat clever. Numbers are precise and attributed, or absent. Anchor mantra and hero line: **"AI prepares. Humans approve. MindLab remembers."** Full lexicon (use/never lists) and approved messaging bank in `design/02-brand-foundation.md`.

## Anti-references

- **Generic AI-SaaS slop** — gradient heroes, glassmorphism, sparkle/emoji iconography, purple-blue "AI" palettes, rounded-everything, stock photography, cartoon illustration. The brand exists visually to not be this; put the hero next to five AI-copilot pages and it should look like a different, more serious industry.
- **Sparse minimalist SaaS** — a near-empty hero with one floating sentence reads as a regression to this audience. Density is a feature, earned through hierarchy.
- **Bloomberg-terminal hostility** — dense *and* punishing. MindLab is dense *and* legible.
- **Consumer-fintech playfulness** — confetti, pastels, gamification.
- **Unbackable claims** — no SOC 2 badge (until certified), no "bank-grade security", no "guaranteed accuracy", no "unlimited", no invented logos or fake testimonials, no Vietnam cost framing.

Note on the committed aesthetic lane: the "broadsheet, not brochure" editorial direction (serif headlines, hairline rules, numbered sections) is a **founder-locked identity decision** with verified strategic rationale (Pentagram finance precedent; looking different IS the positioning) — not a lane to re-litigate. The risk to police is lazy execution of the lane: serif-plus-rules scaffolding without the dense evidence, real product vignettes, and signature graphics that earn it.

## Design Principles

1. **Looking different is positioning.** The generic-AI look is the visual signature of exactly the products this buyer distrusts. Editorial reduction reads as trust in finance; the anti-slop stance is strategy, not taste.
2. **Practice the product's discipline.** The product's promise is provenance — so the page attributes every stat, sources every claim, and never asserts what it can't show. Honesty (including naming who it's *not* for) is a brand device.
3. **Dense inside, calm outside.** Real professional density lives inside product vignettes and diagrams; generous editorial space and hairline structure live around them. Neither sparse minimalism nor terminal hostility.
4. **The gate is the protagonist.** The human approval moment — a named person signing — is the focal point of the hero, the R3 diagram, and the record timeline. Trust and governance must be *visible*, not decorative.
5. **The product is the imagery.** No photography, no stock, no 3D, no decorative illustration. Recreated UI vignettes at real density (Ramp/Bakken & Baeck precedent) and thin-line technical diagrams carry the visual weight.

## Accessibility & Inclusion

- WCAG 2.1 AA on every text/background pair, including inside dense vignettes.
- Visible focus states; `prefers-reduced-motion` fully respected — design the static state first, motion is garnish (one meaningful state transition max).
- Color is never the sole status carrier.
- Tabular figures everywhere data appears.
- Static-feeling, fast page; nothing requires heavy JS to make sense. English only for now.

## Source documents

The `design/` handoff package is canonical and self-contained — read it before any design work: `01` brief · `02` brand foundation · `03` locked page copy (11 sections) · `04` visual direction (type/color trials, grid, the three signature graphics) · `05` design-system scope · `06` product truth + sample data · `assets/` (logo mark, favicon, documented real product screenshots). Strategy evidence in `LANDING-PAGE-STRATEGY.md` and `research/`.
