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

- **`today`** — detects the current step/week and phase from today's date, shows the day's hours and question target, plus this week's focus systems (including Professional Dilemmas reminders) with one-click jumps into the Tracker. A **day-type toggle** ("What kind of day is today?" — Zero / On-call / Working / Day off) overrides the automatic weekday/weekend guess for today: it changes today's hours and question target and shows an *adjusted this-week total*. It does **not** move the hours/week slider or the 22-week plan — it is a non-destructive per-day layer (see `msra_day_overrides`).
- **`plan`** — the four phases (Foundation → Consolidation → Intensification → Final Stretch). The weekly-rhythm card recalculates live from the hours/week slider, and carries the same **day-type toggle** for today at its top (shared state with the Today view). Phase calendar dates are derived from the chosen exam date.
- **`tracker`** — 19 specialties; each condition has green/yellow/red buttons, search/filter, a day-counter since last status change, an Apple-Pencil note canvas, and **marker-pen text highlighting** of the condition's field text (select text → floating four-colour picker; see the Tracker text highlighting section below). In **List** mode conditions are grouped into collapsible **clinical-cluster accordions** (driven by each condition's `cluster` field): each cluster header shows its name, a red/amber/green mini progress bar, per-status counts and a rated/total tally, and can be collapsed (persisted in `msra_tracker_collapsed`); "Collapse all"/"Expand all" act on the whole specialty, and an active search or status-filter force-expands every matching cluster. A **view-mode toggle** switches between **List** and **Constellation** (a skill-tree where each specialty's conditions are placed as stars along a bespoke parametric silhouette). Conditions with a `management` field also show a **stepwise NICE management flowchart** in the expanded card, rendered by the `ManagementFlow` component using Mermaid (`vendor/mermaid.min.js`). The rendering itself lives in **`FlowDiagram`**, which prepends `flowchart TD` + a shared class palette (`MERMAID_CLASSDEFS`) to the stored `def`, then attaches custom dark hover tooltips (from `management.tips`) to each node by parsing Mermaid's generated `flowchart-<nodeId>-<n>` element ids. `ManagementFlow` wraps it with the header row (title, `source` label, hover hint) and an **⤢ Expand** button that opens **`FlowchartModal`** — a full-screen view of the same diagram with zoom controls (50%–300% in 25% steps), drag-to-pan, and the same tooltips. The modal is rendered through `ReactDOM.createPortal` into `document.body`, so no ancestor transform or `overflow` can clip it, and it closes on the ✕, a backdrop click or **Escape** (with `+` / `-` / `0` as zoom shortcuts); it locks `document.body.style.overflow` while open and restores the previous value on close. **Zoom does not re-render the diagram** — `applyFlowZoom` restyles the existing SVG's width from its cached viewBox width (`dataset.baseW`), so scroll position and the attached tooltip handlers survive. The inline card copy passes `zoom={null}`, which leaves Mermaid's own responsive `max-width` sizing untouched, so the collapsed view is unchanged. `ManagementFlow` owns the modal state itself because its call site sits inside a `.map()` over conditions, where a hook cannot live. Several specialty ids match the `CONSTELLATION_SHAPES` keys (`cardiology`, `respiratory`, `gastro`, `renal`, `endocrinology`, `neurology`, `psychiatry`, `rheumatology`, `dermatology`, `infectious`, `haematology`, `ophthalmology`, `pharmacology`) so those render a custom shape; the rest fall back to `DEFAULT_CONSTELLATION_SHAPE`.
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
| `msra_notes` | object | ✅ (own `notes` subcollection, per-note — PNGs too big for the main doc) | `{conditionId: pngDataUrl}` for Apple-Pencil handwritten notes |
| `msra_text_notes` | object | ✅ (rides in the main sync doc as `textNotes` — small) | `{conditionId: string}` for keyboard/typed notes; shown as a textarea ABOVE the handwriting box |
| `msra_tracker_density` | "brief" \| "standard" \| "detailed" | ✅ (main sync doc as `density`) | Tracker reading density. Synced, unlike `msra_tracker_mode`, because the register you read a condition at is a study decision rather than a visual preference |
| `msra_density_pins` | object | ✅ (main sync doc as `densityPins`) | `{conditionId: level}` — per-card override of the global density |
| `msra_highlights` | object | ✅ (rides in the main sync doc as `highlights` — small) | `{conditionId: {"<level>:<fieldKey>": [{s,e,t,c}]}}` — marker-pen highlights on Tracker condition field text. ⚠️ **Keys are namespaced by reading density** (added with the density feature): a span is a character offset into one register's text, so an unnamespaced span would land on the wrong words when the register changes. A **bare** `fieldKey` with no colon is a pre-density span and is surfaced only while the condition's own base register is shown. See the Highlighting section below |
| `msra_day_overrides` | object | ✅ (rides in the main sync doc as `dayOverrides` — small) | `{"YYYY-MM-DD": "zero"\|"oncall"\|"working"\|"dayoff"}` — per-day study-intensity override from the Today/Plan day-type toggle. Today reads its own date key; an absent key = auto (weekday→`working`, weekend→`dayoff`). Set via `setDayType(key, type)` in `App`; hours from `dayTypeHours()`/`dayTypeQs()` (on-call = ⅓ of a working day, `ONCALL_FACTOR`) |
| `msra_notebook_bookmarks` | object | ✅ | `{topicId: true}` |
| `msra_notebook_section` | string | per-device | last viewed notebook section |
| `msra_exam_date` | `YYYY-MM-DD` | ✅ | chosen exam date; drives the whole timeline. Falls back to `window.EXAM_DATE` |
| `msra_plan_start` | `YYYY-MM-DD` | ✅ | plan anchor (set to today at onboarding). Falls back to `window.PLAN_START` |
| `msra_onboarded` | "1" | per-device | set once onboarding is completed or the device already had state |
| `msra_sync_code` | string | n/a | the 16-char Firestore document key, e.g. `m7k3-l9xq-pd4t-r8sy` |
| `msra_pen_only` | "0" \| "1" | per-device | palm-rejection toggle on the Pencil canvas |

To add a synced field, update **both** the `onSnapshot` reader and the debounced writer in `App` (the `dilemmasProgress` field shows the full pattern — search for it).

## Adaptive plan & timeline

The plan is intrinsically **22 steps** (4 phases over "weeks" 1–22). Those steps are mapped onto the real calendar between `PLAN_START` and `EXAM_DATE` by `setTimeline()`, so the plan **compresses or stretches** to whatever time the user has. The exam date is user-chosen at onboarding (or via the ✎ edit button) and is a synced field.

**Weeks are always real 7-day calendar weeks** measured from `PLAN_START`: week *N* begins exactly `7*(N-1)` days in. `getCurrentRealWeek()` returns that week (this is what the user is shown); `stepOfRealWeek(w)` then maps it onto the 22 plan steps, and `getCurrentWeek()` returns that **step** — which is what `getCurrentPhaseIndex()` and `systemMatchesWeek()` consume, since `PHASES` and the systems' `Wks N–M` labels are written in step space. When there is spare time a step is simply held for two consecutive weeks; when time is short, steps are skipped. At exactly 22 weeks the mapping is the identity, so a 22-week plan behaves exactly as originally designed.

`realWeekOf(step)` / `lastRealWeekOf(step)` invert `stepOfRealWeek` **by scanning it directly**, so a displayed week range can never disagree with the week counter. `phaseDatesISO()` derives phase date ranges from those real weeks, so phases always start on a week boundary.

> ⚠️ **Do not compute week boundaries by dividing a millisecond difference by `MS_PER_DAY`.** Two local midnights are an hour apart across a DST change, so a raw division silently loses a day and boundaries drift after the October clock change. Use the `daysBetween(from, to)` and `addDays(d, n)` helpers (defined next to `stripTime`), which round the difference and add days on the calendar respectively.
>
> Earlier versions advanced the week counter every `DAYS_PER_STEP = PLAN_TOTAL_DAYS / 22` days. With a span longer than 22 weeks that made a "week" longer than 7 days (e.g. 8.41 days over a 185-day plan), so the counter drifted later and later against the real calendar and some week numbers were never displayed at all. `DAYS_PER_STEP` is retained only as a descriptive average and no longer drives any boundary.

Hour/question scaling per phase: `scale = userHoursPerWeek / (5·weekdayHrsBase + 2·dayOffHrsBase)`; all displayed numbers are `base · scale`. A feasibility ratio against the total baseline drives the colour-coded header indicator.

**Day-type override.** The Today/Plan day-type toggle lets the user mark what today actually is (`DAY_TYPES`: zero / on-call / working / day off). `dayTypeHours(type, phase, scale)` maps a type to hours — working = `weekdayHrs`, day off = `dayOffHrs`, **on-call = `weekdayHrs · ONCALL_FACTOR` (⅓)**, zero = 0 — and `dayTypeQs` does the same for the question target. The *adjusted this-week* figure is `hoursPerWeek − dayTypeHours(auto) + dayTypeHours(effective)`, so it lowers (or raises, e.g. a weekday marked as a day off) the week's realistic total without touching the slider. Overrides are keyed by local date (`localDayKey`), so they auto-apply only to their day; `autoDayType(date)` is the weekday/weekend default.

## Markdown-lite renderer

`MarkdownLite` supports: `## h3`, `### h4`, `- `/`* ` bullets, `**bold**`, `*italic*`, `` `code` ``, `> quote`, `---` rule, pipe tables with a `|---|` separator row, and blank-line paragraph breaks. Not supported: nested lists, links, images, code fences. Avoid backticks inside topic content (they would break the template literal).

## Apple Pencil canvas

`NoteCanvas` opens full-screen when a condition's "Add notes" is tapped. Pointer events with pressure, pen-only palm rejection (`msra_pen_only`), pen/highlighter/eraser tools, 20-step undo, saved as a PNG data URL to `msra_notes[conditionId]`. Notes are per-device only (PNGs can exceed Firestore's 1 MB document limit).

