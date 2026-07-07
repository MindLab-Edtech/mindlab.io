# Product Screenshots — Real UI, with Context

**What this is:** the actual product screenshots that were embedded on the old mindlab.io, pulled
at full resolution, each documented with what it shows and how to reuse it on the **new** landing
page. The old marketing page itself is being discarded — only these product images carry forward.

**Why it matters:** the new page's product vignettes (see `../../04-visual-direction.md` §6 and
`../../06-product-reference.md`) should reflect the *real* product, not invented mockups. These
three images are ground truth for what MindLab's UI actually looks like, what surfaces exist, and
what vocabulary/sample data the product uses.

**Important — these are the ONLY real image files on the whole site.** Everything else that looks
like "product UI" on the old page (the hero mesh sphere, the "Good morning / Live workspace"
cards, the step-through workflow panels) was **CSS-rendered HTML, not image assets** — so it
can't be extracted as a file. If the new design wants those as images, they must be
re-created/re-rendered. The three files here are the genuine embedded screenshots.

**Sample-data note:** the product uses **FreshRoute AI** as its fictional demo company
(explicitly labelled "non-client sample data" on the old site), inside a fictional universe of
companies and funds — reuse these real names in new vignettes for authenticity (full list at the
bottom).

---

## 01 · `01-freshroute-lead-qualification.png` — Company Profile / diligence record

- **Full-res:** 1340×760 · **Was on:** `/workflows`
- **Alt text (verbatim):** "MindLab company qualification dashboard with rubric fields, evidence
  state, and score context"
- **Old-site heading it sat under:** *"Diligence, memo prep, monitoring, and reporting without
  rebuilding context."*
- **Old-site body nearby:** "MindLab helps teams gather the right material, monitor what changed,
  compare the evidence, and produce source-backed work without losing reviewer control."

**What the screen actually shows:** an Opportunity/Company detail record for "FreshRoute AI" —
- Header: opportunity ID, Name, **Stage = IC**, Sector (Supply Chain & Logistics Software),
  Source (Advisors), Created by MindLab; a green **"Promote to Portfolio"** action.
- A full company **Description** (thesis paragraph).
- Tab bar: Overview · **Company Profile** · Financials · Comparables · Valuation · Risks ·
  Settings · More.
- A **"Report versions" timeline** (dated points: Jun 19 → Jun 24 "primary") — this is the
  compounding-memory / versioned-record surface.
- "Refresh from report" and "Re-run" actions; "Built from this report — open the full Company
  Profile report".
- Metric cards with **citation chips**: Total Revenue 3.9M, ARR 1.8M `(4.3, 0.4)`, YoY Growth
  58% `(4.1, 4.3)`, Gross Margin 58% ("company-stated; not yet GAAP-attested" `(4.3, 5.1)`).

**Use it on the new page for:**
- **S5 Target Brief** vignette — this *is* the target/diligence output surface.
- **S7 firm memory** — the "Report versions" timeline is literally the record-over-time story.
- **S4 R3 / provenance** — the citation chips and "not yet GAAP-attested" caveat are perfect
  proof of "every claim carries its source" and "the system flags what it can't stand behind."

## 02 · `02-freshroute-settings.png` — Configurable dashboards (firm templates)

- **Full-res:** 1340×900 · **Was on:** `/` (homepage) and `/platform`
- **Alt text (verbatim):** "MindLab dashboard configuration settings"
- **Old-site heading it sat under:** *"Firm memory layer"* (homepage) / "Configurable dashboards"
- **Old-site body nearby:** "Product evidence: dashboard modules, source categories, evidence
  checks, and reviewer needs can be configured around the firm process."

**What the screen actually shows:** the **Settings → Dashboards** tab of the same FreshRoute AI
record —
- "Choose which research dashboards this deal shows, and in what order. Each becomes a tab; build
  it from its tab to run the analysis."
- Reorderable module list with Hide/Remove: Company Profile, Financials, Comparables, Valuation,
  Risks.
- **Available to add** chips: Overview, Unit Economics, Returns, Management, Structure, Diligence,
  Thesis, IC Memo.

**Use it on the new page for:**
- **S9 "calibrated to your templates"** and the platform/config story — concrete proof that
  dashboards, rubrics, and outputs match the firm's own process.
