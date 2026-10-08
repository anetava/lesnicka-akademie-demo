import data from './units.json';

export {studyBlocks,practiceCards,studyVersion} from './config';
export const studyUnits:any[]=data;
export const studySources:any[]=[];
export function safeStudyUnit(u:any){return {...u,quiz:u.quiz.map(({correct,explanation,...q}:any)=>q)};}