## Tracker text highlighting

Marker-pen highlighting of the text inside an expanded Tracker condition card. Select any text in a condition field and a floating colour picker appears; tap an existing highlight to recolour or remove it. Four colours (yellow / green / pink / blue, `HL_COLORS`). Notebook topics are **not** covered — this is Tracker-only.

**Storage** — `msra_highlights = { [conditionId]: { [fieldKey]: [ {s,e,t,c}, … ] } }`, riding in the main sync doc as `highlights` (same size class as `textNotes`). `s`/`e` are character offsets into the field's string, `t` is the exact highlighted substring, `c` is a colour id.

- **`fieldKey` is the property name** (`keyFacts`, `epidemiology`, `aetiology`, `pathophysiology`, `presentation`, `investigations`, `treatment`, `complications`), **never the display label** — `fieldLabels` can override labels per condition or per specialty, so labels are not stable. Conditions using a custom `fields` array key by index (`f0`, `f1`, …).
- **Both the offsets and the text are stored on purpose.** Condition content in `data.js` is rewritten as the app's content grows, which shifts every stored offset. `hlResolve()` prefers the offsets, falls back to re-finding the stored text, and drops a highlight only when its text has gone entirely — so a content re-upload degrades gracefully. Verified by inserting 22 characters ahead of two highlights and confirming both re-anchored onto the same words.
- **`hlNormalise()` rebases stored spans onto the current text before any write.** Without it, an edit made after the source text changed would mix stale stored offsets with the live selection's offsets and land the highlight in the wrong place.
- Empty span arrays and empty conditions are **pruned**, so the full-document Firestore write does not accumulate dead keys.

