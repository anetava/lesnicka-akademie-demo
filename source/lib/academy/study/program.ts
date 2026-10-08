import reference from './programme-reference.json';
export const subjects=[
 {id:'forestry',path:'/lesnictvi',title:'Lesnické odborné předměty',short:'Lesnictví',hours:216,units:48,lead:'Odborný instruktor',description:'Sedm odborných předmětů: les, obnova, ochrana, výchova porostů, dříví, mechanizace a bezpečnost.'},
 {id:'english',path:'/anglictina',title:'Odborná lesnická angličtina',short:'Angličtina',hours:64,units:12,lead:'Jazykový lektor',description:'100 odborných výrazů, 20 pracovních vět, porozumění pokynům a tři pracovní rozhovory.'},
 {id:'communication',path:'/komunikace',title:'Pracovní komunikace a spolupráce',short:'Komunikace · IVP',hours:24,units:12,lead:'Lektor IVP',description:'Převzetí zadání, hlášení problému, spolupráce, řešení nedorozumění a předání práce.'},
 {id:'organization',path:'/organizace',title:'Organizace práce a pracovní evidence',short:'Organizace · IVP',hours:16,units:6,lead:'Lektor IVP',description:'Příprava úkolu, pořadí kroků, sebekontrola, pracovní výkaz a souhrnné předání výsledku.'}
] as const;
export const programme=reference;
export const programmeHours=reference.courses;
export const programmeTotals={teachingVH:320,teachingMinutes:14400,practiceHours:360,practiceMinutes:21600,totalHours:600,beforeFinalPracticeHours:358,participants:30,groups:2,groupSize:15,days:40,blocks:20};
export function theoryPass(exam:string,score:number,safety:number){if(exam==='final')return Number.isInteger(score)&&Number.isInteger(safety)&&score>=16&&score<=20&&safety===5&&score>=safety;return /^D[1-4]$/.test(exam)&&Number.isInteger(score)&&Number.isInteger(safety)&&score>=8&&score<=10&&safety===3&&score>=safety;}
