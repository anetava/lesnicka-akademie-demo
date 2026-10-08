import data from './units.json';
import additional from './additional-units.json';

export {subjects,studyBlocks,practiceCards,studyVersion} from './config';
export const studyUnits:any[]=[...data,...additional];
export const studySources:any[]=[];
export function safeStudyUnit(u:any){return {...u,quiz:u.quiz.map(({correct,explanation,...q}:any)=>q)};}