**Components and helpers** (all immediately above `TrackerView`): `HighlightableText` renders a field as plain text plus `<mark>` runs and carries the `data-hl-cond` / `data-hl-field` attributes the selection handler reads; `HighlightToolbar` is the floating picker, portalled to `<body>` so no ancestor `overflow` clips it, clamped to the viewport in both axes. `hlSubtract` / `hlAdd` handle overlap — a new highlight subtracts from whatever is under it, then merges touching runs of the same colour.

**Interaction** — `TrackerView` listens to `document`'s **`selectionchange`** (debounced 160 ms) rather than a pointer event, so it works for both mouse drags and the iPad's long-press-and-drag selection handles. A `pointerdown` anywhere outside the toolbar dismisses it. The toolbar calls `preventDefault` on `mousedown` so clicking it does not clear the selection.

## Sync

When a real Firebase config is supplied (see `docs/deployment-and-sync.md`), `App` opens `db.collection("sync").doc(syncCode)` with an `onSnapshot` reader and a debounced writer, guarded by `applyingRemote` to avoid echo loops. Notes live in a `notes` sub-collection. Without a config, `FIRESTORE` is `null`, the Sync button shows a neutral state, and everything still works locally.

> ⚠️ **The debounced writer MUST be a full-document `set(payload)` — never `set(payload, { merge: true })`.** Firestore's `merge: true` DEEP-merges nested map fields, so a key **removed** from a map (clearing a condition's RAG status so `statuses` no longer has that id, un-bookmarking a topic, etc.) is **not** deleted server-side. The `onSnapshot` listener then echoes the stale key back and the change silently reverts ~1s later (this was a real bug: clearing a RAG colour "un-cleared" itself after a moment — fixed 2026-07-26). The debounced write already contains the **complete** app state, so a full-document replace is correct and lets deletions propagate; notes are a sub-collection and are unaffected. This is verifiable against the live SDK: seed `{statuses:{a,b}}`, then `set({statuses:{a}}, {merge:true})` leaves `b` on the server, whereas `set({statuses:{a}})` removes it. The initial `get` + `onSnapshot` reconcile remote → local *before* the writer is armed (`initialUploadDone`), so full-replace does not clobber another device's concurrent edits in normal use.

