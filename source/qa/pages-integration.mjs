import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import {createRequire} from 'node:module';
import {createHash} from 'node:crypto';
import {performance} from 'node:perf_hooks';
import ts from 'typescript';

// Execute the shipped SQLite engine and service, with a structured-cloned state
// store standing in for IndexedDB. Every request opens a new SQLite database.
// These are demonstration workflow tests, not a browser security certification.
const root=path.resolve(path.dirname(new URL(import.meta.url).pathname),'..');
process.chdir(root);
const out=path.join(root,'.qa-runtime');
fs.mkdirSync(out,{recursive:true});
const read=(p)=>fs.readFileSync(path.join(root,p),'utf8');
const json=(p)=>JSON.parse(read(p));
const compile=(source,name)=>fs.writeFileSync(path.join(out,name),ts.transpileModule(source,{compilerOptions:{target:ts.ScriptTarget.ES2022,module:ts.ModuleKind.ESNext}}).outputText);
compile(read('lib/academy/service.ts').replace("'./catalog'","'./catalog.mjs'").replace("'./study/catalog'","'./study.mjs'"),'service.mjs');
compile(read('lib/presentation-db.ts'),'presentation-db.mjs');
compile(read('lib/academy/forestry-curriculum.ts'),'forestry.mjs');
let catalog=read('lib/academy/catalog.ts').replace("'./forestry-curriculum'","'./forestry.mjs'");
catalog=catalog.replace(/import (\w+) from '([^']+\.json)';/g,(_,name,file)=>`const ${name}=${fs.readFileSync(path.resolve(root,'lib/academy',file),'utf8')};`);
compile(catalog,'catalog.mjs');
const units=[...json('lib/academy/study/units.json'),...json('lib/academy/study/additional-units.json')];
const sources=[];
compile(read('lib/academy/study/config.ts').replace("import additionalBlocks from './additional-blocks.json';",'const additionalBlocks='+JSON.stringify(json('lib/academy/study/additional-blocks.json'))+';').replace("export {subjects} from './program';",read('lib/academy/study/program.ts'))+'\nexport const studyUnits='+JSON.stringify(units)+';\nexport const studySources='+JSON.stringify(sources)+';\nexport const safeStudyUnit=u=>({...u,quiz:u.quiz.map(({correct,explanation,...q})=>q)});','study.mjs');
fs.copyFileSync(path.join(root,'public/sql/sql-wasm.js'),path.join(out,'sql-wasm.cjs'));
const require=createRequire(import.meta.url);
const initSqlJs=require(path.join(out,'sql-wasm.cjs'));
const wasmBinary=Buffer.concat([0,1,2].map(i=>fs.readFileSync(path.join(root,`public/sql/sql-wasm.wasm.${String(i).padStart(2,'0')}`))));
const SQL=await initSqlJs({wasmBinary});
const {handleAcademy}=await import(path.join(out,'service.mjs'));
const {createDemoEngine}=await import(path.join(out,'presentation-db.mjs'));
const schema=fs.readdirSync(path.join(root,'drizzle')).filter(f=>f.endsWith('.sql')).sort().map(f=>read('drizzle/'+f)).join('\n');
let durableState,failNextSave=false,loads=0,saves=0;
const storage={
 async load(){loads++;return durableState?structuredClone(durableState):undefined},
 async save(state){if(failNextSave){failNextSave=false;throw Error('SIMULATED_STORAGE_QUOTA_FAILURE')}saves++;durableState=structuredClone(state)}
};
let engine=createDemoEngine(SQL,schema,handleAcademy,storage);
let serial=Promise.resolve();
const actors=new Map();
const ev=()=>crypto.randomUUID();
const checks=[];
async function test(name,fn){const started=performance.now();try{await fn();checks.push({name,status:'pass',ms:Math.round(performance.now()-started)});console.log('PASS',name)}catch(error){checks.push({name,status:'fail',error:error.message});console.error('FAIL',name,error.stack)}}
function ok(result,status=200){assert.equal(result.status,status,JSON.stringify(result.data));return result.data}
async function request(cookie,endpoint,payload){
 if(cookie&&payload!==undefined){const userId=actors.get(cookie);if(payload instanceof FormData){if(!payload.has('expectedUserId'))payload.append('expectedUserId',userId)}else{payload={...payload,expectedUserId:payload.expectedUserId??userId};if(['draft','check'].includes(endpoint)&&payload.contentId===undefined)payload.contentId=ok(await request(cookie,'mission/'+payload.mission)).mission.contentId}}
 const headers={origin:'https://academy.presentation'};if(cookie)headers.cookie=cookie;
 let body;if(payload instanceof FormData)body=payload;else if(payload!==undefined){headers['content-type']='application/json';body=JSON.stringify({...payload,eventId:payload.eventId||ev()})}
 const req=new Request('https://academy.presentation/api/academy/'+endpoint,{method:payload===undefined?'GET':'POST',headers,body});
 const work=serial.then(()=>engine(req));serial=work.catch(()=>{});const response=await work;
 let data;try{data=await response.clone().json()}catch{data=await response.clone().text()}
 return {status:response.status,data,response};
}
async function login(id){const r=await request(null,'launcher',{account:id});ok(r);const cookie=r.response.headers.get('set-cookie').split(';')[0];actors.set(cookie,id);return cookie}
function persistedRows(sql,values=[]){const db=new SQL.Database(durableState.bytes);try{const s=db.prepare(sql);try{s.bind(values);const rows=[];while(s.step())rows.push(s.getAsObject());return rows}finally{s.free()}}finally{db.close()}}
const assess=(extra={})=>({version:0,dimensions:Array(5).fill('met'),outcome:'returned',observation:'Rozpoznal nejasnost; chybí otázka na rozsah.',support:'Jedna doplňující otázka instruktora.',next:'Doplň druhou otázku a zopakuj zadání vlastními slovy.',...extra});
let a1,a2,i1,i2,q,firstAttempt,correctedAttempt,attachment;

