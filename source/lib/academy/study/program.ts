export const subjects=[
 {id:'forestry',path:'/lesnictvi',title:'Lesnické odborné předměty',short:'Lesnictví',hours:180,units:48,lead:'Odborný instruktor',description:'Obnova lesa, ochrana kultur, výchova porostů, prořezávky, menší probírky a technická péče.'},
 {id:'english',path:'/anglictina',title:'Odborná lesnická angličtina',short:'Angličtina',hours:24,units:12,lead:'Vyučující angličtiny',description:'Lesnické a dřevařské pojmy, modelové věty, porozumění a vlastní pracovní dialog.'},
 {id:'communication',path:'/komunikace',title:'Komunikace a profesní dovednosti',short:'Komunikace · IVP',hours:24,units:12,lead:'Prostor pro výuku IVP',description:'Pracovní dohoda, jazykově různorodý tým, zpětná vazba, reflexe a vlastní rozvoj.'}
] as const;
// Authored proposal for this short programme, not the hour requirements of an RVP.
export const programmeHours=[
 {title:'Dřeviny a pracovní zadání',theory:6,practice:12,total:18},
 {title:'Obnova lesa a výsadba',theory:8,practice:34,total:42},
 {title:'Ochrana kultur a péče o půdu',theory:6,practice:24,total:30},
 {title:'Výchova porostů a prořezávky',theory:6,practice:24,total:30},
 {title:'Menší probírky a základy těžební činnosti',theory:10,practice:26,total:36},
 {title:'Mechanizace, křovinořez a technická péče',theory:8,practice:12,total:20},
 {title:'BOZP, kvalita a předání',theory:4,practice:0,total:4},
 {title:'Odborná lesnická angličtina',theory:18,practice:6,total:24},
 {title:'Komunikace a profesní dovednosti · IVP',theory:18,practice:6,total:24},
 {title:'Souhrnné ověření a závěrečný rozhovor',theory:0,practice:12,total:12}
] as const;