## Sync: the write race fixed on 2026-08-15 (read before touching sync)

Three user-reported bugs — words disappearing while typing a note, a RAG colour needing several taps to stick, and conditions reverting to unclicked on reopening the app — were **one defect** in the debounced Firestore writer.

The writer effect began `if (applyingRemote.current) return;`. React runs an effect's **cleanup before re-running the body**, so when a remote snapshot landed inside the 700 ms debounce window the cleanup fired `clearTimeout` and killed the pending write, and then the body returned early without rescheduling it. The local change was never sent. Local React state still showed it, so it looked saved until the next snapshot or reload delivered the older server document and overwrote it. `textNotes` rides in the same document, so the same snapshot also replaced in-progress text with the last-written server copy — the disappearing words.

The fix has three parts:

1. **`dirty` ref** — set when local state differs from the server, cleared only when a write succeeds. **The snapshot listener returns early while `dirty` is true**, so remote state can never overwrite unsaved local work. On write failure `dirty` deliberately stays set.
2. **No `applyingRemote` early-return in the writer.** Echoes are now detected by **value**: `lastRemoteDocJson` holds the synced fields as last seen on the server, and the writer skips only when the payload is byte-identical. This removes the timing dependency entirely.
3. **Flush on `visibilitychange`** — the initial load takes the server copy wholesale, so a change still inside the debounce when the app was closed would be lost. It is now written immediately when the page is hidden.

⚠️ **Do not reintroduce an `applyingRemote` guard in the writer**, and do not let the snapshot listener apply state while `dirty` is set. Both re-open the same data-loss path.

**Known limitation, unchanged:** initial load still takes the server document wholesale rather than merging per key by `statusChangedAt`. With the above in place the exposure is small (an edit made offline and never uploaded, then opened elsewhere), but a genuine multi-device merge remains unimplemented.
