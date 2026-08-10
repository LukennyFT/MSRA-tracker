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
| **2** | **Cardiovascular** | **63** | **62** | **48** | **in progress — 46/63** |
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
4. **Inject by script, never by hand.** `scratchpad/apply_registers.py` does the whole job from one JSON payload: it rewrites the base to detailed (or keeps it, if the payload omits `base`), flips `depth`, and inserts `standard`, `brief` and `complications`, splicing `management` back as the **raw source substring** so flowcharts stay byte-identical. Run it with `--dry-run` first. (It replaces the earlier pair `inject_registers.py` / `upgrade_condition.py`, whose behaviour it subsumes.)
5. **Verify**: balance `0/0/0`, `node --check`, unique ids, zero duplicate top-level keys, every `standard` complete at 8 fields and every `brief` at 4, then a live check in the app.
6. **Update** this file's status column and `content-status.md`, then give the re-upload list.

### Script safety rules (learned the hard way — see the memory file)

- Assert **before** opening the file for writing, so a failed check leaves it untouched.
- Scan the **whole** condition object for a key, not just the part before `cluster:`, and assert the key appears exactly once.
- For pure reorders, assert the id multiset **and** total byte length are unchanged.
- Assert the **direction**: a script whose job is to expand must refuse a payload shorter than what it replaces (and vice versa for a shortening script). This applies to the trim files too — when an over-long batch has to be tightened by hand, run the trims through a merge script that asserts every replaced field is shorter, then re-checks the band.
- **Enforce both ends of the detailed band.** `depth: "detailed"` is a label, not evidence: cardiac tamponade carried it at 297 chars/field. The 330 floor caught it.
- **⚠️ Four lines of `data.js` hold TWO condition objects each**, so whole-line replacement would silently delete the sibling. `apply_registers.py` now refuses any line containing more than one `id: "`. The affected pairs are **`cvs_arterial_ulcer` + `cvs_ali`** (in Set 2's remaining *Aortic & peripheral arterial* cluster — split that line before running the script on it), `neuro_trigeminal` + `neuro_iih`, `neuro_status_epilepticus` + `neuro_parkinsons`, and `derm_ichthyosis` + `derm_neuropathic_ulcer`.

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

**Guard now in place.** `apply_registers.py` measures Standard over the **7 base fields** (excluding complications, so it is directly comparable to the HFpEF reference) and **aborts** outside **150–230** — as of 2026-08-10 the band is enforced, not merely warned. The previous bands were 120–300 and 140–300, wide enough to wave 298 through unremarked.

**⚠️ A mechanical trim was tried and rejected — do not repeat it.** Auto-dropping trailing sentences from over-long fields generated 264 candidates, but review showed **124 of them removed critical content**: the *"correct by NO MORE than 10 mmol/L in 24 hours"* rule from SIADH, *"ANTITHYROID DRUGS ARE NOT INDICATED"* from De Quervain's, *"do NOT biopsy"* from phaeochromocytoma, and the familial hypocalciuric hypercalcaemia *"must not be operated on"* warning. These fields end with their punchline, which is exactly what a tail-trim removes. **Tighten by hand.**

`patch_standard.py` was written for this job: it replaces individual fields inside a `standard` object, leaves the base text, `brief`, `management` and everything else untouched, and **refuses any replacement that is not shorter than what it replaces** — which repeatedly caught fields pasted back unchanged.

## Progress log

- **2026-08-10 — Set 2 (Cardiovascular) continued, now 46 of 63.** Two more clusters complete: **Valvular heart disease** (9) and **Endocardial, myocardial & pericardial disease** (5). Worked in four passes — aortic valve (stenosis, sclerosis, regurgitation), mitral valve (stenosis, regurgitation, prolapse), right-sided valves plus rheumatic heart disease, then the endocardial/myocardial/pericardial group.
  - **All 14 needed their detailed text written from scratch.** Thirteen sat at brief register; the fourteenth, cardiac tamponade, was already flagged `depth: "detailed"` but measured only **297 chars/field** — below the 330 floor — so the enforced band caught it and its base was expanded to 570 as part of the pass. Worth remembering: a `depth` label is not evidence the register is right.
  - Registers for these 14: brief **103**, standard **196** (range 189–202, **0 outside band**), detailed **575** chars/field. Cardiovascular as a whole now reads brief 106 / standard 203 / detailed 534; all 133 finished conditions app-wide read brief 106 / standard 212 / detailed 477, still **0 outside band**.
  - **The enforced detailed ceiling did real work this pass.** All five of the endocardial/myocardial/pericardial entries were first drafted at 638–705 chars/field and the script refused the batch. They were tightened BY HAND through a separate trim file whose merge script asserted every field came back shorter — the same directional guard that `patch_standard.py` uses. No trailing-sentence auto-trim was used.
  - Remaining clusters, in order: **Congenital heart disease (5)**, Aortic & peripheral arterial (8), Venous & thromboembolic (4). Note the aortic/peripheral cluster contains the `cvs_arterial_ulcer` + `cvs_ali` shared line — split it before running the injector.
  - Verified: balance 0/0/0, `node --check`, 558 unique ids with the id set unchanged, **0 duplicate top-level keys across all 1,252 objects**, **all 181 flowcharts byte-identical**, **0 conditions changed outside the 14**, 0 field defects, and a live check in the running app of Aortic sclerosis (8 authored rows at Detailed, 3,986 chars; 8 at Standard, 1,926; 4 at Brief, 625) and Pericardial effusion (8 rows at Detailed, 5,064 chars), with no fallback markers.
- **2026-08-10 — Set 2 (Cardiovascular) continued, now 32 of 63.** The **Arrhythmias & conduction disease** cluster (16) is complete: all now carry a detailed base, an authored `standard`, an authored `brief` and a `complications` row. Worked in four passes by clinical grouping — atrial and supraventricular (AF, flutter, SVT, WPW), ventricular (VT, torsades, VF), bradycardia and conduction (bradycardia, heart block, RBBB, LBBB), then channelopathies, syncope and arrest (Brugada, long QT, vasovagal syncope, peri-arrest, cardiac arrest).
  - **12 of the 16 needed their detailed text written from scratch** (11 were at brief register, monomorphic VT at standard); 4 — torsades, VF, bradycardia and heart block — already had detailed bases and needed only the shorter registers plus complications.
  - Registers for these 16: brief **102**, standard **195** (range 184–205, **0 outside the 150–230 band**), detailed **522** chars/field. Cardiovascular as a whole now reads brief 107 / standard 206 / detailed 517; all 119 finished conditions app-wide read brief 106 / standard 214 / detailed 466, with **0 outside the band**.
  - Verified: balance 0/0/0, `node --check`, 558 unique ids with the id set unchanged, **0 duplicate top-level keys across all 1,224 objects** in the file, **all 181 flowcharts byte-identical**, **0 conditions changed outside the 16**, 0 field defects across the 16, and a live check of Wolff-Parkinson-White in the running app showing 8 authored rows at Detailed (5,006 chars), 8 at Standard (1,950) and 4 at Brief (669), with no fallback markers.
  - A new injector, `scratchpad/apply_registers.py`, replaced the lost `inject_registers.py`/`upgrade_condition.py` pair. Writing it surfaced the **two-conditions-on-one-line hazard** now recorded in the script-safety rules above.
- **2026-08-09 — Set 0 (Neurology) complete.** All 45 have detailed base + standard + brief + complications. Engine, `depth` audit of all 558 entries, and namespaced highlight spans shipped the same day.
- **2026-08-09 — Set 2 (Cardiovascular) STARTED, 16 of 63 done.** Three clusters complete: **Blood pressure** (2), **Coronary artery disease** (4) and **Heart failure & cardiomyopathies** (10). All 24 cardiology flowcharts preserved. 13 of the 16 needed detailed text written from scratch.
  - Registers for these 16: brief **112**, standard **298**, detailed **511** chars/field — see the drift note above; standard is the one off spec, and was corrected the same day.
  - Verified: balance 0/0/0, `node --check`, 558 unique ids, 0 duplicate top-level keys across all 558 objects, 0 field defects across the 16, and a live check of Hypertrophic cardiomyopathy showing 4 rows at Brief, 8 at Standard and 8 at Detailed, all authored.
- **2026-08-09 — Set 1 (Endocrinology) COMPLETE.** All 42 conditions now carry a detailed base, an authored `standard`, an authored `brief` and a `complications` row. Worked in four passes by cluster: Diabetes + Pituitary (10), Thyroid (10), Adrenal (8), then Parathyroid & bone + MEN + Electrolytes + Metabolic (14). 26 of the 42 had to have their detailed text written from scratch, because their base was at brief register; 5 were expanded from standard; 11 already had detailed text and needed only the shorter registers. All 20 existing flowcharts were preserved through the rewrite.
  - Registers achieved: **brief 103 chars/field**, **standard 239 over 7 fields**, **detailed 436**. Standard runs above the HFpEF reference of 192 partly because every entry now also carries Complications.
  - A second script was needed alongside `inject_registers.py`: **`upgrade_condition.py`** rewrites the base fields to detailed register, flips `depth`, and inserts standard/brief/complications while preserving `management`, `cluster`, `name` and `id` untouched. It carries existing `complications` through when the batch omits it, so good text is never silently overwritten.
  - Verified: balance 0/0/0, `node --check`, 558 unique ids, **0 duplicate top-level keys** across all 558 objects, 0 field defects across all 42 endocrine entries, and a live check of Addison's disease showing 8 rows at Detailed (381-char keyFacts), 8 at Standard (218) and 4 at Brief (100), all authored with no fallback markers.
