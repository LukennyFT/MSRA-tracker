// ===================================================================
// MSRA NOTEBOOK — distilled high-yield content
//   window.NOTEBOOK.sections[].topics[] with markdown-lite content.
//
// Section ids deliberately match the tracker specialty ids and the
// question-bank "section" tags, so the same taxonomy runs through the
// whole app. Topic ids must never change once bookmarked.
//
// Style: full sentences, abbreviations spelled out on first use, tables
// for comparisons. Sections marked with a single "_pending_*" topic are
// scaffolding to be filled in later — replace the placeholder with real
// topics when you populate them.
// ===================================================================

window.NOTEBOOK = {
  sections: [
    {
      id: "cardiology", name: "Cardiovascular", icon: "🫀",
      topics: [
        {
          id: "acs_overview",
          name: "Acute coronary syndrome",
          content: `## Acute coronary syndrome (ACS)

Acute coronary syndrome is a spectrum of conditions caused by sudden reduction in blood flow to the heart muscle. It includes ST-elevation myocardial infarction (STEMI), non-ST-elevation myocardial infarction (NSTEMI) and unstable angina.

## How it presents

The classic presentation is central, crushing chest pain that may radiate to the jaw or left arm, with sweating, nausea and breathlessness. Important exceptions are people with diabetes and older patients, who may have a "silent" or atypical presentation such as breathlessness or collapse without much pain.

## Distinguishing the three

| Feature | Unstable angina | NSTEMI | STEMI |
|---|---|---|---|
| Troponin | Normal | Raised | Raised |
| ST elevation | No | No | Yes |
| Mechanism | Partial occlusion | Partial occlusion with necrosis | Complete occlusion |

## Investigations

- A 12-lead electrocardiogram (ECG) is the first investigation. ST elevation or a new left bundle branch block points to a STEMI.
- Serial troponin (a cardiac muscle protein) distinguishes NSTEMI from unstable angina.

## Immediate management

The memory aid is often given as morphine, oxygen, nitrates and aspirin, but oxygen should only be given if oxygen saturations are low.

- **STEMI**: offer primary percutaneous coronary intervention (PCI) if it can be delivered within 120 minutes; otherwise thrombolysis.
- **NSTEMI**: give dual antiplatelet therapy and anticoagulation, then risk-stratify with the GRACE score to decide on the timing of angiography.

> Secondary prevention after any ACS is the combination often summarised as: aspirin, a second antiplatelet, a beta-blocker, an ACE inhibitor and a statin, plus cardiac rehabilitation.`,
        },
        {
          id: "af_overview",
          name: "Atrial fibrillation",
          content: `## Atrial fibrillation (AF)

Atrial fibrillation is the commonest sustained heart rhythm disturbance. The atria contract in a disorganised way, producing an irregularly irregular pulse.

## Two problems to solve

Managing AF means addressing two separate questions: rate or rhythm, and stroke risk.

### Rate versus rhythm control

- **Rate control** is first line for most people. A beta-blocker (such as bisoprolol) or a rate-limiting calcium channel blocker (such as diltiazem) is used. Digoxin is reserved for sedentary patients.
- **Rhythm control** is preferred when AF has a reversible cause, is of new onset (under 48 hours), causes heart failure, or remains symptomatic despite rate control.

### Stroke prevention

Anticoagulation decisions use the **CHA₂DS₂-VASc** score to estimate stroke risk, balanced against bleeding risk (for example the ORBIT score). A direct oral anticoagulant (DOAC) is first line; warfarin is reserved for specific situations such as a mechanical heart valve.

> Aspirin is no longer recommended for stroke prevention in AF.`,
        },
        {
          id: "heart_failure_overview",
          name: "Heart failure",
          content: `## Chronic heart failure

Heart failure is a clinical syndrome in which the heart cannot maintain enough output for the body's needs. It is commonly divided by the ejection fraction into heart failure with reduced ejection fraction and heart failure with preserved ejection fraction.

## Recognising it

Symptoms include breathlessness, orthopnoea (breathlessness lying flat) and paroxysmal nocturnal dyspnoea (waking breathless at night). Signs include a raised jugular venous pressure, bibasal crackles and peripheral oedema.

## Investigations

- Measure **N-terminal pro B-type natriuretic peptide (NT-proBNP)**. A high level prompts an urgent echocardiogram.
- An echocardiogram assesses the ejection fraction and the underlying cause.

## Management of reduced ejection fraction

First-line drug treatment combines an ACE inhibitor (or an angiotensin receptor blocker) with a beta-blocker, titrated up as tolerated. A mineralocorticoid receptor antagonist is added if symptoms persist, and a sodium-glucose co-transporter 2 (SGLT2) inhibitor now has an established role. Loop diuretics such as furosemide relieve congestion but do not improve survival.`,
        },
        {
          id: "atherosclerosis_ihd",
          name: "Atherosclerosis & ischaemic heart disease",
          content: `## Atherosclerosis and ischaemic heart disease

Atherosclerosis is a chronic inflammatory disease of the intima (the innermost layer) of large and medium arteries, characterised by intimal thickening and lipid accumulation. It is the substrate for ischaemic heart disease, in which the oxygen supply to the myocardium falls below its demand because of narrowed coronary arteries.

## How a plaque forms

Atherogenesis is a stepwise process:

- **Endothelial injury** (from hypertension, smoking, hyperglycaemia or turbulent flow) allows low-density lipoprotein (LDL) to accumulate in the sub-intimal space.
- Trapped LDL is **oxidised**, which is pro-inflammatory and recruits monocytes.
- Monocytes become macrophages that engulf oxidised LDL through scavenger receptors to become lipid-laden **foam cells**; their death releases the lipid that builds the necrotic core.
- Vascular smooth muscle cells migrate over the core and lay down collagen to form the **fibrous cap**, separating the thrombogenic core from the lumen.

Plaques favour arterial branch points, where **low or oscillatory shear stress** is atherogenic (high laminar flow is protective), and the abdominal aorta is affected more than the thoracic. A **thick fibrous cap** is stable, whereas a thin cap is vulnerable to rupture. Risk factors are modifiable (type 2 diabetes, hypertension, hypercholesterolaemia, smoking) and non-modifiable (male sex, increasing age, family history).

## The clinical spectrum of ischaemia

| Syndrome | Vessel | Pain |
|---|---|---|
| Stable angina | About 70% occlusion | On exertion, relieved by rest |
| Unstable angina | Over 90% occlusion | At rest; heralds infarction |
| Prinzmetal (variant) angina | Coronary artery spasm | At rest, not from a fixed stenosis |

Angina causes reversible ischaemia with **no myocyte death**. Myocardial infarction (MI) occurs when a plaque ruptures, triggering platelet activation and an occlusive thrombus, so that ischaemia lasting beyond about 20 to 40 minutes causes irreversible **necrosis**.

## How an infarct evolves

| Time after MI | Histology |
|---|---|
| Under 6 hours | Normal (troponin and CK-MB not yet raised) |
| 6 to 24 hours | Loss of nuclei, coagulative necrosis |
| 1 to 4 days | Neutrophils then macrophages clear debris |
| 5 to 10 days | Debris removed; granulation tissue begins |
| 1 to 2 weeks | Granulation tissue, new vessels, collagen |
| Weeks to months | Decellularised collagenous scar |

## Complications of myocardial infarction

- **Mechanical**: contractile failure and cardiogenic shock, papillary muscle rupture (acute mitral regurgitation), rupture of the free wall (tamponade) or the septum (a ventricular septal defect with a left-to-right shunt), and a **ventricular aneurysm** developing after about 4 weeks (persistent ST elevation).
- **Arrhythmic**: ventricular fibrillation in the first 24 hours is a common cause of sudden death.
- **Pericardial**: early peri-infarct (fibrinous) pericarditis, and **Dressler's syndrome** — chest pain, fever and a pericardial effusion weeks to months later, from an autoimmune reaction.
- **Thrombotic**: a mural thrombus with systemic embolisation.

> The timing of a post-infarct complication is the exam clue: ventricular fibrillation within hours, papillary muscle or free-wall rupture within days, and a ventricular aneurysm or Dressler's syndrome from weeks onward. For the clinical management of acute coronary syndrome, see the Acute coronary syndrome topic.`,
        },
        {
          id: "cardiomyopathies",
          name: "Cardiomyopathies",
          content: `## Cardiomyopathies

A cardiomyopathy is a disease of the heart muscle itself. The three classic patterns are distinguished by how they impair function, and each must be separated from **indirect** myocardial dysfunction caused by ischaemia, valve disease or hypertension.

| Pattern | Functional problem | Typical causes |
|---|---|---|
| Dilated (too thin) | Systolic (poor contraction) | Idiopathic, alcohol, thyroid disease, haemochromatosis, viral myocarditis, peripartum |
| Hypertrophic (too thick) | Diastolic (poor filling) | Genetic — sarcomeric protein mutations |
| Restrictive (too stiff) | Diastolic (poor filling) | Amyloidosis, sarcoidosis, haemochromatosis, radiation fibrosis |

## Dilated cardiomyopathy

The ventricles dilate and contract poorly, producing systolic heart failure, functional mitral regurgitation, arrhythmias and a risk of mural thrombus. Alcohol is an important reversible cause.

## Hypertrophic cardiomyopathy

Hypertrophic cardiomyopathy is an **autosomal dominant** disease caused by mutations in genes encoding **sarcomeric proteins** — most commonly beta-myosin heavy chain, along with myosin-binding protein C and troponin T. The heart is thick-walled, heavy and hyper-contractile, with hypertrophy that is often asymmetrical and septal. The histological hallmark is **myocyte disarray**, which is arrhythmogenic and underlies the risk of **sudden cardiac death in young people** (troponin T mutations carry a particularly high risk). When septal hypertrophy obstructs the left ventricular outflow tract it is called **hypertrophic obstructive cardiomyopathy (HOCM)**.

## Restrictive cardiomyopathy and ARVC

In restrictive cardiomyopathy the ventricle is stiff and fills poorly (mimicking constrictive pericarditis); infiltration by amyloid is a classic cause. **Arrhythmogenic right ventricular cardiomyopathy (ARVC)** is fibrofatty replacement of the right ventricular myocardium, causing ventricular arrhythmias and sudden death in the young.

> Hypertrophic cardiomyopathy is the classic cause of sudden cardiac death in a young athlete: autosomal dominant, sarcomeric protein mutations, and myocyte disarray on histology.`,
        },
        {
          id: "valvular_heart_disease",
          name: "Valvular heart disease",
          content: `## Valvular heart disease

The four common valve lesions are best learned by their murmur, their mechanism and their characteristic cause.

| Lesion | Murmur | Key causes |
|---|---|---|
| Aortic stenosis | Ejection systolic, crescendo–decrescendo, radiating to the carotids | Calcification (age), congenital bicuspid valve |
| Aortic regurgitation | Early diastolic, with a collapsing pulse | Infective endocarditis, aortic dissection, connective tissue disease (Marfan), ankylosing spondylitis |
| Mitral stenosis | Mid-diastolic with an opening snap | Rheumatic fever (almost always) |
| Mitral regurgitation | Pansystolic, radiating to the axilla | Mitral valve prolapse, infective endocarditis, post-infarct papillary muscle dysfunction, left ventricular dilatation |

## The lesions in brief

- **Aortic stenosis** obstructs left ventricular outflow, driving concentric hypertrophy; the classic exertional triad is syncope, angina and breathlessness.
- **Aortic regurgitation** allows blood to leak back into the ventricle in diastole, causing a wide pulse pressure and volume overload.
- **Mitral stenosis** raises left atrial pressure, causing atrial fibrillation, pulmonary congestion and, in time, right heart failure.
- **Mitral regurgitation** volume-loads the left atrium and ventricle. **Mitral valve prolapse** — the commonest valve abnormality — classically presents in a middle-aged woman with a mid-systolic click and a late systolic murmur.

## Chronic rheumatic valve disease

Rheumatic disease is **predominantly left-sided**, affecting the mitral valve most often (mitral, then aortic, then tricuspid, then pulmonary). It thickens the leaflets along their lines of closure, fuses the commissures, and thickens, shortens and fuses the chordae tendineae — producing above all **mitral stenosis**.

> Match the murmur to the lesion: ejection systolic radiating to the carotids is aortic stenosis; pansystolic radiating to the axilla is mitral regurgitation; and a mid-diastolic murmur with an opening snap is mitral stenosis, which is nearly always rheumatic.`,
        },
        {
          id: "rheumatic_fever",
          name: "Rheumatic fever",
          content: `## Rheumatic fever

Acute rheumatic fever is a multisystem inflammatory illness that follows a **group A streptococcal (Lancefield group A, Streptococcus pyogenes) throat infection** by 2 to 4 weeks. It peaks between the ages of 5 and 15 and is caused by **antigenic mimicry** — antibodies and T cells raised against streptococcal antigens cross-react with the body's own tissues, especially the heart.

## Diagnosis — the Jones criteria

Diagnosis requires evidence of a preceding group A streptococcal infection (a positive throat culture, a raised anti-streptolysin O titre, or recent scarlet fever) plus **two major criteria, or one major and two minor**.

| Major criteria | Minor criteria |
|---|---|
| Carditis (a pancarditis) | Fever |
| Arthritis (a migratory polyarthritis) | Raised CRP or ESR |
| Sydenham's chorea | Arthralgia |
| Erythema marginatum | Prolonged PR interval |
| Subcutaneous nodules | Previous rheumatic fever |

## What it affects

- **Heart**: a **pancarditis** — endocarditis, myocarditis and pericarditis together. The mitral valve is affected most (about 70%), and both mitral and aortic in about a quarter.
- **Joints**: a migratory arthritis of the large joints.
- **Skin**: erythema marginatum and subcutaneous nodules.
- **Central nervous system**: Sydenham's chorea.

The histological hallmarks are **Aschoff bodies** (small granulomas containing giant cells) and **Anitschkov myocytes**, with small warty vegetations (**verrucae**) along the valve leaflet lines of closure.

## Management

Treat the streptococcal infection with **benzylpenicillin** (erythromycin if penicillin-allergic), with anti-inflammatories for the arthritis and carditis. Long-term penicillin prophylaxis prevents recurrence, because repeated attacks lead to **chronic rheumatic heart disease** — most importantly mitral stenosis, years later.

> Rheumatic fever "licks the joints but bites the heart": the arthritis is transient and migratory, but the carditis can scar the mitral valve for life. It is now rare in the United Kingdom but remains a major cause of valve disease worldwide.`,
        },
        {
          id: "infective_endocarditis",
          name: "Infective endocarditis",
          content: `## Infective endocarditis

Infective endocarditis is colonisation of the endocardium — usually a heart valve — by microorganisms, forming friable **vegetations** of organisms, platelets and fibrin. It follows a bacteraemia, and the risk is higher on an abnormal, prosthetic or previously damaged valve.

## Sources and organisms

Bacteraemia arises from poor dental hygiene or dental work (viridans streptococci), intravenous drug use, skin and soft-tissue infection, and intravascular lines, cannulas or cardiac devices.

| Feature | Acute | Subacute |
|---|---|---|
| Organism | Staphylococcus aureus | Viridans streptococci, Staphylococcus epidermidis, HACEK, Coxiella |
| Virulence | High | Low |
| Course | Rapid, on a normal valve | Indolent, on an abnormal valve |

The mitral and aortic valves are usually affected, **except in intravenous drug users**, in whom the **tricuspid (right-sided)** valve is typically involved. Culture-negative causes include the HACEK organisms, Coxiella and Bartonella.

## Clinical features and diagnosis

Beyond fever, malaise and a **new or changing murmur**, look for the classic peripheral signs:

- **Immune-complex phenomena**: Osler's nodes (painful finger-pulp nodules), Roth spots (retinal haemorrhages) and a glomerulonephritis causing haematuria.
- **Thromboembolic phenomena**: Janeway lesions (painless palmar macules), splinter haemorrhages, and septic emboli to the lung, brain, spleen or kidney, with splenomegaly.

Diagnosis uses the **Duke criteria** (positive blood cultures and echocardiographic evidence being the two major criteria); it is met by two major, one major plus three minor, or five minor criteria. Take **three sets of blood cultures** and perform echocardiography (a transoesophageal study is more sensitive for vegetations).

## Management and the differential of sterile vegetations

Start broad-spectrum antibiotics after cultures are taken, then tailor to sensitivities — for example benzylpenicillin with gentamicin for subacute streptococcal disease, and flucloxacillin for meticillin-sensitive Staphylococcus aureus. Not every vegetation is infective:

- **Non-bacterial thrombotic (marantic) endocarditis** — small sterile thrombotic vegetations in advanced malignancy or a hypercoagulable state.
- **Libman–Sacks endocarditis** — small sterile warty vegetations in systemic lupus erythematosus and the antiphospholipid syndrome.

> Take three sets of blood cultures before antibiotics and image the valves: fever with a new murmur and embolic or immune signs is infective endocarditis until proven otherwise, and Staphylococcus aureus disease is aggressive.`,
        },
        {
          id: "pericardial_disease",
          name: "Pericardial disease",
          content: `## Pericardial disease

The pericardium is a two-layered sac around the heart. Its main diseases are inflammation (pericarditis), fluid accumulation (effusion) and the emergencies these can cause.

## Pericarditis

Pericarditis is inflammation of the pericardium, classified by its cause:

- **Viral or idiopathic** — the commonest (about 90%).
- **Fibrinous** — after a myocardial infarction, or in uraemia.
- **Purulent** — bacterial, for example Staphylococcus.
- **Granulomatous** — tuberculosis.
- **Haemorrhagic** — malignancy, tuberculosis or uraemia.

It classically presents with **sharp, pleuritic chest pain that is relieved by sitting forward**, a pericardial friction rub, and **widespread saddle-shaped ST elevation with PR depression** on the electrocardiogram. Most viral or idiopathic cases respond to a non-steroidal anti-inflammatory drug together with **colchicine**.

## Pericardial effusion and tamponade

A **pericardial effusion** is fluid in the pericardial sac; a common cause of a chronic effusion is heart failure, while exudative effusions follow inflammation, infection or malignancy. If fluid accumulates fast enough to compress the heart it causes **cardiac tamponade**, an emergency: ventricular filling is impaired and cardiac output falls. The signs are **Beck's triad** — muffled heart sounds, a raised jugular venous pressure and hypotension — often with pulsus paradoxus. Treatment is urgent **pericardiocentesis**. **Haemopericardium** (blood in the sac) may follow myocardial rupture after an infarct, or trauma.

## Constrictive pericarditis

Chronic inflammation (classically tuberculosis, or any of the causes above) can leave the pericardium thickened, fibrosed and sometimes calcified, so that it constricts the heart and impairs diastolic filling — presenting like right heart failure, with a raised jugular venous pressure and Kussmaul's sign. It is treated by pericardiectomy.

> Cardiac tamponade is a clinical diagnosis — Beck's triad of muffled heart sounds, a raised jugular venous pressure and hypotension — and needs urgent pericardiocentesis, not a wait for imaging.`,
        },
      ],
    },
    {
      id: "respiratory", name: "Respiratory", icon: "🫁",
      topics: [
        {
          id: "asthma_copd_compare",
          name: "Asthma versus COPD",
          content: `## Asthma versus chronic obstructive pulmonary disease

Both cause an obstructive pattern on spirometry, but they differ in reversibility and the typical patient.

| Feature | Asthma | COPD |
|---|---|---|
| Typical onset | Childhood/young adult | Over 35, smoker |
| Variability | Diurnal, trigger-related | Persistent, progressive |
| Reversibility | Significant with bronchodilator | Limited |
| Atopy | Common | Less relevant |

## Confirming the diagnosis

Asthma is now confirmed with objective testing rather than on history alone. In adults and young people aged 16 and over, measure a **blood eosinophil count or fractional exhaled nitric oxide (FeNO)** first — asthma is diagnosed if the eosinophil count is above the laboratory reference range, or the **FeNO is 50 parts per billion or more**. If neither is raised, test **bronchodilator reversibility** with spirometry, then **peak flow variability over 2 weeks**, then a bronchial challenge test.

## Asthma management

**UK asthma management was rewritten in November 2024** by a joint **BTS, NICE and SIGN guideline (NG245)**, replacing NICE NG80 and the older BTS/SIGN guideline, and updated again in November 2025. The previous ladder — a short-acting beta-2 agonist alone, then adding an inhaled corticosteroid, then a leukotriene receptor antagonist, then a long-acting beta-2 agonist — no longer applies.

> **Do not prescribe a short-acting beta-2 agonist (SABA) to anyone with asthma, at any age, without also prescribing an inhaled corticosteroid (ICS).** SABA-only treatment relieves symptoms while leaving the inflammation untreated, and high SABA use is a marker of asthma death.

Two terms carry the new approach. **AIR** (anti-inflammatory reliever) is a combined **ICS with formoterol** inhaler taken **only as needed**; **MART** (maintenance and reliever therapy) is the same inhaler taken **regularly and additionally as needed**. Formoterol is used because it is a long-acting beta-2 agonist with a rapid enough onset to work as a reliever, and patients on MART do not normally need a separate SABA.

**For people aged 12 and over:**

- **Start with as-needed AIR** — low-dose ICS/formoterol used for symptom relief only. If the patient is highly symptomatic at presentation or has had a severe exacerbation, start **low-dose MART** instead
- **Step up to low-dose MART**, then **moderate-dose MART**
- If still uncontrolled despite good adherence, **check FeNO and blood eosinophils**. If **either is raised, refer to a specialist**. If **neither is raised**, trial a **leukotriene receptor antagonist or a long-acting muscarinic antagonist (LAMA)** for 8 to 12 weeks, adding the other if there is partial benefit
- **Refer** if control is still not achieved

The leukotriene receptor antagonist has been demoted to a **time-limited trial with an explicit stop rule**, and carries the **MHRA warning on montelukast** about neuropsychiatric reactions. The **LAMA is a new option** at this step. Children under 12 follow different ladders — see *Asthma in children: diagnosis and chronic management*.

**Always check inhaler technique and adherence before escalating**, and note that **digital inhalers are not recommended for routine use**.

## COPD management

The foundations are stopping smoking, vaccination and pulmonary rehabilitation. Inhaled therapy starts with a short-acting bronchodilator, then a long-acting beta agonist with a long-acting muscarinic antagonist. An inhaled corticosteroid is added when there are asthmatic or steroid-responsive features.`,
        },
        {
          id: "pneumonia_curb65",
          name: "Pneumonia & CURB-65",
          content: `## Community-acquired pneumonia

Pneumonia is infection of the lung parenchyma. It presents with fever, a productive cough, pleuritic chest pain and focal chest signs such as crackles or bronchial breathing.

## Assessing severity: CURB-65

Each feature scores one point:

- **C**onfusion (new disorientation)
- **U**rea greater than 7 mmol/L
- **R**espiratory rate of 30 or more per minute
- **B**lood pressure low (systolic under 90 or diastolic 60 or less)
- Age **65** or over

A score of 0 to 1 suggests home treatment may be appropriate, 2 suggests considering hospital, and 3 or more suggests severe pneumonia.

## Treatment

Antibiotic choice follows severity and local guidelines: amoxicillin for low-severity disease, with a macrolide added or a broader agent used as severity rises. Always safety-net and arrange follow-up.`,
        },
        {
          id: "restrictive_lung_disease",
          name: "Restrictive lung disorders",
          content: `## Restrictive lung disorders

In a restrictive disorder the lungs cannot expand fully, so the total volume of air they can hold is reduced. On spirometry the forced expiratory volume in one second (FEV1) and the forced vital capacity (FVC) fall together, but because the airways themselves are not narrowed the FEV1/FVC ratio is preserved (it stays at 0.7 or above, and is often raised). This is the mirror image of the obstructive pattern of asthma and chronic obstructive pulmonary disease, in which the ratio falls. The pattern itself is set out in detail in the Pulmonary function tests topic.

It helps to divide the causes into those that arise within the lung tissue itself and those that arise outside it.

| Site of problem | Mechanism | Examples |
|---|---|---|
| Intrinsic (lung parenchyma) | Inflammation and scarring of lung tissue | Interstitial lung disease: idiopathic pulmonary fibrosis, sarcoidosis, the pneumoconioses, extrinsic allergic alveolitis, drug- and radiation-induced fibrosis |
| Extrinsic (chest wall) | The chest bellows cannot move freely | Kyphoscoliosis, ankylosing spondylitis, gross obesity |
| Extrinsic (neuromuscular) | Weak respiratory muscles | Motor neurone disease, Guillain-Barré syndrome, myasthenia gravis, muscular dystrophy, phrenic nerve (diaphragm) palsy |
| Extrinsic (pleural) | The lung is compressed or tethered | Large pleural effusion, diffuse pleural thickening |

A useful bedside discriminator is the gas transfer factor. Intrinsic (parenchymal) disease damages the alveolar-capillary membrane and lowers the transfer factor for carbon monoxide (TLCO), whereas extrinsic chest-wall and neuromuscular causes restrict an otherwise healthy lung and so tend to leave gas transfer relatively preserved.

## Interstitial lung disease

Interstitial lung disease is the umbrella term for more than two hundred conditions in which the connective tissue between the alveoli (the interstitium) becomes inflamed and scarred. Together they make up roughly 15% of the respiratory disease burden, and they are the most important intrinsic cause of a restrictive pattern.

The typical patient develops slowly progressive breathlessness on exertion with a dry cough, fine end-inspiratory crackles at the lung bases and, as disease advances, cyanosis, pulmonary hypertension and right heart failure (cor pulmonale). High-resolution computed tomography (CT) of the chest shows ground-glass shadowing early and a honeycomb pattern once fibrosis is established. Lung function testing confirms the restrictive pattern, with reduced lung volumes, reduced compliance and a reduced gas transfer factor.

The many causes are grouped by their dominant pathology:

| Group | Examples |
|---|---|
| Fibrosing | Idiopathic pulmonary fibrosis, the pneumoconioses, connective tissue disease, drug-induced fibrosis, radiation pneumonitis, cryptogenic organising pneumonia |
| Granulomatous | Sarcoidosis, extrinsic allergic alveolitis, the vasculitides (granulomatosis with polyangiitis, eosinophilic granulomatosis with polyangiitis) |
| Eosinophilic | The eosinophilic pneumonias |
| Smoking-related | Respiratory bronchiolitis-associated interstitial lung disease |

## Idiopathic pulmonary fibrosis

Idiopathic pulmonary fibrosis is the commonest of the fibrosing interstitial diseases and the prototype to recognise. It is more common in men, usually presents between the ages of 40 and 70, and has no identified cause, although smoking and gastro-oesophageal reflux disease are recognised risk factors.

Its defining histological pattern is usual interstitial pneumonia (UIP): patchy fibrosis that begins at the periphery of the lobule, just beneath the pleura, with loss of the normal lung architecture and honeycomb change produced by hyperplasia of type II pneumocytes. The same UIP pattern is also seen in connective tissue disease, asbestosis and extrinsic allergic alveolitis, so it is characteristic of, but not unique to, the idiopathic form.

Patients present with progressive exertional breathlessness, a non-productive cough, finger clubbing and bibasal crackles, and the diagnosis is usually made on high-resolution CT. Treatment is disappointing: corticosteroids and immunosuppressants such as azathioprine and cyclophosphamide are of limited value, and the antifibrotic drugs pirfenidone and nintedanib slow the decline rather than reverse it. The prognosis is poor, with a median survival of around two to five years.

## Extrinsic allergic alveolitis (hypersensitivity pneumonitis)

Extrinsic allergic alveolitis, also called hypersensitivity pneumonitis, is an immune-mediated reaction to intense or prolonged inhalation of organic, usually occupational, antigens. The inflammation is centred on the alveoli, which separates it from asthma, where the inflammation lies in the airways.

- The **acute** form follows heavy exposure in a sensitised person: fever, chills, a dry cough, chest tightness and breathlessness come on within hours and usually settle by the next day once exposure stops.
- The **chronic** form, from repeated low-level exposure, causes a persistent cough, progressive breathlessness, weight loss and finger clubbing, and can scar the lung permanently.

Recognising it early matters, because removing the responsible antigen can prevent progression to irreversible fibrosis. Classic named examples include farmer's lung (mouldy hay, caused by the bacterium Saccharopolyspora rectivirgula), pigeon fancier's lung (avian proteins in droppings and feathers), humidifier's lung (thermophilic actinomycetes growing in water reservoirs), malt-worker's lung (Aspergillus species) and cheese-washer's lung (mould on cheese). Histologically, extrinsic allergic alveolitis and the related cryptogenic organising pneumonia show polypoid plugs of loose connective tissue within the alveoli and bronchioles — a pattern of organising pneumonia, also called bronchiolitis obliterans organising pneumonia (BOOP).

## Pneumoconioses and sarcoidosis

The pneumoconioses are occupational diseases caused by inhaling mineral dusts and inorganic particles. The classic example is coal-worker's pneumoconiosis which, like silicosis, has a predilection for the **upper** lobes. Asbestos is the important exception: asbestosis (the fibrosis it causes) characteristically affects the **lower** lobes, and asbestos can also produce benign pleural plaques and malignant mesothelioma — this spectrum is covered in the Asbestos-related lung disease topic.

Sarcoidosis is a multisystem granulomatous disease of unknown cause, most common in younger adults, in which non-caseating granulomas form in affected organs. In the chest it classically produces bilateral hilar lymphadenopathy and can lead to an interstitial fibrosis with a restrictive pattern; the serum angiotensin-converting enzyme and calcium may be raised.

More broadly, a **granuloma** is an organised collection of histiocytes and macrophages, sometimes with multinucleate giant cells. Granulomatous lung disease may be **infectious** — tuberculosis, fungi (histoplasma, Cryptococcus, coccidioides, aspergillus and mucor) and Pneumocystis — or **non-infectious**, as in sarcoidosis, a foreign-body reaction to inhaled or aspirated material (including in intravenous drug use), drugs, or occupational dust exposure.

> High-yield contrasts: a restrictive pattern keeps the FEV1/FVC ratio normal or high, whereas obstruction lowers it. Within the restrictive group, intrinsic (parenchymal) disease lowers the gas transfer factor while chest-wall and neuromuscular causes tend to spare it. Among the dust diseases, coal and silica favour the upper lobes whereas asbestosis favours the lower lobes.`,
        },
        {
          id: "asbestos_lung_disease",
          name: "Asbestos-related lung disease",
          content: `## Asbestos-related lung disease

Asbestos is a fibrous mineral once widely used in construction and insulation. Inhaled fibres cause a spectrum of disease, from harmless pleural changes to aggressive malignancy, and characteristically appear only after a long latent period of decades. It is a form of **pneumoconiosis** — an occupational lung disease caused by inhaling mineral dusts or inorganic particles.

## The spectrum of disease

| Category | Conditions |
|---|---|
| Benign pleural | Pleural plaques, diffuse pleural thickening, benign asbestos effusion |
| Benign parenchymal | Asbestosis (interstitial fibrosis) |
| Malignant | Bronchial carcinoma (especially adenocarcinoma), malignant mesothelioma |

## Asbestosis

Asbestosis is the interstitial fibrosis that results from asbestos exposure. Unlike the pneumoconioses caused by coal dust and silica, which favour the **upper lobes**, asbestosis characteristically affects the **lower lobes**. Its histological pattern is one of usual interstitial pneumonia (UIP) — the same pattern seen in idiopathic pulmonary fibrosis, connective tissue disease and extrinsic allergic alveolitis.

It produces a restrictive picture on spirometry (a reduced forced expiratory volume in one second [FEV1] and forced vital capacity [FVC], but a preserved or raised FEV1/FVC ratio) with reduced gas transfer. The patient develops progressive exertional breathlessness, a dry cough, fine bibasal end-inspiratory crackles and finger clubbing.

## Benign pleural disease

- **Pleural plaques** are the commonest sign of asbestos exposure. They are discrete areas of fibrous, often calcified, thickening of the parietal pleura. They are benign, do not turn into cancer, and are usually an incidental finding that simply marks past exposure.
- **Diffuse pleural thickening** is more extensive and can restrict lung expansion.
- A **benign asbestos pleural effusion** may also occur.

## Malignant disease

- **Bronchial carcinoma** (lung cancer), particularly adenocarcinoma. The risk is multiplied dramatically when asbestos exposure is combined with cigarette smoking.
- **Malignant mesothelioma** is a tumour arising from the parietal or visceral pleura that spreads widely within the pleural space. It typically presents with chest pain, breathlessness and an extensive, often blood-stained, pleural effusion. The latent period between exposure and disease is very long — around 25 to 45 years — and the prognosis is poor.

> Two high-yield contrasts: pleural **plaques** are benign and merely a marker of exposure, whereas **mesothelioma** is malignant; and **asbestosis** affects the **lower** lobes, unlike the upper-lobe predilection of coal and silica pneumoconiosis.

## A note on compensation

Asbestos-related diseases are recognised industrial diseases in the United Kingdom, so affected patients may be entitled to compensation. Take a careful occupational history and document any asbestos exposure.`,
        },
        {
          id: "pulmonary_function_tests",
          name: "Pulmonary function tests",
          content: `## Pulmonary function tests

Pulmonary function tests measure how well the lungs move air and transfer gas. They are central to diagnosing and monitoring respiratory disease, and the most useful first step is spirometry.

## Spirometry

Spirometry measures the volume of air a person can forcefully exhale. The two key values are the **forced vital capacity (FVC)** — the total volume exhaled from a maximal breath in — and the **forced expiratory volume in one second (FEV1)** — the volume exhaled in the first second.

The **FEV1/FVC ratio** separates the two main patterns of lung disease; a normal ratio is above about 0.7 (70%).

| Pattern | FEV1 | FVC | FEV1/FVC ratio |
|---|---|---|---|
| Obstructive | Reduced | Normal or reduced | Reduced (below 0.7) |
| Restrictive | Reduced | Reduced | Preserved (0.7 or above) |

In **obstructive** disease (asthma, chronic obstructive pulmonary disease [COPD], bronchiectasis) airflow is limited, so the FEV1 falls more than the FVC and the ratio drops. In **restrictive** disease (pulmonary fibrosis, kyphoscoliosis, obesity, neuromuscular weakness) the lungs cannot fully expand, so the FEV1 and FVC fall together and the ratio is preserved.

## Reversibility testing

Repeating spirometry after a bronchodilator helps separate asthma from COPD. A **significant rise in FEV1** (reversibility) supports **asthma**, whereas **little or no change** (largely fixed obstruction) supports **COPD**.

## Peak expiratory flow

The **peak expiratory flow (PEF)** is the fastest flow achieved on forced expiration, measured with a handheld meter. It is effort-dependent and mainly used to monitor asthma — serial home readings show diurnal variation (typically worse in the morning) and the response to treatment.

## Lung volumes

Spirometry cannot measure the air left in the lungs after a full exhalation, so body plethysmography or a gas-dilution technique is used to measure the static lung volumes. The **total lung capacity (TLC)** is reduced in restrictive disease but increased in obstructive disease because of air trapping and hyperinflation, and the **residual volume (RV)** — the air remaining after maximal expiration — is raised in COPD.

## Gas transfer (transfer factor)

The **transfer factor for carbon monoxide (TLCO, also written DLCO)** measures how efficiently gas crosses from the alveoli into the blood; the **KCO** corrects this for the lung volume available.

| Transfer factor | Causes |
|---|---|
| Reduced | Emphysema, pulmonary fibrosis, anaemia, pulmonary embolism, pulmonary hypertension |
| Raised | Pulmonary haemorrhage, polycythaemia, acute asthma, left-to-right cardiac shunt |

## Flow-volume loops

Plotting flow against volume produces a loop whose shape reflects the disease. **Obstructive** disease scoops out (makes concave) the expiratory limb; **restrictive** disease gives a tall, narrow loop with reduced volumes; and a **fixed large-airway obstruction** (such as a tracheal tumour or stenosis) flattens both the inspiratory and expiratory limbs.`,
        },
        {
          id: "obstructive_lung_disease_pathology",
          name: "Obstructive lung disease (pathology)",
          content: `## Obstructive lung disease: the pathology

Obstructive lung diseases limit airflow out of the lungs, giving a reduced ratio of forced expiratory volume in one second to forced vital capacity (FEV1/FVC) on spirometry (the spirometry pattern is set out in the Pulmonary function tests topic, and the clinical comparison of asthma and chronic obstructive pulmonary disease in the Asthma versus COPD topic). This topic covers the underlying pathology of each.

## The five patterns compared

| Disease | Site | Core pathology | Aetiology | Histology |
|---|---|---|---|---|
| Chronic bronchitis | Bronchus | Excess mucus production | Tobacco smoke, air pollution | Goblet cell hyperplasia and hypertrophy of the mucous glands |
| Bronchiectasis | Bronchus | Permanent dilatation and scarring of the airways | Recurrent infection (cystic fibrosis a major risk factor) | Permanent fibrotic dilatation of the bronchi |
| Asthma | Bronchus | Airway constriction from mast cell degranulation | Immunological — allergens, drugs, cold air, exercise | Smooth-muscle hyperplasia, excess mucus, eosinophils, Curschmann spirals (whorls of shed epithelium) and Charcot–Leyden crystals |
| Emphysema | Acinus | Airspace enlargement with alveolar wall destruction | Tobacco smoke, alpha-1-antitrypsin deficiency | Loss of the alveolar parenchyma distal to the terminal bronchiole |
| Small airway disease (bronchiolitis) | Bronchiole | Inflammatory scarring and obliteration | Tobacco smoke, air pollutants | Inflammatory narrowing of the bronchioles |

- **Chronic bronchitis** is defined clinically as a cough productive of sputum on most days for at least 3 months over 2 consecutive years; it is complicated by recurrent infection, chronic hypoxia and pulmonary hypertension.
- **Emphysema** presents with dyspnoea and cough and can be complicated by pneumothorax, respiratory failure and pulmonary hypertension. Chronic bronchitis and emphysema together make up chronic obstructive pulmonary disease.
- **Asthma** causes episodic cough, reversible wheeze and acute dyspnoea; poorly controlled disease can become chronic or, rarely, fatal.

## Bronchiectasis

Bronchiectasis is permanent, abnormal dilatation of the bronchi. It develops through a **vicious cycle**: recurrent infection or inflammation causes bronchial wall oedema and excess mucus, which recruits lymphocytes and releases proteases that damage the bronchial wall, leaving it more prone to infection, so the cycle repeats. It presents with a chronic cough productive of large volumes of purulent sputum, and is complicated by recurrent infection, haemoptysis, pulmonary hypertension and (rarely) secondary amyloidosis. The causes divide into acquired and congenital:

- **Post-infectious** — the commonest cause (for example after whooping cough or pneumonia).
- **Impaired host defence** — primary (hypogammaglobulinaemia) or secondary (chemotherapy).
- **Obstruction** — extrinsic or intrinsic, including middle-lobe syndrome (often secondary to chronic obstructive pulmonary disease).
- **Associated disease** — asthma, connective tissue disorders, aspiration, and other interstitial or bronchiolar disease.
- **Congenital** — cystic fibrosis, primary ciliary dyskinesia, hypogammaglobulinaemia, and Young's syndrome (the triad of rhinosinusitis, azoospermia and bronchiectasis).

## Cystic fibrosis

Cystic fibrosis is an **autosomal recessive** disorder caused by mutations in the **cystic fibrosis transmembrane conductance regulator (CFTR)** gene — most commonly the F508del mutation. Defective chloride transport produces abnormally thick secretions that obstruct hollow organs and are readily colonised by bacteria (frequently **Pseudomonas aeruginosa**), causing repeated lung infections and, in time, bronchiectasis. Because CFTR is expressed widely it is a multisystem disease, so pancreatic insufficiency causes malabsorption.

> The named histological clues are worth memorising: Curschmann spirals and Charcot–Leyden crystals in asthma, goblet cell hyperplasia in chronic bronchitis, and destruction of the parenchyma distal to the terminal bronchiole in emphysema.`,
        },
        {
          id: "pneumonia_patterns",
          name: "Pneumonia: pathological patterns",
          content: `## Pneumonia: pathological patterns

Pneumonia is infection and inflammation of the lung parenchyma. Its clinical assessment and treatment (including CURB-65) are in the Pneumonia and CURB-65 topic; this topic covers the three pathological patterns, which map onto different organisms and hosts.

## Bronchopneumonia

Bronchopneumonia is **patchy** consolidation in a bronchial and peribronchial distribution, usually caused by **low-virulence** organisms. It is typically seen in the **elderly and frail**, often as a terminal event.

## Lobar pneumonia

Lobar pneumonia is a **fibrinosuppurative consolidation of an entire lobe**, usually caused by a **high-virulence** organism — classically **Streptococcus pneumoniae**, which produces rust-coloured sputum. Untreated, it passes through four classic stages:

| Stage | Findings |
|---|---|
| Congestion | Vascular engorgement and protein-rich oedema fluid |
| Red hepatisation | Red, firm, airless lung packed with red cells, neutrophils and fibrin |
| Grey hepatisation | Red cells break down, leaving a dry grey-brown fibrinosuppurative surface |
| Resolution | Enzymatic digestion of the exudate and restoration of the normal architecture |

## Atypical pneumonia

Atypical pneumonia is an **interstitial pneumonitis** — the inflammation lies in the alveolar walls rather than filling the air spaces, so there is little intra-alveolar exudate. It is caused by organisms such as **Mycoplasma pneumoniae, Chlamydophila pneumoniae and Legionella pneumophila**.

> "Hepatisation" describes lobar pneumonia at the stage where the airless, consolidated lung looks and feels like liver — red first (red cells), then grey (fibrinosuppurative), before resolution.`,
        },
        {
          id: "lung_cancer",
          name: "Lung cancer",
          content: `## Lung cancer

Lung cancer is the leading cause of cancer death. For treatment it is divided into **small cell lung cancer** and **non-small cell lung cancer** (squamous cell carcinoma, adenocarcinoma and large cell carcinoma), which differ in their cell of origin, location, behaviour and molecular drivers.

## The main types

| Type | Frequency | Location | Key features |
|---|---|---|---|
| Squamous cell carcinoma | 30–50% | Central (proximal bronchi) | Strongest link to smoking; keratinisation and intercellular prickles (desmosomes); cavitation; hypercalcaemia from parathyroid-hormone-related peptide |
| Adenocarcinoma | 20–30% | Peripheral | Commonest in women and non-smokers; glandular differentiation and mucin; metastasises early; EGFR mutations |
| Small cell carcinoma | 20–25% | Central (proximal bronchi) | Neuroendocrine origin; strong smoking link; highly malignant, metastasises early; ectopic hormones |
| Large cell carcinoma | 10–15% | Variable | Poorly differentiated, with no glandular or squamous features; poor prognosis |

- **Squamous cell carcinoma** has the highest rate of p53 and c-myc mutations, spreads locally with late metastasis, and is less responsive to chemotherapy. It progresses from hyperplasia through squamous metaplasia and dysplasia to carcinoma in situ and then invasive carcinoma.
- **Adenocarcinoma** shows mucin vacuoles on cytology and, at the molecular level, epidermal growth factor receptor (EGFR) mutations; it progresses from atypical adenomatous hyperplasia through in-situ change to invasive disease.
- **Small cell carcinoma** consists of small, poorly differentiated "oat cells", commonly carries p53 and RB1 mutations, and although chemosensitive has a poor prognosis because it metastasises early — to bone, adrenal, liver and brain — and presents late.

## Paraneoplastic syndromes

Lung cancers commonly secrete hormones and peptides ectopically:

| Substance | Effect | Usual type |
|---|---|---|
| Antidiuretic hormone | Syndrome of inappropriate antidiuretic hormone (hyponatraemia) | Small cell |
| Adrenocorticotrophic hormone | Cushing's syndrome | Small cell |
| Parathyroid-hormone-related peptide | Hypercalcaemia and bone pain | Squamous cell |
| Calcitonin | Hypocalcaemia | Various |
| Serotonin | Carcinoid syndrome (flushing, diarrhoea, bronchoconstriction) | Carcinoid |
| Bradykinin | Cough | Various |

Small cell tumours are also associated with **Lambert–Eaton myasthenic syndrome**.

## Molecular markers and staging

Molecular testing guides treatment of non-small cell cancers: **EGFR** mutations (usually adenocarcinoma) predict response to anti-EGFR tyrosine kinase inhibitors, whereas **KRAS** mutations and the **EML4–ALK** rearrangement predict a lack of benefit from those inhibitors, and **ERCC1** expression predicts a poorer response to cisplatin. Staging uses the **tumour–node–metastasis (TNM)** system — tumour size and invasion of the pleura or pericardium (T1–4), lymph node involvement (N0–2) and distant metastasis (M0–1) — and is the single most important prognostic factor.

## Mesothelioma

Malignant mesothelioma arises from the parietal or visceral **pleura**, spreads widely within the pleural space, and presents with chest pain, breathlessness and a large pleural effusion after a long latent period (25 to 45 years) from asbestos exposure. It is covered further in the Asbestos-related lung disease topic.

> Match the tumour to its habit: squamous and small cell are central and smoking-related, whereas adenocarcinoma is peripheral and the type seen in non-smokers and women. For the paraneoplastic hormones, small cell drives the syndrome of inappropriate antidiuretic hormone and Cushing's syndrome, while squamous cell drives hypercalcaemia through parathyroid-hormone-related peptide.`,
        },
        {
          id: "pulmonary_vascular_disease",
          name: "Pulmonary vascular & alveolar disease",
          content: `## Pulmonary vascular and alveolar disease

This topic groups the diseases of the pulmonary circulation and the acute injuries of the alveoli: pulmonary embolism, pulmonary hypertension, pulmonary oedema and diffuse alveolar damage.

## Pulmonary embolism

About **95% of pulmonary emboli arise from deep vein thromboses**. The risk factors are those of **Virchow's triad** — venous stasis, vessel wall injury and hypercoagulability — and include immobility, cardiac disease, cancer, female sex, and primary or secondary hypercoagulable states.

- **Large emboli** lodge in the main pulmonary arteries and cause acute right heart strain (acute cor pulmonale), cardiogenic shock and death if more than about 60% of the pulmonary vascular bed is occluded; an embolus straddling the bifurcation of the pulmonary trunk is a **saddle embolus**.
- **Small emboli** may be silent or cause peripheral wedge-shaped infarcts; repeated small emboli can lead to pulmonary hypertension.
- **Non-thrombotic emboli** include bone marrow, amniotic fluid, tumour, air, fat and foreign material.

## Pulmonary hypertension

Pulmonary hypertension is a mean pulmonary arterial pressure above **25 mmHg at rest**. The World Health Organization classifies it by cause:

| Class | Cause |
|---|---|
| 1 | Pulmonary arterial hypertension — idiopathic, heritable, drug- or toxin-induced, or associated with congenital heart disease (idiopathic disease is commonest in women aged 20 to 40) |
| 2 | Left heart disease — systolic or diastolic dysfunction, or valve disease |
| 3 | Lung disease — for example interstitial lung disease |
| 4 | Chronic thromboembolic disease — fibrosis from repeated emboli |
| 5 | Unclear or multifactorial mechanisms — metabolic, systemic or haematological disorders |

Mechanistically the raised pressure may be **pre-capillary** (chronic hypoxia or embolism), **capillary** (pulmonary fibrosis) or **post-capillary** (left heart disease or veno-occlusive disease), and chronic vasoconstriction of the arterioles leads to intimal fibrosis and thickened vessel walls. The main complication is **right heart failure**, with venous congestion of the organs (a nutmeg liver) and peripheral oedema.

## Pulmonary oedema

Pulmonary oedema is accumulation of fluid within the alveoli, which impairs gas exchange. The main cause is **left heart failure**. Histology shows intra-alveolar fluid acutely and, with chronic congestion, iron-laden macrophages known as **"heart failure cells"**. The chest radiograph shows alveolar shadowing in a **batwing** distribution, **Kerley B lines**, fluid in the horizontal fissure and (in cardiac cases) cardiomegaly.

## Diffuse alveolar damage

Diffuse alveolar damage is acute injury to the alveoli producing an exudative inflammatory reaction and rapid respiratory failure that often needs ventilation in intensive care. In adults it underlies the **acute respiratory distress syndrome (ARDS)** — triggered by infection, aspiration, drowning, burns or trauma — and in premature neonates it corresponds to **hyaline membrane disease**, from insufficient surfactant. The affected lung is expanded, firm, plum-coloured and airless, and the chest radiograph shows a **"white-out"** of both lung fields.

> Two radiological signatures: cardiogenic pulmonary oedema gives batwing shadowing with Kerley B lines and a large heart, whereas diffuse alveolar damage (ARDS) gives a bilateral white-out. A saddle embolus straddles the bifurcation of the pulmonary trunk and can be rapidly fatal.`,
        },
      ],
    },
    {
      id: "endocrinology", name: "Endocrinology & Metabolic", icon: "🦋",
      topics: [
        {
          id: "pituitary_axis_function_tests",
          name: "Pituitary axis & dynamic function testing",
          content: `## The pituitary axis

The pituitary sits in the sella turcica of the sphenoid bone, immediately below the optic chiasm, and is joined to the hypothalamus by the pituitary stalk. It has two functionally distinct lobes. The **anterior pituitary** manufactures its own hormones in response to releasing factors carried down the stalk in a portal blood supply. The **posterior pituitary** is neural tissue that stores and releases two hormones made in the hypothalamus itself.

## Hypothalamic control of the anterior pituitary

| Hypothalamic hormone | Effect | Anterior pituitary hormone |
|---|---|---|
| Growth hormone-releasing hormone (GHRH) | Stimulates | Growth hormone (GH) |
| Gonadotrophin-releasing hormone (GnRH, also called LHRH) | Stimulates | Luteinising hormone (LH) and follicle-stimulating hormone (FSH) |
| Thyrotrophin-releasing hormone (TRH) | Stimulates | Thyroid-stimulating hormone (TSH), and also prolactin |
| Dopamine | **Inhibits** | Prolactin |
| Corticotrophin-releasing hormone (CRH) | Stimulates | Adrenocorticotrophic hormone (ACTH) |

Prolactin is the exception that explains a great deal of pituitary pathology: it is the only anterior pituitary hormone held under **tonic inhibition**. Dopamine travelling down the stalk continuously suppresses it, so anything that interrupts the stalk raises prolactin, as do dopamine-blocking drugs.

The **posterior pituitary** releases only two hormones, both synthesised in the hypothalamus and carried down the stalk within nerve axons: **antidiuretic hormone (ADH, also called vasopressin)** and **oxytocin**. The disorders of ADH are covered in the *SIADH and diabetes insipidus* topic.

## Combined pituitary function test

The combined pituitary function test assesses every component of anterior pituitary function in one sitting. It is used mainly in pituitary tumours, and after they have been treated, to establish what needs replacing.

**Indication**

- Assessment of all components of anterior pituitary function, particularly in pituitary tumours or following tumour treatment

**Contraindications**

- **Ischaemic heart disease** — the induced hypoglycaemia is a major cardiac stress
- **Epilepsy** — hypoglycaemia may provoke a seizure
- **Untreated hypothyroidism**, which blunts both the GH and the cortisol response and so makes the result uninterpretable

**Side effects**

- Sweating, palpitations and loss of consciousness — all the adrenergic effects of hypoglycaemia
- Rarely, convulsions with the hypoglycaemia
- Warn the patient that the TRH injection commonly causes a transient metallic taste in the mouth, flushing and nausea

**Procedure**

- Fast the patient overnight, secure good intravenous access and weigh them
- Draw up insulin at 0.15 units/kg, TRH 200 micrograms and LHRH 100 micrograms into a 5 mL syringe and give intravenously
- Take a basal thyroxine, then glucose, cortisol, GH, LH, FSH, TSH and prolactin every 30 minutes for the first hour
- Continue glucose, cortisol and GH out to 2 hours, so that samples exist at 0, 30, 60, 90 and 120 minutes

## Interpreting the result

The test has three components, each read separately.

**The insulin tolerance test** is the reference standard for the growth hormone and cortisol axes. Insulin induces hypoglycaemia (a glucose below 2.2 mmol/L), which is a powerful metabolic stress and should drive ACTH and GH release.

- An adequate cortisol response is a rise of more than 170 nmol/L, to a peak above 500 nmol/L
- An adequate GH response is a rise to more than 6 micrograms/L

**The TRH test** should raise both TSH and prolactin, since TRH stimulates the lactotrophs as well.

- The normal result is a TSH rise to more than 5 mU/L, with the 30-minute value higher than the 60-minute value
- In hyperthyroidism the TSH remains suppressed
- In hypothyroidism there is an exaggerated response
- Modern sensitive TSH assays mean basal levels are now adequate, so this dynamic test is no longer routinely needed to diagnose hyperthyroidism

**The GnRH (LHRH) test** should raise LH and FSH, with the normal peak at either 30 or 60 minutes.

- LH should rise above 10 U/L and FSH above 2 U/L
- An inadequate response may be an early indication of hypopituitarism
- Pre-pubertal children should show no LH or FSH response to LHRH

## Diagnosing gonadotrophin deficiency

Gonadotrophin deficiency is diagnosed on the **basal** levels rather than on the dynamic response. What you are looking for is a low sex steroid **without** the compensatory rise in gonadotrophins that a healthy pituitary would produce:

- In men, a low testosterone in the absence of raised basal gonadotrophins
- In women, a low oestradiol without elevated basal gonadotrophins, and no response to clomifene

If sex steroids are already present — as in precocious puberty — the pituitary is "primed" and will respond to LHRH. Priming with sex steroids must therefore **not** be given before this test.

## Replacing what is missing

Hypopituitarism is treated by replacing the target-gland hormones rather than the pituitary ones: hydrocortisone, levothyroxine, sex steroids (oestrogen or testosterone) and, where indicated, growth hormone.

> Safety point: always replace **hydrocortisone before levothyroxine**. Thyroid hormone accelerates cortisol metabolism, so starting levothyroxine first in someone with unrecognised ACTH deficiency can precipitate an adrenal crisis.`,
        },
        {
          id: "pituitary_tumours",
          name: "Pituitary tumours, prolactinoma & acromegaly",
          content: `## Pituitary tumours

Almost all pituitary tumours are benign adenomas. They may produce any combination of pituitary hormones or be entirely non-secreting, and they cause disease in three ways: by the hormone they make, by the hormones they destroy, and by pressing on neighbouring structures.

- A **microadenoma** is under 10 mm, and is usually benign and slow-growing
- A **macroadenoma** is 10 mm or larger and behaves far more aggressively, with a much greater chance of local compression

## Mass effect

The optic chiasm lies directly above the gland, so upward extension compresses the crossing nasal retinal fibres and produces the classical **bitemporal hemianopia**. Lateral extension into the cavernous sinus involves the third, fourth and sixth cranial nerves, causing diplopia, and the first and second divisions of the trigeminal nerve, causing facial numbness. Headache is common, and progressive destruction of the normal gland produces hypopituitarism.

A separate and easily missed mechanism is the **stalk effect**. A non-functioning adenoma may crush the pituitary stalk, reducing the blood flow that carries inhibitory dopamine to the lactotrophs, so prolactin rises. Crucially the rise is only modest, whereas a true prolactinoma produces a massive one — and that difference in magnitude is how the two are told apart.

**Pituitary apoplexy** is sudden haemorrhage into or infarction of an adenoma. It presents with thunderclap headache, visual loss, ophthalmoplegia and hypotension from acute ACTH deficiency, and needs urgent intravenous hydrocortisone and neurosurgical assessment.

## How high is the prolactin?

Because a raised prolactin has so many causes, the degree of elevation is the single most useful discriminator.

| Mild elevation (under 1000 mIU/L) | Moderate elevation (1000 to 5000 mIU/L) | Extreme elevation (over 5000 mIU/L) |
|---|---|---|
| Stress; recent breast examination; vaginal examination; hypothyroidism; polycystic ovary syndrome | Hypothalamic tumour; non-functioning pituitary tumour compressing the stalk; microprolactinoma; polycystic ovary syndrome; drugs such as domperidone, metoclopramide and the phenothiazines | Macroprolactinoma |

Hypothyroidism raises prolactin because the high TRH of primary hypothyroidism stimulates the lactotrophs directly, so always check thyroid function before investigating a raised prolactin any further.

## Prolactinoma

A prolactinoma is the commonest functioning pituitary tumour. Prolactin suppresses gonadotrophin release, so the clinical picture is one of hypogonadism: **galactorrhoea**, amenorrhoea or oligomenorrhoea and infertility in women, and loss of libido, erectile dysfunction and gynaecomastia in men. Men tend to present later, and therefore with larger tumours and visual field loss.

The biochemistry shows a prolactin **above 5000 mIU/L**, and often far higher in a macroprolactinoma. On combined pituitary function testing the other axes frequently fail, with no adequate rise in growth hormone (above 10 micrograms/L) or cortisol (above 550 nmol/L) — evidence that the tumour has compressed the rest of the gland, and that those hormones will need replacing.

Treatment is unusual among tumours in being **medical first**:

- **First line is a dopamine agonist** — cabergoline, which is better tolerated and more effective, or bromocriptine, which is preferred where pregnancy is planned. These shrink the tumour as well as normalising the prolactin, so they frequently reverse the visual field defect too
- **Second line is transsphenoidal excision**, reserved for visual or pressure symptoms that fail to respond to medical treatment, or for drug intolerance
- Replace whatever the tumour has knocked out — hydrocortisone, levothyroxine, oestrogen or testosterone, and growth hormone

## Non-functioning pituitary adenoma

A non-functioning adenoma secretes no hormone of its own, so it declares itself either through mass effect or as an incidental scan finding. The prolactin is **moderately** raised, characteristically 1000 to 5000 mIU/L, through the stalk effect rather than by secretion.

A dopamine agonist may be tried, but it will not shrink the tumour as it does a true prolactinoma, so surgery is needed for compressive symptoms. A small, asymptomatic adenoma can simply be watched with serial imaging and visual fields — doing nothing is a legitimate option where it is causing no symptoms.

## Acromegaly

Acromegaly is growth hormone excess in an adult, almost always from a pituitary somatotroph adenoma. The same excess before the epiphyses fuse causes gigantism instead. The changes come on so insidiously that serial photographs are one of the most useful diagnostic tools.

The features are coarsening of the facial features with a prominent supraorbital ridge and prognathism, enlarging hands and feet so that rings and shoes stop fitting, macroglossia, a deepening voice, excessive sweating, skin tags, carpal tunnel syndrome and arthropathy. Systemically there is **hypertension, cardiomyopathy, obstructive sleep apnoea and an increased risk of colorectal polyps and carcinoma**.

The biochemical signs are a **high glucose** — growth hormone antagonises insulin, so around a third develop diabetes — together with a raised **calcium** and **phosphate**.

**Investigation**

- The **oral glucose tolerance test (OGTT) is the gold standard**: a glucose load normally suppresses GH, whereas in acromegaly the GH fails to suppress
- **Insulin-like growth factor 1 (IGF-1)** is the practical screening test and the main measure for follow-up, because it reflects average GH exposure rather than the pulsatile level
- A random GH is of little diagnostic value, since in acromegaly it is already high at baseline; prolactin is often raised too, and the cortisol response may be absent where the tumour has compromised the corticotrophs
- Magnetic resonance imaging of the pituitary localises the adenoma, and visual fields are documented

**Management, in order of preference**

- **Transsphenoidal surgery** is the best treatment and the only one likely to cure
- **Pituitary radiotherapy** where surgery is incomplete or unsuitable
- **Cabergoline**, a dopamine agonist, which is less effective here than in prolactinoma but useful where prolactin is co-secreted
- **A somatostatin analogue** such as octreotide or lanreotide, which suppresses GH release directly; these are expensive and are given by injection
- **Pegvisomant**, a growth hormone **receptor** antagonist, which normalises IGF-1 but does not shrink the tumour

Follow-up is yearly GH and IGF-1 with an OGTT where needed, plus visual fields, vascular assessment, body mass index and serial photographs.

> High-yield: the degree of prolactin elevation is the discriminator. Over 5000 mIU/L means a macroprolactinoma, 1000 to 5000 is usually stalk compression by a non-functioning adenoma, and under 1000 is stress, drugs, hypothyroidism or polycystic ovary syndrome. Prolactinoma is treated medically first with a dopamine agonist, whereas acromegaly is treated surgically first.`,
        },
        {
          id: "siadh_di",
          name: "SIADH & diabetes insipidus",
          content: `## SIADH and diabetes insipidus

These two disorders of antidiuretic hormone (ADH, also called vasopressin) sit at opposite ends of water balance: too much ADH (SIADH) dilutes the plasma, while too little or ineffective ADH (diabetes insipidus) concentrates it.

## Syndrome of inappropriate ADH (SIADH)

Inappropriate ADH secretion drives water reabsorption, producing a **euvolaemic hyponatraemia** with concentrated urine. It is a diagnosis of exclusion, defined by:

- True hyponatraemia with a **low serum osmolality** (under 275 mmol/kg)
- **Inappropriately concentrated urine** (urine osmolality over 100) with a **urine sodium over 20**
- Clinical euvolaemia
- Normal thyroid, adrenal (a normal 9 am cortisol) and renal function

The causes group into four Cs: **cancer** (especially small-cell lung cancer secreting ADH ectopically), **central nervous system disease** (meningitis, haemorrhage, abscess), **chest disease** (pneumonia, tuberculosis) and **drugs** (selective serotonin reuptake inhibitors, carbamazepine, opioids, proton-pump inhibitors). Management is fluid restriction and treating the cause; vasopressin-receptor antagonists ("vaptans" such as tolvaptan) are used for resistant cases.

## Diabetes insipidus

Diabetes insipidus produces large volumes of dilute urine (**polyuria and polydipsia**) with a tendency to hypernatraemia. The hallmark is a **urine-to-plasma osmolality ratio below 2** — dilute urine despite concentrated plasma.

| Feature | Cranial DI | Nephrogenic DI |
|---|---|---|
| Problem | Too little ADH produced | Kidney insensitive to ADH |
| Causes | Pituitary surgery, trauma, tumour (craniopharyngioma), autoimmune — but around **half of cases are idiopathic** | Usually iatrogenic (**lithium**); also hypercalcaemia, hypokalaemia, chronic kidney disease, inherited channel defects |
| Desmopressin response | Urine concentrates (over 600) | No response |
| Treatment | Desmopressin | Treat the cause; thiazide diuretic (paradoxically) |

The **water deprivation test** distinguishes them: after fluid restriction the urine stays dilute in diabetes insipidus (whereas it concentrates in primary polydipsia); giving desmopressin then concentrates the urine in cranial but not nephrogenic disease. Always first exclude diabetes mellitus (glucose), hypokalaemia and hypercalcaemia.

A third and much rarer form is **adipsic (hypothalamic) diabetes insipidus**, in which damage to the hypothalamus destroys the thirst drive as well. These patients become **hypernatraemic without feeling thirsty**, so they do not drink to compensate and cannot be managed on desmopressin alone; they need a prescribed daily fluid intake with regular weights and sodium monitoring.`,
        },
        {
          id: "thyroid_overview",
          name: "Thyroid function tests & the causes of thyroid disease",
          content: `## Reading thyroid function tests

The thyroid axis is read from the thyroid-stimulating hormone (TSH) together with the free thyroxine (T4), and in selected cases the free tri-iodothyronine (T3). TSH is the more sensitive marker, because the pituitary responds steeply to very small changes in circulating thyroid hormone.

| Test | Reference range |
|---|---|
| TSH | 0.33 to 4.5 mU/L |
| Free T4 | 10.2 to 22.0 pmol/L |
| Free T3 | 3.2 to 6.5 pmol/L |

Eight patterns cover essentially every thyroid result you will be shown.

| TSH | Free T4 or T3 | Interpretation |
|---|---|---|
| High | Low T4 | **Primary hypothyroidism** — atrophic, Hashimoto's, subacute (De Quervain's), postpartum or Riedel's thyroiditis |
| High | Normal T4 | **Treated hypothyroidism or subclinical hypothyroidism** — look for the associated hypercholesterolaemia |
| High | High T4 | **A TSH-secreting pituitary tumour, or thyroid hormone resistance** — rare, but the only pattern in which both are high |
| Low | High T4 or T3 | **Hyperthyroidism** — Graves' disease, toxic multinodular goitre, toxic adenoma, drugs (thyroxine, amiodarone) or ectopic production from a trophoblastic tumour or struma ovarii |
| Low | Normal T3 and T4 | **Subclinical hyperthyroidism** |
| Low | Low T4 | **Secondary hypothyroidism**, from hypothalamic or pituitary disease |
| High, later low | Low T3 and T4 | **Sick euthyroid syndrome**, with any severe illness, as the body shuts down metabolism |
| Normal | Abnormal T4 | Consider assay interference, a change in thyroid-binding globulin, or amiodarone |

Two of these deserve expanding. In **subclinical hypothyroidism** progression to overt disease is much more likely if **anti-thyroid peroxidase antibodies are positive**. **Sick euthyroid syndrome** is not thyroid disease at all but the biochemical signature of severe non-thyroidal illness, which is why thyroid function should not be checked in an acutely unwell inpatient without a specific reason, and should be repeated once they have recovered.

## Hypothyroidism

The picture is one of a slowed metabolism: fatigue, weight gain, cold intolerance, constipation, dry skin and hair, hoarseness, menorrhagia, slow-relaxing reflexes and low mood. Hypercholesterolaemia and a macrocytic anaemia often accompany it.

| Group | Cause |
|---|---|
| **Autoimmune** | **Primary atrophic hypothyroidism** — the commonest cause in the United Kingdom. Diffuse lymphocytic infiltration causes atrophy, so there is **no goitre** and the gland is small. No specific antibody has been identified. It is associated with pernicious anaemia, vitiligo and other endocrinopathies |
| **Autoimmune** | **Hashimoto's thyroiditis** — plasma cell infiltration with a painless **goitre**, typically in older women. There may be an initial thyrotoxic phase, "Hashitoxicosis". Autoantibody titres are high (anti-thyroid peroxidase and anti-thyroglobulin), and **Hurthle cells** are seen histologically |
| **Other** | **Iodine deficiency** — the commonest cause worldwide |
| **Other** | Post-thyroidectomy or post-radioiodine |
| **Other** | Drugs — antithyroid drugs, **lithium** and **amiodarone** |
| **Other** | **Riedel's thyroiditis** — dense fibrosis replacing the normal parenchyma, giving a painless, **stony-hard** gland |

## Hyperthyroidism

Features reflect a fast metabolism: weight loss despite a good appetite, heat intolerance, sweating, tremor, palpitations and atrial fibrillation, anxiety, diarrhoea and oligomenorrhoea. Graves' disease adds eye signs and a diffuse goitre.

The most useful way to classify the causes is by **radionuclide uptake**, because that separates a gland which is genuinely overproducing hormone from one that is merely leaking stored hormone — and the distinction dictates the treatment.

| Uptake | Cause |
|---|---|
| **High** | **Graves' disease** — the commonest cause, far more common in women (roughly 9 to 1), with a painless diffuse goitre, **anti-TSH receptor antibodies** and **high diffuse uptake** on isotope scanning with technetium-99 |
| **High** | **Toxic multinodular goitre (Plummer's disease)** — multiple high-uptake "hot" nodules in a painless gland; the follicular cells are enlarged and distended with colloid, with a flattened epithelium |
| **High** | **Toxic adenoma** — about 5% of cases, a solitary hot nodule giving a single area of uptake |
| **Low** | **Subacute (De Quervain's) thyroiditis** — a self-limiting, post-viral, **painful** goitre; thyrotoxic first, then hypothyroid, then recovery |
| **Low** | **Postpartum thyroiditis** — the same pattern as De Quervain's, occurring after delivery |
| **Low** | **Ectopic** — a trophoblastic tumour or struma ovarii, driven by excess human chorionic gonadotrophin — or exogenous thyroxine |

> High-yield: a **painful** goitre with **low** uptake means thyroiditis, in which preformed hormone is simply leaking from a damaged gland, so **antithyroid drugs do not work** and treatment is supportive. A **painless** goitre with **high** uptake means true overproduction, which does respond to antithyroid drugs or radioiodine. Treatment is covered in the *Treating hyperthyroidism and hypothyroidism* topic.`,
        },
        {
          id: "thyroid_treatment",
          name: "Treating hyperthyroidism & hypothyroidism",
          content: `## Treating hyperthyroidism

There are three definitive modalities — antithyroid drugs, radioiodine and surgery — plus symptom control, which is started in everyone while the definitive treatment takes effect.

## Symptom relief

- A **beta-blocker**, usually propranolol because it also blocks the peripheral conversion of T4 to T3, controls tremor, tachycardia and anxiety within hours
- **Topical steroids** for the dermopathy of Graves' disease, and lubricating **eye drops** for symptomatic thyroid eye disease

## Antithyroid drugs

**Carbimazole** is the drug used most commonly. It blocks thyroid peroxidase and therefore hormone synthesis, but because the gland already holds several weeks of preformed hormone it takes four to six weeks to work. There are two regimens:

- **Titration** — the dose is adjusted downwards against the free T4 and T3 to keep the patient euthyroid
- **Block and replace** — a high dose deliberately renders the patient hypothyroid and levothyroxine is added back. This is used less often, because the higher carbimazole dose carries a greater risk of side effects

The important adverse effects are a **rash**, which is common, and **agranulocytosis**, which is rare but dangerous: warn every patient to seek an urgent full blood count if they develop a sore throat, mouth ulcers or fever. Carbimazole is teratogenic, so women of childbearing potential need effective contraception, and **propylthiouracil** is substituted in the first trimester and where conception is planned within six months. Carbimazole is also associated with acute pancreatitis and should not be restarted in anyone who has had it.

## Radioiodine

Radioactive iodine is concentrated by the thyroid and destroys thyroid tissue over weeks to months. Current NICE guidance (NG145) positions it as the **first-line definitive treatment** for Graves' disease where antithyroid drugs are unlikely to achieve lasting remission, rather than as something reserved for when drugs have failed. It is also the treatment of choice for **toxic nodular disease**, which never remits spontaneously, so drug treatment can only ever suppress it.

- **Permanent hypothyroidism** is the expected outcome rather than a complication, so lifelong levothyroxine and monitoring follow
- It is **contraindicated in pregnancy and in breastfeeding women**, and conception should be avoided for several months afterwards
- It can worsen **active thyroid eye disease**, so is avoided or covered with corticosteroids in that situation

## Surgery

Hemithyroidectomy or total thyroidectomy. The indications are:

- A woman intending to become pregnant within the next six months
- Local compression from a goitre, causing oesophageal or tracheal symptoms
- Cosmetic concern
- Suspected cancer
- Co-existing hyperparathyroidism, since both glands can be dealt with in one operation
- Disease refractory to medical therapy
- A large goitre, or patient preference

Two rules matter. The patient **must be rendered euthyroid before surgery**, or the operation can precipitate a thyroid storm. And anyone having a total thyroidectomy will need lifelong thyroid hormone replacement. The specific surgical risks are damage to the **recurrent laryngeal nerve**, causing hoarseness, and to the parathyroid glands, causing hypocalcaemia.

## Thyroid storm

Thyroid storm is decompensated thyrotoxicosis and a medical emergency. It presents as **shock with pyrexia, confusion, vomiting** and tachyarrhythmia, usually triggered by infection, surgery, trauma or iodinated contrast in someone whose hyperthyroidism is untreated.

It must be managed with high-dependency or intensive care support:

- Active **cooling** and paracetamol; avoid aspirin, which displaces thyroid hormone from its binding protein and makes matters worse
- **High-dose antithyroid drugs**, with iodine (Lugol's solution) given at least an hour later to block the release of stored hormone
- **Corticosteroids**, which both cover possible relative adrenal insufficiency and block peripheral T4 to T3 conversion
- A beta-blocker for rate control, together with circulatory and respiratory support
- Treatment of the precipitating illness

## Treating hypothyroidism

Treatment is thyroid replacement therapy with **levothyroxine**, taken once daily on an empty stomach and separated from iron, calcium and proton-pump inhibitors, all of which impair its absorption.

- Start at a **low dose of 25 micrograms in older people and in anyone with ischaemic heart disease**, because a sudden rise in metabolic rate can precipitate angina or an arrhythmia; otherwise a full replacement dose of roughly 1.6 micrograms/kg per day is reasonable
- Recheck the TSH **six to eight weeks** after any dose change, since the axis takes that long to re-equilibrate, then annually once stable
- Titrate against the **TSH** in primary hypothyroidism — but in **secondary** hypothyroidism the TSH is meaningless and the free T4 is used instead
- The requirement rises by roughly a quarter to a half in pregnancy, so increase the dose as soon as pregnancy is confirmed
- Overtreatment is not harmless: a suppressed TSH carries a risk of atrial fibrillation and osteoporosis

In **subclinical hypothyroidism**, treat where the TSH is above 10 mU/L on two occasions. Where the TSH sits between the upper limit of normal and 10, offer a six-month trial of levothyroxine to symptomatic people under 65 and review the effect, and otherwise monitor.`,
        },
        {
          id: "thyroid_neoplasia",
          name: "Thyroid nodules & thyroid cancer",
          content: `## Assessing a thyroid nodule

Thyroid nodules are common and the great majority are benign, so the task is to select the few that need a tissue diagnosis. The features carrying a higher risk of neoplasm are a nodule that is **solitary**, **solid**, in a **young** patient or a **male**, and **cold** on isotope scanning — that is, it takes up no tracer. Rapid growth, hardness, fixation, hoarseness from recurrent laryngeal nerve involvement, cervical lymphadenopathy and previous neck irradiation add further weight.

The order of investigation is thyroid function, then imaging, then cytology. If the TSH is suppressed the nodule is likely to be a "hot", autonomously functioning adenoma, which is almost never malignant and is investigated as hyperthyroidism instead. With a normal TSH, ultrasound assesses the nodule and the neck nodes, and suspicious nodules proceed to **fine-needle aspiration cytology**.

## The types of thyroid cancer

| Type | Typical patient | Key features |
|---|---|---|
| **Papillary (75 to 85%)** | 20 to 40 years, female; associated with previous **irradiation** | The commonest type, with a **very good prognosis**. Often presents as painless cervical lymphadenopathy with no obvious clinical abnormality of the thyroid itself. Spreads to **lymph nodes** and lung. Histology shows **psammoma bodies** (foci of calcification) and empty-appearing nuclei with central clearing, the "Orphan Annie eyes". Tumour marker: thyroglobulin. Managed with surgery with or without radioiodine, plus thyroxine to suppress TSH |
| **Follicular (10 to 20%)** | 40 to 60 years | Well differentiated but **spreads early and by the bloodstream**, to lung, bone, liver, breast and adrenals. Histology shows fairly uniform cells forming small follicles, reminiscent of normal thyroid — so the diagnosis rests on capsular or vascular invasion, which is why fine-needle aspiration cannot separate it from a follicular adenoma. Tumour marker: thyroglobulin. Managed with surgery, radioiodine and thyroxine |
| **Medullary (5%)** | 50 to 60 years; 80% sporadic, **20% familial as part of MEN 2** | A **neuroendocrine** neoplasm of the parafollicular **C cells**, which secrete **calcitonin**. It arises from a different cell line, so it does **not** take up iodine and responds to neither radioiodine nor TSH suppression. Tumour markers: calcitonin and carcinoembryonic antigen (CEA). Histology shows sheets of dark cells with **amyloid deposition** within the tumour, formed from broken-down calcitonin. **Screen for phaeochromocytoma before operating**, then total thyroidectomy with node clearance |
| **Anaplastic** | Elderly | Rare, and most die within a year. Presents as a rapidly enlarging, fixed, hard mass compromising the airway. Very aggressive, with early and wide metastasis locally, to nodes and by blood. Histology is undifferentiated follicular tissue, with large pleomorphic giant cells and spindle cells of sarcomatous appearance |
| **Lymphoma** | — | A **MALToma** of the thyroid. The risk factor is **chronic Hashimoto's thyroiditis**, in which sustained lymphocyte proliferation provides the substrate. Good prognosis |

After surgery for the differentiated cancers, **thyroglobulin** serves as the marker of recurrence — which only works once all normal thyroid tissue has been removed or ablated — and levothyroxine is given at a dose that **suppresses TSH**, removing the growth stimulus to any residual tumour.

## Multiple endocrine neoplasia

Medullary thyroid carcinoma is one arm of the multiple endocrine neoplasia (MEN) syndromes: a group of three **autosomal dominant** disorders carrying a predisposition to cancers of the endocrine system.

| Syndrome | Components |
|---|---|
| **MEN 1** | The three Ps: **Pituitary** adenoma, **Pancreatic** endocrine tumour such as an insulinoma, and **Parathyroid** disease causing hyperparathyroidism |
| **MEN 2A** | Two Ps and an M: **Parathyroid**, **Phaeochromocytoma** and **Medullary** thyroid carcinoma |
| **MEN 2B** | One P and two Ms: **Phaeochromocytoma**, **Medullary** thyroid carcinoma and **Mucocutaneous neuromas**, with a marfanoid habitus |

MEN 1 arises from mutation of the MEN1 tumour suppressor gene, and MEN 2A and 2B from mutations of the RET proto-oncogene. The pancreatic tumours are covered further in the *Pancreatic carcinoma, neuroendocrine tumours and MEN* topic.

> High-yield: papillary is the commonest, spreads to lymph nodes, and shows psammoma bodies and Orphan Annie nuclei. Follicular spreads early by blood. Medullary arises from C cells, secretes calcitonin, is linked to MEN 2 and does not take up radioiodine. Anaplastic is aggressive and rapidly fatal. Lymphoma follows Hashimoto's thyroiditis.`,
        },
        {
          id: "adrenal_insufficiency",
          name: "Adrenal insufficiency & Addisonian crisis",
          content: `## Adrenal insufficiency

The adrenal cortex makes three classes of steroid, and which of them is lost depends on where the problem lies. **Primary** adrenal insufficiency — Addison's disease — is destruction of the gland itself, so both **cortisol and aldosterone** fail. **Secondary** adrenal insufficiency is a lack of ACTH, from pituitary disease or, far more often, from suppression of the axis by exogenous corticosteroids; here aldosterone is preserved, because it is driven by the renin-angiotensin system rather than by ACTH.

## Causes

| Cause | Note |
|---|---|
| **Autoimmune adrenalitis** | The commonest cause in Europe, often alongside other autoimmune disease |
| **Tuberculosis** | The commonest cause worldwide |
| **Metastases** | Tumour deposits in the adrenals, especially from lung and breast |
| **Adrenal haemorrhage** | The Waterhouse-Friderichsen syndrome of meningococcal sepsis |
| **Amyloidosis** | Infiltration of the cortex |
| **Sudden steroid withdrawal** | Abrupt cessation of long-term corticosteroids in an already suppressed axis |

## Clinical and biochemical picture

The onset is insidious and the symptoms unhelpfully vague — **lethargy**, weakness, anorexia, weight loss, nausea, abdominal pain, and **depression or even psychosis** — which is why the diagnosis is so often missed until the patient decompensates. The more specific signs are **postural hypotension** and **skin pigmentation** of the palmar creases, buccal mucosa and scars. The pigmentation belongs to **primary** disease alone: the high ACTH is cleaved from a precursor shared with melanocyte-stimulating hormone, so it stimulates melanocytes directly. Salt craving is characteristic.

The classic biochemistry is a **low sodium with a high potassium** — the mirror image of Conn's syndrome — together with **hypoglycaemia**, since cortisol is a counter-regulatory hormone, plus a mild metabolic acidosis, a raised urea, and sometimes hypercalcaemia and eosinophilia.

## Investigation

The **short Synacthen test** is diagnostic: a baseline cortisol is taken, 250 micrograms of synthetic ACTH (tetracosactide) is given, and cortisol is measured again at 30 minutes. Failure to rise adequately confirms adrenal insufficiency. Measuring **ACTH** then separates the two levels — it is **high in primary** disease, because the pituitary is shouting at a gland that cannot answer, and **low or inappropriately normal in secondary** disease. Adrenal autoantibodies against 21-hydroxylase support an autoimmune cause, and imaging is used where an infiltrative or infective cause is suspected.

## Treatment

Replacement is with **hydrocortisone**, in divided doses that mimic the diurnal rhythm with the largest dose on waking, plus **fludrocortisone** where the lesion is a primary adrenal one and aldosterone is therefore also missing. Secondary insufficiency needs hydrocortisone alone.

Education matters as much as the prescription:

- **Sick day rules** — double the hydrocortisone dose during febrile illness, and switch to the intramuscular route if vomiting
- Carry a **steroid card** and an emergency alert bracelet, and keep a hydrocortisone injection kit at home
- **Never stop the steroid abruptly**, and increase the dose to cover surgery or other major stress

## Addisonian crisis

An untreated or undertreated patient can decompensate into an **Addisonian crisis**: shock with hypotension unresponsive to fluid alone, vomiting, abdominal pain, confusion and profound hypoglycaemia, usually precipitated by infection, surgery or missed doses.

Treat immediately, without waiting for confirmatory tests: **intravenous hydrocortisone 100 mg** followed by regular doses, **rapid intravenous 0.9% sodium chloride** to restore the circulation, intravenous glucose for the hypoglycaemia, and treatment of the precipitant. Fludrocortisone is not needed while high-dose hydrocortisone is running, because at that dose hydrocortisone has enough mineralocorticoid activity of its own. A baseline cortisol and ACTH can be taken before the first dose, provided doing so causes no delay.`,
        },
        {
          id: "cushings_syndrome",
          name: "Cushing's syndrome",
          content: `## Cushing's syndrome

Cushing's syndrome is the clinical state of chronic glucocorticoid excess, whatever its source. Cushing's **disease** is one specific cause of it — a pituitary adenoma secreting ACTH — and the two terms are not interchangeable.

## Causes

The mnemonic **CAPE** covers them: **C**ushing's disease, **A**drenal adenoma, **P**araneoplastic ectopic ACTH, and **E**xogenous steroids. Overall, by a wide margin, the commonest cause is the last of these.

| Group | Cause | Share of endogenous cases |
|---|---|---|
| **ACTH dependent**, with a raised ACTH | **Pituitary adenoma — Cushing's disease** | About 85% |
| **ACTH dependent**, with a raised ACTH | **Ectopic ACTH-producing tumour**, classically **small cell lung cancer** or a carcinoid tumour | About 5% |
| **ACTH independent**, with a suppressed ACTH | **Adrenal adenoma or carcinoma**, or adrenal nodular hyperplasia | About 10% |
| **ACTH independent**, with a suppressed ACTH | **Iatrogenic corticosteroid use** | The commonest cause of all in practice |

## Features

The appearance is characteristic: a **moon face**, a **buffalo hump** of interscapular fat, **central obesity** with wasted limbs, and purple **striae**. There is thin skin with easy **bruising**, **acne**, **hirsutism**, **proximal myopathy** with difficulty rising from a chair or climbing stairs, **hypertension**, **diabetes** or impaired glucose tolerance, osteoporosis, poor wound healing, and mood disturbance ranging from euphoria to depression and frank psychosis.

Ectopic ACTH from a small cell lung cancer behaves quite differently. It is so rapid and so severe that the classic habitus has no time to develop, and it presents instead with profound **hypokalaemic alkalosis**, weakness, pigmentation and hyperglycaemia in a rapidly deteriorating patient.

## Confirming the diagnosis

The first step is to establish that cortisol really is in excess and no longer under normal control — after excluding exogenous steroids with a careful drug history that includes inhaled, topical and injected preparations.

**First line, to confirm the syndrome**

- The **overnight dexamethasone suppression test** — 1 mg of dexamethasone at midnight should suppress the 9 am cortisol, and a failure to suppress is a positive result
- **24-hour urinary free cortisol**, on two collections
- Late-night salivary cortisol, which detects loss of the normal diurnal fall

A positive first-line test suggests true Cushing's syndrome and takes you on to finding the source.

**Second line, to find the source**

Measure **ACTH**. A suppressed ACTH means an adrenal cause, and the adrenals are imaged. A normal or raised ACTH means the source is either the pituitary or an ectopic tumour, and those two must be separated.

The traditional method was the **low-dose (0.5 mg) and high-dose (2 mg) dexamethasone suppression test**. Low-dose dexamethasone fails to suppress cortisol in all forms of Cushing's syndrome, whereas high-dose dexamethasone **does** suppress it in pituitary disease, because a pituitary adenoma retains some negative feedback while an ectopic tumour has none. This test is no longer recommended, because roughly one ectopic source in five also suppresses with high-dose dexamethasone, producing a false positive for pituitary disease.

**Inferior petrosal sinus sampling** has replaced it as the definitive discriminator: ACTH is measured simultaneously in the venous drainage of the pituitary and in the periphery, and a central-to-peripheral gradient localises the source to the pituitary.

**Third line, imaging**

Magnetic resonance imaging of the pituitary for suspected Cushing's disease, and computed tomography or positron emission tomography of the chest and abdomen to hunt for an ectopic ACTH source.

## Treatment

Treatment is aimed at the underlying disease and is usually **surgical removal of the lesion** — transsphenoidal resection of a pituitary adenoma, adrenalectomy for an adrenal tumour, and resection of an ectopic source where that is feasible. Where surgery must be delayed or is impossible, **metyrapone or ketoconazole** can block steroid synthesis in the interim. Iatrogenic Cushing's is managed by tapering the steroid — never by stopping it abruptly, because the axis is suppressed.

> High-yield: confirm the syndrome with an overnight dexamethasone suppression test or 24-hour urinary free cortisol, then use the ACTH to split it — suppressed means adrenal, raised means pituitary or ectopic. Sudden, severe hypokalaemic alkalosis with pigmentation and no Cushingoid habitus is ectopic ACTH from a small cell lung cancer until proven otherwise.`,
        },
        {
          id: "conn_phaeochromocytoma",
          name: "Primary hyperaldosteronism & phaeochromocytoma",
          content: `## Two adrenal causes of secondary hypertension

Both of these are surgically correctable causes of high blood pressure, and both are worth hunting for in a young patient with hypertension, in hypertension resistant to three drugs, or where the potassium is unexpectedly low.

## Primary hyperaldosteronism (Conn's syndrome)

Autonomous aldosterone secretion drives sodium and water retention with loss of potassium and hydrogen ions. The result is **hypertension that is difficult to control**, a **high or high-normal sodium**, a **low potassium** and a metabolic alkalosis, characteristically in a **younger patient**. Many are otherwise asymptomatic; the hypokalaemia may cause muscle weakness, cramps, polyuria and polydipsia.

Two causes account for nearly all of it — **bilateral adrenal hyperplasia**, which is the commoner, and a unilateral **aldosterone-producing adrenal adenoma**, the classical Conn's adenoma. The distinction is the whole point of the workup, because one is treated with drugs and the other with an operation.

**Investigation**

- The screening test is the **aldosterone-to-renin ratio**, which is **raised**: aldosterone is high while renin is suppressed, because the volume expansion switches the renin-angiotensin system off. In *secondary* hyperaldosteronism — renal artery stenosis, heart failure, cirrhosis — both are high
- Correct hypokalaemia and stop interfering drugs first, since spironolactone, beta-blockers and angiotensin-converting enzyme inhibitors all distort the ratio
- Confirm with a saline suppression test, in which aldosterone fails to suppress
- Then localise, with **computed tomography of the adrenals** followed by **adrenal vein sampling** to prove that the excess really is coming from one side before anyone operates

**Treatment**

- **Bilateral hyperplasia** is treated medically with an **aldosterone antagonist** — spironolactone, or eplerenone where the gynaecomastia and menstrual disturbance caused by spironolactone are a problem — or with the potassium-sparing diuretic amiloride
- A **unilateral adenoma** is treated by laparoscopic **adrenalectomy**, which cures or substantially improves the hypertension in most patients
- Any adrenal mass over 4 cm raises the possibility of adrenocortical carcinoma and is generally removed regardless of its hormonal activity

## Phaeochromocytoma

A phaeochromocytoma is a catecholamine-secreting tumour of the **chromaffin cells of the adrenal medulla**. Secretion is episodic, and that is what gives the condition its characteristic paroxysmal presentation.

The classic triad is **headache, hypertension and hyperhidrosis** — that is, sweating — typically in paroxysms lasting minutes, with palpitations, pallor, tremor, anxiety and a sense of impending doom, separated by periods of feeling entirely normal. The hypertension may be sustained or purely episodic. Untreated, it causes **arrhythmias**, hypertensive crisis, cardiomyopathy, stroke and **death**.

The condition is often summarised by the **rule of tens**: roughly 10% are bilateral, 10% malignant and 10% extra-adrenal, the last being a paraganglioma, most often at the organ of Zuckerkandl. A substantial minority are **inherited** — as part of **MEN 2A and 2B**, von Hippel-Lindau disease or neurofibromatosis type 1 — so a phaeochromocytoma should always prompt consideration of genetic testing.

**Investigation** is by measurement of **plasma metanephrines** or **24-hour urinary metanephrines**. These are the breakdown products of adrenaline and noradrenaline, and are more reliable than measuring the catecholamines themselves precisely because secretion is intermittent; urinary vanillylmandelic acid is an older and less sensitive alternative. Computed tomography or magnetic resonance imaging of the abdomen then localises the tumour, with MIBG scintigraphy for extra-adrenal or metastatic disease.

**Treatment is surgical, and the sequence is the examinable point. Remember ABC:**

- **A — Alpha blockade first**, with phenoxybenzamine or doxazosin, together with liberal fluid and salt to fill the vasodilated circulation
- **B — Beta blockade second**, once alpha blockade is established, to control the tachycardia
- **C — Cut it out**: laparoscopic adrenalectomy, once the blood pressure is well controlled

Giving a **beta-blocker first is dangerous**. Blocking the vasodilating beta-2 receptors leaves alpha-mediated vasoconstriction unopposed, and can precipitate a hypertensive crisis.

> High-yield: hypertension with a **low** potassium suggests Conn's syndrome; hypertension with **paroxysmal** headache and sweating suggests a phaeochromocytoma; hypotension with a **high** potassium suggests Addison's disease. In phaeochromocytoma, alpha blockade always comes before beta blockade.`,
        },
        {
          id: "calcium_homeostasis",
          name: "Calcium, vitamin D & hypercalcaemia",
          content: `## Calcium, vitamin D and hypercalcaemia

Calcium balance is controlled by two hormones — parathyroid hormone and the active form of vitamin D — acting on the gut, kidneys and bone. Once their actions are clear, the biochemistry of the calcium disorders and the approach to hypercalcaemia both fall into place.

## Calcium in the blood

The normal plasma calcium is about 2.2 to 2.6 mmol/L, and it travels in three forms: roughly **45% is ionised** (free and biologically active), about **50% is bound to albumin**, and the remaining 5% is complexed with globulins and other ions including citrate and bicarbonate. Because so much is protein-bound, the laboratory reports a **corrected calcium** that adjusts the measured value for the albumin level — otherwise a low albumin would mimic hypocalcaemia.

## The two hormones that control calcium

| Hormone | Source and trigger | Main actions |
|---|---|---|
| Parathyroid hormone (PTH) | Parathyroid glands, released when calcium falls | Mobilises calcium from bone by **activating osteoclasts**, increases renal calcium reabsorption, increases renal phosphate excretion, and increases tubular **1-alpha hydroxylation** of vitamin D |
| Calcitriol — active vitamin D | Final activation in the kidney | Increases absorption of both calcium and phosphate from the gut, and supports bone remodelling |

The key contrast to memorise is that **PTH raises calcium but lowers phosphate** (it makes the kidney waste phosphate), whereas **active vitamin D raises both calcium and phosphate**.

## Activating vitamin D

Vitamin D needs two hydroxylation steps before it can work:

- It enters the body as **cholecalciferol (vitamin D3)**, made in the skin under ultraviolet light or taken in the diet, or as **ergocalciferol (vitamin D2)** from the diet.
- The **liver** adds the first hydroxyl group to make **25-hydroxyvitamin D (calcidiol)** — the stored form, and the one measured to assess a patient's vitamin D status.
- The **kidney** adds the second to make **1,25-dihydroxyvitamin D (calcitriol)**, the active hormone. This final step is stimulated by PTH (and by a low phosphate).

A lack of vitamin D therefore lowers calcium and phosphate, drives a compensatory rise in PTH, and impairs bone mineralisation — causing **osteomalacia** in adults and **rickets** in children.

## Causes of the parathyroid disorders

**Primary hyperparathyroidism** is an intrinsic problem with the gland itself driving PTH up:

- **80% a single parathyroid adenoma**
- **15% hyperplasia or multiple adenomas**
- **0.5% parathyroid carcinoma** — and most carcinomas are in fact non-functional
- As part of **MEN 1** (typically an adenoma) or **MEN 2** (typically hyperplasia)

**Secondary hyperparathyroidism** is an appropriate PTH rise driven by pathology *outside* the gland — **chronic kidney disease**, **vitamin D deficiency** or a **malabsorption syndrome**.

**Tertiary hyperparathyroidism** is what happens when prolonged secondary stimulation makes the glands autonomous, so PTH secretion is no longer regulated. It is classically unmasked by **kidney transplantation**, when the renal driver is removed but the hyperplastic glands carry on secreting.

**Hypoparathyroidism** is most often iatrogenic:

- **Post-surgical** — the commonest cause, typically after thyroid or parathyroid surgery
- Post-radiation
- Autoimmune
- **Iron deposition** in thalassaemia, from repeated transfusion
- **Hypomagnesaemia or hypermagnesaemia** — magnesium is required both for PTH release and for PTH to act
- **Pseudohypoparathyroidism** — resistance to PTH rather than a lack of it
- **DiGeorge syndrome** — failure of parathyroid development

**Albright hereditary osteodystrophy** is the phenotype of hereditary pseudohypoparathyroidism. Because the problem is resistance to PTH, the biochemistry is a **low calcium with a HIGH PTH** — the opposite of true hypoparathyroidism — and it comes with a **round face** and characteristically **shortened fourth and fifth metacarpals**.

## Reading the biochemistry

The pattern of calcium, phosphate, PTH, alkaline phosphatase (ALP) and vitamin D pins down the disorder — one of the highest-yield tables in endocrinology:

| Condition | Calcium | Phosphate | PTH | ALP | Vitamin D |
|---|---|---|---|---|---|
| Primary hyperparathyroidism | High | Low | High or inappropriately normal | Normal or high | Normal |
| Secondary hyperparathyroidism | Low | High (in CKD) | High | High | Low or normal |
| Tertiary hyperparathyroidism | High or normal | Variable | High | Normal or high | Low or normal |
| Hypoparathyroidism | Low | High | Low | Low or normal | Normal |
| Pseudohypoparathyroidism | Low | High | **High** | Normal | Normal |
| Osteomalacia / rickets | Low | Low | High | High | Low |
| Paget's disease of bone | Normal | Normal | Normal | High | Normal |
| Osteoporosis | Normal | Normal | Normal | Normal | Normal |

A few anchors: **primary hyperparathyroidism** gives a high calcium with a low phosphate and a PTH that is high or inappropriately normal; **secondary hyperparathyroidism** is the appropriate PTH rise to a low calcium, classically from chronic kidney disease (CKD) or vitamin D deficiency; **tertiary** is when a chronically stimulated gland becomes autonomous. Note that **osteoporosis has completely normal biochemistry** — a useful negative — and that **pseudohypoparathyroidism is separated from hypoparathyroidism by the PTH**, which is high rather than low.

## Hypercalcaemia

Hypercalcaemia is a corrected calcium of 2.6 mmol/L or more. Two causes account for the great majority:

- **Primary hyperparathyroidism** — the commonest cause in the community, often an incidental finding in a well outpatient.
- **Malignancy** — the commonest cause in hospital inpatients, through bony metastases, myeloma, or secretion of **parathyroid hormone-related peptide (PTHrP)**, classically by squamous cell carcinomas.

Other causes include dehydration, granulomatous disease such as **sarcoidosis** (where macrophages produce extra active vitamin D), thyrotoxicosis, the milk-alkali syndrome, vitamin D toxicity, thiazide diuretics and prolonged immobilisation.

The symptoms are remembered as **stones, bones, groans, moans and thrones**: renal stones, bone pain, psychiatric features such as depression and confusion, abdominal pain and constipation, and polyuria — together with thirst and muscle weakness.

## Working out the cause from the routine bloods

The pivotal investigation is the **PTH level**: a **high or inappropriately normal PTH** means the parathyroids are the driver, while a **suppressed PTH** points to a non-parathyroid cause, above all malignancy. Before that result is back, the routine biochemistry already narrows it down considerably:

- **Urea high and albumin high** — **dehydration**, the commonest benign explanation.
- **Urea normal and albumin high** — a **cuffed specimen**, where a prolonged tourniquet has artefactually concentrated the sample. Repeat it before doing anything else.
- **Albumin low or normal, with a LOW phosphate** — **primary or tertiary hyperparathyroidism**, since PTH wastes phosphate. Confirm with a raised PTH.
- **Albumin low or normal, with a HIGH phosphate and a normal ALP** — **myeloma, excess vitamin D or sarcoidosis**.
- **Albumin low or normal, with a HIGH phosphate and a RAISED ALP** — high bone turnover, so **bone metastases** or **thyrotoxicosis**.

Management of significant hypercalcaemia is **aggressive rehydration with intravenous 0.9% saline** first, followed by an **intravenous bisphosphonate** (such as zoledronate) for malignant or severe disease. Treat the underlying cause — parathyroidectomy for primary hyperparathyroidism, corticosteroids for sarcoidosis or vitamin D toxicity — and stop contributing drugs such as thiazides.

> High-yield: PTH is the single most useful test in hypercalcaemia. A raised or inappropriately normal PTH means primary hyperparathyroidism, while a suppressed PTH means look for malignancy — and together these two account for around 90% of all hypercalcaemia. Remember PTH raises calcium but lowers phosphate, whereas active vitamin D raises both. Hypocalcaemia is covered in the next topic.`,
        },
        {
          id: "hypocalcaemia",
          name: "Hypocalcaemia",
          content: `## Hypocalcaemia

Where hypercalcaemia is dominated by two causes, hypocalcaemia is best approached through the **phosphate**, which splits the causes cleanly in two, and then through the PTH.

## Symptoms

Low ionised calcium raises the excitability of nerve and muscle, so the features are those of neuromuscular irritability:

- **Perioral paraesthesia** — often the earliest symptom
- **Carpopedal spasm**, and tetany in more severe cases
- Feeling **anxious or irritable**, with impaired orientation
- **Increased smooth muscle tone**, which may cause wheeze, colic or dysphagia
- **Trousseau's sign** — carpal spasm when a blood pressure cuff is inflated above systolic pressure for a few minutes
- **Chvostek's sign** — twitching of the facial muscles when the facial nerve is tapped in front of the ear
- Dermatitis, and rarely **impetigo herpetiformis**
- A **prolonged QT interval**, which is the reason severe hypocalcaemia is a cardiac emergency

## Causes, split by the phosphate

| Hypocalcaemia with a HIGH phosphate | Hypocalcaemia with a NORMAL or LOW phosphate |
|---|---|
| **Chronic kidney disease** — the failing kidney both retains phosphate and cannot make active vitamin D | **Osteomalacia** (vitamin D deficiency) |
| **Hypoparathyroidism**, including after thyroid surgery | **Acute pancreatitis** — calcium is consumed forming calcium soaps in fat necrosis |
| **Pseudohypoparathyroidism** — resistance to PTH | **Overhydration**, by dilution |
| **Artefact**, above all hypoalbuminaemia — always check the corrected calcium | **Respiratory alkalosis** — the total calcium is normal but alkalosis drives calcium onto albumin, lowering the **ionised** fraction |

The respiratory alkalosis mechanism is worth holding on to, because it explains why a hyperventilating patient develops perioral tingling and carpopedal spasm with an entirely normal total calcium.

## Treatment

**If symptomatic, or the calcium is below 1.875 mmol/L**, give **parenteral calcium**: intravenous **10% calcium gluconate**, with cardiac monitoring because of the arrhythmia risk, followed by an infusion if needed.

**If asymptomatic, chronic or mild**, oral calcium supplementation is enough. Oral calcium is absorbed better **away from meals**, so it should not be taken with food.

**If the PTH or vitamin D is low**, replace vitamin D as well, and the preparation depends on whether the kidney can still activate it:

- **Chronic kidney disease** — use **alfacalcidol**, which is already 1-alpha hydroxylated and so bypasses the failing kidney
- **Everyone else, including those with liver disease** — **ergocalciferol (vitamin D2)** or **cholecalciferol (vitamin D3)**

Two further points change management in practice. **Magnesium must be checked and corrected**, because hypocalcaemia caused by hypomagnesaemia is refractory to calcium until the magnesium is replaced. And in **hypoparathyroidism** the aim is a low-normal calcium rather than a fully normal one, since PTH is absent to drive renal calcium reabsorption and pushing the level up causes hypercalciuria and nephrocalcinosis.

> High-yield: use the phosphate to split the causes — high phosphate points to chronic kidney disease or a parathyroid problem, normal or low phosphate to vitamin D deficiency, pancreatitis or alkalosis. Trousseau's and Chvostek's signs, a long QT and perioral paraesthesia are the clinical markers, and refractory hypocalcaemia is hypomagnesaemia until proven otherwise.`,
        },
        {
          id: "diabetes_overview",
          name: "Diabetes mellitus",
          content: `## Diabetes mellitus

Diabetes is a group of conditions causing persistent hyperglycaemia. The two common forms differ in mechanism.

| Feature | Type 1 | Type 2 |
|---|---|---|
| Mechanism | **Autoimmune destruction of pancreatic beta cells** by CD4 and CD8 T lymphocytes | **Insulin resistance** with a relative deficiency, strongly linked to obesity |
| Typical onset | Younger, lean | Older, often overweight |
| Ketosis-prone | Yes — may present in diabetic ketoacidosis | No (usually) |
| Insulin dependent | Yes | Not initially |
| First-line treatment | Insulin | Lifestyle, then metformin with an SGLT2 inhibitor |

Both produce the same cardinal symptoms, and each follows directly from the high glucose: **polyuria** from the osmotic diuresis once glucose exceeds the renal threshold, **polydipsia** from the resulting rise in plasma osmolality, and **recurrent infections**, because hyperglycaemia impairs immune function. Blurred vision, unexplained weight loss and tiredness complete the picture.

## Diagnosis

Any one of the following is diagnostic **in a symptomatic patient**:

- **HbA1c of 48 mmol/mol or more**
- **Fasting plasma glucose of 7.0 mmol/L or more**
- **Random plasma glucose of 11.1 mmol/L or more**
- **Two-hour glucose of 11.1 mmol/L or more** on an oral glucose tolerance test

If the patient is **asymptomatic**, the abnormal result must be repeated — preferably using the same test — before the diagnosis is made.

Two intermediate states sit below the diagnostic thresholds and identify people at high risk of progressing:

- **Impaired glucose tolerance** — a two-hour oral glucose tolerance test value of **7.8 to 11.0 mmol/L**
- **Impaired fasting glucose** — a fasting glucose of **6.1 to 6.9 mmol/L**

## Other causes of hyperglycaemia

Hyperglycaemia is not always type 1 or type 2 diabetes, and the differential matters because several of these are reversible:

- **Gestational diabetes**
- **Endocrine disease** — **Cushing's syndrome** and **acromegaly**, both of which produce counter-regulatory hormone excess
- **Drugs**, above all **corticosteroids**
- **Pancreatic disease**, such as pancreatitis or pancreatectomy, which destroys the islets
- **Acute stress** — the transient hyperglycaemia seen after a stroke or myocardial infarction

## The metabolic syndrome

Type 2 diabetes usually sits within a cluster of findings that together raise the risk of ischaemic heart disease:

- **Fasting hyperglycaemia** above 6 mmol/L
- **Blood pressure** above 140/90 mmHg
- **Central obesity** — a waist over 94 cm in men or 80 cm in women
- **Dyslipidaemia** — HDL cholesterol below 1 mmol/L and triglycerides above 2 mmol/L
- **Microalbuminuria**

## Type 2 treatment escalation

Start with lifestyle change. Current NICE guidance makes **dual therapy first-line for everyone** — modified-release metformin plus a **sodium-glucose co-transporter 2 (SGLT2) inhibitor** — with triple therapy first-line where there is established atherosclerotic cardiovascular disease. Targets are individualised, with particular care to avoid hypoglycaemia in frail or older people.

## Complications to screen for

Diabetes damages both large and small vessels, and the complications divide neatly along that line:

| Macrovascular | Microvascular |
|---|---|
| **Cardiac** — ischaemic heart disease | **Renal** — diabetic nephropathy, with glomerular damage |
| **Peripheral vascular disease** — claudication, colour and temperature change, poorly healing ulcers | **Neuropathic** — peripheral neuropathy, causing sensory loss and neuropathic foot ulcers |
| **Cerebral** — stroke | **Ocular** — diabetic retinopathy |

Annual review therefore covers the eyes (retinopathy screening), kidneys (urine albumin-to-creatinine ratio and estimated glomerular filtration rate), feet (sensation and circulation) and cardiovascular risk. Note that the **foot ulcer sits on both sides of the table**: it arises from neuropathy but heals badly because of the arterial disease, which is why diabetic foot disease is so difficult to treat.`,
        },
        {
          id: "diabetic_emergencies",
          name: "Diabetic ketoacidosis & hyperosmolar hyperglycaemic state",
          content: `## The two hyperglycaemic emergencies

Diabetic ketoacidosis and the hyperosmolar hyperglycaemic state are the two ends of a spectrum. In **ketoacidosis** there is essentially no insulin, so unrestrained lipolysis generates ketones and an acidosis. In the **hyperosmolar state** there is enough insulin to suppress ketogenesis but not enough to control glucose, so glucose climbs far higher over a much longer period and the problem is profound dehydration rather than acidosis.

| | Diabetic ketoacidosis | Hyperosmolar hyperglycaemic state |
|---|---|---|
| Typical patient | Type 1 diabetes | Type 2 diabetes, often elderly |
| Onset | **Rapid**, over hours | **Slow**, over days |
| pH | **Below 7.3** | Above 7.3 |
| Glucose | Above 11 mmol/L | **Above 30 mmol/L** |
| Ketones | **Above 3 mmol/L**, or 2+ on urine dipstick | Minimal |
| Osmolality | Variable | **Above 320 mOsm/kg** |

## Diabetic ketoacidosis

The diagnosis requires all three of a **pH below 7.3**, a **glucose above 11 mmol/L** and **ketones above 3 mmol/L** (or 2+ in the urine). It presents with confusion, **Kussmaul breathing** (deep sighing respiration compensating for the acidosis), abdominal pain, nausea and vomiting. The usual precipitants are infection, surgery, trauma and missed insulin doses.

Management follows an A to E approach with early senior help:

- **Fluids first, and insulin only after fluids** — dehydration is what kills. If the systolic blood pressure is below 90 mmHg give a 500 mL bolus over 15 minutes as resuscitation fluid; otherwise give 1 litre of 0.9% sodium chloride over an hour.
- **Potassium**: add potassium chloride to the second litre if the potassium is 3.5 to 5.5 mmol/L. Insulin drives potassium into cells, so a patient who starts hypokalaemic will become dangerously so — **do not start insulin if the potassium is below 3.5 mmol/L** until it has been replaced. Outside a critical care setting you cannot give more than 10 mmol of potassium per hour.
- **Insulin** at a **fixed rate of 0.1 units/kg/hour**, which is what switches off ketogenesis. Once the glucose falls below 14 mmol/L, add 10% glucose **and reduce the insulin to 0.05 units/kg/hour**, so that ketone clearance continues without causing hypoglycaemia.
- **Monitoring**: hourly glucose and potassium, and catheterise aiming for a urine output above 0.5 mL/kg/hour.
- **Resolution** is defined as **ketones below 0.6 mmol/L and a pH above 7.3**. Do not stop the infusion until the patient is eating and their subcutaneous insulin has been given and had time to take effect.

Two traps are worth naming. Long-acting background insulin should be **continued** throughout. And **euglycaemic ketoacidosis** — full-blown ketoacidosis with a near-normal glucose — occurs in patients taking SGLT2 inhibitors, so a normal glucose does not exclude the diagnosis if ketones are raised.

## Hyperosmolar hyperglycaemic state

The diagnosis is a **pH above 7.3** with an **osmolality above 320 mOsm/kg** and a **glucose above 30 mmol/L**. It develops over several days, so patients arrive acutely unwell with confusion and marked clinical dehydration, and the fluid deficit is often 100 to 220 mL/kg. Mortality is considerably higher than in ketoacidosis.

Management again begins with A to E assessment and **0.9% sodium chloride**, which alone will bring the glucose down substantially by restoring the circulation and renal perfusion:

- **Insulin is not started routinely.** It is only added if there is significant ketonaemia (above 1 mmol/L), and then at the **lower fixed rate of 0.05 units/kg/hour** — half the ketoacidosis rate.
- Correction must be **slow**. Aim for a fall in osmolality of only **3 to 8 mOsm/kg per hour**; correcting faster risks cerebral oedema and central pontine myelinolysis. Expect the sodium to **rise** initially as glucose falls, which is normal and not a reason to accelerate.
- Full correction takes 24 to 72 hours.
- Monitor with serial urea and electrolytes and glucose, and give **prophylactic anticoagulation**, since the hyperviscosity carries a high thrombotic risk.

> High-yield: in ketoacidosis, fluids before insulin, potassium in the second bag, and 0.1 units/kg/hour. In the hyperosmolar state, fluids alone are usually enough, insulin is halved to 0.05 units/kg/hour and only given for ketonaemia, and the osmolality must not fall faster than 3 to 8 mOsm/kg/hour.`,
        },
        {
          id: "hypoglycaemia",
          name: "Hypoglycaemia",
          content: `## Hypoglycaemia

Hypoglycaemia is classically defined by **Whipple's triad**: a low plasma glucose, symptoms consistent with hypoglycaemia, and relief of those symptoms when the glucose is corrected. The symptoms come in two waves — first **autonomic** (sweating, tremor, palpitations, hunger, anxiety) as counter-regulatory hormones are released, then **neuroglycopenic** (confusion, drowsiness, seizures, focal neurological signs and coma) as the brain runs out of substrate.

## Classifying the cause

The useful framework asks two questions in order: **is the insulin high or low?** and, if it is low, **are ketones present?**

**Hyperinsulinaemic hypoglycaemia** — insulin is inappropriately high:

- **Insulin overdose**, which is the commonest cause of all
- **Sulfonylurea excess**
- **Insulinoma**

**Hypoinsulinaemic hypoglycaemia with ketones present** — insulin is low, so fat is being broken down normally and ketones appear as the alternative fuel:

- **An alcohol binge without food** — alcohol blocks gluconeogenesis
- **Pituitary insufficiency**
- **Addison's disease**
- **Liver failure**

**Hypoinsulinaemic hypoglycaemia with ketones absent** — insulin is low but ketogenesis is *also* suppressed, which is the odd combination that points to something insulin-like acting on the receptor:

- **Non-pancreatic neoplasms**, classically **fibrosarcomas and fibromas**
- **Fatty acid oxidation disorders**, such as MCAD deficiency, in which fat cannot be converted to ketones at all

## Separating insulinoma from exogenous insulin

This is the highest-yield distinction, and it turns on **C-peptide**. Endogenous insulin is made as proinsulin and cleaved into insulin *and* C-peptide in equal amounts, whereas manufactured insulin contains no C-peptide.

| Finding | Insulinoma | Injected insulin | Sulfonylurea |
|---|---|---|---|
| Insulin | High | High | High |
| **C-peptide** | **High** | **Low or absent** | **High** |
| Sulfonylurea screen | Negative | Negative | **Positive** |

So a high insulin with a **low C-peptide** means insulin has been injected — whether through poor understanding of the regimen, an unsuitable delivery method (for example someone unable to read the units on a pen or titrate the dose), or deliberate misuse, which raises safeguarding and psychiatric concerns. A high insulin with a **high C-peptide** is endogenous, and an insulinoma can only be diagnosed once a **sulfonylurea screen is negative**. Quinine and pentamidine (used for toxoplasmosis, *Pneumocystis* pneumonia and leishmaniasis) also stimulate endogenous insulin release.

## Non-islet cell tumour hypoglycaemia

A distinctive paraneoplastic syndrome in which a large mesenchymal or epithelial tumour secretes **"big IGF-2"** — an incompletely processed form of insulin-like growth factor 2 that binds the IGF-1 and insulin receptors. The biochemistry is characteristic and everything is **low**: glucose, insulin, C-peptide, free fatty acids and ketones. The suppressed fatty acids and ketones are what separate it from the other hypoinsulinaemic causes.

## Hypoglycaemia in the newborn

Neonates are a special case, because the normal response to fasting is not yet mature. Expect **high free fatty acids and detectable ketones** in a healthy neonate who becomes hypoglycaemic. The important risk groups are **prematurity**, **intrauterine growth restriction**, significant comorbidity, and an underlying **inherited metabolic disorder** — and the absence of ketones in a hypoglycaemic baby is the finding that should prompt an urgent metabolic workup.

## Other precipitants

In adults with low insulin, the everyday triggers to remember are **fasting**, **strenuous exercise**, **critical illness**, **endocrine deficiency** (hypopituitarism, adrenal failure), **liver failure** and **anorexia nervosa**.

> High-yield: take the "hypoglycaemia screen" **before** giving glucose, since the values are uninterpretable afterwards — glucose, insulin, C-peptide, ketones, free fatty acids, cortisol, growth hormone and a sulfonylurea screen. Low C-peptide with high insulin means exogenous insulin; high C-peptide means insulinoma or a sulfonylurea; everything low including ketones means a non-islet cell tumour.`,
        },
        {
          id: "lipid_disorders",
          name: "Lipoprotein metabolism & the dyslipidaemias",
          content: `## Lipoprotein metabolism

Lipids are insoluble in plasma, so they travel packaged in **lipoproteins** — a lipid core wrapped in phospholipid and apolipoproteins, the latter acting as the address labels that direct each particle to its receptor.

The particles are named by density, which rises as the proportion of protein rises and that of triglyceride falls. In order of **increasing density**:

- **Chylomicrons** — the largest and least dense, carrying dietary triglyceride from the gut
- **Very low density lipoprotein (VLDL)** — carries triglyceride made by the liver
- **Intermediate density lipoprotein (IDL)** — the remnant left as VLDL is delipidated
- **Low density lipoprotein (LDL)** — the end product, cholesterol-rich, and the particle that drives atherosclerosis
- **High density lipoprotein (HDL)** — the smallest and densest, which carries cholesterol *back* to the liver in reverse cholesterol transport

Two further players are worth knowing by name. **PCSK9** binds the LDL receptor and promotes its degradation, so a **gain-of-function mutation in PCSK9 raises LDL** by removing the receptors that clear it — which is exactly why blocking PCSK9 with a monoclonal antibody such as **evolocumab** is an effective LDL-lowering therapy. **Lipoprotein(a)** is an independent cardiovascular risk factor that is largely genetically determined and barely responds to statins; **nicotinic acid** lowers it.

## The primary dyslipidaemias

| Group | Disease | Defect |
|---|---|---|
| **Primary hypercholesterolaemia** | **Familial hypercholesterolaemia (type II)** | Autosomal dominant: **LDL receptor**, **apoB** or **PCSK9**. A rare autosomal recessive form affects LDLRAP1 |
| **Primary hypercholesterolaemia** | Polygenic hypercholesterolaemia | Several polymorphisms acting together — much commoner than the monogenic forms |
| **Primary hypercholesterolaemia** | Familial hyperalphalipoproteinaemia | **CETP deficiency**, which raises HDL |
| **Primary hypercholesterolaemia** | Phytosterolaemia | ABCG5 and ABCG8 |
| **Primary hypertriglyceridaemia** | Familial type I | **Lipoprotein lipase** or **apoC-II** deficiency |
| **Primary hypertriglyceridaemia** | Familial type V | apoA-V deficiency in some cases |
| **Primary hypertriglyceridaemia** | Familial type IV | Increased triglyceride synthesis |
| **Primary mixed hyperlipidaemia** | Familial combined hyperlipidaemia | The commonest familial dyslipidaemia |
| **Primary mixed hyperlipidaemia** | Familial dysbetalipoproteinaemia | Remnant accumulation |
| **Primary mixed hyperlipidaemia** | Familial hepatic lipase deficiency | Hepatic lipase |
| **Hypolipidaemia** | Abetalipoproteinaemia | **Microsomal triglyceride transfer protein** deficiency |
| **Hypolipidaemia** | Hypobetalipoproteinaemia | Truncated apoB |
| **Hypolipidaemia** | **Tangier disease** | HDL deficiency, with characteristic orange tonsils |
| **Hypolipidaemia** | Hypoalphalipoproteinaemia | apoA-I mutations in some cases |

**Familial hypercholesterolaemia** is the one to recognise clinically: an autosomal dominant condition affecting roughly 1 in 250 people, causing very high LDL from birth and premature coronary disease. The signs are **tendon xanthomata** (classically in the Achilles and the extensor tendons of the hand), **xanthelasma** and a **corneal arcus before the age of about 45**. A total cholesterol above 7.5 mmol/L with a family history of premature coronary heart disease should prompt formal assessment against the Simon Broome or Dutch Lipid Clinic Network criteria, cascade testing of relatives, and specialist referral.

## Managing hyperlipidaemia

**Conservative measures come first** — dietary modification and exercise — although it is worth knowing that dietary cholesterol intake correlates poorly with the measured lipid levels, so diet alone rarely achieves large reductions.

**Statins** are the mainstay. They inhibit **HMG-CoA reductase**, the rate-limiting enzyme of hepatic cholesterol synthesis; the fall in intracellular cholesterol upregulates LDL receptors, which is what clears LDL from the plasma. The adverse effects to counsel on are **myopathy**, ranging from myalgia through a raised creatine kinase to frank **rhabdomyolysis**, and fatigue. Risk factors for statin myopathy include a high dose, a genetic predisposition and previous myopathy on a different statin, and it is reversible on stopping.

The current UK approach (NICE NG238) is:

- Estimate risk with **QRISK3** in people aged 25 to 84 without established cardiovascular disease
- **Primary prevention**: offer **atorvastatin 20 mg** where the 10-year risk is **10% or more** — and do not rule it out below that threshold if the person has an informed preference or their risk is likely to be underestimated
- **Secondary prevention**: offer **atorvastatin 80 mg**
- **Recheck the lipids at 3 months**, aiming for a **reduction in non-HDL cholesterol of more than 40%** from baseline
- If that is not achieved, add **ezetimibe**, which blocks intestinal cholesterol absorption
- If still not at target, injectable options follow — **inclisiran** (a small interfering RNA against PCSK9) or a **PCSK9 monoclonal antibody**, evolocumab or alirocumab. For secondary prevention the targets are an LDL of 2.0 mmol/L or below, or a non-HDL of 2.6 mmol/L or below

> High-yield: the density order is chylomicron, VLDL, IDL, LDL, HDL. PCSK9 degrades the LDL receptor, so blocking it lowers LDL. Statins inhibit HMG-CoA reductase and cause myopathy; the practical target is a greater than 40% fall in non-HDL cholesterol at 3 months, with ezetimibe added if it is not reached.`,
        },
        {
          id: "obesity_management",
          name: "Obesity & weight management",
          content: `## Assessing overweight and obesity

Obesity is now treated as a **chronic, relapsing condition** requiring long-term support rather than a one-off intervention, and current UK guidance (NICE NG246) reflects that in both its assessment and its language.

Assessment uses **two measurements together**, because body mass index alone says nothing about where the fat is:

- **Body mass index (BMI)**, as a practical estimate of overall adiposity
- **A measure of central adiposity**, in practice the **waist-to-height ratio** — but do **not** measure the waist if the BMI is above 35 kg/m2, because the measurement is no longer accurate at that size

**Ethnicity changes the thresholds.** People from **South Asian, Chinese, other Asian, Middle Eastern, Black African and African-Caribbean** backgrounds develop central adiposity and weight-related disease at a lower BMI, so the thresholds are **lowered, usually by 2.5 kg/m2**.

The consultation itself matters. Ask permission before raising weight and accept a decision to decline or defer; use **person-first language** such as "living with obesity"; and avoid **diagnostic overshadowing** — if someone attends about knee pain, address the knee pain first.

## Conservative management

Dietary approaches must be flexible, since no single diet suits everyone; the aim is simply to keep total energy intake below energy expenditure while remaining nutritionally balanced. Reducing a specific macronutrient (a low-fat or low-carbohydrate approach) is a reasonable option, and intermittent fasting is not specifically recommended. **Low-energy and very-low-energy diets belong in specialist services only**, and very-low-energy diets are reserved for specific situations such as weight loss before surgery, for a **maximum of 12 weeks**, because excessive restriction promotes weight cycling and regain.

Physical activity should be encouraged **even where weight is not lost**, as should dietary improvement, since both improve the lipid profile and diabetes risk independently of the number on the scale. Weight regain should not be framed as failure.

## Drug treatment

Medication is considered **after behavioural approaches have been started and evaluated**, always alongside a reduced-calorie diet and increased physical activity. Incretin mimetics have changed this field substantially.

| Drug | Mechanism | Eligibility | Where prescribed |
|---|---|---|---|
| **Orlistat** | **Pancreatic lipase inhibitor**, reducing fat absorption | BMI 30 or above, or 28 or above with associated risk factors | Primary care |
| **Tirzepatide** | Dual **GIP and GLP-1** receptor agonist, weekly injection | BMI 35 or above with at least one weight-related comorbidity | Primary care |
| **Semaglutide** | **GLP-1** receptor agonist, weekly injection | At least one weight-related comorbidity plus BMI 35 or above, or BMI 30 or above meeting specialist referral criteria | Specialist weight management services |
| **Liraglutide** | **GLP-1** receptor agonist, daily injection | BMI 35 or above with non-diabetic hyperglycaemia and high cardiovascular risk | Specialist weight management services |

Orlistat's adverse effects — steatorrhoea, urgency and **profound flatus and diarrhoea** — are frequently intolerable, and they worsen the more fat is eaten, which is what limits its use. It also impairs absorption of the **fat-soluble vitamins A, D, E and K**, and severe diarrhoea can cause oral contraception to fail, so an additional contraceptive method is advised.

None of these drugs should be used in pregnancy. With tirzepatide, oral contraception may be unreliable, so women should switch to a non-oral method or add a barrier method for **4 weeks after starting and after each dose escalation**.

**Rimonabant**, a cannabinoid receptor antagonist, was trialled for obesity and **withdrawn because of an increased risk of suicide** — a useful example of a drug withdrawn on psychiatric grounds.

## Bariatric surgery

Bariatric (metabolic) surgery is considered where the BMI is **40 kg/m2 or above**, or **35 kg/m2 or above with a significant comorbidity** that would be expected to improve with weight loss — with expedited assessment for people with **recent-onset type 2 diabetes**, and the same downward ethnicity adjustment to the thresholds. It requires extensive pre-operative assessment and a commitment to long-term follow-up, because these operations cause lifelong malabsorption of iron, vitamin B12, folate, calcium and the fat-soluble vitamins.

> High-yield: assess with BMI **and** waist-to-height ratio, and lower the thresholds by about 2.5 kg/m2 for South Asian, Chinese, other Asian, Middle Eastern, Black African and African-Caribbean backgrounds. Orlistat and tirzepatide can be prescribed in primary care; semaglutide and liraglutide are specialist-service drugs. Surgery is for a BMI of 40, or 35 with a comorbidity.`,
        },
        {
          id: "inherited_metabolic_disease",
          name: "Newborn screening & inherited metabolic disease",
          content: `## UK newborn screening

Every baby in the United Kingdom is offered the **newborn blood spot (Guthrie) test at around day 5 to 8** of life, taken by heel prick onto a card. It is worth being clear about what it does: the programme **measures chemicals in the blood spot and does not perform genetic testing**, so an abnormal chemical level does not by itself mean a genetic disorder is present — it means a diagnostic workup is needed.

The classic conditions screened for are:

| Condition | Underlying defect | Screening test |
|---|---|---|
| **Phenylketonuria** | **Phenylalanine hydroxylase** deficiency — the "musty" baby | Phenylalanine level |
| **Congenital hypothyroidism** | Dysgenesis or agenesis of the thyroid gland | TSH level |
| **Cystic fibrosis** | **CFTR** mutation (F508del commonest), giving viscous secretions and ductal blockage | Immunoreactive trypsin; if positive, DNA mutation testing |
| **Sickle cell disease** | Haemoglobin S | Haemoglobin variants |
| **MCAD deficiency** | Medium-chain acyl-CoA dehydrogenase deficiency, a fatty acid oxidation disorder | Acylcarnitine levels by tandem mass spectrometry |

The programme has since been expanded to include several further inherited metabolic disorders, including maple syrup urine disease, isovaleric acidaemia, glutaric aciduria type 1 and homocystinuria. The statistical concepts underpinning any screening programme — sensitivity, specificity and predictive value — are covered in the *Screening tests: sensitivity, specificity and predictive value* topic.

## Inherited metabolic disease

The individual disorders are rare and there are hundreds of them, so the practical approach is to recognise the **five groups** by their pattern of presentation rather than to memorise individual diseases.

| Group | Examples | Key features |
|---|---|---|
| **1. Accumulation of toxins** | **Organic acidaemias**, such as propionic acidaemia | High urea and ketones, **metabolic acidosis with hyperammonaemia**. Characteristic **cheesy or sweaty odours** from the organic acids. Treated with a low-protein diet, carnitine and haemofiltration |
| **1. Accumulation of toxins** | **Urea cycle disorders** — nine in total, including **ornithine transcarbamylase deficiency**, which is X-linked | Very **high ammonia** (above 200 micromol/L) causing encephalopathy and developmental delay, with a **respiratory alkalosis** (ammonia stimulates respiration), vomiting and diarrhoea. Treated with a low-protein diet to stop urea formation |
| **1. Accumulation of toxins** | **Aminoacidopathies** — phenylketonuria, maple syrup urine disease | High phenylalanine, with **blue eyes and fair hair and skin** (phenylalanine blocks melanin synthesis) and intellectual disability. Maple syrup urine disease characteristically smells of sweaty feet |
| **2. Reduced energy stores** | **Glycogen storage disorders**, including **von Gierke's disease** | **Hypoglycaemia with lactic acidosis**, hepatomegaly and developmental delay, with a high risk of hepatoblastoma. Treated with regular carbohydrate |
| **2. Reduced energy stores** | **Galactosaemia** | Galactose-1-phosphate accumulates and causes **cataracts**, with hypoglycaemia and **neonatal conjugated jaundice**. Urine tests positive for reducing substances. Treated with a lactose- and galactose-free diet |
| **2. Reduced energy stores** | **Fatty acid oxidation disorders**, including **MCAD deficiency** | Hypoglycaemia, cardiomyopathy and rhabdomyolysis, with characteristically **LOW ketones** — fat cannot be converted into them. Screened by blood acylcarnitine, confirmed on urine organic acids. Treated with regular carbohydrate and **absolutely no fasting** |
| **3. Defective synthesis of large molecules** (all dysmorphic) | **Peroxisomal disorders** — cannot break down very long chain fatty acids or make bile acids | Poor feeding, seizures, retinopathy, hepatomegaly with a mixed hyperbilirubinaemia, and hypotonia — the **floppy baby** |
| **3. Defective synthesis of large molecules** | **Glycosylation disorders** | Intellectual disability and **inverted nipples**. Diagnosed by measuring serum transferrins |
| **4. Defective breakdown of large molecules** | **Lysosomal storage disorders**, including **Tay-Sachs disease**, which declares itself at 3 to 6 months | Slowly progressive **neuroregression** with hepatosplenomegaly and cardiomyopathy. Tay-Sachs is classically associated with **Ashkenazi Jewish** ancestry. Tested by urine mucopolysaccharides and white cell enzyme levels |
| **5. Mitochondrial disorders** | **MELAS**, Kearns-Sayre syndrome | Involve the tissues with the highest energy demand — **central nervous system, muscle and heart** — with a **high lactate** and raised creatine kinase and a myopathy. **Muscle biopsy is diagnostic** |

> High-yield: hypoglycaemia **with** ketones fits a glycogen storage disorder; hypoglycaemia **without** ketones fits a fatty acid oxidation disorder such as MCAD, where fasting must be avoided. A metabolic acidosis with hyperammonaemia points to an organic acidaemia, while hyperammonaemia with a **respiratory alkalosis** and no acidosis points to a urea cycle defect. A raised lactate with a myopathy suggests mitochondrial disease.`,
        },
      ],
    },
    {
      id: "neurology", name: "Neurology", icon: "🧠",
      topics: [
        {
          id: "headache_red_flags",
          name: "Headache red flags",
          content: `## Approach to headache

Most headaches are benign (tension-type or migraine), but a small number signal serious disease. The skill is sorting one from the other.

## Red flags that warrant urgent action

- **Thunderclap onset** (maximal within seconds to minutes): consider subarachnoid haemorrhage.
- **New headache over 50 with scalp tenderness or jaw claudication**: consider giant cell arteritis and start steroids before the biopsy.
- **Fever, neck stiffness and photophobia**: consider meningitis.
- **Features of raised intracranial pressure**: worse in the morning or on coughing, with vomiting or visual disturbance.
- **Focal neurological signs, reduced consciousness or new seizures.**

## Common primary headaches

| Type | Pattern | Key treatment |
|---|---|---|
| Migraine | Unilateral, throbbing, nausea, photophobia | Triptan plus NSAID; prophylaxis if frequent |
| Tension-type | Bilateral, tight band, no nausea | Simple analgesia, reassurance |
| Cluster | Severe unilateral periorbital, autonomic | High-flow oxygen, subcutaneous triptan |

> Beware medication-overuse headache in anyone using acute painkillers on more than about ten to fifteen days a month.`,
        },
        {
          id: "stroke_tia",
          name: "Stroke & TIA",
          content: `## Stroke and transient ischaemic attack

A stroke is a sudden focal neurological deficit of vascular origin. A transient ischaemic attack (TIA) produces similar symptoms that resolve, and is a warning of high stroke risk.

## Recognition

The public message is FAST: Face, Arm, Speech, Time. Clinically, look for unilateral weakness, speech disturbance, visual field loss and facial droop.

## Immediate management of suspected stroke

- Arrange an **urgent computed tomography (CT) head** to distinguish ischaemic stroke from haemorrhage, because treatment differs completely.
- For ischaemic stroke within the treatment window, offer thrombolysis and consider thrombectomy.
- Once haemorrhage is excluded, give aspirin 300 mg.

## After a TIA

Give aspirin immediately and refer for specialist assessment within 24 hours. Secondary prevention addresses blood pressure, a statin, antiplatelet therapy, atrial fibrillation and carotid disease.`,
        },
        {
          id: "cns_tumours",
          name: "CNS tumours",
          content: `## CNS tumours

A tumour in the central nervous system (CNS) may be primary (arising within the brain or its coverings) or secondary (a metastasis). In adults the first question is which of these it is, because metastases are by far the commonest brain tumour.

## Primary versus secondary

- **Secondary (metastatic) tumours** are the commonest brain tumours in adults — roughly ten times more common than primary tumours. They spread most often from the **lung, breast and malignant melanoma**, lodge at the grey-white matter junction, are often multiple with surrounding oedema, and carry a poor prognosis.
- **Primary tumours** arise within the CNS and rarely spread outside it. Broadly, **extra-axial** tumours (from the meninges or nerves, such as a meningioma) tend to be benign, whereas **intra-axial** tumours (from glial cells, such as the gliomas) tend to be malignant.

## How they present

The features come from raised intracranial pressure and from local effects that depend on the tumour's site:

- **Raised intracranial pressure (ICP):** headache that is worse in the morning or on coughing and bending, vomiting, papilloedema and reduced consciousness.
- **Supratentorial** tumours: focal neurological deficits, new-onset seizures and personality change.
- **Infratentorial (posterior fossa)** tumours: ataxia, long-tract signs (spasticity, hyperreflexia) and cranial nerve palsies.

Risk factors include previous cranial radiotherapy and the inherited syndromes below.

## Investigation and classification

**Contrast-enhanced MRI** is the key investigation (with CT, MR spectroscopy or PET in selected cases); tissue from biopsy or resection gives the definitive diagnosis. The **World Health Organization (WHO)** classification describes tumours by their cell of origin and grades them by behaviour:

- **Cell of origin:** astrocytes give an astrocytoma, oligodendrocytes an oligodendroglioma (a 'fried-egg' appearance), ependyma an ependymoma (a ventricular tumour that can cause hydrocephalus), and meningothelial cells a meningioma.
- **Grade:** grade 1 is benign, rising to grade 4 with survival under a year; molecular markers (such as IDH mutation) refine the prognosis.

Primary brain tumours are **not given a TNM stage**, because they rarely metastasise outside the CNS.

## The common primary tumours

| Tumour | Typical patient | Key features |
|---|---|---|
| Pilocytic astrocytoma (grade 1) | Children and young people | Indolent; Rosenthal fibres; BRAF mutation; good prognosis |
| Diffuse glioma (grade 2-3) | Younger adults | An IDH mutation predicts longer survival and better treatment response |
| Glioblastoma multiforme (grade 4) | Older adults (50+) | The commonest and most aggressive primary tumour; necrosis and microvascular proliferation; IDH wild-type; median survival around 8 months |
| Meningioma | Adults, rising with age | Extra-axial and usually benign; psammoma bodies (calcification) |
| Medulloblastoma | Children | Posterior fossa; the second commonest childhood brain tumour after astrocytomas |

## Inherited syndromes

A few familial syndromes predispose to specific CNS tumours:

- **Neurofibromatosis type 1:** optic glioma and astrocytoma.
- **Neurofibromatosis type 2:** bilateral vestibular schwannomas (acoustic neuromas), meningioma and ependymoma.
- **Tuberous sclerosis:** subependymal giant cell astrocytoma.
- **Von Hippel-Lindau:** cerebellar and spinal haemangioblastoma, with retinal angiomas, renal cysts and phaeochromocytoma.

## Management

Treatment is usually **surgical resection followed by radiotherapy, with or without chemotherapy**, decided by a neuro-oncology multidisciplinary team. **Dexamethasone** reduces the oedema around the tumour, anticonvulsants control seizures, and palliative care is important, especially for metastatic disease and glioblastoma.

> High-yield contrasts: **metastases** (lung, breast, melanoma) are the commonest brain tumours in adults, whereas **glioblastoma multiforme** is the commonest and most aggressive **primary** brain tumour. **Neurofibromatosis type 2** causes bilateral vestibular schwannomas. Primary brain tumours are not TNM-staged because they rarely leave the CNS.`,
        },
        {
          id: "dizziness_vertigo",
          name: "Dizziness & vertigo",
          content: `## Dizziness and vertigo

Dizziness is a vague word patients use for several different sensations, so the first and most useful step is to work out which one they mean. **Vertigo** is the specific illusion that the world (or the patient) is moving, usually spinning, and it points to a problem in the vestibular system — either the inner ear or its central connections.

## First, categorise the symptom

- **Vertigo** — an illusion of movement; a vestibular problem (inner ear or brainstem and cerebellum).
- **Presyncope** — light-headedness or a feeling of nearly fainting; usually cardiovascular (postural hypotension, arrhythmia).
- **Disequilibrium** — unsteadiness felt in the legs on standing or walking; often neurological (sensory loss, cerebellar disease, Parkinson's).

Sorting the complaint into one of these directs the whole assessment.

## Peripheral versus central vertigo

For true vertigo the crucial distinction is between a common, benign peripheral inner-ear cause and a rarer, dangerous central cause in the brainstem or cerebellum.

| Feature | Peripheral (inner ear) | Central (brainstem/cerebellum) |
|---|---|---|
| Onset and severity | Sudden and severe | Often gradual and less severe |
| Nystagmus | Horizontal, one direction, fatigable | Vertical or direction-changing, non-fatigable |
| Hearing | May be affected (Meniere's, labyrinthitis) | Usually normal |
| Other neurological signs | Absent | Present (dysarthria, diplopia, ataxia, limb signs) |
| Typical causes | BPPV, vestibular neuronitis, labyrinthitis, Meniere's | Stroke or TIA, multiple sclerosis, tumour, migraine |

The red flag is vertigo with any central feature — slurred speech, double vision, swallowing difficulty or limb in-coordination — which needs urgent imaging to exclude a **posterior circulation stroke**. In acute persistent vertigo the bedside **HINTS** examination (Head Impulse, Nystagmus, Test of Skew) helps: an abnormal head impulse test is reassuringly peripheral, whereas a **normal** head impulse test paradoxically suggests a central cause.

## The common peripheral causes

- **Benign paroxysmal positional vertigo (BPPV):** brief (seconds) spinning triggered by head movement such as rolling over in bed or looking up, caused by displaced otoliths in the semicircular canals; there is no hearing loss. It is diagnosed with the **Dix-Hallpike manoeuvre** and treated with the **Epley manoeuvre**.
- **Vestibular neuronitis:** a single bout of acute, severe vertigo lasting days, often after a viral illness, with nausea but **no hearing loss**. **Labyrinthitis** is similar but adds hearing loss and tinnitus.
- **Meniere's disease:** recurrent attacks of vertigo lasting minutes to hours with the triad of fluctuating sensorineural **hearing loss, tinnitus and aural fullness**, caused by raised endolymph pressure.

## Management

Treatment follows the cause. The **Epley manoeuvre** cures most BPPV. A short course of vestibular sedatives (prochlorperazine or an antihistamine) eases acute peripheral vertigo but should be brief, because they delay the brain's natural compensation; **vestibular rehabilitation** exercises aid recovery. Meniere's is managed with betahistine, dietary salt restriction and specialist input. A suspected central cause is imaged, and the underlying stroke, demyelination or tumour is treated.

> High-yield: **BPPV** gives brief positional vertigo with no hearing loss (Dix-Hallpike positive, treat with Epley); **Meniere's** adds hearing loss, tinnitus and aural fullness; **vestibular neuronitis** is days of vertigo after a viral illness with normal hearing. Suspect a **central** cause — and exclude posterior circulation stroke — when there are other neurological signs, vertical or direction-changing nystagmus, or a normal head impulse test in acute vertigo.`,
        },
        {
          id: "encephalitis",
          name: "Encephalitis",
          content: `## Encephalitis

Encephalitis is inflammation of the brain parenchyma itself, which is why it disturbs brain function — altered consciousness, behaviour and personality change, seizures and focal deficits. This contrasts with **meningitis** (inflammation of the meninges), which causes headache, neck stiffness and photophobia; when the two occur together it is called meningoencephalitis.

## Causes

Most encephalitis is **viral**, and the single most important cause is **herpes simplex virus (HSV, usually type 1)**, which has a characteristic predilection for the **temporal lobes** and is treatable — so it must never be missed.

- **Viral:** herpes simplex virus (the key cause), other herpesviruses such as varicella-zoster and cytomegalovirus (especially in the immunocompromised), enteroviruses and West Nile virus.
- **Other infectious:** rarely bacterial (Listeria), amoebic (Naegleria fowleri, from warm freshwater and thermal pools) and parasitic (Toxoplasma gondii).
- **Autoimmune or paraneoplastic:** an increasingly recognised non-infective group (see below).

## Presentation

A typically subacute illness of fever and headache followed by **altered consciousness, confusion and personality or behavioural change**, with seizures and focal neurological signs. The prominence of these brain-function features — rather than the neck stiffness and photophobia of meningism — is what points to the parenchyma.

## Investigation

- **MRI brain** is the gold standard, classically showing **temporal lobe** changes in herpes simplex encephalitis.
- **Lumbar puncture** with **cerebrospinal fluid (CSF) viral PCR** (including herpes simplex virus PCR); the CSF shows a viral pattern (clear, lymphocytes, raised protein, normal glucose). Do a CT head first if there are signs of raised intracranial pressure.
- An **electroencephalogram (EEG)** may show changes, and blood tests and cultures help identify the cause.

## Management

**Start empirical intravenous aciclovir immediately** on clinical suspicion — do not wait for confirmation, because untreated herpes simplex encephalitis carries a high mortality and aciclovir works best given early. Supportive care, seizure control and treatment of the specific cause follow.

## Autoimmune (paraneoplastic) encephalitis

A growing group of encephalitides are driven by **antibodies against neuronal antigens** rather than by infection. The classic example is **anti-NMDA (N-methyl-D-aspartate) receptor encephalitis**, which characteristically affects a **young woman and is paraneoplastic — most often associated with an ovarian teratoma**.

- **Presentation:** a viral-like prodrome, then prominent **psychiatric and behavioural change** (psychosis and agitation, often mistaken at first for a primary mental illness), memory impairment, seizures, characteristic **orofacial and limb dyskinesias**, autonomic instability and a falling level of consciousness.
- **Investigation:** **anti-NMDA receptor antibodies** in serum and CSF; the MRI is often normal or only subtly abnormal and the EEG is usually abnormal; and, crucially, **screen for an underlying tumour** with pelvic imaging to find an **ovarian teratoma**.
- **Treatment:** **remove the tumour** (resect the teratoma) together with **immunotherapy** — corticosteroids, intravenous immunoglobulin (IVIG) or plasma exchange first-line, then rituximab or cyclophosphamide if needed. Recovery is often good, though it can be slow.

> High-yield: for infective encephalitis think **herpes simplex virus (temporal lobes)** and start **IV aciclovir before confirmation**. Think **anti-NMDA receptor encephalitis** in a **young woman with new psychiatric symptoms, seizures and dyskinesias** — and hunt for an **ovarian teratoma**.`,
        },
      ],
    },
    {
      id: "public_health", name: "Public Health, Ethics & Evidence", icon: "⚖️",
      topics: [
        {
          id: "capacity_consent",
          name: "Capacity & consent",
          content: `## Mental capacity and consent

Valid consent must be informed, given voluntarily, and made by someone with capacity. In England and Wales the framework is the Mental Capacity Act.

## The five principles

- Capacity is **presumed** in adults.
- People must be **supported** to make their own decision before being judged unable.
- People are allowed to make **unwise** decisions.
- Decisions for those lacking capacity are made in their **best interests**.
- Choose the **least restrictive** option.

## Assessing capacity

Capacity is decision-specific and time-specific. A person has capacity if they can do all four of the following in relation to the specific decision:

- **Understand** the relevant information.
- **Retain** it long enough to decide.
- **Weigh** it up.
- **Communicate** their decision.

> A patient can have capacity for one decision and lack it for another, and capacity can fluctuate, so it is reassessed as needed.

## When capacity is lacking

Act in the person's best interests, taking account of their past wishes, any advance decision and the views of those close to them. A valid advance decision to refuse treatment is legally binding.`,
        },
        {
          id: "confidentiality",
          name: "Confidentiality & disclosure",
          content: `## Confidentiality

Keeping patient information private underpins trust. The duty is strong but not absolute.

## When disclosure may be justified

- With the patient's **consent**.
- When **required by law** (for example notifiable diseases, or a court order).
- In the **public interest**, when failure to disclose risks serious harm to the patient or others.

## A worked example: driving

If a patient has a condition that makes them unsafe to drive, advise them that they must inform the Driver and Vehicle Licensing Agency (DVLA). If they continue to drive against advice and cannot be persuaded to stop, you may breach confidentiality and inform the DVLA, telling the patient before you do so.

> The principle that recurs in the Professional Dilemmas paper is to share information on a need-to-know basis, seek consent where possible, and document your reasoning.`,
        },
        {
          id: "screening_test_statistics",
          name: "Screening tests: sensitivity, specificity & predictive value",
          content: `## Why these four numbers exist

Any test divides people into positive and negative, and the truth divides them into diseased and not diseased. Crossing those gives four cells, and the four statistics are simply four different ways of reading that table. The distinction that makes them click is this: **sensitivity and specificity are properties of the test applied to a population, whereas the predictive values tell an individual what their own result means** — and, crucially, the predictive values change with how common the disease is, while sensitivity and specificity do not.

## The two-by-two table

Take a worked example of a screening test for cystic fibrosis in 185 people:

| | Has cystic fibrosis | Does not have cystic fibrosis |
|---|---|---|
| **Test positive** | 90 — true positive | 5 — false positive |
| **Test negative** | 10 — false negative | 80 — true negative |

## The four measures

**Sensitivity** is the probability that someone **with** the disease correctly tests positive. It is calculated as true positives divided by everyone who has the disease.

- 100 people have cystic fibrosis, and 90 test positive, so sensitivity is 90 out of 100, which is **90%**
- A **highly sensitive test is good for ruling disease OUT**, because it produces few false negatives

**Specificity** is the probability that someone **without** the disease correctly tests negative — true negatives divided by everyone who is disease-free.

- 85 people do not have cystic fibrosis, and 80 test negative, so specificity is 80 out of 85, which is **94%**
- A **highly specific test is good for ruling disease IN**, because it produces few false positives

**Positive predictive value** is the probability that someone who tests positive **actually has** the disease — true positives divided by everyone who tested positive.

- 95 people tested positive, of whom 90 have the disease, so the positive predictive value is 90 out of 95, which is **95%**

**Negative predictive value** is the probability that someone who tests negative really is **disease-free** — true negatives divided by everyone who tested negative.

- 90 people tested negative, of whom 80 are disease-free, so the negative predictive value is 80 out of 90, which is **89%**

It is much easier to reason through the table in words, as above, than to memorise the formulae.

## Why prevalence matters

Sensitivity and specificity are fixed properties of the test itself. The **predictive values are not** — they depend on how common the disease is in the population being tested. Apply an excellent test to a population in which the condition is very rare and most positives will be false positives, so the positive predictive value collapses even though the test has not changed. This is the central reason screening programmes are targeted at defined risk groups rather than offered to everyone, and why a positive screening result is a trigger for a diagnostic test rather than a diagnosis in itself.

The **UK newborn blood spot programme** is the standard illustration, and the conditions it covers are set out in the *Newborn screening and inherited metabolic disease* topic.

> High-yield: **SnNOut and SpPIn** — a **Sn**sitive test that is **N**egative rules **Out**; a **Sp**ecific test that is **P**ositive rules **In**. Sensitivity and specificity belong to the test; predictive values belong to the population and move with prevalence.`,
        },
      ],
    },
    {
      id: "pharmacology", name: "Pharmacology & Prescribing", icon: "💊",
      topics: [
        {
          id: "prescribing_safety",
          name: "Safe prescribing principles",
          content: `## Safe prescribing

Prescribing errors are a common and preventable cause of harm. A systematic approach reduces risk.

## Before you prescribe

- Confirm the **indication** and that the benefit outweighs the risk.
- Check **allergies** and clarify what the reaction actually was.
- Review **interactions** and the patient's renal and liver function.
- Consider **pregnancy and breastfeeding**.

## High-risk drugs worth knowing

| Drug | Key safety point |
|---|---|
| Warfarin | Monitor the international normalised ratio (INR); many interactions |
| Methotrexate | Weekly dosing; never daily; monitor blood counts and liver |
| Lithium | Narrow therapeutic range; monitor levels and renal/thyroid function |
| Insulin | Never omit in type 1 diabetes; prescribe units in full |

## Steroids and the sick-day rule

Long-term corticosteroids suppress the adrenal axis, so they must not be stopped abruptly and the dose should be increased during acute illness. Patients should carry a steroid card.`,
        },
      ],
    },
    {
      id: "gastro", name: "Gastroenterology & Nutrition", icon: "🩻",
      topics: [
        {
          id: "oesophageal_pathology",
          name: "Oesophageal disease",
          content: `## Oesophageal disease

The oesophagus is lined by **stratified squamous epithelium with no goblet cells**, which meets the mucin-secreting columnar epithelium of the stomach at the **squamo-columnar junction (the Z-line)**. Almost all oesophageal pathology is best understood as a consequence of what happens at that junction.

## Reflux oesophagitis (gastro-oesophageal reflux disease)

Gastro-oesophageal reflux disease (GORD) is the **commonest cause of oesophagitis**. Severity at endoscopy is graded by the **Los Angeles classification** (grades A to D, by the extent of mucosal breaks).

- **Complications** — ulceration, haemorrhage (causing haematemesis or melaena), **Barrett's oesophagus**, stricture, and perforation.
- **Management** — lifestyle change (stop smoking, lose weight) plus a **proton pump inhibitor (PPI)** or an H2-receptor antagonist.

## Barrett's oesophagus

**Intestinal metaplasia**: chronic acid exposure causes the squamous mucosa to be replaced by **columnar epithelium containing goblet cells**, and the squamo-columnar junction migrates upwards.

- Occurs in around **10% of people with symptomatic GORD**.
- It is a **premalignant** lesion, progressing through the sequence **metaplasia to dysplasia to adenocarcinoma**.
- The **presence of goblet cells defines intestinal metaplasia** and confers an even higher risk of progression to carcinoma, so these patients enter endoscopic surveillance.

## Comparing the two oesophageal carcinomas

| Feature | Adenocarcinoma | Squamous cell carcinoma |
|---|---|---|
| Site | Distal one third | Middle one third (50%); upper third 20%, lower third 30% |
| Main association | Barrett's oesophagus and chronic reflux | Alcohol and smoking |
| Other risk factors | Smoking, obesity, previous radiotherapy | Achalasia of the cardia, Plummer-Vinson syndrome, nutritional deficiency, nitrosamines, human papillomavirus in high-prevalence areas |
| Demographics | Commonest in Caucasians, strongly male predominant | About 6 times commoner in people of Afro-Caribbean descent, male predominant |

**Presentation of oesophageal carcinoma** is **progressive dysphagia, initially for solids then for fluids**, with odynophagia (painful swallowing), anorexia and severe weight loss. Growth is rapid with early spread to lymph nodes, the liver and directly into adjacent proximal structures, so many patients are only suitable for **palliative care** at diagnosis.

## Oesophageal varices

Engorged, dilated submucosal veins, usually the result of **portal hypertension** causing back pressure through the porto-systemic anastomoses (see the Cirrhosis and portal hypertension topic).

- The patient typically vomits **large volumes** of blood.
- Management is **emergency endoscopy** with **sclerotherapy or band ligation**.

> Barrett's oesophagus is intestinal metaplasia (columnar epithelium with goblet cells) driven by chronic reflux, and it predisposes to distal adenocarcinoma. Squamous cell carcinoma is instead linked to alcohol and smoking and sits in the middle third. Both present with progressive dysphagia for solids then fluids.`,
        },
        {
          id: "gastric_duodenal_pathology",
          name: "Stomach & duodenum: gastritis, ulcers & gastric tumours",
          content: `## Stomach and duodenum

The stomach is lined by gastric mucosa (**no goblet cells**), with mucin-secreting columnar epithelium and glands. Two cell types matter most:

- **Parietal cells** secrete **hydrochloric acid and intrinsic factor**.
- **Chief cells** secrete **pepsinogen**.

## Gastritis

| Type | Infiltrate | Typical insults |
|---|---|---|
| Acute | Neutrophils | Aspirin, NSAIDs, corrosives such as bleach, acute Helicobacter pylori infection, severe physiological stress such as burns |
| Chronic | Lymphocytes and plasma cells | Helicobacter pylori (tends to be antral), autoimmune disease such as pernicious anaemia, alcohol, smoking |

**Complications of chronic gastritis**

- Progression to **gastric ulcer** formation.
- Helicobacter pylori drives chronic antigenic stimulation, inducing lymphoid tissue in the stomach and raising the future risk of **mucosa-associated lymphoid tissue (MALT) lymphoma**.
- It may also cause **intestinal metaplasia, then dysplasia, then carcinoma**.

## Peptic ulcers

An **ulcer breaches the muscularis mucosa into the submucosa**; a more superficial lesion is an **erosion**, not an ulcer.

| Feature | Gastric ulcer | Duodenal ulcer |
|---|---|---|
| Frequency | Less common | About **4 times commoner** |
| Pain and food | **Worse with food**, relieved by antacids | **Relieved by food and milk**, worse at night |
| Age group | Mainly the elderly | Younger adults |
| Weight | Epigastric pain with or without weight loss | Weight usually maintained |

- **Risk factors** — Helicobacter pylori, smoking, NSAIDs and aspirin, corticosteroids, physiological stress, delayed gastric emptying, and increased acid secretion.
- **Investigation** — biopsy to establish Helicobacter pylori histological status. The classic appearance is a **punched-out lesion with rolled margins**. A gastric ulcer must always be biopsied to exclude malignancy.
- **Complications** — **iron-deficiency anaemia**, **perforation** (look for free air under the diaphragm on an **erect chest X-ray**), and malignancy.
- **Helicobacter pylori eradication** uses **triple therapy**: a proton pump inhibitor with **amoxicillin** and **clarithromycin** (metronidazole substitutes for either in allergy), for 7 days.

## Gastric cancer

- Incidence is **higher in Japan and China**, where more fermented and pickled food is eaten.
- **Over 95% of gastric tumours are adenocarcinomas.**
- **Intestinal type** — well differentiated, goblet cells present, arising after intestinal metaplasia.
- **Diffuse type** — poorly differentiated with no gland formation, and includes **signet ring cell carcinoma**.

## Gastric MALT lymphoma

- Caused by **Helicobacter pylori** through chronic antigenic stimulation.
- Management is to **remove the cause**: Helicobacter pylori eradication with triple therapy (a proton pump inhibitor, clarithromycin and amoxicillin), which alone can cause regression of early-stage disease.

> An ulcer breaches the muscularis mucosa; anything shallower is an erosion. Duodenal ulcers are four times commoner and are eased by food, while gastric ulcers are made worse by it and must be biopsied to exclude cancer. Helicobacter pylori links chronic gastritis to both gastric adenocarcinoma and MALT lymphoma, and eradicating it can cure early MALT lymphoma.`,
        },
        {
          id: "coeliac_disease",
          name: "Coeliac disease",
          content: `## Coeliac disease

A **T-cell mediated autoimmune** enteropathy triggered by dietary gluten, occurring in genetically susceptible people (**HLA-DQ2 and HLA-DQ8**).

## Who gets it

Classically presents either in **young children** or in adults, with a strong association with people of Irish descent (a favourite of exam questions). It is far commoner than once believed and is frequently diagnosed late.

## How it presents

Symptoms are those of **malabsorption**: steatorrhoea, abdominal pain, bloating, nausea and vomiting, weight loss, fatigue, **iron-deficiency anaemia**, and failure to thrive in children. Two associations are worth remembering:

- **Dermatitis herpetiformis** — an intensely itchy vesicular rash, classically on the extensor surfaces.
- **Hyposplenism** — so these patients may need **additional vaccination** (pneumococcal, and consider Haemophilus influenzae type b and meningococcal).

The main **differential diagnosis** is **tropical sprue**.

## Serological testing

- **First line is IgA tissue transglutaminase (tTG-IgA)**, requested together with a **total IgA level** (selective IgA deficiency is commoner in coeliac disease and gives a false negative).
- **IgA endomysial antibody (EMA)** is used second line, where tTG is weakly positive or IgA is deficient. It has excellent sensitivity and specificity.
- **Anti-gliadin antibody** is a **poor marker** of disease and of disease control, and is no longer used.
- The patient **must be eating gluten** (for at least six weeks) for serology and biopsy to be valid.

## Gold standard investigation

**Upper gastrointestinal endoscopy with duodenal biopsy**, which shows the triad of:

- **Villous atrophy**
- **Crypt hyperplasia**
- **Increased intraepithelial lymphocytes**

The normal **villus-to-crypt ratio is about 3:1 to 5:1**; in coeliac disease this falls as the villi flatten and the crypts lengthen.

## Management and its most important complication

Management is a **strict lifelong gluten-free diet**, which reverses the histology and the symptoms.

Around **10% progress to enteropathy-associated T-cell lymphoma (EATL)** of the duodenum if the disease is not treated adequately, which is the single strongest argument for strict dietary adherence. Untreated coeliac disease also causes osteoporosis from calcium and vitamin D malabsorption.

> Coeliac disease is a T-cell mediated reaction to gluten in HLA-DQ2 or DQ8 carriers. Test with IgA tissue transglutaminase plus a total IgA while the patient is still eating gluten, then confirm with duodenal biopsy showing villous atrophy, crypt hyperplasia and increased intraepithelial lymphocytes. Treatment is a lifelong gluten-free diet, which also protects against enteropathy-associated T-cell lymphoma.`,
        },
        {
          id: "inflammatory_bowel_disease",
          name: "Inflammatory bowel disease: Crohn's versus ulcerative colitis",
          content: `## Inflammatory bowel disease

The two chronic inflammatory bowel diseases are **Crohn's disease** and **ulcerative colitis**. Almost every distinguishing feature follows from one fact: Crohn's inflammation is **patchy and transmural** anywhere from mouth to anus, whereas ulcerative colitis is **continuous and superficial** and confined to the colon.

## Epidemiology and aetiology

| Feature | Crohn's disease | Ulcerative colitis |
|---|---|---|
| Frequency | Slightly less common | Slightly commoner than Crohn's |
| Peak onset | The twenties, female predominant | 20 to 25 years |
| Ethnicity | Western populations; white people 2 to 5 times more affected than non-white | White people more affected than non-white |
| Smoking | **Worsens** symptoms | **Improves** symptoms and is protective |
| Monozygotic twin concordance | About 50% | About 15% |

The aetiology of both is unknown. Crohn's disease is the classic setting for the **hygiene hypothesis**: less food contamination means less enteric infection, so the processes that regulate the mucosal immune response develop inadequately, producing an exaggerated immune response to organisms that would otherwise cause self-limiting disease.

## Pathology

| Feature | Crohn's disease | Ulcerative colitis |
|---|---|---|
| Distribution | Whole gastrointestinal tract, **mouth to anus**; commonest in the terminal ileum and caecum | Extends **proximally from the rectum**, continuously |
| Pattern | Patchy, giving **skip lesions**; healthy mucosa lies above diseased mucosa producing a **cobblestone appearance** | Continuous mucosal involvement. Small bowel spared unless severe pancolitis causes **backwash ileitis** |
| Depth | **Transmural** inflammation | Inflammation **superficial, confined to the mucosa** |
| Histology | **Non-caseating granulomas**; fistula and fissure formation common | **No** granulomas, fissures, fistulae or strictures |
| Characteristic lesions | First lesion is the **aphthous ulcer**; deep **rose-thorn ulcers** which join to form serpentine ulcers | Islands of regenerating mucosa bulge into the lumen forming **pseudopolyps**, which can fuse into mucosal bridges |

## Clinical features

- **Crohn's disease** — intermittent diarrhoea, abdominal pain and fever.
- **Ulcerative colitis** — **bloody diarrhoea with mucus**, and crampy abdominal pain **relieved by defecation**.

## Extra-intestinal manifestations (common to both)

- **General** — malabsorption and iron-deficiency anaemia, causing angular stomatitis.
- **Eyes** — anterior uveitis (inflammation of the iris and ciliary body) and conjunctivitis.
- **Skin** — **erythema nodosum** (tender, bruise-like swellings on the shins), **pyoderma gangrenosum**, erythema multiforme, and digital clubbing.
- **Joints** — migratory asymmetrical polyarthropathy of the large joints (about 15%), sacroiliitis, myositis, and ankylosing spondylitis.
- **Liver** — pericholangitis, **primary sclerosing cholangitis** (much commoner in ulcerative colitis than Crohn's), and steatosis.

## Complications

| Crohn's disease | Ulcerative colitis |
|---|---|
| Strictures, often requiring repeated bowel resection | **Toxic megacolon** and perforation — damage to the muscularis propria disrupts neuromuscular function, causing colonic dilatation |
| Fistulae and abscess formation | About **30% require colectomy within 3 years** for uncontrollable symptoms |
| Perforation and severe haemorrhage | **Colorectal adenocarcinoma** — a markedly increased risk, classically quoted as 20 to 30 times, rising with the duration and extent of disease, so patients enter colonoscopic surveillance |

## Investigations

- **Crohn's disease** — systemic markers of inflammation (erythrocyte sedimentation rate, C-reactive protein), barium contrast studies and endoscopy.
- **Ulcerative colitis** — rectal biopsy, flexible sigmoidoscopy or colonoscopy, abdominal X-ray (looking for toxic megacolon) and stool culture to exclude infection.
- Faecal calprotectin is now widely used to distinguish inflammatory from functional bowel disease before endoscopy.

## Management

**Crohn's disease**

- **Mild attack** — oral **prednisolone**. Budesonide is an alternative for distal ileal or right-sided colonic disease if conventional steroids are unsuitable.
- **Severe attack** — **intravenous hydrocortisone**, with metronidazole for perianal or septic complications.
- **Additional and maintenance therapies** — **azathioprine** or mercaptopurine, **methotrexate**, and biologics such as **infliximab** or adalimumab for severe active disease. Aminosalicylates are of little value in maintaining remission in Crohn's disease.

**Ulcerative colitis**

- **Mild** — **prednisolone plus mesalazine** (a 5-aminosalicylic acid), with a topical aminosalicylate for distal disease.
- **Moderate** — prednisolone plus a 5-aminosalicylate plus a **steroid enema twice daily**.
- **Severe** — **admit**, keep nil by mouth, give intravenous fluids and **intravenous hydrocortisone**, plus rectal steroids; escalate to a biologic or colectomy if there is no response.
- **Maintaining remission** — a **5-aminosalicylate first line**, then **azathioprine** second line.

> Crohn's is patchy, transmural, mouth-to-anus disease with non-caseating granulomas, skip lesions and fistulae, made worse by smoking. Ulcerative colitis is continuous, mucosal, rectum-upwards disease with pseudopolyps, improved by smoking, and complicated by toxic megacolon and a high colorectal cancer risk. Aminosalicylates maintain remission in colitis but not in Crohn's.`,
        },
        {
          id: "colitis_ischaemia_diverticular",
          name: "Colitis, bowel obstruction, ischaemia & diverticular disease",
          content: `## Colitis, obstruction, ischaemia and diverticular disease

## Causes of colitis

**Acute colitis**

- **Infection** — bacterial, viral or protozoal.
- **Drugs and toxins**, especially antibiotics.
- **Chemotherapy or radiotherapy.**

**Chronic colitis**

- **Inflammatory bowel disease** — Crohn's disease and ulcerative colitis (see that topic).
- **Tuberculosis.**

## Clostridioides difficile colitis

Antibiotics kill off commensal flora, allowing Clostridioides difficile to flourish; its **exotoxins cause pseudomembranous colitis**.

The classic culprits are the **four Cs**: **ciprofloxacin, cephalosporins, co-amoxiclav and clindamycin**.

- **Investigations** — stool culture with a **toxin assay**.
- **Management** — **oral vancomycin 125 mg four times daily for 10 days** is first line (it is poorly absorbed, so it accumulates where it is needed in the gut lumen). **Fidaxomicin** is second line, or for recurrent infection. **Metronidazole is no longer recommended** first or second line.
- **Infection control** — isolate in a side room with **soap-and-water handwashing** (alcohol gel does not kill spores) and review the antibiotic prescription.

Other common bacterial causes of infective colitis are **Campylobacter, Salmonella and Shigella** species.

## Mechanical bowel obstruction

Causes include:

- **Constipation.**
- **Diverticular disease**, which is very common.
- **Adhesions.**
- **Herniation.**
- An **external mass** such as a fetus, tumour, aneurysm or foreign body.
- **Volvulus** — complete twisting of a bowel loop at the mesenteric base around its vascular pedicle. Small bowel volvulus occurs in infants; in the elderly **sigmoid volvulus is commoner than caecal**.
- **Intussusception.**

## Ischaemic colitis

Caused by arterial or venous occlusion, small-vessel disease, low-flow states such as hypovolaemic shock, or obstruction.

It characteristically affects the **watershed areas** where two arterial territories meet and perfusion is most marginal:

- The **splenic flexure** — the transition from the superior mesenteric artery to the inferior mesenteric artery.
- The **rectosigmoid** — the transition from the inferior mesenteric artery to the internal iliac artery.

## Diverticular disease

- High incidence in Western countries, probably because of a **low-fibre diet**.
- High intraluminal pressure produces **outpouchings at weak points** in the bowel wall, seen on barium enema, computed tomography or endoscopy.
- **90% occur in the left colon.**
- The mere presence of diverticula is **diverticulosis**, not diverticulitis.
- Often **asymptomatic**, sometimes causing rectal bleeding.
- **Complications** — **diverticulitis** (fever and peritonism), gross perforation, fistula formation, and obstruction due to fibrosis.

> The four Cs (ciprofloxacin, cephalosporins, co-amoxiclav, clindamycin) precipitate Clostridioides difficile, now treated with oral vancomycin first line and fidaxomicin second, not metronidazole. Ischaemic colitis strikes the watershed areas at the splenic flexure and rectosigmoid. Diverticula are left-sided in 90% of cases, and their presence alone is diverticulosis rather than diverticulitis.`,
        },
        {
          id: "colorectal_polyps_cancer",
          name: "Colorectal polyps & colorectal cancer",
          content: `## Colorectal polyps and colorectal cancer

## Neoplastic polyps: adenomas

**Benign dysplastic lesions that are the precursor to most adenocarcinomas**, although most individual adenomas remain benign.

- Found in **50% of people over 50** in the Western world, so they are very common.
- Mostly **asymptomatic**, which is why surveillance matters. **Size is the single most important risk factor for malignancy**: an adenoma larger than about 4 cm carries a risk of malignant change approaching **45%**. The degree of dysplasia and an increased villous component also raise risk.
- Classified by architecture as **tubular, tubulovillous or villous**.
- A **villous adenoma** (rare) can cause **hypoproteinaemic hypokalaemia**, because it leaks large amounts of protein and potassium.

## The adenoma to carcinoma sequence

The classical **chromosomal instability sequence**:

- **Normal colon** becomes **at-risk mucosa** after a first-hit mutation in one copy of the **APC** gene. People with familial adenomatous polyposis are **born with this first hit**.
- At-risk mucosa becomes an **adenoma** after a second-hit mutation in the remaining **APC** gene.
- Progression to **carcinoma** follows activation of **KRAS** and loss-of-function mutation of **p53**.

## Non-neoplastic polyps

| Type | Features |
|---|---|
| Hamartomatous polyp | Occurs sporadically and in genetic syndromes. **Juvenile polyps** are focal malformations of mucosa and lamina propria, the vast majority in children under 5, mostly rectal, causing bleeding. Usually solitary, but up to 100 are found in **juvenile polyposis** (autosomal dominant), which may need colectomy to stop haemorrhage. |
| Peutz-Jeghers syndrome | Autosomal dominant, **LKB1 (STK11)** mutation. Multiple hamartomatous polyps with **mucocutaneous hyperpigmentation** — freckles around the mouth, palms and soles. Increased risk of **intussusception** and of malignancy, so needs regular surveillance of the gastrointestinal tract, pelvis and gonads. |
| Hyperplastic polyp | Seen at 50 to 60 years; thought to result from shedding of epithelium causing cell build-up. |
| Inflammatory pseudopolyp | Seen in inflammatory bowel disease. |

## Colorectal cancer

**Epidemiology** — the **second commonest cause of cancer death in the UK**, typically at **60 to 79 years**. Presentation **under 50 should prompt consideration of a familial syndrome**. Commoner in Western populations. **98% are adenocarcinoma** and **45% are in the rectum**.

**Aetiology** — a diet low in fibre and high in fat, lack of exercise, obesity, familial syndromes and chronic inflammatory bowel disease. **NSAIDs are protective** (cyclo-oxygenase 2 is over-expressed in 90% of tumours).

**Clinical features by side**

- **Right-sided tumours** — **iron-deficiency anaemia** and weight loss (the lumen is capacious, so obstruction is late).
- **Left-sided tumours** — **change in bowel habit** and crampy left lower quadrant pain.

**Investigations** — proctoscopy, sigmoidoscopy, colonoscopy, barium enema, blood tests including full blood count, and computed tomography or magnetic resonance imaging. **Carcinoembryonic antigen (CEA)** is used to monitor disease and response to therapy, **not** to make the diagnosis.

## Dukes staging

Dukes staging helps determine treatment; TNM staging is also used. The subdivided form below is the **modified (Astler-Coller)** version.

| Stage | Extent | 5-year survival |
|---|---|---|
| A | Confined to the mucosa | Over 95% |
| B1 | Extending into the muscularis propria | 67% |
| B2 | Transmural invasion, no lymph nodes involved | 54% |
| C1 | Extending to the muscularis propria, with lymph node metastases | 43% |
| C2 | Transmural invasion, with lymph node metastases | 23% |
| D | Distant metastases | Under 10% |

## Surgical management by site

| Tumour site | Operation |
|---|---|
| Rectum, within 1 to 2 cm above the anal sphincter (lower third) | **Abdomino-perineal resection** |
| Rectum or low sigmoid, more than 1 to 2 cm above the sphincter | **Anterior resection** |
| Sigmoid colon | Sigmoid colectomy |
| Descending colon and distal transverse | Left hemicolectomy |
| Caecum, ascending colon and proximal transverse | Right hemicolectomy |
| Transverse colon | Extended right hemicolectomy |

**Radiotherapy** is given postoperatively to reduce local recurrence. **Chemotherapy** in palliation is based on **5-fluorouracil**.

## Familial syndromes

**Familial adenomatous polyposis (FAP)**

- **Autosomal dominant**, caused by mutation of the **APC** tumour suppressor gene on **chromosome 5q21**.
- Presents at **10 to 15 years**. **More than 100 adenomatous polyps are required for diagnosis**, and usually hundreds to thousands are seen.
- **All will progress to adenocarcinoma by about 30 years** if untreated, so most patients undergo **prophylactic colectomy**.
- Increased risk of neoplasia elsewhere, for example at the **ampulla of Vater** and in the stomach.
- **Gardner syndrome** is a subtype of FAP with extra-intestinal features such as **osteomas of the skull** and dental abnormalities.
- A separate, genuinely **autosomal recessive** polyposis exists — **MUTYH-associated polyposis** — caused by biallelic mutation of the **MUTYH** base-excision-repair gene, typically with fewer polyps and later onset.

**Hereditary non-polyposis colorectal cancer (Lynch syndrome)**

- **Autosomal dominant** mutations in **DNA mismatch repair** genes (MLH1, MSH2, MSH6, PMS2).
- Carcinomas usually arise in the **right colon**, with **few polyps but rapid progression** to malignancy, so patients typically present **under 50**.
- Associated **extra-colonic cancers**: endometrial, ovarian, small bowel, transitional cell and gastric carcinoma.
- These patients need regular surveillance and will probably eventually require total colectomy.

> Adenomas are the precursor lesion, and size is the dominant risk factor for malignancy. The classical sequence is a two-hit loss of APC, then KRAS activation, then p53 loss. Right-sided cancers bleed and cause anaemia while left-sided ones change bowel habit. Familial adenomatous polyposis is autosomal dominant APC disease needing prophylactic colectomy, whereas Lynch syndrome is mismatch-repair disease with few polyps, right-sided tumours and endometrial cancer.`,
        },
        {
          id: "carcinoid_syndrome",
          name: "Carcinoid tumours & carcinoid syndrome",
          content: `## Carcinoid tumours and carcinoid syndrome

A diverse group of tumours of **enterochromaffin cell** origin which produce **5-hydroxytryptamine (serotonin)**.

- Commonly found in the **bowel**, but also in the **lung, ovaries and testes**.
- Usually **slow growing**.

## Why the syndrome needs liver metastases

Serotonin released from a bowel primary drains into the portal vein and is **inactivated by the liver on first pass**, so a primary tumour alone usually causes no systemic symptoms. The **syndrome** appears once there are **hepatic metastases** (or a primary outside the portal drainage, such as bronchial), because vasoactive mediators then reach the systemic circulation directly.

## Carcinoid syndrome versus carcinoid crisis

| Carcinoid syndrome | Carcinoid crisis |
|---|---|
| **Bronchoconstriction** | Life-threatening **vasodilatation** |
| **Flushing** | **Hypotension** |
| **Diarrhoea** | **Tachycardia** |
| | **Bronchoconstriction** |
| | **Hyperglycaemia** |

A carcinoid crisis is typically precipitated by anaesthesia, surgery or tumour handling, which is why patients are covered with octreotide perioperatively.

## Investigation and management

- **Investigation** — **24-hour urinary 5-hydroxyindoleacetic acid (5-HIAA)**, the main metabolite of serotonin. Plasma chromogranin A is also used as a marker, with imaging to localise the tumour.
- **Management** — **octreotide**, a somatostatin analogue, which controls both symptoms and crises. Surgical resection is used for localised disease.

**Carcinoid heart disease** is an important late complication: fibrous plaque deposition on the **right-sided valves** causes tricuspid regurgitation and pulmonary stenosis. Left-sided valves are spared because the lungs inactivate the mediators.

> Carcinoid tumours are enterochromaffin-cell tumours secreting serotonin, and the syndrome of flushing, diarrhoea and bronchoconstriction only appears once liver metastases let mediators bypass hepatic first-pass metabolism. Diagnose with 24-hour urinary 5-HIAA and treat with octreotide, and remember right-sided valve fibrosis as the cardiac complication.`,
        },
        {
          id: "congenital_gi_anomalies",
          name: "Congenital GI anomalies & Hirschsprung's disease",
          content: `## Congenital gastrointestinal anomalies

A group of structural anomalies of the developing gut, presenting in the neonate or infant. They are covered further in the Paediatrics section.

- **Atresia** — complete failure of the lumen to form (for example duodenal atresia, which gives the classic **double-bubble** sign on abdominal X-ray and is strongly associated with Down syndrome).
- **Stenosis** — narrowing rather than complete occlusion, so presentation is later and more insidious.
- **Duplication** — a duplicated segment of bowel.
- **Imperforate anus** — failure of the anal opening to form, part of the anorectal malformation spectrum.

## Hirschsprung's disease

**Absence of ganglion cells in the myenteric (Auerbach) plexus** of the distal bowel, so that segment cannot relax and behaves as a functional obstruction. About **80% of cases are male**.

- **Distribution** — the aganglionic segment always begins at the anus and extends proximally, most often involving the **rectosigmoid**. The **aganglionic segment is the narrow, constricted one**, and the normally innervated bowel proximal to it dilates.
- **Presentation** — symptoms and signs of **obstruction in a young baby**: abdominal distension, bilious vomiting, and **failure to pass meconium within the first 48 hours** of life. It is the commonest cause of neonatal large-bowel obstruction.
- **Associations** — **Down syndrome**, in about **2%** of cases.
- **Genetics** — mutations of the **RET proto-oncogene** on **chromosome 10**.
- **Gold standard investigation** — a **full-thickness (or suction) rectal biopsy**, which shows **hypertrophied nerve fibres and an absence of ganglion cells**.
- **Treatment** — **resection of the affected constricted segment** with a **pull-through** of normal, functioning bowel.
- **Key complication** — **Hirschsprung-associated enterocolitis**, which presents with fever, abdominal distension and explosive, often bloody diarrhoea, and is life-threatening; it needs urgent decompression, fluids and antibiotics.

> Hirschsprung's disease is aganglionosis of the distal bowel, so the narrow segment is the diseased one and the bowel above it dilates. Suspect it in a baby boy who fails to pass meconium within 48 hours, especially with Down syndrome; diagnose on full-thickness rectal biopsy showing absent ganglia with hypertrophied nerve fibres, and treat by resecting the aganglionic segment with a pull-through.`,
        },
        {
          id: "jaundice",
          name: "Jaundice",
          content: `## Jaundice

Jaundice (icterus) is the yellow discolouration of the skin and sclerae caused by a raised level of bilirubin in the blood. It usually becomes clinically visible once the serum bilirubin climbs above roughly 40 to 50 micromol/L. Jaundice is a sign rather than a diagnosis, and the central task is to work out where in the handling of bilirubin the problem lies.

## How bilirubin is normally handled

Bilirubin is the breakdown product of haem, most of which comes from old red blood cells broken down by macrophages in the spleen. Following the normal pathway explains every pattern of jaundice:

- The bilirubin first released is **unconjugated**: it is fat-soluble, travels in the blood tightly bound to albumin, and cannot pass into the urine.
- In the liver, hepatocytes **conjugate** bilirubin with glucuronic acid to make it water-soluble, then secrete it into the bile.
- Bile carries conjugated bilirubin into the gut, where bacteria convert it to **urobilinogen**. Most is then turned into **stercobilin**, the brown pigment of faeces, while a small amount is reabsorbed and excreted by the kidney as **urobilin**.

A problem can therefore arise before the liver (too much bilirubin produced), within the liver (failure to take it up, conjugate or excrete it), or after the liver (failure to drain the bile).

## The three patterns

| Type | Mechanism | Typical causes |
|---|---|---|
| Pre-hepatic | Excess bilirubin production overwhelms a normal liver | Haemolytic anaemia, ineffective erythropoiesis (e.g. thalassaemia), resorption of a large haematoma |
| Hepatic | Hepatocytes fail to take up, conjugate or excrete bilirubin | Viral or alcoholic hepatitis, cirrhosis, drugs; Gilbert and Crigler-Najjar syndromes (impaired conjugation) |
| Post-hepatic (obstructive) | Conjugated bilirubin cannot drain because the biliary tree is blocked | Gallstones and strictures; cancer of the pancreatic head and cholangiocarcinoma; primary biliary cholangitis and primary sclerosing cholangitis |

Pre-hepatic jaundice raises the **unconjugated** fraction, because the excess bilirubin has not yet been processed by the liver, whereas hepatic and post-hepatic jaundice raise the **conjugated** fraction.

## Telling them apart

The split bilirubin (conjugated versus unconjugated), the urine and stool, and the liver enzymes separate the three:

| Finding | Pre-hepatic | Hepatic | Post-hepatic |
|---|---|---|---|
| Fraction raised | Unconjugated | Both | Conjugated |
| Bilirubin in urine | Absent | Present | Present |
| Urinary urobilinogen | Normal or raised | Raised | Reduced or absent |
| Urine colour | Normal | Dark | Dark |
| Stool colour | Normal | Normal or pale | Pale |
| Transaminases (ALT/AST) | Normal | Markedly raised | Mildly raised |
| Alkaline phosphatase (ALP) | Normal | Normal or mildly raised | Markedly raised |

Two enzyme patterns are worth memorising. A **hepatocellular** picture raises the transaminases (alanine and aspartate aminotransferase, ALT and AST) the most, whereas a **cholestatic or obstructive** picture raises the alkaline phosphatase (ALP) and gamma-glutamyl transferase (GGT) the most.

## Clinical pearls

- In pre-hepatic (haemolytic) jaundice the bilirubin is unconjugated and bound to albumin, so it cannot enter the urine — this is **acholuric jaundice**, with normal-coloured urine. A raised lactate dehydrogenase (LDH) and a low haptoglobin confirm haemolysis.
- Post-hepatic (obstructive) jaundice classically gives **pale stools and dark urine** — conjugated bilirubin spills into the urine while none reaches the gut to form stercobilin — and often **pruritus** from retained bile salts.
- **Gilbert syndrome** is a common and entirely benign cause of mild, isolated unconjugated hyperbilirubinaemia that flares with fasting or intercurrent illness and needs no treatment.
- **Courvoisier's law:** a palpable, non-tender gallbladder with painless jaundice is unlikely to be due to gallstones and points instead to malignant obstruction, such as cancer of the pancreatic head.
- The **prothrombin time** is the best marker of the liver's synthetic function in acute liver injury.`,
        },
        {
          id: "pancreatic_physiology",
          name: "Pancreatic structure, function & malformations",
          content: `## Pancreatic structure and function

The pancreas produces around **2 litres a day** of enzyme-rich, bicarbonate-rich fluid. Secretion is driven by two duodenal hormones:

- **Secretin** — produced by **S cells** of the duodenum. It controls gastric acid secretion and buffers it with bicarbonate.
- **Cholecystokinin (CCK)** — produced by **I cells** of the duodenum. It stimulates the digestion of fat and protein by causing release of digestive enzymes.

## Exocrine versus endocrine pancreas

| Feature | Exocrine | Endocrine |
|---|---|---|
| Structure | Ducts and acinar cells | Islets of Langerhans |
| Function | Digestive: proteases, lipases and amylase | Hormonal |
| Secretes into | Ducts | Bloodstream |

## Cells of the islets of Langerhans

| Cell | Product and action |
|---|---|
| Alpha | **Glucagon** — raises blood glucose |
| Beta | **Insulin** — lowers blood glucose |
| Delta | **Somatostatin** — regulates the other islet cells |
| D1 | A **vasoactive peptide**, stimulating secretion of water into the pancreatic system |
| PP | **Pancreatic polypeptide**, self-regulating secretory activity |

## Pancreatic malformations

- **Ectopic pancreas** — pancreatic tissue in an abnormal site, especially the stomach and small intestine.
- **Pancreas divisum** — failure of fusion of the dorsal and ventral pancreatic buds, carrying an increased risk of pancreatitis.
- **Annular (annular or ring) pancreas** — pancreatic tissue encircling the duodenum, which can present with **duodenal obstruction at around 1 year of age**.

> The pancreas is stimulated by secretin (bicarbonate, from duodenal S cells) and cholecystokinin (enzymes, from I cells). Islet alpha cells make glucagon, beta cells insulin and delta cells somatostatin. Pancreas divisum predisposes to pancreatitis and annular pancreas to infantile duodenal obstruction.`,
        },
        {
          id: "pancreatitis_pathology",
          name: "Acute & chronic pancreatitis",
          content: `## Acute pancreatitis

Acute inflammation of the pancreas caused by inappropriate activation of digestive enzymes within the gland, producing autodigestion.

## Causes: I GET SMASHED

- **I** — Idiopathic
- **G** — **Gallstones**
- **E** — **Ethanol** (alcohol)
- **T** — Trauma
- **S** — Steroids
- **M** — Mumps
- **A** — Autoimmune
- **S** — Scorpion venom
- **H** — Hyperlipidaemia (also hypercalcaemia)
- **E** — ERCP
- **D** — Drugs, for example thiazides

Gallstones and alcohol account for the great majority of cases in practice.

## How it presents

**Severe epigastric or central abdominal pain radiating through to the back, relieved by sitting forward**, with prominent vomiting.

## Investigations

- **Serum amylase** is only **transiently** raised, so a normal value late in the illness does not exclude the diagnosis.
- **Serum lipase is more sensitive** and stays elevated longer.
- Neither enzyme level correlates with severity.

## Scoring severity

The **modified Glasgow (Glasgow-Imrie) score** of **3 or more** indicates **severe pancreatitis**. Its components are remembered as **PANCREAS**, each scoring one point:

- **P** — PaO2 under 8 kPa
- **A** — Age over 55 years
- **N** — Neutrophils, white cell count over 15
- **C** — Calcium under 2 mmol/L
- **R** — Renal function, urea over 16 mmol/L
- **E** — Enzymes, lactate dehydrogenase over 600 or AST over 200
- **A** — Albumin under 32 g/L
- **S** — Sugar, glucose over 10 mmol/L

## Histology and patterns of damage

The histological hallmark is **coagulative necrosis**. Three patterns are described, and the pattern points to the cause:

| Pattern | Site of necrosis | Suggests |
|---|---|---|
| Periductal | Acinar cells near the ducts | **Obstructive** causes |
| Perilobular | The edge of the lobules | **Ischaemic** causes |
| Panlobular | A combination of both | Mixed or severe disease |

## Complications

- **Pseudocyst** — a pathological collection of fluid without a true epithelial lining, particularly associated with alcoholic pancreatitis. May become an **abscess**.
- **Shock**, from massive fluid sequestration and systemic inflammation.
- **Hyperglycaemia**, from destruction of islet tissue.
- **Hypocalcaemia** — digestive enzymes react with visceral fat and precipitate **calcium soaps** (fat necrosis), consuming calcium.

## Chronic pancreatitis

Long-standing inflammation causing irreversible destruction of pancreatic parenchyma.

**Causes**

- **Alcoholism** — much the commonest.
- **Cystic fibrosis.**
- **Hereditary** pancreatitis.
- **Pancreatic duct obstruction**, for example by stones or tumour.
- **Autoimmune** pancreatitis, in which **IgG4** is produced by plasma cells.

**Presentation** — epigastric pain radiating to the back, **malabsorption** (weight loss and steatorrhoea, from loss of digestive enzymes) and **secondary diabetes mellitus**.

**Histology** — closely resembles pancreatic carcinoma, which makes the distinction difficult: **fibrosis with loss of exocrine parenchyma, duct dilatation with thick secretions, and calcification**.

**Complications** — pseudocysts, diabetes mellitus, and **pancreatic cancer**.

> Acute pancreatitis is remembered by I GET SMASHED, presents with epigastric pain boring through to the back and relieved by sitting forward, and is scored for severity with the modified Glasgow (PANCREAS) criteria. Lipase is more sensitive than amylase, and enzyme levels do not reflect severity. Chronic pancreatitis is usually alcoholic, causes malabsorption and secondary diabetes, and its histology mimics carcinoma.`,
        },
        {
          id: "pancreatic_tumours",
          name: "Pancreatic carcinoma, neuroendocrine tumours & MEN",
          content: `## Pancreatic carcinoma

**Ductal adenocarcinoma of the pancreas** accounts for **85% of all pancreatic malignancies**.

| Feature | Detail |
|---|---|
| Epidemiology | Average age 60 years, commoner in men |
| Site | Usually the **head** of the pancreas |
| Risk factors | **Smoking**, diet, and genetic syndromes including familial adenomatous polyposis and Lynch syndrome (HNPCC) |
| Clinical features | Weight loss with **cachexia** and anorexia; chronic, persistent, severe upper abdominal and back pain; **painless jaundice** with pruritus and steatorrhoea; diabetes mellitus; ascites; an abdominal mass; **Virchow's node**; **Courvoisier's sign**; and **Trousseau's syndrome** (recurrent superficial thrombophlebitis) in about 25% |
| Investigations | Bloods showing low haemoglobin and raised bilirubin and calcium; CT, MRI or ERCP; **CA19-9** above 70 IU/mL |
| Management | **Chemotherapy is palliative** (5-fluorouracil). Surgery in only about **15%** of cases: **Whipple's procedure** (pancreaticoduodenectomy) |
| Prognosis | Very poor, with **5-year survival under 5%** |

**Courvoisier's law** is worth stating precisely: a **palpable, non-tender gallbladder with painless jaundice is unlikely to be due to gallstones**, and suggests malignant obstruction of the biliary tree.

## Pancreatic neuroendocrine (islet cell) tumours

- Normally arise in the **body or tail** of the pancreas.
- Circumscribed, **1 to 5 cm**, with cells arranged in **nests or trabeculae** with granular cytoplasm.
- Occur in **multiple endocrine neoplasia type 1** in around **15%**, and may then be **multiple**.
- Behaviour is **unpredictable**, lying on a spectrum from benign to malignant.

**Functional tumours** present with symptoms of hormone excess:

| Tumour | Syndrome |
|---|---|
| **Insulinoma** | Hypoglycaemic attacks. The commonest functional islet cell tumour |
| **Gastrinoma** | **Zollinger-Ellison syndrome** — high acid output causing recurrent, refractory peptic ulceration |
| **VIPoma** | Profuse watery diarrhoea |
| **Glucagonoma** | **Necrolytic migratory erythema** |

**Non-functional tumours** are found incidentally on imaging, or when large enough to cause local or metastatic symptoms.

- **Investigations** — CT or MRI, with **chromogranin A** as a tumour marker.
- **Management** — surgery.

## Multiple endocrine neoplasia (MEN)

A group of inherited syndromes with functioning hormone-producing tumours in multiple organs.

| Syndrome | Components |
|---|---|
| **MEN 1** | The three Ps: **Parathyroid** hyperplasia or adenoma, **Pancreatic** endocrine tumour (typically gastrinoma or insulinoma), and **Pituitary** adenoma |
| **MEN 2A** | **Medullary thyroid carcinoma**, **phaeochromocytoma**, and **parathyroid** hyperplasia |
| **MEN 2B** | **Medullary thyroid carcinoma**, **phaeochromocytoma**, and **mucosal neuromas** with intestinal ganglioneuromatosis, plus a **marfanoid** habitus. Parathyroid disease is characteristically absent |

MEN 1 is caused by mutation of the **MEN1** tumour suppressor gene; MEN 2A and 2B by mutations of the **RET** proto-oncogene.

## Acinar cell carcinoma

- Rare, occurring in older adults, and characterised by **enzyme production by the neoplastic cells**.
- **Presentation** — non-specific: abdominal pain, weight loss, nausea and diarrhoea. About **10% develop multifocal fat necrosis and polyarthralgia** because of **lipase hypersecretion**.
- **Histopathology** — neoplastic epithelial cells with **eosinophilic granular cytoplasm**, showing positive immunoreactivity for **lipase, trypsin and chymotrypsin**.
- **Prognosis** — median survival about **18 months**, with 5-year survival under 10%.

> Pancreatic ductal adenocarcinoma sits in the head of the gland, causes painless obstructive jaundice with a palpable gallbladder (Courvoisier), and has under 5% five-year survival. Islet cell tumours favour body and tail: insulinoma is commonest, gastrinoma causes Zollinger-Ellison syndrome, and 15% occur in MEN 1 (parathyroid, pancreas, pituitary). Phaeochromocytoma belongs to MEN 2, not MEN 1.`,
        },
        {
          id: "biliary_pathology",
          name: "Gallbladder & biliary tract pathology",
          content: `## Gallbladder and biliary tract pathology

Gallbladder pathology is centred almost entirely on **gallstones**.

## Gallstones

- **Risk factors** — increasing age, female sex, the combined oral contraceptive pill, and disorders of bile metabolism. (The classic aide-memoire is the five Fs: female, forty, fertile, fat, fair.)
- **Composition** — most are **cholesterol** stones, which are **radiolucent** and therefore invisible on plain X-ray. A minority are **calcium salt (pigment)** stones, which are **radio-opaque**. This is why ultrasound, not plain film, is the imaging of choice.

## The spectrum of gallstone disease

| Condition | Definition |
|---|---|
| **Cholelithiasis** | The presence of gallstones in the gallbladder, found in around **20% of adults** in the West and usually asymptomatic |
| **Acute cholecystitis** | Acute inflammation of the gallbladder; **90% are associated with gallstones** |
| **Chronic cholecystitis** | Chronic inflammation leading to **fibrosis**; again **90% associated with gallstones**. If the wall calcifies it becomes a **porcelain gallbladder** |
| **Gallbladder carcinoma** | Adenocarcinoma of the gallbladder, of which around **90% are associated with gallstones**. A **porcelain gallbladder** is an important premalignant finding and is an indication for cholecystectomy |

## Cholangiocarcinoma

Adenocarcinoma arising from the **bile duct epithelium**, which may be intrahepatic or extrahepatic. Its risk factors are **different from those of gallbladder carcinoma** and gallstones are not the dominant association:

- **Primary sclerosing cholangitis** — the most important association.
- **Parasitic liver disease** (liver flukes such as Clonorchis and Opisthorchis).
- **Chronic liver disease** and **congenital biliary abnormalities** such as choledochal cysts.
- **Lynch syndrome type II.**

It accounts for about **10% of liver tumours** and carries a **poor prognosis**.

> Most gallstones are cholesterol and therefore radiolucent, so ultrasound is the investigation of choice. Ninety per cent of acute and chronic cholecystitis, and of gallbladder carcinoma, is gallstone-related, and a porcelain gallbladder is premalignant. Cholangiocarcinoma is a different disease, driven above all by primary sclerosing cholangitis and liver flukes rather than by stones.`,
        },
        {
          id: "liver_architecture_injury",
          name: "Liver structure, function & response to injury",
          content: `## Liver structure

The basic structural unit is the **hepatic lobule**, conventionally drawn as a **hexagon**.

- At the **centre** lies the terminal branch of the hepatic vein, the **centrilobular vein**.
- At each **point** of the hexagon sits a **portal tract**, containing the **portal triad**: a branch of the **bile duct**, the **hepatic artery** and the **portal vein**.

## The three zones, and why they matter

| Zone | Position | Significance |
|---|---|---|
| **Zone 1** | Closest to the portal triad (periportal) | Receives the **most oxygen**, and is **affected first in viral hepatitis** |
| **Zone 2** | Mid zone | Intermediate |
| **Zone 3** | Closest to the terminal hepatic vein (perivenular) | The **most mature and metabolically active** hepatocytes, containing most liver enzymes, and therefore **most sensitive to metabolic toxins and to ischaemia** |

This explains a classic pairing: **paracetamol and ischaemic injury damage zone 3**, whereas **viral hepatitis starts in zone 1**.

## Functions of the liver

- **Metabolism** — glycolysis, glycogen storage, gluconeogenesis, amino acid synthesis, fatty acid synthesis and lipoprotein metabolism, plus **drug metabolism**.
- **Protein synthesis** — makes **all circulating proteins except the gamma globulins**, including **albumin, fibrinogen and the coagulation factors**.
- **Storage** — glycogen, and vitamins **A, D and B12** in large amounts, with smaller amounts of vitamin K, folate, iron and copper.
- **Hormone metabolism** — **activates vitamin D**, conjugates and excretes steroid hormones (oestrogen and glucocorticoids), and metabolises peptide hormones (insulin, growth hormone and parathyroid hormone).
- **Bile synthesis** — **600 to 1000 mL daily**.
- **Immune function** — antigens from the gut reach the liver through the portal circulation and are phagocytosed by **Kupffer cells**.

Because the liver makes albumin and the clotting factors, liver failure produces **hypoalbuminaemia with oedema** and a **coagulopathy with a prolonged prothrombin time**.

## The response to injury: how fibrosis develops

- A normal liver has hepatocytes with **microvilli**, and **stellate cells** lying quiescent in the **space of Disse** (between hepatocyte and sinusoid).
- **Chronic inflammation** causes **loss of the microvilli** and **activation of the stellate cells**, which begin to produce **collagen**.
- The activated stellate cells become **myofibroblasts**, initiating **fibrosis** by depositing collagen in the space of Disse.
- These myofibroblasts **contract**, constricting the sinusoids and **increasing vascular resistance** — the beginning of portal hypertension.
- Undamaged hepatocytes **regenerate in nodules** between the fibrous septa, giving the nodularity of cirrhosis.

> The portal triad sits at the points of the hexagonal lobule and the hepatic vein at its centre. Zone 1 is oxygen-rich and hit first by viral hepatitis, while zone 3 is enzyme-rich and hit first by toxins such as paracetamol and by ischaemia. Fibrosis begins when chronic inflammation activates stellate cells in the space of Disse into collagen-producing myofibroblasts, which contract and raise vascular resistance.`,
        },
        {
          id: "hepatitis_pathology",
          name: "Acute & chronic hepatitis: the histological picture",
          content: `## Acute hepatitis

Caused either by **viruses (hepatitis A to E)** or by **drugs**. The viral serology is covered in the Viral infections and antivirals topic.

**Histopathology** — the hallmark is **spotty necrosis**: small foci of inflammation and inflammatory infiltrate scattered through the lobule.

## Chronic hepatitis

Two separate descriptors are used, and confusing them is a common error:

- **Grade** = the severity of **inflammation**.
- **Stage** = the severity of **fibrosis**.

**Causes** — viruses, more often **hepatitis B and C**, and drugs; also chronic inflammation from **primary biliary cholangitis, primary sclerosing cholangitis, Wilson's disease and haemochromatosis**.

## The four histological steps

- **Portal inflammation** — inflammatory cells confined to the portal tracts.
- **Interface hepatitis**, also called **piecemeal necrosis** — inflammation spills across the limiting plate so that **the border between the portal tract and the parenchyma can no longer be seen**.
- **Lobular inflammation** — inflammation extends into the lobule itself.
- **Bridging fibrosis** — a fibrous bridge forms **from the portal vein to the central vein**. This is the **critical step in the evolution of hepatitis into cirrhosis**, because blood is now shunted past the hepatocytes.

## Why bridging matters clinically

Bridging creates **intrahepatic shunting**: blood bypasses functioning hepatocytes, so the liver loses its **detoxification** capacity. This is the mechanism by which **hepatic encephalopathy** develops, as nitrogenous waste (notably ammonia) reaches the systemic circulation unmetabolised.

> Acute hepatitis shows spotty necrosis. In chronic hepatitis, grade describes inflammation and stage describes fibrosis. The sequence runs portal inflammation, then interface hepatitis (piecemeal necrosis, with loss of the portal-parenchymal border), then lobular inflammation, then bridging fibrosis — the critical step to cirrhosis, which shunts blood past hepatocytes and causes encephalopathy.`,
        },
        {
          id: "cirrhosis_portal_hypertension",
          name: "Cirrhosis & portal hypertension",
          content: `## Cirrhosis

A **diffuse abnormality of liver architecture that interferes with both blood flow and liver function**. It is the common end point of most chronic liver disease.

## How portal hypertension arises

Disruption of the architecture **increases resistance to blood flow through the liver**, producing **portal hypertension**. **Fibrotic bridges** form between the portal triad and the central vein. The raised portal pressure then forces blood through **porto-systemic anastomoses**, causing congestion at those sites:

- **Oesophageal varices** — the most dangerous, because rupture causes torrential haematemesis.
- **Anorectal varices.**
- **Caput medusae** — dilated periumbilical veins.
- **Splenomegaly**, often with thrombocytopenia.

## Causes of cirrhosis

- **Alcoholic liver disease.**
- **Non-alcoholic fatty liver disease.**
- **Chronic viral hepatitis** — hepatitis B, with or without D, and hepatitis C.
- **Autoimmune hepatitis.**
- **Biliary causes** — **primary biliary cholangitis** and **primary sclerosing cholangitis**.
- **Genetic causes** — **haemochromatosis** (HFE gene, chromosome 6), **Wilson's disease** (ATP7B gene, chromosome 13), **alpha-1 antitrypsin deficiency**, **galactosaemia** and the **glycogen storage diseases**.
- **Drugs**, for example **methotrexate**.

## Histopathology of the cirrhotic liver

- **Hepatocyte necrosis**
- **Fibrosis**
- **Nodules of regenerating hepatocytes**
- **Disturbance of vascular architecture**

## Classification by nodule size

| Type | Nodules | Pattern | Typical causes |
|---|---|---|---|
| **Micronodular** | Under 3 mm | Uniform liver involvement | **Alcoholic hepatitis**, biliary tract disease |
| **Macronodular** | Over 3 mm | Variable nodule size | **Viral hepatitis**, Wilson's disease, alpha-1 antitrypsin deficiency |

## The modified Child-Pugh score

Child-Pugh indicates prognosis in cirrhosis. Its five components are remembered as **ABCDE**: **A**lbumin, **B**ilirubin, **C**lotting (prothrombin time), **D**istension (ascites) and **E**ncephalopathy.

| Component | 1 point | 2 points | 3 points |
|---|---|---|---|
| Albumin (g/L) | Over 35 | 28 to 35 | Under 28 |
| Bilirubin (micromol/L) | Under 34 | 34 to 50 | Over 50 |
| Clotting: prothrombin time (seconds prolonged) | Under 4 | 4 to 6 | Over 6 |
| Distension: ascites | None | Mild | Moderate or severe |
| Encephalopathy | None | Mild | Marked |

**Interpretation**

| Total score | Class | Survival |
|---|---|---|
| Under 7 | **Child-Pugh A** | About 100% at 1 year, 85% at 2 years |
| 7 to 9 | **Child-Pugh B** | About 80% at 1 year, 60% at 2 years |
| 10 or more | **Child-Pugh C** | About 45% at 1 year, 35% at 2 years |

## Decompensation

Compensated cirrhosis may be silent. **Decompensation** is signalled by **jaundice, ascites, hepatic encephalopathy** or **variceal bleeding**, and markedly worsens prognosis. Patients with cirrhosis also need **6-monthly ultrasound surveillance for hepatocellular carcinoma**.

> Cirrhosis is diffuse architectural disruption causing both loss of function and portal hypertension, which opens porto-systemic shunts and gives oesophageal varices, caput medusae and splenomegaly. Micronodular disease is typically alcoholic and macronodular typically viral. Child-Pugh (ABCDE: albumin, bilirubin, clotting, distension, encephalopathy) grades prognosis, and jaundice, ascites, encephalopathy or variceal bleeding mark decompensation.`,
        },
        {
          id: "fatty_liver_disease",
          name: "Alcohol-related & metabolic (MASLD) fatty liver disease",
          content: `## Alcohol-related liver disease

Alcohol causes a **spectrum** of liver injury, and the earliest stage is fully reversible.

| Stage | Macroscopic | Microscopic |
|---|---|---|
| **Hepatic steatosis (fatty liver)** | Large, pale, yellow and greasy liver | Accumulation of **fat droplets in hepatocytes**. Chronic exposure leads to fibrosis at a late stage. **Fully reversible if alcohol is avoided** |
| **Alcoholic hepatitis** | Large, fibrotic liver | **Hepatocyte ballooning** and necrosis from accumulation of fat, water and protein; **Mallory-Denk bodies** (clumped cytoskeleton); fibrosis |
| **Alcoholic cirrhosis** | Yellow-tan, fatty and enlarged, later transforming into a shrunken, non-fatty, brown organ | **Micronodular cirrhosis**: small nodules separated by bands of fibrous tissue |

**Alcoholic hepatitis** is characteristically seen **acutely after a period of heavy drinking**, and ranges from asymptomatic to fulminant liver failure. **Each episode carries a 10 to 20% mortality**, which is why it must never be dismissed as minor.

## Metabolic dysfunction-associated steatotic liver disease (MASLD)

**Hepatic steatosis occurring in people who do not drink significantly.** Histologically it looks very similar to alcohol-related liver disease, so the distinction rests on the alcohol history.

**The name changed in 2023.** A multi-society Delphi consensus (AASLD, EASL and ALEH) replaced the old terms, because "non-alcoholic" defined the condition by what it was not, and "fatty" was felt to be stigmatising:

| Old term | Current term |
|---|---|
| Non-alcoholic fatty liver disease (**NAFLD**) | **MASLD** — metabolic dysfunction-associated steatotic liver disease |
| Non-alcoholic steatohepatitis (**NASH**) | **MASH** — metabolic dysfunction-associated steatohepatitis |
| — | **Steatotic liver disease (SLD)** is the new umbrella term for all of it |

**MASLD is diagnosed as hepatic steatosis plus at least ONE of five cardiometabolic criteria** — raised body mass index or waist circumference, dysglycaemia or type 2 diabetes, raised blood pressure, raised triglycerides, or low HDL cholesterol (or treatment for any of them). This is the substantive change rather than a relabelling: the old NAFLD was a diagnosis of exclusion, whereas MASLD requires **positive** evidence of metabolic dysfunction.

- It is the **commonest cause of chronic liver disease in the West**.
- It occurs mainly in **obese** people with **hyperlipidaemia or the metabolic syndrome**, and **diabetes** is a further risk factor.

**The spectrum**

- **Simple steatosis** — fatty infiltration alone, relatively benign.
- **MASH** — steatosis **plus** inflammation (fatty infiltration with hepatitis), which **can progress to cirrhosis**.

## MetALD — the new middle category

The old framework forced a binary choice between alcohol and metabolic causes, which never reflected reality. **MetALD** describes people who meet the criteria for MASLD **and** drink more than a modest amount:

| Category | Weekly alcohol |
|---|---|
| **MASLD** | Below 140 g in women, below 210 g in men |
| **MetALD** | **140 to 350 g in women, 210 to 420 g in men** |
| **Alcohol-related liver disease** | Above those ranges |

As a rough conversion, 140 g a week is about 20 g a day, or roughly two and a half UK units. The practical value of the category is that it stops a patient with both drivers being mislabelled as having one of them, and it makes explicit that **reducing alcohol and treating the metabolic risk factors are both required**.

## The metabolic syndrome

MASLD is the hepatic manifestation of the metabolic syndrome, a cluster of findings that together raise the risk of ischaemic heart disease:

- **Fasting hyperglycaemia** above 6 mmol/L.
- **Blood pressure** above 140/90 mmHg.
- **Central obesity** — waist circumference over 94 cm in men, over 80 cm in women.
- **Dyslipidaemia** — HDL cholesterol below 1 mmol/L and triglycerides above 2 mmol/L.
- **Microalbuminuria.**

> Alcohol causes reversible steatosis, then alcoholic hepatitis with hepatocyte ballooning and Mallory-Denk bodies (10 to 20% mortality per episode), then micronodular cirrhosis. **MASLD** (formerly NAFLD) looks identical histologically but occurs without significant alcohol intake, is the commonest chronic liver disease in the West, and progresses through **MASH** (formerly NASH — steatosis plus inflammation) to cirrhosis. It is the liver manifestation of the metabolic syndrome, and unlike the old NAFLD it requires **positive** evidence of metabolic dysfunction rather than simply the absence of alcohol. Where both drivers are present, the category is **MetALD**.`,
        },
        {
          id: "autoimmune_biliary_liver_disease",
          name: "Autoimmune hepatitis, PBC & PSC",
          content: `## Autoimmune hepatitis

- Frequently occurs **alongside other autoimmune disease**, such as coeliac disease, systemic lupus erythematosus, rheumatoid arthritis, thyroiditis, Sjogren syndrome and ulcerative colitis.
- **78% are female**, typically either young or postmenopausal.
- Associated with **HLA-DR3**.
- The characteristic cell on histology is the **plasma cell**.

**Antibody types**

| Type | Antibodies |
|---|---|
| **Type 1** | **Antinuclear antibody (ANA)**, **anti-smooth muscle antibody**, anti-actin antibody, and anti-soluble liver antigen antibody |
| **Type 2** | **Anti-liver-kidney microsomal (anti-LKM) antibody** |

**Treatment** — **immunosuppression with corticosteroids** (usually with azathioprine as a steroid-sparing agent) as a bridge to **transplantation**, but the disease **recurs in up to 40%** after transplant.

## Comparing the two biliary causes of cirrhosis

| Feature | Primary biliary cholangitis (PBC) | Primary sclerosing cholangitis (PSC) |
|---|---|---|
| Pathology | Autoimmune inflammatory destruction of **small and medium intrahepatic** bile ducts, causing cholestasis and **slow** development of cirrhosis over many years | Inflammation and **obliterative fibrosis of both extrahepatic and intrahepatic** ducts, causing **multifocal strictures with dilatation of the preserved segments** |
| Sex | **Female to male 10:1** | **Male predominant** |
| Peak incidence | 40 to 50 years | 40 to 50 years |
| Key association | Other autoimmune conditions | **Inflammatory bowel disease, especially ulcerative colitis** |
| Antibody | **Anti-mitochondrial antibody in over 90%** | Several autoantibodies, particularly **p-ANCA** |
| Biochemistry | Raised alkaline phosphatase, raised cholesterol, raised **IgM**, and hyperbilirubinaemia late | Raised alkaline phosphatase |
| Ultrasound | **No** bile duct dilatation | **Bile duct dilatation** |
| ERCP | Not characteristic | **Beading** of the bile ducts, like a string of necklace beads |
| Histology | **Bile duct loss with granulomas** | **Onion-skinning**: concentric periductal fibrosis |
| Malignant risk | Cirrhosis and its complications | **Increased incidence of cholangiocarcinoma** |

## Clinical features and treatment of PBC

- Presents with **fatigue, pruritus and abdominal discomfort**.
- Secondary features include **skin pigmentation**, **xanthelasma** (particularly of the eyelid), **steatorrhoea**, **vitamin D malabsorption** and an inflammatory arthropathy.
- **Ursodeoxycholic acid** in the early phase induces remission in about **25%**.

Note the change of name: PBC was formerly called *primary biliary cirrhosis*, but was renamed **primary biliary cholangitis** because most patients do not have cirrhosis at diagnosis.

> Autoimmune hepatitis is a young or postmenopausal woman with HLA-DR3, plasma cells on biopsy, ANA and anti-smooth muscle (type 1) or anti-LKM (type 2) antibodies, treated with steroids. PBC is an itchy middle-aged woman with anti-mitochondrial antibody, raised IgM, granulomatous bile duct loss and no duct dilatation, treated with ursodeoxycholic acid. PSC is a man with ulcerative colitis, p-ANCA, beading on ERCP, onion-skin fibrosis and a risk of cholangiocarcinoma.`,
        },
        {
          id: "genetic_liver_disease",
          name: "Genetic liver disease: haemochromatosis, Wilson's & A1AT deficiency",
          content: `## Genetic causes of cirrhosis

| Feature | Hereditary haemochromatosis | Wilson's disease | Alpha-1 antitrypsin deficiency |
|---|---|---|---|
| Inheritance | **Autosomal recessive** | **Autosomal recessive** | **Autosomal recessive** (the abnormal PiZ and PiS alleles are co-dominantly expressed) |
| Incidence | Homozygotes about **1 in 400**; heterozygote carriers about **1 in 10** of Caucasians | About **1 in 30,000** (very rare) | Around 1 in 2000 to 1 in 5000 of northern Europeans |
| Typical age | **40 to 50 years** | **11 to 14 years** | Childhood (neonatal jaundice) or adult life |
| Gene and mechanism | Mutated **HFE** gene at **6p21.3**, causing increased **iron** absorption from the gut, which deposits in liver, heart, pancreas, adrenals, pituitary, joints and skin, causing fibrosis | Mutated **ATP7B** on **chromosome 13**, encoding a copper-transporting ATPase on the canalicular membrane, so **biliary copper excretion falls** and copper deposits in liver, central nervous system and iris | Failure to secrete alpha-1 antitrypsin into the blood, so it **accumulates within hepatocytes** as intracytoplasmic inclusions causing hepatitis, while its **absence in the lungs causes emphysema** |
| Histology stain | Iron deposits stain with **Prussian blue** | Copper stains with **rhodanine**; Mallory bodies and fibrosis are seen | **Intracytoplasmic globules** staining with **periodic acid-Schiff (PAS)** |

## Clinical features

**Hereditary haemochromatosis**

- **Skin bronzing** from melanin deposition.
- **Diabetes mellitus** — hence the old term "bronze diabetes".
- **Hepatomegaly** with **micronodular cirrhosis**.
- **Cardiomyopathy.**
- **Hypogonadism.**
- **Pseudogout.**

**Wilson's disease**

- **Liver disease** — acute hepatitis, fulminant liver failure, or cirrhosis.
- **Neurological disease** — **parkinsonism**, psychosis and dementia, reflecting **basal ganglia** involvement.
- **Kayser-Fleischer rings** — copper deposits in **Descemet's membrane** of the cornea.

**Alpha-1 antitrypsin deficiency**

- **Children** — neonatal jaundice.
- **Adults** — **emphysema** (characteristically basal and panacinar) and chronic liver disease.

## Investigations

| Disease | Findings |
|---|---|
| Haemochromatosis | Raised **iron** and **ferritin**, **transferrin saturation above 45%**, and a **low total iron-binding capacity** |
| Wilson's disease | **Low serum caeruloplasmin**, low total serum copper, and **raised urinary copper** |
| Alpha-1 antitrypsin deficiency | **Low serum alpha-1 antitrypsin**, with an **absent alpha-globulin band** on electrophoresis |

## Treatment

- **Haemochromatosis** — **venesection** is first line, with **desferrioxamine** (iron chelation) reserved for those who cannot tolerate it. Around **30% of those with cirrhosis develop hepatocellular carcinoma**, so surveillance is essential.
- **Wilson's disease** — **lifelong penicillamine** (a copper chelator). The prognosis is good with early treatment, but **any neurological damage is permanent**, and liver transplantation may be required.
- **Alpha-1 antitrypsin deficiency** — supportive; avoid smoking absolutely, and consider transplantation for end-stage lung or liver disease.

> Haemochromatosis is autosomal recessive HFE disease of iron overload presenting at 40 to 50 with bronze skin, diabetes and cirrhosis, treated by venesection, with a 30% risk of hepatocellular carcinoma once cirrhotic. Wilson's is autosomal recessive ATP7B copper overload presenting in the teens with liver plus basal ganglia disease and Kayser-Fleischer rings, treated with penicillamine. Alpha-1 antitrypsin deficiency gives PAS-positive hepatocyte globules and emphysema.`,
        },
        {
          id: "liver_tumours",
          name: "Liver tumours",
          content: `## Benign liver tumours

| Tumour | Clinical features |
|---|---|
| **Hepatic adenoma** | Associated with the **combined oral contraceptive pill**. Presents with abdominal pain or **intraperitoneal bleeding**. Resect if symptomatic, larger than **5 cm**, or if it fails to shrink when the pill is stopped |
| **Haemangioma** | The **commonest benign liver lesion**. Requires **no treatment** |

## Malignant liver tumours

| Tumour | Clinical features |
|---|---|
| **Hepatocellular carcinoma (HCC)** | Occurs most commonly in **chronic liver disease**, closely linked to **viral hepatitis**, **alcoholic cirrhosis**, **haemochromatosis**, **MASLD** (formerly NAFLD), **aflatoxin B1** and **androgenic steroids**. Cirrhotic patients are **screened with 6-monthly ultrasound**. Investigations are **alpha-fetoprotein** and ultrasound |
| **Cholangiocarcinoma** | Adenocarcinoma arising from the **bile ducts**, either intrahepatic or extrahepatic. About **10% of liver tumours**, with a **poor prognosis**. Causes include **primary sclerosing cholangitis**, parasitic liver disease, chronic liver disease, congenital biliary abnormalities and **Lynch syndrome type II** |
| **Haemangiosarcoma (angiosarcoma)** | Cancer of the **vascular endothelium**, highly invasive. Classically linked to vinyl chloride, arsenic and thorotrast exposure |
| **Hepatoblastoma** | Occurs in **children and infants**, presenting with an **abdominal mass**. Arises from immature liver precursor cells |

## Secondary (metastatic) tumours

- **Metastases are the commonest malignant liver lesion overall** — far commoner than primary liver cancer.
- Usually spread from the **gastrointestinal tract, breast or bronchus**.
- Characteristically **multiple**, in contrast to the usually solitary primary tumour.

> The commonest benign liver lesion is a haemangioma, and hepatic adenoma is linked to the oral contraceptive pill. Hepatocellular carcinoma arises in cirrhosis, is screened for with 6-monthly ultrasound plus alpha-fetoprotein, and is linked to viral hepatitis, haemochromatosis and aflatoxin. But the commonest malignant lesion in the liver overall is metastatic disease, usually multiple and from gut, breast or bronchus.`,
        },
        {
          id: "nutrition_vitamins",
          name: "Nutrition: vitamins, trace elements & deficiency states",
          content: `## Vitamins

Vitamins divide into the **fat-soluble** group (A, D, E and K), which are stored in the liver and fat and therefore go into deficiency slowly but can accumulate to toxic levels, and the **water-soluble** group (the B vitamins, C and folate), which are not stored and so become deficient far more quickly. As a rule, **fat-soluble deficiencies are rare and water-soluble deficiencies are common**.

| Vitamin | Deficiency | Excess | Test |
|---|---|---|---|
| **A — retinol** | Night blindness and impaired colour vision, xerophthalmia, skin exfoliation | Hepatitis; teratogenic in pregnancy | Serum |
| **D — cholecalciferol** | **Osteomalacia** in adults, **rickets** in children | **Hypercalcaemia** | Serum |
| **E — tocopherol** | Haemolytic anaemia, neuropathy, ataxia; associated with ischaemic heart disease | — | Serum |
| **K — phytomenadione** | **Defective clotting** — a prolonged prothrombin time, haemorrhagic disease of the newborn | — | Prothrombin time |
| **B1 — thiamine** | **Beri-beri**: *wet* is cardiovascular (high-output failure), *dry* is neurological. Also peripheral neuropathy and **Wernicke's encephalopathy** | — | Red cell transketolase |
| **B2 — riboflavin** | **Angular stomatitis and glossitis** | — | Red cell glutathione reductase |
| **B3 — niacin** | **Pellagra — the three Ds: dementia, dermatitis and diarrhoea** | — | — |
| **B6 — pyridoxine** | Dermatitis and **sideroblastic anaemia** | Peripheral neuropathy | Red cell AST activation |
| **B12 — cobalamin** | **Pernicious anaemia** and **subacute combined degeneration of the cord** | — | Serum B12 |
| **C — ascorbate** | **Scurvy** — bleeding gums, perifollicular haemorrhage, poor wound healing | Renal stones | Plasma |
| **Folate** | **Megaloblastic anaemia**; **neural tube defects** in pregnancy | — | Red cell folate |

Note that **vitamin B6 is one of the few vitamins with a well-recognised toxicity** — a sensory peripheral neuropathy from excessive supplementation — and that **vitamin C excess predisposes to renal stones**, because ascorbate is metabolised to oxalate.

## Trace elements

| Element | Deficiency | Excess | Test |
|---|---|---|---|
| **Iron** | **Hypochromic microcytic anaemia** | **Haemochromatosis** | Full blood count, iron and binding studies, ferritin |
| **Iodine** | **Goitre and hypothyroidism** | Either hypo- or hyperthyroidism — the **Wolff-Chaikoff** and **Jod-Basedow** effects | Thyroid function tests |
| **Zinc** | Dermatitis, poor wound healing, impaired taste | — | — |
| **Copper** | Anaemia | **Wilson's disease** | Copper, caeruloplasmin |
| **Fluoride** | Dental caries | Fluorosis — mottled enamel | — |

The two iodine effects are easily confused and worth separating. The **Wolff-Chaikoff effect** is the *protective* transient shutdown of thyroid hormone synthesis after a large iodine load, which can cause hypothyroidism. The **Jod-Basedow effect** is the opposite — iodine-induced *hyper*thyroidism, typically when someone with a nodular goitre or long-standing iodine deficiency is suddenly given a large iodine load, such as radiographic contrast or amiodarone.

## Deficiency patterns in specific diseases

Rather than learning individual vitamins in isolation, it is more useful to know which deficiencies to expect in which disease — this is how the question is usually asked.

| Condition | Expected deficiencies |
|---|---|
| **Crohn's disease** | **Vitamin B12** and the fat-soluble vitamins **A, D, E and K** where the terminal ileum is involved. **Folate** deficiency if on methotrexate. Calcium, phosphate, magnesium and zinc become deranged with high-output or chronic diarrhoea |
| **Coeliac disease** | **Iron** (the classic presentation), vitamins **A, D, E and K**, **thiamine** and **vitamin B6** |
| **Chronic liver disease** | Vitamins **A, D, E and K**, **vitamin B12**, selenium, magnesium, zinc and folate |
| **Chronic kidney disease** | **Protein-energy wasting syndrome** |
| **Pancreatic insufficiency** | The fat-soluble vitamins **A, D, E and K**, because fat cannot be digested without lipase |

The unifying principle is that **anything interfering with fat digestion or absorption causes fat-soluble vitamin deficiency** — pancreatic insufficiency, cholestasis, coeliac disease, terminal ileal Crohn's and orlistat all do it by different mechanisms. **Terminal ileal disease is specific for vitamin B12**, because that is the only site where the B12-intrinsic factor complex is absorbed.

> High-yield: pellagra is the three Ds of niacin deficiency; beri-beri is thiamine, wet for the heart and dry for the nerves; scurvy is vitamin C. Terminal ileal disease means B12. Anything impairing fat absorption means A, D, E and K. Jod-Basedow is iodine-induced hyperthyroidism, Wolff-Chaikoff the protective shutdown.`,
        },
      ],
    },
    {
      id: "renal", name: "Renal & Urology", icon: "🫘",
      topics: [
        {
          id: "glomerulonephritis",
          name: "Glomerulonephritis",
          content: `## Glomerulonephritis

Glomerulonephritis is a group of immune-mediated diseases of the glomerulus. The crucial first step is to decide whether the picture is **nephrotic** or **nephritic**, because this narrows the cause and guides investigation.

## Nephrotic versus nephritic

| Feature | Nephrotic syndrome | Nephritic syndrome |
|---|---|---|
| Proteinuria | Heavy (over 3 g/day) | Mild to moderate |
| Haematuria | Absent or minimal | Present (red-cell casts, "coke-coloured" urine) |
| Blood pressure | Often normal | Hypertension |
| Hallmark | Hypoalbuminaemia and oedema, hyperlipidaemia, thrombosis risk | Oliguria and a rising urea and creatinine |

The **nephrotic triad** is heavy proteinuria, hypoalbuminaemia and oedema. The **nephritic features** can be remembered as PHAROH: Proteinuria, Haematuria, Azotaemia (raised urea and creatinine), Red-cell casts, Oliguria and Hypertension.

## Causes of nephrotic syndrome

| Cause | Key features |
|---|---|
| Minimal change disease | The commonest cause in children; normal light microscopy with podocyte foot-process effacement on electron microscopy; about 90% are steroid-responsive; linked to allergy and Hodgkin lymphoma |
| Membranous nephropathy | A common primary cause in adults; diffuse basement-membrane thickening with subepithelial "spikes"; anti-phospholipase A2 receptor antibodies in about 75%; secondary to malignancy, hepatitis B, lupus or drugs |
| Focal segmental glomerulosclerosis | Commoner in people of African descent; focal scarring; about half respond to steroids; primary or secondary to obesity, HIV or heroin |
| Secondary causes | Diabetes (Kimmelstiel-Wilson nodules), amyloidosis (Congo-red apple-green birefringence), lupus |

## Causes of nephritic syndrome

- **Post-streptococcal (post-infectious) glomerulonephritis** — **1 to 3 weeks** after a streptococcal throat infection or impetigo; a **low C3** with a raised anti-streptolysin O titre; subepithelial "humps" with granular IgG and C3; treatment is supportive, with a good prognosis especially in children.
- **IgA nephropathy (Berger's disease)** — the commonest glomerulonephritis worldwide; **visible haematuria 1 to 2 days after an upper respiratory infection** (sooner than post-streptococcal disease); mesangial IgA deposits.
- **Rapidly progressive (crescentic) glomerulonephritis** — the most aggressive form, causing renal failure within weeks, with **crescents** on biopsy. Three types: anti-GBM disease (Goodpasture's, linear IgG, with lung haemorrhage), immune-complex (lupus, IgA, post-infectious), and pauci-immune or ANCA-associated (granulomatosis with polyangiitis with c-ANCA; microscopic polyangiitis with p-ANCA).
- **Alport syndrome** — an X-linked type IV collagen defect causing nephritis with sensorineural deafness and eye signs.

## Investigation and management

Investigate with urinalysis (protein, blood, red-cell casts), urine albumin-to-creatinine or protein-to-creatinine ratio, U&E, albumin, **complement (C3 and C4)**, and a glomerulonephritis autoantibody screen (ANA and anti-dsDNA, ANCA, anti-GBM, anti-phospholipase A2 receptor) with an anti-streptolysin O titre and immunoglobulins; a **renal biopsy is often the definitive test**. General management controls blood pressure with an **ACE inhibitor or angiotensin receptor blocker** (which also reduce proteinuria) and addresses oedema, lipids and thrombosis risk; specific disease may need **immunosuppression** (corticosteroids and others), and crescentic disease is an emergency needing urgent immunosuppression with or without plasma exchange.

> High-yield: nephrotic = heavy proteinuria + hypoalbuminaemia + oedema; nephritic = haematuria + hypertension + red-cell casts. Minimal change disease in a child is steroid-responsive; membranous nephropathy is anti-PLA2R-positive; post-streptococcal disease follows a sore throat by 1–3 weeks with a low C3, whereas IgA nephropathy follows a respiratory infection by 1–2 days; and crescentic (rapidly progressive) glomerulonephritis — anti-GBM, immune-complex or ANCA — is a nephrological emergency.`,
        },
        {
          id: "diabetic_nephropathy",
          name: "Diabetic nephropathy",
          content: `## Diabetic nephropathy

Diabetic nephropathy is the kidney disease of long-standing diabetes and is the **commonest cause of chronic kidney disease and end-stage renal failure** in the developed world. It is a microvascular complication, alongside retinopathy and neuropathy.

## Pathophysiology

Chronic hyperglycaemia first causes **glomerular hyperfiltration**, then thickening of the glomerular basement membrane and expansion of the mesangium. The classic histological hallmark is **nodular glomerulosclerosis — the Kimmelstiel-Wilson nodules** — on a background of diffuse basement-membrane thickening. The result is progressive proteinuria and a falling filtration rate.

## Natural history and screening

The disease moves through recognisable stages, and catching it early matters:

- **Glomerular hyperfiltration** (a raised filtration rate, no protein yet).
- **Microalbuminuria** — the **first clinical sign**, detected by a urine albumin-to-creatinine ratio.
- **Overt (dipstick-positive) proteinuria**, which can reach the nephrotic range.
- **Progressive decline** in the glomerular filtration rate towards end-stage renal failure.

Everyone with diabetes therefore has an **annual urine albumin-to-creatinine ratio and eGFR** check; the diagnosis is clinical and biopsy is rarely needed.

## Management

Management is about slowing progression (renoprotection):

- **Tight glycaemic control** and cardiovascular risk reduction.
- **An ACE inhibitor or angiotensin receptor blocker** to control blood pressure and reduce proteinuria (renoprotective even when blood pressure is normal).
- **An SGLT2 inhibitor**, now central for its renoprotective benefit.
- A statin and lifestyle measures, with dialysis or transplantation for end-stage disease.

> High-yield: Kimmelstiel-Wilson nodules are the classic histology; microalbuminuria is the earliest marker; and ACE inhibitors or ARBs plus SGLT2 inhibitors are the renoprotective mainstays.`,
        },
        {
          id: "sodium_disorders",
          name: "Sodium: hyponatraemia & hypernatraemia",
          content: `## Sodium: hyponatraemia and hypernatraemia

Sodium is the main extracellular cation, and extracellular volume follows it. Sodium disturbances are usually disturbances of **water** balance rather than of sodium itself. The reference range is 135–145 mmol/L.

## Hyponatraemia

Mild hyponatraemia is common in hospital; treat the cause, not the number, unless it is severe (below about 125 mmol/L) or symptomatic. Symptoms progress with severity — nausea, then confusion, then seizures and non-cardiogenic pulmonary oedema, then coma. Chronic, compensated hyponatraemia is dangerous to correct too quickly.

**Step 1 — measure serum osmolality** to confirm true hyponatraemia:

| Serum osmolality | Interpretation |
|---|---|
| High | Excess osmotic solute (hyperglycaemia, mannitol) pulling water out of cells |
| Normal | Pseudohyponatraemia (hyperlipidaemia, paraproteinaemia) or a spurious drip-arm sample |
| Low | True hyponatraemia — assess volume status next |

In transurethral resection of the prostate, absorbed glycine irrigation fluid causes a dilutional hyponatraemia ("TURP syndrome").

**Step 2 — assess volume status and urinary sodium** in true (low-osmolality) hyponatraemia:

| Volume status | Urine Na over 20 (renal loss) | Urine Na under 20 (non-renal) |
|---|---|---|
| Hypovolaemic | Diuretics, Addison's, salt-losing nephropathy | Vomiting, diarrhoea, sweating, third-space loss |
| Euvolaemic | SIADH, hypothyroidism, glucocorticoid deficiency | — |
| Hypervolaemic | Acute or chronic kidney disease | Heart failure, cirrhosis, excess intravenous fluid |

Stop diuretics before measuring urinary sodium, as they distort it. Management follows the volume category: replace fluid slowly in hypovolaemia; fluid-restrict (and treat the cause) in euvolaemia and hypervolaemia. The euvolaemic cause — the syndrome of inappropriate antidiuretic hormone (SIADH) — is covered in the **SIADH & diabetes insipidus** topic.

> Correct hyponatraemia slowly — by no more than about 8–10 mmol/L in 24 hours. Over-rapid correction causes **osmotic demyelination (central pontine myelinolysis)**, presenting days later with a pseudobulbar palsy or "locked-in" syndrome; malnourished alcoholics are most at risk. Hypertonic (3%) saline is reserved for severe symptoms such as seizures, under specialist or critical-care guidance.

## Hypernatraemia

Hypernatraemia (sodium above about 148 mmol/L) is less common but usually significant. Thirst normally corrects it, so it appears when a patient cannot access or respond to water — the frail, the very unwell, or those with a swallowing or consciousness problem. Symptoms are thirst, then confusion, seizures and coma.

| Volume status | Causes |
|---|---|
| Hypovolaemic (water lost in excess of sodium; commonest) | Gastrointestinal or skin loss, osmotic diuresis, diabetes insipidus, renal impairment |
| Euvolaemic | Insensible loss (fever, tachypnoea), diabetes insipidus |
| Hypervolaemic | Mineralocorticoid excess (Conn's), hypertonic saline |

Replace water gradually — encouraging oral fluids is safest — because **too-rapid correction causes cerebral oedema**. Diabetes insipidus is a key cause, covered in the next topic.`,
        },
        {
          id: "potassium_disorders",
          name: "Potassium: hypokalaemia & hyperkalaemia",
          content: `## Potassium: hypokalaemia and hyperkalaemia

Potassium is the main intracellular cation, so plasma levels reflect both total body potassium and shifts across the cell membrane. Hydrogen and potassium move in opposite directions across the membrane, so **acidosis raises** plasma potassium and **alkalosis lowers** it. The reference range is about 3.5–5.5 mmol/L.

## Hypokalaemia

Causes are loss or shift into cells:

- **Gastrointestinal loss**: vomiting, diarrhoea.
- **Renal loss**: thiazide and loop diuretics, hyperaldosteronism (suspect **Conn's syndrome** with hypertension and a low potassium), Cushing's, osmotic diuresis.
- **Shift into cells**: insulin, beta-agonists, metabolic alkalosis, refeeding syndrome.
- **Other**: renal tubular acidosis types 1 and 2, and hypomagnesaemia (which must be corrected for the potassium to respond).

It causes muscle weakness, arrhythmias and polyuria. Replace with oral potassium if 3.0–3.5 mmol/L; give intravenous potassium chloride if below 3.0 or symptomatic, at no more than **10 mmol/hour** through a peripheral line (faster needs cardiac monitoring and central access).

## Hyperkalaemia

Less common but more dangerous. First **exclude a spurious result** from a haemolysed or delayed sample, and get an electrocardiogram (ECG). Causes:

- **Reduced excretion**: acute kidney injury, chronic kidney disease, drugs (angiotensin-converting enzyme inhibitors, angiotensin-receptor blockers, potassium-sparing diuretics, non-steroidal anti-inflammatory drugs), Addison's disease, type 4 renal tubular acidosis.
- **Shift out of cells**: acidosis, insulin deficiency (diabetic ketoacidosis), tissue breakdown (rhabdomyolysis, tumour lysis).
- **Excess intake**: almost always iatrogenic, or stored blood.

ECG changes evolve as **tall tented T waves → loss of P waves → broad QRS → a sine wave** and cardiac arrest. Treat if potassium is above 6.5 mmol/L, or above 5.5 with ECG changes:

- **Calcium gluconate** (10 mL of 10%) stabilises the myocardium — it does not lower potassium (use cautiously in patients on digoxin).
- **Insulin with dextrose** (for example 10 units of soluble insulin in 25 g glucose) and **nebulised salbutamol** shift potassium into cells.
- **Potassium binders** remove it from the body — the newer agents sodium zirconium cyclosilicate and patiromer have largely replaced calcium or sodium polystyrene sulfonate.
- Always treat the cause; dialysis for refractory cases.

> A high-normal sodium with a low-normal potassium suggests **Conn's syndrome**; the reverse — low sodium with high potassium — suggests **Addison's disease**.`,
        },
        {
          id: "acid_base",
          name: "Acid–base & arterial blood gases",
          content: `## Acid–base and arterial blood gases

## A systematic approach

Read an arterial blood gas in order:

- **pH** (7.35–7.45): acidaemia or alkalaemia?
- **CO2** (4.7–6.0 kPa): does it explain the pH? A high CO2 is acidifying.
- **Bicarbonate** (22–30 mmol/L): does it explain the pH? A low bicarbonate is acidifying.
- **Compensation**: is the other system shifting to pull the pH back toward normal (partial or complete)?

The primary problem is whichever value — CO2 or bicarbonate — matches the direction of the pH.

| Disorder | pH | CO2 | Bicarbonate | Compensation |
|---|---|---|---|---|
| Metabolic acidosis | Low | Low | Low | Hyperventilation (fast) |
| Metabolic alkalosis | High | High | High | Hypoventilation (fast) |
| Respiratory acidosis | Low | High | High | Renal bicarbonate retention (slow) |
| Respiratory alkalosis | High | Low | Low | Renal bicarbonate loss (slow) |

## Metabolic acidosis and the anion gap

The **anion gap** — (Na) minus (Cl plus bicarbonate), normally about 4–12 mmol/L, largely reflecting albumin — separates the two kinds of metabolic acidosis:

- **Raised anion gap** (added acid) — remember **KUL-T**: **K**etoacidosis (diabetic, alcoholic, starvation), **U**raemia (renal failure), **L**actic acidosis (shock, sepsis, ischaemia, metformin) and **T**oxins (methanol, ethylene glycol, salicylates).
- **Normal anion gap** (bicarbonate loss): diarrhoea, renal tubular acidosis, acetazolamide, pancreatic or high-output stoma losses, Addison's.

## Causes by pattern

- **Respiratory acidosis** (hypoventilation): chronic obstructive pulmonary disease and other lung disease, opioids and sedatives, neuromuscular weakness. A rising or high-normal CO2 in a tiring patient is an emergency.
- **Respiratory alkalosis** (hyperventilation): anxiety, pain, pulmonary embolism, asthma, high altitude, pregnancy, early salicylate poisoning.
- **Metabolic alkalosis**: vomiting (loss of acid), diuretics, hypokalaemia, Conn's syndrome.

## The osmolar gap

The osmolar gap is the difference between the measured and the calculated osmolality (calculated as 2 times (Na plus K), plus urea plus glucose). A value above about 10 mmol/kg points to an unmeasured solute such as **methanol or ethylene glycol** — useful when investigating a raised-anion-gap acidosis after suspected toxic-alcohol ingestion.`,
        },
        {
          id: "renal_stones",
          name: "Renal & ureteric stones",
          content: `## Renal and ureteric stones

Renal colic is severe, colicky loin-to-groin pain with nausea, vomiting and restlessness — patients characteristically cannot lie still, which distinguishes it from peritonitis. There may be haematuria, usually microscopic.

## Risk factors

- **Dehydration**, which is the single most important and most modifiable factor
- **Abnormal urine pH** — a high meat intake acidifies the urine and favours uric acid stones, while **renal tubular acidosis** alkalinises it and favours calcium phosphate stones
- **Increased urinary excretion of stone constituents**, notably **hypercalciuria** and **hyperoxaluria**
- **Urinary infection**, which must be treated
- **Anatomical abnormalities** causing stasis, such as a horseshoe kidney or pelviureteric junction obstruction

Note that most patients forming **calcium stones are normocalcaemic** — it is the amount of calcium in the *urine*, not the blood, that matters. Hyperoxaluria arises from increased intake or increased absorption, and hypercalciuria from increased intake or a renal leak.

## Stone types

| Constituent | Frequency | X-ray appearance |
|---|---|---|
| Calcium — mixed | About 45% | Radio-opaque |
| Calcium oxalate | About 35% | Radio-opaque |
| Calcium phosphate | About 1% | Radio-opaque |
| **Triple phosphate ("struvite")** — magnesium ammonium phosphate | About 10% | Radio-opaque, forming **staghorn** calculi |
| **Uric acid** | About 5% | **Radiolucent** |
| Cystine | 1 to 2% | Faintly radio-opaque |
| Others, such as xanthine | Rare | Xanthine lucent, most others opaque |

Two of these carry a specific message. **Struvite stones form in the presence of urease-producing organisms** such as *Proteus*, which split urea and alkalinise the urine; they grow to fill the collecting system as a staghorn calculus and cannot be cured without eradicating the infection. **Uric acid stones are radiolucent**, so they are invisible on a plain film — which is one reason plain radiography is not the diagnostic test.

## Investigation

**Offer urgent imaging within 24 hours of presentation.** The first-line test is a **low-dose non-contrast CT of the kidneys, ureters and bladder** in adults. **Ultrasound is used instead in pregnancy**, and is the first-line test in **children and young people**, with low-dose CT considered only if uncertainty remains.

Alongside this, check renal function, calcium and urate, dipstick and culture the urine, and exclude the emergency that must not be missed — **an obstructed, infected kidney**, which presents with fever and systemic upset and requires urgent decompression by nephrostomy or stenting, not elective stone treatment.

## Analgesia

- **A non-steroidal anti-inflammatory drug by any route is first-line** — more effective than opioids in renal colic
- **Intravenous paracetamol** if NSAIDs are contraindicated or insufficient
- **Opioids** only if both of the above are contraindicated or inadequate
- **Do not offer antispasmodics**

## Treatment

**Medical expulsive therapy**: consider an **alpha blocker** for **distal ureteric stones smaller than 10 mm**, which relaxes ureteric smooth muscle and improves spontaneous passage. It is also worth considering as an adjunct when shockwave lithotripsy is used for a ureteric stone under 10 mm.

The surgical options are **shockwave lithotripsy (SWL)**, **ureteroscopy (URS)** and **percutaneous nephrolithotomy (PCNL)**, and the choice depends on both the site and the size of the stone. For an asymptomatic **renal** stone under 5 mm, watchful waiting is appropriate.

| Stone site and size | Treatment in adults |
|---|---|
| **Renal, under 10 mm** | Offer **SWL**; consider URS if SWL is contraindicated, has failed, or is not anatomically possible; PCNL if both fail |
| **Renal, 10 to 20 mm** | Consider **URS or SWL**; PCNL if either fails |
| **Renal, over 20 mm (including staghorn)** | Offer **PCNL**; consider URS if PCNL is not an option |
| **Ureteric, under 10 mm** | Offer **SWL**; consider URS if clearance is not achievable within 4 weeks, SWL is contraindicated, the stone is not targetable, or SWL has failed |
| **Ureteric, 10 to 20 mm** | Offer **URS**; consider SWL if local facilities allow clearance within 4 weeks; PCNL for impacted proximal stones where URS has failed |

Treat **within 48 hours** of diagnosis or readmission where the pain is ongoing and not tolerated, or the stone is unlikely to pass. Pre-treatment stenting is not offered before shockwave lithotripsy in adults, and routine stenting is not offered after ureteroscopy for stones under 20 mm.

## Preventing recurrence

Recurrence is common, so prevention matters. Advise adults to:

- **Drink 2.5 to 3 litres of water a day** (1 to 2 litres for children, depending on age)
- **Add fresh lemon juice** to drinking water, which raises urinary citrate
- **Avoid carbonated drinks**
- Keep **salt intake below 6 g a day**
- **Do not restrict calcium.** This is counter-intuitive but important: maintain a normal intake of 700 to 1200 mg a day, because restricting dietary calcium leaves more oxalate free to be absorbed and actually *increases* stone formation

Drug prevention is targeted rather than universal:

- **Potassium citrate** for adults with recurrent stones that are more than 50% **calcium oxalate**
- **Thiazides** for adults with recurrent predominantly calcium oxalate stones **and hypercalciuria**, after sodium intake has been restricted to 6 g a day. Thiazides work here because they are **hypocalciuric** — they increase distal tubular calcium reabsorption, so less calcium reaches the urine

For anyone with recurrent stones, investigate properly: **stone analysis**; serum creatinine, bicarbonate, calcium, phosphate, urate and PTH if hypercalcaemic; a spot urine for pH, culture, amino acids and albumin; and a **24-hour urine collection** for volume (aiming above 2.5 litres), calcium, oxalate, urate and citrate.

> High-yield: urgent low-dose non-contrast CT within 24 hours, ultrasound in pregnancy. NSAIDs first-line for pain, not opioids. Uric acid stones are the radiolucent ones; struvite staghorn stones mean urease-producing infection. For prevention, drink more, salt less — and do **not** cut calcium intake.`,
        },
      ],
    },
    {
      id: "psychiatry", name: "Psychiatry & Mental Health", icon: "🧩",
      topics: [
        {
          id: "alcohol_misuse_dependence",
          name: "Alcohol misuse & dependence",
          content: `## Alcohol misuse and dependence

Alcohol use exists on a spectrum from low-risk drinking, through hazardous and harmful use, to dependence. The United Kingdom low-risk guideline is no more than 14 units per week for both men and women, spread over three or more days. One unit is 10 millilitres (8 grams) of pure alcohol.

## The ICD-10 framework

The International Classification of Diseases, 10th revision (ICD-10), grades alcohol use disorders as follows.

- **Hazardous use** is a pattern of drinking that increases the risk of harm but has not yet caused it (a level of risk rather than a formal ICD-10 diagnosis).
- **Harmful use (F10.1)** is drinking that is already causing actual damage to physical or mental health.
- **Dependence syndrome (F10.2)** is the central diagnosis (see below).
- **Withdrawal state (F10.3)**, and **withdrawal with delirium, i.e. delirium tremens (F10.4)**, describe the consequences of stopping.

## ICD-10 dependence syndrome

A definite diagnosis of dependence requires **three or more** of the following to have been present together at some time during the previous year:

- A strong desire or compulsion to drink (craving).
- Difficulty controlling the onset, termination or level of drinking.
- A physiological withdrawal state on stopping or cutting down, or drinking to relieve or avoid withdrawal.
- Tolerance, so that increasing amounts are needed for the same effect.
- Progressive neglect of other pleasures and interests, with more time spent obtaining alcohol, drinking, or recovering.
- Persisting with alcohol despite clear evidence of harmful consequences.

## Screening and assessment

- **AUDIT** (the Alcohol Use Disorders Identification Test) is the recommended screen; a score above 8 suggests hazardous drinking and 15 or more warrants a comprehensive assessment.
- **CAGE** is a brief four-question screen (Cut down, Annoyed, Guilty, Eye-opener).
- **SADQ** (the Severity of Alcohol Dependence Questionnaire) grades dependence, and **CIWA-Ar** (the Clinical Institute Withdrawal Assessment for Alcohol) grades withdrawal and can guide symptom-triggered treatment.
- Investigations include a full blood count (a raised mean cell volume is suggestive), liver function tests with gamma-glutamyl transferase, urea and electrolytes, glucose, clotting, and vitamin B12 and folate.

## Acute withdrawal

Symptoms begin 6 to 12 hours after the last drink, are worst within the first 48 hours, and usually resolve over 3 to 7 days.

| Time after last drink | Features |
|---|---|
| 6–12 hours | Tremor, sweating, anxiety, nausea |
| 12–24 hours | Alcoholic hallucinosis (often visual) |
| 24–48 hours | Withdrawal seizures (generalised tonic-clonic) |
| 48–72 hours | Delirium tremens |

**Delirium tremens** is a medical emergency with coarse tremor, agitation, confusion, vivid hallucinations, fever and autonomic instability. First-line treatment is oral lorazepam; if symptoms persist, give intravenous lorazepam or haloperidol, alongside intravenous thiamine.

**Wernicke's encephalopathy** results from thiamine (vitamin B1) deficiency and presents with the triad of confusion, ophthalmoplegia or nystagmus, and ataxia. It is treated with urgent intravenous thiamine (Pabrinex); untreated, it can progress to the irreversible **Korsakoff syndrome** (profound anterograde amnesia with confabulation).

## Management

- **Assisted withdrawal (detoxification)**: a benzodiazepine, usually chlordiazepoxide (or diazepam), given as a fixed-dose or symptom-triggered regimen and reduced gradually over 7 to 10 days. Lorazepam is preferred in significant liver impairment because it has limited hepatic metabolism.
- Give **Pabrinex** (intravenous B vitamins including thiamine) to anyone at risk of Wernicke's encephalopathy.
- **Consider inpatient withdrawal** if the patient drinks 30 or more units per day, scores 30 or more on the SADQ, has a history of withdrawal seizures or delirium tremens, needs concurrent benzodiazepine withdrawal, or is vulnerable (for example homeless or older).
- **Relapse prevention**: acamprosate (reduces craving) or naltrexone (an opioid antagonist that reduces the reward of drinking) are first-line; disulfiram, which produces an unpleasant flushing reaction with alcohol, is an aversive option for motivated patients.
- **Psychosocial**: motivational interviewing, cognitive behavioural therapy (CBT), behavioural couples therapy, and support through Alcoholics Anonymous, SMART Recovery and Change Grow Live.

> Never stop a dependent drinker's alcohol abruptly without cover, and always give thiamine before any carbohydrate load, because glucose can precipitate Wernicke's encephalopathy in a thiamine-deficient patient.

## Complications

Chronic misuse harms nearly every system: liver (fatty liver, alcoholic hepatitis, cirrhosis), gastrointestinal (gastritis, pancreatitis, varices, Mallory-Weiss tears), cardiac (dilated cardiomyopathy, hypertension, arrhythmias), and neurological (peripheral neuropathy, cerebellar degeneration, Wernicke-Korsakoff), alongside an increased cancer risk and major social and psychological harms.`,
        },
        {
          id: "personality_disorders",
          name: "Personality disorders",
          content: `## Personality disorders

A personality disorder is an enduring, pervasive and inflexible pattern of inner experience and behaviour that deviates markedly from cultural expectations. It is evident by adolescence or early adulthood, is stable over time, and leads to distress or impairment in functioning. Around 1 in 10 people may meet criteria for a personality disorder, and roughly 2% for the emotionally unstable type.

## Classification (the three clusters)

The traditional ICD-10 and DSM (Diagnostic and Statistical Manual) approach groups the disorders into three clusters.

| Cluster | Theme | Examples |
|---|---|---|
| A | Odd or eccentric | Paranoid, schizoid, schizotypal |
| B | Dramatic, emotional or erratic | Antisocial (dissocial), emotionally unstable (borderline), histrionic, narcissistic |
| C | Anxious or fearful | Avoidant (anxious), dependent, anankastic (obsessive-compulsive) |

> Note: the newer ICD-11 has moved away from these subtypes and instead classifies personality disorder by **severity** (mild, moderate or severe) together with prominent trait domains. The cluster system remains widely used in teaching and for guiding management.

## Emotionally unstable personality disorder

Emotionally unstable personality disorder (EUPD), also called borderline personality disorder, is the most frequently examined. Core features include:

- Marked impulsivity and difficulty controlling anger.
- Intense and unstable relationships, with frantic efforts to avoid abandonment.
- An unstable self-image and chronic feelings of emptiness.
- Recurrent self-harm and suicidal behaviour.
- Affective instability and transient, stress-related paranoid ideas or dissociation.

## Management

Personality disorders are treatable. The emphasis is on psychological therapy, clear and consistent boundaries, and encouraging the person to take responsibility for their actions.

- **Psychological therapy is the mainstay.** Dialectical behaviour therapy (DBT) is first-line for EUPD; it teaches validation and dialectics to help manage intense emotions. Other options include mentalisation-based therapy, cognitive analytic therapy (CAT), CBT, therapeutic communities and psychodynamic psychotherapy.
- **Medication treats no personality disorder in itself but may target symptoms or comorbidity.** Selective serotonin reuptake inhibitors (SSRIs) may reduce impulsivity and treat comorbid anxiety or depression; antipsychotics such as risperidone may briefly reduce impulsivity and aggression; mood stabilisers are sometimes tried for affective lability, though the evidence is weak.
- During a **crisis**, provide crisis-team contact numbers, and a sedating antihistamine such as promethazine may be used short-term. **Do not** use antipsychotics for the medium- or long-term management of EUPD.
- Always treat comorbid substance misuse, mood and anxiety disorders, which strongly affect prognosis.`,
        },
        {
          id: "somatoform_disorders",
          name: "Somatoform disorders",
          content: `## Somatoform disorders

Somatoform disorders involve physical symptoms that suggest a medical condition but cannot be fully explained by one, by a substance, or by another mental disorder, and that cause significant distress or impairment. Crucially, the symptoms are **not intentionally produced** — this distinguishes them from factitious disorder and malingering.

## The ICD-10 somatoform disorders (F45)

- **Somatisation disorder** (Briquet syndrome): multiple, recurrent and frequently changing physical symptoms over at least two years, across many organ systems, with repeated investigations and a refusal to accept reassurance.
- **Hypochondriacal disorder** (health anxiety): a persistent preoccupation with the fear of having a serious disease, which persists despite negative investigations and reassurance.
- **Persistent somatoform pain disorder**: persistent, severe and distressing pain not explained by a physical disorder.
- **Somatoform autonomic dysfunction**: symptoms of autonomic arousal attributed to a specific organ system (for example a cardiac neurosis).

> DSM-5 has reframed this group as **somatic symptom disorder** and **illness anxiety disorder**, shifting the emphasis away from whether symptoms are medically unexplained and onto the presence of excessive thoughts, feelings and behaviours about the symptoms.

## Distinguishing the look-alikes

| Condition | Symptoms produced intentionally? | Motivation |
|---|---|---|
| Somatoform disorder | No | None — symptoms are genuinely experienced |
| Factitious disorder (Munchausen) | Yes | To adopt the sick role (internal psychological gain) |
| Malingering | Yes | External gain (money, time off, avoiding prosecution) |

Malingering is not a psychiatric diagnosis.

## Management

The principle is to contain symptoms and avoid iatrogenic harm rather than to chase a physical cause.

- Offer continuity through a **single named clinician** (usually the general practitioner, the GP) with **regularly scheduled appointments** rather than symptom-driven ones.
- **Acknowledge that the symptoms are real**, while gently explaining that the body can generate symptoms in the absence of disease and that stress can play a part.
- **Limit investigations and specialist referrals**, which reinforce illness beliefs and increase anxiety, while ensuring reasonable assessment so that genuine disease is not missed.
- **Reassure** the patient that serious disease has been excluded, and **stop unnecessary medications**.
- **Treat comorbid anxiety and depression**; antidepressants can help even in the absence of depression (as in tension headache or irritable bowel syndrome, IBS), and CBT is effective.`,
        },
        {
          id: "dissociative_disorders",
          name: "Dissociative disorders",
          content: `## Dissociative disorders

Dissociation is a partial or complete loss of the normal integration between memories, awareness of identity, immediate sensations and control of body movements. In ICD-10 the conversion disorders are grouped here as **dissociative (conversion) disorders (F44)** — the conditions historically labelled hysteria. Onset is typically linked to a recent traumatic event, an insoluble problem or a disturbed relationship.

## The main forms

- **Dissociative amnesia**: loss of memory, usually for recent or traumatic events, too extensive to be ordinary forgetfulness and not due to an organic cause.
- **Dissociative fugue**: dissociative amnesia plus an apparently purposeful journey away from home, during which self-care is maintained.
- **Dissociative stupor**: a profound reduction in or absence of voluntary movement and normal responsiveness, with no physical cause.
- **Dissociative motor and sensory disorders (conversion)**: loss of motor function (limb weakness, paralysis, gait disturbance) or sensory function (functional blindness, deafness or anaesthesia) that does not follow anatomical or physiological rules.
- **Dissociative (non-epileptic) convulsions**: episodes resembling epileptic seizures but without an electrical discharge; tongue-biting, serious injury and incontinence are uncommon and the eyes are often held closed.
- **Depersonalisation–derealisation**: a feeling of being detached from oneself (depersonalisation) or that the surroundings are unreal (derealisation).

> DSM-5 separates the **dissociative disorders** (dissociative amnesia, depersonalisation–derealisation disorder and dissociative identity disorder) from **conversion (functional neurological symptom) disorder**, whereas ICD-10 keeps them together.

## Clinical features

Symptoms do not conform to known anatomical pathways and often vary with attention. A classically described but unreliable sign is "la belle indifférence", a relative lack of concern about an apparently disabling deficit. The symptoms are not intentionally produced, which distinguishes dissociative disorders from factitious disorder and malingering.

## Management

- **Exclude organic disease** with appropriate assessment — a proportion of patients later prove to have a neurological diagnosis — but avoid over-investigation once it is reasonably excluded.
- **Explain the diagnosis positively**, framing it as a genuine and potentially reversible disturbance of function rather than a feigned or untreatable one.
- **Psychological therapy** (CBT and psychotherapy) is the mainstay, and any comorbid depression or anxiety should be treated.
- **Physiotherapy** helps functional motor and gait disorders, and non-epileptic attacks are best managed with specialist neuropsychiatry input.
- The prognosis is good when onset is acute, there is a clear stressor and treatment is early.`,
        },
        {
          id: "psychiatric_prescribing",
          name: "Psychiatric prescribing",
          content: `## Psychiatric prescribing

This topic brings together the major drug classes used in psychiatry, their key adverse effects and the monitoring they require.

## Antidepressants

- **Selective serotonin reuptake inhibitors (SSRIs)** — sertraline, citalopram, fluoxetine — are first-line. They take 2 to 4 weeks to work, so review at 1 to 2 weeks (within 1 week if the patient is under 25 or at higher suicide risk).
- SSRI adverse effects include gastrointestinal upset, an early increase in anxiety and agitation in the first two weeks, hyponatraemia (especially in the elderly), sexual dysfunction, and gastrointestinal bleeding (co-prescribe a proton pump inhibitor if a non-steroidal anti-inflammatory drug is also used).
- Citalopram and escitalopram cause dose-dependent QT-interval prolongation (maximum citalopram 40 milligrams, or 20 milligrams if over 65 or hepatically impaired). Sertraline is preferred after a myocardial infarction and in breastfeeding; fluoxetine is the agent of choice in children; paroxetine has the most marked discontinuation symptoms, so taper it slowly.
- **Serotonin-noradrenaline reuptake inhibitors (SNRIs)** — venlafaxine, duloxetine — need blood-pressure monitoring and are more dangerous in overdose.
- **Tricyclic antidepressants (TCAs)** are effective but dangerous in overdose (arrhythmia) and cause anticholinergic effects; lofepramine is the safest in overdose.
- **Mirtazapine** (a noradrenergic and specific serotonergic antidepressant) is sedating and increases appetite, useful when insomnia or poor appetite is prominent, and has few interactions (preferred over an SSRI alongside warfarin).
- **Switching**: cross-taper most agents; fluoxetine needs a 4 to 7 day gap before a new SSRI because of its long half-life, and a monoamine oxidase inhibitor (MAOI) needs a two-week washout.
- **Serotonin syndrome** follows excess serotonergic activity (for example an SSRI with an MAOI or a triptan): agitation, autonomic instability, hyperthermia and neuromuscular features such as clonus and hyperreflexia.
- In **pregnancy**, sertraline, citalopram and fluoxetine are generally considered safer; paroxetine carries a higher risk of congenital cardiac defects in the first trimester, and any SSRI in the third trimester can cause persistent pulmonary hypertension of the newborn.

## Mood stabilisers

- **Lithium** has a narrow therapeutic range of 0.6 to 1.0 mmol/L; it is toxic above 1.5 and severely toxic above 2.0 mmol/L.
- Before starting lithium, check renal function, thyroid function, full blood count and a pregnancy test. Measure the level 12 hours post-dose, weekly until stable then every 3 months, with urea, electrolytes and thyroid function every 6 months (lithium is nephrotoxic and causes hypothyroidism).
- Lithium toxicity causes gastrointestinal upset, a coarse tremor, ataxia, slurred speech, drowsiness and seizures, and is precipitated by dehydration, vomiting and diarrhoea, diuretics, non-steroidal anti-inflammatory drugs and angiotensin-converting enzyme inhibitors. Do not stop it abruptly (relapse risk). In pregnancy it is linked to Ebstein's anomaly, a cardiac defect.
- **Sodium valproate** is highly teratogenic (neural tube defects) and must not be used in women of childbearing potential outside a pregnancy prevention programme. **Carbamazepine** is a hepatic enzyme inducer. **Lamotrigine** is useful for bipolar depression but is titrated slowly because of the risk of Stevens-Johnson syndrome.

## Antipsychotics

Antipsychotics block dopamine D2 receptors; the newer atypical agents also block serotonin 5-HT2 receptors.

| Property | Typical (first generation) | Atypical (second generation) |
|---|---|---|
| Examples | Haloperidol, chlorpromazine, flupentixol | Olanzapine, risperidone, quetiapine, aripiprazole, clozapine |
| Main drawback | More extrapyramidal side effects | More metabolic side effects |

- **Extrapyramidal side effects (EPSEs)**: acute dystonia including oculogyric crisis (treated with procyclidine), akathisia, parkinsonism, and tardive dyskinesia (treated with tetrabenazine).
- Other effects: hyperprolactinaemia (galactorrhoea, amenorrhoea, sexual dysfunction, osteoporosis), metabolic syndrome and weight gain (especially olanzapine and clozapine), QT prolongation, sedation, a lowered seizure threshold, and neuroleptic malignant syndrome.
- **Avoid antipsychotics in Lewy body dementia** (severe sensitivity can be fatal), and note the increased risk of stroke and venous thromboembolism in elderly people with dementia.
- **Baseline monitoring** before starting: weight and waist circumference, pulse and blood pressure, fasting glucose or HbA1c, lipid profile, prolactin, and an electrocardiogram (ECG) if there are cardiovascular risk factors. Monitor weight weekly for 6 weeks, then at 12 weeks, at 1 year and annually.

## Clozapine

- Reserved for **treatment-resistant schizophrenia** (failure of two or more antipsychotics, at least one atypical, each at a therapeutic dose for at least 6 weeks).
- It carries a small but serious risk of **agranulocytosis** (around 0.7%), so the patient must be registered with a monitoring service and have regular full blood counts — weekly for 18 weeks, fortnightly until 1 year, then monthly.
- Other serious effects: myocarditis (baseline ECG), a lowered seizure threshold, constipation (which can progress to a fatal ileus) and hypersalivation. Stopping smoking raises clozapine levels, and if doses are missed for more than 48 hours the drug must be re-titrated from a low dose.

## Two emergencies to recognise

- **Neuroleptic malignant syndrome**: fever, lead-pipe muscle rigidity, autonomic instability, altered consciousness and a raised creatine kinase. Stop the antipsychotic and give supportive care, with dantrolene or bromocriptine in severe cases.
- **Serotonin syndrome** (above) has a faster onset and is marked by neuromuscular hyperactivity (clonus, hyperreflexia).

## Benzodiazepines and ECT

- **Benzodiazepines** enhance the action of gamma-aminobutyric acid (GABA). They are used short-term (no more than 2 to 4 weeks) for acute anxiety, agitation, alcohol withdrawal and as hypnotics, because of dependence and a withdrawal syndrome that can include seizures.
- **Electroconvulsive therapy (ECT)** is reserved for severe, life-threatening depression (for example a person not eating or drinking or at high suicidal risk), catatonia, or severe prolonged mania; its main side effect is short-term memory impairment.`,
        },
        {
          id: "mha_sectioning",
          name: "Mental Health Act & sectioning",
          content: `## The Mental Health Act and sectioning

The Mental Health Act 1983 (amended in 2007) governs the compulsory admission and treatment of people with a mental disorder in England and Wales; Scotland and Northern Ireland have separate legislation. It can be used, regardless of capacity, only for the assessment or treatment of a mental disorder, when the person poses a risk to their own health or safety or to others.

> Sectioning is a last resort. Informal (voluntary) admission should always be attempted first; a section follows only if the person does not agree and poses a risk.

## The main civil sections

| Section | Purpose | Duration | Who applies |
|---|---|---|---|
| 2 | Admission for assessment | 28 days, not renewable | 2 doctors (one section-12 approved) plus an AMHP |
| 3 | Admission for treatment | 6 months, renewable | 2 doctors (one section-12 approved) plus an AMHP |
| 4 | Emergency admission | 72 hours | 1 doctor plus an AMHP |
| 5(2) | Doctor's holding power (inpatient) | 72 hours | 1 doctor |
| 5(4) | Nurse's holding power (inpatient) | 6 hours | 1 mental health nurse |
| 135 | Police remove from private premises to a place of safety | 24 hours (to 36) | Police, with warrant, AMHP and doctor |
| 136 | Police remove from a public place to a place of safety | 24 hours (to 36) | Police |

- **Section 2** is typically used for a first presentation or where the diagnosis is unclear, because it allows assessment. **Section 3** requires the disorder to be known and is for treatment; it is renewable (first for 6 months, then yearly).
- Under **Section 3**, consent-to-treatment safeguards apply after 3 months: if the patient is not consenting, a Second Opinion Appointed Doctor (SOAD) must agree the treatment.
- **Section 4** is used when waiting for a second doctor would cause an unacceptable delay, and is usually converted to a Section 2 at hospital.
- **Section 5** holding powers buy time to arrange a formal assessment and cannot be used to treat against a patient's will; the nurse's 6-hour power (5(4)) lapses once a doctor attends.
- **Section 17** allows the responsible clinician to grant leave of absence, and the forensic sections (35, 37, 41, 47 and 48) cover people involved in criminal proceedings.

An **AMHP** is an Approved Mental Health Professional (usually a social worker) who coordinates the assessment and makes the application. A **section-12 approved** doctor has specific mental-health training; the **responsible clinician** is the consultant in charge of care.

## After detention

- A **Community Treatment Order (CTO)** lets a patient previously detained for treatment live in the community subject to conditions, and be recalled to hospital if these are breached.
- Patients can appeal to the **Mental Health Review Tribunal**, and an **Independent Mental Health Advocate (IMHA)** can support them.

## The Mental Health Act versus the Mental Capacity Act

The Mental Capacity Act 2005 (MCA) is a separate framework for making decisions on behalf of people aged 16 and over who **lack capacity**, for either physical or mental health decisions. Its five principles include a presumption of capacity, support to make one's own decision, the right to make an unwise decision, and acting in the person's best interests by the least restrictive means. Where care in a hospital or care home amounts to a deprivation of liberty, the **Deprivation of Liberty Safeguards (DoLS)** apply.

> In short: use the **Mental Capacity Act** when someone lacks capacity and you are acting in their best interests; use the **Mental Health Act** to assess or treat a mental disorder, with or without capacity, when there is risk and the person will not agree.`,
        },
      ],
    },
    {
      id: "rheumatology", name: "MSK & Rheumatology", icon: "🦴",
      topics: [
        {
          id: "fracture_complications",
          name: "Complications of fractures",
          content: `## Complications of fractures

Fracture complications are conveniently divided by timing into immediate, early and late, and by site into local (at the fracture) and systemic. Several are limb- or life-threatening and must be actively sought rather than waited for.

## Immediate

- **Haemorrhage and hypovolaemic shock** — long-bone and pelvic fractures can lose large volumes of blood (a closed femoral shaft fracture may lose 1 to 1.5 litres; pelvic fractures considerably more).
- **Neurovascular injury** — nerves and arteries may be damaged by the fracture or during manipulation. Classic associations: humeral shaft fracture and the **radial nerve**; surgical neck of humerus and the **axillary nerve**; supracondylar humeral fracture and the **brachial artery and median nerve**; knee dislocation and the **popliteal artery**.
- **Visceral injury** — for example rib fractures causing a pneumothorax, or pelvic fractures injuring the bladder or urethra.

## Early (local)

- **Compartment syndrome** — a surgical emergency (see below).
- **Infection** — particularly after open fractures or internal fixation, and may progress to **osteomyelitis**.

## Early (systemic)

- **Fat embolism syndrome** — see below.
- **Venous thromboembolism** — deep vein thrombosis and pulmonary embolism, especially after pelvic and lower-limb fractures and prolonged immobility; give thromboprophylaxis.
- **Rhabdomyolysis** from crush injury, and the general hazards of immobility (pressure sores, chest infection).

## Late

- **Delayed union, non-union and malunion** — healing that is slow, fails altogether (a non-union may form a false joint, or pseudarthrosis), or unites in a poor position. Risks include a poor blood supply, infection, excessive movement and the fracture pattern.
- **Avascular necrosis** — death of bone where the blood supply is precarious: the **scaphoid** (proximal pole), the **femoral head** (after an intracapsular neck-of-femur fracture) and the **talus**.
- **Post-traumatic osteoarthritis** — especially after intra-articular fractures.
- **Volkmann's ischaemic contracture** — the late result of an untreated forearm compartment syndrome (classically after a supracondylar fracture), with fibrosis and fixed clawing of the hand.
- **Complex regional pain syndrome**, **heterotopic ossification**, and, in children, **growth disturbance** if the fracture involves a growth plate (physis).

## Compartment syndrome — do not miss

Raised pressure within a fascial compartment compromises perfusion and causes irreversible muscle and nerve ischaemia within hours.

- **The cardinal sign is pain out of proportion to the injury, with pain on passive stretch of the muscles in the compartment.** Paraesthesia follows. The "6 Ps" (pain, paraesthesia, pallor, paralysis, pulselessness, perishingly cold) are late, and **a present pulse does not exclude it**.
- It commonly follows tibial and forearm fractures, crush injuries or a tight cast.
- **Management**: remove casts and constricting dressings, keep the limb at heart level, give oxygen and analgesia; measure compartment pressures if the diagnosis is in doubt; perform urgent **fasciotomy**.

## Fat embolism syndrome

- Occurs **24 to 72 hours** after a long-bone or pelvic fracture, as marrow fat enters the circulation.
- The classic triad is **respiratory distress** (hypoxia), **neurological signs** (confusion, agitation) and a **petechial rash** (over the trunk, axillae and conjunctivae).
- It is a clinical diagnosis (Gurd's criteria); management is supportive (oxygen, ventilation), and early fracture fixation is the best prevention.

> Two complications to flag at every significant fracture: compartment syndrome (pain out of proportion, pain on passive stretch) and, after long-bone fractures, fat embolism and venous thromboembolism.`,
        },
        {
          id: "vasculitides",
          name: "Vasculitides",
          content: `## Vasculitides

The vasculitides are a group of conditions characterised by inflammation of blood vessel walls, leading to ischaemia and tissue damage. They are most usefully classified by the **size of the vessel** predominantly affected. Because many cause non-specific systemic features (fever, weight loss, fatigue, raised inflammatory markers), vasculitis should be considered in any unexplained multisystem illness.

## Classification by vessel size

| Vessel size | Conditions |
|---|---|
| Large | Giant cell arteritis, Takayasu arteritis |
| Medium | Polyarteritis nodosa, Kawasaki disease, Buerger's disease |
| Small | Granulomatosis with polyangiitis, Eosinophilic granulomatosis with polyangiitis, Microscopic polyangiitis, Henoch-Schönlein purpura |

## Large-vessel vasculitis

- **Giant cell arteritis (temporal arteritis)** affects the over-50s with temporal headache, scalp tenderness, jaw claudication and visual loss, and a markedly raised erythrocyte sedimentation rate (ESR). It overlaps with polymyalgia rheumatica. Temporal artery biopsy shows granulomatous transmural inflammation with giant cells and skip lesions. **Give high-dose oral prednisolone immediately to protect sight** — do not wait for the biopsy.
- **Takayasu arteritis** affects the aorta and the branches of the aortic arch, classically in young East Asian women. An inflammatory phase (fever, weight loss) is followed by a "pulseless" phase with limb claudication, absent pulses and a blood-pressure difference between the arms.

## Medium-vessel vasculitis

- **Polyarteritis nodosa** is a necrotising arteritis with prominent renal involvement that characteristically **spares the lungs**; around 30% of cases are associated with **hepatitis B**. Angiography shows microaneurysms (a "string of beads" or rosary appearance) and histology shows fibrinoid necrosis.
- **Kawasaki disease** is a vasculitis of young children: prolonged fever with conjunctivitis, mucositis (cracked lips, strawberry tongue), rash and peeling of the hands and feet. Its key danger is **coronary artery aneurysms**, so it is treated with intravenous immunoglobulin and aspirin.
- **Buerger's disease (thromboangiitis obliterans)** occurs in young, heavy smokers: inflammation and thrombosis of the arteries of the extremities causes painful digital ischaemia and ulceration, with a "corkscrew" appearance on angiography.

## Small-vessel vasculitis and ANCA

The small-vessel vasculitides divide into those associated with antineutrophil cytoplasmic antibodies (ANCA) and immune-complex types.

| ANCA pattern | Target antigen | Associated disease |
|---|---|---|
| c-ANCA | Proteinase 3 (PR3) | Granulomatosis with polyangiitis (GPA) |
| p-ANCA | Myeloperoxidase (MPO) | Eosinophilic granulomatosis with polyangiitis (EGPA), microscopic polyangiitis (MPA) |

- **Granulomatosis with polyangiitis (GPA, formerly Wegener's)** gives a triad of **upper respiratory tract** disease (sinusitis, epistaxis, saddle-nose deformity), **lower respiratory tract** disease (pulmonary nodules, cavitation, haemorrhage) and **kidney** disease (crescentic glomerulonephritis). It is c-ANCA / anti-PR3 positive.
- **Eosinophilic granulomatosis with polyangiitis (EGPA, formerly Churg-Strauss)** features late-onset **asthma** and allergic rhinitis with marked **eosinophilia**, progressing to a systemic vasculitis. It is p-ANCA / anti-MPO positive.
- **Microscopic polyangiitis (MPA)** is a pauci-immune small-vessel vasculitis causing a **pulmonary-renal syndrome** (pulmonary haemorrhage with rapidly progressive glomerulonephritis). It is p-ANCA / anti-MPO positive.
- **Henoch-Schönlein purpura (IgA vasculitis)** is an IgA-mediated vasculitis of **children**, often following an upper respiratory infection, with the tetrad of a **palpable purpuric rash** (buttocks and extensor surfaces of the legs), **arthritis**, **abdominal pain** and **glomerulonephritis**. It is usually self-limiting with supportive care.

## Investigation and management

- **Investigations**: inflammatory markers (ESR, C-reactive protein), ANCA, urinalysis and renal function (for glomerulonephritis), complement, hepatitis serology (for polyarteritis nodosa), angiography, and biopsy of an affected organ for the definitive diagnosis.
- **Management**: high-dose corticosteroids to induce remission, with **cyclophosphamide or rituximab** for severe ANCA-associated disease, followed by maintenance with azathioprine or methotrexate. **Plasma exchange** is used for severe pulmonary-renal disease. GPA additionally receives **co-trimoxazole** (for nasal Staphylococcus aureus carriage and Pneumocystis prophylaxis).

> ANCA shortcut: **c**-ANCA targets PR3 and points to GPA, while **p**-ANCA targets MPO and points to EGPA and MPA. Giant cell arteritis is the large-vessel one that threatens sight — treat with steroids before the biopsy.`,
        },
      ],
    },
    {
      id: "dermatology", name: "Dermatology", icon: "🧴",
      topics: [
        {
          id: "skin_cancer",
          name: "Malignant & pre-malignant skin lesions",
          content: `## Malignant and pre-malignant skin lesions

Skin cancers are the commonest cancers, and most are driven by ultraviolet (UV) light. The "big three" are basal cell carcinoma, squamous cell carcinoma and melanoma. Several pre-malignant lesions can progress to invasive cancer, so recognising and treating them early matters.

## Risk factors

- **Ultraviolet exposure** — cumulative lifetime exposure for basal and squamous cell carcinoma; intermittent intense burning (especially in childhood) for melanoma.
- **Fair skin** (Fitzpatrick types I-II), older age, and outdoor work or sunbed use.
- **Immunosuppression** — organ-transplant recipients have a greatly increased squamous cell carcinoma risk.
- **Genetic and other** — xeroderma pigmentosum, albinism, previous radiotherapy, and chronic wounds or scars (a squamous cell carcinoma arising in one is a **Marjolin's ulcer**).
- For melanoma specifically — **many or atypical moles** and a personal or family history of melanoma.

## Pre-malignant lesions

| Lesion | Features | Note |
|---|---|---|
| Actinic (solar) keratosis | Rough, scaly, sandpaper-like patches on sun-exposed skin; often better felt than seen | Small risk of progression to squamous cell carcinoma |
| Bowen's disease | Well-demarcated red scaly plaque, often on the lower legs of older women | Squamous cell carcinoma **in situ** (the basement membrane is intact) |
| Lentigo maligna | Slowly growing flat pigmented macule on the sun-damaged face of the elderly | Melanoma **in situ**; can progress to lentigo maligna melanoma |

- A **keratoacanthoma** is a rapidly growing dome-shaped nodule with a central keratin plug that may regress spontaneously, but it is histologically hard to distinguish from squamous cell carcinoma and is treated as such.
- Treatment of actinic keratosis and Bowen's disease: sun protection plus cryotherapy, topical 5-fluorouracil or imiquimod, photodynamic therapy, or excision, with monitoring.

## Basal cell carcinoma

The commonest skin cancer; slow-growing and locally destructive but it **rarely metastasises** (the "rodent ulcer").

- **Appearance**: a pearly nodule with surface telangiectasia and a rolled border, often with central ulceration, on sun-exposed skin (especially the face). Subtypes include nodular, superficial and morphoeic (infiltrative). Histology shows islands of basal cells with peripheral palisading.
- **Management**: surgical excision; Mohs micrographic surgery for high-risk or facial lesions; curettage, cryotherapy or topical agents for low-risk superficial lesions; radiotherapy when surgery is unsuitable. Referral is usually routine.

## Squamous cell carcinoma

A keratinocyte malignancy that **can metastasise** (higher risk on the lip and ear, and in the immunosuppressed).

- **Appearance**: a rapidly growing keratotic or ulcerated nodule on sun-damaged skin; it may arise from an actinic keratosis, from Bowen's disease, or in a chronic wound (a Marjolin's ulcer).
- **Management**: surgical excision with a margin, with assessment of the regional lymph nodes; radiotherapy in selected cases; refer on the two-week-wait suspected-cancer pathway.

## Melanoma

A malignancy of melanocytes — less common than the keratinocyte cancers but responsible for most skin-cancer deaths.

- **Recognition (the ABCDE rule)**: **A**symmetry, **B**order irregularity, **C**olour variation, **D**iameter over 6 mm, and **E**volution (change over time). The UK 7-point checklist weights a change in size, shape or colour most heavily.
- **Growth and prognosis**: melanoma first grows horizontally (the radial phase), then invades vertically into the dermis (the vertical phase, with Pagetoid "buckshot" spread on histology). **Breslow thickness — the depth of invasion — is the single most important prognostic factor**; ulceration and mitotic rate also matter.
- **Subtypes**: superficial spreading (commonest), nodular (aggressive, with early vertical growth), lentigo maligna melanoma (sun-damaged elderly), and acral lentiginous (palms, soles and nail beds; the commonest type in darker skin).
- **Management**: urgent two-week-wait referral; an **excisional biopsy** to determine Breslow thickness, then **wide local excision** with a margin guided by depth; sentinel lymph node biopsy and staging for thicker lesions; for advanced disease, immunotherapy (checkpoint inhibitors) and targeted therapy (BRAF inhibitors).

> Refer any new, changing or non-healing pigmented or scaly lesion. Melanoma and squamous cell carcinoma go on the two-week-wait suspected-cancer pathway, while basal cell carcinoma is usually a routine referral. Breslow thickness is the key melanoma prognostic factor.`,
        },
      ],
    },
    {
      id: "ent", name: "ENT", icon: "👂",
      topics: [
        {
          id: "acute_otitis_media",
          name: "Acute otitis media",
          content: `## Acute otitis media

Infection of the middle ear, and one of the commonest reasons a child is brought to a doctor. It usually follows a viral upper respiratory infection, which blocks the Eustachian tube; the short, horizontal Eustachian tube of a young child is why the condition is so much commoner before the age of about 7.

The child presents with **otalgia** — or, if too young to report it, with ear-tugging, irritability, poor feeding and fever. Otoscopy shows a **red, bulging tympanic membrane with loss of the normal light reflex**. If the drum perforates, the pain **suddenly improves** and there is purulent discharge.

## When to admit

- **Severe systemic infection**
- **Complications** — meningitis, mastoiditis or facial nerve palsy
- **Children under 3 months with a temperature above 38 degrees**

## Management

The usual course is **about 3 days, but can last up to a week** — tell the family this, because it sets expectations and reduces pressure for antibiotics.

- **Regular paracetamol or ibuprofen for pain**, which is the treatment that actually helps
- **There is no evidence for decongestants or antihistamines**

Antibiotic prescribing follows one of three strategies:

| Strategy | When and what to say |
|---|---|
| **No antibiotic prescription** | Most cases resolve spontaneously. Advise seeking help if symptoms have not improved after **3 days**, or if the child deteriorates clinically |
| **Back-up (delayed) prescription** | Advise that the antibiotic is **not needed immediately**, but should be used if symptoms have not improved after 3 days, or worsen significantly at any time |
| **Immediate prescription** | Advise seeking help if symptoms worsen rapidly or the child becomes systemically unwell |

**Amoxicillin for 5 to 7 days is first-line.** If the child is penicillin-allergic, use **clarithromycin or erythromycin**.

A point worth holding on to when counselling: **antibiotics marginally reduce the duration of pain but have no effect on the risk of hearing loss.**

## Two things not to confuse it with

**Otitis media with effusion ("glue ear")** is fluid behind an intact, dull, retracted drum **without** acute infection. It causes conductive hearing loss and speech delay rather than pain, and is managed with a period of active observation over about 3 months before considering grommets — not with antibiotics.

**Mastoiditis** is the complication to fear: persistent pain and fever with a tender, boggy, erythematous swelling **behind** the ear that pushes the pinna forward and down. It needs urgent admission, intravenous antibiotics and ENT assessment.

> High-yield: pain relief matters more than antibiotics. Amoxicillin 5 to 7 days when antibiotics are indicated, and admit any child under 3 months with a fever above 38 degrees. A pinna pushed forward by a boggy post-auricular swelling is mastoiditis.`,
        },
        {
          id: "otitis_externa",
          name: "Otitis externa",
          content: `## Otitis externa

Inflammation of the external ear canal, often called "swimmer's ear" because moisture is the dominant risk factor. Others are trauma from cotton buds or scratching, hearing aids, and eczema or psoriasis of the canal. It presents with itch, pain that is worse on moving the tragus or pinna, discharge and conductive hearing loss if the canal occludes.

## Localised otitis externa

A furuncle (folliculitis) in the canal.

- **Analgesia and local heat** using a warm flannel is often sufficient, as it tends to be mild and self-limiting
- **Oral antibiotics are rarely indicated**

## Acute otitis externa (under 3 months)

- **Keep the ears clean and dry**, and **avoid damaging the canal**
- Consider over-the-counter **acetic acid 2% ear drops or spray** — in children **over 12 years** — used morning, evening and after swimming, showering or bathing, for a **maximum of 7 days**
- **Ibuprofen or paracetamol** for pain
- Consider **antibacterial with or without a topical corticosteroid ear drop**, for example **ciprofloxacin with dexamethasone (0.3%/0.1%) twice daily for 7 to 14 days**. The ear must be **cleaned of wax first**, and a **wick** may be needed to deliver the drops if the canal is too swollen
- If treatment fails, check **adherence and technique**, send an **ear swab for microscopy, culture and sensitivity**, then seek specialist advice or refer to ENT

## Chronic otitis externa (over 3 months)

- **Avoid triggers** — swimming, scratching and aggressive cleaning
- **Analgesia** with paracetamol or ibuprofen as needed
- Send an **ear swab for both bacterial and fungal** culture

Then treat according to what is found:

| Finding | Treatment |
|---|---|
| **Fungal infection** (mild to moderate) | **Clotrimazole 1% solution**, acetic acid 2% spray, or clioquinol with a corticosteroid |
| **Allergic dermatitis** | Topical corticosteroid |
| **Seborrhoeic dermatitis** | Combined antifungal and corticosteroid |
| **No cause evident** | A 7-day topical preparation containing **corticosteroid only, with no antibiotic**, considering co-prescription of acetic acid spray |

## Malignant (necrotising) otitis externa

The emergency not to miss. Infection — almost always ***Pseudomonas aeruginosa*** — spreads from the canal into the temporal bone, causing osteomyelitis of the skull base. It occurs in **elderly people with diabetes** and in the immunocompromised.

Suspect it when there is **severe pain out of proportion to the findings**, especially at night, **granulation tissue at the bone-cartilage junction** of the canal floor, and failure to respond to topical treatment. **Cranial nerve palsies — the facial nerve first — indicate advanced disease.**

**Urgent admission is required**, with imaging (CT or MRI of the skull base), **systemic antibiotics** with antipseudomonal cover such as prolonged intravenous ciprofloxacin, and surgical **debridement** where needed.

> High-yield: keep the ear dry, use topical rather than oral treatment, and clean the canal before drops. Severe night pain with granulation tissue in an elderly diabetic patient is **malignant otitis externa** — admit, image and treat systemically for *Pseudomonas*.`,
        },
        {
          id: "acute_sinusitis",
          name: "Acute sinusitis",
          content: `## Acute sinusitis

Inflammation of the paranasal sinuses — maxillary, ethmoid, frontal and sphenoid — nearly always following a viral upper respiratory infection. The features are nasal blockage and discharge, facial pain or pressure that is worse on leaning forward, and reduction or loss of smell. Sinusitis lasting more than **12 weeks** is chronic rhinosinusitis and is managed differently.

## When to refer to hospital

Refer if there are symptoms or signs of:

- **Severe systemic infection**
- **Intraorbital or periorbital complications** — periorbital cellulitis, a displaced eyeball, or double vision
- **Intracranial complications** — such as features of meningitis

These matter because the ethmoid sinuses are separated from the orbit by only the paper-thin lamina papyracea, so infection crosses easily.

## Symptoms lasting under 10 days

**Do NOT offer an antibiotic.** Explain that:

- Acute sinusitis is **usually caused by a virus** and takes **2 to 3 weeks to resolve**
- **Paracetamol or ibuprofen** manages fever and pain
- Some people find relief with **nasal saline or nasal decongestants**
- An **intranasal corticosteroid** may be given for congestion
- Medical advice should be sought if symptoms worsen rapidly, do not improve within 3 weeks, or the person becomes systemically unwell

## Symptoms lasting more than 10 days but under 4 weeks

At this point bacterial infection becomes more likely.

- Consider a **high-dose nasal corticosteroid for 14 days** in adults and children **over 12 years** (for example mometasone). It may improve symptoms but is **unlikely to affect the duration** of the illness, and can cause systemic side effects
- Consider **no antibiotic prescription, or a back-up prescription**. Antibiotics are unlikely to change the course of the illness. The back-up prescription should be used if symptoms get **considerably worse**, or have still not improved **by 7 days**
- **First-line: phenoxymethylpenicillin for 5 days**; **clarithromycin** if penicillin-allergic
- **Second-line: co-amoxiclav**

Advise seeking medical advice if complications develop or symptoms do not improve.

> High-yield: the **10-day rule** is the whole decision. Under 10 days it is viral — no antibiotic. Over 10 days, consider a high-dose nasal steroid and at most a back-up prescription. Periorbital swelling, proptosis or diplopia means orbital involvement and needs hospital assessment the same day.`,
        },
        {
          id: "sore_throat_tonsillitis",
          name: "Sore throat, tonsillitis & the FeverPAIN score",
          content: `## Sore throat

Most sore throats are viral and self-limiting. The clinical task is to identify the minority caused by **group A streptococcus** who benefit from antibiotics, and to spot the few with a dangerous cause.

## When to admit

- **Difficulty breathing**
- **Clinical dehydration**
- **Peritonsillar abscess (quinsy) or cellulitis**
- Signs of **marked systemic illness or sepsis**
- A **suspected rare cause** — for example Kawasaki disease or diphtheria

**Quinsy** is worth recognising: unilateral severe pain with **trismus** (difficulty opening the mouth), a **"hot potato" muffled voice**, and deviation of the uvula away from the affected side. It needs ENT assessment for aspiration or incision and drainage.

## Scoring: who has streptococcal infection?

Two validated scores estimate the probability of streptococcal infection.

| Score | Components |
|---|---|
| **FeverPAIN** | **F**ever in the past 24 hours; **P**urulence; **A**ttended rapidly, within 3 days of onset; severely **I**nflamed tonsils; **N**o cough or coryza |
| **Centor** | Tonsillar exudate; tender anterior cervical lymphadenopathy; history of fever; **absence** of cough |

## When to give antibiotics

Offer an antibiotic — immediate or back-up — if:

- **Group A streptococcus has been confirmed**, by throat culture or rapid antigen testing
- **FeverPAIN is 4 or 5**, or **Centor is 3 or 4**
- The person has **severe symptoms, is systemically very unwell, or is at high risk of complications** — in which case give an **immediate** prescription

**An important deviation for children:** interim guidance from NHS England and UKHSA, endorsed by NICE, the RCGP and the RCPCH, advises that in children a decision to treat may be guided by a **FeverPAIN score of 3 or more**, combined with clinical judgement. This is a **lower threshold than standard NICE guidance**, adopted in light of the rise in invasive group A streptococcal infection.

## Which antibiotic

- **Phenoxymethylpenicillin for 5 to 10 days.** A 10-day course "may increase the chance of microbiological cure", and 10 days is used where eradication matters, such as scarlet fever
- **Clarithromycin** if penicillin-allergic
- **AVOID amoxicillin.** If the sore throat is in fact **infectious mononucleosis**, amoxicillin causes a florid widespread maculopapular rash

## Advice

- Adequate **fluid intake**, and **paracetamol or ibuprofen** as needed
- **Salt water gargling, lozenges or anaesthetic sprays** such as benzydamine (Difflam) give temporary relief
- Children can return to school once the **fever has resolved and they feel well**, and after **24 hours of antibiotics**

**Recurrent tonsillitis** may warrant ENT referral for tonsillectomy. The usual thresholds are **7 or more episodes in 1 year, 5 per year for 2 years, or 3 per year for 3 years**, where the episodes are disabling and prevent normal functioning.

> High-yield: FeverPAIN 4 to 5 or Centor 3 to 4 justifies antibiotics — **but in children the endorsed threshold is FeverPAIN 3 or more**. Give phenoxymethylpenicillin, never amoxicillin, because of the glandular fever rash.`,
        },
        {
          id: "laryngitis",
          name: "Laryngitis",
          content: `## Laryngitis

Inflammation of the larynx, presenting with **hoarseness or voice loss**, throat discomfort and a dry cough. The great majority are acute and viral, following an upper respiratory infection, and settle within a week.

## The red flag that outranks everything

**Hoarseness persisting for more than 3 weeks requires urgent referral on a suspected cancer pathway** for laryngeal carcinoma — particularly in a smoker or someone who drinks heavily, and especially with associated neck lump, dysphagia, otalgia or stridor. Acute laryngitis should never be the label attached to a persistently hoarse voice.

## If there is airway compromise

- **Secure the airway** — an emergency **tracheostomy** may be required
- **If the patient does not have diphtheria**: give **dexamethasone sodium phosphate** to reduce oedema, and **cefazolin with cefalexin**, started intravenously and changed to oral
- **If the patient has diphtheria**: **isolate** the patient, give **intravenous or intramuscular benzylpenicillin for 14 days**, and give **diphtheria antitoxin**

Diphtheria is now vanishingly rare in the United Kingdom because of immunisation, but it is the reason an unimmunised child with a severe membranous pharyngolaryngitis is an emergency — the classic sign is a **grey adherent pseudomembrane** that bleeds when scraped.

## If there is no airway compromise

**Viral laryngitis**

- **Analgesia** as required, with paracetamol
- **Vocal hygiene** — voice rest for **3 to 7 days**, increased hydration, humidification, and reduced caffeine intake
- A **mucolytic** may be given to help lubricate the vocal folds

**Bacterial laryngitis**

- **Phenoxymethylpenicillin for 14 days**
- Analgesia and the same vocal hygiene measures as above

A practical point on vocal hygiene: **whispering strains the vocal folds more than speaking softly**, so advise gentle normal speech rather than whispering, and avoid throat-clearing, which is traumatic to the folds.

> High-yield: acute laryngitis is viral and needs voice rest, fluids and analgesia rather than antibiotics. **Hoarseness lasting more than 3 weeks is a two-week-wait referral for laryngeal cancer** until proven otherwise.`,
        },
      ],
    },
    {
      id: "ophthalmology", name: "Ophthalmology", icon: "👁️",
      topics: [
        {
          id: "corneal_arcus",
          name: "Corneal arcus",
          content: `## Corneal arcus

Corneal arcus (called arcus senilis when age-related) is a grey-white ring of lipid deposited in the peripheral cornea. It is one of the commonest peripheral corneal findings and is usually benign.

## Features

- A **white, grey or bluish ring** at the periphery of the cornea, separated from the limbus by a clear zone (the lucid interval of Vogt).
- It typically begins at the top and bottom of the cornea and then becomes a complete ring.
- It is **bilateral, painless and does not affect vision**.

## Why it matters

- It is due to lipid (cholesterol) deposited in the corneal stroma.
- In people **over about 50 it is a normal age-related change** (arcus senilis) and needs no action.
- In people **under about 45 (arcus juvenilis) it suggests an underlying lipid disorder** — check a fasting lipid profile and cardiovascular risk, as it can be a sign of familial hypercholesterolaemia.
- A **unilateral** arcus is unusual and can reflect reduced blood flow on the opposite side (for example carotid disease).

## Management

- No treatment is needed for the eye itself.
- In a younger patient, investigate and manage hyperlipidaemia and overall cardiovascular risk.

> Corneal arcus in anyone under about 45 should prompt a lipid profile — it may be the first clue to familial hypercholesterolaemia. Do not confuse it with a Kayser-Fleischer ring, which is copper, sits right at the limbus, and points to Wilson's disease.`,
        },
        {
          id: "hypertensive_retinopathy",
          name: "Hypertensive retinopathy",
          content: `## Hypertensive retinopathy

Hypertensive retinopathy is the spectrum of retinal changes caused by chronic (and acute severe) high blood pressure. It is a marker of end-organ damage, so finding it should prompt cardiovascular assessment.

## Pathophysiology

Chronically raised blood pressure thickens the retinal arteriolar walls (arteriosclerosis) and, when severe, breaks down the blood-retinal barrier. This causes leakage (haemorrhages and exudates), ischaemia (cotton-wool spots) and, at the extreme, optic disc swelling.

## The Keith-Wagener-Barker grades

| Grade | Retinal findings |
|---|---|
| 1 | Generalised arteriolar narrowing; silver or copper wiring |
| 2 | Arteriovenous nipping (arterioles compressing venules at crossings) |
| 3 | Flame haemorrhages, cotton-wool spots and hard exudates |
| 4 | The above plus papilloedema (optic disc swelling) — malignant hypertension |

Severe disease can also show a **macular star** (hard exudates radiating from the fovea).

## Assessment and management

- **Examination**: fundoscopy for the grade of changes, and measure the blood pressure (in both arms).
- **Investigations**: look for end-organ damage (urinalysis and renal function, electrocardiogram) and other cardiovascular risk factors; seek a secondary cause of hypertension if the patient is young or resistant to treatment.
- **Management is to control the blood pressure**, after which mild changes can regress. **Grade 4 (papilloedema) is malignant hypertension** — a medical emergency needing prompt but controlled blood-pressure lowering.

> Grade 3 to 4 changes (haemorrhages, exudates, cotton-wool spots and especially papilloedema) signal malignant hypertension: check for end-organ damage and lower the blood pressure urgently but in a controlled way.`,
        },
        {
          id: "retinitis_pigmentosa",
          name: "Retinitis pigmentosa",
          content: `## Retinitis pigmentosa

Retinitis pigmentosa is the commonest inherited retinal dystrophy: a progressive degeneration of the photoreceptors that affects the rods first and the cones later.

## How it presents

- **Night blindness (nyctalopia)** is the earliest symptom, because the rods are affected first.
- **Progressive loss of the peripheral visual field (tunnel vision)**, which eventually threatens central vision.
- It usually begins in childhood or early adulthood and is typically bilateral.

## Signs and inheritance

- The classic fundus triad is **"bone-spicule" pigmentation** in the peripheral retina, **attenuated (narrowed) retinal vessels** and a **pale, waxy optic disc**.
- It is genetically heterogeneous, with autosomal dominant, autosomal recessive and X-linked forms.
- It can be part of a **syndrome** — for example **Usher syndrome** (retinitis pigmentosa with sensorineural hearing loss) or **Bardet-Biedl syndrome**.

## Investigation and management

- **Investigations**: electroretinography (reduced responses), visual field testing and optical coherence tomography; genetic testing and counselling.
- **Management**: there is no cure, so care is supportive — low-vision aids, registration as sight-impaired, genetic counselling, and screening for treatable complications (cataract, macular oedema). Gene therapy and retinal implants are areas of active research.

> Suspect retinitis pigmentosa in a young person with night blindness and tunnel vision; the fundal triad is bone-spicule pigmentation, attenuated vessels and a waxy pale disc. Always ask about hearing (Usher syndrome).`,
        },
        {
          id: "uveitis",
          name: "Uveitis",
          content: `## Uveitis

Uveitis is inflammation of the uveal tract (the iris, ciliary body and choroid). It is classified by the part affected — **anterior** (iris and ciliary body, the commonest), **intermediate**, **posterior** (choroid and retina), or **panuveitis** — and is strongly associated with systemic inflammatory disease.

## Anterior uveitis (iritis)

The commonest and most high-yield form:

- **Presentation**: a painful red eye with **photophobia**, blurred vision and watering; the redness is concentrated around the cornea (ciliary flush) and the pupil may be small and irregular.
- **Slit-lamp signs**: cells and flare in the anterior chamber, keratic precipitates on the corneal endothelium, and sometimes a hypopyon (a fluid level of pus) or posterior synechiae (adhesions of the iris to the lens).

## Causes and associations

- Often **idiopathic**, but strongly associated with **HLA-B27** conditions: ankylosing spondylitis, reactive arthritis, psoriatic arthritis and inflammatory bowel disease.
- Also **sarcoidosis**, **Behçet's disease**, juvenile idiopathic arthritis (often painless and chronic in children), and infections (herpes, tuberculosis, syphilis).

## Management

- **Refer urgently to ophthalmology.**
- **Topical corticosteroids** to settle the inflammation and a **cycloplegic/mydriatic** drop (for example cyclopentolate) to relieve the pain of ciliary spasm and to prevent or break synechiae.
- Investigate and treat any **underlying systemic disease**; recurrent or posterior disease may need systemic immunosuppression.

> Anterior uveitis is the painful red eye with photophobia, a small irregular pupil and ciliary flush — refer urgently, treat with steroid and cycloplegic drops, and look for an HLA-B27 association. Contrast it with conjunctivitis (gritty, not truly painful) and acute angle-closure glaucoma (fixed mid-dilated pupil, hard eye).`,
        },
      ],
    },
    {
      id: "infectious", name: "Infectious Diseases", icon: "🦠",
      topics: [
        {
          id: "zoonoses",
          name: "Animals as a vector of disease",
          content: `## Animals as a vector of disease

A **zoonosis** is an infection passed from animals to humans — by direct contact, by eating animal products, or through an **arthropod vector** such as a tick or mosquito. In the clinic, and in the exam, the key skill is to link the **exposure** (a tick bite after a country walk, a cat scratch, unpasteurised cheese, swimming in fresh water) to the likely organism. This topic is therefore organised by the animal or vector.

## Arthropod (insect) vectors

These organisms need a biting insect to reach people, so a history of travel, bites and outdoor activity is everything.

| Vector | Organism | Disease | Key clues |
|---|---|---|---|
| Ixodes tick (from deer; hiking) | Borrelia burgdorferi | Lyme disease | Erythema migrans ('bull's-eye' rash), then FACE — Facial nerve palsy, Arthritis, Carditis, Erythema migrans |
| Anopheles mosquito | Plasmodium | Malaria | Cyclical fevers after travel to an endemic area |
| Rat flea | Yersinia pestis | Plague | A swollen, tender lymph node ('bubo'), or pneumonic spread |
| Sandfly | Leishmania | Leishmaniasis | A poorly-healing skin ulcer (cutaneous), or hepatosplenomegaly (visceral, 'Kala-azar') |
| Tsetse fly (Africa) | Trypanosoma brucei | African sleeping sickness | Fever and lymphadenopathy, then daytime somnolence |
| Reduviid 'kissing' bug (Americas) | Trypanosoma cruzi | Chagas disease | Years later: mega-oesophagus, megacolon and cardiomyopathy |

## Direct animal contact and animal products

| Source | Organism | Disease | Key clues |
|---|---|---|---|
| Dog or bat bite | Rabies virus (a rhabdovirus) | Rabies | Prodrome, then hydrophobia, hypersalivation and fatal encephalitis; Negri bodies |
| Cat scratch or bite | Bartonella henselae | Cat scratch disease | Fever with tender regional lymphadenopathy |
| Cat faeces | Toxoplasma gondii | Toxoplasmosis | Usually mild; serious in pregnancy (congenital) and immunosuppression |
| Unpasteurised dairy; cattle, goats, sheep, pigs | Brucella | Brucellosis | Undulant fever (worse in the evening), myalgia, hepatosplenomegaly |
| Cattle and sheep (birth fluids, dust) | Coxiella burnetii | Q fever | Atypical pneumonia with no rash |
| Rat or dog urine; fresh water | Leptospira interrogans | Leptospirosis (Weil's disease) | Fever, red eyes (conjunctival suffusion), jaundice and renal failure |
| Animal hides and spores | Bacillus anthracis | Anthrax | Painless black skin eschar (cutaneous); a widened mediastinum (inhaled) |

## Treatment

**Doxycycline is the workhorse** for many bacterial zoonoses — Lyme disease, Q fever, leptospirosis and anthrax, and, paired with streptomycin, brucellosis and plague; use intravenous ceftriaxone for Lyme disease with neurological involvement. The important exceptions are **rabies** (post-exposure immunoglobulin plus a full vaccine course, given before symptoms appear), **malaria** (antimalarials, with intravenous artesunate for severe disease), **leishmaniasis** (amphotericin B), **toxoplasmosis** (pyrimethamine and sulfadiazine when treatment is needed) and the **trypanosomiases** (pentamidine or suramin for African disease, benznidazole for Chagas).

> High-yield: pattern-match the exposure to the organism. An Ixodes **tick** points to Lyme disease (erythema migrans, FACE); an **Anopheles mosquito** to malaria; a **dog or bat** bite to rabies; a **cat** to cat scratch disease (Bartonella) and toxoplasmosis; **unpasteurised dairy** to brucellosis; **rat or dog urine in water** to leptospirosis; and a **rat flea** to plague. Remember that doxycycline treats most of the bacterial ones.`,
        },
        {
          id: "hiv_gi",
          name: "GI disease in advanced HIV",
          content: `## Gastrointestinal disease in advanced HIV

As the CD4 count falls in advanced HIV (the acquired immunodeficiency syndrome, AIDS), opportunistic infections and HIV-associated tumours can affect every part of the gut. The CD4 count is the best guide to what is likely: oesophageal candidiasis and cryptosporidiosis appear once it falls below roughly 200 and 100 cells per microlitre, while cytomegalovirus (CMV) and Mycobacterium avium complex (MAC) tend to strike below 50. Most of these are AIDS-defining, and the single most important treatment is always to start or optimise antiretroviral therapy so the immune system recovers. The problems are best approached by site.

## Oral and oesophageal disease

- **Oral candidiasis (thrush)** is the commonest oral problem — removable white plaques on the tongue and palate, and a useful marker of falling immunity.
- **Oesophageal candidiasis** causes painful swallowing (odynophagia), is AIDS-defining, and is the commonest cause of oesophagitis in HIV; it is usually treated empirically with oral fluconazole.
- **Oral hairy leukoplakia** — corrugated white plaques on the lateral tongue that do not scrape off — is caused by Epstein-Barr virus and is essentially specific to HIV.
- **Large oesophageal ulcers** suggest **CMV** or **herpes simplex virus** (at very low CD4 counts), or may be idiopathic aphthous ulcers.
- **Kaposi's sarcoma** (human herpesvirus 8) can appear as purple plaques on the palate.

## Diarrhoea

Chronic diarrhoea is one of the commonest presentations, and the likely organism again tracks the CD4 count:

- **Cryptosporidium** is the classic cause of profuse, chronic, watery diarrhoea below a CD4 of about 100; oocysts are acid-fast on stool microscopy, and there is no reliably effective drug other than immune recovery on antiretrovirals. Other protozoa (microsporidia, Cystoisospora, Cyclospora) give a similar picture.
- **CMV colitis** (CD4 below about 50) causes bloody diarrhoea, abdominal pain and fever, with characteristic 'owl's-eye' inclusions on biopsy; treat with ganciclovir.
- **Mycobacterium avium complex** (CD4 below about 50) is a disseminated infection with fever, weight loss and diarrhoea.
- **Bacterial** causes (Salmonella, Shigella, Campylobacter) are more severe, more often bacteraemic and more recurrent than in immunocompetent people; Clostridioides difficile is also common.
- Where no pathogen is found, direct **HIV enteropathy** may be responsible.

## Biliary and pancreatic disease

- **AIDS cholangiopathy** is a sclerosing-cholangitis-like biliary disease, usually driven by Cryptosporidium, CMV or microsporidia at a low CD4. It causes right upper quadrant pain with a raised alkaline phosphatase, and ERCP shows papillary stenosis and bile-duct beading.
- **Acalculous cholecystitis** (CMV, Cryptosporidium) also occurs, as does **pancreatitis** — the latter often drug-induced (older agents such as didanosine and pentamidine) as well as from CMV or HIV itself.

## Anorectal disease

- **Perianal ulceration** from chronic herpes simplex virus or CMV.
- **Anal human papillomavirus (HPV)** disease — warts and, with oncogenic types (16 and 18), anal intraepithelial neoplasia and squamous cell carcinoma, particularly in men who have sex with men.
- **Infective proctitis** from sexually transmitted gonorrhoea, chlamydia (including lymphogranuloma venereum) and syphilis.
- **Kaposi's sarcoma** may also involve the rectum.

> High-yield: let the CD4 count steer you. Oesophageal candidiasis (odynophagia) and cryptosporidiosis (chronic watery diarrhoea) appear below about 200 and 100; CMV (large oesophageal ulcers, bloody colitis, cholangiopathy) and MAC appear below about 50. CMV shows 'owl's-eye' inclusions, oral hairy leukoplakia is Epstein-Barr virus, and Kaposi's sarcoma is human herpesvirus 8. The definitive treatment for nearly all of it is immune recovery with antiretroviral therapy.`,
        },
        {
          id: "hiv_neuro",
          name: "Neurological & ophthalmic disease in advanced HIV",
          content: `## Neurological and ophthalmic disease in advanced HIV

As the CD4 count falls in advanced HIV (the acquired immunodeficiency syndrome, AIDS), the brain, meninges and eye become major sites of opportunistic infection and HIV-related tumours. As with gastrointestinal disease, the CD4 count is the best guide: cerebral toxoplasmosis, progressive multifocal leukoencephalopathy and cryptococcal meningitis cluster around a CD4 below 100, while cytomegalovirus (CMV) disease and primary CNS lymphoma appear below 50. Nearly all are AIDS-defining, and the foundation of treatment is always to start or optimise antiretroviral therapy so that immunity recovers.

## Focal brain lesions

A ring-enhancing brain lesion in advanced HIV has two main causes, and telling them apart is high-yield:

| Feature | Cerebral toxoplasmosis | Primary CNS lymphoma |
|---|---|---|
| Cause | Reactivation of Toxoplasma gondii | Epstein-Barr-virus-driven lymphoma |
| CD4 | Below about 100 | Below about 50 |
| Lesions | Usually multiple ring-enhancing lesions (basal ganglia) | Often a single lesion |
| Clue | Responds to a trial of anti-toxoplasma treatment | No response; EBV DNA in the CSF; thallium SPECT or PET positive |

Both present with headache, focal deficits, seizures or personality change. The usual approach is an empirical trial of **pyrimethamine and sulfadiazine** for toxoplasmosis, with biopsy reserved for lesions that fail to respond.

## Diffuse brain disease

- **Progressive multifocal leukoencephalopathy (PML)** is caused by reactivation of the **JC virus**, which destroys oligodendrocytes. It produces progressive focal deficits — limb weakness, visual loss, cognitive decline — with multifocal white-matter lesions that show no mass effect or enhancement. There is no specific drug; the only effective treatment is immune recovery on antiretrovirals.
- **HIV-associated neurocognitive disorder** (HIV encephalopathy, formerly the AIDS dementia complex) is a direct effect of the virus, causing a subcortical dementia of cognitive slowing, apathy and poor coordination that improves with antiretroviral therapy.

## Meningitis

- **Cryptococcal meningitis** (Cryptococcus neoformans) is the classic fungal meningitis of advanced HIV, presenting subacutely with headache, fever and markedly raised intracranial pressure; diagnose with India ink and the cryptococcal antigen (CrAg), and treat with amphotericin B and flucytosine then fluconazole, with repeated lumbar punctures to control pressure.
- Tuberculous meningitis and, at very low CD4 counts, CMV encephalitis and polyradiculitis also occur. (The meningitis subtypes are covered as separate Tracker conditions.)

## Other neurological disease

A **distal sensory peripheral neuropathy** (from HIV itself or from older antiretrovirals) and a **vacuolar myelopathy** (a dorsal-column spastic paraparesis) round out the picture.

## Ophthalmic disease

- **CMV retinitis** is the commonest sight-threatening eye disease in advanced HIV (CD4 below about 50). It causes painless floaters and progressive visual-field loss, with a characteristic 'pizza-pie' retina (haemorrhages and exudates along the vessels) on fundoscopy; treat urgently with ganciclovir or valganciclovir and restore immunity.
- **HIV retinopathy** causes asymptomatic cotton-wool spots from microvascular damage and is the commonest retinal finding overall.
- **Herpes zoster ophthalmicus** (shingles of the first trigeminal division, with a vesicle on the nose tip — Hutchinson's sign) and **acute retinal necrosis** can threaten sight.
- **Ocular toxoplasmosis** causes a chorioretinitis, and **Kaposi's sarcoma** may appear on the eyelid or conjunctiva.

> High-yield: let the CD4 count steer you. Toxoplasmosis, PML and cryptococcal meningitis cluster below about 100; CMV (retinitis, encephalitis) and primary CNS lymphoma below 50. The two ring-enhancing-lesion differentials are toxoplasmosis (usually multiple lesions, responds to empirical treatment) and EBV-driven primary CNS lymphoma (often single, no response). PML is JC virus destroying oligodendrocytes, and CMV retinitis is the classic 'pizza-pie' sight-threatening eye disease. Immune recovery with antiretroviral therapy underpins all of it.`,
        },
        {
          id: "hiv_resp",
          name: "Respiratory disease in HIV",
          content: `## Respiratory disease in HIV

The lungs are one of the commonest sites of infection in HIV, and respiratory symptoms are a frequent reason for presentation. Unlike much of the gastrointestinal and neurological disease of advanced HIV, some respiratory infections — **bacterial pneumonia** and **tuberculosis** — occur at any CD4 count and may be the first clue to an undiagnosed HIV infection. The opportunistic infections then track the falling CD4 count, with **Pneumocystis pneumonia** the classic disease once it drops below 200 cells per microlitre. As always, the foundation of treatment, alongside the specific antimicrobial, is to start or optimise antiretroviral therapy.

## Bacterial pneumonia

Community-acquired bacterial pneumonia — most often **Streptococcus pneumoniae** or **Haemophilus influenzae** — is the commonest respiratory infection in HIV and occurs at any CD4 count, more frequently and more often recurrently or with bacteraemia than in immunocompetent people. It is treated conventionally, and recurrent bacterial pneumonia (two or more episodes in a year) is itself AIDS-defining.

## Pneumocystis pneumonia (PCP)

Pneumocystis pneumonia, caused by the fungus **Pneumocystis jirovecii**, is the classic AIDS-defining respiratory infection and appears once the CD4 count falls below about 200. The picture is high-yield:

- **Presentation:** a subacute onset over days to weeks of a dry cough, fever and progressive exertional breathlessness, with **desaturation on exertion** the characteristic sign.
- **Investigations:** the chest X-ray classically shows bilateral perihilar ('bat's wing') interstitial shadowing but can be near-normal early; a raised serum lactate dehydrogenase (LDH) is supportive; the diagnosis is confirmed on induced sputum or bronchoalveolar lavage with immunofluorescence or silver staining (the organism cannot be cultured).
- **Treatment:** high-dose **co-trimoxazole** for 21 days, **adding corticosteroids if there is hypoxia** (oxygen saturation under 92% or arterial oxygen below 9.3 kPa), which reduces mortality.
- **Prophylaxis:** co-trimoxazole is given to prevent PCP once the CD4 count falls below 200, and stopped once immunity recovers on treatment.

## Tuberculosis

Tuberculosis is the commonest HIV-associated opportunistic infection worldwide and an AIDS-defining illness, and HIV is the strongest risk factor for reactivating latent tuberculosis. It can occur at any CD4 count, but as immunity falls the presentation becomes **atypical** — more extrapulmonary and disseminated disease, lower-zone or normal chest X-rays, and a higher chance of a negative sputum smear. Treatment uses standard anti-tuberculous therapy, with care over drug interactions (rifampicin and antiretrovirals) and the timing of antiretroviral therapy to limit immune reconstitution inflammatory syndrome (IRIS).

## Other opportunistic and tumour-related disease

- **Fungal:** Cryptococcus and Aspergillus can cause pneumonia in advanced disease, as can endemic mycoses (such as histoplasmosis) in the right geography.
- **Mycobacterium avium complex (MAC)** and **cytomegalovirus (CMV)** cause disseminated disease that can involve the lungs at very low CD4 counts (below 50), though both more often affect other organs.
- **Pulmonary Kaposi's sarcoma** (human herpesvirus 8) produces nodules, infiltrates and bloody pleural effusions, and **lymphoma** can involve the chest. People with HIV also carry a higher long-term risk of chronic obstructive pulmonary disease and lung cancer.

> High-yield: bacterial pneumonia and tuberculosis occur at any CD4 count and may be the first sign of HIV, whereas Pneumocystis pneumonia (PCP) appears below 200. For PCP remember the triad of exertional desaturation, a 'bat's wing' chest X-ray and a raised LDH, treated with co-trimoxazole plus steroids if hypoxic, with co-trimoxazole prophylaxis below a CD4 of 200. Tuberculosis becomes more extrapulmonary and atypical as the CD4 count falls. Immune recovery with antiretroviral therapy underpins all of it.`,
        },
        {
          id: "hiv_skin",
          name: "Skin disorders and malignancy in HIV",
          content: `## Skin disorders and malignancy in HIV

The skin is one of the most visible windows onto HIV: many common dermatoses are more frequent, more severe and more atypical as immunity falls, several infections are essentially specific to advanced disease, and HIV drives a number of cancers — some of them AIDS-defining. A new, severe or unusually extensive skin problem can be the first clue to an undiagnosed HIV infection. As elsewhere, the foundation of treatment is to start or optimise antiretroviral therapy so that immunity recovers.

## Infective skin disease

- **Herpes simplex and herpes zoster** are more severe and prolonged: chronic ulcerating herpes simplex, and shingles that may be **multidermatomal, recurrent or disseminated** and can strike younger patients.
- **Molluscum contagiosum** (a poxvirus) becomes widespread, with giant and facial lesions that are a useful marker of a low CD4 count.
- **Human papillomavirus** causes extensive, recalcitrant warts (and the malignancies below).
- **Bacillary angiomatosis** (Bartonella) produces vascular red-purple papules that **mimic Kaposi's sarcoma** but respond to erythromycin or doxycycline.
- **Fungal** disease is extensive — widespread tinea and oral or skin candidiasis — and **crusted (Norwegian) scabies** reflects an uncontrolled mite hyperinfestation.

## Inflammatory skin disease

- **Seborrhoeic dermatitis** is the commonest skin disorder in HIV — florid, and often the earliest cutaneous sign.
- **Psoriasis** can be severe or explosive, and **eosinophilic folliculitis** causes intensely itchy papules.
- **Drug reactions** are common (classically to co-trimoxazole) and carry a higher risk of severe reactions such as Stevens-Johnson syndrome.

## AIDS-defining malignancies

- **Kaposi's sarcoma** is the commonest HIV-associated tumour, caused by **human herpesvirus 8 (HHV-8)**. It produces purple-brown plaques and nodules on the skin and palate, and can involve the gut and lungs; treatment is antiretroviral therapy, with chemotherapy or interferon for extensive disease.
- **Non-Hodgkin lymphoma** — high-grade B-cell lymphomas, including **primary CNS lymphoma** (Epstein-Barr-virus-driven) and Burkitt lymphoma.
- **Invasive cervical cancer** (driven by oncogenic human papillomavirus) in women.

## Other HIV-associated cancers

People with HIV also have a raised risk of cancers that are not AIDS-defining: **anal squamous cell carcinoma** (oncogenic HPV types 16 and 18, particularly in men who have sex with men, prompting anal screening), **Hodgkin lymphoma**, **hepatocellular carcinoma** (with hepatitis B or C co-infection) and **lung cancer**.

> High-yield: Kaposi's sarcoma is caused by HHV-8 and is the commonest HIV tumour; the three AIDS-defining cancers are Kaposi's sarcoma, non-Hodgkin lymphoma and invasive cervical cancer, while anal squamous cell carcinoma (also HPV) is the classic non-AIDS-defining one. Molluscum, warts and zoster are more extensive and severe; seborrhoeic dermatitis is the commonest and often earliest skin sign; and bacillary angiomatosis (Bartonella) mimics Kaposi's sarcoma but is curable with antibiotics. Immune recovery with antiretroviral therapy underpins all of it.`,
        },
        {
          id: "hai_infection_control",
          name: "Hospital-acquired infections & infection control",
          content: `## Hospital-acquired infections and infection control

A **hospital-acquired infection (HAI)**, or nosocomial infection, is one that is neither present nor incubating when a patient is admitted — conventionally an infection arising **more than 48 hours after admission**. HAIs are a major cause of avoidable harm: they prolong admissions, increase mortality and drive antimicrobial resistance, and most are preventable. The subject has two halves — knowing the common infections, and knowing how to prevent them.

## The common hospital-acquired infections

| Infection | Typical organisms | Key points |
|---|---|---|
| Catheter-associated urinary tract infection (CAUTI) | Coliforms (E. coli), Pseudomonas | The commonest HAI; avoid unnecessary catheters and remove them early; do not dipstick catheter urine |
| Hospital-acquired and ventilator-associated pneumonia (HAP/VAP) | Gram-negatives, Pseudomonas, MRSA | Pneumonia more than 48 hours after admission (or after ventilation); broad-spectrum antibiotics (e.g. co-amoxiclav and gentamicin, or piperacillin-tazobactam) |
| Surgical site infection (SSI) | Staphylococcus aureus (MSSA and MRSA), E. coli, Pseudomonas | Reduced by antibiotic prophylaxis, asepsis and good glycaemic control |
| Clostridioides difficile colitis | C. difficile (toxin-producing) | Antibiotic-associated; oral vancomycin; spores need soap-and-water hand washing and isolation |
| Central line-associated bloodstream infection (CLABSI) | Coagulase-negative staphylococci, S. aureus | From intravascular devices; prevented by insertion and maintenance care bundles |
| MRSA colonisation and infection | Meticillin-resistant S. aureus | Screen and decolonise; manage with contact precautions |

## Antimicrobial resistance

The resistant organisms that define the hospital environment are **MRSA**, **C. difficile**, **vancomycin-resistant enterococci (VRE)** and resistant Gram-negatives (**extended-spectrum beta-lactamase** producers and **carbapenemase-producing Enterobacterales**). Bacteria resist antibiotics by four mechanisms (mnemonic **BEAT**): **B**ypassing the targeted pathway, producing **E**nzymes that inactivate the drug (such as beta-lactamases), reducing **A**ccumulation of the drug, and modifying its **T**arget.

## Breaking the chain of infection

Infection needs a chain — a pathogen, a reservoir, a route of transmission and a susceptible host — and prevention works by breaking any link. The main routes are **contact** (the commonest, e.g. MRSA and C. difficile), **droplet** (e.g. influenza and meningococcus) and **airborne** (e.g. tuberculosis, measles and varicella).

## Infection prevention and control

- **Standard precautions for every patient:** above all **hand hygiene** — the single most effective measure — following the World Health Organization's 'five moments', using alcohol gel but **soap and water for C. difficile and norovirus** (whose spores resist gel); plus personal protective equipment (PPE), aseptic technique, safe sharps handling and environmental cleaning.
- **Transmission-based (isolation) precautions:** a side room with **contact** precautions for MRSA and C. difficile, **droplet** precautions for influenza and meningococcus, and a negative-pressure room with **airborne** precautions for tuberculosis, measles and varicella.
- **Care bundles** for urinary catheters, central lines and ventilators to prevent device-related infection.
- **Antimicrobial stewardship** — the narrowest effective agent, reviewed at 48–72 hours — limits resistance and C. difficile.
- **Surveillance, screening and reporting:** mandatory reporting of MRSA bacteraemia and C. difficile, admission screening, staff vaccination and outbreak management.

> High-yield: an HAI arises more than 48 hours after admission, and catheter-associated urinary tract infection is the commonest. Hand hygiene is the most effective single measure — but use soap and water, not alcohol gel, for C. difficile and norovirus. The 'four Cs' (clindamycin, cephalosporins, co-amoxiclav, ciprofloxacin) drive C. difficile. Isolation precautions are contact (MRSA, C. difficile), droplet (influenza, meningococcus) and airborne (tuberculosis, measles, varicella — negative-pressure room).`,
        },
        {
          id: "viral_antivirals",
          name: "Viral infections & antivirals",
          content: `## Viral infections and antivirals

Viruses replicate inside host cells using the cell's own machinery, which leaves few targets unique to the virus — so most viral illnesses are managed supportively, and the antivirals that do exist tend to hit a specific viral enzyme. Knowing a handful of drug classes, and which virus each one treats, covers most of what is asked.

## A framework for the viruses

- Viruses are grouped by their genome (DNA or RNA) and by whether they have an envelope. **RNA viruses mutate quickly**: influenza shows **antigenic drift** (gradual point mutations, which drive the annual vaccine update) and, less often, **antigenic shift** (reassortment of whole genome segments, which can trigger a pandemic).
- The **herpesviruses** — herpes simplex virus (HSV), varicella-zoster virus (VZV), cytomegalovirus (CMV), Epstein-Barr virus (EBV) and human herpesvirus 8 — establish **lifelong latency** and can reactivate, especially when cell-mediated immunity falls (advanced HIV, transplantation, chemotherapy). This is why they dominate opportunistic infection.

## Antivirals by target

| Drug(s) | Class / mechanism | Main use | Key point |
|---|---|---|---|
| Aciclovir, valaciclovir | Guanosine analogue inhibiting viral DNA polymerase | HSV and VZV | Activated by viral thymidine kinase (hence selective); resistance arises through thymidine kinase mutation |
| Ganciclovir, valganciclovir | Guanosine analogue inhibiting DNA polymerase | CMV | Bone-marrow toxicity limits its use |
| Foscarnet, cidofovir | Direct DNA polymerase inhibitors | Resistant CMV and HSV | Nephrotoxic; second-line |
| Oseltamivir, zanamivir | Neuraminidase inhibitors | Influenza A and B | Best given within 48 hours, for at-risk groups |
| Remdesivir, molnupiravir | RNA polymerase inhibitors | COVID-19 | Paxlovid (nirmatrelvir-ritonavir) is an oral protease inhibitor |
| Ribavirin | Guanosine analogue | Severe respiratory syncytial virus (RSV), hepatitis E | Inhaled for RSV |
| Tenofovir, entecavir | Nucleos(t)ide analogues | Hepatitis B | Long-term suppression rather than cure |
| -previr, -asvir, -buvir | Direct-acting antivirals (protease, NS5A, NS5B polymerase) | Hepatitis C | Oral combinations now cure most patients |
| NRTIs, NNRTI, integrase and protease inhibitors | Antiretrovirals | HIV | Lifelong combination therapy (commonly two NRTIs plus an integrase inhibitor) |

## High-yield specifics

- **Aciclovir** must be activated by the virus's own thymidine kinase, so it concentrates in infected cells — the basis of both its selectivity and the resistance seen with thymidine kinase mutations.
- **Influenza** is treated with a neuraminidase inhibitor (oseltamivir); the older M2-channel blocker amantadine is no longer used because of resistance.
- **COVID-19**: dexamethasone for those needing oxygen, plus an antiviral (remdesivir, or oral nirmatrelvir-ritonavir) and tocilizumab (an interleukin-6 receptor blocker) in severe disease.
- **Hepatitis C** is now curable with an 8 to 12 week oral course of direct-acting antivirals, whereas **hepatitis B** is suppressed (not cured) with tenofovir or entecavir.
- **HIV** is controlled with lifelong antiretroviral therapy; the key classes are nucleoside reverse transcriptase inhibitors (NRTIs, e.g. tenofovir, lamivudine), the non-nucleoside type (NNRTI, e.g. efavirenz — avoid in pregnancy), integrase inhibitors (dolutegravir) and protease inhibitors (ritonavir).

> Suffix shortcuts: herpesvirus drugs end in **-ciclovir** (aciclovir for HSV/VZV, ganciclovir for CMV); the hepatitis C direct-acting antivirals sort by suffix — **-previr** (protease), **-asvir** (NS5A), **-buvir** (polymerase); influenza means **neuraminidase inhibitors** (oseltamivir); and aciclovir's dependence on viral thymidine kinase is why it spares uninfected cells.`,
        },
        {
          id: "tuberculosis",
          name: "Tuberculosis",
          content: `## Tuberculosis

Tuberculosis (TB) is a chronic infection with **Mycobacterium tuberculosis**, an acid-fast bacillus spread by respiratory droplets. It is a great mimic: although the lung is the usual site, TB can seed almost any organ, especially as immunity falls. Risk factors include birth or travel in an endemic area (South Asia, sub-Saharan Africa, Eastern Europe), HIV, immunosuppression, homelessness and drug use.

## Primary infection, latency and reactivation

- Inhaled bacilli are walled off by the immune system into a **granuloma — the Ghon focus** — which with its draining hilar nodes forms the **primary (Ghon) complex**. The histological hallmark is the **caseating granuloma**.
- In most people this contains the infection as **latent TB**: asymptomatic, non-infectious, and detectable only immunologically.
- When cell-mediated immunity wanes (HIV, immunosuppressants, ageing, malnutrition), the infection **reactivates** into active disease, classically in the **lung apices** (which are well oxygenated). Less often, primary infection progresses straight to active disease.

## Pulmonary TB

The commonest form: a chronic cough lasting more than three weeks, haemoptysis, and the constitutional triad of **fever, drenching night sweats and weight loss**. The chest X-ray shows **upper-lobe cavitation, hilar lymphadenopathy and patchy consolidation**.

## Extrapulmonary and disseminated TB

TB can involve almost any system, and these forms are commoner in the immunocompromised:

| System | Manifestation | Key features |
|---|---|---|
| Central nervous system | Tuberculous meningitis, tuberculoma | Subacute headache, meningism, confusion and cranial nerve palsies; a basal meningitis that can cause hydrocephalus |
| Spine and bone | Pott's disease (spinal TB) | Back pain, vertebral collapse (gibbus deformity), discitis and a paravertebral or psoas abscess |
| Lymph nodes | Tuberculous lymphadenitis (scrofula) | Painless, firm, often cervical nodes that may break down and discharge |
| Disseminated | Miliary TB | Haematogenous spread giving innumerable 'millet seed' nodules across the chest X-ray; the patient is very unwell |
| Genitourinary | Renal and genital TB | Sterile pyuria and haematuria; epididymo-orchitis and infertility |
| Abdomen | Peritoneal and intestinal TB | Ascites and abdominal pain; can closely mimic Crohn's disease |
| Pericardium | Tuberculous pericarditis | A pericardial effusion that can progress to constrictive pericarditis |
| Adrenal glands | Adrenal TB | A classic worldwide cause of Addison's disease |
| Skin | Lupus vulgaris; erythema nodosum (a reactive sign) | Persistent skin plaques; tender shin nodules |

## Investigations

- **Active pulmonary disease:** three **sputum samples** for **Ziehl-Neelsen staining** (acid-fast bacilli) and **culture on Lowenstein-Jensen medium** — the gold standard, though it takes up to six weeks; bronchoalveolar lavage if no sputum is produced; **nucleic acid amplification (PCR)** for a rapid diagnosis and to detect rifampicin resistance; and a chest X-ray. The auramine stain is a sensitive screen but is not diagnostic.
- **Latent infection:** the **tuberculin skin test (Mantoux)** turns positive in active TB, latent TB *and* after previous BCG vaccination, whereas the **interferon-gamma release assay (IGRA)** is positive in active and latent TB but **not after BCG** — so IGRA is preferred for diagnosing latent infection.
- **Extrapulmonary disease** needs sampling of the affected site (lumbar puncture for meningitis, biopsy of a lymph node, and so on).

## Treatment

- The standard regimen is **RIPE** — **rifampicin, isoniazid, pyrazinamide and ethambutol for 2 months**, then **rifampicin and isoniazid for a further 4 months** (six months in total). CNS and bone disease are treated for longer (up to 12 months), with **adjunctive corticosteroids in TB meningitis and pericarditis**.
- Know the drug toxicities: **rifampicin** — orange secretions and potent enzyme induction; **isoniazid** — peripheral neuropathy, prevented with **pyridoxine (vitamin B6)**; **pyrazinamide** — hepatotoxicity; **ethambutol** — optic neuritis (check colour vision).
- **Latent TB** is treated with isoniazid (plus pyridoxine), or rifampicin with isoniazid, to prevent reactivation.
- **Public health:** TB is **notifiable**; isolate suspected pulmonary cases in a **negative-pressure room**; trace and screen contacts; and use **directly observed therapy** where adherence is uncertain. Multi-drug-resistant TB needs second-line agents (quinolones, linezolid, amikacin). The **BCG vaccine** protects at-risk groups.

> High-yield: latent TB hides in a Ghon focus and reactivates when immunity falls; **caseating granulomas** are the hallmark. After BCG, use the **IGRA, not the tuberculin test**, to diagnose latent TB. Treatment is **RIPE for 2 months then rifampicin and isoniazid for 4** — isoniazid causes neuropathy (give B6), ethambutol optic neuritis, pyrazinamide hepatotoxicity, rifampicin orange secretions. Do not forget the extrapulmonary forms: **Pott's** (spine), **scrofula** (nodes), **miliary** (disseminated), and TB as a cause of **Addison's disease**.`,
        },
      ],
    },
    {
      id: "haematology", name: "Haematology", icon: "🩸",
      topics: [
        {
          id: "thrombocytopenia",
          name: "Thrombocytopenia",
          content: `## Thrombocytopenia

Thrombocytopenia is a platelet count below the normal range of roughly 150 to 400 × 10⁹/L. It produces a **platelet-type bleeding pattern** — superficial bleeding into skin and mucosa (petechiae, purpura, easy bruising, nosebleeds, bleeding gums and heavy periods) that begins immediately after injury — unlike the delayed, deep bleeding into joints and muscles of clotting-factor disorders. The task is to find the mechanism, because the causes range from benign to immediately life-threatening.

First exclude **pseudothrombocytopenia**: platelets can clump in the EDTA sample tube and read as a falsely low count, so an unexpected low result in a well patient should be repeated on a citrate sample with the film checked for clumps.

## How dangerous is it?

Bleeding risk tracks the count. Spontaneous bleeding is unusual until the platelets fall below about 20 to 30, most surgery needs a count above 50, and high-risk procedures (neurosurgery, neuraxial anaesthesia) need above 80 to 100. The risk of spontaneous intracranial bleeding rises steeply below 10.

## Causes by mechanism

| Mechanism | Examples |
|---|---|
| Reduced production (marrow) | Marrow failure or infiltration (leukaemia, aplastic anaemia, myelodysplasia, myeloma), B12 or folate deficiency, chemotherapy and other drugs, alcohol, viral suppression |
| Increased destruction (immune) | Immune thrombocytopenia (ITP); drug-induced, especially heparin (HIT); SLE, chronic lymphocytic leukaemia, HIV and hepatitis |
| Increased consumption | Disseminated intravascular coagulation (DIC); the microangiopathies — thrombotic thrombocytopenic purpura (TTP) and haemolytic uraemic syndrome (HUS) |
| Sequestration | Hypersplenism — an enlarged spleen pooling platelets, for example in portal hypertension |
| Dilution and other | Massive transfusion; gestational thrombocytopenia (common and benign in late pregnancy) |

## The conditions to know

**Immune thrombocytopenia (ITP)** is immune-mediated platelet destruction giving an isolated low count in an otherwise well patient — a diagnosis of exclusion. In children it is typically an abrupt, self-limiting illness after a viral infection; in adults it tends to be chronic and commoner in women, sometimes with associated autoimmune disease, chronic lymphocytic leukaemia, HIV or hepatitis. Treat only for bleeding or a very low count: first-line corticosteroids or intravenous immunoglobulin (IVIg), with thrombopoietin receptor agonists or splenectomy as later options.

**The microangiopathies (TTP and HUS)** combine a microangiopathic haemolytic anaemia (MAHA — red cells sheared into fragments called schistocytes as they pass through small-vessel thrombi) with thrombocytopenia from platelet consumption.

- **TTP** is caused by deficiency of the enzyme **ADAMTS13** (usually autoimmune), so ultra-large von Willebrand factor multimers act like cheese-wire and shred red cells. Recall the **pentad**: MAHA, thrombocytopenia, fever, renal impairment and neurological signs. It is a haematological emergency needing **urgent plasma exchange**, and platelet transfusion must be avoided because it fuels the thrombosis.
- **HUS** is usually caused by Shiga-toxin-producing Escherichia coli O157, classically in a child after bloody diarrhoea. The triad is MAHA, thrombocytopenia and acute kidney injury, with renal failure dominating and (unlike TTP) little neurological involvement; treatment is mainly supportive.

**Disseminated intravascular coagulation (DIC)** is widespread activation of coagulation (triggered by sepsis, malignancy, trauma or obstetric emergencies) that consumes both platelets and clotting factors, causing simultaneous clotting and bleeding. It shows a low platelet count and low fibrinogen with a prolonged prothrombin time and a raised D-dimer; treat the cause and replace platelets, fresh frozen plasma and cryoprecipitate.

**Heparin-induced thrombocytopenia (HIT)** is an immune reaction about 5 to 10 days into heparin treatment in which the platelet count falls by more than half and, paradoxically, the patient clots rather than bleeds. Stop all heparin and switch to an alternative anticoagulant.

## Investigations

- Full blood count and **blood film** to confirm the count, exclude clumping, and look for schistocytes (microangiopathy), blasts (leukaemia) or other clues.
- Coagulation screen with fibrinogen and D-dimer (for DIC), and markers of haemolysis (reticulocytes, lactate dehydrogenase, bilirubin, haptoglobin) if a microangiopathy is suspected.
- Urea and electrolytes (renal involvement), liver function, and B12 and folate.
- Autoimmune and viral screen (HIV, hepatitis), with bone marrow examination if reduced production is suspected.

> High-yield: separate the dangerous consumptive causes from benign ITP. Low platelets with schistocytes and haemolysis mean a microangiopathy — TTP (with fever and neurology, from deficient ADAMTS13) or HUS (with renal failure after E. coli diarrhoea). TTP needs emergency plasma exchange and **never** a platelet transfusion. A platelet count falling 5 to 10 days after starting heparin is HIT until proven otherwise — stop the heparin.`,
        },
        {
          id: "anaemia_overview",
          name: "Anaemia: a diagnostic framework",
          content: `## Anaemia: a diagnostic framework

Anaemia is a haemoglobin concentration below the reference range for age and sex (men below 135 g/L, women below 115 g/L). It reflects reduced red-cell production, increased loss or destruction, or dilution by an expanded plasma volume (as in pregnancy).

Typical symptoms are fatigue, breathlessness, faintness, palpitations and headache. Signs include pallor and, once the haemoglobin falls below about 80 g/L, a hyperdynamic circulation with tachycardia and a flow murmur, and ultimately high-output heart failure.

## Classify by red-cell size (MCV)

The mean corpuscular volume (MCV) is the first branch point.

| Microcytic (low MCV) | Normocytic (normal MCV) | Macrocytic (high MCV) |
|---|---|---|
| Iron-deficiency anaemia | Acute blood loss | B12 or folate deficiency |
| Anaemia of chronic disease | Anaemia of chronic disease | Alcohol and liver disease |
| Thalassaemia | Bone-marrow failure, renal failure | Hypothyroidism |
| Sideroblastic anaemia | Haemolysis, reticulocytosis | Myelodysplasia, reticulocytosis |

Anaemia of chronic disease can be either microcytic or normocytic. A brisk reticulocytosis (as in haemolysis or acute bleeding) raises the MCV because reticulocytes are large.

## Iron studies

Interpreting iron studies is high-yield.

| Condition | Serum iron | TIBC | Ferritin |
|---|---|---|---|
| Iron deficiency | Low | High | Low |
| Anaemia of chronic disease | Low | Low | High |
| Chronic haemolysis | High | Low | High |
| Haemochromatosis | High | Low or normal | High |
| Sideroblastic anaemia | High | Normal | High |

Total iron-binding capacity (TIBC) rises when stores are low. The transferrin saturation (serum iron divided by TIBC) is the most reliable single marker: below 20% indicates iron deficiency. Ferritin is an acute-phase protein and rises with any inflammation, so always check a C-reactive protein alongside it — in an inflammatory state the transferrin saturation is more informative.

## Iron-deficiency anaemia

The film is microcytic and hypochromic with anisocytosis (varying size), poikilocytosis (varying shape) and pencil cells. Signs include koilonychia (spoon nails), atrophic glossitis, angular cheilosis and, rarely, post-cricoid webs (Plummer-Vinson syndrome).

The cause is blood loss until proven otherwise — menorrhagia in younger women, and gastrointestinal loss (peptic ulceration, colorectal cancer) in older adults. Under NICE guidance, unexplained iron deficiency warrants upper gastrointestinal endoscopy and colonoscopy, a urine dip and coeliac serology; anyone aged 60 or over should be referred on the two-week-wait colorectal cancer pathway.

Correct the cause and replace iron. Oral iron is first line, and giving it on **alternate days** is almost as effective and better tolerated (fewer of the nausea, constipation and black stools) because it avoids the hepcidin surge that blocks absorption. Intravenous iron is reserved for failed or poorly absorbed oral iron, or when a rapid rise is needed before surgery. In active sepsis, withhold iron (it is poorly absorbed and can fuel infection) and transfuse if necessary.

## Anaemia of chronic disease

Chronic infection (tuberculosis, osteomyelitis), inflammation (rheumatoid arthritis, vasculitis) and malignancy drive a cytokine-mediated anaemia. Interleukin-6 stimulates hepatic **hepcidin**, which traps iron in macrophages and blocks gut absorption, while cytokines blunt erythropoietin. Ferritin is therefore high or normal with a low serum iron — the mirror image of iron deficiency. In chronic kidney disease the mechanism is instead erythropoietin deficiency, treated with an erythropoiesis-stimulating agent.

## Sideroblastic anaemia

Ineffective erythropoiesis loads iron into the mitochondria of red-cell precursors, producing ring sideroblasts in the marrow and systemic iron overload. Causes include myelodysplasia, chemotherapy, irradiation, alcohol, lead and anti-tuberculous drugs. Treat the cause and consider pyridoxine (vitamin B6).`,
        },
        {
          id: "macrocytic_anaemia",
          name: "Macrocytic anaemia: B12 & folate",
          content: `## Macrocytic anaemia: B12 and folate

A raised mean corpuscular volume (MCV) is either megaloblastic (a defect in DNA synthesis) or non-megaloblastic.

- **Megaloblastic**: vitamin B12 deficiency, folate deficiency, or cytotoxic drugs. The film shows hypersegmented neutrophils (more than five lobes) and oval macrocytes; the marrow shows megaloblasts — precursors with an immature nucleus but mature cytoplasm, because B12 and folate are needed for nuclear maturation.
- **Non-megaloblastic**: alcohol (the commonest cause of macrocytosis without anaemia), reticulocytosis from haemolysis, liver disease, hypothyroidism and pregnancy.
- **Marrow disease**: myelodysplasia, myeloma and aplastic anaemia.

## Vitamin B12

Vitamin B12 comes from meat and dairy and is stored in large amounts in the liver, so deficiency develops slowly. It is absorbed in the terminal ileum bound to intrinsic factor, which is made by gastric parietal cells. Deficiency arises from a vegan diet, loss of intrinsic factor (pernicious anaemia, gastrectomy), terminal ileal disease (Crohn's disease, ileal resection, coeliac disease) or nitrous oxide misuse.

The distinctive feature is neurological involvement: paraesthesiae, a peripheral neuropathy with early loss of vibration sense and proprioception, absent ankle reflexes and, untreated, subacute combined degeneration of the spinal cord. There may also be glossitis and neuropsychiatric change.

**Pernicious anaemia** is the commonest cause in Western countries — an autoimmune atrophic gastritis producing achlorhydria and loss of intrinsic factor. Test for intrinsic-factor antibodies (specific but only around half sensitive) and parietal-cell antibodies (sensitive but less specific). Treat with intramuscular hydroxocobalamin, loading over two weeks then three-monthly for life when the cause is autoimmune.

## Folate

Folate comes from green vegetables and is stored only in small amounts, so deficiency develops within weeks. Causes are poor diet, increased demand (pregnancy, haemolysis, malignancy), malabsorption (coeliac disease) and drugs (alcohol, phenytoin, methotrexate, trimethoprim). Treat with oral folic acid.

> Always check and replace B12 before giving folic acid. Correcting folate alone in a B12-deficient patient can precipitate or worsen subacute combined degeneration of the spinal cord.`,
        },
        {
          id: "haemolytic_anaemias",
          name: "Haemolytic anaemias",
          content: `## Haemolytic anaemias

Haemolysis is destruction of red cells before their normal 120-day lifespan. The marrow compensates by increasing output, so a **reticulocytosis** is the hallmark, with a raised unconjugated bilirubin, raised lactate dehydrogenase (LDH) and raised urobilinogen. Chronic haemolysis brings pigmented gallstones and susceptibility to an aplastic crisis if parvovirus B19 shuts red-cell production down.

| Intravascular haemolysis | Extravascular haemolysis |
|---|---|
| Raised free plasma haemoglobin | Occurs in the spleen and liver |
| Low haptoglobin (it mops up free haemoglobin) | Splenomegaly |
| Haemoglobinuria (dark urine) | Pigmented gallstones |

## Inherited causes

- **Hereditary spherocytosis** is autosomal dominant (a spectrin or ankyrin membrane defect). The film shows spherocytes, osmotic fragility is increased and the eosin-5-maleimide (EMA) binding test is diagnostic; the direct antiglobulin (Coombs) test is negative because it is not antibody-mediated. Treat with folic acid, and splenectomy in more severe cases.
- **Glucose-6-phosphate dehydrogenase (G6PD) deficiency** is X-linked and commonest in men of African, Mediterranean or Middle-Eastern descent. Oxidative stress — fava beans, infection, or drugs such as primaquine, dapsone, sulfonamides and nitrofurantoin — triggers acute haemolysis with Heinz bodies and bite cells on the film. Management is to avoid triggers.
- **Pyruvate kinase deficiency** is autosomal recessive and causes chronic haemolysis.

## Acquired causes

Autoimmune haemolytic anaemia (AIHA) is Coombs (direct antiglobulin test) positive and is split by the temperature at which the antibody binds.

| | Warm AIHA | Cold agglutinin disease |
|---|---|---|
| Antibody | IgG, binds at 37C | IgM, binds below 37C |
| Film | Spherocytes | Agglutination; Raynaud's, acrocyanosis |
| Causes | Idiopathic; lymphoma, chronic lymphocytic leukaemia, systemic lupus, methyldopa | Idiopathic; lymphoma, Epstein-Barr virus, mycoplasma |
| Treatment | Steroids, then rituximab or splenectomy | Treat the cause, keep warm |

Non-immune (Coombs-negative) causes include mechanical destruction by metal heart valves; **paroxysmal nocturnal haemoglobinuria**, an acquired loss of protective surface proteins (the glycosylphosphatidylinositol, GPI, anchor) causing complement-mediated intravascular haemolysis, morning haemoglobinuria and thrombosis, treated with the complement inhibitor eculizumab; and microangiopathic haemolytic anaemia, in which red cells are sheared through fibrin strands to give schistocytes. The microangiopathic causes (haemolytic uraemic syndrome, thrombotic thrombocytopenic purpura, disseminated intravascular coagulation, pre-eclampsia) are covered in the **Thrombocytopenia** topic.`,
        },
        {
          id: "haemoglobinopathies",
          name: "Haemoglobinopathies: sickle cell & thalassaemia",
          content: `## Haemoglobinopathies: sickle cell and thalassaemia

Adult haemoglobin is four globin chains around a haem group. Most is haemoglobin A (two alpha and two beta chains); small amounts are haemoglobin A2 (two alpha, two delta) and fetal haemoglobin F (two alpha, two gamma), which predominates before six months of age. Sickle cell disease and beta thalassaemia are disorders of the beta chain; alpha thalassaemia is caused by deletion of alpha-chain genes.

## Sickle cell disease

Sickle cell disease is autosomal recessive: a single base change (GAG to GTG) substitutes valine for glutamic acid at codon 6 of the beta chain, producing haemoglobin S. Homozygotes (HbSS) have sickle cell anaemia; heterozygotes (HbAS, sickle cell trait) are usually asymptomatic except under extreme stress. Because it depends on the switch away from fetal haemoglobin, disease appears from three to six months of age. Deoxygenation makes haemoglobin S polymerise, and the rigid sickled cells both haemolyse and occlude small vessels.

- **Haemolysis**: chronic anaemia, splenomegaly in children, folate deficiency, pigmented gallstones and aplastic crises triggered by parvovirus B19.
- **Vaso-occlusion**: painful crises, stroke, acute chest syndrome, splenic sequestration, hyposplenism from autoinfarction (hence infection risk), renal papillary necrosis, retinopathy, priapism, dactylitis and avascular necrosis.

Diagnosis is by haemoglobin electrophoresis, with newborn screening (the Guthrie test) allowing early penicillin and pneumococcal prophylaxis.

Acute crises need prompt strong analgesia (often opioids), hydration, oxygen and treatment of any trigger; severe crises, especially acute chest syndrome, need exchange transfusion. Long-term, every patient should receive penicillin V, pneumococcal and Haemophilus vaccination, and folic acid. **Hydroxycarbamide** (hydroxyurea), which raises fetal haemoglobin, reduces crises and organ damage and is the mainstay disease-modifying drug. Regular exchange transfusions are used after stroke or recurrent severe crises, and allogeneic stem-cell transplantation can cure selected children.

> An emerging curative option is CRISPR gene therapy (exagamglogene autotemcel, Casgevy), approved in the UK from 2023.

## Thalassaemia

In thalassaemia, unbalanced globin synthesis leaves unmatched chains that precipitate, causing haemolysis and ineffective erythropoiesis.

**Beta thalassaemia** results from point mutations that reduce beta-chain synthesis, with a compensatory rise in haemoglobin A2 and F. Severity depends on genotype:

- **Minor (trait)**: an asymptomatic carrier with a mild microcytic picture and haemoglobin A2 above 3.5%. Often mistaken for iron deficiency, but ferritin is normal.
- **Intermedia**: moderate anaemia with splenomegaly and bony changes.
- **Major (both beta genes absent)**: severe transfusion-dependent anaemia from three to six months of age, with failure to thrive, hepatosplenomegaly from extramedullary haematopoiesis, and skull changes (bossing, a hair-on-end X-ray).

**Alpha thalassaemia** is caused by deletion of the four alpha genes: one or two deleted gives an asymptomatic trait; three deleted gives haemoglobin H disease (moderate anaemia); all four deleted gives haemoglobin Bart's hydrops fetalis, which is incompatible with life.

Transfusion-dependent patients need iron chelation to prevent overload of the heart, liver and endocrine organs — subcutaneous desferrioxamine or, increasingly, an oral agent such as deferasirox or deferiprone — alongside folic acid and monitoring for iron loading.`,
        },
        {
          id: "blood_films",
          name: "Peripheral blood film findings",
          content: `## Peripheral blood film findings

The blood film is a high-yield source of single-best-answer clues: a described cell often points straight to the diagnosis.

| Finding | Description | Associations |
|---|---|---|
| Target cells | Bull's-eye central pallor | Liver disease, hyposplenism, thalassaemia, iron deficiency |
| Spherocytes | Small, round, no central pallor | Hereditary spherocytosis, autoimmune haemolytic anaemia |
| Schistocytes | Sheared red-cell fragments | Microangiopathic haemolysis (DIC, HUS, TTP), metal heart valves |
| Howell-Jolly bodies | Nuclear remnants in red cells | Hyposplenism or post-splenectomy, coeliac disease |
| Heinz bodies | Denatured haemoglobin at the cell edge | G6PD deficiency, chronic liver disease |
| Basophilic stippling | Fine dots (residual RNA) | Lead poisoning, thalassaemia, megaloblastic anaemia |
| Pencil cells | Thin elongated cells | Iron-deficiency anaemia |
| Tear-drop cells | Teardrop-shaped red cells | Myelofibrosis, marrow infiltration |
| Rouleaux | Red cells stacked like coins | Chronic inflammation, myeloma, paraproteinaemia |
| Hypersegmented neutrophils | More than five nuclear lobes | B12 or folate deficiency |
| Leucoerythroblastic film | Nucleated red cells and myeloid precursors | Marrow infiltration (myelofibrosis, malignancy) |
| Smear (smudge) cells | Fragile lymphocytes ruptured on the slide | Chronic lymphocytic leukaemia |
| Auer rods | Pink-red cytoplasmic rods in blasts | Acute myeloid leukaemia |

- **Howell-Jolly bodies** are the classic sign of a non-functioning spleen — remember that hyposplenic patients need pneumococcal, meningococcal and Haemophilus vaccination and penicillin prophylaxis.
- **Rouleaux** with anaemia, bone pain and renal impairment should prompt a myeloma screen.`,
        },
        {
          id: "bleeding_disorders",
          name: "Haemostasis & bleeding disorders",
          content: `## Haemostasis and bleeding disorders

## The coagulation cascade in practice

Two laboratory tests map onto the cascade and are worth knowing cold:

- The **intrinsic pathway** (factors XII, XI, IX, VIII) is measured by the **activated partial thromboplastin time (APTT)** and is used to monitor unfractionated heparin.
- The **extrinsic pathway** (factor VII) is measured by the **prothrombin time (PT)**, reported as the international normalised ratio (INR), and is used to monitor warfarin.
- Both feed into the **common pathway** (factors X, V, II/thrombin and fibrinogen).

## Recognising the pattern

The site and timing of bleeding separate platelet or vascular problems from coagulation-factor problems.

| Platelet or vascular defect | Coagulation-factor defect |
|---|---|
| Superficial bleeding into skin and mucous membranes | Bleeding into deep tissues, muscles and joints |
| Bleeding immediately after injury | Delayed but severe bleeding after injury |
| Petechiae, easy bruising | Haemarthroses, large haematomas |

## Vascular defects

Easy bruising and bleeding with normal platelets and clotting. Causes include hereditary haemorrhagic telangiectasia (Osler-Weber-Rendu syndrome), Ehlers-Danlos syndrome, senile purpura, long-term steroids, and scurvy (perifollicular haemorrhages).

## Inherited coagulation disorders

- **Haemophilia A** is factor VIII deficiency — X-linked recessive, affecting about 1 in 10,000 males. It causes haemarthroses and deep bleeding, with a raised APTT, a normal PT and a low factor VIII assay. Severity tracks the factor level (severe below 1%). Avoid non-steroidal anti-inflammatory drugs and intramuscular injections; treat with factor VIII (prophylaxis in severe disease, on-demand for milder disease).
- **Haemophilia B** (Christmas disease) is factor IX deficiency — clinically identical, treated with factor IX concentrate.
- **Von Willebrand disease** is the commonest inherited bleeding disorder, usually autosomal dominant. Von Willebrand factor (VWF) both helps platelets stick and carries factor VIII, so patients get a mixed picture — mostly mucocutaneous bleeding but a raised APTT too. Type 1 is a partial quantitative deficiency, type 2 a functional defect, type 3 a near-complete absence (haemophilia-like). Treat bleeds with tranexamic acid and desmopressin (which releases stored VWF), or with VWF/factor VIII concentrate.

## Acquired coagulation disorders

- **Vitamin K deficiency** impairs factors II, VII, IX and X (and proteins C and S). Causes include warfarin, malabsorption, biliary obstruction and antibiotics. Treat with intravenous vitamin K, or fresh frozen plasma for acute haemorrhage.
- **Liver disease** reduces synthesis of most clotting factors and impairs platelet function, prolonging the PT and APTT — although advanced liver disease is paradoxically often prothrombotic.
- **Disseminated intravascular coagulation** consumes factors and platelets; it is covered with the microangiopathic disorders in the **Thrombocytopenia** topic.

## Interpreting the clotting screen

| Disorder | PT / INR | APTT | Platelets |
|---|---|---|---|
| Thrombocytopenia | Normal | Normal | Low |
| Haemophilia A or B | Normal | Raised | Normal |
| Von Willebrand disease | Normal | Normal or raised | Normal |
| Vitamin K deficiency / warfarin | Raised | Raised | Normal |
| Liver disease | Raised | Raised | Low or normal |
| Disseminated intravascular coagulation | Raised | Raised | Low |
| Heparin (unfractionated) | Normal or raised | Raised | Normal (low in HIT) |`,
        },
        {
          id: "vte_thrombophilia",
          name: "Venous thromboembolism & thrombophilia",
          content: `## Venous thromboembolism and thrombophilia

Venous thromboembolism (VTE) — deep vein thrombosis (DVT) and pulmonary embolism (PE) — arises through **Virchow's triad**: endothelial injury, venous stasis and hypercoagulability.

## Diagnosis

The two-level Wells score sets the pre-test probability. A DVT-likely score (2 or more) leads to a proximal-leg ultrasound; a PE-likely score (over 4) leads to a CT pulmonary angiogram. If the score is below the threshold, a negative D-dimer excludes VTE without imaging. (Detailed PE and DVT pathways are in the Tracker.)

## Thrombophilia

| Inherited | Acquired |
|---|---|
| Factor V Leiden (about 5% of white Europeans; resistance to activated protein C) | Antiphospholipid syndrome |
| Prothrombin G20210A gene mutation | Malignancy (especially pancreatic) |
| Protein C deficiency | Combined oral contraceptive pill, HRT, pregnancy |
| Protein S deficiency | Surgery, immobility, long-haul travel |
| Antithrombin III deficiency (highest relative risk) | Obesity, increasing age, previous VTE |

**Factor V Leiden** is by far the commonest inherited thrombophilia but carries only a modest (roughly fourfold) risk; **antithrombin III deficiency** is rare but confers the highest relative risk. **Antiphospholipid syndrome** (lupus anticoagulant, anticardiolipin and anti-beta-2-glycoprotein antibodies) causes both venous and arterial thrombosis and recurrent miscarriage, and paradoxically prolongs the APTT in the laboratory.

## Treatment

> Under NICE guidance (NG158), a **direct oral anticoagulant (apixaban or rivaroxaban) is first-line** for most confirmed DVT or PE. Anticoagulate for at least 3 months, then stop for clearly **provoked** VTE; for **unprovoked** VTE, continue **long-term**, weighing the risk of recurrence against bleeding risk.

- Low-molecular-weight heparin or a DOAC is still used for cancer-associated thrombosis and in pregnancy (heparin, as DOACs and warfarin are avoided).
- **Antiphospholipid syndrome** is an exception: warfarin is preferred over a DOAC, because rivaroxaban performed worse in trials of triple-positive disease.
- When warfarin is started, low-molecular-weight heparin is continued until the INR is therapeutic, because warfarin transiently lowers proteins C and S and is procoagulant for the first few days.

The drugs themselves — heparins, warfarin and the DOACs, with monitoring and reversal — are covered in the **Anticoagulants** topic.`,
        },
        {
          id: "anticoagulants",
          name: "Anticoagulants: heparin, warfarin & DOACs",
          content: `## Anticoagulants: heparin, warfarin and DOACs

## Heparin

Heparin potentiates antithrombin III, which inactivates thrombin and factors IX, X and XI.

- **Low-molecular-weight heparin** (for example enoxaparin, dalteparin) is given subcutaneously once daily and needs no monitoring, except that anti-Xa levels can be checked in late pregnancy or renal failure.
- **Unfractionated heparin** is given intravenously (a loading dose then an infusion) and monitored by the APTT. It is preferred in renal impairment and where rapid reversibility matters, because its effect is short-lived and reversed by **protamine sulphate**.
- Side effects are bleeding, **heparin-induced thrombocytopenia (HIT)** — an immune, prothrombotic fall in platelets — and osteoporosis with long-term use. Both are commoner with unfractionated heparin.

## Warfarin

Warfarin inhibits vitamin K epoxide reductase, reducing synthesis of factors II, VII, IX and X (and proteins C and S). It is teratogenic and can cause skin necrosis.

| Target INR | Indications |
|---|---|
| 2.5 (range 2–3) | First DVT or PE, atrial fibrillation, cardiomyopathy, mural thrombus |
| 3.5 (range 3–4) | Recurrent VTE, mechanical prosthetic valve, antiphospholipid syndrome |

Its effect is potentiated by liver disease, cytochrome P450 inhibitors (amiodarone, ciprofloxacin), cranberry juice and non-steroidal anti-inflammatory drugs.

**Managing a high INR:**

| Situation | Action |
|---|---|
| INR 5–8, no bleeding | Withhold one or two doses, reduce maintenance; restart when INR below 5 |
| INR above 8, no or minor bleeding | Stop warfarin, give oral vitamin K, recheck INR daily |
| Any major bleeding | Stop warfarin, give prothrombin complex concentrate (or fresh frozen plasma if unavailable) plus intravenous vitamin K |

Intravenous vitamin K takes about 6 hours to work; prothrombin complex concentrate (Octaplex, Beriplex) works within about 30 minutes and is preferred for major bleeding.

## Direct oral anticoagulants (DOACs)

- **Factor Xa inhibitors**: apixaban, rivaroxaban, edoxaban.
- **Direct thrombin inhibitor**: dabigatran.

DOACs need no routine monitoring and are now first-line for most atrial fibrillation and VTE. A normal PT or APTT does not exclude a DOAC effect. Reversal: **idarucizumab** for dabigatran; **andexanet alfa** for the factor Xa inhibitors, though its cost means prothrombin complex concentrate is often used instead. They are avoided in pregnancy, in significant renal impairment and in antiphospholipid syndrome.`,
        },
        {
          id: "leukaemias",
          name: "Leukaemias: ALL, AML, CML & CLL",
          content: `## Leukaemias: ALL, AML, CML and CLL

Leukaemias are neoplasms of blood-forming cells. **Acute** leukaemias are defined by more than 20% immature blasts in the marrow and progress rapidly; **chronic** leukaemias accumulate more mature cells over years. All can cause marrow-failure symptoms — anaemia, thrombocytopenia (bleeding) and neutropenia (infection) — plus organ infiltration (hepatosplenomegaly, lymphadenopathy, bone pain, gum hypertrophy).

| Leukaemia | Typical age | Hallmark | Key point |
|---|---|---|---|
| Acute lymphoblastic (ALL) | Children | "children get it ALL" | Lymphadenopathy, central nervous system and testicular disease |
| Acute myeloid (AML) | Older adults | Auer rods | Subtype M3 is acute promyelocytic leukaemia |
| Chronic myeloid (CML) | 40–60 | Philadelphia chromosome | Massive splenomegaly, basophilia |
| Chronic lymphocytic (CLL) | Elderly | Smear (smudge) cells | Often incidental; Richter's transformation |

## Acute leukaemias

Diagnosis rests on the blood film, immunophenotyping (flow cytometry) and cytogenetics. **Acute lymphoblastic leukaemia** is the commonest childhood cancer; blasts express B-lineage (CD19, CD20) or T-lineage (CD3) markers. Treatment is prolonged — remission induction, consolidation, central-nervous-system-directed intrathecal chemotherapy and up to two to three years of maintenance — with allogeneic transplant for high-risk disease. Imatinib is added if the Philadelphia chromosome, t(9;22), is present.

**Acute myeloid leukaemia** is largely a disease of older adults, and its blasts may contain **Auer rods**. One subtype matters most: **acute promyelocytic leukaemia (M3)**, with t(15;17), which causes disseminated intravascular coagulation and bleeding but responds to all-trans retinoic acid (ATRA) and arsenic trioxide, often without conventional chemotherapy.

> Starting chemotherapy can precipitate **tumour lysis syndrome** — a rise in potassium, phosphate and urate with a fall in calcium, risking acute kidney injury and arrhythmia. Prevent it with hydration and allopurinol, or rasburicase in high-risk patients.

## Chronic myeloid leukaemia

A myeloproliferative disorder of middle age, often found on a routine count showing a very high white-cell count with neutrophilia and — unusually — **basophilia**, plus massive splenomegaly on examination. Over 80% carry the **Philadelphia chromosome**, a t(9;22) translocation producing the BCR-ABL1 fusion gene. It runs through a chronic phase, an accelerated phase and a blast crisis (which resembles acute leukaemia). The tyrosine kinase inhibitor **imatinib**, which targets BCR-ABL1, transformed the outlook, with high remission rates.

## Chronic lymphocytic leukaemia

CLL is a proliferation of mature B lymphocytes — essentially the same disease as small lymphocytic lymphoma. It affects the elderly and is often found incidentally on a lymphocytosis. There is symmetrical painless lymphadenopathy, marrow failure and recurrent infection (low immunoglobulins), with **smear (smudge) cells** on the film and a CD5-positive, CD23-positive clone on flow cytometry. It can be complicated by autoimmune haemolytic anaemia or immune thrombocytopenia (both together being Evans syndrome), and by **Richter's transformation** to an aggressive diffuse large B-cell lymphoma. Staging uses the Binet system. Many patients need no treatment (watch and wait); when treatment is needed, options are a Bruton tyrosine kinase (BTK) inhibitor such as ibrutinib or acalabrutinib, the BCL2 inhibitor venetoclax, and anti-CD20 antibodies (rituximab, obinutuzumab) with chemotherapy.

## Stem-cell transplantation

- **Autologous** transplant reinfuses the patient's own stored stem cells after high-dose chemotherapy; there is no graft-versus-host disease, and it is used mainly in myeloma and lymphoma.
- **Allogeneic** transplant uses a human-leukocyte-antigen-matched donor and adds a **graft-versus-leukaemia** effect, so it is favoured in leukaemia — at the cost of graft-versus-host disease, opportunistic infection and infertility.`,
        },
        {
          id: "lymphoma",
          name: "Lymphoma: Hodgkin & non-Hodgkin",
          content: `## Lymphoma: Hodgkin and non-Hodgkin

Lymphomas are neoplasms of lymphoid tissue, usually presenting with painless lymphadenopathy. The key division is Hodgkin (about 20%) versus non-Hodgkin (about 80%). Both use the **Ann Arbor** stage (I: one node region; II: two or more on the same side of the diaphragm; III: both sides; IV: extranodal spread such as liver or marrow), with the suffix **B** for constitutional "B symptoms" — fever, drenching night sweats and unintentional weight loss over 10% in six months.

## Hodgkin lymphoma

Hodgkin lymphoma has a bimodal age distribution (young adults and the elderly), is associated with Epstein-Barr virus, and spreads contiguously from one node group to the next. Classic clues are **pain in affected nodes after drinking alcohol** and a cyclical **Pel-Ebstein fever**. The diagnostic cell is the **Reed-Sternberg cell** — a large binucleate "owl-eye" cell that stains CD15 and CD30 positive. Nodular sclerosing is the commonest subtype. Prognosis is excellent; treatment is combination chemotherapy — **ABVD** (doxorubicin, bleomycin, vinblastine, dacarbazine) — guided by an interim positron-emission-tomography (PET) scan, with radiotherapy for bulky disease (which carries a later breast-cancer risk in young women).

## Non-Hodgkin lymphoma

A large group graded from indolent to very aggressive. Counterintuitively, higher-grade lymphomas are often more curable because they are more chemosensitive. Most are B-cell; the workhorse regimen is **R-CHOP** (rituximab, cyclophosphamide, doxorubicin, vincristine, prednisolone).

| Subtype | Grade | Hallmark |
|---|---|---|
| Burkitt | Very aggressive | t(8;14), c-myc; "starry-sky" film; jaw mass (endemic, Epstein-Barr virus) |
| Diffuse large B-cell | Aggressive | Commonest non-Hodgkin lymphoma; sheets of large cells; R-CHOP |
| Mantle cell | Aggressive | t(11;14), cyclin D1 |
| Follicular | Indolent | t(14;18), BCL2; often incurable but slow |
| Marginal zone (MALT) | Indolent | Chronic antigen drive — gastric from H. pylori, parotid from Sjögren's |

Marginal-zone lymphoma of mucosa-associated lymphoid tissue (MALT) in the stomach can regress with **Helicobacter pylori eradication** alone. T-cell lymphomas are rarer; enteropathy-associated T-cell lymphoma complicates longstanding coeliac disease.

## Translocations worth memorising

- Burkitt lymphoma — t(8;14)
- Mantle cell lymphoma — t(11;14)
- Follicular lymphoma — t(14;18)
- Anaplastic large-cell lymphoma — t(2;5)`,
        },
        {
          id: "myeloma",
          name: "Myeloma & paraproteinaemias",
          content: `## Myeloma and paraproteinaemias

## Multiple myeloma

Multiple myeloma is a malignancy of plasma cells that secretes a monoclonal immunoglobulin (a **paraprotein**, most often IgG). It affects the middle-aged and elderly and is commoner in people of African-Caribbean descent. The clinical picture is **CRAB**:

- **Calcium** raised — from osteoclast-activating cytokines; causes thirst, confusion, constipation and renal stones.
- **Renal** failure — light chains deposit in and obstruct the tubules.
- **Anaemia** — from marrow infiltration.
- **Bone** lesions — pain, osteoporosis, lytic lesions and pathological fractures (the "pepper-pot" or "rain-drop" skull).

Investigations show a monoclonal band on serum protein electrophoresis, **Bence Jones protein** (free light chains) in the urine, **rouleaux** on the film, a very high erythrocyte sedimentation rate (ESR), and more than 10% clonal plasma cells in the marrow; whole-body low-dose CT or MRI has replaced the skeletal survey. Treat supportively (bisphosphonates for bone disease; manage the CRAB features), then give induction chemotherapy — a bortezomib-based regimen, increasingly with the anti-CD38 antibody daratumumab — aiming for autologous stem-cell transplant in fitter patients. It is not curable, but survival is improving.

| Feature | MGUS | Smouldering myeloma | Multiple myeloma |
|---|---|---|---|
| Paraprotein | Under 30 g/L | 30 g/L or more | Present |
| Clonal plasma cells | Under 10% | 10% or more | Often high |
| CRAB / organ damage | None | None | Present |
| Treatment | Monitor only | Monitor only | Yes |

Monoclonal gammopathy of undetermined significance (MGUS) is common and benign but transforms to myeloma at roughly 1% per year, so it warrants monitoring.

## Waldenström's macroglobulinaemia

A low-grade lymphoplasmacytoid lymphoma of elderly men secreting monoclonal **IgM**. The large IgM molecule causes **hyperviscosity** (visual disturbance, confusion, heart failure) and is associated with Raynaud's. Hyperviscosity is treated with plasmapheresis, and active disease with rituximab-based therapy or ibrutinib.

## AL amyloidosis

Misfolded immunoglobulin **light chains** deposit in tissues, with or without overt myeloma, causing macroglossia, carpal tunnel syndrome, peripheral neuropathy, heart failure and renal failure. Diagnosis is by biopsy showing **apple-green birefringence** under polarised light after **Congo red** staining. (Amyloidosis is covered further in the Tracker.)`,
        },
        {
          id: "mds_aplastic",
          name: "Myelodysplasia & aplastic anaemia",
          content: `## Myelodysplasia and aplastic anaemia

## Myelodysplastic syndromes

Myelodysplastic syndromes are clonal disorders of the myeloid stem cell in which cells proliferate but mature abnormally, so the marrow is paradoxically **hypercellular** while the blood shows **cytopenias**. They occur in the elderly and cause fatigue, infection and bleeding. By definition there are fewer than 20% blasts (20% or more defines acute leukaemia), and there is a real risk of transformation to acute myeloid leukaemia (AML).

The film and marrow show dysplasia: **ring sideroblasts** (iron-laden red-cell precursors), hypogranular neutrophils with a **pseudo-Pelger-Huet** (bilobed) nucleus, and abnormal platelets. A distinctive subtype with an isolated **5q deletion** has anaemia with preserved or raised platelets and responds to lenalidomide.

Management ranges from supportive care (transfusion, erythropoietin, granulocyte colony-stimulating factor, antibiotics) through hypomethylating agents such as **azacitidine** to allogeneic stem-cell transplant, the only cure. Prognosis is estimated by the International Prognostic Scoring System (marrow blast percentage, karyotype and depth of cytopenia); deaths are classically split roughly equally between infection, bleeding and transformation to acute leukaemia.

## Aplastic anaemia

Aplastic anaemia is failure of the marrow to produce blood cells, giving a **hypocellular** marrow and — despite the name — usually a pancytopenia rather than anaemia alone. Patients often present with bleeding.

- **Primary**: idiopathic (the majority), or inherited such as Fanconi anaemia.
- **Secondary**: drugs (including chemotherapy), radiation, viruses, marrow infiltration and autoimmune disease.

It is closely linked to paroxysmal nocturnal haemoglobinuria and to leukaemia. Management is supportive (transfusion, antibiotics, iron chelation) plus definitive therapy: **immunosuppression** with antithymocyte globulin and ciclosporin (with the thrombopoietin-receptor agonist eltrombopag) for idiopathic disease, or **allogeneic stem-cell transplant**, which is curative and preferred in younger patients with a matched donor.`,
        },
      ],
    },
    {
      id: "immunology", name: "Immunology & Allergy", icon: "🛡️",
      topics: [
        {
          id: "anaphylaxis_allergy",
          name: "Anaphylaxis & allergy",
          content: `## Anaphylaxis and allergy

Anaphylaxis is a severe, life-threatening, generalised hypersensitivity reaction. It sits at the extreme end of the allergic spectrum and is a medical emergency.

## Recognising anaphylaxis

Suspect anaphylaxis when there is a sudden-onset illness with **airway, breathing or circulation** problems, usually together with skin or mucosal changes such as widespread hives (urticaria), flushing or swelling (angioedema), after exposure to a likely trigger such as a food, drug or insect sting.

## Immediate management

The single most important treatment is **intramuscular (IM) adrenaline** into the anterolateral thigh, repeated after 5 minutes if there is no improvement.

- Remove the trigger if possible and call for help early.
- Lie the patient flat (or let them sit up if breathing is difficult) and raise the legs if they are hypotensive.
- Give high-flow oxygen and a large intravenous fluid bolus for circulatory compromise.
- Antihistamines and corticosteroids are **second line** and must never delay adrenaline.

A raised serum **mast cell tryptase**, ideally taken soon after the reaction and again later, helps confirm the diagnosis. Because a **biphasic reaction** can occur several hours later, patients are observed before discharge.

## After the acute episode

Every patient should be referred to an allergy clinic, supplied with an adrenaline auto-injector and trained to use it, and advised on how to avoid the identified trigger.

## The wider allergic spectrum

Allergy is an immunoglobulin E (IgE) mediated, type I hypersensitivity reaction. Milder presentations include allergic rhinitis, urticaria and mild food reactions. Diagnosis uses **skin prick testing** or **specific IgE** blood tests, and management is allergen avoidance, antihistamines and, for selected severe cases, allergen immunotherapy (desensitisation).`,
        },
        {
          id: "autoantibodies",
          name: "Autoantibodies",
          content: `## Autoantibodies

Autoantibodies are antibodies directed against the body's own antigens. They are central to diagnosing autoimmune disease: some are sensitive screening tests, others are highly specific markers, and a few track disease activity. Broadly they split into **non-organ-specific** (systemic) and **organ-specific** patterns.

## A map of antibodies to diseases

| Autoantibody | Associated disease |
|---|---|
| Antinuclear antibody (ANA) | Systemic lupus erythematosus and other connective tissue disease (a sensitive screen) |
| Anti-double-stranded DNA | Systemic lupus erythematosus (specific; tracks activity) |
| Anti-Ro and anti-La | Sjögren's syndrome (and lupus) |
| Rheumatoid factor | Rheumatoid arthritis (sensitive, not specific) |
| Anti-cyclic citrullinated peptide (anti-CCP) | Rheumatoid arthritis (specific; linked to HLA-DR4 and smoking) |
| Anti-Jo-1 | Dermatomyositis and polymyositis |
| Anti-Scl-70 or anticentromere | Diffuse or limited systemic sclerosis |
| Cytoplasmic ANCA (anti-proteinase-3) | Granulomatosis with polyangiitis |
| Perinuclear ANCA (anti-myeloperoxidase) | Microscopic polyangiitis and eosinophilic granulomatosis with polyangiitis |
| Anti-thyroid-stimulating-hormone receptor | Graves' disease |
| Anti-thyroid peroxidase | Hashimoto's thyroiditis |
| Anti-acetylcholine receptor | Myasthenia gravis |
| Anti-glomerular basement membrane | Goodpasture's syndrome |
| Anti-desmoglein (epidermal cadherin) | Pemphigus vulgaris |
| Anti-intrinsic factor and anti-parietal cell | Pernicious anaemia |
| Anti-tissue transglutaminase | Coeliac disease |
| Anti-mitochondrial antibody | Primary biliary cholangitis |
| Anti-smooth muscle | Autoimmune hepatitis |

## How they are used

- **Screening versus specificity:** ANA and rheumatoid factor are sensitive but not specific, so they screen; anti-dsDNA and anti-CCP are specific and confirm. A weakly positive ANA is common in healthy people.
- **Monitoring activity:** in lupus the **anti-dsDNA titre rises and complement (C3 and C4) falls** during a flare, because immune complexes consume complement.
- **The ANCA split** separates the small-vessel vasculitides: cytoplasmic ANCA (anti-proteinase-3) with granulomatosis with polyangiitis, and perinuclear ANCA (anti-myeloperoxidase) with microscopic polyangiitis and eosinophilic granulomatosis with polyangiitis.

> High-yield pairs: anti-dsDNA → lupus; anti-CCP → rheumatoid arthritis; anti-Ro/La → Sjögren's; c-ANCA → granulomatosis with polyangiitis; anti-GBM → Goodpasture's; anti-TSH receptor → Graves'; anti-mitochondrial → primary biliary cholangitis.`,
        },
        {
          id: "immunity_vaccination",
          name: "Immunity & vaccination",
          content: `## Immunity and vaccination

Immunity to an infection is either **active** (the person mounts their own response and develops memory) or **passive** (pre-formed antibody is transferred, giving immediate but temporary protection). Each can be acquired naturally or artificially.

| | Active (own response, lasting) | Passive (transferred antibody, short-lived) |
|---|---|---|
| Natural | Recovering from the infection | Maternal antibody across the placenta and in breast milk |
| Artificial | Vaccination | Immunoglobulin injection (e.g. post-exposure for rabies, hepatitis B, tetanus, varicella) |

## Types of vaccine

| Type | What it contains | Examples | Key point |
|---|---|---|---|
| Live attenuated | A weakened live organism | MMR, varicella-zoster, BCG, oral polio and typhoid, yellow fever, intranasal flu | Strong, often lifelong immunity, but contraindicated in immunosuppression and pregnancy |
| Inactivated or subunit | Killed organism or isolated antigen | Hepatitis B (surface antigen), human papillomavirus, injected polio and flu | Safe in immunodeficiency but need boosters |
| Toxoid | An inactivated toxin | Tetanus, diphtheria | |
| Conjugate | Polysaccharide linked to a protein carrier | Meningococcus, Haemophilus influenzae type b, pneumococcus | Protects against encapsulated bacteria and works in young children |
| Messenger RNA or viral vector | Genetic code for an antigen | COVID-19 vaccines | Newer technology |

**Adjuvants** (such as aluminium salts) are added to boost the response without changing its target.

## The UK schedule in outline

- **Infants:** the 6-in-1 (diphtheria, tetanus, pertussis, polio, Haemophilus influenzae type b, hepatitis B) at 8, 12 and 16 weeks, with meningococcal B, pneumococcal and rotavirus vaccines.
- **One year:** Haemophilus influenzae type b/meningococcal C, measles-mumps-rubella (MMR), and pneumococcal and meningococcal B boosters.
- **Pre-school:** MMR and a 4-in-1 booster. **Teenagers:** human papillomavirus, then a 3-in-1 and meningococcal ACWY booster.
- **Adults:** annual flu and (from 65) pneumococcal; shingles from 70; and in **pregnancy**, flu and pertussis to protect the newborn.

## Key safety rule

**Live vaccines are contraindicated in significant immunosuppression and in pregnancy.** People living with HIV may receive MMR but not BCG or yellow fever.`,
        },
        {
          id: "immunodeficiency",
          name: "Immunodeficiency",
          content: `## Immunodeficiency

Immunodeficiency is a failure of one or more parts of the immune system that leaves the person prone to infection. It is **primary** (an inherited defect, individually rare) or, far more often, **secondary** (acquired). Suspect it when infection is **serious, persistent, unusual or recurrent** (the SPUR pattern), especially with failure to thrive in a child or a family history of early infant death.

A powerful shortcut is that **the type of infection points to the arm of the immune system at fault:**

| Defective component | Characteristic infections |
|---|---|
| Antibody (B-cell) | Recurrent encapsulated bacteria (pneumococcus, Haemophilus, meningococcus) and gut infections |
| T-cell (and combined) | Viruses (cytomegalovirus), fungi (Pneumocystis, Candida) and intracellular organisms |
| Phagocyte (neutrophil) | Deep bacterial abscesses and fungi (Staphylococcus, Aspergillus) |
| Complement | Encapsulated bacteria; terminal-pathway defects give recurrent Neisseria (meningococcal) infection |

## Primary (inherited) immunodeficiency

- **Antibody deficiencies** are the commonest. **Selective IgA deficiency** is the most frequent and often asymptomatic; **common variable immunodeficiency** gives low immunoglobulins, a poor vaccine response, recurrent sinopulmonary infection with bronchiectasis, and a risk of autoimmunity and lymphoma; **Bruton's X-linked agammaglobulinaemia** has no B cells and no antibody. Treatment is **immunoglobulin replacement**.
- **T-cell and combined defects:** **severe combined immunodeficiency (SCID)** presents in the first months of life with infections of every type, failure to thrive and diarrhoea, and is fatal without **haematopoietic stem cell transplantation**; DiGeorge syndrome causes thymic aplasia.
- **Phagocyte defects:** **chronic granulomatous disease** is a failure of the neutrophil respiratory burst (an abnormal nitroblue tetrazolium or dihydrorhodamine test), causing deep bacterial and fungal infection.
- **Complement defects:** early classical-pathway deficiency (C1, C2, C4) predisposes to **lupus** (failure to clear immune complexes); C3 deficiency to severe bacterial infection; and **terminal-pathway deficiency (C5–9) to recurrent meningococcal disease**. Screen with the CH50 and AP50 assays.

## Secondary (acquired) immunodeficiency

Far more common than primary disease, and the cause is usually evident:

- **Infection:** HIV (progressive loss of CD4 T-cells).
- **Malignancy:** chronic lymphocytic leukaemia, myeloma and lymphoma (antibody deficiency).
- **Drugs:** chemotherapy, corticosteroids, other immunosuppressants and biologics.
- **Protein loss or poor production:** nephrotic syndrome, protein-losing enteropathy, malnutrition, liver disease.
- **Other:** asplenia (encapsulated organisms), diabetes, and the extremes of age.

## Investigation and management

Investigate with a full blood count, immunoglobulin levels and specific antibody (vaccine) responses, lymphocyte subsets, complement (CH50/AP50) and an HIV test, escalating to genetic testing. Manage by **treating infections promptly with prophylaxis, replacing what is missing** (immunoglobulin for antibody deficiency), **avoiding live vaccines** in significant deficiency, and considering stem cell transplantation for severe combined or phagocyte disease.

> High-yield: encapsulated-bacterial infections point to an antibody, complement or splenic problem; recurrent Neisseria means terminal complement deficiency; viral and Pneumocystis infections point to a T-cell defect (and to HIV); and deep abscesses with fungi point to a phagocyte (chronic granulomatous) defect. Secondary causes are far commoner than primary ones.`,
        },
        {
          id: "allergic_rhinitis",
          name: "Allergic rhinitis",
          content: `## Allergic rhinitis

An IgE-mediated inflammation of the nasal mucosa causing sneezing, itch, watery rhinorrhoea and nasal blockage, often with **allergic conjunctivitis**. It is classified as **intermittent** or **persistent**, and as **mild** or **moderate to severe** according to the effect on sleep, daily activities and school or work.

## Assessment

- **Identify the most likely causative allergen** — the pattern over the year usually gives it away, with grass and tree pollen seasonal and house dust mite and animal dander perennial
- **Assess for atopy**, including asthma, allergic conjunctivitis and eczema, since they cluster
- Look for signs of **chronic nasal congestion** — mouth breathing, cough and halitosis
- **Examine the nose** for nasal polyps, a deviated septum, mucosal swelling, and a depressed or widened nasal bridge

## Management

| Mild-moderate intermittent, or mild persistent | Persistent moderate to severe, or uncontrolled | Add-ons if therapy is ineffective |
|---|---|---|
| **First: allergen avoidance.** Consider **nasal saline irrigation**. Then **intranasal antihistamines** or oral non-sedating antihistamines such as loratadine or cetirizine | **First: continue the above and add a regular intranasal corticosteroid** during allergen exposure — mometasone or fluticasone. Onset is **6 to 8 hours** after the first dose and maximal effect may take **2 weeks** | **Check compliance first.** For nasal congestion add an **intranasal decongestant** such as ephedrine or xylometazoline, for **up to 5 to 7 days only** |
| **Second: if intranasal antihistamines are contraindicated or not tolerated**, use an intranasal chromone such as sodium cromoglicate | **Second: for severe uncontrolled symptoms significantly affecting quality of life**, consider a short course of oral corticosteroid such as prednisolone for **3 to 7 days** | For persistent **watery rhinorrhoea**, add an intranasal anticholinergic such as **ipratropium bromide**. If there are asthma symptoms, consider a **leukotriene receptor antagonist**. Consider **immunotherapy** |

Two practical points. **Intranasal antihistamines such as azelastine have a faster onset and are more effective than oral antihistamines.** And intranasal decongestants must be limited to under a week, because longer use causes **rhinitis medicamentosa** — rebound congestion that perpetuates the problem.

**Review 2 to 4 weeks** after starting any treatment to consider stepping up if symptoms persist. Once symptoms are controlled, continue treatment until the person is no longer exposed to the allergen.

## Immunotherapy

**Sublingual immunotherapy** is available in the United Kingdom only for **house dust mite, mixed grass pollens, timothy grass pollen and short ragweed pollen**. It has the potential to modify the disease rather than just suppress symptoms, but is **reserved for patients resistant to other medications**.

> High-yield: intranasal corticosteroids are the most effective single treatment for moderate to severe disease, but they take up to 2 weeks to work — so start them **before** the pollen season rather than during it. Limit intranasal decongestants to 5 to 7 days.`,
        },
        {
          id: "urticaria_angioedema",
          name: "Urticaria & angioedema",
          content: `## Urticaria and angioedema

**Urticaria** is an itchy weal-and-flare eruption caused by histamine release from dermal mast cells; individual weals characteristically **come and go within 24 hours**. **Angioedema** is the same process in the deeper dermis and subcutaneous tissue, producing non-pitting swelling of the lips, eyelids, tongue and sometimes the larynx. The two frequently occur together. Urticaria is **acute** if it lasts under 6 weeks and **chronic** beyond that.

The emergency at the far end of this spectrum — anaphylaxis — is covered in the *Anaphylaxis and allergy* topic. What follows is everything short of that.

## Angioedema without anaphylaxis

**Rapidly developing angioedema** still needs urgent treatment:

- **Chlorphenamine and hydrocortisone**, given slowly as an intravenous infusion or intramuscularly
- **Arrange emergency admission**, and arrange a **review after discharge**
- For **stable** angioedema without anaphylaxis, identify the underlying cause so that further episodes can be avoided

## Assessment of urticaria

- **Identify triggers** and give clear avoidance strategies where one is found. A **symptom diary** helps establish the frequency, duration and severity of episodes
- The **Urticaria Activity Score (UAS7)** grades severity: the patient or parent records the severity of itch and the number of weals daily for **7 days**. A score **below 7** in a week indicates controlled disease, and **above 28** indicates severe disease

## Treatment

- For **mild urticaria with an identifiable, avoidable trigger**, advise that it is likely to be **self-limiting**
- Where treatment is needed, give a **non-sedating antihistamine** — **cetirizine**, fexofenadine or loratadine — usually for **up to 6 weeks**, and for **3 to 6 months** if symptoms are likely to recur
- For **severe symptoms**, add a **short course of an oral corticosteroid** such as prednisolone, alongside the antihistamine. In angioedema the guide's figure is prednisolone **40 mg daily for up to 7 days**
- **Advise seeking immediate help — 999 or A&E — if symptoms progress rapidly or features of anaphylaxis develop**

**Refer to dermatology or immunology if** the urticaria is painful and persistent, symptoms are not well controlled with antihistamines, or there is **acute severe urticaria due to food or latex allergy**.

For patient information, point families to the **British Association of Dermatologists** leaflet on urticaria and angioedema, the **NHS A-Z** entry on urticaria (hives), and the **Allergy UK** website.

## The one that is not histamine-mediated

**Hereditary angioedema** must be recognised, because it behaves completely differently. It is an autosomal dominant deficiency of **C1 esterase inhibitor**, causing recurrent angioedema **without urticaria and without itch**, often with abdominal pain from bowel wall oedema, and frequently triggered by trauma, dental work or stress.

Crucially it is **bradykinin-mediated, not histamine-mediated**, so it does **not respond to antihistamines, corticosteroids or adrenaline**. A **low C4** is the screening test, with C1 inhibitor level and function confirming it. Acute attacks are treated with **C1 esterase inhibitor concentrate** or icatibant. The same mechanism explains **ACE inhibitor-induced angioedema**, which can begin months or years after starting the drug and requires permanent discontinuation of the class.

> High-yield: weals that last more than 24 hours or leave bruising are not ordinary urticaria — think **urticarial vasculitis**. Angioedema **without** urticaria or itch that fails to respond to adrenaline is **hereditary angioedema or an ACE inhibitor**, not allergy.`,
        },
        {
          id: "food_allergy",
          name: "Food allergy",
          content: `## Food allergy

An immune-mediated reaction to a food, which must be distinguished from food **intolerance**, which is non-immune. The distinction that governs everything is **IgE-mediated** versus **non-IgE-mediated**.

| | IgE-mediated | Non-IgE-mediated |
|---|---|---|
| **Onset after ingestion** | **Minutes, up to 2 hours** | **2 to 72 hours** |
| **Typical features** | Urticaria, angioedema, vomiting, wheeze, anaphylaxis | Vomiting, diarrhoea, reflux, blood or mucus in stool, eczema, faltering growth |
| **Testing** | **Skin prick testing or specific IgE** are useful | Skin prick and specific IgE are **not** useful — diagnosis is by **exclusion and reintroduction** |

**Arrange immediate ambulance transfer to A&E if there are systemic symptoms or suspected anaphylaxis**, with or without angioedema.

## Dietary treatment

- **Exclusion of the offending food or foods from the diet**
- **Referral to a paediatric dietitian**, which is not optional — exclusion diets risk nutritional deficiency and faltering growth in a child
- **Dietary exclusion in the mother** should be considered if she is breastfeeding

## Drug treatment

- **Mild reactions**, with no cardiorespiratory symptoms, are treated with **antihistamines**
- **Severe reactions** — with cardiovascular, laryngeal or bronchial involvement — require **intramuscular adrenaline**, which may be given by autoinjector, plus **salbutamol if there is bronchospasm**

**Adrenaline autoinjector doses (1 in 1000):**

| Age | Dose |
|---|---|
| **Over 12 years** | **500 micrograms** |
| **6 to 12 years** | **300 micrograms** |
| **6 months to 6 years** | **150 micrograms** |
| **Under 6 months** | **100 to 150 micrograms** |

## Education and the allergy action plan

- Educate the child and family on how to manage an allergic attack, with a **written self-management plan and training**
- Provide autoinjectors for home use, and advise carrying **two doses at all times**
- Teach recognition of early symptoms, and when to use adrenaline rather than waiting

## Food challenge

- After **6 to 12 months symptom-free**, consider a food challenge. This is the **gold standard for diagnosis**
- Increasing quantities of the allergen are given under medical supervision, starting with **direct mucosal exposure** (contact with the lips) and then titrated oral ingestion as tolerated. If no symptoms are provoked the test is negative and clinical allergy is excluded
- If the previous reaction was **severe**, do the challenge **in hospital**, and not usually until **at least 2 years** afterwards

Natural history is worth knowing for counselling: allergy to **cow's milk and egg often resolves in early childhood**, so gradual reintroduction is frequently possible, whereas allergy to **nuts and seafood usually persists into adulthood**.

> High-yield: onset within minutes is IgE-mediated and can be skin-prick tested; onset over hours to days is non-IgE-mediated and can only be diagnosed by exclusion and reintroduction. Everyone with an autoinjector carries **two**.`,
        },
      ],
    },
    {
      id: "genetics", name: "Genetics", icon: "🧬",
      topics: [
        {
          id: "inheritance_patterns",
          name: "Patterns of inheritance",
          content: `## Patterns of inheritance

Recognising the mode of inheritance from a family tree (pedigree) lets you estimate the risk to relatives and counsel appropriately. Four patterns cover most of what the assessment tests.

## The four classic patterns

| Pattern | Clues in the pedigree | Offspring risk | Examples |
|---|---|---|---|
| Autosomal dominant | Affected in every generation, both sexes, an affected parent | 50% (1 in 2) | Huntington's disease, Marfan syndrome, neurofibromatosis |
| Autosomal recessive | Often skips generations, unaffected carrier parents, commoner with consanguinity | 25% (1 in 4) if both parents are carriers | Cystic fibrosis, sickle cell disease, haemochromatosis |
| X-linked recessive | Mainly males affected, no male-to-male transmission, passed through carrier mothers | A carrier mother: half of sons affected, half of daughters carriers | Duchenne muscular dystrophy, haemophilia A |
| Mitochondrial | Passed only from the mother to all of her children | All children of an affected woman | Leber hereditary optic neuropathy |

## Concepts worth knowing

- **Penetrance** is the proportion of people carrying a disease gene who actually show the condition. Reduced penetrance can make an autosomal dominant condition appear to skip a generation.
- **Anticipation** is a condition becoming more severe or appearing earlier in successive generations. It is characteristic of trinucleotide repeat disorders such as Huntington's disease and myotonic dystrophy, in which the repeat lengthens as it is passed on.
- **Consanguinity** (parents who are blood relatives) raises the chance that both partners carry the same recessive gene, increasing autosomal recessive disease risk.

> A quick first step with any pedigree is to ask two questions: are both sexes affected equally, and does the trait appear in every generation? "Every generation, both sexes" points to autosomal dominant; "skips generations, carriers" points to autosomal recessive; "mostly males, through unaffected mothers" points to X-linked recessive.`,
        },
        {
          id: "chromosomal_disorders",
          name: "Chromosomal disorders",
          content: `## Chromosomal disorders

These arise from a missing, extra or rearranged chromosome rather than a single faulty gene. They are usually diagnosed with a karyotype (a picture of the full chromosome set) or with newer molecular tests.

## The common aneuploidies

| Condition | Karyotype | Key features |
|---|---|---|
| Down syndrome | Trisomy 21 | Hypotonia, flat facial profile, single palmar crease, learning disability, congenital heart disease |
| Edwards syndrome | Trisomy 18 | Low birthweight, clenched hands with overlapping fingers, rocker-bottom feet; high mortality |
| Patau syndrome | Trisomy 13 | Cleft lip and palate, polydactyly, holoprosencephaly; high mortality |
| Turner syndrome | 45,X | Short stature, webbed neck, primary amenorrhoea, coarctation of the aorta; intelligence usually normal |
| Klinefelter syndrome | 47,XXY | Tall stature, small firm testes, gynaecomastia, infertility |

## Antenatal screening for Down syndrome

Screening estimates risk; it does not diagnose. The **combined test** (11 to 14 weeks) uses the nuchal translucency on ultrasound together with two blood markers, beta human chorionic gonadotrophin (beta-hCG) and pregnancy-associated plasma protein A (PAPP-A). After 14 weeks the **quadruple test** uses four blood markers instead.

A higher-chance screening result is followed either by **non-invasive prenatal testing (NIPT)**, which analyses cell-free fetal deoxyribonucleic acid (DNA) in the mother's blood, or by a **diagnostic** test — chorionic villus sampling or amniocentesis — which gives a definitive karyotype but carries a small miscarriage risk.

> The quadruple-test pattern for Down syndrome is low alpha-fetoprotein (AFP), low oestriol, high beta-hCG and high inhibin A.`,
        },
        {
          id: "genetic_counselling",
          name: "Genetic counselling & testing",
          content: `## Genetic counselling and testing

Genetic counselling helps a person understand and adapt to the medical and psychological implications of an inherited condition. A central principle is that it is **non-directive**: the clinician provides information and support but does not tell the person what to decide.

## Types of genetic test

- **Diagnostic testing** confirms or excludes a condition in someone who already has symptoms.
- **Predictive (presymptomatic) testing** is offered to a healthy person with a relevant family history, for example testing for the Huntington's disease gene. Because the result can be life-changing and there may be no preventive treatment, it is done only with careful counselling before and after the test.
- **Carrier testing** identifies healthy people who carry one copy of a recessive gene and could pass it on, which matters when planning a family.

## Reproductive options

For a couple at risk of passing on a serious condition, options include prenatal diagnosis (chorionic villus sampling or amniocentesis) and **preimplantation genetic testing**, in which embryos created by in vitro fertilisation (IVF) are tested before one is transferred to the womb.

## Consent and confidentiality

Testing a child for an adult-onset condition is generally deferred until the child is old enough to decide for themselves. A genetic result also has implications for relatives, which can create tension between the individual's confidentiality and a family member's interest in knowing their own risk. These situations are handled sensitively and, where needed, with specialist genetics input.`,
        },
      ],
    },
    {
      id: "reproductive", name: "Reproductive & Sexual Health", icon: "⚕️",
      topics: [
        {
          id: "cervical_screening",
          name: "Cervical screening & colposcopy",
          content: `## Cervical screening and colposcopy

Cervical screening detects pre-cancerous change of the cervix before it becomes invasive cancer. Almost all cervical cancer is caused by persistent infection with high-risk human papillomavirus (HPV), particularly types 16 and 18, so the programme now tests for HPV first.

## The transformation zone

The outer cervix is covered by squamous epithelium and the endocervical canal by columnar (glandular) epithelium; the two meet at the squamocolumnar junction. The transformation zone, where columnar epithelium undergoes squamous metaplasia, has a high rate of cell turnover and is where dysplasia (cervical intraepithelial neoplasia) and most cervical cancers arise.

## The NHS screening programme

- **Who**: women (and anyone with a cervix) aged **25 to 64**.
- **How often**: every **3 years** from 25 to 49, then every **5 years** from 50 to 64.
- **The test is HPV primary screening** — the sample is tested for high-risk HPV first.
- If **HPV negative**, the person returns to routine recall.
- If **HPV positive**, cytology (a "smear") is done on the same sample: if cytology is abnormal, refer for **colposcopy**; if normal, repeat in 12 months.
- It is a screening (not diagnostic) test, and HPV vaccination of schoolchildren reduces but does not remove the need for it.

## CIN — what the results mean

Cytology grades change as mild, moderate or severe **dyskaryosis**; histology from a biopsy grades it as **cervical intraepithelial neoplasia (CIN)**:

| Grade | Extent of dysplasia |
|---|---|
| CIN 1 | Lowest third of the epithelium (most regress spontaneously) |
| CIN 2 | Lower two-thirds |
| CIN 3 | Full thickness, but the basement membrane is intact (carcinoma in situ) |

Most CIN 1 reverts to normal, whereas a substantial minority of untreated CIN 3 progresses to invasive cancer over roughly 10 years — invasion through the basement membrane marks the change from CIN 3 to carcinoma.

## Colposcopy and treatment

- **Colposcopy** is magnified examination of the cervix; applying acetic acid turns abnormal areas white (acetowhite), and a biopsy can be taken.
- High-grade CIN is usually treated by a **large loop excision of the transformation zone (LLETZ)** under local anaesthetic, or a cone biopsy for larger lesions.
- Excision carries a small risk of **mid-trimester miscarriage and preterm birth** in later pregnancies (from cervical weakness).
- A **test of cure** (repeat HPV and cytology) is performed at **6 months**.

> Cervical cancer is most often a squamous cell carcinoma (with adenocarcinoma the main other type) and presents with post-coital, intermenstrual or postmenopausal bleeding. HPV's E6 and E7 proteins inactivate the p53 and retinoblastoma (Rb) tumour-suppressor genes, driving malignant change.`,
        },
        {
          id: "dyspareunia",
          name: "Dyspareunia",
          content: `## Dyspareunia

Dyspareunia is pain during or after sexual intercourse. It is classified by site into **superficial** (felt at the vaginal entrance) and **deep** (felt in the pelvis on deeper penetration), and this distinction guides the differential.

## Superficial dyspareunia

Pain at the introitus, usually from a local or vulvovaginal cause:

- **Vaginal dryness and atrophy** — the commonest cause, especially with the menopause (low oestrogen), and during breastfeeding.
- **Infection** — candidiasis, bacterial vaginosis, trichomoniasis or herpes.
- **Vulval skin disease** — lichen sclerosus, eczema or dermatitis.
- **Vaginismus** — involuntary spasm of the pelvic floor muscles, often with a psychological component.
- **Vulvodynia**, a Bartholin's cyst or abscess, or simply inadequate arousal and lubrication.

## Deep dyspareunia

Pain felt deep in the pelvis, pointing to pelvic pathology:

- **Endometriosis** and **adenomyosis**.
- **Pelvic inflammatory disease** and pelvic adhesions.
- **Ovarian pathology** (cysts) or **fibroids**.

## Assessment and management

- **History**: superficial versus deep, primary (always present) versus secondary (new onset), the relationship to the menstrual cycle, and associated symptoms (discharge, dryness, subfertility); explore psychological and relationship factors sensitively.
- **Examination and investigations**: speculum and bimanual examination, vaginal and sexually-transmitted-infection swabs, and a pelvic ultrasound; laparoscopy if endometriosis is suspected.
- **Management is directed at the cause**: lubricants and topical oestrogen for atrophy, treating any infection, managing vulval skin disease, treating endometriosis or pelvic inflammatory disease, and psychosexual therapy (including for vaginismus).`,
        },
        {
          id: "post_coital_bleeding",
          name: "Post-coital bleeding",
          content: `## Post-coital bleeding

Post-coital bleeding is vaginal bleeding after sexual intercourse. Although most causes are benign, the priority is to exclude **cervical cancer**, so it should never be ignored.

## Causes

- **Cervical ectropion** — the commonest cause, where columnar epithelium is exposed on the outer cervix; common in younger women, on the combined oral contraceptive pill, and in pregnancy.
- **Cervical or endometrial polyps**.
- **Infection** — cervicitis, often from a sexually transmitted infection such as chlamydia.
- **Atrophic vaginitis** in postmenopausal women.
- **Cervical cancer** — the key diagnosis not to miss.

## Assessment

- **History**: the bleeding pattern, sexual and contraceptive history, and cervical screening status; also ask about intermenstrual and postmenopausal bleeding.
- **Examination**: speculum examination to visualise the cervix (ectropion, polyp or a suspicious lesion) and a bimanual examination.
- **Investigations**: take **STI swabs** (including chlamydia), check the **cervical screening** history, and arrange **colposcopy** for an abnormal-looking cervix or persistent unexplained bleeding.

## Management

- Treat the underlying cause: an ectropion can be left if asymptomatic or treated (for example with cryotherapy, or by switching from an oestrogen-containing pill); remove polyps; treat infection; topical oestrogen for atrophy.
- **Refer urgently on the two-week-wait pathway if cervical cancer is suspected** on examination.

> Post-coital bleeding with a visibly abnormal cervix is cervical cancer until proven otherwise — examine the cervix and refer, even if a recent smear was normal, because screening can miss an established cancer.`,
        },
        {
          id: "fibroadenoma",
          name: "Fibroadenoma",
          content: `## Fibroadenoma

A fibroadenoma is a **benign** breast tumour arising from a breast lobule, made of fibrous (stromal) and glandular (epithelial) tissue. It is the **commonest breast lump in women aged 20 to 40** and is oestrogen-sensitive, so it can enlarge in pregnancy and tends to regress after the menopause.

## How it presents

- A **smooth, firm, well-defined, rubbery and highly mobile** lump — its mobility earns it the nickname "breast mouse".
- Usually **single, unilateral and 1 to 5 cm**, and characteristically **painless**.

## Assessment

Like any discrete breast lump, it is evaluated by **triple assessment**:

- **Clinical examination**.
- **Imaging** — ultrasound in younger women (denser breast tissue), mammography in older women (generally over about 35).
- **Tissue sampling** — core biopsy (histology) or fine-needle aspiration (cytology), which shows a characteristic benign pattern.

## Management

- Once confirmed and small, a fibroadenoma can be safely **left and monitored** — most do not raise breast-cancer risk and a proportion regress.
- **Excision** is offered if it is large (over about 3 cm), growing, symptomatic, or by patient preference.

> The main differential in an older woman is a **phyllodes tumour**, which can arise within a fibroadenoma, tends to present over 50, and is excised with a wide margin because it can behave aggressively. Always confirm a clinical "fibroadenoma" with triple assessment rather than by examination alone.`,
        },
        {
          id: "pcos",
          name: "Polycystic ovary syndrome",
          content: `## Polycystic ovary syndrome

Polycystic ovary syndrome (PCOS) is the commonest endocrine disorder in women of reproductive age, affecting roughly 1 in 10. It is characterised by **hyperandrogenism, ovulatory dysfunction and polycystic ovaries**, underpinned by **insulin resistance**, which drives both the metabolic features and, through raised luteinising hormone and androgens, the reproductive ones.

## Diagnosis — the Rotterdam criteria

Diagnosis requires **two of the following three**, once mimics have been excluded:

- **Oligo-ovulation or anovulation** — irregular or absent periods.
- **Clinical or biochemical hyperandrogenism** — hirsutism, acne or male-pattern hair loss, or a raised total or free testosterone.
- **Polycystic ovaries on ultrasound** — 12 or more follicles (2–9 mm) in one or both ovaries, or an ovarian volume above 10 mL.

Supportive blood tests show a **raised luteinising-hormone-to-follicle-stimulating-hormone (LH:FSH) ratio**, a mildly raised testosterone with a **low sex-hormone-binding globulin**, and a normal or mildly raised prolactin. A markedly raised testosterone should prompt a search for an androgen-secreting tumour or congenital adrenal hyperplasia; also exclude thyroid disease, hyperprolactinaemia and Cushing's syndrome.

## Complications

Beyond subfertility and the distress of hirsutism and acne, PCOS carries important long-term risks: **impaired glucose tolerance and type 2 diabetes**, the metabolic syndrome and cardiovascular disease, obstructive sleep apnoea, and — because chronic anovulation leaves the endometrium under **unopposed oestrogen** — **endometrial hyperplasia and carcinoma**. Screen for diabetes with an oral glucose tolerance test or HbA1c.

## Management

Treatment is directed at the woman's main concern.

- **Lifestyle and weight loss** are first-line for everyone: even modest weight loss restores ovulation, improves insulin sensitivity and lowers androgen levels.
- **Menstrual regulation and endometrial protection** — a **combined oral contraceptive pill** regulates cycles and eases hyperandrogenism (it raises sex-hormone-binding globulin, lowering free androgens). If the pill is unsuitable, use **cyclical progestogen** or a **levonorgestrel intrauterine system**, aiming for at least three or four withdrawal bleeds a year to protect the endometrium.
- **Hirsutism** — co-cyprindiol (cyproterone acetate with ethinylestradiol), topical eflornithine for facial hair, or an anti-androgen such as spironolactone, alongside cosmetic measures (electrolysis, laser).
- **Subfertility** — after weight optimisation, **letrozole** (an aromatase inhibitor) is now the preferred first-line agent for ovulation induction, with **clomifene** as the alternative; either may be combined with **metformin**, which is particularly useful where insulin resistance is prominent. Gonadotrophins or **laparoscopic ovarian drilling** are second-line, with monitoring for ovarian hyperstimulation and the raised risk of multiple pregnancy.

> The chronically anovulatory endometrium of PCOS sits under unopposed oestrogen, so investigate persistent abnormal bleeding and make sure a woman with amenorrhoea has at least three or four progestogen-induced bleeds a year to reduce her endometrial cancer risk.`,
        },
        {
          id: "subfertility",
          name: "Subfertility",
          content: `## Subfertility

Subfertility is failure to conceive after **12 months of regular unprotected intercourse** — or after 6 months if the woman is over 35 or there is a known cause. About 84% of couples conceive within a year and 90% within two. The causes divide roughly evenly between **male factor** (about a third), **ovulatory** and **tubal or pelvic** factors, with a large **unexplained** group; both partners are investigated together.

## Investigating the couple

- **Confirm ovulation** with a **mid-luteal (day 21) serum progesterone**, taken 7 days before the expected period — a level above about 30 nmol/L confirms ovulation. Add early-follicular (day 2–5) follicle-stimulating hormone, luteinising hormone and oestradiol, and check thyroid function, prolactin and testosterone if the cycle is irregular.
- **Ovarian reserve** is judged from **anti-Müllerian hormone** (which is independent of cycle timing) and the **antral follicle count** on transvaginal ultrasound.
- **Semen analysis** is the key male investigation; if abnormal, repeat after 3 months (one full cycle of sperm production).
- **Tubal patency** is assessed with **hysterosalpingography** or hysterosalpingo-contrast sonography, or with **laparoscopy and dye** where tubal or pelvic disease is likely (previous pelvic inflammatory disease, endometriosis or ectopic pregnancy).
- Screen both partners for **chlamydia**, and check the woman's rubella immunity.

## Management

Address modifiable factors first: regular intercourse every 2–3 days, **folic acid** (400 micrograms daily, or 5 mg if higher risk), a healthy body mass index (both extremes reduce fertility), smoking cessation, and reducing alcohol and caffeine.

- **Ovulation induction** with **letrozole or clomifene** (adding metformin in polycystic ovary syndrome) for anovulation.
- **Intrauterine insemination** for mild male-factor subfertility, same-sex couples or where donor sperm is used.
- **In-vitro fertilisation (IVF)** for tubal disease and for unexplained subfertility persisting beyond about 2 years; **intracytoplasmic sperm injection (ICSI)** is added for significant male-factor infertility, and donor eggs or sperm are used where the couple's own gametes cannot be.
- **Surgery** — laparoscopic treatment of endometriosis or adhesions, tubal surgery, or removal of a hydrosalpinx (which improves IVF success).

NICE supports NHS-funded IVF (up to three cycles for eligible women under 40), although local commissioning varies.

> Investigate both partners in parallel and refer early rather than waiting out a rigid 12 months when there is an obvious pointer — the woman is over 35, has amenorrhoea, or has had pelvic infection or surgery — because fertility, and ovarian reserve in particular, falls with age.`,
        },
        {
          id: "contraception_overview",
          name: "Contraception",
          content: `## Contraception

Contraception divides into **long-acting reversible contraception (LARC)** — fitted and forgotten — and **short-acting** user-dependent methods. LARC methods are the most reliable because they do not depend on daily adherence.

## Long-acting reversible contraception

| Method | Hormone | Duration | Key points |
|---|---|---|---|
| Copper intrauterine device (Cu-IUD) | None | 5–10 years | Works immediately; can make periods heavier and more painful; also the most effective emergency contraception |
| Levonorgestrel intrauterine system (Mirena) | Levonorgestrel | Up to 8 years (contraception) | Thins the endometrium — lighter or absent periods; also treats heavy menstrual bleeding and provides the progestogen for hormone replacement therapy |
| Implant (Nexplanon) | Etonogestrel | 3 years | The most effective method overall; irregular bleeding is the main drawback; efficacy is reduced by enzyme-inducing drugs |
| Injection (Depo-Provera) | Medroxyprogesterone | 13 weeks | Can cause weight gain and reduced bone density; fertility may take up to a year to return |

## Short-acting hormonal methods

The **combined oral contraceptive pill (COCP)** contains oestrogen and progestogen and works by preventing ovulation. It makes periods lighter and more regular and lowers ovarian and endometrial cancer risk, but raises the risk of venous thromboembolism, stroke, and breast and cervical cancer. It is taken for 21 days with a 7-day break (or "tricycled"). Absolute contraindications (UK Medical Eligibility Criteria category 4) include **migraine with aura**, a smoker aged over 35, previous venous thromboembolism or a thrombogenic mutation, uncontrolled hypertension and current breast cancer.

The **progestogen-only pill (POP)** works mainly by thickening cervical mucus (desogestrel also inhibits ovulation). It avoids the oestrogen-related risks and suits women who cannot take the COCP, but must be taken within a strict daily window — 3 hours for traditional pills, 12 hours for desogestrel. The **patch** and **vaginal ring** are combined methods used like the COCP.

## Missed pills

- **COCP** — one missed pill: take it and continue, no extra cover needed. Two or more missed: take the most recent, use condoms for 7 days, and consider emergency contraception if pills were missed in the first week after the break.
- **POP** — more than 3 hours late (12 hours for desogestrel): take it, use condoms for 48 hours, and consider emergency contraception if there has been unprotected sex.

## Emergency contraception

| Method | Window | Notes |
|---|---|---|
| Copper IUD | Up to 5 days after unprotected sex (or after earliest ovulation) | Most effective, and the only method that works after ovulation; can stay for ongoing contraception |
| Ulipristal acetate (ellaOne) | Up to 120 hours | A progesterone-receptor modulator that delays ovulation; preferred if body weight over 70 kg |
| Levonorgestrel (Levonelle) | Up to 72 hours | Inhibits ovulation; double the dose if over 70 kg or BMI over 26 |

The copper IUD is the most effective and should be offered first. Ongoing hormonal contraception can be started immediately after levonorgestrel, but only 5 days after ulipristal (using condoms in between).`,
        },
        {
          id: "menopause_hrt",
          name: "Menopause & HRT",
          content: `## Menopause and HRT

Menopause is the permanent cessation of menstruation, diagnosed clinically after 12 months of amenorrhoea. Falling oestrogen causes vasomotor symptoms (hot flushes, night sweats), urogenital atrophy (vaginal dryness, dyspareunia, urinary symptoms), mood and sleep disturbance, and accelerated bone loss.

## Hormone replacement therapy

The principle is to replace oestrogen, adding a progestogen to protect the endometrium in any woman who still has a uterus (unopposed oestrogen causes endometrial hyperplasia and cancer).

- **Oestrogen alone** — only for women who have had a hysterectomy.
- **Combined (oestrogen plus progestogen)** — for women with a uterus. **Cyclical** regimens (with a monthly or three-monthly withdrawal bleed) suit the perimenopause; **continuous** combined regimens suit women who are clearly postmenopausal. A levonorgestrel intrauterine system can provide the progestogen component.

Routes are oral, transdermal (patch or gel) or vaginal (for local urogenital symptoms). **Transdermal** oestrogen avoids the first-pass clot risk and is preferred in women who are obese or at higher risk of venous thromboembolism.

**Benefits** are relief of vasomotor and urogenital symptoms and prevention of osteoporosis. **Risks** are small and depend on the preparation: a raised risk of breast cancer (mainly with the combined form), venous thromboembolism (lower with transdermal), stroke and, in older women, coronary heart disease.

**Absolute contraindications** are current or past breast cancer, oestrogen-dependent (endometrial) cancer, undiagnosed vaginal bleeding, untreated endometrial hyperplasia, current venous thromboembolism, active liver disease and pregnancy.

## Non-hormonal options

For vasomotor symptoms, selective serotonin reuptake inhibitors (fluoxetine, citalopram) or venlafaxine, and cognitive behavioural therapy, help; clonidine is an alternative. Vaginal dryness responds to lubricants or topical oestrogen.

## Contraception in the perimenopause

Fertility persists into the menopause, so contraception is still needed: until **2 years** of amenorrhoea if under 50, or **1 year** if over 50.`,
        },
        {
          id: "miscarriage",
          name: "Miscarriage",
          content: `## Miscarriage

Miscarriage is the loss of a pregnancy before 24 weeks' gestation; most occur in the first trimester. It is common — affecting roughly one in five recognised pregnancies — and the majority of early losses are caused by sporadic chromosomal abnormalities, so a single miscarriage does not reduce the chance of a successful future pregnancy.

## Types of miscarriage

| Type | Bleeding | Cervical os | Ultrasound and notes |
|---|---|---|---|
| Threatened | Light bleeding | Closed | Viable intrauterine pregnancy; most settle |
| Inevitable | Heavy bleeding, pain | Open | Products still in utero but the pregnancy will be lost |
| Incomplete | Bleeding, pain | Open | Some products of conception retained |
| Complete | Bleeding settling | Closed | Uterus empty; products already passed |
| Missed (delayed) | Little or none | Closed | Non-viable pregnancy retained — no heartbeat, or an empty sac |
| Septic | Offensive discharge, fever | Open or closed | Retained products with infection — a surgical and antibiotic emergency |

A **threatened** miscarriage is bleeding with a closed os and a still-viable pregnancy; advise the woman to return if bleeding worsens or lasts beyond 14 days, and to continue routine antenatal care if it settles. **Recurrent miscarriage** — three or more consecutive losses — warrants investigation for antiphospholipid syndrome, parental chromosomal rearrangements, uterine anomalies and inherited thrombophilia.

## Diagnosis

- Assess haemodynamic stability first with a rapid ABCDE assessment: heavy bleeding, or products sitting in an open cervical os, can cause hypovolaemic shock.
- A **transvaginal ultrasound scan** is the key investigation, looking for the fetal pole, crown–rump length and a fetal heartbeat.
- Serum **human chorionic gonadotrophin (hCG)** is used mainly when the scan is inconclusive or the pregnancy location is unknown — in a normal early intrauterine pregnancy the level roughly doubles every 48 hours.
- Miscarriage is confirmed on scan by a crown–rump length of 7 mm or more with no heartbeat, or a mean gestational sac diameter of 25 mm or more with no fetal pole; where measurements are below these thresholds, rescan after 7 days before confirming.

## Management

The three options are expectant, medical and surgical, and where there is a genuine choice the woman's preference guides it.

- **Expectant management** is first-line for 7–14 days in a confirmed miscarriage, letting the products pass naturally. Avoid it where there is a raised bleeding risk (for example late first trimester), a previous traumatic pregnancy experience, evidence of infection, or an inability to tolerate haemorrhage. Advise a pregnancy test after 3 weeks, and rescan if bleeding has not started or is persisting or worsening.
- **Medical management** uses **misoprostol** (a prostaglandin that softens the cervix and contracts the uterus), given vaginally or orally; for a *missed* miscarriage, oral **mifepristone** is given first, followed by misoprostol. Provide analgesia and anti-emetics, warn of bleeding within 4–48 hours, and advise a pregnancy test after 3 weeks (contact a professional if bleeding has not started within 24 hours).
- **Surgical management** is manual vacuum aspiration under local anaesthetic, or surgical evacuation under general anaesthetic, with misoprostol often used to ripen the cervix first. It is preferred with haemodynamic instability, heavy bleeding, infection, or patient choice.

Offer **anti-D immunoglobulin** to rhesus-D-negative women who have *surgical* management of a miscarriage; it is not needed for a threatened or medically-managed miscarriage before 12 weeks. Treat miscarriage as a bereavement — give clear safety-netting and psychological support to the woman and her partner, and signpost charities such as the Miscarriage Association.

> Any woman of reproductive age with bleeding, pain and a positive pregnancy test has an **ectopic pregnancy** until proven otherwise — confirm the pregnancy is inside the uterus on a transvaginal scan before attributing her symptoms to miscarriage.`,
        },
        {
          id: "ectopic_pregnancy",
          name: "Ectopic pregnancy",
          content: `## Ectopic pregnancy

An ectopic pregnancy is implantation outside the uterine cavity — about 95% in a **fallopian tube** (most often its ampulla), and rarely in the cornu, ovary, cervix or a caesarean-section scar. It is never viable, and tubal rupture causes life-threatening intraperitoneal haemorrhage, so it is the key diagnosis to exclude in any woman of reproductive age with early-pregnancy pain or bleeding.

## Presentation and risk factors

- The classic picture is **6–8 weeks of amenorrhoea with unilateral lower abdominal or pelvic pain and vaginal bleeding** (often dark, like prune juice), sometimes with shoulder-tip pain (diaphragmatic irritation from blood) or dizziness and collapse if it has ruptured.
- Risk factors reflect tubal damage: previous ectopic pregnancy, pelvic inflammatory disease, previous tubal surgery or sterilisation, endometriosis, assisted reproduction, and a pregnancy that occurs with an intrauterine device or the progestogen-only pill in situ.

## Diagnosis

- **Transvaginal ultrasound** is the investigation of choice — it may show an adnexal mass separate from the ovary, a tubal ring, or free fluid, with an empty uterus.
- Serum **hCG** helps interpret an inconclusive scan (a "pregnancy of unknown location"): a viable intrauterine pregnancy usually raises the level by at least 63% over 48 hours, whereas a suboptimal rise or a plateau suggests an ectopic. Above the discriminatory level (around 1500 IU/L) an intrauterine pregnancy should be visible on a transvaginal scan.

## Management

Management depends on symptoms, size, hCG level and the woman's stability.

| Approach | When it is appropriate |
|---|---|
| Expectant | Stable, asymptomatic, unruptured, mass under 35 mm, no heartbeat, hCG under 1000 IU/L and falling; follow with serial hCG on days 2, 4 and 7 (expecting a fall of at least 15%) |
| Medical (methotrexate) | Stable, minimal pain, unruptured, mass under 35 mm, no heartbeat, no intrauterine pregnancy, hCG under 1500 IU/L, able to attend follow-up |
| Surgical (laparoscopy) | Significant pain, rupture, mass over 35 mm, a fetal heartbeat, or hCG over 5000 IU/L; also first-line if she cannot attend follow-up |

- **Methotrexate** is a single intramuscular dose — a folate antagonist that halts trophoblast proliferation. Follow up with serial hCG (days 4 and 7, then weekly until negative). Advise avoiding alcohol, sexual intercourse and prolonged sun exposure during treatment, and avoiding conception for at least 3 months afterwards, as it is teratogenic. Where the hCG is 1500–5000 IU/L and the other criteria are met, offer a choice of methotrexate or surgery.
- **Surgery** is laparoscopic where possible. **Salpingectomy** (removing the tube) is first-line; **salpingotomy** (opening the tube and removing the pregnancy) is reserved for women with risk factors for infertility such as damage to the other tube — but around 1 in 5 salpingotomies need further methotrexate or salpingectomy, so serial hCG follow-up is required.
- Offer **anti-D immunoglobulin** to rhesus-negative women who have surgical management; a Kleihauer test is not required.

> Shoulder-tip pain or collapse in early pregnancy signals a ruptured ectopic with haemoperitoneum — resuscitate and arrange emergency surgery, and do not wait for a scan or an hCG result in a woman who is unstable.`,
        },
        {
          id: "gestational_trophoblastic_disease",
          name: "Gestational trophoblastic disease",
          content: `## Gestational trophoblastic disease

Gestational trophoblastic disease is a spectrum of tumours arising from **placental trophoblast**, ranging from the benign but pre-malignant **hydatidiform mole** (molar pregnancy) through the **invasive mole** to the malignant **choriocarcinoma**. Because trophoblast secretes hCG, these tumours can be tracked — and in the UK are managed — through a national screening and treatment programme.

## Complete versus partial mole

| Feature | Complete mole | Partial mole |
|---|---|---|
| Genetics | Diploid and entirely paternal (usually 46,XX, from one sperm duplicating in an empty ovum) | Triploid (usually 69,XXX or 69,XXY — two sperm fertilising one egg) |
| Fetal tissue | Absent | Present, with an abnormal fetus |
| hCG | Very high | Less markedly raised |
| Malignant potential | Around 15% become invasive or choriocarcinoma | Around 0.5% |

## Presentation

- **Vaginal bleeding** in the first or early second trimester is the commonest feature, occasionally with passage of grape-like vesicles.
- A **uterus large for dates** and a very high hCG can exaggerate pregnancy symptoms — hyperemesis, early **pre-eclampsia before 20 weeks**, and rarely hyperthyroidism (hCG is structurally similar to thyroid-stimulating hormone).
- Ultrasound in a complete mole classically shows a **snowstorm or bunch-of-grapes** appearance with no fetus; the diagnosis is confirmed histologically after evacuation.

## Management

- **Suction curettage (evacuation of the uterus)** is first-line for complete and most partial moles — medical evacuation is used instead only where large fetal parts in a partial mole make suction impractical. Send all the products for histology.
- Give **anti-D prophylaxis** to rhesus-negative women after evacuation.
- **Register the woman with a trophoblastic screening centre** (Charing Cross, Sheffield or Dundee in the UK) for serial hCG follow-up, the duration depending on how quickly the hCG normalises; a partial mole is discharged after two normal samples at least 4 weeks apart.
- Advise against conceiving until follow-up is complete, using **barrier contraception** until the hCG has normalised; avoid an intrauterine device until then (perforation risk), and use the combined pill only once the hCG is normal.

## Persistent disease and choriocarcinoma

If the hCG plateaus or rises after evacuation, **gestational trophoblastic neoplasia** (an invasive mole or choriocarcinoma) is diagnosed and treated with chemotherapy — highly curable, and guided by a prognostic score (single-agent methotrexate for low-risk disease, multi-agent regimens for high-risk). Choriocarcinoma spreads early to the lungs, so breathlessness or haemoptysis after any pregnancy event — including a normal delivery or a miscarriage — should prompt a pregnancy test.

> Gestational trophoblastic neoplasia can follow a pregnancy of any kind, not just a mole — so a positive pregnancy test with persistent bleeding or new respiratory symptoms after any delivery or miscarriage is the clue to check an hCG.`,
        },
        {
          id: "pregnancy_hypertension",
          name: "Hypertensive disorders of pregnancy",
          content: `## Hypertensive disorders of pregnancy

Hypertension in pregnancy is graded by timing and by the presence of proteinuria:

| Disorder | Definition |
|---|---|
| Chronic hypertension | Hypertension present before 20 weeks (or pre-pregnancy) |
| Gestational hypertension | New hypertension after 20 weeks, without proteinuria |
| Pre-eclampsia | New hypertension after 20 weeks, with proteinuria or other organ involvement |
| Eclampsia | Seizures complicating pre-eclampsia |

## Aspirin prophylaxis

Offer **aspirin 75–150 mg daily from 12 weeks until birth** to women with **one high-risk factor** (previous hypertensive pregnancy, chronic hypertension, chronic kidney disease, diabetes, or an autoimmune disease such as lupus or antiphospholipid syndrome) **or two moderate-risk factors** (first pregnancy, age over 40, pregnancy interval over 10 years, BMI over 35, family history, or multiple pregnancy).

## Managing the blood pressure

Antihypertensives are started when the blood pressure is consistently above 140/90, aiming for below 135/85. First-line is **labetalol**, then **nifedipine**, then **methyldopa**. **Angiotensin-converting enzyme inhibitors, angiotensin-receptor blockers and thiazides are stopped** — they are teratogenic. Methyldopa is stopped within two days of birth because of the risk of postnatal depression.

## Pre-eclampsia

Beyond hypertension and proteinuria, warning features are headache, visual disturbance, epigastric pain, hyperreflexia, and rising liver enzymes or falling platelets. **HELLP syndrome** (haemolysis, elevated liver enzymes, low platelets) is a severe variant. The only cure is **delivery**, planned around 37 weeks (earlier if severe or the fetus is compromised); give antenatal corticosteroids if delivering before 34–36 weeks, and magnesium sulfate if severe with imminent delivery.

## Eclampsia

Eclampsia is a seizure and an obstetric emergency: ABCDE, call for senior help, and give **intravenous magnesium sulfate** — a 4 g loading dose then a 1 g/hour infusion, continued for 24 hours after the last seizure or after delivery. Monitor for toxicity (loss of reflexes, respiratory depression); the antidote is **calcium gluconate**. Control the blood pressure (labetalol, nifedipine or hydralazine) and expedite delivery once the mother is stable.`,
        },
        {
          id: "gestational_diabetes",
          name: "Gestational diabetes",
          content: `## Gestational diabetes

Gestational diabetes is glucose intolerance first recognised in pregnancy, driven by the insulin resistance of placental hormones. It raises the risk of macrosomia, traumatic delivery, neonatal hypoglycaemia and stillbirth, and marks a high lifetime risk of type 2 diabetes.

## Screening and diagnosis

Risk factors — a previous large baby or previous gestational diabetes, a family history, obesity (BMI over 30) and certain ethnic backgrounds (South Asian, Black Caribbean, Middle Eastern) — prompt an **oral glucose tolerance test at 24–28 weeks** (earlier, and repeated, if there was previous gestational diabetes). It is diagnosed if the **fasting glucose is 5.6 mmol/L or above, or the 2-hour value is 7.8 mmol/L or above**.

## Management

Glucose targets in pregnancy are tight: fasting below 5.3, one hour after meals below 7.8, and two hours after below 6.4 mmol/L.

- **First line** is diet (low glycaemic index) and exercise, provided the fasting glucose is below 7.
- **Second line** is **metformin** if targets are not met within one to two weeks.
- **Third line** adds **insulin**.
- If the fasting glucose is **7 mmol/L or above at diagnosis**, start insulin straight away.

Serial growth scans (every four weeks from 28 to 36 weeks) monitor for macrosomia, and birth is planned by around 40–41 weeks.

## After delivery

Glucose-lowering treatment is **stopped immediately after birth**, and the baby's glucose is checked to exclude neonatal hypoglycaemia. A **fasting glucose (or HbA1c) is checked at 6–13 weeks postpartum** to exclude persistent diabetes, with annual review thereafter given the future risk of type 2 diabetes. Pre-existing diabetes is managed differently — high-dose (5 mg) folic acid, tighter targets, and stopping all agents except metformin and insulin.`,
        },
        {
          id: "antenatal_care",
          name: "Antenatal care & screening",
          content: `## Antenatal care and screening

Antenatal care is the schedule of appointments, screening and advice that supports a healthy pregnancy. NICE recommends **10 appointments in a first pregnancy** and **7 in later pregnancies** if uncomplicated. The estimated date of delivery is calculated by **Naegele's rule** — add one year, subtract three months and add seven days to the first day of the last menstrual period (adjusting for cycles longer than 28 days) — and confirmed by the dating scan.

## The booking appointment (by 10 weeks)

A full history identifies risk factors, and the following are arranged:

- **Booking bloods** — full blood count (anaemia), blood group and rhesus D status, and red-cell antibodies.
- **Infection screening** (offered, may be declined) — HIV, hepatitis B and syphilis, and screening for haemoglobinopathies.
- **Urine** — dipstick and culture for asymptomatic bacteriuria and proteinuria.
- **Folic acid** 400 micrograms daily until 12 weeks — or **5 mg** if at higher risk of a neural tube defect (a previous affected baby, diabetes, body mass index over 30, sickle cell disease, or taking antiepileptic drugs) — plus vitamin D 10 micrograms.
- Assess the risk of venous thromboembolism, gestational diabetes and pre-eclampsia (offer **aspirin 75 to 150 mg from 12 weeks** if at risk — see the Hypertensive disorders of pregnancy topic).
- Advice on smoking and alcohol, and offer the **influenza** vaccine now and the **pertussis (whooping cough)** vaccine from 16 weeks.

## Screening scans and tests

| Test | Timing | Purpose |
|---|---|---|
| Dating scan | 11 to 14 weeks | Confirm gestation by crown–rump length, detect multiple pregnancy, measure nuchal translucency |
| Combined test | 11 to 14 weeks | Down's screening — nuchal translucency, free beta-hCG and pregnancy-associated plasma protein A (PAPP-A) |
| Quadruple test | 15 to 20 weeks | Down's screening (blood markers only) if the combined test was missed |
| Anomaly scan | 18 to 20+6 weeks | Structural anomalies and placental site (rescan at 32 weeks if low-lying) |
| Oral glucose tolerance test | 24 to 28 weeks | Gestational diabetes, if risk factors |

The combined and quadruple tests estimate the risk of trisomy 21 (Down's syndrome) as well as **trisomy 18 (Edwards)** and **trisomy 13 (Patau)**; a high-chance result is followed by a diagnostic test (chorionic villus sampling or amniocentesis) or non-invasive prenatal testing of cell-free fetal DNA.

## Later appointments

- From **24 weeks**, measure the **symphysis–fundal height** at each visit to monitor growth.
- **Anti-D immunoglobulin** is given to rhesus-D-negative women — routinely at **28 weeks** (often with a second dose at 34 weeks), and after any potentially sensitising event.
- At **28 weeks**, repeat the full blood count and antibody screen.
- From **36 weeks**, palpate for **breech** presentation and offer external cephalic version (at 36 weeks if nulliparous, 37 weeks if multiparous).
- At **41 weeks**, offer a membrane sweep and induction of labour.

> Memorise the folic acid doses (400 micrograms standard, 5 mg high-risk), the anti-D schedule (routinely at 28 weeks, and after any sensitising event in a rhesus-negative woman), and the two Down's screening windows (combined 11 to 14 weeks, quadruple 15 to 20 weeks).`,
        },
        {
          id: "labour",
          name: "Labour",
          content: `## Labour

Labour is the onset of strong, regular, painful contractions producing progressive cervical change. It is divided into three stages.

## The three stages

| Stage | From and to | Notes |
|---|---|---|
| First | Onset of contractions to full dilatation (10 cm) | Latent phase to 3 to 4 cm, then active phase; progress about 1 cm every 2 hours |
| Second | Full dilatation to delivery of the baby | Passive (descent) then active (pushing) phase |
| Third | Delivery of the baby to delivery of the placenta | Normally 5 to 10 minutes |

The first stage lasts on average 8 hours in a first labour and 5 hours in later ones. A prolonged first stage is usually from weak contractions, **cephalopelvic disproportion** or malpresentation.

## The mechanism of labour

The fetal head negotiates the pelvis in a set sequence: engagement and descent, flexion, internal rotation, extension (crowning and delivery of the head), restitution and external rotation, and finally delivery of the shoulders and body.

## Managing the third stage

- **Active management** is recommended for all women: **10 units of oxytocin** intramuscularly with delivery of the anterior shoulder, then controlled cord traction once the placenta separates. It reduces postpartum haemorrhage (from roughly 15% to 5%).
- **Physiological management** (delivery by maternal effort, no drugs) causes more bleeding and is reserved for low-risk women who choose it.

## Preterm labour

Preterm labour is the onset of labour before 37 weeks. In a woman at risk (a previous preterm birth or a short cervix), **vaginal progesterone** or a **cervical cerclage** (stitch) can prevent it. In established preterm labour, offer:

- **Antenatal corticosteroids** (intramuscular betamethasone) to accelerate fetal lung maturity — the single most important intervention.
- **Tocolysis** to buy time for steroids or transfer — **nifedipine** first-line (atosiban second) — avoided if there is bleeding or infection.
- **Intravenous magnesium sulfate** for fetal neuroprotection if birth is expected within 24 hours (typically before 30 to 34 weeks).

## Rupture of membranes before labour

- **PROM** (prelabour rupture at term, 37 weeks or more): most women go into labour within 24 hours; offer induction if not, and immediately if there is meconium or group B streptococcus.
- **P-PROM** (preterm, before 37 weeks): admit, give **prophylactic erythromycin** and antenatal corticosteroids, and watch closely for **chorioamnionitis**; aim to deliver by 37 weeks.

> Active management of the third stage — 10 units of oxytocin and controlled cord traction — is offered to every woman because it cuts the postpartum haemorrhage rate roughly threefold. In preterm labour, the priority interventions are corticosteroids for the lungs and magnesium sulfate for the brain.`,
        },
        {
          id: "induction_of_labour",
          name: "Induction of labour",
          content: `## Induction of labour

Induction is the artificial initiation of labour. Common indications are **prolonged pregnancy (offered at 41 weeks)**, prelabour rupture of membranes, fetal growth restriction, diabetes and intrauterine fetal death.

## The Bishop score

The **Bishop score** assesses cervical readiness from five features — dilatation, effacement (or length), consistency, position, and the station of the presenting part. A **score above 6 to 8 means a favourable cervix** likely to respond, while a **low score (6 or under) means the cervix needs ripening** first. The score guides the method.

## Methods

- **Membrane sweep** — a finger swept around the cervical os releases prostaglandins; offered from 40 to 41 weeks to prompt spontaneous labour and reduce the need for formal induction.
- **Vaginal prostaglandin E2 (dinoprostone)** — first-line when the Bishop score is 6 or under, as a gel, tablet or pessary, to ripen the cervix.
- **Cervical balloon (mechanical) catheter** — an alternative to prostaglandin that avoids hyperstimulation; preferred where prostaglandin is unsuitable, for example after a previous caesarean.
- **Artificial rupture of membranes (amniotomy)** then **intravenous oxytocin** — used once the cervix is favourable (Bishop over 6); oxytocin augments contractions to 3 to 4 every 10 minutes.

The main hazard is **uterine hyperstimulation** (too-frequent contractions causing fetal distress), managed by removing the prostaglandin or stopping the oxytocin and giving a tocolytic (terbutaline). If induction fails, the options are a further attempt after a rest, or a caesarean section.

## Birth after a previous caesarean

Women with a previous caesarean choose between a **planned vaginal birth after caesarean (VBAC)** and an **elective repeat caesarean**. VBAC succeeds in about **72 to 75%** of cases but carries a **1 in 200 risk of uterine rupture** (higher if labour is induced, especially with prostaglandins). A **previous classical (vertical) caesarean or a previous uterine rupture** is an absolute contraindication to VBAC.

> Match the method to the Bishop score: a low score needs cervical ripening (vaginal prostaglandin or a balloon catheter) first, whereas a favourable cervix (over 6) allows amniotomy and oxytocin. Watch for uterine hyperstimulation throughout, and remember the raised rupture risk when inducing a VBAC.`,
        },
        {
          id: "cardiotocography",
          name: "Cardiotocography (CTG)",
          content: `## Cardiotocography (CTG)

Cardiotocography records the fetal heart rate against uterine contractions to detect fetal compromise. It is used in labour when there are risk factors — for example meconium, maternal pyrexia, oxytocin use, hypertension, bleeding, or a suspicious intermittent heart rate. A structured reading uses the mnemonic **DR C BRAVADO**.

## Reading a CTG — DR C BRAVADO

- **DR — Define Risk**: why is the CTG being done?
- **C — Contractions**: count them in 10 minutes (aim for 3 to 4 in labour); the height of the trace does not reflect their strength.
- **BRa — Baseline Rate**: normal is **110 to 160 beats per minute**. Tachycardia suggests infection, hypoxia or fever; bradycardia suggests hypoxia or cord compression.
- **V — Variability**: the beat-to-beat variation; **normal is 5 to 25 bpm**. Reduced variability (under 5 bpm for over 30 to 50 minutes) suggests a fetal sleep cycle (if brief), drugs or hypoxia.
- **A — Accelerations**: rises of at least 15 bpm for at least 15 seconds — a **reassuring** sign.
- **D — Decelerations**: falls of at least 15 bpm for at least 15 seconds — the key abnormal feature (see below).
- **O — Overall** impression: normal, suspicious or pathological.

## Types of deceleration

| Type | Timing | Significance |
|---|---|---|
| Early | Mirror the contraction (trough with the peak) | Benign — a normal response to head compression |
| Variable | Vary in timing and shape, often V-shaped | Usually cord compression; concerning if deep or prolonged |
| Late | Begin after the contraction peak and recover after it ends | Always abnormal — suggest fetal hypoxia |

A **sinusoidal** trace (a smooth, regular wave) is an ominous sign of severe fetal anaemia or hypoxia.

## Classification and action

Each feature is reassuring, non-reassuring or abnormal, giving an overall category:

- **Normal** — continue.
- **Suspicious** (one non-reassuring feature) — conservative measures (left lateral position, fluids, stop oxytocin) and closer monitoring.
- **Pathological** (two non-reassuring features, or any abnormal feature) — senior review, conservative measures, and consider fetal blood sampling or expedited delivery.

An acute bradycardia or a single prolonged deceleration lasting **over 3 minutes** is an emergency: if it persists beyond about 9 minutes, expedite delivery.

> Late decelerations and reduced variability point to fetal hypoxia, whereas early decelerations are benign head compression and variable decelerations are usually cord compression. A prolonged deceleration lasting over 3 minutes calls for urgent action.`,
        },
        {
          id: "antepartum_haemorrhage",
          name: "Antepartum haemorrhage",
          content: `## Antepartum haemorrhage

Antepartum haemorrhage is bleeding from the genital tract after **24 weeks** of pregnancy. The two dangerous causes to separate are **placenta praevia** and **placental abruption**; others include local causes and, rarely, vasa praevia.

## Placenta praevia versus placental abruption

| Feature | Placenta praevia | Placental abruption |
|---|---|---|
| Problem | Placenta lies over or near the internal cervical os | Placenta separates from the uterine wall before delivery |
| Bleeding | **Painless**, often bright red | **Painful**, and may be concealed (little visible blood) |
| Uterus | Soft, non-tender | **Tense, woody-hard** and tender |
| Fetus | Usually not distressed early | Often distressed, and may die |
| Key rule | **Never perform a vaginal examination** until praevia is excluded | A clinical diagnosis — a normal scan does not exclude it |

## Placenta praevia

Placenta praevia is defined after 16 weeks as the placenta lying over the internal os (a **low-lying placenta** is within 2 cm of it). Most low-lying placentas found at the 20-week anomaly scan resolve as the uterus grows, so a **rescan at 32 weeks** is arranged; if it persists, an **elective caesarean at around 36 to 37 weeks** is recommended. Symptomatic bleeding needs an ABCDE approach, anti-D if the mother is rhesus-negative, admission and fetal monitoring, with emergency caesarean if she is unstable or the fetus is distressed. Risk factors include a previous caesarean, a previous praevia, multiple pregnancy and smoking.

## Placental abruption

Abruption is premature separation of a normally sited placenta, causing painful bleeding and a hard, tender uterus; the blood loss may be **concealed** behind the placenta, so shock can be out of proportion to the visible bleeding. Risk factors include hypertension and pre-eclampsia, trauma, smoking, cocaine and a previous abruption. Manage with ABCDE, large-bore intravenous access, cross-match, anti-D if needed, and continuous fetal monitoring; deliver by **emergency caesarean** if there is fetal distress, and treat the disseminated intravascular coagulation it can trigger.

> The classic split is painless bleeding with a soft uterus (praevia) versus painful bleeding with a hard, tender uterus (abruption). In any antepartum haemorrhage, do not perform a vaginal examination until placenta praevia has been excluded on a scan.`,
        },
        {
          id: "obstetric_emergencies",
          name: "Obstetric emergencies",
          content: `## Obstetric emergencies

This topic covers the intrapartum and postpartum emergencies of shoulder dystocia, cord prolapse, uterine rupture and postpartum haemorrhage. (Eclampsia is covered in the Hypertensive disorders of pregnancy topic, and amniotic fluid embolism has its own Tracker entry.)

## Shoulder dystocia

The anterior shoulder impacts behind the pubic symphysis after the head delivers. It is an emergency managed by a stepwise drill — call for help and tell the mother to stop pushing:

- **McRoberts' manoeuvre** — hyperflex the hips onto the abdomen (successful in about 90%), with **suprapubic pressure**.
- **Internal manoeuvres** — the Rubin and Wood's screw manoeuvres to rotate the shoulder, or delivery of the posterior arm.
- Then the **all-fours** position, and last-resort measures (symphysiotomy, or the Zavanelli manoeuvre — replacing the head for caesarean).

Complications include **brachial plexus injury (Erb's palsy)** and humeral or clavicular fracture in the baby, and postpartum haemorrhage and perineal tears in the mother.

## Cord prolapse

The umbilical cord descends past the presenting part after the membranes rupture, and cord compression or vasospasm then causes fetal hypoxia. It is an emergency: **push the presenting part up** (manually or by filling the bladder), place the mother in a **knee–chest or left-lateral head-down** position, avoid handling a cord that is outside the introitus, consider tocolysis, and **deliver immediately** — usually by emergency caesarean.

## Uterine rupture

A tear through the uterine wall, most often at a previous caesarean scar (especially with induced or augmented labour), presents with severe pain, fetal distress, loss of the contraction pattern, vaginal bleeding and maternal shock. Manage with ABCDE, resuscitation and transfusion, and an immediate **laparotomy** to deliver the baby and repair or remove the uterus.

## Postpartum haemorrhage

Postpartum haemorrhage (PPH) is blood loss over 500 mL after delivery (major if over 1000 mL). The causes are the **four Ts** — **Tone** (uterine atony, the commonest), **Trauma** (tears), **Tissue** (retained placenta) and **Thrombin** (coagulopathy). Manage with ABCDE and a major-haemorrhage call; for atony, **rub up the fundus** and give uterotonics in sequence — **oxytocin, ergometrine, carboprost and misoprostol** — then surgical measures (intrauterine balloon tamponade, a brace suture, or hysterectomy) if bleeding continues. Active management of the third stage helps prevent it.

> The postpartum-haemorrhage causes are the four Ts (Tone, Trauma, Tissue, Thrombin), with uterine atony the commonest. For an impacted shoulder, McRoberts' with suprapubic pressure resolves most cases; for a prolapsed cord, relieve the compression and deliver immediately.`,
        },
        {
          id: "torch_infections",
          name: "TORCH & congenital infections",
          content: `## TORCH and congenital infections

**TORCH** is the classic group of infections that cross the placenta to harm the fetus: **T**oxoplasmosis, **O**ther (syphilis, parvovirus B19, listeria and others), **R**ubella, **C**ytomegalovirus and **H**erpes simplex. (Chickenpox in pregnancy has its own topic.) In general, the earlier in pregnancy the infection, the greater the risk of severe fetal damage.

## Toxoplasmosis

Caught from raw or undercooked meat and from cat faeces (soil and litter). Congenital toxoplasmosis classically causes the triad of **intracranial calcification, chorioretinitis and hydrocephalus**. The mother is given **spiramycin** to reduce transmission, adding sulfadiazine and pyrimethamine (with folinic acid) if fetal infection is confirmed. Prevent by avoiding raw meat, cat litter and unwashed soil when gardening.

## Rubella

Rubella is now rare thanks to MMR vaccination, but is devastating in the **first trimester**: **congenital rubella syndrome** causes **sensorineural deafness, cataracts and congenital heart disease (patent ductus arteriosus)**. There is **no treatment**, so prevention is everything — check rubella immunity before pregnancy and vaccinate before conceiving (MMR is a live vaccine and cannot be given during pregnancy).

## Cytomegalovirus

Cytomegalovirus (CMV) is the **commonest congenital infection**. It causes **sensorineural hearing loss**, and can also cause growth restriction, microcephaly and intracranial calcification. There is no antenatal treatment; the baby has audiology and ophthalmology follow-up and is given postnatal antivirals (valganciclovir) if infected.

## Herpes simplex

The danger is **neonatal herpes** acquired during delivery through an actively infected genital tract. A **primary genital infection in the third trimester** is the highest-risk situation: give the mother aciclovir and recommend an **elective caesarean**. A recurrent infection, or a primary one earlier in pregnancy, is managed with suppressive aciclovir from 36 weeks and usually allows vaginal delivery.

## Other — syphilis, parvovirus B19 and listeria

- **Syphilis** — screened for at booking and treated with **benzylpenicillin** (with genitourinary-medicine referral for contact tracing); untreated, it causes congenital syphilis, so the baby is treated if the mother was not.
- **Parvovirus B19** (slapped-cheek disease) — suppresses fetal red-cell production, causing **fetal anaemia and hydrops fetalis**; refer to fetal medicine for surveillance, with **intrauterine transfusion** if hydrops develops.
- **Listeria** — from unpasteurised dairy, soft cheeses and pâté; causes a flu-like maternal illness but can lead to miscarriage, stillbirth or neonatal sepsis, and is treated with **amoxicillin**.

> Learn the congenital triads — toxoplasmosis (intracranial calcification, chorioretinitis, hydrocephalus) versus rubella (deafness, cataracts, cardiac). CMV is the commonest congenital infection and a leading cause of childhood sensorineural deafness, and parvovirus B19 causes fetal anaemia and hydrops.`,
        },
        {
          id: "chickenpox_pregnancy",
          name: "Chickenpox in pregnancy",
          content: `## Chickenpox in pregnancy

Chickenpox (primary varicella zoster virus infection) is dangerous in pregnancy for both mother and baby. The mother is at risk of **varicella pneumonitis, hepatitis and encephalitis**, and the fetus of **congenital varicella syndrome** or **neonatal varicella**. About 90% of adults are already immune, so the first step after any exposure is to establish immunity.

## Exposure in a non-immune woman

If a non-immune pregnant woman has significant exposure to chickenpox or shingles, check varicella antibodies, and if she is not immune give **post-exposure prophylaxis**:

- **Under 20 weeks** — **varicella zoster immunoglobulin (VZIG)** as soon as possible (effective up to 10 days after contact).
- **20 weeks or more** — VZIG or antiviral prophylaxis (aciclovir or valaciclovir) 7 to 14 days after exposure.

She is then considered infectious for 3 to 4 weeks and should avoid other pregnant women and neonates.

## If the rash develops

- Give **oral aciclovir** if she presents **within 24 hours of the rash and is 20 weeks or more** (used with caution under 20 weeks); intravenous aciclovir for severe disease. VZIG has no benefit once the rash has appeared.
- Refer to fetal medicine for a detailed ultrasound.

## Fetal and neonatal risk

- **Congenital varicella syndrome** — from maternal infection in the first 28 weeks (highest around 8 to 20 weeks): dermatomal skin scarring, limb hypoplasia, eye defects and neurological damage.
- **Neonatal varicella** — most dangerous when the mother develops the rash from about **5 days before to 2 days after delivery**, leaving no time for protective antibody to cross the placenta. Delay planned delivery until 7 days after the rash if possible, and give the neonate **VZIG** (and aciclovir if infected).

> The two decisions to get right: **VZIG** for a non-immune woman *exposed* to chickenpox (prophylaxis, before any rash), but **aciclovir** once the rash has appeared. Maternal chickenpox around delivery (5 days before to 2 days after) puts the newborn at serious risk and needs neonatal VZIG.`,
        },
        {
          id: "pregnancy_uti_gbs",
          name: "UTI, GBS & bloodborne viruses in pregnancy",
          content: `## Urinary, group B streptococcal and bloodborne infections in pregnancy

## Urinary tract infection

**Asymptomatic bacteriuria** is screened for and treated in pregnancy because it can progress to **pyelonephritis** and trigger preterm labour. Antibiotic choice avoids the fetal-risk periods:

- **Nitrofurantoin** first-line — but **avoid at term** (a risk of neonatal haemolysis).
- **Trimethoprim** is a **folate antagonist and is avoided, especially in the first trimester** (when the teratogenic risk is highest).
- Second-line options, guided by sensitivities, are amoxicillin or cefalexin.

## Group B streptococcus

Group B streptococcus (GBS) colonises the vagina in many women and can cause **early-onset neonatal sepsis**. The UK uses a **risk-based** approach (not universal screening), giving **intrapartum intravenous benzylpenicillin** to women with risk factors — GBS in this or a previous pregnancy, a previously affected baby, preterm labour, prolonged rupture of membranes, or intrapartum fever. Prophylaxis is not needed for a planned caesarean with intact membranes.

## HIV

With treatment, vertical transmission falls to under 1%. **Antiretroviral therapy is offered to all pregnant women**, and the **mode of delivery depends on the viral load at 36 weeks**:

- **Under 50 copies/mL** — vaginal delivery can be offered.
- **Over 50 copies/mL** — elective caesarean with an intrapartum zidovudine infusion.

The cord is clamped early, the neonate receives antiretroviral prophylaxis, and in the UK mothers are **advised not to breastfeed**.

## Hepatitis B and C

- **Hepatitis B** — give the neonate **hepatitis B immunoglobulin and vaccination** at birth (which nearly abolishes transmission); the mother is given an antiviral (tenofovir) if the viral load is high. **Breastfeeding is safe.**
- **Hepatitis C** — no specific delivery precautions reduce transmission, and the mother's antiviral treatment is **deferred until after pregnancy** (interferon and ribavirin are contraindicated).

## Maternal sepsis

Sepsis (for example from chorioamnionitis or a urinary source) is a leading cause of maternal death: apply the **Sepsis Six** (oxygen, blood cultures, intravenous antibiotics, fluids, lactate and urine-output monitoring) and monitor the fetus with continuous cardiotocography.

> Two prescribing rules: avoid **trimethoprim** in the first trimester (a folate antagonist) and **nitrofurantoin** at term (neonatal haemolysis). For HIV, antiretrovirals for all, and the mode of delivery turns on the 36-week viral load (the 50 copies/mL threshold).`,
        },
        {
          id: "pregnancy_liver_disease",
          name: "Liver disease in pregnancy",
          content: `## Liver disease in pregnancy

Three liver disorders are specific to pregnancy: **intrahepatic cholestasis of pregnancy (obstetric cholestasis)**, **acute fatty liver of pregnancy**, and the **HELLP syndrome** (a variant of severe pre-eclampsia).

## Obstetric cholestasis

Intrahepatic cholestasis of pregnancy typically presents in the **third trimester** with **intense itching — classically of the palms and soles — and no rash**. Bile acids and liver transaminases are raised. The main danger is **stillbirth**, whose risk rises once the **serum bile acids reach about 100 micromol/L**.

- **Symptom relief** — **ursodeoxycholic acid** (eases the pruritus), emollients and sedating antihistamines; **vitamin K** if the prothrombin time is prolonged.
- **Monitoring** — weekly liver function and bile acids, and attention to fetal movements.
- **Delivery** — the timing is guided by the bile-acid level: planned birth around 38 to 39 weeks for moderately raised acids, and earlier (35 to 36 weeks) once they reach 100 micromol/L. The itch and liver tests resolve after delivery (confirm at a postnatal review).

## Acute fatty liver of pregnancy

A rare but life-threatening microvesicular fatty infiltration of the liver, presenting in the third trimester with malaise, nausea and vomiting, right-upper-quadrant pain, jaundice, **hypoglycaemia** and coagulopathy; it is linked to fetal **long-chain 3-hydroxyacyl-CoA dehydrogenase (LCHAD) deficiency**. Management is **supportive intensive care** — correcting hypoglycaemia, electrolytes and coagulopathy — with **urgent delivery** once the mother is stabilised.

## HELLP syndrome

HELLP — **H**aemolysis, **E**levated **L**iver enzymes and **L**ow **P**latelets — is a severe manifestation of pre-eclampsia (see the Hypertensive disorders of pregnancy topic). It causes right-upper-quadrant or epigastric pain, nausea and malaise, and is managed like severe pre-eclampsia, with stabilisation and delivery.

> Obstetric cholestasis is itching of the palms and soles without a rash, with raised bile acids and a stillbirth risk that drives timed delivery. Acute fatty liver brings hypoglycaemia and coagulopathy and needs urgent delivery, while HELLP is a severe pre-eclampsia variant.`,
        },
        {
          id: "vaginal_infections",
          name: "Bacterial vaginosis & vulvovaginal candidiasis",
          content: `## Bacterial vaginosis and vulvovaginal candidiasis

These are two of the commonest causes of vaginal discharge. **Neither is a sexually transmitted infection**, although bacterial vaginosis is associated with sexual activity.

## Comparing the common causes of vaginal discharge

| Feature | Bacterial vaginosis | Vulvovaginal candidiasis | Trichomoniasis |
|---|---|---|---|
| Organism | Overgrowth of anaerobes (notably Gardnerella vaginalis) replacing lactobacilli | Candida albicans, a yeast | Trichomonas vaginalis, a flagellated protozoan |
| Discharge | Thin, grey-white, homogeneous | Thick, white, curd-like ("cottage cheese") | Frothy, yellow-green, offensive |
| Odour | Offensive, fishy | Not offensive | Offensive |
| Itch and soreness | Usually absent | Prominent | Present |
| Vaginal pH | Above 4.5 | Normal, 4.5 or below | Above 4.5 |
| Sexually transmitted | No | No | Yes |

## Bacterial vaginosis

An overgrowth of anaerobic organisms that replaces the normal lactobacilli and raises the vaginal pH.

## Investigating bacterial vaginosis

- **Vaginal pH** — raised above 4.5, measured with narrow-range pH paper.
- **Whiff (amine) test** — adding potassium hydroxide to the discharge releases a fishy odour.
- **Gram-stained smear** — scored by the Hay-Ison or Nugent method. **Clue cells** (epithelial cells studded with adherent bacteria) are the classic microscopy finding.
- **Full sexual health screen** — nucleic acid amplification testing (NAAT) for chlamydia and gonorrhoea, with HIV and syphilis serology, should be offered alongside.

The **Amsel criteria** remain a practical bedside standard: three of the four of a thin homogeneous discharge, a pH above 4.5, a positive whiff test, and clue cells on microscopy.

## Treating bacterial vaginosis

- **First line** — **metronidazole 400 mg twice daily orally for 5 to 7 days**.
- **Alternatives** — intravaginal metronidazole or clindamycin gel.
- **If adherence is a problem** — a **single 2 g oral dose of metronidazole**, but **not in pregnancy**.
- **Advice** — avoid vaginal douching and excessive genital washing, both of which disturb the normal flora.
- **In pregnancy** — bacterial vaginosis is associated with **preterm labour and chorioamnionitis**, so symptomatic infection should be treated. Avoid the single 2 g dose.

## Vulvovaginal candidiasis

**Risk factors** are recent antibiotic use, combined oral contraception, diabetes mellitus and excessive washing. Explain clearly that this is **not a sexually transmitted infection**.

## Treating vulvovaginal candidiasis

Prescribe an antifungal, either local or oral.

- **Local** — a clotrimazole pessary or cream, for example **clotrimazole 500 mg per vagina as a single dose**. This is **first line in pregnancy**.
- **Oral** — **fluconazole 150 mg orally as a single dose**, which is first line in non-pregnant women, or **itraconazole 200 mg twice daily for one day**.
- **If there are vulval symptoms** — add a **topical imidazole** (clotrimazole or ketoconazole) alongside the oral or intravaginal antifungal. Warn that topical imidazoles **damage latex condoms and diaphragms**.
- **Girls aged 12 to 15 years** — consider topical clotrimazole 1% or 2% applied two to three times daily. Do **not** prescribe intravaginal or oral antifungals.
- **Pregnancy** — use local treatment only (creams or pessaries); **oral antifungals are contraindicated**.
- Intravaginal clotrimazole, topical clotrimazole and oral fluconazole are all available **over the counter**.

## Self-care advice in candidiasis

- Return if symptoms have not resolved in **7 to 14 days**.
- Wash the vulval area with a **soap substitute**, externally and **no more than once a day**, and moisturise with a simple emollient.
- Avoid soaps, shower gels, wipes and feminine hygiene products; avoid washing the vulval area more than once daily.
- Avoid biological washing powders and fabric conditioners for underwear, vaginal douching, and tight-fitting or non-absorbent clothing.
- Probiotics such as live yoghurt, taken orally or applied topically, may relieve symptoms.
- Do **not** routinely treat an asymptomatic sexual partner.

> Bacterial vaginosis gives a thin grey fishy discharge with a pH above 4.5 and clue cells, and is treated with metronidazole 400 mg twice daily for 5 to 7 days. Candidiasis gives a thick itchy white discharge with a normal pH, treated with a clotrimazole pessary or a single 150 mg dose of fluconazole — and local treatment only in pregnancy.`,
        },
        {
          id: "pelvic_inflammatory_disease",
          name: "Pelvic inflammatory disease",
          content: `## Pelvic inflammatory disease

Infection ascending from the cervix into the upper genital tract — the endometrium, fallopian tubes, ovaries and pelvic peritoneum. It is usually sexually transmitted, most often caused by Chlamydia trachomatis or Neisseria gonorrhoeae.

**Risk factors** — age under 25 years, a current or previous sexually transmitted infection, multiple sexual partners, and previous pelvic inflammatory disease.

## When to admit

Arrange **urgent hospital admission** if there are severe systemic symptoms, signs of complications such as a tubo-ovarian abscess, or **any suspicion of pregnancy** (an ectopic pregnancy must be excluded).

## Antibiotic treatment

Treatment is started **empirically**, before swab results are available, because delay increases the risk of tubal damage.

**Outpatient regimen**

- **Ceftriaxone 1 g intramuscularly as a single dose**, plus
- **Doxycycline 100 mg twice daily orally for 14 days**, plus
- **Metronidazole 400 mg twice daily orally for 14 days**.
- An alternative regimen is **ofloxacin plus metronidazole for 14 days**.

**If the woman is pyrexial or oral treatment has failed**

- **First line** — intravenous cefoxitin plus doxycycline.
- **Second line** — intravenous clindamycin plus gentamicin.

**Intrauterine device** — consider removing a device that is in situ, usually where the patient has failed to respond to treatment after **72 hours**.

## Sexual health management

- Offer **chlamydia and gonorrhoea testing**, ideally **before** starting antibiotics.
- **Contact tracing** — current and recent partners (within the **last 6 months**) should be contacted and offered advice, screening and treatment.
- Advise **no sexual intercourse until the antibiotic course is complete** and partners have been treated.
- Advise on **barrier contraception**, and discuss ongoing contraception (including whether to remove an intrauterine device).
- Arrange a **test of cure** if the initial chlamydia or gonorrhoea test was positive.

## Follow-up

- Review **within 72 hours** if managed as an outpatient, to assess the response. If there is no improvement, admit for intravenous antibiotics.
- Review again at **2 to 4 weeks** to confirm resolution, reiterate the importance of sexual health, and reassure that fertility is not affected if the course was completed.

## Complications

- **Infertility** — counsel about the small risk of subfertility, which rises with each recurrence.
- **Ectopic pregnancy**, from tubal scarring.
- **Chronic pelvic pain**.
- **Fitz-Hugh-Curtis syndrome** — perihepatitis producing right-upper-quadrant pain from peritoneal spread.

Patient information is available from BASHH, the RCOG and the NHS.

> Treat pelvic inflammatory disease empirically with ceftriaxone 1 g intramuscularly plus 14 days of doxycycline and metronidazole. Screen and trace partners from the last 6 months, review at 72 hours and again at 2 to 4 weeks, and counsel about infertility, ectopic pregnancy and chronic pelvic pain.`,
        },
        {
          id: "urinary_incontinence",
          name: "Urinary incontinence & overactive bladder",
          content: `## Urinary incontinence and overactive bladder

Management depends on the **predominant symptom**, so classification comes first.

## Classification

| Type | Definition |
|---|---|
| Stress incontinence | Involuntary leakage of small amounts of urine when intra-abdominal pressure rises — coughing, laughing or sneezing. Due to pelvic floor weakness or intrinsic sphincter deficiency. |
| Urge incontinence | Involuntary leakage accompanied or immediately preceded by an urge to pass urine. |
| Overactive bladder syndrome | Increased frequency and nocturia, not necessarily with incontinence. If incontinence is present it is classed as urge incontinence. |
| Mixed incontinence | Features of both urge and stress incontinence. |
| Overflow incontinence | Detrusor underactivity or bladder outlet obstruction causing urinary retention with leakage. |
| Continuous incontinence | Indicates either severe incontinence or a fistula. |

**Risk factors** — for stress incontinence: age, traumatic (forceps) delivery, obesity and previous pelvic surgery. For urge incontinence: age, obesity, smoking, family history and diabetes mellitus.

## Managing stress incontinence

- **Conservative** — avoid caffeinated drinks, avoid both excessive and unduly restricted daily fluid intake, lose weight if the body mass index is above 30, and stop smoking. Involve the local multidisciplinary team.
- **First line** — **supervised pelvic floor muscle training**: at least **8 contractions performed 3 times a day for a minimum of 3 months**, continued longer if beneficial.
- **Second line** — **surgery**, initiated only by secondary care. Options are colposuspension (sutures lift the bladder neck and fix it to Cooper's ligaments), an autologous rectus fascial sling, a retropubic mid-urethral mesh sling (both elevating the urethra), or intramural urethral bulking agents injected around the urethra. Follow-up after any of these should happen **within 6 months**.
- **Third line** — **duloxetine**, which enhances sphincter contraction, for women unsuitable for surgery or who prefer drug treatment. Review at 2 to 4 weeks.

## Managing urge incontinence and overactive bladder

- **Conservative** — the same caffeine, fluid and weight measures.
- **First line** — **bladder retraining for at least 6 weeks**, gradually increasing the interval between voids.
- **Second line** — **bladder-stabilising drugs (antimuscarinics)**. NICE recommends immediate-release oxybutynin, immediate-release tolterodine, or once-daily darifenacin. **Immediate-release oxybutynin should be avoided in frail older women.**
- **Third line** — **mirabegron**, a beta-3 agonist, useful where anticholinergic side effects are a concern in frail elderly patients.
- **Fourth line** — **surgical and neuromodulatory options**: botulinum toxin injection, percutaneous tibial nerve stimulation, or sacral nerve stimulation.

> Stress incontinence is treated with pelvic floor muscle training for at least 3 months, then surgery, with duloxetine reserved for those unsuitable for it. Urge incontinence is treated with 6 weeks of bladder retraining, then an antimuscarinic — avoiding immediate-release oxybutynin in frail older women — then mirabegron.`,
        },
        {
          id: "urogenital_prolapse",
          name: "Urogenital prolapse",
          content: `## Urogenital prolapse

Descent of the pelvic organs into the vagina as a result of pelvic floor weakness.

**Risk factors** — multiparity, increasing age, obesity, a prolonged second stage of labour, and heavy lifting.

Management is individualised. The factors to weigh are the woman's own preferences, the site of the prolapse, lifestyle factors, comorbidities, age, a desire for childbearing, previous abdominal or pelvic floor surgery, and the benefits and risks of each individual procedure.

## General lifestyle advice

- Lose weight if the body mass index is above 30.
- Avoid heavy lifting.
- Prevent and treat constipation.

## Conservative and medical management

- **Pelvic floor exercises** — a supervised **16-week course**.
- **Oestrogens** — given as a pill, patch, cream or implant. These help symptom relief, particularly where there is coexisting vaginal atrophy.
- **Vaginal ring pessary** — **changed every 6 months**. Side effects include unpleasant discharge, irritation, urinary tract infection, and interference with sexual intercourse (intercourse is not possible with a shelf pessary).

## Surgical management

**Where there is no preference about preserving the uterus**

- Vaginal hysterectomy, with or without vaginal sacrospinous fixation — removal of the uterus, with the top of the vagina stitched to a pelvic ligament.
- Vaginal sacrospinous hysteropexy — the cervix is stitched to a pelvic ligament.
- Manchester repair — shortening of the cervix to support the uterus.
- Sacro-hysteropexy with mesh — mesh attaches the uterus to the sacral vertebrae.

**Where the uterus is to be preserved**

- Vaginal sacrospinous hysteropexy.
- Manchester repair, **unless** the woman wishes to have children in the future.

**Vault prolapse, after previous hysterectomy**

- Vaginal sacrospinous fixation.
- Sacrocolpopexy — mesh attaches the vagina to the sacral vertebrae.

**Colpocleisis** — closure of the vagina. Offered **only** to women who do not intend to have penetrative sex, or who are at high surgical risk.

> Manage prolapse with weight loss, avoiding heavy lifting and treating constipation, then a 16-week pelvic floor course, topical oestrogen and a ring pessary changed every 6 months. Surgery is tailored to whether the uterus is to be preserved, with colpocleisis reserved for women not intending penetrative sex or at high surgical risk.`,
        },
        {
          id: "endometriosis",
          name: "Endometriosis",
          content: `## Endometriosis

Endometrial-like tissue occurring outside the uterine cavity. It affects around **10% of women of reproductive age**, is known to **recur throughout reproductive life**, and cannot be guaranteed to be cured.

Treatment is based on **age, symptoms, extent of disease and the desire to have children** — so establish fertility plans first.

**Risk factors** — early menarche, family history, nulliparity, prolonged menstruation (more than 5 days) and short menstrual cycles (under 28 days).

## Medical therapy

- **Analgesia** — NSAIDs and/or paracetamol reduce the severity of dysmenorrhoea and pelvic pain. **Codeine and opiates should be avoided**, because they can worsen coexisting irritable bowel syndrome.
- **Combined oral contraceptive pill** — can be taken for 21 days with a 7-day pill-free break, but may be more effective at relieving symptoms if **tricycled** (three packets back to back), or taken continuously to induce amenorrhoea. If it gives symptomatic relief it can be continued for several years until pregnancy is intended. **Do not offer if trying to conceive.** If ineffective, consider treating coexisting conditions such as irritable bowel syndrome and change the medical management.
- **Progestogens** — used to induce amenorrhoea in women with contraindications to the combined pill. **Do not offer if trying to conceive.** Depot medroxyprogesterone acetate and the levonorgestrel intrauterine system are particularly effective for long-term therapeutic effect, especially after surgery. The progestogen-only pill and the implant are alternatives.
- **Gonadotrophin-releasing hormone (GnRH) agonists**, for example leuprorelin — effective at relieving symptom severity. Usually given as slow-release depot formulations lasting a month or more, and also available as daily intranasal sprays. They **should not be used for longer than 6 months** because of the risk of osteoporosis.

## Fertility-sparing surgery

- **Laparoscopy both diagnoses and treats** endometriosis. NICE recommends **laparoscopic excision or ablation of endometriosis plus adhesiolysis**. This is the preferred management where fertility is a priority, as it improves the chance of conceiving.
- **Adjunct** — 3 months of a GnRH agonist before surgery.
- Hormonal treatment can be considered after surgery to manage symptoms.
- The **risk of recurrence after surgery is as high as 30%**, so long-term medical therapy is often necessary and is usually started straight afterwards.
- Specialist surgery may be needed where endometriosis has caused extensive adhesions or involves other organs.

## Hysterectomy and oophorectomy

- Hysterectomy with removal of the ovaries and all visible endometriotic lesions should be considered in women who have **completed their family** and have failed to respond to conservative treatment.
- The woman must be informed that **hysterectomy will not necessarily cure the symptoms or the disease**.

> Endometriosis affects about 1 in 10 women of reproductive age. Establish fertility plans first: NSAIDs, then the combined pill (often tricycled) or a progestogen for those not trying to conceive, GnRH agonists for no more than 6 months, and laparoscopic excision or ablation where fertility matters — with recurrence in up to 30% after surgery.`,
        },
        {
          id: "uterine_fibroids",
          name: "Uterine fibroids",
          content: `## Uterine fibroids

Benign smooth-muscle tumours (leiomyomas) of the uterus. They are common, affecting **20 to 50% of women over 30**, and increase in prevalence with age until the menopause.

**Risk factors** — increasing age until the menopause, early puberty, obesity, Afro-Caribbean ethnicity and a family history.

**Asymptomatic fibroids** require only conservative management.

## Medical treatment

The commonest symptom is **menorrhagia**, so medical treatment often targets the bleeding.

- **Levonorgestrel intrauterine system** — useful where the woman also requires contraception, but it **cannot be used if there is distortion of the uterine cavity**.
- **Non-hormonal** — tranexamic acid or NSAIDs.
- **Hormonal** — the combined oral contraceptive pill or oral progestogens.
- These options may be ineffective in the presence of a submucous fibroid, or an enlarged uterus that is palpable abdominally.
- **Injectable GnRH agonist** — the only effective medical treatment for fibroid size. It induces a menopausal state by shutting down ovarian oestradiol production, but is poorly tolerated because of severe menopausal symptoms. It is used short term, for example 3 months, to reduce fibroid size before surgery.
- **Ulipristal acetate**, a selective progesterone receptor modulator, was formerly used to shrink fibroids but is **no longer part of routine practice** after reports of serious liver injury. Where used at all it is a last-line option for women unsuitable for surgery or embolisation, with liver function monitoring.
- Neither GnRH agonists nor ulipristal are long-term solutions — **fibroids regrow as soon as ovarian function returns**.

## Surgical treatment

The choice depends on the presenting complaint and the patient's preferences about menstrual function and fertility.

- **Hysteroscopic surgery** — minimally invasive removal of **submucous fibroids and fibroid polyps**, which relieves menorrhagia.
- **Myomectomy** — preferred if preservation of fertility is required. It can be done laparoscopically (power morcellation shrinks the fibroids for removal) or open. There is a **small but significant risk of uncontrolled life-threatening bleeding**, which may require conversion to hysterectomy.
- **Hysterectomy** — the definitive treatment.
- **Hysteroscopic endometrial ablation**.
- Hysterectomy and myomectomy can be preceded by **3 months of a GnRH agonist** to reduce the bulk and vascularity of the fibroids. This can allow a suprapubic incision and vaginal hysterectomy rather than a midline abdominal incision and abdominal hysterectomy, giving quicker recovery and fewer complications.

## Radiological treatment

**Uterine artery embolisation** — offered only to women **not desiring fertility**.

- Embolisation induces infarction and degeneration of the fibroids, reducing fibroid volume by around **50%**.
- Patients usually require admission to manage the pain of uterine artery occlusion, needing opiate analgesia.
- **Complications** — fever, infection, fibroid expulsion and potential ovarian failure.
- **One-third of women require further medical, radiological or surgical treatment within 5 years.**
- It is as effective as myomectomy for relieving fibroid-related menorrhagia and pressure symptoms.

> First line for symptomatic fibroids is the levonorgestrel intrauterine system, unless the cavity is distorted, with tranexamic acid or the combined pill as alternatives. GnRH agonists shrink fibroids short term before surgery. Myomectomy preserves fertility, while uterine artery embolisation does not and is followed by further treatment in a third of women within 5 years.`,
        },
        {
          id: "ovarian_cysts",
          name: "Ovarian cysts",
          content: `## Ovarian cysts

Management depends on the woman's **menopausal status**, the **size** of the cyst, and whether it appears **simple or complex** on ultrasound.

## Asymptomatic cysts in premenopausal women

These tend to be an incidental finding on ultrasound.

- **Simple and small, under 50 mm** — likely to be physiological and likely to resolve within **3 menstrual cycles**. These do **not** require follow-up.
- **Simple, 50 to 70 mm** — require **yearly ultrasound** follow-up.
- **Over 70 mm** — require further imaging, such as magnetic resonance imaging, or surgical intervention with laparoscopic removal.
- If the mass is **large with solid components**, for example a dermoid cyst, **laparotomy** may be indicated.

## The acutely unwell woman

Requires **urgent surgical exploration** — laparoscopy or laparotomy — to manage possible **ovarian torsion, cyst rupture or haemorrhage**, alongside resuscitation and broad-spectrum antibiotics.

## Postmenopausal women

A **solid or complex** ovarian cyst in a postmenopausal woman is regarded as **suspicious for malignancy**.

- Perform **transvaginal ultrasound** to determine the **risk of malignancy index**, which combines the ultrasound features of the cyst, menopausal status and CA125.
- Refer to **gynaecological oncology**, with laparotomy as required.

The risk of malignancy index is set out in full in the Ovarian cancer topic.

> Simple cysts under 50 mm in premenopausal women need no follow-up, 50 to 70 mm need yearly ultrasound, and those over 70 mm need magnetic resonance imaging or surgery. Any solid or complex cyst after the menopause is suspicious — calculate the risk of malignancy index and refer to gynaecological oncology. Sudden severe pain suggests torsion and needs urgent surgery.`,
        },
        {
          id: "vulval_conditions",
          name: "Vulval & vaginal conditions",
          content: `## Vulval and vaginal conditions

## Lichen sclerosus

A chronic inflammatory skin condition producing white, atrophic, intensely itchy vulval plaques, and carrying a small long-term risk of vulval squamous cell carcinoma.

- **Good skin care** — a soap substitute, emollients, and avoidance of irritants.
- **Strong topical steroid** — for example **clobetasol propionate ointment for 3 months**, then review.
- **Biopsy is indicated if the condition does not resolve** with treatment, to exclude malignancy.

## Pruritus vulvae

Vulval itching is a symptom rather than a diagnosis, so the priority is identifying and treating the underlying cause.

**General advice**

- Shower the vulval area with an emollient, avoiding both water alone and soap, and dab dry afterwards.
- Avoid over-the-counter preparations, wet wipes, perfumed products, tight-fitting clothes, fabric softener and spermicidal condoms.
- Use emollients liberally.
- A sedating antihistamine at bedtime helps if sleep is affected.

**Treating the underlying cause**

- **Contact dermatitis** — remove the irritant exposure and use emollients as soap substitutes. Add **1% hydrocortisone** if mild, or **betamethasone or clobetasol** if severe or lichenified. Refer to dermatology if removing the irritant has not resolved the condition.
- **Lichen simplex** — treat the underlying skin condition with a **potent topical corticosteroid such as betamethasone for 14 days**, plus an emollient as a soap substitute.
- **Lichen sclerosus** — as described above.
- **Unknown cause** — an emollient plus a mildly anxiolytic antihistamine such as **hydroxyzine** for symptomatic relief, and consider 1% hydrocortisone. If symptoms persist, refer to a dermatology, gynaecology or vulval clinic, continuing the emollient and antihistamine while waiting.

**Referral**

- Refer to secondary care if symptoms persist despite treatment of a known cause, if the cause is unclear, or if there is a pre-malignant condition.
- Refer to a specialist under the **2-week-wait** pathway if cancer is suspected.

## Atrophic vaginitis

Oestrogen deficiency after the menopause causes vaginal dryness, soreness, dyspareunia and spotting.

- **Exclude malignancy**, in particular **endometrial cancer**, before attributing bleeding to atrophy.
- **Vaginal lubricants** before intercourse, and regular **moisturisers**.
- **Topical oestrogens** — inform the patient that relief follows after about **3 weeks** of treatment. A ring can be inserted into the posterior fornix of the vagina and **changed every 3 months**.
- **Systemic hormone replacement therapy** if there are coexisting menopausal symptoms, as covered in the Menopause and HRT topic.
- **Reconsider the diagnosis** if treatment continues to fail.

## Bartholin's cyst and abscess

Obstruction of a Bartholin duct produces a cyst, which may become infected and form an abscess.

**Risk factors** — nulliparity, child-bearing age, and a previous Bartholin's cyst.

- **Asymptomatic, smaller cyst** — a conservative approach with sitz baths or warm compresses.
- **Symptomatic, larger cyst** — **marsupialisation** (the internal aspect of the cyst is sutured to the outside to prevent it reforming) or **catheter drainage** using a **Word catheter left in place for 4 to 6 weeks**, with or without oral broad-spectrum antibiotics. Surgical excision, silver nitrate cauterisation or sclerotherapy are further options.
- **Abscess** — conservative management with a sitz bath and analgesia, or **incision and drainage**, plus broad-spectrum antibiotics. Marsupialisation or catheter insertion may still be required.
- Recommend a **sexual health screen**.

## Female genital mutilation

Female genital mutilation is illegal in the United Kingdom and is a form of abuse.

- **Any case of female genital mutilation must be recorded in the notes.**
- **Any case in a girl under 18 must be referred to the police and social services** — this is a mandatory duty.
- The mandatory duty does **not** apply to at-risk or merely suspected cases in women over 18, although safeguarding assessment still applies.
- **Check whether there are young girls in the family who are at risk.**
- **De-infibulation**, the reversal of infibulation, should ideally be identified and planned **before conception**. It must be performed with **adequate analgesia to avoid flashbacks of the original mutilation**, with an incision made along the vulval scar. Women should receive prior screening for urinary infection with appropriate antibiotics, and access to specialist services and support groups is necessary.

> Lichen sclerosus is treated with clobetasol for 3 months, with biopsy if it fails to settle. Pruritus vulvae needs the underlying cause treated, with emollients and soap substitutes throughout. A Bartholin's abscess needs incision and drainage or a Word catheter. Female genital mutilation in anyone under 18 is a mandatory police and social services referral.`,
        },
        {
          id: "uterine_cavity_disorders",
          name: "Asherman syndrome & endometrial polyps",
          content: `## Asherman syndrome and endometrial polyps

## Asherman syndrome

Intrauterine adhesions, typically following instrumentation of the uterine cavity such as vigorous curettage, causing amenorrhoea or light periods, recurrent miscarriage and subfertility.

- **Surgical breakdown of the intrauterine adhesions** — **hysteroscopic adhesiolysis**.
- **Prevent re-formation** — insert a **paediatric Foley catheter or an intrauterine device for 4 to 8 weeks** afterwards.
- **Promote endometrial regeneration** — give **2 cycles of cyclical oral oestrogen and progesterone** afterwards to aid endometrial proliferation.

## Gynaecological polyps

Benign overgrowths of endometrial or cervical tissue, which commonly cause abnormal uterine bleeding including intermenstrual and post-coital bleeding.

- Some **small polyps resolve spontaneously**.
- **Polypectomy** is recommended to relieve abnormal uterine bleeding symptoms, optimise fertility, and **exclude hyperplasia or cancer**.
- It can be performed as a **day case under general anaesthesia**, or as an **outpatient procedure with or without local anaesthesia**.
- A **hysteroscope** is used to visualise the polyp, and small instruments are used to remove it.

> Asherman syndrome is treated by hysteroscopic adhesiolysis, then a paediatric Foley catheter or intrauterine device for 4 to 8 weeks and 2 cycles of cyclical oestrogen and progesterone. Endometrial polyps are removed hysteroscopically both to stop the bleeding and to exclude hyperplasia or cancer.`,
        },
        {
          id: "premenstrual_syndrome",
          name: "Premenstrual syndrome",
          content: `## Premenstrual syndrome

Physical, psychological and behavioural symptoms occurring in the **luteal phase** of the menstrual cycle and resolving with menstruation. Management is graded by severity.

## Conservative measures

These are offered to **all women regardless of severity**.

- Stress reduction.
- Limiting alcohol and caffeine.
- Smoking cessation.
- Regular exercise.
- Regular sleep.
- Regular, frequent (2 to 3 hourly) small balanced meals which are rich in complex carbohydrates.
- Pain relief if required — paracetamol or NSAIDs.

## Moderate symptoms

Moderate disease has some impact on personal, social and professional life.

- **Combined oral contraceptive pill**. **Yasmin**, which contains drospirenone, has the best evidence base. It can be given cyclically or continuously, and current data favour **continuous** use.

## Severe symptoms

Severe disease causes withdrawal from social and professional activities and prevents normal functioning.

- **Referral for cognitive behavioural therapy**.
- **Selective serotonin reuptake inhibitor (SSRI)** — given either continuously or only during the **luteal phase**, for example days 15 to 28 depending on cycle length. The treatment response must be monitored closely, especially regarding **self-harm**, and trialled initially for **3 months**.

> All women receive lifestyle advice. Moderate premenstrual syndrome is treated with a combined pill — Yasmin has the best evidence and continuous use is preferred — and severe disease with cognitive behavioural therapy plus an SSRI, given continuously or in the luteal phase and trialled for 3 months.`,
        },
        {
          id: "cervical_cancer_cin",
          name: "Cervical intraepithelial neoplasia & cervical cancer",
          content: `## Cervical intraepithelial neoplasia and cervical cancer

Cervical cancer is caused by persistent infection with high-risk human papillomavirus, chiefly types 16 and 18. Screening and colposcopy are covered in the Cervical screening and colposcopy topic; this topic covers the management of confirmed disease.

## Cervical intraepithelial neoplasia

- **Colposcopy** — examination of the cervix, at which a biopsy can be taken.
- Where there are **moderate to severe abnormalities**, the region can be **excised or ablated**.
- **LLETZ (large loop excision of the transformation zone)** — removal of the abnormal cells using a thin wire loop heated by an electric current. This is an **outpatient procedure under local anaesthetic**.
- **Cone biopsy** — used less commonly, reserved for larger lesions and performed **under general anaesthetic**.
- **Risk of excision** — a large excision, or repeat excisions, carry an increased risk of **mid-trimester miscarriage and preterm delivery**. A prophylactic cervical cerclage may be needed in a future pregnancy.
- **Test of cure** — a repeat smear at **6 months**.
- **CIN1** is managed conservatively with a repeat smear at 12 months. **CIN2, CIN3 and CGIN** are treated with LLETZ or cone biopsy.

## Management of cervical cancer by stage

| Stage | Management |
|---|---|
| IA1 (microinvasive) | Conservative approach — loop electrosurgical excision and conisation. If the woman does not wish to preserve fertility, a simple hysterectomy. |
| IA2 to IB2 (early), 4 cm or less | Radical hysterectomy with bilateral salpingectomy, with or without bilateral oophorectomy, plus lymphadenectomy. |
| IA2 to IB2 (early), over 4 cm | Chemoradiation. |
| IB3 to IVA (locally advanced) | Chemoradiation. |
| IVB (metastatic) | Systemic chemotherapy, or single-agent therapy with palliative care. |

**Special situations** — in pregnancy, take a multidisciplinary team approach with delivery after 35 weeks. Recurrent disease is managed with surgery, palliative chemotherapy or supportive care.

## Risks of radical hysterectomy

- **Bladder dysfunction (atony)** — common in the immediate postoperative period, and may require intermittent self-catheterisation.
- **Sexual dysfunction** — due to vaginal shortening.
- **Lymphoedema** — due to pelvic lymph node removal. It is managed with leg elevation, good skin care and massage.

## Radiotherapy

There are two ways of delivering radiotherapy.

- **External beam radiotherapy** — usually given over 4 weeks, with each delivery lasting about 10 minutes.
- **Intracavity radiotherapy (brachytherapy)** — radioactive rods, usually iridium-192, are inserted into the affected area. The effects extend up to 5 mm away from the rod.

**Risks** — lethargy, bowel and bladder urgency, and skin erythema with external beam radiotherapy.

**Long-term effects** — fibrosis, vaginal stenosis, cystitis-like symptoms, malabsorption with mucous diarrhoea, and radiotherapy-induced menopause.

## Chemotherapy

Usually **cisplatin**. It is ideally given in conjunction with radiotherapy, which improves cure rates.

> LLETZ treats high-grade cervical intraepithelial neoplasia as an outpatient under local anaesthetic, at the cost of a raised risk of mid-trimester loss and preterm birth, with a test of cure at 6 months. Early cervical cancer is treated surgically with radical hysterectomy and lymphadenectomy, while bulky and locally advanced disease is treated with cisplatin-based chemoradiation.`,
        },
        {
          id: "endometrial_cancer",
          name: "Endometrial hyperplasia & endometrial cancer",
          content: `## Endometrial hyperplasia and endometrial cancer

Endometrial hyperplasia is abnormal thickening of the endometrium. It is taken seriously because of the risk of progression to cancer, particularly where there is **atypia**.

## Endometrial hyperplasia

| Type | Management |
|---|---|
| Hyperplasia without atypia | Address risk factors — obesity, hormone replacement therapy, tamoxifen therapy and anovulation. Observation can be considered. Treat with the levonorgestrel intrauterine system, or continuous oral progestogen. Surveillance endometrial biopsy at 6 months. |
| Atypical hyperplasia | Non-fertility-preserving: total hysterectomy with bilateral salpingo-oophorectomy. Fertility-preserving: levonorgestrel intrauterine system or continuous oral progestogen, with surveillance endometrial biopsy at 3 months. |

## Management of endometrial cancer by FIGO stage

| FIGO stage | Management |
|---|---|
| 1 | Total hysterectomy with bilateral salpingo-oophorectomy. |
| 2 | Radical hysterectomy with lymph node assessment, plus adjuvant radiotherapy. |
| 3 | Where possible, maximal debulking surgery with chemotherapy and radiotherapy. |
| 4 | Where possible, maximal debulking surgery. A palliative approach may be taken, using low-dose radiotherapy or high-dose progesterone. |

## Adjuvant treatment

- **Postoperative radiotherapy reduces the local recurrence rate but does not improve survival.**
- Local radiotherapy or brachytherapy are the options.
- **Chemotherapy** is used for advanced or metastatic disease, though there is little evidence to support its use.

## Hormone treatment

- High-dose **oral or intrauterine progestins**, with the **levonorgestrel intrauterine system preferred**.
- Useful for women with **complex atypical hyperplasia** and **low-grade stage 1A** endometrial tumours.
- **Relapse rates are high.**
- It may suit women who are not fit for surgery, or who want to avoid surgery for fertility reasons.

## Endometrial cancer and fertility

- Primary infertility due to **polycystic ovary syndrome** is a risk factor for premenopausal endometrial cancer.
- Alternatives to hysterectomy in premenopausal women are only possible for **pre-cancer or early-stage, low-grade** endometrial cancers.
- Hormone therapy with oral progestogens or the levonorgestrel intrauterine system is associated with a **moderate response but high relapse rates**.
- Women faced with losing their fertility should be referred to a specialist to discuss **ovarian conservation, stimulation for egg retrieval, and surrogacy**.

## In summary

- **Localised disease** — total abdominal hysterectomy with bilateral salpingo-oophorectomy.
- **High-risk patients** may receive radiotherapy.
- **Progestogen therapy** is used in frail elderly women who are not suitable for surgery.

> Hyperplasia without atypia is treated with the levonorgestrel intrauterine system and re-biopsied at 6 months. Atypical hyperplasia warrants total hysterectomy with bilateral salpingo-oophorectomy, or the intrauterine system with 3-monthly biopsy where fertility is to be preserved. Stage 1 endometrial cancer is treated with total hysterectomy and bilateral salpingo-oophorectomy.`,
        },
        {
          id: "ovarian_cancer",
          name: "Ovarian cancer",
          content: `## Ovarian cancer

**Risk factors** — increasing age, family history, obesity, hormone replacement therapy, endometriosis, smoking and diabetes.

**Protective factors** — the combined oral contraceptive pill, pregnancy and breastfeeding, and hysterectomy.

## Risk of malignancy index

The risk of malignancy index helps derive the risk that an ovarian mass is malignant. It is the product of three values:

**Risk of malignancy index = U multiplied by M multiplied by CA125**

- **U, the ultrasound score.** One point is scored for each of a multilocular cyst, solid areas, metastases, ascites and bilateral lesions. **U = 0** for no features, **U = 1** for one feature, and **U = 3** where two or more features are present.
- **M, the menopausal status.** **M = 1** if premenopausal and **M = 3** if postmenopausal.
- **CA125** — the serum level in units per millilitre.

A risk of malignancy index **above 250** warrants referral to a specialist gynaecological oncology multidisciplinary team.

## Management by stage

| Stage | Management |
|---|---|
| 1 | Total hysterectomy with bilateral salpingo-oophorectomy, with or without adjuvant systemic chemotherapy. If fertility needs to be preserved, only the affected ovary is removed — this applies to stage 1a only. |
| 2 | Debulking surgery to remove as much of the cancer as possible. Chemotherapy may be given as neo-adjuvant or adjuvant treatment. |
| 3 | Similar to stage 2, with the addition of targeted treatment with bevacizumab, which targets VEGF-A. Where surgery is not possible, platinum-based chemotherapy is given alongside symptomatic treatment such as an ascitic drain and treatment of constipation. |
| 4 | The same as stage 3, but palliative care is more likely. |

## Chemotherapy

Chemotherapy can be given as primary treatment, as an adjunct following surgery, or for relapse of disease.

- **First line** — a combination of a **platinum compound with paclitaxel**. Most is given as an outpatient, **3 weeks apart for 6 cycles**.

**Platinum compounds**

- These are the most effective agents in ovarian cancer.
- They cause **cross-linkage of DNA strands**, leading to cell cycle arrest.
- **Carboplatin** is the main platinum compound used, as it is **less nephrotoxic and causes less nausea than cisplatin**.
- The dose of carboplatin is calculated using the **glomerular filtration rate**.

**Paclitaxel**

- Causes **microtubular damage**, preventing replication and cell division.
- **Pre-emptive steroids** are given to reduce hypersensitivity reactions and to reduce side effects such as peripheral neuropathy, neutropenia and myalgia.
- Causes **total loss of body hair**.

**Bevacizumab**

- A **monoclonal antibody against vascular endothelial growth factor (VEGF)**.
- It **inhibits angiogenesis**.
- It is not routinely prescribed in ovarian cancer because of cost, but is available for the treatment of recurrent disease.

## Follow-up

- Patients undergo a **CT scan** following completion of chemotherapy, to assess the response to treatment.
- Follow-up includes clinical examination and **CA125 measurement**.
- **CA125 tends to rise before the onset of clinical evidence of disease recurrence.**
- When disease recurs, treatment is largely **palliative**.

> The risk of malignancy index multiplies the ultrasound score, menopausal status and CA125, and a value above 250 triggers referral to gynaecological oncology. Treatment is surgery plus carboplatin and paclitaxel, and a rising CA125 usually precedes clinical evidence of relapse.`,
        },
        {
          id: "vulval_cancer",
          name: "Vulval cancer",
          content: `## Vulval cancer

Most vulval cancers are squamous cell carcinomas. Lichen sclerosus and vulval intraepithelial neoplasia are important predisposing conditions, so a persistent vulval symptom, lump or ulcer warrants urgent referral.

## Vulval excision

- **Radical surgical excision aiming for a clear margin of 15 mm** is the mainstay of treatment.
- Large lesions may be shrunk with **neoadjuvant radiotherapy**, often combined with chemotherapy.

## Lymph node management and sentinel node biopsy

- **Untreated groin node metastases will be fatal**, and affected nodes **cannot be reliably identified with radiology**.
- The current approach is **full inguinofemoral lymphadenectomy** for all tumours with a **depth of invasion greater than 1 mm**.
- Groin lymphadenectomy is a **very morbid procedure**, with complications including wound healing problems, infection, venous thromboembolism and chronic lymphoedema.
- **Groin nodes are involved in 15% of women with vulval cancer.**
- A full groin lymphadenectomy may be avoided by performing a **sentinel lymph node biopsy** — identifying the first node that the area drains to. A dye and a radioactive tracer are injected into the vulval tumour to identify the sentinel node.
- **If the sentinel node is positive for disease, full groin lymphadenectomy is indicated.**

## Radiotherapy

- **Adjuvant radiotherapy** is indicated if the excision margins are close, or in the presence of **two or more groin node metastases**.
- **Radical radiotherapy** may be used instead of surgery if the patient is unfit for surgery.

> Vulval cancer is treated by radical excision aiming for a 15 mm clear margin. Any tumour invading deeper than 1 mm needs groin node assessment, and sentinel lymph node biopsy spares many women a morbid full inguinofemoral lymphadenectomy, which is reserved for those with a positive sentinel node.`,
        },
      ],
    },
    {
      id: "paediatrics", name: "Paediatrics & Child Health", icon: "🧒",
      topics: [
        {
          id: "neonatal_respiratory_distress",
          name: "Respiratory distress in the newborn",
          content: `## The tachypnoeic newborn

Respiratory distress in a newborn shows itself as tachypnoea (a respiratory rate above 60), grunting, nasal flaring, intercostal and subcostal recession, and cyanosis. The differential is short and is usually settled by the **gestation, the mode of delivery and the chest X-ray**.

| Condition | Typical baby | Chest X-ray |
|---|---|---|
| **Respiratory distress syndrome** | **Preterm**, especially under 32 weeks | Diffuse **ground-glass** shadowing with air bronchograms |
| **Transient tachypnoea of the newborn** | Term, often **caesarean section** | Fluid in the **horizontal fissure**, hyperinflation |
| **Meconium aspiration** | **Post-term**, meconium-stained liquor | **Asymmetrical patchy opacities**, hyperinflation |
| **Persistent pulmonary hypertension** | Term, often follows asphyxia or meconium aspiration | Often relatively clear lungs despite severe hypoxia |
| **Pneumothorax** | Any, especially ventilated or preterm | Lucency with absent lung markings, mediastinal shift if tension |
| **Congenital pneumonia or sepsis** | Any, especially prolonged rupture of membranes | Variable, may mimic any of the above |

Because congenital pneumonia can look like all of them, antibiotics are frequently started while cultures are awaited.

## Respiratory distress syndrome

Surfactant deficiency in the immature lung raises alveolar surface tension, so alveoli collapse at end-expiration and the work of breathing rises. Histologically it is **hyaline membrane disease**.

**Prophylaxis** is the highest-yield point: **antenatal corticosteroids** are given to mothers in suspected or confirmed preterm labour, which increases fetal surfactant production and reduces both the incidence and the severity of the syndrome.

Management is:

- **ABC resuscitation**, reviewing the history and examining the baby to identify the cause of the distress
- **Endotracheal surfactant**
- **Continuous positive airway pressure (CPAP)**, which keeps the lungs inflated, with intubation and ventilation reserved for severe disease
- **Supplementary oxygen**, targeting saturations of **91 to 95%** in preterm neonates — over-oxygenation is itself harmful, causing retinopathy of prematurity and chronic lung disease
- Intravenous fluids, and **broad-spectrum intravenous antibiotics** (benzylpenicillin and gentamicin, or amoxicillin and gentamicin if listeria is suspected)
- A **chest X-ray** as soon as possible, unless the distress is mild, in which case it can be delayed

## Transient tachypnoea of the newborn

The commonest cause of respiratory distress in a term baby, caused by **delayed clearance of fetal lung fluid**. It is commoner after caesarean section, because the baby has not had the thoracic squeeze of a vaginal delivery, and it settles within 24 to 48 hours.

Management is largely **observation and supportive care**: oxygen by head box or nasal cannula to keep saturations above 90%. If the respiratory rate is **60 to 80 breaths per minute** the baby should not feed orally, so nutrition is given by nasogastric tube or parenteral nutrition. If the tachypnoea persists beyond **4 to 6 hours**, start antibiotics (ampicillin and gentamicin), because at that point infection can no longer be excluded.

## Meconium aspiration

Meconium passed in utero is aspirated into the airways, where it obstructs them, is directly toxic to the lung and inactivates surfactant. It is commoner in **post-term** delivery, and the history usually mentions **meconium-stained amniotic fluid**.

- A **normal term infant with meconium-stained liquor and no group B streptococcal risk** simply needs **observation**
- If there are risk factors or laboratory findings suggesting infection, give **intravenous ampicillin and gentamicin**
- Oxygen and non-invasive ventilation such as CPAP are used in more severe cases
- **Boluses of surfactant and inotropes** are given in moderate disease

## Persistent pulmonary hypertension of the newborn

The pulmonary vascular resistance fails to fall after birth, so blood continues to shunt right to left through the ductus arteriosus and foramen ovale, producing **severe hypoxia that is out of proportion to the chest X-ray**. A difference between pre-ductal and post-ductal saturations is the clue.

Management is:

- **Respiratory support** — oxygen, ventilation, surfactant, and suction of secretions from the endotracheal tube
- **Inhaled nitric oxide**, a selective pulmonary vasodilator, if the oxygen requirement remains high
- **Circulatory support** with fluid and inotropes, since systemic pressure must be kept above pulmonary pressure to reduce the shunt
- **Correction of any pH abnormality**, because acidosis worsens pulmonary vasoconstriction
- Treatment of the underlying cause

## Pneumothorax

**Prevention** matters most in ventilated babies: pressures are titrated carefully to achieve effective ventilation while minimising barotrauma.

- **Small pneumothorax** — close observation, even if ventilated, with **100% oxygen for 1 to 2 hours** to wash out nitrogen and speed reabsorption
- **Needle drainage** if urgent decompression is needed, such as an infant at immediate risk of respiratory failure
- **Chest drain** for all tension pneumothoraces, and for any ventilated or preterm infant with a non-tension pneumothorax who deteriorates

## Chronic lung disease of prematurity (bronchopulmonary dysplasia)

A complication of preterm birth, defined as an **oxygen requirement at 36 weeks corrected gestational age**, with classical chest X-ray changes and a history of mechanical ventilation.

- **Prophylaxis** — corticosteroids for women in suspected, diagnosed or established preterm labour before 34 weeks, and considered between 34 and 36 weeks
- **Respiratory support** — high-flow oxygen with care not to over-oxygenate, **CPAP in preference to intubation** wherever possible, and surfactant if invasive ventilation is needed
- **Caffeine citrate**, which stimulates the respiratory effort
- **Formal sleep studies** to assess oxygen saturations during sleep and guide home management
- **Long-term oxygen** at home, weaned over the first year of life
- **Palivizumab** monthly, a monoclonal antibody that reduces the risk and severity of bronchiolitis

> High-yield: preterm with ground-glass shadowing is respiratory distress syndrome; term after caesarean with fluid in the fissure is transient tachypnoea; post-term with meconium-stained liquor and patchy asymmetrical opacities is meconium aspiration; severe hypoxia with a near-normal film is persistent pulmonary hypertension.`,
        },
        {
          id: "neonatal_jaundice",
          name: "Neonatal jaundice & haemolytic disease of the newborn",
          content: `## Neonatal jaundice

Jaundice affects the majority of newborns, and the whole of the assessment turns on **when it appeared**.

- **Under 24 hours old — always pathological.** This is haemolysis or sepsis until proven otherwise and needs urgent investigation.
- **Between 24 hours and 14 days — usually physiological.** The fetal haemoglobin load is being broken down while an immature liver conjugates it slowly.
- **Over 14 days (21 days if preterm) — prolonged jaundice**, which needs investigation to exclude **biliary atresia** and congenital hypothyroidism.

The critical division is **unconjugated versus conjugated** bilirubin. Unconjugated bilirubin is fat-soluble, so it crosses the blood-brain barrier and can cause **kernicterus** — bilirubin deposition in the basal ganglia, giving an acute encephalopathy and permanent choreoathetoid cerebral palsy, sensorineural deafness and gaze palsy. **Conjugated** bilirubin is never physiological and always signals liver or biliary disease.

## Investigations

- **Transcutaneous bilirubin** — a non-invasive screening test, pleasanter for the baby but less precise. It is used where the risk of pathological jaundice is relatively low, that is jaundice starting after 24 hours in a baby born after 35 weeks.
- **Serum bilirubin** — used where the risk is higher: onset under 24 hours of age, or born before 35 weeks. It is also used to check any transcutaneous reading above the treatment threshold.
- **Thyroid function, liver function tests and a split (conjugated) bilirubin** if the baby presents after 2 weeks.

**Do not rely on visual inspection alone.** Jaundice and the underlying skin colour change are considerably harder to see in babies with darker skin, so measure the bilirubin rather than eyeballing it whenever jaundice is suspected. Check the sclerae, gums and blanched skin, and always measure if there is any doubt.

## Managing unconjugated hyperbilirubinaemia

Treatment is decided from the **treatment threshold graph**: the serum bilirubin is plotted against the age of the baby in hours, using a graph selected for the gestation.

- **Below the lower line** — no active treatment
- **Between the lines** — **phototherapy** first-line, which converts unconjugated bilirubin into water-soluble isomers that can be excreted without conjugation. If ineffective, escalate to **intensified (multiple) phototherapy** with adjuncts such as **intravenous immunoglobulin**, which is useful where the cause is immune haemolysis such as ABO or rhesus disease
- **Above the upper line** — **exchange transfusion** first-line, removing the infant's blood and replacing it with donor blood

Babies stay in after phototherapy stops so that a **rebound bilirubin** can be checked. During phototherapy the eyes are protected and blood samples are needed frequently, but the treatment itself is not harmful — a point worth making explicitly to parents.

**Physiological jaundice** needs only reassurance and observation. **Breast milk jaundice** is a prolonged unconjugated jaundice in a thriving breastfed baby: breastfeeding continues as normal and the bilirubin level guides management. **Conjugated** hyperbilirubinaemia is managed by treating the cause — for example surgery for biliary atresia, which must not be delayed.

## Haemolytic disease of the newborn

Maternal antibodies cross the placenta and destroy fetal red cells. The classic form is **rhesus disease**, where a RhD-negative mother sensitised in a previous pregnancy makes anti-D that haemolyses the red cells of a RhD-positive fetus, causing anaemia, jaundice within the first 24 hours, and in severe cases **hydrops fetalis**. ABO incompatibility causes a milder version that does not require prior sensitisation.

**Prevention is by anti-D immunoglobulin**, given either as:

- A **single dose of 1500 IU at 28 weeks** and again after delivery, or
- **Two doses of 500 IU at 28 and 34 weeks**, and after delivery

Further doses are given after any **potentially sensitising event**, such as antepartum haemorrhage, abdominal trauma, external cephalic version or invasive testing. The antenatal schedule is covered further in the *Antenatal care and screening* topic.

**Management of the baby:**

- **Resuscitation** with an A to E approach, particularly if the baby is preterm, anaemic or hydropic
- **Phototherapy** if there is significant jaundice, screening with transcutaneous bilirubin
- **Intravenous immunoglobulin** where the bilirubin continues to rise by more than 8.5 micromol/L per hour, and only for immune haemolysis
- **Exchange transfusion** if the bilirubin is rising rapidly at more than 8 to 10 micromol/L per hour despite adequate phototherapy, if severe hyperbilirubinaemia is not responding to phototherapy and supportive care, or if there is significant anaemia with a haemoglobin below 100 g/L
- **Follow-up** — check for **late anaemia at 4 to 6 weeks**, since the maternal antibody persists for weeks after delivery, and consider folate supplementation to protect against it. Arrange a hearing screen, because bilirubin is toxic to the auditory pathway

The parents should be counselled that haemolytic disease can **recur, and be more severe, in subsequent pregnancies**.

> High-yield: jaundice in the first 24 hours is never physiological. Jaundice after 14 days needs a **split bilirubin** — a raised conjugated fraction with pale stools and dark urine is biliary atresia until proven otherwise, and it is a surgical emergency. Treat from the threshold graph, not from how yellow the baby looks.`,
        },
        {
          id: "neonatal_sepsis_infection",
          name: "Neonatal sepsis, group B streptococcus & hepatitis B",
          content: `## Neonatal sepsis

Newborns present non-specifically, so the threshold for treating is deliberately low. **Early-onset** infection (within 72 hours) is acquired from the birth canal and is dominated by **group B streptococcus** and *Escherichia coli*; **late-onset** infection is usually hospital-acquired, with coagulase-negative staphylococci prominent in babies with lines.

The red flags are respiratory distress, temperature instability (a newborn is as likely to be **hypothermic** as febrile), poor feeding, lethargy, hypotonia, hypoglycaemia, apnoea, a bulging fontanelle and seizures.

**First-line empirical antibiotics for suspected early-onset infection are intravenous benzylpenicillin with gentamicin** (NICE NG195), unless local resistance patterns dictate otherwise. Benzylpenicillin is given at 25 mg/kg every 12 hours and gentamicin at a starting dose of 5 mg/kg. Take blood cultures before starting, and check the C-reactive protein; a lumbar puncture is performed where meningitis is suspected. Substitute **amoxicillin and gentamicin if listeria is suspected**, because listeria is not reliably covered by benzylpenicillin.

## Group B streptococcal infection

**Prevention** is by **intrapartum benzylpenicillin** (or vancomycin if the mother is allergic to penicillin), offered to women who:

- Have had a **previous baby with invasive group B streptococcal infection**
- Have group B streptococcal **colonisation, bacteriuria or infection in the current pregnancy**
- Are in **preterm labour**

Note that the United Kingdom uses this **risk-factor-based** approach rather than universal screening. If the baby does become infected, treatment is intravenous **benzylpenicillin and gentamicin** as above.

## Listeria monocytogenes

Maternal listeriosis is acquired from unpasteurised dairy products, soft cheeses and pâté, and can cause miscarriage, preterm labour and severe neonatal sepsis with meconium-stained liquor in a preterm baby — an unusual and telling combination.

Treatment is **amoxicillin and gentamicin** where blood or cerebrospinal fluid cultures grow listeria.

## Hepatitis B

Infants of mothers who are **hepatitis B surface antigen (HBsAg) positive** receive an accelerated immunisation schedule:

- **Monovalent hepatitis B vaccine within 24 hours of birth**, then again at 4 weeks and at 1 year of age
- The routine **6-in-1 vaccine** (diphtheria, tetanus, acellular pertussis, inactivated polio, *Haemophilus influenzae* type b and hepatitis B) at the usual 8, 12 and 16 weeks

**Hepatitis B immunoglobulin (HBIG)** is added if:

- The mother is **HBsAg positive**, even if she is HBeAg negative
- The mother had **acute hepatitis B during pregnancy**
- The mother had an **HBV DNA level of 1 x 10 to the 6 IU/mL or above** in any antenatal sample during the current pregnancy

HBIG should ideally be given at the same time as the first vaccine dose, but **at a different site**. Acute hepatitis B infection itself is managed with supportive care. Breastfeeding is not contraindicated once the baby has been immunised.

## Ophthalmia neonatorum

Conjunctivitis in the first 28 days of life. **Every case of acute bacterial conjunctivitis in a neonate needs an urgent same-day referral to an ophthalmologist**, because gonococcal infection can perforate the cornea within days.

The timing is a useful clue: **gonococcal** conjunctivitis presents in the **first 48 hours** with a profuse purulent discharge and marked lid swelling, whereas **chlamydial** conjunctivitis appears later, at **5 to 14 days**, and is the commoner of the two.

| Cause | Treatment |
|---|---|
| **Mild bacterial** | Chloramphenicol eye drops |
| **Chlamydial** (the commonest) | **Oral erythromycin** — systemic treatment is essential, because the organism also colonises the nasopharynx and can cause a pneumonitis |
| **Gonococcal** | A **single dose of parenteral cefotaxime or ceftriaxone**. Cefotaxime is generally preferred in the newborn, since ceftriaxone displaces bilirubin from albumin and interacts with calcium-containing infusions |
| **Pseudomonal** | Gentamicin eye drops plus systemic antibiotics |
| **Viral** | No specific antiviral; topical antihistamine and artificial tears relieve the itching |

For chlamydial or gonococcal infection, **the mother and her sexual partner also require treatment**, and the case should prompt sexual health follow-up.

> High-yield: benzylpenicillin and gentamicin is the answer for early-onset neonatal sepsis, and amoxicillin replaces benzylpenicillin if listeria is in the frame. Purulent conjunctivitis in the first 48 hours is gonococcal and sight-threatening; at 5 to 14 days it is chlamydial and needs oral, not topical, treatment.`,
        },
        {
          id: "congenital_infections_neonatal",
          name: "Congenital infections: treating the newborn",
          content: `## Treating the infected newborn

The maternal side of the congenital infections — how they are acquired, screened for and prevented — is covered in the *TORCH and congenital infections* topic. What follows is the **management of the baby**, which is examined separately and has some very specific answers.

## Cytomegalovirus

Cytomegalovirus is the **commonest congenital infection** and the leading non-genetic cause of **sensorineural deafness**. Affected babies may have a petechial "blueberry muffin" rash, microcephaly with **periventricular calcification**, hepatosplenomegaly and chorioretinitis, but the majority are asymptomatic at birth and still at risk of later hearing loss.

- **Diagnosis is by PCR of urine or saliva within the first 2 weeks of life.** The timing is essential: after 2 weeks a positive result cannot distinguish congenital infection from postnatal acquisition
- **Oral valganciclovir is first-line** treatment, with intravenous ganciclovir reserved for babies who cannot tolerate oral medication or who absorb poorly
- **Barrier nursing**, because the virus is shed in urine and body secretions
- Long-term audiology follow-up is essential

## Herpes simplex virus

Maternal genital herpes by itself does not cause pregnancy complications or fetal abnormality. The risk is **transmission during childbirth**, and neonatal herpes carries a **high mortality and morbidity**. The management depends entirely on *when* the mother acquired the infection, because it is the transfer of maternal antibody that protects the baby.

| Maternal situation | Management |
|---|---|
| **Primary genital herpes before 28 weeks** | Prophylactic regular **aciclovir from 36 weeks**. Vaginal delivery is possible if she is asymptomatic and more than 6 weeks have passed since the initial infection; **caesarean section if symptomatic** |
| **Primary genital herpes after 28 weeks** | Aciclovir during the initial infection, then regular prophylactic aciclovir. **Caesarean section is recommended in all cases**, because there is not enough time to transfer protective antibody |
| **Recurrent herpes**, known before pregnancy | **Low risk** to the neonate, because maternal antibody crosses the placenta. Consider prophylactic aciclovir from 36 weeks to reduce symptoms |

Aciclovir or valaciclovir can also be given prophylactically to the baby during the at-risk period.

**Suspected symptomatic neonatal infection** is investigated with blood, swab and cerebrospinal fluid **PCR**, and treated with **intravenous aciclovir**. Do not treat with oral or topical aciclovir even if the baby otherwise appears well — neonatal herpes disseminates rapidly and can present with isolated skin, eye and mouth disease, central nervous system disease, or fulminant disseminated infection.

## Toxoplasmosis

**Symptomatic babies:**

- Refer to **paediatric infectious diseases**
- **Pyrimethamine, sulfadiazine and folinic acid**, all three continued for **1 year**
- Monitor liver function tests and full blood count **every 4 to 6 weeks**, since pyrimethamine and sulfadiazine both suppress the marrow — the folinic acid is given specifically to mitigate this
- Add **glucocorticoids (prednisolone)** if the cerebrospinal fluid protein is above 1 g/L or **active chorioretinitis threatens vision**

**Asymptomatic babies with positive serology:** there are no definitive guidelines and treatment remains controversial, so individual cases are discussed with infection and virology specialists.

**Ongoing ophthalmology and audiology assessment** is recommended for all of them, because chorioretinitis and hearing loss may present late.

> High-yield: congenital CMV must be confirmed by urine or saliva PCR **within 2 weeks of birth** and is treated with oral valganciclovir. Neonatal herpes needs **intravenous** aciclovir, never oral or topical. Congenital toxoplasmosis is a year of pyrimethamine, sulfadiazine and folinic acid, with steroids added for sight-threatening chorioretinitis.`,
        },
        {
          id: "hypoxic_ischaemic_encephalopathy",
          name: "Hypoxic-ischaemic encephalopathy",
          content: `## Hypoxic-ischaemic encephalopathy

Hypoxic-ischaemic encephalopathy is brain injury following a period of inadequate oxygen delivery around the time of birth. It is the commonest cause of neonatal seizures and a major cause of cerebral palsy.

The usual precipitants are anything that interrupts placental or umbilical blood flow: **placental abruption**, **cord prolapse** or a tight nuchal cord, uterine rupture, shoulder dystocia, maternal shock, and prolonged or obstructed labour.

Supporting evidence for a hypoxic insult includes a **metabolic acidosis on cord gases**, a **low Apgar score at 5 and 10 minutes**, the need for prolonged resuscitation, multi-organ dysfunction, and abnormalities on the cardiotocograph beforehand.

## Grading

Severity is graded clinically using **Sarnat staging**, which classifies the encephalopathy into **three stages**:

| Stage | Features | Outlook |
|---|---|---|
| **1 — mild** | Irritability, hyperalert, staring eyes, poor feeding, normal tone; resolves within about 24 hours | Usually complete recovery |
| **2 — moderate** | Lethargy, hypotonia, reduced movement, **seizures** | Up to about 40% develop cerebral palsy |
| **3 — severe** | Coma, absent reflexes, prolonged seizures, fluctuating tone, multi-organ failure | Around 50% mortality, and severe disability in most survivors |

## Management

The immediate management is **supportive resuscitation**:

- **Optimising ventilation** — avoiding both hypoxia and hypocapnia, since a low carbon dioxide reduces cerebral perfusion
- **Supporting the circulation**
- **Ensuring adequate nutrition**
- **Treating any seizures**

The specific intervention is **therapeutic hypothermia**, from which babies born **at or near term** benefit. It is delivered in the neonatal intensive care unit and works by reducing the inflammation and neuronal loss that follow an acute hypoxic injury — much of the damage occurs in the hours *after* the insult, during reperfusion, which is the window this treatment targets.

- The baby's **core temperature is actively cooled to between 33 and 34 degrees Celsius**
- Cooling continues for **72 hours**
- The baby is then **rewarmed gradually to normal temperature over 6 hours**

Cooling must be started within 6 hours of birth to be effective, so recognition is time-critical. Alongside it, babies are monitored with amplitude-integrated EEG for subclinical seizures, and **MRI is performed after rewarming** to assess the pattern and extent of injury and to inform the discussion with parents about prognosis.

Long-term follow-up by a developmental paediatrician is arranged for every baby, since the consequences — cerebral palsy, epilepsy, learning difficulty, visual and hearing impairment — may not declare themselves for months or years.

> High-yield: Sarnat grades the encephalopathy into three stages, and **therapeutic hypothermia to 33 to 34 degrees for 72 hours, started within 6 hours of birth**, is the only treatment shown to improve outcome. Rewarm slowly over 6 hours and image with MRI afterwards.`,
        },
        {
          id: "neonatal_surgical_conditions",
          name: "Neonatal surgical conditions",
          content: `## Necrotising enterocolitis

Necrotising enterocolitis is inflammation and ischaemic necrosis of the bowel, predominantly affecting **preterm, formula-fed** babies in the first weeks of life. Breast milk is protective. It presents with feed intolerance, bilious vomiting, abdominal distension and tenderness, and **blood in the stool**, progressing to shock.

The abdominal X-ray findings are the classic examination material: **pneumatosis intestinalis** (gas within the bowel wall) is the pathognomonic sign, with dilated loops, **portal venous gas**, and — if the bowel has perforated — free air, seen as **Rigler's sign** (both sides of the bowel wall visible) or a football sign.

**Management:**

- **Stop enteral feeding and enteral medications.** Parenteral nutrition is needed if feeds are stopped for more than 24 hours, and in confirmed disease feeds are held for **7 days**
- **Nasogastric tube** to drain fluid and gas from the gut, with **hourly gastric aspirates** monitored
- **Broad-spectrum intravenous antibiotics** covering both aerobes and anaerobes, for example cefotaxime and vancomycin
- **Intravenous fluids** for cardiovascular support, with inotropes if required
- **Surgery** — indicated for **perforation** or **failure to respond to medical treatment**. A laparotomy is performed with resection of necrotic bowel and either a primary anastomosis or a defunctioning stoma

The important late complication is **short bowel syndrome** after extensive resection, and strictures may develop at the site of healed disease.

## Tracheo-oesophageal fistula and oesophageal atresia

A failure of separation of the trachea and oesophagus in early development. It is suspected antenatally from **polyhydramnios** (the fetus cannot swallow amniotic fluid) and postnatally from frothy secretions, choking and cyanosis with the first feed. The diagnostic test is simple: **a nasogastric tube cannot be passed**, and coils in the upper oesophagus on X-ray.

The **Gross classification** describes the anatomy, and **type C — proximal oesophageal atresia with a distal tracheo-oesophageal fistula — accounts for about 85% of cases**. Around half of babies have other anomalies, classically the **VACTERL** association (vertebral, anorectal, cardiac, tracheo-oesophageal, renal and limb).

Management is **primarily surgical correction**, and depends on the type:

| Type | Management |
|---|---|
| **Type A** — atresia with no fistula | Stabilisation and **gastrostomy** first, then oesophageal replacement, since the gap between the two ends is too long to join |
| **Types B and D** | Suction catheter and surgical correction |
| **Type C** — the commonest | Stabilisation and surgical correction |
| **Type E** — the "H-type" fistula with no atresia | Nil by mouth and surgical division of the fistula |

## Congenital diaphragmatic hernia

A defect in the diaphragm allows abdominal contents into the chest, which compresses the developing lung and causes **pulmonary hypoplasia** — and it is the lung hypoplasia and the resulting pulmonary hypertension, rather than the hernia itself, that determine survival. Most are left-sided (through the posterolateral Bochdalek defect), producing a **scaphoid abdomen**, bowel sounds in the chest and displaced heart sounds.

- **Antenatally**, about half are diagnosed on routine scans. The mother's care is transferred to a specialist neonatal surgical unit, and a **planned delivery** (induction or caesarean) is offered
- **At birth**, resuscitate with **intubation and ventilation** — avoid bag-and-mask ventilation, which inflates the stomach and worsens lung compression. Pass a **wide-bore nasogastric tube** to decompress the stomach, preventing vomiting and swelling and giving the lungs more room to inflate. **Extracorporeal membrane oxygenation (ECMO)** is used if pulmonary hypertension does not improve. The baby is managed in the neonatal intensive care unit
- **Surgery is deliberately delayed** until the baby is physiologically stable. Timing varies, but babies needing less respiratory support generally have repair at **48 to 72 hours** of age

## Cleft lip and palate

**Cleft lip** is a congenital open section of the upper lip; **cleft palate** is an opening between the mouth and the nasal cavity from a defect in the hard or soft palate. They may occur together or separately, and a cleft palate is a feature of the **Pierre Robin sequence** alongside micrognathia and glossoptosis.

- **Refer early to the cleft lip and palate multidisciplinary team.** The **first priority is adequate nutrition** for the baby, and long-term **speech and language therapy** input is often needed
- **Feeding** — most babies can breastfeed normally; others need support with bottle feeding using dental plates and specially shaped bottles and teats
- **Surgery is the definitive treatment.** Primary closure of the **cleft lip at around 3 months**, and of the **cleft palate at 6 to 12 months**

Children with a cleft palate need monitoring for **secretory otitis media** and consequent hearing loss, because the defect impairs Eustachian tube function.

> High-yield: pneumatosis intestinalis in a preterm formula-fed baby is necrotising enterocolitis. An NG tube that will not pass, with polyhydramnios in the history, is oesophageal atresia — type C in 85%. A scaphoid abdomen with bowel sounds in the chest is a diaphragmatic hernia, and the danger is pulmonary hypoplasia, not the hernia.`,
        },
        {
          id: "neonatal_hypoglycaemia",
          name: "Neonatal hypoglycaemia",
          content: `## Neonatal hypoglycaemia

A transient fall in blood glucose is common and usually self-correcting in the first hours of life, as the baby switches from a continuous placental glucose supply to intermittent feeding. It becomes significant when it is persistent or symptomatic, because prolonged hypoglycaemia causes permanent neurological injury.

The babies at risk are those with **poor glycogen stores** (preterm, small for gestational age, intrauterine growth restriction), those who are **hyperinsulinaemic** (the infant of a diabetic mother, whose pancreas has been driven hard in utero, and babies with hyperinsulinism), and those who are **stressed or unwell** (sepsis, hypothermia, hypoxic-ischaemic encephalopathy, polycythaemia).

Symptoms are non-specific: jitteriness, irritability, poor feeding, hypotonia, apnoea, temperature instability, and in severe cases seizures and coma.

## Prevention

- **Feed the baby within 30 minutes of birth**
- **Frequent milk feeding thereafter, every 2 to 3 hours**

## Asymptomatic hypoglycaemia

- **Confirm the hypoglycaemia with a laboratory blood glucose assay**, since bedside glucometers are unreliable at low values in neonates
- **Support breastfeeding technique** as appropriate
- **Offer an additional feed** if the baby is willing, then increase the frequency, supplementing with a breast milk substitute or intravenous glucose if needed
- **Buccal glucose gel** may be used alongside a feeding plan
- **Remeasure the blood glucose after 1 hour** whenever a feeding intervention has been given, to confirm a response
- **Inform the neonatal doctor**
- If first-line feeding measures do not work, start a **10% glucose intravenous infusion** and retest **within 15 minutes**

## Symptomatic hypoglycaemia, or a pre-feed glucose below 2 mmol/L

This needs **immediate intravenous glucose**:

- An initial **bolus of 2 mL/kg of 10% glucose**
- Followed by an **infusion of 3.6 mL/kg/hour of 10% glucose**
- **Aim for a glucose of 3 to 4 mmol/L**

If intravenous access is delayed, use **buccal glucose gel or intramuscular glucagon** in the interim. If the glucose is **below 1 mmol/L**, give buccal glucose gel as a holding measure while intravenous access and an infusion are arranged.

## Persistent hypoglycaemia

**Refer to the endocrinology team for investigation.** As in adults, the diagnostic samples must be taken **during** the hypoglycaemia and before it is corrected — glucose, insulin, C-peptide, ketones, free fatty acids, cortisol and growth hormone. The adult framework for interpreting these is set out in the *Hypoglycaemia* topic; in a neonate, remember that **detectable ketones and high free fatty acids are the normal response**, so their absence points to hyperinsulinism or a fatty acid oxidation disorder.

Where hypoglycaemia is **secondary to hyperinsulinism**, give one of:

- A **glucagon infusion**
- **Diazoxide with chlorothiazide** — diazoxide opens the pancreatic potassium channel and suppresses insulin release, and the thiazide counteracts the fluid retention it causes
- A **somatostatin analogue**

> High-yield: feed within 30 minutes of birth and every 2 to 3 hours. Asymptomatic hypoglycaemia is managed by feeding and rechecking at 1 hour; symptomatic hypoglycaemia or a glucose below 2 mmol/L needs intravenous 10% glucose, 2 mL/kg then 3.6 mL/kg/hour. Take the hypoglycaemia screen before correcting persistent cases.`,
        },
        {
          id: "down_syndrome_neonatal",
          name: "Down syndrome & the chromosomal childhood syndromes",
          content: `## Down syndrome

Trisomy 21 is the commonest autosomal trisomy compatible with life. The genetics and the recurrence risks are covered in the *Chromosomal disorders* topic; what follows is the **diagnosis and the practical management of the newborn**.

## Diagnosis

- **Antenatal screening** usually takes place at around **12 weeks** by the combined test, or later by the triple or quadruple test
- **Confirmatory testing** after a screen-positive result is by **amniocentesis or chorionic villus sampling**, both of which are diagnostic rather than screening tests
- **Postnatal diagnosis** is made on an **urgent blood PCR for trisomy 21**, so that the parents are not left waiting on a full karyotype

## Investigations and management of the newborn

- **Echocardiogram.** Cardiac abnormalities occur in **45%** of babies with Down syndrome, and the commonest is an **atrioventricular septal defect**
- **Full blood count and blood film.** About **10%** have **transient abnormal myelopoiesis**, a self-resolving leukaemoid picture that nonetheless carries an increased risk of later **acute lymphoblastic leukaemia**
- **Hearing screening**, then annual hearing testing with auditory thresholds, **tympanometry** and otoscopy
- **Ophthalmology review at 3 to 6 months**, and thereafter
- An **MDT approach** throughout

**Monitor for the associated conditions:**

- **Hypothyroidism** — thyroid function tests at birth, 6 months, 1 year and annually thereafter
- **Duodenal atresia** — the antenatal or neonatal "double bubble"
- **Hirschsprung disease**
- **Coeliac disease**
- **Epilepsy**
- **Atlantoaxial instability**, which matters before any anaesthetic or contact sport

## The multidisciplinary team

- **Speech and language therapy** if there is difficulty swallowing, and later for communication
- **Physiotherapy** and **occupational therapy** for fine motor skills, as early intervention therapies in childhood
- **Parental counselling and education**, including recommending support groups such as the Down's Syndrome Association
- **Genetic counselling** for the family
- An **individualised educational plan**

## The chromosomal childhood syndromes

Several other chromosomal syndromes present in the newborn period or early childhood. Most require an **MDT approach**, and specific management is highly condition-dependent.

| Syndrome | Genetics | Recognisable features |
|---|---|---|
| **Patau syndrome** | **Trisomy 13** | Microcephaly, cleft lip and palate, polydactyly, holoprosencephaly; very poor prognosis |
| **Edwards syndrome** | **Trisomy 18** | Micrognathia, **overlapping fingers**, rocker-bottom feet, cardiac defects; very poor prognosis |
| **Fragile X** | **CGG repeat expansion in FMR1**, X-linked | The commonest inherited cause of learning disability; long face, large ears, macro-orchidism after puberty |
| **Noonan syndrome** | Autosomal dominant, commonly **PTPN11** | Short stature, webbed neck, **pulmonary stenosis**, pectus deformity — a "male Turner" phenotype but with a normal karyotype |
| **Pierre Robin sequence** | Not a chromosomal disorder as such | **Micrognathia, glossoptosis and cleft palate**, with airway obstruction as the immediate risk |
| **Prader-Willi syndrome** | Loss of the **paternal** 15q11-13, by deletion or maternal uniparental disomy | Neonatal hypotonia and poor feeding, then **hyperphagia and obesity**, hypogonadism, learning difficulty |
| **Williams syndrome** | **7q11 deletion** | Very sociable personality, **supravalvular aortic stenosis**, **hypercalcaemia**, starburst iris |
| **Cri du chat syndrome** | **5p deletion** | **High-pitched cat-like cry**, microcephaly, hypertelorism, learning difficulty |
| **Turner syndrome** | **45,X** | Short stature, webbed neck, **coarctation of the aorta**, primary amenorrhoea |
| **Klinefelter syndrome** | **47,XXY** | Tall stature, small firm testes, gynaecomastia, infertility |
| **DiGeorge syndrome** | **22q11.2 microdeletion** | **CATCH-22** — cardiac defects, abnormal facies, thymic aplasia, cleft palate, hypocalcaemia from parathyroid aplasia |

> High-yield: every newborn with Down syndrome needs an **echocardiogram** (45% have a cardiac lesion, most often an AVSD) and **thyroid function tests at birth, 6 months, 1 year and annually**. Angelman syndrome is the maternal counterpart of Prader-Willi at the same 15q locus, and DiGeorge is the one to remember for neonatal hypocalcaemia.`,
        },
        {
          id: "sudden_infant_death_syndrome",
          name: "Sudden infant death syndrome & safer sleep",
          content: `## Sudden infant death syndrome

Sudden infant death syndrome is the sudden, unexpected death of an apparently healthy infant that remains unexplained after a full investigation, including post-mortem examination, review of the circumstances and review of the clinical history. It is a **diagnosis of exclusion**, and it remains the commonest cause of death between one month and one year of age.

The peak incidence is between **2 and 4 months**, and the great majority occur before 6 months.

## Risk factors

- **Prone or side sleeping position**
- **Parental smoking**, both in pregnancy and after birth
- **Co-sleeping**, particularly on a sofa or armchair, and especially where a parent has taken alcohol, sedatives or drugs
- **Overheating** and excessive bedding
- **Prematurity and low birth weight**
- Male sex, and social deprivation

## Prevention: the safer sleep advice

This is the highest-yield content, because it is advice given to every new parent and is examined as counselling:

- **Put the infant to sleep on their back** for every sleep, day and night
- Place the baby in the **"feet to foot" position**, with their feet at the foot of the cot, so they cannot wriggle down under the bedding
- **Avoid overheating** — keep the room at a comfortable temperature and do not over-wrap
- **No smoking exposure**, either in pregnancy or around the baby
- The baby should sleep **in the parents' bedroom for the first 6 months**, in their own cot
- The baby should **not be in the parents' bed** when a parent is very tired, or has taken alcohol, sedative medicines or drugs — and never on a sofa or armchair
- **Ideally the infant should be breastfed**, which is independently protective

## When a baby dies unexpectedly

An unexpected infant death triggers a **joint agency response**: the death is discussed with the coroner, a **post-mortem examination** is arranged, and a multi-agency review involving paediatrics, police and social care follows. This process is standard and is not an accusation of wrongdoing, which is worth stating plainly to parents — but it does exist partly because **non-accidental injury** and previously unrecognised medical conditions, including inherited metabolic disease and cardiac arrhythmia syndromes, must be excluded.

Bereaved families need clear, sensitive follow-up, including the offer of a meeting once results are available, bereavement support, and discussion of any implications for future pregnancies.

> High-yield: back to sleep, feet to foot, room-share for 6 months but never bed-share on a sofa or after alcohol, avoid overheating and smoke exposure, and breastfeed. The peak age is 2 to 4 months.`,
        },
        {
          id: "congenital_heart_disease_overview",
          name: "Congenital heart disease: the approach",
          content: `## Framing congenital heart disease

Congenital heart disease affects around 8 in 1000 live births. Almost every lesion can be placed by answering two questions, and the answers determine both how the baby presents and what you do about it.

**Is the child cyanosed?**

- **Acyanotic lesions** shunt blood **left to right**, so deoxygenated blood is not reaching the systemic circulation. Extra blood is pushed through the lungs instead, and the child presents with **breathlessness, poor feeding and heart failure** — or with an asymptomatic murmur. The examples are atrial septal defect, ventricular septal defect and patent ductus arteriosus, and the obstructive lesions (aortic stenosis, pulmonary stenosis, coarctation) sit here too.
- **Cyanotic lesions** shunt blood **right to left**, so deoxygenated blood bypasses the lungs and enters the systemic circulation. The child presents with **cyanosis**. The examples are tetralogy of Fallot, transposition of the great arteries and tricuspid atresia.

**Is the lesion duct-dependent?** The ductus arteriosus stays open in fetal life and normally closes within the first few days. Some lesions can only survive while it remains open, which is why they **present dramatically at around 48 hours to a week of age**, exactly when the duct closes.

| Duct-dependent for | Lesions | What the duct is doing |
|---|---|---|
| **Pulmonary blood flow** | Pulmonary atresia, critical pulmonary stenosis, tricuspid atresia, severe tetralogy of Fallot | Supplying the lungs from the aorta |
| **Systemic blood flow** | **Critical coarctation**, interrupted aortic arch, critical aortic stenosis, hypoplastic left heart | Supplying the body from the pulmonary artery |
| **Mixing** | **Transposition of the great arteries** | Allowing oxygenated and deoxygenated blood to mix between two parallel circulations |

## The cyanosed newborn

Cyanosis in a newborn is either cardiac or respiratory, and the **hyperoxia (nitrogen washout) test** separates them: give **100% oxygen for 10 minutes** and remeasure. If the saturations remain persistently low despite this, the cause is likely to be **congenital cyanotic heart disease** or a primary pulmonary pathology, because blood that is bypassing the lungs altogether cannot be oxygenated however much oxygen is given.

Management of a suspected duct-dependent cyanotic lesion:

- **Airway and breathing** — intubate if indicated, and give **supplemental oxygen only to maintain saturations of 75 to 85%**. This looks alarmingly low, and is deliberate: oxygen is a pulmonary vasodilator and closes the duct, so over-oxygenating floods the lungs and shuts the lesion's lifeline
- **Circulation** — site **two intravenous cannulae**, or consider umbilical venous and arterial catheters. Give a **10 mL/kg crystalloid bolus** for hypotension, to a maximum of 30 mL/kg, then adrenaline for resistant hypotension
- **Maintain duct patency, which is the key to early survival** — start a **prostaglandin E1 infusion**. Most infants with cyanotic heart disease presenting in the first week of life are duct-dependent
- **Check blood glucose regularly**

**The side effects of prostaglandin E1 are examinable**: **apnoea** (the important one — be prepared to intubate), hypoglycaemia with jitteriness and flushing, seizures, vasodilatation, hypotension and fever.

## Eisenmenger syndrome

The reason acyanotic shunts are closed rather than simply watched forever: a large, long-standing left-to-right shunt drives high flow through the pulmonary circulation, which causes irreversible pulmonary vascular remodelling and **pulmonary hypertension**. Once the pulmonary pressure exceeds the systemic pressure, **the shunt reverses to right-to-left and the patient becomes cyanosed**. This is **Eisenmenger syndrome**, it is irreversible, and it is a **contraindication to closing the defect** — at that point the shunt is acting as a pressure-relief valve. The only definitive treatment is heart-lung transplantation.

> High-yield: a baby who collapses or turns blue at **48 hours to a week** old has a duct-dependent lesion until proven otherwise — **prostaglandin E1**, and do not be tempted to correct the saturations to normal.`,
        },
        {
          id: "acyanotic_shunt_lesions",
          name: "Atrial septal defect, ventricular septal defect & patent ductus arteriosus",
          content: `## The left-to-right shunts

These three lesions all move blood from the systemic to the pulmonary circulation. They are acyanotic, they present with a murmur or with heart failure, and their long-term risks are **pulmonary hypertension progressing to Eisenmenger syndrome** and **infective endocarditis**.

| Lesion | Murmur | Where |
|---|---|---|
| **Atrial septal defect** | **Mid-systolic, crescendo-decrescendo**, with **fixed splitting of the second heart sound** | Upper left sternal border |
| **Ventricular septal defect** | **Loud pansystolic**, with a quiet pulmonary second sound | Lower left sternal edge, third and fourth intercostal spaces |
| **Patent ductus arteriosus** | **Continuous "machinery" murmur** | Left infraclavicular area |

## Atrial septal defect

A defect in the septum between the two atria. There are three main types, from most to least common:

- **Ostium secundum** — the septum secundum fails to close fully. This is the commonest
- **Patent foramen ovale** — the foramen ovale fails to close. Strictly this is **not a true atrial septal defect**
- **Ostium primum** — the septum primum fails to close, leaving a hole low in the septum. It **commonly also involves an atrioventricular valve defect**, which is why it is the type associated with Down syndrome

Two points explain the signs. The murmur is **not** made by flow through the defect itself, which is low-pressure and silent; it comes from the **increased volume crossing the pulmonary valve**. And the **fixed splitting** occurs because right ventricular volume overload delays pulmonary valve closure to the same degree throughout the respiratory cycle, so the normal inspiratory variation in splitting is lost.

Every child with an atrial septal defect should be **referred to a paediatric cardiologist**.

**Management**

- **Observation** is the main strategy for small or asymptomatic defects
- **Closure** is generally **deferred until after two years of age** in asymptomatic patients
- **Transcatheter closure** with an occlusive device is used for **ostium secundum** defects. It has a similar success rate to surgery but with **lower complication rates and a shorter hospital stay**
- **Open heart surgery** with direct repair is needed for **primum** defects, and sometimes for secundum defects

**Indications for closure:**

- **Right heart enlargement**
- **Symptomatic pulmonary over-circulation**
- **Substantial left-to-right shunting**, supported by a ratio of pulmonary to systemic blood flow **greater than 1.5**

These findings usually accompany moderate to large defects, which are unlikely to close spontaneously.

## Ventricular septal defect

The commonest congenital heart lesion. A counter-intuitive rule governs the murmur: **the smaller the defect, the louder the murmur**, because a small hole generates more turbulence. A large defect may be almost silent while causing florid heart failure. Other causes of a pansystolic murmur are mitral and tricuspid regurgitation.

**Management**

- **Observation is first-line.** Small shunts with no pulmonary hypertension or heart failure will often **close spontaneously**, shown by disappearance of the murmur and a normal echocardiogram
- While the defect is present, prevent bacterial endocarditis by **maintaining good dental hygiene** (see the caveat on antibiotic prophylaxis below)
- **Large defects** are closed by **transvenous catheter closure through the femoral vein**, or by open heart surgery
- **Heart failure** is treated with **furosemide**, or furosemide with **captopril** and sometimes **digoxin**
- **Additional calorie intake**, since these babies tire with feeding and have raised energy requirements

## Patent ductus arteriosus

Failure of the ductus arteriosus to close after birth. It is commoner in **preterm** infants and after **congenital rubella**. The signs are a continuous machinery murmur with **bounding or collapsing pulses** and a wide pulse pressure. **Closure is recommended to abolish the lifelong risk of bacterial endocarditis and of pulmonary vascular disease.**

**Management**

- **Intravenous indomethacin is first-line** — a prostacyclin synthetase inhibitor. **Ibuprofen** is an alternative, and both work by inhibiting the prostaglandin synthesis that keeps the duct open. This is usually done in **premature or very low birth weight** infants
- If drugs fail, use **surgical ligation** or **percutaneous catheter device closure**. Symptomatic children, or those with evidence of heart failure, are treated earlier
- **The critical exception:** if a cyanotic lesion is **dependent** on the duct — transposition of the great arteries, for example — the patient must be started on a **prostaglandin infusion to keep the duct open** until corrective surgery can be performed. Closing the duct in that situation would be fatal

> High-yield: fixed splitting of the second heart sound is an atrial septal defect; a loud pansystolic murmur at the lower left sternal edge is a ventricular septal defect, and the louder it is the smaller the hole; a continuous machinery murmur with bounding pulses is a patent ductus arteriosus. Indomethacin **closes** a duct and prostaglandin **keeps it open** — which one you want depends entirely on the underlying lesion.`,
        },
        {
          id: "obstructive_congenital_lesions",
          name: "Aortic stenosis, pulmonary stenosis & coarctation of the aorta",
          content: `## The obstructive lesions

These lesions obstruct outflow rather than shunt blood. They are acyanotic, and severity ranges from an incidental murmur to neonatal collapse when a critical lesion is duct-dependent.

## Aortic stenosis

The **gold standard investigation for establishing the diagnosis is an echocardiogram**. Regular follow-up is needed to monitor progression, comprising **paediatric cardiology review, echocardiography, ECG and exercise testing**.

- **Percutaneous balloon aortic valvuloplasty** is commonly the treatment of choice for valvar aortic stenosis in children. It works well here because **children's aortic valve leaflets are typically easy to dilate**, in contrast to adults, in whom calcific change makes them far harder to dilate — this is the key difference from adult practice
- **Transcatheter aortic valve replacement or surgical valvotomy** are usually second-line to balloon valvuloplasty

Critical aortic stenosis in a neonate is duct-dependent for systemic flow and presents with shock as the duct closes.

## Pulmonary stenosis

- **Mild disease is asymptomatic and rarely progresses**, so it needs only observation and follow-up
- **Moderate and severe disease** — **transcatheter balloon dilatation is the treatment of choice**, with surgical valvuloplasty second-line
- The guide advises endocarditis prophylaxis before high-risk procedures; see the caveat below on how this differs in the United Kingdom

Pulmonary stenosis is a feature of **Noonan syndrome**, and is one of the four components of tetralogy of Fallot.

## Coarctation of the aorta

A narrowing of the aorta, of which **98% occur distal to the left subclavian artery**, usually at the origin of the ductus arteriosus.

The **commonest presentation is at 48 hours of age, when the ductus arteriosus closes** and the systemic circulation below the coarctation abruptly loses its supply — the baby presents in shock with absent femoral pulses and a metabolic acidosis. Milder coarctation presents later in childhood with **upper limb hypertension**, **radiofemoral delay** and weak femoral pulses, and in older children with **rib notching** from collateral vessels and a "3 sign" on the chest X-ray. It is strongly associated with **Turner syndrome** and with a bicuspid aortic valve.

**Management**

- **Prostaglandin E1 infusion** to maintain duct patency — this is the immediate life-saving step in a collapsed neonate
- **Surgical repair** — end-to-end anastomosis, or arch reconstruction with a patch or a bypass graft
- **Older patients** may instead be managed with **stent insertion** or surgical resection

> High-yield: a shocked baby at 48 hours old with **absent femoral pulses** is critical coarctation — prostaglandin E1 first, and check for Turner syndrome. Balloon valvuloplasty is first-line for both aortic and pulmonary stenosis in children, which is not the case in adults.`,
        },
        {
          id: "cyanotic_heart_disease_lesions",
          name: "Tetralogy of Fallot, transposition & tricuspid atresia",
          content: `## The three cyanotic lesions

All three shunt blood right to left, so the child is cyanosed. The general approach — the hyperoxia test, saturation targets and prostaglandin E1 — is covered in the *Congenital heart disease: the approach* topic; what follows is what is specific to each.

## Tetralogy of Fallot

The commonest cyanotic congenital heart disease beyond the newborn period, with **four** components:

- A **ventricular septal defect**
- An **overriding aorta**, sitting above the defect and receiving blood from both ventricles
- **Right ventricular outflow tract obstruction** (pulmonary stenosis), which is what determines severity
- **Right ventricular hypertrophy**, the consequence of that obstruction

The chest X-ray classically shows a **boot-shaped heart**. Severity depends entirely on the degree of outflow tract obstruction: mild cases present with a murmur, severe cases with cyanosis from birth.

**Management**

- **If severe with worsening cyanosis** — a **prostaglandin E1 infusion**, then a **Blalock-Taussig shunt**, an artificial tube between the subclavian artery and the pulmonary artery that provides a stable supply of blood to the lungs
- **Total surgical repair by open heart surgery is the definitive treatment**, performed from **4 months of age** onwards. It involves **closing the ventricular septal defect and relieving the right ventricular outflow tract obstruction**

**Hypercyanotic ("tet") spells** are the complication to know. They are intermittent symptomatic periods in which the right-to-left shunt temporarily worsens, either because pulmonary vascular resistance rises or because systemic vascular resistance falls — so more deoxygenated blood is diverted across the defect and away from the lungs. They are typically triggered by crying, feeding or waking. Management is aimed at reversing that pressure balance:

- **Knee-to-chest position** — this kinks the femoral arteries and raises systemic vascular resistance, pushing blood back towards the lungs. In an older child, squatting achieves the same thing, which is why children with tetralogy squat
- **Supplementary oxygen**
- **Intravenous fluids**
- **Beta-blockers**, which relax the right ventricular outflow tract and improve flow to the pulmonary vessels
- **Morphine**, to decrease respiratory drive and settle the child
- **Sodium bicarbonate**, to counteract metabolic acidosis
- **Phenylephrine infusion**, to increase systemic vascular resistance

## Transposition of the great arteries

The aorta arises from the right ventricle and the pulmonary artery from the left, so the pulmonary and systemic circulations run **in parallel rather than in series**. Deoxygenated blood circulates round the body and oxygenated blood round the lungs, and the baby can only survive while the two circuits **mix** — through the duct and the foramen ovale. It therefore presents with profound cyanosis in the **first day or two of life**, worsening as the duct closes. The chest X-ray is classically an **"egg on a string"**, from the narrow mediastinum.

**Management**

- **Supportive** — maintain body temperature, and correct acidosis and hypoglycaemia
- **Prostaglandin E1 infusion** to maintain the ductus arteriosus
- **Balloon atrial septostomy** — a catheter is passed into the foramen ovale and a balloon inflated to create a **large atrial septal defect**, so blood returning from the lungs can flow to the right side of the heart and into the aorta. A **bolus of heparin** is given beforehand
- **Definitive management is the arterial switch procedure in the first 2 weeks of life**, on cardiopulmonary bypass. Note that the **coronary arteries must also be transferred** to the new aorta, which is the technically demanding part of the operation

## Tricuspid atresia

The tricuspid valve fails to form, so there is no flow from right atrium to right ventricle and the right ventricle is hypoplastic. Blood must cross an atrial septal defect to reach the left heart, and pulmonary flow depends on a ventricular septal defect or the duct.

**Initial medical management**

- **Prostaglandin E1 infusion** to maintain adequate flow through the duct
- **Cardiorespiratory support** — oxygen and mechanical ventilation, inotropes and intravenous fluid

**Surgery is staged, in three operations**, because **complete corrective surgery is not possible in most cases — there is only one functioning ventricle**. The goal is therefore a **Fontan circulation**, in which systemic venous blood flows passively to the lungs and the single ventricle pumps only to the body:

| Stage | Timing | Operation |
|---|---|---|
| **First** | Neonatal | Early palliation to secure blood supply to the lungs at low pressure: a **Blalock-Taussig shunt** between the subclavian and pulmonary arteries, or a **pulmonary artery banding** operation to *reduce* pulmonary blood flow if the child is breathless |
| **Second** | **3 to 6 months** | **Glenn** procedure — remove the shunt and anastomose the superior vena cava directly to the right pulmonary artery |
| **Third** | **2 to 5 years** | **Fontan** procedure — a direct venous pathway from the inferior vena cava into the pulmonary arteries |

These children need antibiotic prophylaxis (see the caveat in the *Infective endocarditis and rheumatic fever in children* topic).

> High-yield: cyanosis on **day 1 to 2** with an egg-on-a-string chest X-ray is transposition — prostaglandin, then balloon atrial septostomy, then arterial switch within 2 weeks. Cyanosis with a **boot-shaped heart** and squatting is tetralogy. A knee-to-chest position is the first move in a tet spell.`,
        },
        {
          id: "paediatric_heart_failure",
          name: "Heart failure in children",
          content: `## Heart failure in children

Heart failure in childhood is usually the consequence of a **structural lesion** rather than of ischaemic heart disease. The commonest cause in infancy is a large **left-to-right shunt** flooding the pulmonary circulation, and beyond infancy, cardiomyopathy, arrhythmia or acquired disease such as myocarditis or rheumatic heart disease.

The presentation is quite unlike the adult picture. Infants show it through **feeding**: they tire and sweat during feeds, take a long time to finish, and fail to thrive. Look also for tachypnoea, tachycardia, recurrent chest infections, hepatomegaly (a much more reliable sign of fluid overload in a child than a raised jugular venous pressure) and, in older children, the more familiar oedema and exercise intolerance.

## Aims of management

Treatment is best remembered as a set of physiological aims rather than a drug list, because the same aims are met by different agents depending on how unwell the child is.

| Aim | How it is achieved |
|---|---|
| **Reduce preload** | **Diuretics** such as furosemide; more rarely venous dilators such as nitroglycerin |
| **Enhance cardiac contractility** | Intravenous agents such as **dopamine**; other options are **digoxin, dobutamine, adrenaline and milrinone** |
| **Reduce afterload** | Oral **ACE inhibitors**; intravenous agents such as hydralazine, nitroprusside and alprostadil |
| **Improve oxygen delivery** | **Beta-blockers** such as **carvedilol** |
| **Enhance nutrition** | Caloric needs are **increased** and these children tire with feeding, so **intermittent or continuous nasogastric or gastrostomy tube feeds** are often needed |
| **Exercise and physical activity** | Routine daily exercise, according to capacity |

The nutritional aim is easy to overlook and is genuinely important: a child in heart failure has a higher energy requirement precisely when feeding has become hard work, so growth failure is common and tube feeding is a therapeutic intervention rather than an afterthought.

Alongside all of this, **treat the underlying cause** — closing the shunt, repairing the lesion or controlling the arrhythmia is what actually resolves the failure.

> High-yield: in an infant, heart failure presents as **breathlessness and sweating during feeds with poor weight gain**, and **hepatomegaly** rather than a raised JVP. Think of management as five aims — reduce preload, improve contractility, reduce afterload, improve oxygen delivery, and feed the child.`,
        },
        {
          id: "paediatric_arrhythmia_syncope",
          name: "Supraventricular tachycardia & syncope in children",
          content: `## Supraventricular tachycardia

Supraventricular tachycardia is the commonest significant arrhythmia of childhood, usually caused by a re-entry circuit through an accessory pathway. Rates are much faster than in adults — often **above 220 beats per minute in an infant** and above 180 in an older child — and the QRS complex is narrow.

Infants cannot report palpitations, so they present with **poor feeding, pallor, irritability, tachypnoea** and, if the arrhythmia is sustained, heart failure. Older children describe a sudden-onset, sudden-offset racing heartbeat.

## Management

**If haemodynamically stable:**

- **First-line: vagal manoeuvres**, ideally performed **supine with the legs raised**. In young children apply an **ice-cold flannel to the face** (the diving reflex); older children can perform a **Valsalva** manoeuvre
- **Second-line: adenosine**, given as a rapid bolus into a large proximal vein followed by an immediate saline flush, because its half-life is only seconds. The paediatric dose escalates: **100 micrograms/kg, then 200 micrograms/kg, then 300 micrograms/kg**. Warn the child and family that it causes a few seconds of intensely unpleasant chest tightness and flushing
- **Third-line: one of** synchronised **DC cardioversion**, **amiodarone 5 mg/kg**, **procainamide 15 mg/kg** or **flecainide 2 mg/kg**

**If haemodynamically unstable:**

- **Synchronised DC cardioversion is the definitive intervention**, at 1 J/kg then 2 J/kg
- Vagal manoeuvres and adenosine should still be attempted, since they may work while preparations are made and neither delays cardioversion meaningfully

**Catheter ablation** is recommended for recurrent episodes or where an accessory pathway is demonstrated.

Look for **Wolff-Parkinson-White** syndrome on the resting ECG once sinus rhythm is restored: a **short PR interval with a delta wave** (a slurred upstroke to the QRS).

## Vasovagal syncope

The ordinary faint, and much the commonest cause of syncope in children and adolescents. It is a reflex fall in heart rate and vascular tone, typically provoked by prolonged standing, heat, pain, fright or the sight of blood, and preceded by a **prodrome** of nausea, warmth, tunnel vision and ringing in the ears. Recovery is rapid and complete.

**Management is largely non-pharmacological:**

- **Patient education is the main treatment** — teaching the child to recognise the warning symptoms and to avoid known triggers
- **Physical counter-pressure manoeuvres** (leg crossing with tensing, handgrip, arm tensing) and **tilt training**, which abort the faint when the warning signs appear
- **Increase circulating volume** — increased dietary salt and electrolyte-rich sports drinks
- **Fludrocortisone** may be given where these measures fail

## The features that make syncope cardiac

This is the point of the assessment, because vasovagal syncope is benign and cardiac syncope can be fatal. Refer urgently for an ECG and cardiology assessment if there is:

- Syncope **during exercise** (as opposed to immediately after it)
- **No prodrome** — a sudden collapse without warning
- Syncope while **supine** or sitting
- **Palpitations or chest pain** immediately beforehand
- A **family history of sudden cardiac death**, or of inherited arrhythmia or cardiomyopathy
- An abnormal cardiovascular examination or an abnormal ECG

> High-yield: vagal manoeuvres, then adenosine at 100 then 200 then 300 micrograms/kg, then cardioversion — and cardioversion first if the child is unstable. Exertional syncope, syncope with no prodrome, or a family history of sudden death is cardiac until proven otherwise.`,
        },
        {
          id: "paediatric_endocarditis_rheumatic_fever",
          name: "Infective endocarditis & rheumatic fever in children",
          content: `## Infective endocarditis in children

Infective endocarditis is **uncommon in children**, with an incidence of about **0.43 cases per 100,000 per year**. The pathology, the Duke criteria and the general principles are covered in the adult *Infective endocarditis* topic; what follows is what differs in children.

**Almost every affected child has an identifiable risk factor** — either **pre-existing heart disease** or an **indwelling central venous catheter**. That second group is increasingly important, as children with long-term lines for oncology, parenteral nutrition or dialysis now make up a substantial share of cases.

**Management**

- **A multidisciplinary approach** involving cardiologists, cardiac surgeons, infectious disease specialists and microbiologists
- **Blood cultures in every patient** — a **minimum of three sets over up to 48 hours**. In a **critically ill** child take all three **as quickly as possible, within an hour**, and start empirical antibiotics promptly; in a child who is **not acutely ill**, antibiotics can be **withheld for at least 48 hours** while cultures are collected, which greatly improves the chance of identifying the organism
- **Surgery** is indicated for removal of infected prosthetic material

**Empirical antibiotic therapy:**

| Situation | Regimen |
|---|---|
| **Native valve** | A **beta-lactam**, with or without low-dose gentamicin |
| Native valve, **penicillin allergy or severe sepsis** | **Low-dose gentamicin plus vancomycin**, in place of the beta-lactam |
| Native valve, **severe sepsis with risk factors for Gram-negative infection** | **Vancomycin plus meropenem**, in place of the beta-lactam |
| **Prosthetic valve** | **Vancomycin plus rifampicin plus low-dose gentamicin** |

Once cultures return, treatment is narrowed to targeted therapy following the European Society of Cardiology regimens.

## Antibiotic prophylaxis: the United Kingdom position

This is a genuine point of international divergence and is worth getting right for a UK examination. European and American guidance recommends antibiotic prophylaxis before dental and other invasive procedures for patients at high risk of endocarditis. **NICE does not.**

**NICE CG64 states that antibiotic prophylaxis against infective endocarditis is not recommended *routinely* for people undergoing dental or other interventional procedures.** The word "routinely" was added in 2016 and is doing real work: it leaves room for clinical judgement in individual patients at particularly high risk, and in October 2024 NICE amended the guideline to signpost the Scottish Dental Clinical Effectiveness Programme implementation advice, which sets out how to make that decision. Any prophylaxis in a high-risk child should therefore be an individualised decision made with the paediatric cardiology team, not a routine prescription.

What NICE does emphasise for everyone at increased risk is the part that is easy to forget: **excellent oral and dental hygiene**, regular dental review, avoidance of piercings and tattoos, and clear advice to seek help early for infection — measures that prevent far more endocarditis than prophylaxis ever did.

## Rheumatic fever

An immune-mediated complication of group A streptococcal pharyngitis, and still an important cause of acquired heart disease in children worldwide. The Jones criteria, the pathology and chronic rheumatic valve disease are covered in the adult *Rheumatic fever* topic.

**Management of the acute episode**

- **Anti-inflammatory therapy.** **NSAIDs — naproxen or ibuprofen are now preferred**, where aspirin was used historically — are very effective at suppressing the inflammatory response in the joints and the heart. They are given at **high dose for 1 to 2 weeks, or 6 to 8 weeks** where there is carditis
- **Anti-streptococcal antibiotics** — penicillin V, benzathine benzylpenicillin or amoxicillin — if there is any evidence of persistent infection
- **Symptomatic heart failure** is treated with **diuretics and ACE inhibitors**, and **prednisolone** may be required for severe carditis

**Secondary prophylaxis** must then follow, because recurrence causes cumulative valve damage: **benzathine penicillin every 3 to 4 weeks**, continued for years — the duration depending on whether carditis occurred and whether valve disease persists.

> High-yield: in a child with endocarditis, look for pre-existing heart disease or a central line. Take three sets of blood cultures, and if the child is well you can wait 48 hours for them. Rheumatic fever is now treated with **naproxen or ibuprofen rather than aspirin**, followed by **benzathine penicillin every 3 to 4 weeks** as secondary prophylaxis.`,
        },
        {
          id: "paediatric_asthma",
          name: "Asthma in children: diagnosis & chronic management",
          content: `## A guideline that has changed completely

Asthma management in the United Kingdom was rewritten in **November 2024** by a joint **BTS, NICE and SIGN guideline (NG245)**, which replaced NICE NG80 and the BTS/SIGN guideline. It was updated again in **November 2025**. The old ladder — a short-acting beta-2 agonist alone, then add an inhaled corticosteroid, then a leukotriene receptor antagonist, then a long-acting beta-2 agonist — no longer applies, and the changes are substantial enough that older revision material is actively misleading.

The single most important new principle applies at every age:

> **Do not prescribe a short-acting beta-2 agonist (SABA) to anyone with asthma without also prescribing an inhaled corticosteroid (ICS).** SABA-only treatment relieves symptoms while leaving the underlying inflammation untreated, and high SABA use is a marker of asthma death.

Two terms are needed throughout:

- **AIR — anti-inflammatory reliever.** A single inhaler containing an ICS with **formoterol**, taken **only as needed** for symptom relief, with no regular maintenance dose. Formoterol is used because it is a long-acting beta-2 agonist with a **rapid onset**, so it works as a reliever.
- **MART — maintenance and reliever therapy.** The same ICS/formoterol inhaler taken **regularly as maintenance and additionally as needed** for relief. People on MART do not normally need a separate SABA.

## Diagnosis in children aged 5 to 16

Asthma is now confirmed with objective testing wherever possible, in this order:

- **Fractional exhaled nitric oxide (FeNO)** first — **diagnose asthma if 35 parts per billion or more**
- If FeNO is negative or unavailable, measure **bronchodilator reversibility** with spirometry — diagnostic if the FEV1 rises by **12% or more** from baseline, or by 10% or more of the predicted value
- If spirometry is unavailable, measure **peak expiratory flow twice daily for 2 weeks** — diagnostic if variability is **20% or more**
- If asthma is still suspected, perform **skin prick testing to house dust mite**, or measure **total IgE with a blood eosinophil count**. Asthma is excluded if there is no sensitisation and a normal IgE; it is diagnosed if the child is sensitised or has a raised IgE **and** an eosinophil count above 0.5 x 10 to the 9 per litre
- If uncertainty persists, refer for consideration of **bronchial challenge testing**

**In children under 5 objective testing is not possible**, so the approach is to treat with inhaled corticosteroids and review regularly, then **attempt objective tests once the child reaches 5**.

## Chronic management: children under 5

- **Start** a **twice-daily paediatric low-dose ICS** with a SABA as reliever, as an **8 to 12 week trial**. This is offered where symptoms at presentation clearly warrant maintenance treatment, or after severe acute episodes (hospitalisation, or two or more courses of oral corticosteroids)
- **If uncontrolled** on a paediatric **moderate-dose** ICS plus SABA, **add a leukotriene receptor antagonist (LTRA)** for an **8 to 12 week trial** — and **stop it if it is not working**
- **If still uncontrolled**, refer to a **specialist respiratory paediatrician**
- **If symptoms resolve**, consider stopping treatment after 8 to 12 weeks and review again at 3 months. If symptoms recur by that review, or there is an acute episode needing systemic corticosteroids or admission, restart regular ICS and titrate

**There is no MART pathway for children under 5.**

## Chronic management: children aged 5 to 11

**Start** with a **twice-daily paediatric low-dose ICS plus a SABA as needed.**

If that does not control the asthma, there are two routes, and **MART is preferred wherever the child can manage it**:

| Step | MART pathway (preferred) | Conventional pathway (if unable to manage MART) |
|---|---|---|
| **Next step** | Paediatric **low-dose MART** | **Add an LTRA** to low-dose ICS plus SABA as an 8 to 12 week trial, stopping if ineffective; **or** move to low-dose **ICS/LABA** plus SABA |
| **Then** | Paediatric **moderate-dose MART** | **Moderate-dose ICS/LABA** plus SABA, with or without the LTRA |
| **Then** | **Refer to a specialist** | **Refer to a specialist** |

A practical prescribing point: as of the **November 2025 update**, the only inhaler licensed for MART in this age group is a **budesonide/formoterol dry powder inhaler (100/6 micrograms), licensed for ages 6 to 11** — not from 5. Using any other ICS/formoterol inhaler for MART under the age of 12 is **off-label**, and local off-label prescribing policy applies.

## Chronic management: 12 years and over

- **Start with as-needed AIR** — a low-dose ICS/formoterol combination inhaler used only for symptom relief. If the young person is highly symptomatic at presentation, or has had a severe exacerbation, start **low-dose MART** instead and consider stepping down to AIR later
- **If uncontrolled**, move to **low-dose MART**
- **Then moderate-dose MART**
- **If still uncontrolled** despite good adherence, **check FeNO and blood eosinophils**. If **either is raised**, refer to a specialist. If **neither is raised**, trial an **LTRA or a long-acting muscarinic antagonist (LAMA)** for 8 to 12 weeks added to moderate-dose MART — if there is partial benefit add the other, and if there is none, stop and try the other
- **Refer to a specialist** if control is still not achieved

## What actually changed, and why it is examinable

| Change | Old approach | NG245 |
|---|---|---|
| **Starting treatment at 12 and over** | Regular low-dose ICS with a SABA as needed | **As-needed AIR** (ICS/formoterol as the reliever) |
| **LTRA** | Added routinely as the next step after ICS | **Time-limited 8 to 12 week trial with an explicit stop rule**, and in adults only after moderate-dose MART and only if FeNO and eosinophils are not raised |
| **ICS/LABA in children 5 to 11** | The standard step-up | **Reserved for children who cannot manage MART** |
| **LAMA** | Not used | **New option** at 12 and over, as an alternative to an LTRA |
| **Monitoring** | No systematic FeNO | **Consider FeNO monitoring** at review and around treatment changes in adults |
| **Digital inhalers** | Not addressed | **Not recommended for routine use** |

Note also the **MHRA warning on montelukast**: it can cause **neuropsychiatric reactions**, including sleep disturbance, agitation, depression and suicidal thoughts. Warn families explicitly and review at the end of any trial.

## Everything that is not a drug

This part of the guide has not changed and is heavily examined:

- **Assess baseline asthma status**, using an asthma control questionnaire or lung function testing such as spirometry
- Provide **self-management education and a personalised asthma action plan**
- Ensure the child is **up to date with routine immunisations**
- Signpost sources of support, such as Asthma and Lung UK
- Advise on **trigger avoidance** — specific allergens, smoke, **beta-blockers and NSAIDs**
- **Assess for anxiety and depression**
- Ensure the child has **their own peak flow meter**, and knows how to use it
- **Teach and check inhaler technique**, with a spacer

**At every review**: confirm adherence, review inhaler technique, decide whether treatment needs changing, and ask about triggers and, in older adolescents, occupational exposures.

> High-yield: never a SABA without an ICS. Under 5, low-dose ICS then an LTRA trial then refer, with no MART. Aged 5 to 11, low-dose ICS then **MART if they can manage it**, otherwise LTRA or ICS/LABA. Aged 12 and over, **as-needed AIR** then low-dose MART then moderate-dose MART.`,
        },
        {
          id: "acute_asthma_children",
          name: "Acute asthma attack in children",
          content: `## Assessing severity

Severity is graded before anything else, because it determines both where the child is treated and what they receive. The heart rate and respiratory rate thresholds are age-banded.

| | Moderate | Severe | Life-threatening |
|---|---|---|---|
| **Peak flow** | 50 to 75% of best or predicted | **33 to 50%** | **Under 33%** |
| **Speech** | Able to talk in sentences | Cannot complete a sentence in one breath, or too breathless to feed or talk | — |
| **Oxygen saturation** | Above 92% | **Below 92%** | **Below 92%** |
| **Heart rate** | Under 140 (age 1 to 5), under 125 (over 5) | **Over 140 (1 to 5), over 125 (over 5)** | — |
| **Respiratory rate** | Under 40 (age 1 to 5), under 30 (over 5) | **Over 40 (1 to 5), over 30 (over 5)** | — |
| **Other** | — | Accessory muscle use | **Altered consciousness or confusion, exhaustion, silent chest, hypotension, cyanosis, poor respiratory effort** |

The life-threatening features are the ones to recognise instantly: a **silent chest** means air is no longer moving, and **poor respiratory effort** means the child is tiring — both are more alarming than loud wheeze.

## Severe or life-threatening: admit

Give the following while awaiting admission:

- **Oxygen** — high-flow to all children with life-threatening asthma, or if saturations are **below 94%**, by tight-fitting facemask, venturi mask or nasal cannula, **targeting 94 to 98%**
- **Salbutamol, nebulised** — **5 mg if over 5 years, 2.5 mg if 2 to 5 years**. It should ideally be **oxygen-driven**, and a flow rate of at least **6 L/min** is usually needed
- **Ipratropium bromide, nebulised**, in combination with the salbutamol — **250 micrograms** from 1 month to 11 years, **every 20 to 30 minutes for the first 2 hours** then every 4 to 6 hours as required; **500 micrograms** from 12 to 17 years, every 4 to 6 hours as required
- **Magnesium sulphate, nebulised — 150 mg added to each nebulised salbutamol and ipratropium in the first hour**, in children with a short duration of acute severe symptoms
- **Corticosteroids** to all children with severe or life-threatening asthma — **prednisolone is the steroid of choice**, at **1 to 2 mg/kg once daily orally, to a maximum of 40 mg/day**. It can be given intramuscularly if the oral route is not possible. **Three days is usually sufficient**, extended according to severity
- **Monitor peak flow and oxygen saturation** to assess the response
- **Second-line if the above fails**: intravenous salbutamol, intravenous aminophylline or intravenous magnesium sulphate
- **Discuss with a senior clinician, a paediatrician or paediatric intensive care**

## Moderate exacerbation requiring admission

Admit a child with moderate asthma whose symptoms are worsening despite initial bronchodilator treatment, or who has had a **previous near-fatal attack**. While awaiting admission:

- **Oxygen** if saturations are below 94%, targeting 94 to 98%
- **Salbutamol by pressurised metered-dose inhaler with a large-volume spacer** — **1 puff every 30 to 60 seconds, up to 10 puffs**, taking **5 tidal breaths per puff**. If the response is still poor, give further doses and switch to a nebuliser if one is available
- **Ipratropium bromide** if the initial response to salbutamol is poor, at the doses above
- **Prednisolone** 1 to 2 mg/kg once daily, maximum 40 mg/day
- Monitor peak flow and saturations

## Mild, or moderate not requiring admission

- Admission is not required
- **Oxygen** if saturations are below 94%
- **Salbutamol by pressurised metered-dose inhaler and large-volume spacer** — 1 puff every 30 to 60 seconds up to 10 puffs, 5 tidal breaths per puff, **repeated every 10 to 20 minutes** according to response
- **Consider a short course of prednisolone**, 3 to 5 days
- Once symptoms settle, return to the **SABA as required, up to 4 times a day and not more often than 4-hourly**
- **The ICS dose does not need to be altered, and an ICS must never be used as a substitute for oral prednisolone**
- Advise parents to monitor peak flow and to seek help if symptoms worsen or the peak flow falls
- Consider starting **montelukast in children over 2 years**

## Antibiotics

**Antibiotics are not routinely prescribed** unless bacterial infection is genuinely suspected — **most asthma attacks are triggered by viral infection**.

## Follow-up

- Within **48 hours of presentation** if the child was not admitted
- Within **2 working days of discharge** if they were

At that review, assess symptoms, peak flow and inhaler technique; consider stepping up treatment; consider non-adherence to current treatment; check vaccinations; and ask about smoking, including household exposure. Ensure the family has received **self-management education and a personalised asthma action plan**. **Refer to a respiratory physician if the child has had 2 asthma attacks within 12 months.**

> High-yield: a **silent chest, exhaustion, cyanosis or altered consciousness** is life-threatening asthma. Nebulised salbutamol 5 mg over 5 years and 2.5 mg for 2 to 5 years; prednisolone 1 to 2 mg/kg to a maximum of 40 mg; and nebulised magnesium 150 mg in the first hour for severe attacks. Do not give antibiotics routinely.`,
        },
        {
          id: "bronchiolitis_and_viral_wheeze",
          name: "Bronchiolitis & viral episodic wheeze",
          content: `## Two overlapping causes of the wheezy young child

**Bronchiolitis** is a lower respiratory tract infection of infancy, usually caused by **respiratory syncytial virus (RSV)**, presenting with coryza followed by cough, tachypnoea, widespread fine crackles and wheeze, poor feeding and sometimes apnoea. It typically affects babies under 1 year, peaks at 3 to 6 months and in winter.

**Viral episodic wheeze** is wheeze occurring only with viral upper respiratory tract infections in a preschool child who is entirely well in between. The important instruction is explicit in the guidance: **do not diagnose these children with asthma**, because many preschool children will grow out of the illness by the age of 6.

## Bronchiolitis: when to refer and admit

**Refer immediately, by 999 ambulance, if there is:**

- **Apnoea**, observed or reported
- A child who **looks seriously unwell**
- **Severe respiratory distress** — grunting, marked recession, or a respiratory rate above **70 per minute**
- **Central cyanosis**

**Consider referral if there is:**

- A respiratory rate above **60 per minute**
- Difficulty breastfeeding or inadequate oral intake, at **50 to 75% of the usual volume**
- **Clinical dehydration** — capillary refill over 3 seconds, reduced skin turgor, dry mucous membranes, reduced urine output
- Persistent oxygen saturation **below 92%** on air

**Admit if there is:**

- **Apnoea**, observed or reported
- Persistently low saturations — **below 92% in babies under 6 weeks, or at any age with an underlying health condition; below 90% in children aged 6 weeks and over**
- **Inadequate fluid intake**, at 50 to 75% of normal
- Features of **severe respiratory distress** — grunting, chest recession, respiratory rate above 70

Have a **lower threshold to admit** infants with risk factors for severe disease: prematurity, chronic lung disease of prematurity, congenital heart disease, immunodeficiency, neuromuscular disease, and age under 3 months.

Note the deliberate asymmetry between the thresholds: **92% is the threshold for referral, but 90% for admission and for oxygen** in a baby aged 6 weeks or over.

## Bronchiolitis: investigations

**Bronchiolitis is a clinical diagnosis.**

- **Do not routinely perform blood tests**
- **Do not routinely perform a chest X-ray**, because the changes can mimic pneumonia and lead to unnecessary antibiotics

## Bronchiolitis: management

Treatment is supportive. Bronchodilators, corticosteroids, antibiotics, nebulised hypertonic saline and montelukast are **not** effective in bronchiolitis, which is the point most often tested.

- **Humidified oxygen** if saturations are persistently below **92% in babies under 6 weeks or with underlying conditions**, or below **90% in children aged 6 weeks and over**
- **CPAP** if there is **impending respiratory failure**
- **Upper airway suction** — **do not perform routinely**; do it if upper airway secretions are causing respiratory distress or feeding difficulty
- **Fluids by nasogastric or orogastric tube** if the baby cannot take enough by mouth; **intravenous fluids** if they cannot tolerate enteral fluids or have impending respiratory failure

**Prevention**

- **Infection control measures** on the ward, because RSV is highly infectious
- **Palivizumab**, a monoclonal antibody against RSV given monthly, reduces hospital admissions in **high-risk preterm infants**

## Viral episodic wheeze: management

Management is most commonly at home or in hospital, and follows the same bronchodilator principles as acute asthma.

- **First-line is salbutamol.** **Burst therapy** is typically used: **10 puffs through a large-volume spacer, one puff every 30 to 60 seconds**, then reassess the response and **repeat every 10 to 20 minutes**
- If the child can go **4 hours without symptoms reappearing**, they can be discharged, with a **salbutamol weaning regimen** using the inhaler and spacer, to be used as required at home in future episodes
- **Escalate as per acute asthma** if the child does not respond
- Where the wheeze is **mild, intermittent and only occurs with viral upper respiratory infections**, consider **not** starting maintenance treatment, and plan a review at an agreed interval instead
- **Encourage parents who smoke to stop**
- **Follow up within 48 hours** if not admitted, or within **2 working days of discharge**

> High-yield: bronchiolitis is a **clinical diagnosis** treated **supportively** — no bronchodilators, no steroids, no antibiotics, no routine X-ray. The oxygen and admission threshold is **90%** from 6 weeks of age, but **92%** under 6 weeks or with comorbidity. Preschool viral wheeze responds to salbutamol but must not be labelled asthma.`,
        },
        {
          id: "stridor_in_children",
          name: "Stridor: croup, epiglottitis & laryngomalacia",
          content: `## The stridulous child

Stridor is a harsh noise produced by turbulent flow through a narrowed **extrathoracic** airway, and it is classically **inspiratory**. The differential is settled largely by the speed of onset and the presence of toxicity.

| Feature | Croup | Acute epiglottitis | Laryngomalacia |
|---|---|---|---|
| Onset | Over **days**, worse at night | **Hours**, rapidly progressive | From the first weeks of life, chronic |
| Cough | **Barking, seal-like** | Absent or minimal | Absent |
| Voice | Hoarse | **Muffled, "hot potato"** | Normal |
| Systemic upset | Mild | **Toxic, high fever** | None |
| Posture and drooling | Normal | **Sitting forward, drooling, unable to swallow** | Normal |
| Cause | Parainfluenza virus | *Haemophilus influenzae* type b | Floppy supraglottic tissue |

## Croup (laryngotracheobronchitis)

Consider admitting all children with **moderate or severe** illness. The features to grade are the **seal-like barking cough, stridor, sternal or intercostal recession at rest**, and **agitation or lethargy**.

**Admit any child with impending respiratory failure**, recognised by:

- A **minimal barking cough** — and note that **stridor may become harder to hear** as obstruction worsens, which is an ominous rather than reassuring sign
- Increasing upper airway obstruction, sternal and intercostal recession
- **Asynchronous chest wall and abdominal movement**
- Fatigue, pallor, cyanosis
- **Decreased level of consciousness**
- Respiratory rate above 70

**Management**

- **All severities receive oral dexamethasone 0.15 mg/kg**, which can be repeated after 12 hours if required. If oral medication is not possible, give **inhaled beclometasone 2 mg** or **intramuscular dexamethasone 0.6 mg/kg**
- **Mild croup** — no admission needed. Safety-net clearly: return to hospital if stridor becomes continuous or the skin between the ribs pulls in with every breath, and **call an ambulance** if the child is very pale, blue or grey for more than a few seconds, unusually sleepy or unresponsive, has a lot of trouble breathing, is agitated and cannot be calmed, or is unable to talk, drooling or having trouble swallowing
- **Moderate croup** — oxygen
- **Severe croup** — oxygen, **nebulised budesonide**, and **nebulised adrenaline (1 in 1000, 1 mg/mL)**, with intubation and ventilation in the minority who develop respiratory failure

Two counselling points: croup **improves over about 48 hours**, and the cough is **worse at night**, so parents should check on the child overnight.

## Acute epiglottitis

A true airway emergency, now rare because of Hib immunisation — which means an unimmunised child raises the suspicion.

**If acute epiglottitis is suspected, urgent hospital admission to intensive care is required.**

- **Secure the airway, and do NOT examine the throat.** Examining the pharynx, or distressing the child in any way, can precipitate complete airway obstruction. **Direct rigid laryngoscopy and intubation** is the most common approach, performed by the most senior anaesthetist available
- **Take a blood culture**
- **Intravenous second or third generation cephalosporins** — for example **ceftriaxone — for 7 to 10 days**
- **Consider supplemental oxygen** if the child is stable and there are no signs of impending airway compromise
- **Consider steroids**, and adrenaline may be used to reduce inflammation
- Prolonged intubation may be necessary in severe cases
- With appropriate treatment, **most children recover completely within 2 to 3 days**

## Laryngomalacia

Floppy supraglottic tissue collapses inward on inspiration. The key examination finding is a **high-pitched inspiratory stridor that is worse on lying flat or on exertion**. The prognosis is excellent, with **99% resolving with time**.

| Severity | Management |
|---|---|
| **Mild (90% of cases)** | Observation and reassurance that it **resolves by 12 to 16 months**, though symptoms may **peak at 6 months** and worsen after respiratory infections. Gastro-oesophageal reflux exacerbates it, so consider anti-reflux measures: **thickened feeds** first, then **famotidine or omeprazole**, and Nissen fundoplication as a last resort. Feed the child **upright** |
| **Moderate to severe** | Observation, since there may be increased work of breathing and poor weight gain, plus reflux therapy. **Elective surgery** may be needed — **endoscopic supraglottoplasty** first, then **tracheostomy**. **BiPAP** if there is obstructive sleep apnoea and surgery is not indicated or has not worked |
| **Life-threatening** | Worsening stridor or respiratory distress with severe airway compromise. **Keep the child calm**, involve senior paediatrics, anaesthetics and ENT early, and move to resus or HDU. If maintaining their own airway: **humidified oxygen, nebulised adrenaline, oral or intravenous dexamethasone** (cannulate only when necessary, to avoid distressing the child) and **heliox**. If failing to maintain the airway: bag and mask, nasopharyngeal airway, laryngeal mask, endotracheal tube, or surgical intervention |

> High-yield: **barking cough with stridor** is croup, and every severity gets **dexamethasone 0.15 mg/kg**. **Drooling, muffled voice, high fever and a child sitting forward** is epiglottitis — do not examine the throat, do not distress the child, and get the airway secured. Chronic inspiratory stridor worse lying flat in a thriving infant is laryngomalacia, and it resolves.`,
        },
        {
          id: "foreign_body_inhalation",
          name: "Foreign body inhalation & choking",
          content: `## Choking in a child

Inhalation of a foreign body typically occurs in a **toddler**, often with a witnessed episode of choking while eating or playing, and classically with **peanuts or small toys**. Objects most often lodge in the **right main bronchus**, which is wider, shorter and more vertical.

The distinction that drives management is **effective versus ineffective coughing**. A child who is coughing forcefully, can cry or speak, and is able to take a breath before coughing has an **effective** cough — encourage them to keep coughing and do nothing else that might dislodge the object into a worse position. Intervene only when the cough becomes **ineffective**: a silent or quiet cough, inability to speak or breathe, cyanosis, or a decreasing level of consciousness.

## The conscious child

Following the Resuscitation Council paediatric choking sequence:

- **Encourage coughing** while the cough remains effective
- If coughing becomes ineffective, move to **external manoeuvres**:
- **Five back blows**
- Then **five abdominal thrusts (the Heimlich manoeuvre)** in a child **over 1 year of age**
- **Five chest thrusts instead of abdominal thrusts in infants.** Abdominal thrusts must **NOT** be performed on infants and very young children, because the liver is relatively large and unprotected by the rib cage and is easily ruptured
- **Reassess** after each cycle. If the object has not been expelled and the child is still conscious, **continue the sequence** of back blows alternating with chest or abdominal thrusts, and call out or send for help if it has not already arrived

## The unconscious child

- **Start CPR** in line with paediatric basic life support guidelines
- **Secure the airway immediately** with endotracheal intubation, **unless the foreign body can be seen and removed from the upper airway** — attempt removal only with a **single finger sweep** under direct vision. Blind finger sweeps are not performed, as they can push the object further in
- A **cricothyroidotomy** may be needed if the airway cannot be secured from above
- Give **five rescue breaths**

## Removal in hospital

- **First-line is bronchoscopy.** **Rigid** bronchoscopy is preferred where there is **stridor, asphyxia, a radio-opaque object seen on the chest X-ray, or a clear history of foreign body aspiration** associated with **unilateral decreased breath sounds, a localising wheeze, obstructive hyperinflation or atelectasis**
- In all other cases, **flexible bronchoscopy** is performed to confirm the diagnosis, usually under conscious sedation or general anaesthesia
- **Second-line is surgery — thoracotomy**

A practical point worth remembering: most inhaled foreign bodies are **radiolucent**, so a normal chest X-ray does not exclude one. The indirect signs are the useful ones — unilateral hyperinflation from a ball-valve effect (best seen on an expiratory film), or collapse distal to a complete obstruction.

> High-yield: **effective cough — encourage coughing and do nothing else.** Ineffective cough — five back blows then five thrusts, and those thrusts are **chest thrusts in an infant, never abdominal**. A normal chest X-ray does not exclude an inhaled foreign body.`,
        },
        {
          id: "paediatric_pneumonia_pertussis",
          name: "Pneumonia & whooping cough in children",
          content: `## Pneumonia

**Refer immediately for hospital admission if there is:**

- Persistent oxygen saturation **below 92%** on air
- **Grunting, marked chest recession, or a respiratory rate above 60 per minute**
- **Cyanosis**
- A child who **looks seriously unwell**, does not wake or stay awake when roused, or does not respond to normal social cues
- A **temperature above 38 degrees in a child under 3 months**

**Consider admission** if there is dehydration, decreased activity, nasal flaring, or a predisposing disease such as chronic lung disease. While awaiting admission, give controlled supplemental oxygen if saturations are persistently below 92%.

**If admission is not needed**, most children can be managed at home:

- **Bacterial and viral pneumonia cannot be reliably distinguished clinically, so all children should be given antibiotics**
- **Amoxicillin is first-line, for 5 days**, in low to moderate severity. If penicillin-allergic, give **clarithromycin**
- A **macrolide can be added at any stage** if there is no response to first-line treatment
- **Co-amoxiclav** for high severity, adding **clarithromycin** if an atypical organism is suspected
- **Paracetamol or ibuprofen** as antipyretics, and maintain adequate hydration
- Seek advice if the respiratory rate increases, dehydration develops or the fever worsens

If admitted, give **oral antibiotics if tolerated**; otherwise intravenous, reviewing at **48 hours** to consider switching to oral.

For context on the causative organisms and the pathological patterns — bronchopneumonia, lobar pneumonia and the atypicals — see the *Pneumonia: pathological patterns* topic. In children, **Streptococcus pneumoniae** is the commonest bacterial cause at all ages beyond the newborn period, with **respiratory syncytial virus** the commonest viral cause in infants and **Mycoplasma pneumoniae** becoming important in school-age children.

## Whooping cough (pertussis)

Caused by *Bordetella pertussis*, and a **notifiable disease** — **notify the Health Protection Unit**. It runs in three phases: a **catarrhal** phase indistinguishable from a cold, then a **paroxysmal** phase of coughing fits ending in the characteristic inspiratory **whoop** (often absent in infants, who may instead present with **apnoea** as the only sign), and then a prolonged **convalescent** phase. Post-tussive vomiting and subconjunctival haemorrhages are characteristic.

**Admit in isolation if the child is:**

- **Under 6 months old, or acutely unwell**
- Has **significant breathing difficulties** — apnoea, severe paroxysms, cyanosis
- Has **significant complications** — seizures, pneumonia

**Management**

- If admission is not needed, **prescribe an antibiotic if the onset of the cough is within 21 days** — beyond that the child is no longer infectious and antibiotics do not alter the course
- **Under 1 month: clarithromycin**
- **Over 1 month and not pregnant: azithromycin**
- If macrolides are contraindicated, give **co-trimoxazole**, but **not in infants under 6 weeks**

**Advice**

- Rest, adequate fluids, and paracetamol or ibuprofen for symptomatic relief
- Explain that **despite antibiotics the cough is likely to be protracted**, taking weeks and sometimes **3 months or more** to resolve — antibiotics reduce infectivity rather than shorten the cough
- **Avoid nursery until 48 hours of appropriate antibiotic treatment is completed**, or **21 days after the onset of the cough** if untreated
- Once the acute illness is over, **complete any outstanding immunisations**, and discuss any parental concerns about immunisation

> High-yield: give **amoxicillin for 5 days** for childhood pneumonia, and give it to everyone, because you cannot tell bacterial from viral. In whooping cough, notify the HPU, treat only if the cough started **within 21 days**, and exclude from nursery for **48 hours after starting antibiotics or 21 days if untreated**.`,
        },
        {
          id: "common_cold_and_covid_children",
          name: "Common cold, cough & COVID-19 in children",
          content: `## The common cold

- **Reassure that the common cold is self-limiting.** Symptoms may **peak after 2 to 3 days** and typically resolve **within 2 weeks**
- Consider possible **SARS-CoV-2 infection** if there are any key symptoms
- Encourage **rest, adequate fluid intake and a healthy diet**
- **Paracetamol or ibuprofen** for symptomatic relief. They should **not be given simultaneously in children under 5**, but may be alternated if the child appears distressed on one alone, and should be continued only for as long as the child appears distressed
- Simple remedies that may help: **steam inhalation, vapour rubs, gargling salt water, and nasal saline drops**
- **Honey and lemon with water** can be used for cough in children **over 1 year** — not below, because of the risk of infant botulism

**Over-the-counter cough and cold products should not be used under the age of 6.** The ingredients to avoid are:

| Class | Examples |
|---|---|
| **Antitussives** | Dextromethorphan, pholcodine |
| **Expectorants** | Guaifenesin, ipecacuanha |
| **Decongestants**, topical and oral | Ephedrine, oxymetazoline, phenylephrine, pseudoephedrine, xylometazoline |
| **Antihistamines** | Brompheniramine, chlorphenamine, diphenhydramine, doxylamine, promethazine, triprolidine |

## Cough

Acute cough in a child is usually viral and is managed as for the common cold. What matters is recognising the cough that is **not** simple: a cough lasting more than 8 weeks, a cough that began suddenly with choking (see *Foreign body inhalation and choking*), a productive cough with failure to thrive (see *Cystic fibrosis*), a paroxysmal cough with whoop or apnoea (see *Pneumonia and whooping cough in children*), and nocturnal cough with wheeze (see *Asthma in children*).

## COVID-19 in children

COVID-19 is a **notifiable disease**.

**Testing.** Test individuals with a **new continuous cough**, a **temperature of 37.8 degrees or above**, or **loss of or change in normal sense of smell (anosmia) or taste (ageusia)**. Also consider testing in people with an acute respiratory infection, clinical or radiological evidence of pneumonia, an influenza-like illness, acute worsening of an underlying respiratory illness, fever without another cause, new delirium in an older person, or an immunocompromised person with a possible atypical presentation.

**Children are at lower risk of severe COVID-19** than adults. Those most at risk are **under 1 year, and aged 10 to 24 years**. **Children with mild to moderate disease do not routinely need admission or investigations** such as blood tests and radiology — and that describes most children.

**Management**

- **Vaccination** — children over 5 can be vaccinated; a full course is **2 doses at least 8 weeks apart**
- **Radiology** — chest X-rays and CT scans **may reveal findings even in asymptomatic children**, of unclear individual relevance. They should **not be performed routinely, even in children who need oxygen on admission**, and should only be used to answer a specific question
- **Isolation**
- **Oxygen** — most children, even with lung involvement, are unlikely to develop respiratory failure. Start with **low-flow nasal cannula oxygen** if hypoxic, with escalation decided by a senior team member. **CPAP** may be considered to prevent deterioration
- **Dexamethasone** (or hydrocortisone or prednisolone as alternatives) **if supplemental oxygen is required**, or if the child is hypoxic to a degree requiring oxygen but cannot tolerate it. **Specialist advice is required for all children aged 5 years and under**
- **Remdesivir** — specialist advice required. A **5-day course** is considered for hospitalised children **at least 4 weeks old and at least 3 kg** needing supplemental oxygen
- **Intensive care** escalation is discussed by senior teams
- **Antibiotics** if secondary bacterial infection is suspected, which occurs in about **15% of children**, and considered if a child is unusually unwell at admission with an identifiable source

**Paediatric inflammatory multisystem syndrome** is the complication specific to children — a post-infectious hyperinflammatory illness with persistent fever, rash, conjunctivitis, gastrointestinal symptoms and shock, overlapping clinically with Kawasaki disease and toxic shock syndrome. It **requires admission, close monitoring and discussion with high-dependency or paediatric intensive care**.

> High-yield: no over-the-counter cough and cold preparations under 6, and no honey under 1. In COVID-19, do not image children routinely even if they need oxygen, and give dexamethasone only to those needing supplemental oxygen.`,
        },
        {
          id: "cystic_fibrosis_management",
          name: "Cystic fibrosis: management in children",
          content: `## Cystic fibrosis

An autosomal recessive disorder of the **cystic fibrosis transmembrane conductance regulator (CFTR)** chloride channel, producing viscous secretions that block ducts throughout the body. The genetics, the F508del mutation and the pathological consequences are covered in the *Obstructive lung disease (pathology)* topic; what follows is management.

**Children with cystic fibrosis should be managed at a specialist tertiary centre.** The diagnosis is usually made on newborn screening (see *Newborn screening and inherited metabolic disease*), confirmed by a **sweat chloride test** and genotyping.

## CFTR modulators

These are the drugs that have transformed the condition. They act on the defective protein itself rather than on its consequences, and have been shown to **significantly improve FEV1 and quality of life — not only respiratory symptoms — and to reduce acute exacerbations**.

**All children with cystic fibrosis should undergo CFTR genotyping** to establish whether they carry a mutation approved for modulator therapy; more than 180 eligible mutations have been identified.

| Situation | Treatment |
|---|---|
| **F508del present and over 2 years old** | **Triple therapy is first-line — elexacaftor/tezacaftor/ivacaftor (Kaftrio)**, the most effective of the modulators, typically improving FEV1 by around 15% |
| **F508del present and under 2 years old** | **Lumacaftor-ivacaftor** if homozygous; **ivacaftor** if heterozygous |

## Respiratory management

The common pulmonary complications are **pneumonia, nasal polyps and sinusitis** (the prevalence of which rises with age).

**General prophylaxis**

- **Airway clearance techniques**, principally physiotherapy
- **Mucoactive agents** — **first-line rhDNase (dornase alfa)**; second-line **hypertonic sodium chloride** with or without rhDNase; third-line **mannitol dry powder for inhalation**. These are recommended unless the child is over 12, taking Kaftrio, and has normal or only mildly reduced lung function

**Infection**

- Use **sputum cultures and local microbiology guidelines** to manage pulmonary exacerbations
- **Flucloxacillin** as prophylaxis against *Staphylococcus aureus* pneumonia
- **Chronic azithromycin** after *Pseudomonas aeruginosa* has been cultured — its benefit here is due to **dual antimicrobial and immunomodulatory effects**
- **Colistin and tobramycin**, usually nebulised, for chronic or persistent *Pseudomonas aeruginosa* infection

## Gastrointestinal management

Common complications are **malnutrition and being underweight, intussusception, meconium ileus** (which affects about 1 in 7 newborn babies with the condition) and **fat-soluble vitamin deficiency (A, D, E and K)**.

- A **high-calorie diet**
- **Pancreatic enzyme replacement therapy** such as Creon. Pancreatic insufficiency is confirmed by a low **faecal elastase**
- An **H2 receptor antagonist or proton pump inhibitor** if malabsorption persists despite optimal enzyme replacement — raising the gastric pH stops the enzymes being denatured
- **Distal intestinal obstruction syndrome** — first-line treatment is **Gastrografin**, orally or by enteral tube
- **Liver disease**, whose prevalence rises with age into early adulthood — if the liver function tests are abnormal, **ursodeoxycholic acid** is first-line, stopped once they recover; refer to a specialist if chronic and deteriorating

## Other complications

- **Male infertility from obstructive azoospermia** — almost all males with cystic fibrosis are infertile, because of congenital bilateral absence of the vas deferens. Female fertility is reduced but not absent
- **Cystic-fibrosis-related diabetes** — uncommon under 10 years, but the prevalence rises with age and it affects up to **1 in 2 adults**. These children are seen in joint clinics with paediatric endocrinologists
- **Reduced bone mineral density**, with **DEXA scans every 5 years** as standard care
- **Genetic counselling** for the parents, and for the child once old enough

> High-yield: genotype every child, because **Kaftrio (elexacaftor/tezacaftor/ivacaftor) is first-line from 2 years of age if F508del is present**. First-line mucoactive agent is rhDNase; chronic azithromycin follows a *Pseudomonas* isolate; and Gastrografin treats distal intestinal obstruction syndrome.`,
        },
        {
          id: "paediatric_bronchiectasis",
          name: "Bronchiectasis in children",
          content: `## Diagnosis

**All children with suspected bronchiectasis should be referred to a paediatric respiratory consultant** for investigations to confirm the diagnosis, determine the underlying cause and arrange treatment.

**High resolution CT is the gold standard investigation.** The radiological features are:

- **Bronchial wall thickening**
- A **bronchial diameter larger than that of the accompanying artery** — the **"signet ring" sign**
- **Visible peripheral bronchi**, which should not normally be seen at the lung periphery

**Bronchoscopy is not required to diagnose bronchiectasis.** It is generally reserved for children with **focal** bronchiectasis on CT, or where there is evidence of a possible airway abnormality — the concern in focal disease being an obstructing lesion or a retained foreign body.

## Finding the cause

In children, bronchiectasis is far more likely than in adults to have a specific, treatable underlying cause, so the workup is mandatory rather than optional:

- **Sweat chloride test or genetic testing for cystic fibrosis** — offered to **all** children
- **Screen for antibody deficiency** with **IgG, IgA and IgM** — done for all patients with a confirmed diagnosis
- **Test for primary ciliary dyskinesia** — only if no other cause is found **and** there is a history of **continuous rhinitis, neonatal respiratory distress, or dextrocardia** (the last being part of Kartagener syndrome)

## Management

- **Treat the underlying cause** — for example cystic fibrosis
- **Vaccinate against *Streptococcus pneumoniae* and seasonal influenza**, offered to all patients with bronchiectasis
- **Airway clearance techniques**, with or without **nebulised saline**

**Acute exacerbation of non-cystic-fibrosis bronchiectasis.** The commonly isolated organisms are **non-encapsulated *Haemophilus influenzae*, *Streptococcus pneumoniae* and *Moraxella catarrhalis*** — whereas ***Pseudomonas* species are characteristic of cystic fibrosis bronchiectasis**. Antibiotics can be started empirically but should be guided by **sputum culture sensitivities** once available.

| Age and route | First-line | Second-line |
|---|---|---|
| **Oral, 1 month to 11 years** | **Amoxicillin** or **clarithromycin** | **Co-amoxiclav** |
| **Oral, 12 to 17 years** | **Doxycycline** | **Co-amoxiclav**; ciprofloxacin on specialist advice if co-amoxiclav cannot be used |
| **Intravenous, 1 month to 17 years** — if severely unwell or unable to take oral | **Co-amoxiclav** or **piperacillin with tazobactam** | Ciprofloxacin (from 1 year, on specialist advice) |

**Refer from primary to secondary care if:**

- **Three or more infective exacerbations in one year**
- They have had a **severe infection**
- Symptoms are **not responding to repeated courses of antibiotics**

**Refer to hospital** for signs of more serious illness — **cardiorespiratory failure** or **sepsis**.

**Admit for an exacerbation if there is:**

- **Breathlessness** with a raised respiratory rate and increased work of breathing
- **Circulatory or respiratory failure**
- **Cyanosis**
- **Temperature above 38 degrees**
- Inability to take oral medication
- **No improvement with oral antibiotics**, indicating a step up to intravenous treatment

> High-yield: high resolution CT with the **signet ring sign** makes the diagnosis, and bronchoscopy is not needed unless the disease is **focal**. Every child needs cystic fibrosis and immunoglobulin testing; test for primary ciliary dyskinesia only if nothing else fits and there is rhinitis, neonatal respiratory distress or dextrocardia.`,
        },
        {
          id: "sleep_disordered_breathing_children",
          name: "Sleep-disordered breathing in children",
          content: `## Sleep-disordered breathing

Sleep-disordered breathing in children spans a spectrum from simple snoring to **obstructive sleep apnoea**, in which repeated upper airway collapse during sleep causes intermittent hypoxia and arousal. The commonest cause by far is **adenotonsillar hypertrophy**, which is why the peak age is 2 to 6 years, when the tonsils and adenoids are largest relative to the airway.

Other important risk groups are children with **Down syndrome** (midface hypoplasia, macroglossia, hypotonia and a narrow airway together make this very common), obesity, craniofacial abnormalities, neuromuscular disease, and cerebral palsy.

The presentation differs from adults in an important way. Adults are sleepy; **children are more often hyperactive, inattentive and irritable**, so obstructive sleep apnoea is a recognised mimic of attention deficit hyperactivity disorder. The nocturnal features are **snoring, witnessed apnoeas, restless sleep, unusual sleeping positions with the neck extended, mouth breathing and secondary nocturnal enuresis**; the daytime consequences are behavioural and educational difficulties, morning headache, and in severe untreated cases **faltering growth and pulmonary hypertension**.

Diagnosis is clinical in straightforward cases, supported by **overnight oximetry** or formal **polysomnography** where the diagnosis is uncertain, the child is very young or has comorbidity, or surgery is being considered in a higher-risk child.

## Management

- **Adenotonsillectomy** is the definitive treatment for children with adenotonsillar hypertrophy, and **usually causes a dramatic improvement in symptoms**
- **CPAP or BiPAP** benefits other children, maintaining the upper airway at night. This is the route where surgery is not appropriate — for example in obesity-related or neuromuscular disease
- **Montelukast, with or without intranasal budesonide**, can be used where surgery has not relieved the obstruction, or in mild disease

Weight management is addressed alongside where obesity is contributing.

> High-yield: a child who snores with witnessed apnoeas and is **hyperactive and inattentive rather than sleepy** has obstructive sleep apnoea until proven otherwise, the usual cause is adenotonsillar hypertrophy, and adenotonsillectomy is usually curative. Have a much lower threshold for investigating a child with Down syndrome.`,
        },
        {
          id: "cows_milk_allergy_lactose_intolerance",
          name: "Cow's milk protein allergy & lactose intolerance",
          content: `## Two conditions that are constantly confused

Both cause an unhappy infant with loose stools after milk, but they are entirely different problems and the distinction determines the treatment.

| | Cow's milk protein allergy | Lactose intolerance |
|---|---|---|
| **Mechanism** | **Immune** reaction to the protein | **Enzymatic** — lactase deficiency, so lactose is unabsorbed and fermented |
| **Features beyond the gut** | Yes — urticaria, eczema, wheeze, anaphylaxis | **No** — purely gastrointestinal |
| **Treatment** | Exclude cow's milk **protein** | Reduce **lactose**, or replace the enzyme |

## Cow's milk protein allergy

It affects roughly **5 to 15% of infants** and, like other food allergy, splits by mechanism: **IgE-mediated** with onset within minutes (up to 2 hours) of ingestion, and **non-IgE-mediated** with onset **2 to 72 hours** afterwards.

**IgE-mediated, mild to moderate**

- **Allergy testing at a specialist allergy clinic**, and **referral to a paediatric dietitian**
- **Exclusively breastfed**: the **mother excludes all cow's milk protein from her diet**, and takes **calcium and vitamin D supplements**
- **Formula-fed or mixed feeding**: a trial of **extensively hydrolysed formula**

**IgE-mediated, severe**

- As above, plus consider an **elemental (amino acid) formula** if extensively hydrolysed formula is not effective
- **Refer to A&E if there are severe respiratory or cardiovascular signs** — the risk is anaphylaxis

**Non-IgE-mediated, mild to moderate**

- Be **wary of over-diagnosing**, because vomiting and diarrhoea are extremely common in infants
- **Exclusively breastfed**: the mother excludes all cow's milk protein for **2 to 4 weeks**, followed by **home reintroduction to confirm the diagnosis** if there has been clear improvement. Calcium and vitamin D supplements for the mother
- **Formula-fed or mixed feeding**: a trial of **extensively hydrolysed formula**

**Non-IgE-mediated, severe** — classified as severe when the above measures have been taken and symptoms persist and are severe. Look for:

- **Skin**: pruritus, erythema, atopic eczema
- **Gastrointestinal**: reflux, vomiting, loose stools, blood or mucus in the stool, abdominal pain, infantile colic, food refusal or aversion, constipation, perianal redness, faltering growth
- **Respiratory**: cough, chest tightness, wheeze, shortness of breath

Manage as for mild to moderate disease **plus urgent referral to the local paediatric allergy service and to a dietitian**.

**Follow-up and reintroduction**

- Advise a **cow's-milk-free diet until the child is 9 to 12 months old, and for at least 6 months**, if non-IgE-mediated allergy is confirmed
- Then begin the **milk ladder** for home reintroduction, to assess whether tolerance has been acquired
- For **weaned infants and older children**: exclude cow's milk protein, offer **nutritional counselling with a paediatric dietitian**, **monitor growth regularly**, and **re-evaluate every 6 to 12 months** by reintroducing cow's milk protein. Where tolerance is established, work up the **milk ladder** towards less processed milk

Two counselling points: it takes **2 to 3 weeks** to fully eliminate cow's milk protein from breast milk, so a maternal exclusion trial must run long enough to be meaningful; and **many children grow out of it**, which is why reintroduction is planned rather than avoided indefinitely.

## Lactose intolerance

**Hereditary (primary)**

- **Dietary modification** by avoidance, trialling different foods to establish the individual **lactose threshold** — done with a **dietitian**
- **Lactase-treated dairy products or oral lactase supplementation**
- **Calcium and vitamin D supplementation** is required

**Acquired (secondary)** — most often transient after gastroenteritis, which strips the lactase-bearing brush border

- **Treat the underlying cause**
- The same dietary modification with a dietitian, lactase-treated products or lactase supplements, and calcium and vitamin D supplementation

> High-yield: extra-intestinal features — rash, wheeze, faltering growth — mean **allergy**, not intolerance. Cow's milk protein allergy is treated with extensively hydrolysed formula first and amino acid formula only if that fails, and the mother must exclude cow's milk if breastfeeding.`,
        },
        {
          id: "scarlet_fever",
          name: "Scarlet fever",
          content: `## Scarlet fever

A group A streptococcal infection producing a characteristic exanthem, caused by an erythrogenic toxin. It typically affects children aged 2 to 8 and usually follows streptococcal pharyngitis.

The presentation is a sore throat and high fever, then after a day or two a **sandpaper-textured, blanching, punctate erythematous rash** that begins on the trunk and spreads, sparing the palms and soles, with **flushed cheeks and circumoral pallor** and a **"strawberry tongue"** (initially white-coated, then red and papillate). **Desquamation** of the fingers and toes follows in convalescence.

## Notification

**Scarlet fever is a notifiable disease — notify the Health Protection Unit within 3 days.**

## Management

- **Phenoxymethylpenicillin (penicillin V) four times daily for 10 days**
- **Azithromycin** if penicillin-allergic, in children aged 6 months to 17 years
- **The 10-day course matters**: it is given to prevent the non-suppurative complications, **acute glomerulonephritis and rheumatic fever**, not merely to shorten the illness
- **Stay away from nursery or school until 24 hours after starting antibiotics**
- **Effective and frequent handwashing**
- **Paracetamol or ibuprofen** for symptomatic relief
- Symptoms should settle after about **1 week**. Arrange follow-up if they worsen or have not improved after 7 days, and advise seeking medical advice if complications develop

Penicillin V remains first choice. Where it is unavailable, the order of preference is **amoxicillin, then a macrolide, then cefalexin**.

## Complications

- **Suppurative**: peritonsillar abscess (quinsy), otitis media, sinusitis, mastoiditis, and rarely necrotising fasciitis or streptococcal toxic shock syndrome
- **Non-suppurative, immune-mediated**: **acute post-streptococcal glomerulonephritis** and **acute rheumatic fever** — the reason for completing the full antibiotic course

> High-yield: sandpaper rash with circumoral pallor and a strawberry tongue. **Notify the Health Protection Unit**, give **penicillin V for 10 days**, and exclude from school for **24 hours after starting antibiotics**. The 10 days is about preventing rheumatic fever and glomerulonephritis.`,
        },
        {
          id: "paediatric_gord_and_colic",
          name: "Reflux & infant colic",
          content: `## Gastro-oesophageal reflux in infants

Regurgitation is normal in babies: the lower oesophageal sphincter is immature, the diet is entirely liquid and the baby spends much of the day lying flat. It becomes reflux **disease** only when it causes distress, feeding difficulty or faltering growth.

**Reassure the parents that:**

- It is **very common**
- It **begins early, before 8 weeks**, and may be frequent
- It usually becomes **less frequent with time**, resolving in most infants by a year
- **Treatment and investigation are not usually needed**

## When that reassurance does not apply

**Review the infant if there is:**

- **Projectile** regurgitation — think **pyloric stenosis**
- **Bile-stained vomit or haematemesis**
- New concerns such as **faltering growth** or feeding difficulty
- **Persistent frequent regurgitation beyond the first year of life**

**Refer the same day if there is haematemesis, melaena, signs of raised intracranial pressure such as a bulging fontanelle, or dysphagia.**

**Bile-stained (green) vomiting in an infant is intestinal obstruction until proven otherwise** and is covered in the *Bowel obstruction in children* topic — it is never reflux.

## Management

**If breastfed:** carry out a **breastfeeding assessment**, then trial **smaller, more frequent feeds**. If the problem persists despite advice, consider a trial of **alginate therapy for 1 to 2 weeks**, stopping at intervals to check whether the infant has recovered.

**If formula-fed**, work through in order:

- **Review the feeding history** and **reduce feed volumes if excessive** for the infant's weight, aiming for **150 to 180 mL/kg/day**
- **First**, a trial of **smaller, more frequent feeds**
- **Second**, a trial of **thickened or anti-regurgitant formula**
- **Third**, **alginate therapy without feed thickeners**, stopping at 2-week intervals to see whether the infant has recovered

Each trial should last **1 to 2 weeks**.

**Positional advice:** keep the infant **upright after feeds** and avoid overfeeding. Prone and left-lateral positioning helps but only **while awake** — **do not use positional management in a sleeping infant, who must sleep on their back** (see *Sudden infant death syndrome and safer sleep*).

**Pharmacological:** consider a **2 to 4 week trial of a proton pump inhibitor or an H2-receptor antagonist** where there is one or more of unexplained feeding difficulty (refusing feeds, choking), distressed behaviour, faltering growth, or no resolution after a 1 to 2 week alginate trial. Consider **specialist referral** if there is still no resolution.

**Last resort:** enteral feeding if there is failure to thrive, or **Nissen fundoplication**, in which the fundus of the stomach is wrapped around the intra-abdominal oesophagus, done abdominally or laparoscopically.

If the child fails to respond to all of this, **reconsider the diagnosis — cow's milk protein allergy is the usual alternative** (see that topic).

## Infant colic

Excessive crying in an otherwise healthy, thriving baby, conventionally defined as crying for more than three hours a day on more than three days a week.

- **Reassure that colic is common and should resolve by 6 months of age**
- **Avoid over- or under-feeding**, and feed in a **semi-upright position to avoid aerophagia**
- **Breastfeeding should continue**, and the mother may benefit from a **hypoallergenic diet**
- **Formula-fed infants:** check the **bottle teat size** is correct; a hypoallergenic formula may help but should be re-challenged periodically to see whether the problem has resolved naturally. **Avoid soy formula**
- **Do NOT recommend simeticone (Infacol) or lactase drops (Colief)** — the evidence base is insufficient

**Strategies to soothe a crying infant:** holding the baby through the episode, reducing environmental stimuli, gentle motion such as rocking or pushing the pram, **white noise**, a warm bath, and optimal winding technique during and after feeds.

**Support the parents, not just the baby.** Encourage them to get help from family and friends, meet other parents, rest, and **put the baby somewhere safe and take a time out** if they feel overwhelmed. Point them to the health visitor and to Cry-sis and the ICON campaign. Seek paediatric advice if the parents feel unable to cope despite primary care support, if faltering growth is suspected, or if an underlying cause is suspected.

> High-yield: reflux is a clinical diagnosis needing reassurance, not investigation. **Projectile vomiting means pyloric stenosis; green vomit means obstruction.** Never position a sleeping infant other than on their back, whatever the reflux.`,
        },
        {
          id: "pyloric_stenosis",
          name: "Pyloric stenosis",
          content: `## Infantile hypertrophic pyloric stenosis

Hypertrophy of the pyloric muscle progressively obstructs the gastric outlet. It affects roughly 1 in 500 infants, presents between **2 and 8 weeks of age**, and is around four times commoner in **boys**, classically the **firstborn**, with a strong family history.

## Presentation

- **Projectile, NON-bilious vomiting** shortly after feeds — the obstruction is proximal to the ampulla, so the vomit never contains bile
- The baby is **hungry immediately afterwards** and feeds avidly, which is the detail that distinguishes it from reflux and from sepsis
- **Weight loss, dehydration and constipation**
- **Visible gastric peristalsis** across the upper abdomen, and a palpable **"olive"** mass in the right upper quadrant, best felt during a **test feed**

## The classic biochemistry

Persistent vomiting of gastric contents loses hydrogen and chloride, producing a **hypochloraemic, hypokalaemic metabolic alkalosis**. Potassium falls both from the vomiting and because the kidney excretes potassium while trying to retain hydrogen ions. A **paradoxical aciduria** develops late, as the kidney eventually prioritises sodium and water retention over acid-base balance.

**Diagnosis is confirmed by ultrasound**, showing a thickened, elongated pylorus.

## Management

**This is a medical emergency but NOT a surgical one** — the child must be resuscitated and biochemically corrected before theatre, because operating on an alkalotic infant risks post-operative apnoea.

- **Intravenous fluid resuscitation is essential to correct the fluid and electrolyte disturbance before surgery**
- Provide fluids at **1.5 times the maintenance rate**, using **5% dextrose with 0.45% saline**
- **Add potassium once urine output is adequate**
- Keep the infant nil by mouth with a nasogastric tube on free drainage

**Definitive treatment is a Ramstedt pyloromyotomy**, in which the hypertrophied muscle is divided **down to but not including the mucosa**. It can be performed open or laparoscopically, and feeding is usually restarted within hours with an excellent prognosis.

> High-yield: a hungry baby of 2 to 8 weeks with **projectile non-bilious vomiting**, a palpable olive and a **hypochloraemic hypokalaemic metabolic alkalosis**. Correct the biochemistry first, then perform a Ramstedt pyloromyotomy.`,
        },
        {
          id: "paediatric_acute_abdomen",
          name: "The acute abdomen in children",
          content: `## Appendicitis

The commonest surgical emergency of childhood, peaking between 10 and 20 years but occurring at any age. Obstruction of the appendiceal lumen — by a faecolith, lymphoid hyperplasia after a viral illness, or rarely a tumour — leads to distension, ischaemia and then perforation.

The classic history is **central periumbilical colicky pain that migrates over hours to the right iliac fossa** and becomes constant and sharp, with **anorexia** (a genuinely useful sign — a child who wants to eat rarely has appendicitis), nausea, vomiting and a low-grade fever. Examination shows tenderness and guarding at **McBurney's point**, with percussion tenderness and **Rovsing's sign**.

**Appendicitis is harder and more dangerous in young children**, because the history is unobtainable, the omentum is less able to wall off infection, and perforation is therefore both commoner and earlier.

**Management**

- **A surgical emergency — admit and monitor closely**
- **Nil by mouth from the time of diagnosis**
- **Intravenous fluids and analgesia**, and consider **intravenous antibiotics (cefoxitin)**
- **Appendicectomy without delay**, open or laparoscopic. **Laparoscopic surgery carries fewer risks and gives faster recovery** than open surgery
- **Follow-up in clinic afterwards**

## Mesenteric adenitis

Inflammation of the mesenteric lymph nodes, and the commonest mimic of appendicitis in a child. It **often follows a viral infection**, particularly an upper respiratory tract infection.

The features that point away from appendicitis are a **higher fever with a less unwell child**, a **preceding or concurrent sore throat or coryza**, **generalised or shifting tenderness** rather than tenderness fixed at McBurney's point, and often **cervical lymphadenopathy**.

It is a **self-limiting condition**, so treatment is supportive: **pain management and adequate hydration**. Warn that **the pain can take 2 to 4 weeks to resolve**. The practical difficulty is that it cannot always be distinguished from early appendicitis, so a period of active observation with repeated examination is often the safest course.

## Recurrent (functional) abdominal pain

Common in school-age children, and a diagnosis made positively rather than purely by exclusion.

- **Say explicitly that the pain is real, not faked.** This is the single most important thing the family needs to hear
- **"Functional" means there is no physical disease causing the pain** — not that there is no pain
- A **physical examination and, where relevant, investigations for alternative diagnoses** must be performed to rule out organic causes
- **Reassurance and continuation of normal physical activities**, including school attendance, which is itself therapeutic
- **Psychological interventions may help** — cognitive behavioural therapy, family therapy, and coping skills such as relaxation and distraction

Red flags that argue against a functional diagnosis and warrant investigation include pain that wakes the child at night, weight loss or faltering growth, blood in the stool, persistent vomiting, dysphagia, and a family history of inflammatory bowel disease or coeliac disease.

> High-yield: anorexia with migratory right iliac fossa pain is appendicitis; a well-ish child with a high fever, a recent viral illness and shifting tenderness is mesenteric adenitis. When in doubt, observe and re-examine rather than discharge.`,
        },
        {
          id: "paediatric_bowel_obstruction",
          name: "Bowel obstruction in children",
          content: `## The rule that governs this topic

**Bile-stained (green) vomiting in a child is intestinal obstruction until proven otherwise**, and in a neonate it is **malrotation with volvulus** until proven otherwise. It demands urgent surgical assessment and imaging, never reassurance.

## Intussusception

One segment of bowel telescopes into the segment distal to it, most often **ileocolic**. It peaks between **6 months and 2 years**, and the lead point is usually **hypertrophied Peyer's patches following a viral illness**; in older or recurrent cases look for a **pathological lead point** such as a **Meckel's diverticulum**, a polyp or Henoch-Schonlein purpura.

The child has **paroxysms of severe colicky pain during which they draw up their legs and go pale**, becoming lethargic between episodes. There may be a **sausage-shaped mass** in the right upper quadrant, and — as a **late** sign — **"redcurrant jelly" stool** of blood and mucus. Ultrasound shows the **target or doughnut sign**.

**Management**

- **ABCDE approach**, with **intravenous fluids and nasogastric aspiration** as needed
- **Unless there are signs of peritonitis, reduction by rectal air insufflation under fluoroscopic guidance** is attempted by a radiologist. The **success rate is about 75%**, and the remaining 25% need an operation
- **Contraindications to enema reduction: peritonitis, perforation and hypovolaemic shock**
- Give **broad-spectrum antibiotics** — clindamycin with gentamicin, or piperacillin-tazobactam, or cefoxitin with vancomycin
- **Second-line is surgical reduction** with broad-spectrum antibiotics
- **Immediate laparotomy** is indicated for **peritonitis or perforation**, and considered where there is a **prolonged history over 24 hours**, a high likelihood of a pathological lead point, or a failed enema
- **Recurrence occurs in about 5%**, usually within a couple of days, and recurrent intussusception should prompt investigation for a pathological lead point

## Malrotation and volvulus

During fetal development the midgut fails to rotate normally, leaving a narrow mesenteric base and abnormal peritoneal (**Ladd's**) bands. The bowel can then twist around the superior mesenteric artery — a **midgut volvulus** — infarcting the entire small bowel within hours.

Most present in the **first month of life** with **bilious vomiting**. The diagnostic test is an **upper gastrointestinal contrast study** showing an abnormally placed duodenojejunal flexure, with a **corkscrew** appearance if volvulus has occurred.

**Management**

- **Signs of vascular compromise require emergency laparotomy — this is a surgical emergency**
- If **asymptomatic**, the operation can be elective; with **intermittent symptoms** and no ischaemia it should be **urgent**
- The operation is a **Ladd procedure**: detorting the bowel and dividing the **Ladd bands**. It is done **laparoscopically if elective or non-urgent**, and by **open laparotomy if emergency or urgent**
- The bowel is left in the **non-rotated position**, with the duodenojejunal flexure on the right and the caecum and appendix on the left. **The appendix is usually removed** to avoid diagnostic confusion should the child later present with an acute abdomen
- **Antibiotics (cefazolin)**

**Volvulus** itself is managed with the same principles: supportive care with a **nasogastric tube** if obstruction is present, **broad-spectrum antibiotics** and **intravenous fluids**, then — **whether or not vascular compromise is present** — an emergency **Ladd procedure via open laparotomy**.

## Meckel's diverticulum

A persistent remnant of the vitellointestinal duct, and the commonest congenital anomaly of the gastrointestinal tract. It is remembered by the **rule of 2s**: present in about **2%** of the population, **2 feet** from the ileocaecal valve, about **2 inches** long, usually symptomatic before age **2**, and containing **2** types of ectopic tissue — gastric and pancreatic. It is the ectopic gastric mucosa that ulcerates the adjacent ileum and causes painless rectal bleeding, and that makes it visible on a **technetium-99m pertechnetate (Meckel's) scan**.

| Situation | Management |
|---|---|
| **Asymptomatic, found incidentally on imaging** | **No treatment required** |
| **Asymptomatic, found during surgery for another reason** | **Prophylactic excision** |
| **Bleeding** | Excision of the diverticulum, with blood transfusion if haemodynamically unstable |
| **Obstruction** | Excision of the diverticulum and lysis of adhesions |
| **Perforation or peritonitis** | Excision, or segmental small bowel resection, with perioperative antibiotics |

Surgery is usually laparoscopic.

## Small bowel atresia

A congenital interruption of the small bowel lumen, presenting in the newborn with **bilious vomiting and abdominal distension**, and often suspected antenatally from polyhydramnios.

- **Initially: nil by mouth, a nasogastric tube on suction, intravenous hydration and broad-spectrum antibiotics**
- **Surgical repair** depends on the site of the atresia, and is mainly an **end-to-end anastomosis**

## Hirschsprung disease

Absence of ganglion cells in the distal bowel produces a functionally obstructed, contracted segment with proximal dilatation. It presents with **failure to pass meconium within 48 hours of birth**, abdominal distension and bilious vomiting, or later with severe chronic constipation. The pathology and the suction rectal biopsy that diagnoses it are covered in the *Congenital GI anomalies* topic.

- **Initial management is bowel irrigation**, which softens the faeces and flushes them from the bowel
- **Surgery** usually involves an **initial colostomy**, followed by anastomosing normally innervated bowel to the anus — the **anorectal pull-through** procedure
- **Total colonic aganglionosis** requires an initial **ileostomy** with later corrective surgery

The complication to fear is **Hirschsprung-associated enterocolitis**, presenting with fever, explosive foul-smelling diarrhoea and sepsis, which is life-threatening and needs urgent decompression and antibiotics.

> High-yield: green vomit in a neonate is malrotation with volvulus until an upper GI contrast study says otherwise. Intussusception at 6 months to 2 years is reduced by air enema unless there is peritonitis, perforation or shock. Meckel's follows the rule of 2s and is found on a technetium scan.`,
        },
        {
          id: "paediatric_hernias",
          name: "Hernias in children",
          content: `## Inguinal hernia

In children an inguinal hernia is almost always **indirect**, arising from a **patent processus vaginalis** rather than from acquired muscle weakness. It is commoner in **boys** and in **preterm** infants, and the younger the child, the higher the risk of **incarceration**.

- **Treatment is surgical repair in every case** — unlike in adults, watchful waiting has no place, because the incarceration risk is substantial
- **If complications are suspected — strangulation or bowel obstruction — arrange emergency hospital admission**
- **Otherwise arrange urgent referral to a paediatric surgeon, preferably within 2 weeks**

The repair is a **herniotomy** (simple ligation of the patent sac) rather than the mesh repair used in adults, because there is no fascial defect to reinforce.

## Umbilical hernia

Failure of the umbilical ring to close. It is very common, particularly in preterm and Afro-Caribbean infants, and the great majority **close spontaneously**, so the approach is the opposite of the inguinal hernia.

| Situation | Management |
|---|---|
| **Small and asymptomatic** | **Observation until 4 to 5 years of age.** If it is still present and small, **elective repair at 4 to 5 years** |
| **Large or symptomatic** | **Elective repair at 2 to 3 years of age** — that is, a hernia **larger than 1.5 cm**, or with intermittent symptoms of incarceration or recurring pain |
| **Incarceration during the observation period** | **Manual reduction with pressure**, then **surgical repair at the earliest opportunity**. If it cannot be reduced, an **emergency operation** is required |

> High-yield: an **inguinal** hernia in a child always gets repaired, urgently, because it strangulates; an **umbilical** hernia is usually watched until 4 to 5 years, because it closes on its own. That is the exact reverse of the adult approach to groin hernias.`,
        },
        {
          id: "paediatric_constipation",
          name: "Constipation & anal fissure in children",
          content: `## Idiopathic constipation

Constipation is extremely common in children and usually idiopathic, arising from a self-perpetuating cycle in which a hard painful stool leads to withholding, which allows the stool to harden further.

**Exclude red flag symptoms before treating in primary care.** Treat a child in primary care **only if a working diagnosis of idiopathic constipation has been made and red flags have been excluded**. The features that suggest an underlying cause and warrant urgent specialist referral are:

- **Failure to pass meconium within 48 hours of birth** — Hirschsprung disease
- Constipation from the **first few weeks of life**
- **Ribbon stools**, or abdominal distension with vomiting
- **Faltering growth**
- Abnormal **lower limb neurology**, or a **sacral dimple, tuft of hair or naevus** over the spine — spinal dysraphism
- **Perianal bruising, fissures or fistulae** raising the possibility of abuse or Crohn's disease

## Management

**Laxatives may have to be taken for several months** — this expectation must be set at the outset, or treatment fails.

**First, check for faecal impaction.** If present, use a **disimpaction regimen**:

- An **osmotic laxative — macrogol (Movicol: polyethylene glycol with electrolytes) — at an escalating dose over 2 weeks**
- Together with **dietary and lifestyle modification**
- If unresponsive, **add a stimulant laxative such as senna**, either alone or, if stools are hard, combined with **lactulose** or another softener such as **docusate**

**Then start maintenance treatment**, once impaction is absent or has been treated:

- **Macrogol** with dietary and lifestyle modification
- **Continue the effective dose for at least several weeks after regular bowel movements are established**, aiming for a soft, regular, formed stool
- If macrogol is not tolerated, substitute a **stimulant laxative such as senna**, combining with lactulose or docusate if stools are hard. **Adding fruit squash can improve adherence**
- **Reduce the maintenance dose gradually over months. Laxatives must NOT be stopped abruptly**
- **Children who are toilet training should remain on laxatives until toilet training is well established**
- **Consider specialist referral if there is no response to maintenance treatment in primary care after 3 months**

**A practical safety point:** children should **brush their teeth after taking laxatives**, because the syrup preparations promote dental decay.

## Behavioural interventions

These matter as much as the drug:

- A **bowel habit diary** for monitoring
- **Scheduled toileting** after meals and before bedtime, exploiting the gastrocolic reflex
- **Reward systems and star charts — given for attempting to open the bowels, not for actually succeeding.** Rewarding the outcome punishes the child for something they cannot control
- **Address anxieties about going to the toilet**, staying calm and reassuring
- **Posture** — make sure both feet are flat on the floor or on a step

Give **diet and lifestyle advice** on adequate fluid and fibre — more water, fruit and vegetables — and **follow up to assess adherence and response**. **Secondary behavioural problems are common** and should be asked about directly.

## Types of laxative

| Class | Examples |
|---|---|
| **Bulk-forming** | Ispaghula husk (Fybogel), methylcellulose |
| **Osmotic** | **Macrogol (Movicol)**, lactulose |
| **Stimulant** | Senna, bisacodyl, sodium picosulfate |
| **Stool softener** | Docusate sodium, arachis oil |

## Anal fissure

Usually a consequence of constipation, and the pain it causes drives further withholding — so treating the fissure means treating the constipation.

- **Ensure stools are soft and easy to pass**: increase **dietary fibre** (whole grains, fruit and vegetables) and **fluid intake**, and consider laxatives — **lactulose, macrogol or senna**
- **Manage the pain** with simple analgesia (paracetamol or ibuprofen), and **sitting in a shallow warm bath**, particularly after a bowel movement
- Advise on the importance of **anal hygiene**
- Advise parents to **seek help if it has not healed after 2 weeks**, or the child remains in a great deal of pain
- **Keep in mind the possibility of sexual abuse**, particularly with multiple, lateral or atypical fissures

> High-yield: treat impaction before maintenance, warn that laxatives are needed for months and must be tapered rather than stopped, and reward the **attempt**, not the result. Failure to pass meconium in the first 48 hours points to Hirschsprung disease.`,
        },
        {
          id: "gastroenteritis_and_fluid_management",
          name: "Gastroenteritis & fluid management in children",
          content: `## Gastroenteritis

Usually viral — rotavirus and norovirus predominate — and self-limiting. **Diarrhoea usually lasts 5 to 7 days and stops within 2 weeks; vomiting usually lasts 1 to 2 days and stops within 3 days.**

**Rehydration advice**

- **No dehydration**: continue usual feeds and encourage regular fluids
- **Mild dehydration** manageable at home: give **oral rehydration solution** in addition to usual feeds and fluids. **Discourage fruit juices and carbonated drinks**, which worsen the osmotic diarrhoea
- A trial over a few hours in the emergency department with close input and output monitoring can guide the admission decision

**Admit if there is:**

- Systemic illness
- **Severe dehydration or shock**
- **Intractable or bilious vomiting**
- **Painful, bloody diarrhoea**
- **Confirmed Shiga toxin-producing *E. coli*** infection
- A suspected serious complication such as **haemolytic uraemic syndrome** or sepsis

Consider admission where there is an inadequate response to oral rehydration solution, risk factors for progression, or parents unable to monitor or manage the child safely at home.

**Antibiotics are NOT routinely required — even when the cause is bacterial.** They are indicated only for suspected or confirmed **sepsis**, extra-intestinal spread, ***Salmonella* in an infant under 6 months** or in a malnourished or immunocompromised child, and specific infections such as *Clostridioides difficile* pseudomembranous colitis, cholera, shigellosis and giardiasis.

**Nutrition:** breastfeeding continues during rehydration, and **nutritional intake needs to be increased after the illness** to allow catch-up. **Do not routinely prescribe antidiarrhoeals, antiemetics, zinc or probiotics.**

**Prevention and exclusion:** handwashing, flushing the toilet, and washing soiled clothing and bed linen separately at a high temperature. **Children should not attend school until at least 48 hours after the last episode of vomiting or diarrhoea.**

## Assessing and replacing fluid

**The most accurate measure of dehydration is the degree of weight loss during the illness**: clinical dehydration is **5% or more**, and shock is **more than 10%**.

| Degree | Treatment |
|---|---|
| **No dehydration** | Oral rehydration solution **60 to 120 mL** (under 10 kg) or **120 to 240 mL** (over 10 kg) per episode of vomiting or diarrhoea, with an age-appropriate diet continued |
| **Mild, under 5%** | Rehydration with **ORS at 50 mL/kg over 4 hours**, plus the per-episode replacement above |
| **Moderate, 5 to 10%** | Rehydration with **ORS at 100 mL/kg over 4 hours**, plus the per-episode replacement above |
| **Severe, over 10%** | **Medical emergency.** Immediate **intravenous resuscitation** and admission: **saline or Ringer's lactate 20 mL/kg over 1 hour**, repeated until haemodynamically stable, then ORS once well enough |

**Intravenous fluids are indicated only for shock, for deterioration, or for persistent vomiting** — otherwise oral rehydration is the mainstay.

You will also see the deficit for clinical dehydration quoted as a single figure of **75 mL/kg of oral rehydration solution over 4 hours**, given in addition to maintenance fluids. Either approach is acceptable; what matters is that the deficit is replaced over hours orally, and that ongoing losses are replaced on top.

## The three fluid calculations

**1. Fluid resuscitation**

- **0.9% sodium chloride 20 mL/kg over less than 10 minutes**, considering a smaller dose where there is pre-existing disease such as kidney disease
- **Term neonates: 10 to 20 mL/kg**
- **Repeat the bolus if still shocked**; if larger volumes are needed, transfer to high-dependency or paediatric intensive care
- **Resuscitation is different in diabetic ketoacidosis**, because of the risk of cerebral oedema

**2. Correction of dehydration**

- **Percentage dehydration x weight in kg x 10**, given **over 48 hours**

**3. Routine maintenance** (the "100/50/20" rule, over 24 hours)

- **100 mL/kg** for the first 10 kg
- **50 mL/kg** for each kg from 10 to 20 kg
- **20 mL/kg** for each kg above 20 kg
- **Males rarely need more than 2500 mL and females more than 2000 mL per day**
- **Measure electrolytes and glucose when starting intravenous fluids and at least every 24 hours thereafter**

**Worked example — a 20 kg child with 5% dehydration:** maintenance is 1500 mL over 24 hours; correction is 5 x 20 x 10 = 1000 mL over 48 hours; together that is **2000 mL per 24 hours, or about 83 mL/hour**.

## Neonatal maintenance requirements

| Age | Volume |
|---|---|
| **Day 1** | 50 to 60 mL/kg/day |
| **Day 2** | 70 to 80 mL/kg/day |
| **Day 3** | 80 to 100 mL/kg/day |
| **Day 4** | 100 to 120 mL/kg/day |
| **Days 5 to 28** | 120 to 150 mL/kg/day |

For term neonates use **isotonic crystalloid with 5 to 10% dextrose**.

## Hypernatraemic dehydration

Suspect it when there are **jittery movements, increased muscle tone, hyperreflexia, convulsions, drowsiness or coma** — the neurological picture is what gives it away, because the intravascular volume is relatively preserved and the child looks less unwell than the deficit suggests.

- **Use oral rehydration solution to rehydrate** wherever possible
- If intravenous fluids are needed, **the reduction in plasma sodium must be slow**: a rapid fall in sodium and osmolality shifts water into cerebral cells and can cause **seizures and cerebral oedema**
- **Replace the fluid deficit over at least 48 hours** and **measure the plasma sodium regularly**

> High-yield: weigh the child — weight loss is the most accurate measure of dehydration. Resuscitate with 20 mL/kg, calculate the deficit as **% x weight x 10 over 48 hours**, and use 100/50/20 for maintenance. In hypernatraemic dehydration, correct slowly.`,
        },
        {
          id: "faltering_growth",
          name: "Faltering growth",
          content: `## Faltering growth

Previously called failure to thrive, faltering growth describes a slower rate of weight gain than expected for a child's age and sex, usually recognised as a **sustained fall across centile lines** on the growth chart rather than from a single measurement. Length or height and head circumference should be plotted alongside weight, because the pattern in which they fall tells you a great deal about the cause.

The causes divide by mechanism into **inadequate intake** (feeding difficulty, poor technique, neglect, cleft palate, poverty), **inadequate retention** (vomiting, severe reflux), **malabsorption** (coeliac disease, cow's milk protein allergy, cystic fibrosis), and **increased requirement** (congenital heart disease, chronic infection, chronic kidney disease, hyperthyroidism).

## Monitoring

Where there are concerns about faltering growth, **monitor weight at appropriate intervals**:

| Age | Frequency |
|---|---|
| **Under 1 month** | **Daily** |
| **1 to 6 months** | **Weekly** |
| **6 to 12 months** | **Fortnightly** |
| **From 1 year** | **Monthly** |

Weighing more often than this is counterproductive: day-to-day variation swamps the trend and simply alarms the family.

## Management by severity

**Mild**

- **Feeding or eating behaviour recommendations**
- **Second line: referral, and review of the eating behaviour recommendations**

**Moderate**

- **Feeding or eating behaviour recommendations, plus referral to a specialist**
- **Second line: further referrals** — to child and adolescent mental health services, or to children's social care — **with or without hospitalisation**
- **Consider dietetic input**, such as introducing calorie-dense foods or oral nutritional supplements

Throughout, take a careful feeding history, observe an actual feed where possible, and look for the treatable organic causes above before concluding the problem is purely behavioural or social. **Safeguarding must be considered** where growth fails without an organic explanation, but neglect is a diagnosis of exclusion and not an assumption.

> High-yield: plot weight, length and head circumference together, weigh no more often than the intervals above, and observe a feed. Faltering growth is a symptom, not a diagnosis — look for reflux, coeliac disease, cow's milk protein allergy and cystic fibrosis before attributing it to feeding behaviour alone.`,
        },
        {
          id: "paediatric_ibd",
          name: "Inflammatory bowel disease in children",
          content: `## What differs in children

The pathology and the adult treatment ladders are covered in the *Inflammatory bowel disease* topic. Two things change in children: **growth failure and delayed puberty** are both presenting features and treatment targets, and the drive to avoid long-term corticosteroids is correspondingly stronger.

## Crohn's disease

The gold-standard guidance is the **ECCO-ESPGHAN** paediatric guideline. At diagnosis the child is **risk-stratified using the Paris classification** into low, medium or high risk, using predictors of poor outcome identified at endoscopy:

- **Low risk** — purely inflammatory disease, with no stricturing or penetrating disease
- **Medium risk** — low-risk children with no clinical or biochemical remission **12 weeks** after starting initial treatment, and children with **growth delay**
- **High risk** — **stricturing or penetrating disease**, or any additional risk factor such as growth delay, extensive disease, deep ulceration or perianal disease

Treatment aims either to **induce** remission or to **maintain** it.

**High-risk children**

- **First line is anti-TNF therapy such as infliximab**, considering combination with an immunomodulator such as **methotrexate**
- If induction is **effective** — shown by a fall in **faecal calprotectin** or an improved **Paediatric Crohn's Disease Activity Index** — continue **maintenance anti-TNF monotherapy**
- If induction is **ineffective**, optimise the anti-TNF: add an immunomodulator, consider increasing the dose or frequency, and **as a last resort switch anti-TNF agent**, for example to adalimumab

**Low-risk children**

- **First line is exclusive enteral nutrition (EEN) for 12 weeks.** This is the striking difference from adult practice: a liquid-only feed is as effective as corticosteroids at inducing remission, and unlike steroids it **improves growth and nutrition**
- **If EEN is not an option, corticosteroids may be considered**
- If effective, switch to **maintenance methotrexate or a thiopurine**, escalating to anti-TNF if remission is not adequately maintained
- If not effective, **step up early to anti-TNF with immunomodulation**

**Monitoring disease activity:** biochemically with **faecal calprotectin** (with CRP) or anti-TNF **trough levels**; clinically with the **Paediatric Crohn's Disease Activity Index**; and by **small-bowel MRI or endoscopy**.

**The shift to "top-down" therapy** — starting anti-TNF agents such as infliximab first line rather than the older step-up model — was driven by trials including **TISKIDS and REACH**, which showed substantially better outcomes in children.

## Ulcerative colitis

Severity is assessed with the **Paediatric Ulcerative Colitis Activity Index (PUCAI)**: **remission 0 to 9, mild 10 to 34, moderate 35 to 64, severe above 65**.

| Severity | Management |
|---|---|
| **Proctitis** | **Topical aminosalicylate for 4 weeks**; if no improvement, add an oral aminosalicylate |
| **Mild** | **5-ASA**, topically (suppository or enema) first and orally if remission is not achieved within 4 weeks. For **extensive disease, topical plus high-dose oral is first line**. Continue as maintenance if there is no relapse; treat relapse with **oral prednisolone, tapered** |
| **Moderate** | **Oral prednisolone for 2 to 4 weeks, then taper.** A good response is followed by oral 5-ASA as maintenance. A poor response warrants intravenous steroid, tapered back to oral |
| **Steroid-dependent** | **Thiopurine or infliximab.** If inadequate: **colectomy, adalimumab or vedolizumab** — colectomy being the final option |
| **Severe** | **A medical emergency.** High-dose **intravenous methylprednisolone**, **stop oral 5-ASA**, antibiotics if there is bacteraemia, and **parenteral nutrition** until improvement or surgery. Surgical treatment is **colectomy with an ileostomy or an ileal pouch** |

Frequent relapse on steroids defines **steroid-dependent disease**.

## Wider care in both conditions

- **Assess the impact of symptoms on home, school and leisure activities**, and check for associated **anxiety and depression**
- **Assess osteoporosis risk** and consider **calcium and vitamin D supplementation**
- **Monitor** full blood count for anaemia, plus folate, B12, calcium and vitamin D, supplementing as appropriate
- Signpost support: **Crohn's and Colitis UK**, and CICRA for children

> High-yield: **exclusive enteral nutrition for 12 weeks is first-line induction in low-risk paediatric Crohn's**, not steroids, because it treats the growth failure too. High-risk children go straight to anti-TNF ("top-down"). Ulcerative colitis severity is scored with PUCAI.`,
        },
        {
          id: "paediatric_coeliac_ibs_peptic",
          name: "Coeliac disease, IBS & peptic ulcer in children",
          content: `## Coeliac disease

The immunology, the antibodies and the histology are covered in the *Coeliac disease* topic. **The single most important practical rule is that the child must remain on a gluten-containing diet until testing is complete** — starting a gluten-free diet before serology and biopsy makes the diagnosis impossible to confirm and commits the family to a lifelong diet on uncertain grounds.

**The only effective treatment is long-term adherence to a gluten-free diet.**

- All products containing gluten — **wheat, rye and barley** — are removed
- A selection of **gluten-free products can be prescribed on the NHS**
- **Consider dietitian referral** if there are problems adhering to the diet
- Assess for nutritional deficiency and whether **iron, folic acid, calcium or vitamin D** supplementation is needed. **Do not routinely recommend nutritional supplements** to prevent deficiency

**Arrange annual review**, checking:

- **Height, weight and body mass index**, plotted on centile charts
- **Symptoms**, and **adherence to the diet** — monitored with an **IgA-tTG titre every 3 months until it normalises, then yearly**
- Consider **coeliac serology, full blood count, thyroid and liver function, vitamin D, B12, folate, calcium and urea and electrolytes**
- If there are concerns, evaluate **bone mineral density with a DEXA scan**

Counselling points: it is **common, affecting about 1 in 100**; the treatment is straightforward but must be **strict**, because the complications of non-adherence include malnutrition, osteoporosis and small bowel lymphoma; and **Coeliac UK** is the support organisation.

## Irritable bowel syndrome

A functional disorder, diagnosed positively once red flags are excluded.

**Lifestyle and dietary modification comes first:**

- Ensure **sufficient fluid intake** and **eat regularly**
- **Limit fresh fruit**, and reduce **resistant starch** and **insoluble fibre such as bran**
- If fibre needs increasing, use **soluble fibre** — oats, ispaghula husk or sterculia
- **Reduce stress**; identify precipitants such as **caffeine, lactose or fructose**
- Consider **probiotics**, the **FODMAP diet**, and referral to a **dietitian**

**Medication is only for severe symptoms that have not responded to non-drug approaches**: laxatives such as macrogol or lactulose for constipation-related pain, **loperamide** for diarrhoea, and **antispasmodics** for pain.

| | With pain or bloating | Without pain or bloating |
|---|---|---|
| **Diarrhoea-predominant** | Lifestyle and diet, then **antidiarrhoeals plus antispasmodics**, or a **tricyclic antidepressant**. Consider **CBT or hypnotherapy** | Lifestyle and diet, plus antidiarrhoeals |
| **Constipation-predominant** | Lifestyle and diet, then **laxatives plus antispasmodics**, or an **SSRI with linaclotide**. Consider CBT or hypnotherapy | Lifestyle and diet, plus laxatives |
| **Alternating** | Lifestyle and diet, then **antispasmodics with laxatives and loperamide**, or a **tricyclic or SSRI**. Consider CBT or hypnotherapy | Lifestyle and diet, plus laxatives and loperamide |

## Peptic ulcer disease

Much less common in children than adults, and more often secondary to another illness or to drugs.

- **Suspected peptic ulceration in a child is treated with a proton pump inhibitor**, for example lansoprazole
- **If it fails to respond, perform an upper gastrointestinal endoscopy.** If that is normal, the diagnosis is **functional dyspepsia** — which is probably a variant of irritable bowel syndrome affecting the upper gastrointestinal tract

**Acute management by scenario:**

| Scenario | Management |
|---|---|
| **Actively bleeding ulcer** | **Endoscopy**, with blood transfusion as needed, plus a **PPI**; surgery or embolisation if bleeding continues |
| **Not bleeding, *H. pylori* negative** | Treat the underlying cause plus a **PPI**; second line an **H2 antagonist** |
| **Not bleeding, *H. pylori* positive** | ***H. pylori* eradication triple therapy for 7 days: a PPI twice daily with clarithromycin and amoxicillin** |

> High-yield: **never start a gluten-free diet before coeliac testing is complete.** Monitor adherence with IgA-tTG every 3 months until it normalises, then yearly. In children, a suspected ulcer gets a PPI first and endoscopy only if it fails.`,
        },
        {
          id: "biliary_atresia_and_acute_liver_failure",
          name: "Biliary atresia & acute liver failure in children",
          content: `## Biliary atresia

Progressive fibro-obliterative destruction of the extrahepatic bile ducts, and the commonest reason a baby needs a liver transplant. It presents with **persistent jaundice beyond 14 days of life** that is **conjugated**, with **pale, chalky stools and dark urine** in a baby who is otherwise initially well and feeding normally — which is exactly why it gets missed.

**Any baby jaundiced beyond 14 days needs a split (conjugated) bilirubin.** A raised conjugated fraction is never physiological.

**Timing is everything.**

- **Surgical intervention is recommended immediately, ideally within the first 60 days of life** — outcomes fall sharply with every week of delay
- The operation is a **Kasai hepatoportoenterostomy**: the fibrous ducts are ligated above their junction with the duodenum, dissection continues proximally to the **porta hepatis**, and a **loop of jejunum is joined directly to the porta hepatis**, allowing bile to drain
- Give **antibiotic cover for the first year of life**
- **Liver transplantation** is considered if the Kasai procedure is unsuccessful, or if the infant already has end-stage liver disease at presentation

**Managing the complications** — which are growth failure, portal hypertension, cholangitis and ascites:

- **Choleretics**: **ursodeoxycholic acid** promotes bile flow
- **Nutritional supplementation**: during the first year, either breast milk or **medium-chain triglyceride-enriched formula**, with monthly monitoring of nutritional status. MCTs are used because they are absorbed without bile salts
- **Fat-soluble vitamins (A, D, E and K) are given to all children** with the condition, with levels monitored and doses adjusted
- **Prevent cholangitis** with **prophylactic antibiotics, usually co-trimoxazole**, during the first year of life

## Acute liver failure

Acute liver failure in a child is defined by coagulopathy not corrected by vitamin K, in the presence of biochemical evidence of liver injury — and encephalopathy may be **absent or very hard to detect** in an infant, so its absence does not exclude the diagnosis.

**Refer early to a national paediatric liver centre.** This is the single most important step, because transplantation is time-critical and cannot be arranged locally.

**Steps to stabilise the child**

- **Maintain blood glucose above 4 mmol/L with intravenous dextrose** — hypoglycaemia is common, because the failing liver cannot mobilise glucose
- **Prevent sepsis** with broad-spectrum **antibiotics and antifungals**
- **Prevent haemorrhage** with **intravenous vitamin K** and an **H2 antagonist or proton pump inhibitor**
- **Prevent cerebral oedema** with **fluid restriction and mannitol diuresis**
- **Monitor neurological status** to assess for encephalopathy, using **lactulose** to treat and prevent it by reducing ammonia
- Management otherwise depends on the **suspected cause**

**Features of a POOR prognosis:**

- A **shrinking liver**
- A **rising bilirubin**
- **Falling transaminases** — counter-intuitive, and the point most often missed: the enzymes fall not because the liver is recovering but because there are too few surviving hepatocytes left to release them
- **Worsening coagulopathy**
- **Coma**

**Assess for liver transplantation.** The **prothrombin time is the best marker of liver failure** — and for that reason, avoid giving vitamin K or fresh frozen plasma indiscriminately, since correcting the clotting removes the marker being used to judge severity and transplant need.

## Hepatic encephalopathy

- **Supportive care** with **frequent monitoring of neurological and mental status**
- **Identify and correct precipitating factors** — gastrointestinal bleeding, infection, electrolyte disturbance and drugs
- **Reduce the nitrogenous load**: **dietary protein restriction**, being careful not to worsen protein-calorie malnutrition, and reducing the load from the gut with **non-absorbable disaccharides such as lactulose** or **antibiotics such as rifaximin**

> High-yield: **jaundice beyond 14 days needs a split bilirubin** — a conjugated rise is biliary atresia until proven otherwise, and the Kasai must be done **within 60 days**. In acute liver failure, **falling transaminases with a rising bilirubin and prothrombin time is a bad sign, not a good one.**`,
        },
        {
          id: "paediatric_hepatitis_chronic_liver",
          name: "Viral hepatitis & chronic liver disease in children",
          content: `## Hepatitis A

- **Supportive treatment** for pain, nausea or itch as required
- **Avoid paracetamol**, given the hepatic injury
- **Assess for co-infection with other hepatitis viruses**, which can complicate the course
- **Close contacts should be vaccinated within 2 weeks of the onset of illness**
- **Unvaccinated patients with recent exposure (under 2 weeks)** should receive **human normal immunoglobulin** (if under 12 months, or with chronic liver disease) or the **hepatitis A vaccine** (if over 12 months)
- **Notify the Health Protection Unit**

## Hepatitis B

**Acute**

- **Supportive** treatment for pain, nausea or itch
- **Antiviral therapy** — lamivudine, entecavir or tenofovir disoproxil — with or without liver transplantation

**Chronic**

- **Supportive**, as it is usually asymptomatic
- **Interferon or antiviral monotherapy** is recommended in selected patients: entecavir, tenofovir disoproxil, interferon alfa, peginterferon alfa or lamivudine

**Prevention** — this is the examinable part:

- **ALL pregnant women should have antenatal screening for HBsAg**
- **Babies of all HBsAg-positive mothers should receive hepatitis B vaccination**
- **Hepatitis B immunoglobulin is also given** where the mother was HBeAg-positive (see *Neonatal sepsis, group B streptococcus and hepatitis B* for the full criteria and schedule)
- **Other family members should also be vaccinated**

**Check for co-infection** with hepatitis D, hepatitis C and HIV, and **notify the Health Protection Unit**.

## Hepatitis C

- **Treatment decisions are based on the genotype** of the virus
- **Direct-acting antiviral monotherapies** such as **glecaprevir with pibrentasvir**, or **sofosbuvir with velpatasvir**, are used for the majority of genotypes
- On treatment failure, a combination of therapies may be trialled, or **oral ribavirin** added
- **Treatment is NOT undertaken until over 3 years of age**, because vertically acquired infection may **resolve spontaneously**
- **Notify the Health Protection Unit**

## Autoimmune hepatitis

- **Most children respond to prednisolone and azathioprine**
- **Primary sclerosing cholangitis** is managed with **ursodeoxycholic acid** and relief of pruritus, for example with **colestyramine**, a bile acid sequestrant. **The only definitive treatment is transplantation, though it may recur**
- **Liver transplantation** may be considered in severe cases

Note that in children the overlap between autoimmune hepatitis and sclerosing cholangitis — autoimmune sclerosing cholangitis — is considerably commoner than in adults, so cholangiography is often part of the workup.

## Metabolic dysfunction-associated steatotic liver disease (MASLD)

Formerly called **non-alcoholic fatty liver disease**; the nomenclature was changed by international consensus in 2023, with non-alcoholic steatohepatitis (NASH) becoming **MASH**. It is increasingly common in children in parallel with obesity.

- **Weight loss** through **diet and exercise**, with medication (**orlistat**) and possibly **bariatric surgery** (Roux-en-Y gastric bypass) in selected cases
- **Treat insulin resistance and diabetes**
- **Statins** for the associated dyslipidaemia
- **Vitamin E (alpha-tocopherol)**
- **Liver transplantation** in children with end-stage disease
- **Check for genetic causes** where findings are atypical

## Wilson's disease

An autosomal recessive defect of copper transport (the *ATP7B* gene) causing copper accumulation in the liver, brain and cornea. The genetics and the diagnostic biochemistry — a low caeruloplasmin, raised urinary copper and **Kayser-Fleischer rings** — are covered in the *Genetic liver disease* topic. Severity is assessed with the **Nazar score or the King's Wilson score**.

- **Zinc** — blocks intestinal copper reabsorption
- **Oral chelation therapy** — **penicillamine** or **trientine**, the latter increasing urinary copper excretion
- **Pyridoxine (vitamin B6)** is given alongside penicillamine to **prevent peripheral neuropathy**
- **Dietary restriction of copper** — reduce liver and shellfish intake
- **Neurological improvement may take up to 12 months**, which matters for setting expectations
- **Liver transplantation** in children with end-stage liver disease

## Cirrhosis and portal hypertension

- **Treat the underlying cause**
- **Prevent superimposed hepatic insults**: avoid hepatotoxic drugs such as NSAIDs and high-dose paracetamol, **immunise against hepatitis A and B** in susceptible patients, manage metabolic risk factors, maintain adequate nutrition, and encourage regular exercise
- **Monitor for complications**, for example abdominal ultrasound for ascites
- **Ascites**: sodium and fluid restriction, and diuretics. **Refractory ascites**: albumin infusion and paracentesis
- **Liver transplantation**

> High-yield: hepatitis C is **not treated until after 3 years of age**, because vertically acquired infection often clears by itself. In Wilson's disease, give **pyridoxine alongside penicillamine** to prevent neuropathy, and warn that neurological recovery takes up to a year.`,
        },
        {
          id: "paediatric_hip_conditions",
          name: "Paediatric hip conditions",
          content: `## Paediatric hip conditions

A limp or hip pain in a child has a differential best narrowed by **age**, and the priority is always to exclude **septic arthritis**.

## The limping child by age

| Age | Most likely causes |
|---|---|
| 0–4 years | Developmental dysplasia of the hip, septic arthritis, toddler's fracture |
| 4–10 years | Transient synovitis (commonest), Perthes disease, septic arthritis |
| 10–16 years | Slipped capital femoral epiphysis, septic arthritis |

Septic arthritis must be considered at any age.

## Developmental dysplasia of the hip (DDH)

- Abnormal development of the hip joint, from instability to frank dislocation; commoner in **girls, breech babies and with a family history**, and on the left.
- Screened at the newborn and 6-week checks with the **Barlow** (dislocates an unstable hip) and **Ortolani** (relocates a dislocated hip) manoeuvres; later signs are asymmetric skin creases and limited hip abduction.
- **Ultrasound** is used under 6 months (requested at 6 weeks for a breech presentation or delivery, or a family history); **X-ray** is better from 6 months.
- Most unstable hips resolve spontaneously; otherwise a **Pavlik harness** (holding the hip flexed and abducted) under about 4–5 months, with surgery (reduction and spica cast) if that fails or for late presentation.

## Transient synovitis (irritable hip)

- The **commonest cause of acute hip pain and limp** in young children (about 3–8 years), typically **after a viral upper respiratory infection**.
- The child is **systemically well**, with a limp and reduced hip movement and little or no fever.
- It is a diagnosis of exclusion — the key step is to **rule out septic arthritis**. Management is rest and analgesia (NSAIDs); it settles within a few days.

## Perthes disease

- **Idiopathic avascular necrosis of the femoral head**, in children about **4–8 years old** and **commoner in boys**.
- Presents with an insidious limp and hip or knee pain, with reduced abduction and internal rotation.
- Diagnosed on X-ray (early flattening and later fragmentation of the femoral head); management aims to **keep the femoral head contained** in the acetabulum — observation and physiotherapy in younger children, surgery if older or severe.

## Slipped capital femoral epiphysis (SUFE)

- The femoral head epiphysis slips through the growth plate, typically in an **overweight adolescent boy** (about 10–16 years), sometimes after minor trauma.
- Presents with hip, groin or **referred knee pain** and an externally rotated, shortened leg with limited internal rotation.
- X-ray shows the slip — **Trethowan's sign**: Klein's line drawn along the superior femoral neck fails to intersect the epiphysis.
- It is an orthopaedic emergency: keep the child **non-weight-bearing** and refer for **in-situ screw fixation**.

## Septic arthritis — never miss it

- Bacterial infection of the joint (usually Staphylococcus aureus) that can destroy it within hours.
- An **unwell, febrile child** who refuses to weight-bear, with a hot, painful joint held still.
- The **Kocher criteria** help distinguish it from transient synovitis: non-weight-bearing, fever over 38.5 degrees, ESR over 40, and white cell count over 12. Confirm with **urgent joint aspiration** and blood cultures.
- Treatment is **joint washout and prolonged antibiotics** — a surgical emergency.

> The two diagnoses not to miss are septic arthritis (an unwell, febrile child who will not weight-bear — aspirate the joint) and SUFE (an adolescent with knee pain — examine and X-ray the hip). Hip pathology classically refers pain to the knee, so always examine the hip in a child presenting with knee pain.`,
        },
        {
          id: "developmental_milestones",
          name: "Developmental milestones",
          content: `## Developmental milestones

Child development is assessed across **four domains**: gross motor, fine motor and vision, hearing/speech/language, and social/emotional/behavioural. Knowing the median ages and, more importantly, the **limit ages** (the age by which a skill should have appeared) lets you tell normal variation from genuine delay.

## Gross motor

| Age | Milestone |
|---|---|
| 3 months | Good head control; lifts head when prone |
| 6 months | Sits without support (limit age 9 months) |
| 9 months | Crawls; pulls to stand |
| 12 months | Stands independently; cruises |
| 15–18 months | Walks independently (limit age 18 months) |
| 2 years | Runs; walks up stairs |
| 3 years | Rides a tricycle; stairs one foot per step |

## Fine motor and vision

| Age | Milestone |
|---|---|
| 6 weeks | Fixes and follows a face |
| 4 months | Reaches for objects |
| 6 months | Palmar grasp; transfers hand to hand |
| 10 months | Immature pincer grip |
| 12 months | Mature pincer grip; points |
| 18 months | Tower of 3–4 bricks; scribbles |
| 2 years | Tower of 6 bricks; copies a vertical line |
| 3 years | Tower of 9 bricks; copies a circle |

## Hearing, speech and language

| Age | Milestone |
|---|---|
| Newborn | Startles to loud noise |
| 3–4 months | Vocalises, coos and laughs |
| 6–9 months | Babbles |
| 12 months | Says 2–3 words with meaning |
| 18 months | 6–10 words; points to body parts |
| 2 years | Joins two words together |
| 3 years | Speaks in short sentences |

## Social, emotional and behavioural

| Age | Milestone |
|---|---|
| 6 weeks | Smiles responsively (limit age 8 weeks) |
| 6–9 months | Stranger anxiety |
| 12 months | Waves bye-bye; drinks from a cup |
| 18 months | Uses a spoon |
| 2 years | Symbolic (pretend) play; dry by day |
| 3 years | Plays with other children; toilet trained |

## Red flags and limit ages

Refer for assessment if a limit age passes without the skill, or if development regresses:

- **Not smiling by 8 weeks.**
- **Not sitting unsupported by 9 months.**
- **Not walking by 18 months.**
- **Hand preference before 12 months** (may indicate a hemiplegia).
- **No words by 18 months**, or no two-word phrases by 2 years.
- **Loss of previously acquired skills (regression)** — always significant.

> Always correct for prematurity (up to 2 years), assess all four domains together, and take parental concern seriously. Global delay (all domains) points to a different cause from an isolated single-domain delay, and regression of skills is a red flag warranting urgent investigation.`,
        },
      ],
    },
  ],
};