await test('Source invariants: 14 areas, 42 original performance fields, 24 unanswered requirements',async()=>{
 // Checksums were measured against the untouched full academy source package.
 const sha=(file)=>createHash('sha256').update(read(file)).digest('hex');
 assert.equal(sha('zadani/data/kompetence_zdroj_v0_1.json'),'ddbc7f66f6ff8e1669e1a6b7e07c54466fa5068c749507e44dd71c5d78103016');
 assert.equal(sha('zadani/data/otevrene_otazky.json'),'410f0e7b336daf79a4bbbcfa12bac061f42c38b0c84d5e0aaf1a570b6f04b65a');
 const profile=json('zadani/data/kompetence_zdroj_v0_1.json');assert.equal(profile.competencies.length,14);
 for(const c of profile.competencies){assert(c.independent_performance_verbatim);assert(c.judgement_within_assignment_verbatim);assert(c.autonomy_boundary_verbatim);assert(!c.production_approved)}
 const questions=json('zadani/data/otevrene_otazky.json');assert.equal(questions.length,24);assert(questions.every(x=>x.answer===null));
});
await test('Browser-local launcher accepts a Request without a network Origin header',async()=>{
 const response=await engine(new Request('https://academy.presentation/api/academy/launcher',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({account:'demo-a01'})}));
 assert.equal(response.status,200,(await response.clone().json()).error);
 assert.equal((await response.json()).user.id,'demo-a01');
});
await test('Browser-local session header opens the selected account and rejects malformed tokens',async()=>{
 const opened=await engine(new Request('https://academy.presentation/api/academy/launcher',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({account:'demo-a01'})}));
 assert.equal(opened.status,200);
 const token=(await opened.clone().json()).demoSessionToken;
 assert.match(token,/^[a-f0-9]{64}$/);
 const bootstrap=await engine(new Request('https://academy.presentation/api/academy/bootstrap',{headers:{'X-Academy-Demo-Session':token}}));
 assert.equal(bootstrap.status,200,(await bootstrap.clone().json()).error);
 assert.equal((await bootstrap.json()).user.id,'demo-a01');
 const bad=await engine(new Request('https://academy.presentation/api/academy/bootstrap',{headers:{'X-Academy-Demo-Session':'invalid'}}));
 assert.equal(bad.status,401);
});
await test('SQLite WASM seed and role launcher persist 30 synthetic learners',async()=>{
 ok(await request(null,'launcher'));a1=await login('demo-a01');a2=await login('demo-a02');i1=await login('demo-i01');i2=await login('demo-i02');q=await login('demo-q01');
 assert.equal(ok(await request(q,'ivp')).summary.learners,30);assert.notEqual(a1,a2);
 const b=ok(await request(a1,'bootstrap'));assert.equal(b.competencies.length,14);assert.equal(b.questions,undefined);assert.equal(b.missions.length,23);
});
await test('Role rules reject wrong-role and unassigned requests in the demo logic',async()=>{
 ok(await request(null,'bootstrap'),401);ok(await request(a1,'ivp'),403);ok(await request(a1,'portfolio?user=demo-a02'),403);ok(await request(i2,'learner/demo-a01'),403);
 ok(await request(a1,'review',{role:'instructor',...assess()}),403);
});
await test('D01 explanation and draft survive logout, relogin and engine recreation',async()=>{
 const wrong=ok(await request(a1,'check',{mission:'D01',choice:'a'}));assert.equal(wrong.correct,false);assert(wrong.feedback.length>30);
 const draft=ok(await request(a1,'draft',{mission:'D01',version:0,choice:'b',answer:'Která označená plocha je určena pro můj úkol?',transfer:'Požádám předem o upřesnění kritéria výsledku.'}));assert.equal(draft.version,1);
 ok(await request(a1,'logout',{}));ok(await request(a1,'bootstrap'),401);engine=createDemoEngine(SQL,schema,handleAcademy,storage);a1=await login('demo-a01');
 assert.match(ok(await request(a1,'mission/D01')).draft.data.answer,/Která označená plocha/);
});
await test('D01 duplicate submission creates one attempt and one reward',async()=>{
 const body={mission:'D01',version:1,eventId:ev()};const results=await Promise.all([request(a1,'submit',body),request(a1,'submit',body)]);results.forEach(r=>ok(r));assert.equal(results[0].data.id,results[1].data.id);firstAttempt=results[0].data.id;
 const p=ok(await request(a1,'portfolio'));assert.equal(p.attempts.length,1);assert.equal(p.points,10);assert.equal(p.practicalCompetencies,0);
});
await test('Instructor return, learner correction, acceptance, portfolio and IVP complete the loop',async()=>{
 assert(ok(await request(i1,'queue')).items.some(a=>a.id===firstAttempt&&a.status==='submitted'));
 ok(await request(i2,'review',{...assess(),attemptId:firstAttempt}),403);ok(await request(i1,'review',{...assess(),attemptId:firstAttempt}));
 assert.equal(ok(await request(a1,'mission/D01')).attempts[0].status,'returned');
 ok(await request(a1,'draft',{mission:'D01',version:1,choice:'b',answer:'Která plocha A nebo B je určena? Jaký je přesný rozsah? Po doplnění zopakuji místo i rozsah odpovědné osobě.',transfer:'Předem ověřím požadované kritérium výsledku.'}));
 correctedAttempt=ok(await request(a1,'submit',{mission:'D01',version:2})).id;
 ok(await request(i1,'review',{...assess({outcome:'accepted',observation:'Obě otázky i vlastní zopakování jsou doložené.',next:'Vyzkoušej další modelovou misi.'}),attemptId:correctedAttempt}));
 const p=ok(await request(a1,'portfolio'));assert.equal(p.attempts.length,2);assert.equal(p.attempts[0].status,'accepted');assert.equal(p.attempts[1].status,'returned');assert.equal(p.points,20);assert.equal(p.practicalCompetencies,0);
 const ivp=ok(await request(q,'ivp'));assert.equal(ivp.summary.pending,0);assert(ivp.people.find(p=>p.id==='demo-a01').records.some(r=>r.id===correctedAttempt));
});
await test('72 lessons in three separate subjects preserve content and twelve checkpoint links',async()=>{
 const study=ok(await request(a2,'study'));assert.equal(study.units.length,72);assert.equal(study.blocks.length,12);assert.equal(study.practiceCards.length,8);assert.equal(study.units.reduce((n,u)=>n+u.quiz.length,0),216);
 for(const u of study.units){assert(u.sections.length>=3);assert(u.sections.map(s=>s.body).join(' ').length>750);assert(u.quiz.every(q=>q.correct===undefined&&q.explanation===undefined));assert.deepEqual(u.sourceIds,[]);assert.equal(study.sources.length,0)}
 for(const block of study.blocks){assert.equal(study.units.filter(u=>u.block===block.id).length,6);ok(await request(a2,'mission/'+block.checkpoint))}
});
await test('Quiz gives explained correction and awards points once across repeated attempts',async()=>{
 const unit=units[0],study=ok(await request(a2,'study'));const answers=Object.fromEntries(unit.quiz.map(q=>[q.id,q.correct]));const wrong={...answers,[unit.quiz[0].id]:unit.quiz[0].options.find(o=>o.id!==unit.quiz[0].correct).id};
 const before=ok(await request(a2,'portfolio')).points;const result=ok(await request(a2,'study-check',{unit:unit.id,contentVersion:study.version,version:0,answers:wrong}));assert.equal(result.score,2);assert.equal(result.passed,false);assert(result.feedback[0].explanation.length>25);
 const body={eventId:ev(),unit:unit.id,contentVersion:study.version,version:1,answers};const duplicate=await Promise.all([request(a2,'study-check',body),request(a2,'study-check',body)]);duplicate.forEach(r=>{assert.equal(ok(r).score,3);assert.equal(r.data.version,2)});
 ok(await request(a2,'study-check',{...body,eventId:ev()}),409);ok(await request(a2,'study-check',{...body,eventId:ev(),version:2}));assert.equal(ok(await request(a2,'portfolio')).points,before+10);
 assert.equal(persistedRows('SELECT count(*) n FROM study_attempts WHERE user_id=? AND unit=?',['demo-a02',unit.id])[0].n,3);
});
await test('Lesson work is durable, editable, exported and rewarded only once',async()=>{
 const study=ok(await request(a2,'study')),unit=study.units[0];const text='Syntetický pracovní zápis: ověřím označení plochy, cíl a hranice práce. Nejasnost předám instruktorovi.';
 const before=ok(await request(a2,'portfolio')).points;const body={eventId:ev(),unit:unit.id,contentVersion:study.version,version:0,text};assert.equal(ok(await request(a2,'study-work',body)).version,1);assert.equal(ok(await request(a2,'study-work',body)).version,1);
 ok(await request(a2,'study-work',{...body,eventId:ev(),text:text+' Stará verze.'}),409);ok(await request(i1,'study-work',{...body,eventId:ev(),version:1}),403);
 ok(await request(a2,'study-work',{...body,eventId:ev(),version:1,text:text+' Doplním kontrolu.'}));assert.equal(ok(await request(a2,'portfolio')).points,before+5);
 engine=createDemoEngine(SQL,schema,handleAcademy,storage);assert.equal(ok(await request(i1,'study?user=demo-a02')).works[0].text,text+' Doplním kontrolu.');ok(await request(i2,'study?user=demo-a02'),403);
 const p=ok(await request(a2,'portfolio'));const record=p.records.find(r=>r.kind==='learning');assert(record);const exportResult=ok(await request(a2,'export',{ids:[record.id]}));assert.equal(exportResult.items.length,1);
});
await test('Attachment bytes survive engine recreation and follow demo ownership rules',async()=>{
 const form=new FormData();form.append('file',new File(['Synteticky dukaz zadani'],'dukaz.txt',{type:'text/plain'}));form.append('mission','D01');attachment=ok(await request(a1,'attachment',form)).id;
 engine=createDemoEngine(SQL,schema,handleAcademy,storage);assert.equal(ok(await request(a1,'attachment/'+attachment)),'Synteticky dukaz zadani');assert.equal(ok(await request(i1,'attachment/'+attachment)),'Synteticky dukaz zadani');ok(await request(a2,'attachment/'+attachment),403);ok(await request(null,'attachment/'+attachment),401);
 assert.equal(durableState.files.length,1);
});
await test('Storage failure never reports success and retries preserve one durable operation',async()=>{
 const m=ok(await request(a2,'mission/D01'));assert.equal(m.draft,null);const body={mission:'D01',version:0,contentId:m.mission.contentId,choice:'b',answer:'Ověřím přesnou plochu a rozsah zadání.',transfer:'Předem si ověřím kritérium výsledku.',eventId:ev()};
 const before=durableState.bytes.slice();failNextSave=true;await assert.rejects(request(a2,'draft',body),/SIMULATED_STORAGE_QUOTA_FAILURE/);assert.deepEqual(durableState.bytes,before);
 assert.equal(ok(await request(a2,'mission/D01')).draft,null);assert.equal(ok(await request(a2,'draft',body)).version,1);assert.equal(ok(await request(a2,'draft',body)).version,1);
});
await test('Storage failure atomically discards both new attachment and its record',async()=>{
 const form=new FormData();form.append('file',new File(['Synteticky neulozeny soubor'],'neulozeny.txt',{type:'text/plain'}));form.append('mission','D01');
 const count=persistedRows('SELECT count(*) n FROM attachments')[0].n,files=durableState.files.length;failNextSave=true;await assert.rejects(request(a2,'attachment',form),/SIMULATED_STORAGE_QUOTA_FAILURE/);
 assert.equal(persistedRows('SELECT count(*) n FROM attachments')[0].n,count);assert.equal(durableState.files.length,files);
});
await test('Persisted SQLite snapshot is consistent and contains no practical qualification',async()=>{
 assert.equal(persistedRows('PRAGMA integrity_check')[0].integrity_check,'ok');assert.deepEqual(persistedRows('PRAGMA foreign_key_check'),[]);assert.equal(ok(await request(q,'ivp')).summary.practicalVerified,0);assert.equal(ok(await request(a1,'portfolio')).awardStatus,'Čeká na schválení programu');
 assert(loads>50);assert(saves>50);
});

