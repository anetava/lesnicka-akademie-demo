import {allCases,contentVersion,rubricVersion} from './practice-data.js';

export const RATING_SCHEMA='nanecisto-v4-ratings-1';
export const PACKET_SCHEMA='nanecisto-v4-rating-packet-1';
export const RATING_PROTOCOL='v4-pilot-draft-4';
export const V4_PROJECT_ID='v4-gen-nanecisto-2027';
const LIMIT=5000,MAX_BYTES=8_000_000;
const boundedString=(value,max)=>typeof value==='string'&&value.trim().length>0&&value.length<=max;
const idValid=id=>boundedString(id,152)&&id.startsWith('R-')&&!/[\u0000-\u001f\u007f]/.test(id);
const scoreValid=n=>n===null||[0,1,2].includes(n);
const textBytes=text=>typeof TextEncoder!=='undefined'?new TextEncoder().encode(text).length:text.length;
function parse(text){if(typeof text!=='string'||textBytes(text)>MAX_BYTES)throw new Error('Soubor musí být JSON do 8 MB.');try{return JSON.parse(text);}catch{throw new Error('Soubor není platný JSON.');}}
const caseById=new Map(allCases.filter(c=>c.stage==='probe'&&['A','B'].includes(c.form)).map(c=>[c.id,c]));
function hash(value){let h=2166136261;for(const char of value)h=Math.imul(h^char.charCodeAt(0),16777619)>>>0;return h;}
const caseAlias=id=>'case-'+hash(id).toString(36);
const caseByAlias=new Map([...caseById.values()].map(c=>[caseAlias(c.id),c]));
if(caseByAlias.size!==caseById.size)throw new Error('Kolize identifikátorů hodnoticího balíčku.');

// Only explicit fields are copied. The linkage stays in the coordinator's event file.
export function createRatingPacket(events){
 if(!Array.isArray(events))throw new Error('Chybí seznam událostí.');
 const items=new Map();
 for(const e of events){
  if(e?.event_type!=='decision'||e.mode!=='pilot_assessment'||!['T0','T1'].includes(e.wave)||e.study_project_id!==V4_PROJECT_ID||e.project_protocol_version!==RATING_PROTOCOL||e.scenario_version!==contentVersion||e.rubric_version!==rubricVersion)continue;
  const c=caseById.get(e.scenario_id),choice=c?.options.find(o=>o.id===e.choice_id);
  if(!c||!choice||c.track!==e.track||!boundedString(e.event_id,150)||!boundedString(e.reason,700))continue;
  const rating_id='R-'+e.event_id;if(!idValid(rating_id))continue;
  const item={rating_id,case_id:caseAlias(c.id),title:c.title,scene:c.scene,decision_label:choice.label,reason:e.reason};
  const previous=items.get(rating_id);if(previous&&JSON.stringify(previous)!==JSON.stringify(item))throw new Error('Stejné ID odpovědi má rozdílný obsah. Ověřte původní exporty.');
  items.set(rating_id,item);
 }
 if(items.size>LIMIT)throw new Error('Balíček může obsahovat nejvýše 5 000 odpovědí.');
 // Mixed deterministic order avoids retaining the participant/wave ordering of the input.
 return {schema:PACKET_SCHEMA,protocol_version:RATING_PROTOCOL,items:[...items.values()].sort((a,b)=>hash(a.rating_id)-hash(b.rating_id)||a.rating_id.localeCompare(b.rating_id))};
}

