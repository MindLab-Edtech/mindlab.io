# 05 · Design System Scope

The landing page is the design system's first consumer, not its ceiling. Everything built for the
page should be extracted into tokens + components that later cover: pricing page, blog/"monthly
brief" posts, case studies, the `See the workflow` walkthrough, sales PDFs.

## 1. Token architecture

Name tokens semantically, not descriptively (`--color-accent-approve`, not `--green-700`).
If delivering HTML, tokens are CSS custom properties; if Figma, variables with the same names.

**Color tokens**
- `--color-paper` (page ground) · `--color-ink` (primary text) · `--color-ink-secondary`
- `--color-rule` (hairlines) · `--color-accent-approve` (the ledger green — approval semantics)
- `--color-accent-approve-ink` (text-on-accent, AA-checked)
- Vignette-internal only: `--color-flag` (risk red), `--color-watch` (amber), `--color-ok`
- Every text/bg pair ships with its contrast ratio documented.

**Type tokens**
- `--font-display` (editorial serif) · `--font-text` (grotesque) · `--font-data`
  (tabular/mono, if adopted)
- Scale: `display-xl` (hero) · `display` (H2) · `heading` (H3/vignette titles) · `body-lg` ·
  `body` · `caption` · `data` (tabular). Each with size/leading/tracking/weight, desktop + mobile
  values.

**Space & structure**
- Spacing scale (4-base: 4/8/12/16/24/32/48/64/96/128) · section vertical rhythm token ·
  `--rule-width: 1px` · grid: 12 col desktop / 6 tablet / 4 mobile, gutter + margin tokens ·
  `--radius`: 0–2px range (this brand is square-shouldered; no pill shapes except possibly the
  CTA — decide once, apply everywhere).

## 2. Component inventory (landing page set)

| Component | Notes & states |
|---|---|
| **Nav bar** | Logo lockup, 3 links, primary CTA. Sticky optional — if sticky, it shrinks, never floats as a pill. Mobile: links collapse; CTA stays visible. |
| **Button / CTA** | Primary (accent), secondary (ink outline or underlined text-link style). States: default, hover, focus-visible (obvious ring), active. The `→` is part of the primary CTA's identity. |
| **Section header** | Number (`01`) + hairline rule + H2, the repeating editorial skeleton. |
| **Stat bar** | Oversized figure + kicker + source line. Reused later for any evidence moment. |
| **Scene block** | (S3) narrow editorial text column with scene title — typographic, no icon. |
| **Product vignette frame** | The bento container: paper card, 1px rule, dense recreated UI inside (`06` supplies content). Variants: queue, brief, board, timeline. Never screenshot-in-a-browser-chrome. |
| **Citation chip** | Superscript source marker used inside vignettes (`CIM p.34`, `Q3 model.xlsx`) — a signature micro-element; make it distinctive and reusable. |
| **Approve action** | Button/signature-line element in accent green with approver name + timestamp — the brand's most meaningful micro-component. |
| **Diagram elements** | Node, flow arrow, gate/threshold mark, source chip, flag marker — a small kit so R3 and future diagrams stay consistent. |
| **Workflow step row** | (S9) numbered step with title + 2-line body. |
| **Plain-list block** | (S8, S10) no-icon commitment/fit lists with typographic bullets or rules. |
| **FAQ item** | Accordion or static Q/A; if accordion: keyboard operable, +/− indicator, no chevron animation excess. |
| **Form (minimal)** | Firm / role / "the workflow that hurts" + email field (footer brief signup). Label-above, obvious focus, error text not color-only. |
| **Footer** | Quiet, typographic; mantra small; legal line. |

## 3. Responsive behavior (density must degrade with intent)

- **Breakpoints:** ~1280 (full grid) · 768 (6-col) · 390 (4-col, the partner's phone — design
  this width explicitly, not as an afterthought).
- The hero must carry its full meaning at 390px: mantra + subhead + CTA + a *simplified* single
  vignette (drop the composition to its Approve-action panel).
- The R3 diagram reflows horizontal → vertical; the gate stays the visual protagonist.
- Vignettes never shrink to illegibility: below 768, swap dense multi-column vignettes for their
  single-panel variants — reduce *count*, never font size below caption.
- Tables/wide vignettes may scroll horizontally *inside their frame*; the page body never
  scrolls horizontally.
- The H2 spine reads intact on mobile — headers don't truncate.

## 4. Accessibility (WCAG 2.1 AA — non-negotiable)

- Contrast AA everywhere, *including inside dense vignettes and small source lines* — the
  temptation to drop to light gray captions is the main risk; check every gray.
- Full keyboard navigability; visible focus states designed (not browser default), consistent.
- Color never sole status carrier: flags/watch items pair color with text or shape.
- `prefers-reduced-motion` honored; static-first design.
- Semantic heading order (single H1 = hero; H2 spine; H3 inside sections).
- Alt-text conventions for the three signature graphics (they carry argument, not decoration —
  write real descriptions).
- Touch targets ≥44px on mobile including FAQ rows and nav.

## 5. Quality bar & conventions

- Real typographic punctuation everywhere (quotes, en/em dashes, thin spaces where the type
  wants them).
- Tabular figures wherever numbers stack or align.
- No layout shift from web-font loading visible in the design's assumptions (spec fallback
  stacks with matched metrics).
- Deliverable formats: if Figma — pages per `01`'s checklist, components + variables named per
  this doc; if HTML/CSS — one `tokens.css` + component classes matching the table above.
- Performance envelope the design must respect: system feels instant; images only for the logo
  and (if unavoidable) pre-rendered diagram SVGs; everything else is type, rules, and CSS.
