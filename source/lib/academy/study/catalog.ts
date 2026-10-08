import data from './units.json';
import additional from './additional-units.json';
import organization from './organization-units.json';

export {subjects,studyBlocks,practiceCards,studyVersion} from './config';
export const studyUnits:any[]=[...data,...additional,...organization];
export const studySources:any[]=[];
export function safeStudyUnit(u:any){return {...u,quiz:u.quiz.map(({correct,explanation,...q}:any)=>q)};}
