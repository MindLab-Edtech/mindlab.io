# 06 · Product Reference + Sample Data for Vignettes

Purpose: the landing page's product vignettes must look like the *real* product to a PE
professional — right surfaces, right vocabulary, right density. This doc describes what the
product actually contains and provides **ready-to-use fictional sample data** so no one has to
invent content (inventing it badly is how pages lose expert audiences).

> **See the real thing first:** `assets/product-screenshots/` holds three actual full-resolution
> product screenshots pulled from the old site, each documented in that folder's `README.md`
> (what it shows + which new section to use it in). Those are ground truth — the surfaces,
> layout, and sample-company names below are reconciled to them. The product's real demo universe
> centers on **FreshRoute AI** (with PraxiaFlow Health, MedLedger ClinicPay, ColdHub Johor,
> KitchenLoop Pro, and the Meridian family of funds); those names are safe and authentic to
> reuse, alongside the invented set below.

## 1. What the product is

An AI-augmented deal & portfolio command center for investment firms, built as a dedicated
dashboard + workflow experience. Users: PE partners (top-level view, summaries), principals/
associates (deals, memos, prioritization), analysts (research, monitoring), IR/ops (reports,
LP communication). Read-only dashboards with AI actions; AI work happens through drafts that
flow through review.

**The R3 pipeline (architecture = brand):**
- **Resources** — immutable raw inputs: uploaded files (PDF decks, Excel models), URLs, notes,
  data-room documents.
- **Reports** — AI-generated structured drafts from resources (e.g., "Q3 Revenue Analysis",
  "CIM Risk Assessment"). Start as *Drafts*, human-editable, staging area for data.
- **Records** — source of truth (company, deal, fund). Updated **only** by applying a finalized,
  human-approved report. Full review trail.

## 2. Product surfaces worth showing in vignettes

- **Review queue** — drafts and findings awaiting human review; each row: item title, company,
  type (brief / update / memo section), status (Draft · In review · Approved), reviewer,
  timestamp.
- **Target Brief** — structured screening output: business snapshot · market context ·
  competitive landscape · key risks · diligence questions · source list. Claims carry citation
  chips; unknowns render as flagged **source gaps** ("Churn: not disclosed in available
  materials").
- **Portfolio board / Portfolio Pulse** — companies as rows/cards with health status, last
  update, watch items, "what changed" entries; flags for covenant/KPI issues.
- **Company Record timeline** — the memory view: dated entries (screened, passed, revisited,
  updated) each linking to its approved report.
- **Approve action** — the signature moment: Approve / Edit / Reject, approver name, timestamp.
- **Navigation vocabulary (finance-native):** Workspace · Companies · Targets · Portfolio ·
  Documents · Reports · Firm Memory · Approvals · Monitoring. (Never: Magic, Bot, Playground,
  Autopilot.)

## 3. Fictional sample data pack (safe to use verbatim)

All names invented; use these instead of improvising. Amounts in USD.

**Firms (for context lines, never as customer logos):**
- Harborline Capital Partners — lower-mid-market PE, Singapore
- Kestrel Growth Partners — growth equity, SEA
- Arden Family Office — direct investments

**Target companies (for Target Brief vignettes):**
- **Meridian Componentry Pte Ltd** — precision manufacturing, Singapore. Revenue $42M, EBITDA
  $8.1M (19.3% margin), 310 FTE. Founded 2009. Sourced via: banker CIM.
- **Northbridge Clinical Services** — outpatient clinics, 14 sites, Malaysia. Revenue $28M,
  EBITDA $5.3M. Sourced via: proprietary outreach.
- **Alto Logistics Group** — cold-chain 3PL, Vietnam/Thailand. Revenue $61M, EBITDA $7.4M.

**Portfolio companies (for Portfolio Pulse vignettes):**
- **Cascara Foods** — Status: ⚑ Watch. "Q2 gross margin 31.4% vs 34.1% prior — input costs;
  covenant headroom narrowed to 1.4x vs 2.0x required min... flagged for review."
- **Brightmoor Education** — Status: On track. "Enrollment +12% YoY; new campus opening moved
  to Q4."
- **Veldt Industrial Services** — Status: ⚑ Flag. "CFO departure announced 2 Jun; audit
  timeline at risk."

**Review queue sample rows:**
| Item | Company | Type | Status | Reviewer |
|---|---|---|---|---|
| Screening brief — first pass | Meridian Componentry | Target Brief | In review | J. Tran |
| Q2 portfolio update | Cascara Foods | Portfolio Pulse | Draft | — |
| Covenant analysis | Cascara Foods | Report | Approved · 14:32 | D. Pham |
| What changed — weekly | Alto Logistics | Monitoring | Draft | — |

**Citation chips (formats):** `CIM p.34` · `Q3-model.xlsx · B14` · `Mgmt call 12 May` ·
`Data room /financials/2025-audit.pdf` · `Company website` · `News: Nikkei Asia, 3 Jun 2026`

**Source-gap examples:** "Customer concentration: top-10 share not disclosed in available
materials." · "Churn: no cohort data in data room — added to diligence questions."

**Diligence question examples:** "What drove the 2024 margin step-up — pricing or mix?" ·
"Confirm top-3 customer contracts renew before close." · "Why did capex halve in FY25?"

**Record timeline example (Meridian Componentry):**
- `Nov 2024` — Screened. Passed: valuation gap. Brief + passing memo approved (D. Pham).
- `Jun 2026` — Returned via Harborline process. Brief pre-loaded from record.
- `What changed` — Revenue +18%; new plant in Johor; CFO hired from listed peer; banker guide
  price now 7.2× vs 8.5× (2024).

**Metric vocabulary that reads native:** EBITDA, EBITDA margin, revenue CAGR, net revenue
retention, covenant headroom (×), leverage (net debt/EBITDA), MOIC, IRR, DPI, dry powder,
enterprise value, guide price (×), working-capital cycle, customer concentration.

## 4. Credibility rules for vignette content

1. Numbers must be internally consistent (margins actually computable from the revenue/EBITDA
   shown; a 1.4x headroom is *below* a 2.0x minimum, hence the flag).
2. Every claim visible in a vignette carries a citation chip; at least one visible **source gap**
   per brief vignette — the system admitting ignorance is a core trust signal.
3. Statuses always pair color with a word or shape (⚑ Watch), never color alone.
4. Dates are concrete and recent-past (2024–2026); people are initials + short surnames
   (J. Tran, D. Pham — SEA-plausible, matching the company's roots).
5. Nothing reads as a real company or real fund; if in doubt, rename.
6. Density target: a vignette should contain roughly as much as a professional would want open
   at once — 4–8 data points per panel, not 2, not 20.