- Supporting evidence for the "installed system, not a generic tool" positioning.

## 03 · `03-mindlab-dashboard-snapshot.png` — The operating dashboard / command center

- **Full-res:** 1340×1000 · **Was on:** `/platform`
- **Alt text (verbatim):** "MindLab operating dashboard with opportunities, portfolio health, AI
  summary, and workbench snapshot"
- **Old-site heading it sat under:** *"A configurable operating layer for investment research."*
- **Old-site body nearby:** "MindLab maps to the way your team already evaluates companies:
  source systems, research intake, online research, discrepancy checks, monitoring needs, scoring
  rubrics, report formats, dashboards, reviewers, permissions, and memory rules."

**What the screen actually shows:** the home cockpit — "Good afternoon · Your live deals +
sourcing" —
- **Role switcher:** Deal lead / Operating partner / MD / IC / Analyst.
- **NEEDS YOU** action queue: "2 blocking questions", "6 approvals" (the human-review gate,
  surfaced as the first thing).
- **PIPELINE** by stage (Sourcing → Triage → IOI → DD → IC) with scored company cards.
- **TODAY'S BRIEFING** — an AI-generated summary across Deals / Portfolio / Funds / Market,
  stamped "updated 22h ago · **via claude**".
- **UPCOMING · 7 DAYS**, **CROSS-ASSET SIGNALS** (CRITICAL/HEAVY flags), **PER-ASSET SIGNALS**
  (radar scores), **RECENT ACTIVITY**.

**Use it on the new page for:**
- **S1 Hero product composition** — this is the densest, most "command-center" surface; the
  strongest single image for the hero.
- **S6 Portfolio Pulse** — cross-asset/per-asset signals and the "what changed" briefing.
- Proof of the **action queue / approval gate** ("NEEDS YOU: 6 approvals") right on the home
  screen — the differentiator, shown not told.

---

## Cross-reference: image → new page section

| New section (see `03-page-content-spec.md`) | Best image(s) |
|---|---|
| S1 Hero composition | **03** (command center) — primary; 01 as secondary panel |
| S4 R3 gate / provenance | **01** (citation chips, "not yet GAAP-attested"), 03 (NEEDS YOU approvals) |
| S5 Target Brief | **01** (company profile / diligence record) |
| S6 Portfolio Pulse | **03** (cross-asset & per-asset signals, briefing) |
| S7 Firm memory / record timeline | **01** (Report versions timeline) |
| S9 Calibrated to your templates | **02** (configurable dashboards) |

## Handling guidance for the designer

- These are real screenshots at ~1340px wide — fine as **reference for redrawn vignettes**, and
  usable directly if lightly framed. Per `04-visual-direction.md`, the house style prefers
  **stylized, redrawn UI fragments** in the site's own type/grid over pasted screenshots — treat
  these as the source of truth for *content and layout*, then redraw at the fidelity the section
  needs.
- If used directly, don't upscale past native size; frame in the bento container (`05` component
  list), never in fake browser chrome.
- The product's accent is a **green** (deal actions, "Promote to Portfolio") on near-white — which
  matches our chosen ledger-green accent. Navy is used for headers/role-switcher. This is
  consistent with the visual direction, not a conflict.

## Real product sample-data universe (reuse for authentic vignettes)

Companies/opportunities: **FreshRoute AI** (food/cold-chain logistics SaaS, the primary demo),
PraxiaFlow Health, MedLedger ClinicPay, ColdHub Johor, KitchenLoop Pro, ChillFleet Systems,
GreenCrate Exchange, HarborMed Services, ClinicFlow, MarketNest, GreenCarton Packaging, MedOps AI.
Funds/vehicles: **Meridian Family Evergreen HoldCo**, Meridian Growth Fund I, Meridian Venture
Sidecar. Stages: Sourcing · Triage · NDA/IOI · DD · IC. Metric vocabulary seen in-product: ARR,
YoY growth, gross margin (with GAAP-attestation caveats), TVPI, IRR, DPI, dry powder, covenant
breach, radar score. AI briefing is stamped "via claude".

_Raw extraction data (paths, all contexts, dimensions) is in `_manifest.json`._
