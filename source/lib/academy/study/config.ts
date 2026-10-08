import programmePracticeCards from './programme-practice-cards.json';
import additionalBlocks from './additional-blocks.json';
export {subjects} from './program';
export const studyVersion='2026-10-08-predmety-v3';
export const studyBlocks=[
 {id:'Z',number:'01',title:'Dřeviny a pracovní zadání',subtitle:'Dřeviny, pracovní pokyn a společná řeč',scene:'M01',icon:'compass',checkpoint:'D01',output:'Převezmu zadání a vysvětlím, co udělám.'},
 {id:'O',number:'02',title:'Obnova lesa',subtitle:'Obnova, sazenice a kvalitní výsadba',scene:'M02',icon:'sprout',checkpoint:'P04',output:'Poznám chyby výsadby a sestavím kontrolní kartu.'},
 {id:'P',number:'03',title:'Ochrana lesních kultur',subtitle:'Buřeň, ochrana, oplocenky a půda',scene:'M03',icon:'shield',checkpoint:'P06',output:'Zkontroluji ochranu a popíšu potřebnou nápravu.'},
 {id:'R',number:'04',title:'Výchova mladých porostů',subtitle:'Koruny, výběr, směs a kontrola zásahu',scene:'M04',icon:'trees',checkpoint:'R04',output:'Porovnám výsledek s konkrétním zadáním.'},
 {id:'K',number:'05',title:'Křovinořez a pracovní prostředky',subtitle:'Stroj, vybavení, prostor a péče',scene:'M07',icon:'tool',checkpoint:'K01',output:'Připravím plán kontroly stroje a pracoviště.'},
 {id:'S',number:'06',title:'Bezpečnost, kvalita a odpovědnost',subtitle:'Riziko, pomoc, kvalita a předání práce',scene:'D06',icon:'team',checkpoint:'D06',output:'Věcně předám výsledek, odchylku a další krok.'}
].map(b=>({...b,subject:'forestry'})).concat(additionalBlocks);
export const practiceCards=programmePracticeCards;
