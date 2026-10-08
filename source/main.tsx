import React from 'react';
import {createRoot} from 'react-dom/client';
import Academy from './app/academy';
import {installPresentation} from './lib/presentation';
import './app/globals.css';
import './app/academy-classic.css';
import './app/forest-art.css';
import './app/study-academy.css';
import './presentation.css';
function Demo(){return <><div className="presentation-notice"><strong>PREZENTAČNÍ DEMO</strong><span>Vyzkoušej si všechny role. Ukázkové údaje se ukládají pouze v tomto prohlížeči.</span><details><summary>Jak ukázku předvést</summary><p>1. Otevři účastníka A01 a vyber lekci nebo misi D01.<br/>2. Odešli úkol. Přes „Změnit pohled“ otevři instruktora I01 a napiš hodnocení.<br/>3. Vrať se do A01, doplň opravu a otevři portfolio. Pohled IVP ukazuje souhrn.</p><p>Každý návštěvník má vlastní ukázku. Přepínání rolí není zabezpečené přihlášení. Nepoužívej skutečné osobní údaje ani fotografie lidí. Toto není schválený program LČR ani osvědčení způsobilosti.</p></details></div><Academy/></>}
installPresentation().then(()=>createRoot(document.getElementById('root')!).render(<Demo/>)).catch(()=>{document.getElementById('root')!.innerHTML='<main style="padding:3rem;max-width:50rem;margin:auto"><h1>Ukázku se nepodařilo otevřít</h1><p>Zkontroluj připojení a povol ukládání dat webu v běžném okně prohlížeče. Potom stránku obnov.</p></main>'});
