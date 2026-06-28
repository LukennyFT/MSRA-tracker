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

## Asthma management

Treatment is stepwise. Current guidance favours an inhaled corticosteroid combined with a long-acting beta agonist used both as maintenance and reliever therapy (the MART regimen). Always check inhaler technique and adherence before escalating.

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

Recognising it early matters, because removing the responsible antigen can prevent progression to irreversible fibrosis. Classic named examples include farmer's lung (mouldy hay, caused by the bacterium Saccharopolyspora rectivirgula), pigeon fancier's lung (avian proteins in droppings and feathers), humidifier's lung (thermophilic actinomycetes growing in water reservoirs) and malt-worker's lung (Aspergillus species).

## Pneumoconioses and sarcoidosis

The pneumoconioses are occupational diseases caused by inhaling mineral dusts and inorganic particles. The classic example is coal-worker's pneumoconiosis which, like silicosis, has a predilection for the **upper** lobes. Asbestos is the important exception: asbestosis (the fibrosis it causes) characteristically affects the **lower** lobes, and asbestos can also produce benign pleural plaques and malignant mesothelioma — this spectrum is covered in the Asbestos-related lung disease topic.

Sarcoidosis is a multisystem granulomatous disease of unknown cause, most common in younger adults, in which non-caseating granulomas form in affected organs. In the chest it classically produces bilateral hilar lymphadenopathy and can lead to an interstitial fibrosis with a restrictive pattern; the serum angiotensin-converting enzyme and calcium may be raised.

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
      ],
    },
    {
      id: "endocrinology", name: "Endocrinology & Metabolic", icon: "🦋",
      topics: [
        {
          id: "diabetes_overview",
          name: "Diabetes mellitus",
          content: `## Diabetes mellitus

Diabetes is a group of conditions causing persistent hyperglycaemia. The two common forms differ in mechanism.

| Feature | Type 1 | Type 2 |
|---|---|---|
| Mechanism | Autoimmune beta-cell destruction | Insulin resistance and relative deficiency |
| Typical onset | Younger, lean | Older, often overweight |
| Ketosis-prone | Yes | No (usually) |
| First-line treatment | Insulin | Lifestyle then metformin |

## Diagnosis

Glycated haemoglobin (HbA1c) of 48 mmol/mol or more is diagnostic, or a fasting glucose of 7.0 mmol/L or more. In someone with symptoms a single abnormal result is enough; without symptoms it should be repeated.

## Type 2 treatment escalation

Start with lifestyle change, then metformin. A sodium-glucose co-transporter 2 (SGLT2) inhibitor is added or chosen early when there is established cardiovascular disease, heart failure or chronic kidney disease. Targets are individualised, with particular care to avoid hypoglycaemia in frail or older people.

## Complications to screen for

Diabetes damages small and large vessels. Annual review covers the eyes (retinopathy), kidneys (urine albumin and estimated glomerular filtration rate), feet (neuropathy and circulation) and cardiovascular risk.`,
        },
        {
          id: "thyroid_overview",
          name: "Thyroid disease",
          content: `## Thyroid disease

The thyroid axis is read from the thyroid-stimulating hormone (TSH) and the free thyroxine (T4).

| Pattern | TSH | Free T4 | Interpretation |
|---|---|---|---|
| Hypothyroid | High | Low | Primary hypothyroidism |
| Hyperthyroid | Low | High | Primary hyperthyroidism |
| Subclinical hypothyroid | High | Normal | Monitor; treat by symptoms/level |

## Hypothyroidism

The picture is one of a slowed metabolism: fatigue, weight gain, cold intolerance, constipation and dry skin. The commonest cause is autoimmune (Hashimoto) thyroiditis. Treatment is levothyroxine, titrated against the TSH, starting at a low dose in older people or those with heart disease.

## Hyperthyroidism

Features reflect a fast metabolism: weight loss, heat intolerance, tremor and palpitations. Graves disease adds eye signs and a diffuse goitre. A beta-blocker controls symptoms quickly while definitive treatment (carbimazole, radioiodine or surgery) takes effect.`,
        },
        {
          id: "calcium_homeostasis",
          name: "Calcium, vitamin D & hypercalcaemia",
          content: `## Calcium, vitamin D and hypercalcaemia

Calcium balance is controlled by two hormones — parathyroid hormone and the active form of vitamin D — acting on the gut, kidneys and bone. Once their actions are clear, the biochemistry of the calcium disorders and the approach to hypercalcaemia both fall into place.

## Calcium in the blood

The normal plasma calcium is about 2.2 to 2.6 mmol/L, and it travels in three forms: roughly **45% is ionised** (free and biologically active), about **50% is bound to albumin**, and the remaining 5% is complexed with citrate and bicarbonate. Because so much is protein-bound, the laboratory reports a **corrected calcium** that adjusts the measured value for the albumin level — otherwise a low albumin would mimic hypocalcaemia.

## The two hormones that control calcium

| Hormone | Source and trigger | Main actions |
|---|---|---|
| Parathyroid hormone (PTH) | Parathyroid glands, released when calcium falls | Mobilises calcium from bone, increases renal calcium reabsorption, increases renal phosphate excretion, and activates vitamin D |
| Calcitriol — active vitamin D | Final activation in the kidney | Increases absorption of both calcium and phosphate from the gut, and supports bone remodelling |

The key contrast to memorise is that **PTH raises calcium but lowers phosphate** (it makes the kidney waste phosphate), whereas **active vitamin D raises both calcium and phosphate**.

## Activating vitamin D

Vitamin D needs two hydroxylation steps before it can work:

- It enters the body as **cholecalciferol (vitamin D3)**, made in the skin under ultraviolet light or taken in the diet, or as **ergocalciferol (vitamin D2)** from the diet.
- The **liver** adds the first hydroxyl group to make **25-hydroxyvitamin D (calcidiol)** — the stored form, and the one measured to assess a patient's vitamin D status.
- The **kidney** adds the second to make **1,25-dihydroxyvitamin D (calcitriol)**, the active hormone. This final step is stimulated by PTH (and by a low phosphate).

A lack of vitamin D therefore lowers calcium and phosphate, drives a compensatory rise in PTH, and impairs bone mineralisation — causing **osteomalacia** in adults and **rickets** in children.

## Reading the biochemistry

The pattern of calcium, phosphate, PTH and alkaline phosphatase (ALP) pins down the disorder — one of the highest-yield tables in endocrinology:

| Condition | Calcium | Phosphate | PTH | ALP |
|---|---|---|---|---|
| Primary hyperparathyroidism | High | Low | High or inappropriately normal | Normal or high |
| Secondary hyperparathyroidism | Low | High (in CKD) | High | High |
| Tertiary hyperparathyroidism | High | Variable | High | Normal or high |
| Hypoparathyroidism | Low | High | Low | Normal |
| Osteomalacia / rickets | Low | Low | High | High |
| Paget's disease of bone | Normal | Normal | Normal | High |
| Osteoporosis | Normal | Normal | Normal | Normal |

A few anchors: **primary hyperparathyroidism** (usually a single adenoma) gives a high calcium with a low phosphate and a PTH that is high or inappropriately normal; **secondary hyperparathyroidism** is the appropriate PTH rise to a low calcium, classically from chronic kidney disease (CKD) or vitamin D deficiency; **tertiary** is when a chronically stimulated gland becomes autonomous. Note that **osteoporosis has completely normal biochemistry** — a useful negative.

## Hypercalcaemia

Hypercalcaemia is a corrected calcium of 2.6 mmol/L or more. Two causes account for the great majority:

- **Primary hyperparathyroidism** — the commonest cause in the community, often an incidental finding in a well outpatient.
- **Malignancy** — the commonest cause in hospital inpatients, through bony metastases, myeloma, or secretion of **parathyroid hormone-related peptide (PTHrP)**, classically by squamous cell carcinomas.

Other causes include granulomatous disease such as **sarcoidosis** (where macrophages produce extra active vitamin D), thyrotoxicosis, the milk-alkali syndrome, vitamin D toxicity, thiazide diuretics and prolonged immobilisation.

The symptoms are remembered as **bones, stones, abdominal groans and psychic moans**: bone pain, renal stones, abdominal pain and constipation, and psychiatric features such as depression and confusion — together with polyuria, thirst and muscle weakness.

The pivotal investigation is the **PTH level**:

- A **high or inappropriately normal PTH** means the parathyroids are the driver — primary (or tertiary) hyperparathyroidism.
- A **suppressed PTH** points to a non-parathyroid cause, above all malignancy; the phosphate and ALP then help, as bony metastases raise ALP whereas myeloma typically leaves it normal.

Management of significant hypercalcaemia is **aggressive rehydration with intravenous 0.9% saline** first, followed by an **intravenous bisphosphonate** (such as zoledronate) for malignant or severe disease. Treat the underlying cause — parathyroidectomy for primary hyperparathyroidism, corticosteroids for sarcoidosis or vitamin D toxicity — and stop contributing drugs such as thiazides.

> High-yield: PTH is the single most useful test in hypercalcaemia. A raised or inappropriately normal PTH means primary hyperparathyroidism, while a suppressed PTH means look for malignancy — and together these two account for around 90% of all hypercalcaemia. Remember PTH raises calcium but lowers phosphate, whereas active vitamin D raises both.`,
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
        { id: "_pending_ent", name: "(Coming soon)", content: `## This section is scaffolding\n\nNotebook content for ENT has not been written yet.` },
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
      ],
    },
    {
      id: "paediatrics", name: "Paediatrics & Child Health", icon: "🧒",
      topics: [
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
      ],
    },
  ],
};
