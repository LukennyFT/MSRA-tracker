# The Toggle Project

Bringing every Tracker condition up to **three complete reading registers** — Brief, Standard and Detailed — and giving every genuine condition a **Complications** row.

Units of work are called **sets**, one per specialty. (Deliberately not "batches" — that word belongs to the Notebook project.)

---

## The target state for one condition

```js
{
  id: "endo_addisons",
  depth: "detailed",          // the base fields below are the DETAILED register
  standard: { …8 fields },    // ~190–230 chars/field, HFpEF register
  brief:    { …4 core fields },// ~110 chars/field
  complications: "…",         // required on genuine conditions
  keyFacts: "…", epidemiology: "…", …   // the base = detailed, ~480 chars/field
}
```

**Every condition ends at `depth: "detailed"`** with authored `standard` and `brief` alongside. That is what Neurology looks like now and it is the pattern for the whole project.

Registers, measured from the finished Neurology set:

| Register | Fields | Chars/field | Measured band |
| --- | --- | ---: | --- |
| Brief | core 4 | ~110 | — |
| Standard | 7 base fields | **~200** | **150–230, enforced by script** |
| Detailed | 7 base fields | ~480 | — |

Standard is measured over the seven base fields **excluding complications**, so it compares directly with the HFpEF reference of 192 chars/field.

**Topic-style entries are excluded from Complications** — they are processes, concepts and drugs, not diseases. There are 49: `pharmacology` (23), `public_health` (10), `reproductive` (4), `paediatrics` (4), plus `psych_risk`, `haem_anticoag`, `id_notifiable`, `id_abx_choice`, `immuno_hypersensitivity`, `immuno_allergy_testing`, `genetics_inheritance`, `genetics_counselling`. They may still gain registers.

---

## Set order

Sets 1–3 were chosen by the user. The rest are ordered by exam weight first, then by size, so the highest-yield material is finished earliest.

| Set | Specialty | Genuine conditions | Need complications | At brief base | Status |
| ---: | --- | ---: | ---: | ---: | --- |
| 0 | Neurology | 45 | 0 | 0 | ✅ done 2026-08-09 |
| 1 | Endocrinology & Metabolic | 42 | 36 | 26 | ✅ done 2026-08-09 |
| **2** | **Cardiovascular** | **63** | **62** | **48** | **in progress — 16/63** |
| 3 | Gastroenterology & Nutrition | 53 | 44 | 36 | pending |
| 4 | Respiratory | 27 | 27 | 16 | pending |
| 5 | Renal & Urology | 27 | 26 | 24 | pending |
| 6 | Infectious Diseases | 37 | 36 | 35 | pending |
| 7 | MSK & Rheumatology | 28 | 28 | 27 | pending |
| 8 | Dermatology | 37 | 37 | 37 | pending |
| 9 | Paediatrics & Child Health | 23 | 23 | 20 | pending |
| 10 | Reproductive & Sexual Health | 22 | 22 | 21 | pending |
| 11 | Haematology | 19 | 19 | 19 | pending |
| 12 | Ophthalmology | 25 | 24 | 24 | pending |
| 13 | ENT | 18 | 18 | 18 | pending |
| 14 | Genetics | 19 | 16 | 16 | pending |
| 15 | Psychiatry & Mental Health | 15 | 15 | 15 | pending |
| 16 | Immunology & Allergy | 9 | 9 | 8 | pending |
| 17 | Pharmacology + Public Health | 0 | 0 | — | registers only, no complications — decide later whether worth doing |

Why this order after the user's first three: **Respiratory and Renal** are high-yield and mid-sized, so they convert quickly. **Infectious, Rheumatology and Dermatology** are large but mostly brief-register, so they are the heaviest writing and sit in the middle where momentum helps. The small specialist sets are last because they are quick wins that can absorb whatever time is left.

---

## How to run a set

1. **List the specialty** with cluster, `depth`, chars/field and whether `complications` exists.
2. **Work cluster by cluster**, not alphabetically — clinical neighbours share content and it keeps contrasts sharp (e.g. the thyroid causes in uptake order).
3. For each condition produce, in one pass: **detailed base**, **standard**, **brief**, **complications**.
   - Where the base is already brief-register, the existing text usually survives almost intact as the `brief` object — reuse it rather than rewriting.
   - Where the base is already detailed, only `standard` and `brief` are needed.
4. **Inject by script, never by hand.** `scratchpad/inject_registers.py` handles `standard`/`brief`; a sibling script handles rewriting the base to detailed and flipping `depth`. Both assert before writing.
5. **Verify**: balance `0/0/0`, `node --check`, unique ids, zero duplicate top-level keys, every `standard` complete at 8 fields and every `brief` at 4, then a live check in the app.
6. **Update** this file's status column and `content-status.md`, then give the re-upload list.

