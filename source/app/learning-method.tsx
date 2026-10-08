'use client';
import {BookOpen,Target,Trees} from 'lucide-react';

const phases = [
  {id:'understand', title:'Pochopím proč', description:'Krátké vysvětlení a ukázka', Icon:BookOpen},
  {id:'try', title:'Vyzkouším si', description:'Rozhodnutí s vysvětlením chyby', Icon:Target},
  {id:'practice', title:'Předvedu v praxi', description:'Nácvik a pozorování instruktora', Icon:Trees},
] as const;

/** Orientation only. Reading or submitting a lesson never confirms field performance. */
export function LearningSteps({compact=false,current,context}:{compact?:boolean;current?:'understand'|'try';context?:string}) {
  return <section className={compact?'learning-method method-compact':'learning-method method-banner'} aria-label="Jak se v akademii učím">
    {!compact&&<div className="method-eyebrow"><span>OD POCHOPENÍ K PRÁCI V LESE</span><span>TŘI ČÁSTI UČENÍ</span></div>}
    <ol className="method-phases">{phases.map(({id,title,description,Icon},index)=><li key={id} className={current===id?'method-current':''} aria-current={current===id?'step':undefined}>
      <div className="method-mark"><Icon aria-hidden="true"/><span aria-hidden="true">0{index+1}</span></div>
      <div className="method-copy"><strong>{title}</strong>{!compact&&<p>{description}</p>}</div>
    </li>)}</ol>
    {compact&&context&&<p className="method-context"><span>PRÁVĚ TEĎ</span>{context}</p>}
  </section>;
}
