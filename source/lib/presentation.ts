import {handleAcademy} from './academy/service';
import {createDemoEngine} from './presentation-db';
import first from '../drizzle/0000_short_guardian.sql?raw';
import second from '../drizzle/0001_clear_grey_gargoyle.sql?raw';
import third from '../drizzle/0002_tidy_tiger_shark.sql?raw';
const databaseName='lesnicka-akademie-presentation-v1';
export async function installPresentation(){
 const parts=await Promise.all(['sql-wasm.wasm.00','sql-wasm.wasm.01','sql-wasm.wasm.02'].map(async name=>{
  const response=await fetch(import.meta.env.BASE_URL+'sql/'+name);
  if(!response.ok)throw Error('Databázová součást se nepodařila načíst: '+name);
  return new Uint8Array(await response.arrayBuffer());
 }));
 const wasmBinary=new Uint8Array(parts.reduce((total,part)=>total+part.length,0));
 let offset=0;for(const part of parts){wasmBinary.set(part,offset);offset+=part.length}
 const SQL=await (window as any).initSqlJs({wasmBinary});
 const idb:IDBDatabase=await new Promise((resolve,reject)=>{const r=indexedDB.open(databaseName,1);r.onupgradeneeded=()=>r.result.createObjectStore('state');r.onsuccess=()=>resolve(r.result);r.onerror=()=>reject(r.error)});
 const storage={load:()=>new Promise<any>((resolve,reject)=>{const tx=idb.transaction('state','readonly');const r=tx.objectStore('state').get('academy');tx.oncomplete=()=>resolve(r.result);tx.onerror=()=>reject(tx.error)}),save:(state:any)=>new Promise<void>((resolve,reject)=>{const tx=idb.transaction('state','readwrite');tx.objectStore('state').put(state,'academy');tx.oncomplete=()=>resolve();tx.onabort=tx.onerror=()=>reject(tx.error||Error('Uložení se nezdařilo.'))})};
 const execute=createDemoEngine(SQL,[first,second,third].join('\n'),handleAcademy,storage);
 const originalFetch=window.fetch.bind(window);let queue:Promise<any>=Promise.resolve();
 window.fetch=async (input:RequestInfo|URL,init?:RequestInit)=>{
  const url=new URL(input instanceof Request?input.url:String(input),location.href);
  if(url.origin!==location.origin||!url.pathname.startsWith('/api/academy/'))return originalFetch(input,init);
  const run=async()=>{
   const headers=new Headers(init?.headers||(input instanceof Request?input.headers:undefined));headers.set('Origin','https://academy.presentation');
   const cookie=sessionStorage.getItem('academy-demo-cookie');if(cookie)headers.set('Cookie',cookie);
   const endpoint=url.pathname.split('/')[3];
   if(['shares','shared'].includes(endpoint))return Response.json({error:'Veřejné sdílení portfolia zde není dostupné. Použij export vybraných záznamů. Ukázkové údaje zůstávají v tomto prohlížeči.'},{status:409});
   const request=new Request('https://academy.presentation'+url.pathname+url.search,{...init,headers});
   try{
    const response=await execute(request);
    const setCookie=response.headers.get('set-cookie');if(setCookie){const pair=setCookie.split(';')[0];if(pair==='academy_session=')sessionStorage.removeItem('academy-demo-cookie');else sessionStorage.setItem('academy-demo-cookie',pair)}
    return response;
   }catch{ return Response.json({error:'Změna nebyla uložena. Prohlížeč nemá dostupné úložiště nebo je plné. Ulož si text mimo aplikaci a zkus to znovu.'},{status:503}) }
  };
  const task=()=>navigator.locks?navigator.locks.request(databaseName,run):run();
  const result=queue.then(task,task);queue=result.catch(()=>{});return result;
 };
 // Attachment links also use the local service and its current demonstration role.
 document.addEventListener('click',async event=>{const anchor=(event.target as HTMLElement).closest?.('a');if(!anchor)return;const href=anchor.getAttribute('href')||'';if(/^#[a-z]/i.test(href)){event.preventDefault();document.getElementById(href.slice(1))?.scrollIntoView({behavior:'smooth'});return}const url=new URL(anchor.href,location.href);if(url.origin!==location.origin||!url.pathname.startsWith('/api/academy/attachment/'))return;event.preventDefault();const r=await fetch(url);if(!r.ok){alert((await r.json()).error);return}const blob=URL.createObjectURL(await r.blob());const a=document.createElement('a');a.href=blob;a.download=r.headers.get('content-disposition')?.match(/filename="([^"]+)"/)?.[1]||'priloha';a.click();setTimeout(()=>URL.revokeObjectURL(blob),1000)});
}
