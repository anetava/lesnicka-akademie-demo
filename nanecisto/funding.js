import {grants,matchesGrant,verifiedAt} from './funding-data.js';
const form=document.querySelector('#grant-filters');
const cards=[...document.querySelectorAll('[data-grant]')];
const entries=new Map(grants.map(g=>[g.id,g]));
const count=document.querySelector('#grant-count');
const reset=document.querySelector('#reset-filters');
const printButton=document.querySelector('#print-funding');
form.hidden=false;reset.hidden=false;printButton.hidden=false;
function applyFilters(){
  const filters=Object.fromEntries(new FormData(form));
  let shown=0;
  cards.forEach(card=>{card.hidden=!matchesGrant(entries.get(card.dataset.grant),filters);if(!card.hidden)shown++;});
  count.textContent=`Zobrazeno ${shown} z ${grants.length} prověřených možností`;
  document.querySelector('#grant-empty').hidden=shown!==0;
}
function showAll(){form.elements.focus.value='all';form.elements.role.value='all';form.elements.status.value='all';applyFilters();}
function revealHash(){
  let id;try{id=decodeURIComponent(location.hash.slice(1));}catch{return;}
  if(!entries.has(id))return;
  const card=document.getElementById(id);
  if(card.hidden)showAll();
  card.querySelector('details').open=true;
  requestAnimationFrame(()=>card.scrollIntoView({block:'start'}));
}
form.addEventListener('change',applyFilters);
form.addEventListener('submit',e=>e.preventDefault());
reset.addEventListener('click',showAll);
window.addEventListener('hashchange',revealHash);
document.addEventListener('click',e=>{const link=e.target.closest('a[href^="#"]');if(link&&link.getAttribute('href')===location.hash)revealHash();});
applyFilters();revealHash();
const daysOld=(Date.now()-Date.parse(verifiedAt+'T23:59:59Z'))/86400000;
if(daysOld>30){const el=document.querySelector('#freshness');el.classList.add('is-old');el.textContent='Přehled byl ověřen 11. 10. 2026 a je starší než 30 dní. Uvedené stavy jsou historický snímek; před rozhodnutím zkontrolujte aktuální výzvu.';}
let printState=null;
function beforePrint(){if(printState)return;printState=[...document.querySelectorAll('details')].map(el=>[el,el.open]);for(const [el] of printState)el.open=true;}
function afterPrint(){if(!printState)return;for(const [el,open] of printState)el.open=open;printState=null;}
window.addEventListener('beforeprint',beforePrint);window.addEventListener('afterprint',afterPrint);
printButton.addEventListener('click',()=>{beforePrint();window.print();});
