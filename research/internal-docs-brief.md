# Internal Docs Brief — What the Strategy Docs Already Say

> Extracted 2026-07-05 from `~/Documents/startups/openwebui/docs/mindlab-source-docs/`
> (company bible v7, ROI business case, pricing & packaging v1, investor deck v3, UI generation
> brief, data governance brief v3, expansion thesis v3) plus the sales deck and PE-pack PRD.
> This is the single internal-context source for `LANDING-PAGE-STRATEGY.md`.

## A. ICP & Segments

- **Firm type:** lean investment and wealth teams — single & multi-family offices, boutique PE/VC
  funds (typically <$500M AUM), private credit teams, small asset managers, independent sponsors.
- **Team size:** small enough that every analyst hour matters, large enough to have real
  portfolio/research volume (~5–50 people implied).
- **Geography:** SEA/APAC early (Vietnam, Singapore, Hong Kong, Indonesia, Thailand; JP/KR
  selectively), then global.
- **Personas:** economic buyer = CIO / Managing Partner / COO; champion = analyst, associate, PM;
  approval = compliance/chief of staff.
- **No named design partners or logos yet** — social proof must come from elsewhere.
- Key insight: these teams are not technical builders; they don't want to become "AI workflow
  plumbers."

## B. Pain Points (internal phrasing, close to customer language)

1. "Repeated first-pass research" — the same target re-researched from scratch.
2. "Scattered company context" — knowledge "lives in folders, emails, chat, file rooms,
   consultant PDFs, and people's heads."
3. "Weak institutional memory" — knowledge disappears when staff leave.
4. "Inconsistent research structure" — outputs vary by person, memory, time pressure.
5. "Portfolio updates that do not become history."
6. "Old memos hard to reuse."
7. "Unclear evidence trails" — can't answer "where did this claim come from?"
8. "AI outputs disappear" — ChatGPT answers go into chat history, not firm records.
9. "Your analysts are not slow. The workflow is slow."

Core line: **"The most expensive information is the information your team already found once and
cannot reuse cleanly."**

Quantified pain indicators used internally: 8–12 companies reviewed/month at 3+ hrs each;
15 portfolio updates/month at 1.5+ hrs each; 40+ repetitive LP/client questions per month.

## C. Value Props & ROI

Anchor messaging (ranked by refinement):
1. **"AI prepares. Humans approve. MindLab remembers."** (appears in every doc — the mantra)
2. "Turn investment work into institutional memory." (hero headline in UI brief)
3. "MindLab installs your private AI investment workflow and keeps improving it every month."
4. "Firms are not paying for AI access. They are paying for more output, better continuity, and
   less wasted analyst time."

ROI math (internal assumptions, $150–200/hr loaded analyst cost):
- Target Brief: 8 targets/mo × 3 hrs saved → ~24 hrs/mo (~$3.6–4.8k value)
- Company Records: 5 revisits/mo × 2 hrs → 10 hrs. "The first brief saves time once. The Company
  Record saves time every time the company comes back."
- Portfolio monitoring: 10 updates/mo × 1.5 hrs → 15 hrs
- Break-even: Starter $2k/mo ≈ 10 hrs saved; Core $3.5k ≈ 17.5 hrs; Pro $6k ≈ 30 hrs
- $10k implementation pays back in ~2–5 months

Differentiators: vs ChatGPT — "ChatGPT is a tool. MindLab is the installed workflow." vs
agencies — "Agencies build projects. MindLab installs a system that keeps improving." vs
platforms — "CRMs track who you know. VDRs store documents. Research platforms provide sources.
MindLab structures what your firm knows."

Moat: compounding Company Records, tuned advisors, approved knowledge, support history — "the
longer MindLab is used, the more expensive it becomes to go back to scattered memory."

## D. Pricing & Sales Motion

