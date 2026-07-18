(function(){
  // ---------- Wizard state ----------
  const totalSteps = 5;
  let current = 1;
  const stepNames = {1:"Basics",2:"Regularity",3:"Flow & pain",4:"Symptoms",5:"Lifestyle"};
  const panels = document.querySelectorAll('.step-panel');
  const progressFill = document.getElementById('progressFill');
  const stepLabel = document.getElementById('stepLabel');
  const stepName = document.getElementById('stepName');
  const backBtn = document.getElementById('backBtn');
  const nextBtn = document.getElementById('nextBtn');
  const errMsg = document.getElementById('errMsg');

  // choice-group click handling
  document.querySelectorAll('.choice-grid').forEach(grid=>{
    grid.addEventListener('click', e=>{
      const choice = e.target.closest('.choice');
      if(!choice) return;
      grid.querySelectorAll('.choice').forEach(c=>c.classList.remove('selected'));
      choice.classList.add('selected');
    });
  });

  // range live labels
  function bindRange(id, valId, suffix){
    const el = document.getElementById(id);
    const val = document.getElementById(valId);
    if(!el) return;
    el.addEventListener('input', ()=> val.textContent = el.value + (suffix||''));
  }
  bindRange('cycleLength','cycleLengthVal',' d');
  bindRange('periodLength','periodLengthVal',' d');
  bindRange('painLevel','painLevelVal','');
  bindRange('stressLevel','stressLevelVal','');

  function showStep(n){
    panels.forEach(p => p.classList.toggle('active', Number(p.dataset.step) === n));
    progressFill.style.width = (n/totalSteps*100) + '%';
    stepLabel.textContent = `Step ${n} of ${totalSteps}`;
    stepName.textContent = stepNames[n];
    backBtn.style.visibility = n === 1 ? 'hidden' : 'visible';
    nextBtn.textContent = n === totalSteps ? 'See my results →' : 'Continue →';
    errMsg.style.display = 'none';
  }

  const AGE_MIN = 10, AGE_MAX = 60;
  const ageInput = document.getElementById('age');
  const ageErr = document.getElementById('ageErr');

  function isAgeValid(){
    const raw = ageInput.value.trim();
    if(raw === '') return false;
    const age = Number(raw);
    if(!Number.isFinite(age)) return false;
    if(age < AGE_MIN || age > AGE_MAX) return false;
    if(!Number.isInteger(age)) return false;
    return true;
  }

  function refreshAgeError(){
    if(ageInput.value.trim() === ''){ ageErr.style.display = 'none'; return; }
    ageErr.style.display = isAgeValid() ? 'none' : 'block';
  }
  ageInput.addEventListener('input', refreshAgeError);
  ageInput.addEventListener('blur', ()=>{
    // clamp stray out-of-range typed values back into bounds on blur, rather than silently accepting them
    if(ageInput.value.trim() !== '' && !isAgeValid()){
      ageErr.style.display = 'block';
    }
  });

  function validateStep(n){
    const panel = document.querySelector(`.step-panel[data-step="${n}"]`);
    const groups = panel.querySelectorAll('.choice-grid[data-group]');
    for(const g of groups){
      if(!g.querySelector('.choice.selected')) return false;
    }
    if(n === 1 && !isAgeValid()) return false;
    return true;
  }

  nextBtn.addEventListener('click', ()=>{
    if(!validateStep(current)){
      if(current === 1 && !isAgeValid()){
        ageErr.style.display = 'block';
        ageErr.textContent = ageInput.value.trim() === ''
          ? 'Please enter your age to continue.'
          : `Please enter an age between ${AGE_MIN} and ${AGE_MAX}.`;
      }
      errMsg.style.display = 'block';
      errMsg.textContent = current === 1 ? 'Please enter a valid age to continue.' : 'Please answer every question on this step before continuing.';
      return;
    }
    if(current < totalSteps){
      current++;
      showStep(current);
      document.getElementById('assessment').scrollIntoView({behavior:'smooth', block:'start'});
    } else {
      computeAndShowResults();
    }
  });
  backBtn.addEventListener('click', ()=>{
    if(current > 1){ current--; showStep(current); }
  });

  function getChoice(group){
    const grid = document.querySelector(`.choice-grid[data-group="${group}"]`);
    const sel = grid.querySelector('.choice.selected');
    return sel ? Number(sel.dataset.value) : 0;
  }
  function getChoice2(group){
    const grid = document.querySelector(`.choice-grid[data-group="${group}"]`);
    const sel = grid.querySelector('.choice.selected');
    return sel ? sel.dataset.value : null;
  }
  function getChecked(){
    const out = {};
    document.querySelectorAll('#symptomGrid input[type=checkbox]').forEach(cb=> out[cb.value] = cb.checked);
    return out;
  }

  // ---------- Scoring engine (rule-based, transparent weights) ----------
  function clamp(v){ return Math.max(0, Math.min(100, Math.round(v))); }

  // Age changes what a given answer pattern actually implies, clinically:
  // - Under 18: cycles are commonly irregular for the first ~2-3 years after menarche as the
  //   hypothalamic-pituitary-ovarian axis matures. The same variation score means less at this age.
  // - 18-40: standard reproductive-age weighting, no adjustment.
  // - 41+: irregular cycles increasingly reflect perimenopause rather than new-onset PCOS, and
  //   heavier/longer bleeding is more often linked to fibroids, so anaemia risk is weighted up
  //   while PCOS attribution is weighted down.
  function ageContext(age){
    if(age < 18){
      return {
        pcosMult: 0.7, irregularityMult: 0.8, anaemiaMult: 1.0,
        note: "Cycles are often naturally irregular for the first couple of years after your first period — irregularity alone is weighted a little lower at your age."
      };
    }
    if(age >= 41){
      return {
        pcosMult: 0.6, irregularityMult: 1.15, anaemiaMult: 1.1,
        note: "In your 40s, irregular or heavier cycles are more commonly linked to perimenopause or fibroids than new-onset PCOS — still worth confirming with a doctor."
      };
    }
    return { pcosMult: 1, irregularityMult: 1, anaemiaMult: 1, note: null };
  }

  function computeScores(){
    const age = Number(document.getElementById('age').value);
    const cycleLength = Number(document.getElementById('cycleLength').value);
    const periodLength = Number(document.getElementById('periodLength').value);
    const variation = getChoice('variation');
    const missed = getChoice('missed');
    const pregnancyContext = getChoice2('pregnancyContext');
    const flow = getChoice('flow');
    const clots = getChoice('clots');
    const painLevel = Number(document.getElementById('painLevel').value);
    const painInterference = getChoice('painInterference');
    const stressLevel = Number(document.getElementById('stressLevel').value);
    const sleep = getChoice('sleep');
    const exercise = getChoice('exercise');
    const sym = getChecked();
    const ageCtx = ageContext(age);

    // Irregularity (0-100)
    let irregularity = 0;
    if(cycleLength < 21 || cycleLength > 35) irregularity += 35;
    else if(cycleLength < 24 || cycleLength > 32) irregularity += 15;
    irregularity += variation * 14;
    irregularity += missed * 12;
    irregularity = clamp(irregularity * ageCtx.irregularityMult);

    // PCOS indicator cluster (0-100)
    let pcos = 0;
    if(cycleLength > 35) pcos += 22;
    pcos += variation * 8;
    pcos += missed * 10;
    if(sym.acne) pcos += 10;
    if(sym.hirsutism) pcos += 16;
    if(sym.weightGain) pcos += 12;
    if(sym.hairThin) pcos += 10;
    pcos = clamp(pcos * ageCtx.pcosMult);

    // Dysmenorrhea (period pain) (0-100)
    let dysmenorrhea = 0;
    dysmenorrhea += painLevel * 7;
    dysmenorrhea += painInterference * 14;
    dysmenorrhea += clots * 8;
    if(sym.headache) dysmenorrhea += 5;
    dysmenorrhea = clamp(dysmenorrhea);

    // Anaemia risk (heavy / prolonged flow) (0-100)
    let anaemia = 0;
    anaemia += flow * 15;
    anaemia += clots * 10;
    if(periodLength > 7) anaemia += 20;
    else if(periodLength > 5) anaemia += 8;
    if(sym.fatigue) anaemia += 14;
    if(sym.dizziness) anaemia += 16;
    anaemia = clamp(anaemia * ageCtx.anaemiaMult);

    // Stress-related disruption (0-100)
    let stress = 0;
    stress += stressLevel * 6;
    stress += sleep * 9;
    stress += exercise === 2 ? 10 : (exercise === 3 ? 8 : 0);
    if(sym.moodSwings) stress += 12;
    if(sym.bloating) stress += 6;
    if(sym.breastTender) stress += 4;
    stress += missed * 6;
    stress = clamp(stress);

    // Pregnancy possibility flag — separate from the five scored categories on purpose:
    // this isn't a "risk level," it's a binary situation that should short-circuit straight to
    // "take a test" rather than being buried in a 0-100 score.
    const pregnancyFlag = missed >= 1 && pregnancyContext === 'unprotected';
    const pregnancyWatch = missed >= 1 && pregnancyContext === 'protected';

    return {
      irregularity, pcos, dysmenorrhea, anaemia, stress,
      pregnancyFlag, pregnancyWatch, ageNote: ageCtx.note,
      raw:{age,cycleLength,periodLength,variation,missed,pregnancyContext,flow,clots,painLevel,painInterference,stressLevel,sleep,exercise,sym}
    };
  }

  function levelOf(score){
    if(score < 34) return {label:'Low', color:'var(--low)', hex:'#7fb88b'};
    if(score < 64) return {label:'Moderate', color:'var(--moderate)', hex:'#e3a857'};
    return {label:'High', color:'var(--high)', hex:'#d9536b'};
  }

  const CATS = [
    {key:'irregularity', name:'Cycle Irregularity', desc:s=>`Your cycle length and month-to-month variation suggest a ${levelOf(s).label.toLowerCase()} likelihood of irregular timing.`},
    {key:'pcos', name:'PCOS Indicators', desc:s=>`Combined hormonal symptoms and cycle pattern place PCOS-type indicators at a ${levelOf(s).label.toLowerCase()} level.`},
    {key:'dysmenorrhea', name:'Dysmenorrhea (Period Pain)', desc:s=>`Reported pain intensity and disruption to daily life indicate ${levelOf(s).label.toLowerCase()} dysmenorrhea risk.`},
    {key:'anaemia', name:'Anaemia Risk', desc:s=>`Flow heaviness, duration and associated fatigue signal a ${levelOf(s).label.toLowerCase()} anaemia risk.`},
    {key:'stress', name:'Stress-Related Disruption', desc:s=>`Stress, sleep and mood signals point to a ${levelOf(s).label.toLowerCase()} level of cycle disruption from lifestyle load.`},
  ];

  function buildBloom(scores){
    const cx=160, cy=160, maxR=118, minR=30;
    const n = CATS.length;
    const svg = document.getElementById('bloomSvg');
    let petals = '', dots = '', labels = '';
    CATS.forEach((c, i)=>{
      const score = scores[c.key];
      const r = minR + (score/100)*(maxR-minR);
      const angle = (Math.PI*2/n)*i - Math.PI/2;
      const nextAngle = (Math.PI*2/n)*(i+1) - Math.PI/2;
      const midAngle = (angle+nextAngle)/2;
      const x1 = cx + r*Math.cos(angle), y1 = cy + r*Math.sin(angle);
      const x2 = cx + r*Math.cos(nextAngle), y2 = cy + r*Math.sin(nextAngle);
      const cxr = cx + (r*1.12)*Math.cos(midAngle), cyr = cy + (r*1.12)*Math.sin(midAngle);
      const color = levelOf(score).hex;
      petals += `<path d="M${cx} ${cy} L${x1.toFixed(1)} ${y1.toFixed(1)} Q${cxr.toFixed(1)} ${cyr.toFixed(1)} ${x2.toFixed(1)} ${y2.toFixed(1)} Z" fill="${color}" opacity="0.55" stroke="${color}" stroke-width="1.5"/>`;
      const lx = cx + (maxR+34)*Math.cos(midAngle), ly = cy + (maxR+34)*Math.sin(midAngle);
      const anchor = Math.cos(midAngle) > 0.3 ? 'start' : (Math.cos(midAngle) < -0.3 ? 'end' : 'middle');
      labels += `<text x="${lx.toFixed(1)}" y="${ly.toFixed(1)}" text-anchor="${anchor}" class="phase-label" font-size="9.5" fill="#c9afc0">${c.name.split(' ')[0].toUpperCase()}</text>`;
    });
    // guide rings
    let rings = '';
    [minR, (minR+maxR)/2, maxR].forEach(r=>{
      rings += `<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="rgba(246,237,232,0.08)" stroke-width="1"/>`;
    });
    svg.innerHTML = rings + petals + `<circle cx="${cx}" cy="${cy}" r="${minR-6}" fill="#251729" stroke="rgba(246,237,232,0.12)"/>` + labels +
      `<text x="${cx}" y="${cy-4}" text-anchor="middle" fill="#f6ede8" font-family="Fraunces, serif" font-size="15">Risk</text>
       <text x="${cx}" y="${cy+14}" text-anchor="middle" fill="#f6ede8" font-family="Fraunces, serif" font-size="15">Bloom</text>`;
  }

  function computeAndShowResults(){
    if(!validateStep(current)){
      errMsg.style.display = 'block';
      return;
    }
    const scores = computeScores();
    buildBloom(scores);

    // Pregnancy-possibility banner: only rendered when relevant, sits above everything else.
    let alertEl = document.getElementById('pregnancyAlert');
    if(!alertEl){
      alertEl = document.createElement('div');
      alertEl.id = 'pregnancyAlert';
      const resultsWrap = document.querySelector('#results .wrap');
      resultsWrap.insertBefore(alertEl, resultsWrap.firstChild);
    }
    if(scores.pregnancyFlag){
      alertEl.style.display = 'block';
      alertEl.className = 'disclaimer-box';
      alertEl.style.marginBottom = '32px';
      alertEl.style.background = 'rgba(227,168,87,0.12)';
      alertEl.style.borderColor = 'rgba(227,168,87,0.5)';
      alertEl.innerHTML = `<strong>Possible pregnancy — please check this first.</strong> You reported a missed period and sexual activity without reliable contraception. A missed period can simply mean pregnancy rather than a cycle disorder. Take a home pregnancy test now (or a blood test at a clinic), and see a doctor regardless of the result — especially if the missed period repeats.`;
    } else if(scores.pregnancyWatch){
      alertEl.style.display = 'block';
      alertEl.className = 'disclaimer-box';
      alertEl.style.marginBottom = '32px';
      alertEl.innerHTML = `<strong>Quick note:</strong> You reported a missed period. Since contraception isn't 100% effective, it's worth ruling out pregnancy with a home test before reading the irregularity score below as a cycle-disorder signal.`;
    } else {
      alertEl.style.display = 'none';
    }

    const overallAvg = (scores.irregularity + scores.pcos + scores.dysmenorrhea + scores.anaemia + scores.stress) / 5;
    const overallLevel = levelOf(overallAvg);
    document.getElementById('overallDot').style.background = overallLevel.hex;
    document.getElementById('overallText').textContent = `Overall pattern: ${overallLevel.label} attention`;
    document.getElementById('overallBadge').style.borderColor = overallLevel.hex;

    const highs = CATS.filter(c => scores[c.key] >= 64).map(c=>c.name);
    let summary;
    if(highs.length === 0){
      summary = "Nothing here crosses into the high-risk range. Keep tracking your cycle month to month — patterns are easiest to catch early.";
    } else if(highs.length === 1){
      summary = `Everything looks steady except one area — ${highs[0]} — which scored high enough to be worth a conversation with a doctor.`;
    } else {
      summary = `${highs.length} areas scored in the high range: ${highs.join(', ')}. None of this is a diagnosis, but it's a solid checklist for your next doctor's visit.`;
    }
    document.getElementById('resultSummary').textContent = summary;

    let ageNoteEl = document.getElementById('ageNote');
    if(!ageNoteEl){
      ageNoteEl = document.createElement('p');
      ageNoteEl.id = 'ageNote';
      ageNoteEl.style.cssText = 'font-size:0.82rem;color:var(--accent-gold-soft);margin-top:12px;';
      document.getElementById('resultSummary').insertAdjacentElement('afterend', ageNoteEl);
    }
    ageNoteEl.textContent = scores.ageNote ? `Age context: ${scores.ageNote}` : '';
    ageNoteEl.style.display = scores.ageNote ? 'block' : 'none';

    const cardsEl = document.getElementById('riskCards');
    cardsEl.innerHTML = '';
    CATS.forEach(c=>{
      const score = scores[c.key];
      const lvl = levelOf(score);
      const card = document.createElement('div');
      card.className = 'risk-card';
      card.innerHTML = `
        <div class="risk-card-head">
          <h3>${c.name}</h3>
          <span class="risk-score" style="color:${lvl.hex}">${score}</span>
        </div>
        <span class="risk-level-tag" style="background:${lvl.hex}22;color:${lvl.hex};border:1px solid ${lvl.hex}55;">${lvl.label} risk</span>
        <div class="risk-bar-track"><div class="risk-bar-fill" style="background:${lvl.hex};width:0%"></div></div>
        <p class="desc">${c.desc(score)}</p>
      `;
      cardsEl.appendChild(card);
      requestAnimationFrame(()=>{
        setTimeout(()=>{ card.querySelector('.risk-bar-fill').style.width = score + '%'; }, 60);
      });
    });

    // Recommendations
    const recs = [];
    if(scores.pregnancyFlag) recs.push('Take a home pregnancy test before anything else, then see a doctor regardless of the result.');
    else if(scores.pregnancyWatch) recs.push('Rule out pregnancy with a home test, just to be safe, before acting on the irregularity score.');
    if(scores.irregularity >= 34) recs.push('Track cycle start dates for 3 months — bring the log to your appointment.');
    if(scores.pcos >= 64) recs.push('Ask about a pelvic ultrasound and hormone panel (LH, FSH, testosterone) to check for PCOS.');
    else if(scores.pcos >= 34) recs.push('Mention your skin/hair symptoms alongside cycle length at your next check-up.');
    if(scores.dysmenorrhea >= 64) recs.push('Persistent pain that disrupts daily life can indicate endometriosis — worth discussing directly.');
    if(scores.anaemia >= 64) recs.push('Ask for a haemoglobin / ferritin blood test given your flow and fatigue pattern.');
    else if(scores.anaemia >= 34) recs.push('Consider iron-rich foods and monitor fatigue during heavier flow days.');
    if(scores.stress >= 64) recs.push('Sleep and stress load are high enough to be affecting your cycle — consider both alongside gynaecological care.');
    if(recs.length === 0) recs.push('No urgent flags — a routine annual check-up is still a good idea.');

    const recsList = document.getElementById('recsList');
    recsList.innerHTML = recs.map(r=>`<li>${r}</li>`).join('');

    document.getElementById('results').style.display = 'block';
    document.getElementById('assessment').style.display = 'none';
    document.getElementById('results').scrollIntoView({behavior:'smooth', block:'start'});
  }

  document.getElementById('retakeBtn').addEventListener('click', ()=>{
    document.getElementById('results').style.display = 'none';
    document.getElementById('assessment').style.display = 'block';
    document.querySelectorAll('.choice.selected').forEach(c=>c.classList.remove('selected'));
    document.querySelectorAll('#symptomGrid input[type=checkbox]').forEach(cb=>cb.checked=false);
    document.getElementById('age').value = '';
    ageErr.style.display = 'none';
    const pregAlert = document.getElementById('pregnancyAlert');
    if(pregAlert) pregAlert.style.display = 'none';
    const ageNoteEl = document.getElementById('ageNote');
    if(ageNoteEl) ageNoteEl.style.display = 'none';
    current = 1;
    showStep(1);
    document.getElementById('assessment').scrollIntoView({behavior:'smooth'});
  });

  showStep(1);
})();