export function importRatingPacket(text){
 const data=parse(text);
 if(data?.schema!==PACKET_SCHEMA||data.protocol_version!==RATING_PROTOCOL||!Array.isArray(data.items)||data.items.length>LIMIT)throw new Error('Nejde o podporovaný balíček pro hodnocení.');
 const seen=new Set(),items=[];
 for(const i of data.items){
  const c=caseByAlias.get(i?.case_id);
  if(!i||!idValid(i.rating_id)||!c||i.title!==c.title||i.scene!==c.scene||!c.options.some(o=>o.label===i.decision_label)||!boundedString(i.reason,700))throw new Error('Balíček obsahuje neplatnou odpověď nebo neodpovídá aktuální verzi případů.');
  if(seen.has(i.rating_id))throw new Error('Balíček opakuje stejné ID odpovědi.');
  seen.add(i.rating_id);
  items.push({rating_id:i.rating_id,case_id:i.case_id,title:i.title,scene:i.scene,decision_label:i.decision_label,reason:i.reason});
 }
 return {schema:PACKET_SCHEMA,protocol_version:RATING_PROTOCOL,items};
}

function cleanRatings(rows){
 if(!Array.isArray(rows)||rows.length>LIMIT)throw new Error('Soubor musí obsahovat nejvýše 5 000 hodnocení.');
 const result=new Map();
 for(const row of rows){
  if(!row||!idValid(row.rating_id)||!['R1','R2'].includes(row.rater_id)||!['rated','not_assessable','unrated'].includes(row.status)||!scoreValid(row.evidence_score)||!scoreValid(row.action_score))throw new Error('Soubor obsahuje neplatné hodnocení.');
  if(row.status==='rated'?(row.evidence_score===null||row.action_score===null):(row.evidence_score!==null||row.action_score!==null))throw new Error('Dokončené hodnocení potřebuje dvě skóre; nehodnotitelné a nehodnocené musí mít null.');
  const r={rating_id:row.rating_id,rater_id:row.rater_id,evidence_score:row.evidence_score,action_score:row.action_score,status:row.status};
  const key=r.rating_id+'|'+r.rater_id,previous=result.get(key);
  if(previous&&JSON.stringify(previous)!==JSON.stringify(r))throw new Error('Stejná odpověď a hodnotitel mají rozporná hodnocení. Vyberte jednu ověřenou verzi.');
  result.set(key,r);
 }
 return [...result.values()];
}

export function importRatings(text){
 const data=parse(text);if(data?.schema!==RATING_SCHEMA)throw new Error('Nejde o export hodnocení Nanečisto V4.');
 if(data.protocol_version!==RATING_PROTOCOL)throw new Error('Hodnocení má jinou nebo chybějící verzi protokolu.');
 return cleanRatings(data.ratings);
}

export function summarizeRatings(ratings,events){
 const knownIds=new Set(createRatingPacket(events).items.map(i=>i.rating_id)),byItem=new Map();
 let unknownCount=0;
 for(const r of cleanRatings(ratings)){
  if(!knownIds.has(r.rating_id)){unknownCount++;continue;}
  if(!byItem.has(r.rating_id))byItem.set(r.rating_id,{});
  byItem.get(r.rating_id)[r.rater_id]=r;
 }
 let ratedCount=0,notAssessable=0,overlapCount=0,agreements=0,sum=0,r2OnlyCount=0,r2RatedCount=0;
 for(const pair of byItem.values()){
  const a=pair.R1,b=pair.R2;
  if(a?.status==='rated'){ratedCount++;sum+=a.evidence_score+a.action_score;}
  else if(a?.status==='not_assessable')notAssessable++;
  if(b?.status==='rated'){r2RatedCount++;if(!a||a.status==='unrated')r2OnlyCount++;}
  if(a?.status==='rated'&&b?.status==='rated'){overlapCount++;if(a.evidence_score===b.evidence_score&&a.action_score===b.action_score)agreements++;}
 }
 return {ratedCount,notAssessable,unknownCount,overlapCount,exactAgreement:overlapCount?agreements/overlapCount:null,meanPerItem:ratedCount?sum/ratedCount:null,knownItemCount:knownIds.size,pendingPrimaryCount:knownIds.size-ratedCount-notAssessable,r2OnlyCount,r2RatedCount};
}
