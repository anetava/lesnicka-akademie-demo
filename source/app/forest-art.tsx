/** Atmospheric storybook scenes are decorative, never a species or procedure reference. */
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
  "P01": "Pozorování stromků",
  "P02": "Obnova v lesní mezeře",
  "P03": "Chráněný sadební materiál",
  "P04": "Učení na modelu",
  "P05": "Světlo pro mladý stromek",
  "P06": "Pozorování ochrany stromku",
  "R01": "Rozhovor o růstu porostu",
  "R02": "Porovnání mladých stromů",
  "R03": "Domluva před prací",
  "R04": "Kontrola a předání porostu",
  "D01": "Vyjasnění místa práce",
  "D02": "Kontrola záznamu",
  "D03": "Srozumitelné hlášení",
  "D04": "Ověření porozumění",
  "D05": "Zastavení a konzultace",
  "D06": "Předání kolegovi"
} as const;
export type ForestScene = keyof typeof forestScenes;
export function ForestArt({scene, placement='heading'}: {scene: string; placement?: 'heading' | 'home' | 'aside' | 'entry' | 'colophon'}) {
  if (!Object.prototype.hasOwnProperty.call(forestScenes, scene)) return null;
  return <span className={`forest-art forest-art--${placement}`} data-forest-scene={scene} aria-hidden="true"><img src={`/lesnicka-akademie-demo/storybook/${scene==='K01'?'M07':scene}.webp`} alt="" width="768" height="512" loading={placement==='aside'||placement==='colophon'?'lazy':'eager'} decoding="async" draggable={false}/></span>;
}
