# Architecture

## Boot sequence

1. Browser loads `index.html`.
2. Vendor scripts load synchronously: React → ReactDOM → Babel → Firebase.
3. `firebase-config.js` runs. It leaves `window.FIREBASE_CONFIG` **unset** by default, so Firebase init is skipped and `FIRESTORE` stays `null` (sync gracefully disabled).
4. `data.js`, `notebook-data.js`, `question-bank-data.js`, `dilemmas-data.js` set `window.SPECIALTIES`, `window.PHASES`, `window.TIPS`, `window.NOTEBOOK`, `window.QBANK`, `window.DILEMMAS`, `window.EXAM_DATE`, `window.PLAN_START`.
5. The inline `<script type="text/babel">` block is compiled by Babel and renders `<App />` into `#root`.

First load takes a second or two (Babel compiles in-browser); afterwards it is near-instant and works offline.

## Views

The tab strip switches six views. Each tab carries an `accent` colour; the CPS tab is teal, the Dilemmas tab is violet — reinforcing the two-paper split.

- **`today`** — detects the current step/week and phase from today's date, shows the day's hours and question target, plus this week's focus systems (including Professional Dilemmas reminders) with one-click jumps into the Tracker.
- **`plan`** — the four phases (Foundation → Consolidation → Intensification → Final Stretch). The weekly-rhythm card recalculates live from the hours/week slider. Phase calendar dates are derived from the chosen exam date.
- **`tracker`** — 19 specialties; each condition has green/yellow/red buttons, search/filter, a day-counter since last status change, and an Apple-Pencil note canvas. In **List** mode conditions are grouped into collapsible **clinical-cluster accordions** (driven by each condition's `cluster` field): each cluster header shows its name, a red/amber/green mini progress bar, per-status counts and a rated/total tally, and can be collapsed (persisted in `msra_tracker_collapsed`); "Collapse all"/"Expand all" act on the whole specialty, and an active search or status-filter force-expands every matching cluster. A **view-mode toggle** switches between **List** and **Constellation** (a skill-tree where each specialty's conditions are placed as stars along a bespoke parametric silhouette). Conditions with a `management` field also show a **stepwise NICE management flowchart** in the expanded card, rendered by the `ManagementFlow` component using Mermaid (`vendor/mermaid.min.js`); it prepends `flowchart TD` + a shared class palette to the stored `def`, then attaches custom dark hover tooltips (from `management.tips`) to each node. Several specialty ids match the `CONSTELLATION_SHAPES` keys (`cardiology`, `respiratory`, `gastro`, `renal`, `endocrinology`, `neurology`, `psychiatry`, `rheumatology`, `dermatology`, `infectious`, `haematology`, `ophthalmology`, `pharmacology`) so those render a custom shape; the rest fall back to `DEFAULT_CONSTELLATION_SHAPE`.
- **`notebook`** — distilled content. Section list / chip strip, topics rendered with the Markdown-lite renderer, bookmarks, cross-section search.
- **`qbank`** (labelled **CPS**) — Clinical Problem Solving question bank. Setup (practice vs mock, section picker, count) → session (lettered options A–E, immediate feedback in practice) → results (overall %, per-section breakdown, per-question review). Sections with no questions are hidden automatically.
- **`dilemmas`** (labelled **Dilemmas**) — Professional Dilemmas SJT. See below.

## Professional Dilemmas engine (`DilemmasView`)

The MSRA-specific addition. Lives in `index.html` just above `App`, with helpers `PD_DOMAINS`, `scoreRanking`, `scoreMBA`, `pdScore`, `ordinal`, `pctColor`.

- **Setup**: choose mode (practice = rationale after each; mock = scores at end), themes (Integrity / Pressure / Empathy, colour-coded), and scenario count.
- **Session** handles two scenario types:
  - `rank` — tap the responses in order from most to least appropriate; each tapped row shows its rank badge. Submit reveals each option's ideal position, colour-coded by closeness (green = exact, amber = off by one, red = further), with per-option rationale.
  - `mba` — select the `pick` most appropriate actions (capped). Submit marks correct/incorrect with rationale.
- **Scoring** (`scoreRanking`): each response earns `max(0, 4 − |chosen − ideal|)`, so near-misses still score — mirroring the real exam's nearness marking. `scoreMBA`: one point per correct selection out of `pick`. Both normalise to a fraction shown as a percentage.
- **Results**: mean appropriateness across scenarios, per-theme breakdown, expandable per-scenario review (your order vs ideal, or your picks vs best, plus rationales and the teaching point).
- **Progress**: `msra_dilemmas_progress = { [scenarioId]: { attempts, bestFrac, lastFrac, lastSeen } }`, persisted and synced exactly like `msra_qbank_progress`.

