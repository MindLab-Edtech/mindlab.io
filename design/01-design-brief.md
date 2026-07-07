# 01 · Design Brief

## Project

Design the public landing page for **MindLab.io** and the founding design system it establishes.
This is the company's first marketing surface — there is no existing website, no existing design
system, and one existing brand asset (a black connected-dots "M" logo mark, in `assets/`).

## The business situation (why this page exists)

MindLab sells to lean private-equity deal teams (5–50 investment professionals) through a
high-touch motion: free 30-minute workflow diagnosis → paid implementation pilot (~$10k, 30–90
days, one live workflow) → monthly plans ($2k–6k). There is **no self-serve product**. The page's
job is to convert borrowed attention (founder outbound, forwarded links, PE newsletters) into
diagnosis calls, and to arm an internal champion with a forwardable argument.

The market context that shapes everything: PE firms have *already adopted* AI (86% of senior
dealmakers; Deloitte H1 2025) but don't trust it — their top five adoption barriers are all
trust-shaped, and 59% of finance professionals still manually re-verify AI outputs. Competitors
sell speed and automation. **MindLab sells the approval gate**: AI drafts, a named human
approves, only then does anything become firm record. No major competitor claims this. The
design must make trust and governance *visible*, not decorative.

## Audience (full detail in 02)

Three readers, one page: the **Partner/MD** (10-second skim on a phone — must feel credible and
un-embarrassing), the **VP/Principal** (3-minute evaluation — must map to their real workflow),
the **Analyst** (deep read — must see they stay the author, not get replaced). A silent fourth:
compliance, checking the trust claims. These are domain experts who distrust anything that looks
automated or dumbed-down; they live in dense tables and reports all day.

## Scope

**In:**
- Landing page (11 sections, content locked in `03`), desktop-first, fully responsive.
- Founding design system: tokens, type scale, color, spacing, core components (inventory in `05`).
- Three signature graphics: hero product composition, R3 gate diagram, company-record timeline
  (specs in `04` §6).
- Wordmark treatment: set "MindLab" in the chosen typeface alongside the existing mark (a full
  logo redesign is **out of scope**; evaluate the existing mark, flag concerns, don't replace it
  unprompted).

**Out:**
- Product/app UI (exists separately; `06` describes it so marketing vignettes stay credible).
- Additional pages (pricing page, blog, case studies) — the system should anticipate them, not
  design them.
- Copywriting from scratch — draft copy is provided; typographic treatment may motivate small
  edits, which should be flagged, not silently made.

## Deliverables checklist

1. Typography specimen (headline + body pairing, full scale, tabular figures demonstrated).
2. Color tokens with AA-contrast verification on every text/background pair.
3. Layout skeleton: grid, section numbering, hairline-rule system, spacing rhythm.
4. The three signature graphics.
5. Hero section, desktop + 390px mobile.
6. Full page, desktop + mobile, including reduced-motion behavior notes.
7. Component sheet per `05`.
8. One-page "system rules" summary a future designer/developer can follow.

## Success tests (evaluate every draft against these)

1. **The H2-spine test:** reading only the section headers top to bottom must deliver the
   complete argument (the spine is in `03` §closing).
2. **The 10-second partner test:** hero + stat bar alone, on a phone, must communicate "this one
   is different — governed AI, not another copilot" and feel forwardable to a skeptic.
3. **The density test:** product vignettes look like a working professional instrument (real
   density, real vocabulary from `06`), yet the page around them feels calm and editorial.
4. **The anti-slop test:** put the hero next to five "AI copilot" landing pages — it should look
   like it comes from a different, more serious industry. If it could be mistaken for a generic
   AI SaaS template, it fails.
5. **The honesty test:** nothing on the page claims what the company can't back (no badges,
   no invented logos, no fake testimonials — there are none yet, by design).
6. **AA test:** every state passes WCAG 2.1 AA including within dense vignettes.

## Constraints

- Static-feeling, fast page; design nothing that requires heavy JS to make sense. Motion is
  garnish (one meaningful state transition max), never structure.
- All imagery must be producible without photography or 3D: typography, recreated UI, thin-line
  diagrams.
- The page will be built as clean HTML/CSS — avoid effects that don't survive that medium.
- Languages: English only for now. Number-heavy content: use tabular figures everywhere.
