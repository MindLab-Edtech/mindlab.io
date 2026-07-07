# MindLab.io — Landing Page Strategy

> Research-phase deliverable, 2026-07-05. No tech, no code — this is the thinking that the page
> will be built from. Evidence base: `research/external-findings.md` (10 adversarially-verified
> findings with sources) and `research/internal-docs-brief.md` (distilled from the company bible,
> ROI case, pricing, governance brief, UI brief, pitch decks).

---

## 0. TL;DR — the thesis

**The market has already bought AI. It has not yet bought AI it can put its name on.**

86% of senior US corporate + PE dealmakers have integrated GenAI into M&A workflows, and 88% of
PE adopters have invested $1M+ (Deloitte, H1 2025). Yet the top five adoption barriers are all
trust-shaped (security 67%, data quality 65%, model reliability 64%…), 59% of finance
professionals still manually re-verify AI outputs all or most of the time (Hebbia's *own* 2026
survey), and only ~20% of GenAI use cases had been operationalized beyond pilots (Bain). Meanwhile
competitors fight over citation granularity and content breadth — and **not one major vendor's
marketing claims a human approval gate before AI output becomes a record.**

That is MindLab's page in one sentence: everyone else sells a faster analyst; **MindLab sells a
governed research system where AI prepares, a named human approves, and the firm keeps the
memory.** The landing page's job is not to convince PE firms to try AI — they already have. It is
to be the first page that takes their distrust seriously and turns it into the product.

- **Positioning:** the human-approved research system for private equity (own the approval gate +
  compounding memory; refuse the "AI copilot/agentic" label war).
- **Hero direction:** "AI prepares. Humans approve. MindLab remembers." over a dense, real-looking
  product visual — not a gradient, not a chatbot.
- **CTA:** not "Book a demo." **"Bring one live deal"** — a free 30-minute workflow diagnosis that
  leads into the $10k implementation pilot. Matches the implementation-first motion.
- **Design:** Pentagram-grade editorial restraint (their finance portfolio — Mastercard, Amex,
  Citi — proves it in this vertical) + Ramp/Bakken & Baeck-style "bento" product abstractions for
  density. Broadsheet, not brochure.

---

## Part 1 — Who we are selling to (and what they actually feel)

### The firm

Lean PE and private-capital deal teams: boutique/lower-mid-market PE, growth equity, independent
sponsors, family offices doing direct deals, private credit. Roughly 5–50 investment
professionals; no internal engineering; every analyst hour visible to a partner. SEA/APAC first,
global by design (the pain is not regional).

The landing page should speak **PE-first** — this is a deliberate narrowing of the internal ICP
(which includes wealth teams). Reason: a page that says "investment and wealth teams" reads as a
platform for everyone; a page that says "deal teams" reads like it was built by someone who has
sat in a Monday pipeline meeting. Family offices and private credit will still recognize
themselves in PE-shaped language (they self-describe as deal teams); RMs and wealth expansion
stay in the sales deck, not on the front page.

### The three people who must each get something from the page

| Person | Role in the deal | What the page must give them in <10 seconds |
|---|---|---|
| **Partner / MD** (economic buyer) | Signs the pilot; reputation on the line | "This won't embarrass us" — governance, approval gate, provenance. And "my team ships more IC-ready work without headcount." |
| **VP / Principal** (champion) | Runs the evaluation | "This fits how we actually work" — real workflow language (CIMs, data rooms, IC memos, portfolio reviews), not AI-tool language. Proof they can forward internally. |
| **Analyst / Associate** (daily user) | Will live in it | "This kills the blank page and the re-work, and I stay the author" — drafts they edit and sign, not a black box that replaces them. |

Compliance/ops is the fourth, silent reader: the page must contain the answers they'll be asked
to check (data isolation, no cross-customer training, audit trail, SEC-exam-readiness posture).

### Buyer psychology — what the research verified

1. **They are past "should we use AI."** 86% adopted; 65% within the past year. Do not spend one
   pixel evangelizing AI. Spend everything on *which AI workflow deserves to touch the record*.