| Offer | Price | Purpose |
|---|---|---|
| Workflow Diagnosis | Free (30 min) | Qualify; identify one workflow |
| Implementation Pilot | $10,000 | Install + calibrate one real workflow, 30–90 days |
| Starter | $2,000/mo | Light support (~8 staff-hrs/mo) |
| Core | $3,500/mo | Standard (~18 staff-hrs/mo) |
| Pro | $6,000/mo | High (~35 staff-hrs/mo) |
| Enterprise | $10k+/mo | Custom security, integrations, SLA |

- Capacity-based, not per-workflow: never say "Starter includes 1 workflow"; say plans determine
  team time, AI usage, and service priority.
- The first "yes" = free diagnosis call → $10k pilot on ONE live workflow → convert to monthly.
- Sales framing: "Start with one workflow, not a platform promise." "Run one live company through
  MindLab and compare the output against your current process."

## E. Trust & Governance

Core promise: "Your confidential data stays private to your workspace. MindLab uses it to provide
your service, not to serve other customers. AI outputs are assistive drafts unless your team
approves them. External-facing advisors only answer from approved knowledge."

- Private workspace isolation; no cross-client reuse of confidential data.
- L0–L4 data classification (Public → Customer Internal → Confidential → Restricted → Approved
  External).
- Internal vs External advisor separation; external advisors answer only from approved knowledge,
  with graceful fallback ("I do not have approved information on that yet").
- **Can promise now:** isolation, no cross-customer reuse, human approval gates, role-based
  access, deletion/export process.
- **Must NOT promise yet:** SOC 2 (unless achieved), full regulatory compliance, guaranteed
  accuracy, SSO, full data residency, full enterprise audit logs.
- Vietnam team: frame as execution leverage/high-touch support, never "cheap labor." Internal
  rule: "Lower cost does not justify lower discipline."

## F. Existing Messaging Bank

- "AI prepares. Humans approve. MindLab remembers." (anchor)
- "Turn investment work into institutional memory." (hero)
- "Investment teams do not have a data shortage. They have a memory problem." (problem section)
- "You can use ChatGPT. MindLab installs the workflow."
- Category self-definition: "the intelligence operating layer for investment and wealth teams."
- Suggested CTAs in UI brief: primary "Request a briefing", secondary "See the workflow".
- Workflow copy: "Upload source materials → Generate a review-ready draft → Approve what matters
  → Reuse it in the next workflow."
- Trust strip: "Private workspace boundaries. Source-aware outputs. Human approval before memory."

## G. UI Direction (from ui-generation-brief)

- Should feel like "a serious investment workspace, not a consumer AI app": premium, calm, sharp,
  finance-native, source-aware, human-controlled.
- Vocabulary to use: "Source-backed," "Approved memory," "Review-ready draft," "Company record,"
  "Firm context," "Source gap," "Review queue."
- Vocabulary to avoid: "Revolutionary," "10x," "AI magic," "Autonomous analyst," "ChatGPT for
  finance," "Bloomberg for private markets," "bank-grade security," "SOC 2" (until true).
- Core loop every surface should reflect: **Upload → Generate → Approve → Remember → Reuse.**

(PRODUCT.md in the app repo adds: brand personality "expert, precise, unflashy"; anti-references =
generic AI-SaaS slop, sparse minimalist dashboards, consumer-fintech playfulness,
Bloomberg-terminal hostility; density is a feature, earned through hierarchy.)

## H. Contradictions / Gaps to Manage

1. Broad internal ICP (investment + wealth) vs PE-first landing page — resolve deliberately.
2. "Unlimited workflows" vs capacity limits — always frame as capacity-based.
3. Implementation-led vs SaaS narrative — lead with "installed system," not consulting.
4. "Drafts only" humility vs ROI claims of big time savings — balance: "a draft that saves most
   of the assembly time; sign-off stays with you."
5. No customer logos/testimonials yet — problem articulation + demo must carry proof.
6. Don't quote internal staffing economics or margin targets publicly.
7. ROI hourly assumptions vary — show the formula/calculator, not fixed promises.
8. Wealth expansion (RM Copilot, portals) is future vision — keep off the first page.
