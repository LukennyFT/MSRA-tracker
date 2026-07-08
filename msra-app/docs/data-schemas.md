# Data Schemas

Five globals set across the `*-data.js` files. The `id` fields marked ⚠ must never change once a user has interacted with them.

## `window.SPECIALTIES` (in `data.js`) — the Tracker

```js
{
  id: "cardiology",          // stable; some ids match CONSTELLATION_SHAPES keys
  name: "Cardiovascular",
  icon: "🫀",                 // one emoji
  // OPTIONAL per-specialty display overrides (used by Pharmacology):
  // itemNoun: "topics",      // replaces the word "conditions" in this section
  // fieldLabels: ["⚙️ Mechanism & uses", "⚠️ Adverse effects & monitoring", "💉 Prescribing & safety"],
  conditions: [
    {
      id: "cvs_af",          // ⚠ NEVER CHANGE — keys statuses/notes/timestamps
      cluster: "Arrhythmias & conduction disease", // clinical group; see note below
      name: "Atrial fibrillation",
      // OPTIONAL extended fields — present on genuine CONDITIONS, omitted on
      // "topic" entries. Rendered (when present) ABOVE presentation, in this order:
      keyFacts: "...",        // 💡 the must-know headline
      epidemiology: "...",    // 📊 who gets it
      aetiology: "...",       // 🧬 causes / risk factors
      pathophysiology: "...", // ⚙️ mechanism
      presentation: "...",    // 🩺 concise clinical phrase
      investigations: "...",  // 🔬
      treatment: "...",       // 💊
      // OPTIONAL: fieldLabels (3 strings) overrides the labels for this entry only.
      // OPTIONAL: fields [{label, value}, ...] fully replaces the 3 fixed fields with
      //   any number of sections (used by pharm_paracetamol_od).
      // OPTIONAL: management { def, tips } — a stepwise NICE management flowchart
      //   rendered (Mermaid) in the expanded card; see note below.
    },
  ],
}
```

**`cluster` (required on every condition).** A plain-string clinical-group label. `TrackerView`'s list mode groups the specialty's conditions into collapsible **accordion** sections by this field, in array order (conditions are kept contiguous per cluster, so first-appearance order = clinical order). Cluster membership is display-only and does **not** affect ids or statuses. When adding a condition, set `cluster` to one of the specialty's existing cluster labels (or introduce a new one and place the condition adjacent to its cluster-mates). If a condition ever lacks `cluster` it falls into a trailing "Other" group; if *no* condition in a specialty has one, the list falls back to the old flat view. All 487 conditions currently carry a cluster (see `content-status.md`).

**`management` (optional).** A stepwise **NICE management flowchart** shown at the bottom of the expanded card, only on conditions with a genuine stepwise pathway. Shape: `{ def: "<mermaid body>", tips: { NodeId: "explanation", ... } }`.
- `def` is a **Mermaid flowchart body WITHOUT the `flowchart TD` header** and without `classDef` lines — the `ManagementFlow` component (in `index.html`) prepends `flowchart TD` + a shared class palette. Style nodes with the inline classes `:::start` (presenting problem, pink), `:::process` (blue stage), `:::decision` (blue diamond — use `{"..."}`), `:::good` (green drug/action/endpoint), `:::warn` (amber caution/escalate), `:::danger` (red emergency/urgent). Node ids are single letters/short tokens, reused freely across conditions (each diagram renders independently). Keep node **labels short** (detail goes in the tip). Avoid `;`, `&`, and unescaped `"` inside labels.
- `tips` maps a node id → a one-sentence guideline-level explanation shown as a **dark hover tooltip** (matches the Mermaid tooltip look). Add tips to the clinically important nodes.
- `source` (optional) — the small italic label after "🗺️ Stepwise management" (defaults to `"NICE"`). Set it when the pathway isn't NICE, e.g. `"Obstetric emergency"` on `repro_afe`.
- Rendered by Mermaid (`vendor/mermaid.min.js`, loaded in `index.html`). Authoring/injection is scripted — see `content-status.md`, `scratchpad/inject_management.py` (adds `management` to an existing condition) and `scratchpad/insert_conditions.py` (adds a whole new condition after an anchor). 109 conditions currently carry one.

All condition fields are plain strings shown in the expand panel; array order = sidebar order. `TrackerView` renders the four extended fields only when present, so adding them to non-conditions ("topics") is optional — currently **179 of 215 entries** carry them, and the 36 that do not are the topic-style entries (all of Pharmacology and Public Health, plus process/concept entries such as `genetics_inheritance`, `immuno_allergy_testing`, `id_abx_choice`, `repro_contraception`, `paeds_milestones`, `haem_anticoag`). `fieldLabels` / `fields` are display-only — the underlying keys stay `presentation`/`investigations`/`treatment`, so ids and statuses are never affected.