2. **Their objection is trust, five different ways.** Security 67%, data quality 65%, reliability
   64%, ethics 62%, regulatory 61% — one nearly-tied cluster. Objection handling is not a FAQ at
   the bottom; it is the mid-page spine.
3. **They are re-doing the AI's work.** 59% manually verify or re-create AI outputs all/most of
   the time. This is the sharpest pain sentence available, and it comes from a competitor's own
   commissioned survey. The re-verification tax is our problem statement.
4. **They've seen demos, not production.** Only ~20% of use cases operationalized (Bain). The CTA
   that converts is not "watch another demo" — it's "run one of *our* live deals through it."
5. **Adoption concentrates pre-sign** (strategy 40%, screening 35%, DD 35%). Lead with Target
   Brief (screening/outside-in research) because that's where budget and habit already are;
   Portfolio Pulse is the wedge-expansion story where competition is thinner.
6. **Regulation is arriving on our side.** SEC 2026 exam priorities include AI oversight,
   output monitoring, and documented human review for registered advisers. "Documented human
   approval" is shifting from nice-to-have to exam answer. Use soberly — tailwind, not fear-bait.

### The pains, in their language (from internal docs — keep this vocabulary)

- The same target researched three times because nobody remembers the 2024 look.
- Company knowledge living "in folders, emails, chat, file rooms, consultant PDFs, and people's
  heads."
- Portfolio updates that get written, circulated, and never become history.
- "Where did this number come from?" having no fast answer.
- ChatGPT answers that die in a chat history.
- The analyst who leaves and takes the firm's memory in their head.
- **"Your analysts are not slow. The workflow is slow."**

---

## Part 2 — Positioning and category

### The whitespace (verified, not vibes)

The two loudest incumbents have staked their labels: AlphaSense = "enterprise market intelligence
platform" (moat: 10,000+ proprietary sources); Hebbia = "agentic operating system" (moat:
automation breadth). They attack each other on **citation granularity** — snippet-level vs
sentence-level vs cell-level — which means citations are now table stakes, already commoditized.

What verifiers could not find on any major competitor's marketing surface: **a human
review/approval gate before AI output becomes source-of-truth.** Everyone sells what the AI does.
Nobody sells what happens between the AI and the record. That in-between is literally MindLab's
architecture (R3: Resources → Reports → Records), and peer-reviewed HITL research (Entropy 2026
systematic review; Vaccaro et al., *Nature Human Behaviour* 2024) independently supports
draft-then-verify as the pattern that saves time *while preserving quality* — so the positioning
can be framed as evidence-backed, not marketing.

### Category call

Do **not** enter the label war ("AI copilot," "agentic OS," "market intelligence platform") — in
those taxonomies MindLab gets down-positioned as a small entrant. Claim a category shaped exactly
like the product:

> **The human-approved research system for private equity.**
> (Descriptive long form: an AI research and portfolio monitoring system where nothing becomes
> firm record until your team approves it.)

