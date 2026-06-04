# MSRA Study App — Project Guide

## What this is

A personal study web app for the **Multi-Specialty Recruitment Assessment (MSRA)**. It is built as a single-page React application that compiles its JSX in the browser with Babel, persists everything to `localStorage`, and can optionally sync across devices with Firebase Firestore. It runs fully offline.

The app is a stylistic re-skin and content rebuild of an earlier MRCP Part 1 study app — the engine (canvas notes, adaptive plan maths, sync, Markdown-lite renderer, question-bank logic) is shared, but the visual identity, the taxonomy, and all the content are MSRA-specific.

The MSRA has **two papers**, and the app is organised around both:

- **Clinical Problem Solving (CPS)** — the clinical-knowledge paper (the `CPS` tab). Single-best-answer questions across the curriculum.
- **Professional Dilemmas (PD)** — the situational-judgement paper (the `Dilemmas` tab). Ranking and "pick the best actions" scenarios with nearness scoring.

Six views in total, switched from the top tab strip:

| Tab | View | Purpose |
| --- | --- | --- |
| 📍 Today | `today` | Auto-detected day/week/phase, today's hour & question target, this week's focus systems, Professional Dilemmas reminders. |
| 🗺️ Plan | `plan` | The 4-phase adaptive revision plan, recalculated live from the hours/week slider. |
| ✅ Tracker | `tracker` | 17 clinical specialties; red/amber/green status per condition, search/filter, day-counter, Apple-Pencil notes, and a Constellation skill-tree mode. |
| 📓 Notebook | `notebook` | Distilled high-yield content, Markdown-lite, bookmarks, search. |
| 🩺 CPS | `qbank` | Clinical Problem Solving question bank (practice / mock). |
| ⚖️ Dilemmas | `dilemmas` | Professional Dilemmas SJT practice (practice / mock). |

## Visual identity (distinct from the MRCP app)

- **Typography**: modern system sans (`system-ui` / `-apple-system`) for body, `Avenir Next` for display headings, a clean monospace for technical labels. (The MRCP app used Georgia/Palatino serif — deliberately changed.)
- **Palette**: deep slate-indigo background (`#0a0e1a`), slate cards (`#141a2b`), **teal** primary accent (`#2dd4bf`) with a slate→teal→cyan header gradient.
- **Two-paper colour coding**: CPS reads in the **teal/blue** family; Professional Dilemmas has its own **violet** identity (`#a78bfa`), with the three SJT themes colour-coded (Integrity violet, Pressure amber, Empathy rose). Keep this split when adding UI.

## Project locations

- **Working directory**: `/Users/lukennytinta/Documents/Studying for MSRA/msra-app/`
- **Run locally**: `python3 server.py` then open `http://localhost:8077` (or any static server / open `index.html` directly).
- **Firebase / hosting**: not yet set up. Sync is disabled until a real config is added (see `docs/deployment-and-sync.md`).

## Critical conventions

**Style** (carried over from the MRCP project — the user gave explicit feedback on this; adhere strictly to it in the **Notebook**):

1. **Use full sentences**, not telegraphic shorthand strung together with em-dashes.
2. **Spell out every abbreviation the first time it appears** — e.g. write "inhaled corticosteroid (ICS)" first, then "ICS".

The **Tracker** condition fields (`presentation` / `investigations` / `treatment`) are the exception: they use concise clinical phrases, matching the existing data and the limited card space. Full-sentence prose lives in the Notebook. The two fully-written style templates are the `cardiology` notebook topics (`acs_overview`, `heart_failure_overview`) and the `public_health` topics — use them as models.

**Depth**: the user wants to do extremely well. When adding content, include guideline-level detail (drug names, doses, criteria, red flags) rather than only the headline facts.

**Data invariants** (violating these silently breaks saved user data):

- Never change an existing **condition `id`** in `data.js` — `msra_statuses`, `msra_status_changed_at` and `msra_notes` are keyed off them.
- Never change an existing **topic `id`** in `notebook-data.js` — `msra_notebook_bookmarks` is keyed off them.
- Never change an existing **question `id`** in `question-bank-data.js` or **scenario `id`** in `dilemmas-data.js` — `msra_qbank_progress` and `msra_dilemmas_progress` are keyed off them.
- Section and specialty `id`s should stay stable too, because they tie the Tracker, Notebook and CPS question bank together (a CPS question's `section` must match a notebook section id for its name/icon to show).

## Files

```
msra-app/
├── CLAUDE.md               # this guide
├── index.html              # the whole app — HTML + inline JSX (Babel)
├── data.js                 # SPECIALTIES (tracker), PHASES (plan), TIPS, EXAM_DATE, PLAN_START
├── notebook-data.js        # NOTEBOOK (sections + topics + Markdown-lite content)
├── question-bank-data.js   # QBANK.questions — CPS single-best-answer items
├── dilemmas-data.js        # DILEMMAS.scenarios — Professional Dilemmas SJT items
├── firebase-config.js      # placeholder; leaves sync disabled until filled in
├── server.py               # tiny static server for local running
├── vendor/                 # react, react-dom, babel, firebase (all local, offline)
└── docs/                   # architecture, data-schemas, content-status, deployment-and-sync
```

## Context file index (load on demand, in `docs/`)

| File | When to load | What it covers |
| --- | --- | --- |
| `docs/architecture.md` | Touching `index.html` or component logic | Boot sequence, the six views, the Professional Dilemmas engine, localStorage keys, Markdown-lite, Pencil canvas, adaptive plan maths. |
| `docs/data-schemas.md` | Editing any `*-data.js` | Exact shapes of `SPECIALTIES`, `PHASES`, `NOTEBOOK`, `QBANK`, `DILEMMAS`, including PD scoring. |
| `docs/content-status.md` | "Pick up where we left off" — start of every content session | What is written vs scaffolding per section; counts; most recent additions. **Keep this current.** |
| `docs/deployment-and-sync.md` | Hosting or Firebase questions | How to enable cross-device sync, GitHub Pages, Firestore document shape. |

## Quick recipes

**Add a Tracker condition** → `data.js`, append to the right specialty's `conditions` with a unique `id`; update `docs/content-status.md`.

**Add a Notebook topic** → `notebook-data.js`, replace a `_pending_*` placeholder (or append) with a unique topic `id`; apply the full-sentence style; update `docs/content-status.md`.

**Add a CPS question** → `question-bank-data.js`, append to `QBANK.questions`; tag `section` with a notebook/specialty id; `answer` is the zero-based index of the correct option.

**Add a Professional Dilemmas scenario** → `dilemmas-data.js`, append to `DILEMMAS.scenarios`. For `type:"rank"` give 5 `options` and a `correctOrder` (option indices, most→least appropriate). For `type:"mba"` give the `options`, a `correct` array and `pick`. `rationales` is index-aligned to `options`. See `docs/data-schemas.md`.

**Verify file integrity after editing a data file**:

```sh
python3 -c "import re,sys; c=open(sys.argv[1]).read(); s=re.sub(r'\`[\s\S]*?\`','\"\"',c); print('braces',s.count('{')-s.count('}'),'parens',s.count('(')-s.count(')'),'square',s.count('[')-s.count(']'))" data.js
```

All three counts should be `0`.

## Behaviour: keep the docs current

When you change something that affects a domain below, update the relevant doc before ending your response:

- Added/removed a notebook section or topic, or a tracker condition → `docs/content-status.md`.
- Changed a localStorage key, a synced field, or a component → `docs/architecture.md`.
- Changed a data shape → `docs/data-schemas.md`.
