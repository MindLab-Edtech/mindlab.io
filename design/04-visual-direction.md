# 04 · Visual Direction

## 1. The one-line art direction

**A broadsheet, not a brochure.** The page should feel like a serious research publication that
happens to sell a product: editorial typography, hairline rules, numbered sections, dense
evidence, one accent color used like a highlighter. Reduction over ornament, always.

Why this is strategy, not taste: Pentagram's finance identities (Mastercard, Amex, Citi, PayPal,
Bloomberg) prove that reduction-first editorial design is what *trust* looks like in this
vertical. And the anti-reference is equally verified: the generic-AI look (gradient hero,
glassmorphism, purple glow, sparkles) is now the visual signature of exactly the products this
buyer distrusts and re-verifies. **Looking different is positioning.**

## 2. Typography

- **Headlines: an editorial serif.** First trial: **Financier Display** (drawn for the
  *Financial Times* — exactly the right cultural register). Alternates: Tiempos Headline,
  Feature Display. Big, confident scale; tight measure; real quotes and en-dashes.
- **Body & UI: a disciplined grotesque.** First trials: **Söhne**, Suisse Int'l, Neue Haas
  Grotesk. Alternate if licensing is a constraint: Inter (acceptable, less character).
- **Numbers: tabular figures mandatory** everywhere data appears (stat bar, vignettes, pricing).
  If the chosen faces lack good tabular figures, add a third mono/tabular face for data moments
  (e.g., Söhne Mono) — sparingly.
- Scale: generous jump between headline and body (editorial contrast), e.g. display ~clamp(40px,
  6vw, 88px); body 16–18px; captions/source lines 13–14px but never below AA contrast.
- Produce a specimen sheet with 2–3 pairings before designing sections; pick one.
- Licensing note for the founder: Financier/Söhne/Suisse are commercial licenses (Klim/Swiss
  Typefaces); budget for web licenses, or fall back to open alternatives (e.g., Newsreader /
  Source Serif 4 + Inter) with the same rules.

## 3. Color

- **Ground:** warm paper off-white (trial ~`#FAF9F5`), not clinical white.
- **Ink:** near-black (trial ~`#141413`), not pure #000.
- **Accent — one only:** a deep **ledger green** (trial range `#0E5940`–`#1A6B4F`), semantically
  tied to *approval/sign-off* — it's the color of the gate, the approve action, the signature
  moment. Alternate direction if green trials poorly: oxblood `#6E1423` family.
- Supporting neutrals: 2–3 grays for rules/captions, all AA-checked on paper ground.
- Functional colors inside vignettes (flag red, watch amber) exist but stay *inside* product
  vignettes — the marketing page itself uses ink + one accent.
- **Banned:** purple-blue gradients, neon-on-dark "AI glow", pastels, any gradient as a surface.
  Dark mode: not in scope; the page is paper.

## 4. Layout & grid

- Strict **12-column grid**, generous margins, max content width ~1200–1320px.
- **Visible hairline rules** (1px, gray) dividing sections — the editorial skeleton. Section
  headers carry **numbers** (`01 — The problem`, `02 — The system`…), echoing both Pentagram's
  case-study conventions and the product's own R3 discipline.
- Asymmetry over centering: favor a strong left-anchored text column with product evidence
  right, alternating; centered layouts only for the stat bar (S2) and close (S11).
- Whitespace *between* sections is generous; density lives *inside* modules. "Dense inside, calm
  outside" is the layout's governing tension.
- Footer is quiet and typographic; the mantra appears once, small.

## 5. Imagery rules

- **No photography. No stock. No 3D. No illustration-as-decoration.** The product is the
  imagery, plus thin-line diagrams.
- **Product vignettes, not screenshots** (the Ramp × Bakken & Baeck "bento" precedent —
  bakkenbaeck.com/case/ramp): recreate UI fragments in the site's own type and grid at real
  density — review queues, cited claims, approve actions, record timelines. Stylized fidelity:
  believable working content (vocabulary and sample data in `06`), controlled palette, legible
  at any size, never leaking unfinished real UI.
- Diagrams: technical-drawing tone — thin strokes, precise labels, no drop shadows, no
  isometric 3D.

## 6. The three signature graphics (the page's real design work)

### 6.1 Hero product composition (S1)
A composed cluster of 2–3 overlapping vignette panels: (a) a review queue with 3–4 items and
statuses, (b) a Target Brief fragment with a visibly **cited claim** (superscript source chip),
(c) an **Approve** action — button or signature line — as the focal point, in the accent green.
It should read at a glance as: *dense professional instrument + a human about to sign*. Static
by default; optional single slow state change (draft → approved) if motion is used at all.

### 6.2 The R3 gate diagram (S4)
The centerpiece. **Resources → Reports → [GATE: review · edit · approve] → Records.**
- Resources: a stack of typed source chips (CIM.pdf, data room, Q3 model.xlsx, call notes).
- Reports: a draft document panel with citations and one flagged **source gap**.
- The gate is the visual protagonist: a literal threshold/checkpoint mark in accent green with
  a named approver ("Reviewed by J. Tran — 14:32") — the human is *visible in the diagram*.
- Records: a clean ledger/timeline entry that only exists past the gate.
- The three captions from `03` §S4 sit under it. Must work at mobile width (vertical flow).

### 6.3 The record timeline (S7)
A single company's memory across time, drawn like a ledger line: `2024 — screened, passed
(reason logged)` → `2026 — back with new banker; brief pre-loaded with prior work` → `what
changed since` diff highlights. Shows compounding: the second entry is visibly *richer for the
first existing*.

## 7. Motion

- Minimal and meaningful. At most: one slow draft→approved transition in the hero; subtle
  scroll-reveal (opacity/4px translate, once) if any.
- `prefers-reduced-motion`: everything degrades to static — design the static state *first*.
- Nothing loops, floats, pulses, or sparkles. No parallax. No cursor tricks.

## 8. Logo usage

Existing mark (`assets/`): black connected-dots "M". Use at nav and footer; wordmark "MindLab"
set in the system type beside it (trial both faces; likely grotesque, medium weight, tight
tracking). Clearspace ≈ one dot-diameter. Don't recolor except ink/paper inversion. Flag (don't
fix) any concerns with the mark itself.

## 9. Reference set

**Study for:** pentagram.com (editorial grid, numbered case-study confidence) · ramp.com
(bento product abstraction bridging brand and product) · anthropic.com (calm AI, zero slop) ·
stripe.com (engineering credibility in restraint) · FT / The Economist print grids (density with
hierarchy).

**Anti-references (study to avoid):** any templated "AI copilot" landing page (gradient +
sparkle + emoji cards); sparse one-sentence-hero minimalism; Bloomberg-terminal hostility
(dense-and-punishing). MindLab is dense *and* legible, calm *and* serious.
