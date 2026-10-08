/** Licensed photographs provide context. They are not proof of a correct forestry procedure. */
export const forestScenes = {
  "welcome": "Vstup do akademie",
  "K01": "Příprava vybavení pro křovinořez",
  "home": "Společné učení o mladém lese",
  "journey": "Cesta učením",
  "team": "Skupina s instruktorem",
  "portfolio": "Lesnický zápisník",
  "practice": "Příprava na společnou praxi",
  "support": "Rozhovor a pomoc",
  "content": "Příprava výukových materiálů",
  "overview": "Přehled akademie",
  "questions": "Vyjasnění otevřených rozhodnutí",
  "schedule": "Les v průběhu roku",
  "settings": "Zázemí správy akademie",
  "guide": "Průvodce učením",
  "shared": "Sdílení zápisníku",
  "offline": "Příprava z uloženého průvodce",
  "M01": "Orientace a zadání",
  "M02": "Obnova lesa",
  "M03": "Péče o kultury",
  "M04": "Mladý porost",
  "M05": "Plánování v porostu",
  "M06": "Klest na okraji cesty",
  "M07": "Uložené vybavení",
  "P01": "Pozorování stromů",
  "P02": "Obnova v lesní mezeře",
  "P03": "Chráněný sadební materiál",
  "P04": "Učení na modelu",
  "P05": "Světlo pro mladý strom",
  "P06": "Pozorování ochrany stromu",
  "R01": "Rozhovor o růstu porostu",
  "R02": "Porovnání mladých stromů",
  "R03": "Dohoda před prací",
  "R04": "Kontrola a předání porostu",
  "D01": "Vyjasnění místa práce",
  "D02": "Kontrola záznamu",
  "D03": "Srozumitelné hlášení",
  "D04": "Ověření porozumění",
  "D05": "Zastavení a konzultace",
  "D06": "Předání kolegovi"
} as const;
export type ForestScene = keyof typeof forestScenes;
const photoForScene:Record<string,string>={
 welcome:'canopy',home:'canopy',journey:'regeneration',team:'canopy',portfolio:'timber',practice:'regeneration',support:'forest-light',content:'nursery',overview:'canopy',questions:'forest-light',schedule:'winter',settings:'timber',guide:'canopy',shared:'forest-light',offline:'winter',
 M01:'canopy',M02:'nursery',M03:'fence',M04:'regeneration',M05:'canopy',M06:'timber',M07:'timber',K01:'timber',
 P01:'regeneration',P02:'regeneration',P03:'nursery',P04:'nursery',P05:'regeneration',P06:'fence',R01:'regeneration',R02:'regeneration',R03:'canopy',R04:'regeneration',D01:'canopy',D02:'timber',D03:'forest-light',D04:'forest-light',D05:'winter',D06:'timber'
};
export function ForestArt({scene,placement='heading'}:{scene:string;placement?:'heading'|'home'|'aside'|'entry'|'colophon'}){
 const photo=photoForScene[scene];if(!photo)return null;
 return <span className={`forest-art forest-art--${placement}`} data-forest-scene={scene} data-real-photo={photo} aria-hidden="true"><img src={`./photos/${photo}.jpg`} alt="" width="1400" height="933" loading={placement==='aside'||placement==='colophon'?'lazy':'eager'} decoding="async" draggable={false}/></span>;
}