## `window.PHASES` (in `data.js`) — the Plan

```js
{
  id: 1, label: "Phase 1", name: "Foundation",
  weeks: "Weeks 1–7",            // display string
  weekStart: 1, weekEnd: 7,      // step-space (1–22), used by phase detection
  dateStart: "2026-10-19", dateEnd: "2026-12-06",  // display defaults; live dates derived from the timeline
  color: "#2dd4bf", accent: "#0f3b3a",
  weekdayHrsBase: 1.5, dayOffHrsBase: 3,           // baseline hours (for adaptive scaling)
  qsPerWeekdayBase: 25, qsPerDayOffBase: 60,
  goal: "...",                    // full-sentence prose
  strategy: ["...", "..."],       // strings
  systems: [
    { name: "Cardiovascular", priority: "HIGH", weeks: "Wks 1–2", trackerId: "cardiology" },
    { name: "Professional Dilemmas — familiarisation", priority: "HIGH", weeks: "Wks 1–7" }, // no trackerId
  ],
}
```

`priority` is `HIGH | MED | LOW | EXAM`. `weeks` on a system must keep the `Wk N` / `Wks N–M` format (parsed by `systemMatchesWeek`). `trackerId` is optional — when present it enables the "Open in Tracker →" jump. The four phases span steps 1–7 / 8–14 / 15–19 / 20–22.

## `window.TIPS` (in `data.js`)

Array of `{ icon, title, body }` shown in the Plan tips panel. Loose schema; just strings.

## `window.EXAM_DATE` / `window.PLAN_START` (in `data.js`)

Two `YYYY-MM-DD` strings at the end of the file (`"2027-01-08"` / `"2026-10-19"`). These are only **defaults**; the live values are user-chosen and stored in `localStorage.msra_exam_date` / `msra_plan_start`.

## `window.NOTEBOOK` (in `notebook-data.js`)

```js
{ sections: [
  { id: "cardiology", name: "Cardiovascular", icon: "🫀",
    topics: [
      { id: "acs_overview",        // ⚠ NEVER CHANGE — keys bookmarks
        name: "Acute coronary syndrome",
        content: `## Heading ...` } // Markdown-lite template literal; no backticks inside
    ] },
] }
```

Section ids match the Tracker specialty ids and the CPS question `section` tags. A not-yet-written section holds a single placeholder topic whose id is prefixed `_pending_` (e.g. `_pending_renal`); **replace** the placeholder when you populate the section — do not keep it alongside real topics.

## `window.QBANK` (in `question-bank-data.js`) — CPS paper

```js
{ questions: [
  { id: "cps_card_002",            // ⚠ NEVER CHANGE — keys msra_qbank_progress
    section: "cardiology",         // must match a notebook/specialty id
    topic: "Acute coronary syndrome",
    stem: "...",
    options: ["...", "...", "...", "...", "..."],  // 4–5 options
    answer: 1,                     // ZERO-BASED index of the correct option
    explanation: "..." },
] }
```

A section with no questions simply does not appear in the CPS picker.

## `window.DILEMMAS` (in `dilemmas-data.js`) — Professional Dilemmas paper

```js
{ scenarios: [
  // RANKING scenario:
  { id: "pd_prs_001",              // ⚠ NEVER CHANGE — keys msra_dilemmas_progress
    type: "rank",
    domain: "pressure",            // integrity | pressure | empathy
    stem: "...",
    options: ["A...", "B...", "C...", "D...", "E..."],   // usually 5
    correctOrder: [2, 0, 3, 4, 1], // option indices, MOST → LEAST appropriate
    rationales: ["why A...", "why B...", ...],  // index-aligned to options
    explanation: "overall teaching point" },

  // MULTIPLE-BEST-ANSWER scenario:
  { id: "pd_emp_003",
    type: "mba",
    domain: "empathy",
    pick: 3,                       // how many to choose
    stem: "...",
    options: ["...", ... up to ~8 ...],
    correct: [0, 2, 4],            // indices of the best options (order irrelevant)
    rationales: [...],             // index-aligned to options
    explanation: "..." },
] }
```

**Domains** map to `PD_DOMAINS` in `index.html`: `integrity` (violet), `pressure` (amber), `empathy` (rose). A domain with no scenarios is hidden from the setup picker.

**Scoring** (in `index.html`):

- `rank` — `scoreRanking(userOrder, correctOrder)`: each response earns `max(0, 4 − |chosenPos − idealPos|)`; max is `5 × 4 = 20`; the fraction is shown as a percentage. Near-misses score, exact placements score full.
- `mba` — `scoreMBA(selectedSet, correct)`: one point per correct selection; max is `pick`.

`rationales` is always aligned to the **original `options`** order, not to `correctOrder`.