### Script safety rules (learned the hard way — see the memory file)

- Assert **before** opening the file for writing, so a failed check leaves it untouched.
- Scan the **whole** condition object for a key, not just the part before `cluster:`, and assert the key appears exactly once.
- For pure reorders, assert the id multiset **and** total byte length are unchanged.

---

## ✅ Standard-register drift — found and corrected (2026-08-09)

The brief specifies Standard as "generally the same amount of text as in the HFpEF condition", i.e. **192 chars/field, 1,345 total**. The register drifted upward set by set until it was caught by measurement:

| Set | Before | After |
| --- | ---: | ---: |
| Neurology | 229 | **217** |
| Endocrinology | 239 | **217** |
| Cardiovascular (first 16) | 298 | **217** |
| **All 103** | 249 | **217** — range 183–230, **0 outside band** |

The clearest symptom was that **HFpEF's own authored Standard had reached 266 chars/field**, when its original text at 192 literally defined the target; it is now 230. Brief (107) and Detailed (457) were on spec throughout — the drift was confined to Standard.

**Guard now in place.** Both `inject_registers.py` and `upgrade_condition.py` measure Standard over the **7 base fields** (excluding complications, so it is directly comparable to the HFpEF reference) and warn outside **150–230**. The previous bands were 120–300 and 140–300, wide enough to wave 298 through unremarked.

**⚠️ A mechanical trim was tried and rejected — do not repeat it.** Auto-dropping trailing sentences from over-long fields generated 264 candidates, but review showed **124 of them removed critical content**: the *"correct by NO MORE than 10 mmol/L in 24 hours"* rule from SIADH, *"ANTITHYROID DRUGS ARE NOT INDICATED"* from De Quervain's, *"do NOT biopsy"* from phaeochromocytoma, and the familial hypocalciuric hypercalcaemia *"must not be operated on"* warning. These fields end with their punchline, which is exactly what a tail-trim removes. **Tighten by hand.**

`patch_standard.py` was written for this job: it replaces individual fields inside a `standard` object, leaves the base text, `brief`, `management` and everything else untouched, and **refuses any replacement that is not shorter than what it replaces** — which repeatedly caught fields pasted back unchanged.

## Progress log

- **2026-08-09 — Set 0 (Neurology) complete.** All 45 have detailed base + standard + brief + complications. Engine, `depth` audit of all 558 entries, and namespaced highlight spans shipped the same day.
- **2026-08-09 — Set 2 (Cardiovascular) STARTED, 16 of 63 done.** Three clusters complete: **Blood pressure** (2), **Coronary artery disease** (4) and **Heart failure & cardiomyopathies** (10). All 24 cardiology flowcharts preserved. 13 of the 16 needed detailed text written from scratch.
  - Registers for these 16: brief **112**, standard **298**, detailed **511** chars/field — see the drift note above; standard is the one off spec.
  - Remaining clusters, in order: **Arrhythmias & conduction disease (16)**, Valvular heart disease (9), Endocardial/myocardial/pericardial (5), Congenital (5), Aortic & peripheral arterial (8), Venous & thromboembolic (4).
  - Verified: balance 0/0/0, `node --check`, 558 unique ids, 0 duplicate top-level keys across all 558 objects, 0 field defects across the 16, and a live check of Hypertrophic cardiomyopathy showing 4 rows at Brief, 8 at Standard and 8 at Detailed, all authored.
- **2026-08-09 — Set 1 (Endocrinology) COMPLETE.** All 42 conditions now carry a detailed base, an authored `standard`, an authored `brief` and a `complications` row. Worked in four passes by cluster: Diabetes + Pituitary (10), Thyroid (10), Adrenal (8), then Parathyroid & bone + MEN + Electrolytes + Metabolic (14). 26 of the 42 had to have their detailed text written from scratch, because their base was at brief register; 5 were expanded from standard; 11 already had detailed text and needed only the shorter registers. All 20 existing flowcharts were preserved through the rewrite.
  - Registers achieved: **brief 103 chars/field**, **standard 239 over 7 fields**, **detailed 436**. Standard runs above the HFpEF reference of 192 partly because every entry now also carries Complications.
  - A second script was needed alongside `inject_registers.py`: **`upgrade_condition.py`** rewrites the base fields to detailed register, flips `depth`, and inserts standard/brief/complications while preserving `management`, `cluster`, `name` and `id` untouched. It carries existing `complications` through when the batch omits it, so good text is never silently overwritten.
  - Verified: balance 0/0/0, `node --check`, 558 unique ids, **0 duplicate top-level keys** across all 558 objects, 0 field defects across all 42 endocrine entries, and a live check of Addison's disease showing 8 rows at Detailed (381-char keyFacts), 8 at Standard (218) and 4 at Brief (100), all authored with no fallback markers.