await test('Presentation does not disclose internal requirements and LCR receives only aggregates',async()=>{
 const lcr=await login('demo-l01');const boot=ok(await request(lcr,'bootstrap'));assert.equal(boot.questions,undefined);
 const ivp=ok(await request(lcr,'ivp'));assert.deepEqual(ivp.people,[]);assert.equal(ivp.questions,undefined);assert.equal(ivp.summary.openQuestions,undefined);
 const study=ok(await request(lcr,'study-overview'));assert.deepEqual(study.people,[]);assert(study.summary.passed>=1);
 ok(await request(lcr,'study?user=demo-a01'),403);ok(await request(lcr,'portfolio?user=demo-a01'),403);ok(await request(lcr,'review',{...assess(),attemptId:correctedAttempt}),403);
});

await test('Forestry authoring and two reviews remain functional with hidden sources',async()=>{
 const teacher=await login('demo-t01'),expert=await login('demo-o01'),didactic=await login('demo-p01');
 const base=ok(await request(teacher,'content')).items.find(x=>x.mission==='P01'&&x.status==='published_demo').data;
 const created=ok(await request(teacher,'content',{action:'create',mission:'P01',title:base.title,lesson:base.lesson_text,scenario:base.scenario,task:base.submission_task,transfer:base.transfer_task,criteria:base.proposed_assessor_guidance,forestry:base.forestry,decision:{question:base.question,options:base.options,correct_option_id:base.correct_option_id,feedback:base.feedback}}));
 ok(await request(teacher,'content',{action:'publish',id:created.id}),409);
 ok(await request(expert,'content',{action:'approve',id:created.id,note:'Modelová odborná recenze této přesné verze.'}));
 ok(await request(didactic,'content',{action:'approve',id:created.id,note:'Modelová didaktická recenze této přesné verze.'}));
 ok(await request(teacher,'content',{action:'publish',id:created.id}));
 const published=ok(await request(teacher,'content')).items.find(x=>x.id===created.id);
 assert.equal(published.status,'published_demo');assert.deepEqual(published.data.forestry.sources,[]);assert.equal(published.data.production_enabled,false);
});

