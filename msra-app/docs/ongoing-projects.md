# Ongoing Projects — what work is pending

**Purpose.** This is the single answer to *"what work do we have pending?"*. It survives a cleared context window: read this file first and you can pick up any of the three live workstreams without reconstructing anything.

**Read this with:** `docs/content-status.md` (the detailed batch-by-batch history) and `docs/toggle-project.md` (the Toggle Project's rules and set order). This file is the index; those two hold the working detail.

**Keep it current.** Whenever a batch, set or fix lands, update the status line here as well as the detailed doc.

_Last verified against the data files: **2026-08-17** (after Set 9). Every number below was counted from `data.js` / `notebook-data.js` on that date, not carried forward from an earlier note._

---

## At a glance

| # | Workstream | Where we are | What's next |
| --- | --- | --- | --- |
| 1 | **Notebook roadmap** | 271 topics, all written, **0 placeholders** | **Batch 16i** — Paediatrics: Endocrine, Emergencies, Ophthalmology, Other |
| 2 | **Toggle Project** (3 reading registers + Complications) | **389 of 569** conditions complete; Sets 0–9 done | **Set 10 — Paediatrics & Child Health**, 27 to do |
| 3 | **Flowchart fixer** (unlabelled forks) | 192 charts; **56 carry the defect** | Decide scope, then fix specialty by specialty |

Plus a short list of **smaller open defects** at the end — each is small, real, and currently parked.

---

## 1. Notebook roadmap

**Status: 271 topics across 19 sections, every one written.** There are no `_pending_*` placeholders left anywhere — the last scaffolded section was filled in Batch 16c(ii). What remains is not gap-filling but four planned batches of new material.

Work units here are called **batches** (the Toggle Project uses **sets** — the words are kept distinct deliberately).

### Remaining batches, in order

| Batch | Content | Source | Section | Status |
| --- | --- | --- | --- | --- |
| **16i** | Paediatrics — **Endocrine + Emergencies + Ophthalmology + Other Topics** (32 items, including Gillick competence, non-accidental injury, school exclusion, the vaccination schedule and paediatric fluids) | Specialities Guide **p185–200** | `paediatrics` | **NEXT** |
| 19 | **Psychiatry remainder** | Specialities Guide **p201–255** | `psychiatry` | queued |
| 17 | **Therapeutic drug monitoring** — phenytoin, digoxin, lithium, aminoglycosides/vancomycin, theophylline: toxicity versus undertreatment, interactions, antidotes | Path Guide **p111** | `pharmacology` | queued |
| 18 | **Enzymes & cardiac markers** — amylase, lipase, creatine kinase (CK-MM vs CK-MB), alkaline phosphatase (the BLIP causes, the 5× ULN split, GGT to separate liver from bone), BNP/NT-proBNP, troponin, and what an "international unit" means | Path Guide **p117–118** | `cardiology` (proposed) | queued |

After 16i, the paediatrics thread (16a–16i) is finished. Batches 17 and 18 are the two orphan Path Guide blocks that belong to no system thread; `pharmacology` is the thinnest section in the notebook (1 topic), which is why 17 exists.

### Things that will bite you

- **Insert paediatric batches BEFORE `paediatric_hip_conditions`**, never at the end of the array. `paediatric_hip_conditions` and `developmental_milestones` are parked at the end on purpose so the section finishes in the guide's own order. This was got wrong once and needed a reorder script to correct.
- **Three renderer traps** in the Markdown-lite notebook renderer: no ordered lists, no indented sub-bullets, no stray single asterisks. Assert for all three *before* writing — that ordering is what has kept every failure harmless.
- **The Specialities Guide's paediatric block map** (p78–200, 17 named blocks) is recorded in `content-status.md`; block headings are inline, not at page tops, so locate them by regex on a standalone line.
- The user's standing preference is to **extract each guide section in FULL** — nothing silently dropped.

---

## 2. Toggle Project

Bringing every Tracker condition to **three reading registers** — Brief, Standard, Detailed — plus a **Complications** row. Work units are **sets**, one per specialty.

**Status: 389 of 569 conditions complete.** Sets 0–9 are done: Neurology (45), Endocrinology (42), Cardiovascular (64), Gastroenterology (53), Respiratory (27), Infectious Diseases (42 of 44), Dermatology (39), Haematology (19 of 20), Renal & Urology (28) and MSK & Rheumatology (28).

### Remaining sets, in order

| Set | Specialty | To do | Note |
| --- | --- | --- | --- |
| **10** | **Paediatrics & Child Health** | **27** | Pre-flight done 2026-08-17: none started, no shared lines, **9 flowcharts to preserve** (the largest chart set yet — snapshot them first). ⚠️ Settle which 4 entries are topic-style before writing; `paeds_milestones`, `paeds_immunisation` and `paeds_nai` are the clear ones. |
| 11 | Reproductive & Sexual Health | 22 | 26 total, 4 topic-style. ⚠️ `repro_afe` stores `management` LAST. |
| 12 | Ophthalmology | 25 | |
| 13 | ENT | 18 | |
| 14 | Genetics | 19 | 21 total, 2 topic-style. `genetics_nf1` is also still at the old thin standard. |
| 15 | Psychiatry & Mental Health | 15 | 18 total, 1 topic-style; `psych_nms` and `psych_serotonin_syndrome` are already complete. |
| 16 | Immunology & Allergy | 9 | 11 total, 2 topic-style |
| 17 | Pharmacology + Public Health | 0 genuine | Registers only, no Complications — **undecided whether worth doing** |

**Infectious Diseases is finished** apart from `id_notifiable` and `id_abx_choice`, its two topic-style entries (both still at 33 chars/field). They belong with the Set 17 decision, not with Set 5. `id_gas_gangrene` was added on 2026-08-14 and written complete, taking the specialty to 44.

### The rules that matter (full detail in `docs/toggle-project.md`)

- **Drafting budgets, tested and working: ~500–520 chars/field for Detailed, ~200 for Standard, ~110 for Brief.** Budget Standard at **200, never "just under 230"** — it drifted upward in almost every set until Set 8, which landed on 199 by **measuring `standard` in the same pass as the base and trimming it pre-emptively**, rather than only when the detailed ceiling fires. Set 9 repeated that and landed on exactly 200, so the method holds.
- **⚠️ Budget Detailed at ~480–500, not 520, for any condition written as a TYPOLOGY.** Sets 8 and 9 breached the 640 ceiling on 18 of 27 and 27 of 28 respectively, and the overshoots were consistently the entries enumerating subtypes — stone types, renal tubular acidosis types, psoriatic arthritis patterns, fracture patterns, benign versus malignant bone tumours. The same rule that already applied to multi-mechanism topics applies to multi-subtype ones.
- Enforced bands: Detailed **330–640**, Standard **150–230**, Brief **85–135**. A `depth: "detailed"` label is **not** evidence the register is right — the floor has caught mislabelled entries five times.
- **Never auto-trim trailing sentences.** A mechanical trim was tried and rejected: 124 of 264 candidates removed absolute safety rules. Tighten by hand through `merge_trims.py`, which refuses any replacement that is not strictly shorter.
- **Re-count each specialty from `data.js` at the start of every set** — conditions move between specialties and even this file's numbers go stale.
- **Never enumerate a specialty by id prefix**; ids are preserved through splits and moves (`haem_wilson` lives in Gastroenterology). List by `cluster:`.
- **New conditions and their flowcharts are ONE job** — see workstream 3.

### Scripts (all in `msra-app/scratchpad/`, all assert before writing)

`apply_registers.py` (the gate — rewrites an existing condition), `add_condition.py` (inserts a new condition at an explicit `after:` anchor), `measure_payload.py` / `measure_new.py` (report all bands without aborting), `prune_trims.py` → `merge_trims.py` (hand-written trims, strictly-shorter enforced), `resolve_existing.py` (`__EXISTING__` complications carried through verbatim), `snapshot_conditions.py` (hash proof of what changed), `split_line.py`, `rename_cluster.py`.

---

## 3. Flowchart fixer — unlabelled forks

**The rule:** a node with more than one outgoing edge must have **every** one of those edges labelled. An unlabelled branch reads as an unresolvable decision — the reader cannot tell why they would take one arm rather than the other. The user found this themselves in `endo_dka`, where the chart forked after fluid resuscitation into two unlabelled branches; it was never a decision at all, the second arm was concurrent supportive care, and the fix was to label it `-- "in parallel" -->`.

**Status: 192 charts in the app. 56 of them carry at least one unlabelled fork (59 defect instances — three charts have two each).** Tooltip coverage, by contrast, is perfect: 0 nodes without a tip and 0 orphan tips across all 192. The affected 56 are all pre-2026-08-12 charts; everything added since is written through `add_flowchart.py`, which enforces the rule.

The commonest pattern is a **start node that drops an unlabelled edge into the main pathway alongside a labelled edge to a red-flag branch** — e.g. `derm_cellulitis` has `A --> B` sitting beside `A -- "rapidly spreading, severe pain, crepitus" --> G`. The fix is usually to name the ordinary path (`-- "usual course" -->`, `-- "then" -->`, `-- "in parallel" -->`), not to restructure the chart.

**The full audit, by specialty, is in `scratchpad/fork_audit.txt`** — regenerate it any time with the fork checker embedded in `scratchpad/add_flowchart.py`. Affected charts:

- **Cardiovascular (3)** — `cvs_af` (two nodes), `cvs_svt`, `cvs_endocarditis`
- **Respiratory (2)** — `resp_copd`, `resp_pneumothorax`
- **Gastroenterology (6)** — `gi_variceal_haemorrhage`, `gi_pud`, `gi_crohns` (3 unlabelled edges from one node), `gi_uc`, `gi_cholecystitis`, `gi_pancreatitis`
- **Endocrinology (7)** — `endo_t1dm`, `endo_t2dm`, `endo_hhs`, `endo_hyperthyroid`, `endo_graves`, `endo_addisonian_crisis`, `endo_hyponatraemia`
- **Renal & Urology (3)** — `renal_aki`, `renal_ckd`, `renal_stones`
- **Psychiatry (6)** — `psych_depression`, `psych_bipolar`, `psych_ptsd`, `psych_schizophrenia`, `psych_alcohol`, `psych_delirium`
- **MSK & Rheumatology (4)** — `rheum_oa`, `rheum_ra` (two nodes), `rheum_gout` (two nodes), `rheum_osteoporosis`
- **Dermatology (4)** — `derm_eczema`, `derm_psoriasis`, `derm_urticaria`, `derm_cellulitis`
- **ENT (3)** — `ent_om`, `ent_epistaxis`, `ent_tonsillitis`
- **Ophthalmology (3)** — `eye_orbital_cellulitis`, `eye_acute_glaucoma`, `eye_chronic_glaucoma`
- **Infectious Diseases (4)** — `id_sepsis`, `id_meningitis`, `id_cdiff`, `id_malaria`
- **Haematology (2)** — `haem_ida`, `haem_anticoag`
- **Reproductive (7)** — `repro_menorrhagia`, `repro_pid`, `repro_ectopic`, `repro_miscarriage`, `repro_hyperemesis`, `repro_preeclampsia`, `repro_afe`
- **Paediatrics (2)** — `paeds_neonatal_sepsis`, `paeds_fever`

**Not started — this needs a scoping decision**, because each label is a clinical judgement about what the branch actually means, not a mechanical edit. Suggested approach: work specialty by specialty, use `patch_flowchart.py` (exact-substring replacement inside one chart's blob, asserting node and edge counts survive), then re-render all charts through the Mermaid engine.

The **nine charts added since 2026-08-12 all comply** — `add_flowchart.py` asserts the fork rule statically at write time, so nothing new can introduce the defect.

---

## Smaller open defects

Each is real, verified on 2026-08-12, and parked rather than forgotten.

1. **Seven conditions labelled `depth: "detailed"` sit outside the 330–640 band** (six of them are otherwise-complete; `eye_rp` is not). `eye_rp` (810) and `neuro_dcm` (718) are above the ceiling; `cvs_hypotension` (320), `endo_de_quervain_thyroiditis` (315), `endo_kallmann` (285), `neuro_neurogenic_shock` (265) and `neuro_autonomic_dysreflexia` (259) are below the floor. All predate the band being enforced, and four of the short ones were consciously kept at Set 0/1 time — so this needs a decision rather than a blind rewrite. **`eye_rp` at 810 was newly spotted on 2026-08-12 and had not been recorded before.**
2. **Two Pharmacology entries carry `depth: "detailed"` but only ever had three fields** — `pharm_dopamine_agonists` and `pharm_salicylate_od` have `presentation`, `investigations` and `treatment` but no `keyFacts`, `epidemiology`, `aetiology` or `pathophysiology`. They are topic-style entries, so this belongs with the Set 17 decision. ⚠️ **Note when scanning:** measured over all seven base fields, `pharm_salicylate_od` comes out at 199 c/f and so a whole-file band scan reports **8** out-of-band `detailed` entries, not the 7 in item 1. That is these two categories overlapping, not new drift — `pharm_dopamine_agonists` measures 458 and stays out of the count.
3. **Two lines of `data.js` still hold two condition objects each** — `neuro_trigeminal` + `neuro_iih` and `neuro_status_epilepticus` + `neuro_parkinsons`, both already-complete Set 0 conditions written before the guard existed. They matter only if those entries are revisited. (`derm_ichthyosis` + `derm_neuropathic_ulcer` was split on 2026-08-13 before Set 6 ran.)
4. **`repro_afe` still stores `management` after `cluster`** — the last entry in the file with that key order. Locate the value by brace-matching from the key, never by position.
5. **`genetics_nf1` is still at the old thin standard** (no complications, no flowchart) while sitting between two full-depth entries in its cluster. Genetics is Set 14.
