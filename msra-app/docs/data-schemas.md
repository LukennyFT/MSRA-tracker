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
      name: "Atrial fibrillation",
      presentation: "...",   // concise clinical phrase
      investigations: "...",
      treatment: "...",
      // OPTIONAL: fieldLabels (3 strings) overrides the labels for this entry only.
      // OPTIONAL: fields [{label, value}, ...] fully replaces the 3 fixed fields with
      //   any number of sections (used by pharm_paracetamol_od).
    },
  ],
}
```

The four condition fields are plain strings shown in the expand panel. 17 specialties; array order = sidebar order. `fieldLabels` / `fields` are display-only — the underlying keys stay `presentation`/`investigations`/`treatment`, so ids and statuses are never affected.

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
