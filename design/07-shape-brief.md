# 07 · Confirmed Design Brief — index landing page

Produced by `/impeccable shape`, confirmed by the founder 2026-07-05. This is the build contract
for the index page; it supplements (never overrides) `01`–`06`.

## Interview decisions (locked)

1. **Type route:** specimen sheet first. One HTML review artifact with 2–3 open-source pairings
   in the FT register (editorial news serif + disciplined grotesque, tabular figures
   demonstrated); founder picks; tokens keep a later swap to licensed Financier/Söhne trivial.
2. **Accent:** trial **both** ledger green (`#0E5940` family) and oxblood (`#6E1423` family) in
   the hero + stat bar; founder picks at the foundations review.
3. **Build scope after the pick:** full 11-section production page in one pass — locked copy,
   three signature graphics, desktop + 390px, FAQ + form, reduced-motion pass. No further gates.

## Direction (as confirmed)

- **Color strategy: Restrained** — ink on paper-white, one accent ≤10% used like a highlighter
  (approve/gate semantics). Deliberate register override: restraint IS the commitment here;
  typography and evidence density carry identity.
- **Scene sentence:** an MD opens a forwarded link on a phone between meetings, in daylight,
  skeptical, deciding in ten seconds whether this is another AI toy — forces the light paper
  ground.
- **Ground:** off-white at the trial lightness, but chroma whisper steered toward the *accent's
  own hue* (never default-warm cream). Ink `#141413` family. All tokens OKLCH-documented with
  contrast ratios.
- **Anchors:** Pentagram case-study grids · Ramp × Bakken & Baeck bento vignettes · FT print
  grid.
- **Lane guard:** the editorial lane is founder-locked identity; the failure mode to police is
  serif-plus-hairline scaffolding *without* the dense recreated product evidence and the three
  signature graphics that earn it.
- **Numbered sections:** a named brand system (the 11 sections are one sequential argument — the
  H2 spine — echoing R3 discipline), set in tabular figures inside the hairline rule system. The
  S1 eyebrow and the two `WORKFLOW` labels are the only kicker uses.

## Asserted defaults

Square-shouldered radii (0–2px) everywhere incl. CTA · sticky nav shrinks, never floats as a
pill · FAQ as native `<details>` accordion, keyboard operable · form posts to a stub (endpoint +
calendar wiring flagged TODO, never faked) · one `tokens.css` + component classes per `05` ·
vignette content verbatim from `06` sample pack · signature graphics as semantic HTML/SVG in the
site's own type · motion: static designed first, at most one hero draft→approved transition +
one-time 4px reveals, `prefers-reduced-motion` honored.

## Specimen candidates (foundations review)

- **A.** Source Serif 4 (display opsz) + Schibsted Grotesk
- **B.** Besley + Archivo
- **C.** Newsreader (display opsz) + Hanken Grotesk — flagged: Newsreader is a saturated
  AI-default face in 2026; included because the founder's own doc sanctions it as fallback. Let
  the specimen decide.
- `--font-data` candidate for tabular moments where the grotesque lacks `tnum`: Spline Sans Mono.

## Review artifact

`design/trials/foundations-review.html` — self-contained page: live hero + stat bar with
pairing (A/B/C) and accent (green/oxblood) toggles, side-by-side accent moment comparison, and
the three full specimens with tabular-figure alignment tests.
