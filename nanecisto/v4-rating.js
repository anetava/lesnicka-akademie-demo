import {RATING_SCHEMA,RATING_PROTOCOL,importRatingPacket,importRatings} from './v4-rating-core.js';

const $=selector=>document.querySelector(selector);
const esc=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
let packet=null,index=0,rater='R1',rows=new Map(),pendingAction=null,readToken=0;
const dirtyRoles=new Set();
const key=id=>rater+'|'+id;
const blank=id=>({rating_id:id,rater_id:rater,evidence_score:null,action_score:null,status:'unrated'});
const current=()=>packet?.items[index];
const rowFor=id=>rows.get(key(id))??blank(id);
const completed=r=>r.status==='not_assessable'||r.status==='rated';
const partial=r=>r.status==='unrated'&&(r.evidence_score!==null||r.action_score!==null);
const currentRows=()=>packet?.items.map(i=>rowFor(i.rating_id))??[];
function status(message){$('#rating-status').textContent=message;}
function download(text,name){const url=URL.createObjectURL(new Blob([text],{type:'application/json;charset=utf-8'}));const a=document.createElement('a');a.href=url;a.download=name;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);}
const scales={
 evidence:{title:'1. Opora v situaci',help:'Používá důvod konkrétní informaci z popsaného případu?',anchors:[['Bez relevantní opory','Chybí relevantní údaj nebo odpověď staví na nepodložené domněnce.'],['Relevantní, ale obecné','Vystihuje související téma; konkrétní údaj nebo jeho význam zůstává nejasný.'],['Konkrétní a použitá opora','Přesně využívá relevantní údaj z případu jako podklad rozhodnutí.']]},
 action:{title:'2. Důvod pro další krok',help:'Vysvětluje odpověď, proč je zvolený postup v této situaci přiměřený?',anchors:[['Krok není zdůvodněn','Chybí věcný důvod nebo vysvětlení odporuje podstatným podmínkám situace.'],['Směr dává smysl','Důvod je obecně přiměřený, ale vazba na postup či situaci není dotažená.'],['Srozumitelná vazba','Vysvětluje, proč zvolený krok reaguje na situaci a její podstatné podmínky.']]}
};
function scaleHTML(name,row){const d=scales[name],value=row[name+'_score'];return `<fieldset class="rating-scale"><legend>${d.title}</legend><p>${d.help}</p>${d.anchors.map(([title,detail],score)=>`<button type="button" class="rating-score" data-rate="score" data-dimension="${name}" data-score="${score}" aria-pressed="${value===score&&row.status!=='not_assessable'}"><b aria-hidden="true">${score}</b><span><strong>${score} · ${title}</strong>${detail}</span></button>`).join('')}</fieldset>`;}
function render(focusItem=false){
 const list=currentRows(),partialCount=list.filter(partial).length,done=list.filter(completed).length;
 const exportButton=$('[data-rate="export"]');exportButton.disabled=!packet?.items.length||!done||partialCount>0;
 exportButton.title=partialCount?'Nejprve dokončete nebo zrušte rozpracované dvojice skóre.':'';
 $('[data-rate="restore"]').disabled=!packet?.items.length;$('[data-rate="clear"]').disabled=!packet;
 const el=$('#rating-workspace');
 if(!packet?.items.length){el.innerHTML='<div class="rating-empty"><span aria-hidden="true">↗</span><h2>Nejprve jeden skutečný důvod.</h2><p>Načtěte balíček odpovědí z výzkumného pracovního stolu. Balíček s nulovým počtem odpovědí nemá co hodnotit.</p></div>';return;}
 const item=current(),row=rowFor(item.rating_id);
 const message=row.status==='rated'?`Dvojice hotová: ${row.evidence_score} + ${row.action_score} = ${row.evidence_score+row.action_score}/4. Uloženo pouze v paměti tohoto okna.`:row.status==='not_assessable'?'Označeno „nelze posoudit“. Obě skóre zůstávají prázdná.':partial(row)?'Ještě vyberte druhou dimenzi. Neúplnou dvojici nelze exportovat jako hodnocení.':'Zvolte obě dimenze. „Nelze posoudit“ použijte při chybějícím nebo nepoužitelném podkladu, nikoli místo doloženého slabého výkonu.';
 el.innerHTML=`<div class="rating-progress"><strong>${rater} · odpověď ${index+1} z ${packet.items.length}</strong><span>${done} uzavřeno · ${list.filter(r=>r.status==='not_assessable').length} nelze posoudit${partialCount?' · '+partialCount+' rozpracováno':''}</span></div><div class="rating-layout"><article class="rating-item" id="rating-case" tabindex="-1"><p class="eyebrow">MODELOVÁ SITUACE</p><h2>${esc(item.title)}</h2><div class="rating-context">${esc(item.scene)}</div><div class="rating-choice"><strong>ZVOLENÝ POSTUP</strong>${esc(item.decision_label)}</div><p class="rating-reason-label">PŮVODNÍ ZDŮVODNĚNÍ</p><blockquote class="rating-reason">${esc(item.reason)}</blockquote><small class="rating-id">ID odpovědi: ${esc(item.rating_id)}</small></article><div class="rating-scoring">${scaleHTML('evidence',row)}${scaleHTML('action',row)}<div class="rating-decision-actions"><button type="button" class="rating-unassessable" data-rate="unassessable" aria-pressed="${row.status==='not_assessable'}">Nelze posoudit</button><button type="button" class="text-button" data-rate="reset">Zrušit tuto dvojici</button></div><p class="rating-item-status" role="status">${message}</p></div></div><nav class="rating-pagination" aria-label="Pohyb mezi odpověďmi"><button class="button secondary" type="button" data-rate="previous" ${index===0?'disabled':''}>← Předchozí</button><button class="text-button" type="button" data-rate="unrated">Najít neuzavřenou odpověď</button><button class="button primary" type="button" data-rate="next" ${index===packet.items.length-1?'disabled':''}>Další →</button></nav>`;
 if(focusItem)$('#rating-case')?.focus({preventScroll:true});
}
function confirmAction(title,message,action){if(!dirtyRoles.size){action();return;}pendingAction=action;$('#rating-confirm-title').textContent=title;$('#rating-confirm-message').textContent=message;$('#rating-confirm').showModal();}
async function readFile(file){if(!file||file.size>8_000_000)throw new Error('Vyberte JSON do 8 MB.');return file.text();}
$('#rating-packet').addEventListener('change',async e=>{
 const file=e.target.files[0];e.target.value='';if(!file)return;const token=++readToken;
 try{const next=importRatingPacket(await readFile(file));if(token!==readToken)return;
  confirmAction('Načíst jiný balíček?','Dosavadní hodnocení v tomto okně zmizí. Pokud ho chcete zachovat, nejprve se vraťte a stáhněte export.',()=>{packet=next;rows=new Map();index=0;dirtyRoles.clear();render();status(`Načteno ${next.items.length} odpovědí. Hodnotíte v roli ${rater}; vyberte obě dimenze nebo „nelze posoudit“.`);});
 }catch(error){status(error.message);}
});
$('#rater-id').addEventListener('change',e=>{rater=e.target.value;index=0;render();status(`Zvolena role ${rater}. Zobrazeny jsou pouze její skóre. Druhý hodnotitel má posuzovat nezávisle.`);});
$('#rating-restore').addEventListener('change',async e=>{
 const file=e.target.files[0];e.target.value='';if(!file||!packet)return;const token=++readToken,selectedRater=rater,selectedPacket=packet;
 try{const imported=importRatings(await readFile(file));if(token!==readToken)return;if(rater!==selectedRater||packet!==selectedPacket)throw new Error('Během načítání se změnil balíček nebo role. Vyberte soubor znovu.');
  const ids=new Set(packet.items.map(i=>i.rating_id));if(imported.some(r=>r.rater_id!==rater))throw new Error('Soubor obsahuje jinou roli hodnotitele. Obnovujte pouze vlastní export pro zvolenou roli.');
  if(imported.some(r=>!ids.has(r.rating_id)))throw new Error('Některá hodnocení patří k jinému balíčku odpovědí. Tento soubor nebyl načten.');
  confirmAction('Nahradit skóre této role?','Načtený export nahradí všechna současná skóre zvolené role. Neuložené změny zmizí.',()=>{for(const [key,row] of rows)if(row.rater_id===rater)rows.delete(key);for(const row of imported)rows.set(key(row.rating_id),row);dirtyRoles.delete(rater);render();status(`Obnoveno ${imported.length} záznamů role ${rater}. Původní soubor zůstává beze změny.`);});
 }catch(error){status(error.message);}
});
document.addEventListener('click',e=>{
 const b=e.target.closest('[data-rate]');if(!b||b.disabled)return;const action=b.dataset.rate;
 if(action==='cancel'){$('#rating-confirm').close();pendingAction=null;return;}
 if(action==='confirm'){const next=pendingAction;pendingAction=null;$('#rating-confirm').close();next?.();return;}
 if(action==='clear'){confirmAction('Vyčistit toto okno?','Balíček i hodnocení z paměti tohoto okna zmizí. Dříve stažené soubory zůstanou.',()=>{readToken++;packet=null;rows=new Map();index=0;dirtyRoles.clear();render();status('Pracovní stav byl vymazán. Dříve stažené soubory zůstávají.');});return;}
 if(!packet?.items.length)return;
 if(action==='restore'){$('#rating-restore').click();return;}
 if(action==='export'){
  const selected=currentRows();if(selected.some(partial)){status('Nejprve dokončete nebo zrušte všechny rozpracované dvojice.');return;}
  download(JSON.stringify({schema:RATING_SCHEMA,protocol_version:RATING_PROTOCOL,ratings:selected},null,2),`nanecisto-v4-hodnoceni-${rater.toLowerCase()}.json`);dirtyRoles.delete(rater);status(`Export role ${rater} obsahuje ${selected.filter(completed).length} uzavřených a ${selected.filter(r=>r.status==='unrated').length} nehodnocených odpovědí. Uložte jej před zavřením okna.`);return;
 }
 if(action==='previous'||action==='next'){index=Math.max(0,Math.min(packet.items.length-1,index+(action==='next'?1:-1)));render(true);return;}
 if(action==='unrated'){const order=[...packet.items.slice(index+1),...packet.items.slice(0,index+1)];const found=order.find(i=>!completed(rowFor(i.rating_id)));if(found){index=packet.items.findIndex(i=>i.rating_id===found.rating_id);render(true);}else status('Všechny odpovědi této role jsou uzavřené. Stáhněte export.');return;}
 const item=current();let row={...rowFor(item.rating_id)};
 if(action==='score'){
  const dimension=b.dataset.dimension,score=Number(b.dataset.score);if(!['evidence','action'].includes(dimension)||![0,1,2].includes(score))return;
  if(row.status==='not_assessable')row=blank(item.rating_id);
  row[dimension+'_score']=score;row.status=row.evidence_score!==null&&row.action_score!==null?'rated':'unrated';rows.set(key(item.rating_id),row);dirtyRoles.add(rater);render();$(`[data-dimension="${dimension}"][data-score="${score}"]`)?.focus({preventScroll:true});return;
 }
 if(action==='unassessable'){row={...blank(item.rating_id),status:row.status==='not_assessable'?'unrated':'not_assessable'};rows.set(key(item.rating_id),row);dirtyRoles.add(rater);render();$('[data-rate="unassessable"]')?.focus({preventScroll:true});}
 if(action==='reset'){rows.delete(key(item.rating_id));dirtyRoles.add(rater);render();$('[data-rate="reset"]')?.focus({preventScroll:true});}
});
$('#rating-confirm').addEventListener('cancel',()=>{pendingAction=null;});
window.addEventListener('beforeunload',e=>{if(dirtyRoles.size){e.preventDefault();e.returnValue='';}});
render();