Supporting category vocabulary to repeat until it's ours: *research system (not tool), approval
gate, firm record, source-backed, institutional memory.* The word "system" is doing deliberate
work: it matches the internal insight ("firms don't need more prompts, they need a repeatable
system") and it justifies the implementation-first pricing.

### Positioning statement (internal compass, not page copy)

For lean PE deal teams who already use AI but can't put unverified output in front of an IC,
MindLab is the research system that turns fragmented deal and portfolio information into
source-backed drafts a named human approves — so the firm moves faster *and* keeps a defensible,
compounding record. Unlike AlphaSense (content breadth) or Hebbia (automation breadth), MindLab
is built around the approval gate and the firm's own memory.

### The three fights we refuse

1. **Content breadth** — we don't sell 10,000 sources; we structure what the firm knows.
2. **Full autonomy** — we don't sell "AI that replaces analysts"; the human signature is the product.
3. **Price-led "AI for cheap"** — implementation-first at $10k signals seriousness; Vietnam is
   execution leverage in the ops model, never a marketing claim.

---

## Part 3 — Message architecture (selling points, ranked)

Order of argument on the page = order of this list. Each selling point is written as
claim → why it lands (evidence) → proof shown on page.

**1. Nothing enters the record without a human signature.** *(the differentiator)*
The R3 gate: AI drafts from your sources; your team reviews, edits, approves; only approved work
updates the record. → Lands because every buyer objection is trust-shaped and no competitor says
this. → Proof: the R3 diagram, a visible "Approve / Edit / Reject" UI vignette, audit-trail
close-up.

**2. Stop paying the re-verification tax.** *(the pain, quantified)*
59% of finance professionals re-check or re-do AI output all/most of the time — AI that isn't
trusted just moves the work. MindLab drafts arrive with sources attached and a review queue, so
checking *is* the workflow, once, not a shadow job after. → Proof: citation-on-every-claim
close-up; "source gap" flag (the system admits what it doesn't know — hugely credible).

**3. Your firm stops forgetting.** *(the compounding moat)*
Every approved brief, memo, and update becomes a Company Record the next deal starts from. "The
first brief saves time once. The record saves time every time the company comes back." → Proof:
a record timeline visual (2023 pass → 2025 re-look → today), "what changed" diff.

**4. Deal-shaped, not chat-shaped.** *(the wedge workflows)*
Target Brief: name/website/data room in → structured screening brief in your memo format, with
diligence questions. Portfolio Pulse: what changed across the portfolio, flagged and sourced,
before the Monday meeting. → Proof: two dense product vignettes with real-looking output.

**5. Installed with you, not dumped on you.** *(the motion as a feature)*
We map one live workflow, calibrate to your templates, and run a real deal through it in the
first weeks — then you decide. → Proof: the 3-step engagement plan with honest timeline; free
diagnosis CTA.

**6. Built like it will be examined.** *(governance, stated plainly)*
Private workspace isolation, no cross-customer training, role-based access, human approval
documented for every record change — the posture SEC 2026 exam priorities point toward. → Proof:
trust section with concrete commitments (and no fake badges).

Explicitly **not** lead messages: "save 90% of your time" (untrusted, unproven), model names,
"powered by GPT-x/Claude" (commodity), feature count, "unlimited workflows" (capacity-based
truth), wealth/RM expansion (later page).

### Copy bank (keep; these earned their place)

- "AI prepares. Humans approve. MindLab remembers." *(anchor mantra)*
- "Investment teams don't have a data shortage. They have a memory problem."
- "Your analysts are not slow. The workflow is slow."
- "The most expensive information is the information your team already found once and cannot
  reuse cleanly."
- "ChatGPT answers prompts. MindLab is the installed workflow."
- "CRMs track who you know. Data rooms store documents. MindLab structures what your firm knows."
- "Nothing becomes a record until someone puts their name on it."
- "A draft you can defend in front of the IC."
- "Every claim, one click from its source."
- "From AI pilots to a system of record."

---

## Part 4 — The page, section by section

Eleven sections, one argument. Left column = what it says; right column = why it's there.
(Draft copy is directional — good enough to react to, not final.)

### S1 · Hero

- **Eyebrow:** `FOR PRIVATE EQUITY DEAL TEAMS`
- **H1:** **AI prepares. Humans approve. MindLab remembers.**
- **Sub:** MindLab turns CIMs, data rooms, spreadsheets, and portfolio updates into source-backed
  research your team reviews, approves, and reuses — so the next deal starts from everything the
  firm already knows.
- **Primary CTA:** `Bring one live deal →` **Secondary:** `See the workflow`
- **Visual:** a dense, credible product composition (review queue + a Target Brief with visible
  citations + an Approve action). Not a gradient. Not a chat bubble.

*Why:* the mantra is differentiated (approval gate = unclaimed axis), memorable, and honest; the
sub names PE artifacts so a VP knows in one line we speak their language. Alternative H1 (more
benefit-led, less mechanism): "Turn deal work into institutional memory." A/B later; ship the
mantra first — in a sea of "your AI analyst" heroes, it's the line only we can say.

### S2 · The re-verification tax (problem stat bar)

One line, big type, sourced small: **"59% of finance professionals still manually re-verify or
re-do AI outputs."** Followed by: *That's not an AI problem. It's a workflow problem.*

*Why:* replaces the logo strip we don't have. A verified, time-anchored stat from a competitor's
own survey does the credibility work; the kicker reframes the whole category in our favor.

### S3 · The problem, told as three scenes

Header: **"You don't have a data shortage. You have a memory problem."**
Three tight vignettes (no icons-and-blurbs slop; written like war stories):
1. *The third first-look.* The target you screened in 2024 is back with a new banker. Nobody can
   find the old work. An associate rebuilds it from scratch.
2. *The update that vanished.* The portco flagged margin pressure in March. It surfaced in
   September — in a partner's memory, not the record.
3. *The unanswerable question.* IC asks "where's that churn number from?" The answer is a
   17-tab spreadsheet and a departed analyst.

*Why:* PE readers recognize scenes, not feature lists. Each scene maps to a section below
(records, monitoring, provenance).

### S4 · The mechanism — R3 (signature section)

Header: **"Nothing becomes a record until a human approves it."**
The R3 diagram as the page's centerpiece: **Resources** (decks, data rooms, filings, notes) →
**Reports** (AI-drafted, source-backed, editable) → *[the gate: review · edit · approve]* →
**Records** (firm truth, versioned, auditable). Three captions: AI never silently writes to your
records · every claim carries its source · every approval is logged.

*Why:* this is the whitespace claim made visual. If a visitor remembers one graphic, it's this.
It's also the user's "encapsulate the heavy pipeline into a simple, clear, trackable
human-in-the-loop process" — drawn.

### S5 · Workflow one: Target Brief

**"From data room to IC-ready first pass."** Input: a name, a website, a data room. Output:
business snapshot, market context, competitors, risk flags, diligence questions — in *your* memo
format, every claim cited, gaps flagged as gaps. Dense product vignette right.

### S6 · Workflow two: Portfolio Pulse

**"Know what changed before the Monday meeting."** Recurring, sourced what-changed briefs across
the portfolio: covenant flags, narrative shifts, watch items — routed to the review queue, into
the record after sign-off. Vignette: portfolio board with two flagged companies.

*Why S5/S6 in this order:* pre-sign is where GenAI habit already lives (40/35/35%); monitoring is
the thinner-competition expansion story. Two workflows only — "start with one workflow, not a
platform promise" is the sales motion and the page should feel like it.

### S7 · The compounding part — firm memory

**"Every deal makes the next one faster."** Company Record timeline visual: first screen (2024) →
passed, reason logged → new process (2026) → brief pre-loaded with prior work, what changed since.
Line: *The first brief saves hours. The record saves them every time the company comes back.*

*Why:* memory is the moat and the emotional close for partners — it's the firm getting smarter,
not a tool getting used. Also quietly answers "why not just ChatGPT": chat forgets.

### S8 · Trust & governance (plain-spoken, no badges we don't have)

Header: **"Built for work that gets examined."**
Concrete commitments, stated flatly: your workspace is isolated · your data serves only you —
never other customers, never model training · AI output is a draft until a named person approves
it · every record change has a documented review trail · role-based access; export and deletion
on request. One sober line on the regulatory direction (SEC exam focus on documented AI
oversight). **No SOC 2 claim until real** — if useful, one honest line: *SOC 2 in progress;
security documentation available on request.*

*Why:* the 67/65/64% barrier cluster says this section closes deals. Honesty here is
differentiation — every competitor page has the same badge wall; a page that says exactly what it
does and doesn't promise reads as the vendor an operating partner can defend.

### S9 · How an engagement works (+ pricing posture)

**"Start with one workflow. Prove it on a live deal."**
1. **Workflow diagnosis** — free, 30 minutes. Pick one workflow, map sources and output format.
2. **Implementation pilot** — fixed fee, 30–90 days. We install, calibrate to your templates, and
   run real deals through it with you.
3. **Monthly system** — keep it improving; capacity-based plans, no per-seat games.

Pricing display: publish the *shape* (fixed pilot fee + monthly from $2k) rather than the full
table — decision point flagged in Part 10. Never "unlimited workflows"; say plans set the
support capacity.

*Why:* the buyer is stuck between pilot and production; showing a bounded, fixed-fee path with an
exit de-risks the yes. Price shape signals "serious, not enterprise-opaque."

### S10 · Fit (including who we're not for)

**Fits:** lower-mid-market PE and growth equity, independent sponsors, family offices doing
direct deals, private credit — teams where every analyst hour matters.
**Not a fit (yet):** firms wanting a fully autonomous pipeline; day-1 enterprise checklists (SSO,
data residency) — roadmap honest; teams that just want a chatbot.

*Why:* an honest not-for list is rare in this category, filters bad-fit calls, and reads as
confidence. Compensates for having no logos yet.

### S11 · Close + FAQ

Close: **"Bring one live deal. Leave with a source-backed brief your team can judge."** CTA
repeat. FAQ (the compliance reader's checklist): How is this different from ChatGPT? From
AlphaSense/Hebbia? Is our data used for training? (No.) Where does data live? What exactly
happens in the pilot? Can it match our memo format? (Yes — that's the calibration.) What happens
if we leave? (Export everything.)

### Page-length note

This is a long page by design — high-ACV considered purchase, three readers, no self-serve. The
hero + S2 must work standalone (that's what gets screenshotted into a partners' group chat);
everything below is for the champion building the internal case.

---

## Part 5 — CTA strategy

**Primary: `Bring one live deal →`** opening a short qualification form (firm, role, the workflow
that hurts) into a calendar. It's the free workflow diagnosis wearing deal-language. Why not
"Book a demo": this buyer has seen demos (Bain: pilots everywhere, production rare); offering to
run *their* deal is the anti-demo. Why not "Start free trial": empty-workspace SaaS trials are
wrong for a calibrated system and would undercut the implementation-first economics.

**Secondary: `See the workflow`** — a 2–3 minute guided walkthrough (annotated stills or quiet
video) of Resources → Report → approval → Record. No email gate. This is the safe click for the
80% not ready to talk, and it's forwardable — the champion's internal selling asset.

**Tertiary (footer/exit): a monthly brief** — "One page a month on governed AI for deal teams."
Low-commitment capture for the long PE sales cycle; feeds the content motion in Part 8.

CTA copy rules: verbs from deal work (bring, run, see), never "unlock/supercharge/transform";
the button promises what the meeting actually is.

---

## Part 6 — Visual direction: Pentagram discipline, applied

### Why this direction is right (not just taste)

Pentagram's finance identities (Mastercard, Amex, Citi, PayPal, Bloomberg) prove reduction-first
editorial design is what *trust* looks like in this vertical — their own language: elements
"isolated to their purest form." And the anti-reference is verified too: the generic-AI-SaaS
look (gradient hero, glassmorphism, sparkle emoji, purple) is now the visual signature of
exactly the products this buyer re-verifies. Looking different is positioning.

### The one-line art direction

**A broadsheet, not a brochure.** The page should feel like a serious research publication that
happens to sell a product: editorial typography, hairline rules, numbered sections, dense
evidence, one accent color used like a highlighter.

### System sketch (directional tokens — to be refined at design time)

- **Type:** editorial serif for headlines — Financier Display or Tiempos Headline (Financier was
  drawn for the *Financial Times*; exactly the right cultural register). Grotesque for
  body/UI — Söhne, Suisse Int'l, or Neue Haas Grotesk. **Tabular figures mandatory** anywhere a
  number appears. Big, confident headline scale (Pentagram case-study energy), tight measure.
- **Color:** paper off-white (warm, not clinical) + near-black ink. One accent: a deep *ledger
  green* (approval, sign-off — semantically ours) or oxblood. Explicitly banned: purple-blue
  gradients, neon-on-dark "AI" glow, pastel confetti.
- **Layout:** strict 12-column grid, generous margins, **visible hairline rules** dividing
  numbered sections (01 Problem / 02 System / 03 Workflows…) — the editorial skeleton Pentagram
  uses on its own site. Whitespace between sections, density inside modules.
- **Imagery:** none of stock, none of 3D-abstract-AI. The product *is* the imagery (below), plus
  restrained diagrammatic illustration (thin-line, technical-drawing tone) for R3.
- **Motion:** minimal and meaningful — one slow draft→approved state change in the hero
  composition; respect `prefers-reduced-motion`. Nothing floats, nothing sparkles.
- **Voice on the page:** expert, precise, unflashy (PRODUCT.md). No exclamation marks, no emoji,
  no "revolutionary." Sentences a partner could have written.

### Visualizing a dense product (the Ramp precedent)

The verified model is Ramp × Bakken & Baeck's "Bento box" system: a modular grid spanning
low-density brand moments and **high-density stylized product-UI** — bridging brand and product
without raw screenshots. For MindLab:

- Build **product vignettes**, not screenshots: recreated UI fragments (review queue, a cited
  claim, an approval action, a record timeline) rendered in the site's own type/grid — real
  density, controlled fidelity. They stay legible at any size, don't leak unfinished UI, and
  don't age with every release.
- **Density is the message.** PRODUCT.md is right that sparse minimalism reads as regression to
  this audience. Show believable working density — real-looking company names redacted-style,
  real column headers — framed by calm editorial space around it. Dense inside, quiet outside.
- Three signature graphics carry the page: (1) hero product composition, (2) the R3 gate diagram,
  (3) the compounding record timeline. Everything else supports.

### Reference set (for the eventual design phase)

pentagram.com (editorial grid, case-study confidence) · ramp.com (bento product abstraction) ·
stripe.com/docs-era restraint (engineering credibility) · anthropic.com (calm AI, no slop) ·
FT/The Economist print grids (density with hierarchy). Anti-references: any "AI copilot" template
site, and both extremes PRODUCT.md names (sparse minimalism, Bloomberg hostility).

---

## Part 7 — Hierarchy: how a B2B visitor actually descends the page

The page is built for three depths of read:

1. **The 10-second read (partner, on a phone, forwarded link):** Hero claim + the 59% stat bar +
   R3 diagram headline. Outcome: "this one's different — who sent this? fine, look into it."
2. **The 3-minute read (VP/principal, evaluating):** + the two workflow sections and engagement
   model. Outcome: "this maps to our Tuesday problem, and trying it is bounded and cheap relative
   to a bad quarter."
3. **The 15-minute read (champion building the memo + compliance):** + trust section, FAQ,
   walkthrough, monthly brief. Outcome: a forwardable internal case with objections pre-answered.

Rules that fall out of this: every section must lead with its conclusion in the header (headers
alone should tell the whole argument top to bottom — test: read only the H2s, it should still
sell); one idea per viewport; product evidence within the first two scrolls; trust content
mid-page, not buried; CTA repeated at hero, after S7, and close — same verb every time.

The H2 spine, read alone:
*AI prepares. Humans approve. MindLab remembers.* → *59% still re-verify AI output* → *You have a
memory problem* → *Nothing becomes a record until a human approves it* → *From data room to
IC-ready first pass* → *Know what changed before the Monday meeting* → *Every deal makes the next
one faster* → *Built for work that gets examined* → *Start with one workflow, prove it on a live
deal* → *Bring one live deal.*

That reads as a complete argument. That's the test passed.

---

## Part 8 — Traction: the page inside the GTM motion

The page will not generate PE demand on its own (this buyer doesn't Google "AI research tool";
verified conversion benchmarks for this niche don't exist). Its job is to **convert borrowed
attention into diagnosis calls** and to arm champions. Where attention comes from:

1. **Founder-led outbound** (primary at this stage): the page is the credibility anchor every
   cold touch links to. The `See the workflow` walkthrough is the asset that makes a cold email
   forwardable.
2. **The content wedge — own "governed AI for deal teams":** a monthly one-pager + occasional
   essays with a contrarian, evidence-led stance (e.g., *"The re-verification tax"*, *"Why your
   AI pilot didn't survive contact with the IC"*, *"Documented human approval is about to be an
   exam question"*). This is the SEO/LinkedIn surface; the product page stays clean.
3. **PE watering holes:** niche newsletters and communities (Transacted, PE Hub, Axios Pro Rata
   tier; operator Slack/WhatsApp groups; SuperReturn-circuit side events). Sponsorships are
   cheap relative to ACV; the stat-led content above is what earns organic pickup.
4. **Design partners → named proof:** the first 2–3 pilots should be negotiated with a
   case-study clause (even anonymized: "a $300M SEA growth fund"). The page's biggest current
   weakness is zero social proof; the engagement model is how we manufacture it. Until then, the
   honesty devices above (stat bar, not-for list, no fake badges) carry credibility.
5. **SEA/APAC angle:** quietly ranked for "AI due diligence / portfolio monitoring" + regional
   qualifiers where competition is thin; never positioned as "offshore cheap."

Measurement that matters at this stage: diagnosis calls booked (primary), walkthrough completion,
brief signups, and *who* books (fit rate) — not raw traffic.

---

## Part 9 — Anti-patterns (the do-not list, consolidated)

**Copy:** no "revolutionary / 10x / game-changing / AI magic / autonomous analyst"; no "ChatGPT
for finance" or "Bloomberg for private markets" (adopts their taxonomy, invites their fight); no
"unlimited"; no "guaranteed accuracy"; no "bank-grade security" or SOC 2 badge until true; no
Vietnam-as-cost-advantage framing; no unproven ROI multipliers as headlines (the ROI math from
internal docs is sales-call material with the buyer's own numbers, not landing page banners).

**Design:** no gradient hero, glassmorphism, sparkle iconography, purple AI palette; no emoji
feature cards; no stock photos of towers/handshakes; no raw full-app screenshots at hero scale;
no near-empty minimalist hero that hides the product; no autoplay motion soup.

**Structure:** no ungated-then-gated bait (walkthrough stays open); no "Book a demo" as the only
door; no feature-grid-of-twelve (two workflows, told deeply); no pretending to be self-serve SaaS.

---

## Part 10 — Decisions for you + next steps

Decisions the founder should make (my recommendation in parentheses):

1. **Hero line:** mantra ("AI prepares. Humans approve. MindLab remembers.") vs benefit ("Turn
   deal work into institutional memory."). *(Ship the mantra; test later.)*
2. **Pricing visibility:** full table vs shape-only ("fixed-fee pilot + from $2k/mo") vs none.
   *(Shape-only: filters tire-kickers without enterprise-opacity.)*
3. **PE-first narrowing:** confirm the front page speaks PE even though the internal ICP is
   broader. *(Yes — sharper page, same inbound.)*
4. **The 59% stat:** comfortable citing Hebbia's survey (attributed, time-anchored) on the page?
   *(Yes in S2 with source line; it's public and it's their own data.)*
5. **Design-partner clause:** commit to case-study/anonymized-proof terms in the first pilots.
   *(Non-negotiable; it's the page's missing organ.)*

Natural next steps when you're ready (separate sessions):
- **Copy deck:** final copy for all 11 sections in the brand voice, FAQ answers included.
- **Visual identity mini-system:** type pairing trials, accent color, the three signature
  graphics (hero composition, R3 diagram, record timeline) — Figma or code.
- **Build:** static, fast, no-framework-slop landing page once copy and system are approved.
- **Walkthrough asset:** the annotated `See the workflow` sequence (needed before launch — it's
  the secondary CTA).

---

*Evidence trail: every external claim above is sourced and confidence-rated in
`research/external-findings.md`; internal positioning provenance is in
`research/internal-docs-brief.md`. Where research came back empty (conversion benchmarks for
high-ACV finance pages), this document says so rather than inventing numbers — which is, fittingly,
the product's whole point.*
