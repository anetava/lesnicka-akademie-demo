/** Reading/writing support for the original published lesson. Never overrides a reviewed revision. */
const outlines:Record<string,string[]>={
 P01:['Smrk: dva rozlišovací znaky.','Jedle: dva rozlišovací znaky.','Neurčený listnatý strom: můj další krok a důvod.'],
 P02:['Co a kde mám podle karty udělat.','Co na ploše zachovám.','Který údaj si potřebuji upřesnit.'],
 P03:['Dvě věci, které zkontroluji na dodávce.','Co udělám s podezřelým materiálem.','Proč tento postup chrání stromy.'],
 P04:['Jakou chybu vidím u vzorku B.','Proč je to problém a co udělám dál.','Co znovu zkontroluji po opravě.'],
 P05:['Před prací najdu…','Zachovám… Po práci zkontroluji…','Závada, kterou předám…'],
 P06:['Místo a viditelná závada ochrany.','Stav stromů: co skutečně vidím.','Co nevím a komu předávám rozhodnutí.'],
 R01:['Komu má zásah pomoci a proč.','Proč nestačí počet odstraněných stromů.','Dvě věci ze zadání: koho má zásah podpořit a co má zůstat.'],
 R02:['A: moje rozhodnutí a důvod z karty.','B: moje rozhodnutí a důvod z karty.','C: moje rozhodnutí a důvod z karty.','D: můj další krok a důvod.'],
 R03:['Co ověřím na pracovišti a o práci ostatních lidí v okolí.','Co ověřím u nářadí a vlastní připravenosti.','Kdy nezačnu nebo práci přeruším a komu to předám.'],
 R04:['Co je hotové a co jsem zkontroloval/a.','Jakou závadu nebo nedokončenou část předávám.','Komu informaci předám a jaký je další krok.']
};
export function responseOutline(m:any){return m.revision===1?outlines[m.id]||[]:[];}
export const lessonReaderRoles=['learner','instructor','teacher','content_expert','didactic_reviewer'];
export function canReadLessons(role:string){return lessonReaderRoles.includes(role);}
export function incompleteChecks(m:any,training:any={},validation:any[]=[]){return (m.forestry?.checks||[]).flatMap((q:any,index:number)=>{
 const choice=training[q.id]||'',result=validation.find(v=>v.id===q.id&&v.choice===choice);
 return !choice||result?.correct===false?[{id:q.id,index:index+1,prompt:q.prompt,missing:!choice}]:[];
});}

export const firstLessonTerms=[
 ['Listnatá dřevina','Dřevina s širokými listovými čepelemi; v této lekci buk lesní a dub letní.'],
 ['Kultura','Mladý porost založený umělou obnovou, například výsadbou sadebního materiálu.'],
 ['Přirozené zmlazení','Nová generace dřevin vzniklá přirozeným rozmnožováním.'],
 ['Ožínání','Omezení rostlin konkurujících stromům v určeném rozsahu a podle ukázky.'],
 ['Buřeň','Rostliny, které v daném místě omezují obnovu lesa. Nejsou to automaticky všechny rostliny kolem.']
];
