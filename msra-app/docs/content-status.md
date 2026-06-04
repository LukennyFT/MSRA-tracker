# Content Status

The most important file to read at the start of a content session: it records what is written versus scaffolding. **Keep it current** when you add content.

_Last updated: initial build._

## Tracker (`data.js`) — complete

All 17 specialties populated, **193 conditions** total. Each condition has `presentation` / `investigations` / `treatment` (Pharmacology uses relabelled fields; `pharm_paracetamol_od` uses a 3-section `fields` array).

| Specialty | id | Conditions |
| --- | --- | ---: |
| Cardiovascular | `cardiology` | 13 |
| Respiratory | `respiratory` | 10 |
| Gastroenterology & Nutrition | `gastro` | 13 |
| Endocrinology & Metabolic | `endocrinology` | 12 |
| Renal & Urology | `renal` | 11 |
| Neurology | `neurology` | 12 |
| Psychiatry & Mental Health | `psychiatry` | 12 |
| MSK & Rheumatology | `rheumatology` | 11 |
| Dermatology | `dermatology` | 12 |
| ENT | `ent` | 10 |
| Ophthalmology | `ophthalmology` | 10 |
| Infectious Diseases | `infectious` | 10 |
| Haematology & Immunology | `haematology` | 11 |
| Reproductive & Sexual Health | `reproductive` | 13 |
| Paediatrics & Child Health | `paediatrics` | 12 |
| Pharmacology & Prescribing | `pharmacology` | 11 |
| Public Health, Ethics & Evidence | `public_health` | 10 |

## Notebook (`notebook-data.js`) — partially written

17 sections (ids mirror the Tracker specialties). **6 sections written (12 topics); 11 sections are scaffolding** holding a single `_pending_*` placeholder each.

**Written:**

- `cardiology` — Acute coronary syndrome, Atrial fibrillation, Heart failure
- `respiratory` — Asthma vs COPD, Pneumonia & CURB-65
- `endocrinology` — Diabetes mellitus, Thyroid disease
- `neurology` — Headache red flags, Stroke & TIA
- `public_health` — Capacity & consent, Confidentiality & disclosure
- `pharmacology` — Safe prescribing principles

**Scaffolding (replace the `_pending_*` topic when you write these):** `gastro`, `renal`, `psychiatry`, `rheumatology`, `dermatology`, `ent`, `ophthalmology`, `infectious`, `haematology`, `reproductive`, `paediatrics`.

Style templates to copy: the three `cardiology` topics and the two `public_health` topics (full sentences, abbreviations spelled out, tables for comparisons).

## CPS question bank (`question-bank-data.js`) — seed set

**34 single-best-answer questions** across all 17 sections (1–3 each). Comfortable seed for practice; expand any section by appending to `QBANK.questions` with a unique `id` and the matching `section` tag.

## Professional Dilemmas (`dilemmas-data.js`) — seed set

**13 scenarios**: 9 ranking + 4 multiple-best-answer, spread across the three themes — Professional Integrity (5), Coping with Pressure (4), Empathy & Sensitivity (4). Expand by appending to `DILEMMAS.scenarios`.

## Suggested next content jobs

1. Write the 11 scaffolded notebook sections (start with the highest-yield: `gastro`, `renal`, `psychiatry`, `paediatrics`, `reproductive`).
2. Grow the CPS bank toward ~10 questions per section.
3. Add more Professional Dilemmas scenarios — aim for an even spread across the three themes and both formats.