await test('English and IVP communication have independent work, checkpoints and aggregate reporting',async()=>{
 const a3=await login('demo-a03');const study=ok(await request(a3,'study'));
 assert.deepEqual(['forestry','english','communication'].map(s=>study.units.filter(u=>u.subject===s).length),[48,12,12]);
 for(const id of ['A01','C01']){
  const unit=units.find(u=>u.id===id);const answers=Object.fromEntries(unit.quiz.map(q=>[q.id,q.correct]));
  assert.equal(ok(await request(a3,'study-check',{unit:id,contentVersion:study.version,version:0,answers})).score,3);
  ok(await request(a3,'study-work',{unit:id,contentVersion:study.version,version:0,text:id==='A01'?'Please check the planting stock. Protect the roots. Český význam: zkontrolujte sadební materiál a chraňte kořeny.':'Zopakuji místo, rozsah a požadovanou kvalitu. Nejasnou hranici si nechám ukázat a ověřím dohodu.'}));
 }
 const checkpoint=ok(await request(a3,'mission/AE01')).mission;assert.equal(checkpoint.subject,'english');
 ok(await request(a3,'draft',{mission:'AE01',version:0,choice:json('lib/academy/study/additional-checkpoints.json').find(m=>m.id==='AE01').correct_option_id,answer:'Please check the planting stock. I will protect the roots. Jde o modelový jazykový dialog.',transfer:'Pro novou plochu ověřím význam pracovního pokynu.'}));
 const attempt=ok(await request(a3,'submit',{mission:'AE01',version:1}));
 assert(ok(await request(i1,'queue')).items.some(a=>a.id===attempt.id));
 ok(await request(i1,'review',{...assess({outcome:'accepted',observation:'Odborné pojmy jsou použity s jasným českým významem.',next:'Procvičte pracovní dialog s vyučujícím angličtiny.'}),attemptId:attempt.id}));
 const fresh=ok(await request(a3,'study'));assert(fresh.checkpoints.some(c=>c.mission==='AE01'&&c.status==='accepted'));
 const overview=ok(await request(q,'study-overview'));const person=overview.people.find(p=>p.id==='demo-a03');
 assert.equal(person.subjects.find(s=>s.subject==='forestry').works,0);assert.equal(person.subjects.find(s=>s.subject==='english').works,1);assert.equal(person.subjects.find(s=>s.subject==='communication').works,1);
 assert.equal(person.passed,2);assert.equal(overview.summary.subjects.length,3);
 assert.equal(ok(await request(a3,'portfolio')).practicalCompetencies,0);
});

const report={
 testedAt:new Date().toISOString(),
 environment:'Node executing actual sql.js WebAssembly, presentation SQLite adapter and academy service. Structured-cloned memory persistence simulates IndexedDB snapshots; every request reconstructs SQLite from persisted bytes.',
 scope:'Public synthetic demonstration; role checks validate application behavior and are not a security boundary in a client-side application.',
 pass:checks.filter(x=>x.status==='pass').length,fail:checks.filter(x=>x.status==='fail').length,loads,saves,checks,
 limitations:['Native browser IndexedDB, Web Locks and quota behavior are not exercised by this Node test.','DOM rendering, mobile layout, navigation, downloads and deployed GitHub Pages require separate browser checks.','Cross-device shared storage and secure real-user authentication are intentionally outside this presentation.']
};
fs.writeFileSync(path.join(root,'qa/pages-integration-results.json'),JSON.stringify(report,null,2)+'\n');
console.log(JSON.stringify({pass:report.pass,fail:report.fail,loads,saves}));
process.exitCode=report.fail?1:0;