## localStorage keys

All state is per-device; a subset is also synced via Firestore when enabled.

| Key | Type | Synced? | Notes |
| --- | --- | --- | --- |
| `msra_hours_per_week` | number | ✅ | 3–40, default 14 |
| `msra_view` | string | per-device | which of the six views is open |
| `msra_statuses` | object | ✅ | `{conditionId: "green"\|"yellow"\|"red"}` |
| `msra_status_changed_at` | object | ✅ | `{conditionId: timestampMs}` — drives the day-counter |
| `msra_active_specialty` | string | per-device | last viewed Tracker specialty |
| `msra_tracker_mode` | "list" \| "constellation" | per-device | Tracker view mode |
| `msra_tracker_collapsed` | object | per-device | `{"<specialtyId>::<clusterName>": true}` — collapsed clinical-cluster accordions |
| `msra_qbank_progress` | object | ✅ | `{questionId: {attempts, correct, lastSeen, lastCorrect}}` |
| `msra_dilemmas_progress` | object | ✅ | `{scenarioId: {attempts, bestFrac, lastFrac, lastSeen}}` |
| `msra_notes` | object | not synced (size) | `{conditionId: pngDataUrl}` for Pencil notes |
| `msra_notebook_bookmarks` | object | ✅ | `{topicId: true}` |
| `msra_notebook_section` | string | per-device | last viewed notebook section |
| `msra_exam_date` | `YYYY-MM-DD` | ✅ | chosen exam date; drives the whole timeline. Falls back to `window.EXAM_DATE` |
| `msra_plan_start` | `YYYY-MM-DD` | ✅ | plan anchor (set to today at onboarding). Falls back to `window.PLAN_START` |
| `msra_onboarded` | "1" | per-device | set once onboarding is completed or the device already had state |
| `msra_sync_code` | string | n/a | the 16-char Firestore document key, e.g. `m7k3-l9xq-pd4t-r8sy` |
| `msra_pen_only` | "0" \| "1" | per-device | palm-rejection toggle on the Pencil canvas |

To add a synced field, update **both** the `onSnapshot` reader and the debounced writer in `App` (the `dilemmasProgress` field shows the full pattern — search for it).

## Adaptive plan & timeline

The plan is intrinsically **22 steps** (4 phases over "weeks" 1–22). Those steps are mapped onto the real calendar between `PLAN_START` and `EXAM_DATE` by `setTimeline()`, so the plan **compresses or stretches** to whatever time the user has. `DAYS_PER_STEP = PLAN_TOTAL_DAYS / 22`. Displayed week numbers are scaled to real calendar weeks via `realWeekOf()`. The exam date is user-chosen at onboarding (or via the ✎ edit button) and is a synced field.

Hour/question scaling per phase: `scale = userHoursPerWeek / (5·weekdayHrsBase + 2·dayOffHrsBase)`; all displayed numbers are `base · scale`. A feasibility ratio against the total baseline drives the colour-coded header indicator.

## Markdown-lite renderer

`MarkdownLite` supports: `## h3`, `### h4`, `- `/`* ` bullets, `**bold**`, `*italic*`, `` `code` ``, `> quote`, `---` rule, pipe tables with a `|---|` separator row, and blank-line paragraph breaks. Not supported: nested lists, links, images, code fences. Avoid backticks inside topic content (they would break the template literal).

## Apple Pencil canvas

`NoteCanvas` opens full-screen when a condition's "Add notes" is tapped. Pointer events with pressure, pen-only palm rejection (`msra_pen_only`), pen/highlighter/eraser tools, 20-step undo, saved as a PNG data URL to `msra_notes[conditionId]`. Notes are per-device only (PNGs can exceed Firestore's 1 MB document limit).

## Sync

When a real Firebase config is supplied (see `docs/deployment-and-sync.md`), `App` opens `db.collection("sync").doc(syncCode)` with an `onSnapshot` reader and a debounced writer, guarded by `applyingRemote` to avoid echo loops. Notes live in a `notes` sub-collection. Without a config, `FIRESTORE` is `null`, the Sync button shows a neutral state, and everything still works locally.
